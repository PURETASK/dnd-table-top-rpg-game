import { test } from "node:test";
import assert from "node:assert/strict";

import {
  InMemoryStateStore,
  applyVerdaxTurn,
  resolveOp,
  clamp,
  STATE_UPDATE_ORDER,
  type VerdaxTurnResponse,
  type WorldEvent,
} from "../src/index.js";

function baseResponse(
  overrides: Partial<VerdaxTurnResponse> = {}
): VerdaxTurnResponse {
  return {
    narrative: "The rootwell stirs.",
    choices: [{ id: "c1", label: "Cleanse it", risk_hint: "high" }],
    decision_analysis: {
      surface_action: "cleanse",
      actual_method: "sap weaving",
      inferred_intent: "heal the wound",
      action_type: "forbidden_magic",
      public_visibility: "small_group",
      domain_virtues_aligned: [],
      domain_virtues_violated: [],
      virtue_distortions_triggered: [],
      who_benefits_immediately: [],
      who_pays_immediately: [],
      who_benefits_later: [],
      who_pays_later: [],
      witness_interpretations: [],
      keeper_benefit: "minor",
      consequence_depth_required: 3,
    },
    mechanical_consequences: {},
    new_world_events: [],
    new_or_updated_consequence_chains: [],
    new_or_updated_rumors: [],
    player_facing_consequence_panel: [],
    expanded_why_this_happened: "",
    memory_summary: "",
    ...overrides,
  };
}

function worldEvent(id: string): WorldEvent {
  return {
    id,
    campaign_id: "camp1",
    event_type: "secret_magic",
    event_title: "Soulbinding at Thornveil",
    factual_summary: "The player bound a soul to save a child.",
    public_interpretation: "A mercy.",
    hidden_interpretation: "A soul-scar.",
    actor_ids: ["pc1"],
    target_ids: [],
    witness_ids: [],
    witness_faction_ids: [],
    location_id: "thornveil",
    domain_context: "Verdance",
    virtues_invoked: [],
    virtues_distorted: [],
    sins_triggered: [],
    void_involved: false,
    keeper_advantage_delta: 1,
    soul_flow_delta: -2,
    immediate_effects: {},
    consequence_chain_ids: [],
    rumor_ids_created: [],
    pressure_clock_ids_modified: [],
    permanence: "moderate",
    visibility_to_player: "partial",
  };
}

function seededStore(): InMemoryStateStore {
  const store = new InMemoryStateStore();
  store.put("character", "pc1", { id: "pc1", soul_integrity: 50, void_resonance: 4 });
  store.put("npc", "maera", { id: "maera", trust: 0, fear: 0 });
  store.put("domain_tracking", "Verdance", { domain: "Verdance", civilian_morale: 96, soul_flow_integrity: 64 });
  store.put("campaign_metaphysics", "camp1", { campaign_id: "camp1", keeper_prison_pressure: 30 });
  return store;
}

test("resolveOp: bare number is a clamped delta; ops behave correctly", () => {
  assert.equal(resolveOp(96, 10), 100); // clamped
  assert.equal(resolveOp(50, { delta: -8 }), 42);
  assert.equal(resolveOp(0, { deltaRaw: 250 }), 250); // unclamped
  assert.deepEqual(resolveOp(5, { set: "x" }), "x");
  assert.equal(clamp(150), 100);
});

test("applyVerdaxTurn walks the exact locked STATE_UPDATE_ORDER", () => {
  const store = seededStore();
  const res = applyVerdaxTurn(
    store,
    { campaign_id: "camp1", character_id: "pc1", turn_number: 1, player_input: "cleanse the rootwell" },
    baseResponse()
  );
  assert.equal(res.ok, true);
  if (res.ok) assert.deepEqual(res.steps_executed, [...STATE_UPDATE_ORDER]);
});

test("applyVerdaxTurn applies clamped deltas across entity kinds", () => {
  const store = seededStore();
  const res = applyVerdaxTurn(
    store,
    { campaign_id: "camp1", character_id: "pc1", turn_number: 2, player_input: "..." },
    baseResponse({
      mechanical_consequences: {
        character: { soul_integrity: { delta: -8 }, void_resonance: 8 },
        npcs: { maera: { trust: { deltaRaw: 8 }, fear: { deltaRaw: 12 } } },
        domain_states: { Verdance: { civilian_morale: 10, soul_flow_integrity: -6 } },
        keeper: { keeper_prison_pressure: 1 },
      },
      new_world_events: [worldEvent("ev1")],
    })
  );

  assert.equal(res.ok, true);
  assert.equal(store.get("character", "pc1")!.soul_integrity, 42);
  assert.equal(store.get("character", "pc1")!.void_resonance, 12);
  assert.equal(store.get("npc", "maera")!.trust, 8);
  assert.equal(store.get("npc", "maera")!.fear, 12);
  // 96 + 10 clamps to 100
  assert.equal(store.get("domain_tracking", "Verdance")!.civilian_morale, 100);
  assert.equal(store.get("domain_tracking", "Verdance")!.soul_flow_integrity, 58);
  assert.equal(store.get("campaign_metaphysics", "camp1")!.keeper_prison_pressure, 31);

  // World event and turn log persisted.
  assert.ok(store.has("world_event", "ev1"));
  assert.ok(store.has("turn_log", "camp1:pc1:turn:2"));
  if (res.ok) assert.deepEqual(res.world_event_ids, ["ev1"]);
});

test("applyVerdaxTurn warns (not throws) on a delta to a missing entity", () => {
  const store = seededStore();
  const res = applyVerdaxTurn(
    store,
    { campaign_id: "camp1", character_id: "pc1", turn_number: 3, player_input: "..." },
    baseResponse({ mechanical_consequences: { factions: { ghost_faction: { trust: 5 } } } })
  );
  assert.equal(res.ok, true);
  if (res.ok) {
    assert.equal(res.warnings.length, 1);
    assert.match(res.warnings[0]!, /ghost_faction.*not found/);
  }
});

test("applyVerdaxTurn applies valid sibling ops and warns per malformed op", () => {
  const store = seededStore();
  const res = applyVerdaxTurn(
    store,
    { campaign_id: "camp1", character_id: "pc1", turn_number: 5, player_input: "..." },
    baseResponse({
      mechanical_consequences: {
        character: { soul_integrity: { delta: -4 }, bogus: { invalid_op: 5 } },
      },
    })
  );
  assert.equal(res.ok, true);
  if (!res.ok) return;
  // The good op applied; the malformed one was skipped (not state-corrupting).
  assert.equal(store.get("character", "pc1")!.soul_integrity, 46);
  assert.equal(res.warnings.length, 1);
  assert.match(res.warnings[0]!, /field "bogus" has a malformed change op/);
});

test("applyVerdaxTurn rejects invalid model output before any mutation", () => {
  const store = seededStore();
  const before = store.get("character", "pc1")!.soul_integrity;
  const res = applyVerdaxTurn(
    store,
    { campaign_id: "camp1", character_id: "pc1", turn_number: 4, player_input: "..." },
    { narrative: 123 } // malformed
  );
  assert.equal(res.ok, false);
  assert.equal(store.get("character", "pc1")!.soul_integrity, before); // untouched
  assert.equal(store.has("turn_log", "camp1:pc1:turn:4"), false);
});
