# Sanctuary Domain Bible

- **Title:** Sanctuary — Domain Bible (Realm of Nexus / VERDAX)
- **Status:** Draft v1.0
- **Lead:** DOMAIN-ARCHIVIST · **QA:** CANON-WARDEN · **Implementation:** SCHEMA-FORGE
- **Obeys:** Chunk 1 (Master Canon), Chunk 2 (Domain Bible Template), Chunk 3 (Tracking Glossary), Chunk 4 (Cause/Effect Standards)

> **Quality contract:** Sanctuary is not "the law-and-light land." Sanctuary is a
> protection civilization whose economy, religion, legal order, military doctrine,
> and legitimacy all depend on civic trust, the Light Eternal, oath-binding, and
> the Beacon network — and whose greatest virtue (protection through truth and
> law) is also the exact lever the Keeper uses to turn it into surveillance,
> purity trials, and authoritarian "safety."

---

## 1. Domain Identity Snapshot

Sanctuary is a fortress-civilization of walled cities, oath-courts, refugee
gates, and luminous Beacons. It was built by people who survived something
unsurvivable — wars, soul-plagues, Abyssian raids that took names and the dead —
and who concluded that **the only thing standing between a person and oblivion is
other people who refuse to let them fall.** Protection is not charity here; it is
the founding covenant. To be inside Sanctuary's walls is to be *vouched for*, and
to vouch for someone is to stake your own standing on their truthfulness.

The civilization runs on three interlocking systems: **the Light Eternal** (a
sacred radiance carried in the Beacons that proves a place is "held" — watched,
remembered, and defended), **the Oath-Law** (a legal-spiritual order where sworn
vows are metaphysically binding and courts adjudicate truth), and **civic trust**
(the social currency that decides who is protected, who is suspected, and who is
cast out). When all three are healthy, Sanctuary is the safest place in the realm
— the one domain Abyss cannot easily walk into. When they fracture, Sanctuary
becomes a panopticon that interrogates its own children.

```ts
DomainIdentitySnapshot {
  domain_name: "Sanctuary"
  short_description: "A walled, Beacon-lit civilization of oath-courts and refugee gates, built on the belief that people must be protected and that protection depends on truth, law, and civic trust."
  civilization_type: "Civic-theocratic protectorate: legal magistracy + Light Eternal religion + paladin military, bound by oath-law"
  core_belief: "People must be protected. Protection depends on truth, law, and civic trust — and trust must be earned, witnessed, and kept."
  true_virtue: ["protection","unity","truth","mercy","law","oath","civic trust","Light Eternal"]
  primary_corruption_risk: ["surveillance","forced conformity","purity trials","legal cruelty","public shame","mercy without accountability","authoritarian protection"]
  domain_stone_or_source: "The Beacon network / Lumen Cor — the Light Eternal, a fractured-Stone radiance distributed across consecrated Beacons"
  magic_style: "Oath magic, Beacon/Light radiance magic, confession & protection rites; warding, sealing, testimony-binding"
  main_magic_cost: "oath_burden + social_trust (spells are sworn, witnessed, and on the record; abuse burns standing and binds the caster)"
  political_center: "Lucentglobal — the Tiered City, seat of the High Concord and the Lumen Cathedral"
  military_identity: "Defensive paladin orders, fortress-cities, ward-lines, escort doctrine; built to hold and shelter, not to conquer"
  economic_base: "Asylum & legitimacy as leverage, Beacon-lit safe-route trade, oath-bonded contracts, civic insurance, light-craft and ward goods"
  biggest_internal_conflict: "How much freedom protection may cost: the Purity Inquisition's security maximalism vs the Refugee Covenant's open-door covenant, refereed by the Civic Magistrates"
  biggest_external_threat: "Abyss — which Sanctuary opposes morally above all domains, and which most wants to expose Sanctuary's hypocrisy to strip its moral authority over soul magic"
  keeper_exploit: "Destroy trust while claiming to defend it: 'To protect people I must control the choices that could endanger them.'"
  void_lie: "If protection matters, you cannot allow dangerous people to choose freely."
}
```

---

## 2. Hard Canon

These are locked truths for Sanctuary. Nothing in play may contradict them
without an explicit canon revision.

1. **Protection is the founding covenant.** Sanctuary exists because its founders
   refused to let people be taken — by war, by plague, by Abyssian soul-raids that
   stole names and blocked the dead from passing. Its entire civilization is an
   answer to the question "how do we keep people from being lost?"
2. **Protection depends on truth, law, and civic trust.** These three are not
   decorations on the virtue of protection — they are its load-bearing structure.
   A lie inside the walls is not a private failing; it is a crack in the thing that
   keeps everyone alive. This is *why* concealment is so dangerous here (see §25).
3. **The Light Eternal is real and metaphysical**, not a metaphor. It is
   fractured-Nexus radiance, carried in consecrated **Beacons**. A Beacon's light
   marks a place as *held* — watched, remembered, defended — and genuinely
   stabilizes local soul-flow, helping the dead pass and resisting Abyssian
   memory-theft.
4. **Oaths are binding.** A sworn oath in Sanctuary is a metaphysical instrument,
   not just a promise. Oath-courts can bind testimony, seal contracts, and make
   vows that physically weigh on the soul (oath_burden). Breaking a sworn oath
   causes real soul-flow and identity damage, not just social penalty.
5. **Confession circles are sacred and (in true form) protective.** Confession is
   how Sanctuary metabolizes secrets without letting them rot into the lies that
   break trust. In true form it is mercy plus accountability. In corrupted form it
   becomes interrogation and public shame.
6. **Sanctuary is the realm's foremost moral authority over soul magic.** It
   condemns Abyssian soul-binding, name-erasure, and grief-harvest. This authority
   is real *and* it is its greatest political vulnerability: if Sanctuary is ever
   shown to practice the soul magic it condemns, Abyss can collapse its standing.
7. **Sanctuary opposes Abyss above all domains** — theologically, legally, and
   militarily. Abyss is the anti-Sanctuary: where Sanctuary holds and shelters,
   Abyss claims and ledgers.
8. **The corruption of Sanctuary is not cruelty for its own sake.** It always
   begins as *protection*. Every monstrous thing Sanctuary does in its dark form is
   justified as keeping people safe. This is the Keeper exploit and must always be
   played that way.

---

## 3. Metaphysical Role

In the fractured-Nexus order, Sanctuary holds the principles of **protection,
unity, and bound oath** — the structural "containment and continuity" principles.
Where Radiance is sacrifice/renewal and Abyss is death-as-ownership, Sanctuary is
the principle that *says no to loss*: it holds the line, it keeps the dead
remembered so they can pass, it keeps names attached to people, it keeps oaths
intact so reality-law stays coherent.

This makes Sanctuary one of the prison's most important reinforcing pillars. The
Architect-prison holding the Keeper depends on stable identity, clean oaths,
truthful records, and free death passage — and Sanctuary, at its best, is the
civilization most dedicated to exactly those things. A healthy Sanctuary is
*load-bearing* for reality: its Beacons stabilize soul-flow, its oath-courts keep
vows meaningful, its confession circles keep secrets from festering into
identity-fracturing lies.

But the same role inverts catastrophically. Because Sanctuary's principles are
*containment* principles, the Keeper's easiest move is to convince Sanctuary that
**safety requires control** — that to protect identity it must police identity, to
keep oaths it must coerce oaths, to keep records truthful it must surveil
everyone, to keep people from being lost it must never let them leave or choose.
When Sanctuary tips from "holding" into "imprisoning," it stops reinforcing the
prison-lattice and starts mirroring the Keeper's own logic: reality should be
owned, choices should be directed, free will is inefficiency, mercy is weakness
unless it is leverage. **A tyrannical Sanctuary is the Keeper wearing the mask of
a protector** — which is the most dangerous mask of all, because the people inside
still believe they are being saved.

---

## 4. Domain Stone / Core Source

```ts
DomainStoneState {
  domain: "Sanctuary"
  source_name: "The Lumen Cor and the Beacon Network (the Light Eternal)"
  source_type: "Beacon"
  origin: "A consecrated shard of the fractured pure Nexus Stone, the 'Lumen Cor,' housed in the Lumen Cathedral at Lucentglobal. Its radiance is propagated outward through a network of lesser consecrated Beacons, each lit from the Cor and re-consecrated by oath-rite. The light is not fire — it is held memory and watchfulness made visible."
  metaphysical_principle: ["protection","unity","oath-binding","truthful witness","soul-flow stabilization","memory continuity"]
  current_stability: 68  // functional but strained; see hidden_truth
  corruption_level: 19   // creeping: surveillance-rites and coerced confession are beginning to taint the light
  public_knowledge: "The Light Eternal is the gift that keeps Sanctuary held. Where a Beacon burns, the dead pass cleanly, names are remembered, and Abyss cannot easily steal a soul. Beacon harmony is the visible proof that the realm's safest civilization is still safe."
  hidden_truth: "The Light is dimming unevenly. Several frontier Beacons run on coerced confession and surveillance-rites rather than freely given oaths, and that 'dirty fuel' subtly corrupts the radiance — it still shines, but it now watches more than it warms. The Purity Inquisition knows the Light feeds on spiritual scandal-fuel and has quietly learned to provoke soul-magic scandals to keep certain Beacons bright. If this becomes known, Sanctuary's claim that its Light is pure collapses, and Abyss inherits the moral high ground over soul magic."
  factions_claiming_authority: ["Lumen Cathedral / Order of the Beacon (spiritual custody)","High Concord (civic-legal custody)","Purity Inquisition (security custody, contested)","Refugee Covenant (claims the Light belongs to the sheltered, not the watchers)"]
  rituals_dependent_on_source: ["Beacon Kindling & Re-consecration","the Oath of Holding (citizenship/asylum oath)","Confession Circles","Lightbinding (warding & sealing rites)","Passage Vigils (helping the dead pass)","Testimony-Binding in oath-courts"]
  magic_systems_dependent_on_source: ["Beacon/Light radiance magic","Oath magic","Confession & protection rites"]
  failure_symptoms: ["Beacons gutter or flicker grey ('the Greying')","the dead linger and haunt where light has dimmed","oaths sworn under a dim Beacon fail to bind (or bind wrongly)","Abyssian memory-theft succeeds inside the walls","'cold spots' where civic trust collapses into mob suspicion","confession-light turning interrogative — the rite extracts rather than absolves"]
  healing_methods: ["re-consecration with freely given (not coerced) oaths","public restoration of a broken trust (a wrongly-shamed person vindicated)","Passage Vigils that let lingering dead move on","dismantling surveillance-rites feeding a tainted Beacon","truthful confession by an authority who concealed corruption"]
  keeper_attack_vector: "Persuade Sanctuary that the Light must be *fed* and *defended* by control — that brighter Beacons require more confession, more watching, more scandal to burn. Each coerced oath dims the true Light while appearing to strengthen it, until the network watches instead of warms."
  void_attack_vector: "Offer 'enhanced' Beacons that burn brighter and reach further without freely given oaths — fueled by extracted fear and harvested confession. They work: the frontier feels safer, raids drop. But the radiance becomes parasitic, hollowing the meaning of being 'held' into being 'surveilled,' and binding the domain to Void-lit fuel it can no longer turn off."
}
```

The Beacon network is simultaneously a **metaphysical source**, a **military
asset** (lit safe-routes, ward-lines), an **economic asset** (Beacon-lit trade
corridors are the safest in the realm and command premium tolls), and a
**legitimacy instrument** (to control a Beacon's kindling is to decide who counts
as "held"). Whoever controls the Light decides who is inside the covenant — which
is exactly why the High Concord, the Cathedral, the Inquisition, and the Refugee
Covenant are all locked in a quiet war over it.

---

## 5. Soul-Flow Relationship

```ts
DomainSoulFlowProfile {
  domain: "Sanctuary"
  healthy_soul_flow_description: "Under true Beacon-light, the dead are witnessed, named, and helped to pass through Passage Vigils; oaths bind cleanly and give vows real weight; confession releases secrets before they fester into identity-cracking lies; and being 'held' means a soul is remembered, so Abyssian name-theft fails. Sanctuary is the realm's great soul-flow stabilizer — a place where no one is lost because everyone is witnessed."
  damaged_soul_flow_description: "Where the Light greys, the dead linger as resentful watchers; oaths sworn under taint bind wrongly (vows that trap rather than hold); confession becomes extraction, leaving shame-scars on identity; surveillance-rites bind the watched as much as they protect them; and the wrongly-shamed develop identity fractures from being made 'guilty before truth.' A Sanctuary that watches instead of warms turns its own protective soul-magic into soft soul-binding."
  natural_soul_processes: ["Passage Vigils (escorting the dead to clean passage)","oath-binding of vows and contracts","testimony-binding (sworn truth in court)","confession-release (absolution that clears a soul without erasing memory)","name-keeping (the Roll of the Held, which records and protects names)","warding (Lightbinding that shelters the living and the resting dead)"]
  forbidden_soul_processes: ["soulbinding a living soul to a body or object (forbidden, even mercifully)","name-erasure (utterly taboo — it is the Abyssian sin)","coerced oath-binding (oaths extracted under duress bind wrongly and are formally illegal, though the Inquisition pushes the line)","confession-extraction (turning the sacred rite into interrogation)","Beacon-feeding on harvested fear/scandal (officially denied, secretly practiced on the frontier)"]
  common_soul_wounds: ["shame-scars (identity fracture from public shaming / purity trials)","oath-traps (a vow that binds the swearer into harm)","lingering-dead (un-vigiled dead in greyed zones)","witness-binding residue (souls bound to testify, never released)","confession-scars (extraction-rite damage)"]
  healing_methods: ["a true Passage Vigil for the lingering dead","public vindication of the wrongly-shamed","oath-release rites (formally dissolving an unjust vow)","re-consecration of a tainted Beacon with free oaths","Brother-Calven-style quiet soul-healing — risky, because the clean methods are slow and the fast methods are forbidden"]
  factions_that_protect_soul_flow: ["Order of the Beacon (when faithful to free oaths)","Refugee Covenant (insists the lost and outsider be witnessed too)","honest Civic Magistrates (who keep oath-law clean)"]
  factions_that_disrupt_soul_flow: ["Purity Inquisition (coerced oaths, confession-extraction, scandal-fuel)","authoritarian-protection factions within the Concord","any cell that quietly runs surveillance-Beacons"]
  keeper_disruption_strategy: "Turn Sanctuary's soul-protection into soul-control. Coerced oaths, extraction-confession, and surveillance-rites are all soft soul-binding wearing the face of safety. Each one dims the Light, scars an identity, and binds a soul — and because it is done to 'protect,' Sanctuary defends the very wounds that weaken the prison-lattice."
  void_disruption_strategy: "Offer faster protection — Beacons that don't need free oaths, wards that don't need consent, confessions that don't need willingness. Each shortcut saves people now and binds them later, converting Sanctuary's witnessing into harvesting without anyone choosing to become Abyss."
}
```

The defining tension: Sanctuary's *healthy* soul-magic and its *forbidden*
soul-magic are separated by a single hair — **consent and truth.** A Passage Vigil
and a soul-binding both touch the death-thread; the difference is whether the soul
is *helped to pass* or *held back*. A confession and an extraction both surface a
secret; the difference is whether it is *freely given*. A protective oath and an
oath-trap both bind; the difference is whether it was *sworn freely under true
Light*. The Keeper's entire Sanctuary strategy is to erase that hair's-width
distinction under the pressure of fear.

---

## 6. True Virtues

```ts
DomainVirtue [
  {
    name: "Protection",
    healthy_definition: "Standing between a person and their destruction, at cost to yourself, without owning them in return.",
    cultural_expression: "Citizens 'vouch' for newcomers and stake their own standing on it; doorways carry the carved Beacon-mark meaning 'within this threshold you are held.'",
    heroic_expression: "A paladin holds a gate-line against a raid so refugees can cross, knowing the line may not hold.",
    political_expression: "The High Concord's first duty is the Holding — the guarantee that no one inside the walls is abandoned to harm.",
    magical_expression: "Lightbinding wards; Beacon-lit safe corridors; sheltering-rites.",
    economic_expression: "Civic insurance pools; asylum granted as a covenant, not a transaction.",
    military_expression: "Defensive ward-lines, escort doctrine, fortress-cities built to hold and shelter.",
    common_saying: "'No one falls past these walls.'"
  },
  {
    name: "Unity",
    healthy_definition: "A people bound to one another by mutual obligation, so that one person's safety is everyone's concern.",
    cultural_expression: "The Roll of the Held — every citizen's name read aloud at the year's turning, so none are forgotten.",
    heroic_expression: "Refusing to let a faction scapegoat a vulnerable group even when it would be popular.",
    political_expression: "The Concord of many factions choosing the city over the faction.",
    magical_expression: "Beacon harmony — Beacons resonate together only when the civic body is genuinely united.",
    economic_expression: "Shared safe-route tolls fund the whole network, not just the wealthy quarters.",
    military_expression: "Combined paladin orders and city militias under one ward-command.",
    common_saying: "'Held together or lost apart.'"
  },
  {
    name: "Truth",
    healthy_definition: "Reality spoken plainly, because protection built on lies collapses on the people sheltering under it.",
    cultural_expression: "Sworn testimony is sacred; a proven liar loses standing for years.",
    heroic_expression: "Telling a dangerous truth that endangers your own faction.",
    political_expression: "Open oath-courts; public records; the right to face one's accuser.",
    magical_expression: "Testimony-binding; truth-light that cannot be sworn falsely under a true Beacon.",
    economic_expression: "Verified provenance on goods; honest weights enforced by oath.",
    military_expression: "Accurate scouting reports; no falsified casualty rolls.",
    common_saying: "'A wall built on a lie shelters no one.'"
  },
  {
    name: "Mercy",
    healthy_definition: "Sparing and sheltering the fallen — paired with accountability, never instead of it.",
    cultural_expression: "Sanctuary takes in the broken, the hunted, the outsider — and asks them to be witnessed, not erased.",
    heroic_expression: "Sheltering an enemy's child; granting asylum to someone the mob wants punished.",
    political_expression: "Clemency courts; the right of sanctuary itself.",
    magical_expression: "Confession-release; soul-healing of the wounded.",
    economic_expression: "Debt-forgiveness covenants; refugee support funds.",
    military_expression: "Quarter offered; prisoners witnessed and recorded, not harvested.",
    common_saying: "'Mercy that asks nothing teaches nothing; mercy that asks everything is cruelty.'"
  },
  {
    name: "Law",
    healthy_definition: "Shared rules that bind the powerful as much as the weak, so protection is not a favor but a right.",
    cultural_expression: "The Magistrate's open court; the carved Oath-Law steles in every city square.",
    heroic_expression: "A magistrate ruling against their own faction because the law demands it.",
    political_expression: "Oath-courts; the principle that even the High Concord is under the Oath-Law.",
    magical_expression: "Binding contracts and warrants enforced by oath-magic.",
    economic_expression: "Enforceable contracts; the safest commercial law in the realm.",
    military_expression: "Rules of holding; war-law that forbids harvest and erasure.",
    common_saying: "'The Law shelters the small precisely because it binds the great.'"
  },
  {
    name: "Oath",
    healthy_definition: "A freely sworn, metaphysically binding vow that gives a person's word real weight in reality.",
    cultural_expression: "Coming-of-age Oath of Holding; marriage-oaths; guild-oaths.",
    heroic_expression: "Keeping an oath at ruinous personal cost.",
    political_expression: "Office-oaths that bind officials to the Holding.",
    magical_expression: "Oath-magic — vows that physically bind and can be drawn upon.",
    economic_expression: "Oath-bonded contracts that need no enforcement beyond the vow.",
    military_expression: "The Paladin's Vow; the gate-oath of the ward-lines.",
    common_saying: "'Swear true or stay silent.'"
  },
  {
    name: "Civic Trust",
    healthy_definition: "The earned, witnessed confidence that lets strangers rely on one another — the social fabric protection rests on.",
    cultural_expression: "Vouching; the neighbor-watch that warms rather than spies; open confession circles.",
    heroic_expression: "Trusting a suspected outsider when the mob will not.",
    political_expression: "Transparency of the Concord; the people's right to the records.",
    magical_expression: "Beacon harmony rises with genuine trust and falls with paranoia.",
    economic_expression: "Credit and asylum extended on civic standing.",
    military_expression: "Citizen-militias that hold because they trust their command.",
    common_saying: "'Trust is the wall you cannot see.'"
  },
  {
    name: "Light Eternal",
    healthy_definition: "The sacred radiance that proves a place is held — watched in love, remembered, and defended.",
    cultural_expression: "Lighting the home-Beacon at dusk; the Kindling festivals.",
    heroic_expression: "Re-lighting a greyed Beacon at the cost of one's own peace or safety.",
    political_expression: "The Light as the source of legitimacy — to be 'in the Light' is to be a recognized citizen.",
    magical_expression: "All Beacon/Light magic; soul-flow stabilization.",
    economic_expression: "Beacon-lit corridors as the realm's premium safe-trade routes.",
    military_expression: "The Light marks held ground; ward-lines anchor on Beacons.",
    common_saying: "'While the Light holds, we are not lost.'"
  }
]
```

