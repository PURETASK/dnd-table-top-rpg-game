/**
 * Realm of Nexus / VERDAX — Domain Bible Template v1.0 (STATIC LORE)
 *
 * Source: Chunk 2 (Domain Bible Template v1.0).
 * These schemas describe the canonical, mostly-immutable lore of a domain.
 * They live as JSON seed files under `/domain-lore/*.json` (Chunk 2 §36) and
 * are the source for campaign generation, deep context retrieval, and admin tools.
 *
 * Static lore (this module) is kept separate from mutable campaign state
 * (see `glossary.ts`), per Chunk 2 §36 and Chunk 3 §2.
 */
import { z } from "zod";
import { DomainOrVoid, Stat, TrainingAccess } from "./primitives.js";

const str = z.string();
const strList = z.array(z.string());

/* §3 Domain Identity Snapshot ------------------------------------- */
export const DomainIdentitySnapshot = z.object({
  domain_name: str,
  short_description: str,
  civilization_type: str,
  core_belief: str,
  true_virtue: strList,
  primary_corruption_risk: strList,
  domain_stone_or_source: str,
  magic_style: str,
  main_magic_cost: str,
  political_center: str,
  military_identity: str,
  economic_base: str,
  biggest_internal_conflict: str,
  biggest_external_threat: str,
  keeper_exploit: str,
  void_lie: str,
});
export type DomainIdentitySnapshot = z.infer<typeof DomainIdentitySnapshot>;

/* §6 Domain Stone / Core Source ----------------------------------- */
export const DomainStoneSource = z.object({
  domain: str,
  source_name: str,
  source_type: z.enum([
    "Domain Stone",
    "Stone Fragment",
    "Sacred Flame",
    "Living Network",
    "Beacon",
    "Veilstone",
    "Other",
  ]),
  origin: str,
  metaphysical_principle: strList,
  current_stability: Stat,
  corruption_level: Stat,
  public_knowledge: str,
  hidden_truth: str,
  factions_claiming_authority: strList,
  rituals_dependent_on_source: strList,
  magic_systems_dependent_on_source: strList,
  failure_symptoms: strList,
  healing_methods: strList,
  keeper_attack_vector: str,
  void_attack_vector: str,
});
export type DomainStoneSource = z.infer<typeof DomainStoneSource>;

/* §7 Soul-Flow Relationship --------------------------------------- */
export const DomainSoulFlowProfile = z.object({
  domain: str,
  healthy_soul_flow_description: str,
  damaged_soul_flow_description: str,
  natural_soul_processes: strList,
  forbidden_soul_processes: strList,
  common_soul_wounds: strList,
  healing_methods: strList,
  factions_that_protect_soul_flow: strList,
  factions_that_disrupt_soul_flow: strList,
  keeper_disruption_strategy: str,
  void_disruption_strategy: str,
});
export type DomainSoulFlowProfile = z.infer<typeof DomainSoulFlowProfile>;

/* §8 True Virtues -------------------------------------------------- */
export const DomainVirtue = z.object({
  name: str,
  healthy_definition: str,
  cultural_expression: str,
  heroic_expression: str,
  political_expression: str,
  magical_expression: str,
  economic_expression: str,
  military_expression: str,
  common_saying: str,
});
export type DomainVirtue = z.infer<typeof DomainVirtue>;

/* §9 Corrupted Virtues -------------------------------------------- */
export const CorruptedVirtue = z.object({
  true_virtue: str,
  corrupted_name: str,
  corrupted_definition: str,
  how_it_begins: str,
  how_it_spreads: str,
  who_benefits: strList,
  who_suffers: strList,
  faction_most_vulnerable: strList,
  npc_archetypes_most_vulnerable: strList,
  keeper_benefit: str,
  void_lie: str,
  visible_symptoms: strList,
  late_stage_consequence: str,
});
export type CorruptedVirtue = z.infer<typeof CorruptedVirtue>;

/* §10 Keeper Exploit Pattern --------------------------------------- */
export const KeeperExploitPattern = z.object({
  domain: str,
  primary_virtue_targeted: str,
  secondary_virtues_targeted: strList,
  corruption_strategy: str,
  preferred_crisis_conditions: strList,
  preferred_faction_targets: strList,
  preferred_npc_targets: strList,
  soul_flow_damage_type: strList,
  domain_stone_damage_type: str,
  common_lie: str,
  long_term_goal: str,
});
export type KeeperExploitPattern = z.infer<typeof KeeperExploitPattern>;

