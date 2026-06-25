# Chunk 3 — VERDAX Tracking Glossary v1.0

- **Lead:** TURN-ENGINEER · **QA:** SCHEMA-FORGE · **Support:** DOMAIN-ARCHIVIST, FACTION-WEAVER, CAUSALITY-SMITH
- **Status:** Locked v1.0

The shared **state language** for VERDAX. VERDAX is a persistent world-state
engine, not only a narrator. Every major piece of lore becomes one of: static
canon, mutable world state, player-visible consequence, hidden consequence,
prompt context, database field, event log, or future trigger.

## Static canon vs mutable state

- **Static canon** (baseline truth): lives in lore docs, seed JSON, admin canon files, system prompt. Does not normally change during play. *(e.g. "The Keeper is the evil Architect.")*
- **Mutable state** (campaign-specific): lives in database rows, event logs, campaign JSON, turn logs. *(e.g. "Radiance Stone stability is 61/100.")*

> Static canon defines possibility. Mutable state defines what has happened.

## Numeric scale standard (0–100 unless noted)

0–10 absent/collapsed · 11–20 critical · 21–40 weak/unstable · 41–60
contested/strained · 61–80 functional/strong · 81–95 dominant/stable · 96–100
mythic/extreme.

**Deltas:** ±1 subtle · ±2–3 minor · ±4–6 meaningful · ±7–10 major · ±11–20
severe · ±21+ mythic/catastrophic.

## Visibility standard

```ts
VisibilityLevel = "hidden" | "hinted" | "rumored" | "partial" | "confirmed" | "mythic_truth"
```

VERDAX may track hidden truth but must not reveal it unless the player has earned
or triggered discovery.

## Campaign state

```ts
CampaignState {
  id, title: string
  mode: "solo_ai" | "dm_guided" | "admin_war_room" | "hybrid"
  active_domain_focus: string[]; starting_domain, current_region_id: string
  campaign_phase: "origin" | "local_crisis" | "regional_pressure" | "domain_war"
    | "cross_domain_escalation" | "keeper_revelation" | "final_convergence"
  tone_tags: string[]; difficulty: "story" | "balanced" | "harsh" | "mythic"
  current_main_arc: string
  active_major_threats, active_major_allies, active_major_rivals: string[]
  created_at, updated_at: Date
}
```
Phase determines how large consequences should be (a village rumor in *origin*
vs a diplomatic-alliance rumor in *cross_domain_escalation*).

## Campaign metaphysics

```ts
CampaignMetaphysics {
  campaign_id: string
  keeper_prison_pressure, global_soul_flow_integrity, global_void_parasitism,
  global_reality_stability, architect_sacrifice_integrity, nexus_resonance_balance: number
  active_soul_flow_wounds, active_keeper_exploits, active_void_echoes, active_domain_stone_crises: string[]
  visibility_to_player: VisibilityLevel
}
```
Keeper pressure should usually rise through **indirect chains**, not random jumps
(Void use → soul-flow damage → rumor → faction paranoia → Sanctuary unity drop →
Beacon harmony drop → Keeper pressure rises).

## Character state

```ts
CharacterState {
  id, campaign_id, name, ancestry, class_name, origin_domain, background: string
  level, xp, hp, max_hp, mana, max_mana, stamina, max_stamina, gold: number
  stats: { strength, dexterity, constitution, intelligence, wisdom, charisma: number }
  conditions, wounds, inventory_ids, equipped_item_ids: string[]
  domain_resonance: Record<string, number>
  corruption, void_resonance, soul_integrity, identity_integrity,
  oath_burden, memory_stability: number
  player_patterns: PlayerPatternState
  public_reputation_summary, hidden_reputation_summary: string
}
```
Critical metaphysical fields: **soul_integrity** (whole/bound/scarred/split),
**identity_integrity** (selfhood stability), **oath_burden** (weight of vows/debts),
**memory_stability**, **void_resonance**. The player can gain power while losing
integrity — this creates temptation.

```ts
PlayerPatternState {
  merciful_choices, ruthless_choices, sacrificial_choices, deceptive_choices,
  protective_choices, power_seeking_choices, forbidden_magic_uses,
  public_forbidden_magic_uses, private_forbidden_magic_uses, oaths_kept, oaths_broken,
  civilians_saved, civilians_abandoned, enemies_spared, enemies_executed,
  used_void_power, resisted_void_power, freed_bound_souls, bound_souls,
  exposed_truths, concealed_truths: number
  dominant_identity_label, feared_identity_label, rumored_identity_label: string
}
```
Labels emerge from behavior: "The Mercy-Bearer," "The Black-Flame Stranger," "The
Oathbreaker," "The Rootwell-Touched," "The Soul-Thief," "The One Who Does Not Kneel."

