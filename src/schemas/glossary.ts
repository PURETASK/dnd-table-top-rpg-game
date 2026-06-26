/**
 * Realm of Nexus / VERDAX — Tracking Glossary v1.0 (MUTABLE STATE)
 *
 * Source: Chunk 3 (VERDAX Tracking Glossary v1.0).
 * Campaign-specific, mutable world state. Kept separate from static lore
 * (`domain-bible.ts`) per Chunk 3 §2. The MVP table set is marked below
 * (Chunk 3 §35) and mirrored by `db/migrations/0001_init.sql`.
 */
import { z } from "zod";
import {
  Id,
  IdList,
  Stat,
  Balance,
  Domain,
  VisibilityLevel,
  RelationshipStatus,
  ActorType,
  TrainingAccess,
} from "./primitives.js";
import { ConsequenceNode } from "./causality.js";

const str = z.string();
const strList = z.array(z.string());
const num = z.number();
/** ISO 8601 timestamp string (DB stores as timestamptz). */
const Timestamp = z.string();

/* ================================================================== *
 * §5 Campaign State  [MVP]
 * ================================================================== */
export const CampaignState = z.object({
  id: Id,
  title: str,
  mode: z.enum(["solo_ai", "dm_guided", "admin_war_room", "hybrid"]),
  active_domain_focus: strList,
  starting_domain: str,
  current_region_id: str,
  campaign_phase: z.enum([
    "origin",
    "local_crisis",
    "regional_pressure",
    "domain_war",
    "cross_domain_escalation",
    "keeper_revelation",
    "final_convergence",
  ]),
  tone_tags: strList,
  difficulty: z.enum(["story", "balanced", "harsh", "mythic"]),
  current_main_arc: str,
  active_major_threats: strList,
  active_major_allies: strList,
  active_major_rivals: strList,
  created_at: Timestamp,
  updated_at: Timestamp,
});
export type CampaignState = z.infer<typeof CampaignState>;

/* §6 Campaign Metaphysics  [secondary] ----------------------------- */
export const CampaignMetaphysics = z.object({
  campaign_id: Id,
  keeper_prison_pressure: Stat,
  global_soul_flow_integrity: Stat,
  global_void_parasitism: Stat,
  global_reality_stability: Stat,
  architect_sacrifice_integrity: Stat,
  nexus_resonance_balance: Stat,
  active_soul_flow_wounds: IdList,
  active_keeper_exploits: IdList,
  active_void_echoes: IdList,
  active_domain_stone_crises: IdList,
  visibility_to_player: VisibilityLevel,
});
export type CampaignMetaphysics = z.infer<typeof CampaignMetaphysics>;

/* §8 Player Pattern State (embedded in CharacterState) -------------- */
export const PlayerPatternState = z.object({
  merciful_choices: num,
  ruthless_choices: num,
  sacrificial_choices: num,
  deceptive_choices: num,
  protective_choices: num,
  power_seeking_choices: num,
  forbidden_magic_uses: num,
  public_forbidden_magic_uses: num,
  private_forbidden_magic_uses: num,
  oaths_kept: num,
  oaths_broken: num,
  civilians_saved: num,
  civilians_abandoned: num,
  enemies_spared: num,
  enemies_executed: num,
  used_void_power: num,
  resisted_void_power: num,
  freed_bound_souls: num,
  bound_souls: num,
  exposed_truths: num,
  concealed_truths: num,
  dominant_identity_label: str,
  feared_identity_label: str,
  rumored_identity_label: str,
});
export type PlayerPatternState = z.infer<typeof PlayerPatternState>;

