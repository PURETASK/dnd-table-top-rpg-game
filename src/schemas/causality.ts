/**
 * Realm of Nexus / VERDAX — Cause/Effect Standards v1.0
 *
 * Source: Chunk 4 (Cause/Effect Standards v1.0).
 * Turn-time analysis structures: how VERDAX classifies an action and expands it
 * into 1st–5th order consequences. These feed `VerdaxTurnResponse` (see verdax.ts)
 * and are persisted via `ConsequenceChainState` / `WorldEvent` (see glossary.ts).
 */
import { z } from "zod";
import {
  ConsequenceDepth,
  ConsequenceTiming,
  PublicVisibility,
  RelationshipStatus,
  Delta,
  Stat,
} from "./primitives.js";

const str = z.string();
const strList = z.array(z.string());
const num = z.number();

/* §8 Action Categories --------------------------------------------- */
export const ActionCategory = z.enum([
  "mercy",
  "ruthlessness",
  "sacrifice",
  "deception",
  "truth_telling",
  "protection",
  "abandonment",
  "forbidden_magic",
  "void_use",
  "relic_use",
  "contract",
  "betrayal",
  "alliance",
  "rescue",
  "execution",
  "theft",
  "public_speech",
  "secret_discovery",
  "resource_control",
  "military_action",
  "economic_pressure",
  "political_choice",
  "romance_choice",
  "oath_keeping",
  "oath_breaking",
  "soul_magic",
  "memory_magic",
  "identity_magic",
  "death_passage_interference",
]);
export type ActionCategory = z.infer<typeof ActionCategory>;

/* §9 Moral Texture ------------------------------------------------- */
export const MoralTexture = z.enum([
  "protective",
  "sacrificial",
  "selfish",
  "coercive",
  "merciful",
  "reckless",
  "disciplined",
  "deceptive",
  "transparent",
  "exploitative",
  "restorative",
  "punitive",
  "desperate",
  "honorable",
  "dishonorable",
  "loving",
  "possessive",
  "pragmatic",
  "fanatical",
  "corruptive",
  "liberating",
  "dominating",
]);
export type MoralTexture = z.infer<typeof MoralTexture>;

/* ------------------------------------------------------------------ *
 * Mechanical effects bucket — the named change groups referenced by
 * consequence nodes and the VERDAX response (Chunk 3 §30, Chunk 4 §6).
 * Each bucket is a free-form record so domain-specific deltas remain flexible;
 * the values are still validated as JSON before being applied to typed state.
 * ------------------------------------------------------------------ */
const changeBucket = z.record(str, z.unknown());
export const MechanicalEffects = z
  .object({
    character_changes: changeBucket.optional(),
    npc_changes: changeBucket.optional(),
    faction_changes: changeBucket.optional(),
    relationship_changes: changeBucket.optional(),
    location_changes: changeBucket.optional(),
    quest_changes: changeBucket.optional(),
    rumor_changes: changeBucket.optional(),
    pressure_clock_changes: changeBucket.optional(),
    warfront_changes: changeBucket.optional(),
    magic_system_changes: changeBucket.optional(),
    domain_state_changes: changeBucket.optional(),
    soul_flow_changes: changeBucket.optional(),
    keeper_void_changes: changeBucket.optional(),
  })
  .partial();
export type MechanicalEffects = z.infer<typeof MechanicalEffects>;

/* §6 Consequence Node (canonical, merges Chunk 3 §17 + Chunk 4 §6) - */
export const ConsequenceNode = z.object({
  depth: ConsequenceDepth,
  timing: ConsequenceTiming,
  trigger_condition: str,
  event_description: str,
  narrative_reason: str,
  domain_logic: str.optional(),
  faction_logic: str.optional(),
  npc_logic: str.optional(),
  power_logic: str.optional(),
  metaphysical_logic: str.optional(),
  mechanical_effects: MechanicalEffects,
  possible_player_intervention: str.optional(),
  if_ignored_next_node: str.optional(),
});
export type ConsequenceNode = z.infer<typeof ConsequenceNode>;