## Domain tracking state

```ts
DomainTrackingState {
  campaign_id: string
  domain: "Radiance"|"Verdance"|"Tempest"|"Sanctuary"|"Abyss"
  domain_stone_stability, soul_flow_integrity, keeper_pressure, void_parasitism,
  political_stability, military_strength, economic_strength, magical_strength,
  civilian_morale, resource_security, intelligence_strength: number
  true_virtues_json, corrupted_virtues_json: Record<string, number>
  active_warfront_ids, active_power_struggle_ids, active_rumor_ids,
  active_soul_flow_wound_ids, active_domain_crisis_ids: string[]
  current_strategy, immediate_priority, long_term_priority: string
}
```
A domain can be militarily strong but spiritually weak (high military, low
soul-flow, high martyr-addiction → wins battles while becoming easier to exploit).

```ts
DomainVirtueState {
  campaign_id, domain: string
  true_virtues: { name: string; strength, public_health: number; faction_support: Record<string, number> }[]
  corrupted_virtues: { name, source_true_virtue: string; strength: number;
    active_factions, active_rumors: string[]; keeper_exploit_risk: number }[]
  current_virtue_crisis, current_keeper_exploit: string
}
```

## Faction state

```ts
FactionState {
  id, campaign_id, name, domain, doctrine, ideal_future, public_goal, hidden_goal: string
  leader_npc_ids, champion_npc_ids: string[]
  class_base: Record<string, number>
  power_sources: { military, economy, magic, religion, intelligence, legitimacy, resources, fear: number }
  resources_controlled, locations_controlled, magic_access, military_units_controlled,
  trade_routes_controlled, internal_rivals, external_enemies, possible_allies,
  secret_alliances, infiltration_targets: string[]
  methods: { diplomacy, open_war, sabotage, propaganda, assassination, trade_pressure, magical_escalation: number }
  player_standing: { reputation, trust, fear, respect, suspicion, debt, leverage: number }
  keeper_exploit_vector, void_temptation_phrase: string
  agenda_clock_ids, active_rumor_ids: string[]; current_status: string
}
```
Reputation is not enough: a faction may respect but not trust, fear but
cooperate, owe but resent, hate but need, admire competence but reject methods.

## NPC state & memory

```ts
NPCState {
  id, campaign_id, name, domain, public_role: string; private_role?: string
  faction_ids: string[]; location_id, belief_core, desire, fear, secret,
  public_mask, private_truth: string
  hp: number; status: "alive"|"wounded"|"missing"|"captured"|"dead"|"undead"|"transformed"
  trust, fear, affection, suspicion, respect, debt, resentment, loyalty: number
  relationship_to_player: RelationshipStatus
  can_romance, can_betray, can_die, can_kill, can_defect, can_start_rumors: boolean
  rumor_style, lie_style, loyalty_trigger, betrayal_trigger, death_consequence,
  hero_arc, villain_arc: string
  memory_ids, agenda_clock_ids: string[]; visibility_to_player: VisibilityLevel
}

NPCMemoryState {
  id, campaign_id, npc_id, source_event_id: string
  factual_memory, emotional_interpretation, ideological_interpretation: string
  trust_delta, fear_delta, affection_delta, suspicion_delta, respect_delta,
  resentment_delta, debt_delta, memory_strength, accuracy: number
  can_be_forgotten, can_be_distorted, can_be_erased: boolean
  related_rumor_ids, related_consequence_chain_ids: string[]
  visibility_to_player: VisibilityLevel
}
```
NPC behavior formula: *IF pressure activates desire/fear/duty/debt/love/secret,
THEN the NPC acts, BECAUSE domain logic + personal state make it believable.*
Memories separate **factual** from **emotional** and **ideological** interpretation.

## Relationship & toleration state

```ts
RelationshipStatus =
  "devoted_ally" | "trusted_ally" | "conditional_ally" | "uneasy_partner"
  | "tolerable_rival" | "neutral" | "suspicious_contact" | "active_rival"
  | "declared_enemy" | "blood_enemy" | "existential_enemy"

RelationshipState {
  id, campaign_id: string
  source_type, target_type: "player"|"npc"|"faction"|"domain"|"location"
  source_id, target_id: string
  current_status: RelationshipStatus; previous_status?: RelationshipStatus
  trust, fear, respect, resentment, dependency, ideological_distance,
  shared_threat, shared_interest, leverage, debt: number; affection?: number
  can_improve, can_worsen, can_ally_temporarily, can_betray: boolean
  current_reason, breaking_point, improvement_path: string
  active_toleration_state_id?: string
}

TolerationState {
  id, campaign_id, source_id, target_id: string
  toleration_reason: "shared_enemy"|"resource_need"|"political_pressure"|"public_debt"
    |"private_affection"|"contract"|"hostage_balance"|"mutual_blackmail"
    |"temporary_ceasefire"|"metaphysical_emergency"
  toleration_limit, breaking_point, expected_duration,
  public_explanation, private_explanation: string
  hidden_resentment_delta, future_betrayal_risk: number; active: boolean
}
```
No relationship is fixed: enemies cooperate when pressure overrides hatred;
allies fracture when sacred principles are violated.

