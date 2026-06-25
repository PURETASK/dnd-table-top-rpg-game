/**
 * Realm of Nexus / VERDAX — Prompt context builder.
 *
 * Assembles a `VerdaxPromptContext` (Chunk 3 §31) from store state, selecting
 * only what is relevant to the current scene. Per the §31 design rule: "Do not
 * send everything every turn. Send what is relevant." The builder retrieves the
 * current location, the NPCs/factions/rumors/quests/clocks/wounds tied to it,
 * the relevant domain + magic state, and the last N turn summaries.
 *
 * Note: this context feeds VERDAX (the DM), so it intentionally includes hidden
 * state — visibility levels govern what VERDAX may reveal to the *player*
 * (Chunk 3 §4), not what the DM engine is allowed to know.
 */
import type { VerdaxPromptContext } from "../schemas/verdax.js";
import { scaleBand } from "../schemas/primitives.js";
import type { Record_, StateStore } from "./store.js";

export interface BuildContextOptions {
  campaign_id: string;
  character_id: string;
  /** Current scene location. Defaults to the campaign's `current_region_id`. */
  location_id?: string;
  /** Current domain. Defaults to the current location's `domain`. */
  domain?: string;
  /** How many recent turn summaries to include (Chunk 3 §28). Default 8. */
  recent_turn_limit?: number;
}

export interface ContextCounts {
  active_factions: number;
  active_npcs: number;
  active_relationships: number;
  active_quests: number;
  active_rumors: number;
  active_pressure_clocks: number;
  active_warfronts: number;
  active_soul_flow_wounds: number;
  relevant_magic_systems: number;
  relevant_relics: number;
  recent_turns: number;
}

export type BuildContextResult =
  | { ok: true; context: VerdaxPromptContext; counts: ContextCounts }
  | { ok: false; missing: string[] };

const id = (r: Record_): string => String(r["id"] ?? "");
const arr = (v: unknown): string[] => (Array.isArray(v) ? (v as string[]) : []);

function dedupeById(records: Record_[]): Record_[] {
  const seen = new Set<string>();
  const out: Record_[] = [];
  for (const r of records) {
    const key = id(r);
    if (key && !seen.has(key)) {
      seen.add(key);
      out.push(r);
    }
  }
  return out;
}

