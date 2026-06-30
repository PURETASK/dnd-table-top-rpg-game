---
title: "The Sap Commons — Verdance Faction Bible"
status: Draft v1.0
lead: FACTION-WEAVER
qa: CANON-WARDEN
domain: Verdance
faction_id: fac_verdance_sap_commons
mvp: true
chunk_refs: ["Chunk 1 Master Canon", "Chunk 3 Tracking Glossary (FactionState)", "Chunk 4 Cause/Effect Standards", "Verdance Domain Bible v1.0 §§14, 20, 23, 24, 25, 29"]
note: >
  The Sap Commons is the RESTORATION path of "The Sap Beneath the Ash." It is the
  one faction that says the Thornveil rootwell can be HEALED, not merely held,
  burned, or used — and that the sacred-sap commons belongs to the people who tend
  and bleed for it, not the elders who interpret it. Its hope is real and its
  danger is real: impatience and forced healing. A cornered Commons cell that
  decides the slow true cure is too slow is one despair away from the Hollow
  Pact's fast false one. Sylune Amberroot is the player's natural ally for a real
  cure — and the player is the thing that keeps her patient enough to succeed.
---

# The Sap Commons — *Heal It, Don't Just Hold It*

> "They keep telling us the wheel turns. It does. But a wheel sunk in rot does not
> turn — it sits, and the mud rises, and one season we will call the mud an
> ancestor and bow to it. I am done waiting for a council that has never bled at a
> well to decide whether the wells may be healed. The sap is ours. The dead are
> ours. The cure is ours to attempt. I only pray we are patient enough to get it
> right — because I am so very tired of being patient."
> — Sylune Amberroot, healer-of-renown, at the open Communion Bowl of Thornveil

---

## 1. Identity Snapshot

The Sap Commons is Verdance's **economic and social reform movement**, and the
only one of the four great factions whose answer to the speaking well is *cure it.*
Where the Rootwardens say **contain**, the Seed Guild says **stabilize**, and the
Hollow Pact says **weaponize**, the Sap Commons says **restore** — the network can
be healed, the trapped dead can be released the true way, and the wound at
Thornveil is not heritage, infrastructure, or an asset, but an *injury* that has a
*cure*.

Its second claim is just as radical to Verdant ears: the **sacred-sap commons
belongs to its cost-bearers.** The healers who spend their own life-force, the
growers who feed the Refuge, the shapers who grow its walls, the refugees who die
at the wall — these are the people who pay the cycle's price, and so these are the
people who should decide its course. Not the elders who *interpret* the cycle from
the safety of Greatroot Hollow. The Commons is, at its heart, a revolt of the
**cost-bearers against the interpreters** (Verdance Bible §20, §18 class fault line).

This makes the Sap Commons hopeful, popular, dangerous, and fragile all at once.
Its hope is a genuine possibility of a real cure — the slow true one, braiding
restoration + communion + containment + addressing the Abyss cause (§23
peaceful_resolution). Its danger is that hope under siege curdles into haste:
branded reckless by the elders, watching people die while the cure ripens, the
Commons may force a half-ready cure that *spreads* the corruption, or slide into
**forcing** restoration on the unwilling. The slow true cure is the whole point.
The slow true cure is also agonizing to wait for. That gap is where the Keeper
lives.

```ts
FactionIdentitySnapshot {
  faction_id: "fac_verdance_sap_commons"
  name: "The Sap Commons"
  domain: "Verdance"
  faction_type: "Economic / social reform movement (restoration)"
  one_line: "The cost-bearers who believe the wounded network can be HEALED, not just held, and that the sacred-sap commons belongs to the tenders who bleed for it, not the elders who interpret it."
  true_virtues_embodied: ["Restoration", "Healing", "Communion (the people's, not the elders')", "Living Systems"]
  corruption_risks: ["Forced Healing (7.3)", "Impatience / haste-sin", "Resource Hoarding inverted into reckless redistribution"]
  real_point: "Restoration is actually possible, and the people who pay the cycle's cost deserve a voice in it. Containment without a cure is just a slow grave; the wound can be mended."
  dangerous_flaw: "Impatience and forced healing — a half-ready cure that fails catastrophically, or a 'cure' imposed on the unwilling. Despair can route a cornered Commons cell straight to the Hollow Pact's fast false shortcut."
  rallying_cry: "Heal it; don't just hold it."
}
```

---

## 2. Doctrine

**Core doctrine (binding canon, Verdance Bible §20):** *The network can be HEALED,
not just held — and the sacred-sap commons belongs to the people who tend and bleed
for it, not the elders who interpret it. Restoration over containment; the
cost-bearers over the interpreters.*

The Commons holds five tenets:

1. **Restoration over containment.** A wound walled is still a wound. The Rootwardens'
   thornwall and the Heartmoot's sealing-and-silence keep the corruption from
   *spreading* but never make anyone *well*. Containment that is never followed by a
   cure is not mercy; it is a slow, deniable abandonment — the cardinal sin of holding
   the dead, performed by a whole civilization in slow motion.

