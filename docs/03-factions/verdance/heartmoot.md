---
title: The Heartmoot / Rootmoot Elder Councils — Faction Bible
status: Draft v1.0
lead: FACTION-WEAVER
qa: CANON-WARDEN
domain: Verdance
faction_type: central authority (legitimacy / governance)
chunk: 3-Factions / Verdance
mvp: true
note: >
  The Heartmoot is the central authority of Verdance and THE primary Keeper
  foothold in the domain. This bible obeys Verdance Domain Bible v1.0 (binding
  canon, especially Sections 7, 8, 20, 23, 24, 25), maps to the FactionState
  schema (Chunk 3), and reaches Chunk 4 cause/effect depth. It is build-ready for
  the MVP "The Sap Beneath the Ash" at Thornveil Refuge.
---

# The Heartmoot / Rootmoot Elder Councils — *The Patience That Will Not Turn*

> "We are not asked to decide. We are asked to listen until the right decision
> decides us. The wheel has not yet turned. Sit with it one more season."
> — Elder Maera Rootveil, closing the fourth indecisive Thornveil Rootmoot

> *"They have been listening so long they have forgotten how to answer. And the
> dead they will not free have learned to fill the silence."*
> — attributed, in the relay, to no one who will admit it

---

## 1. Faction Name

**The Heartmoot / Rootmoot Elder Councils** — the central, continental authority
of Verdance. The **Heartmoot** is the great convocation at Greatroot Hollow,
seated over the Heartroot itself; the **rootmoots** are its regional limbs (the
Thornveil Rootmoot is the MVP-local body). Collectively they are *the Listening
Class made into a government* — the elders and communers who claim the right to
hear the roots and the dead truly, and therefore to interpret the cycle for
everyone else.

Common names for them: *the Listeners, the Elder-Seat, the Long Patience, the
Rooted Council.* Their detractors call them *the Sealed Mouths* — a name that
cuts twice, for an interpretive class that has stopped speaking decisions, and
for the wells they have quietly sealed shut.

---

## 2. Domain

**Verdance** — the living-cycle restoration civilization. The Heartmoot is its
political center and the keeper of its founding interpretive monopoly: that
authority flows not from force or wealth but from *depth of communion* — from how
truly one can hear the roots and the dead.

---

## 3. Doctrine

The cycle is kept by **patient, communal listening**. Authority flows from depth
of communion: the one who hears the roots and the dead most truly speaks with the
most weight. **Decide slowly.** No decision is meant to be final; the rootmoot
expects to revisit every choice when the wheel turns. **Contain wounds; do not
act rashly** — a wound walled is recoverable, but a cure that fails spreads the
rot, and a haste-sin cannot be un-committed. Haste is the cardinal civic error;
green wood bends, dry wood breaks.

Beneath the stated doctrine runs an unstated one, which the Heartmoot would never
phrase aloud and barely phrases to itself: **the interpreters hear; the
cost-bearers pay; and the interpreters decide what the cost-bearers heard.** This
is the doctrine that has curdled. Communion (a soul-flow-protecting practice) has
been quietly converted into a control structure — and *because only the elders can
claim to hear truly, their interpretation is unfalsifiable.*

---

## 4. Ideal Future

A Verdance where the cycle turns unbroken and slow forever: every grove tended,
every death received and released cleanly into root-memory, every decision made by
patient consensus around the shared sap-bowl, no wound ever spreading because none
was ever rushed. A continent governed by listening, where the living and the dead
remember each other in peace and the elders are the honored loom that holds the
weave together. **A world with no haste in it, and no need for any.**

The danger inside the dream: it is a future with no *turning* — a cycle preserved
by never letting it move. The Heartmoot's paradise is, structurally, stasis.

---

## 5. Public Goal

To **shepherd the cycle through the Thornveil crisis without haste or harm** — to
listen until consensus emerges on the speaking well, to contain the corruption so
it cannot spread, to protect the sacred-sap commons and the Refuge, and to keep
Verdance from the two errors it most fears: a reckless cure (Sap Commons) and a
purging fire (Radiance). Publicly, the Heartmoot is the calm, deliberate guardian
of continuity, waiting for the right answer to arrive.

---

## 6. Hidden Goal

To **never have to admit the cure was feared, not weighed.** The Heartmoot has
already sealed and abandoned three corrupted rootwells — and their trapped dead —
and called it containment. Its deepest hidden goal is institutional self-
preservation disguised as patience: to keep the interpretive monopoly intact, to
keep the sealed-wells policy buried, and to let Thornveil follow the same quiet
path (seal, deny, reframe-as-heritage) so that the council never has to confess
that *it does not know how to heal what Abyss broke, and has not dared to try.*

Maera Rootveil holds this goal in its purest, most tragic form: she knows the
sealing policy, she has presided over four indecisive rootmoots, and the thing she
is truly waiting for is not consensus — it is for the decision to be taken out of
her hands so she never has to be the elder who admits the cycle can break.

---

## 7. Class Base

```ts
class_base: {
  "Elders (the Seated Authority)": 90,
  "Communers / Listeners (the interpretive clergy)": 75,
  "Rootwarden allies (the Guarding Class, seconded to the council)": 55,
  "Custodial scribes & root-archivists (the record-keepers)": 60,
  "Aligned grove-keepers & Passage-Tenders (the rural faithful)": 45,
  "The deferential young (raised to revere the Seat)": 35
}
```

The Heartmoot **is** the Listening Class organized as a state. Its core is the
elders and the recognized communers — the people whose authority is their claimed
depth of hearing. It is **allied with the Rootwardens** (Section 14, 17), who
provide the muscle and the well-access the council's legitimacy commands but does
not itself possess. The rural faithful — grove-keepers like Ilyra Thornsong, the
ordinary Passage-Tenders — are its base of devotion, and also its first
defectors when paralysis abandons their dead.

---

## 8. Power Base

The Heartmoot's power is almost entirely **legitimacy and interpretation** — it
is a faction that is dangerous out of all proportion to its swords or its coin,
because it holds the keys to *meaning, sanction, and the sacred cure-stock.*

```ts
power_sources: {
  military:      28,  // no army of its own; borrows Rootwarden force, which it does not fully command
  economy:       45,  // controls the sacred-sap commons in principle, but the Seed Guild runs the actual market
  magic:         66,  // commands the deepest sanctioned Root-Communion, Naming-Back, and access to the Heartroot
  religion:      82,  // the interpretive monopoly over the cycle; near-priestly authority over what the roots "mean"
  intelligence:  64,  // the mycelial relay and the root-archives flow to and through the council
  legitimacy:    88,  // the keystone: the claim to hear the roots and the dead truly; the source of sanction itself
  resources:     71,  // custody of the Heartroot and the sacred replanting stock (clean cuttings = the cure-stock)
  fear:          30   // low and falling; the Heartmoot rules by reverence, not terror — and reverence is eroding
}
```