---

## 7. Corrupted Virtues

```ts
CorruptedVirtue [
  {
    true_virtue: "Protection",
    corrupted_name: "Authoritarian Protection",
    corrupted_definition: "Protection that owns the protected — controlling people's choices, movements, and associations 'for their own safety' until safety means submission.",
    how_it_begins: "A real danger (a raid, a soul-plague, an Abyss infiltration) justifies an emergency control. The emergency never ends.",
    how_it_spreads: "Each new fear justifies one more control; each control creates dependence; dependence makes the next control feel like care.",
    who_benefits: ["Purity Inquisition","authoritarian Concord blocs","anyone who profits from fear"],
    who_suffers: ["refugees","outsiders","dissenters","the soul-magic underground","eventually all citizens"],
    faction_most_vulnerable: ["Purity Inquisition","security blocs of the High Concord"],
    npc_archetypes_most_vulnerable: ["the frightened guardian","the bereaved hardliner","the security commander who lost someone to a raid"],
    keeper_benefit: "Sanctuary stops reinforcing the prison and starts mirroring the Keeper: choices directed, free will treated as inefficiency, people owned in the name of safety.",
    void_lie: "If protection matters, you cannot allow dangerous people to choose freely.",
    visible_symptoms: ["curfews that never lift","'protective custody' of the unconvicted","movement passes","sealed gates"],
    late_stage_consequence: "Sanctuary becomes a velvet prison — the safest cage in the realm — and its Light greys into a watching grey."
  },
  {
    true_virtue: "Unity",
    corrupted_name: "Forced Conformity",
    corrupted_definition: "Unity enforced by erasing difference — one belief, one ritual, one acceptable kind of person, with deviation treated as danger.",
    how_it_begins: "Under threat, difference feels like a crack in the wall; sameness feels like strength.",
    how_it_spreads: "Loyalty tests; purity standards; the slow narrowing of who counts as 'truly' Sanctuary.",
    who_benefits: ["Purity Inquisition","majority blocs"],
    who_suffers: ["Refugee Covenant","outsiders","minorities","confessors of unpopular truths"],
    faction_most_vulnerable: ["Purity Inquisition","conformist Concord blocs"],
    npc_archetypes_most_vulnerable: ["the zealous unifier","the frightened majority elder"],
    keeper_benefit: "Real unity (mutual obligation across difference) is replaced by brittle sameness that shatters into faction war the moment it is tested — domain division on a delay timer.",
    void_lie: "A people that all believe the same thing cannot be divided or infiltrated.",
    visible_symptoms: ["mandatory rituals","banned dialects/customs","'one true confession' edicts"],
    late_stage_consequence: "Difference goes underground, becomes the soul-magic underground and resistance cells, and the unity meant to prevent division manufactures it."
  },
  {
    true_virtue: "Truth",
    corrupted_name: "Purity Trials",
    corrupted_definition: "Truth-seeking weaponized into ordeals that presume guilt and extract confession — truth as a verdict decided before the trial begins.",
    how_it_begins: "A genuine traitor or soul-magic scandal makes 'better safe than sorry' feel righteous.",
    how_it_spreads: "Lowered evidentiary standards; confession-extraction; the accusation itself becoming proof.",
    who_benefits: ["Purity Inquisition (which gains fuel and authority from each scandal)"],
    who_suffers: ["the accused","the soul-magic underground","healers who hid things to protect people","anyone different"],
    faction_most_vulnerable: ["Purity Inquisition"],
    npc_archetypes_most_vulnerable: ["the suspicion-driven inquisitor (Vale)","the ambitious prosecutor"],
    keeper_benefit: "Truth — a prison-reinforcing principle — is inverted into pre-decided cruelty, scarring identities and feeding the Inquisition's scandal-hunger, which provokes the very soul-magic scandals it claims to hunt.",
    void_lie: "If we wait for proof, the dangerous one escapes; better to break the guilty than spare them.",
    visible_symptoms: ["ordeals replacing trials","confession-extraction rites","'the accused must prove innocence'"],
    late_stage_consequence: "No one is safe from accusation; civic trust collapses into mutual denunciation; the Light greys into interrogation-light."
  },
  {
    true_virtue: "Law",
    corrupted_name: "Legal Cruelty",
    corrupted_definition: "Law used as a precision instrument of harm — perfectly procedural, perfectly merciless, cruelty made official.",
    how_it_begins: "The law is followed exactly while its purpose (protection) is forgotten; the letter devours the spirit.",
    how_it_spreads: "Magistrates ruling correctly and monstrously; precedent stacking toward severity.",
    who_benefits: ["authoritarian magistrates","the Inquisition acting through courts"],
    who_suffers: ["the poor","refugees","the technically-guilty-but-morally-innocent"],
    faction_most_vulnerable: ["Civic Magistrates (when captured)","Concord legal blocs"],
    npc_archetypes_most_vulnerable: ["the rule-bound magistrate who mistakes procedure for justice"],
    keeper_benefit: "Law (which should shelter the small by binding the great) inverts to crush the small with the great's tools — the exact Abyssian move of making evil feel official.",
    void_lie: "The law is the law; mercy is lawlessness; to bend it is to break the wall.",
    visible_symptoms: ["disproportionate sentences","debt-prisons","procedural traps for the unrepresented"],
    late_stage_consequence: "The Oath-Law becomes indistinguishable from an Abyssian ledger — binding, merciless, official — and Sanctuary's legal legitimacy rots from inside."
  },
  {
    true_virtue: "Mercy + Civic Trust",
    corrupted_name: "Public Shame",
    corrupted_definition: "Accountability degraded into spectacle — confession turned into public humiliation, shame used as a tool of social control.",
    how_it_begins: "Confession circles, meant to release secrets safely, are opened to the crowd 'for transparency.'",
    how_it_spreads: "Public shaming feels like justice and entertains; the shamed are marked for life.",
    who_benefits: ["mobs","demagogues","the Inquisition"],
    who_suffers: ["the confessed","the wrongly-accused","anyone with a survivable secret"],
    faction_most_vulnerable: ["confession-circle clergy when captured by the Inquisition"],
    npc_archetypes_most_vulnerable: ["the populist preacher","the shame-driven mob-leader"],
    keeper_benefit: "Mercy-with-accountability becomes accountability-as-cruelty; shame-scars fracture identities; people stop confessing and start hiding — and hidden secrets are exactly what the Keeper feeds on.",
    void_lie: "If they have nothing to hide, public confession costs them nothing.",
    visible_symptoms: ["public penance-marks","shame-processions","forced public confession"],
    late_stage_consequence: "No one confesses anything; secrets fester into lies; the trust the shame was meant to protect dies of it."
  },
  {
    true_virtue: "Mercy",
    corrupted_name: "Mercy Without Accountability",
    corrupted_definition: "Sheltering that asks no truth and demands no responsibility — protecting people (and oneself) by hiding what they did.",
    how_it_begins: "A healer, a Covenant figure, a kind official hides a dangerous truth to spare someone pain.",
    how_it_spreads: "Each concealment requires the next; the cover-up grows larger than the original act.",
    who_benefits: ["the concealer's conscience (short-term)","whoever the truth would have endangered"],
    who_suffers: ["future victims of the unaddressed danger","the whole civic-trust system when the lie surfaces"],
    faction_most_vulnerable: ["Refugee Covenant","healers (Brother Calven)","compassionate clergy"],
    npc_archetypes_most_vulnerable: ["the protective healer who hides things (Calven)","the loving Covenant figure (Cassia)"],
    keeper_benefit: "This is the *inverse* trap from the Inquisition's — and the Keeper plays both ends. Concealed corruption that endangers civilians is exactly the lie that breaks civic trust, which is what protection rests on. The merciful concealer hands the Inquisition its next scandal and Abyss its next propaganda.",
    void_lie: "The truth would only hurt them; protect them by carrying the secret yourself.",
    visible_symptoms: ["falsified records","hidden patients","unreported soul-magic","'it was kinder not to tell'"],
    late_stage_consequence: "The hidden danger detonates publicly; the concealer's mercy becomes proof of Sanctuary hypocrisy; Abyss weaponizes it."
  }
]
```

> **Twin-trap doctrine (locked for play):** Sanctuary corruption runs on *two
> opposite engines that feed each other.* The **Inquisition engine** (purity
> trials, surveillance, legal cruelty, public shame) makes people hide. The
> **mercy engine** (mercy without accountability, concealment) is what they do when
> they hide. Each justifies the other: hiding proves the Inquisition right;
> Inquisition cruelty proves hiding necessary. The Keeper does not need Sanctuary
> to choose evil — it only needs Sanctuary to keep choosing *both forms of
> protection* until trust dies between them.

---

## 8. Keeper Exploit Pattern

```ts
KeeperExploitPattern {
  domain: "Sanctuary"
  primary_virtue_targeted: "Protection (via civic trust)"
  secondary_virtues_targeted: ["truth","law","mercy","unity","oath"]
  corruption_strategy: "Destroy trust while claiming to defend it. Convince Sanctuary that protection requires controlling the choices that could endanger people — converting the protector into a warden, the witness into a watcher, the oath into a leash. Critically, the Keeper drives BOTH the surveillance/purity engine AND the concealment/mercy engine, so that each scandal justifies more control and each control justifies more hiding, until civic trust — the load-bearing structure of the whole civilization — collapses from the inside while everyone believes they are keeping people safe."
  preferred_crisis_conditions: ["an Abyss infiltration or soul-magic scandal (real or staged)","a refugee surge framed as an invasion","a haunting/lingering-dead outbreak where a Beacon greyed","a high-profile concealment exposed (a healer falsified records)","a paladin or magistrate betrayal"]
  preferred_faction_targets: ["Purity Inquisition (to escalate the control engine)","Refugee Covenant (to escalate the conceal-to-protect engine and then expose it)","captured Civic Magistrates (to make cruelty legal)"]
  preferred_npc_targets: ["suspicion-driven inquisitors (Vale)","bereaved hardliners","compassionate concealers (Calven)","loving-but-opposed Covenant figures (Cassia)","ambitious prosecutors"]
  soul_flow_damage_type: ["shame-scars (identity fracture)","coerced-oath traps (soft soul-binding)","confession-extraction scars","lingering-dead from greyed Beacons","witness-binding residue"]
  domain_stone_damage_type: "Beacon-greying and taint: the Light is fed on scandal and coercion until it watches instead of warms, lowering Beacon harmony and soul-flow integrity."
  common_lie: "To protect people I must control the choices that could endanger them."
  long_term_goal: "Convert the realm's foremost soul-flow stabilizer and anti-Abyss moral authority into a panopticon that mirrors the Keeper's own worldview — and, by exposing its hypocrisy over soul magic, transfer Sanctuary's moral authority to Abyss, removing the one civilization most dedicated to the principles holding the prison shut."
}
```

---

## 9. Void Temptation Pattern

```ts
VoidTemptationPattern {
  domain: "Sanctuary"
  temptation_phrase: "If protection matters, you cannot allow dangerous people to choose freely. Watch them. Bind them. Keep them lit — whatever it costs them, it keeps everyone safe.",
  immediate_benefit: "Real, measurable safety: surveillance-Beacons drop raid casualties; coerced oaths stop a traitor; confession-extraction surfaces a genuine plot; a forbidden soul-binding saves a dying child tonight. The Void's Sanctuary offers WORK — that is what makes them deadly.",
  hidden_cost: "Each shortcut converts witnessing into harvesting. The watched are bound; the coerced oath becomes an oath-trap; the extracted confession leaves a shame-scar; the saved child carries a soul-scar. Protection-by-control hollows the meaning of being 'held' into being 'owned' — the exact thing Sanctuary exists to prevent.",
  identity_damage: "Casters who lean on coerced oaths and extraction-rites accrue oath_burden and begin to feel that other people's choices are threats — their own selfhood narrows into the warden's. The shamed and bound suffer identity fractures (shame-scars).",
  soul_flow_damage: "Soft soul-binding (coerced oaths, surveillance-rites, forbidden mercy-soulbinding) disrupts clean passage and binding; greyed Beacons leave the dead lingering; the domain's stabilizing role inverts into a disrupting one.",
  reality_damage: "As Sanctuary's Beacons taint and its oaths bind wrongly, a key prison-reinforcing pillar weakens; if Sanctuary's hypocrisy is exposed, the realm loses its trusted soul-magic authority and reality stability drops.",
  faction_most_likely_to_accept: ["Purity Inquisition (control shortcuts)","frontier ward-commands under raid pressure","desperate Refugee Covenant cells (mercy shortcuts)"]
  npc_archetypes_most_likely_to_accept: ["the bereaved hardliner","the cornered healer (Calven, for mercy-shortcuts)","the suspicion-driven inquisitor (Vale, for control-shortcuts)"]
  visible_stage_1_symptoms: ["a Beacon that burns unusually bright on the frontier","oaths that bind 'a little too well'","confessions that come 'a little too easily'"]
  visible_stage_2_symptoms: ["the bright Beacon's district grows quiet and fearful","oath-traps appear (people bound into harm)","the dead begin to linger at the edges of the lit zone"]
  visible_stage_3_symptoms: ["the Light has gone grey-watchful; being 'held' now feels like being watched","confession-extraction is normalized","Abyss begins quietly citing Sanctuary's own methods as proof of hypocrisy"]
}
```

---

## 10. Magic System

Sanctuary's magic is **sworn, witnessed, and on the record.** Unlike Tempest's
wild bond-magic or Radiance's sacrificial flame, Sanctuary magic is fundamentally
*social and legal* — it draws its power from oaths freely given, from the Light
Eternal, and from the bonds of civic trust. This is why Sanctuary's magic is so
hard to corrupt cleanly and so catastrophic when it is: corrupt the consent, and
you corrupt the spell.

There are three braided traditions, all anchored in the Lumen Cor / Beacon
network:

```ts
MagicSystemState {
  domain: "Sanctuary"
  system_name: "The Threefold Light: Oath-magic, Beacon/Light radiance, Confession & Protection rites"
  source: "The Lumen Cor and the Beacon network (the Light Eternal)"
  practitioners: ["Oathwrights (oath-magic jurists)","Beaconwardens / Lamplighters (Light radiance)","Confessors & Vigil-keepers (confession & passage rites)","Paladins (applied Light + oath in war)","Magistrates (testimony-binding)"]
  institutions: ["Lumen Cathedral & Order of the Beacon","the Oath-Courts","Confession Circles","the Paladin Orders","the Magistracy"]
  training_access: "regulated"  // most rites are licensed by Cathedral or Magistracy; forbidden soul-magic is black_market
  battlefield_use: ["Lightbinding wards and ward-lines","oath-anchored shieldwalls (a sworn line holds harder)","Beacon-anchored holding ground","banishing-light vs Abyssian undead","passage-light that denies Abyss its lingering dead"]
  economic_use: ["oath-bonded contracts (self-enforcing)","testimony-binding for trade disputes","Beacon-lit safe corridors (premium tolls)","ward-goods and light-craft exports"]
  political_use: ["the Oath of Holding defines citizenship","testimony-binding decides court & succession","control of Beacon-kindling decides who is 'held'","office-oaths bind officials"]
  spiritual_use: ["Passage Vigils (clean death passage)","confession-release","re-consecration","name-keeping (Roll of the Held)"]
  civilian_use: ["home-Beacons (a small warded light)","minor vouching-oaths","household wards","confession for ordinary burdens"]
  cost_types: ["oath_burden","social_trust","domain_stone_strain (Beacon harmony)","soul_integrity (if forbidden soul-magic is used)","void_dependency (if Void shortcuts are taken)"]
  abuse_modes: ["coerced oath-binding (oath-traps / soft soul-binding)","confession-extraction (interrogation disguised as rite)","surveillance-Beacons (radiance turned to watching)","forbidden mercy-soulbinding (Calven's temptation)","testimony-binding a false oath under a tainted Beacon","Beacon-feeding on harvested scandal"]
  scarcity_level: 44  // Light-craft is widespread but high oath-magic and re-consecration are gated; clean soul-healing is scarce
  public_trust: 71    // citizens trust the Light deeply — which is exactly why exposed abuse is so damaging
  faction_control: { "Order of the Beacon": 34, "High Concord / Magistracy": 28, "Purity Inquisition": 22, "Refugee Covenant": 9, "soul-magic underground": 7 }
  keeper_corruption_vector: "Erase the consent that distinguishes a protective oath from an oath-trap, a confession from an extraction, a witnessing-Beacon from a surveillance-Beacon. Every Sanctuary spell has a free-consent hinge; the Keeper's whole game is bending that hinge under fear until the magic still 'works' but now binds, watches, and harvests."
  void_enhancement_vector: "Offer rites that skip consent — oaths that bind the unwilling, Beacons that burn without free fuel, confessions that surface without willingness, soul-bindings that save without passage. They deliver real protection now and convert Sanctuary's witnessing magic into Abyssian harvesting magic without anyone choosing to become Abyss."
}
```