/* §10 Witness Interpretation (canonical, richer Chunk 4 form) ------- */
export const WitnessInterpretation = z.object({
  witness_type: z.enum(["npc", "faction", "crowd", "spy", "spirit", "unknown"]),
  witness_id: str.optional(),
  saw_event_accuracy: Stat,
  prior_bias: str.optional(),
  emotional_reaction: str,
  ideological_interpretation: str,
  political_use: str.optional(),
  likely_action: str,
  rumor_variant_created: str.optional(),
  memory_update: str.optional(),
  trust_delta: Delta.optional(),
  fear_delta: Delta.optional(),
  respect_delta: Delta.optional(),
  suspicion_delta: Delta.optional(),
  resentment_delta: Delta.optional(),
});
export type WitnessInterpretation = z.infer<typeof WitnessInterpretation>;

/* §7 Root Event Analysis ------------------------------------------- */
export const RootEventAnalysis = z.object({
  event_title: str,
  surface_action: str,
  actual_method: str,
  stated_intent: str.optional(),
  inferred_intent: str,
  action_category: ActionCategory,
  moral_texture: z.array(MoralTexture),
  domain_context: str,
  location_context: str,
  public_visibility: PublicVisibility,
  actor_ids: strList,
  target_ids: strList,
  witness_ids: strList,
  witness_faction_ids: strList,
  magic_used: str.optional(),
  forbidden_magic_used: z.boolean(),
  void_involved: z.boolean(),
  soul_flow_touched: z.boolean(),
  resources_affected: strList,
  factions_affected: strList,
  npcs_affected: strList,
  warfronts_affected: strList,
  consequence_depth_required: ConsequenceDepth,
});
export type RootEventAnalysis = z.infer<typeof RootEventAnalysis>;

/* §11 Power Shift -------------------------------------------------- */
export const PowerShift = z.object({
  winner_ids: strList,
  loser_ids: strList,
  uncertain_ids: strList,
  power_type: z.enum([
    "military",
    "economic",
    "magical",
    "religious",
    "political",
    "social",
    "informational",
    "metaphysical",
    "romantic",
    "legal",
  ]),
  immediate_shift: str,
  delayed_shift: str,
  hidden_shift: str,
  exploit_opportunity: str,
});
export type PowerShift = z.infer<typeof PowerShift>;

/* §12 Domain Interpretation ---------------------------------------- */
export const DomainInterpretation = z.object({
  domain: str,
  values_aligned: strList,
  values_violated: strList,
  virtues_distorted: strList,
  domain_approval_delta: Delta,
  domain_suspicion_delta: Delta,
  explanation: str,
});
export type DomainInterpretation = z.infer<typeof DomainInterpretation>;

/* §13 Faction Interpretation --------------------------------------- */
export const FactionInterpretation = z.object({
  faction_id: str,
  doctrine_lens: str,
  immediate_reaction: str,
  public_statement: str,
  private_reaction: str,
  reputation_delta: Delta,
  trust_delta: Delta,
  fear_delta: Delta,
  respect_delta: Delta,
  suspicion_delta: Delta,
  debt_delta: Delta,
  leverage_delta: Delta,
  planned_action: str,
  agenda_clock_change: str.optional(),
});
export type FactionInterpretation = z.infer<typeof FactionInterpretation>;

/* §14 NPC Interpretation ------------------------------------------- */
export const NPCInterpretation = z.object({
  npc_id: str,
  factual_memory: str,
  emotional_interpretation: str,
  ideological_interpretation: str,
  trust_delta: Delta,
  fear_delta: Delta,
  affection_delta: Delta,
  suspicion_delta: Delta,
  respect_delta: Delta,
  resentment_delta: Delta,
  debt_delta: Delta,
  likely_next_action: str,
  relationship_status_change: str.optional(),
});
export type NPCInterpretation = z.infer<typeof NPCInterpretation>;

/* §15 Rumor Creation ----------------------------------------------- */
export const RumorCreation = z.object({
  original_truth: str,
  first_claim: str,
  likely_mutation: str,
  source_id: str.optional(),
  source_motive: str,
  accuracy: Stat,
  distortion_level: Stat,
  emotional_payload: str,
  beneficiaries: strList,
  harmed_parties: strList,
  spread_channels: strList,
  first_consequence: str,
});
export type RumorCreation = z.infer<typeof RumorCreation>;

