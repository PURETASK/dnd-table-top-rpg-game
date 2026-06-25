# Chunk 4 — Cause/Effect Standards v1.0

- **Lead:** CAUSALITY-SMITH · **QA:** CANON-WARDEN · **Support:** WHISPER-MASON, OATH-BROKER, FACTION-WEAVER, TURN-ENGINEER
- **Status:** Locked v1.0

How VERDAX turns player decisions into layered consequences. Not "You helped the
village. +10 reputation." Instead: *But how? Who saw it? Who benefited? Who lost
leverage? Which faction can exploit it? Which belief did it affirm or distort?
Did it damage soul flow? Did the Void offer a shortcut? Did the Keeper gain? What
changes three steps later? Five steps later?*

## The VERDAX causality formula

> **Action → Method → Witness → Interpretation → Power Shift → Social Reaction →
> Systemic Effect → Metaphysical Effect → Future Pressure**

The player does something → the *method* sets moral texture → witnesses interpret
through belief → factions use it for power → NPCs remember emotionally → rumors
distort → warfronts/resources/magic/alliances shift → soul flow strengthens or
weakens → the Keeper/Void may exploit → future consequences activate.

**Specific but dynamic:** specific inputs (Rootwardens trust +4, clock +1),
loose interpretation (the *why*), specific outputs.

## Consequence depth levels

| Depth | Scope | Examples | Result |
|---|---|---|---|
| **1 Immediate** | only the player | buying supplies, simple question, ordinary hit | gold/HP/minor reaction/clue |
| **2 Scene** | current scene | lying to a guard, visible magic, stealth vs direct | scene mood, NPC attitude, small rumor seed |
| **3 Local/System** | location/faction/quest | saving a named NPC, private forbidden magic, exposing a local secret | location state, faction trust/suspicion, rumor spread, clock advance, status change, quest mutates |
| **4 Regional/Political** | multiple factions / warfront / trade / magic access | public forbidden magic, major betrayal, leader death, embargo, relic awakening | domain power shifts, warfront shifts, weaponized rumors, realignments |
| **5 Mythic/Metaphysical** | soul flow / Stones / Void / Keeper / champions | soulbinding, Name-Erasure, Void-amplified magic, Stone drain, broken sacred oaths | soul-flow wound, Keeper/Void pressure, Stone stability, reality stability, arc change, mythic truth |

**Depth selection rule:** affects only player → 1; scene/minor NPC → 2; named
NPC/faction/location/quest/public rumor → 3; domain politics/war/economy/magic
access/leadership/alliances → 4; soul flow/Void/Keeper/Stones/identity/memory/
death passage/sacred oaths/major relics → 5. **Exception:** a small action
becomes depth 5 if it touches a mythic system (quietly signing a minor Abyssian
contract = soul-debt = depth 5).

## Core schemas

```ts
RootEventAnalysis {
  event_title, surface_action, actual_method: string; stated_intent?: string
  inferred_intent, action_category, moral_texture, domain_context, location_context: string
  public_visibility: "none"|"private"|"small_group"|"public"|"mythic"
  actor_ids, target_ids, witness_ids, witness_faction_ids: string[]; magic_used?: string
  forbidden_magic_used, void_involved, soul_flow_touched: boolean
  resources_affected, factions_affected, npcs_affected, warfronts_affected: string[]
  consequence_depth_required: 1|2|3|4|5
}

ConsequenceNode {
  depth: 1|2|3|4|5; timing: "immediate"|"scene"|"session"|"future_session"|"campaign"
  trigger_condition, event_description, narrative_reason, domain_logic: string
  faction_logic?, npc_logic?, power_logic?, metaphysical_logic?: string
  mechanical_effects: Record<string, any>
  possible_player_intervention: string; if_ignored_next_node?: string
}
```

**Action categories:** mercy, ruthlessness, sacrifice, deception, truth_telling,
protection, abandonment, forbidden_magic, void_use, relic_use, contract, betrayal,
alliance, rescue, execution, theft, public_speech, secret_discovery,
resource_control, military_action, economic_pressure, political_choice,
romance_choice, oath_keeping, oath_breaking, soul_magic, memory_magic,
identity_magic, death_passage_interference. *The same category means different
things by domain* (mercy is respected by Radiance only if it costs the hero
something; despised by Abyss unless it creates leverage).