**Oath-magic.** A vow sworn freely under true Light becomes a binding instrument:
it can anchor a shieldwall, seal a contract, bind testimony to truth, or hold a
gate. Oaths carry **oath_burden** — the metaphysical weight of what you have sworn
— and an oathbreaker suffers real soul-flow and identity damage. *Corruption:*
coerced oaths bind wrongly, becoming oath-traps that imprison the swearer; this is
soft soul-binding wearing the Oath-Law's face.

**Beacon / Light radiance.** Drawn from the Lumen Cor, Light magic wards, shelters,
marks held ground, banishes Abyssian undead, and aids clean death passage. Its
power scales with **Beacon harmony** (the civic body's genuine unity and trust).
*Corruption:* surveillance-rites and scandal-fuel make a Beacon brighter and
colder until it watches instead of warms — the Greying.

**Confession & Protection rites.** Confession releases secrets before they fester
into lies; Vigils escort the dead; Lightbinding shelters the living. *Corruption:*
confession-extraction (interrogation), public-shame penance, and forbidden
mercy-soulbinding (saving a soul by holding it back instead of helping it pass).

---

## 11. Magic Costs

```ts
MagicCost [
  {
    cost_name: "Oath-Burden",
    cost_type: "oath_burden",
    description: "Every sworn working adds weight to the caster's soul. Vows must be kept; the burden is the price of having one's word made real in reality.",
    minor_effect: "A small vouching-oath: faint, easily carried weight.",
    moderate_effect: "A binding contract or gate-oath: real obligation that constrains future choices.",
    severe_effect: "A great oath (a Paladin's Vow, a magistrate's office-oath): life-shaping, and ruinous to break.",
    recovery_method: "Keeping the oath to completion; formal oath-release rites; fulfillment witnessed under a true Beacon.",
    permanent_risk: "An oath-trap (especially a coerced one) can bind a soul into harm permanently; oathbreaking leaves identity scars.",
    factions_that_accept_this_cost: ["Order of the Beacon","Paladin Orders","honest Magistrates"],
    factions_that_reject_this_cost: ["the soul-magic underground (which works without sworn record)","reckless Inquisition cells that prefer coercion to free oaths"]
  },
  {
    cost_name: "Social Trust (Standing)",
    cost_type: "social_trust",
    description: "Sanctuary magic spends civic standing. To swear, ward, or testify, you draw on being vouched-for. Abuse — a false oath, an exposed extraction — burns standing for years.",
    minor_effect: "A minor rite spends a little goodwill.",
    moderate_effect: "A contested testimony-binding stakes real reputation on being right.",
    severe_effect: "Exposed abuse (false oath, surveillance-Beacon, falsified records) can strip standing entirely — civic death.",
    recovery_method: "Public vindication; restored trust; honest confession and accountability.",
    permanent_risk: "Civic outlawry — to be 'cast from the Light,' unvouched and unprotected.",
    factions_that_accept_this_cost: ["all legitimate Sanctuary institutions"],
    factions_that_reject_this_cost: ["Abyss-aligned infiltrators who do not care about standing"]
  },
  {
    cost_name: "Beacon Strain (Harmony)",
    cost_type: "domain_stone_strain",
    description: "Heavy Light-magic and re-consecration draw on Beacon harmony — the shared resonance of the network. Overdraw, or feeding a Beacon on coercion, lowers harmony for the whole region.",
    minor_effect: "A home-Beacon flickers; harmony −0 to −1.",
    moderate_effect: "A ward-line under siege dims nearby Beacons; harmony −2 to −4 regionally.",
    severe_effect: "A scandal-fueled or overdrawn Beacon greys; harmony −7+, lingering dead, soul-flow drop.",
    recovery_method: "Re-consecration with free oaths; restored civic trust; Passage Vigils.",
    permanent_risk: "A permanently greyed Beacon — a 'cold lantern' that watches but no longer warms or shelters.",
    factions_that_accept_this_cost: ["Order of the Beacon (reluctantly)"],
    factions_that_reject_this_cost: ["Inquisition cells that prefer to feed Beacons on scandal rather than spend harmony honestly"]
  },
  {
    cost_name: "Soul Integrity (forbidden soul-magic)",
    cost_type: "soul_integrity",
    description: "Forbidden workings — mercy-soulbinding, name-anchoring a soul to a body, confession-extraction — touch the death/identity thread and scar the soul they 'save.'",
    minor_effect: "A confession-extraction leaves a shame-scar on the subject.",
    moderate_effect: "A mercy-soulbinding saves a life but creates a soul-scar (soul_flow −2, a lingering wound).",
    severe_effect: "Repeated forbidden soul-magic fractures identity, blocks death passage, and binds souls — Sanctuary practicing the Abyssian sin.",
    recovery_method: "Clean soul-healing (slow, scarce); a true Passage Vigil; confession and ritual review of the act.",
    permanent_risk: "Permanent soul-binding / identity dissolution; the subject 'lives' but is held, not whole.",
    factions_that_accept_this_cost: ["the soul-magic underground","desperate healers (Calven, under pressure)"],
    factions_that_reject_this_cost: ["Order of the Beacon","Purity Inquisition (publicly — though it feeds on the resulting scandals)","Magistracy"]
  },
  {
    cost_name: "Void Dependency",
    cost_type: "void_dependency",
    description: "Void-enhanced protection (consent-skipping Beacons, oaths, soul-bindings) delivers safety now and accrues dependency the domain cannot easily switch off.",
    minor_effect: "A frontier ward holds 'too well'; a faint reliance forms.",
    moderate_effect: "A district's safety now depends on a Void-lit Beacon; dismantling it means accepting raids again.",
    severe_effect: "A whole ward-line runs on harvested fuel; Sanctuary cannot stop without exposing what it became.",
    recovery_method: "Dismantle the Void-rite; restore free-oath consecration; accept the temporary loss of safety.",
    permanent_risk: "The domain becomes structurally dependent on Abyssian-style harvesting it cannot publicly admit to.",
    factions_that_accept_this_cost: ["cornered frontier ward-commands","Inquisition hardliners"],
    factions_that_reject_this_cost: ["Refugee Covenant","faithful Beaconwardens"]
  }
]
```

---

## 12. Government and Authority

```ts
GovernmentProfile {
  domain: "Sanctuary"
  government_type: "Civic-theocratic protectorate — a covenant republic of factions bound under the Oath-Law, with a religious Light-authority and a legal magistracy sharing power."
  ruling_body: "The High Concord — a sworn council seated at Lucentglobal, composed of magistrate-electors, Cathedral delegates, paladin-marshals, guild and ward representatives, and (contested) a Refugee Covenant seat. It governs by oath-bound deliberation; its first duty is the Holding."
  religious_authority: "The Lumen Cathedral and the Order of the Beacon — keepers of the Lumen Cor, consecrators of Beacons, custodians of confession and Passage Vigils. Led by the Luminarch (currently Luminarch Serapha Veil-Dawn)."
  military_authority: "The Paladin Orders and the Ward-Command — defensive marshals who hold the walls, ward-lines, and Beacon corridors. Headed by the Lord-Marshal of the Holding."
  economic_authority: "The Concord's Chamber of Covenants and the great oath-bonded guilds (Lightwrights, Wardsmiths, Safe-Route Carriers, the Asylum Chamberlains who manage refugee intake and civic insurance)."
  magical_authority: "Shared and contested: the Cathedral over Light & confession, the Magistracy over oath & testimony, the Inquisition claiming emergency oversight of all soul-adjacent magic."
  local_authorities: ["Civic Magistrates (city/oath-courts)","Ward-Captains (district defense)","Beaconwardens (each consecrated Beacon)","Gate-Wardens (refugee gates)","Confession-Deans (circles)"]
  succession_or_selection_method: "Concord seats are filled by oath-election within each estate (magistrates elect magistrates, orders elect marshals, etc.); the Luminarch is chosen by the Order of the Beacon; magistrates are confirmed by examination and office-oath."
  legitimacy_source: "The Holding (the guarantee of protection), the Light Eternal (to govern is to keep the Light), the Oath-Law (all power is under sworn law), and civic trust (the governed must believe they are genuinely protected, not merely controlled)."
  known_cracks_in_legitimacy: ["the Inquisition's emergency powers have outlived their emergencies","the Refugee Covenant's Concord seat is contested and sometimes suspended","frontier Beacons run on coercion the capital pretends not to see","magistrate capture by security blocs (legal cruelty)","concealment scandals (falsified medical/soul-magic records) that, if exposed, prove the Holding is conditional"]
  emergency_powers: ["the Writ of Sealing (close gates, impose curfew)","Inquisitorial Oversight (suspend ordinary court protections during a 'soul-threat')","protective custody of the unconvicted","Beacon-priority requisition"]
  corruption_vulnerabilities: ["emergency powers that never sunset","Inquisition capture of the Magistracy","scandal-fuel incentives (the Inquisition profits from the soul-magic scandals it hunts)","the temptation to conceal corruption 'to protect civic morale,' which itself breaks the trust the morale rests on"]
}
```

The structural drama of Sanctuary's government is a **three-cornered standoff**:
the **Magistracy** (law/truth), the **Cathedral** (Light/mercy), and the
**Inquisition** (security/protection) — refereed by the Holding's promise and
pressured by the **Refugee Covenant** from below. In calm years they balance. Under
threat, the Inquisition's emergency powers expand, the Magistracy is tempted to
ratify them as law, the Cathedral is tempted to look away to keep the peace, and
the Covenant is squeezed into either submission or concealment. Every Sanctuary
campaign is, at bottom, a referendum on *how much freedom protection may cost.*

---

## 13. Class Structure

Sanctuary's classes are defined less by wealth than by **standing in the Light** —
how fully you are vouched-for, witnessed, and held. The deepest fault line is
**citizens vs refugees/outsiders.**

```ts
ClassStructure [
  {
    domain: "Sanctuary", class_name: "The Held (Full Citizens)",
    description: "Sworn citizens whose names are on the Roll of the Held — fully vouched-for, fully protected, fully obligated.",
    privileges: ["full protection of the Holding","oath-court standing & the right to testify","Beacon-kindling rights","Concord representation","safe-route access"],
    burdens: ["the Oath of Holding (binding civic obligation)","militia/ward service","the duty to vouch (and the risk of vouching wrongly)","tax to the Beacon and asylum funds"],
    magic_access: "regulated — licensed oath, Light, and confession rites",
    military_obligation: "ward/militia service; paladin candidacy",
    economic_role: "guild members, traders, magistrates, artisans, landholders",
    political_voice: "full — estate-elections and Concord petition",
    common_grievances: ["the burden of vouching for refugees","fear that intake threatens their safety","resentment of Inquisition overreach OR of Covenant 'softness'"],
    faction_affinities: ["High Concord","guilds","Order of the Beacon"],
    upward_mobility_paths: ["magistrate examination","paladin elevation","Cathedral ordination","guild mastery"],
    downward_mobility_risks: ["civic outlawry (cast from the Light) for proven false oath, concealment, or forbidden soul-magic"]
  },
  {
    domain: "Sanctuary", class_name: "The Vouched (Probationary Residents)",
    description: "Refugees and newcomers granted asylum and partway into the covenant — protected, but not yet fully held; their standing depends on a citizen-sponsor's vouching.",
    privileges: ["asylum & shelter","partial protection","a path to the Held","Covenant support"],
    burdens: ["dependence on a sponsor","probationary oaths","heightened scrutiny","first to be suspected in any scandal"],
    magic_access: "restricted — minor wards only; soul-adjacent rites forbidden to them",
    military_obligation: "labor service; auxiliary defense",
    economic_role: "laborers, carriers, junior artisans, Covenant workers",
    political_voice: "indirect — only through the (contested) Covenant seat",
    common_grievances: ["being suspected by default","scapegoated when a Beacon greys or a plot is found","sponsors who can revoke vouching at will","Inquisition targeting"],
    faction_affinities: ["Refugee Covenant","sympathetic Cathedral clergy"],
    upward_mobility_paths: ["years of clean standing → the Oath of Holding → full citizenship","heroic service","sponsorship by a powerful Held citizen"],
    downward_mobility_risks: ["expulsion past the gates","accusation → purity trial → outlawry","being driven to the soul-magic underground"]
  },
  {
    domain: "Sanctuary", class_name: "The Watched (Outsiders, Suspected, & Penitents)",
    description: "Those inside the walls but outside trust — the publicly-shamed, the accused-but-uncondemned, ex-confessors marked by penance, suspected soul-magic users, and unsponsored outsiders.",
    privileges: ["bare physical safety inside the walls","the (theoretical) right to a trial"],
    burdens: ["surveillance","penance-marks","movement restriction","no vouching standing","the assumption of guilt"],
    magic_access: "forbidden / black_market",
    military_obligation: "none (distrusted with arms)",
    economic_role: "marginal labor, informal economy, the underground",
    political_voice: "none",
    common_grievances: ["being punished before judgment","shame-scars","driven toward the very soul-magic underground they are accused of"],
    faction_affinities: ["soul-magic underground (the Hollow Lantern)","desperate Covenant cells"],
    upward_mobility_paths: ["public vindication","a champion who restores their standing","clean confession and accepted penance"],
    downward_mobility_risks: ["outlawry","disappearance into 'protective custody'","martyrdom"]
  },
  {
    domain: "Sanctuary", class_name: "The Sworn Estates (Clergy, Magistrates, Paladins)",
    description: "The oath-bound professional orders — not a wealth class but an authority class, set apart by great office-oaths.",
    privileges: ["authority over Light, law, or the walls","custody of sacred systems","high standing"],
    burdens: ["binding office-oaths","the weight of every judgment","the temptation of their own power's corruption"],
    magic_access: "elite / regulated — the deepest rites",
    military_obligation: "paladins: total; clergy & magistrates: oversight",
    economic_role: "stipended by the Concord, Cathedral, and courts",
    political_voice: "high — they fill the Concord estates",
    common_grievances: ["the three-cornered standoff","emergency powers eroding their domains","the burden of being incorruptible in a corruptible system"],
    faction_affinities: ["Cathedral, Magistracy, Paladin Orders respectively; some captured by the Inquisition"],
    upward_mobility_paths: ["Luminarch, Lord-Marshal, Chief Magistrate, Concord seats"],
    downward_mobility_risks: ["a broken office-oath = catastrophic fall + soul damage","being made the scapegoat of a scandal"]
  }
]
```

The class system's hidden engine: **the more frightened the Held become, the
narrower 'fully held' gets.** Fear pushes refugees from Vouched toward Watched,
pushes the Watched toward the underground, and the underground's existence then
justifies more fear. This is the class-structure expression of the twin-trap.

---

## 14. Economy and Resources

```ts
DomainEconomy {
  domain: "Sanctuary"
  primary_resources: ["Beacon-lit safe-route trade & tolls","oath-bonded contract enforcement (the realm's most trusted commercial law)","civic insurance / risk-pooling","asylum & legitimacy (granted as leverage)"]
  secondary_resources: ["light-craft & ward-goods (lanterns, warded locks, sealing-stones)","skilled refugee labor","Cathedral consecration services","Lumen-glass and Beacon components"]
  sacred_resources: ["the Lumen Cor","consecrated Beacons & Beacon-flame","the Roll of the Held (names)","oath-records & testimony-seals"]
  scarce_resources: ["clean soul-healing","incorruptible magistrates","Beacon harmony in wartime","trust itself (the scarcest of all)"]
  export_goods: ["ward-goods & light-craft","oath-bonded contract services","safe-passage / escort services","consecration & legitimacy (recognizing a ruler or treaty as 'lawful')"]
  import_needs: ["food (fortress-cities can't feed themselves under siege)","Radiance sacred-fire goods","Verdance medicines & living materials","Tempest sky-couriers for distant Beacons","raw lumen-ore"]
  trade_routes: ["the Lit Corridors (Beacon-lined safe roads, premium-tolled)","the Gate-Markets at refugee intakes","Cathedral pilgrim-routes"]
  economic_institutions: ["the Chamber of Covenants","the oath-bonded guilds","the Asylum Chamberlains (intake + insurance)","the Beacon Toll-Wardens"]
  black_market_goods: ["forged oath-seals","forged citizenship / Roll entries","unlicensed soul-magic & soul-healing","smuggled refugees past closed gates","scandal (information that fuels or defuses purity trials)"]
  wartime_economy_behavior: "Gates close, safe-routes contract to the core corridors, tolls spike, asylum intake is suspended, the insurance pools strain, and food becomes the choke-point. The Inquisition gains budget; the Covenant's funds are cut; smuggling and the black market in citizenship boom."
  famine_or_shortage_risks: ["siege starvation (cities can't self-feed)","Beacon-component shortage greying frontier lights","collapse of safe-route income when corridors are cut","insurance-pool insolvency after a disaster"]
  exploitative_practices: ["asylum-for-leverage (granting/withholding refuge for political concessions)","legitimacy-for-sale (consecrating dubious rulers for trade access)","debt-prisons (legal cruelty)","scandal-economy (selling and provoking soul-magic scandals)"]
  keeper_attack_vector: "Make protection a commodity. Once asylum, legitimacy, and safety are priced and traded, the Holding becomes conditional — and a conditional Holding is just an Abyssian ledger with better lighting. Squeeze the safe-route economy in wartime so the domain must choose between solvency and its open-door covenant, then watch it betray the covenant for the budget."
}
```

Sanctuary's economy is unique in the realm: its **chief export is trust itself.**
A contract oath-bonded in Sanctuary is enforced by reality; a ruler consecrated by
the Cathedral is "lawful"; a road that runs through a lit corridor is the safest in
the world. This makes Sanctuary indispensable — and means that *every blow to its
trustworthiness is also an economic blow.* An exposed concealment scandal doesn't
just shame Sanctuary; it devalues every oath-bond and consecration it ever sold.

---

## 15. Military Doctrine

```ts
MilitaryDoctrine {
  domain: "Sanctuary"
  doctrine_name: "The Doctrine of Holding"
  strategic_identity: "A defensive, sheltering military built to hold ground, protect non-combatants, and deny the enemy — especially Abyss — the souls, names, and dead it wants to harvest. Sanctuary does not seek to conquer; it seeks to make a place unbreakable and to escort the vulnerable through danger."
  preferred_battlefield: ["fortress-city walls","Beacon-anchored ward-lines","chokepoints and gates","lit corridors (where Sanctuary fights with the Light at its back)"]
  primary_units: ["Ward-Infantry (oath-anchored shieldwalls)","City Militias","Gate-Wardens","Beaconwardens (battlefield Light-support)"]
  elite_units: ["the Paladin Orders (the Order of the Standing Gate, the Order of the Vigil, the Order of the Mercy-at-Arms)","Vigil-Knights (anti-undead, death-passage specialists)"]
  support_units: ["Confessor-chaplains (morale, oath-renewal, last rites)","Lightwrights (mobile warding)","Escort companies (refugee convoys)"]
  magical_assets: ["Lightbinding ward-lines","oath-anchored formations (a sworn line literally holds harder)","banishing/passage-light vs Abyssian undead","Beacon-anchored holding ground"]
  defensive_strategy: "Anchor on Beacons, hold the walls, deny passage, protect non-combatants, never break the line that shelters refugees. The Light marks held ground and stabilizes soul-flow so Abyss cannot harvest the fallen."
  offensive_strategy: "Rare and reluctant — limited to relief (breaking a siege to shelter people), reclamation (re-lighting a greyed Beacon), and anti-harvest raids (destroying an Abyss soul-engine). Sanctuary attacks to protect, not to take."
  logistics_strategy: "Beacon-lit supply corridors; escort doctrine; pre-positioned shelter-points. The weakness is food — fortress-cities depend on imported grain."
  intelligence_strategy: "Testimony-binding and confession yield reliable internal intelligence; the Inquisition runs counter-infiltration against Abyss. The danger: the same tools turn inward into surveillance of citizens."
  taboo_tactics: ["harvesting enemy dead (the Abyssian sin)","name-erasure","using civilians as shields","coerced battlefield oaths","abandoning a sheltered group to save soldiers"]
  desperate_tactics: ["Beacon-overdraw (greying a Beacon to hold a line)","mass coerced oaths to stiffen a breaking militia","accepting Void-lit wards to hold the frontier","sealing gates on refugees still outside (Cassia's flashpoint)"]
  common_weaknesses: ["slow and immobile — poor at offense and pursuit","food-dependent under siege","over-reliance on Beacons (a greyed Beacon collapses a line)","the moral trap: the very tools that defend the walls can be turned to police the people inside them"]
  keeper_exploit: "Push Sanctuary from holding into garrisoning its own people. Frame every threat as requiring more internal control, until the army that shelters the city becomes the army that watches it. Each desperate tactic (coerced oaths, Beacon-overdraw, sealing gates on refugees) is a small betrayal of the Holding that the Keeper banks."
  void_escalation: "Offer Void-lit ward-lines that hold without consent or harmony — frontier commanders under raid pressure accept, the line holds, and Sanctuary's defense quietly becomes dependent on Abyssian-style fuel."
}
```

---

## 16. Warfront Behavior

```ts
WarFrontBehavior {
  domain: "Sanctuary"
  typical_warfront_goals: ["hold the walls and ward-lines","shelter and evacuate non-combatants","deny Abyss the dead, the names, and the soul-harvest","re-light greyed Beacons","preserve the Holding's credibility"]
  preferred_escalation_methods: ["closing gates and sealing corridors","Writ of Sealing / curfew","Inquisitorial Oversight","calling allied relief (Radiance flame, Tempest sky-couriers)"]
  preferred_deescalation_methods: ["oath-bound ceasefires (binding and trustworthy)","consecrated treaties","prisoner-witnessing exchanges","clemency courts","re-opening gates as a good-faith signal"]
  negotiation_style: "Legalistic, oath-anchored, and slow. Sanctuary negotiates in writing, binds agreements with oath-magic, and keeps its word almost to a fault — but it will not negotiate away the Holding, and it deeply distrusts any party that treats oaths as disposable (i.e. Abyss)."
  ceasefire_conditions: ["a binding oath-sworn truce","release/witnessing of captured non-combatants","cessation of soul-harvest","re-establishment of safe corridors"]
  betrayal_conditions: ["an enemy that harvests souls or erases names (Sanctuary will break a truce to stop it)","discovery that an 'ally' practices forbidden soul-magic","a partner that endangers sheltered civilians"]
  alliance_conditions: ["a shared anti-Abyss front","a partner who respects the Holding and clean oaths","mutual defense of soul-flow and the dead"]
  occupation_style: "Sanctuary rarely occupies; when it holds reclaimed ground it 're-lights' it — installing Beacons, oath-courts, and intake. Benevolent in intent, but it can tip into imposing conformity and surveillance on a populace that did not ask to be 'held.'"
  resistance_style: "When occupied by Abyss, Sanctuary resists by keeping Beacons secretly lit, smuggling refugees, hiding the Roll of the Held so names can't be harvested, and maintaining underground confession circles. Its resistance is about *keeping people witnessed and remembered* so they are not lost even under occupation."
}
```

---

## 17. Major Locations

```ts
DomainLocation [
  {
    name: "Lucentglobal, the Tiered City",
    domain: "Sanctuary", location_type: "Capital fortress-city",
    description: "Sanctuary's heart: seven concentric tiers rising to the Lumen Cathedral and the Lumen Cor at the crown. The lowest tier is the great Gate-Market and refugee intake; the upper tiers hold the High Concord, the Magistracy, the Paladin chapterhouses, and the Cor itself. Every tier is a wall; every gate is an oath-checkpoint. At dusk the whole city kindles tier by tier — a cascade of Light visible for leagues.",
    political_function: "Seat of the High Concord, the Magistracy, and the Luminarch.",
    economic_function: "Hub of safe-route trade, oath-bonded finance, and consecration services.",
    magical_function: "Houses the Lumen Cor; source of all Beacon consecration.",
    military_function: "Supreme fortress; Ward-Command headquarters.",
    spiritual_function: "The Cathedral, the great confession circles, the Roll of the Held.",
    civilian_function: "Home to the Held; intake and probation for the Vouched; the Lower Tier shelters the Watched.",
    controlling_factions: ["High Concord","Order of the Beacon"], contested_by: ["Purity Inquisition (pressing for Inquisitorial Oversight of the whole city)","Refugee Covenant (fighting for the Lower Tier)"],
    key_npcs: ["Luminarch Serapha Veil-Dawn","Chief Magistrate Doran Quill","Lord-Marshal Hadeon Vance"],
    resources_present: ["Lumen Cor","Roll of the Held","oath-courts","Concord treasury"],
    magic_systems_present: ["all three Sanctuary traditions at their highest"],
    known_secrets: ["several Lower-Tier Beacons quietly run on coerced confession","the Inquisition keeps an unofficial 'scandal ledger' it uses to provoke trials"],
    location_state: { stability: 70, danger: 38, corruption: 24, morale: 64, resources: 74, secrecy: 55, military_pressure: 40, spiritual_health: 66 },
    keeper_attack_vector: "Capture the Concord's emergency machinery so the capital normalizes Inquisitorial Oversight; turn the Lower Tier into a surveilled ghetto and call it protection.",
    void_symptoms: ["a too-bright Beacon over the Lower Tier","confessions that come too easily in the central circle"],
    quest_hooks: ["a concealment scandal reaches the Magistracy","the Covenant's Concord seat is about to be suspended","a greyed Beacon outbreak in the Lower Tier"]
  },
  {
    name: "The Wardward (the Gate-Wall District)",
    domain: "Sanctuary", location_type: "Refugee gate & intake district",
    description: "The great western gates where refugees arrive and asylum is granted or denied. A churning border-town of intake-courts, Covenant shelters, vouching-halls, and the Gate-Markets — and the single most politically explosive ground in Sanctuary, where the open-door covenant and the security maximalists collide daily.",
    political_function: "Where asylum policy is enacted (and fought over) in real time.",
    economic_function: "Gate-Markets; refugee labor; smuggling.",
    magical_function: "Vouching-oaths; intake testimony-binding; gate-wards.",
    military_function: "The first line; Gate-Wardens; the gates that get sealed first in war.",
    spiritual_function: "Covenant confession circles; the Naming of newcomers onto the path to the Roll.",
    civilian_function: "Home to the Vouched and many of the Watched.",
    controlling_factions: ["Refugee Covenant (shelters & intake)","Gate-Wardens"], contested_by: ["Purity Inquisition (demanding intake screening)","frontier ward-command"],
    key_npcs: ["Cassia of the Open Gate (Refugee Covenant)","Inquisitor Vale (here on 'screening duty')","Gate-Warden Mother Iselle"],
    resources_present: ["intake records","vouching-halls","Covenant funds","Gate-Markets"],
    magic_systems_present: ["vouching-oaths","gate-wards","Covenant confession"],
    known_secrets: ["the Covenant smuggles some rejected refugees in past the screening","Vale is building a case that the Covenant harbors soul-magic users"],
    location_state: { stability: 48, danger: 56, corruption: 30, morale: 50, resources: 44, secrecy: 60, military_pressure: 58, spiritual_health: 52 },
    keeper_attack_vector: "Stage or amplify a soul-magic scandal among recent refugees so the Inquisition can demand the gates close — splitting the Covenant from the Concord and pushing rejected refugees toward the underground.",
    void_symptoms: ["screening-rites that feel like extraction","a Beacon over the gate that watches the line rather than warming it"],
    quest_hooks: ["sealing the gate on refugees still outside (Cassia's flashpoint)","a smuggled child saved by forbidden soul-magic","Vale's case against the Covenant comes to trial"]
  },
  {
    name: "The Hall of Sworn Truth (the Grand Oath-Court)",
    domain: "Sanctuary", location_type: "Supreme oath-court & records",
    description: "The Magistracy's great court, where testimony is oath-bound and cannot be sworn falsely under the true Light, where the realm's most trusted contracts are sealed, and where purity trials are fought — sometimes as justice, sometimes as theater. Beneath it lie the Oath-Archives and the medical/soul-magic record vaults.",
    political_function: "Highest court; arbiter of the Oath-Law; confirms magistrates.",
    economic_function: "Seals the contracts that anchor the realm's commerce.",
    magical_function: "Testimony-binding; oath-sealing; record-keeping.",
    military_function: "Issues lawful warrants; tries war-law violations.",
    spiritual_function: "Where truth and law meet the Light.",
    civilian_function: "Where citizens seek justice — and where the Watched are tried.",
    controlling_factions: ["Civic Magistracy"], contested_by: ["Purity Inquisition (pressing for Inquisitorial Oversight of trials)"],
    key_npcs: ["Chief Magistrate Doran Quill","Inquisitor Vale (as prosecutor)","Advocate Mira Sael (defense of the Watched)"],
    resources_present: ["Oath-Archives","record vaults","testimony-seals"],
    magic_systems_present: ["oath-magic","testimony-binding"],
    known_secrets: ["some medical/soul-magic records have been falsified (Calven's among them)","Quill is quietly resisting Inquisitorial capture of the court"],
    location_state: { stability: 62, danger: 34, corruption: 28, morale: 58, resources: 60, secrecy: 64, military_pressure: 22, spiritual_health: 60 },
    keeper_attack_vector: "Capture the Magistracy so cruelty becomes lawful — lower evidentiary standards, normalize confession-extraction, let the accusation become the proof.",
    void_symptoms: ["truth-light that 'confirms' guilt before testimony","oaths in court binding the unwilling"],
    quest_hooks: ["the falsified-records scandal surfaces in court","a purity trial the player can defend or prosecute","Vale moves to seize Inquisitorial Oversight of the bench"]
  },
  {
    name: "Greylight March (the Frontier)",
    domain: "Sanctuary", location_type: "Contested frontier ward-line",
    description: "The embattled eastern border facing Abyss, where Beacons gutter and raids bleed the line. Here the Doctrine of Holding meets its hardest test — and here the Void's offer of consent-skipping wards is most tempting. Several March Beacons already run too bright and too cold.",
    political_function: "The justification for emergency powers back in the capital.",
    economic_function: "Drains the treasury; its collapse would cut the eastern corridors.",
    magical_function: "Frontier Beacons; ward-lines; anti-Abyss Light.",
    military_function: "The main warfront with Abyss.",
    spiritual_function: "Where Vigil-Knights deny Abyss the dead.",
    civilian_function: "Frontier refugees, march-towns, the first to flee.",
    controlling_factions: ["frontier ward-command","Vigil-Knights"], contested_by: ["Abyss raiders","Purity Inquisition (which wants the March as proof that control works)"],
    key_npcs: ["Ward-Captain Theron Holt (tempted by Void-lit wards)","a Vigil-Knight commander","an Abyss Ash-Ledger agent probing the line"],
    resources_present: ["frontier Beacons","ward-lines","lumen-ore mines"],
    magic_systems_present: ["Beacon/Light magic","oath-anchored formations","Void-lit wards (illicit)"],
    known_secrets: ["two March Beacons are Void-fueled","an Abyss agent is documenting Sanctuary's illicit wards as future propaganda"],
    location_state: { stability: 40, danger: 74, corruption: 42, morale: 44, resources: 38, secrecy: 50, military_pressure: 82, spiritual_health: 38 },
    keeper_attack_vector: "Bleed the March until commanders accept Void-lit wards and coerced oaths to hold; then leak the evidence to Abyss to prove Sanctuary's hypocrisy.",
    void_symptoms: ["the Greying spreading inland","lingering dead behind the line","wards holding 'too well'"],
    quest_hooks: ["dismantle a Void-lit Beacon and accept the raids, or keep it lit","intercept the Abyss agent's evidence","re-consecrate a greyed March Beacon with free oaths"]
  },
  {
    name: "The Hollow Lantern (the Soul-Magic Underground)",
    domain: "Sanctuary", location_type: "Hidden network / fringe",
    description: "Not a place but a secret network beneath the cities — confession circles for the Watched, hedge-healers who practice the soul-healing the Inquisition forbids, smugglers of refugees and names, and (at its frayed edges) practitioners drifting toward the very soul-magic Sanctuary condemns. Born from those Sanctuary cast out, it is both its conscience and its nightmare.",
    political_function: "The repressed return of everyone Sanctuary failed to protect.",
    economic_function: "Black market in soul-healing, forged citizenship, smuggled people.",
    magical_function: "Unlicensed soul-healing and (dangerously) forbidden soul-magic.",
    military_function: "None overt; can be radicalized into resistance cells.",
    spiritual_function: "Underground confession; care for the shame-scarred.",
    civilian_function: "Refuge for the Watched and the cast-out.",
    controlling_factions: ["the Hollow Lantern (fringe)"], contested_by: ["Purity Inquisition (hunting it)","Abyss (trying to recruit/corrupt its desperate edge)"],
    key_npcs: ["Brother Calven (a healer who hides things to protect people — one foot here)","'the Lampless' (an anonymous underground organizer)","an Abyss recruiter posing as a sympathetic healer"],
    resources_present: ["forbidden soul-healing knowledge","forged seals","safe-houses"],
    magic_systems_present: ["unlicensed confession & soul-healing","forbidden soul-binding (at the edge)"],
    known_secrets: ["Calven's hidden patients","Abyss has an agent inside, steering the desperate toward true soul-binding to manufacture the scandal that destroys Sanctuary"],
    location_state: { stability: 34, danger: 62, corruption: 48, morale: 46, resources: 30, secrecy: 80, military_pressure: 30, spiritual_health: 40 },
    keeper_attack_vector: "Let the Inquisition's cruelty fill the Lantern with the desperate, then push its edge into real soul-binding so the resulting scandal proves Sanctuary's hypocrisy and hands Abyss the moral high ground.",
    void_symptoms: ["a hedge-healer's 'mercy-binding' that leaves soul-scars","whispers that 'the old laws are chains'"],
    quest_hooks: ["save the Lantern's healing mission from its corrupting edge","expose or shelter Calven","unmask the Abyss recruiter before a scandal detonates"]
  }
]
```

---

## 18. Culture and Daily Life

```ts
CultureProfile {
  domain: "Sanctuary"
  daily_life_summary: "Life is ordered around the Light and the oath. Days begin with the home-Beacon kindled at dawn and end with it kindled at dusk; between them, work, court, confession, and the constant small rituals of vouching and being vouched-for. Sanctuary culture is warm and watchful at once — neighbors who genuinely care for one another and also notice one another. In its healthy form this is community; in its corrupted form it is surveillance wearing community's face."
  family_customs: "Households keep a home-Beacon and a small Roll of family names. Children are 'named into the Light' at birth and take the Oath of Holding at coming-of-age. Vouching is a family matter — to sponsor a refugee is to take them, in part, into the family's standing."
  love_and_marriage_customs: "Marriage is an oath-bond, sworn under a Beacon and recorded, genuinely binding (oath_burden). Courtship often involves a mutual confession of secrets — to marry is to be witnessed. Cross-class love (a Held citizen and a Vouched refugee) is romantic and politically fraught: the citizen stakes their standing on the outsider's truthfulness."
  education_system: "Civic schooling teaches the Oath-Law, the Light, and the duty of vouching. Higher tracks lead to the Magistracy (examination), the Cathedral (ordination), or the Paladin Orders (vigil and trial). Refugees attend Covenant schools — and are taught they must earn what citizens are given."
  work_and_apprenticeship: "Guild apprenticeships are oath-bonded. Lightwrights, Wardsmiths, and Carriers are honored trades. Work is communal and recorded; reputation is everything."
  food_and_market_life: "The Gate-Markets and tier-markets are loud, multicultural, refugee-rich. Shared communal meals ('holding-tables') are a civic ritual where strangers eat as neighbors. Bread is sacred — a fortress that can feed its sheltered is a fortress that is holding."
  funeral_or_death_customs: "Death is met with a Passage Vigil under Beacon-light: the dead are named, witnessed, their name added to the Roll of the Held forever, and helped to pass cleanly. To die un-vigiled (in a greyed zone) is the great fear — to be lost, to linger, to be harvestable by Abyss. The Roll is read aloud at the year's turning so none are forgotten."
  festivals: ["the Kindling (the year's great re-lighting and re-consecration)","the Reading of the Roll (the dead and the held, named aloud)","the Vouching-Day (when the year's refugees take their first oaths)","the Feast of Open Gates (a now-contested celebration of asylum)"]
  public_honors: ["the Beacon-Mark (carved over a threshold that has sheltered many)","the Oathkeeper's Star","the Vigil-honor (for those who held a line for the vulnerable)"]
  taboos: ["false oaths","name-erasure","abandoning a sheltered person","forbidden soul-binding","letting a Beacon grey through neglect","extracting confession"]
  common_sayings: ["'No one falls past these walls.'","'Held together or lost apart.'","'A wall built on a lie shelters no one.'","'Swear true or stay silent.'","'While the Light holds, we are not lost.'"]
  children_common_beliefs: ["the Light watches over you while you sleep","the dead are not gone, only passed and remembered","an oath is heavier than a sword","a stranger vouched-for is a neighbor"]
  class_differences: ["the Held kindle bright public Beacons; the Watched are forbidden their own light","citizens vouch, refugees are vouched-for","the Sworn Estates carry office-oaths the common folk never bear","the Lower Tier eats after the upper tiers in a shortage"]
}
```

---

## 19. Religion / Philosophy / Ritual

```ts
ReligionProfile {
  domain: "Sanctuary"
  central_belief: "The Light Eternal holds what would otherwise be lost. To be witnessed, named, and remembered in the Light is to be safe from oblivion — and the sacred duty of the living is to hold one another in it: to protect, to keep truth, to swear true, and to let no one fall past the walls or pass unremembered."
  sacred_symbols: ["the Beacon (held light)","the open hand over a threshold (vouching/shelter)","the Roll of the Held (the book of names)","the unbroken ring (the binding oath)","the seven-tiered flame (Lucentglobal / the ascent to the Cor)"]
  major_rituals: ["the Beacon Kindling & Re-consecration","the Oath of Holding","Confession Circles","Passage Vigils","the Naming (into the Light)","testimony-binding","the Reading of the Roll"]
  common_prayers_or_oaths: ["'Hold me in the Light, and I will hold others.'","'By the Light that witnesses, I swear true.'","'Let none be lost. Let none be forgotten.'","'I vouch, and I stake my standing on it.'"]
  priestly_roles: ["the Luminarch (high keeper of the Cor)","Beaconwardens / Lamplighters","Confessor-Deans","Vigil-keepers (death passage)","Cathedral consecrators"]
  heresies: ["the Brighter-Light heresy (that the Light should be fed on scandal and coercion to burn stronger — secretly practiced by Inquisition cells)","the Hollow-Lantern heresy (that mercy outside the law, including forbidden soul-healing, is holier than the law)","the Purist heresy (that only the conforming deserve the Light)"]
  sacred_taboos: ["swearing false under the Light","extracting confession","name-erasure","letting a soul be bound rather than helped to pass","feeding a Beacon on harvested fear"]
  relationship_to_death: "Death is a passage to be witnessed and aided, never owned. The dead are named onto the Roll and helped to pass; to block passage or bind a soul is the deepest sin — it is to do what Abyss does. The Vigil ensures no one is lost even in death."
  relationship_to_sacrifice: "Sacrifice is honored when it shelters others — the paladin who holds the gate, the citizen who vouches at risk. But Sanctuary distrusts sacrifice-as-glory; what it values is the quiet, costly act of holding the line for someone weaker."
  relationship_to_memory: "Memory is protection. To remember a name is to keep a soul from being lost or harvested. The Roll of the Held is sacred memory made civic. Abyssian memory-theft is the ultimate violation."
  relationship_to_truth: "Truth is the foundation under the wall. A protection built on lies collapses on the sheltered. This is why the merciful concealer is, theologically, committing a sin against the Light even when their heart is good — and why exposed hypocrisy is spiritually catastrophic."
  keeper_corruption_strategy: "Convince the faithful that the Light must be defended by control and fed by scandal — that protection justifies surveillance, that confession should extract, that the unconforming endanger the held. Turn the religion of holding into a religion of watching."
  void_false_revelation_style: "A radiant, reassuring 'revelation' that brighter Beacons and firmer oaths can banish all danger — if only the faithful stop letting the dangerous choose freely. The Void's Sanctuary voice is gentle, parental, and certain: 'I only want everyone safe. Let me watch over them.'"
}
```

---

## 20. Faction Index

```ts
DomainFactionIndex {
  domain: "Sanctuary"
  factions: [
    {
      name: "The High Concord & Civic Magistracy",
      short_doctrine: "Protection through law, oath, and shared governance — the Holding upheld by transparent courts and binding oaths that bind the great as much as the small.",
      class_base: "the Held, the Sworn Estates (magistrates), guild leadership",
      power_base: "legitimacy, the Oath-Law, the courts, the treasury, the Concord's authority",
      main_rival: "the Purity Inquisition (over emergency powers and capture of the courts)",
      keeper_vulnerability: "Legal cruelty & capture — when fear lets the Inquisition write its overreach into law, the Magistracy becomes the instrument that makes cruelty official (an Abyssian ledger with better lighting).",
      player_use: "The arena for lawful resolution: defend or prosecute trials, expose concealment lawfully, fight Inquisitorial capture of the bench, win or lose the Covenant's Concord seat."
    },
    {
      name: "The Lumen Cathedral & Order of the Beacon",
      short_doctrine: "Protection through the Light Eternal — keep the Beacons burning on freely given oaths, witness the dead, hold confession, and let no one be lost or unremembered.",
      class_base: "Sworn clergy, Beaconwardens, the faithful across classes",
      power_base: "custody of the Lumen Cor, consecration authority, confession, moral legitimacy, soul-flow stabilization",
      main_rival: "the Purity Inquisition (over whether the Light may be fed on coercion and scandal)",
      keeper_vulnerability: "The Brighter-Light heresy — clergy tempted to feed Beacons on scandal/coercion to keep them bright, tainting the very Light they serve; and the temptation to look away from corruption 'to keep the peace,' which breaks the trust the peace rests on.",
      player_use: "Source of clean re-consecration, Passage Vigils, and soul-healing legitimacy; an ally for restoring greyed Beacons; a moral counterweight to the Inquisition — if it can be kept faithful."
    },
    {
      name: "The Purity Inquisition",
      short_doctrine: "Protection through vigilance — root out the soul-magic, the infiltrator, and the impure before they endanger the held; better to break the guilty than spare the dangerous.",
      class_base: "security hardliners, bereaved zealots, ambitious prosecutors; spiritual-security crossover",
      power_base: "emergency powers, fear, the scandal-economy, counter-infiltration intelligence, growing capture of courts and Beacons",
      main_rival: "the Refugee Covenant (its ideological opposite) and the Magistracy (which it seeks to capture)",
      keeper_vulnerability: "It IS the primary Keeper vector — purity trials, surveillance, legal cruelty, public shame. Worse, it GAINS FUEL from soul-magic scandals, so it is incentivized to provoke the very scandals it claims to hunt, manufacturing the danger that justifies its existence.",
      player_use: "A dangerous ally and a dangerous enemy: it can genuinely catch real Abyss infiltrators (its point is real) and can destroy innocents and the Covenant alike (its flaw is fatal). Vale is its face. The player can feed it, starve it, expose its scandal-provocation, or be consumed by it."
    },
    {
      name: "The Refugee Covenant",
      short_doctrine: "Protection means EVERYONE — the outsider, the refugee, the suspected — or it means nothing. Keep the gates open; vouch for the unvouched; fear of the stranger is the crack Abyss walks through.",
      class_base: "the Vouched, the Watched, sympathetic Held citizens and clergy",
      power_base: "moral authority of the open-door covenant, refugee labor & gratitude, intake control at the gates, a contested Concord seat, networks among the marginalized",
      main_rival: "the Purity Inquisition (its mortal ideological opposite)",
      keeper_vulnerability: "Mercy without accountability — to protect refugees from mass suspicion, the Covenant conceals (smuggles the rejected, hides soul-magic among its people, looks away from real danger). Each concealment, when exposed, PROVES the Inquisition right and hands Abyss its hypocrisy narrative. Cassia embodies the trap: she will conceal to protect, and that concealment can detonate.",
      player_use: "The conscience of Sanctuary and the source of its most sympathetic NPCs (Cassia). An ally for keeping the Holding genuine — but one whose protective concealment can drag the player into the very scandal that destroys both of them."
    },
    {
      name: "The Hollow Lantern (Soul-Magic Underground)",
      short_doctrine: "The cast-out caring for the cast-out — underground confession and forbidden soul-healing for those the law abandoned; 'the law that won't protect us has no claim on us.'",
      class_base: "the Watched, the outlawed, hedge-healers, shame-scarred ex-confessors",
      power_base: "secrecy, forbidden soul-healing knowledge, forged citizenship, safe-houses, the desperation of the abandoned",
      main_rival: "the Purity Inquisition (hunts it); infiltrated by Abyss (corrupts it)",
      keeper_vulnerability: "Its desperate edge drifts from soul-HEALING into soul-BINDING; and Abyss has infiltrated it precisely to push that drift, manufacturing the scandal that proves Sanctuary secretly practices the soul magic it condemns. The Lantern is simultaneously Sanctuary's wounded conscience and the loaded gun pointed at its legitimacy.",
      player_use: "A morally grey ally: real mercy for the abandoned AND a corruption risk. The player can protect its healing mission, sever its corrupt edge, unmask the Abyss recruiter, or be used by it. Brother Calven stands with one foot here."
    }
  ]
}
```

> **Faction geometry (locked):** Concord/Magistracy (law) sits at the center.
> Cathedral (Light/mercy) and Inquisition (security) pull in opposite directions on
> the SAME virtue — protection. The Covenant pushes from below (open door); the
> Hollow Lantern is the underground the whole system creates by failing. The Keeper
> wins not by making any one faction evil, but by making the Inquisition and the
> Covenant *escalate against each other* until the Light greys between them.

---

## 21. NPC Role Index

Fifteen roles, each with a concrete named NPC. Cassia, Inquisitor Vale, and
Brother Calven are canon.

```ts
NPCRoleIndex [
  {
    domain: "Sanctuary", role_name: "Ruler / Civic Authority — Chief Magistrate Doran Quill",
    purpose_in_world: "Head of the Magistracy and the Concord's legal conscience; an aging, scrupulous jurist trying to keep the courts clean while the Inquisition presses to capture them.",
    purpose_in_gameplay: "The lawful path's gatekeeper; grants warrants, hears the great trials, can be persuaded to resist or enable Inquisitorial Oversight depending on the player's evidence and conduct.",
    likely_factions: ["High Concord & Magistracy"], likely_conflicts: ["Inquisition capture of the bench","whether to suspend the Covenant seat","ruling against his own class when the law demands"],
    relationship_options: ["respected mentor","reluctant ally","obstacle if the player breaks the law","disappointed judge"],
    death_impact: "His death removes the chief brake on legal cruelty; the Inquisition moves on the courts; the player may inherit responsibility for who fills the bench."
  },
  {
    domain: "Sanctuary", role_name: "Spiritual Authority — Luminarch Serapha Veil-Dawn",
    purpose_in_world: "High keeper of the Lumen Cor and the Light; a luminous, weary figure who knows some Beacons run on coercion and has not yet found the courage to say so.",
    purpose_in_gameplay: "Source of clean re-consecration, Vigils, and moral legitimacy; her public stance can swing the Cathedral toward the Covenant or the Inquisition. A potential confessor for the player.",
    likely_factions: ["Lumen Cathedral & Order of the Beacon"], likely_conflicts: ["the Brighter-Light heresy in her own order","whether to expose tainted Beacons and shake civic morale","Inquisition pressure"],
    relationship_options: ["spiritual guide","ally in restoring the Light","tragic figure who looks away","late convert to honesty"],
    death_impact: "Custody of the Cor is thrown open; the Brighter-Light heresy may capture the order; Beacon harmony drops sharply."
  },
  {
    domain: "Sanctuary", role_name: "Military Commander — Lord-Marshal Hadeon Vance",
    purpose_in_world: "Commander of the Doctrine of Holding; a disciplined defensive strategist who hates the offense and hates losing the March more.",
    purpose_in_gameplay: "Controls the walls, ward-lines, and relief operations; his choices (seal a gate, accept Void-lit wards, divert paladins) drive warfront state.",
    likely_factions: ["Paladin Orders / Ward-Command"], likely_conflicts: ["the temptation of Void-lit wards on the March","sealing gates on refugees","keeping the army shelter-focused vs garrison-focused"],
    relationship_options: ["staunch ally","grim pragmatist","commander who orders the gate sealed (Cassia's flashpoint)","redeemable hardliner"],
    death_impact: "The March may collapse or fall to a Void-leaning successor; defensive coordination fractures."
  },
  {
    domain: "Sanctuary", role_name: "Magic Expert — Beaconwarden Elias Morrow",
    purpose_in_world: "A master Lamplighter who understands the Light's chemistry — including the forbidden truth that scandal and coercion can fuel a Beacon.",
    purpose_in_gameplay: "Exposition and tools for Beacon work; can teach clean re-consecration or, if corrupted, build a brighter Void-lit Beacon for the player.",
    likely_factions: ["Order of the Beacon"], likely_conflicts: ["clean consecration vs the Brighter-Light shortcut","reporting tainted Beacons vs protecting his order"],
    relationship_options: ["mentor in the Light","tempted technician","whistleblower ally"],
    death_impact: "Knowledge of how to cleanly re-consecrate greyed Beacons becomes scarce; the Greying spreads unchecked."
  },
  {
    domain: "Sanctuary", role_name: "Trader / Broker — Asylum-Chamberlain Pell Voss",
    purpose_in_world: "Manager of refugee intake and civic insurance; a pragmatic broker who treats asylum and legitimacy as the leverage they are.",
    purpose_in_gameplay: "The economy in person: trades safe-passage, citizenship, and consecration for political favors; the player's route to asylum-for-leverage deals (and their cost).",
    likely_factions: ["Chamber of Covenants","High Concord"], likely_conflicts: ["asylum as covenant vs asylum as commodity","insurance solvency vs open intake in wartime"],
    relationship_options: ["useful broker","corrupt obstacle","reluctant reformer","blackmail target"],
    death_impact: "Intake and insurance seize up; a wartime refugee crisis spikes; smuggling fills the gap."
  },
  {
    domain: "Sanctuary", role_name: "Healer / Concealer — Brother Calven (CANON)",
    purpose_in_world: "A gentle Cathedral-trained healer who hides things to protect people — falsifying records, sheltering soul-magic patients, quietly practicing the soul-healing the Inquisition forbids. His mercy is real; so is the trap it sets.",
    purpose_in_gameplay: "The living embodiment of 'mercy without accountability.' Central to the forbidden-soulbinding chain: he hides the soul-scarred child, falsifies the medical records, and becomes the thread that, pulled, unravels into a court scandal and Abyss propaganda.",
    likely_factions: ["Lumen Cathedral","one foot in the Hollow Lantern"], likely_conflicts: ["conceal to protect vs confess to keep trust","clean slow healing vs forbidden fast mercy","Vale's investigation closing in"],
    relationship_options: ["beloved ally","tragic friend","accomplice in concealment","confessor who must be talked out of falsifying records","martyr"],
    death_impact: "If he dies hiding the truth, the concealment detonates posthumously and Abyss inherits it; if he dies confessing, he can clear a soul-flow wound and restore some trust. Healing capacity drops either way."
  },
  {
    domain: "Sanctuary", role_name: "Intelligence Figure — Inquisitor Vale (CANON)",
    purpose_in_world: "A suspicion-driven inquisitor convinced that mercy is how the dangerous slip through. Genuinely catches real Abyss infiltrators — and genuinely destroys innocents, and is building a case against the Refugee Covenant.",
    purpose_in_gameplay: "The Keeper-vector NPC: drives purity trials, surveillance, confession-extraction. Can be an ally against actual Abyss infiltration AND the engine of legal cruelty. Prosecutes the forbidden-soulbinding scandal. Can be exposed as provoking scandals for fuel.",
    likely_factions: ["Purity Inquisition"], likely_conflicts: ["security vs the Holding","real threats vs manufactured ones","capturing the courts and Beacons"],
    relationship_options: ["dangerous ally","feared enemy","a hardliner the player can redeem or expose","a zealot who becomes a martyr to his own cause"],
    death_impact: "The Inquisition may radicalize under a worse successor OR lose its driving will; a scandal he was suppressing (or provoking) may surface; the Covenant gets breathing room."
  },
  {
    domain: "Sanctuary", role_name: "Civilian Morale Figure — Gate-Warden Mother Iselle",
    purpose_in_world: "The beloved old keeper of the western gate who has welcomed thousands; the human face of the open door and of the city's weariness.",
    purpose_in_gameplay: "A barometer of civilian morale and the gate's mood; her trust signals whether ordinary Sanctuary still believes in the Holding.",
    likely_factions: ["Gate-Wardens","sympathetic to the Covenant"], likely_conflicts: ["welcoming vs screening","loyalty to the city vs loyalty to the refugees she's let in"],
    relationship_options: ["warm anchor","grieving witness","the voice that shames the player for a sealed gate"],
    death_impact: "Morale at the gate collapses; the Feast of Open Gates becomes a wake; the open-door faction loses its heart."
  },
  {
    domain: "Sanctuary", role_name: "Young Stakes Character — Liora, a refugee child",
    purpose_in_world: "A Vouched refugee child (or the dying child of the soulbinding chain) whose fate concretizes every abstraction — the child saved by forbidden soul-magic, the one the gate would shut out.",
    purpose_in_gameplay: "The emotional core of the central cause/effect chain; her survival, her soul-scar, and her testimony move courts, rumors, and soul-flow.",
    likely_factions: ["the Vouched / Refugee Covenant's care"], likely_conflicts: ["saved by forbidden magic vs left to die","her truthful testimony vs Calven's concealment"],
    relationship_options: ["ward to protect","the player's living conscience","a witness whose honesty can heal or condemn"],
    death_impact: "Her death (especially if from a denied mercy or a botched concealment) becomes a rumor, a martyr-image, and a soul-flow wound; soldiers and refugees rename the player accordingly."
  },
  {
    domain: "Sanctuary", role_name: "Rival / Edge Character — Advocate Mira Sael",
    purpose_in_world: "A fierce defense advocate for the Watched who fights the Inquisition in court and despises the player's methods if they cut corners — a rival who shares the player's goals but not their means.",
    purpose_in_gameplay: "A principled foil: pushes the player toward lawful, clean solutions; can become ally or rival depending on whether the player respects the law she's defending people with.",
    likely_factions: ["Magistracy (defense bar)","allied to the Covenant"], likely_conflicts: ["ends vs means","defending the guilty-but-wronged","losing faith in a corrupting court"],
    relationship_options: ["sharp ally","principled rival","romance (thorny)","the one who turns on the player for using forbidden magic"],
    death_impact: "The Watched lose their best defender; purity trials lose their counterweight; the player loses a conscience."
  },
  {
    domain: "Sanctuary", role_name: "Romance Candidate — Cassia of the Open Gate (CANON)",
    purpose_in_world: "A luminous Refugee Covenant figure who has devoted her life to the gates and the people who come through them. She may love the player — and still publicly oppose them over gate closures, because the Holding of strangers matters to her more than any single affection.",
    purpose_in_gameplay: "The canonical 'love can soften hostility but not erase ideology' romance. She conceals to protect refugees (the mercy-without-accountability trap), which can entangle the player in the scandal that destroys them both. Her public opposition over a sealed gate is a designed flashpoint.",
    likely_factions: ["Refugee Covenant"], likely_conflicts: ["love vs the cause","conceal to protect vs confess to keep trust","standing with the player vs standing against a gate closure they support"],
    relationship_options: ["lover who opposes you publicly","ally who conceals at her peril","a partner whose secret you must protect or expose","a love lost to a sealed gate"],
    death_impact: "If she dies (or is outlawed) over a concealment or a sealed gate, the Covenant radicalizes or collapses, a powerful rumor is born, and the player's reputation is permanently colored by how they treated her."
  },
  {
    domain: "Sanctuary", role_name: "Potential Betrayer — Ward-Captain Theron Holt",
    purpose_in_world: "A frontier commander bleeding on the March, tempted by Void-lit wards that actually hold the line. His 'betrayal' is not malice — it is a desperate man choosing safety over purity.",
    purpose_in_gameplay: "Embodies the Void escalation on the warfront; may light a Void-fueled Beacon, conceal it, and — when cornered — leak or sell evidence to survive, betraying the Holding to keep his people alive.",
    likely_factions: ["frontier ward-command"], likely_conflicts: ["holding the line vs keeping the Light clean","reporting his own Void-wards vs hiding them"],
    relationship_options: ["sympathetic ally","reluctant betrayer","a man the player can talk back from the edge","an informant Abyss turns"],
    death_impact: "The March may break; or his Void-wards, exposed, become Abyss propaganda; his fall is a study in how good people betray the covenant under pressure."
  },
  {
    domain: "Sanctuary", role_name: "Potential Defector — Sister Ana Vlow",
    purpose_in_world: "A young Cathedral confessor sickened by what confession-extraction has become; close to defecting to the Hollow Lantern to practice mercy outside a law she no longer trusts.",
    purpose_in_gameplay: "A bridge NPC between the Cathedral and the underground; her defection (or retention) signals which way the soul of the Cathedral is turning.",
    likely_factions: ["Lumen Cathedral → possibly the Hollow Lantern"], likely_conflicts: ["the law vs mercy","staying to reform vs leaving to act"],
    relationship_options: ["idealist ally","defector the player can follow or dissuade","a conscience radicalized by cruelty"],
    death_impact: "Her defection or death becomes a parable used by whichever side survives her; the Cathedral's young clergy take note."
  },
  {
    domain: "Sanctuary", role_name: "Potential Martyr — Paladin Sir Edran of the Standing Gate",
    purpose_in_world: "An old paladin who embodies the true Holding — the kind who dies on the line so refugees can cross, and means it.",
    purpose_in_gameplay: "A model of uncorrupted Sanctuary virtue; his death can re-anchor the domain's true meaning (or be cynically weaponized by the Inquisition as proof that 'the dangerous' must be controlled).",
    likely_factions: ["Paladin Orders"], likely_conflicts: ["holding the gate at the cost of his life","whose sacrifice gets honored and whose gets used"],
    relationship_options: ["revered mentor","steadfast ally","a martyr whose memory the player can keep honest"],
    death_impact: "A true Passage Vigil for him can RAISE Beacon harmony and re-anchor the Holding; but if the Inquisition captures his memory ('he died because we were too soft'), his sacrifice fuels the corruption he stood against."
  },
  {
    domain: "Sanctuary", role_name: "Villain / Corruption Vessel — Magister-Inquisitor Caldreth Vane",
    purpose_in_world: "The cold architect of the Brighter-Light doctrine and the scandal-economy — the senior Inquisition figure who has consciously decided that the Light must be fed on fear and that protection justifies anything. Where Vale is a driven believer, Caldreth is the calculated corruption made flesh.",
    purpose_in_gameplay: "The domain's internal antagonist: provokes soul-magic scandals to fuel Beacons and trials, drives Inquisitorial capture of courts, and is (knowingly or not) doing the Keeper's work. May be in quiet contact with Abyss without realizing he is its instrument.",
    likely_factions: ["Purity Inquisition (Brighter-Light cell)"], likely_conflicts: ["protection as control taken to its end","feeding the Light on scandal","capturing every institution"],
    relationship_options: ["arch-antagonist","a corruptor who believes he's the only true protector","a villain the player can expose, oppose, or be co-opted by"],
    death_impact: "His fall can break the scandal-economy and lift Keeper pressure — or martyr him into a harder doctrine; exposing him is one of the campaign's keystone victories."
  }
]
```

---

## 22. External Domain Relations

Sanctuary's relations all flow from one fact: it is the realm's **protector and
its foremost moral authority over soul magic** — which makes it indispensable, and
makes its hypocrisy the realm's most valuable target. Abyss is the central enemy;
every other relation is colored by the shadow of Sanctuary's own potential
authoritarian turn.

```ts
ExternalDomainRelation [
  {
    source_domain: "Sanctuary", target_domain: "Abyss",
    public_relationship: "hostile",  // effectively war, theological and military
    hidden_relationship: "Abyss does not merely want to beat Sanctuary militarily — it wants to BECOME the realm's soul-magic authority by exposing Sanctuary as a hypocrite. Quietly, Abyss prefers Sanctuary corrupt-but-standing (a tainted moral authority it can blackmail) over destroyed.",
    primary_conflict: "Two opposite answers to death and souls: Sanctuary holds, witnesses, and lets the dead pass; Abyss claims, ledgers, and harvests. Sanctuary's whole legitimacy is built on condemning what Abyss does.",
    primary_dependency: "Sanctuary depends on its OWN purity to condemn Abyss; the moment it practices forbidden soul-magic, that dependency becomes a fatal vulnerability.",
    resource_leverage: "Abyss leverages Sanctuary's hidden corruption (Void-lit Beacons, falsified soul-magic records, the Hollow Lantern's drift) as propaganda; Sanctuary leverages its safe-routes and consecration legitimacy against Abyss's ledger-economy.",
    magic_tension: "Sanctuary's Light banishes and denies Abyssian undead and memory-theft; Abyss's soul-binding is the exact sin Sanctuary forbids. They are magical antitheses.",
    military_tension: "The Greylight March is the live warfront; Abyss raids to harvest the dead and grey the Beacons.",
    historical_wound: "The founding soul-raids in which Abyss took names and blocked the dead — the trauma Sanctuary was built to answer.",
    possible_alliance_condition: "Effectively none — only a fragile, temporary truce against a greater catastrophe (a Void breach, a rogue relic) could make them tolerate each other, and even then Abyss would be looking for the knife.",
    possible_break_condition: "n/a (already broken); any 'cooperation' breaks the instant Abyss tries to harvest or Sanctuary discovers it.",
    keeper_exploit: "The Keeper's crown jewel: expose Sanctuary's hypocrisy over soul magic so its moral authority transfers to Abyss, removing the realm's foremost prison-reinforcing civilization. Drive Sanctuary's authoritarian turn so it mirrors the Keeper's own worldview.",
    void_exploit: "Sell Sanctuary the Void-lit wards that 'hold the March,' then leak them to Abyss as proof of hypocrisy — the same shortcut that saves the frontier damns the domain."
  },
  {
    source_domain: "Sanctuary", target_domain: "Radiance",
    public_relationship: "friendly",
    hidden_relationship: "Natural allies against Abyss, but Sanctuary fears Radiance's sacrifice-as-glory and uninvited 'cleansing' flame, while Radiance finds Sanctuary slow, legalistic, and soft. A respectful, slightly wary partnership.",
    primary_conflict: "Method: Radiance burns and sacrifices; Sanctuary holds and shelters. Radiance's hero-spectacle unsettles Sanctuary's quiet-holding ethic, and Radiance's purge-doctrine looks dangerously like a fire that doesn't ask permission.",
    primary_dependency: "Sanctuary imports Radiance sacred-fire goods and relief flame to break sieges; Radiance values Sanctuary's safe corridors and consecration legitimacy.",
    resource_leverage: "Sanctuary can grant/withhold consecration and safe-passage; Radiance can grant/withhold military relief.",
    magic_tension: "Radiance's overcharged (sometimes Void-amplified) flame frightens Sanctuary; Sanctuary worries about uninvited burning inside its walls.",
    military_tension: "Low — they fight on the same side, but Sanctuary hesitates to accept flame-support after Radiance Void-amplification scandals (see Chunk 1 §14).",
    historical_wound: "A relief operation where Radiance flame saved a city but burned a sheltered quarter — 'saved by fire that did not ask.'",
    possible_alliance_condition: "A shared anti-Abyss front with agreed limits on flame use inside Sanctuary walls.",
    possible_break_condition: "Radiance using Void-amplified or undisciplined flame on Sanctuary ground; Sanctuary's authoritarian turn alienating Radiance's honor culture.",
    keeper_exploit: "Drive mutual suspicion (Sanctuary fears the flame; Radiance scorns the slowness) so the two anti-Abyss pillars never fully combine.",
    void_exploit: "Tempt Radiance to 'cleanse' a Sanctuary threat with overcharged flame, creating a soul-flow wound and a rupture between the allies."
  },
  {
    source_domain: "Sanctuary", target_domain: "Verdance",
    public_relationship: "friendly",
    hidden_relationship: "Quiet kinship — both are care-and-continuity civilizations — but Verdance's organic, cyclical view of death (decay as part of the cycle) unsettles Sanctuary's witness-and-pass theology, and Sanctuary's surveillance unsettles Verdance's communal freedom.",
    primary_conflict: "Death and decay: Verdance can treat rot as adaptation; Sanctuary sees any held/blocked passage as Abyssian. They disagree about whether decay is sacred or dangerous.",
    primary_dependency: "Sanctuary imports Verdance medicines and living materials (vital for clean soul-healing — the scarce alternative to forbidden soul-binding); Verdance values Sanctuary's protection and law.",
    resource_leverage: "Verdance can supply (or withhold) the medicines that make CLEAN mercy possible — directly relevant to the Calven dilemma; Sanctuary can shelter Verdance refugees and consecrate its trade.",
    magic_tension: "Verdance's weaponized rot vs Sanctuary's purity instincts; Sanctuary's wards vs Verdance's living networks.",
    military_tension: "Low; occasional friction over corrupted-growth refugees crossing into Sanctuary.",
    historical_wound: "A blight-refugee crisis where Sanctuary's screening (driven by purity fear) turned away Verdance's sick — a wound the Covenant remembers.",
    possible_alliance_condition: "Shared anti-Abyss front; Verdance medicine in exchange for Sanctuary shelter and clean-soul-healing partnership.",
    possible_break_condition: "Sanctuary purity trials targeting Verdance's rot-touched refugees; Verdance harboring corruption Sanctuary deems Abyssian.",
    keeper_exploit: "Frame Verdance's rot-touched as soul-magic threats to fuel Sanctuary purity trials, splitting two natural allies and pushing refugees toward the Hollow Lantern.",
    void_exploit: "Whisper to Sanctuary that Verdance's acceptance of decay 'proves' it harbors the corruption Sanctuary must surveil."
  },
  {
    source_domain: "Sanctuary", target_domain: "Tempest",
    public_relationship: "tense",
    hidden_relationship: "Philosophical opposites who need each other: Tempest exalts freedom and the chosen bond; Sanctuary exalts protection and the binding oath. Each thinks the other is the cautionary tale — Tempest sees Sanctuary as a beautiful cage; Sanctuary sees Tempest as reckless people who let the vulnerable fall.",
    primary_conflict: "Freedom vs protection in its purest form. Tempest's 'no one has the right to stop me' is the mirror-image of Sanctuary's 'we must control dangerous choices.' Each domain's Void-lie is the other's nightmare.",
    primary_dependency: "Sanctuary needs Tempest's sky-couriers to light and supply distant frontier Beacons; Tempest needs Sanctuary's safe harbors and consecrated treaties.",
    resource_leverage: "Tempest controls the air and fast couriers (vital for the March's Beacons); Sanctuary controls harbors, law, and asylum.",
    magic_tension: "Oath-magic (binding) vs bond-magic (chosen) — Sanctuary's coerced-oath corruption is exactly what Tempest most despises; Tempest's bond-domination is exactly what Sanctuary calls reckless.",
    military_tension: "Border friction over Tempest free-fliers ignoring Sanctuary's sealed corridors and oath-checkpoints.",
    historical_wound: "Sanctuary once 'protectively' grounded a Tempest squadron in a storm 'for their safety' — Tempest read it as imprisonment; some riders died resenting it.",
    possible_alliance_condition: "A shared anti-Abyss front built on explicit respect for both free bonds and clean oaths; sky-courier support for the Beacons.",
    possible_break_condition: "Sanctuary coercing oaths from Tempest fliers; Tempest recklessness endangering sheltered civilians.",
    keeper_exploit: "Sharpen freedom-vs-protection into open contempt so the two never ally — and so each domain's extreme 'proves' the other's Void-lie.",
    void_exploit: "Tell Sanctuary that Tempest's freedom is the very danger it must control; tell Tempest that Sanctuary's oaths are the chains it must reject."
  },
  {
    source_domain: "Sanctuary", target_domain: "Void (the Void-layer)",
    public_relationship: "hostile",
    hidden_relationship: "Sanctuary believes it is immune to the Void because it is the domain of order and protection — which is exactly why the Void's protective lie ('watch them, bind them, keep them safe') slips past its guard so easily. Sanctuary's corruption is the SLOWEST and most respectable in the realm.",
    primary_conflict: "The Void offers protection-without-consent: brighter Beacons, firmer oaths, faster mercy. Sanctuary's certainty that it is good is the crack the Void widens.",
    primary_dependency: "None willingly — but frontier ward-commands and desperate healers become dependent on Void shortcuts (Void-lit wards, forbidden mercy-soulbinding) before they realize it.",
    resource_leverage: "The Void leverages Sanctuary's fear; Sanctuary's only counter-leverage is honest, consent-based protection that the Void cannot offer.",
    magic_tension: "Void-enhanced Light/oath/soul-magic works — that is the trap. Consent-skipping rites deliver real safety and accrue void_dependency.",
    military_tension: "Void-lit ward-lines on the March hold the enemy and bind the domain.",
    historical_wound: "Every greyed Beacon is a small monument to a moment Sanctuary chose a Void shortcut to feel safe.",
    possible_alliance_condition: "Never an ally — only a temptation Sanctuary either resists or rationalizes as protection.",
    possible_break_condition: "Resisting the Void means accepting that some people CANNOT be perfectly protected without owning them — the hardest lesson in the domain.",
    keeper_exploit: "The Void is the Keeper's delivery mechanism for the whole Sanctuary corruption: it makes 'protection through control' feel not just acceptable but loving.",
    void_exploit: "'If protection matters, you cannot allow dangerous people to choose freely.' Said gently, parentally, and with results to back it up."
  }
]
```

### Exploitation Matrix (how Sanctuary exploits / is exploited)

| Domain | How Sanctuary exploits THEM | How THEY exploit Sanctuary |
|---|---|---|
| **Abyss** | Denies them the dead via Beacon-light & Vigils; banishes their undead; condemns them to strip their legitimacy; blockades via safe-route control. | **Exposes Sanctuary's hypocrisy over soul magic** to transfer moral authority; harvests greyed-Beacon dead; leaks Sanctuary's Void-lit wards and falsified records as propaganda; drives the authoritarian turn that mirrors the Keeper. |
| **Radiance** | Withholds/grants consecration & safe corridors; uses relief flame for sieges. | Pressures Sanctuary to accept overcharged flame inside its walls; scorns its slowness; can cause a soul-flow wound that ruptures the alliance. |
| **Verdance** | Imports medicines for clean soul-healing; shelters its refugees; consecrates its trade. | Withholds the medicines that make CLEAN mercy possible (forcing the forbidden-soulbinding choice); its rot-touched refugees become fuel for Sanctuary purity trials. |
| **Tempest** | Uses sky-couriers to light/supply frontier Beacons; offers harbors & lawful treaties. | Flouts sealed corridors and oath-checkpoints; its freedom-doctrine destabilizes Sanctuary's control; can shame Sanctuary as a cage to weaken its legitimacy. |
| **Void** | (Cannot exploit it — only resist it.) | Offers consent-skipping protection that works, accruing void_dependency and greying Beacons; weaponizes Sanctuary's self-certainty. |

> **Central strategic truth:** Sanctuary's anti-Abyss moral stance is its greatest
> asset AND its greatest liability. The entire Abyss/Keeper strategy against
> Sanctuary is not to defeat its armies but to make it a HYPOCRITE — because a
> Sanctuary that secretly does what it condemns hands Abyss the realm's moral
> authority over soul magic and removes the prison's foremost reinforcing pillar.

---

## 23. Internal Power Struggles

```ts
PowerStruggle [
  {
    domain: "Sanctuary", title: "The Sealed Gate — Asylum vs Security",
    factions_involved: ["Refugee Covenant","Purity Inquisition","High Concord","Ward-Command"],
    issue: "Whether to seal the western gates and suspend intake during a soul-magic scare on the March.",
    public_argument: "Inquisition: 'Open gates let infiltrators and soul-magic in; seal them to protect the city.' Covenant: 'Sealing the gate abandons people to Abyss and breaks the Holding — fear is exactly the crack Abyss walks through.'",
    hidden_argument: "The Inquisition (via Caldreth) wants the scare BECAUSE a sealed gate normalizes emergency control and the resulting underground gives it scandals to prosecute. The Covenant is quietly smuggling rejected refugees, which, if exposed, proves the Inquisition right.",
    resources_at_stake: ["the gates","intake","Covenant funds","Inquisition emergency budget","the open-door covenant's credibility"],
    magic_systems_at_stake: ["gate-wards","vouching-oaths","intake testimony-binding"],
    npc_flashpoints: ["Cassia (publicly opposes the player if they back the closure, even if she loves them)","Vale (prosecuting intake)","Mother Iselle (the gate's grieving conscience)","Lord-Marshal Vance (who must give the seal order)"],
    possible_player_sides: ["back the closure (safety, the Inquisition's gratitude, Cassia's public break)","keep the gates open (the Holding intact, raised raid-risk, Inquisition enmity)","broker a screening compromise (slow, fragile, satisfies no one fully)","expose the manufactured scare"],
    compromise_possible: true,
    keeper_best_outcome: "Gates sealed AND the Covenant's smuggling exposed — the Holding broken and the open-door faction discredited in one stroke.",
    void_best_outcome: "A Void-lit screening-Beacon installed at the gate that 'safely' surveils all intake — protection-by-control normalized.",
    peaceful_resolution: "A transparent, consent-based screening with Covenant participation and a sunset clause; the gate stays open under watch the people trust.",
    violent_resolution: "Gate sealed by force; refugees turned away; a riot or a martyrdom; the underground swells.",
    third_order_effect: "Rejected refugees flow to the Hollow Lantern; a soul-magic scandal becomes more likely; Beacon harmony at the gate drops.",
    fifth_order_effect: "If the closure and the Covenant's concealment both surface, Abyss broadcasts 'Sanctuary breaks its own Holding and hides soul-magic' — moral authority drops, Keeper pressure rises, and the gate's Beacon greys."
  },
  {
    domain: "Sanctuary", title: "The Bench — Inquisitorial Capture of the Courts",
    factions_involved: ["Purity Inquisition","Civic Magistracy","Lumen Cathedral"],
    issue: "Whether to grant the Inquisition standing 'Inquisitorial Oversight' over trials of soul-adjacent crimes.",
    public_argument: "Inquisition: 'Ordinary courts are too slow and too soft for soul-threats.' Magistracy (Quill): 'Oversight without proof is legal cruelty — it makes the accusation the verdict.'",
    hidden_argument: "Caldreth wants the courts to provide a legal pipeline for the scandals the Inquisition provokes; Quill knows that ceding the bench ends the rule of law.",
    resources_at_stake: ["the Hall of Sworn Truth","evidentiary standards","the record vaults (including falsified ones)"],
    magic_systems_at_stake: ["testimony-binding","oath-magic","confession (extraction vs release)"],
    npc_flashpoints: ["Quill (the brake)","Vale (the prosecutor)","Mira Sael (the defense)","Caldreth (the architect)"],
    possible_player_sides: ["help Quill resist (lawful, slow, risky)","back Oversight (efficient, cruel)","expose the falsified records to discredit the pretext","defend a specific accused to set precedent"],
    compromise_possible: true,
    keeper_best_outcome: "Oversight granted — cruelty becomes lawful, the Oath-Law becomes an Abyssian ledger with better lighting.",
    void_best_outcome: "Truth-light 'enhanced' to confirm guilt before testimony — a court that cannot acquit.",
    peaceful_resolution: "Oversight denied or tightly bounded with a sunset and defense protections; Quill's authority reaffirmed.",
    violent_resolution: "Quill removed/martyred; the bench captured; a wave of purity trials.",
    third_order_effect: "Defense advocates flee or radicalize; the Watched stop trusting courts and go underground; confession dries up.",
    fifth_order_effect: "Legal cruelty scars identities at scale (shame-scars), trust collapses, and the Light greys into interrogation-light across the capital."
  },
  {
    domain: "Sanctuary", title: "The Brighter Light — How to Fuel the Beacons",
    factions_involved: ["Order of the Beacon","Purity Inquisition (Brighter-Light cell)","frontier Ward-Command"],
    issue: "Whether to feed strained frontier Beacons on coerced confession and scandal-fuel (or Void-wards) to keep them bright.",
    public_argument: "Brighter-Light: 'A dim Beacon means dead refugees and a lost March; feed it however we must.' Faithful wardens: 'A Beacon fed on coercion watches instead of warms — it stops being the Light at all.'",
    hidden_argument: "Caldreth and Theron Holt both know the bright Beacons are tainted; admitting it means accepting the March may fall. The Luminarch suspects and has not spoken.",
    resources_at_stake: ["frontier Beacons","Beacon harmony","the March","the Light's purity itself"],
    magic_systems_at_stake: ["Beacon/Light magic","confession rites","Void-lit wards"],
    npc_flashpoints: ["Elias Morrow (the technician who knows)","Theron Holt (tempted commander)","Luminarch Serapha (the silence)","Caldreth (the architect)"],
    possible_player_sides: ["re-consecrate with free oaths (clean, costly, risks the March)","keep the bright tainted Beacons (safe now, greys later, hands Abyss evidence)","expose the tainted Beacons (shakes morale, may save the Light)","find a Verdance-medicine or relief alternative"],
    compromise_possible: true,
    keeper_best_outcome: "Tainted Beacons kept AND later leaked to Abyss — the Light proven impure, moral authority transferred.",
    void_best_outcome: "The frontier permanently dependent on Void-lit Beacons it cannot turn off.",
    peaceful_resolution: "Clean re-consecration with allied relief covering the gap; the Luminarch finally speaks; harmony restored.",
    violent_resolution: "The March falls when a tainted Beacon is dismantled, OR a tainted Beacon greys catastrophically mid-siege.",
    third_order_effect: "The Greying spreads inland; lingering dead appear; an Abyss agent documents the evidence.",
    fifth_order_effect: "Exposed tainted Light collapses Sanctuary's claim to soul-magic authority; soul-flow integrity and reality stability drop; Keeper pressure rises."
  }
]
```

---

## 24. Rumor Ecology

```ts
DomainRumorEcology {
  domain: "Sanctuary"
  common_spread_channels: ["confession circles (a secret 'confessed' becomes a rumor)","the Gate-Markets & tier-markets","oath-court galleries (trial gossip)","Beacon-vigils & festivals","the Roll-reading","Inquisition denunciation networks","Covenant shelters","the Hollow Lantern's whisper-lines"]
  trusted_sources: ["a sworn witness under true Light","a Beaconwarden","a respected magistrate","a citizen of long standing who vouches"]
  distrusted_sources: ["the Watched & outsiders (believed guilty by default)","known concealers","anonymous denunciations (yet acted on anyway)","Abyss-tainted whispers"]
  rumor_emotional_styles: ["paranoia (infiltration fears)","shame (the named-and-shamed)","fear (the greying, the lingering dead)","devotion (the true Holding, the martyr-paladin)","suspicion (who is hiding what)","grief (the lost and un-vigiled)"]
  rumor_suppression_methods: ["Writ of Sealing on a story","confession-circle confidentiality (when honored)","public vindication that kills a false rumor","Cathedral pronouncement","Inquisitorial gag (which paradoxically intensifies suspicion)"]
  rumor_weaponization_methods: ["the Inquisition's scandal-economy (provoke, then prosecute, a soul-magic rumor)","Abyss seeding 'Sanctuary secretly practices soul magic'","the Covenant counter-rumoring to protect refugees","public-shame processions that make a rumor a verdict"]
  rumor_mutation_patterns: ["'a child was healed' → 'a child was soul-bound' → 'the stranger stole a child's soul' → 'Sanctuary hides soul-thieves' (the canonical escalation)","'a Beacon burns bright' → 'a Beacon was fed on fear' → 'the Light is a lie'","'a refugee was smuggled' → 'the Covenant harbors Abyss'","'a gate was sealed' → 'the Holding is broken'"]
  factions_best_at_rumor_warfare: ["the Purity Inquisition (turns rumor into legal jeopardy)","Abyss agents (turn Sanctuary's truths into hypocrisy narratives)","the Refugee Covenant (defensive counter-rumor)"]
}
```

The signature Sanctuary rumor dynamic: **because confession and truth are sacred, a
rumor here carries quasi-legal weight.** A whisper is not just gossip; it is a
proto-accusation that can trigger a purity trial. And because the domain's deepest
fear is hidden soul-magic, the most explosive rumors are always about *concealed
corruption* — which is why the canonical "the stranger stole a child's soul"
escalation is so devastating: it weaponizes Sanctuary's own founding trauma against
it.

---

## 25. Relationship Logic

```ts
DomainRelationshipLogic {
  domain: "Sanctuary"
  trust_is_built_by: ["keeping sworn oaths to completion","telling dangerous truths plainly","vouching for someone and being proven right","sheltering the vulnerable at real cost","submitting to lawful accountability instead of hiding","helping the dead pass / re-lighting a Beacon"]
  trust_is_broken_by: ["a proven false oath","concealing corruption that endangers civilians","using forbidden soul-magic (even mercifully)","coercing oaths or extracting confession","abandoning a sheltered person","feeding a Beacon on scandal/coercion"]
  enemies_become_tolerable_when: ["a shared Abyss/Void threat overrides ideology","an oath-bound truce binds them (Sanctuary trusts a sworn vow even from a rival)","a rival submits to lawful accountability","protecting the same vulnerable people forces cooperation"]
  allies_become_suspect_when: ["they conceal something that endangers the held","they use or condone forbidden soul-magic","they put their faction above the Holding","they coerce where they should persuade","a rumor of hidden corruption attaches to them"]
  romance_conflicts: ["love vs ideology (Cassia loves the player AND opposes a gate closure)","a lover's protective concealment endangering the trust the relationship rests on","cross-class love staking a citizen's standing on a refugee's truthfulness","loving someone the Inquisition is investigating"]
  betrayal_triggers: ["a secret that would break civic trust is about to surface","faction pressure (the Inquisition leverages a held secret)","a sacred violation (a lover uses forbidden soul-magic)","an unbearable oath-burden or debt","fear for sheltered people overriding loyalty (Theron, Cassia)","the Void offering a protection-shortcut"]
  forgiveness_conditions: ["honest confession WITH accountability (not concealment)","a kept oath that repairs a broken one","public vindication of a wrong","a true Passage Vigil or re-consecration that heals the harm done","restoring a trust that was broken"]
  permanent_enemy_conditions: ["name-erasure or soul-harvest (the Abyssian sin — unforgivable)","betraying the Holding to Abyss","repeated coerced-oath/soul-binding with no remorse","feeding the Light on harvested fear knowingly"]
  if_then_because_examples: [
    { if: "the player hides corruption that endangers civilians (e.g. conceals a soul-magic scandal or falsified records)", then: "Sanctuary suspicion rises sharply and civic trust drops domain-wide", because: "protection depends on civic trust, and a concealed danger is a betrayal of the Holding itself — the hidden lie is exactly the crack the Keeper and Abyss exploit." },
    { if: "the player saves a dying child with forbidden soulbinding", then: "Brother Calven hides the child and the mother is grateful but afraid, while Inquisitor Vale hears partial reports", because: "mercy was real but the method was the forbidden Abyssian sin; the merciful conceal to protect, and the suspicious move to investigate — the twin-trap activates." },
    { if: "the player keeps a sworn oath at ruinous personal cost", then: "even rivals and the Inquisition extend grudging respect and trust rises", because: "Sanctuary's whole order rests on oaths being real; a kept oath under cost is the domain's highest proof of character." },
    { if: "the player backs sealing the gates on refugees still outside", then: "Cassia opposes the player publicly even though she loves them", because: "the Holding of strangers is sacred to the Covenant; love can soften her hostility but cannot erase the belief that abandoning the vulnerable breaks Sanctuary's covenant." },
    { if: "the player exposes a wrongly-shamed person and restores their standing", then: "Beacon harmony rises locally and civic trust recovers", because: "true protection includes truth and mercy-with-accountability; vindication heals a shame-scar and proves the Light still warms rather than watches." },
    { if: "the player accepts a Void-lit ward to hold the March", then: "the line holds now but the frontier Beacon greys over time and an Abyss agent documents it", because: "the Void gives real safety while converting witnessing into harvesting; the shortcut that saves the frontier becomes the evidence that damns the domain." },
    { if: "the player coerces an oath or condones confession-extraction to stop a threat", then: "the threat may be stopped but the coerced soul is bound wrongly and suspicion of authoritarian protection rises", because: "a coerced oath is soft soul-binding; Sanctuary's law forbids it precisely because protection-by-control mirrors the Keeper's worldview." },
    { if: "an Abyss agent leaks proof of Sanctuary's hidden soul-magic (Void-Beacons, falsified records)", then: "Sanctuary's moral authority over soul magic collapses and Abyss inherits it", because: "Sanctuary's standing depends entirely on its purity in condemning Abyss; proven hypocrisy transfers the high ground to the enemy and raises Keeper pressure." },
    { if: "the player gives a true Passage Vigil to a fallen paladin (Sir Edran)", then: "Beacon harmony rises and the domain's true meaning re-anchors", because: "honoring a sacrifice that sheltered others keeps the Holding genuine; clean death passage strengthens soul-flow and denies Abyss the dead." },
    { if: "the player publicly confesses and submits to lawful ritual review after using forbidden magic", then: "the player loses standing short-term but civic trust is preserved and the soul-flow wound can be healed", because: "Sanctuary forgives accountability but never concealment; truth-with-consequence is the one path that keeps the lie from festering into Abyss's next propaganda." },
    { if: "the player helps the Inquisition catch a REAL Abyss infiltrator", then: "the Inquisition's trust and the city's morale rise, but the Inquisition gains fuel and budget for future overreach", because: "the Inquisition's point is real (genuine threats exist), so aiding it is both a true protection and a feeding of the engine that later turns inward." },
    { if: "the player exposes the Inquisition provoking scandals for fuel", then: "the scandal-economy is disrupted and Keeper pressure eases, but the player makes a powerful, vengeful enemy in Caldreth/Vale", because: "cutting the corruption's fuel supply is a keystone victory, and the corrupt protect their machine ferociously." }
  ]
}
```

---

## 26. Player Origin Rules

```ts
PlayerOriginRules {
  domain: "Sanctuary"
  starting_bonuses: ["the Oath of Holding (a binding protective vow that anchors formations and seals)","minor Light/ward access (a home-Beacon, basic wards)","civic standing & the right to vouch and testify","trusted by lawful institutions","resistance to Abyssian memory-theft while in the Light"]
  starting_burdens: ["oath_burden from the Oath of Holding (vows constrain you)","the duty to vouch (and the risk if those you vouch for fail)","reputation tied to civic trust (abuse burns standing fast)","watched more closely than outsiders are (the Light cuts both ways)","forbidden from soul-magic — using it is catastrophic for a Sanctuary native"]
  default_domain_resonance: { "Sanctuary": 70, "Radiance": 55, "Verdance": 52, "Tempest": 40, "Abyss": 8 }
  starting_faction_assumptions: ["the Concord/Magistracy assumes lawful loyalty","the Cathedral assumes faith in the Light","the Inquisition assumes you'll cooperate with vigilance (and watches if you don't)","the Covenant hopes you'll keep the Holding genuine","the Hollow Lantern assumes you're a threat until proven otherwise"]
  common_npc_reactions: ["citizens extend default trust and expect oaths kept","refugees hope you'll vouch for them","the Inquisition tests your willingness to suspect","Cassia is drawn to you but braced for ideological conflict"]
  starting_rumors: ["'a new oath-sworn protector walks the tiers'","(if you arrived with outsiders) 'who are they vouching for?'","(if any soul-magic touched your origin) a faint 'is there something hidden about them?'"]
  starting_magic_access: ["oath-magic (vouching, formation-anchoring, sealing)","basic Light/ward rites","confession (as penitent or, with training, as confessor)"]
  restricted_magic_access: ["high Beacon consecration (Cathedral-licensed)","testimony-binding (Magistracy-licensed)","ALL forbidden soul-magic (soulbinding, name-work, extraction) — black-market only and ruinous"]
  unique_origin_questions: ["Who vouched for you onto the Roll of the Held — and do you owe them?","Have you ever broken an oath, and does anyone know?","Whom have you vouched for, and what if they were lying?","Where do you stand on the gates: open or sealed?","Have you ever been tempted to protect someone by hiding the truth?"]
  possible_dark_secret_options: ["you once used (or witnessed) forbidden soul-magic to save someone and never reported it","you falsified or destroyed a record to protect someone (a Calven-shaped secret)","you swore a coerced oath, or coerced one, on the March","someone you vouched for is hiding from the Inquisition","a loved one is in the Hollow Lantern","you carry a soul-scar from a mercy that crossed the line"]
}
```

---

## 27. VERDAX Tracking Fields

Concrete starting-state example for a mid-pressure Sanctuary campaign (phase:
`regional_pressure`). These are the numbers VERDAX would seed and then mutate.

```ts
DomainTrackingState {
  campaign_id: "example-sanctuary-001"
  domain: "Sanctuary"
  domain_stone_stability: 68     // Lumen Cor / Beacon network: functional but straining
  soul_flow_integrity: 64        // good in the core, greying on the March
  keeper_pressure: 33            // rising via the twin-trap, not yet acute
  void_parasitism: 27            // Void-lit wards on the March; creeping dependency
  political_stability: 58        // the three-cornered standoff holding, barely
  military_strength: 62          // strong defensively, immobile, food-dependent
  economic_strength: 66          // safe-route trade healthy; wartime strain looming
  magical_strength: 70           // Light/oath traditions strong; clean soul-healing scarce
  civilian_morale: 60            // warm core, frightened frontier
  resource_security: 55          // food import dependence is the vulnerability
  intelligence_strength: 71      // strong counter-infiltration — turning inward
  true_virtues_json: {
    "protection": 74, "unity": 61, "truth": 66, "mercy": 58,
    "law": 70, "oath": 72, "civic_trust": 59, "light_eternal": 67
  }
  corrupted_virtues_json: {
    "authoritarian_protection": 31, "forced_conformity": 22, "purity_trials": 35,
    "legal_cruelty": 24, "public_shame": 27, "mercy_without_accountability": 33,
    "surveillance": 30
  }
  active_warfront_ids: ["wf-greylight-march"]
  active_power_struggle_ids: ["ps-sealed-gate","ps-the-bench","ps-brighter-light"]
  active_rumor_ids: ["rm-stranger-stole-a-soul","rm-light-is-a-lie"]
  active_soul_flow_wound_ids: ["sfw-greyed-march-beacon","sfw-soulbound-child"]
  active_domain_crisis_ids: ["dc-inquisition-overreach","dc-covenant-seat-suspension"]
  current_strategy: "Hold the March, keep the capital calm, contain soul-magic scandals"
  immediate_priority: "Prevent the gate-closure crisis from exposing the Covenant's concealment"
  long_term_priority: "Restore Beacon harmony with free oaths before the Greying spreads inland"
}
```

```ts
DomainVirtueState {
  campaign_id: "example-sanctuary-001", domain: "Sanctuary"
  true_virtues: [
    { name: "protection", strength: 74, public_health: 70, faction_support: { "Concord": 80, "Cathedral": 78, "Inquisition": 85, "Covenant": 88, "HollowLantern": 40 } },
    { name: "civic_trust", strength: 59, public_health: 55, faction_support: { "Concord": 70, "Cathedral": 72, "Inquisition": 30, "Covenant": 75, "HollowLantern": 20 } },
    { name: "oath", strength: 72, public_health: 70, faction_support: { "Concord": 85, "Cathedral": 80, "Inquisition": 60, "Covenant": 65, "HollowLantern": 25 } }
  ]
  corrupted_virtues: [
    { name: "purity_trials", source_true_virtue: "truth", strength: 35,
      active_factions: ["Purity Inquisition"], active_rumors: ["rm-stranger-stole-a-soul"], keeper_exploit_risk: 62 },
    { name: "authoritarian_protection", source_true_virtue: "protection", strength: 31,
      active_factions: ["Purity Inquisition","frontier Ward-Command"], active_rumors: ["rm-light-is-a-lie"], keeper_exploit_risk: 58 },
    { name: "mercy_without_accountability", source_true_virtue: "mercy", strength: 33,
      active_factions: ["Refugee Covenant","Hollow Lantern"], active_rumors: ["rm-stranger-stole-a-soul"], keeper_exploit_risk: 60 }
  ]
  current_virtue_crisis: "Protection is splitting into the Inquisition's control-engine and the Covenant's conceal-engine; civic trust is the casualty."
  current_keeper_exploit: "To protect people I must control the choices that could endanger them — driving both engines until trust dies between them."
}
```

### Beacon-Harmony Metric (Sanctuary-specific stability index)

A dedicated soft-metric VERDAX tracks for Sanctuary, distinct from raw Stone
stability. **Beacon Harmony** measures how unified, trusting, and truthfully-lit
the Beacon network is — the visible proof that the safest civilization is still
safe.

```ts
BeaconHarmonyState {
  campaign_id: "example-sanctuary-001"
  overall_harmony: 63          // 0-100; below ~50 the Greying begins to spread
  core_harmony: 78             // Lucentglobal & the inner tiers (high)
  frontier_harmony: 41         // Greylight March (low — tainted, straining)
  gate_harmony: 52             // the Wardward (volatile, scandal-sensitive)
  free_oath_fuel_ratio: 0.74   // share of Beacons fed on FREELY GIVEN oaths (rest is coerced/scandal/Void)
  greyed_beacon_count: 2       // confirmed greyed/tainted (both on the March)
  lingering_dead_sites: 1      // un-vigiled dead behind the March line
  drivers_up: ["public vindication of the wrongly-shamed","true Passage Vigils","clean re-consecration with free oaths","kept oaths at cost","keeping the gates genuinely open"]
  drivers_down: ["concealed corruption surfacing","coerced oaths & confession-extraction","Void-lit Beacons","sealed gates / abandoned refugees","purity trials of the innocent","exposed hypocrisy over soul magic"]
  keeper_pressure_link: "Every 10-point drop in overall_harmony raises Sanctuary keeper_pressure ~+4 and lowers soul_flow_integrity ~+3, via: trust drop → Beacon greying → lingering dead → soul-flow disruption → prison-lattice strain."
  visibility_to_player: "partial"  // citizens feel the harmony as 'mood'; the fuel-ratio truth is hidden
}
```

---

## 28. Data Schemas

Sanctuary-specific schema instances (static lore → seed JSON at
`/domain-lore/sanctuary.json`; mutable state in the tables of Chunk 3).

```ts
// Stone
DomainStoneState  → see §4 (source_type: "Beacon", current_stability 68, corruption 19)

// Soul flow
DomainSoulFlowProfile → see §5

// Magic
MagicSystemState {
  domain: "Sanctuary", system_name: "The Threefold Light",
  source: "Lumen Cor / Beacon network", training_access: "regulated",
  scarcity_level: 44, public_trust: 71,
  faction_control: { "Order of the Beacon": 34, "Magistracy": 28, "Inquisition": 22, "Covenant": 9, "HollowLantern": 7 },
  cost_types: ["oath_burden","social_trust","domain_stone_strain","soul_integrity","void_dependency"],
  abuse_modes: ["coerced oath-binding","confession-extraction","surveillance-Beacons","forbidden mercy-soulbinding","Beacon scandal-feeding"]
}  // full in §10

// Faction (example instance)
FactionState {
  id: "fac-purity-inquisition", campaign_id: "example-sanctuary-001",
  name: "The Purity Inquisition", domain: "Sanctuary",
  doctrine: "Protection through vigilance; break the guilty before they endanger the held",
  ideal_future: "A perfectly screened, perfectly safe Sanctuary under permanent Oversight",
  public_goal: "Root out Abyss infiltration and illicit soul-magic",
  hidden_goal: "Normalize emergency control and feed the scandal-economy that justifies it",
  leader_npc_ids: ["npc-caldreth-vane"], champion_npc_ids: ["npc-inquisitor-vale"],
  class_base: { "Sworn Estates": 50, "Held": 35, "security hardliners": 15 },
  power_sources: { military: 45, economy: 40, magic: 50, religion: 55, intelligence: 80, legitimacy: 48, resources: 50, fear: 78 },
  player_standing: { reputation: 50, trust: 40, fear: 55, respect: 45, suspicion: 60, debt: 0, leverage: 20 },
  keeper_exploit_vector: "purity_trials + authoritarian_protection + scandal_economy",
  void_temptation_phrase: "If protection matters, you cannot allow dangerous people to choose freely.",
  current_status: "ascendant under regional_pressure; pressing the bench and the gates"
}

// Location (example instance)
LocationState {
  id: "loc-greylight-march", campaign_id: "example-sanctuary-001",
  name: "Greylight March", domain: "Sanctuary", location_type: "frontier ward-line",
  controlling_faction_id: "fac-ward-command", contested_by_faction_ids: ["fac-abyss-raiders","fac-purity-inquisition"],
  stability: 40, danger: 74, corruption: 42, morale: 44, resources: 38, secrecy: 50,
  military_pressure: 82, spiritual_health: 38, economic_health: 38, rumor_activity: 55,
  active_soul_flow_wound_ids: ["sfw-greyed-march-beacon"],
  known_secrets: ["two March Beacons are Void-fueled"],
  hidden_secrets: ["an Abyss agent is documenting the Void-wards as future propaganda"],
  current_mood: "exhausted, frightened, quietly compromising"
}

// Warfront
WarFrontState {
  id: "wf-greylight-march", campaign_id: "example-sanctuary-001", name: "The Greylight March",
  domains_involved: ["Sanctuary","Abyss"], factions_involved: ["fac-ward-command","fac-vigil-knights","fac-abyss-raiders"],
  locations_involved: ["loc-greylight-march"], conflict_type: "soul_flow_conflict",
  current_balance: -18,  // Abyss pressing
  active_objectives: ["hold the ward-line","deny Abyss the dead","keep the March Beacons lit"],
  hidden_objectives: ["Abyss: harvest greyed-Beacon dead; obtain proof of Sanctuary's Void-wards"],
  escalation_clock_id: "clk-march-greying",
  current_status: "escalating"
}

// Soul-flow wound (the canonical child wound)
SoulFlowWoundState {
  id: "sfw-soulbound-child", campaign_id: "example-sanctuary-001",
  name: "The Soulbound Child", domain: "Sanctuary", wound_type: "soul_binding",
  origin_event_id: "evt-mercy-soulbinding", severity: 38, visibility: "hidden",
  affected_npcs: ["npc-liora","npc-brother-calven","npc-inquisitor-vale"],
  affected_factions: ["fac-purity-inquisition","fac-refugee-covenant","fac-abyss-ledger"],
  affected_locations: ["loc-wardward"],
  keeper_pressure_delta: 4, void_parasitism_delta: 3,
  possible_healing_methods: ["clean Passage-adjacent soul-healing","truthful family testimony + lawful review","confession by Calven instead of falsified records"],
  ignored_consequence: "rumor mutates to 'the stranger stole a child's soul'; court demands records; Calven falsifies them; Abyss weaponizes the hypocrisy"
}

// Pressure clock
PressureClockState {
  id: "clk-march-greying", campaign_id: "example-sanctuary-001",
  name: "The Greying of the March", description: "Tainted/Void-lit frontier Beacons spreading the Greying inland",
  clock_type: "corruption", current_value: 4, max_value: 8,
  owner_type: "domain", owner_id: "Sanctuary",
  trigger_event: "Void-lit ward accepted to hold the line",
  partial_tick_effects: ["a March Beacon greys","lingering dead appear","frontier_harmony drops","an Abyss agent gathers evidence"],
  completed_effect: "The Greying reaches a gate-city; Sanctuary's hidden Void-dependency becomes exposable; soul_flow_integrity −10, keeper_pressure +8",
  reversal_methods: ["clean re-consecration with free oaths","dismantle the Void-wards & accept the raids","intercept the Abyss evidence","allied relief covering the gap"],
  is_active: true, visibility_to_player: "partial"
}
```

---

## 29. Cause/Effect Examples (≥5, reaching 3rd–5th order)

Each chain follows **Action → Method → Witness → Interpretation → Power Shift →
Social → Systemic → Metaphysical → Future Pressure** and includes intervention
paths (per Chunk 4).

### A — Mercy Through Forbidden Soulbinding (the canonical chain, depth 5)

**Root:** the player saves a dying refugee child (Liora) with forbidden
soulbinding. *Method: merciful but the forbidden Abyssian sin. Witnesses: the
mother, Brother Calven, partial street-talk.*

- **1st (immediate):** Liora lives; a soul-scar forms (soul_flow_integrity −2, `sfw-soulbound-child` created, severity 38, hidden). The mother is grateful and afraid.
- **2nd (scene/session):** Brother Calven hides the child and her condition to protect the player and the family; the mother's fear leaks as a half-told story; **Inquisitor Vale** hears partial reports of "soul-magic among the refugees" and opens a quiet inquiry.
- **3rd (local/system):** the rumor mutates — "a child was healed" → "the stranger stole a child's soul" (`rm-stranger-stole-a-soul`, payload: paranoia). The **Purity Inquisition** gains fuel (purity_trials +6, Inquisition leverage up); the **Refugee Covenant** fears a backlash that will get the gates sealed; gate_harmony −4.
- **4th (regional/political):** the oath-court demands Liora's medical records; **Calven falsifies them** to protect everyone — a second, larger lie layered on the first. The falsification becomes its own latent scandal; Magistrate Quill smells something wrong; the Bench power-struggle sharpens.
- **5th (mythic/metaphysical):** an **Abyss Ash-Ledger agent** weaponizes it: "Sanctuary condemns Abyss while secretly practicing illegal soul manipulation and hiding it." Sanctuary's moral authority over soul magic drops; keeper_pressure +6; the soul-scar, un-vigiled, festers (Liora begins to dream in a dead person's voice — delayed soul-flow symptom).
- **Interventions:** confess and submit to lawful ritual review (lose standing, preserve trust, enable healing); find a clean Verdance-medicine soul-healing for Liora; expose the Ash-Ledger agent before the propaganda lands; talk Calven OUT of falsifying the records; have the family testify truthfully so mercy and accountability coexist.

