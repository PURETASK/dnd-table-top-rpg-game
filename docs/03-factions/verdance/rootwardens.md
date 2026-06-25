---
title: The Rootwardens — Verdance Faction Bible
status: Draft v1.0
lead: FACTION-WEAVER
qa: CANON-WARDEN
domain: Verdance
chunk: 3 (Faction Simulation)
mvp: true
note: >
  The Rootwardens are Verdance's military/security faction — the containment
  conservators who guard the wells and hold the thornwall. This bible obeys the
  Verdance Domain Bible (sections 15, 20, 23, 24, 25 binding canon), uses the
  Chunk 3 FactionState tracking language, reaches Chunk 4 cause/effect depth,
  and follows the FACTION-WEAVER required format from the Agent Council doc. It
  is build-ready for the vertical slice "The Sap Beneath the Ash."
---

# The Rootwardens v1.0 — *Better a Wound Walled*

> "You want to heal it. I understand. So did the wardens of Greywell, and
> Ashroot, and Thornmere. Three wells. Three cures begun. Three thornwalls I
> walked past after, where the soil had gone over and the dead were screaming up
> through the roots. I do not hold this line because I am brave. I hold it
> because I have seen what happens when someone braver tries the door."
> — Othren Deepbark, Rootwarden containment officer, to a Sap Commons cure-party

> "He is wrong, you know. About almost everything. But he is wrong the way the
> wall is wrong — it keeps nothing out forever, it only buys you the season you
> need to do the thing you keep not doing. Hold the line, yes. But hold it FOR
> something."
> — Thalen Mossguard, Rootwarden, the same night

---

## 1. Faction Name

**The Rootwardens** — formally the *Custodial Order of the Wells and the Wall*;
called Wardens, the Walled, the Holders, the Green Jailers (by their enemies), and
the Last Wall (by a frightened populace). A Rootwarden is sworn not to conquer, not
to cure, and not to abandon — only to **hold**.

---

## 2. Domain

**Verdance** — the living-cycle restoration civilization. The Rootwardens are
Verdance's only real defensive army and the custodial authority over every great
rootwell and the continental thornwall line. They are the institutional expression
of one Verdant instinct above all others: when a wound appears in the cycle,
**wall it before it spreads.**

---

## 3. Doctrine

> **Corruption must be CONTAINED. Guard the wells, hold the thornwall, keep the
> wound from spreading. Better a wound walled than a cure that fails. Discipline
> over experiment.**

The Rootwarden creed is the doctrine of the **patient siege turned inward.** Where
the Sap Commons believe the network can be healed and the Hollow Pact believe the
rot can be commanded, the Rootwardens believe neither can be trusted under fire.
A cure that fails does not merely fail — it *spreads.* A weapon made of rot does
not merely win — it *converts the wielder.* So the Warden's whole art is the third
thing: **buy time without spending soul.** Wall the corruption, hold the border,
keep the clean ground clean, and wait for a cure someone else can prove safe.

Three doctrinal pillars:

1. **Containment before cure.** A wound walled is a known quantity; a cure
   half-ready is a gamble with the whole network's soul-flow as the stake. The
   Wardens are not against healing — they are against *unproven* healing performed
   *under pressure,* which they have watched fail.
2. **The line is a vow, not a strategy.** Holding the thornwall is a sacred,
   patient sacrifice in the truest Verdant sense (Section 19: Verdance honors the
   warden who guards the wound for decades over the glory-martyr). A Warden does
   not ask "when does this end"; that question is the first crack.
3. **Discipline over experiment.** The corrupted-sap trap *works.* That is precisely
   why it is forbidden to a Warden — the things that work fastest are the things
   that corrupt deepest. Discipline is the wall between a defender and the Hollow
   Pact, and it is exactly one bad season thick.

**The doctrine's load-bearing lie** — the one the Keeper leans on — is the slippage
from "contain *until* it can be healed" to "contain *instead of* healing it." The
Rootwardens are the most honorable faction in Verdance and the most structurally
exploitable, because their virtue is indistinguishable from stagnation until the
moment it is too late to tell them apart.

---

## 4. Ideal Future

A Verdance where every rootwell is clean and every thornwall is a garden wall
again — where the Wardens are obsolete because there is nothing left to contain.
The honest Rootwarden (Thalen) dreams of laying down the wall: of a season when
the wells run sweet, the dead pass cleanly, the refugees are rooted, and the
Custodial Order becomes a memory, a festival, a name the children learn for a
danger that no longer exists. *"Hold the line FOR something" — the something is a
day the line isn't needed.*

The corrupted Rootwarden (Othren, late) dreams of a **perfect wall** — a containment
so total that the question of cure never comes up again, a wound so well-managed it
becomes permanent infrastructure, a Verdance safe forever behind a thornwall fed,
if it must be, on the very rot it contains. This is stagnation's paradise: eternal
vigilance mistaken for victory.

---

## 5. Public Goal & Hidden Goal

- **Public goal:** Hold the eastern thornwall against the Abyss frontier, contain
  every corrupted rootwell (above all Thornveil's), control rootwell access so the
  wound cannot spread or be exploited, and keep Verdance's frightened populace
  safe behind a wall that does not move.
- **Hidden goal:** *Be allowed to stop.* Beneath the discipline, the Order is
  exhausted by an un-ending mission. The leadership's private, half-articulated
  goal is to force someone — the Heartmoot, the Sap Commons, anyone — to either
  PROVIDE a cure they can trust or ADMIT the wells will never heal, so the Wardens
  can know whether they are guarding a sickbed or a grave. The Heartmoot's
  paralysis denies them this answer, and that denial is the rot eating the Order
  from inside (see Section 13).

A darker hidden current runs in the Order's containment specialists (Othren's
faction-within-a-faction): the quiet, unauthorized use of *mild* corrupted-sap
tricks to make the un-ending mission survivable — "just to hold the line." This
is not yet doctrine. It is the larva of doctrine.

---

## 6. Class Base

```ts
class_base: {
  "Guarding Class (border defenders, containment specialists)": 78,
  "Tending Class (rot-tenders, field-restorers attached to the wall)": 41,
  "Listening Class (Greenwake communers seconded for soul-flow defense)": 22,
  "Sheltered (refugee auxiliaries, wall-labor levies)": 30,
  "Trading Class (Seed Guild quartermasters, contracted logistics)": 18
}
```

The Rootwardens **are** the Guarding Class — Verdance's only standing martial
institution. Their core is career containment specialists and thornwall defenders,
people who have spent decades learning to hold rather than to take. Crucially, the
Order also absorbs **rot-tenders** (the honored decay-discipline that borders the
forbidden), because containing a corrupted well *requires* someone who understands
rot — and that overlap is exactly where Othren Deepbark sits, and exactly where the
slide to the Hollow Pact begins. The Order's class breadth is its strength (it can
fight, contain, and partly heal) and its fault line (the rot-tenders it needs are
the rot-tenders the Void wants).

---

## 7. Power Base

```ts
power_sources: {
  military: 74,        // the only real defensive army in Verdance; the Living Wall doctrine made flesh
  economy: 38,         // little wealth of their own; dependent on Seed Guild logistics and commons sap rations
  magic: 66,           // containment growth-shaping, thornwall craft, spore/snare warfare, expert rot-tending
  religion: 49,        // the Warden's vigil is honored sacrifice (Section 19), but they are not interpreters of the cycle
  intelligence: 71,    // the mycelial relay is theirs to read at the wall; superb defensive intelligence, poor reach
  legitimacy: 63,      // the trust of a frightened populace that wants the wound CONTAINED; sanctioned by the Rootmoot
  resources: 58,       // control of rootwell ACCESS and the thornwall — a chokepoint asset, not a treasury
  fear: 44             // they are feared by the Hollow Pact (their hunters) and by anyone who would breach a sealed well
}
```