/* §7 Character State  [MVP] ---------------------------------------- */
export const CharacterState = z.object({
  id: Id,
  campaign_id: Id,
  name: str,
  ancestry: str,
  class_name: str,
  origin_domain: str,
  background: str,
  level: num,
  xp: num,
  hp: num,
  max_hp: num,
  mana: num,
  max_mana: num,
  stamina: num,
  max_stamina: num,
  gold: num,
  stats: z.object({
    strength: num,
    dexterity: num,
    constitution: num,
    intelligence: num,
    wisdom: num,
    charisma: num,
  }),
  conditions: strList,
  wounds: strList,
  inventory_ids: IdList,
  equipped_item_ids: IdList,
  domain_resonance: z.record(str, num),
  corruption: Stat,
  void_resonance: Stat,
  soul_integrity: Stat,
  identity_integrity: Stat,
  oath_burden: Stat,
  memory_stability: Stat,
  player_patterns: PlayerPatternState,
  public_reputation_summary: str,
  hidden_reputation_summary: str,
});
export type CharacterState = z.infer<typeof CharacterState>;

/* §9 Domain Tracking State  [MVP] ---------------------------------- */
export const DomainTrackingState = z.object({
  campaign_id: Id,
  domain: Domain,
  domain_stone_stability: Stat,
  soul_flow_integrity: Stat,
  keeper_pressure: Stat,
  void_parasitism: Stat,
  political_stability: Stat,
  military_strength: Stat,
  economic_strength: Stat,
  magical_strength: Stat,
  civilian_morale: Stat,
  resource_security: Stat,
  intelligence_strength: Stat,
  true_virtues_json: z.record(str, num),
  corrupted_virtues_json: z.record(str, num),
  active_warfront_ids: IdList,
  active_power_struggle_ids: IdList,
  active_rumor_ids: IdList,
  active_soul_flow_wound_ids: IdList,
  active_domain_crisis_ids: IdList,
  current_strategy: str,
  immediate_priority: str,
  long_term_priority: str,
});
export type DomainTrackingState = z.infer<typeof DomainTrackingState>;

/* §10 Domain Virtue State ------------------------------------------ */
export const DomainVirtueState = z.object({
  campaign_id: Id,
  domain: str,
  true_virtues: z.array(
    z.object({
      name: str,
      strength: Stat,
      public_health: Stat,
      faction_support: z.record(str, num),
    })
  ),
  corrupted_virtues: z.array(
    z.object({
      name: str,
      strength: Stat,
      source_true_virtue: str,
      active_factions: strList,
      active_rumors: strList,
      keeper_exploit_risk: Stat,
    })
  ),
  current_virtue_crisis: str,
  current_keeper_exploit: str,
});
export type DomainVirtueState = z.infer<typeof DomainVirtueState>;

/* §11 Faction State  [MVP] ----------------------------------------- */
export const FactionState = z.object({
  id: Id,
  campaign_id: Id,
  name: str,
  domain: str,
  doctrine: str,
  ideal_future: str,
  public_goal: str,
  hidden_goal: str,
  leader_npc_ids: IdList,
  champion_npc_ids: IdList,
  class_base: z.record(str, num),
  power_sources: z.object({
    military: num,
    economy: num,
    magic: num,
    religion: num,
    intelligence: num,
    legitimacy: num,
    resources: num,
    fear: num,
  }),
  resources_controlled: strList,
  locations_controlled: strList,
  magic_access: strList,
  military_units_controlled: strList,
  trade_routes_controlled: strList,
  internal_rivals: strList,
  external_enemies: strList,
  possible_allies: strList,
  secret_alliances: strList,
  infiltration_targets: strList,
  methods: z.object({
    diplomacy: num,
    open_war: num,
    sabotage: num,
    propaganda: num,
    assassination: num,
    trade_pressure: num,
    magical_escalation: num,
  }),
  player_standing: z.object({
    reputation: num,
    trust: num,
    fear: num,
    respect: num,
    suspicion: num,
    debt: num,
    leverage: num,
  }),
  keeper_exploit_vector: str,
  void_temptation_phrase: str,
  agenda_clock_ids: IdList,
  active_rumor_ids: IdList,
  current_status: str,
});
export type FactionState = z.infer<typeof FactionState>;

