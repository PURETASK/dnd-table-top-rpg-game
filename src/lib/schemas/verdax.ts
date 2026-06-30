import { z } from "zod";

/**
 * Zod schemas mirroring the VERDAX response contract from
 * docs/01-foundation/chunk-03-verdax-tracking-glossary.md (VerdaxTurnResponse)
 * and docs/05-systems/verdax-turn-engine.md.
 *
 * Every model response is validated against `VerdaxTurnResponse` BEFORE any
 * state is written to the database. If validation fails, the engine repairs
 * once, else falls back to a narration-only response with no writes.
 */

export const Visibility = z.enum([
  "hidden",
  "hinted",
  "rumored",
  "partial",
  "confirmed",
  "mythic_truth",
]);

export const ConsequenceDepth = z.union([
  z.literal(1),
  z.literal(2),
  z.literal(3),
  z.literal(4),
  z.literal(5),
]);

export const WitnessInterpretation = z.object({
  witness_type: z.enum(["npc", "faction", "crowd", "spy", "spirit", "unknown"]),
  witness_id: z.string().optional(),
  saw_event_accuracy: z.number().min(0).max(100),
  emotional_reaction: z.string(),
  ideological_interpretation: z.string(),
  likely_action: z.string(),
  rumor_variant_created: z.string().optional(),
});

export const DecisionAnalysis = z.object({
  surface_action: z.string(),
  actual_method: z.string(),
  stated_intent: z.string().optional(),
  inferred_intent: z.string(),
  action_type: z.string(),
  public_visibility: z.enum(["none", "private", "small_group", "public", "mythic"]),
  domain_virtues_aligned: z.array(z.string()).default([]),
  domain_virtues_violated: z.array(z.string()).default([]),
  virtue_distortions_triggered: z.array(z.string()).default([]),
  who_benefits_immediately: z.array(z.string()).default([]),
  who_pays_immediately: z.array(z.string()).default([]),
  who_benefits_later: z.array(z.string()).default([]),
  who_pays_later: z.array(z.string()).default([]),
  witness_interpretations: z.array(WitnessInterpretation).default([]),
  keeper_benefit: z.enum(["none", "minor", "moderate", "major"]),
  void_lie_if_any: z.string().optional(),
  consequence_depth_required: ConsequenceDepth,
});

export const SkillCheck = z.object({
  required: z.boolean(),
  stat: z.string().optional(),
  dc: z.number().optional(),
  roll: z.number().optional(),
  modifier: z.number().optional(),
  total: z.number().optional(),
  success: z.boolean().optional(),
  failure_cost_if_failed: z.string().optional(),
});

export const Choice = z.object({
  id: z.string(),
  label: z.string(),
  risk_hint: z.string(),
  likely_domain_alignment: z.string().optional(),
});

/**
 * mechanical_consequences is intentionally permissive: it carries arbitrary
 * deltas keyed by entity reference. The apply layer interprets each bucket in
 * the locked write order. Values are validated structurally (records of
 * unknown) and bounds-checked at apply time.
 */
const DeltaBucket = z.record(z.string(), z.unknown());

export const MechanicalConsequences = z.object({
  character: DeltaBucket.optional(),
  domain_states: DeltaBucket.optional(),
  factions: DeltaBucket.optional(),
  npcs: DeltaBucket.optional(),
  relationships: DeltaBucket.optional(),
  locations: DeltaBucket.optional(),
  quests: DeltaBucket.optional(),
  rumors: DeltaBucket.optional(),
  pressure_clocks: DeltaBucket.optional(),
  warfronts: DeltaBucket.optional(),
  magic_systems: DeltaBucket.optional(),
  relics: DeltaBucket.optional(),
  soul_flow: DeltaBucket.optional(),
  keeper: DeltaBucket.optional(),
  void: DeltaBucket.optional(),
});