**Scored power_sources, annotated (the eight required sources):**

1. **military (74) — the only defensive army.** No other Verdant faction can hold
   a line. The Living Wall doctrine (Section 15) — mycelial warning → entangling
   approaches → thornwall lines → spore-fog killzones → grown redoubts → restoration
   of retaken ground — is the Rootwardens' institutional body. This single number is
   why every other faction must reckon with them: contain, heal, weaponize, or
   stabilize, *someone still has to hold the wall while you do it,* and that someone
   is always a Warden.
2. **economy (38) — dependent.** The Order grows its forward bases from seed and
   feeds on healing-sap and the land's yield, so it needs little coin — but it owns
   little. It eats from the commons and rides Seed Guild logistics. In a scarcity
   crisis (Thornveil now), this dependency becomes a leash: ration the sap and you
   ration the wall.
3. **magic (66) — containment craft.** Thornwall and living-fortification
   growth-shaping, spore and snare warfare, and — critically — *expert rot-tending,*
   the knowledge of how corruption behaves that lets a Warden wall it. This same
   knowledge is the gateway to weaponizing it (Othren).
4. **religion (49) — honored, not interpretive.** The Warden's decades-long vigil
   is a *patient sacrifice,* the Verdant ideal (Section 19). Wardens are revered as
   the ones who pay the cost — but they do not interpret the cycle (the elders do),
   so their spiritual authority is real but subordinate, and it curdles into
   resentment of the interpreters who never have to hold a line.