**Moral texture** (beyond good/evil): protective, sacrificial, selfish, coercive,
merciful, reckless, disciplined, deceptive, transparent, exploitative,
restorative, punitive, desperate, honorable, dishonorable, loving, possessive,
pragmatic, fanatical, corruptive, liberating, dominating.

## Witness, power, domain & faction interpretation

```ts
WitnessInterpretation {
  witness_type: "npc"|"faction"|"crowd"|"spy"|"spirit"|"unknown"; witness_id?: string
  saw_event_accuracy: number; prior_bias, emotional_reaction, ideological_interpretation,
  political_use, likely_action: string; rumor_variant_created?, memory_update?: string
  trust_delta?, fear_delta?, respect_delta?, suspicion_delta?, resentment_delta?: number
}

PowerShift {
  winner_ids, loser_ids, uncertain_ids: string[]
  power_type: "military"|"economic"|"magical"|"religious"|"political"|"social"
    |"informational"|"metaphysical"|"romantic"|"legal"
  immediate_shift, delayed_shift, hidden_shift, exploit_opportunity: string
}

DomainInterpretation {
  domain: string; values_aligned, values_violated, virtues_distorted: string[]
  domain_approval_delta, domain_suspicion_delta: number; explanation: string
}

FactionInterpretation {
  faction_id, doctrine_lens, immediate_reaction, public_statement, private_reaction: string
  reputation_delta, trust_delta, fear_delta, respect_delta, suspicion_delta, debt_delta, leverage_delta: number
  planned_action: string; agenda_clock_change?: string
}

NPCInterpretation {
  npc_id, factual_memory, emotional_interpretation, ideological_interpretation: string
  trust_delta, fear_delta, affection_delta, suspicion_delta, respect_delta, resentment_delta, debt_delta: number
  likely_next_action: string; relationship_status_change?: string
}
```
Witnesses interpret through what they saw, believe, fear, serve, want, already
think, have heard, and can gain by retelling. **A faction can approve a result
and condemn the method.** NPCs can feel mixed reactions (Maera: trust +8 because
the child lived; fear +12 because soulbinding was used; debt +20; suspicion +6).

## Rumor creation

```
rumor_likelihood = public_visibility + emotional_payload + witness_bias
                 + faction_benefit + taboo + existing_reputation − suppression
```
```ts
RumorCreation {
  original_truth, first_claim, likely_mutation: string; source_id?: string
  source_motive: string; accuracy, distortion_level: number; emotional_payload: string
  beneficiaries, harmed_parties, spread_channels: string[]; first_consequence: string
}
```

## Soul-flow, Keeper, Void checks

```ts
SoulFlowCheck {
  touched_soul_flow, wound_created: boolean; wound_type?: string; severity?: number
  soul_flow_delta: number; affected_entities: string[]; affected_location?, affected_domain?: string
  symptoms, healing_methods: string[]; keeper_pressure_delta: number; explanation: string
}

KeeperExploitationCheck {
  triggered: boolean; exploited_domain?, exploited_virtue?, distorted_form?, keeper_strategy?: string
  immediate_gain?, delayed_gain_possible?: number; explanation?, prevention_path?: string
}

VoidParasitismCheck {
  triggered: boolean; offered_lie?, immediate_benefit?, hidden_cost?: string
  void_resonance_delta?, identity_integrity_delta?, soul_flow_delta?, reality_stability_delta?, dependency_risk?: number
  future_whisper?: string
}
```
Soul-flow damage isn't always immediate. The Keeper gains through systems (heroic
Void victory → mistrust → blocked treaty → spreading damage → pressure rises).
The Void must feel tempting: "You saved them. That is all that matters."

## Relationship, alliance & betrayal causality

Every shift uses **IF / THEN / BECAUSE** (domain logic + motive + power/
metaphysical reason). A relationship can improve *tactically* without improving
*morally*.

```
alliance_score = shared_threat + shared_interest + dependency + debt + respect
               + external_pressure − ideological_distance − resentment
               − recent_betrayal − sacred_violation
// 80+ trusted · 55–79 conditional · 35–54 uneasy · 15–34 tolerable · <15 hostile

betrayal_risk = sacred_violation + public_humiliation + resource_theft
              + leverage_against_npc + faction_pressure + fear + resentment + rumor_intensity
              − trust − debt − affection − shared_threat
```
Betrayal is never random — it happens because a secret is threatened, a faction
applies pressure, a sacred belief is violated, a debt becomes unbearable, a lover
feels used, a rival gains leverage, a rumor makes loyalty impossible, or the Void
offers a shortcut.

