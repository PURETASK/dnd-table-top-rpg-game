# Chunk 2 — Domain Bible Template v1.0

- **Lead:** DOMAIN-ARCHIVIST · **QA:** CANON-WARDEN · **Implementation:** SCHEMA-FORGE
- **Status:** Locked v1.0

The required structure for **every** Domain Bible. A domain is **not** a visual
theme ("fire land," "forest land"). A domain is *a metaphysical civilization with
its own Stone, magic, economy, military doctrine, class structure, religious
authority, internal faction conflict, external war strategy, cultural virtues,
corruption vulnerabilities, NPC roles, rumor ecology, and VERDAX tracking state.*

> **Quality rule:** every domain must feel like a civilization, not a theme.
> *Bad:* "Radiance is fire people." *Good:* "Radiance is a sacred-fire military
> civilization whose economy, religion, legitimacy, and war doctrine all depend
> on the Eternal Flame, Phoenix rites, Sunstone industry, and sacrificial culture."

## Master structure (every domain bible has these sections)

1. Domain Identity Snapshot
2. Hard Canon
3. Metaphysical Role
4. Domain Stone / Core Source
5. Soul-Flow Relationship
6. True Virtues
7. Corrupted Virtues
8. Keeper Exploit Pattern
9. Void Temptation Pattern
10. Magic System
11. Magic Costs
12. Government and Authority
13. Class Structure
14. Economy and Resources
15. Military Doctrine
16. Warfront Behavior
17. Major Locations
18. Culture and Daily Life
19. Religion / Philosophy / Ritual
20. Faction Index
21. NPC Role Index
22. External Domain Relations
23. Internal Power Struggles
24. Rumor Ecology
25. Relationship Logic
26. Player Origin Rules
27. VERDAX Tracking Fields
28. Data Schemas
29. Cause/Effect Examples (≥5, reaching 3rd–5th order)
30. Open Questions
31. Locked Decisions

## Key schemas

