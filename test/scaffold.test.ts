import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";

import {
  validateVerdaxResponse,
  validateDomainBible,
  allianceBand,
  betrayalRisk,
  scaleBand,
  deltaBand,
  STATE_UPDATE_ORDER,
  MVP_TRACKING_SET,
  type VerdaxTurnResponse,
} from "../src/index.js";

test("scaleBand maps the universal 0–100 bands (Chunk 3 §3)", () => {
  assert.equal(scaleBand(5), "absent");
  assert.equal(scaleBand(15), "critical");
  assert.equal(scaleBand(30), "weak");
  assert.equal(scaleBand(50), "contested");
  assert.equal(scaleBand(70), "functional");
  assert.equal(scaleBand(90), "dominant");
  assert.equal(scaleBand(100), "mythic");
});

test("deltaBand maps magnitudes (Chunk 3 §3 Delta Scale)", () => {
  assert.equal(deltaBand(-1), "subtle");
  assert.equal(deltaBand(3), "minor");
  assert.equal(deltaBand(25), "mythic");
});

test("allianceBand thresholds (Chunk 4 §20)", () => {
  assert.equal(allianceBand(85), "trusted_ally");
  assert.equal(allianceBand(60), "conditional_ally");
  assert.equal(allianceBand(40), "uneasy_partner");
  assert.equal(allianceBand(20), "tolerable_rival");
  assert.equal(allianceBand(5), "declared_enemy");
});

test("betrayalRisk subtracts loyalty-side inputs", () => {
  const risk = betrayalRisk({
    sacred_violation: 30,
    public_humiliation: 10,
    resource_theft: 0,
    leverage_against_npc: 0,
    faction_pressure: 0,
    fear: 0,
    resentment: 0,
    rumor_intensity: 0,
    trust: 25,
    debt: 0,
    affection: 0,
    shared_threat: 0,
  });
  assert.equal(risk, 15);
});

test("validateVerdaxResponse rejects malformed model output (Chunk 3 §37)", () => {
  const bad = validateVerdaxResponse({ narrative: 123 });
  assert.equal(bad.ok, false);
  if (!bad.ok) assert.ok(bad.issues.length > 0);
});

test("validateVerdaxResponse accepts a minimal valid turn", () => {
  const turn: VerdaxTurnResponse = {
    narrative: "You step into the ashfall.",
    choices: [{ id: "c1", label: "Hold the line", risk_hint: "moderate" }],
    decision_analysis: {
      surface_action: "advance",
      actual_method: "on foot",
      inferred_intent: "protect the wounded",
      action_type: "protection",
      public_visibility: "small_group",
      domain_virtues_aligned: ["Sacrifice"],
      domain_virtues_violated: [],
      virtue_distortions_triggered: [],
      who_benefits_immediately: ["wounded"],
      who_pays_immediately: ["player"],
      who_benefits_later: [],
      who_pays_later: [],
      witness_interpretations: [],
      keeper_benefit: "none",
      consequence_depth_required: 2,
    },
    mechanical_consequences: {},
    new_world_events: [],
    new_or_updated_consequence_chains: [],
    new_or_updated_rumors: [],
    player_facing_consequence_panel: ["HP -2"],
    expanded_why_this_happened: "You shielded the wounded at real cost.",
    memory_summary: "Held the line during the ashfall.",
  };
  const res = validateVerdaxResponse(turn);
  assert.equal(res.ok, true);
});

test("the domain-lore template conforms to DomainBible (Chunk 2)", () => {
  const raw = JSON.parse(
    readFileSync(join(process.cwd(), "domain-lore", "_template.json"), "utf8")
  );
  const res = validateDomainBible(raw);
  if (!res.ok) console.error(res.issues);
  assert.equal(res.ok, true);
});

test("locked invariants are present", () => {
  assert.equal(STATE_UPDATE_ORDER[0], "validate_verdax_json");
  assert.equal(STATE_UPDATE_ORDER.length, 18);
  assert.equal(MVP_TRACKING_SET.length, 14);
});