### B — The Sealed Gate (romance + warfront, depth 4)

**Root:** under a soul-magic scare, the player backs the Ward-Command's order to
seal the western gates on refugees still outside. *Method: protective but
abandoning; public; many witnesses.*

- **1st:** the gates seal; raid-risk to the city drops tonight; refugees outside are exposed. Inquisition gratitude +8.
- **2nd:** **Cassia opposes the player publicly** despite loving them (BECAUSE the Holding of strangers outweighs affection); Mother Iselle weeps at the gate; a refugee dies in the open — a martyr-image is born.
- **3rd:** rumor "the Holding is broken" spreads (payload: grief/anger); rejected refugees flow to the **Hollow Lantern**; the Covenant's Concord seat suspension advances; civic_trust −5, gate_harmony −7.
- **4th:** the Covenant radicalizes or fractures; the underground swells with the desperate (raising the odds of a real soul-magic scandal); Tempest and Verdance read the closure as Sanctuary betraying its own covenant, cooling alliance prospects; military gains a quieter frontier but the domain loses moral cohesion.
- **5th (if it compounds):** the dead refugee, un-vigiled outside the Light, lingers and can be harvested by Abyss; the closure becomes the proof-text for "Sanctuary protects only its own" — Keeper pressure rises via domain-division and a soul-flow wound.
- **Interventions:** broker a consent-based screening with the Covenant and a sunset clause (gates open under trusted watch); evacuate/escort the exposed refugees; give the dead a true Passage Vigil; reconcile with Cassia through accountability, not concession; expose the scare as manufactured by Caldreth.