/* §16 Soul-Flow Check ---------------------------------------------- */
export const SoulFlowCheck = z.object({
  touched_soul_flow: z.boolean(),
  wound_created: z.boolean(),
  wound_type: str.optional(),
  severity: Stat.optional(),
  soul_flow_delta: Delta,
  affected_entities: strList,
  affected_location: str.optional(),
  affected_domain: str.optional(),
  symptoms: strList,
  healing_methods: strList,
  keeper_pressure_delta: Delta,
  explanation: str,
});
export type SoulFlowCheck = z.infer<typeof SoulFlowCheck>;

/* §17 Keeper Exploitation Check ------------------------------------ */
export const KeeperExploitationCheck = z.object({
  triggered: z.boolean(),
  exploited_domain: str.optional(),
  exploited_virtue: str.optional(),
  distorted_form: str.optional(),
  keeper_strategy: str.optional(),
  immediate_gain: Delta.optional(),
  delayed_gain_possible: Delta.optional(),
  explanation: str.optional(),
  prevention_path: str.optional(),
});
export type KeeperExploitationCheck = z.infer<typeof KeeperExploitationCheck>;

/* §18 Void Parasitism Check ---------------------------------------- */
export const VoidParasitismCheck = z.object({
  triggered: z.boolean(),
  offered_lie: str.optional(),
  immediate_benefit: str.optional(),
  hidden_cost: str.optional(),
  void_resonance_delta: Delta.optional(),
  identity_integrity_delta: Delta.optional(),
  soul_flow_delta: Delta.optional(),
  reality_stability_delta: Delta.optional(),
  future_whisper: str.optional(),
  dependency_risk: Stat.optional(),
});
export type VoidParasitismCheck = z.infer<typeof VoidParasitismCheck>;

/* §19 Relationship Change ------------------------------------------ */
export const RelationshipChange = z.object({
  source_id: str,
  target_id: str,
  old_status: RelationshipStatus,
  new_status: RelationshipStatus,
  stat_changes: z.object({
    trust_delta: Delta,
    fear_delta: Delta,
    respect_delta: Delta,
    resentment_delta: Delta,
    dependency_delta: Delta,
    ideological_distance_delta: Delta,
    debt_delta: Delta,
    affection_delta: Delta.optional(),
  }),
  if_then_because: z.object({ if: str, then: str, because: str }),
  public_reason: str,
  private_reason: str,
  duration: str.optional(),
  breaking_condition: str.optional(),
});
export type RelationshipChange = z.infer<typeof RelationshipChange>;

/* §21 Magic Consequence -------------------------------------------- */
export const MagicConsequence = z.object({
  magic_system: str,
  spell_or_effect: str,
  source_used: str,
  cost_paid: str,
  cost_hidden: str.optional(),
  cost_transferred: str.optional(),
  public_visibility: str,
  magic_system_instability_delta: Delta,
  public_trust_delta: Delta,
  faction_control_changes: z.record(str, num),
  keeper_exploit: str.optional(),
  void_enhancement: str.optional(),
  delayed_side_effect: str.optional(),
});
export type MagicConsequence = z.infer<typeof MagicConsequence>;

/* §22 Warfront Shift ----------------------------------------------- */
export const WarfrontShift = z.object({
  warfront_id: str,
  balance_delta: Delta,
  escalation_clock_delta: Delta,
  changed_objective: str.optional(),
  new_hidden_objective: str.optional(),
  reason: str,
  domains_affected: strList,
  factions_affected: strList,
  third_order_effect: str,
  fifth_order_effect: str,
});
export type WarfrontShift = z.infer<typeof WarfrontShift>;

/* §23 Resource Consequence ----------------------------------------- */
export const ResourceConsequence = z.object({
  resource_name: str,
  resource_type: z.enum([
    "food",
    "medicine",
    "weapon",
    "magic_reagent",
    "route",
    "labor",
    "soul_resource",
    "relic",
    "information",
  ]),
  supply_delta: Delta,
  demand_delta: Delta,
  price_delta: Delta.optional(),
  controlling_faction_changes: z.record(str, num),
  affected_locations: strList,
  affected_warfronts: strList,
  black_market_effect: str.optional(),
  famine_or_shortage_risk_delta: Delta.optional(),
  third_order_effect: str,
  fifth_order_effect: str,
});
export type ResourceConsequence = z.infer<typeof ResourceConsequence>;

