/**
 * Offline demo of the full VERDAX turn loop — no DB, no LLM.
 * Run: `npm run demo`
 *
 * load bible → seed state → bootstrap campaign → build prompt context →
 * (a hand-written stand-in for the model's response) → apply the turn.
 */
import { readFileSync } from "node:fs";
import { join } from "node:path";
import {
  InMemoryStateStore,
  validateDomainBible,
  seedDomainFromBible,
  bootstrapCampaign,
  buildPromptContext,
  applyVerdaxTurn,
  type VerdaxTurnResponse,
} from "../src/index.js";

const store = new InMemoryStateStore();

const raw = JSON.parse(readFileSync(join(process.cwd(), "domain-lore", "verdance.json"), "utf8"));
const bible = validateDomainBible(raw);
if (!bible.ok) {
  console.error("Bible invalid:", bible.issues);
  process.exit(1);
}

const seed = seedDomainFromBible(store, "camp1", bible.data);
const region = seed.location_ids[0]!;
bootstrapCampaign(store, {
  campaign_id: "camp1",
  title: "The Thornveil Wound",
  starting_domain: "Verdance",
  current_region_id: region,
  character: { id: "pc1", name: "Sael", ancestry: "human", class_name: "sap-weaver", background: "border healer" },
});

console.log(`Seeded ${seed.faction_ids.length} factions, ${seed.location_ids.length} locations, ${seed.magic_system_ids.length} magic systems for ${seed.domain}.`);

const ctx = buildPromptContext(store, { campaign_id: "camp1", character_id: "pc1" });
if (!ctx.ok) {
  console.error("Context missing:", ctx.missing);
  process.exit(1);
}
console.log("\nPrompt-context slice (counts):", ctx.counts);

// In a live system this object comes from the model; here it is hand-written.
const response: VerdaxTurnResponse = {
  narrative: "You kneel by the black rootwell and give of your own vitality to cleanse the wound.",
  choices: [
    { id: "c1", label: "Pay the full life-tithe", risk_hint: "high", likely_domain_alignment: "Verdance" },
    { id: "c2", label: "Call the Rootwardens for help", risk_hint: "moderate" },
  ],
  decision_analysis: {
    surface_action: "cleanse the rootwell",
    actual_method: "sap weaving with a willing life-tithe",
    inferred_intent: "heal the wound without commanding it",
    action_type: "restoration",
    public_visibility: "small_group",
    domain_virtues_aligned: ["Restoration", "Stewardship"],
    domain_virtues_violated: [],
    virtue_distortions_triggered: [],
    who_benefits_immediately: ["Thornveil Refuge"],
    who_pays_immediately: ["the player"],
    who_benefits_later: ["the weave"],
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
  player_facing_consequence_panel: ["Soul integrity -4", "Verdance civilian morale +4", "Verdance soul-flow +2"],
  expanded_why_this_happened: "Verdance honors a wound healed at real cost over one merely commanded.",
  memory_summary: "Cleansed the Thornveil rootwell at the cost of your own vitality.",
};

const applied = applyVerdaxTurn(
  store,
  { campaign_id: "camp1", character_id: "pc1", turn_number: 1, player_input: "I kneel and cleanse the rootwell, paying the tithe myself." },
  response
);

if (!applied.ok) {
  console.error("Turn rejected:", applied.issues);
  process.exit(1);
}

console.log("\n=== VERDAX ===\n" + response.narrative);
console.log("\nConsequence panel:");
for (const line of applied.player_facing_panel) console.log("  • " + line);
console.log("\nWhy: " + applied.expanded_why);
console.log("\nApplied changes:");
for (const ch of applied.applied_changes) {
  for (const c of ch.changes) {
    console.log(`  [${ch.kind} ${ch.id}] ${c.path}: ${JSON.stringify(c.from)} → ${JSON.stringify(c.to)}`);
  }
}
console.log(`\nSteps executed (locked order): ${applied.steps_executed.length}/18`);
console.log(applied.warnings.length ? `Warnings: ${applied.warnings.join("; ")}` : "No warnings.");