### C — The Void-Lit Ward (warfront → metaphysical, depth 5)

**Root:** to hold the bleeding Greylight March, the player helps **Ward-Captain
Theron Holt** light a Void-fueled ward-Beacon. *Method: protective, desperate,
consent-skipping; few witnesses, one of them an enemy.*

- **1st:** the line holds; raid casualties drop sharply; frontier_harmony *appears* to rise; void_parasitism +4.
- **2nd:** the ward holds "too well"; the district behind it grows quiet and fearful; **Beaconwarden Elias Morrow** recognizes the taint and is torn between reporting it and protecting the March.
- **3rd:** the Beacon greys at its edges; lingering dead appear behind the line (`sfw-greyed-march-beacon`); the `clk-march-greying` clock ticks; an **Abyss agent** quietly documents the Void-ward as evidence.
- **4th:** the March becomes dependent on the Void-ward — dismantling it means accepting the raids again; the Brighter-Light power-struggle hardens; Theron, cornered, considers concealing or even selling the evidence to survive.
- **5th:** Abyss leaks the documented Void-ward: "Sanctuary's holy Light is fed by the Void." Moral authority collapses; soul_flow_integrity −10; reality_stability dips; Keeper pressure +8 via Stone destabilization and Void-dependency. The shortcut that saved the frontier damns the domain.
- **Interventions:** dismantle the ward and accept the raids while arranging Radiance/Tempest relief; re-consecrate cleanly with free oaths; intercept the Abyss agent's evidence; talk Theron back from the edge; have the Luminarch finally publicly own and cleanse the taint.