## Magic, warfront, resource, quest, death, romance consequences

- **Magic:** a powerful spell asks *who paid? what source strained? who saw? who controls permission? who becomes afraid? who wants to replicate it? what did the Void offer?* — not just "mana −5."
- **Warfront:** shifts from **non-combat** actions too (a rumor, embargo, romance betrayal, or magic-system failure can move a front).
- **Resource:** *who needs this? controls it? can withhold it? can counterfeit it? can weaponize scarcity? suffers first?*
- **Quest:** every major ending should solve something, cost something, empower someone, anger someone, reveal something, hide something, and create a future hook.
- **Death:** changes the world when the dead matter ("Liora died holding the medical tent open during the ashfall…" → soldiers rename the player, healing capacity drops, Darrik refuses forge work, Seraphine demands an inquiry, a rumor begins that command spent healers like arrows).
- **Romance:** love can soften hostility but does not erase ideology (Cassia may love the player and still oppose them publicly over Sanctuary gate closures).

## Worked cause/effect chains

### A — Mercy through forbidden soulbinding (Sanctuary)
Save a dying child with forbidden soulbinding. **1st:** child saved, soul-scar
created, soul flow −2. **2nd:** Brother Calven hides the child; mother grateful
but afraid; Inquisitor Vale hears partial reports. **3rd:** rumor "the stranger
stole a child's soul"; Purity Inquisition gains fuel; Refugee Covenant fears
backlash. **4th:** court demands medical records; Calven falsifies them. **5th:**
Ash Ledger Covenant weaponizes it ("Sanctuary condemns Abyss while hiding illegal
soul manipulation"); Sanctuary moral authority weakens; Keeper pressure rises.
**Intervention:** confess and submit to ritual review; find a clean soul-healing
method; expose the Ledger spy; convince Calven not to falsify; have the family
testify truthfully.

### B — Verdance corrupted-sap weaponization
Use corrupted sap traps to stop an Abyss patrol at Thornveil Refuge. **1st:**
patrol destroyed; Hollow Pact respect +12; Rootwarden suspicion +10; soil
corruption +4. **2nd:** Nymara praises; Thalen demands explanation; refugees argue
survival vs corruption. **3rd:** Hollow Pact recruitment rises; Sap Commons lose
trust; rumor that Rootwardens secretly rely on corruption. **4th:** Rootwarden
authority weakens; Hollow Pact cells gain shelter; Abyss studies trap residue.
**5th:** Keeper benefits as Verdance's resistance damages its own soul-flow; Void
whispers "If rot saved them, why call it corruption?" **Intervention:** cleanse
residue; name the tactic emergency-only; force dismantling; seek Auralis's
communion judgment; build a safer Sap Commons alternative.

### C — Tempest bond control
Bind an injured dragon to stop it flying into a lethal Void-storm. **1st:** dragon
survives; rider gratitude +15; dragon trust −20; bond-law stress +8. **2nd:**
Dragon-Bond Sanctum hears of the restraint; Chainbreaker Radicals weaponize it;
Kaida questions the player's understanding of freedom. **3rd:** bonded riders
split; commoners cry hypocrisy; corsairs sell anti-bond restraint tools. **4th:**
sky alliance mission delayed; Azyr refuses to fly under such commanders; Abyss
anti-air fortifies. **5th:** Keeper benefits as freedom fractures into control vs
anti-duty extremism; Void whispers "Love that cannot restrain lets death win."
**Intervention:** submit to a Dragon-Bond trial; give the dragon public voice;
find a consent-restoring healing; expose Chainbreaker exaggeration; help the rider
release control.

### D — Radiance overcharged victory
Destroy an Abyss soul-harvest engine with Void-amplified Radiance flame. **1st:**
captives saved; Radiance reputation +15; Abyss control −10; Void resonance +4.
**2nd:** Ashen Martyrs praise; Dawnfire Mystics alarmed; Forgekeepers want the
data. **3rd:** acolytes imitate dangerous rites; rumor that the Phoenix's old
limits are obsolete. **4th:** Kael's bloc pushes high-output relic doctrine;
Sanctuary hesitates; Verdance fears uninvited burning. **5th:** Keeper benefits as
sacrifice mutates toward spectacle, Void dependency, and mistrust.
**Intervention:** publicly acknowledge the danger; submit the relic for
purification; credit the captives not the spectacle; help Mystics define safe
limits; expose Void residue before replication.

### E — Abyss ledger left intact
Kill an Ash Ledger priest but leave the ledger slab intact. **1st:** priest
removed; short-term safety; ledger still active. **2nd:** bound witness spirits
identify everyone who spoke to the player; Abyss issues debt notices. **3rd:** NPCs
distance themselves; a frightened contact considers betrayal to escape debt.
**4th:** resistance network fractures; the Covenant gains legal control without
soldiers. **5th:** Keeper benefits as resistance collapses under fear/debt/
mistrust; soul-flow disruption rises as people sign survival contracts.
**Intervention:** destroy/purify the ledger; free bound spirits; expose the debt
notices as coercive fraud; help contacts resist; recover true names to turn the
ledger against Abyss.

## Player intervention, failure & success standards

Every consequence chain includes intervention paths: repair, redirect, confess,
hide, double down, exploit, sacrifice, negotiate, destroy evidence, reveal truth,
heal soul-flow, counter-rumor, transform. **Consequences should be heavy, not
hopeless** — a bad chain creates gameplay, not punishment-only dead ends.

- **Failure types:** costly_success, partial_success, complication, delayed_failure, public/private/moral/metaphysical/relationship/faction/warfront failure. Failure *mutates* story, it doesn't stop it.
- **Success types:** clean, costly, public-success-private-cost, private-success-public-suspicion, tactical-success-strategic-cost, moral-success-political-cost, magical-success-soul-cost, short-term-success-long-term-risk.

## Anti-randomness & explanation rules

**Anti-randomness:** every consequence must be justified by at least one of —
domain logic, faction interest, NPC belief, witness interpretation, resource
pressure, warfront condition, magic cost, rumor distortion, soul-flow law, Keeper
strategy, Void temptation, prior player pattern, or hidden world state. *If VERDAX
cannot explain a consequence, it should not apply it.*

**Player-facing explanation:** every visible consequence states what changed, why,
who interpreted it that way, what might happen next, and whether the player can
intervene. **Hidden** consequences are stored for the DM War Room (spy
detections, future triggers, Keeper exploit chains).

## VERDAX internal instruction (add to system prompt)

> When resolving a player action, do not produce only immediate results. First
> classify by method, intent, visibility, witnesses, domain logic, faction
> interests, and metaphysical risk. Then determine consequence depth. For major
> actions, create a chain with 1st–5th order consequences. Every meaningful action
> must answer: Who gained/lost power? Who interpreted it differently? What rumor
> might spread? What faction can exploit this? What relationship changed? What
> warfront/resource/magic/location changed? Was soul flow affected? Did the Void
> offer a useful lie? Did the Keeper gain pressure (via virtue distortion,
> division, memory/identity damage, oath corrosion, death-passage disruption, Stone
> destabilization, war escalation, or Void dependency)? Always explain visible
> consequences in-world. Never apply unexplained random punishment. Make
> consequences heavy but playable.

## Locked Decisions

1. Classify every meaningful action before applying consequences.
2. Consequence depth ranges 1–5.
3. Major soul-flow/Void/Keeper/Stone/identity/memory/oath/death-passage events require depth 5.
4. Consequences include domain, faction, NPC, rumor, power, and metaphysical interpretation when relevant.
5. Witnesses can interpret the same event differently.
6. A faction can approve a result while condemning the method.
7. NPC memories separate fact from emotional and ideological interpretation.
8. Rumors arise from visibility, payload, taboo, witness bias, faction benefit, reputation.
9. Magic consequences include cost, source, public trust, faction control, abuse risk.
10. Warfronts can shift from non-combat actions.
11. Resources are political weapons.
12. Death changes the world when the dead matter.
13. Romance can create political consequences.
14. Every major relationship shift uses IF / THEN / BECAUSE.
15. Every major chain includes player intervention options.
16. Failure mutates story, not stops it.
17. Success can be costly/suspicious/public/private/tactical/strategic/moral/magical/metaphysical.
18. The Keeper gains through systems, not random villain points.
19. The Void gives real benefits but never clean power.
20. Visible consequences are explained clearly to the player.