## Rumor state

```ts
RumorState {
  id, campaign_id, title, original_truth, current_claim: string; original_event_id?: string
  source: { type: "npc"|"faction"|"witness"|"spy"|"void_echo"|"mistake"|"admin";
            id?: string; motive, bias: string; credibility: number }
  accuracy, distortion_level: number
  emotional_payload: "fear"|"hope"|"anger"|"shame"|"awe"|"grief"|"envy"|"devotion"|"paranoia"
  content_layers: { factual_core, emotional_spin, moral_accusation, political_use,
                    religious_interpretation, military_interpretation, economic_interpretation: string }
  spread: { origin_location_id: string; current_location_ids, channels: string[];
            speed, reach, intensity, mutation_rate: number }
  audience_reactions: { actor_type: "npc"|"faction"|"domain"|"location"; actor_id: string;
                        belief_probability: number; emotional_response, planned_action: string }[]
  beneficiaries, harmed_parties, counter_rumor_ids, mutation_ids, suppression_attempt_ids: string[]
  status: "emerging"|"spreading"|"weaponized"|"contested"|"suppressed"|"proven"|"mutated"|"dead"
  consequence_chain_id?: string; visibility_to_player: VisibilityLevel
}
```

## Consequence chains & pressure clocks

```ts
ConsequenceChainState {
  id, campaign_id, title, root_event_id, root_moral_question, root_domain_logic: string
  current_depth: number; max_depth: 1|2|3|4|5; nodes: ConsequenceNode[]
  domains_touched, factions_touched, npcs_touched, locations_touched,
  warfronts_touched, rumors_touched: string[]
  keeper_gain, void_gain, soul_flow_damage: number
  status: "active"|"resolved"|"mutated"|"dormant"|"failed"; visibility_to_player: VisibilityLevel
}

ConsequenceNode {
  depth: 1|2|3|4|5
  timing: "immediate"|"scene"|"session"|"future_session"|"campaign"
  trigger_condition, event_description, narrative_reason, possible_player_intervention: string
  if_ignored_next_node?: string
  mechanical_effects: { character_changes?, faction_changes?, npc_changes?,
    location_changes?, quest_changes?, rumor_changes?, pressure_clock_changes?,
    domain_changes?, soul_flow_changes?: Record<string, any> }
}

PressureClockState {
  id, campaign_id, name, description: string
  clock_type: "threat"|"opportunity"|"corruption"|"war_escalation"|"rumor_spread"
    |"npc_agenda"|"faction_agenda"|"keeper_pressure"|"void_parasitism"|"resource_shortage"
  current_value, max_value: number
  owner_type?: "npc"|"faction"|"domain"|"location"|"system"; owner_id?: string
  trigger_event: string; partial_tick_effects: string[]
  completed_effect: string; reversal_methods: string[]
  is_active: boolean; visibility_to_player: VisibilityLevel
}
```

## Warfront, magic, location, quest, relic