```ts
DomainIdentitySnapshot {
  domain_name, short_description, civilization_type, core_belief: string
  true_virtue: string[]; primary_corruption_risk: string[]
  domain_stone_or_source, magic_style, main_magic_cost, political_center,
  military_identity, economic_base, biggest_internal_conflict,
  biggest_external_threat, keeper_exploit, void_lie: string
}

DomainStoneState {
  domain, source_name: string
  source_type: "Domain Stone"|"Stone Fragment"|"Sacred Flame"|"Living Network"|"Beacon"|"Veilstone"|"Other"
  origin: string; metaphysical_principle: string[]
  current_stability: number   // 90-100 mythic, 70-89 healthy, 50-69 compromised,
                              // 30-49 dangerous, 10-29 near collapse, 0-9 breach
  corruption_level: number; public_knowledge, hidden_truth: string
  factions_claiming_authority, rituals_dependent_on_source,
  magic_systems_dependent_on_source, failure_symptoms, healing_methods: string[]
  keeper_attack_vector, void_attack_vector: string
}

DomainSoulFlowProfile {
  domain, healthy_soul_flow_description, damaged_soul_flow_description: string
  natural_soul_processes, forbidden_soul_processes, common_soul_wounds,
  healing_methods, factions_that_protect_soul_flow, factions_that_disrupt_soul_flow: string[]
  keeper_disruption_strategy, void_disruption_strategy: string
}

DomainVirtue {
  name, healthy_definition, cultural_expression, heroic_expression,
  political_expression, magical_expression, economic_expression,
  military_expression, common_saying: string
}

CorruptedVirtue {
  true_virtue, corrupted_name, corrupted_definition, how_it_begins, how_it_spreads: string
  who_benefits, who_suffers, faction_most_vulnerable, npc_archetypes_most_vulnerable: string[]
  keeper_benefit, void_lie: string; visible_symptoms: string[]; late_stage_consequence: string
}

KeeperExploitPattern {
  domain, primary_virtue_targeted: string; secondary_virtues_targeted: string[]
  corruption_strategy: string
  preferred_crisis_conditions, preferred_faction_targets, preferred_npc_targets, soul_flow_damage_type: string[]
  domain_stone_damage_type, common_lie, long_term_goal: string
}

VoidTemptationPattern {
  domain, temptation_phrase, immediate_benefit, hidden_cost,
  identity_damage, soul_flow_damage, reality_damage: string
  faction_most_likely_to_accept, npc_archetypes_most_likely_to_accept,
  visible_stage_1_symptoms, visible_stage_2_symptoms, visible_stage_3_symptoms: string[]
}

MagicSystemState {
  domain, system_name, source: string; practitioners, institutions: string[]
  training_access: "elite"|"regulated"|"common"|"restricted"|"forbidden"|"black_market"
  battlefield_use, economic_use, political_use, spiritual_use, civilian_use,
  cost_types, abuse_modes: string[]
  scarcity_level, public_trust: number; faction_control: Record<string, number>
  keeper_corruption_vector, void_enhancement_vector: string
}

MagicCost {
  cost_name: string
  cost_type: "mana"|"life_force"|"physical_exhaustion"|"memory"|"identity"
    |"soul_integrity"|"oath_burden"|"domain_stone_strain"|"resource_consumption"
    |"social_trust"|"corruption"|"void_dependency"
  description, minor_effect, moderate_effect, severe_effect, recovery_method, permanent_risk: string
  factions_that_accept_this_cost, factions_that_reject_this_cost: string[]
}

GovernmentProfile {
  domain, government_type, ruling_body, religious_authority, military_authority,
  economic_authority, magical_authority: string
  local_authorities: string[]; succession_or_selection_method, legitimacy_source: string
  known_cracks_in_legitimacy, emergency_powers, corruption_vulnerabilities: string[]
}

ClassStructure {
  domain, class_name, description: string; privileges, burdens: string[]
  magic_access, military_obligation, economic_role, political_voice: string
  common_grievances, faction_affinities, upward_mobility_paths, downward_mobility_risks: string[]
}

DomainEconomy {
  domain: string
  primary_resources, secondary_resources, sacred_resources, scarce_resources,
  export_goods, import_needs, trade_routes, economic_institutions, black_market_goods: string[]
  wartime_economy_behavior: string; famine_or_shortage_risks, exploitative_practices: string[]
  keeper_attack_vector: string
}

MilitaryDoctrine {
  domain, doctrine_name, strategic_identity: string
  preferred_battlefield, primary_units, elite_units, support_units, magical_assets: string[]
  defensive_strategy, offensive_strategy, logistics_strategy, intelligence_strategy: string
  taboo_tactics, desperate_tactics, common_weaknesses: string[]
  keeper_exploit, void_escalation: string
}

WarFrontBehavior {
  domain: string
  typical_warfront_goals, preferred_escalation_methods, preferred_deescalation_methods: string[]
  negotiation_style: string
  ceasefire_conditions, betrayal_conditions, alliance_conditions: string[]
  occupation_style, resistance_style: string
}

DomainLocation {
  name, domain, location_type, description: string
  political_function, economic_function, magical_function, military_function,
  spiritual_function, civilian_function: string
  controlling_factions, contested_by, key_npcs, resources_present, magic_systems_present, known_secrets: string[]
  location_state: { stability, danger, corruption, morale, resources, secrecy,
                    military_pressure, spiritual_health: number }
  keeper_attack_vector: string; void_symptoms, quest_hooks: string[]
}

CultureProfile {
  domain, daily_life_summary, family_customs, love_and_marriage_customs,
  education_system, work_and_apprenticeship, food_and_market_life,
  funeral_or_death_customs: string
  festivals, public_honors, taboos, common_sayings, children_common_beliefs, class_differences: string[]
}

ReligionProfile {
  domain, central_belief: string; sacred_symbols, major_rituals, common_prayers_or_oaths, priestly_roles, heresies, sacred_taboos: string[]
  relationship_to_death, relationship_to_sacrifice, relationship_to_memory, relationship_to_truth,
  keeper_corruption_strategy, void_false_revelation_style: string
}

DomainFactionIndex {
  domain: string
  factions: { name, short_doctrine, class_base, power_base, main_rival, keeper_vulnerability, player_use: string }[]
}
// Minimum 5 factions: central authority, spiritual/magical authority,
// military/security, economic/resource, fringe/edge.

NPCRoleIndex {
  domain, role_name, purpose_in_world, purpose_in_gameplay: string
  likely_factions, likely_conflicts, relationship_options: string[]; death_impact: string
}
// Required roles: ruler, spiritual authority, military commander, magic expert,
// trader/broker, healer, intelligence figure, civilian morale figure, young
// stakes character, rival/edge character, romance candidate, potential betrayer,
// potential defector, potential martyr, villain/corruption vessel.

ExternalDomainRelation {
  source_domain, target_domain: string
  public_relationship: "ally"|"friendly"|"tense"|"rival"|"hostile"|"war"|"unknown"
  hidden_relationship, primary_conflict, primary_dependency, resource_leverage,
  magic_tension, military_tension, historical_wound,
  possible_alliance_condition, possible_break_condition, keeper_exploit, void_exploit: string
}
// Each domain needs an exploitation matrix vs all 5 domains (and how others exploit it).

PowerStruggle {
  domain, title: string; factions_involved: string[]
  issue, public_argument, hidden_argument: string
  resources_at_stake, magic_systems_at_stake, npc_flashpoints, possible_player_sides: string[]
  compromise_possible: boolean
  keeper_best_outcome, void_best_outcome, peaceful_resolution, violent_resolution,
  third_order_effect, fifth_order_effect: string
}

DomainRumorEcology {
  domain: string
  common_spread_channels, trusted_sources, distrusted_sources, rumor_emotional_styles,
  rumor_suppression_methods, rumor_weaponization_methods, rumor_mutation_patterns,
  factions_best_at_rumor_warfare: string[]
}

DomainRelationshipLogic {
  domain: string
  trust_is_built_by, trust_is_broken_by, enemies_become_tolerable_when,
  allies_become_suspect_when, romance_conflicts, betrayal_triggers,
  forgiveness_conditions, permanent_enemy_conditions: string[]
  if_then_because_examples: { if: string; then: string; because: string }[]  // ≥10
}

PlayerOriginRules {
  domain: string; starting_bonuses, starting_burdens: string[]
  default_domain_resonance: Record<string, number>
  starting_faction_assumptions, common_npc_reactions, starting_rumors,
  starting_magic_access, restricted_magic_access, unique_origin_questions,
  possible_dark_secret_options: string[]
}

DomainTrackingState {
  domain: string
  domain_stone_stability, soul_flow_integrity, keeper_pressure, void_parasitism,
  political_stability, military_strength, economic_strength, magical_strength,
  civilian_morale, resource_security, intelligence_strength: number  // 0-100
  true_virtues_json, corrupted_virtues_json: Record<string, number>
  active_warfronts, active_power_struggles, active_rumors,
  active_soul_flow_wounds, active_domain_crises: string[]
}
```