export const WorldEventInput = z.object({
  event_type: z.string(),
  event_title: z.string(),
  factual_summary: z.string(),
  public_interpretation: z.string().optional(),
  hidden_interpretation: z.string().optional(),
  actor_ids: z.array(z.string()).default([]),
  target_ids: z.array(z.string()).default([]),
  witness_ids: z.array(z.string()).default([]),
  witness_faction_ids: z.array(z.string()).default([]),
  location_id: z.string().optional(),
  domain_context: z.string().optional(),
  virtues_invoked: z.array(z.string()).default([]),
  virtues_distorted: z.array(z.string()).default([]),
  magic_used: z.string().optional(),
  void_involved: z.boolean().default(false),
  keeper_advantage_delta: z.number().default(0),
  soul_flow_delta: z.number().default(0),
  permanence: z.enum(["minor", "moderate", "major", "mythic"]).default("minor"),
  visibility: Visibility.default("confirmed"),
});

export const ConsequenceChainInput = z.object({
  title: z.string(),
  root_moral_question: z.string().optional(),
  root_domain_logic: z.string().optional(),
  max_depth: ConsequenceDepth.default(3),
  nodes: z.array(z.unknown()).default([]),
  domains_touched: z.array(z.string()).default([]),
  factions_touched: z.array(z.string()).default([]),
  npcs_touched: z.array(z.string()).default([]),
  keeper_gain: z.number().default(0),
  void_gain: z.number().default(0),
  soul_flow_damage: z.number().default(0),
  visibility: Visibility.default("hidden"),
});

export const RumorInput = z.object({
  title: z.string(),
  original_truth: z.string(),
  current_claim: z.string(),
  source: z.object({
    type: z.enum(["npc", "faction", "witness", "spy", "void_echo", "mistake", "admin"]),
    id: z.string().optional(),
    motive: z.string(),
    bias: z.string(),
    credibility: z.number().min(0).max(100),
  }),
  accuracy: z.number().min(0).max(100),
  distortion_level: z.number().min(0).max(100),
  emotional_payload: z.enum([
    "fear", "hope", "anger", "shame", "awe", "grief", "envy", "devotion", "paranoia",
  ]),
  content_layers: z.record(z.string(), z.string()).default({}),
  spread: z.object({
    origin_location_id: z.string(),
    current_location_ids: z.array(z.string()).default([]),
    channels: z.array(z.string()).default([]),
    speed: z.number().default(0),
    reach: z.number().default(0),
    intensity: z.number().default(0),
    mutation_rate: z.number().default(0),
  }),
  beneficiaries: z.array(z.string()).default([]),
  harmed_parties: z.array(z.string()).default([]),
  visibility: Visibility.default("rumored"),
});

export const VerdaxTurnResponse = z.object({
  narrative: z.string(),
  choices: z.array(Choice).default([]),
  skill_check: SkillCheck.optional(),
  decision_analysis: DecisionAnalysis,
  mechanical_consequences: MechanicalConsequences.default({}),
  new_world_events: z.array(WorldEventInput).default([]),
  new_or_updated_consequence_chains: z.array(ConsequenceChainInput).default([]),
  new_or_updated_rumors: z.array(RumorInput).default([]),
  player_facing_consequence_panel: z.array(z.string()).default([]),
  expanded_why_this_happened: z.string(),
  memory_summary: z.string(),
});

export type VerdaxTurnResponse = z.infer<typeof VerdaxTurnResponse>;
export type MechanicalConsequences = z.infer<typeof MechanicalConsequences>;
export type DecisionAnalysis = z.infer<typeof DecisionAnalysis>;
export type WorldEventInput = z.infer<typeof WorldEventInput>;

/** Player turn request. */
export const VerdaxTurnRequest = z.object({
  campaignId: z.string().min(1),
  characterId: z.string().min(1),
  input: z.string().min(1).max(4000),
});
export type VerdaxTurnRequest = z.infer<typeof VerdaxTurnRequest>;
