import { test } from "node:test";
import assert from "node:assert/strict";

import { InMemoryStateStore, buildPromptContext } from "../src/index.js";

function sceneStore(): InMemoryStateStore {
  const s = new InMemoryStateStore();
  s.put("campaign", "camp1", { id: "camp1", current_region_id: "thornveil" });
  s.put("campaign_metaphysics", "camp1", {
    campaign_id: "camp1",
    keeper_prison_pressure: 30,
    global_void_parasitism: 18,
  });
  s.put("character", "pc1", { id: "pc1", inventory_ids: ["relic_a"], equipped_item_ids: [] });
  s.put("location", "thornveil", {
    id: "thornveil",
    domain: "Verdance",
    controlling_faction_id: "rootwardens",
    contested_by_faction_ids: ["hollow_pact"],
    active_rumor_ids: ["rumor1"],
    active_pressure_clock_ids: ["clock_rootwell"],
  });
  s.put("location", "elsewhere", { id: "elsewhere", domain: "Verdance" });
  s.put("domain_tracking", "Verdance", { domain: "Verdance", civilian_morale: 50 });
  s.put("domain_virtue_state", "Verdance", { domain: "Verdance" });
  s.put("domain_virtue_state", "Radiance", { domain: "Radiance" }); // should be excluded

  // NPCs: one here, one elsewhere
  s.put("npc", "maera", { id: "maera", location_id: "thornveil", faction_ids: ["sap_commons"] });
  s.put("npc", "faraway", { id: "faraway", location_id: "elsewhere", faction_ids: ["x"] });

  // Factions
  s.put("faction", "rootwardens", { id: "rootwardens" });
  s.put("faction", "hollow_pact", { id: "hollow_pact" });
  s.put("faction", "sap_commons", { id: "sap_commons" });
  s.put("faction", "unrelated", { id: "unrelated" });

  // Relationships
  s.put("relationship", "rel1", { id: "rel1", source_id: "pc1", target_id: "maera" });
  s.put("relationship", "rel2", { id: "rel2", source_id: "faraway", target_id: "x" }); // excluded

  // Quests
  s.put("quest", "q1", { id: "q1", status: "active", location_ids: ["thornveil"], npc_ids: [], faction_ids: [] });
  s.put("quest", "q2", { id: "q2", status: "completed", location_ids: ["thornveil"] }); // excluded

  // Rumors
  s.put("rumor", "rumor1", { id: "rumor1", status: "spreading", current_location_ids: ["thornveil"] });
  s.put("rumor", "rumor_dead", { id: "rumor_dead", status: "dead", current_location_ids: ["thornveil"] }); // excluded

  // Clocks: location clock + a global keeper clock; one unrelated
  s.put("pressure_clock", "clock_rootwell", { id: "clock_rootwell", is_active: true, clock_type: "corruption" });
  s.put("pressure_clock", "clock_keeper", { id: "clock_keeper", is_active: true, clock_type: "keeper_pressure" });
  s.put("pressure_clock", "clock_other", { id: "clock_other", is_active: true, clock_type: "threat" }); // excluded

  // Warfront in domain
  s.put("warfront", "wf1", { id: "wf1", domains_involved: ["Verdance", "Abyss"] });

  // Soul-flow wound at location
  s.put("soul_flow_wound", "wound1", { id: "wound1", active: true, location_id: "thornveil", domain: "Verdance" });

  // Magic systems
  s.put("magic_system", "sap_weaving", { id: "sap_weaving", domain: "Verdance" });
  s.put("magic_system", "pyromancy", { id: "pyromancy", domain: "Radiance" }); // excluded

  // Relics
  s.put("relic", "relic_a", { id: "relic_a" }); // held via inventory
  s.put("relic", "relic_b", { id: "relic_b", current_owner_id: "someone_else" }); // excluded

  // Turn logs
  for (let n = 1; n <= 10; n++) {
    s.put("turn_log", `t${n}`, { id: `t${n}`, campaign_id: "camp1", turn_number: n, memory_summary: `m${n}` });
  }
  return s;
}

test("buildPromptContext selects only the scene-relevant slice", () => {
  const res = buildPromptContext(sceneStore(), { campaign_id: "camp1", character_id: "pc1" });
  assert.equal(res.ok, true);
  if (!res.ok) return;

  const c = res.context;
  assert.equal((c.current_location as { id: string }).id, "thornveil");
  assert.equal((c.current_domain_state as { domain: string }).domain, "Verdance");

  // NPCs: only the one at the location
  assert.deepEqual(c.active_npcs.map((n) => (n as { id: string }).id), ["maera"]);

  // Factions: controlling + contested + active NPC's faction; not "unrelated"
  const factionIds = c.active_factions.map((f) => (f as { id: string }).id).sort();
  assert.deepEqual(factionIds, ["hollow_pact", "rootwardens", "sap_commons"]);

  // Relationships: only those touching pc1 or active NPCs
  assert.deepEqual(c.active_relationships.map((r) => (r as { id: string }).id), ["rel1"]);

  // Quests: active + at location only
  assert.deepEqual(c.active_quests.map((q) => (q as { id: string }).id), ["q1"]);

  // Rumors: live + here; not the dead one
  assert.deepEqual(c.active_rumors.map((r) => (r as { id: string }).id), ["rumor1"]);

  // Clocks: location clock + global keeper clock; not the unrelated one
  assert.deepEqual(
    c.active_pressure_clocks.map((x) => (x as { id: string }).id).sort(),
    ["clock_keeper", "clock_rootwell"]
  );

  // Domain virtue states: only relevant domains (Verdance + warfront Abyss has none seeded)
  assert.deepEqual(c.relevant_domain_virtue_states.map((v) => (v as { domain: string }).domain), ["Verdance"]);

  // Magic systems for the domain only
  assert.deepEqual(c.relevant_magic_systems.map((m) => (m as { id: string }).id), ["sap_weaving"]);

  // Relics held by the character only
  assert.deepEqual(c.relevant_relics.map((r) => (r as { id: string }).id), ["relic_a"]);

  // Warfront + wound present
  assert.equal(c.active_warfronts.length, 1);
  assert.equal(c.active_soul_flow_wounds.length, 1);

  // Last 8 turn summaries, chronological
  assert.equal(c.recent_turn_summaries.length, 8);
  assert.match(c.recent_turn_summaries[0]!, /Turn 3:/);
  assert.match(c.recent_turn_summaries[7]!, /Turn 10:/);

  // Derived flags
  assert.equal((c.relevant_world_flags as { keeper_pressure_band: string }).keeper_pressure_band, "weak");
});

test("buildPromptContext reports missing required singletons", () => {
  const s = new InMemoryStateStore();
  s.put("campaign", "camp1", { id: "camp1", current_region_id: "nowhere" });
  const res = buildPromptContext(s, { campaign_id: "camp1", character_id: "pc1" });
  assert.equal(res.ok, false);
  if (!res.ok) {
    assert.ok(res.missing.includes("character"));
    assert.ok(res.missing.includes("campaign_metaphysics"));
    assert.ok(res.missing.some((m) => m.startsWith("location:")));
  }
});