/* §12 NPC State  [MVP] --------------------------------------------- */
export const NPCState = z.object({
  id: Id,
  campaign_id: Id,
  name: str,
  domain: str,
  public_role: str,
  private_role: str.optional(),
  faction_ids: IdList,
  location_id: Id,
  belief_core: str,
  desire: str,
  // Renamed from the bible's `fear` (string) to avoid colliding with the
  // numeric `fear` relationship-stat below (Chunk 3 §12 lists both).
  core_fear: str,
  secret: str,
  public_mask: str,
  private_truth: str,
  hp: num,
  status: z.enum([
    "alive",
    "wounded",
    "missing",
    "captured",
    "dead",
    "undead",
    "transformed",
  ]),
  trust: num,
  fear: num,
  affection: num,
  suspicion: num,
  respect: num,
  debt: num,
  resentment: num,
  loyalty: num,
  relationship_to_player: RelationshipStatus,
  can_romance: z.boolean(),
  can_betray: z.boolean(),
  can_die: z.boolean(),
  can_kill: z.boolean(),
  can_defect: z.boolean(),
  can_start_rumors: z.boolean(),
  rumor_style: str,
  lie_style: str,
  loyalty_trigger: str,
  betrayal_trigger: str,
  death_consequence: str,
  hero_arc: str,
  villain_arc: str,
  memory_ids: IdList,
  agenda_clock_ids: IdList,
  visibility_to_player: VisibilityLevel,
});
export type NPCState = z.infer<typeof NPCState>;

/* §13 NPC Memory State  [MVP] -------------------------------------- */
export const NPCMemoryState = z.object({
  id: Id,
  campaign_id: Id,
  npc_id: Id,
  source_event_id: Id,
  factual_memory: str,
  emotional_interpretation: str,
  ideological_interpretation: str,
  trust_delta: num,
  fear_delta: num,
  affection_delta: num,
  suspicion_delta: num,
  respect_delta: num,
  resentment_delta: num,
  debt_delta: num,
  memory_strength: Stat,
  accuracy: Stat,
  can_be_forgotten: z.boolean(),
  can_be_distorted: z.boolean(),
  can_be_erased: z.boolean(),
  related_rumor_ids: IdList,
  related_consequence_chain_ids: IdList,
  visibility_to_player: VisibilityLevel,
});
export type NPCMemoryState = z.infer<typeof NPCMemoryState>;

/* §14 Relationship State  [MVP] ------------------------------------ */
export const RelationshipState = z.object({
  id: Id,
  campaign_id: Id,
  source_type: ActorType,
  source_id: Id,
  target_type: ActorType,
  target_id: Id,
  current_status: RelationshipStatus,
  previous_status: RelationshipStatus.optional(),
  trust: num,
  fear: num,
  respect: num,
  resentment: num,
  dependency: num,
  ideological_distance: num,
  shared_threat: num,
  shared_interest: num,
  leverage: num,
  debt: num,
  affection: num.optional(),
  can_improve: z.boolean(),
  can_worsen: z.boolean(),
  can_ally_temporarily: z.boolean(),
  can_betray: z.boolean(),
  current_reason: str,
  breaking_point: str,
  improvement_path: str,
  active_toleration_state_id: Id.optional(),
});
export type RelationshipState = z.infer<typeof RelationshipState>;

/* §15 Toleration State --------------------------------------------- */
export const TolerationState = z.object({
  id: Id,
  campaign_id: Id,
  source_id: Id,
  target_id: Id,
  toleration_reason: z.enum([
    "shared_enemy",
    "resource_need",
    "political_pressure",
    "public_debt",
    "private_affection",
    "contract",
    "hostage_balance",
    "mutual_blackmail",
    "temporary_ceasefire",
    "metaphysical_emergency",
  ]),
  toleration_limit: str,
  breaking_point: str,
  expected_duration: str,
  public_explanation: str,
  private_explanation: str,
  hidden_resentment_delta: num,
  future_betrayal_risk: Stat,
  active: z.boolean(),
});
export type TolerationState = z.infer<typeof TolerationState>;