/* §11 Void Temptation Pattern ------------------------------------- */
export const VoidTemptationPattern = z.object({
  domain: str,
  temptation_phrase: str,
  immediate_benefit: str,
  hidden_cost: str,
  identity_damage: str,
  soul_flow_damage: str,
  reality_damage: str,
  faction_most_likely_to_accept: strList,
  npc_archetypes_most_likely_to_accept: strList,
  visible_stage_1_symptoms: strList,
  visible_stage_2_symptoms: strList,
  visible_stage_3_symptoms: strList,
});
export type VoidTemptationPattern = z.infer<typeof VoidTemptationPattern>;

/* §12 Magic System (lore definition) ------------------------------- */
export const DomainMagicSystem = z.object({
  domain: str,
  system_name: str,
  source: str,
  practitioners: strList,
  institutions: strList,
  training_access: TrainingAccess,
  battlefield_use: strList,
  economic_use: strList,
  political_use: strList,
  spiritual_use: strList,
  civilian_use: strList,
  cost_types: strList,
  abuse_modes: strList,
  scarcity_level: Stat,
  public_trust: Stat,
  faction_control: z.record(str, z.number()),
  keeper_corruption_vector: str,
  void_enhancement_vector: str,
});
export type DomainMagicSystem = z.infer<typeof DomainMagicSystem>;

/* §13 Magic Costs -------------------------------------------------- */
export const MagicCost = z.object({
  cost_name: str,
  cost_type: z.enum([
    "mana",
    "life_force",
    "physical_exhaustion",
    "memory",
    "identity",
    "soul_integrity",
    "oath_burden",
    "domain_stone_strain",
    "resource_consumption",
    "social_trust",
    "corruption",
    "void_dependency",
  ]),
  description: str,
  minor_effect: str,
  moderate_effect: str,
  severe_effect: str,
  recovery_method: str,
  permanent_risk: str,
  factions_that_accept_this_cost: strList,
  factions_that_reject_this_cost: strList,
});
export type MagicCost = z.infer<typeof MagicCost>;

/* §14 Government and Authority ------------------------------------- */
export const GovernmentProfile = z.object({
  domain: str,
  government_type: str,
  ruling_body: str,
  religious_authority: str,
  military_authority: str,
  economic_authority: str,
  magical_authority: str,
  local_authorities: strList,
  succession_or_selection_method: str,
  legitimacy_source: str,
  known_cracks_in_legitimacy: strList,
  emergency_powers: strList,
  corruption_vulnerabilities: strList,
});
export type GovernmentProfile = z.infer<typeof GovernmentProfile>;

/* §15 Class Structure --------------------------------------------- */
export const ClassStructure = z.object({
  domain: str,
  class_name: str,
  description: str,
  privileges: strList,
  burdens: strList,
  magic_access: str,
  military_obligation: str,
  economic_role: str,
  political_voice: str,
  common_grievances: strList,
  faction_affinities: strList,
  upward_mobility_paths: strList,
  downward_mobility_risks: strList,
});
export type ClassStructure = z.infer<typeof ClassStructure>;

/* §16 Economy and Resources --------------------------------------- */
export const DomainEconomy = z.object({
  domain: str,
  primary_resources: strList,
  secondary_resources: strList,
  sacred_resources: strList,
  scarce_resources: strList,
  export_goods: strList,
  import_needs: strList,
  trade_routes: strList,
  economic_institutions: strList,
  black_market_goods: strList,
  wartime_economy_behavior: str,
  famine_or_shortage_risks: strList,
  exploitative_practices: strList,
  keeper_attack_vector: str,
});
export type DomainEconomy = z.infer<typeof DomainEconomy>;

/* §17 Military Doctrine -------------------------------------------- */
export const MilitaryDoctrine = z.object({
  domain: str,
  doctrine_name: str,
  strategic_identity: str,
  preferred_battlefield: strList,
  primary_units: strList,
  elite_units: strList,
  support_units: strList,
  magical_assets: strList,
  defensive_strategy: str,
  offensive_strategy: str,
  logistics_strategy: str,
  intelligence_strategy: str,
  taboo_tactics: strList,
  desperate_tactics: strList,
  common_weaknesses: strList,
  keeper_exploit: str,
  void_escalation: str,
});
export type MilitaryDoctrine = z.infer<typeof MilitaryDoctrine>;

/* §18 Warfront Behavior -------------------------------------------- */
export const WarFrontBehavior = z.object({
  domain: str,
  typical_warfront_goals: strList,
  preferred_escalation_methods: strList,
  preferred_deescalation_methods: strList,
  negotiation_style: str,
  ceasefire_conditions: strList,
  betrayal_conditions: strList,
  alliance_conditions: strList,
  occupation_style: str,
  resistance_style: str,
});
export type WarFrontBehavior = z.infer<typeof WarFrontBehavior>;