5. **intelligence (71) — the roots remember every footstep.** At the wall, the
   mycelial relay is the Wardens' to read: near-perfect defensive intelligence
   inside Verdant terrain, near-blindness beyond it. Corrupt the relay (Abyss's and
   the Hollow Pact's aim) and the Order goes deaf.
6. **legitimacy (63) — the trust of the frightened.** A populace terrified of a
   spreading wound *wants* it walled, and grants the Wardens broad authority to do
   it. This legitimacy is conditional on the wall holding and on the Wardens staying
   clean — the day a Warden is caught using corrupted sap, the frightened populace's
   trust flips to terror.
7. **resources (58) — control of the wells and the wall.** Not a treasury but a
   chokepoint: the Rootwardens decide who approaches a rootwell, who may attempt a
   cure, who is kept out. This gatekeeping power over rootwell *access* is what lets
   them block a Sap Commons cure-party or seal a well — and is the lever the player
   most often needs from them.
8. **fear (44) — the hunters of the Hollow.** The Wardens hunt their own defectors
   into the Hollow Reach; the Pact fears them, and would-be well-breachers fear the
   wall. But theirs is the fear of a jailer, not a conqueror — respected, resented,
   and brittle, because a jailer who starts using the prisoners' tools loses the
   right to the fear entirely.

**Reading the spread.** High military/intelligence/magic, weak economy, middling
legitimacy and fear: this is a faction that is *strong at the wall and weak away
from it,* utterly competent at the one thing it does and structurally unable to do
anything else — including, fatally, *end* the thing it does. Their power is all
defensive, all conditional on staying disciplined and staying fed.

---

## 8. Resources & Locations Controlled

```ts
resources_controlled: [
  "Rootwell ACCESS (the gatekeeping power — who may approach, drink, cure, or seal a well)",
  "The Eastern Thornwall (the living fortification line — kilometers deep in places)",
  "The Thornveil rootwell perimeter (the MVP chokepoint)",
  "Spore and snare killzones along the border",
  "The mycelial relay nodes at the wall (defensive intelligence infrastructure)",
  "Grown redoubts, forward bases, and the wall's living-architecture stock",
  "Containment seals and quarantine craft (the means to wall a well)",
  "The wardens' own corrupted-sap evidence-caches (confiscated from the Hollow Pact — and a temptation)"
]
locations_controlled: [
  "The Eastern Thornwall (Section 17.3) — sole controlling faction",
  "Thornveil Refuge (Section 17.1) — co-controlling (security and the well) with the Rootmoot",
  "Frontier watch-redoubts and grown bastions along the Abyss border",
  "Containment perimeters around the three sealed-and-denied wells (Greywell, Ashroot, Thornmere — guarded, not entered)"
]
```

The three sealed wells matter: the Rootwardens **guard graves they are forbidden to
acknowledge.** Wardens posted to the sealed-well perimeters are the Order's most
hollowed-out members — they stand vigil over trapped dead the Heartmoot pretends
aren't there, and they are the Order's likeliest defectors and likeliest Hollow Pact
recruits (Section 13). Othren served at Thornmere.

---

## 9. Magic Access

```ts
magic_access: [
  "Containment & fortification growth-shaping (thornwall, redoubts, living seals) — MASTERY",
  "Spore warfare (sleep, confusion, sickness clouds) — high",
  "Snare-shaping (entangling terrain) — high",
  "Mycelial intelligence (reading the relay at the wall) — high, terrain-bound",
  "Rot-tending (understanding and walling corruption) — expert, and the dangerous one",
  "Field restoration / battle-medicine (regrowing what was lost) — moderate (attached restorers)",
  "Cleansing-communion (the slow cure) — LOW; the Wardens contain, they do not cure (this is the whole tension)",
  "(FORBIDDEN, and the slide) corrupted-sap traps & soul-sap — doctrinally taboo; quietly used by Othren's circle"
]
```

The defining gap: the Rootwardens are masters of *containment* sapcraft and only
dabblers in *cure* sapcraft. They can wall a corrupted well perfectly and cleanse it
barely at all. This is by design and by doctrine — and it is the reason they *need*
the Sap Commons (for a real cure) and *resent* needing them, and the reason that, in
the dark, a Warden who can't cure a well but can read its rot the way Othren can
finds the corrupted-sap shortcut sitting right there in his own confiscated caches.

---

## 10. Military Units

```ts
military_units_controlled: [
  "Thornwall companies (the line infantry of containment; led by Wardens-Major)",
  "Spore-skirmishers (sleep/confusion/sickness clouds — Verdance's 'artillery')",
  "Snare-shapers (entangling-terrain specialists; the wall's engineers in battle)",
  "Mycelial scouts (the network's eyes; defensive intelligence)",
  "Field-restorers / battle-medics (the TRUE elite — they regrow what was lost)",
  "Containment squads (rootwell quarantine, seal-craft, well-perimeter holding)",
  "Hollow-hunters (anti-defector squads that raid the Hollow Reach; the Order's grimmest duty)",
  "Seconded Greenwake communers (attached for soul-flow defense at the wells)"
]
```

Doctrine (Section 15): **the Living Wall — defensive ecological attrition.** Verdance
does not conquer; the Wardens do not project power; they endure, entangle, and
outlast until the enemy's momentum decays against living terrain. Their *elite* are
not killers but **restorers** — reclaiming poisoned ground is the Order's victory
condition, not seizing enemy territory. Their grimmest unit is the **Hollow-hunters,**
who go into the Reach after their own defectors, and who come back fewer and quieter
every season — the unit most likely to start asking why they don't just use the
weapons they keep confiscating.

---

## 11. Economic Leverage

```ts
economic_leverage: [
  "Control of rootwell ACCESS = control of who may draw clean sap (life and medicine)",
  "Gatekeeping cure-attempts = de facto veto over the Sap Commons' restoration timeline",
  "Border control = opening/closing the frontier markets and smuggling routes",
  "Sealing/quarantine = the power to remove a well (and its sap, and its dead) from the economy entirely",
  "Wall-labor levies = command of refugee and conscript labor (a coercion lever during a Withering)"
]
```

The Rootwardens are economically **weak as owners but strong as gatekeepers.** They
have little wealth, but they stand at the door of the thing everyone needs (sap, the
wells, the border). Their leverage is the *no* — they can deny a cure-party access,
deny the Seed Guild a smuggling route, deny the Hollow Pact a well to corrupt. But
because they depend on Seed Guild logistics and commons rations to feed the wall,
that leverage runs both ways: in the Thornveil scarcity, **whoever controls the sap
ration controls how long the wall can hold,** which hands the Seed Guild and the
Heartmoot quiet power over the Order.

---

## 12. Internal Rivals

```ts
internal_rivals: [
  "The Hollow Pact (OFFICIALLY their primary rival — their own defectors and their nightmare; the Wardens hunt them)",
  "The Sap Commons (FUNCTIONALLY a deeper rival — 'containment is cowardice; heal it, don't just hold it')",
  "The Heartmoot / Rootmoot (an INCREASING rival by paralysis — the council's indecision leaves the Wardens holding the line forever, with no end and no cure sanctioned)",
  "The Seed Guild (uneasy dependency — the Guild's rationing decides whether the wall is fed; the Guild wants the well STABILIZED as an asset, not contained toward a cure)",
  "Othren Deepbark's containment circle (the rival WITHIN — the rot-tenders quietly sliding toward 'just to hold the line')"
]
```

The three-layer rivalry is the heart of the Order's predicament:

- **Officially, the enemy is the Hollow Pact** — the defectors who took the
  forbidden shortcut, the proof of what a despairing Warden becomes. The Order hunts
  them, fears them, and is haunted by them, because every Hollow-hunter knows the
  Reach is full of people who once stood the same wall they stand now.
- **Functionally, the rival is the Sap Commons,** who call containment cowardice and
  want to throw open the wells the Wardens are sworn to guard. The Wardens are not
  wrong that an unproven cure can spread the wound; the Commons are not wrong that
  containment-forever is a slow surrender. This is the *contain-vs-cure* axis, and
  it is the MVP's spine.
- **Increasingly, the rival is the Heartmoot itself** — not from malice but from
  *paralysis.* The council will not sanction a cure and will not admit the wells
  can't heal, so it leaves the Wardens holding an un-ending line with no orders but
  "hold." A faction sworn to obey an authority that refuses to decide is being slowly
  poisoned by its own loyalty. This is the rivalry the Keeper most wants: a wall held
  forever, defended as duty, until despair breeds the shortcut.

---

## 13. External Enemies

```ts
external_enemies: [
  "Abyss (the existential enemy — the engine of the wound; soul-harvesters who corrupt the wells the Wardens guard)",
  "Abyss soul-harvest infrastructure beyond the wall (the Wardens' only sanctioned offensive target)",
  "The Hollow Pact AS an external counter-state in the Hollow Reach (corrupted-grove badlands the Order raids)",
  "Radiance 'help' (the most dangerous friend — offers to BURN corrupted wells, severing the passage the Wardens are sworn to preserve)",
  "Abyss infiltrators corrupting the mycelial relay (to blind the wall)"
]
```

The Rootwardens' true external enemy is **Abyss,** which is targeting *rootwells, not
territory* (Section 17.3 hidden secret) — making the corruption the Wardens contain
not a natural blight but an enemy incision, a fact the Heartmoot has not faced and the
war no one is ready for. Their most dangerous *friend* is **Radiance,** whose cure for
corruption is fire: burning a corrupted well would solve the Wardens' containment
problem in an afternoon and *murder the trapped dead* in the same stroke, severing the
soul-passage as badly as the corruption did. A Warden offered Radiance's torch is being
offered the relief of an ending — which is exactly why it is a temptation and a trap.

---

## 14. Possible Allies

```ts
possible_allies: [
  "The PLAYER (their likeliest honest partner — Thalen Mossguard is the player's most natural Rootwarden ally)",
  "The Sap Commons (rival AND necessary partner — the Wardens contain, the Commons cure; together they could actually solve the well)",
  "The Greenwake Communion (seconded communers defend soul-flow at the wells; the Communion can tell the Wardens WHO is trapped behind their seals)",
  "The Heartmoot (their sanctioning authority — an ally if it can be moved to ACT)",
  "Tempest (sky-mobility to cover Verdance's immobility — situational)",
  "Any faction that shares the Abyss threat (the great unifier — even tolerable enemies ally when Abyss harvests souls)"
]
secret_alliances: [
  "(quietly) Othren Deepbark's circle <-> Hollow Pact rot-tending knowledge — an unsanctioned, deniable exchange of containment 'tricks' that is the first thread of defection",
  "(quietly) individual sealed-well wardens <-> sympathy for the Hollow Pact's grief-theology (they guard the same abandoned dead the Pact claims to free)",
  "(plausibly) Wardens-Major <-> Seed Guild over sap rations (an informal deal to keep the wall fed in exchange for not exposing the Guild's Abyss-front sales)"
]
```

The Rootwardens' *best* alliance is the one they resent most: the **Sap Commons.**
Containment + cure is the only path that actually solves a well — the Wardens hold it
safe *while* the Commons heal it — but their doctrinal rivalry (cowardice vs
recklessness) keeps them apart, and bridging that gap is one of the player's highest-
value moves (Section 22). Their most *dangerous* alliance is the secret one already
forming: Othren's circle quietly trading with the very Hollow Pact the Order hunts,
"just to hold the line."

---

## 15. Secret Alliances

(Detailed in the `secret_alliances` block above.) The load-bearing secret is
**Othren Deepbark's deniable rot-knowledge exchange with the Hollow Pact.** It is not
treason yet — Othren tells himself it is *intelligence,* studying the enemy's craft to
contain it better. But the caches he confiscates do not all get destroyed; the
"containment tricks" he has begun deploying along his section of wall are mild
corrupted-sap workings; and the Pact rot-tenders he debriefs are starting to feel
like the only people who understand his problem. The slow-defection arc (Section 26)
runs straight through this secret. A player who discovers it holds the lever that can
either redeem Othren (pull him back early) or destroy him (expose him) — and either
way, fractures the Order.

---

## 16. Fringe Behavior

The Rootwardens' fringe is not loud — it is *quiet,* which is the Verdant signature
of corruption (Section 8: erosion and excuse, not invasion). Fringe behaviors, in
ascending severity:

1. **Containment-as-permanent-stasis.** Wardens who have stopped expecting a cure
   and now maintain wounds as infrastructure, taking quiet pride in a well so
   well-walled it will never need to be healed. Stagnation wearing a uniform.
2. **The sealed-well vigils.** Wardens posted to Greywell, Ashroot, and Thornmere,
   standing guard over abandoned trapped dead they are forbidden to acknowledge —
   the Order's most hollowed-out, despair-prone, and defection-prone members.
3. **"Just to hold the line."** Unauthorized mild corrupted-sap use to make an
   un-ending mission survivable — Othren's circle. Each use is framed as containment,
   not weaponization, which is precisely how the line gets crossed without anyone
   deciding to cross it.
4. **Hollow-hunter hollowing.** Anti-defector squads that go into the Reach so often
   they begin to understand, then sympathize with, the defectors they hunt — and some
   season, don't come back.
5. **Tolerating the Pact's traps.** In an Abyss soul-harvest emergency, Wardens
   quietly leaving Hollow Pact corrupted-sap traps in place (or deploying them)
   because they *work* — a desperate tactic (Section 15) that, repeated, becomes
   doctrine.

---

## 17. Leader NPCs

```ts
leader_npc_ids: ["thalen_mossguard", "othren_deepbark"]
champion_npc_ids: ["thalen_mossguard"]
```

### 17.1 Thalen Mossguard — the honest line (the player's likeliest Rootwarden ally)

```ts
NPCState {
  name: "Thalen Mossguard"
  domain: "Verdance"; public_role: "Rootwarden, frontline thornwall defender (Warden, rising toward Warden-Major)"
  private_role: "the Order's conscience — the soldier who insists the line must be held FOR something"
  faction_ids: ["rootwardens"]; location_id: "eastern_thornwall / thornveil_refuge"
  belief_core: "We hold the wall so others can do the slow true work behind it. Containment buys time for a cure; it is not a substitute for one."
  desire: "To one day lay down the wall — to see a season when the wells run clean and the Order is no longer needed."
  fear: "That the line will never end; that he is guarding a grave, not a sickbed; that his comrades (Othren) will break before he can save them."
  secret: "He suspects Othren is using corrupted sap and has not yet reported it — out of loyalty, and out of dread of what's true."
  public_mask: "The steady, dependable Warden — disciplined, plainspoken, unshakeable on the line."
  private_truth: "He is frightened, exhausted, and quietly furious at the Heartmoot's paralysis; he holds the line on willpower and the hope someone will give him a reason it ends."
  status: "alive"
  can_romance: true; can_betray: false; can_die: true; can_defect: false; can_start_rumors: true
  loyalty_trigger: "The player respects the line he holds AND refuses the corrupted shortcut under pressure — proving you'll hold the hard slow way."
  betrayal_trigger: "n/a (Thalen does not betray) — but his TRUST FRACTURES, possibly permanently, if the player uses corrupted sap / soul-sap."
  hero_arc: "From holding the line in despair to holding it FOR a cure — becoming the bridge between the Wardens and the Sap Commons; possibly the Warden-Major who finally lets the wall come down."
  villain_arc: "(rare) If utterly betrayed and the well lost, a Thalen who concludes containment failed could harden into the very stagnation he fought — or break holding the wall (martyr)."
  death_impact: "The thornwall's morale cracks; containment weakens; Othren (or worse) takes command and the corrupted-sap line is crossed openly; a rallying martyr or a collapse."
}
```

Thalen is the **moral barometer of the containment path** and the player's most
reliable Rootwarden ally. His trust is earned the Verdant way (Section 25): patience,
consistency, respecting the line, healing at cost, and — above all — *refusing the
corrupted shortcut even when it would help.* His trust is broken the Verdant way:
using corrupted sap is the cardinal violation, and for Thalen, who has watched his
comrades fall to exactly that, it is not a policy disagreement but a betrayal of
everything the wall is for. **Love does not erase it** (Section 25 romance rule): a
Thalen who loves the player will still turn from them, publicly and privately, if they
weaponize rot.

### 17.2 Othren Deepbark — the slide (a potential defector)

```ts
NPCState {
  name: "Othren Deepbark"
  domain: "Verdance"; public_role: "Rootwarden containment officer and rot-tending specialist (the Order's foremost corruption-expert)"
  private_role: "the quiet pragmatist weaponizing corrupted sap 'just to hold the line' — the larva of the Hollow Pact inside the Order"
  faction_ids: ["rootwardens (drifting toward hollow_pact sympathy)"]; location_id: "eastern_thornwall / sealed-well perimeters"
  belief_core: "There is no cure coming. I have walked past three cured wells that became graves. The only mercy left is to hold the line — and if it takes a little rot to hold it, the rot was already here."
  desire: "To make the un-ending mission survivable; to never again walk past a thornwall where someone braver tried the door and failed."
  fear: "That he is becoming what he hunts; that Thalen will find out; that he is right that there is no cure (which would mean the Hollow Pact is right too)."
  secret: "He runs a deniable rot-knowledge exchange with the Hollow Pact and has been deploying mild corrupted-sap containment workings along his wall section for a season. He served at Thornmere (a sealed well) and never recovered."
  public_mask: "The grim, competent, indispensable containment expert — the man you want walling your well."
  private_truth: "A grieving, despairing warden one bad season from open defection, who has half-convinced himself that weaponized rot is just better containment."
  status: "alive"
  can_romance: false; can_betray: true; can_die: true; can_defect: true; can_start_rumors: true
  loyalty_trigger: "Someone (the player, Thalen) reaches him EARLY — gives him a reason to believe a cure is possible, or pulls him back before the line is openly crossed."
  betrayal_trigger: "Exposure with no path back (forces him to the Pact); OR the player demonstrates corrupted sap 'works,' validating his slide and accelerating it; OR an Abyss harvest that 'proves' only the rot can hold the wall."
  hero_arc: "Pulled back early, Othren becomes the Order's most valuable cleanser — the one whose rot-expertise, turned to healing, helps cure the well instead of weaponize it (redeemable)."
  villain_arc: "Unchecked, Othren defects to the Hollow Pact, taking the Order's containment secrets and a section of wall's worth of corrupted-sap craft — becoming a Pact cell-leader who hunts his former comrades, or a node of the wound."
  death_impact: "His secret surfaces (a scandal implicating the whole Order); his cleansing expertise is lost; if already turned, his death may martyr him to the Pact or burst open the Abyss supply line he traded along."
}
```

Othren is the **keeper vulnerability made into a person.** He embodies every
sentence of the Rootwarden exploit (Section 8.5 reference; Section 20 canon):
containment-as-permanent-stasis sliding into stagnation; the despair of guarding an
un-healing wound breeding defection to the Hollow Pact; the creeping willingness to
use corrupted-sap traps "just to hold the line." His arc is a *slow* defection by
design (Section 26) — he is not a traitor the player catches but a comrade the player
watches slide, with real chances to pull him back at each stage. He is the Order's
foremost expert on the corruption, which means he is simultaneously the player's best
hope for understanding (and curing) the well **and** the player's most likely vector
for its weaponization. Critically: **if the player uses corrupted sap, they validate
Othren's entire worldview** — every player corruption-use is a tick toward Othren's
fall and a crack in Thalen's trust, the two arcs pulling against each other.

---

## 18. Agenda Clock

```ts
PressureClockState {
  name: "The Un-Ending Wall (Rootwarden agenda clock)"
  clock_type: "faction_agenda" // a corruption/stagnation clock in faction clothing
  owner_type: "faction"; owner_id: "rootwardens"
  current_value: 4; max_value: 8
  trigger_event: "Each season the Thornveil well is neither cured nor honestly sealed, the Order holds an un-ending line with no sanctioned end — and despair, defection, and the corrupted shortcut advance."
  partial_tick_effects: [
    "Tick 1-2: Wardens privately stop expecting a cure; containment hardens into permanent-stasis pride.",
    "Tick 3-4 (CURRENT): Othren's circle begins mild unauthorized corrupted-sap use 'just to hold the line'; sealed-well vigils grow despair-sick; Hollow-hunter desertions tick up.",
    "Tick 5-6: A corrupted-sap trap is used OPENLY in an Abyss emergency and tolerated; the taboo cracks doctrine-wide; Othren nears open defection; Thalen's faith in the Order strains.",
    "Tick 7: Corrupted-sap containment becomes de facto Rootwarden practice; the Order begins to resemble a disciplined Hollow Pact; legitimacy with the frightened populace inverts to terror as the secret leaks."
  ]
  completed_effect: "The Rootwardens become containment-by-corruption: a Verdance that walls its wound with the very rot it once contained, harvesting souls 'for defense.' Othren leads or martyrs the transition; Thalen breaks, dies on the wall, or defects to the Sap Commons in despair; the Keeper's preferred Verdance arrives wearing a Warden's vigil. (Keeper pressure +major.)"
  reversal_methods: [
    "Break the Heartmoot's paralysis so the Wardens get a sanctioned cure-timeline (an END to hold the line FOR)",
    "Bridge the Rootwardens and Sap Commons (contain WHILE curing) — gives the wall a purpose again",
    "Pull Othren back early (redeem the slide before the line is openly crossed)",
    "The player conspicuously holds a section WITHOUT the corrupted shortcut under real pressure (proof the slow way can work)",
    "Address the Abyss incision at the source (remove the un-ending pressure that breeds the despair)"
  ]
  is_active: true; visibility_to_player: "hinted" // visible as Warden morale/Othren behavior; the mechanism is a DM War Room clock
}
```

**The clock is the Order's tragedy in mechanical form.** It does not tick from
attack — it ticks from *waiting,* from the Heartmoot's indecision and the well's
un-cured persistence. This is the Keeper signature (Section 8): nothing dramatic
happens; the meeting ends without a decision; the warden says "next season"; the rot
in the confiscated cache starts to look like a tool. Every reversal method is an
*action against paralysis* — which is exactly why the paralysis is so dangerous.

---

## 19. Keeper Exploit

```ts
keeper_exploit_vector: "Containment-as-permanent-stasis. The Keeper takes the Rootwarden virtue (patient, disciplined containment) and lets it slide, via the Heartmoot's paralysis, from 'contain UNTIL it can be healed' into 'contain INSTEAD of healing it' — until the wound is permanent infrastructure defended as duty. Then it offers the despairing warden the relief of the fast dirty cure (the corrupted-sap trap, the Radiance torch) as MERCY: a way to make the un-ending line end. The masterstroke: the Wardens guard the wound so well, for so long, that healing it comes to feel like recklessness, and weaponizing it comes to feel like containment."
```

**How the Keeper works the Rootwardens specifically** (mapping the Section 8 pattern
onto this faction):

1. **DELAY (via the Heartmoot).** The council won't sanction a cure or admit the
   wells can't heal, so the Wardens hold an un-ending line. Their loyalty to the
   interpreters becomes the engine of their own stagnation.
2. **REDEFINITION.** "Contain until cured" quietly becomes "contain forever"; a
   walled wound becomes a point of professional pride; the trapped dead behind the
   seals become "ancestors who chose to stay" (the sealed-well vigils stop grieving
   and start venerating).
3. **THE MERCY-SHORTCUT.** To a warden who no longer believes in a cure, the
   corrupted-sap trap is reframed as the *kind* choice — the way to hold the line
   without spending more comrades, to make the despair survivable. *This is the Void
   handing the Keeper its victory:* every corrupted-sap "containment" deepens the
   soul-flow wound the Wardens exist to protect.

The Keeper does not need to defeat the Rootwardens. It needs them to *keep doing
their job slightly too well, slightly too long, with slightly dirtier tools* — until
the wall that protected Verdance's soul-flow becomes the structure that traps it.

---

## 20. Void Temptation Phrase

```ts
void_temptation_phrase: "You have held the line so long, and no cure has come, and none is coming. You know this — you walked past Greywell, Ashroot, Thornmere; you saw the cured wells become graves. Stop pretending a healer will save you. The rot in the well would hold the wall tonight, and spend no more of your comrades doing it. You already contain the corruption — why not let it contain THEM? It isn't weaponizing the cycle. It's finishing the wall. Better a wound walled with rot than a season more of your people dying to hold clean ground that will fall anyway. Hold the line, warden. The fast way is the merciful way. You of all people have earned the right to stop bleeding for a cure that isn't coming."
```

The Void's cruelty here, faction-specific: it does not tempt the Warden with power or
glory (Radiance's temptation) — it tempts them with **rest.** It offers the
exhausted, honorable defender an *end* to the un-ending mission, dressed as mercy and
discipline both: *the corrupted shortcut is just better containment.* It weaponizes
the Warden's own virtue (hold the line, spare your comrades, don't gamble on an
unproven cure) to walk them straight into the Hollow Pact's theology by the kindest
possible road. Othren is already most of the way down it. Thalen has heard the
whisper and refused it — which is exactly what makes him the conscience.

---

## 21. If / Then / Because Rules

Per Chunk 4: every shift uses **IF / THEN / BECAUSE** (domain logic + motive +
power/metaphysical reason). All deltas use the Chunk 3 scale.

1. **IF** the player respects the containment line and conspicuously refuses the
   corrupted-sap shortcut under real pressure, **THEN** Thalen's trust +6 and respect
   +5; he opens rootwell access and shares mycelial intelligence; the Un-Ending Wall
   clock reverses −1, **BECAUSE** Rootwarden virtue is steadfast disciplined
   containment — proving you'll hold the hard slow line instead of taking the dirty
   fast win is exactly what earns a Warden's loyalty and gives the wall a reason to be
   held clean (Section 25 canon).

2. **IF** the player uses corrupted-sap traps to stop an Abyss patrol at Thornveil,
   **THEN** Thalen trust −10 and suspicion +12; Othren respect +8 and his slide
   accelerates (clock +1); Hollow Pact respect +12; soil corruption +4,
   **BECAUSE** weaponized rot is the cardinal violation (Section 25); Thalen sees the
   line he bleeds to hold crossed by an ally, *and* the player has just validated
   Othren's entire worldview ("see — only the rot holds the wall") — the two warden
   arcs pull opposite ways from the same act.

3. **IF** the player discovers Othren's unauthorized corrupted-sap use and pulls him
   back EARLY (gives him a credible reason a cure is possible, before the line is
   openly crossed), **THEN** Othren loyalty +8, defection risk −15, and his
   rot-expertise turns toward cleansing the well; clock −1, **BECAUSE** Othren's slide
   is despair, not malice — a man who has stopped believing in a cure is redeemed by
   being given one to believe in (Section 17.2 loyalty_trigger).

4. **IF** the player exposes Othren's corrupted-sap use publicly with no path back,
   **THEN** the scandal implicates the whole Order (Rootwarden legitimacy −8 with the
   frightened populace); Othren is forced to the Hollow Pact (defects, clock +2);
   Thalen is devastated (his secret-kept guilt surfaces), **BECAUSE** a public
   exposure of the Order's foremost expert as a corruption-user confirms the
   populace's deepest fear (the Wardens are becoming what they contain), and it leaves
   Othren nowhere to go but the faction he was already trading with.

5. **IF** the player breaks the Heartmoot's paralysis and secures a sanctioned
   cure-timeline (an END the Wardens can hold the line FOR), **THEN** Rootwarden
   morale +10 across the Order; the Un-Ending Wall clock reverses −2; Thalen's
   hope-arc advances, **BECAUSE** the clock ticks from un-ending-ness itself
   (Section 18); give the wall a purpose and a horizon and the despair that breeds
   defection and the corrupted shortcut loses its fuel.

6. **IF** the player bridges the Rootwardens and the Sap Commons (containment WHILE
   the Commons attempt a cure), **THEN** both factions' trust in the player +5; the
   Order gains a sanctioned reason to hold; clock −1; but Warden–Commons hidden
   resentment lingers (a TolerationState), **BECAUSE** contain-plus-cure is the only
   path that actually solves a well (Section 22), yet the doctrinal rivalry
   (cowardice vs recklessness) means the alliance is tactical, not warm — it can
   fracture if the cure looks reckless or the containment looks like obstruction.

7. **IF** Abyss launches an open soul-harvest and the player (or the Wardens) tolerate
   or deploy Hollow Pact corrupted-sap weapons to stop it, **THEN** the harvest is
   broken (a real tactical win); but a TolerationState forms with high hidden
   resentment and a near-certain post-crisis reckoning; clock +1, **BECAUSE** when
   Abyss is actively harvesting souls, stopping the harvest overrides the horror of
   the method FOR NOW (Section 25) — but the suppressed horror returns with interest
   when the emergency ends (see rule 12).

8. **IF** the player accepts Radiance's offer to BURN the corrupted Thornveil well
   without Verdant consent, **THEN** the containment problem "ends" but the trapped
   dead are destroyed (not freed); Rootwarden trust in the player collapses (−20);
   the Rootmoot may turn on the player, **BECAUSE** burning severs the soul-passage —
   to a Warden sworn to contain *without spending soul,* it is the ultimate failure
   wearing the mask of relief (the Void's "rest" temptation made literal); consent is
   everything (Section 25 canon).

9. **IF** the player stands a section of the wall through an attack WITHOUT the
   corrupted shortcut, at real cost, **THEN** Rootwarden respect +8; the proof
   propagates via the mycelial relay (a hopeful counter-rumor); Othren's slide slows
   (clock −1); Thalen may become a devoted ally, **BECAUSE** the whole Order's despair
   rests on the unspoken belief that the clean way can't hold — visibly disproving it
   is the single most powerful reversal of the Keeper exploit (Section 18 reversal).

10. **IF** an elder defers the well decision to "next season" a fourth and fifth time
    while the player is allied with the Wardens, **THEN** Rootwarden resentment of the
    Heartmoot rises; sealed-well vigils' despair deepens; Othren's circle grows; clock
    +1 (silent), **BECAUSE** stagnation IS the Keeper exploit (Section 8) — the
    council's paralysis is not neutral to the Wardens; it is the active engine of
    their corruption, and the loyalty that makes them obey it is what makes it deadly.

11. **IF** the player helps the Wardens reclaim and RESTORE a section of poisoned
    ground beyond the wall (the Order's true victory condition, Section 15),
    **THEN** Rootwarden legitimacy +6, morale +6, and the Order remembers it exists to
    heal-by-holding, not just to wall; clock −1, **BECAUSE** Verdance "advances" by
    restoring contested ground, not seizing territory — reminding the Wardens of this
    is reminding them their wall has a forward, hopeful purpose, not only a defensive,
    despairing one.

12. **IF** Abyss is defeated locally and the shared-enemy pressure ends while a Hollow
    Pact corrupted-sap toleration is still active, **THEN** the toleration collapses;
    the Wardens (and Heartmoot) turn on the Pact with built-up resentment; the player
    must break with the Pact or be tarred with it, **BECAUSE** the toleration was
    conditional on the Abyss emergency (shared_threat); when the threat ends, the
    suppressed horror at weaponized rot returns with interest — the deferred reckoning
    (Section 25 canon).

13. **IF** the player corrupts or is suspected of corrupting the mycelial relay at the
    wall, **THEN** Rootwarden trust −15, suspicion +18, and they may bar the player
    from the wall entirely, **BECAUSE** the relay is the Order's eyes and nervous
    system (power_source: intelligence 71); blinding the wall is the act of an enemy
    (Abyss's and the Pact's signature move), and a Warden cannot hold a line he cannot
    see.

---

## 22. Betrayal Triggers

```ts
betrayal_triggers: [
  "OTHREN's defection: exposure with no path back; OR the player proving corrupted sap 'works' (validating his slide); OR an Abyss harvest that 'proves' only the rot holds the wall; OR a fifth deferral by the Heartmoot that kills his last hope of a cure.",
  "Sealed-well wardens to the Hollow Pact: prolonged vigil over abandoned dead + the Pact's grief-theology offering them a way to 'free' the souls they guard.",
  "Wardens-Major to the Seed Guild (informal): sap rations withheld until the Order trades silence on the Guild's Abyss-front sales for a fed wall.",
  "The Order vs the player: the player uses corrupted sap / soul-sap (Thalen's trust fractures; the Order's containment legitimacy is undermined by an ally doing the cardinal sin).",
  "The Order vs the Heartmoot: a sixth deferral, or the exposure of the sealed-wells secret handled WITHOUT a plan, could push the exhausted Wardens to seize emergency control of Thornveil (a containment coup).",
  "Thalen does NOT betray — but he WITHDRAWS: corrupted-sap use by the player ends the alliance, publicly and privately, love or not."
]
```

Per Chunk 4, betrayal is never random — it follows the formula (sacred violation +
faction pressure + fear + resentment + Void shortcut − trust − debt − shared threat).
For the Rootwardens the dominant terms are **despair** (the un-ending mission),
**sacred violation** (the player using rot, validating the slide), and the **Void
shortcut** (the mercy of an ending). Thalen's trust is high enough to resist
everything except the cardinal sin; Othren's is low enough that almost any push
completes his fall.

---

## 23. Player Opportunity

The Rootwardens are the player's **most accessible Verdant faction** (a Verdant PC is
presumed to respect containment; Section 26) and offer:

- **Muscle, intelligence, and rootwell access** — the wall's defensive strength, the
  mycelial relay's eyes, and the gatekeeping power to approach (or block) the well.
- **A faction the player can keep honest or watch slide** — the Order's corruption is
  *preventable,* and the player is uniquely positioned to prevent it (break the
  Heartmoot's paralysis, bridge the Commons, hold a clean section, pull Othren back).
- **Thalen Mossguard, the likeliest devoted Rootwarden ally** — a trustworthy friend,
  a moral barometer, a possible romance, earned by holding the line clean.
- **Othren Deepbark, a redeemable expert or a catastrophic vector** — the player's
  best source of knowledge on the corruption (how to cure OR weaponize it) and a
  slow-defection arc the player can redeem, expose, or accelerate.
- **The bridge play** — the single highest-value move available through the
  Rootwardens: marry containment to cure (Wardens hold while Commons heal), the only
  path that actually solves the well (Section 23 power-struggle peaceful_resolution).

The player's central Rootwarden test mirrors the Order's: *will you hold the line FOR
something, or will you take the shortcut that ends the line and the soul-flow both?*
Every corrupted-sap use the player commits is a tick on the Un-Ending Wall clock, a
crack in Thalen's trust, and a validation of Othren's despair — the Rootwarden arc is
the player's contain-vs-cure conscience made into a faction.

---

## 24. FactionState (concrete instance)

```ts
FactionState {
  id: "rootwardens"
  campaign_id: "mvp_sap_beneath_the_ash"
  name: "The Rootwardens (Custodial Order of the Wells and the Wall)"
  domain: "Verdance"
  doctrine: "Corruption must be contained. Guard the wells, hold the thornwall, keep the wound from spreading. Better a wound walled than a cure that fails. Discipline over experiment."
  ideal_future: "A Verdance where every well runs clean and the wall — and the Order — is no longer needed."
  public_goal: "Hold the eastern thornwall, contain the Thornveil rootwell, control rootwell access, keep the frightened populace safe behind a wall that does not move."
  hidden_goal: "Be allowed to stop — force the Heartmoot or the Sap Commons to provide a trusted cure or honestly admit the wells will never heal, so the Order knows whether it guards a sickbed or a grave."
  leader_npc_ids: ["thalen_mossguard", "othren_deepbark"]
  champion_npc_ids: ["thalen_mossguard"]
  class_base: {
    "Guarding Class": 78, "Tending Class (rot-tenders/restorers)": 41,
    "Listening Class (seconded communers)": 22, "Sheltered (refugee auxiliaries)": 30,
    "Trading Class (Seed Guild logistics)": 18
  }
  power_sources: {
    military: 74, economy: 38, magic: 66, religion: 49,
    intelligence: 71, legitimacy: 63, resources: 58, fear: 44
  }
  resources_controlled: [
    "Rootwell access (gatekeeping)", "The Eastern Thornwall", "The Thornveil rootwell perimeter",
    "Spore/snare killzones", "Mycelial relay nodes at the wall", "Grown redoubts and forward bases",
    "Containment seals & quarantine craft", "Confiscated corrupted-sap evidence-caches"
  ]
  locations_controlled: [
    "The Eastern Thornwall", "Thornveil Refuge (co-control: security & the well)",
    "Frontier watch-redoubts", "The three sealed-well perimeters (Greywell, Ashroot, Thornmere)"
  ]
  magic_access: [
    "Containment/fortification growth-shaping (mastery)", "Spore warfare", "Snare-shaping",
    "Mycelial intelligence (terrain-bound)", "Expert rot-tending", "Field restoration (moderate)",
    "Cleansing-communion (LOW)", "(forbidden) corrupted-sap traps & soul-sap (Othren's circle, illicit)"
  ]
  military_units_controlled: [
    "Thornwall companies", "Spore-skirmishers", "Snare-shapers", "Mycelial scouts",
    "Field-restorers/battle-medics (elite)", "Containment squads", "Hollow-hunters",
    "Seconded Greenwake communers"
  ]
  trade_routes_controlled: ["Border frontier crossings (open/close)", "Smuggling-route interdiction at the wall"]
  internal_rivals: ["Hollow Pact (official)", "Sap Commons (functional)", "Heartmoot (by paralysis)", "Seed Guild (dependency)", "Othren's containment circle (within)"]
  external_enemies: ["Abyss (existential)", "Abyss soul-harvest infrastructure", "Hollow Pact (as counter-state)", "Radiance 'help' (burn-the-well)", "Relay-corrupting infiltrators"]
  possible_allies: ["The player", "Sap Commons (rival+necessary)", "Greenwake Communion", "Heartmoot (if moved to act)", "Tempest (situational)", "Any anti-Abyss bloc"]
  secret_alliances: ["Othren's circle <-> Hollow Pact rot-knowledge (defection thread)", "Sealed-well wardens <-> Pact grief-theology sympathy", "Wardens-Major <-> Seed Guild sap-ration deal"]
  infiltration_targets: ["The Hollow Reach (Hollow-hunter raids/intel)", "Abyss soul-harvest infrastructure beyond the wall", "Hollow Pact cells in the refugee camp"]
  methods: {
    diplomacy: 40, open_war: 35, sabotage: 45, propaganda: 38,
    assassination: 30, trade_pressure: 33, magical_escalation: 55
  }
  player_standing: {
    reputation: 60,   // a known, presumed-sympathetic Verdant; respected by default
    trust: 45,        // earned, not given — contested terrain that swings hard on corrupted-sap use
    fear: 12,         // low — the player is not (yet) a threat to the wall
    respect: 55,      // competence and willingness to hold the hard line are respected
    suspicion: 25,    // baseline watchfulness; spikes fast on any rot-touching method
    debt: 10,         // minor early favors (rootwell access, intelligence shared)
    leverage: 20      // the player knows things (Othren's slide; the Abyss-front rumors) the Order would not want public
  }
  keeper_exploit_vector: "Containment-as-permanent-stasis sliding (via Heartmoot paralysis) into stagnation; then the corrupted-sap 'mercy-shortcut' offered to despairing wardens as a way to end the un-ending line."
  void_temptation_phrase: "You have held the line so long, and no cure is coming. The rot in the well would hold the wall tonight and spend no more of your comrades. It isn't weaponizing the cycle — it's finishing the wall. The fast way is the merciful way. You have earned the right to stop bleeding for a cure that isn't coming."
  agenda_clock_ids: ["clock_un_ending_wall"]
  active_rumor_ids: ["rumor_wardens_becoming_what_they_contain", "rumor_othren_uses_the_rot", "rumor_a_section_held_clean"]
  current_status: "Holding under strain — a disciplined, exhausted Order guarding an un-curing wound with no sanctioned end; honest at the top (Thalen) and quietly sliding at the expert core (Othren); one bad season from the corrupted-sap line, and one broken paralysis from hope."
}
```

---

## 25. Third- and Fifth-Order Consequence Examples

Per Chunk 4 (Action → Method → Witness → Interpretation → Power Shift → Social
Reaction → Systemic Effect → Metaphysical Effect → Future Pressure).

### Chain A — The player holds a wall section CLEAN under a real attack

- **1st (immediate):** The section holds; an Abyss probe is repelled with clean
  sapcraft (spore-fog, snares, thornwall); player exhaustion/HP cost; Thalen present,
  watching.
- **2nd (scene):** Thalen trust +6, respect +5; he opens rootwell access and shares
  mycelial intelligence. Othren, watching, is unsettled — the clean way held, which
  his despair says is impossible.
- **3rd (local/system):** A hopeful counter-rumor propagates via the mycelial relay —
  *"a section was held clean."* Rootwarden morale +6; the Un-Ending Wall clock −1;
  Othren's slide slows; the Sap Commons (Sylune) take it as proof containment-clean
  buys time for a cure, warming Warden–Commons relations.
- **4th (regional/political):** The proof undermines the Order's quiet fatalism; a
  faction of Wardens begins arguing internally that the line CAN be held FOR a cure,
  not just held forever — the Heartmoot faces renewed pressure to sanction one;
  Othren's defection thread frays.
- **5th (mythic/metaphysical):** A wall held clean is the literal disproof of the
  Keeper exploit (containment-instead-of-cure). Regional soul-flow integrity holds
  steady instead of degrading; the Verdance Stone's local stability is protected; the
  Keeper gains nothing this season — and the *template* set is "the slow clean way can
  work," which, propagated, threatens the Keeper's whole Verdance strategy. Player may
  earn the label "the Wall-Keeper" or "the One Who Held It Clean."

### Chain B — The player uses corrupted-sap traps to stop an Abyss patrol at Thornveil

- **1st (immediate):** Patrol destroyed (devastatingly effective); soil corruption +4;
  Hollow Pact respect +12; Thalen and Othren both witness.
- **2nd (scene):** Thalen trust −10, suspicion +12 — the line he bleeds to hold,
  crossed by an ally. Othren respect +8 — and something worse: *validation.* "See. Only
  the rot holds the wall." The two warden arcs split from the single act.
- **3rd (local/system):** Rumor mutates the Verdance way (Section 24): *"the player
  used corrupted sap" → "the player is Hollow" → "the player is Abyss."* Rootwarden
  legitimacy with the frightened populace −6; the Un-Ending Wall clock +1; the Hollow
  Pact courts the player; Othren's slide accelerates (defection risk +10).
- **4th (regional/political):** Othren now has cover — if an ally of the Wardens uses
  the rot, his "containment tricks" look reasonable; he deploys them more openly. The
  Order's anti-corruption legitimacy cracks; the Sap Commons recoil (their cure looks
  naive next to the rot that "works"); the Heartmoot has new reason to do nothing
  (everyone's already compromised).
- **5th (mythic/metaphysical):** Verdance damages its own soul-flow to defend itself —
  the cycle-virtue becomes a soul-harvest tool the Keeper need not even operate
  (Section 7.6). death_passage_blocked deepens at the well; keeper_pressure rises; the
  Void's whisper is confirmed ("if rot saved them, why call it corruption?"). The
  *template* set is "only the rot holds the wall," which is precisely the Keeper's
  preferred Verdance — and the player has become its first proof. Thalen's trust may
  be permanently fractured; Othren's fall is now likely.

### Chain C — The player exposes Othren's corrupted-sap use publicly, with no path back

- **1st (immediate):** Othren is exposed; the Order's foremost containment expert is
  revealed as a corruption-user; immediate scandal at the wall.
- **2nd (scene):** Thalen is devastated — his kept secret (he suspected and said
  nothing) surfaces alongside Othren's; trust between the two comrades shatters; Othren,
  cornered, has nowhere to go.
- **3rd (local/system):** Rumor: *"the Wardens are becoming what they contain."*
  Rootwarden legitimacy −8 with the frightened populace; Othren defects to the Hollow
  Pact (clock +2), taking containment secrets and a section's worth of rot-craft.
- **4th (regional/political):** The Order's anti-corruption authority is compromised
  domain-wide (if its EXPERT was using the rot, who else is?); the Hollow Pact gains a
  warden's knowledge of the wall's seams; the Seed Guild and Heartmoot use the scandal
  to justify their own inaction. The contain-vs-cure debate curdles into mutual
  suspicion.
- **5th (mythic/metaphysical):** A defected Othren becomes a Hollow Pact node or
  cell-leader who hunts his former comrades or weaponizes the well; the Abyss supply
  line he traded along may burst open (a war-revelation) or be buried; the soul-flow
  wound the Order existed to contain is now partly operated by an ex-Warden. The
  Keeper's "Verdance defends its own wound" advances through the very act of *exposing*
  corruption — because exposure without redemption or a plan only completes the
  defection. (Contrast: pulling Othren back early, Rule 3, reverses all of this.)

---

## 26. MVP Role in *The Sap Beneath the Ash*

The Rootwardens are the **contain-vs-cure axis** of the vertical slice — the faction
that holds the wall and the well while the whole domain argues about what to do, and
the faction whose slow corruption is the most *preventable* and the most *intimate* in
the module. Their MVP role braids three threads.

### 26.1 The contain-vs-cure tension (the spine)

Thornveil's central fork is *Contain (Rootwardens) vs Heal (Sap Commons) vs Weaponize
(Hollow Pact) vs Stabilize (Seed Guild)* (Section 23). The Rootwardens own the first
prong and gatekeep all the others: **nothing happens to the well without going through
their containment perimeter.** A player who wants to cure it must get past (or ally
with) the Wardens; a player who wants to weaponize it must defy them; a player who
wants to seal it needs them. The Wardens are not wrong — an unproven cure CAN spread
the wound, and the Sap Commons' impatience is a real danger (Section 23 power-struggle).
But containment-forever is a slow surrender, and the Wardens know it, and that
knowledge is the despair the Keeper feeds on. The module's "true" resolution
(peaceful_resolution, Section 23) *requires* the Wardens: contain via the Rootwardens
DURING a Sap Commons cure, with the Greenwake Communion hearing the trapped and Naming
them Back. The player's highest-leverage Rootwarden play is to **broker that braid** —
to give the wall a cure to hold the line FOR, ending the un-ending mission that is
killing the Order from inside.

### 26.2 The Othren slow-defection arc (the intimate tragedy)

Othren Deepbark is the MVP's **quiet defection** — not a villain to catch but a comrade
to watch slide, the keeper vulnerability made flesh and given stages the player can
intervene at:

- **Stage 1 (present, clock 3–4):** Othren runs a deniable rot-knowledge exchange with
  the Hollow Pact and deploys mild corrupted-sap "containment tricks" along his wall
  section — framed (to himself most of all) as studying the enemy to contain it
  better. *Player window:* discover the exchange; the truth is still ambiguous (is it
  intelligence or treason?).
- **Stage 2 (clock 5–6):** A corrupted-sap trap is used openly in an Abyss emergency
  and tolerated; Othren's tricks become a pattern; he begins to say "there is no cure
  coming" aloud. *Player window:* pull him back by making a cure credible (Rule 3) —
  OR push him over by proving the rot "works" yourself (Rule 2/4) or exposing him with
  no path back (Rule 4, Chain C).
- **Stage 3 (clock 7):** Othren defects, or leads the Order's slide into
  containment-by-corruption, or martyrs himself to the Pact. *Player window:* closed,
  or open only as confrontation.

The arc's engine is despair — Othren served at Thornmere, walked past the cured wells
that became graves, and has half-convinced himself weaponized rot is just better
containment. He is redeemable **early** and catastrophic **late,** and the timing is in
the player's hands. He is also the player's best knowledge-source on the corruption
itself — meaning the player must work *with* the man who is sliding, which is exactly
the intimacy that makes the tragedy land.

### 26.3 How player corrupted-sap use fractures Thalen's trust (the conscience)

Thalen Mossguard is the **moral barometer** — the honest line, the player's likeliest
devoted Rootwarden ally, the conscience who insists the wall be held FOR something.
And he is the cleanest demonstration of the module's central rule: **the method, not
the result, is what Verdance judges** (Section 25).

- If the player **refuses the corrupted shortcut** under pressure and holds clean,
  Thalen's trust and respect climb fast; he opens the wall, shares the relay, may
  become a devoted ally or romance, and becomes the bridge to the Sap Commons and the
  redemption of Othren.
- If the player **uses corrupted sap / soul-sap,** Thalen's trust fractures — trust
  −10, suspicion +12 — and it is not a policy disagreement but a *betrayal of
  everything the wall is for.* He has watched comrades fall to exactly this; the player
  has just become, in his eyes, what Othren is becoming. **Love does not erase it**
  (Section 25 romance rule): a Thalen who loves the player will still turn from them,
  publicly and privately, opposing them even as the affection survives in private.
- The cruel symmetry the module is built on: **every player corrupted-sap use
  simultaneously fractures Thalen and validates Othren** — the conscience recoils and
  the defector is vindicated by the same act. The player cannot use the rot to "help
  the Wardens"; using the rot IS the Keeper's victory inside the Order, splitting its
  honest line from its despairing core and ticking the Un-Ending Wall toward the
  Verdance the Keeper wants: a green civilization that walls its wound with rot and
  calls it discipline.

**The Rootwardens' MVP question, handed to the player as a faction:** *Will you hold
the line for something — break the paralysis, braid containment to cure, keep Thalen's
faith and pull Othren back — or will you take the merciful shortcut that ends the line,
the soul-flow, and the Order's honor all at once?* Everything the Rootwardens are is
built to make that question land with the full weight of a wall that has been held too
long.

---

## Open Questions (for NEXUS-ORCH / CANON-WARDEN)

1. Exact roster and ranks above Thalen (Wardens-Major, regional Warden-Commander) —
   defer to LIVING-CASTWRIGHT NPC dossiers; this bible seeds Thalen and Othren only.
2. Whether the Hollow-hunter desertion rate gets its own minor clock or stays a
   narrative symptom of the Un-Ending Wall clock (currently the latter).
3. The precise mechanical hook for the three sealed wells (Greywell, Ashroot,
   Thornmere) — named here for canon, to be developed with the Sealed Wells power
   struggle (Section 23) and the Heartmoot faction bible.
4. Confirm Thalen's `can_defect: false` against the villain_arc edge case (a Thalen who
   breaks holding the wall) — currently treated as withdrawal/martyrdom, not defection.