export function buildPromptContext(
  store: StateStore,
  opts: BuildContextOptions
): BuildContextResult {
  const limit = opts.recent_turn_limit ?? 8;

  const campaign = store.get("campaign", opts.campaign_id);
  const character = store.get("character", opts.character_id);
  const metaphysics = store.get("campaign_metaphysics", opts.campaign_id);

  const locationId = opts.location_id ?? (campaign?.["current_region_id"] as string | undefined);
  const location = locationId ? store.get("location", locationId) : undefined;
  const domain = opts.domain ?? (location?.["domain"] as string | undefined);

  const missing: string[] = [];
  if (!campaign) missing.push("campaign");
  if (!character) missing.push("character");
  if (!metaphysics) missing.push("campaign_metaphysics");
  if (!location) missing.push(`location:${locationId ?? "<none>"}`);
  if (!domain) missing.push("domain");
  if (missing.length || !location || !domain) return { ok: false, missing };

  // ── NPCs present at the scene ──────────────────────────────────────────
  const activeNpcs = store
    .list("npc")
    .filter((n) => n["location_id"] === locationId);
  const activeNpcIds = new Set(activeNpcs.map(id));

  // ── Factions: controlling/contesting the location + the active NPCs' ────
  const factionIds = new Set<string>([
    ...(location["controlling_faction_id"] ? [String(location["controlling_faction_id"])] : []),
    ...arr(location["contested_by_faction_ids"]),
    ...activeNpcs.flatMap((n) => arr(n["faction_ids"])),
  ]);
  const activeFactions = store.list("faction").filter((f) => factionIds.has(id(f)));

  // ── Relationships touching the player or an active NPC ─────────────────
  const activeRelationships = store.list("relationship").filter((r) => {
    const s = String(r["source_id"] ?? "");
    const t = String(r["target_id"] ?? "");
    return (
      s === opts.character_id ||
      t === opts.character_id ||
      activeNpcIds.has(s) ||
      activeNpcIds.has(t)
    );
  });

  // ── Quests: active ones tied to this scene (fall back to all active) ───
  const allActiveQuests = store.list("quest").filter((q) => q["status"] === "active");
  const sceneQuests = allActiveQuests.filter(
    (q) =>
      arr(q["location_ids"]).includes(locationId!) ||
      arr(q["npc_ids"]).some((n) => activeNpcIds.has(n)) ||
      arr(q["faction_ids"]).some((f) => factionIds.has(f))
  );
  const activeQuests = sceneQuests.length ? sceneQuests : allActiveQuests;

  // ── Rumors affecting the scene ─────────────────────────────────────────
  const locationRumorIds = new Set(arr(location["active_rumor_ids"]));
  const activeRumors = store.list("rumor").filter((r) => {
    const here = locationRumorIds.has(id(r)) || arr(r["current_location_ids"]).includes(locationId!);
    const spreadHere = (() => {
      const spread = r["spread"];
      return (
        spread &&
        typeof spread === "object" &&
        arr((spread as Record_)["current_location_ids"]).includes(locationId!)
      );
    })();
    const live = ["emerging", "spreading", "weaponized", "contested"].includes(String(r["status"]));
    return (here || spreadHere) && live;
  });

  // ── Clocks: tied to the location + global keeper/void clocks ───────────
  const locationClockIds = new Set(arr(location["active_pressure_clock_ids"]));
  const activeClocks = store.list("pressure_clock").filter((c) => {
    if (c["is_active"] === false) return false;
    const global = ["keeper_pressure", "void_parasitism"].includes(String(c["clock_type"]));
    return global || locationClockIds.has(id(c));
  });

  // ── Warfronts in this domain ───────────────────────────────────────────
  const activeWarfronts = store
    .list("warfront")
    .filter((w) => arr(w["domains_involved"]).includes(domain));
  const warfrontDomains = new Set(activeWarfronts.flatMap((w) => arr(w["domains_involved"])));

  // ── Soul-flow wounds at the location or in the domain ──────────────────
  const activeWounds = store.list("soul_flow_wound").filter(
    (w) =>
      w["active"] !== false &&
      (w["location_id"] === locationId || w["domain"] === domain)
  );

  // ── Magic systems for the domain; domain virtue states for relevant domains
  const relevantMagic = store.list("magic_system").filter((m) => m["domain"] === domain);
  const relevantDomains = new Set<string>([domain, ...warfrontDomains]);
  const domainVirtueStates = store
    .list("domain_virtue_state")
    .filter((v) => relevantDomains.has(String(v["domain"])));

  // ── Relics owned/held by the character ─────────────────────────────────
  const heldIds = new Set<string>([
    ...arr(character!["inventory_ids"]),
    ...arr(character!["equipped_item_ids"]),
  ]);
  const relevantRelics = store
    .list("relic")
    .filter((r) => r["current_owner_id"] === opts.character_id || heldIds.has(id(r)));

  // ── Recent turn summaries (last N, chronological) ──────────────────────
  const recentTurns = store
    .list("turn_log")
    .filter((t) => t["campaign_id"] === opts.campaign_id)
    .sort((a, b) => Number(a["turn_number"]) - Number(b["turn_number"]))
    .slice(-limit)
    .map((t) => {
      const head = `Turn ${t["turn_number"]}: ${t["memory_summary"] ?? ""}`.trim();
      const tail = t["updated_state_summary"] ? ` | ${t["updated_state_summary"]}` : "";
      return `${head}${tail}`;
    });

  // ── Derived world flags (cheap signals for VERDAX) ─────────────────────
  const worldFlags: Record<string, unknown> = {
    keeper_pressure_band: scaleBand(Number(metaphysics!["keeper_prison_pressure"] ?? 0)),
    void_parasitism_band: scaleBand(Number(metaphysics!["global_void_parasitism"] ?? 0)),
    active_warfront_count: activeWarfronts.length,
    active_soul_flow_wound_count: activeWounds.length,
  };

  const domainState = store.get("domain_tracking", domain);
  if (!domainState) return { ok: false, missing: [`domain_tracking:${domain}`] };

  const context = {
    campaign,
    campaign_metaphysics: metaphysics,
    character,
    current_domain_state: domainState,
    relevant_domain_virtue_states: domainVirtueStates,
    current_location: location,
    active_factions: dedupeById(activeFactions),
    active_npcs: dedupeById(activeNpcs),
    active_relationships: dedupeById(activeRelationships),
    active_quests: dedupeById(activeQuests),
    active_rumors: dedupeById(activeRumors),
    active_pressure_clocks: dedupeById(activeClocks),
    active_warfronts: dedupeById(activeWarfronts),
    active_soul_flow_wounds: dedupeById(activeWounds),
    relevant_magic_systems: dedupeById(relevantMagic),
    relevant_relics: dedupeById(relevantRelics),
    recent_turn_summaries: recentTurns,
    relevant_world_flags: worldFlags,
  } as unknown as VerdaxPromptContext;

  return {
    ok: true,
    context,
    counts: {
      active_factions: context.active_factions.length,
      active_npcs: context.active_npcs.length,
      active_relationships: context.active_relationships.length,
      active_quests: context.active_quests.length,
      active_rumors: context.active_rumors.length,
      active_pressure_clocks: context.active_pressure_clocks.length,
      active_warfronts: context.active_warfronts.length,
      active_soul_flow_wounds: context.active_soul_flow_wounds.length,
      relevant_magic_systems: context.relevant_magic_systems.length,
      relevant_relics: context.relevant_relics.length,
      recent_turns: context.recent_turn_summaries.length,
    },
  };
}