### D — Inquisitorial Capture of the Bench (legal cruelty, depth 4)

**Root:** to convict a genuinely dangerous suspect quickly, the player supports
granting the Inquisition standing Oversight over the oath-court. *Method:
protective, expedient; public, institutional.*

- **1st:** the suspect is convicted fast; the city feels safer; Inquisition trust +10.
- **2nd:** **Chief Magistrate Quill** warns it makes the accusation the verdict; **Advocate Mira Sael** turns on the player for gutting due process; evidentiary standards drop.
- **3rd:** a wave of purity trials follows; the Watched stop trusting courts and go underground; confession dries up (people hide rather than confess); shame-scars multiply (soul_flow micro-wounds); civic_trust −6.
- **4th:** the Oath-Law becomes an instrument of legal cruelty — perfectly procedural, perfectly merciless; the Magistracy is captured; the Cathedral is pressured to bless extraction-confession; Sanctuary's law starts to resemble an Abyssian ledger.
- **5th (if unchecked):** the inversion of *law* (a prison-reinforcing virtue) into pre-decided cruelty scars identities at scale and collapses civic trust — Keeper pressure rises via oath-corrosion and virtue-inversion; the Light greys toward interrogation across the capital.
- **Interventions:** help Quill resist with a bounded, sunset-clamped Oversight and guaranteed defense rights; expose the falsified records underpinning the pretext; defend a wrongly-accused person to set a vindication precedent; expose Caldreth's scandal-provocation.