/* §16 Rumor State  [MVP] ------------------------------------------- */
export const RumorState = z.object({
  id: Id,
  campaign_id: Id,
  title: str,
  original_truth: str,
  current_claim: str,
  original_event_id: Id.optional(),
  source: z.object({
    type: z.enum(["npc", "faction", "witness", "spy", "void_echo", "mistake", "admin"]),
    id: Id.optional(),
    motive: str,
    credibility: Stat,
    bias: str,
  }),
  accuracy: Stat,
  distortion_level: Stat,
  emotional_payload: z.enum([
    "fear",
    "hope",
    "anger",
    "shame",
    "awe",
    "grief",
    "envy",
    "devotion",
    "paranoia",
  ]),
  content_layers: z.object({
    factual_core: str,
    emotional_spin: str,
    moral_accusation: str,
    political_use: str,
    religious_interpretation: str,
    military_interpretation: str,
    economic_interpretation: str,
  }),
  spread: z.object({
    origin_location_id: Id,
    current_location_ids: IdList,
    channels: strList,
    speed: Stat,
    reach: Stat,
    intensity: Stat,
    mutation_rate: Stat,
  }),
  audience_reactions: z.array(
    z.object({
      actor_type: z.enum(["npc", "faction", "domain", "location"]),
      actor_id: Id,
      belief_probability: Stat,
      emotional_response: str,
      planned_action: str,
    })
  ),
  beneficiaries: strList,
  harmed_parties: strList,
  counter_rumor_ids: IdList,
  mutation_ids: IdList,
  suppression_attempt_ids: IdList,
  status: z.enum([
    "emerging",
    "spreading",
    "weaponized",
    "contested",
    "suppressed",
    "proven",
    "mutated",
    "dead",
  ]),
  consequence_chain_id: Id.optional(),
  visibility_to_player: VisibilityLevel,
});
export type RumorState = z.infer<typeof RumorState>;

/* §17 Consequence Chain State  [MVP] ------------------------------- */
export const ConsequenceChainState = z.object({
  id: Id,
  campaign_id: Id,
  title: str,
  root_event_id: Id,
  root_moral_question: str,
  root_domain_logic: str,
  current_depth: num,
  max_depth: z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4), z.literal(5)]),
  nodes: z.array(ConsequenceNode),
  domains_touched: strList,
  factions_touched: strList,
  npcs_touched: strList,
  locations_touched: strList,
  warfronts_touched: strList,
  rumors_touched: strList,
  keeper_gain: num,
  void_gain: num,
  soul_flow_damage: num,
  status: z.enum(["active", "resolved", "mutated", "dormant", "failed"]),
  visibility_to_player: VisibilityLevel,
});
export type ConsequenceChainState = z.infer<typeof ConsequenceChainState>;

/* §18 Pressure Clock State  [MVP] ---------------------------------- */
export const PressureClockState = z.object({
  id: Id,
  campaign_id: Id,
  name: str,
  description: str,
  clock_type: z.enum([
    "threat",
    "opportunity",
    "corruption",
    "war_escalation",
    "rumor_spread",
    "npc_agenda",
    "faction_agenda",
    "keeper_pressure",
    "void_parasitism",
    "resource_shortage",
  ]),
  current_value: num,
  max_value: num,
  owner_type: z.enum(["npc", "faction", "domain", "location", "system"]).optional(),
  owner_id: Id.optional(),
  trigger_event: str,
  partial_tick_effects: strList,
  completed_effect: str,
  reversal_methods: strList,
  is_active: z.boolean(),
  visibility_to_player: VisibilityLevel,
});
export type PressureClockState = z.infer<typeof PressureClockState>;

/* §19 Warfront State  [secondary] ---------------------------------- */
export const WarFrontState = z.object({
  id: Id,
  campaign_id: Id,
  name: str,
  domains_involved: strList,
  factions_involved: strList,
  locations_involved: strList,
  conflict_type: z.enum([
    "open_war",
    "border_skirmish",
    "trade_war",
    "proxy_war",
    "espionage",
    "magical_contamination",
    "religious_legitimacy",
    "resource_blockade",
    "soul_flow_conflict",
  ]),
  current_balance: Balance,
  active_objectives: strList,
  hidden_objectives: strList,
  resources_at_stake: strList,
  magic_systems_at_stake: strList,
  escalation_clock_id: Id,
  possible_outcomes: strList,
  player_intervention_points: strList,
  current_status: z.enum(["cold", "active", "escalating", "ceasefire", "collapsing", "resolved"]),
});
export type WarFrontState = z.infer<typeof WarFrontState>;