/* §19 Major Locations ---------------------------------------------- */
export const DomainLocation = z.object({
  name: str,
  domain: str,
  location_type: str,
  description: str,
  political_function: str,
  economic_function: str,
  magical_function: str,
  military_function: str,
  spiritual_function: str,
  civilian_function: str,
  controlling_factions: strList,
  contested_by: strList,
  key_npcs: strList,
  resources_present: strList,
  magic_systems_present: strList,
  known_secrets: strList,
  location_state: z.object({
    stability: Stat,
    danger: Stat,
    corruption: Stat,
    morale: Stat,
    resources: Stat,
    secrecy: Stat,
    military_pressure: Stat,
    spiritual_health: Stat,
  }),
  keeper_attack_vector: str,
  void_symptoms: strList,
  quest_hooks: strList,
});
export type DomainLocation = z.infer<typeof DomainLocation>;

/* §20 Culture and Daily Life -------------------------------------- */
export const CultureProfile = z.object({
  domain: str,
  daily_life_summary: str,
  family_customs: str,
  love_and_marriage_customs: str,
  education_system: str,
  work_and_apprenticeship: str,
  food_and_market_life: str,
  festivals: strList,
  funeral_or_death_customs: str,
  public_honors: strList,
  taboos: strList,
  common_sayings: strList,
  children_common_beliefs: strList,
  class_differences: strList,
});
export type CultureProfile = z.infer<typeof CultureProfile>;

/* §21 Religion / Philosophy / Ritual ------------------------------- */
export const ReligionProfile = z.object({
  domain: str,
  central_belief: str,
  sacred_symbols: strList,
  major_rituals: strList,
  common_prayers_or_oaths: strList,
  priestly_roles: strList,
  heresies: strList,
  sacred_taboos: strList,
  relationship_to_death: str,
  relationship_to_sacrifice: str,
  relationship_to_memory: str,
  relationship_to_truth: str,
  keeper_corruption_strategy: str,
  void_false_revelation_style: str,
});
export type ReligionProfile = z.infer<typeof ReligionProfile>;

/* §22 Faction Index ------------------------------------------------ */
export const DomainFactionIndex = z.object({
  domain: str,
  factions: z
    .array(
      z.object({
        name: str,
        short_doctrine: str,
        class_base: str,
        power_base: str,
        main_rival: str,
        keeper_vulnerability: str,
        player_use: str,
      })
    )
    .min(5, "Each domain should have at least five factions (Chunk 2 §22)."),
});
export type DomainFactionIndex = z.infer<typeof DomainFactionIndex>;

/* §23 NPC Role Index ----------------------------------------------- */
export const NPCRoleIndex = z.object({
  domain: str,
  role_name: str,
  purpose_in_world: str,
  purpose_in_gameplay: str,
  likely_factions: strList,
  likely_conflicts: strList,
  relationship_options: strList,
  death_impact: str,
});
export type NPCRoleIndex = z.infer<typeof NPCRoleIndex>;

/* §24 External Domain Relations ------------------------------------ */
export const ExternalDomainRelation = z.object({
  source_domain: str,
  target_domain: str,
  public_relationship: z.enum([
    "ally",
    "friendly",
    "tense",
    "rival",
    "hostile",
    "war",
    "unknown",
  ]),
  hidden_relationship: str,
  primary_conflict: str,
  primary_dependency: str,
  resource_leverage: str,
  magic_tension: str,
  military_tension: str,
  historical_wound: str,
  possible_alliance_condition: str,
  possible_break_condition: str,
  keeper_exploit: str,
  void_exploit: str,
});
export type ExternalDomainRelation = z.infer<typeof ExternalDomainRelation>;

/* §25 Internal Power Struggles ------------------------------------- */
export const PowerStruggle = z.object({
  domain: str,
  title: str,
  factions_involved: strList,
  issue: str,
  public_argument: str,
  hidden_argument: str,
  resources_at_stake: strList,
  magic_systems_at_stake: strList,
  npc_flashpoints: strList,
  possible_player_sides: strList,
  compromise_possible: z.boolean(),
  keeper_best_outcome: str,
  void_best_outcome: str,
  peaceful_resolution: str,
  violent_resolution: str,
  third_order_effect: str,
  fifth_order_effect: str,
});
export type PowerStruggle = z.infer<typeof PowerStruggle>;

/* §26 Rumor Ecology ------------------------------------------------ */
export const DomainRumorEcology = z.object({
  domain: str,
  common_spread_channels: strList,
  trusted_sources: strList,
  distrusted_sources: strList,
  rumor_emotional_styles: strList,
  rumor_suppression_methods: strList,
  rumor_weaponization_methods: strList,
  rumor_mutation_patterns: strList,
  factions_best_at_rumor_warfare: strList,
});
export type DomainRumorEcology = z.infer<typeof DomainRumorEcology>;

/* §27 Relationship Logic ------------------------------------------- */
export const IfThenBecause = z.object({
  if: str,
  then: str,
  because: str,
});
export type IfThenBecause = z.infer<typeof IfThenBecause>;

