/**
 * Realm of Nexus / VERDAX — Turn engine.
 *
 * `applyVerdaxTurn` is the boundary between a (model-produced) VERDAX response
 * and persisted campaign state. It:
 *   1. Validates the raw response — the first locked step; unvalidated model
 *      output never mutates state (Chunk 3 §37, Chunk 4 §38).
 *   2. Walks the exact locked STATE_UPDATE_ORDER (Chunk 3 §32): turn log →
 *      world events → character → NPCs → relationships → factions → locations →
 *      quests → rumors → clocks → warfronts → magic/relics → soul-flow →
 *      domain state → keeper/void → memory → player panel.
 *
 * Robustness: a delta aimed at an entity not in the store is skipped with a
 * recorded warning rather than throwing, so one bad reference cannot abort a turn.
 */
import { validateVerdaxResponse } from "../validate.js";
import { STATE_UPDATE_ORDER, type StateUpdateStep } from "../schemas/verdax.js";
import type { VerdaxTurnResponse } from "../schemas/verdax.js";
import type { EntityKind, StateStore } from "./store.js";
import {
  applyFieldChanges,
  isFieldChangeMap,
  type AppliedChange,
} from "./mutations.js";

export interface TurnInput {
  campaign_id: string;
  character_id: string;
  turn_number: number;
  player_input: string;
  /** ISO timestamp for the turn log; caller supplies the clock. Default "". */
  created_at?: string;
  /** Override the turn-log id. Default `${campaign_id}:turn:${turn_number}`. */
  turn_log_id?: string;
}

export interface ChangeRecord {
  step: StateUpdateStep;
  kind: EntityKind;
  id: string;
  changes: AppliedChange[];
}

export type TurnApplication =
  | {
      ok: true;
      turn_log_id: string;
      world_event_ids: string[];
      consequence_chain_ids: string[];
      rumor_ids: string[];
      applied_changes: ChangeRecord[];
      warnings: string[];
      steps_executed: StateUpdateStep[];
      player_facing_panel: string[];
      expanded_why: string;
      memory_summary: string;
    }
  | { ok: false; issues: string[] };

