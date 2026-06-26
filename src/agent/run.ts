/**
 * Realm of Nexus / VERDAX — Turn orchestrator.
 *
 * Ties the loop together provider-agnostically:
 *   buildPromptContext → client.generateTurn → validate (repair on failure) →
 *   applyVerdaxTurn (locked STATE_UPDATE_ORDER).
 *
 * The model is reached only through the `VerdaxClient` interface, so the whole
 * orchestrator is testable offline with `FakeVerdaxClient`. Malformed model
 * output is re-asked up to `max_repair_attempts` times and never mutates state.
 */
import { buildPromptContext } from "../engine/context.js";
import { applyVerdaxTurn, type TurnApplication } from "../engine/turn.js";
import { validateVerdaxResponse } from "../validate.js";
import type { StateStore } from "../engine/store.js";
import type { VerdaxClient } from "./client.js";
import { buildVerdaxSystemPrompt } from "./prompt.js";

export interface RunTurnInput {
  campaign_id: string;
  character_id: string;
  turn_number: number;
  player_input: string;
  /** Defaults to the campaign's current_region_id (see buildPromptContext). */
  location_id?: string;
  domain?: string;
  created_at?: string;
  turn_log_id?: string;
}

export interface RunTurnOptions {
  /** Re-asks after a validation failure. Default 1 (so up to 2 attempts total). */
  max_repair_attempts?: number;
  recent_turn_limit?: number;
}

export type RunTurnResult =
  | { ok: false; stage: "context"; missing: string[] }
  | { ok: false; stage: "generation"; issues: string[]; attempts: number }
  | {
      ok: true;
      application: Extract<TurnApplication, { ok: true }>;
      attempts: number;
      raw: unknown;
    };

export async function runTurn(
  store: StateStore,
  client: VerdaxClient,
  input: RunTurnInput,
  options: RunTurnOptions = {}
): Promise<RunTurnResult> {
  // ── Build the scene-relevant context slice ─────────────────────────────
  const ctx = buildPromptContext(store, {
    campaign_id: input.campaign_id,
    character_id: input.character_id,
    location_id: input.location_id,
    domain: input.domain,
    recent_turn_limit: options.recent_turn_limit,
  });
  if (!ctx.ok) return { ok: false, stage: "context", missing: ctx.missing };

  const system = buildVerdaxSystemPrompt();
  const maxAttempts = 1 + (options.max_repair_attempts ?? 1);

  // ── Generate, validating and repairing on failure ─────────────────────
  let validRaw: unknown;
  let lastIssues: string[] = [];
  let repair: { previous: unknown; issues: string[] } | undefined;
  let attempts = 0;

  for (let i = 0; i < maxAttempts; i++) {
    attempts++;
    const raw = await client.generateTurn({
      system,
      context: ctx.context,
      player_input: input.player_input,
      repair,
    });
    const validation = validateVerdaxResponse(raw);
    if (validation.ok) {
      validRaw = raw;
      break;
    }
    lastIssues = validation.issues;
    repair = { previous: raw, issues: validation.issues };
  }

  if (validRaw === undefined) {
    return { ok: false, stage: "generation", issues: lastIssues, attempts };
  }

  // ── Apply via the locked pipeline ─────────────────────────────────────
  const application = applyVerdaxTurn(
    store,
    {
      campaign_id: input.campaign_id,
      character_id: input.character_id,
      turn_number: input.turn_number,
      player_input: input.player_input,
      created_at: input.created_at,
      turn_log_id: input.turn_log_id,
    },
    validRaw
  );

  // Defensive: validated output should always apply, but never assume.
  if (!application.ok) {
    return { ok: false, stage: "generation", issues: application.issues, attempts };
  }

  return { ok: true, application, attempts, raw: validRaw };
}