2. **The commons belongs to its cost-bearers.** Clean rootwell sap is a *commons*,
   not a *commodity* (§14) and not an elder's gift to ration. The tenders who heal,
   the growers who feed, the shapers who build, and the wounded who depend on it have
   the first claim — above profit (the Seed Guild's enclosure) and above the elders'
   convenient stewardship.

3. **The cycle can be mended, and mending is holy.** Verdance's highest virtue is
   restoration (§6.2); its highest praise is "they leave things better-rooted than they
   found them" (§18). The Commons takes that literally and continentally: if restoration
   is the domain's soul, then *refusing to attempt a cure is the deeper heresy*, not
   attempting one.

4. **The dead are released, never used and never abandoned.** The Commons walks a
   blade's edge here, and it knows it. It rejects the Hollow Pact's "free them by
   using them" with horror (that is the cardinal sin), and it rejects the Heartmoot's
   "seal them and call them ancestors" with grief (that is also the cardinal sin,
   quieter). The Commons' answer is the *true* Passage-completion — slow, communal,
   correct — which is why the Commons *needs* the Greenwake Communion to hear the
   trapped and *needs* the player to keep it from cutting corners under pressure.

5. **The pace of healing is set by the wound, not by the dying.** This is the tenet
   the Commons fails at when it fails. The cure must ripen at the pace healing
   actually requires (§6.2 heroic_expression: "choosing the slow true cure over the
   fast false one, even when people are dying while it works"). The Commons believes
   this. The Commons also *cannot bear it* — and that is its tragedy.

```ts
FactionDoctrine {
  faction_id: "fac_verdance_sap_commons"
  doctrine: "The network can be HEALED, not just held; the sacred-sap commons belongs to its cost-bearers, not its interpreters; restoration over containment; the dead are released by the true slow way, never used and never abandoned."
  ideal_future: "A Thornveil whose well is truly cured — its trapped dead released by Passage-completion, its sap clean and freely held in common, its Refuge oath kept — proving the precedent that ALL four wounded wells (and the whole border) can be healed, not sealed; a Verdance where the tenders who pay the cycle's cost have a real voice in its course, and restoration is a continental practice again."
  public_goal: "Force a real restoration attempt on the Thornveil rootwell, win the cost-bearers a seat at the Rootmoot, and break the sap-rationing that starves the Refuge."
  hidden_goal: "Prove the cure works at Thornveil so undeniably that the Heartmoot can no longer hide behind 'the wells cannot be healed' — and so that the sealed-wells secret cracks open and a continental Vigil becomes inevitable. Privately, Sylune fears she is not patient enough to wait for the cure she believes in, and is looking for someone (the player) to keep her honest."
  doctrine_lens_for_witnessing: "Judges every action by: did it HEAL or merely HOLD? Did it serve the cost-bearers or the interpreters/profiteers? Did it release the dead truly, or abandon/use them? Was it patient enough to be real, or hasty enough to be reckless?"
}
```

---

## 3. Power Sources (8 scored axes)

Per the FactionState `power_sources` schema (Chunk 3) and the 0–100 scale (Chunk 3:
21–40 weak, 41–60 contested/strained, 61–80 functional/strong). The Sap Commons is
a movement, not a state: it is **rich in legitimacy and the human infrastructure of
healing** and **poor in coercion**.

```ts
power_sources: {
  military:     22,  // weak. The Commons has no army. It has angry tenders and refugees who can strike, blockade a market, or fill a square — civil force, not arms. In a fight it loses to Rootwardens and Hollow Pact alike.
  economy:      63,  // strong-and-rising. The Commons is the LABOR and SKILL that actually runs the healing economy: production of healing-sap, restorative medicine, soil work, the daily tending. It can slow or stop the economy by withdrawing its hands — its real lever against the Seed Guild.
  magic:        58,  // contested/strong. Deep restoration sapcraft, cleansing-communion, the genuine cure-knowledge (Sylune). Strong in the four restorative disciplines; weak in containment-warfare and (by principle) in any rot-craft. Faction magic_control ≈ 40 per §10, but its restoration EXPERTISE is its crown jewel.
  religion:     55,  // contested. Real moral/spiritual authority — restoration is Verdance's soul and the Commons claims it loudly — but it does NOT control the rites; the Heartmoot interprets and the Greenwake Communion hears. The Commons borrows legitimacy it cannot administer.
  intelligence: 47,  // strained. Embedded everywhere (healers and growers are in every household and at every wall) and so it HEARS everything — but it has no spy craft, the mycelial relay is Rootwarden/Heartmoot-controlled, and it is easily out-maneuvered by Seed Guild brokers and Abyss infiltrators.
  legitimacy:   66,  // strong. This is the Commons' true power base: it speaks for the cost-bearers and for restoration, the two things Verdance most reveres and most neglects. Its claim ("heal, don't hold; the commons is the people's") is hard to argue against on Verdant terms — only to DELAY.
  resources:    49,  // strained. It controls the PRODUCTION of sap and medicine but not the rootwells (Rootwardens), the markets/rationing (Seed Guild), or the sacred stock (Heartmoot). It makes the medicine; others control the supply. Its resource power is potential, throttled by who holds the taps.
  fear:         18,  // very low. The Commons is loved, not feared — which is its weakness in a crisis where fear moves faster. It cannot threaten; it can only persuade, withhold labor, and embarrass. When fear-driven factions (Hollow Pact, a panicked Guild) act fast, the Commons is too slow and too gentle to stop them.
}
```

**Reading the spread.** The Commons is a **legitimacy-and-labor** faction: high
moral standing (66), high real economic indispensability (63), and almost no
coercive power (military 22, fear 18). It can *win the argument* and *stop the
machine* but cannot *force* anyone. This shapes everything: the Commons advances by
persuasion, popular pressure, withheld labor, and the demonstrated truth of a
working cure — and when persuasion fails and people are dying, its powerlessness
to *compel* a cure is exactly the pressure that tempts it to *force* one. A faction
that cannot coerce its enemies is tempted to coerce the unwilling it *can* reach:
its own patients.

---

## 4. Class Base, Leadership & Membership

```ts
class_base: {
  "Tending Class (Healers, Growers, Shapers)": 70,  // the core: sap-healers, village healers, growers, growth-shapers, soil-restorers, rot-tenders who refuse the Pact
  "Refugees / the Sheltered (sympathetic)":    55,  // the wounded and displaced who depend on the commons and are first to be rationed out
  "Wavering Rootwardens (sympathetic)":        25,  // frontline defenders sick of holding a wound that never heals
  "Junior Communers (Greenwake-aligned)":      30,  // young listeners who think the elders interpret too conveniently
  "Disaffected Seed Guild stewards":           12,  // a few commons-stewards who hate what rationing has made them
}
```

- **Leadership — Sylune Amberroot** (`npc_sylune_amberroot`). Healer-of-renown,
  founder and moral engine of the Commons; see §11. She leads by example and by
  brilliance, not by hierarchy — the Commons has *organizers*, not officers.
- **Cell structure.** The Commons is loosely organized into **tending-circles** —
  neighborhood and ward groups that share sap, coordinate care, and increasingly
  coordinate *politics* (a sap-strike, a square-filling, a petition to the Rootmoot).
  This decentralization is a strength (hard to behead) and a danger (a cornered cell
  can act on its own, including catastrophically — see §6, §8).
- **Champions / notable members.** Junior healers and growers who run the
  tending-circles; sympathetic figures include **Ilyra Thornsong** (grove-keeper and
  Passage-Tender, community ally, not formally Commons but aligned — Verdance Bible
  §21) and wavering Rootwardens like the rank-and-file under **Thalen Mossguard**.
- **Who it is NOT.** The Commons is not the Greenwake Communion (spiritual, hears the
  dead) and not the Hollow Pact (weaponizes the rot). It *needs* the first and
  *dreads becoming* the second.

---

## 5. Methods & Agenda Clock

```ts
methods: {
  diplomacy:            58,  // its main tool: petition, persuade, build coalitions (esp. with the Greenwake Communion and wavering Rootwardens)
  open_war:             12,  // almost never; it has no army and restoration-doctrine abhors it
  sabotage:             30,  // labor action, not violence: sap-strikes, market blockades, withholding tending — economic pressure with a clean conscience (for now)
  propaganda:           55,  // moral suasion and public testimony; "heal, don't hold"; the dying at the rationing line as living argument
  assassination:        4,   // antithetical to its entire creed
  trade_pressure:       60,  // its strongest non-moral lever: it MAKES the medicine, so it can withhold or redirect it (the commons-strike)
  magical_escalation:   38,  // attempting a restoration cure IS its escalation — and the risk is that escalation means a TOO-SOON cure (see clock)
}
```

### Agenda Clock — "The Cure Attempt at Thornveil"

A 6-segment opportunity/threat clock. It is the Commons' central drive: to attempt
the restoration of the Thornveil rootwell. Its danger is that the clock can resolve
two ways — **a true cure** or a **catastrophic forced cure** — and *player pressure
toward patience vs haste is what decides which.*

```ts
PressureClockState {
  id: "clk_sap_commons_cure_attempt"
  campaign_id: "<campaign>"
  name: "The Cure Attempt at Thornveil"
  description: "The Sap Commons' drive to attempt the restoration of the corrupted Thornveil rootwell. As it advances it gathers cure-knowledge, allies, sacred stock, and popular mandate — but every segment also raises pressure to act BEFORE the cure is fully ready. The final segment resolves as a TRUE cure (if patient and complete) or a CATASTROPHIC forced cure (if hasty or incomplete)."
  clock_type: "faction_agenda"
  current_value: 2
  max_value: 6
  owner_type: "faction"
  owner_id: "fac_verdance_sap_commons"
  trigger_event: "The Thornveil rootwell began speaking living names and the Rootmoot deadlocked for a fourth season; Sylune resolved to attempt a cure with or without sanction."
  partial_tick_effects: [
    "Seg 1 — Diagnosis: Sylune (with Greenwake hearing) confirms the well CAN be healed, not just held; the Commons coheres around a cure plan; legitimacy +3.",
    "Seg 2 — Mandate (CURRENT): the cost-bearers rally; a tending-circle network forms; popular support rises; the Rootmoot is petitioned. Seed Guild and elders push back ('reckless'); haste-pressure +1.",
    "Seg 3 — Means: the Commons assembles cure components — restoration sapcraft, cleansing-communion, and the need for Heartroot cuttings (locked in the capital) and Greenwake hearing (to release the trapped). Bottlenecks raise frustration; haste-pressure +1.",
    "Seg 4 — The Bottleneck: the Heartmoot withholds the cuttings; people are dying at the rationing line; a tending-circle proposes attempting the cure WITHOUT the cuttings, half-ready. This is the FORK. Forced-healing risk rises sharply.",
    "Seg 5 — Commitment: the Commons commits to an attempt. If patient (cuttings obtained, Greenwake hearing secured, Rootwardens containing during the cure, Abyss cause addressed) → toward TRUE cure. If hasty (any component missing) → toward CATASTROPHE.",
    "Seg 6 — Resolution."
  ]
  completed_effect: "RESOLUTION (branch by readiness): (A) TRUE CURE — a real cleansing-communion + Passage-completion releases the trapped dead, the well's corruption drops hard, grief completes, soul_flow_integrity and domain_stone_stability rise, keeper_pressure falls; the precedent for healing all four wells is set (one of the campaign's largest soul-flow gains, §23 fifth_order). (B) CATASTROPHIC FORCED CURE — a half-ready attempt SPREADS the corruption: soil corruption jumps, more dead are trapped, soul_flow_integrity crashes, the Rootwardens are vindicated about containment, the Commons fractures, and the despairing survivors are one step from the Hollow Pact's shortcut (forced healing 7.3 → weaponized rot 7.6).",
  reversal_methods: [
    "Player keeps Sylune patient (delays the attempt until ALL components are ready) — pushes toward branch (A).",
    "Player obtains the Heartroot cuttings (breaks the Seed-Guild/Heartmoot bottleneck) — removes the reason to rush.",
    "Player secures Greenwake hearing (Auralis) so the trapped can be Named-Back and RELEASED, not just flushed.",
    "Player addresses the Abyss incision (§29 Chain 2) so the cure is not undone by the ongoing cause.",
    "Player FAILS to relieve the pressure → a cornered cell forces the attempt → branch (B), and possibly the Hollow Pact route."
  ]
  is_active: true
  visibility_to_player: "partial"  // the player sees the cure drive and the danger; the exact readiness threshold is a War Room value
}
```

**The clock's whole point** is that the Sap Commons is *good* and its goal is
*right* and it can still produce a catastrophe — not through villainy but through
**love that cannot wait.** The player is the patience the Commons lacks. Relieve
the bottleneck (cuttings, hearing, containment, cause) and the cure becomes real;
let the pressure build with no relief and a desperate cell forces it half-ready.

---

## 6. Keeper Exploit

```ts
KeeperExploitVector {
  faction_id: "fac_verdance_sap_commons"
  keeper_exploit_vector: "Impatience and forced healing. The Keeper does not need to corrupt the Sap Commons' GOAL (it is the right one — restoration); it only needs to make the Commons act on it ONE SEASON TOO SOON. Brand the reformers 'reckless' through the elders and the Seed Guild; choke the cure's components (Heartroot cuttings withheld, Greenwake hearing un-secured) so the cure can never quite ripen; let the dying pile up at the rationing line as unbearable moral pressure; and wait for a cornered tending-cell to decide 'the slow true cure is too slow' and force a half-ready cure that SPREADS the corruption — OR to start FORCING restoration on the unwilling (mandatory communions, overridden consent, re-healing the same grief). The catastrophic failure discredits restoration itself ('see — the wells CANNOT be healed; containment was right all along'), which is the Keeper's true prize: it doesn't just stop this cure, it poisons the very IDEA of curing, so the other three sealed wells stay sealed forever."
  primary_corrupted_virtue: "Forced Healing (7.3, from Healing/Restoration)"
  secondary_corrupted_virtues: ["Fatalism (7.7 — after a failed cure, the survivors despair)", "Weaponized Rot (7.6 — the despair-route to the Hollow Pact)"]
  keeper_strategy: "Convert the restoration-virtue's URGENCY into recklessness, then use the resulting catastrophe to kill the restoration-virtue itself. A failed cure is worth more to the Keeper than a never-attempted one, because it adds PROOF to the elders' fatalism."
  immediate_gain: "A half-ready cure that spreads the wound: soul_flow_integrity down, more dead trapped, corruption up — a soul-flow loss AND a moral-authority loss for restoration."
  delayed_gain_possible: "The 'restoration is reckless' narrative hardens into doctrine; the sealed-wells policy is vindicated; the Commons fractures into fatalists and Hollow Pact recruits; the cost-bearers, having lost faith in the slow cure, take the fast false one."
  the_tell: "Look for the moment a Commons healer says 'we cannot wait' and MEANS it as a virtue. The slide from 'heal it, don't hold it' to 'heal it NOW, ready or not' to 'heal them whether they consent or not' is the Keeper's whole road through the Sap Commons — and it is paved with compassion."
  prevention_path: "Keep Sylune patient; relieve the component bottlenecks (cuttings, hearing, containment, the Abyss cause) so the cure can ripen; defend the Commons publicly against the 'reckless' brand so it isn't pushed into proving itself prematurely; ensure restoration is OFFERED, never imposed; and if a cell forces a cure anyway, contain the damage and keep the survivors from the despair-route to the Hollow Pact."
}
```

**Signature.** The Keeper move on the Sap Commons looks like *heroism in a hurry.*
There is no traitor and no villain — there is a brilliant, exhausted healer who has
buried too many people, a council that will not release the cure-stock, a rationing
line of the dying, and a young tending-circle that decides it cannot watch one more
child go into the well un-released. The catastrophe, when it comes, is *committed by
the people most determined to help.* VERDAX should make the Commons' fall feel like
grief outrunning patience, never like corruption choosing evil.

---

## 7. Void Temptation

The general Verdance Void lie is the mercy-lie (§9): *"If decay is part of the
cycle, why not command it? Save them now, the fast way."* For the Sap Commons,
who already wants to heal and already loves the wounded, the Void files off the
"command the decay" edge and offers only the **mercy and the speed** — which is far
more dangerous, because it sounds exactly like the Commons' own creed with the
patience removed.

```ts
void_temptation_phrase: "You are the only one who will even TRY to heal them. The elders seal and lie; the Guild rations and profits; the wardens wall it off and wait for everyone to die behind the wall. Only you want them WELL. So why are you letting them suffer the slow way? You have the cure — nearly. Close enough. The dead are still here, still calling; you can hear them at the rationing line. Pour the sap now. Heal them now, ready or not — because waiting one more season is not patience, it is just letting them die politely. A cure that comes too late is no cure at all. You did not become a healer to WAIT."
```

```ts
VoidTemptationProfile {
  faction_id: "fac_verdance_sap_commons"
  offered_lie: "A cure that comes too late is no cure at all, so heal now, ready or not — speed IS mercy."
  immediate_benefit: "Real-seeming relief: a half-ready restoration that LOOKS like it's working at first (the well quiets, a few dead seem to settle, the dying get sap); the Commons looks vindicated; the unbearable pressure of watching people die is finally released."
  hidden_cost: "The cure was not ready. The cleansing-communion without the Heartroot cuttings, or the Passage-completion without true Greenwake hearing, does not RELEASE the trapped — it disturbs them and SPREADS the corruption. Soil corruption jumps; more dead are caught; soul_flow_integrity crashes; the failed cure becomes the elders' proof that healing is reckless. Worse, the Commons learns that 'forcing it' produced a result — which is the first step of forced healing (7.3) and the despair-step toward the Hollow Pact's forcing (7.6)."
  void_resonance_delta: 4
  identity_damage: "Sylune (or a Commons healer, or the player) migrates from 'patient restorer' to 'I will heal them whether the cycle is ready or not' — restoration's confidence curdling into the same will-to-control the Void wanted all along, arriving by the kindest possible road."
  soul_flow_damage: "death_passage_blocked deepens (the disturbed dead are caught tighter, not freed); grief_harvest (the un-completed grief feeds the wound); a hasty Naming-Back can cause name_erasure (a name spoken wrong overwrites)."
  reality_damage: "Each forced working stresses the rootwell node; domain_stone_stability down, keeper_pressure up; a botched mass-cure could collapse the well toward a permanent trap (mythic wound)."
  future_whisper: "After a failed forced cure, the next whisper is the Hollow Pact's: 'The clean cure failed because it was clean. The rot is the only thing strong enough. You wanted to heal them — so use the rot to free them; that's still healing, isn't it?' This is the despair-bridge from forced healing (7.3) to weaponized rot (7.6), and it is the Sap Commons' darkest possible end."
  resisted_if: "The player (or a steadier Commons voice) holds the line that the cure ripens at the wound's pace, not the dying's; relieves the pressure so 'now, ready or not' stops feeling like the only option; and keeps restoration OFFERED, never forced."
}
```

---

## 8. If / Then / Because Rules (≥8)

All shifts follow Chunk 4's **IF / THEN / BECAUSE** (domain logic + motive +
power/metaphysical reason). These govern how the Sap Commons reacts to the player.

```ts
if_then_because: [
  {
    if: "The player obtains the Heartmoot's Heartroot cuttings (by petition, exposure, or persuasion) and brings them to the Commons for the cure."
    then: "Sap Commons trust +14, respect +10, debt +8; Sylune treats the player as the cure's co-architect; the cure clock (clk_sap_commons_cure_attempt) advances toward the TRUE-cure branch and the forced-cure pressure DROPS."
    because: "The cuttings are the missing component that makes the slow true cure possible (§17.2, §23). Supplying them removes the exact reason the Commons would force a half-ready attempt — the deepest service one can do the faction is to make patience POSSIBLE, not just preach it."
  },
  {
    if: "The player counsels Sylune to WAIT — to delay the cure attempt until every component (cuttings, Greenwake hearing, Rootwarden containment, Abyss cause) is ready — while people are dying at the rationing line."
    then: "Short-term: Sylune's trust holds but resentment +4 and an internal strain rises (she is being asked to do the hardest thing she knows); some tending-circles grow restive. Long-term, IF the player ALSO relieves the dying (sap, a clean source, defending the Refuge): trust +10, the cure ripens, catastrophe is averted."
    because: "Patience is the right counsel AND a painful one (§6.2 heroic_expression). Telling a healer to wait while people die only builds trust if it is paired with relief; otherwise it reads as cold and pushes the cell toward forcing the cure anyway. The player must EARN the patience they ask for."
  },
  {
    if: "The player forces a half-ready restoration cure on the well to save the dying NOW, against Sylune's caution (§25)."
    then: "It may fail and SPREAD the corruption (soil corruption +, more dead trapped, soul_flow_integrity −); even if it 'works' briefly, Sap Commons trust DROPS, the Rootwardens feel vindicated about containment, and the forced-cure branch of the clock fires."
    because: "Forced/hasty healing is a Verdant corruption (7.3). Haste in sacred matters breaks trust (§25); the cycle cannot be rushed; a cure imposed before it's ready is the restoration-virtue curdling into recklessness — and it hands the Keeper proof that 'the wells cannot be healed.'"
  },
  {
    if: "The player defends the Refuge's oath and keeps it open to refugees during the sap shortage, against the Seed Guild's rationing (§25)."
    then: "Sap Commons rallies (trust +10, respect +8); refugee loyalty and Ilyra's trust rise; the Commons' legitimacy and popular base grow; Seed Guild (Brom) resentment rises and they may withhold supply or sell the player out."
    because: "'We do not turn away the wounded' is Verdance's founding oath (§18, §19) and the Commons' core cause: the commons belongs to its cost-bearers, including refugees. Honoring it under pressure is the deepest trust-builder for the cost-bearers — and a direct threat to the Guild's stabilize-and-profit enclosure."
  },
  {
    if: "The player exposes the Seed Guild's sap-hoarding (or its Abyss-front sales) and breaks the rationing in the Commons' favor."
    then: "Sap Commons trust +12 and leverage +10 (they now control distribution of what they already produce); refugee morale rises; the commons-vs-commodity fight tips toward the commons; Seed Guild becomes an active rival and may retaliate commercially or via betrayal."
    because: "The Commons MAKES the medicine but the Guild controls the SUPPLY (§3 resources 49, §14). Breaking the Guild's chokehold converts the Commons' latent economic power into real power and vindicates its central economic claim — sap is a commons, not a commodity."
  },
  {
    if: "The player releases a trapped soul (e.g., Rook's parent) through a true, patient Passage-completion — the slow correct way (§25, §29 Chain 2)."
    then: "Sap Commons trust +12 and HOPE rises (proof of concept that restoration WORKS); Ilyra and Auralis trust rise; the well's local corruption ticks down; the player may earn the label 'the Passage-Mender'; the cure clock advances toward the TRUE branch."
    because: "A true release is the literal reversal of the Keeper's soul-trap and the living demonstration of the Commons' entire thesis — that the dead can be FREED by restoration, not abandoned (Heartmoot) or used (Hollow Pact). It is the single most validating thing the player can do for this faction."
  },
  {
    if: "The player uses corrupted sap / soul-sap, or tolerates the Hollow Pact's use of it, even against Abyss (§25, §29 Chains 1 & 5)."
    then: "Sap Commons trust DROPS hard (suspicion +, trust −); Sylune warns the player they have legitimized the rot; if it continues, the Commons may break with the player entirely — AND, in the worst case, a despairing Commons cell may rationalize 'if the rot works, maybe forced restoration is no worse' and slide toward the Pact themselves."
    because: "Weaponized rot is the cardinal violation (§25 trust_is_broken_by) and the exact opposite of restoration. Worse, the Commons' own corruption (forced healing) is ADJACENT to the Pact's (forced rot); seeing the player tolerate the rot erodes the Commons' own taboo against forcing things — the player's corruption can pull the faction toward its own."
  },
  {
    if: "The player publicly defends the Sap Commons against the elders'/Guild's 'reckless reformers' brand (testifies for them at the Rootmoot, vouches for the cure plan)."
    then: "Sap Commons trust +8, debt +6, and — crucially — the haste-pressure on the cure clock EASES (they no longer need to prove themselves by acting prematurely); the coalition with wavering Rootwardens and junior Communers strengthens."
    because: "The 'reckless' brand is the Keeper's lever (§6): it pushes the Commons to act too soon to disprove it. Removing the brand removes the pressure to rush — a faction that feels respected does not need to prove itself with a hasty catastrophe."
  },
  {
    if: "The player lets Auralis 'free' the trapped by USING them (the Void's false Passage Tending), and the Commons learns of it (§25)."
    then: "Sap Commons is horrified (trust −, alarm +); Sylune sees the restoration path itself being corrupted into the Pact's by a kinder name; the Commons may distance itself from the player AND grow more rigid/fearful about its own cure (over-correcting toward delay or splintering)."
    because: "The false Passage Tending is forced healing's spiritual twin and the cardinal sin in disguise (§9, §25). The Commons defines itself AGAINST using the dead; seeing a trusted ally do it 'mercifully' threatens the faction's whole moral identity and can fracture it."
  },
  {
    if: "The Heartmoot defers the well decision to 'next season' yet again, and the player does nothing to break the paralysis (§25)."
    then: "Reformers (Sap Commons) and refugees lose faith and drift to riskier options — a forced cure, or the Hollow Pact; the cure clock's forced-branch pressure rises; keeper_pressure rises silently; Sylune's resentment of the elders hardens toward unilateral action."
    because: "Stagnation IS the Keeper exploit (§8). Paralysis is not neutral — it actively drives the cost-bearers toward corruption. The Commons exists BECAUSE the elders won't act; every deferral proves the Commons right and pushes it closer to acting alone, recklessly."
  }
]
```

---

## 9. Betrayal Triggers

Betrayal in Verdance is never random (Chunk 4; §25). The Sap Commons is loyal by
temperament — it betrays *upward* (against the elders/Guild it already opposes) far
more readily than it betrays an ally. But it CAN turn, and its turns are tragic, not
treacherous.

```ts
BetrayalTriggers {
  faction_id: "fac_verdance_sap_commons"
  // the Commons turns ON the player / an ally when:
  against_player_or_ally: [
    {
      trigger: "The player repeatedly counsels patience but never RELIEVES the dying (no sap, no clean source, no defended Refuge)."
      because: "Patience without relief reads as complicity with the abandonment the Commons exists to fight. A cell will eventually act alone — forcing the cure or going to the Pact — and treat the player as one more interpreter who told them to wait while their people died."
      manifestation: "A tending-circle splinters off and forces a half-ready cure (or defects to Nymara), discrediting the cure and possibly causing the §29 forced-cure catastrophe."
      risk_factors: ["dying-at-the-rationing-line pressure", "Heartmoot deferral", "the 'reckless' brand unrebutted"]
    },
    {
      trigger: "The player adopts corrupted sap / tolerates the Hollow Pact, eroding the Commons' own taboo against forcing things."
      because: "If the player's rot 'works,' the Commons' adjacent taboo (don't force the cure) weakens; a despairing cell rationalizes its own forcing as 'no worse than what the player does.'"
      manifestation: "Internal slide: the Commons' forced-healing faction grows; the moderates distance from the player; in the worst case a cell crosses to the Pact (forced healing 7.3 → weaponized rot 7.6)."
      risk_factors: ["player void_resonance", "active Hollow Pact toleration", "a failed clean cure"]
    },
    {
      trigger: "The player sides with the Seed Guild's rationing or enclosure of the commons."
      because: "Commons vs commodity is the Commons' second founding fight (§23). Backing the Guild is backing the enclosure of the sacred-sap commons against its cost-bearers — a direct betrayal of the faction's reason to exist."
      manifestation: "The Commons withdraws labor/trust, brands the player a Guild creature, and a sap-strike may turn against the player's interests."
      risk_factors: ["scarcity", "Brom Valefern's pressure", "refugees turned away"]
    }
  ]
  // the Commons can be PUSHED to betray its OWN principles when:
  self_betrayal_into_corruption: [
    {
      trigger: "A cornered cell decides 'the slow true cure is too slow' (the despair point)."
      because: "Forced healing (7.3) is the Commons' native corruption; under unbearable mortality pressure, the love that wants to heal overrides the patience that knows it isn't ready."
      manifestation: "Forced cure (catastrophe), or forced communion/healing on the unwilling, or — one despair further — the Hollow Pact's fast false cure."
      keeper_payoff: "Restoration discredited; the sealed-wells policy vindicated; cost-bearers routed to the Pact."
    }
  ]
  // who can PRE-EMPT the betrayal: the player, by relieving pressure (cuttings, sap, defended Refuge, rebutted 'reckless' brand) and keeping Sylune patient.
}
```

---

## 10. Player Opportunity

```ts
PlayerOpportunity {
  faction_id: "fac_verdance_sap_commons"
  what_they_offer: [
    "The restoration PATH — the only faction whose plan actually CURES the well rather than holding, burning, or using it.",
    "Sylune Amberroot — a brilliant healer, cure-knowledge, and the player's natural ally for a real solution (and a romance candidate, §21).",
    "Restoration sapcraft and cleansing-communion expertise; the four healing disciplines at depth.",
    "Popular legitimacy and the loyalty of the cost-bearers (tenders, growers, refugees) — bodies for a square, hands for a strike, witnesses for a cause.",
    "Economic leverage: the Commons MAKES the medicine, so it can withhold or redirect it against the Seed Guild.",
    "A coalition gateway to the Greenwake Communion (Auralis) and wavering Rootwardens (rank-and-file under Thalen)."
  ]
  what_they_need_from_the_player: [
    "PATIENCE — the player is the steadiness the Commons lacks; keeping Sylune from forcing a half-ready cure is the single most important thing the player does for this faction.",
    "The cure's missing COMPONENTS: Heartroot cuttings (from the Heartmoot), Greenwake hearing (Auralis, to release the trapped), Rootwarden containment DURING the cure (Thalen), and addressing the Abyss CAUSE (§29 Chain 2).",
    "Relief for the dying (sap, a clean source, a defended Refuge) so 'wait' stops feeling like 'let them die.'",
    "A public defense against the 'reckless reformers' brand so the Commons isn't pushed to prove itself prematurely.",
    "Keeping the player's OWN methods clean — no corrupted sap, no Pact toleration — so the Commons' taboo against forcing things holds."
  ],
  what_it_costs_the_player: [
    "Opposition from the Heartmoot (you are backing the cost-bearers against the interpreters) and the Seed Guild (commons vs commodity).",
    "The 'reckless reformer' brand by association.",
    "The hardest gameplay ask in the MVP: managing a clock that resolves as triumph or catastrophe based on your restraint, not your power."
  ],
  the_signature_arc: "The player as the Commons' PATIENCE. The faction's hope is real and its cure is real, but its love outruns its restraint. The player's job is not to give the Commons power (it has legitimacy and labor) but to give it TIME — to relieve the pressures that would make it force the cure, supply the components that make patience possible, and hold Sylune steady at the bottleneck. Done right, the Commons proves restoration works and sets the precedent that heals four wells (§23 fifth_order). Done wrong, the Commons becomes the Keeper's proof that the wells cannot be healed — and the despairing survivors walk to the Hollow Pact.",
  best_outcome: "The true cure: a patient cleansing-communion + Passage-completion releases the trapped, the well heals, the commons holds, and restoration becomes a continental practice again.",
  worst_outcome: "The forced cure: a half-ready attempt spreads the corruption, restoration is discredited, the Commons fractures, and a despairing cell takes the Hollow Pact's fast false cure — the Keeper's complete victory through the BEST faction's love."
}
```

---

## 11. Key NPC — Sylune Amberroot

```ts
NPCState {
  id: "npc_sylune_amberroot"
  campaign_id: "<campaign>"
  name: "Sylune Amberroot"
  domain: "Verdance"
  public_role: "Healer-of-renown; founder and leader of the Sap Commons"
  private_role: "The one Verdant who has actually worked out HOW the well might be cured — and who is terrified she is not patient enough to wait for her own cure to ripen"
  faction_ids: ["fac_verdance_sap_commons"]
  location_id: "loc_thornveil_refuge"
  belief_core: "The network can be HEALED, not just held; the sacred-sap commons belongs to the people who tend and bleed for it; and refusing to TRY to heal is the deeper heresy."
  desire: "To cure the Thornveil well — truly, releasing the trapped dead the right way — and to prove it so the elders can no longer say the wells cannot be healed."
  fear: "That she will lose her patience and force the cure before it is ready, and that her love for the dying will SPREAD the corruption she means to heal — that she will become the proof that restoration is reckless."
  secret: "She has already had the chance to attempt a partial cure and CHOSE to wait — and a child died in the waiting whose name the well now speaks. She is one such death away from never waiting again. She is, quietly, looking for someone to be the patience she is running out of."
  public_mask: "Confident, warm, tireless healer and fierce reform organizer."
  private_truth: "Exhausted, grief-worn, and frightened of her own urgency; the most patient public voice in Thornveil and the closest to breaking."
  hp: 14
  status: "alive"
  trust: 30; fear: 4; affection: 12; suspicion: 8; respect: 22; debt: 0; resentment: 6; loyalty: 18
  relationship_to_player: "conditional_ally"  // a natural ally who must be kept patient and clean
  can_romance: true; can_betray: false; can_die: true; can_kill: false; can_defect: true; can_start_rumors: true
  rumor_style: "Testimonial — she tells true stories of the dying to move people; reluctant to spin, which makes her credible."
  lie_style: "She barely lies; her 'lie' is omission — she downplays how close she is to forcing the cure."
  loyalty_trigger: "The player supplies the cure's components and RELIEVES the dying, so patience becomes possible — and keeps their own methods clean."
  betrayal_trigger: "Not betrayal of the player but SELF-betrayal: cornered by enough deaths with no relief, she forces a half-ready cure (the §29 catastrophe) — or, one despair further, takes the Hollow Pact's fast alternative. The player counseling patience WITHOUT relieving the pressure is what pushes her there."
  death_consequence: "The restoration path loses its leader and its credibility; the Sap Commons fractures or radicalizes; the cure becomes far harder; her martyrdom could either inspire a careful continuation or panic the Commons into the Hollow Pact's fast alternative (§21)."
  hero_arc: "With the player's patience and the cure's components, Sylune leads the TRUE cure at Thornveil, releases the trapped, and becomes the architect of a continental restoration — the woman who proved the wells can be healed."
  villain_arc: "Branded reckless, denied the cuttings, and broken by the dying, Sylune forces a half-ready cure that spreads the corruption — and in her grief and guilt slides into forced healing, then despair, then (worst case) the Hollow Pact's theology, becoming the tragic proof that restoration is reckless."
  memory_ids: []
  agenda_clock_ids: ["clk_sap_commons_cure_attempt"]
  visibility_to_player: "confirmed"
}
```

**Playing Sylune.** She is the player's *natural ally for a real cure* (§21) and
the emotional center of the restoration path. The crucial design note: **Sylune is
not the player's problem to solve so much as the player's patience to lend.** She
already knows the cure; she already believes in waiting; she is simply running out
of the strength to wait. Every scene with her should put the slow true cure and the
fast false one on the same table — and let the player's relief of her burdens (a
cutting obtained, a refugee saved, a death prevented, a brand rebutted) be what
keeps her hand steady. She trusts slowly (Verdant patience, §25) and breaks
tragically, never treacherously. If she falls, she falls *loving people too much to
wait.*