```ts
WarFrontState {
  id, campaign_id, name: string; domains_involved, factions_involved, locations_involved: string[]
  conflict_type: "open_war"|"border_skirmish"|"trade_war"|"proxy_war"|"espionage"
    |"magical_contamination"|"religious_legitimacy"|"resource_blockade"|"soul_flow_conflict"
  current_balance: number  // -100 enemy total .. 0 contested .. +100 ally total
  active_objectives, hidden_objectives, resources_at_stake, magic_systems_at_stake: string[]
  escalation_clock_id: string; possible_outcomes, player_intervention_points: string[]
  current_status: "cold"|"active"|"escalating"|"ceasefire"|"collapsing"|"resolved"
}

MagicSystemState { /* see Chunk 2 — tracked as political/economic/spiritual/military asset */ }

LocationState {
  id, campaign_id, name, domain, location_type: string
  controlling_faction_id?: string; contested_by_faction_ids: string[]
  stability, danger, corruption, morale, resources, secrecy, military_pressure,
  spiritual_health, economic_health, rumor_activity: number
  key_npc_ids, active_quest_ids, active_rumor_ids, active_pressure_clock_ids,
  active_soul_flow_wound_ids, known_secrets, hidden_secrets, visual_state_tags: string[]
  current_mood: string
}

QuestState {
  id, campaign_id, title, description: string
  status: "unknown"|"available"|"active"|"completed"|"failed"|"mutated"|"locked"|"abandoned"
  domain: string; location_ids, faction_ids, npc_ids, known_objectives, hidden_objectives,
  completed_objectives, failed_objectives, possible_resolutions: string[]
  chosen_resolution?, moral_cost?: string
  faction_winners, faction_losers, location_changes, future_hooks,
  consequence_chain_ids, rumor_ids, pressure_clock_ids: string[]
}

RelicState {
  id, campaign_id, name, origin_domain, relic_type, rarity: string
  maker?, previous_owner?, soul_imprint?: string; faction_claims: string[]
  known_history, hidden_history: string
  loyalty, hunger, corruption_level, void_resonance, awakening_progress: number
  awakening_conditions, backlash_conditions: string[]; current_owner_id?: string
  powers_known, powers_hidden: string[]; cost_to_use, abuse_mode: string
  related_quest_ids, related_consequence_chain_ids: string[]
}
```
Relics are **memory-bearing objects**, not generic loot — they remember how they
are used (selfish use → loyalty down, backlash up).

## Metaphysical event records