**Scale standard:** 0–20 collapsed/absent · 21–40 weak/dangerous · 41–60
unstable/contested · 61–80 functional/strong · 81–100 dominant/mythic.

## Completion checklist

A domain bible is complete only when it answers all of:

- **Civilization:** government, economy, class, military, religion, daily life present?
- **Metaphysics:** connects to the fractured Nexus Stone? soul-flow behavior defined? Stone stability defined?
- **Magic:** source, access, uses, costs, abuse modes, political control defined?
- **Faction:** factions disagree believably? each has a real point and dangerous flaw, with power sources?
- **War:** fights militarily/economically/spiritually/strategically? exploits others? can be exploited?
- **NPC:** supports leaders, traders, lovers, friends, rivals, villains, defectors, civilians?
- **Keeper/Void:** Keeper exploits the domain's *virtues* (not generic evil)? Void offers useful lies with hidden costs?
- **VERDAX:** trackable with state fields? choices produce 3rd-to-5th-order consequences? rumors mutate in domain-specific ways? enemies can become tolerable under pressure?

## Implementation (SCHEMA-FORGE)

Separate **static lore** from **mutable campaign state.**

- Static lore files: `/domain-lore/{radiance,verdance,tempest,sanctuary,abyss,void-layer}.json`
- Mutable tables: `DomainTrackingState`, `DomainVirtueState`, `DomainStoneState`, `DomainPowerState`, `MagicSystemState`, `FactionState`, `LocationState`, `WarFrontState`, `RumorState`, `RelationshipChangeLog`, `SoulFlowWound`, `KeeperExploitEvent`, `VoidTemptationEvent`.
- VERDAX does **not** receive the full bible every turn — only the current snapshot, relevant active factions, current location, active warfronts/rumors/wounds, current virtue states, and last 8 turns. The full bible is for campaign generation, lore checks, admin tools, and deep retrieval.

## Locked Decisions

1. Every domain bible follows this template unless deliberately revised.
2. Every domain is a civilization, not a theme.
3. Every domain includes government, class, economy, military, culture, factions, magic, and daily life.
4. Every domain defines true virtues and corrupted virtues.
5. Every domain defines a Keeper exploit pattern.
6. Every domain defines a Void temptation pattern.
7. Every domain defines magic costs and magic access.
8. Every domain defines how it exploits other domains and how others exploit it.
9. Every domain supports conditional relationships, uneasy alliances, betrayals, tolerable enemies.
10. Every domain includes rumor ecology.
11. Every domain includes VERDAX tracking fields.
12. Every domain includes ≥5 cause/effect examples reaching 3rd-to-5th order.
13. Static lore and mutable campaign state are separated in implementation.
14. VERDAX receives relevant domain state, not the entire bible, during normal turns.