**Reading the numbers.** Legitimacy (**88**) and religion (**82**) are the
Heartmoot's twin pillars and its single point of failure: *every other power flows
from the claim to hear truly.* Crack that claim — show the elders mishearing, or
hiding, or contradicted by a truer hearer (Auralis) — and military, economy, and
resources all become unenforceable, because the Heartmoot has no way to *make*
anyone obey, only to be *believed.* Resources (**71**) is the player-facing lever:
the council's custody of the Heartroot cuttings means **no real cure happens
without the Heartmoot releasing the stock.** Fear (**30**, falling) is the tell of
a legitimacy regime in decline — when reverence fails, it has nothing to fall back
on.

---

## 9. Resources Controlled

```ts
resources_controlled: [
  "The Heartroot itself (the densest knot of the Verdance Stone network, beneath Greatroot Hollow) — custodial authority",
  "The sacred replanting stock: clean Heartroot cuttings (THE cure-stock for any true cleansing-communion or replanting; locked in the capital)",
  "The sacred-sap commons (de jure governance of the shared healing-sap resource; de facto contested with the Seed Guild)",
  "The root-archives (the irrefutable memory record; evidence, lineage, witness)",
  "The mycelial relay's trunk lines (the council's word travels fastest and is treated as most authoritative)",
  "Sanction itself: the authority to declare a cure, a tactic, a Refuge policy, or a person legitimate or forbidden",
  "The Naming-Back monopoly (the sanctioned authority to recover/confer the names of the dead)",
  "The rootmoot governance machinery (who is seated, who speaks, when a question is 'decided')"
]
```

The single most important resource for the MVP is the **clean Heartroot cuttings**.
The Sap Commons can devise a cure; the Greenwake Communion can hear who is trapped;
the Rootwardens can hold the line during a working — but a *true* cleansing-
communion and replanting needs clean stock from the Heartroot, and that stock is
in the Heartmoot's locked custody. **This is the faction's hard gate over the
restoration path.**

---

## 10. Locations Controlled

```ts
locations_controlled: [
  "Greatroot Hollow (the Heartmoot's seat; the Heartroot vault; the sacred cutting-stock)",
  "The Thornveil Rootmoot hall (the regional council seat; Maera presides) — the MVP-local power center",
  "The root-archives (continental and regional memory libraries)",
  "Sanctioned communion-groves (the closed groves where official hearings are held)",
  "The trunk-line relay stations (the council's privileged channels of the mycelial network)",
  "Custodial oversight (NOT garrison control) of the great rootwells, including the sealed-and-denied three and the speaking Thornveil well"
]
```

Note the crucial distinction: the Heartmoot holds *custodial and interpretive*
authority over the wells, but the **Rootwardens** physically garrison and gate
them. The council decides what a well *means* and whether it may be cured; the
Wardens decide who walks up to it. This split is why Heartmoot paralysis and
Rootwarden exhaustion compound (Section 12, 25).

---

## 11. Magic Access

```ts
magic_access: [
  "Deepest sanctioned Root-Communion (the official 'listening' that grounds council authority)",
  "Naming-Back at sanctioned scale (recovering the names of the dead — monopolized by the council)",
  "Access to the Heartroot and clean cutting-stock (gates cleansing-communion and replanting at scale)",
  "Sanctioned Passage Tending oversight (the council blesses or forbids who may release the dead)",
  "Tree-Memory Reading through the root-archives (the evidentiary record)",
  "Authority over the Heartroot Vigil (the continental healing convocation — the council alone can call it)"
]
```

The Heartmoot's magical power is **gatekeeping more than casting.** It does not
out-hear the Greenwake Communion (which is exactly the threat — Auralis hears
*more truly* and contradicts the council). What it holds is the *sanctioned* forms:
official communion, the Naming-Back monopoly, the cutting-stock, and the sole
authority to convene a **Heartroot Vigil** — the only ritual large enough to heal
*all four* wounded wells at once. The Vigil is the faction's greatest possible
contribution to the campaign and is locked behind its willingness to confess.

---

## 12. Military Units

The Heartmoot has **no standing army of its own** — a deliberate canon point;
Verdance does not conquer, and the central authority rules by reverence, not arms.

```ts
military_units_controlled: [
  "Seconded Rootwarden detachments (the council can REQUEST, not command, Rootwarden force; allied, not owned)",
  "Custodial wardens of the Heartroot vault (a small ceremonial-but-real guard on the cutting-stock)",
  "Moot-marshals (ceremonial order-keepers at hearings; symbolic, not a fighting force)",
  "Influence over the thornwall posture (the council's interpretation shapes whether the Wardens hold, cure, or seal)"
]
```

This is the Heartmoot's structural weakness *and* the reason its paralysis is so
dangerous: it cannot enforce a decision by force, so when its legitimacy slips and
the Rootwardens grow exhausted holding a line the council will not let them either
cure or abandon, **the council's only real power — being obeyed — quietly evaporates,
and a Warden like Othren Deepbark starts taking matters into his own corrupted-sap
hands.** The Heartmoot's military weakness is the seam through which the Hollow
Pact's shortcut enters.

---

## 13. Economic Leverage

```ts
economic_leverage: [
  "De jure control of the sacred-sap commons (the right to set who the commons serves) — though the Seed Guild has captured much of the day-to-day rationing",
  "Custody of the cure-stock (clean Heartroot cuttings), which is priceless and un-sellable but absolutely controllable",
  "Sanction over what is a legitimate sap-trade and what is profiteering (a brake on the Seed Guild it rarely applies)",
  "Authority to declare the Refuge open or closed (a decision with vast humanitarian and economic weight)",
  "The Naming-Back and memory/witness services (a sacred quasi-economy the council monopolizes)"
]
```