/* §20 Magic System State (campaign instance)  [secondary] ---------- */
export const MagicSystemState = z.object({
  id: Id,
  campaign_id: Id,
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
  faction_control: z.record(str, num),
  keeper_corruption_vector: str,
  void_enhancement_vector: str,
  current_instability: Stat,
  active_abuse_cases: strList,
});
export type MagicSystemState = z.infer<typeof MagicSystemState>;

/* §21 Location State  [MVP] ---------------------------------------- */
export const LocationState = z.object({
  id: Id,
  campaign_id: Id,
  name: str,
  domain: str,
  location_type: str,
  controlling_faction_id: Id.optional(),
  contested_by_faction_ids: IdList,
  stability: Stat,
  danger: Stat,
  corruption: Stat,
  morale: Stat,
  resources: Stat,
  secrecy: Stat,
  military_pressure: Stat,
  spiritual_health: Stat,
  economic_health: Stat,
  rumor_activity: Stat,
  key_npc_ids: IdList,
  active_quest_ids: IdList,
  active_rumor_ids: IdList,
  active_pressure_clock_ids: IdList,
  active_soul_flow_wound_ids: IdList,
  known_secrets: strList,
  hidden_secrets: strList,
  current_mood: str,
  visual_state_tags: strList,
});
export type LocationState = z.infer<typeof LocationState>;

/* §22 Quest State  [MVP] ------------------------------------------- */
export const QuestState = z.object({
  id: Id,
  campaign_id: Id,
  title: str,
  description: str,
  status: z.enum([
    "unknown",
    "available",
    "active",
    "completed",
    "failed",
    "mutated",
    "locked",
    "abandoned",
  ]),
  domain: str,
  location_ids: IdList,
  faction_ids: IdList,
  npc_ids: IdList,
  known_objectives: strList,
  hidden_objectives: strList,
  completed_objectives: strList,
  failed_objectives: strList,
  possible_resolutions: strList,
  chosen_resolution: str.optional(),
  moral_cost: str.optional(),
  faction_winners: strList,
  faction_losers: strList,
  location_changes: strList,
  future_hooks: strList,
  consequence_chain_ids: IdList,
  rumor_ids: IdList,
  pressure_clock_ids: IdList,
});
export type QuestState = z.infer<typeof QuestState>;

/* §23 Relic State  [secondary] ------------------------------------- */
export const RelicState = z.object({
  id: Id,
  campaign_id: Id,
  name: str,
  origin_domain: str,
  relic_type: str,
  rarity: str,
  maker: str.optional(),
  previous_owner: str.optional(),
  soul_imprint: str.optional(),
  faction_claims: strList,
  known_history: str,
  hidden_history: str,
  loyalty: num,
  hunger: num,
  corruption_level: Stat,
  void_resonance: Stat,
  awakening_progress: Stat,
  awakening_conditions: strList,
  backlash_conditions: strList,
  current_owner_id: Id.optional(),
  powers_known: strList,
  powers_hidden: strList,
  cost_to_use: str,
  abuse_mode: str,
  related_quest_ids: IdList,
  related_consequence_chain_ids: IdList,
});
export type RelicState = z.infer<typeof RelicState>;

/* §24 Soul-Flow Wound State  [secondary] --------------------------- */
export const SoulFlowWoundState = z.object({
  id: Id,
  campaign_id: Id,
  name: str,
  origin_event_id: Id,
  domain: str,
  location_id: Id.optional(),
  wound_type: z.enum([
    "soul_binding",
    "name_erasure",
    "memory_fracture",
    "false_rebirth",
    "broken_oath",
    "grief_harvest",
    "identity_dissolution",
    "death_passage_blocked",
    "void_amplification",
    "domain_stone_drain",
  ]),
  severity: Stat,
  visibility: VisibilityLevel,
  affected_npc_ids: IdList,
  affected_faction_ids: IdList,
  affected_location_ids: IdList,
  keeper_pressure_delta: num,
  void_parasitism_delta: num,
  symptoms: strList,
  possible_healing_methods: strList,
  ignored_consequence: str,
  active: z.boolean(),
});
export type SoulFlowWoundState = z.infer<typeof SoulFlowWoundState>;