```ts
SoulFlowWoundState { /* wound_type, severity, visibility, affected entities,
  keeper_pressure_delta, void_parasitism_delta, symptoms, healing methods, ignored_consequence */ }
KeeperExploitEvent { /* exploited_domain/virtue, distorted_form, keeper_strategy,
  immediate_gain, delayed_gain_possible, explanation, prevention_path */ }
VoidTemptationEvent { /* offered_lie, immediate_benefit, hidden_cost, deltas,
  accepted, resisted, future_whisper */ }
```
Soul-flow damage should not always be obvious immediately (child survives now;
later dreams in a dead person's voice). The Keeper gains through systems, not
direct appearances. Void temptation always sounds plausible ("You saved them.
That is all that matters.").

## World events & turn logs

```ts
WorldEvent {
  id, campaign_id: string; turn_id?: string
  event_type: "mercy"|"betrayal"|"public_magic"|"secret_magic"|"death"|"rescue"
    |"contract"|"rumor"|"trial"|"battle"|"relic_use"|"void_escalation"
    |"soul_flow_disruption"|"warfront_shift"|"relationship_shift"|"quest_resolution"
  event_title, factual_summary, public_interpretation, hidden_interpretation: string
  actor_ids, target_ids, witness_ids, witness_faction_ids: string[]
  location_id, domain_context: string; virtues_invoked, virtues_distorted, sins_triggered: string[]
  magic_used?: string; void_involved: boolean
  keeper_advantage_delta, soul_flow_delta: number; immediate_effects: Record<string, any>
  consequence_chain_ids, rumor_ids_created, pressure_clock_ids_modified: string[]
  permanence: "minor"|"moderate"|"major"|"mythic"; visibility_to_player: VisibilityLevel
}

TurnLog {
  id, campaign_id, character_id: string; turn_number: number
  player_input, verdax_narrative: string; choices_presented: string[]
  skill_check_json?, decision_analysis_json, consequences_json: Record<string, any>
  world_event_ids: string[]; updated_state_summary, memory_summary: string; created_at: Date
}
```
WorldEvents are the **backbone of campaign memory.** The last 8 turns are provided
as short summaries, not raw logs.

## Decision analysis & VERDAX response contract

```ts
DecisionAnalysis {
  surface_action, actual_method: string; stated_intent?: string; inferred_intent, action_type: string
  public_visibility: "none"|"private"|"small_group"|"public"|"mythic"
  domain_virtues_aligned, domain_virtues_violated, virtue_distortions_triggered,
  who_benefits_immediately, who_pays_immediately, who_benefits_later, who_pays_later: string[]
  witness_interpretations: WitnessInterpretation[]
  keeper_benefit: "none"|"minor"|"moderate"|"major"; void_lie_if_any?: string
  consequence_depth_required: 1|2|3|4|5
}

WitnessInterpretation {
  witness_type: "npc"|"faction"|"crowd"|"spy"|"spirit"|"unknown"; witness_id?: string
  saw_event_accuracy: number; emotional_reaction, ideological_interpretation, likely_action: string
  rumor_variant_created?: string
}

VerdaxTurnResponse {
  narrative: string
  choices: { id, label, risk_hint: string; likely_domain_alignment?: string }[]
  skill_check?: { required: boolean; stat?, dc?, roll?, modifier?, total?: number|string;
                  success?: boolean; failure_cost_if_failed?: string }
  decision_analysis: DecisionAnalysis
  mechanical_consequences: { character?, domain_states?, factions?, npcs?, relationships?,
    locations?, quests?, rumors?, pressure_clocks?, warfronts?, magic_systems?,
    relics?, soul_flow?, keeper?, void?: Record<string, any> }
  new_world_events: WorldEvent[]
  new_or_updated_consequence_chains: ConsequenceChainState[]
  new_or_updated_rumors: RumorState[]
  player_facing_consequence_panel: string[]
  expanded_why_this_happened, memory_summary: string
}
```
VERDAX must always explain *why*. Not "Rootwardens -10" but "Rootwardens
suspicion +10 because you saved the grove with corrupted sap instead of cleansing
it — they respect the result but the method looked like surrendering Verdance's
cycle to the wound."

## Prompt context bundle & state update order

```ts
VerdaxPromptContext {
  campaign: CampaignState; campaign_metaphysics: CampaignMetaphysics; character: CharacterState
  current_domain_state: DomainTrackingState; relevant_domain_virtue_states: DomainVirtueState[]
  current_location: LocationState; active_factions: FactionState[]; active_npcs: NPCState[]
  active_relationships: RelationshipState[]; active_quests: QuestState[]; active_rumors: RumorState[]
  active_pressure_clocks: PressureClockState[]; active_warfronts: WarFrontState[]
  active_soul_flow_wounds: SoulFlowWoundState[]; relevant_magic_systems: MagicSystemState[]
  relevant_relics: RelicState[]; recent_turn_summaries: string[]; relevant_world_flags: Record<string, any>
}
```
Do not send everything every turn — retrieve what's relevant.

**State update order (locked):** 1 validate JSON · 2 TurnLog · 3 WorldEvents ·
4 character · 5 NPC memory · 6 relationships · 7 factions · 8 locations ·
9 quests · 10 rumors · 11 pressure clocks · 12 warfronts · 13 magic/relics ·
14 soul-flow wounds · 15 domain virtue/state · 16 Keeper/Void · 17 memory summary
· 18 return narrative + panel. *(Action → Witness → Interpretation → Social →
System → Metaphysical.)*

## Player-facing vs DM War Room panels

**Basic panel** (readable, not a spreadsheet): XP, HP, conditions, key
faction/NPC deltas, new rumor, advanced clock, soul-flow note — plus an
**expanded "why" drawer**.

**DM War Room (hidden):** spy detections, Abyss attention, Keeper exploit events
created, future events unlocked, rumor mutation timers, suspicion thresholds.

## Minimum MVP tracking set

Build first: `CampaignState`, `CharacterState`, `DomainTrackingState`,
`FactionState`, `NPCState`, `NPCMemoryState`, `RelationshipState`,
`LocationState`, `QuestState`, `RumorState`, `PressureClockState`,
`ConsequenceChainState`, `WorldEvent`, `TurnLog`.

Secondary (store as JSON first, promote later): `CampaignMetaphysics`,
`SoulFlowWoundState`, `KeeperExploitEvent`, `VoidTemptationEvent`,
`MagicSystemState`, `RelicState`, `WarFrontState`.

## Implementation (SCHEMA-FORGE)

Hybrid storage: full tables for high-activity objects (Campaign, Character, NPC,
Faction, Quest, Rumor, WorldEvent, TurnLog, Relationship, Location,
PressureClock); JSONB for flexible complex state (domain virtues, magic details,
consequence nodes, rumor content layers, player patterns, NPC memory metadata,
Keeper/Void details). Promote a JSON field to its own table once queried often.
**Every VERDAX output must be schema-validated before mutating the database.**

## Locked Decisions (summary)

Static canon ≠ mutable state · 0–100 scale · visibility levels exist · campaign
metaphysics tracks Keeper pressure / soul flow / Void / reality stability ·
character tracks soul/identity/oath/memory/Void · player patterns tracked · domain
tracks 11+ axes · factions need trust/fear/respect/suspicion/debt/leverage · NPC
memory separates fact from interpretation · relationships support tolerable
enemies & enemy-to-partner shifts · rumors are living organisms · consequence
chains support 1st–5th order · warfronts shift from non-combat actions · magic &
relics are political assets · WorldEvents are memory's backbone · turn responses
include narrative + analysis + consequences + events + chains + rumors + panel +
explanation + summary · update order is locked · MVP starts with the reduced set.