export const DomainRelationshipLogic = z.object({
  domain: str,
  trust_is_built_by: strList,
  trust_is_broken_by: strList,
  enemies_become_tolerable_when: strList,
  allies_become_suspect_when: strList,
  romance_conflicts: strList,
  betrayal_triggers: strList,
  forgiveness_conditions: strList,
  permanent_enemy_conditions: strList,
  if_then_because_examples: z
    .array(IfThenBecause)
    .min(10, "At least ten IF/THEN/BECAUSE rules required (Chunk 2 §27)."),
});
export type DomainRelationshipLogic = z.infer<typeof DomainRelationshipLogic>;

/* §28 Player Origin Rules ------------------------------------------ */
export const PlayerOriginRules = z.object({
  domain: str,
  starting_bonuses: strList,
  starting_burdens: strList,
  default_domain_resonance: z.record(str, z.number()),
  starting_faction_assumptions: strList,
  common_npc_reactions: strList,
  starting_rumors: strList,
  starting_magic_access: strList,
  restricted_magic_access: strList,
  unique_origin_questions: strList,
  possible_dark_secret_options: strList,
});
export type PlayerOriginRules = z.infer<typeof PlayerOriginRules>;

/* §31 Cause/Effect Examples (lore-level illustrations) ------------- */
export const CauseEffectExample = z.object({
  root_event: str,
  domain_interpretation: str,
  faction_interpretation: str,
  immediate_result: str,
  first_order: str,
  second_order: str,
  third_order: str,
  fourth_order: str,
  fifth_order: str,
  keeper_gain: str,
  void_gain: str.optional(),
  player_intervention_options: strList,
});
export type CauseEffectExample = z.infer<typeof CauseEffectExample>;

/* §32 / §33 Open Questions & Locked Decisions ---------------------- */
export const OpenQuestions = z.object({
  metaphysical: strList,
  political: strList,
  magic: strList,
  faction: strList,
  npc: strList,
  war_economy: strList,
  implementation: strList,
});
export type OpenQuestions = z.infer<typeof OpenQuestions>;

/* §4 Hard Canon ---------------------------------------------------- */
export const HardCanon = z.object({
  canon_facts: strList,
  cannot_contradict: strList,
});
export type HardCanon = z.infer<typeof HardCanon>;

/* §5 Metaphysical Role --------------------------------------------- */
export const MetaphysicalRole = z.object({
  principle_embodied: str,
  nexus_stone_aspect: str,
  soul_flow_shaped: str,
  natural_magic: str,
  when_extreme: str,
  keeper_exploits_extremity: str,
});
export type MetaphysicalRole = z.infer<typeof MetaphysicalRole>;

/* ------------------------------------------------------------------ *
 * §2 Domain Bible Master Structure — the full composite document.
 * A complete domain bible (`/domain-lore/<domain>.json`) validates against
 * this. Lists allow multiple entries (e.g. several virtues, locations).
 * ------------------------------------------------------------------ */
export const DomainBible = z.object({
  schema_version: z.literal("1.0"),
  domain: DomainOrVoid,
  status: z.enum(["draft", "locked"]).default("draft"),

  identity_snapshot: DomainIdentitySnapshot,
  hard_canon: HardCanon,
  metaphysical_role: MetaphysicalRole,
  domain_stone: DomainStoneSource,
  soul_flow: DomainSoulFlowProfile,

  true_virtues: z.array(DomainVirtue).min(1),
  corrupted_virtues: z.array(CorruptedVirtue).min(1),
  keeper_exploit_pattern: KeeperExploitPattern,
  void_temptation_pattern: VoidTemptationPattern,

  magic_systems: z.array(DomainMagicSystem).min(1),
  magic_costs: z.array(MagicCost).min(1),

  government: GovernmentProfile,
  class_structure: z.array(ClassStructure).min(1),
  economy: DomainEconomy,
  military_doctrine: MilitaryDoctrine,
  warfront_behavior: WarFrontBehavior,

  major_locations: z.array(DomainLocation).min(1),
  culture: CultureProfile,
  religion: ReligionProfile,

  faction_index: DomainFactionIndex,
  npc_role_index: z.array(NPCRoleIndex).min(1),
  external_relations: z.array(ExternalDomainRelation),
  internal_power_struggles: z.array(PowerStruggle).min(1),
  rumor_ecology: DomainRumorEcology,
  relationship_logic: DomainRelationshipLogic,
  player_origin_rules: PlayerOriginRules,

  cause_effect_examples: z
    .array(CauseEffectExample)
    .min(5, "At least five cause/effect examples required (Chunk 2 §31)."),

  open_questions: OpenQuestions,
  locked_decisions: strList,
});
export type DomainBible = z.infer<typeof DomainBible>;