### E — Exposing the Inquisition's Scandal-Economy (keystone victory, depth 5)

**Root:** the player uncovers and publicly exposes that **Magister-Inquisitor
Caldreth Vane** has been provoking soul-magic scandals (and feeding tainted
Beacons on the resulting fear) to justify the Inquisition's expansion. *Method:
truthful, courageous, public; high-stakes witnesses.*

- **1st:** the proof lands; the Inquisition's pretext is shaken; Caldreth and Vale become vengeful enemies; the city is rocked.
- **2nd:** the Magistracy (Quill) and the Cathedral (a finally-emboldened Luminarch) move to roll back emergency powers; the Covenant is vindicated; the wrongly-shamed begin to be cleared.
- **3rd:** purity_trials drop; the scandal-economy that fueled greyed Beacons loses its fuel; civic_trust recovers (+8); confession circles reopen as release rather than extraction; Beacon harmony begins to climb.
- **4th:** the Inquisition either reforms (best case) or radicalizes underground around a martyr-narrative ("they silenced the only true protector"); the domain's politics realign toward the Holding's true meaning; Abyss loses its best hypocrisy-lever.
- **5th:** because the Inquisition was the Keeper's primary vector, cutting its fuel **lowers keeper_pressure** (−8), raises soul_flow_integrity (healed shame-scars, re-lit Beacons), and re-anchors Sanctuary as a prison-reinforcing pillar — a rare metaphysical *win*, paid for with a powerful, lasting enemy.
- **Interventions / risks:** protect the witnesses (Vale or Caldreth will try to bind or discredit them); secure the falsified-records evidence before it's destroyed; give the Luminarch cover to speak; prevent Caldreth's martyrdom from re-radicalizing the order; re-consecrate the freed Beacons with the trust just restored.