export function applyVerdaxTurn(
  store: StateStore,
  input: TurnInput,
  raw: unknown
): TurnApplication {
  const steps: StateUpdateStep[] = [];
  const applied: ChangeRecord[] = [];
  const warnings: string[] = [];

  // ── Step 1: validate (the boundary) ────────────────────────────────────
  steps.push("validate_verdax_json");
  const validation = validateVerdaxResponse(raw);
  if (!validation.ok) return { ok: false, issues: validation.issues };
  const res: VerdaxTurnResponse = validation.data;

  const turnLogId =
    input.turn_log_id ?? `${input.campaign_id}:turn:${input.turn_number}`;
  const worldEventIds = res.new_world_events.map((e) => e.id);
  const chainIds = res.new_or_updated_consequence_chains.map((c) => c.id);
  const rumorIds = res.new_or_updated_rumors.map((r) => r.id);

  /** Apply a flat field-change map to one record; skip+warn if absent. */
  const applyFlat = (
    step: StateUpdateStep,
    kind: EntityKind,
    id: string,
    bucket: unknown
  ): void => {
    if (bucket == null) return;
    if (!isFieldChangeMap(bucket)) {
      warnings.push(`${step}: ${kind} "${id}" change map is malformed; skipped.`);
      return;
    }
    const record = store.get(kind, id);
    if (!record) {
      warnings.push(`${step}: ${kind} "${id}" not found in store; skipped.`);
      return;
    }
    const changes = applyFieldChanges(record, bucket);
    store.put(kind, id, record);
    if (changes.length) applied.push({ step, kind, id, changes });
  };

  /** Apply an id-keyed bucket: { entityId: { field: op } }. */
  const applyById = (step: StateUpdateStep, kind: EntityKind, bucket: unknown): void => {
    if (bucket == null || typeof bucket !== "object") return;
    for (const [id, map] of Object.entries(bucket as Record<string, unknown>)) {
      applyFlat(step, kind, id, map);
    }
  };

  const mc = res.mechanical_consequences;
  const metaId = input.campaign_id;

  // ── Step 2: turn log ───────────────────────────────────────────────────
  steps.push("create_turn_log");
  store.put("turn_log", turnLogId, {
    id: turnLogId,
    campaign_id: input.campaign_id,
    character_id: input.character_id,
    turn_number: input.turn_number,
    player_input: input.player_input,
    verdax_narrative: res.narrative,
    choices_presented: res.choices.map((c) => c.label),
    skill_check_json: res.skill_check,
    decision_analysis_json: res.decision_analysis as Record<string, unknown>,
    consequences_json: mc as Record<string, unknown>,
    world_event_ids: worldEventIds,
    updated_state_summary: "",
    memory_summary: res.memory_summary,
    created_at: input.created_at ?? "",
  });

  // ── Step 3: world events (+ consequence chains, co-located) ────────────
  steps.push("create_world_events");
  for (const ev of res.new_world_events) store.put("world_event", ev.id, ev);
  for (const chain of res.new_or_updated_consequence_chains) {
    store.put("consequence_chain", chain.id, chain);
  }

  // ── Steps 4–16: apply mechanical consequences in locked order ──────────
  steps.push("apply_character_changes");
  applyFlat("apply_character_changes", "character", input.character_id, mc.character);

  steps.push("apply_npc_memory_changes");
  applyById("apply_npc_memory_changes", "npc", mc.npcs);

  steps.push("apply_relationship_changes");
  applyById("apply_relationship_changes", "relationship", mc.relationships);

  steps.push("apply_faction_changes");
  applyById("apply_faction_changes", "faction", mc.factions);

  steps.push("apply_location_changes");
  applyById("apply_location_changes", "location", mc.locations);

  steps.push("apply_quest_changes");
  applyById("apply_quest_changes", "quest", mc.quests);

  steps.push("apply_rumor_changes");
  for (const rumor of res.new_or_updated_rumors) store.put("rumor", rumor.id, rumor);
  applyById("apply_rumor_changes", "rumor", mc.rumors);

  steps.push("apply_pressure_clock_changes");
  applyById("apply_pressure_clock_changes", "pressure_clock", mc.pressure_clocks);

  steps.push("apply_warfront_changes");
  applyById("apply_warfront_changes", "warfront", mc.warfronts);

  steps.push("apply_magic_relic_changes");
  applyById("apply_magic_relic_changes", "magic_system", mc.magic_systems);
  applyById("apply_magic_relic_changes", "relic", mc.relics);

  steps.push("apply_soul_flow_wounds");
  applyFlat("apply_soul_flow_wounds", "campaign_metaphysics", metaId, mc.soul_flow);

  steps.push("apply_domain_virtue_and_domain_state_changes");
  applyById("apply_domain_virtue_and_domain_state_changes", "domain_tracking", mc.domain_states);

  steps.push("apply_keeper_void_changes");
  applyFlat("apply_keeper_void_changes", "campaign_metaphysics", metaId, mc.keeper);
  applyFlat("apply_keeper_void_changes", "campaign_metaphysics", metaId, mc.void);

  // ── Step 17: memory summary (backfill the turn log's state summary) ────
  steps.push("generate_memory_summary");
  const stateSummary =
    `${applied.length} change set(s) applied across ${
      new Set(applied.map((a) => a.kind)).size
    } entity kind(s); ` +
    `${worldEventIds.length} world event(s), ${rumorIds.length} rumor(s), ` +
    `${chainIds.length} consequence chain(s).`;
  const turnLog = store.get("turn_log", turnLogId);
  if (turnLog) {
    turnLog.updated_state_summary = stateSummary;
    store.put("turn_log", turnLogId, turnLog);
  }

  // ── Step 18: return the player-facing narrative & panel ────────────────
  steps.push("return_player_facing_narrative_and_panel");

  return {
    ok: true,
    turn_log_id: turnLogId,
    world_event_ids: worldEventIds,
    consequence_chain_ids: chainIds,
    rumor_ids: rumorIds,
    applied_changes: applied,
    warnings,
    steps_executed: steps,
    player_facing_panel: res.player_facing_consequence_panel,
    expanded_why: res.expanded_why_this_happened,
    memory_summary: res.memory_summary,
  };
}

export { STATE_UPDATE_ORDER };