/* §25 Keeper Exploit Event  [secondary] ---------------------------- */
export const KeeperExploitEvent = z.object({
  id: Id,
  campaign_id: Id,
  source_event_id: Id,
  exploited_domain: str,
  exploited_virtue: str,
  distorted_form: str,
  keeper_strategy: z.enum([
    "soul_flow_disruption",
    "domain_division",
    "virtue_inversion",
    "memory_damage",
    "identity_damage",
    "oath_corrosion",
    "death_passage_disruption",
    "domain_stone_destabilization",
    "war_escalation",
    "void_dependency",
  ]),
  immediate_gain: num,
  delayed_gain_possible: num,
  explanation: str,
  prevention_path: str.optional(),
  visibility_to_player: VisibilityLevel,
});
export type KeeperExploitEvent = z.infer<typeof KeeperExploitEvent>;

/* §26 Void Temptation Event  [secondary] --------------------------- */
export const VoidTemptationEvent = z.object({
  id: Id,
  campaign_id: Id,
  source_event_id: Id.optional(),
  target_type: z.enum(["player", "npc", "faction", "domain", "relic"]),
  target_id: Id,
  offered_lie: str,
  immediate_benefit: str,
  hidden_cost: str,
  accepted: z.boolean(),
  resisted: z.boolean(),
  void_resonance_delta: num,
  identity_integrity_delta: num,
  soul_flow_delta: num,
  reality_stability_delta: num,
  future_whisper: str.optional(),
  future_consequence_chain_id: Id.optional(),
  visibility_to_player: VisibilityLevel,
});
export type VoidTemptationEvent = z.infer<typeof VoidTemptationEvent>;

/* §27 World Event  [MVP] ------------------------------------------- */
export const WorldEvent = z.object({
  id: Id,
  campaign_id: Id,
  turn_id: Id.optional(),
  event_type: z.enum([
    "mercy",
    "betrayal",
    "public_magic",
    "secret_magic",
    "death",
    "rescue",
    "contract",
    "rumor",
    "trial",
    "battle",
    "relic_use",
    "void_escalation",
    "soul_flow_disruption",
    "warfront_shift",
    "relationship_shift",
    "quest_resolution",
  ]),
  event_title: str,
  factual_summary: str,
  public_interpretation: str,
  hidden_interpretation: str,
  actor_ids: IdList,
  target_ids: IdList,
  witness_ids: IdList,
  witness_faction_ids: IdList,
  location_id: Id,
  domain_context: str,
  virtues_invoked: strList,
  virtues_distorted: strList,
  sins_triggered: strList,
  magic_used: str.optional(),
  void_involved: z.boolean(),
  keeper_advantage_delta: num,
  soul_flow_delta: num,
  immediate_effects: z.record(str, z.unknown()),
  consequence_chain_ids: IdList,
  rumor_ids_created: IdList,
  pressure_clock_ids_modified: IdList,
  permanence: z.enum(["minor", "moderate", "major", "mythic"]),
  visibility_to_player: VisibilityLevel,
});
export type WorldEvent = z.infer<typeof WorldEvent>;

/* §28 Turn Log  [MVP] ---------------------------------------------- */
export const TurnLog = z.object({
  id: Id,
  campaign_id: Id,
  character_id: Id,
  turn_number: num,
  player_input: str,
  verdax_narrative: str,
  choices_presented: strList,
  skill_check_json: z.record(str, z.unknown()).optional(),
  decision_analysis_json: z.record(str, z.unknown()),
  consequences_json: z.record(str, z.unknown()),
  world_event_ids: IdList,
  updated_state_summary: str,
  memory_summary: str,
  created_at: Timestamp,
});
export type TurnLog = z.infer<typeof TurnLog>;