> **Pattern note for VERDAX:** Sanctuary chains almost always route through *civic
> trust* and *the soul-magic-hypocrisy lever.* The Keeper's wins come from secrecy,
> coercion, and exposed hypocrisy; the player's wins come from accountability,
> consent, and the costly truth. Mercy and protection are never wrong here — but
> mercy *without* truth, and protection *without* consent, are exactly the doors the
> Keeper walks through.

---

## 30. Open Questions

- **The Lumen Cor's nature:** Is the Cor a single fractured-Nexus shard, or did the founders consecrate something else into Light? Can it be healed, re-whole, or does brightening it always risk the Greying? Can a player ever cleanse a permanently greyed Beacon, or only relight a guttered one?
- **The fuel question:** Canonically the Light is fed by freely given oaths — but the Inquisition's "Brighter-Light" doctrine claims it can burn on scandal/coercion/Void. Is the tainted Light *the same Light corrupted*, or a counterfeit? Does the realm's metaphysics let "dirty" Light be cleansed, or must such Beacons be extinguished and rebuilt?
- **Forbidden vs clean soul-healing:** Is there a truly clean Sanctuary soul-healing (via Verdance medicine + Vigil) that can save a dying child without a soul-scar — or is *every* intervention in the death-thread a small wound? This determines whether the Calven dilemma has a clean answer or only graded tragedies.
- **The Roll of the Held:** If a name is on the Roll, is that soul genuinely protected from Abyssian harvest even after death? Could Abyss capturing or corrupting the Roll be a campaign-ending threat? Can a living player be *removed* from the Roll (civic outlawry) and what does that do metaphysically?
- **Oath-magic limits:** Can a coerced oath ever be cleanly released, or does the soft soul-binding leave a permanent trace? Can an oathbreaker be redeemed, and at what soul-flow cost?
- **Cassia & the romance ceiling:** Can the Cassia romance ever fully reconcile love and ideology, or is its truest form a tragedy — love that endures *through* public opposition? (Design leans toward the latter, per Chunk 4.)
- **Architect tie:** Which Architect-principle does Sanctuary's "protection/holding/oath" most descend from, and is there a Beacon or relic that holds an Architect-memory of the original Holding?

---

## 31. Locked Decisions

1. Sanctuary is a **protection civilization** — its entire society (law, Light, economy, military, culture) exists to keep people from being lost.
2. **Protection depends on truth, law, and civic trust.** These are load-bearing, not decorative; concealing corruption that endangers civilians is a betrayal of the Holding and raises Sanctuary suspicion.
3. The core source is the **Lumen Cor / Beacon network (the Light Eternal)** — a Beacon-type fractured-Nexus source that stabilizes soul-flow and proves a place is "held."
4. **Beacon harmony** is a tracked Sanctuary-specific stability metric, linked to civic trust, free-oath fuel, and (inversely) to Keeper pressure.
5. Sanctuary's true virtues are **protection, unity, truth, mercy, law, oath, civic trust, Light Eternal.**
6. Its corrupted forms are **surveillance, forced conformity, purity trials, legal cruelty, public shame, mercy without accountability, authoritarian protection.**
7. The **Keeper exploit** is: *destroy trust while claiming to defend it* — "To protect people I must control the choices that could endanger them" — driving BOTH the Inquisition's control-engine and the Covenant's conceal-engine (the twin-trap).
8. The **Void lie** is: "If protection matters, you cannot allow dangerous people to choose freely." Void-enhanced protection always *works* and always converts witnessing into harvesting.
9. **Oaths are metaphysically binding**; coerced oaths are soft soul-binding; the consent-and-truth hair's-width distinction defines clean vs corrupt Sanctuary magic.
10. Sanctuary is the realm's **foremost moral authority over soul magic** and its chief opponent of **Abyss** — and that authority is its central vulnerability: **exposed hypocrisy transfers moral authority to Abyss and raises Keeper pressure.**
11. The five+ factions are **High Concord/Magistracy, Lumen Cathedral/Order of the Beacon, Purity Inquisition, Refugee Covenant, and the Hollow Lantern (soul-magic underground)** — each with a real point and a dangerous flaw.
12. Canon NPCs: **Cassia** (Covenant; loves the player yet publicly opposes them over gate closures), **Inquisitor Vale** (suspicion-driven), **Brother Calven** (healer who hides things to protect people). Supporting cast includes Caldreth Vane (corruption vessel), Quill, the Luminarch, Lord-Marshal Vance, Theron Holt, Mira Sael, Liora, and others.
13. The **class fault line is citizens (the Held) vs refugees/outsiders (the Vouched, the Watched)**; fear narrows who counts as "fully held."
14. The **forbidden-soulbinding chain** (saving a child → concealment → rumor → court scandal → Abyss propaganda) is canonical and reaches depth 5.
15. Sanctuary corruption **always begins as protection** — every dark act is justified as keeping people safe; VERDAX must always play it that way, never as cartoon tyranny.
16. Consequence chains route through **civic trust** and the **soul-magic-hypocrisy lever**; player victories come from accountability, consent, and costly truth, never from concealment or coercion.

---

*End of Sanctuary Domain Bible v1.0 (Draft). Conforms to Chunks 1–4. Static lore
to be seeded at `/domain-lore/sanctuary.json`; mutable state per the Chunk 3
tracking tables.*