The Heartmoot's economic power is **the power to permit**, not the power to
produce or trade — which is why the Seed Guild (production and market) and the Sap
Commons (labor and skill) both chafe against it. The council *could* discipline the
Guild's hoarding by invoking the commons; its paralysis means it rarely does, which
is itself a quiet alliance with stagnation (the Guild's stabilize-the-asset
interest and the council's never-decide interest point the same way).

---

## 14. Internal Rivals

```ts
internal_rivals: [
  "The Sap Commons (THE main rival): says the cost-bearers, not the elders, should decide, and the network should be HEALED, not just held",
  "The Greenwake Communion: hears the roots and the dead DIRECTLY, threatening the interpretive monopoly — if Auralis hears truer than the Seat, the Seat's legitimacy cracks",
  "Reform-minded younger communers within the council itself (the next generation chafing at 'next season')",
  "The Seed Guild (frenemy): an economic rival over the commons and the sacred stock, but a tacit ally in stabilization-over-cure",
  "Rootwarden frustration (Thalen Mossguard's resentment at holding an un-healing line; Othren Deepbark's quiet drift) — nominal allies turning rival under paralysis"
]
```

**The main rival is the Sap Commons** (Sylune Amberroot). The conflict is the
deepest axis in Verdance — *interpreters vs cost-bearers.* The Commons says two
things the Heartmoot cannot bear: (1) the network can be **healed**, not merely
contained, which threatens the council's claim that containment was the only mercy
available; and (2) the **tenders and the wounded** — not the elders — should
decide, which threatens the interpretive monopoly itself. The Greenwake Communion
is the second, subtler rival: a faction whose claim to hear *more truly* is an
existential threat to a regime built on the monopoly of true hearing.

---

## 15. External Enemies

```ts
external_enemies: [
  "Abyss (the existential enemy and external engine of the wound; it corrupts the wells the Heartmoot will not cure)",
  "The Hollow Pact (the council's nightmare and its negation — Verdance harvesting souls 'for good reasons'; the proof of what paralysis produces)",
  "Radiance's 'burn it' faction (a dangerous friend whose offered cure — fire — severs the soul-passage the council is sworn to keep; consent is everything)",
  "Sanctuary's quarantine instinct (a friendly domain whose 'register and contain the dangerous' chafes against the Refuge tradition)",
  "The Void (the intimate parasite — but the Heartmoot does not recognize it; it experiences the Void only as 'the well speaking,' which it is tempted to reframe as ancestral wisdom)"
]
```

The Heartmoot's tragedy is that it correctly fears Abyss and the Hollow Pact, but
**its own paralysis is what hands victories to both** — Abyss's wound becomes
permanent because no one cures it, and the Pact's shortcut becomes the only thing
that "works" because the council's slow consensus never arrives. The Keeper is not
on this list because the Heartmoot cannot see it: the Keeper's signature in
Verdance is *no villain at all* — a meeting that ends without a decision.

---

## 16. Possible Allies

```ts
possible_allies: [
  "The Rootwardens (the standing alliance — containment authority + council legitimacy; but strained by paralysis)",
  "The Greenwake Communion IF the council can bear to let it hear (a reconciliation that braids communion + interpretation into the true cure)",
  "The Sap Commons IF the council releases the cuttings and lets the cure be attempted under containment (the 'true resolution' alliance)",
  "Sanctuary (legal legitimation of the Refuge; shared anti-Abyss front) IF Sanctuary stops short of forced quarantine",
  "Radiance IF it pledges to burn ONLY with consent and fund restoration of what it scorches",
  "The player — as the outside force that can break the paralysis the council cannot break itself"
]
```

The Heartmoot's most important possible ally is **the player**, precisely because
the council is structurally incapable of breaking its own paralysis: every elder's
authority depends on never being the one who admitted the mistake. An outsider can
force, shame, or empower the decision the insiders cannot make — which is why the
MVP positions the Heartmoot as a gate the player must pick, pry, or shatter rather
than an enemy to defeat.

---

## 17. Secret Alliances

```ts
secret_alliances: [
  "A tacit, unspoken alignment with the Seed Guild around STABILIZATION: the council's never-cure and the Guild's stabilize-the-asset both keep the wound a managed constant rather than a risk — neither admits this is an alliance",
  "The sealed-wells compact: a closed circle of senior elders (Maera among them) who know the three prior wells were sealed-and-abandoned and the policy is to do the same to Thornveil — a conspiracy of silence, not of malice",
  "Quiet Rootwarden complicity in the sealing policy (the Wardens who walled the prior wells and were sworn to silence; Othren's expertise traces here)",
  "An unacknowledged dependence on the Greenwake Communion's hearing while publicly treating the Communion as near-heretics (the council needs Auralis's information and resents needing it)"
]
```

The **sealed-wells compact** is the secret that matters. It is not a cabal of
villains — it is a circle of frightened elders who once decided that some wounds
could not be healed without spreading them, sealed three wells with their trapped
dead inside, swore the Wardens who did the walling to silence, and have spent years
reframing the abandonment as containment-mercy. Maera knows. Exposing this compact
is one of the two ways the player breaks the faction (Section 24, 28, 30); the
other is breaking its paralysis directly.

---

## 18. Fringe Behavior

The Heartmoot's "fringe" is not a wild edge — it is the *deepening of its central
flaw* into recognizable corruption (Section 7 of the domain bible):

```ts
fringe_behavior: [
  "STAGNATION (7.1): deferring the well decision to 'next season,' repeatedly; citing tradition to avoid choice; reformers leaving in frustration",
  "ELDER TYRANNY (7.2): 'you misheard the roots'; communion held behind closed roots; the same elders interpreting every season; treating Auralis's order as heretics for hearing directly; suppressing the well's real names as 'misheard'",
  "SEALING-AND-DENYING: the literal institutional method — wall a corrupted well, abandon its dead, deny it happened, reframe it as containment-heritage",
  "Reinterpreting the trapped voices as 'ancestral wisdom' (the Keeper's signature redefinition) so that freeing them comes to feel like a betrayal of tradition",
  "Rumor-suppression by reinterpretation: 'settling' a true rumor (e.g., about the sealed wells) by declaring the relay 'misheard'"
]
```

The most dangerous fringe behavior is the **quietest**: the slow reframing of
corruption as heritage. When the Heartmoot starts calling the trapped dead
"ancestors" and the corrupted well "a new kind of root," the Keeper has nearly won
— because then *healing the wound becomes heresy.*

---

## 19. Leader NPCs

```ts
leader_npc_ids: ["maera_rootveil"]
champion_npc_ids: ["senior_heartmoot_elders_sealed_compact", "moot_marshal_custodians"]
```

### Elder Maera Rootveil — Presiding Elder of the Thornveil Rootmoot

The presiding figure and the human face of the faction's virtue and its rot.
Maera is, by every Verdant measure, a *good* elder: patient, deep-listening,
genuinely devoted to the cycle, beloved for decades of true communion. She is also
the elder who **knows the Heartmoot's secret sealing policy** and who has now
**presided over four indecisive rootmoots about the speaking well** without
reaching a decision.

- **Belief core:** "Haste is how the cycle breaks. The right answer arrives if you
  listen long enough. Some wounds cannot be healed without spreading them — and
  admitting that would break the faith I am sworn to keep."
- **Desire:** for the decision to be taken out of her hands so she never has to be
  the elder who confessed that the cycle can break.
- **Fear:** that the cure was never weighed, only *feared* — and that she has spent
  her authority hiding that from herself as much as from Verdance.
- **Secret:** she knows the three prior wells were sealed-and-abandoned with their
  dead inside; she was part of the compact; she is leaning toward sealing Thornveil
  the same way and calling it mercy.
- **Public mask:** the serene, deliberate guardian of continuity.
- **Private truth:** a grieving, frightened woman whose patience curdled into
  paralysis the day she first chose to seal rather than risk a cure that might fail.

Maera is not a villain to defeat. She is the faction's **Keeper vulnerability made
flesh** (Section 23) — patience become paralysis, the monopoly hiding its mistake,
the wound defended by never admitting it. Her arc has two poles: *broken* (her
paralysis exposed and exploited, the council shattered) or *redeemed* (moved to
confess, release the cuttings, and call the Heartroot Vigil — turning the cover-up
into a continental restoration).

### The Sealed-Compact Elders

A small circle of senior Heartmoot elders who share the sealed-wells secret and
favor the seal-and-deny precedent for Thornveil. They are the faction's
"champions" in the structural sense — the keepers of the hidden goal. They are
the bloc the player must split (or expose) to free Maera to act.

---

## 20. Agenda Clock

The Heartmoot's clock does not advance toward a coup or a conquest. It advances
toward **permanent stasis** — the moment the Thornveil well stabilizes as a
sealed, denied, reframed-as-heritage trap, and the cover-up holds. It is a
*faction_agenda* clock that doubles as the domain's primary *keeper_pressure*
engine, because in Verdance, the Keeper wins by erosion and excuse.

```ts
PressureClockState {
  id: "clock_heartmoot_stagnation",
  campaign_id: "<campaign_id>",
  name: "The Wheel That Will Not Turn",
  description: "The Heartmoot's paralysis hardening into permanent policy: the speaking well sealed, denied, and reframed as heritage; the cure never attempted; the sealed-wells secret holding. Each tick is a deferred decision, not a dramatic act.",
  clock_type: "faction_agenda",   // doubles as keeper_pressure in domain effects
  current_value: 4,               // FOUR indecisive rootmoots have already passed (canon)
  max_value: 6,
  owner_type: "faction",
  owner_id: "faction_heartmoot",
  trigger_event: "Maera convenes (and fails to resolve) another Thornveil Rootmoot about the speaking well.",
  partial_tick_effects: [
    "Tick 4→5 (current): Reformers (Sap Commons) and refugees lose faith; Sylune drafts a half-ready cure to act WITHOUT sanction; Greenwake Communion considers acting unilaterally; Othren's secret corrupted-sap use deepens; keeper_pressure +2 (silent); Heartmoot legitimacy -3.",
    "Tick 5→6: The seal-and-deny precedent is openly proposed in council; the trapped voices begin to be officially called 'ancestral'; Sap Commons or Hollow Pact moves toward unilateral action; clean-sap scarcity bites harder; keeper_pressure +4; soul_flow_integrity (regional) -3.",
  ],
  completed_effect: "The Thornveil well is sealed-and-denied like the prior three; the trapped dead become permanent infrastructure reframed as ancestors; the sealed-wells secret holds; the seal-and-deny template is set for the whole border; keeper_pressure +8; regional soul_flow_integrity -10; Heartmoot legitimacy briefly STABILIZES (the cover-up succeeded) then becomes brittle (it now defends a wound). Verdance has been made to defend its own wound — the Keeper's masterstroke.",
  reversal_methods: [
    "Break the paralysis: force/shame/empower the Rootmoot to a real decision (release the cuttings; sanction a cure under containment).",
    "Expose the sealed-wells secret WITH a plan (the confession + Heartroot Vigil path), redeeming the cover-up into restoration.",
    "Move Maera personally (her redemption arc) to confess and act.",
    "Bring the Greenwake Communion's true hearing into sanctioned council (braid communion + interpretation), cracking the monopoly's denial.",
    "Reverse a tick by demonstrably curing/containing the well so paralysis is no longer 'safe.'"
  ],
  is_active: true,
  visibility_to_player: "hinted"   // the player sees 'the council keeps deferring'; the sealing secret is hidden until discovered
}
```

A companion **opportunity clock** ("The Confession That Heals," not detailed here)
runs in the reverse direction: each step the player takes toward exposing-with-a-
plan or moving Maera advances toward the Heartroot Vigil — the redemptive
continental cure of all four wells.

---

## 21. Keeper Exploit

```ts
keeper_exploit_vector: "STAGNATION + ELDER TYRANNY (the primary Keeper foothold in Verdance). Weaponize the Heartmoot's patience so the cure is always 'next season' until the wound is permanent (delay); then use the interpretive monopoly to hide the mistake (the sealed rootwells) and reframe the corruption as heritage ('the trapped voices are ancestors; the corrupted well is a new kind of root'), so that the council DEFENDS its own wound by never admitting it. The Keeper needs no army and no agent inside the council — only its patience, its pride, and its fear of confession. Signature: nothing dramatic happens — a meeting ends without a decision; a well is quietly sealed; a reformer gives up; an elder says 'next season.'"
```

This is **THE primary Keeper foothold in Verdance** (domain canon, Sections 8 and
20). The Heartmoot is not corrupted by infiltration; it is corrupted by being
*itself, one season too long.* The Keeper's two interlocking moves — **delay** and
**redefinition** — both live natively in the council's virtues: patience that
becomes paralysis, communion that becomes monopoly, ecological memory that becomes
the suppression of the dead's real names. The masterstroke is making Verdance
*defend* the wound: once the trapped dead are called "ancestors," freeing them
feels like betraying tradition.

**Prevention path:** action over deferral; confession over cover-up; releasing the
cuttings and the dead. The Keeper's foothold is dissolved the moment the council
admits a mistake and acts on it — which is exactly the one thing its hidden goal
exists to prevent.

---

## 22. Void Temptation Phrase

```ts
void_temptation_phrase: "There is no rush. The cycle will resolve it — it always has. You have listened so long; trust the season a little longer. And the voices in the well? They are not trapped. They are your ancestors, come back to teach you. To 'free' them would be to silence them. Seal the well gently, honor what speaks, and call it heritage. You are not abandoning the dead. You are keeping them."
```

The Void's cruelty toward the Heartmoot is that it offers **peace** — the
permission to stop deciding, to call the paralysis wisdom and the trapped dead
ancestors. It does not tempt the council toward power (that is the Hollow Pact's
temptation); it tempts the council toward *rest.* For an exhausted, frightened
elder like Maera, "you have listened so long; trust the season" is nearly
irresistible — because it sounds exactly like the doctrine she has served all her
life, with one fatal word changed: *patience* becomes *surrender* (Fatalism, 7.7),
and *containment* becomes *abandonment dressed as heritage.*

---

## 23. If/Then/Because — Alliance & Betrayal Rules

Per Chunk 4, every shift uses **IF / THEN / BECAUSE** and is justified by domain
logic + motive + power/metaphysical reason. The alliance/betrayal math
(`alliance_score`, `betrayal_risk`) governs the deltas.

```ts
alliance_and_betrayal_rules: [

  {
    if: "The player publicly demonstrates patience and deep listening at a Rootmoot — drinking the shared sap-bowl, seeking consensus, NOT acting alone.",
    then: "Heartmoot reputation +4, trust +5, respect +6; Maera begins to treat the player as a trustworthy interlocutor; elders open archive and communion access.",
    because: "Verdant trust is built by patience and consistency (25). The council's entire legitimacy rests on listening; a player who listens 'properly' is read as one of them and earns standing the fast-promiser never will."
  },

  {
    if: "The player presents the Heartmoot a CONTAINMENT-respecting cure plan — restoration attempted UNDER Rootwarden guard, with the cuttings released and the wound walled during the working.",
    then: "Heartmoot trust +6, respect +5; the council can sanction the Sap Commons cure without losing face; the standing Rootwarden alliance is reinforced; the stagnation clock can be reversed a tick.",
    because: "alliance_score rises on shared_interest + dependency + reduced ideological_distance: the plan lets the council act WITHOUT admitting paralysis was failure, and braids contain+heal so neither rival 'wins' over the other. It gives the frightened elders a way to say yes."
  },

  {
    if: "The player exposes the sealed-wells secret PUBLICLY and WITHOUT a plan (raw denunciation).",
    then: "Heartmoot legitimacy drops hard (legitimacy power_source -15 to -25), trust collapses, fear/resentment toward the player spike; Sap Commons and Greenwake Communion surge; chaos risk spikes; Maera is humiliated and may dig in rather than confess.",
    because: "The cardinal sin (holding/abandoning the dead) was committed by the very authority that interprets the cycle, AND hidden — the cover-up compounds the sin (25). But betrayal_risk logic cuts both ways: humiliation without an off-ramp drives the betrayed to defend themselves, so exposure-without-plan SHATTERS rather than reforms."
  },

  {
    if: "The player exposes the sealed-wells secret WITH a plan — the confession-and-Vigil path — giving Maera a way to turn the cover-up into a continental restoration.",
    then: "Maera is moved to confess; the Heartmoot commits to a Heartroot Vigil to heal all four wells; legitimacy is reforged on honesty (a costly, humbling rise); the stagnation clock reverses toward the opportunity clock.",
    because: "Forgiveness conditions in Verdance require genuine restoration of harm and submission to judgment (25). An exposure that offers redemption rather than only ruin lets the betrayed faction CHOOSE confession — the rarest and deepest alliance, bought with humility."
  },

  {
    if: "The player uses corrupted sap / soul-sap anywhere the Heartmoot learns of it.",
    then: "Heartmoot suspicion +12, trust -10, fear +6; the player is branded a cardinal-sin-bearer; sanction, cuttings, and Naming-Back access are FORBIDDEN; rumor mutates 'the player is Hollow' → 'the player is Abyss.'",
    because: "Weaponized rot is the cardinal violation (25). The council that interprets the cycle cannot be seen to sanction one who commands the rot; its legitimacy depends on condemning exactly this. The method, not the result, is judged."
  },

  {
    if: "The player allies with or amplifies the Greenwake Communion's DIRECT hearing in a way that publicly contradicts the council's interpretation.",
    then: "Heartmoot suspicion +8, resentment +6 (the monopoly is threatened); BUT if framed as 'hear, then have the council sanction the release' rather than 'overthrow the elders,' trust can hold and a braided cure becomes possible.",
    because: "Elder tyranny (7.2) treats direct hearers as heretics because their truer hearing makes the monopoly unfalsifiable-no-longer. The council fears Auralis structurally; the deltas hinge on whether the player threatens the monopoly or offers to RECONCILE it."
  },

  {
    if: "The player keeps the Refuge open to refugees during the sap shortage, against the Seed Guild's rationing, and asks the Heartmoot to invoke the commons.",
    then: "Heartmoot is forced to choose — invoking the commons earns the player gratitude from the council's rural/faithful base (Ilyra) and reformers; declining exposes the council's tacit Seed Guild alignment and costs it legitimacy with its own people.",
    because: "'We do not turn away the wounded' is Verdance's founding oath (25). The council CAN discipline the Guild via the commons and rarely does; forcing the choice surfaces the hidden stabilization-alliance (17) and makes the Heartmoot pick reverence or stagnation."
  },

  {
    if: "Abyss launches an open soul-harvest at the border during a Rootmoot deadlock.",
    then: "The Heartmoot will temporarily TOLERATE emergency measures it would normally forbid (even quiet Hollow Pact deployment, even Radiance fire) to stop the harvest — a TolerationState (reason 'metaphysical_emergency'), high hidden_resentment, post-crisis reckoning near-certain.",
    because: "Enemies become tolerable when Abyss is actively harvesting souls — the great unifier (25). Stopping the harvest overrides doctrine FOR NOW; but the council's suppressed horror returns with interest when the threat passes."
  },

  {
    if: "The player empowers the Rootwardens to hold the line indefinitely while backing the council's 'wait and contain' posture.",
    then: "Short-term Heartmoot trust +3 and stability; BUT the stagnation clock ADVANCES, Rootwarden exhaustion (Thalen) and drift (Othren) deepen, and the Keeper foothold strengthens silently.",
    because: "Containment-as-permanent-stasis slides into stagnation (Rootwarden 20-index). Backing 'wait' feels like loyalty but is the Keeper exploit; the alliance is real but its consequence is the wound becoming permanent."
  },

  {
    if: "The Heartmoot defers the well decision to 'next season' a FIFTH time and the player does nothing to break it.",
    then: "Sap Commons and refugees drift to riskier options (a forced cure, or the Hollow Pact); the Greenwake Communion may act unilaterally; Heartmoot legitimacy erodes among its own base; keeper_pressure rises silently; the stagnation clock ticks 4→5.",
    because: "Stagnation IS the Keeper exploit (8). Paralysis isn't neutral — inaction actively drives the cost-bearers toward corruption. The council's own deferral betrays its base BY omission."
  },

  {
    if: "The player saves a Rootmoot from collapse by brokering a face-saving compromise (contain now, cure next season WITH a binding commitment and released cuttings).",
    then: "Maera's trust and gratitude rise sharply; the council grants sanction and stock; the player earns a standing as 'one who can move the Seat'; the stagnation clock reverses.",
    because: "The council cannot break its own paralysis (every elder's authority depends on never admitting the mistake). An outsider who gives the frightened elders a dignified yes is the rarest ally — alliance_score surges on dependency + reduced ideological_distance."
  },

  {
    if: "The player threatens, blackmails, or coerces Maera with the sealed-wells secret for personal leverage (rather than reform).",
    then: "Maera complies under duress (debt +20, leverage to player +15) but trust collapses and resentment +18; the council quietly turns against the player; betrayal_risk against the player rises; a coerced sanction is brittle and may be revoked.",
    because: "betrayal_risk = leverage_against_npc + fear + resentment − trust (Chunk 4). Coercion buys compliance, not loyalty; the Heartmoot, ruling by legitimacy, will work to delegitimize a coercer the moment it can. Power taken by threat decays."
  }

]
```

---

## 24. Betrayal Triggers

The Heartmoot betrays slowly, institutionally, and almost always *by omission* —
which is its most dangerous form of betrayal.

```ts
betrayal_triggers: [
  "THE SEALED-WELLS SECRET THREATENED: if exposure looms, the council (and Maera) will betray allies to bury it — disavowing the player, 'reinterpreting' the relay, sealing Thornveil fast to remove the evidence.",
  "Its interpretive monopoly threatened: if Auralis's direct hearing or the player's truth makes the elders' interpretation unfalsifiable-no-longer, the council brands the truer hearer a heretic to protect the monopoly.",
  "Legitimacy collapse risk: a humiliated-without-off-ramp Heartmoot digs in and turns on whoever humiliated it (exposure-without-plan, public shaming).",
  "Pressure to confess paralysis as failure: the council will betray a cure rather than admit the cure was feared, not weighed — sabotaging or 'deferring' a working that would prove it could have acted years ago.",
  "Coercion: a Heartmoot ruling by reverence works to delegitimize anyone who rules it by force or blackmail, the moment it can.",
  "BETRAYAL-BY-OMISSION (the signature): the council betrays its own base simply by NOT deciding — abandoning the trapped dead and the dying-now under the cover of patience."
]
```

The player should understand: the Heartmoot's worst betrayal is not a knife — it
is a **meeting that ends without a decision**, while Rook's parent stays trapped
and Ilyra's dead go un-released. The faction can betray everyone it is sworn to
protect *without anyone ever choosing to do harm.*

---

## 25. Player Opportunity

The Heartmoot is the **central gate of the MVP** — not an enemy to defeat but a
lock to pick, pry, or shatter. Concrete opportunities:

```ts
player_opportunity: [
  "SANCTION: legitimize the player's chosen solution (a cure, a Refuge policy, a Vigil) — or have it forbidden. The council can make a player's plan official Verdant policy.",
  "CURE-STOCK: get the locked Heartroot cuttings released — the hard gate over any true cleansing-communion or replanting. No real restoration without this.",
  "THE VIGIL: move the council to call a Heartroot Vigil — the only ritual large enough to heal ALL FOUR wounded wells; the campaign's single largest lever on keeper_pressure.",
  "BREAK THE PARALYSIS: be the outside force that forces/shames/empowers a real decision the insiders cannot make.",
  "EXPOSE THE SECRET: surface the sealed-wells compact — to shatter the council (exposure-without-plan) or to redeem it (confession + Vigil).",
  "MOVE MAERA: walk her redemption arc — from paralysis to confession — turning the faction's vulnerability into the campaign's redemption.",
  "RECONCILE THE MONOPOLY: braid the Greenwake Communion's true hearing into sanctioned council, cracking the denial that hides the well's real names.",
  "PLAY THE GATE: use the council's sanction as leverage over the OTHER factions (a sanctioned cure delegitimizes the Pact; a closed Refuge empowers the Guild; etc.)."
]
```

The defining player verb for this faction is **un-stick.** Every other Verdant
faction is *doing* something (containing, healing, weaponizing, stabilizing,
hearing); the Heartmoot is *failing to choose*, and the player's job is to make the
choice happen — and to decide whether the council that emerges is reformed,
shattered, or quietly complicit in its own wound.

---

## 26. FactionState JSON Instance

A concrete, build-ready instance with example `player_standing` numbers (taken at
the canonical MVP starting state — the player has arrived, listened well at one
Rootmoot, and is respected but not yet trusted with the secret).

```json
{
  "id": "faction_heartmoot",
  "campaign_id": "campaign_sap_beneath_ash_001",
  "name": "The Heartmoot / Rootmoot Elder Councils",
  "domain": "Verdance",
  "doctrine": "The cycle is kept by patient, communal listening. Authority flows from depth of communion. Decide slowly; revisit when the wheel turns. Contain wounds; do not act rashly.",
  "ideal_future": "A continent governed by listening, where the cycle turns unbroken and slow forever and no wound ever spreads because none was ever rushed.",
  "public_goal": "Shepherd the cycle through the Thornveil crisis without haste or harm; listen until consensus emerges on the speaking well; contain the corruption.",
  "hidden_goal": "Never admit the cure was feared, not weighed. Keep the sealed-wells policy buried; let Thornveil follow the same seal-and-deny path; preserve the interpretive monopoly.",
  "leader_npc_ids": ["maera_rootveil"],
  "champion_npc_ids": ["senior_heartmoot_elders_sealed_compact"],
  "class_base": {
    "Elders (Seated Authority)": 90,
    "Communers / Listeners": 75,
    "Custodial scribes & archivists": 60,
    "Rootwarden allies (seconded)": 55,
    "Aligned grove-keepers & Passage-Tenders": 45,
    "Deferential young": 35
  },
  "power_sources": {
    "military": 28,
    "economy": 45,
    "magic": 66,
    "religion": 82,
    "intelligence": 64,
    "legitimacy": 88,
    "resources": 71,
    "fear": 30
  },
  "resources_controlled": [
    "The Heartroot (custodial authority)",
    "Sacred replanting stock / clean Heartroot cuttings (the cure-stock)",
    "The sacred-sap commons (de jure)",
    "The root-archives",
    "The mycelial relay trunk lines",
    "Sanction (legitimacy authority)",
    "The Naming-Back monopoly",
    "The rootmoot governance machinery"
  ],
  "locations_controlled": [
    "Greatroot Hollow (Heartroot vault, cutting-stock)",
    "The Thornveil Rootmoot hall",
    "The root-archives",
    "Sanctioned communion-groves",
    "Trunk-line relay stations",
    "Custodial oversight of the great rootwells (incl. the sealed three and the speaking Thornveil well)"
  ],
  "magic_access": [
    "Deepest sanctioned Root-Communion",
    "Naming-Back at sanctioned scale",
    "Heartroot access & clean cutting-stock",
    "Sanctioned Passage Tending oversight",
    "Tree-Memory Reading (root-archives)",
    "Authority to call a Heartroot Vigil"
  ],
  "military_units_controlled": [
    "Seconded Rootwarden detachments (requested, not commanded)",
    "Heartroot vault custodial guard",
    "Moot-marshals (ceremonial)"
  ],
  "trade_routes_controlled": [
    "Sacred-sap commons distribution (contested with Seed Guild)",
    "Memory/witness/Naming-Back services",
    "Privileged mycelial relay channels"
  ],
  "internal_rivals": [
    "The Sap Commons (main rival — cost-bearers vs interpreters; heal vs hold)",
    "The Greenwake Communion (direct hearing threatens the monopoly)",
    "Reform-minded younger communers",
    "The Seed Guild (economic rival; tacit stabilization ally)"
  ],
  "external_enemies": [
    "Abyss",
    "The Hollow Pact",
    "Radiance's 'burn it' faction (a dangerous friend)",
    "Sanctuary's quarantine instinct (a friendly friction)"
  ],
  "possible_allies": [
    "The Rootwardens (standing alliance)",
    "The Greenwake Communion (if reconciled)",
    "The Sap Commons (if cuttings released, cure attempted under containment)",
    "Sanctuary (if no forced quarantine)",
    "Radiance (if burn-only-with-consent)",
    "The player (the outside force that breaks the paralysis)"
  ],
  "secret_alliances": [
    "Tacit stabilization alignment with the Seed Guild",
    "The sealed-wells compact (senior elders + sworn Rootwardens)",
    "Unacknowledged dependence on the Greenwake Communion's hearing"
  ],
  "infiltration_targets": [
    "The Greenwake Communion (to manage its direct hearing)",
    "The Sap Commons (to monitor reform agitation)",
    "The mycelial relay (to 'settle' inconvenient rumors)"
  ],
  "methods": {
    "diplomacy": 78,
    "open_war": 8,
    "sabotage": 20,
    "propaganda": 62,
    "assassination": 5,
    "trade_pressure": 40,
    "magical_escalation": 30
  },
  "player_standing": {
    "reputation": 55,
    "trust": 38,
    "fear": 12,
    "respect": 58,
    "suspicion": 30,
    "debt": 5,
    "leverage": 20
  },
  "keeper_exploit_vector": "Stagnation + elder tyranny: weaponize patience into paralysis (the cure is always 'next season'); use the interpretive monopoly to hide the sealed-wells mistake and reframe corruption as heritage, so the council defends its own wound by never admitting it. THE primary Keeper foothold in Verdance.",
  "void_temptation_phrase": "There is no rush. The cycle will resolve it. You have listened so long; trust the season. The voices are not trapped — they are ancestors. Seal the well gently and call it heritage. You are not abandoning the dead; you are keeping them.",
  "agenda_clock_ids": ["clock_heartmoot_stagnation", "clock_heartmoot_confession_opportunity"],
  "active_rumor_ids": ["rumor_elders_hiding_something", "rumor_well_speaks_ancestors", "rumor_sealed_wells_abandoned_dead"],
  "current_status": "Paralyzed at the fourth indecisive Rootmoot; legitimacy strong but eroding; sealed-wells secret intact; leaning toward seal-and-deny for Thornveil."
}
```

**Reading `player_standing`.** The numbers encode the canon truth that *reputation
is not enough* (Chunk 3): the Heartmoot **respects** the player (58) and grants
fair **reputation** (55) for listening well, but does **not trust** them (38) with
the sealed secret and quietly **suspects** (30) an outsider who might rush. Low
**fear** (12) and low **debt** (5) mean the player has no real hold on the council
yet — which is the whole problem: to break the paralysis, the player must *raise
leverage* (20→) honestly (a plan, a Vigil, Maera's redemption) or dishonestly
(the secret as blackmail), and the chosen path determines whether the resulting
alliance is loyal or brittle.

---

## 27. Consequence Examples (3rd-order and 5th-order)

Per Chunk 4 depth rules and the worked-chain format. Root action chosen to
exercise the faction's central lever.

### 3rd-order consequence (depth 3 — Local/System)

**Root action:** The player stands before the Thornveil Rootmoot and, instead of
demanding the elders act, *publicly out-listens them* — drinks the shared sap-bowl,
names the trapped dead the well is calling (Rook's parent among them), and asks the
council, in their own idiom, "What does our patience feed?"

- **1st (immediate):** The hall goes silent; Maera's composure cracks; Heartmoot
  respect +6, trust +4 (the player listened *properly*); the well's named dead are
  now on the record where they cannot be "misheard."
- **2nd (scene):** Reform-minded younger communers and Ilyra (the rural faithful)
  are emboldened; a sealed-compact elder moves to "settle" the moment by
  reinterpreting ("the player misheard"); Maera does not back the reinterpretation
  — a hairline fracture in the compact.
- **3rd (local/system):** The Thornveil Rootmoot's posture shifts from "defer
  again" toward "a decision must be made" — the **stagnation clock stalls at 4
  instead of ticking to 5**; the Sap Commons gains legitimacy to propose a cure on
  the record; a rumor spreads through the relay ("a tender made the elders listen")
  that raises the player's standing with the cost-bearers and raises Heartmoot
  *suspicion* (+5) that the player is an agitator. **FactionState changes:**
  Heartmoot `current_status` → "destabilized deliberation"; Sap Commons trust in
  player +8; new rumor `rumor_tender_moved_the_seat`. **Player intervention
  remaining:** press for the cuttings now, or hold for Maera's confession arc.

### 5th-order consequence (depth 5 — Mythic/Metaphysical)

**Root action:** Continuing from the above, the player surfaces the sealed-wells
secret to Maera *privately, with a plan* — the confession-and-Vigil path — and
moves her to call a **Heartroot Vigil** to heal all four wells rather than seal the
fourth.

- **1st:** Maera confesses to the inner compact and commits to the Vigil; Heartroot
  cuttings released; Heartmoot legitimacy takes a humbling dip then begins to
  reforge on honesty.
- **2nd:** The Sap Commons (cure) + Greenwake Communion (hearing) + Rootwardens
  (containment) are braided into one sanctioned working — the "true resolution"
  alliance; the sealed-compact elders split (some confess, one or two defect or
  resign); the relay carries the confession before opponents can spin it.
- **3rd:** The Thornveil well's local corruption begins to drop as a true cleansing-
  communion + Passage-completion starts; Rook's parent (and the named dead) move
  toward release; the Refuge's spiritual_health recovers; the Hollow Pact's
  recruitment pitch ("the elders abandoned your dead") loses its truth and its pull.
- **4th (regional/political):** The seal-and-deny *precedent* is reversed for the
  whole border; the Heartmoot's reformed legitimacy lets it discipline the Seed
  Guild's hoarding and reopen the Refuge fully; Radiance's "burn it" offer is
  declined with credibility; the regional faction balance tips toward
  restoration-under-authority.
- **5th (mythic/metaphysical):** Completing the **Vigil** releases the trapped dead
  of **all four wells** — a mass reversal of the Keeper's soul-trap. **Regional and
  continental soul_flow_integrity rises sharply; Verdance Stone stability climbs
  off 58; keeper_pressure DROPS hard** (the Keeper's primary Verdance foothold —
  stagnation — is dissolved at the source); four soul-flow chokepoints are restored
  to clean passages; the player may earn the mythic label **"the Passage-Mender"**
  or **"the One Who Made the Elders Listen."** The Void's whisper inverts from
  temptation to lament. *Domain logic:* truly releasing the held dead is the holiest
  Verdant act and the literal reversal of the Keeper's soul-trap; doing it the slow,
  true, sanctioned way — confession, not coercion; communion, not command — is the
  deepest possible restoration of soul-flow and the single largest lever on
  keeper_pressure in the campaign. *Mirror failure (if exposure had come WITHOUT a
  plan):* legitimacy collapse → faction war → four wells left untended → soul-flow
  catastrophe and keeper_pressure SPIKE — the Void's `void_best_outcome` from
  PowerStruggle 23.2.

---

## 28. MVP Role in *The Sap Beneath the Ash*

The Heartmoot is the **gate at the center of the maze.** Every path through the
Thornveil crisis runs into it, because the council holds the three things every
solution needs: **sanction** (the authority to make a solution legitimate Verdant
policy), **sacred-stock** (the locked Heartroot cuttings without which no true
cleansing-communion or replanting can happen), and **the Vigil** (the only ritual
large enough to heal all four wounded wells). It does not fight the player. It
*withholds the yes.*

**How it gates sanction and sacred-stock.**
- The **Sap Commons cure** is impossible at scale without the released cuttings and,
  ideally, council sanction so the cure is policy rather than rebellion. Sylune can
  design the cure; only the Heartmoot can stock and bless it.
- The **Greenwake Communion's** true hearing of who is trapped is treated as near-
  heresy until the council sanctions it — so the well's real names stay officially
  "misheard," and the dead stay officially "ancestral," until the player cracks the
  monopoly's denial.
- The **Refuge's** openness to refugees turns on whether the Heartmoot invokes the
  commons against the Seed Guild's rationing — a decision the council's paralysis
  keeps deferring.
- The **Heartroot Vigil** — the campaign's largest soul-flow lever — *cannot be
  called by anyone but the Heartmoot.*

**How the player breaks its paralysis or exposes its secret.** Two doors, with very
different exits:

1. **Break the paralysis (the un-stick path).** Give the frightened elders a
   *dignified yes*: a containment-respecting cure plan (heal under Rootwarden
   guard), a face-saving compromise (contain now, cure next season *with binding
   commitment and released cuttings*), or out-listen them in their own idiom until
   the decision "decides them." This stalls or reverses the stagnation clock and
   wins sanction without destroying the council. Moving **Maera personally** — from
   paralysis to confession — is the keystone of this path.

2. **Expose the secret (the sealed-wells path).** Surface the sealed-wells compact.
   *The manner is everything.* **With a plan** (the confession-and-Vigil path), the
   exposure becomes redemption: Maera confesses, the Vigil heals all four wells,
   legitimacy reforges on honesty, keeper_pressure plummets. **Without a plan** (raw
   denunciation), the exposure shatters: legitimacy collapses, Verdance fractures
   into faction war, the wells go untended, and the Void's best outcome arrives.

The deepest design point of the MVP lives here: **the Heartmoot's vulnerability is
not a weakness to exploit but a wound to heal.** Defeating the symptom (killing
Nymara, sealing the well) solves nothing while the council stays paralyzed and the
secret stays buried. The *true* resolution requires breaking the paralysis AND
addressing the Abyss cause — and the Heartmoot is the faction that must be moved,
not beaten, for Verdance to choose restoration over the quiet, patient, heritage-
shaped surrender the Keeper is counting on.

---

## 29. Open Questions (for NEXUS-ORCH / CANON-WARDEN)

1. Exact `current_value`/`max_value` calibration of the stagnation clock vs. the
   companion confession-opportunity clock — should they be a single bidirectional
   clock or two coupled clocks? (Drafted as two coupled clocks.)
2. Precise keeper_pressure delta magnitudes for the Vigil success (drafted "drops
   hard") — needs reconciliation with CampaignMetaphysics scaling once other
   factions' clocks are locked.
3. Whether the sealed-compact elders should be promoted to named NPC dossiers
   (LIVING-CASTWRIGHT) or remain a structural bloc behind Maera.
4. Cross-link: confirm the Rootwarden bible's treatment of the sworn-to-silence
   well-wallers matches the sealed-wells compact described in Section 17.

---

*Draft v1.0 — FACTION-WEAVER. Awaiting CANON-WARDEN QA (contradiction, depth,
specificity, trackability) and SCHEMA-FORGE implementation pass.*