---

## 12. FactionState — Concrete Instance

A complete, build-ready `FactionState` (Chunk 3 schema) at the **opening of "The
Sap Beneath the Ash"** (campaign_phase `local_crisis`, Thornveil region). Numbers
align with Verdance Bible §27 (faction_control, virtue states) and the 0–100 scale.

```ts
FactionState {
  id: "fac_verdance_sap_commons"
  campaign_id: "<campaign>"
  name: "The Sap Commons"
  domain: "Verdance"
  doctrine: "The network can be HEALED, not just held; the sacred-sap commons belongs to its cost-bearers, not its interpreters; restoration over containment; the dead released the true slow way, never used and never abandoned."
  ideal_future: "A truly cured Thornveil well that proves all four wounded wells can be healed, not sealed, and a Verdance where the tenders who pay the cycle's cost have a voice and restoration is a continental practice again."
  public_goal: "Force a real restoration attempt on the Thornveil well; win the cost-bearers a seat at the Rootmoot; break the sap-rationing starving the Refuge."
  hidden_goal: "Prove the cure works so undeniably the Heartmoot can no longer hide behind 'the wells cannot be healed,' cracking the sealed-wells secret and forcing a continental Vigil; privately, find someone to keep Sylune patient enough to succeed."

  leader_npc_ids: ["npc_sylune_amberroot"]
  champion_npc_ids: ["npc_ilyra_thornsong"]  // aligned community ally; tending-circle organizers (unnamed) under Sylune

  class_base: {
    "Tending Class (Healers/Growers/Shapers)": 70,
    "Refugees / the Sheltered (sympathetic)": 55,
    "Wavering Rootwardens": 25,
    "Junior Greenwake Communers": 30,
    "Disaffected Seed Guild stewards": 12
  }

  power_sources: {
    military: 22, economy: 63, magic: 58, religion: 55,
    intelligence: 47, legitimacy: 66, resources: 49, fear: 18
  }

  resources_controlled: ["Healing-sap PRODUCTION (the labor that makes the medicine)", "Restorative-medicine and soil-restoration expertise", "Cleansing-communion / restoration cure-knowledge (Sylune)", "The tending-circle network", "Popular goodwill among tenders and refugees"]
  locations_controlled: ["No territory; strong presence in Thornveil's healing-houses, the Communion Bowl hall, and the refugee camp (loc_thornveil_refuge)"]
  magic_access: ["Restoration sapcraft", "Cleansing-communion", "Healing-sap craft", "Soil restoration", "(needs, does not yet have) Heartroot cuttings + Greenwake hearing for the full cure"]
  military_units_controlled: ["None — civil/labor force only (sap-strikes, square-fillings, blockades)"]
  trade_routes_controlled: ["None directly; influences distribution by controlling production; contests the Seed Guild's market and rationing"]

  internal_rivals: ["A forced-healing / 'cure now' faction within its own tending-circles (the despair-prone cells)", "Fatalist-leaning members after any setback"]
  external_enemies: ["Seed Guild (commons vs commodity)", "Heartmoot/Rootmoot elders (cost-bearers vs interpreters; whether to heal)"]
  possible_allies: ["Greenwake Communion (needs its hearing to release the trapped)", "Wavering Rootwardens / Thalen Mossguard (containment DURING the cure)", "Ilyra Thornsong and the refugees", "the player (its keystone patience)"]
  secret_alliances: ["Quiet sympathies among junior Communers and a few commons-stewards"]
  infiltration_targets: ["The Thornveil Rootmoot (to win cost-bearer representation)", "The Heartmoot's cutting-stores (to free the cure-stock)"]

  methods: {
    diplomacy: 58, open_war: 12, sabotage: 30, propaganda: 55,
    assassination: 4, trade_pressure: 60, magical_escalation: 38
  }

  player_standing: {
    reputation: 40,   // a Verdant healer/tender is presumed a natural ally (§26 starting_faction_assumptions)
    trust: 30,        // earned slowly, Verdant-style — starts cautiously warm
    fear: 4,          // the Commons does not fear the player and is not feared by them
    respect: 22,      // provisional; rises fast if the player proves clean and competent at restoration
    suspicion: 8,     // low, but watching whether the player will go the rot/Pact route
    debt: 0,          // none yet; the Commons OWES the player if they supply cuttings/relief
    leverage: 12      // modest; the player can move the Commons mainly by relieving its pressures, not by coercion
  }

  keeper_exploit_vector: "Impatience and forced healing — brand the reformers reckless, choke the cure's components, pile the dying at the rationing line, and let a cornered cell force a half-ready cure that SPREADS the corruption (or forces restoration on the unwilling), discrediting restoration itself so the sealed wells stay sealed."
  void_temptation_phrase: "Only you want them WELL. So why let them suffer the slow way? You have the cure — nearly. Close enough. Heal them now, ready or not — waiting one more season is not patience, it is just letting them die politely. A cure that comes too late is no cure at all."

  agenda_clock_ids: ["clk_sap_commons_cure_attempt"]
  active_rumor_ids: ["rm_sap_commons_reckless", "rm_commons_belongs_to_people", "rm_a_real_cure_is_possible"]
  current_status: "Rising reform movement at Thornveil, coherent and popular, petitioning the Rootmoot for a cure attempt; component-starved and pressure-loaded; one bottleneck away from forcing a catastrophe or — with the player's help — achieving a real cure."
}
```

