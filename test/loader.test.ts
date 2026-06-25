import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";

import {
  InMemoryStateStore,
  validateDomainBible,
  seedDomainFromBible,
  bootstrapCampaign,
  buildPromptContext,
  applyVerdaxTurn,
  STATE_UPDATE_ORDER,
  slug,
  // Zod schemas (runtime) used to prove seeded records are schema-valid:
  CampaignState,
  CampaignMetaphysics,
  CharacterState,
  DomainTrackingState,
  DomainVirtueState,
  FactionState,
  LocationState,
  MagicSystemState,
  type VerdaxTurnResponse,
} from "../src/index.js";

function loadBible(name: string) {
  const raw = JSON.parse(readFileSync(join(process.cwd(), "domain-lore", name), "utf8"));
  const res = validateDomainBible(raw);
  assert.equal(res.ok, true);
  if (!res.ok) throw new Error("bible failed validation");
  return res.data;
}

test("seedDomainFromBible produces schema-valid mutable state", () => {
  const store = new InMemoryStateStore();
  const bible = loadBible("verdance.json");
  const seed = seedDomainFromBible(store, "camp1", bible);

  assert.equal(seed.domain, "Verdance");
  assert.equal(seed.faction_ids.length, bible.faction_index.factions.length); // 6
  assert.equal(seed.location_ids.length, bible.major_locations.length);
  assert.equal(seed.magic_system_ids.length, bible.magic_systems.length);

  // Every seeded record validates against its Zod schema.
  assert.doesNotThrow(() => DomainTrackingState.parse(store.get("domain_tracking", "Verdance")));
  assert.doesNotThrow(() => DomainVirtueState.parse(store.get("domain_virtue_state", "Verdance")));
  assert.doesNotThrow(() => FactionState.parse(store.get("faction", seed.faction_ids[0]!)));
  assert.doesNotThrow(() => LocationState.parse(store.get("location", seed.location_ids[0]!)));
  assert.doesNotThrow(() => MagicSystemState.parse(store.get("magic_system", seed.magic_system_ids[0]!)));

  // The domain-stone numbers flowed through.
  const dt = store.get("domain_tracking", "Verdance")!;
  assert.equal(dt.domain_stone_stability, bible.domain_stone.current_stability);
});

test("bootstrapCampaign produces schema-valid campaign/character", () => {
  const store = new InMemoryStateStore();
  bootstrapCampaign(store, {
    campaign_id: "camp1",
    title: "The Thornveil Wound",
    starting_domain: "Verdance",
    current_region_id: "the_heartroot_grove",
    character: { id: "pc1", name: "Sael", ancestry: "human", class_name: "sap-weaver", background: "border healer" },
  });
  assert.doesNotThrow(() => CampaignState.parse(store.get("campaign", "camp1")));
  assert.doesNotThrow(() => CampaignMetaphysics.parse(store.get("campaign_metaphysics", "camp1")));
  assert.doesNotThrow(() => CharacterState.parse(store.get("character", "pc1")));
});

test("end-to-end offline loop: load → seed → bootstrap → context → apply", () => {
  const store = new InMemoryStateStore();
  const bible = loadBible("verdance.json");
  const seed = seedDomainFromBible(store, "camp1", bible);
  const region = slug(bible.major_locations[0]!.name);
  assert.ok(seed.location_ids.includes(region));

  bootstrapCampaign(store, {
    campaign_id: "camp1",
    title: "The Thornveil Wound",
    starting_domain: "Verdance",
    current_region_id: region,
    character: { id: "pc1", name: "Sael", ancestry: "human", class_name: "sap-weaver", background: "border healer" },
  });

  // Build the prompt context for the current scene.
  const ctx = buildPromptContext(store, { campaign_id: "camp1", character_id: "pc1" });
  assert.equal(ctx.ok, true);
  if (!ctx.ok) return;
  assert.equal((ctx.context.current_location as { id: string }).id, region);
  assert.equal((ctx.context.current_domain_state as { domain: string }).domain, "Verdance");
  assert.ok(ctx.counts.active_factions >= 1); // the controlling faction at least
  assert.ok(ctx.counts.relevant_magic_systems >= 1);

  // Apply a turn that touches the domain; the model step is simulated here.
  const response: VerdaxTurnResponse = {
    narrative: "You kneel by the rootwell and begin the cleansing.",
    choices: [{ id: "c1", label: "Pay the life-tithe", risk_hint: "high" }],
    decision_analysis: {
      surface_action: "cleanse the rootwell",
      actual_method: "sap weaving with a willing life-tithe",
      inferred_intent: "heal the wound without commanding it",
      action_type: "restoration",
      public_visibility: "small_group",
      domain_virtues_aligned: ["Restoration"],
      domain_virtues_violated: [],
      virtue_distortions_triggered: [],
      who_benefits_immediately: ["the refuge"],
      who_pays_immediately: ["the player"],
      who_benefits_later: [],
      who_pays_later: [],
      witness_interpretations: [],
      keeper_benefit: "none",
      consequence_depth_required: 3,
    },
    mechanical_consequences: {
      character: { soul_integrity: { delta: -4 } },
      domain_states: { Verdance: { civilian_morale: 4, soul_flow_integrity: 2 } },
    },
    new_world_events: [],
    new_or_updated_consequence_chains: [],
    new_or_updated_rumors: [],
    player_facing_consequence_panel: ["Soul integrity -4", "Verdance civilian morale +4"],
    expanded_why_this_happened: "You healed the wound at real cost, the way Verdance honors.",
    memory_summary: "Cleansed the rootwell at the cost of your own vitality.",
  };

  const before = store.get("domain_tracking", "Verdance")!.civilian_morale as number;
  const applied = applyVerdaxTurn(
    store,
    { campaign_id: "camp1", character_id: "pc1", turn_number: 1, player_input: "cleanse the rootwell" },
    response
  );

  assert.equal(applied.ok, true);
  if (!applied.ok) return;
  assert.deepEqual(applied.steps_executed, [...STATE_UPDATE_ORDER]);
  assert.equal(applied.warnings.length, 0);
  assert.equal(store.get("domain_tracking", "Verdance")!.civilian_morale, before + 4);
  assert.equal(store.get("character", "pc1")!.soul_integrity, 76); // 80 - 4
  assert.ok(store.has("turn_log", "camp1:turn:1"));
});
