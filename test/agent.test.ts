import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";

import {
  InMemoryStateStore,
  validateDomainBible,
  seedDomainFromBible,
  bootstrapCampaign,
  slug,
  FakeVerdaxClient,
  runTurn,
  buildVerdaxSystemPrompt,
  type VerdaxTurnResponse,
} from "../src/index.js";

function setupStore() {
  const store = new InMemoryStateStore();
  const raw = JSON.parse(readFileSync(join(process.cwd(), "domain-lore", "verdance.json"), "utf8"));
  const bible = validateDomainBible(raw);
  if (!bible.ok) throw new Error("verdance bible invalid");
  const seed = seedDomainFromBible(store, "camp1", bible.data);
  const region = slug(bible.data.major_locations[0]!.name);
  bootstrapCampaign(store, {
    campaign_id: "camp1",
    title: "T",
    starting_domain: "Verdance",
    current_region_id: region,
    character: { id: "pc1", name: "Sael", ancestry: "human", class_name: "sap-weaver", background: "healer" },
  });
  return { store, seed };
}

function validResponse(): VerdaxTurnResponse {
  return {
    narrative: "You cleanse the rootwell at real cost.",
    choices: [{ id: "c1", label: "Pay the tithe", risk_hint: "high" }],
    decision_analysis: {
      surface_action: "cleanse",
      actual_method: "sap weaving",
      inferred_intent: "heal",
      action_type: "restoration",
      public_visibility: "small_group",
      domain_virtues_aligned: ["Restoration"],
      domain_virtues_violated: [],
      virtue_distortions_triggered: [],
      who_benefits_immediately: [],
      who_pays_immediately: [],
      who_benefits_later: [],
      who_pays_later: [],
      witness_interpretations: [],
      keeper_benefit: "none",
      consequence_depth_required: 3,
    },
    mechanical_consequences: { character: { soul_integrity: { delta: -4 } } },
    new_world_events: [],
    new_or_updated_consequence_chains: [],
    new_or_updated_rumors: [],
    player_facing_consequence_panel: ["Soul integrity -4"],
    expanded_why_this_happened: "Verdance honors cost-borne healing.",
    memory_summary: "Cleansed the rootwell.",
  };
}

test("buildVerdaxSystemPrompt encodes the locked rules", () => {
  const p = buildVerdaxSystemPrompt();
  assert.match(p, /VERDAX/);
  assert.match(p, /never clean power/i);
  assert.match(p, /VerdaxTurnResponse/);
  assert.match(p, /0–100/);
});

test("runTurn: happy path applies a valid response in one attempt", async () => {
  const { store } = setupStore();
  const client = new FakeVerdaxClient(validResponse());
  const res = await runTurn(store, client, {
    campaign_id: "camp1", character_id: "pc1", turn_number: 1, player_input: "cleanse it",
  });
  assert.equal(res.ok, true);
  if (!res.ok) return;
  assert.equal(res.attempts, 1);
  assert.equal(store.get("character", "pc1")!.soul_integrity, 76);
  assert.ok(store.has("turn_log", "camp1:turn:1"));
});

test("runTurn: repairs malformed output then applies", async () => {
  const { store } = setupStore();
  // First call invalid, second call valid — exercises the repair loop.
  const client = new FakeVerdaxClient([{ narrative: 123 }, validResponse()]);
  const res = await runTurn(store, client, {
    campaign_id: "camp1", character_id: "pc1", turn_number: 1, player_input: "cleanse it",
  });
  assert.equal(res.ok, true);
  if (!res.ok) return;
  assert.equal(res.attempts, 2);
  assert.equal(client.callCount, 2);
  // The repair call received the validation issues to fix.
  const second = client.received[1]!;
  assert.ok(second.repair);
  assert.ok(second.repair!.issues.length > 0);
});

test("runTurn: gives up after repairs and never mutates state", async () => {
  const { store } = setupStore();
  const before = store.get("character", "pc1")!.soul_integrity;
  const client = new FakeVerdaxClient({ narrative: 123 }); // always invalid
  const res = await runTurn(
    store, client,
    { campaign_id: "camp1", character_id: "pc1", turn_number: 1, player_input: "x" },
    { max_repair_attempts: 1 }
  );
  assert.equal(res.ok, false);
  if (res.ok) return;
  assert.equal(res.stage, "generation");
  assert.equal(res.attempts, 2);
  assert.equal(store.get("character", "pc1")!.soul_integrity, before);
  assert.equal(store.has("turn_log", "camp1:turn:1"), false);
});

test("runTurn: reports a context error when state is missing", async () => {
  const store = new InMemoryStateStore();
  const client = new FakeVerdaxClient(validResponse());
  const res = await runTurn(store, client, {
    campaign_id: "camp1", character_id: "pc1", turn_number: 1, player_input: "x",
  });
  assert.equal(res.ok, false);
  if (res.ok) return;
  assert.equal(res.stage, "context");
  assert.equal(client.callCount, 0); // never reached the model
});