/* §24 Quest Resolution --------------------------------------------- */
export const QuestResolution = z.object({
  quest_id: str,
  chosen_resolution: str,
  solved_problem: str,
  unresolved_problem: str,
  moral_cost: str,
  faction_winners: strList,
  faction_losers: strList,
  npc_winners: strList,
  npc_losers: strList,
  location_changes: strList,
  rumors_created: strList,
  pressure_clocks_created_or_modified: strList,
  future_hooks: strList,
  third_order_effect: str,
  fifth_order_effect: str,
});
export type QuestResolution = z.infer<typeof QuestResolution>;

/* §25 Death Consequence -------------------------------------------- */
export const DeathConsequence = z.object({
  dead_entity_id: str,
  death_context: str,
  cause_of_death: str,
  witnessed_by: strList,
  immediate_emotional_effects: z.record(str, str),
  faction_effects: z.record(str, z.unknown()),
  relationship_effects: z.record(str, z.unknown()),
  rumor_effects: strList,
  succession_effects: str.optional(),
  warfront_effects: str.optional(),
  soul_flow_effect: str.optional(),
  death_meaning_by_domain: z.record(str, str),
  possible_afterlife_or_soul_issue: str.optional(),
  third_order_effect: str,
  fifth_order_effect: str,
});
export type DeathConsequence = z.infer<typeof DeathConsequence>;

/* §26 Romance Consequence ------------------------------------------ */
export const RomanceConsequence = z.object({
  npc_id: str,
  relationship_stage: str,
  affection_delta: Delta,
  trust_delta: Delta,
  vulnerability_delta: Delta,
  resentment_delta: Delta,
  public_visibility: str,
  faction_reaction: str,
  rival_reaction: str.optional(),
  conflict_with_duty: str.optional(),
  secret_revealed: str.optional(),
  future_test: str.optional(),
  third_order_effect: str,
  fifth_order_effect: str.optional(),
});
export type RomanceConsequence = z.infer<typeof RomanceConsequence>;

/* §27 If/Then/Because Rule ----------------------------------------- */
export const IfThenBecauseRule = z.object({
  if_condition: str,
  then_result: str,
  because_reason: str,
  domain_logic: str.optional(),
  faction_logic: str.optional(),
  npc_logic: str.optional(),
  power_logic: str.optional(),
  metaphysical_logic: str.optional(),
});
export type IfThenBecauseRule = z.infer<typeof IfThenBecauseRule>;

/* §34 Player Intervention Option ----------------------------------- */
export const PlayerInterventionOption = z.object({
  title: str,
  method: str,
  likely_cost: str,
  likely_benefit: str,
  risk: str,
  domain_alignment: strList,
  factions_helped: strList,
  factions_harmed: strList,
  possible_failure_result: str,
});
export type PlayerInterventionOption = z.infer<typeof PlayerInterventionOption>;

/* §35/§36 Failure & Success textures ------------------------------- */
export const FailureType = z.enum([
  "costly_success",
  "partial_success",
  "complication",
  "delayed_failure",
  "public_failure",
  "private_failure",
  "moral_failure",
  "metaphysical_failure",
  "relationship_failure",
  "faction_failure",
  "warfront_failure",
]);
export type FailureType = z.infer<typeof FailureType>;

export const SuccessType = z.enum([
  "clean_success",
  "costly_success",
  "public_success_private_cost",
  "private_success_public_suspicion",
  "tactical_success_strategic_cost",
  "moral_success_political_cost",
  "magical_success_soul_cost",
  "short_term_success_long_term_risk",
]);
export type SuccessType = z.infer<typeof SuccessType>;

/* Chunk 3 §29 Decision Analysis ------------------------------------ */
export const DecisionAnalysis = z.object({
  surface_action: str,
  actual_method: str,
  stated_intent: str.optional(),
  inferred_intent: str,
  action_type: str,
  public_visibility: PublicVisibility,
  domain_virtues_aligned: strList,
  domain_virtues_violated: strList,
  virtue_distortions_triggered: strList,
  who_benefits_immediately: strList,
  who_pays_immediately: strList,
  who_benefits_later: strList,
  who_pays_later: strList,
  witness_interpretations: z.array(WitnessInterpretation),
  keeper_benefit: z.enum(["none", "minor", "moderate", "major"]),
  void_lie_if_any: str.optional(),
  consequence_depth_required: ConsequenceDepth,
});
export type DecisionAnalysis = z.infer<typeof DecisionAnalysis>;
