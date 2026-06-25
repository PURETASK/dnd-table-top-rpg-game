/**
 * Realm of Nexus / VERDAX — Response Contract & Prompt Context
 *
 * Source: Chunk 3 §30 (VERDAX Response Contract), §31 (Prompt Context Bundle),
 * §32 (State Update Order). This is the boundary every model turn must cross:
 * VERDAX output is validated against `VerdaxTurnResponse` BEFORE any state
 * mutation is applied (Chunk 3 §37, Chunk 4 §38).
 */
import { z } from "zod";
import { DecisionAnalysis } from "./causality.js";
import {
  CampaignState,
  CampaignMetaphysics,
  CharacterState,
  DomainTrackingState,
  DomainVirtueState,
  LocationState,
  FactionState,
  NPCState,
  RelationshipState,
  QuestState,
  RumorState,
  PressureClockState,
  WarFrontState,
  SoulFlowWoundState,
  MagicSystemState,
  RelicState,
  WorldEvent,
  ConsequenceChainState,
} from "./glossary.js";

const str = z.string();
const changeBucket = z.record(str, z.unknown());

/* §30 VERDAX Response Contract ------------------------------------- */
export const VerdaxTurnResponse = z.object({
  narrative: str,
  choices: z.array(
    z.object({
      id: str,
      label: str,
      risk_hint: str,
      likely_domain_alignment: str.optional(),
    })
  ),
  skill_check: z
    .object({
      required: z.boolean(),
      stat: str.optional(),
      dc: z.number().optional(),
      roll: z.number().optional(),
      modifier: z.number().optional(),
      total: z.number().optional(),
      success: z.boolean().optional(),
      failure_cost_if_failed: str.optional(),
    })
    .optional(),
  decision_analysis: DecisionAnalysis,
  mechanical_consequences: z
    .object({
      character: changeBucket.optional(),
      domain_states: changeBucket.optional(),
      factions: changeBucket.optional(),
      npcs: changeBucket.optional(),
      relationships: changeBucket.optional(),
      locations: changeBucket.optional(),
      quests: changeBucket.optional(),
      rumors: changeBucket.optional(),
      pressure_clocks: changeBucket.optional(),
      warfronts: changeBucket.optional(),
      magic_systems: changeBucket.optional(),
      relics: changeBucket.optional(),
      soul_flow: changeBucket.optional(),
      keeper: changeBucket.optional(),
      void: changeBucket.optional(),
    })
    .partial(),
  new_world_events: z.array(WorldEvent),
  new_or_updated_consequence_chains: z.array(ConsequenceChainState),
  new_or_updated_rumors: z.array(RumorState),
  player_facing_consequence_panel: z.array(str),
  expanded_why_this_happened: str,
  memory_summary: str,
});
export type VerdaxTurnResponse = z.infer<typeof VerdaxTurnResponse>;

/* §31 Prompt Context Bundle ---------------------------------------- */
export const VerdaxPromptContext = z.object({
  campaign: CampaignState,
  campaign_metaphysics: CampaignMetaphysics,
  character: CharacterState,
  current_domain_state: DomainTrackingState,
  relevant_domain_virtue_states: z.array(DomainVirtueState),
  current_location: LocationState,
  active_factions: z.array(FactionState),
  active_npcs: z.array(NPCState),
  active_relationships: z.array(RelationshipState),
  active_quests: z.array(QuestState),
  active_rumors: z.array(RumorState),
  active_pressure_clocks: z.array(PressureClockState),
  active_warfronts: z.array(WarFrontState),
  active_soul_flow_wounds: z.array(SoulFlowWoundState),
  relevant_magic_systems: z.array(MagicSystemState),
  relevant_relics: z.array(RelicState),
  recent_turn_summaries: z.array(str),
  relevant_world_flags: z.record(str, z.unknown()),
});
export type VerdaxPromptContext = z.infer<typeof VerdaxPromptContext>;

/* §32 State Update Order (LOCKED) ---------------------------------- *
 * VERDAX consequences must be applied in this exact sequence so that
 * scene changes settle before social interpretation, systems, then
 * metaphysics: Action → Witness → Interpretation → Social → System → Metaphysical.
 */
export const STATE_UPDATE_ORDER = [
  "validate_verdax_json",
  "create_turn_log",
  "create_world_events",
  "apply_character_changes",
  "apply_npc_memory_changes",
  "apply_relationship_changes",
  "apply_faction_changes",
  "apply_location_changes",
  "apply_quest_changes",
  "apply_rumor_changes",
  "apply_pressure_clock_changes",
  "apply_warfront_changes",
  "apply_magic_relic_changes",
  "apply_soul_flow_wounds",
  "apply_domain_virtue_and_domain_state_changes",
  "apply_keeper_void_changes",
  "generate_memory_summary",
  "return_player_facing_narrative_and_panel",
] as const;
export type StateUpdateStep = (typeof STATE_UPDATE_ORDER)[number];