---

## 13. Consequence Examples (3rd- and 5th-order)

Per Chunk 4 depth levels and the formula **Action → Method → Witness →
Interpretation → Power Shift → Social Reaction → Systemic Effect → Metaphysical
Effect → Future Pressure.**

### 3rd-order example — "The player supplies the Heartroot cuttings" (depth 3→4)
**Root:** The player petitions/pressures the Heartmoot and obtains Heartroot
cuttings, delivering them to Sylune. **Method:** legitimate restoration logistics
(not theft, not rot).

- **1st (immediate):** Sap Commons trust +14, debt +8; Sylune begins assembling the
  full cure; the forced-cure pressure on `clk_sap_commons_cure_attempt` drops.
- **2nd (scene/session):** Word spreads that "a real cure is being prepared"; the
  rumor `rm_a_real_cure_is_possible` strengthens; the Seed Guild quietly seeds the
  counter-rumor "the reckless cure will spread the blight" (§24 stabilize-the-asset
  mutation); wavering Rootwardens grow curious.
- **3rd (local/system):** Power shift at the Thornveil Rootmoot — the Commons gains
  real standing (legitimacy + a working plan beats the Guild's "stabilize" line); the
  Heartmoot's withholding-the-cuttings position is undermined; the coalition of
  Commons + junior Communers + wavering Wardens coheres; the cure clock advances
  toward the TRUE branch. **Future pressure:** the Guild and elders, outflanked, may
  brand the player reckless or move to retake control of the cure's narrative.

### 5th-order example — "The forced cure catastrophe" (depth 5)
**Root:** The player counsels patience but never relieves the dying; a cornered
tending-cell forces a half-ready cure on the well to save the dying NOW. **Method:**
forced healing (7.3) — restoration without the Heartroot cuttings or true Greenwake
hearing. **Depth required: 5** (soul flow, Stone, Keeper).

- **1st:** The cure LOOKS like it works for an hour — the well quiets, sap flows —
  then it disturbs the trapped instead of releasing them. Soil corruption +; more
  dead caught; soul_flow_integrity −; the trap-site blights.
- **2nd:** Ilyra and the refugees, who trusted the Commons, are devastated; Thalen
  and the Rootwardens feel grimly vindicated ("containment was right"); the rumor
  `rm_sap_commons_reckless` is PROVEN and weaponized (§24): "restoration spreads the
  blight."
- **3rd (local/system):** The Sap Commons FRACTURES — moderates blame the cell, the
  cell blames the elders who withheld the cuttings, fatalists conclude "the wells
  cannot be healed," and a despairing faction begins to whisper that "the clean cure
  failed because it was clean."
- **4th (regional/political):** Restoration as a DOCTRINE is discredited across the
  region; the Heartmoot's sealed-wells policy is vindicated; the precedent hardens
  that wounded wells are sealed, not healed — dooming the other three sealed wells
  (§23 fifth_order); the Seed Guild's "stabilize the asset" line wins by default.
- **5th (mythic/metaphysical):** The botched mass-working stresses the rootwell node
  toward a permanent trap; soul_flow_integrity crashes; domain_stone_stability −;
  keeper_pressure + (the Keeper's true prize: restoration ITSELF is now believed
  impossible). The Void's next whisper reaches the survivors — "the rot is the only
  thing strong enough" — bridging forced healing (7.3) to weaponized rot (7.6): a
  despairing Commons cell, or Sylune herself, takes the Hollow Pact's fast false
  cure. **The best faction, undone by love, becomes the Keeper's instrument.**
- **Intervention (per Chunk 4 — consequences are heavy, not hopeless):** relieve the
  dying BEFORE the cell forces the cure; supply the cuttings and Greenwake hearing so
  the attempt isn't half-ready; if the catastrophe begins, race a true
  Passage-completion to release the freshly-trapped before binding completes (§29
  Chain 2); keep the survivors from the Hollow Pact by giving them a real next
  attempt; defend Sylune from the guilt-spiral that leads to the rot.

---

## 14. MVP Role in *The Sap Beneath the Ash*

The Sap Commons is the **restoration path** of the MVP — the one of the four-way
fork (contain / heal / weaponize / stabilize, §20, §23) that *actually tries to cure
the well.* If the Rootwardens are the slow grave, the Seed Guild the cynical
management, and the Hollow Pact the fast damnation, the Sap Commons is **the hard,
real hope** — and the MVP is, at its heart, the question of whether that hope can be
kept patient enough to come true.

**1. The restoration path — and why it is the campaign's keystone.** A true cure at
Thornveil is the single most consequential good outcome in the MVP (§23
fifth_order): it heals a soul-flow chokepoint, releases the trapped, drops
keeper_pressure, and sets the precedent that the other three sealed wells — and the
whole border — can be healed rather than sealed. The Sap Commons is the only faction
that can deliver it, and it can only deliver it with the player's help. Backing the
Commons is choosing to believe the world can be *mended,* not just *held* — the
deepest expression of Verdance's true soul.

**2. The danger of a too-soon cure.** The MVP's signature Sap-Commons tension is
NOT good-vs-evil; it is **right-but-too-soon.** The cure is real and the Commons is
right, but the cure must ripen at the wound's pace, not the dying's (§6.2). Branded
reckless by the elders, denied the Heartroot cuttings, and watching people die at
the rationing line, a cornered Commons cell — or Sylune herself — is *one despair
away from forcing a half-ready cure that spreads the corruption,* and one despair
further from the Hollow Pact's fast false one (§6, §7, §13). The player is the
patience the Commons lacks. The whole arc of this path is the player relieving the
pressures (cuttings, hearing, containment, relief for the dying, a rebutted
"reckless" brand) that would otherwise make love outrun restraint. Win, and
restoration proves itself. Lose, and the BEST faction becomes the Keeper's proof
that the wells cannot be healed.

**3. The commons-vs-commodity fight with the Seed Guild.** Running underneath the
cure is the MVP's economic spine: **is the sacred-sap commons a shared trust or a
managed market?** (§23 "The Commons or the Market?"). As clean sap grows scarce, the
Seed Guild rations it as an asset — pricing it, restricting it, selling around the
wound (and, through fronts, to Abyss) — while the Sap Commons insists sap belongs to
its cost-bearers and the Refuge oath ("we do not turn away the wounded") must hold.
This is the faction's *second* front and it is inseparable from the first: **the
Guild's rationing is exactly what piles the dying at the line and pressures the
Commons into forcing the cure.** Break the Guild's enclosure — defend the Refuge
oath, expose the hoarding and the Abyss sales, restore a clean source — and the
player relieves the very pressure that would otherwise produce the forced-cure
catastrophe. The commons-vs-commodity fight and the patience-vs-haste fight are the
same fight seen from two directions: scarcity is the fuel, and the Seed Guild keeps
pouring it on.

**4. How VERDAX should run this path.** Make every Sap Commons scene put the slow
true cure and the fast false one on the same table. Make patience *cost* something
visible (a death in the waiting) and *relief* feel like grace (a cutting obtained, a
refugee saved). Treat Sylune as the player's patience to lend, not a puzzle to
solve. And remember the Keeper's signature in Verdance (§8): no villain, no purge —
just a brilliant healer who buried one child too many, a council that wouldn't
release the cure, a rationing line of the dying, and a tending-circle that decided
it could not wait. The Sap Commons is how the MVP asks its central question: *can a
civilization that reveres patience and restoration find the patience to restore —
before its love for the dying makes it reckless, and its recklessness proves the
Keeper right?*

---

## QA Notes (for CANON-WARDEN)

- **Canon compliance:** Doctrine, class base, power base, main rivals (Heartmoot +
  Rootwardens), Keeper vulnerability (impatience / forced healing / despair-route to
  Hollow Pact), and Sylune's role are taken verbatim/expanded from Verdance Bible §20
  and §21; the commons-vs-commodity fight and the cure-vs-stabilize tension follow §23
  and §14; all IF/THEN/BECAUSE rules align with §25; consequence chains follow §29 and
  Chunk 4.
- **Quality gates (agent-council):** real point (restoration is genuinely possible) +
  dangerous flaw (impatience/forced healing); Sylune acts from belief/desire/fear/
  secret; consequences reach 5th order; the Keeper exploits logically (delay +
  discredit-the-cure); trackable via FactionState, the cure clock, and rumor IDs.
- **Open questions:** (1) Exact readiness threshold for the cure clock's true-vs-
  catastrophe branch (a War Room value — SCHEMA-FORGE to set). (2) Whether a Sap
  Commons → Hollow Pact defection should be a distinct NPC (a named cell-leader) or
  remain Sylune's worst-case villain_arc. (3) Cross-reference IDs for
  `npc_ilyra_thornsong`, `loc_thornveil_refuge`, and the rumor IDs once the NPC and
  location bibles are drafted.
```
