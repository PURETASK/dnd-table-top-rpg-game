---
title: Verdance Domain Bible
status: Draft v1.0
lead: DOMAIN-ARCHIVIST
qa: CANON-WARDEN
implementation: SCHEMA-FORGE
chunk: 2B
mvp: true
note: >
  Verdance is the MVP domain for Realm of Nexus / VERDAX. This bible is the
  most thorough of the domain bibles by design — the vertical slice
  "The Sap Beneath the Ash" is set in the Thornveil Refuge region of Verdance,
  and every faction, NPC role, location, and cause/effect chain here must be
  build-ready for the turn engine. It obeys Chunk 1 (Master Canon), follows the
  Chunk 2 template structure (all 31 sections), uses the Chunk 3 tracking
  language, and reaches Chunk 4 cause/effect depth.
---

# Verdance Domain Bible v1.0 — *The Living Cycle*

> "Cut a tree and you end a life. Cut a root and you silence a thousand voices
> that were still speaking. We do not own the forest. We are how it remembers
> itself."
> — Elder Maera Rootveil, opening the Rootmoot of Thornveil

---

## 1. Domain Identity Snapshot

Verdance is a **living-cycle restoration civilization** — not "the forest people"
and not a pastoral idyll. It is a complex, ancient society organized around the
belief that life moves in cycles, that nothing truly ends, and that the highest
civic, spiritual, and military duties are **restoration and communion** rather
than conquest. Its institutions, economy, magic, and warfare all descend from
one fact: beneath Verdance runs a living **root-network** anchored to the
**Verdance Stone** (the Heartroot) and channeled through **great rootwells**,
through which the living and the dead remember each other.

Where Radiance burns to renew and Abyss harvests to own, Verdance **waits, grows,
heals, and remembers.** Its strength is patience and continuity. Its sickness is
also patience and continuity — it waits too long, it preserves what should be
released, and it can rename corruption as "just another season."

```ts
DomainIdentitySnapshot {
  domain_name: "Verdance"
  short_description: "A living-cycle restoration civilization built on cycles, root memory, communion, and sapcraft, anchored to a buried root-network and the Verdance Stone (the Heartroot)."
  civilization_type: "Decentralized ecological theocracy of elder councils (rootmoots) over a root-network commons; restorationist, communal, slow."
  core_belief: "Life moves in cycles; nothing is wasted, nothing truly ends. Restoration and communion matter more than conquest. To heal is holier than to win; to remember is holier than to rule."
  true_virtue: ["cycles", "restoration", "communion", "living systems", "patience", "healing", "ecological memory"]
  primary_corruption_risk: ["stagnation", "elder tyranny", "forced healing", "biological control", "resource hoarding", "weaponized rot", "fatalism"]
  domain_stone_or_source: "The Verdance Stone (the Heartroot) — a Stone-fragment grown into / fused with a continent-spanning living root-network, expressed locally through great rootwells."
  magic_style: "Sapcraft, root-communion, tree-memory reading, growth-shaping, rot-tending, seed-binding, mycelial messaging."
  main_magic_cost: "Life-force and patience (time), plus domain_stone_strain (root-network load) and, at the edges, soul_integrity and corruption when sap is drawn from wounded or corrupted roots."
  political_center: "The Heartmoot at Greatroot Hollow (continental elder council); regional rootmoots such as the Thornveil Rootmoot."
  military_identity: "Defensive, biological, terrain-based: living fortifications, thornwalls, spore and sap warfare, mycelial intelligence, attrition and entanglement rather than conquest."
  economic_base: "Healing-sap exports, restorative medicine, seed trade, living timber and grafted goods, soil-restoration services, root-network message relay; a sacred-sap commons economy."
  biggest_internal_conflict: "How to respond to corruption of the root-network: contain it (Rootwardens), restore it (Sap Commons), weaponize it (Hollow Pact), or stabilize the market around it (Seed Guild)."
  biggest_external_threat: "Abyss soul-harvesting at the Verdance border — disrupting soul flow where the dead pass into root-memory — compounded by Radiance's instinct to burn corruption rather than heal it."
  keeper_exploit: "Wait too long, or treat corruption as adaptation: 'If decay is natural, corrupted growth is still Verdance.'"
  void_lie: "If decay is part of the cycle, why not command it?"
}
```

**One-paragraph pitch.** Verdance is a slow, deep, ancient civilization of
healers, gardeners, gravekeepers, and listeners who hold one half of the world's
soul-passage in trust — because the dead of many lands flow through Verdant root
memory before they pass on. Its people can heal almost anything and forget almost
nothing. But Verdance's great virtues curdle in crisis: patience becomes paralysis,
communion becomes elder tyranny, healing becomes coercion, and "the cycle includes
decay" becomes "so let the decay grow." At Thornveil Refuge, a corrupted rootwell
has begun **speaking names** — the names of the dead, and then the names of the
living — and the four great factions of Verdance disagree, violently, about whether
to silence it, heal it, feed it, or sell it.

---

## 2. Hard Canon

These statements are locked Verdance canon and may be expanded but not contradicted.

1. **Verdance is the cycle/living-systems domain.** Its principle, inherited from
   the fractured Nexus Stone, is **renewal-through-continuity**: growth, decay,
   composting, and rebirth as one unbroken process.
2. **The domain source is a living root-network** tied to the **Verdance Stone
   (the Heartroot)** and expressed through **great rootwells**. It is a *Living
   Network* source type, not a single gem.
3. **Sapcraft is the core magic.** All Verdant magic draws on sap, roots, spores,
   seeds, and the memory stored in living wood.
4. **Root memory is real.** The network stores **ecological memory** — and,
   crucially, fragments of the **identities and names of the dead** who passed
   through Verdant soil. Verdance is therefore a soul-flow domain: the dead of many
   regions pass *through* root-memory on their way onward.
5. **Verdance's true virtues** are cycles, restoration, communion, living systems,
   patience, healing, and ecological memory.
6. **Verdance's corrupted forms** are stagnation, elder tyranny, forced healing,
   biological control, resource hoarding, weaponized rot, and fatalism.
7. **The Keeper's Verdance exploit** is to make Verdance *wait too long* or to
   *redefine corruption as adaptation*: "If decay is natural, corrupted growth is
   still Verdance."
8. **The Void's Verdance lie** is: "If decay is part of the cycle, why not command
   it?" — the temptation to *direct* rot and death instead of tending them.
9. **Abyss is Verdance's existential threat,** because Abyss harvests the souls
   Verdance shepherds. A corrupted rootwell is, more often than not, an Abyssian
   incision into Verdant soul flow.
10. **Radiance is Verdance's most dangerous friend,** because Radiance's cure for
    corruption is fire, and burning a corrupted rootwell can sever soul passage as
    badly as the corruption did.
11. **The MVP rootwell at Thornveil Refuge is real canon:** a great rootwell has
    been corrupted and has begun **speaking names**. This is the central MVP mystery
    and is locked.
12. **Verdance does not conquer.** Its warfront goals are defensive, restorative,
    and terrain-based. When Verdance behaves like a conqueror, it is already
    corrupted (elder tyranny / biological control).

---

## 3. Metaphysical Role

Verdance's role in the prison-lattice that holds the Keeper is **soul-passage
continuity and memory-keeping.** The Architects distributed reality's principles
across the domains; Verdance carries the principle that **endings are passages,
not erasures.**

- **What Verdance stabilizes in the prison:** the *continuity of death passage*
  and the *integrity of ancestral memory.* When a person dies near Verdant soil,
  their soul-thread can be received, briefly held, and released cleanly into onward
  flow; their name and a fragment of who they were is composted into ecological
  memory. This keeps souls moving (against Keeper "soul trapping") and keeps names
  and identities coherent (against Keeper "name erasure").
- **Why the Keeper attacks it:** every clean Verdant passage is a wound the Keeper
  cannot reopen. If the Keeper (through Abyss) can corrupt a rootwell, it converts a
  passage-point into a **trap** — souls and names are caught in corrupted root-memory
  instead of released. The corrupted rootwell "speaking names" is exactly this:
  trapped identities, leaking back up the roots, mistaken for prophecy.
- **Why the Void targets it:** the Void offers Verdance the power to **command the
  cycle** — to decide who decays and who is restored, to weaponize rot, to "speed up"
  a slow healing. Each acceptance turns *tending* into *control*, which is precisely
  the Keeper's worldview wearing a green mask.
- **Cross-domain consequence:** because so many regions' dead pass through Verdant
  memory, a Verdance soul-flow wound is **not a local problem.** A corrupted rootwell
  at the border can back up soul passage for Radiance, Tempest, and Sanctuary dead
  too — which is why a Verdant crisis becomes everyone's crisis, and why everyone
  has an opinion about how to "fix" it.

> **Metaphysical summary:** Verdance is the world's compost-heart and graveyard-loom.
> It keeps death moving and memory whole. Corrupt it, and death stops moving and
> memory starts lying.

---

## 4. Domain Stone / Core Source

```ts
DomainStoneState {
  domain: "Verdance"
  source_name: "The Verdance Stone (the Heartroot) and its great rootwells"
  source_type: "Living Network"
  origin: "A fragment of the fractured pure Nexus Stone that did not remain a discrete gem. Where it fell, it took root — literally — fusing with primordial fungal and root systems and growing into a continent-spanning living network. The Heartroot is the densest, oldest knot of that network, beneath Greatroot Hollow; great rootwells are deep vertical shafts where the network surfaces and can be touched, drunk from, and listened to."
  metaphysical_principle: ["cycles", "renewal-through-continuity", "ecological memory", "death-passage reception", "restoration"]
  current_stability: 58   // compromised — healthy continental average dragged down by the Thornveil corruption and three other border wounds
  corruption_level: 27    // localized but spreading from corrupted border rootwells; Thornveil rootwell alone is far higher (see LocationState)
  public_knowledge: "The roots remember; the rootwells heal; the Heartroot keeps the cycle. Drinking clean rootwell sap heals body and grief. The dead 'go into the roots' and are at peace."
  hidden_truth: "The network literally holds soul-thread fragments and names of the dead in transit. A corrupted rootwell does not merely sicken the soil — it traps those souls and names, which can leak back as voices. The Heartmoot has known this for generations and has chosen containment and silence over a cure it fears it cannot control. Three border rootwells have already been quietly sealed and abandoned; Thornveil is the fourth and the loudest."
  factions_claiming_authority: ["Rootwardens (claim custodial/containment authority over all rootwells)", "Heartmoot elder council (claim ultimate interpretive authority via the Heartroot)", "Auralis Greenwake's communion order (claim the roots speak to them directly, above council interpretation)", "Sap Commons (claim the people, not the elders, own the sacred-sap commons)", "Seed Guild (claim economic stewardship of sap and seed flows)"]
  rituals_dependent_on_source: ["Rootmoot communion (council decisions made by drinking shared sap and 'listening together')", "Passage Tending (releasing the dead into root-memory)", "Naming-Back (recovering a lost name from the roots)", "Sap-blessing of newborns", "Graftbond marriage rite", "Heartroot Vigil (continental healing convocation)"]
  magic_systems_dependent_on_source: ["Sapcraft", "Root-communion", "Tree-memory reading", "Growth-shaping", "Rot-tending", "Seed-binding", "Mycelial messaging"]
  failure_symptoms: ["Rootwells run bitter or run dry", "Healing-sap loses potency", "The dead 'don't settle' — hauntings, restless graves", "Root-memory contradicts itself; names come back wrong", "Rootwells speak names unbidden", "Communion produces no consensus — elders hear different voices", "Mycelial relay messages arrive garbled or false", "Blight spreads upward into living timber"]
  healing_methods: ["Patient cleansing-communion (slow, correct, requires consensus and many seasons)", "Passage-completion (manually releasing the trapped souls onward, dangerous)", "Replanting from clean Heartroot cuttings", "Soul-flow repair by an outside soul-healer", "True-Naming the trapped dead to release them", "Composting the corrupted growth correctly instead of burning or feeding it"]
  keeper_attack_vector: "Corrupt a rootwell so souls and names are trapped, then let Verdance's patience and elder-secrecy delay the cure until the trap is permanent and the network normalizes the corruption ('this is just a new kind of root')."
  void_attack_vector: "Whisper that the corruption is power: command the rot, drink the corrupted sap, weaponize the trapped voices as prophecy or as weapons. Each use deepens dependency and trains Verdance to control the cycle rather than tend it."
}
```

**Reading the Stone's numbers.** Continental stability at **58** means *compromised
but functioning* — most rootwells still heal, most passages still complete, and
daily Verdant life looks normal. But four border rootwells are wounds, three are
sealed-and-denied, and the fourth (Thornveil) is the one that started talking.
Corruption at **27** is the continental average; **the Thornveil rootwell itself
sits near 70** (see Section 17). The political danger is that **58 is comfortable
enough for the Heartmoot to keep waiting** — which is exactly the Keeper exploit.

---

## 5. Soul-Flow Relationship

```ts
DomainSoulFlowProfile {
  domain: "Verdance"
  healthy_soul_flow_description: "The dead are received by the nearest rootwell, briefly held in root-memory where their name and the shape of their life are composted into ecological memory, and then released cleanly into onward soul flow. Grief is metabolized: the living drink shared sap, 'visit' a fragment of the dead in communion, and let go. Identity stays coherent because names are kept honestly. Magic functions safely because the sap is clean."
  damaged_soul_flow_description: "A corrupted rootwell holds souls instead of releasing them. Names accumulate and decay together; the dead 'don't settle'; the living hear voices; graves go restless. Grief cannot complete — mourners return to the rootwell again and again because their dead are still there, still calling. Identity fractures: a name spoken back wrong can overwrite a living person's sense of self. Sap drawn from the wound carries those trapped voices as power."
  natural_soul_processes: ["Passage Tending (releasing the dead into root-memory and onward)", "Composting a life into ecological memory", "Naming-Back (recovering a lost name to heal the living)", "Grief-communion (controlled visiting of a held fragment before release)", "Ancestral consultation (briefly, reverently, with consent of the elders and the dead)"]
  forbidden_soul_processes: ["Holding the dead in the roots indefinitely (refusing to release them)", "Drawing sap from trapped souls for power (soul-sap)", "Speaking a living person's name into a corrupted rootwell (identity binding)", "Commanding the rot to spread (weaponized passage)", "Selling root-memory fragments / names as a commodity", "Forcing a healing-communion on the unwilling (forced healing)"]
  common_soul_wounds: ["death_passage_blocked (a rootwell traps its dead)", "name_erasure (names decay together in corrupted memory)", "memory_fracture (root-memory contradicts itself)", "grief_harvest (Abyss or Hollow Pact draws power from un-released grief)", "identity_dissolution (the living overwritten by the named dead)", "domain_stone_drain (corrupted rootwell bleeds the network)"]
  healing_methods: ["Patient cleansing-communion", "Passage-completion ritual", "True-Naming the trapped to release them", "Replanting from clean Heartroot cuttings", "Outside soul-healer repair", "Correct composting of corrupted growth"]
  factions_that_protect_soul_flow: ["Rootwardens (by containment — imperfect, but they keep the wound from spreading)", "Sap Commons (by seeking true restoration)", "Auralis Greenwake's Greenwake Communion (by listening for the trapped and trying to release them)"]
  factions_that_disrupt_soul_flow: ["Hollow Pact (deliberately — they want the trapped voices as weapons and the corrupted sap as power)", "Seed Guild (negligently — they want the rootwell stabilized as a sellable asset, not released)", "Abyss (the external engine of the wound)"]
  keeper_disruption_strategy: "Trap souls and names at the rootwells; rely on Verdance's patience and secrecy to delay release until the trap normalizes; let Verdance redefine the trapped voices as ancestral wisdom or natural adaptation so no one tries to free them."
  void_disruption_strategy: "Offer the trapped voices as power — prophecy, weapon, leverage, shortcut. Each use binds the souls tighter and makes the wound feel like an asset, so Verdance defends its own wound."
}
```

**Why Verdance matters more than its size.** Because so many regions' dead pass
through Verdant root-memory, **Verdance is a soul-flow chokepoint.** A blocked
Verdant passage is upstream of everyone. This is the metaphysical reason Abyss
covets the Verdance border (a controlled chokepoint is a soul-harvest tap) and the
reason Radiance, Sanctuary, and Tempest all have a stake in how Verdance handles
the Thornveil rootwell — even though it is, on the map, one well under one refuge.

---

## 6. True Virtues

```ts
DomainVirtue[] // the seven living virtues of Verdance
```

### 6.1 Cycles
```ts
DomainVirtue {
  name: "Cycles"
  healthy_definition: "The belief and practice that growth, decay, death, and rebirth are one continuous process; nothing is wasted, and every ending feeds a beginning."
  cultural_expression: "Lives are measured in seasons, not years. Verdant calendars are wheels, not lines. Funerals are plantings."
  heroic_expression: "A hero accepts loss as passage, not defeat — and refuses the shortcut that would 'end the cycle' to win faster."
  political_expression: "Rootmoots decide slowly, in season, expecting to revisit decisions when the wheel turns; no decision is meant to be final."
  magical_expression: "Sapcraft works with growth and decay rather than against them; rot-tending is honored, not feared."
  economic_expression: "Composting and reuse are sacred; waste is taboo; goods are grafted and regrown, not discarded."
  military_expression: "Defense by attrition and entanglement — let the enemy's momentum decay against living terrain."
  common_saying: "The wheel turns; sit with it."
}
```

### 6.2 Restoration
```ts
DomainVirtue {
  name: "Restoration"
  healthy_definition: "The active healing of what is wounded — soil, body, grief, memory, network — back toward wholeness, at the pace healing actually requires."
  cultural_expression: "The highest praise is 'they leave things better-rooted than they found them.' Restorers outrank warriors."
  heroic_expression: "Choosing the slow true cure over the fast false one, even when people are dying while it works."
  political_expression: "Sap Commons' entire platform: the wounded network can be healed, not just contained."
  magical_expression: "Healing-sap, soil restoration, replanting, cleansing-communion."
  economic_expression: "Verdance's chief export is restoration itself — healing-sap, restorative medicine, soil-renewal services."
  military_expression: "Battlefield restoration: Verdant medics regrow what was destroyed; reclaiming poisoned ground is a victory condition."
  common_saying: "Heal it, don't just hold it."
}
```

### 6.3 Communion
```ts
DomainVirtue {
  name: "Communion"
  healthy_definition: "Decision-making and meaning-making by listening together — to each other, to the roots, to the dead, to the living systems — until a shared sense emerges."
  cultural_expression: "Important talk happens around a shared sap-bowl; to drink together is to agree to truly listen."
  heroic_expression: "Seeking consensus and the voices of the unheard (including the dead) before acting, even under pressure to act alone."
  political_expression: "Rootmoot governance: authority flows from the quality of one's listening, not from force."
  magical_expression: "Root-communion and tree-memory reading; the Greenwake Communion's whole practice."
  economic_expression: "The sacred-sap commons: shared resource governed by shared listening, not private title."
  military_expression: "Mycelial intelligence — the network warns of intruders; Verdance fights informed."
  common_saying: "No one listens alone."
}
```

### 6.4 Living Systems
```ts
DomainVirtue {
  name: "Living Systems"
  healthy_definition: "Treating the world as an interdependent web of living things, where health is relationship and harm ripples outward through connection."
  cultural_expression: "Verdants think in webs and downstream effects; 'what does this feed?' is a basic moral question."
  heroic_expression: "Refusing a fix that solves one node by poisoning the web."
  political_expression: "Policy is judged by its ripple — Verdance's native consequence-chain thinking."
  magical_expression: "Mycelial messaging, network-sensing, growth-shaping that respects what already grows."
  economic_expression: "Living infrastructure — bridges, walls, and homes are grown, not built; the economy is the ecosystem."
  military_expression: "Terrain-as-army: the living landscape is a combatant."
  common_saying: "Pull one root and feel the whole grove move."
}
```

### 6.5 Patience
```ts
DomainVirtue {
  name: "Patience"
  healthy_definition: "The disciplined willingness to let things take the time they actually need — healing, consensus, growth, grief — without forcing an early, false completion."
  cultural_expression: "Haste is the cardinal sin; 'green wood bends, dry wood breaks.'"
  heroic_expression: "Holding a line, a vigil, or a cure across seasons; enduring."
  political_expression: "Deliberation as virtue; the rootmoot does not rush."
  magical_expression: "Slow magic is strong magic; the deepest sapcraft takes years."
  economic_expression: "Long-cycle investment: forests planted for grandchildren."
  military_expression: "Attrition, siege endurance, defensive patience."
  common_saying: "Slow is the strong way."
}
```
*Patience is Verdance's keystone virtue — and its keystone vulnerability. Every
corruption in Section 7 begins as patience held one season too long.*

### 6.6 Healing
```ts
DomainVirtue {
  name: "Healing"
  healthy_definition: "The mending of body, grief, soil, and soul — offered, not imposed, at the pace the wounded can bear."
  cultural_expression: "Healers are the most honored profession; every village has a sap-healer."
  heroic_expression: "Healing the enemy's wounded; healing at cost to oneself; healing what others would discard."
  political_expression: "Verdance grants asylum to the wounded of all domains — the Refuge tradition (Thornveil is named for it)."
  magical_expression: "Healing-sap, grief-communion, soil and network restoration."
  economic_expression: "Restorative medicine and healing-sap are the backbone of trade."
  military_expression: "Medics and field-restorers are the elite, not the infantry."
  common_saying: "We do not turn away the wounded."
}
```

### 6.7 Ecological Memory
```ts
DomainVirtue {
  name: "Ecological Memory"
  healthy_definition: "The honest keeping of what was — names, lineages, lessons, losses — composted into living memory so the past can teach without ruling."
  cultural_expression: "Nothing is forgotten; ancestors are consulted, not worshipped; history is a living thing in the roots."
  heroic_expression: "Telling the true name, recovering a lost one, refusing to let a person be erased."
  political_expression: "Verdance keeps records others would destroy; it is the world's witness."
  magical_expression: "Tree-memory reading, Naming-Back, root-archives."
  economic_expression: "Verdance sells memory services — lineage, witness, archive — and message relay through the network."
  military_expression: "Intelligence: the roots remember every footstep that crossed them."
  common_saying: "The roots remember everything; that is mercy, and that is the danger."
}
```

---

## 7. Corrupted Virtues

Each true virtue, over-committed under crisis pressure, becomes a corruption. The
Keeper's formula applies: **True Virtue → Crisis Pressure → Extreme Interpretation
→ Faction Split → Social Harm → Soul-Flow Damage → Keeper Advantage.**

### 7.1 Stagnation (from Patience / Cycles)
```ts
CorruptedVirtue {
  true_virtue: "Patience / Cycles"
  corrupted_name: "Stagnation"
  corrupted_definition: "Patience emptied of action — waiting that has become refusal; preserving the cycle by never letting it turn."
  how_it_begins: "A crisis arrives faster than consensus can form, so the council waits 'one more season' to be sure — and keeps waiting."
  how_it_spreads: "Each delay is justified by the last; 'we've waited this long' becomes proof that waiting was right; urgency is reframed as haste-sin."
  who_benefits: ["The Keeper (delay is the whole exploit)", "Elders who fear the cost of acting", "Abyss (a wound left open spreads)"]
  who_suffers: ["The trapped dead", "The dying who could be healed now", "Sap Commons reformers branded as impatient"]
  faction_most_vulnerable: ["Rootwardens", "Heartmoot elder council"]
  npc_archetypes_most_vulnerable: ["Aged elders", "Custodians", "Anyone whose authority is tied to 'holding the line'"]
  keeper_benefit: "Pure delay — the Thornveil wound becomes permanent because no one acted in time."
  void_lie: "There is no rush. The cycle will resolve it. Trust the season."
  visible_symptoms: ["Decisions deferred to the next rootmoot, repeatedly", "Sealed-and-denied rootwells", "Elders citing tradition to avoid choice", "Reformers leaving in frustration"]
  late_stage_consequence: "The corrupted rootwell stabilizes as permanent infrastructure; the trapped souls become 'ancestors'; the wound is now canon, defended as heritage."
}
```

### 7.2 Elder Tyranny (from Communion)
```ts
CorruptedVirtue {
  true_virtue: "Communion"
  corrupted_name: "Elder Tyranny"
  corrupted_definition: "Communion captured by its interpreters — when 'listening together' becomes 'the elders alone hear the roots truly, so the elders decide.'"
  how_it_begins: "Communion is hard and slow, so the council 'interprets' the roots on the people's behalf — a convenience that becomes a monopoly."
  how_it_spreads: "Dissent is reframed as 'not listening properly'; the elders' interpretation becomes unfalsifiable because only they can hear."
  who_benefits: ["Senior elders", "Anyone who can claim to speak for the roots/dead"]
  who_suffers: ["The young", "Sap Commons", "The Greenwake Communion when its hearing contradicts the council"]
  faction_most_vulnerable: ["Heartmoot elder council", "Rootwardens"]
  npc_archetypes_most_vulnerable: ["Elder authorities", "Custodial priests"]
  keeper_benefit: "Communion (a soul-flow-protecting practice) is converted into a control structure; the dead's actual voices are overruled by elders' convenient interpretations."
  void_lie: "The people cannot hear clearly. Spare them the burden. You hear for them."
  visible_symptoms: ["Communion held behind closed roots", "The same elders 'interpreting' every season", "Naming-Back monopolized by the council", "Auralis's order treated as heretics for hearing directly"]
  late_stage_consequence: "A gerontocratic theocracy that silences the actual dead in the name of honoring them; the rootwell's real names are suppressed as 'misheard.'"
}
```

### 7.3 Forced Healing (from Healing / Restoration)
```ts
CorruptedVirtue {
  true_virtue: "Healing / Restoration"
  corrupted_name: "Forced Healing"
  corrupted_definition: "Healing imposed on the unwilling — when restoration becomes a thing done to people, not offered to them; mending bodies and grief by overriding consent."
  how_it_begins: "A healer cannot bear to let someone die or grieve 'wrongly,' so they heal past consent 'for the patient's own good.'"
  how_it_spreads: "Success justifies coercion; 'they thanked me after' becomes doctrine; refusing healing becomes treated as a sickness to cure."
  who_benefits: ["Healers seeking control disguised as compassion", "Elders enforcing 'correct' grief"]
  who_suffers: ["The grieving who are not allowed to finish grieving", "Patients overridden", "The dead held back because the living 'aren't healed enough to release them'"]
  faction_most_vulnerable: ["Sap Commons (well-meaning radicals)", "Greenwake Communion"]
  npc_archetypes_most_vulnerable: ["Devoted healers", "Grief-communion priests"]
  keeper_benefit: "Grief is never completed, so souls are never released; forced 'healing' keeps the dead held — death-passage blockage wearing a kind face."
  void_lie: "You can fix their pain right now. Why let them suffer the slow way?"
  visible_symptoms: ["Mandatory communions", "Grief deadlines", "Patients fleeing healers", "'Re-healing' the same wound repeatedly"]
  late_stage_consequence: "A society that cannot let anyone — living or dead — be in pain, and therefore cannot let anyone go; mass un-released grief feeds the rootwells' corruption."
}
```

### 7.4 Biological Control (from Living Systems)
```ts
CorruptedVirtue {
  true_virtue: "Living Systems"
  corrupted_name: "Biological Control"
  corrupted_definition: "Stewardship become domination — when 'tending the web' becomes 'engineering the web,' deciding which lives live, breeding obedience into ecosystems and people."
  how_it_begins: "To protect the network from corruption, growth-shapers begin pruning 'harmful' lineages — then deciding which traits are harmful."
  how_it_spreads: "The logic of the garden is applied to people: cull the weak, graft the useful, control reproduction 'for the health of the whole.'"
  who_benefits: ["Growth-shaper elites", "Anyone who gets to define 'healthy'"]
  who_suffers: ["The 'pruned'", "The non-conforming", "Anything declared a weed"]
  faction_most_vulnerable: ["Seed Guild (controls seed/breeding stock)", "Growth-shaper guilds"]
  npc_archetypes_most_vulnerable: ["Master growth-shapers", "Seed-stock controllers"]
  keeper_benefit: "Living-systems virtue becomes the Keeper's own logic — ownership and directed life — inside a green civilization."
  void_lie: "You already shape the forest. Why not perfect it? Why not perfect them?"
  visible_symptoms: ["Seed-stock licensing and breeding control", "'Cleansing' of disfavored groves", "Eugenic grafting language", "People described as crops"]
  late_stage_consequence: "An ecological tyranny that engineers obedient ecosystems and obedient subjects — Verdance becomes a quieter Abyss."
}
```

### 7.5 Resource Hoarding (from Restoration / Cycles)
```ts
CorruptedVirtue {
  true_virtue: "Restoration / Cycles"
  corrupted_name: "Resource Hoarding"
  corrupted_definition: "The sacred-sap commons enclosed — when scarce healing-sap and clean seed are hoarded by those who control rootwell access, and restoration becomes a thing sold, denied, or rationed for power."
  how_it_begins: "Corruption shrinks the supply of clean sap, so it is 'protected' — stockpiled, licensed, restricted 'for fairness.'"
  how_it_spreads: "Scarcity makes access power; whoever controls a clean rootwell controls life; the commons becomes a market becomes a fiefdom."
  who_benefits: ["Seed Guild", "Rootwell-controlling elders", "Black-market sap dealers"]
  who_suffers: ["Refugees at Thornveil", "The poor", "Other domains who depend on Verdant healing-sap exports"]
  faction_most_vulnerable: ["Seed Guild", "Rootwardens (who guard the wells)"]
  npc_archetypes_most_vulnerable: ["Brokers", "Quartermasters", "Well-keepers"]
  keeper_benefit: "Restoration is withheld, so wounds (bodily and soul) stay open; scarcity breeds the desperation the Void and Hollow Pact feed on."
  void_lie: "You are being responsible. Ration the sap. Survival first."
  visible_symptoms: ["Sap rationing cards", "Locked rootwells", "Sap price spikes", "Refugees turned away from the Refuge that was built to take them in"]
  late_stage_consequence: "A healing civilization that lets people die at the door of its hospitals to protect its stockpiles; the Refuge tradition collapses."
}
```

### 7.6 Weaponized Rot (from Cycles / Living Systems)
```ts
CorruptedVirtue {
  true_virtue: "Cycles / Living Systems"
  corrupted_name: "Weaponized Rot"
  corrupted_definition: "Decay turned into a weapon — when 'decay is part of the cycle' becomes 'so I may command decay,' brewing corrupted sap, blight-traps, and soul-sap to kill, dominate, and harvest grief."
  how_it_begins: "Under existential threat (Abyss patrols, raids), defenders use corrupted-sap traps because they work — and they work terrifyingly well."
  how_it_spreads: "Success addicts; the Hollow Pact recruits the desperate; each use deepens the soil corruption and the moral slide; 'it saved us once' becomes 'why not again.'"
  who_benefits: ["Hollow Pact", "The Void (this is its lie made flesh)", "Abyss (which studies the residue and is flattered by imitation)"]
  who_suffers: ["The soil", "The trapped souls drawn on for soul-sap", "Future Verdance", "Anyone downstream of the rot"]
  faction_most_vulnerable: ["Hollow Pact", "Desperate refugee defenders", "Disillusioned ex-Rootwardens"]
  npc_archetypes_most_vulnerable: ["The bereaved-and-furious", "Pragmatic survivors", "Rot-tenders who lost faith"]
  keeper_benefit: "Verdance damages its own soul-flow to defend itself; the cycle-virtue becomes a soul-harvest tool the Keeper need not even operate."
  void_lie: "If rot saved them, why call it corruption? If decay is part of the cycle, why not command it?"
  visible_symptoms: ["Corrupted-sap caches", "Blight-traps in the borderlands", "Soil corruption rising near defended sites", "Hollow Pact glyphs", "Trapped voices used as weapons or oracles"]
  late_stage_consequence: "Verdance becomes the very thing it shepherds against — a rot-domain that harvests souls 'for good reasons,' indistinguishable from Abyss except in its self-image."
}
```
*This is the corruption at the center of the MVP. Chunk 4's worked chain B is the
canonical example; it is reproduced and extended in Section 29.*

### 7.7 Fatalism (from Cycles / Patience)
```ts
CorruptedVirtue {
  true_virtue: "Cycles / Patience"
  corrupted_name: "Fatalism"
  corrupted_definition: "Cycle-faith collapsed into surrender — when 'everything passes' becomes 'so nothing we do matters,' and 'the cycle will resolve it' becomes an excuse to abandon the wounded."
  how_it_begins: "Repeated loss exhausts hope; it is easier to call abandonment 'acceptance of the cycle.'"
  how_it_spreads: "Despair is contagious and self-justifying; 'we are just one turn of a wheel that doesn't need us' spreads through the grieving."
  who_benefits: ["The Keeper (a domain that won't fight for its own healing)", "Those who profit from abandonment (Seed Guild liquidations, Hollow Pact recruitment of the hopeless)"]
  who_suffers: ["The abandoned wounded", "The trapped dead no one will release", "The young who inherit the surrender"]
  faction_most_vulnerable: ["Grieving communities", "Disillusioned Rootwardens", "Refugee camps"]
  npc_archetypes_most_vulnerable: ["The bereaved", "Burned-out healers", "Those who have lost too many"]
  keeper_benefit: "Verdance stops resisting its own corruption and calls the surrender wisdom — the softest, deepest victory."
  void_lie: "Let it go. It was always going to rot. Mercy is not fighting the inevitable."
  visible_symptoms: ["Abandoned groves", "Healers who stop trying", "'The cycle will handle it' as a refusal", "Refugees told to make peace with dying"]
  late_stage_consequence: "A civilization that mistakes giving up for enlightenment; restoration dies as a value; Verdance composts itself."
}
```

---

## 8. Keeper Exploit Pattern

```ts
KeeperExploitPattern {
  domain: "Verdance"
  primary_virtue_targeted: "Patience"
  secondary_virtues_targeted: ["Cycles", "Communion", "Ecological Memory"]
  corruption_strategy: "Two interlocking moves. (1) DELAY: weaponize Verdance's patience so the cure for a corrupted rootwell is always 'next season,' until the wound is permanent. (2) REDEFINITION: once delay has normalized the wound, reframe the corruption as adaptation — 'if decay is natural, this corrupted growth is still Verdance; these trapped voices are just our ancestors; this rot is just a new season' — so that healing the wound comes to feel like a betrayal of tradition. The Keeper's masterstroke is to make Verdance DEFEND its own wound."
  preferred_crisis_conditions: ["A soul-flow wound (corrupted rootwell) under existential military pressure (Abyss at the border), so action feels both urgent and impossible", "Refugee influx that strains the sacred-sap commons (manufactured scarcity)", "An elder council whose legitimacy depends on not admitting a mistake", "A reform faction impatient enough to look reckless"]
  preferred_faction_targets: ["Heartmoot elder council (for delay)", "Rootwardens (for containment-as-permanent-stasis)", "Seed Guild (for hoarding and stabilizing-the-wound-as-asset)", "Hollow Pact (for the redefinition that corrupted growth is power)"]
  preferred_npc_targets: ["Aged elder authorities (Maera Rootveil — the patience that becomes paralysis)", "Custodial containment officers (Othren Deepbark — the warden who guards a wound forever)", "The bereaved and furious (Nymara Hollowbloom — grief that becomes weaponized rot)"]
  soul_flow_damage_type: ["death_passage_blocked", "name_erasure", "identity_dissolution", "grief_harvest", "domain_stone_drain"]
  domain_stone_damage_type: "Slow corruption of the living network from the rootwells inward, disguised as ordinary blight and 'a difficult season,' so that the Heartroot's stability erodes without an alarm moment."
  common_lie: "If decay is natural, corrupted growth is still Verdance. There is no rush; the cycle will resolve it."
  long_term_goal: "Convert Verdance's soul-flow chokepoints from clean passages into permanent traps, normalized as heritage, so the dead of many domains back up and the prison-lattice loses one of its great memory-and-passage supports — without Verdance ever realizing it was attacked, because it will believe it simply 'accepted the cycle.'"
}
```

**The signature of a Keeper move in Verdance** is that *nothing dramatic happens.*
There is no purge, no tyrant's coup, no obvious villain — there is a meeting that
ends without a decision, a rootwell quietly sealed, a reformer who gives up, an
elder who says "next season," and a voice from the roots that everyone slowly
decides to call an ancestor. VERDAX should make Keeper progress in Verdance feel
like **erosion and excuse**, not invasion.

---

## 9. Void Temptation Pattern

```ts
VoidTemptationPattern {
  domain: "Verdance"
  temptation_phrase: "If decay is part of the cycle, why not command it? You already tend the rot. You already speak with the dead. You are not breaking the cycle — you are finishing it. Take the corrupted sap. Use the voices. Save them now, the fast way."
  immediate_benefit: "Real, fast power: corrupted-sap traps that annihilate Abyss patrols; soul-sap that heals or empowers far beyond clean sap; the trapped voices as oracle (real foreknowledge) and as weapon (names that unmake); growth-shaping that obeys instantly instead of over seasons."
  hidden_cost: "Every use binds the trapped souls tighter, deepens soil and network corruption, and trains the user to command rather than tend. Clean sapcraft begins to feel weak and slow by comparison, creating dependency. The roots start answering the user specifically — and start asking for more."
  identity_damage: "The user's self-image migrates from gardener/healer to controller; over time, the trapped dead's names bleed into the user's memory and the user begins to confuse their dead with themselves (identity_dissolution)."
  soul_flow_damage: "death_passage_blocked deepens (the souls used as power cannot be released); grief_harvest (the bereaved's un-completed grief is drawn on); eventual name_erasure as used names decay."
  reality_damage: "Each corrupted-sap working stresses the local network node, lowering domain_stone_stability and raising keeper_pressure; widespread use could collapse a regional rootwell into a permanent soul-trap (mythic wound)."
  faction_most_likely_to_accept: ["Hollow Pact (its founding premise)", "Desperate Refuge defenders", "Disillusioned ex-Rootwardens", "A cornered Sap Commons cell that decides restoration is too slow"]
  npc_archetypes_most_likely_to_accept: ["The bereaved-and-furious (Nymara)", "Pragmatic survivors (Venn Briarhook, on a bad day)", "A communion-adept who hears the voices clearly and pities them (Auralis, tempted to 'free' them by using them)"]
  visible_stage_1_symptoms: ["Possession of corrupted-sap caches", "Unusually fast healing or unusually decisive growth-shaping", "Knowing things one shouldn't (oracle leakage)", "Faint blight at the user's feet"]
  visible_stage_2_symptoms: ["The user calls the corrupted rootwell 'mine' or 'ours'", "They defend the wound against would-be healers", "Names slip — they answer to a dead person's name without noticing", "Soil corruption follows them"]
  visible_stage_3_symptoms: ["The user speaks in the chorus of the trapped", "They cannot release a soul even when they want to", "Their presence sickens clean rootwells", "They have become a walking node of the wound — a person-shaped soul-trap"]
}
```

**The Void's Verdance-specific cruelty** is that it offers *mercy.* It does not say
"become evil"; it says "you can save them now, and you of all people know the dead
are still here — so use them, free them by using them, end their suffering the fast
way." The MVP hinges on this: the Void wants the player to believe **the corrupted
shortcut is mercy.** Auralis Greenwake is the most dangerous vector precisely
because their compassion is real — they genuinely hear the trapped and genuinely
want to help, and the Void offers to "help" through them.

---

## 10. Magic System

Verdant magic is collectively called **Sapcraft**, but it is really a family of
seven interrelated disciplines, all drawing on the same living network.

```ts
MagicSystemState {
  domain: "Verdance"
  system_name: "Sapcraft (the Seven Disciplines: Sapcraft proper, Root-Communion, Tree-Memory Reading, Growth-Shaping, Rot-Tending, Seed-Binding, Mycelial Messaging)"
  source: "The living root-network / Verdance Stone (the Heartroot), accessed locally through rootwells, living wood, soil, spores, and seed."
  practitioners: ["Sap-healers (village healers)", "Rootwardens (containment specialists)", "Greenwake communers (Root-Communion adepts)", "Memory-readers / root-archivists", "Growth-shapers (living-architecture and agriculture guilds)", "Rot-tenders (decay/compost specialists — the discipline the Hollow Pact perverts)", "Seed-binders (Seed Guild)", "Mycelial relayers (the network's couriers and spies)"]
  institutions: ["The Heartmoot and regional rootmoots", "The Rootwarden custodial order", "The Greenwake Communion", "The Seed Guild's seed-vaults and graft-houses", "Village sap-healing houses", "Root-archives (memory libraries)"]
  training_access: "regulated"  // most disciplines are common-to-regulated; Naming-Back, deep Passage Tending, and any rot-tending near soul-flow are restricted; soul-sap / weaponized rot is forbidden (and is exactly what the Hollow Pact does on the black market)
  battlefield_use: ["Thornwall and living-fortification growth", "Entangling and snaring terrain", "Spore clouds (sleep, confusion, sickness)", "Healing and field-restoration", "Mycelial early-warning intelligence", "(forbidden) corrupted-sap blight-traps and soul-sap"]
  economic_use: ["Healing-sap production", "Restorative medicine", "Living timber and grafted goods", "Soil-restoration services", "Seed trade and graft-stock", "Network message relay (mycelial post)", "Memory/lineage/witness services"]
  political_use: ["Rootmoot communion as the literal mechanism of governance", "Naming-Back as a tool of legitimacy (who can recover/confer names)", "Control of rootwell access as control of healing and of the dead", "Root-memory as the ultimate evidentiary record"]
  spiritual_use: ["Passage Tending (releasing the dead)", "Grief-communion", "Ancestral consultation", "Sap-blessing rites", "Heartroot Vigil"]
  civilian_use: ["Everyday healing", "Grown homes, bridges, walls, tools", "Crop and soil tending", "Long-distance messaging", "Genealogy and remembrance"]
  cost_types: ["life_force", "physical_exhaustion", "domain_stone_strain", "resource_consumption (sap/seed)", "memory (deep reading bleeds the reader's own memory)", "soul_integrity (Passage Tending and any rot-near-souls)", "corruption (corrupted sap)", "void_dependency (soul-sap / weaponized rot)"]
  abuse_modes: ["Forced healing-communion", "Naming-Back monopoly / name-selling", "Hoarding clean sap", "Eugenic growth-shaping (biological control)", "Soul-sap extraction", "Weaponized blight", "Using trapped voices as oracle/weapon", "Mycelial surveillance of one's own people"]
  scarcity_level: 64   // clean potent sap is increasingly scarce as corruption spreads; common low-grade sapcraft is abundant
  public_trust: 71     // Verdants deeply trust sapcraft in general; trust in rootwell-sourced magic specifically is falling where corruption is known
  faction_control: { Rootwardens: 70, "Heartmoot": 65, "Greenwake Communion": 55, "Seed Guild": 60, "Sap Commons": 40, "Hollow Pact": 30 }
  keeper_corruption_vector: "Corrupt the source (rootwells) so that all seven disciplines drawing on it quietly carry the wound; make rot-tending — the honorable discipline of decay — the gateway to weaponized rot."
  void_enhancement_vector: "Offer the corrupted source as an UPGRADE: soul-sap heals more, blight-traps kill more, trapped voices know more. Each upgrade deepens dependency and corruption."
}
```

### The Seven Disciplines (quick reference)

1. **Sapcraft proper** — drawing, refining, and applying sap for healing, growth,
   protection, and (corrupted) harm. The trunk discipline.
2. **Root-Communion** — listening to and through the network; consensus,
   ancestral consultation, grief-communion. The Greenwake Communion's art.
3. **Tree-Memory Reading** — reading the recorded past in living wood and roots;
   archives, witness, evidence, lineage. Costs the reader fragments of their *own*
   memory when pushed deep.
4. **Growth-Shaping** — accelerating and directing growth to grow homes, walls,
   bridges, crops, fortifications. The Seed Guild and growth-shaper guilds. The
   discipline that, corrupted, becomes biological control.
5. **Rot-Tending** — the honored stewardship of decay and composting, including the
   sacred composting of the dead into memory. The discipline the Hollow Pact perverts
   into weaponized rot.
6. **Seed-Binding** — preserving, breeding, and binding seed and graft-stock; the
   economic foundation of the Seed Guild; corruptible into eugenic stock-control.
7. **Mycelial Messaging** — the underground fungal relay: messages, alarms, and
   intelligence carried through the network at the speed of root. Verdance's
   nervous system and spy network at once.

---

## 11. Magic Costs

```ts
MagicCost[] // the costs Verdant magic actually charges
```

```ts
MagicCost {
  cost_name: "Life-force draw (the green tax)"
  cost_type: "life_force"
  description: "Sapcraft pulls vitality — the practitioner's, the land's, or both — to power growth and healing. Honest sapcraft pays from the practitioner; corrupt sapcraft pays from the land or from trapped souls."
  minor_effect: "Fatigue, hunger, a season's faster aging in the hands."
  moderate_effect: "Days of exhaustion; the practitioner must 'lie fallow.'"
  severe_effect: "Years of life spent; premature aging; collapse."
  recovery_method: "Rest, clean sap, communion, and time — life-force returns at the pace of growth, not the pace of need."
  permanent_risk: "Burnout — a practitioner who overspends becomes 'dry wood,' unable to channel; some die rooted."
  factions_that_accept_this_cost: ["Sap Commons (pay it honestly)", "Greenwake Communion", "Rootwardens"]
  factions_that_reject_this_cost: ["Hollow Pact (shifts the cost onto the land and the trapped dead instead)"]
}
```

```ts
MagicCost {
  cost_name: "Patience (time-cost)"
  cost_type: "physical_exhaustion"  // modeled as a time/opportunity cost in play
  description: "The deepest Verdant magic is slow by nature. A true cleansing-communion takes seasons; a grown fortress takes a year; a real restoration cannot be rushed. The cost is TIME, during which people may die and enemies may act."
  minor_effect: "A working takes hours instead of moments."
  moderate_effect: "A working takes weeks; the crisis evolves while you cast."
  severe_effect: "A working takes seasons; the world changes around the unfinished cure."
  recovery_method: "None — time is the cost; the only 'recovery' is having started early enough."
  permanent_risk: "The Keeper exploit: a cure that takes longer than the crisis allows tempts the user toward the fast, corrupted path."
  factions_that_accept_this_cost: ["Rootwardens", "Heartmoot", "Sap Commons (in principle)"]
  factions_that_reject_this_cost: ["Hollow Pact", "anyone the Void has reached"]
}
```

```ts
MagicCost {
  cost_name: "Network strain (domain_stone_strain)"
  cost_type: "domain_stone_strain"
  description: "Large workings load the root-network and the Heartroot. Drawing hard from a rootwell — especially a wounded one — strains the local node and, cumulatively, the Stone."
  minor_effect: "Local rootwell runs low or bitter for a season."
  moderate_effect: "Local node destabilizes; nearby sapcraft weakens; minor blight."
  severe_effect: "Rootwell collapse or corruption; soul-passage disrupted; domain_stone_stability drops domain-wide."
  recovery_method: "Fallow seasons, replanting from clean Heartroot cuttings, cleansing-communion."
  permanent_risk: "A collapsed/corrupted rootwell becomes a soul-trap (see Thornveil)."
  factions_that_accept_this_cost: ["Seed Guild (treats it as a managed externality)"]
  factions_that_reject_this_cost: ["Rootwardens", "Greenwake Communion"]
}
```

```ts
MagicCost {
  cost_name: "Memory-bleed"
  cost_type: "memory"
  description: "Deep tree-memory reading and Naming-Back draw the reader INTO the network's memory — and the network takes some of the reader's own in exchange, as if composting it."
  minor_effect: "A blurred recent memory; a forgotten name returns wrong."
  moderate_effect: "Lost stretches of personal history; confusing one's own past with the dead's."
  severe_effect: "Identity erosion; the reader 'goes into the roots' and does not fully come back."
  recovery_method: "Grief-communion to re-anchor; loved ones re-telling the reader their own life; rest."
  permanent_risk: "identity_dissolution — the reader becomes a vessel for the dead they read."
  factions_that_accept_this_cost: ["Greenwake Communion (carefully)", "Root-archivists"]
  factions_that_reject_this_cost: ["Most villagers (fear it)"]
}
```

```ts
MagicCost {
  cost_name: "Soul-integrity cost (Passage and the rot-near-souls line)"
  cost_type: "soul_integrity"
  description: "Tending the passage of the dead, and any rot-tending near soul-flow, brushes the user's own soul against the threshold. Done cleanly and rarely, it is bearable; done often, carelessly, or for power, it scars."
  minor_effect: "Heaviness; the user 'carries' a passage for days."
  moderate_effect: "Soul-scar; the user becomes a faint draw for the restless dead."
  severe_effect: "Soul binding/splitting; the user can no longer fully release what they hold."
  recovery_method: "Clean Passage Tending performed FOR the user by another; outside soul-healing; long fallow."
  permanent_risk: "The user becomes a node of the wound — a person-shaped soul-trap."
  factions_that_accept_this_cost: ["Greenwake Communion (with ritual safeguards)"]
  factions_that_reject_this_cost: ["Rootwardens forbid casual Passage work"]
}
```

```ts
MagicCost {
  cost_name: "Corruption and void-dependency (the forbidden cost)"
  cost_type: "corruption"
  description: "Corrupted sap and soul-sap pay their power with corruption (soil, network, user) and, when the trapped dead are drawn on, void_dependency. This is the Hollow Pact's economy and the Void's hook."
  minor_effect: "Faint blight at the user's feet; a craving to use it again."
  moderate_effect: "Spreading soil corruption; clean sap feels weak; the trapped voices grow familiar."
  severe_effect: "The user becomes a corruption vector; soul-flow wounds deepen; reality stability drops; keeper_pressure rises."
  recovery_method: "Renunciation, cleansing-communion, releasing the souls drawn on, replanting — slow, costly, uncertain."
  permanent_risk: "Becoming Hollow — a living instrument of the wound."
  factions_that_accept_this_cost: ["Hollow Pact (embraces it)"]
  factions_that_reject_this_cost: ["Every other Verdant faction (officially)"]
}
```

> **Costing rule for VERDAX.** Honest Verdant magic pays in **life-force, time,
> and personal memory.** Corrupt Verdant magic pays the same powers' bills by
> **shifting the cost onto the land, the network, and the trapped dead** — which is
> exactly why it feels cheaper and is catastrophically more expensive. When the
> player's sapcraft suddenly stops costing *them* anything, that is the Void.

---

## 12. Government and Authority

```ts
GovernmentProfile {
  domain: "Verdance"
  government_type: "Decentralized ecological theocracy by consensus — a federation of regional rootmoots (elder councils) crowned by the continental Heartmoot, all claiming legitimacy from communion with the root-network and the dead."
  ruling_body: "The Heartmoot at Greatroot Hollow (the continental elder council), and beneath it regional rootmoots such as the Thornveil Rootmoot. Decisions are made by communion-consensus, not majority vote."
  religious_authority: "Overlaps with government — the same elders who govern also interpret the roots. The Greenwake Communion is a parallel, sometimes rival, spiritual authority that claims direct hearing."
  military_authority: "The Rootwarden order (custodial/defensive), commanded regionally by Wardens-Major; there is no standing offensive army by doctrine."
  economic_authority: "The Seed Guild (seed, graft-stock, sap markets) and the rootmoots' commons-stewards who govern the sacred-sap commons."
  magical_authority: "Distributed by discipline: Rootwardens (containment), Greenwake Communion (communion), Seed Guild (growth/seed), village sap-healers (healing), root-archivists (memory). The Heartmoot claims final interpretive authority."
  local_authorities: ["Regional rootmoots (e.g., Thornveil Rootmoot under Elder Maera Rootveil)", "Village elder-circles", "Grove-keepers", "Wardens-Major (regional Rootwarden command)", "Commons-stewards (sap rationing and access)"]
  succession_or_selection_method: "Elders are recognized, not elected — chosen by demonstrated depth of listening, long service, and the assent of the existing council and (claimed) the roots. There is no fixed term; elders serve until they 'go into the roots.' This makes the system gerontocratic by design."
  legitimacy_source: "The claim to hear the root-network and the dead truly, and to keep the cycle. An elder's authority IS their communion."
  known_cracks_in_legitimacy: ["If the roots speak (the rootwell at Thornveil literally now does) and contradict the elders, the elders' interpretive monopoly is exposed", "Selection by 'depth of listening' is unfalsifiable and easily captured (elder tyranny)", "No mechanism forces a decision — paralysis is structurally possible (stagnation)", "Sealing-and-denying corrupted rootwells is a known elite secret that, if exposed, shatters trust", "The Greenwake Communion can claim to hear MORE truly than the council"]
  emergency_powers: ["A rootmoot may declare a Withering (regional emergency), granting Wardens-Major temporary command and suspending normal commons-rationing", "The Heartmoot may call a Heartroot Vigil (continental convocation) — rare, slow, and itself a sign of crisis", "An elder may invoke Passage-Right to order a contested release of the dead — almost never used because it admits a wound exists"]
  corruption_vulnerabilities: ["Gerontocratic capture (elder tyranny)", "Decision-paralysis (stagnation)", "Secret-keeping elites (the sealed rootwells)", "Communion monopoly", "Commons-steward capture by the Seed Guild (hoarding)", "A Warden order that confuses 'containing' with 'never healing'"]
}
```

**How a rootmoot actually decides.** The Thornveil Rootmoot gathers around the
**Communion Bowl** — clean sap drawn (until recently) from the now-corrupted
rootwell. Elders drink, "listen together," and speak what they hear until a shared
sense emerges. This is genuinely beautiful and genuinely slow, and it has **no
tiebreaker except more listening** — which is why, under the pressure of the
speaking rootwell, the Thornveil Rootmoot has met four times and decided nothing.
That paralysis is the stage on which the MVP plays out.

---

## 13. Class Structure

Verdance's classes are organized less by wealth than by **relationship to the
network and the cycle** — who tends, who heals, who shapes, who guards, who
remembers, who is merely sheltered.

```ts
ClassStructure {
  domain: "Verdance"
  class_name: "Elders & Communers (the Listening Class)"
  description: "Recognized elders, communion-adepts, and root-archivists who govern and interpret. Authority by listening."
  privileges: ["Govern via rootmoot", "Interpret the roots and the dead", "Control Naming-Back and Passage rites", "First call on clean sap"]
  burdens: ["Expected to give their lives to service and 'go into the roots'", "Blamed when the cycle fails", "Bound by tradition that can paralyze them"]
  magic_access: "Deep Root-Communion, Tree-Memory Reading, Passage Tending, Naming-Back."
  military_obligation: "None directly; they authorize Withering and command policy."
  economic_role: "Stewardship, not production; they govern the commons."
  political_voice: "Decisive — they ARE the government."
  common_grievances: ["Reformers chafe at their paralysis", "The young feel unheard", "Accusations of secret-keeping (the sealed rootwells)"]
  faction_affinities: ["Heartmoot", "Rootwardens", "Greenwake Communion (contested)"]
  upward_mobility_paths: ["Demonstrated depth of communion over decades; sponsorship by sitting elders"]
  downward_mobility_risks: ["Being found to have mis-heard or concealed; losing one's communion (going 'dry')"]
}
```

```ts
ClassStructure {
  domain: "Verdance"
  class_name: "Healers, Growers & Shapers (the Tending Class)"
  description: "Sap-healers, growth-shapers, seed-binders, rot-tenders, farmers, and living-architects — the working magical backbone of Verdance."
  privileges: ["Honored craft", "Mobility between villages", "Access to regulated sapcraft training"]
  burdens: ["Pay the life-force and patience costs personally", "Held responsible for outcomes", "Burnout ('dry wood') ends careers"]
  magic_access: "Sapcraft proper, Growth-Shaping, Seed-Binding, Rot-Tending, everyday healing."
  military_obligation: "Field-restoration and medic duty in a Withering; non-combatant by tradition."
  economic_role: "Production — the export economy runs on them."
  political_voice: "Moderate; the Sap Commons gives them a voice the elders don't always grant."
  common_grievances: ["Carry the costs while elders make the calls", "Sap rationing hits their work", "Rot-tenders are stigmatized by association with the Hollow Pact"]
  faction_affinities: ["Sap Commons", "Seed Guild (growers/binders)", "village life"]
  upward_mobility_paths: ["Mastery of a discipline; recognition as a healer-of-renown; eldership over decades"]
  downward_mobility_risks: ["Burnout", "Association with corrupted sap", "Being scapegoated for a failed healing"]
}
```

```ts
ClassStructure {
  domain: "Verdance"
  class_name: "Rootwardens (the Guarding Class)"
  description: "The custodial/defensive order that contains corruption, guards rootwells, and defends the borders with biological and terrain warfare."
  privileges: ["Command in a Withering", "Authority over rootwell access and containment", "Respected as protectors"]
  burdens: ["Stationed at the wounds — they live with corruption daily", "Caught between containing and healing", "High soul-flow exposure"]
  magic_access: "Containment sapcraft, thornwall and living-fortification growth, spore warfare, mycelial intelligence, controlled rot-tending."
  military_obligation: "The defensive force of Verdance; lifelong service is common."
  economic_role: "Protective, not productive; funded by the commons."
  political_voice: "Strong on security and containment questions; allied with the Heartmoot but increasingly its own bloc."
  common_grievances: ["Asked to contain forever without a cure", "Lose comrades to corruption and despair (the road to the Hollow Pact)", "Resent reformers who call containment cowardice and radicals who call it weakness"]
  faction_affinities: ["Rootwardens faction", "Heartmoot"]
  upward_mobility_paths: ["Field merit; command as Warden-Major; rare crossover into eldership"]
  downward_mobility_risks: ["Corruption exposure", "Defection to the Hollow Pact", "Despair/fatalism"]
}
```

```ts
ClassStructure {
  domain: "Verdance"
  class_name: "Brokers & Stewards (the Trading Class)"
  description: "Seed Guild merchants, sap-brokers, commons-stewards, caravan-masters, and the administrators of Verdance's export economy."
  privileges: ["Control of sap/seed markets and trade routes", "Wealth", "Cross-domain contacts"]
  burdens: ["Blamed for hoarding and price spikes", "Exposed to corruption (smuggling clean sap, fending off soul-sap black markets)", "Distrusted by the tending class"]
  magic_access: "Seed-Binding, growth-shaping for trade goods, network relay for commerce; limited."
  military_obligation: "Fund and supply; rarely fight."
  economic_role: "The commercial engine; they move Verdance's exports and imports."
  political_voice: "Disproportionate to their numbers via Seed Guild wealth; quietly powerful in commons-stewardship."
  common_grievances: ["Painted as villains during scarcity", "Squeezed between the commons-ideal and the market reality", "Targeted by Hollow Pact and Abyss alike"]
  faction_affinities: ["Seed Guild"]
  upward_mobility_paths: ["Guild advancement; cornering a sap or seed market; marriage into eldership"]
  downward_mobility_risks: ["Ruin in a Withering", "Exposure as a hoarder or smuggler", "Robbery by raiders"]
}
```

```ts
ClassStructure {
  domain: "Verdance"
  class_name: "The Sheltered (Refugees, the Wounded, the Unrooted)"
  description: "Those Verdance takes in — refugees of other domains' wars, the wounded, the orphaned, the displaced. The Refuge tradition (Thornveil) exists for them. Not a permanent caste, but a precarious status."
  privileges: ["Right of refuge and healing (the tradition)", "Communal support"]
  burdens: ["No voice in the rootmoot until 'rooted' (long process)", "First to suffer when sap is rationed", "Easy recruits for the Hollow Pact's promise of agency", "Blamed for straining the commons"]
  magic_access: "Whatever they brought; access to Verdant training is restricted until rooted."
  military_obligation: "May volunteer to defend the Refuge; often the most desperate defenders."
  economic_role: "Labor; dependents during crisis."
  political_voice: "Near-none formally; the Sap Commons and Hollow Pact both court them."
  common_grievances: ["Sheltered but not heard", "Healed but not rooted", "Turned away when sap runs short — the betrayal at the heart of the MVP"]
  faction_affinities: ["Sap Commons (sympathy)", "Hollow Pact (recruitment)"]
  upward_mobility_paths: ["Being 'rooted' (formally adopted into a grove/lineage) over years; exceptional service"]
  downward_mobility_risks: ["Expulsion in a Withering", "Radicalization", "Becoming a soul-flow casualty if the rootwell takes their dead"]
}
```

---

## 14. Economy and Resources

```ts
DomainEconomy {
  domain: "Verdance"
  primary_resources: ["Healing-sap (clean, potent)", "Restorative medicines", "Living timber and grafted goods", "Seed and graft-stock", "Fertile, restored soil"]
  secondary_resources: ["Spores (medicinal and military)", "Mycelial relay capacity (message/intelligence service)", "Memory/lineage/witness services", "Grown structures (living architecture)", "Composting and soil-restoration services"]
  sacred_resources: ["Clean rootwell sap (the commons)", "Heartroot cuttings (for replanting — almost never released)", "Root-memory itself (the names of the dead)", "Passage Tending and Naming-Back rites"]
  scarce_resources: ["Clean potent sap (shrinking as corruption spreads)", "Heartroot cuttings", "Skilled non-burned-out healers", "Uncorrupted border soil"]
  export_goods: ["Healing-sap and restorative medicine (the flagship export, demanded by all domains — even Abyss buys it through fronts)", "Seed and graft-stock", "Living timber and grown goods", "Soil-restoration expertise", "Memory/witness/lineage services"]
  import_needs: ["Metal and stone (Verdance grows, but cannot grow everything)", "Fire-craft and forged tools (Radiance)", "Sky-transport and rare goods (Tempest)", "Manufactured arms (reluctantly)", "Labor during the great Witherings"]
  trade_routes: ["The Green Roads (overland caravan routes through living-grown waystations)", "River-and-root routes", "The Thornveil border markets (where refugees, traders, and smugglers meet)", "Mycelial relay (information, not goods)", "Sky-trade with Tempest (premium, weather-dependent)"]
  economic_institutions: ["The Seed Guild (seed/graft/sap markets, vaults, graft-houses)", "The sacred-sap commons (rootmoot-governed)", "Commons-stewardship (rationing and access)", "Village healing-houses", "Root-archives (paid memory services)"]
  black_market_goods: ["Corrupted sap and soul-sap (Hollow Pact)", "Smuggled clean sap (dodging rationing)", "Stolen Heartroot cuttings", "Trapped names/voices sold as oracle or weapon", "Abyss-sourced 'shortcut' reagents"]
  wartime_economy_behavior: "In a Withering, the commons tightens: sap is rationed (cards, priority lists), exports are cut to hoard healing capacity, the Seed Guild's prices spike, smuggling and the soul-sap black market boom, and refugees are squeezed first. The ECONOMY is where Verdant corruption usually starts — hoarding (7.5) and weaponized rot (7.6) both ignite here."
  famine_or_shortage_risks: ["Sap-blight (corruption shrinking clean supply)", "Soil corruption near borders", "Healer burnout reducing production", "A Withering cutting exports and starving partner domains of medicine", "Seed Guild hoarding turning a shortage into a crisis"]
  exploitative_practices: ["Sap hoarding and rationing-as-power", "Naming-back monopoly / name-selling", "Eugenic seed-stock control", "Soul-sap trafficking", "Charging refugees for refuge", "Selling the dead's memories"]
  keeper_attack_vector: "Manufacture sap scarcity (via rootwell corruption) so that the healing economy turns predatory — hoarding, rationing, and a soul-sap black market — converting Verdance's restoration-virtue into a market in which the wounded are abandoned and the corrupted shortcut is the cheapest product on the shelf."
}
```

**The export that makes Verdance matter.** Verdant **healing-sap is the best
restorative medicine in the world,** and *every* domain depends on it — including
Abyss, which buys it through Seed Guild fronts to keep its own occupied populations
docile and its soldiers in the field. This dependency is Verdance's chief
non-military power: a sap embargo is a real weapon. It is also a vulnerability:
when the Thornveil corruption shrinks the clean supply, the whole world feels the
price, and every domain develops an opinion about Verdance's internal crisis.

---

## 15. Military Doctrine

```ts
MilitaryDoctrine {
  domain: "Verdance"
  doctrine_name: "The Living Wall (defensive ecological attrition)"
  strategic_identity: "Verdance does not conquer; it endures, entangles, and outlasts. The land itself is the army. Victory is defined as the enemy's momentum decaying against living terrain until they withdraw — and as ground reclaimed and restored, not territory seized."
  preferred_battlefield: ["Deep forest and grown terrain", "Border thornwall lines", "Bog, root-maze, and spore-fog country", "Anywhere the network's mycelial intelligence gives early warning", "Defensive sieges of grown fortifications"]
  primary_units: ["Rootwarden defenders (containment + thornwall growth)", "Spore-skirmishers (sleep/confusion/sickness clouds)", "Snare-shapers (entangling terrain)", "Mycelial scouts (the network's eyes)"]
  elite_units: ["Wardens-Major and their thornwall companies", "Field-restorers / battle-medics (the true elite — they regrow what's lost)", "Greenwake communers attached for soul-flow defense at the rootwells"]
  support_units: ["Sap-healers and medic-restorers", "Living-architecture engineers (grow walls, traps, redoubts)", "Seed-binders (rapid-grow logistics)", "Caravan and commons supply"]
  magical_assets: ["Thornwall and living-fortification growth", "Spore warfare", "Entangling terrain", "Mycelial early-warning network", "Field restoration / battlefield healing", "(forbidden) corrupted-sap blight-traps and soul-sap — the Hollow Pact's contribution, doctrinally taboo"]
  defensive_strategy: "Layered living defense: mycelial warning → entangling approaches → thornwall lines → spore-fog killzones → grown redoubts → restoration of any ground retaken. Trade space and time for the enemy's exhaustion; never trade soul-flow for victory."
  offensive_strategy: "Doctrinally minimal — Verdance 'advances' by RESTORING contested ground (reclaiming poisoned soil, regrowing a razed grove) rather than by taking enemy territory. Raids are limited to disrupting Abyss soul-harvest infrastructure at the border."
  logistics_strategy: "Grown, not hauled: forward bases are grown from seed; supply is healing-sap and the land's own yield; the mycelial relay coordinates without messengers. Logistics is Verdance's quiet strength."
  intelligence_strategy: "The roots remember every footstep. Mycelial messaging gives Verdance superb defensive intelligence inside its own terrain — and near-blindness outside it. The Hollow Pact and Abyss both try to corrupt the relay to blind or deceive Verdance."
  taboo_tactics: ["Corrupted-sap / blight weapons (soul-flow damage)", "Soul-sap (drawing on the trapped dead)", "Scorched-earth that kills the land to deny it", "Forced-healing of captives", "Using the rootwell's trapped voices as a weapon", "Eugenic 'pruning' of populations"]
  desperate_tactics: ["Releasing a controlled rot to deny ground (a step toward weaponized rot)", "Flooding an area with spore-fog regardless of civilians", "Burning a corrupted grove (a Radiance-style 'cure' Verdance hates to use)", "Calling a Withering and conscripting the tending class", "Quietly tolerating Hollow Pact traps because they work"]
  common_weaknesses: ["Slow to mass and slower to decide (stagnation)", "Weak on open ground and in others' terrain", "Poor at offense; cannot project power", "Dependent on the network — corrupt the relay and Verdance goes blind and dumb", "Its own taboo weapons are devastatingly effective, which is a constant temptation", "A long siege tempts the defenders toward the Hollow Pact's shortcuts"]
  keeper_exploit: "Put Verdance under a siege it can only win slowly, beside a rootwell it could win instantly by corrupting — and let the defenders choose. Every corrupted-sap victory is a Keeper victory regardless of the battle's outcome."
  void_escalation: "Whisper to the cornered defender: 'The thornwall will fall before the cure is ready. The rot in the well would stop them tonight. Use it. Save them. You can heal the soil later.' The Void escalates a defensive crisis into a soul-flow catastrophe by offering the fast win."
}
```

---

## 16. Warfront Behavior

```ts
WarFrontBehavior {
  domain: "Verdance"
  typical_warfront_goals: ["Hold the border thornwall lines", "Protect and contain the rootwells (soul-flow defense)", "Reclaim and restore poisoned/contested ground", "Disrupt Abyss soul-harvest infrastructure at the border", "Shelter refugees (the Refuge tradition) — itself a strategic and moral commitment", "Avoid escalation that would force a faster, dirtier war"]
  preferred_escalation_methods: ["Grow the thornwall higher and deeper", "Thicken spore-fog killzones", "Call a regional Withering", "Tighten the sap embargo against a hostile domain (economic escalation)", "Expose an enemy's atrocity using root-memory evidence (informational escalation)"]
  preferred_deescalation_methods: ["Offer healing — even to the enemy's wounded (the Refuge tradition as diplomacy)", "Open a sap-export channel as a peace incentive", "Mediate via the network's memory (irrefutable shared record)", "Withdraw to a defensible line and simply outlast", "Naming-Back the enemy's honored dead as a gesture of respect"]
  negotiation_style: "Slow, communal, patient, and grounded in memory. Verdance negotiates as it governs — by listening until a shared sense emerges — which frustrates fast-moving domains (Tempest, Radiance) and is exploited by bad-faith ones (Abyss). Verdance's strongest cards are healing-sap and the irrefutable record of the roots."
  ceasefire_conditions: ["Enemy withdrawal from rootwell-threatening positions", "Cessation of soul-harvest activity", "Safe passage for refugees", "Restoration access to poisoned ground", "A wounded-exchange (Verdance will heal returned captives)"]
  betrayal_conditions: ["An 'ally' that burns a corrupted grove without consent (Radiance)", "A partner that traffics soul-sap or names (Abyss, Hollow Pact sympathizers)", "A trade partner that exploits a Withering to extort sap concessions", "Anyone who corrupts the mycelial relay", "An ally who pressures Verdance to abandon refugees"]
  alliance_conditions: ["A shared Abyss threat (the great unifier — see Section 22)", "A partner who respects soul-flow and will help heal, not just burn", "Reliable import of what Verdance cannot grow (metal, fire-craft) in exchange for sap", "A partner who will protect the Refuge tradition", "Tempest sky-mobility to compensate for Verdance's immobility"]
  occupation_style: "Verdance rarely occupies. When it holds reclaimed ground, it 'occupies' by RESTORING — regrowing, replanting, tending the local dead, and Naming-Back the wronged. This wins hearts slowly and is nearly impossible to sustain offensively. It does NOT garrison, tax, or rule conquered peoples; doing so is a sign Verdance has slid into biological control."
  resistance_style: "When Verdant land is occupied, resistance is the land itself: the thornwall regrows overnight, paths close, wells go bitter for the occupier, spores sicken the garrison, the mycelial relay feeds the resistance perfect intelligence, and the dead 'don't settle' for the invader. Verdant occupation is a slow nightmare for any conqueror — UNLESS the conqueror corrupts the rootwells first, which is precisely Abyss's strategy."
}
```

---

## 17. Major Locations

### 17.1 Thornveil Refuge (MVP primary location)

```ts
DomainLocation {
  name: "Thornveil Refuge"
  domain: "Verdance"
  location_type: "Border refuge-town and rootwell sanctuary (the MVP setting)"
  description: "A grown town wrapped in a living thornwall at Verdance's eastern border with the Abyss frontier. Founded generations ago on the Refuge tradition — to heal and shelter the wounded and displaced of every domain — Thornveil grew around a great rootwell whose clean sap fed both the town's healing-houses and its export trade. Now the rootwell is corrupted and has begun speaking names: first the names of the dead held in its roots, then, lately, the names of the living. The thornwall holds against Abyss patrols; the Rootmoot inside it holds against nothing, deadlocked while the well grows louder."
  political_function: "Seat of the Thornveil Rootmoot (Elder Maera Rootveil presiding); a contested microcosm of all four great factions; the place where Verdance decides what it will become."
  economic_function: "Border market and export node for healing-sap and seed; refugee labor hub; now a scarcity flashpoint as the corrupted well chokes the clean-sap supply."
  magical_function: "Site of a great rootwell — a soul-flow passage point and Sapcraft wellspring, now a soul-trap; a node of the living network and the mycelial relay."
  military_function: "Frontline Rootwarden bastion against Abyss border incursions; the eastern anchor of the thornwall line."
  spiritual_function: "A Passage-Tending site (where the region's dead are released) and grief-communion center — now failing, as the dead are trapped instead of released."
  civilian_function: "Home to native Verdants, generations of rooted refugees, and a swelling camp of new arrivals; healing-houses, market, and the Communion Bowl hall."
  controlling_factions: ["Thornveil Rootmoot (nominal)", "Rootwardens (security and the well)"]
  contested_by: ["Sap Commons", "Hollow Pact (cells in the refugee camp)", "Seed Guild (market and rationing)", "Greenwake Communion (claims the well speaks to them)", "Abyss (infiltration and the external wound)"]
  key_npcs: ["Elder Maera Rootveil", "Thalen Mossguard", "Sylune Amberroot", "Rook Thornlittle", "Nymara Hollowbloom", "Auralis Greenwake", "Venn Briarhook", "Brom Valefern", "Ilyra Thornsong", "Othren Deepbark"]
  resources_present: ["The great rootwell (corrupted)", "Healing-sap stores (dwindling)", "Seed and graft-stock", "The thornwall", "The mycelial relay node", "Root-memory archive"]
  magic_systems_present: ["All seven Sapcraft disciplines", "(illicit) corrupted-sap craft and soul-sap"]
  known_secrets: ["The rootwell is corrupted (publicly known)", "It speaks names (publicly known, feared)"]
  hidden_secrets: ["The corruption is an Abyss soul-harvest incision, not a natural blight", "The Heartmoot has sealed three prior rootwells and is leaning toward sealing this one too — abandoning its trapped dead", "Othren Deepbark has been quietly using mild corrupted-sap containment tricks for a season ('just to hold the line')", "Nymara's Hollow Pact cell is brewing soul-sap from the well's trapped voices", "Some of the living names the well now speaks belong to people not yet dead — including, possibly, a PC"]
  location_state: {
    stability: 38,            // dangerous — deadlocked governance, scarcity, frontline pressure
    danger: 66,              // high — Abyss patrols, Hollow Pact cells, an unstable rootwell
    corruption: 70,          // the rootwell itself; the town around it ~40 and rising
    morale: 34,              // weak — fear, scarcity, paralysis, refugees turned away
    resources: 41,           // strained — clean sap dwindling, rationing begun
    secrecy: 58,             // contested — the well's truth is leaking; elite secrets still hold
    military_pressure: 62,   // strong — frontline with the Abyss frontier
    spiritual_health: 29     // critical — Passage Tending failing, the dead un-released, grief un-completed
  }
  keeper_attack_vector: "Let the Rootmoot deadlock until the well stabilizes as a permanent trap; let scarcity turn the Refuge against its refugees; let the cornered defenders adopt the Hollow Pact's corrupted-sap shortcut; reframe the speaking voices as ancestral wisdom so no one frees them."
  void_symptoms: ["The well speaks names unbidden, including the living", "Corrupted sap heals faster and feels stronger", "Soil corruption creeping inward from the well", "Defenders craving the 'one tactic that works'", "Communers hearing the trapped beg to be 'used' to be freed"]
  quest_hooks: ["Discover WHY the well speaks names (the central mystery)", "Choose containment vs restoration vs weaponization vs stabilization (the four-faction fork)", "Trace the corruption to its Abyss source at the border", "Decide the fate of the trapped dead (release / hold / use)", "Confront whether to burn the well (Radiance's offer) and sever the passage", "Discover a living name the well speaks — and what it means", "Stop Nymara's soul-sap brewing — or join it"]
}
```

**Thornveil at a glance for the turn engine.** Stability 38 / danger 66 /
corruption 70 (well) / morale 34 / spiritual_health 29. This is a location on the
edge: functional enough that daily life continues, broken enough that any major
player action will ripple to depth 4–5. The corrupted rootwell makes *every*
soul-touching action here at least depth 5 by the Chunk 4 exception rule.

### 17.2 Greatroot Hollow & the Heartroot (continental center)

```ts
DomainLocation {
  name: "Greatroot Hollow (seat of the Heartmoot; site of the Heartroot)"
  domain: "Verdance"
  location_type: "Sacred capital — continental elder seat and the densest knot of the root-network"
  description: "Not a city of stone but a vast living hollow grown around the Heartroot: the oldest, deepest knot of the network, where the Verdance Stone's fragment first took root. Here the Heartmoot convenes, the cleanest sap is drawn, and the continental memory of the dead runs deepest. Greatroot Hollow is beautiful, ancient, and — increasingly — paralyzed, a place where great elders deliberate over border wounds they are reluctant to admit, let alone heal."
  political_function: "Seat of the Heartmoot; source of final interpretive authority; where Witherings and Heartroot Vigils are called."
  economic_function: "Reserve of Heartroot cuttings (the replanting stock); arbiter of the continental commons; not a market town."
  magical_function: "The Heartroot — the strongest expression of the Verdance Stone; the master node of the network and the deepest soul-flow passage; source of clean replanting stock."
  military_function: "Symbolic heart; lightly defended by tradition (its defense is the whole network); its fall would be catastrophic but it is far from the borders."
  spiritual_function: "The holiest site of Passage Tending, Naming-Back, and ancestral communion; site of the Heartroot Vigil."
  civilian_function: "Pilgrimage; the deepest grief-communions; the great root-archive."
  controlling_factions: ["Heartmoot elder council", "Greenwake Communion (strong presence; claims the Heartroot speaks to them)"]
  contested_by: ["Sap Commons (push for reform from here)", "Seed Guild (wants the Heartroot cuttings released to market)"]
  key_npcs: ["(senior Heartmoot elders — generation above Maera)", "ranking Greenwake communers", "the Keeper of Cuttings"]
  resources_present: ["The Heartroot", "Heartroot cuttings (the sacred replanting stock)", "The great root-archive", "The cleanest sap in Verdance"]
  magic_systems_present: ["Deepest Root-Communion and Tree-Memory Reading", "Passage Tending and Naming-Back at their truest", "All disciplines at their source"]
  known_secrets: ["The Heartroot keeps the continental cycle"]
  hidden_secrets: ["The Heartmoot has knowingly sealed and abandoned three corrupted border rootwells", "Heartroot stability is slowly eroding from the border wounds inward", "Some elders privately believe the network can no longer be fully healed and have embraced quiet fatalism", "The cleanest cure for Thornveil — Heartroot cuttings and a continental Vigil — exists here and is being withheld out of fear of admitting the wound"]
  location_state: {
    stability: 64,
    danger: 28,
    corruption: 18,          // low locally, but creeping inward
    morale: 52,
    resources: 78,           // rich in sacred stock — which it hoards
    secrecy: 76,             // high — elite secrets well kept
    military_pressure: 16,
    spiritual_health: 61     // still strong, but quietly declining
  }
  keeper_attack_vector: "Keep the cure locked in the capital by keeping the wound unadmitted; let the elders' fear of exposing past mistakes (the sealed wells) calcify into the fatalism that abandons the network."
  void_symptoms: ["Elders privately whispering that healing is hopeless", "Communers hearing the Heartroot 'sigh' under load", "A slow bitterness in the cleanest sap"]
  quest_hooks: ["Petition the Heartmoot to release Heartroot cuttings for Thornveil", "Expose the sealed-rootwell secret", "Call (or block) a Heartroot Vigil", "Break the elders' fatalism", "Recover a continental Naming-Back to release trapped dead at scale"]
}
```

### 17.3 The Eastern Thornwall (the border line)

```ts
DomainLocation {
  name: "The Eastern Thornwall (Abyss-frontier defensive line)"
  domain: "Verdance"
  location_type: "Living fortification line / contested borderland"
  description: "A continuous grown thornwall, kilometers deep in places, that walls Verdance's east against the Abyss frontier. Thornveil Refuge is its strongest bastion. The wall is a living organism the Rootwardens shape and feed; beyond it lies poisoned no-man's-land where Abyss soul-harvest infrastructure probes for rootwells to corrupt. The wall holds — but every season the soil beyond it dies a little more, and every season the temptation to defend it with corrupted sap grows."
  political_function: "The physical edge of Verdance; Wardens-Major command here; a place where doctrine meets desperation."
  economic_function: "Closes/opens the border markets; controls smuggling routes."
  magical_function: "The largest sustained growth-shaping working in Verdance; a mycelial-intelligence frontier; the line where soul-flow is most contested."
  military_function: "Verdance's primary defensive asset against Abyss."
  spiritual_function: "A graveyard frontier — many die here, and their passage is contested ground between Verdant Passage Tending and Abyss soul-harvest."
  civilian_function: "Refugee crossing point; border trade."
  controlling_factions: ["Rootwardens"]
  contested_by: ["Abyss (constant pressure)", "Hollow Pact (cells among the defenders)", "Seed Guild (border trade)"]
  key_npcs: ["Thalen Mossguard (Rootwarden)", "Othren Deepbark (containment officer)", "Brom Valefern (border quartermaster)"]
  resources_present: ["The thornwall itself", "Spore and snare killzones", "Border markets", "Contested rootwells (including Thornveil's)"]
  magic_systems_present: ["Containment and fortification growth-shaping", "Spore and snare warfare", "Mycelial intelligence", "(illicit) corrupted-sap traps"]
  known_secrets: ["The wall holds the Abyss frontier"]
  hidden_secrets: ["Abyss is deliberately targeting rootwells, not territory", "Some sections are already quietly defended with corrupted-sap traps", "Defectors cross both ways"]
  location_state: {
    stability: 47,
    danger: 71,
    corruption: 52,
    morale: 43,
    resources: 49,
    secrecy: 51,
    military_pressure: 78,
    spiritual_health: 33
  }
  keeper_attack_vector: "Grind the defenders down until corrupted-sap traps become normal doctrine; corrupt the rootwells behind the line to turn the whole frontier into a soul-harvest field."
  void_symptoms: ["Sections of wall fed on corrupted sap growing faster and meaner", "Defenders who 'don't settle' when they die", "Trap-residue blight spreading"]
  quest_hooks: ["Disrupt an Abyss soul-harvest engine beyond the wall", "Discover who authorized the corrupted-sap traps", "Hold a section without using the forbidden tactic", "Trace the Thornveil corruption to its frontier source"]
}
```

### 17.4 The Hollow Reach (Hollow Pact heartland — fringe)

```ts
DomainLocation {
  name: "The Hollow Reach"
  domain: "Verdance"
  location_type: "Corrupted-grove badlands / Hollow Pact sanctuary (fringe)"
  description: "A stretch of border-country where the soil has gone over to rot — abandoned by the Rootwardens, embraced by the Hollow Pact. Here corrupted groves grow in unnatural vigor, soul-sap is brewed, and the trapped voices are treated not as a tragedy to heal but as a resource and a congregation. The Hollow Reach is what Verdance becomes if weaponized rot wins: lush, powerful, and dead inside."
  political_function: "Hollow Pact base; a counter-state rejecting Heartmoot authority."
  economic_function: "Black-market soul-sap and corrupted reagents; trafficked names."
  magical_function: "Center of forbidden rot-craft and soul-sap; a deliberate soul-trap."
  military_function: "Hollow Pact staging ground; a source of devastating, taboo border tactics."
  spiritual_function: "A perverse 'communion' with the trapped — the dead used, not released."
  civilian_function: "Refuge for the desperate and the radicalized; a recruiting ground."
  controlling_factions: ["Hollow Pact"]
  contested_by: ["Rootwardens (containment raids)", "Abyss (courts and studies them)"]
  key_npcs: ["Nymara Hollowbloom", "(Hollow Pact cell-leaders, ex-Rootwardens, the bereaved)"]
  resources_present: ["Corrupted groves", "Soul-sap stores", "Trafficked names/voices", "Blight-trap stockpiles"]
  magic_systems_present: ["Weaponized rot-tending", "Soul-sap craft", "Trapped-voice oracle/weaponry"]
  known_secrets: ["The Hollow Pact weaponizes corrupted sap"]
  hidden_secrets: ["Abyss quietly supplies and studies them", "Some Hollow Pact 'oracles' are PCs' or NPCs' trapped dead", "Nymara genuinely believes she is freeing the dead by using them"]
  location_state: {
    stability: 44,           // internally cohesive, externally an enemy
    danger: 74,
    corruption: 88,
    morale: 57,              // zealous
    resources: 53,
    secrecy: 66,
    military_pressure: 45,
    spiritual_health: 9      // collapsed — a place of trapped souls
  }
  keeper_attack_vector: "This is the Keeper's preferred future for Verdance — a green civilization that harvests souls 'for good reasons.' Every Hollow Reach success normalizes weaponized rot domain-wide."
  void_symptoms: ["Unnatural vigor", "Oracle-voices", "Soil that screams", "Members who answer to the dead's names"]
  quest_hooks: ["Infiltrate or destroy a soul-sap operation", "Free trapped voices the Pact is using", "Turn or break Nymara", "Discover the Abyss supply line", "Decide whether the Pact's anti-Abyss usefulness outweighs its corruption (toleration logic)"]
}
```

---

## 18. Culture and Daily Life

```ts
CultureProfile {
  domain: "Verdance"
  daily_life_summary: "Verdant life runs on the cycle and the network. Days begin with tending — soil, grove, sick, or self — and turn around shared sap-bowls where neighbors 'listen together.' Homes are grown, not built; tools, walls, and bridges are living things that must be fed and pruned. Most Verdants practice some low sapcraft (a healing touch, a growing-hand) the way others read or cook. Life is slow, communal, patient, and deeply tied to place — most Verdants live and die within a day's walk of the grove that holds their dead. Beneath the gentleness runs a constant, quiet labor of tending and remembering, and lately a constant, quiet fear: the wells are going wrong."
  family_customs: "Kinship is 'rooting' — families are groves, not just bloodlines; one is 'rooted' into a grove by adoption, marriage, or long belonging, and refugees can be rooted over years. The dead remain part of the grove via root-memory and are consulted at festivals. Elders are revered, sometimes oppressively. Children are raised communally by the grove."
  love_and_marriage_customs: "Marriage is the Graftbond rite: two lives are grafted like two branches onto a shared root, witnessed by the grove and (ideally) blessed by clean rootwell sap. Love is patient and communal; possessive love is a recognized corruption ('a vine that strangles the tree'). Same-grove and cross-grove bonds are common; cross-DOMAIN bonds (a Verdant and a refugee) are romantic, fraught, and politically charged."
  education_system: "Apprenticeship to a discipline and to a grove. Children learn the cycle, basic sapcraft, the names of their grove's dead, and 'how to listen.' Deeper disciplines (communion, memory-reading, containment) require recognized mentors and, for the restricted arts, council sanction."
  work_and_apprenticeship: "Work is tending: healing, growing, shaping, binding, warding, remembering. Mastery takes decades; haste is shameful. The honored arc is apprentice → tender → master → (rarely) elder. Rot-tenders, though essential, carry stigma by association with the Hollow Pact."
  food_and_market_life: "Food is grown, foraged, fermented, and composted — nothing wasted (waste is taboo). Markets trade sap, seed, grafted goods, and memory-services; the sacred-sap commons is distributed, not sold, in principle — though scarcity is eroding that ideal. Border markets like Thornveil's are louder, more commercial, and morally murkier."
  funeral_or_death_customs: "Funerals are PLANTINGS. The dead are composted into the grove and their soul tended into the nearest rootwell by a Passage Tending rite, where their name and the shape of their life join root-memory before being released onward. The bereaved drink grief-communion sap and 'visit' the held fragment before letting go. To fail to release a death — to hold it — is the deepest wrong. The Thornveil crisis is, at its heart, a mass failure of this custom: the dead cannot be released, so grief cannot complete."
  festivals: ["Greenwake (spring — the cycle's renewal; the Greenwake Communion's high festival)", "The Wheel-Turn (each season's hinge)", "Naming Night (the dead are remembered and consulted)", "Heartroot Vigil (rare continental convocation)", "Graftbond celebrations (marriages)"]
  public_honors: ["'Better-rooted' (the highest praise — you leave things healthier)", "Healer-of-renown", "Listener (recognized depth of communion)", "Grove-keeper", "Restoration of poisoned ground (a hero's deed)"]
  taboos: ["Waste", "Haste in sacred matters", "Holding the dead (refusing release)", "Drawing soul-sap", "Forced healing", "Selling names", "Burning a living grove", "Speaking a living person's name into a rootwell"]
  common_sayings: ["'The wheel turns; sit with it.'", "'Slow is the strong way.'", "'Green wood bends; dry wood breaks.'", "'We do not turn away the wounded.'", "'The roots remember everything — that is mercy, and that is the danger.'", "'Pull one root and feel the whole grove move.'", "'Heal it; don't just hold it.'"]
  children_common_beliefs: ["'The dead go into the roots and are happy.'", "'If you're kind to a tree it remembers you.'", "'Listening is a kind of magic.'", "(new, fearful) 'Don't go near the well — it knows your name.'"]
  class_differences: ["Elders deliberate; tenders labor and pay the costs; Rootwardens guard the wounds; brokers move the goods and take the blame for scarcity; the sheltered are healed but unheard. The deepest cultural fault line is between those who carry the cycle's COSTS (tenders, wardens, refugees) and those who INTERPRET it (elders) — the Sap Commons exists to give the cost-bearers a voice."]
}
```

---

## 19. Religion / Philosophy / Ritual

```ts
ReligionProfile {
  domain: "Verdance"
  central_belief: "Life is one unbroken cycle of growth, decay, death, and renewal, held and remembered by the living root-network. Nothing is truly lost; the dead pass into the roots, are remembered, and are released onward. To tend the cycle — to heal, to compost, to release, to remember — is the holiest work. The cycle is not worshipped as a god but revered as the truth one lives WITHIN. The Heartroot is its deepest expression; the elders and communers are its listeners, not its priests-as-rulers (in principle)."
  sacred_symbols: ["The turning wheel (the cycle)", "The rootwell (passage and memory)", "The grafted branch (Graftbond, communion, continuity)", "The compost-mound / planting (death as renewal)", "The shared sap-bowl (communion)", "The Heartroot (the source)"]
  major_rituals: ["Passage Tending (releasing the dead into root-memory and onward)", "Grief-Communion (the bereaved visit a held fragment, then release it)", "Naming-Back (recovering a lost name to heal the living or honor the dead)", "Rootmoot Communion (governance-by-listening)", "Greenwake (spring renewal festival)", "Graftbond (marriage)", "Sap-Blessing (of newborns and new ground)", "Heartroot Vigil (continental healing convocation)", "The Withering declaration (emergency rite)"]
  common_prayers_or_oaths: ["'May you go into the roots and onward.' (for the dead)", "'I will leave it better-rooted.' (a vow of service)", "'We listen together.' (opening communion)", "'The wheel turns; we turn with it.' (acceptance)", "'I do not turn away the wounded.' (the Refuge oath)"]
  priestly_roles: ["Grove-keepers (local rites, plantings, grief-communion)", "Passage-Tenders (release the dead — the most sacred and now most strained role)", "Communers / Listeners (Greenwake Communion — direct hearing of the roots and the dead)", "Naming-Backers (recover and confer names — a contested, powerful role)", "Elders (interpret the cycle and govern)", "Root-archivists (keep the memory)"]
  heresies: ["The Hollow Pact's doctrine that 'if decay is part of the cycle, the cycle can be COMMANDED' — that the trapped dead can be 'freed by being used' (weaponized rot dressed as theology)", "Fatalist abandonment ('the cycle needs no tending; let it rot') — a quieter heresy that has reached even some elders", "Forced-healing perfectionism (the heresy that suffering and 'wrong' grief must be cured by force)", "The biological-control heresy that the cycle should be ENGINEERED, not tended"]
  sacred_taboos: ["Holding the dead (refusing release) — the cardinal sin", "Drawing soul-sap from the trapped", "Speaking a living person's name into a rootwell", "Burning a living grove or rootwell (severing passage)", "Forced healing", "Selling the dead's names or memories", "Waste"]
  relationship_to_death: "Death is a passage, not an end — the soul goes into the roots, is remembered, and is released onward. Death is sad but not feared, PROVIDED the passage completes. A blocked passage (a held or trapped death) is the deepest horror, because it traps the loved one and breaks the cycle. The Thornveil crisis is a religious catastrophe: deaths that cannot complete."
  relationship_to_sacrifice: "Verdance honors PATIENT sacrifice — the healer who spends their life-force, the warden who guards the wound for decades, the elder who 'goes into the roots' — over dramatic sacrifice. It is suspicious of glory-sacrifice (a Radiance value) and sees the fast, total gesture as often a refusal of the slow, true cost."
  relationship_to_memory: "Memory is sacred and literal — the roots remember everything, and that remembering IS how the dead persist and the past teaches. But Verdance also knows memory's danger: a memory held too tightly becomes a trap; the past must teach, not rule; the dead must be released, not kept. 'The roots remember everything — that is mercy, and that is the danger.'"
  relationship_to_truth: "Truth is what the roots record — irrefutable, ecological, communal. Verdance distrusts rhetoric and reveres witness. But its truth-keeping has a shadow: the elders' MONOPOLY on interpreting what the roots 'say' lets a lie hide inside a sacred truth (the sealed-rootwell secret; the redefinition of corruption as adaptation)."
  keeper_corruption_strategy: "Corrupt the religion at its tenderest point — the release of the dead. Block the passages, then let Verdance's reverence for memory and patience reframe the trapped dead as 'ancestors who chose to stay' and the corruption as 'a new season of the cycle,' so that the faithful DEFEND the wound as holy."
  void_false_revelation_style: "The Void speaks through the trapped voices themselves, in the language of compassion and communion: 'We are still here. We are suffering. You can free us — use us, and we will be at peace. Command the cycle and end our pain.' It offers a FALSE Passage Tending: release-by-exploitation. Auralis Greenwake, who genuinely hears the trapped, is its chosen prophet — a good listener tempted to a merciful-sounding heresy."
}
```

---

## 20. Faction Index

Six factions are defined: the four MVP factions, plus the spiritual/communion
order around Auralis (Greenwake Communion) and the central authority (Heartmoot
/ Rootmoot elder council). Each has a real point and a dangerous flaw.

```ts
DomainFactionIndex {
  domain: "Verdance"
  factions: [
    {
      name: "The Heartmoot / Rootmoot Elder Councils (central authority)"
      short_doctrine: "The cycle is kept by patient, communal listening. Authority flows from depth of communion. Decide slowly; revisit when the wheel turns. Contain wounds; do not act rashly."
      class_base: "Elders & Communers (the Listening Class); allied with Rootwardens."
      power_base: "Legitimacy (the claim to hear the roots and the dead truly), control of the Heartroot and the sacred replanting stock, interpretive monopoly over the cycle, and the governance machinery of the rootmoots."
      main_rival: "The Sap Commons (which says the cost-bearers, not the elders, should decide and the network should be HEALED, not just held)."
      keeper_vulnerability: "Stagnation and elder tyranny — the council's patience becomes paralysis and its interpretive monopoly hides its mistakes (the sealed rootwells), so it defends the wound by never admitting it. THE primary Keeper foothold in Verdance."
      player_use: "Source of sanction, sacred stock (Heartroot cuttings), and continental remedies (a Vigil) — IF the player can break its paralysis or expose its secret. Can legitimize or forbid the player's solution."
    },
    {
      name: "The Rootwardens (military / security — containment conservators)"
      short_doctrine: "Corruption must be CONTAINED. Guard the wells, hold the thornwall, keep the wound from spreading. Better a wound walled than a cure that fails. Discipline over experiment."
      class_base: "Rootwardens (the Guarding Class); border defenders and containment specialists."
      power_base: "Military force (the only real defensive army), control of rootwell access and the thornwall, mycelial intelligence, and the trust of a frightened populace that wants the wound CONTAINED."
      main_rival: "Officially the Hollow Pact (their defectors and their nightmare); functionally the Sap Commons (who call containment cowardice) and increasingly the Heartmoot (whose paralysis leaves them holding the line forever)."
      keeper_vulnerability: "Containment-as-permanent-stasis slides into stagnation; the despair of guarding an un-healing wound breeds defection to the Hollow Pact and a creeping willingness to use corrupted-sap traps 'just to hold the line' (Othren Deepbark's arc). A warden who decides containment will never end may decide the fast, dirty cure is mercy."
      player_use: "Muscle, intelligence, and rootwell access; allies for containing the well or disrupting Abyss; a faction the player can keep honest or watch slide. Thalen Mossguard is the player's likeliest Rootwarden ally."
    },
    {
      name: "The Sap Commons (economic/social reformers — restoration)"
      short_doctrine: "The network can be HEALED, not just held — and the sacred-sap commons belongs to the people who tend and bleed for it, not the elders who interpret it. Restoration over containment; the cost-bearers over the interpreters."
      class_base: "Healers, Growers & Shapers (the Tending Class) and sympathetic refugees; led by reformers like Sylune Amberroot."
      power_base: "The labor and skill that actually run the economy and the healing; moral authority (they want to HEAL); popular support among tenders and refugees; the genuine possibility of a real cure."
      main_rival: "The Heartmoot (over who decides and whether to heal) and the Rootwardens (over containment vs restoration)."
      keeper_vulnerability: "Impatience and forced healing — branded reckless by the elders, the Commons may try a half-ready cure that fails catastrophically, or slide into FORCING restoration on the unwilling. A cornered Commons cell that decides 'the slow true cure is too slow' is one despair away from the Hollow Pact's fast false one."
      player_use: "The player's natural allies for an actual cure; source of restoration expertise and popular legitimacy; a faction that needs the player to keep it honest (and patient enough) to succeed. Sylune Amberroot is the key contact."
    },
    {
      name: "The Hollow Pact (fringe / edge — weaponized corruption)"
      short_doctrine: "If decay is part of the cycle, the cycle can be COMMANDED. The corrupted sap is power; the trapped voices are kin to be freed by being USED; the elders are cowards and the wardens are jailers. Survival and agency now, by any rot necessary. (Self-image: liberators. Reality: a soul-trap with a creed.)"
      class_base: "The desperate and the bereaved — radicalized refugees, defected Rootwardens, disillusioned rot-tenders, the grief-stricken; led by Nymara Hollowbloom."
      power_base: "Devastating taboo weapons (corrupted-sap traps, soul-sap) that genuinely WORK against Abyss; the oracle of the trapped voices; the loyalty of the hopeless; covert Abyss supply; the Hollow Reach sanctuary."
      main_rival: "The Rootwardens (who hunt them) and the entire Verdant religious order (whose cardinal sin they commit). Yet — see Section 25 — even their enemies tolerate them when Abyss harvests souls, because the Pact kills Abyssians better than anyone."
      keeper_vulnerability: "They ARE the Keeper exploit made flesh — Verdance harvesting souls 'for good reasons.' Every victory normalizes weaponized rot; the Void has them entirely. Their tragedy: many, like Nymara, genuinely believe they are freeing the dead."
      player_use: "Forbidden power with catastrophic cost; an enemy to break or a desperate ally to tolerate against Abyss (a depth-5 toleration choice); a recruiter for a player on a dark path; the embodiment of the MVP's central temptation. Nymara can be turned, broken, or fallen-to."
    },
    {
      name: "The Seed Guild (economic / resource — stability)"
      short_doctrine: "Stability and continuity through the market. Keep the sap and seed flowing, the exports moving, the prices managed; a stable wound is better than a risky cure or a reckless purge. Protect the commons by PROFESSIONALIZING it."
      class_base: "Brokers & Stewards (the Trading Class); merchants, seed-binders, commons-stewards, caravan-masters."
      power_base: "Economic control of sap/seed markets, trade routes, the export economy (the world's healing-sap supply), and — via captured commons-stewardship — the rationing that decides who gets sap. Wealth and cross-domain contacts."
      main_rival: "The Sap Commons (over whether sap is a commons or a commodity) and the Heartmoot (over control of the sacred stock); uneasy with everyone during scarcity."
      keeper_vulnerability: "Resource hoarding and biological control — the Guild's instinct to STABILIZE the wound (keep selling around it) rather than heal it makes it a quiet ally of stagnation; its control of seed-stock is the gateway to eugenic biological control; and its rationing can turn the Refuge against its refugees. It would rather manage a corrupted asset than risk a cure."
      player_use: "Money, supply, logistics, smuggling, and cross-domain contacts (including, dangerously, leads on the Abyss connection — the Guild sells to Abyss fronts); a faction to pressure, expose, or use; Brom Valefern and Venn Briarhook are key contacts."
    },
    {
      name: "The Greenwake Communion (spiritual / magical authority)"
      short_doctrine: "The roots and the dead speak DIRECTLY to those who truly listen — not only through the elders' interpretation. Communion is the highest art; the trapped dead must be HEARD and released; the cycle is a relationship, not a doctrine."
      class_base: "Communers and Listeners across classes; spiritually-gifted refugees and tenders; led by Auralis Greenwake."
      power_base: "Unmatched depth of Root-Communion and direct hearing of the roots and the dead; spiritual legitimacy that rivals the elders'; the unique ability to actually COMMUNICATE with the trapped voices in the rootwell; popular devotion."
      main_rival: "The Heartmoot — because the Communion's direct hearing threatens the elders' interpretive monopoly (if Auralis can hear the dead truly and contradicts the council, the council's legitimacy cracks)."
      keeper_vulnerability: "The Void's chosen vector. Auralis genuinely hears the trapped and genuinely wants to free them — which makes the Void's lie ('free them by using them; command the cycle to end their pain') almost irresistible. Forced healing and a merciful-sounding heresy are the Communion's failure modes; a compassionate communer is one step from the Hollow Pact's theology, arriving by a kinder road."
      player_use: "The ONLY faction that can tell the player WHAT the rootwell is actually saying and WHO is trapped — indispensable to solving the mystery — but a faction (and a person, Auralis) the player must watch for the slow slide from communion to control. Auralis is both the player's best guide and a potential corruption vessel."
    }
  ]
}
```

**Faction tension map (for the turn engine).**
- **Contain vs Heal vs Weaponize vs Stabilize** is the four-way fork: Rootwardens
  (contain) ↔ Sap Commons (heal) ↔ Hollow Pact (weaponize) ↔ Seed Guild
  (stabilize), with the Heartmoot's paralysis enabling all of them and the
  Greenwake Communion holding the key information all of them need.
- **The deepest axis** is *interpreters vs cost-bearers*: Heartmoot/elders interpret
  the cycle; tenders, wardens, and refugees pay for it. Sap Commons and Greenwake
  Communion are both, in different ways, revolts of the cost-bearers and the
  direct-listeners against the interpreters.
- **The dangerous convergence** the Keeper wants: Heartmoot stagnation + Seed Guild
  stabilization + Rootwarden exhaustion → no cure → Hollow Pact's shortcut becomes
  the only thing that "works" → Verdance defends its wound.

---

## 21. NPC Role Index

Fifteen required roles, mapped to the MVP cast where possible.

```ts
NPCRoleIndex[] // 15 roles
```

```ts
NPCRoleIndex {
  domain: "Verdance"; role_name: "Ruler / Central Authority"
  mapped_npc: "Elder Maera Rootveil — presiding elder of the Thornveil Rootmoot"
  purpose_in_world: "Embodies the elder-council government and its virtue (patient communal wisdom) and corruption (stagnation, elder tyranny). She has presided over four indecisive rootmoots about the speaking well."
  purpose_in_gameplay: "Gatekeeper of sanction, sacred stock, and legitimacy; the player must move her to act, expose her secret (she knows the Heartmoot's sealing policy), or work around her paralysis. Her decision swings the whole region."
  likely_factions: ["Heartmoot / Rootmoot elder council", "aligned with Rootwardens"]
  likely_conflicts: ["vs Sap Commons (Sylune)", "vs Greenwake Communion (Auralis hearing what she won't)", "internal: her own grief and fear of admitting the sealed-wells mistake"]
  relationship_options: ["respected authority", "reluctant ally", "obstacle to overcome", "tragic figure to redeem (break her paralysis) or expose"]
  death_impact: "Catastrophic legitimacy vacuum — the Rootmoot fractures, the Sap Commons and Greenwake Communion vie to fill the void, the Rootwardens may seize emergency control, and the well's fate is thrown open. A martyrdom could either galvanize a cure or trigger the Hollow Pact's moment."
}
```

```ts
NPCRoleIndex {
  domain: "Verdance"; role_name: "Spiritual Authority"
  mapped_npc: "Auralis Greenwake — leader of the Greenwake Communion"
  purpose_in_world: "Embodies communion and direct hearing of the roots and the dead; the spiritual conscience of Verdance and its rival to elder interpretation. The only one who truly hears the trapped voices."
  purpose_in_gameplay: "Indispensable guide to the mystery (tells the player WHAT and WHO the well is) AND a slow-burn corruption vessel (the Void's merciful prophet). Their arc tests whether compassion becomes control."
  likely_factions: ["Greenwake Communion"]
  likely_conflicts: ["vs Heartmoot (interpretive monopoly)", "internal: the temptation to 'free' the trapped by using them", "vs Hollow Pact (whose theology is Auralis's compassion gone over the edge — a mirror they may resist or embrace)"]
  relationship_options: ["spiritual mentor", "romance candidate", "potential defector (to a merciful heresy)", "potential martyr", "potential corruption vessel"]
  death_impact: "The player loses their window into the well; the trapped voices go uninterpreted; the Communion radicalizes (possibly toward the Hollow Pact) or collapses; the chance of a true Passage-completion cure drops sharply."
}
```

```ts
NPCRoleIndex {
  domain: "Verdance"; role_name: "Military Commander"
  mapped_npc: "Thalen Mossguard — Rootwarden, frontline thornwall defender"
  purpose_in_world: "Embodies the Living Wall doctrine and the Rootwarden virtue (steadfast containment) and strain (holding a wound that never heals). The honest soldier caught between containing and curing."
  purpose_in_gameplay: "The player's likeliest Rootwarden ally — muscle, intelligence, rootwell access, and a moral barometer for the containment path. His trust is earned by respecting the line he holds; his fracture comes if the player uses corrupted sap."
  likely_factions: ["Rootwardens"]
  likely_conflicts: ["vs Hollow Pact (his defectors)", "vs Sap Commons (over containment vs cure)", "internal: loyalty to Maera vs frustration with her paralysis; comradeship with Othren vs Othren's slide"]
  relationship_options: ["trusted ally", "friend", "romance candidate", "rival if the player weaponizes rot", "potential martyr holding the wall"]
  death_impact: "The thornwall's morale cracks; containment weakens; Othren (or worse) takes command and the corrupted-sap-trap line is crossed openly; a rallying martyr or a collapse, depending on how he dies."
}
```

```ts
NPCRoleIndex {
  domain: "Verdance"; role_name: "Magic Expert"
  mapped_npc: "Othren Deepbark — Rootwarden containment officer and rot-tending specialist"
  purpose_in_world: "Embodies expert rot-tending — the honored discipline that borders the forbidden. He understands corrupted sap better than anyone loyal, which is exactly why he's the one quietly using it 'just to hold the line.'"
  purpose_in_gameplay: "Source of expert knowledge on the well, the corruption, and how it could be cleansed OR weaponized; a slow-slide cautionary NPC whose 'pragmatic' containment tricks are the first step down the Hollow Pact road. A potential defector/betrayer."
  likely_factions: ["Rootwardens (drifting toward Hollow Pact sympathy)"]
  likely_conflicts: ["internal: containment expertise vs the temptation to weaponize", "vs Thalen (comrade he's deceiving)", "vs Auralis (who can sense his soul-cost)"]
  relationship_options: ["expert mentor", "suspicious contact", "potential defector to the Hollow Pact", "potential betrayer", "redeemable if pulled back early"]
  death_impact: "His secret corrupted-sap use surfaces (scandal implicating the Rootwardens); his expertise on cleansing is lost; if he's already turned, his death may martyr him to the Pact or expose the Abyss supply line."
}
```

```ts
NPCRoleIndex {
  domain: "Verdance"; role_name: "Trader / Broker"
  mapped_npc: "Brom Valefern — Seed Guild border quartermaster and sap-broker"
  purpose_in_world: "Embodies the Seed Guild and the stabilize-the-wound, manage-the-market instinct; the man who decides who gets rationed sap and who quietly sells to whom — including, through fronts, to Abyss."
  purpose_in_gameplay: "Source of money, supply, smuggling, logistics, and the dangerous thread to the Abyss connection (the Guild's sales reveal who's buying). Pressure him, expose him, or use him. Embodies hoarding's human face."
  likely_factions: ["Seed Guild"]
  likely_conflicts: ["vs Sap Commons (commons vs commodity)", "vs refugees (rationing)", "internal: profit vs conscience; complicity in the Abyss trade"]
  relationship_options: ["useful broker", "blackmail target", "reluctant informant", "potential betrayer (sells the player out)", "potential redemption (turns on the Abyss trade)"]
  death_impact: "Supply chaos and a rationing crisis; the Abyss-trade thread may be buried with him or burst open as scandal; the Seed Guild closes ranks and grows more predatory."
}
```

```ts
NPCRoleIndex {
  domain: "Verdance"; role_name: "Healer"
  mapped_npc: "Sylune Amberroot — Sap Commons leader and healer-of-renown"
  purpose_in_world: "Embodies restoration and the Sap Commons; the brilliant healer who believes the network can be CURED and the commons belongs to its tenders. The moral engine of the 'heal it, don't just hold it' position."
  purpose_in_gameplay: "The player's natural ally for an actual cure; source of restoration expertise, popular legitimacy, and a real (if dangerous) path to healing the well. Needs the player to keep her patient enough to succeed and to stop her from forcing a half-ready cure."
  likely_factions: ["Sap Commons"]
  likely_conflicts: ["vs Heartmoot (who decides; whether to heal)", "vs Rootwardens (cure vs contain)", "internal: the temptation of forced healing and of a too-soon cure", "vs Seed Guild (commons vs commodity)"]
  relationship_options: ["trusted ally", "romance candidate", "friend", "potential martyr (dies attempting the cure)", "potential tragic radical (forces a failing cure)"]
  death_impact: "The restoration path loses its leader and its credibility; the Sap Commons fractures or radicalizes; the cure becomes far harder; her martyrdom could either inspire a careful continuation or panic the Commons into the Hollow Pact's fast alternative."
}
```

```ts
NPCRoleIndex {
  domain: "Verdance"; role_name: "Intelligence Figure"
  mapped_npc: "Venn Briarhook — Seed Guild caravan-master and information-broker"
  purpose_in_world: "Embodies the mycelial-relay-and-trade-route intelligence world; a smuggler-courier who knows the border's secrets — who crosses, who buys soul-sap, where the Abyss supply runs."
  purpose_in_gameplay: "Source of intelligence, smuggling routes, contacts, and leads (the Abyss connection, the Hollow Reach, the sealed wells). Mercenary and unreliable; sells to the highest bidder; a pragmatic survivor the Void could reach on a bad day."
  likely_factions: ["Seed Guild (loosely; loyal mainly to himself)"]
  likely_conflicts: ["vs anyone he's double-sold", "internal: pragmatism vs the line he won't cross (soul-sap?)", "vs Rootwardens (smuggling)"]
  relationship_options: ["mercenary contact", "suspicious ally", "potential betrayer", "potential defector to whoever pays/protects best", "surprising loyalty if treated as a person"]
  death_impact: "Intelligence and smuggling routes go dark; secrets he carried surface or vanish; the border information economy reshuffles; whoever he was selling to loses a source or covers their tracks."
}
```

```ts
NPCRoleIndex {
  domain: "Verdance"; role_name: "Civilian Morale Figure"
  mapped_npc: "Ilyra Thornsong — grove-keeper, Passage-Tender, and community voice of Thornveil"
  purpose_in_world: "Embodies daily Verdant life, the Refuge tradition, and the religious heart of the crisis — the Passage-Tender who can no longer release the town's dead because the well traps them. The face of the community's grief and fear."
  purpose_in_gameplay: "The player's window into how the crisis lands on ordinary people; barometer of civilian morale and the Refuge's soul (will it turn away its refugees?). Her failing rites are the human stakes; rallying or losing her swings the town's mood and resilience."
  likely_factions: ["community / Rootmoot-aligned; sympathetic to Sap Commons; reveres the Greenwake Communion"]
  likely_conflicts: ["vs the rationing (Seed Guild) that starves her people", "vs the paralysis that abandons her dead", "internal: her duty to release the dead vs her inability to do so; her faith vs her fear"]
  relationship_options: ["beloved community ally", "friend", "moral conscience", "potential martyr (dies defending refugees or attempting a release)", "potential despair-to-fatalism arc"]
  death_impact: "The community loses its heart and its Passage-Tender; grief in Thornveil goes fully un-tended (spiritual_health crashes); morale collapses; the Refuge tradition may die with her, or her death may shame the town into honoring it."
}
```

```ts
NPCRoleIndex {
  domain: "Verdance"; role_name: "Young Stakes Character"
  mapped_npc: "Rook Thornlittle — an orphaned refugee youth of Thornveil"
  purpose_in_world: "Embodies the Sheltered and the next generation; a refugee child/youth healed but not yet rooted, whose dead parent's name the well has begun to speak. The future Verdance is fighting over."
  purpose_in_gameplay: "Emotional stakes and a living clue — the well speaks Rook's parent's name (and maybe begins to speak ROOK's). Drives the player into the mystery; a recruiting prize the Sap Commons (shelter), Hollow Pact (agency/revenge), and Greenwake Communion (gift) all want. The player's choices shape whether Rook is rooted, radicalized, or lost."
  likely_factions: ["unrooted refugee; courted by Sap Commons, Hollow Pact, Greenwake Communion"]
  likely_conflicts: ["grief for a trapped parent", "the Hollow Pact's offer of revenge-as-agency", "fear that the well will take Rook too"]
  relationship_options: ["ward / charge to protect", "younger-sibling bond", "tragic loss", "radicalized into the Hollow Pact if abandoned", "rooted and healed if cared for"]
  death_impact: "If Rook dies — especially into the well — it is a soul-flow gut-punch (a child trapped), a radicalizing event for the refugees, and a damning verdict on the Refuge that failed its youngest. A galvanizing or shattering loss."
}
```

```ts
NPCRoleIndex {
  domain: "Verdance"; role_name: "Rival / Edge Character"
  mapped_npc: "Nymara Hollowbloom — Hollow Pact cell-leader (also the villain/corruption vessel)"
  purpose_in_world: "Embodies weaponized rot and the Void's Verdance lie made flesh; the bereaved zealot who believes commanding the corrupted cycle is mercy and that the trapped dead are 'freed by being used.' The dark mirror of every Verdant virtue."
  purpose_in_gameplay: "Primary antagonist of the restoration path AND a seductive recruiter for a dark player; the embodiment of the central temptation; a depth-5 toleration dilemma (her Pact kills Abyssians better than anyone). Can be broken, turned, tolerated, or fallen-to."
  likely_factions: ["Hollow Pact"]
  likely_conflicts: ["vs Rootwardens (who hunt her)", "vs the entire religious order (cardinal sin)", "vs Auralis (her mirror — same hearing, opposite choice)", "internal: her genuine belief she is freeing the dead vs the truth that she traps them tighter"]
  relationship_options: ["declared enemy", "tolerable rival vs Abyss (toleration state)", "dark mentor for a corrupting player", "tragic figure to turn or break", "blood enemy if she takes someone the player loves"]
  death_impact: "The Hollow Pact loses its charismatic center and may fracture (some return, some go deeper, some defect to Abyss); the trapped voices she 'channeled' are released or scattered; her martyrdom could either discredit or sanctify weaponized rot, depending on how she dies and who tells the story."
}
```

```ts
NPCRoleIndex {
  domain: "Verdance"; role_name: "Romance Candidate"
  mapped_npc: "Sylune Amberroot (primary) and/or Auralis Greenwake (alternate)"
  purpose_in_world: "Romance is grafted, patient, and communal in Verdance, and politically charged across the cure-vs-contain divide. A Verdant lover embodies a path: Sylune the restoration path, Auralis the communion (and corruption-risk) path."
  purpose_in_gameplay: "Emotional investment that does NOT erase ideology — a lover may oppose the player publicly over weaponized rot or forced healing (Section 25). Romance raises the stakes of every faction choice and every corruption temptation."
  likely_factions: ["Sap Commons (Sylune)", "Greenwake Communion (Auralis)"]
  likely_conflicts: ["love vs faction duty", "love vs the player's methods (corrupted sap will fracture either bond)", "Auralis's corruption arc as a romance tragedy"]
  relationship_options: ["devoted lover", "lover-turned-public-opponent", "tragic romance (martyrdom or corruption)", "graftbond partner if the bond survives the crisis"]
  death_impact: "Beyond the role-specific impacts above, a lost lover reshapes the player's reputation (martyr's partner / the one who got them killed) and can push the player toward or away from the Void's 'I could have saved them' lie."
}
```

```ts
NPCRoleIndex {
  domain: "Verdance"; role_name: "Potential Betrayer"
  mapped_npc: "Brom Valefern (sells the player out) or Venn Briarhook (double-sells)"
  purpose_in_world: "Betrayal in Verdance is never random — it comes from scarcity-pressure, debt, fear, faction duty, or a threatened secret (per Chunk 4). The Seed Guild's commercial pragmatism is the likeliest source."
  purpose_in_gameplay: "A relationship the player must read carefully; betrayal triggers (Section 25) are legible; the player can pre-empt, exploit, or be blindsided. Drives intelligence and trust gameplay."
  likely_factions: ["Seed Guild"]
  likely_conflicts: ["profit/survival vs loyalty", "fear of Abyss or the Pact vs loyalty to the player"]
  relationship_options: ["useful-but-watched contact", "pre-empted betrayer", "redeemed near-betrayer", "blindside betrayer"]
  death_impact: "If killed for/by betrayal, escalates the faction feud and may expose the secret the betrayal was meant to protect (e.g., the Abyss trade)."
}
```

```ts
NPCRoleIndex {
  domain: "Verdance"; role_name: "Potential Defector"
  mapped_npc: "Othren Deepbark (Rootwarden → Hollow Pact) and/or a wavering Sap Commons cell"
  purpose_in_world: "Defection flows along the despair gradient: contain → exhaustion → 'the fast cure is mercy' → Hollow Pact. Othren is the archetypal slow defector; a cornered Commons healer is the tragic one."
  purpose_in_gameplay: "A redeemable NPC the player can catch before the line, or lose; defection reshapes faction strength and reveals the corruption's pull. Early intervention vs too-late tragedy."
  likely_factions: ["Rootwardens → Hollow Pact", "Sap Commons → Hollow Pact"]
  likely_conflicts: ["loyalty vs despair", "expertise vs temptation", "comrades vs the shortcut that works"]
  relationship_options: ["pulled back from the brink", "lost to the Pact", "double agent", "tragic defector the player must later confront"]
  death_impact: "A defector's death can expose the Pact's supply line, martyr them to the cause, or shock a wavering faction back toward loyalty."
}
```

```ts
NPCRoleIndex {
  domain: "Verdance"; role_name: "Potential Martyr"
  mapped_npc: "Ilyra Thornsong, Thalen Mossguard, or Sylune Amberroot (context-dependent)"
  purpose_in_world: "Verdance honors PATIENT sacrifice (the warden who holds, the tender who releases, the healer who spends herself), not glory-death. A Verdant martyr dies tending, not charging."
  purpose_in_gameplay: "Per Chunk 4's death doctrine, a meaningful death reshapes the world: morale, healing capacity, faction resolve, and the player's name all shift. Martyrdom can galvanize a cure or trigger a collapse."
  likely_factions: ["community (Ilyra)", "Rootwardens (Thalen)", "Sap Commons (Sylune)"]
  likely_conflicts: ["the cause they die for vs the cost", "whether their death is honored or weaponized as a rumor"]
  relationship_options: ["honored fallen ally", "martyr whose name the player must protect from distortion", "a death the player could have prevented (Void hook)"]
  death_impact: "Defined per NPC above; in all cases the rumor ecology (Section 24) immediately contests the MEANING of the death — galvanizing, indicting, or sanctifying — and the player's response shapes which version sticks."
}
```

```ts
NPCRoleIndex {
  domain: "Verdance"; role_name: "Villain / Corruption Vessel"
  mapped_npc: "Nymara Hollowbloom (Verdance-internal) — with the Abyss soul-harvester behind the corruption as the external villain"
  purpose_in_world: "The corruption vessel must be SYMPATHETIC and DOMAIN-NATIVE, not a generic demon — Nymara is a grieving Verdant who took the Void's mercy-lie. The true external villain is the Abyss soul-harvest operation that made the wound."
  purpose_in_gameplay: "Embodies the Keeper exploit and the Void lie; offers the player the dark path; forces the toleration dilemma; and points (through her Abyss supply) toward the external threat to disrupt. Defeating the SYMPTOM (Nymara) without addressing the CAUSE (Abyss + the elders' paralysis) solves nothing — a deliberate depth-5 design."
  likely_factions: ["Hollow Pact (Nymara)", "Abyss (the hidden hand)"]
  likely_conflicts: ["Nymara vs everyone, yet useful vs Abyss", "Abyss vs all of Verdance"]
  relationship_options: ["sympathetic villain to turn/break", "tolerable-against-Abyss rival", "dark mentor", "the enemy behind the enemy (Abyss, largely unseen in the MVP)"]
  death_impact: "Killing Nymara is a symptom-cure: it may scatter the Pact and release some voices, but the well stays corrupted, the elders stay paralyzed, and Abyss keeps cutting — and a martyred Nymara can sanctify weaponized rot. The CAUSE must be addressed for a real resolution."
}
```

---

## 22. External Domain Relations

Verdance's exploitation matrix versus all four other domains and the Void. Two
threats dominate: the **Abyss soul-harvest** at the border (existential) and the
**Radiance "burn the corruption"** tension (a friend whose cure can kill).

```ts
ExternalDomainRelation {
  source_domain: "Verdance"; target_domain: "Abyss"
  public_relationship: "hostile"
  hidden_relationship: "Existential predator-and-prey. Abyss is the external engine of Verdance's soul-flow wounds; it deliberately corrupts rootwells to convert Verdant soul-passages into soul-harvest taps. Yet Abyss is also Verdance's biggest secret CUSTOMER — it buys healing-sap through Seed Guild fronts. Predation and trade run side by side."
  primary_conflict: "Abyss soul-harvesting at the Verdance border — corrupting rootwells (the Thornveil well), trapping the dead Verdance is meant to release, and tapping the soul-flow chokepoint. This is the metaphysical heart of the MVP."
  primary_dependency: "Abyss depends on Verdant healing-sap (bought covertly) to pacify and sustain its holdings; Verdance depends on holding the thornwall to keep Abyss out."
  resource_leverage: "Verdance can embargo healing-sap (real leverage, blunted by smuggling); Abyss can corrupt wells and harvest souls (leverage over Verdance's very metaphysical function)."
  magic_tension: "Sapcraft/Passage-Tending (release the dead) vs Veilstone soul-harvest (bind and own the dead) — diametrically opposed soul-flow philosophies meeting at the same rootwells."
  military_tension: "The Eastern Thornwall frontier; Abyss probes for wells, Verdance walls and outlasts. Abyss cannot easily conquer Verdant terrain UNLESS it corrupts the wells first — so it does."
  historical_wound: "Generations of border soul-harvest; three rootwells already corrupted, sealed, and abandoned; countless Verdant dead trapped or harvested at the frontier."
  possible_alliance_condition: "Effectively none — this is the closest Verdance has to an existential enemy. At most, a local, temporary ceasefire during a mutual catastrophe."
  possible_break_condition: "Already broken/hostile; it 'worsens' into open war if Abyss escalates from covert corruption to overt rootwell seizure."
  keeper_exploit: "Abyss IS the Keeper's primary instrument here; every trapped Verdant soul is direct prison-lattice damage. The Keeper wants Verdance too paralyzed and too tempted (by the Pact's shortcut) to heal what Abyss breaks."
  void_exploit: "The Void offers Verdance Abyss's OWN methods rebranded as defense — soul-sap, weaponized rot — so that in resisting Abyss, Verdance becomes a second Abyss. (This is the Hollow Pact.)"
}
```

```ts
ExternalDomainRelation {
  source_domain: "Verdance"; target_domain: "Radiance"
  public_relationship: "friendly"
  hidden_relationship: "A friendship with a knife in it. Radiance and Verdance both oppose Abyss and both revere renewal — but Radiance renews by BURNING and Verdance by COMPOSTING. Radiance's instinct to 'burn the corruption' at a rootwell would sever the soul-passage as surely as the corruption does, killing the trapped dead instead of freeing them. Verdance fears Radiance's cure more than it admits."
  primary_conflict: "Method of cleansing: fire (Radiance) vs patient restoration (Verdance). Radiance offers to 'help' Thornveil by burning the well — a horror to Verdance."
  primary_dependency: "Verdance imports fire-craft, forged tools, and metal from Radiance; Radiance depends on Verdant healing-sap for its wounded and on Verdant restoration of war-scorched ground."
  resource_leverage: "Verdance withholds healing-sap; Radiance withholds metal/fire-craft and offers (or threatens) military 'cleansing.'"
  magic_tension: "Sacred fire (purge) vs sapcraft (restore) — opposite responses to corruption; a Radiance flame near a rootwell is a soul-flow risk."
  military_tension: "Allied against Abyss, but a Radiance 'cleansing' expedition into Verdance without consent is a casus belli (a betrayal condition)."
  historical_wound: "Past 'helpful' Radiance burnings of corrupted Verdant groves that severed soul-passages — remembered bitterly; 'they called it mercy and our dead never came back.'"
  possible_alliance_condition: "A shared Abyss threat; Radiance pledging to BURN ONLY WITH CONSENT and to fund restoration of what it scorches; a joint operation where Radiance fire destroys an Abyss soul-engine while Verdance tends the freed souls."
  possible_break_condition: "Radiance burns a Verdant grove or rootwell without consent; Radiance demands Verdance adopt purge-doctrine against its own corruption."
  keeper_exploit: "Turn the anti-Abyss allies against each other over the well — Radiance burns, Verdance never forgives, the alliance that could have stopped Abyss fractures, and the Keeper keeps the chokepoint contested."
  void_exploit: "Whisper to Radiance that mercy-restoration is weakness ('burn it now') and to Verdance that the allies' fire is as bad as the rot ('trust no one; use the rot yourself')."
}
```

```ts
ExternalDomainRelation {
  source_domain: "Verdance"; target_domain: "Sanctuary"
  public_relationship: "friendly"
  hidden_relationship: "Natural partners with a paperwork friction. Both are protective, communal, and anti-Abyss; Sanctuary's law-and-oath order respects Verdance's witness-and-memory order. But Sanctuary wants the Thornveil crisis CONTAINED, REGISTERED, and CONTROLLED — its instinct to quarantine refugees and regulate dangerous magic chafes against Verdance's Refuge tradition and its tolerance of rot-tending."
  primary_conflict: "Containment-by-LAW (Sanctuary: register, quarantine, regulate) vs containment-by-CARE (Verdance: shelter, heal, tend). Sanctuary may demand Verdance close the Refuge to refugees as a security risk."
  primary_dependency: "Verdance provides healing-sap and restoration; Sanctuary provides law, oath-enforcement, and a shared protective front against Abyss; Sanctuary can grant the Refuge legal legitimacy."
  resource_leverage: "Verdant sap vs Sanctuary's legal/oath legitimacy and protective muscle."
  magic_tension: "Sapcraft (organic, communal) vs Light Eternal / oath-magic (lawful, binding); generally compatible, but Sanctuary distrusts rot-tending and Naming-Back as 'unregulated soul-magic.'"
  military_tension: "Allied; tension only if Sanctuary tries to enforce a quarantine on Verdant terms."
  historical_wound: "Times Sanctuary's quarantine-of-the-corrupted clashed with Verdance's refuse-no-wounded oath; refugees caught between a closed Sanctuary gate and a strained Verdant Refuge."
  possible_alliance_condition: "Joint protection of the Refuge under shared law; Sanctuary legitimizing the Refuge and helping register/heal refugees instead of turning them away; a united anti-Abyss soul-flow defense."
  possible_break_condition: "Sanctuary forces a refugee quarantine or demands the Refuge close; Verdance shelters someone Sanctuary has lawfully condemned."
  keeper_exploit: "Make protection itself the wedge — Sanctuary's 'control the dangerous' vs Verdance's 'turn away no one' — so the two protective domains fight over the refugees while Abyss harvests them."
  void_exploit: "Tell Sanctuary that Verdance's tolerance of rot-tending proves it's already corrupt; tell Verdance that Sanctuary's quarantine is cruelty — fracturing the alliance with mutual moral suspicion."
}
```

```ts
ExternalDomainRelation {
  source_domain: "Verdance"; target_domain: "Tempest"
  public_relationship: "tense"
  hidden_relationship: "Affectionate exasperation. Tempest's freedom-and-motion creed clashes with Verdance's rooted patience — the sky-folk find Verdance maddeningly slow and Verdance finds Tempest recklessly fast. Yet they need each other: Tempest's sky-mobility is the perfect complement to Verdance's immobility, and Tempest's dragon-riders can strike Abyss targets Verdance can't reach."
  primary_conflict: "Tempo and values: rootedness/patience vs freedom/motion. Tempest chafes at Verdant deliberation; Verdance distrusts Tempest's 'no one can restrain me' individualism (it looks like the Hollow Pact's 'agency now')."
  primary_dependency: "Verdance needs Tempest sky-transport, rare goods, and rapid strike capability (to compensate for its immobility); Tempest needs Verdant healing-sap and grown goods, and safe ground to land and resupply."
  resource_leverage: "Verdant sap and waystations vs Tempest's sky-routes and strike power."
  magic_tension: "Sapcraft (slow, rooted, communal) vs storm/bond magic (fast, free, individual) — culturally opposed but rarely directly conflicting."
  military_tension: "Not enemies; the friction is that Tempest won't hold a line and Verdance won't move — coordination is hard."
  historical_wound: "Tempest free-riders/corsairs raiding Verdant caravans; Verdance's refusal to commit fast to Tempest's quick wars; mutual stereotyping."
  possible_alliance_condition: "A shared Abyss strike where Tempest provides mobility/air power and Verdance provides healing, ground, and intelligence; a pact respecting both tempos."
  possible_break_condition: "Tempest corsairs raid the Refuge's supply; Verdance's slowness gets Tempest riders killed; a clash over a restrained dragon or a 'no one restrains me' incident."
  keeper_exploit: "Keep the natural allies mis-timed — Verdance too slow to support Tempest's strikes, Tempest too impatient to wait for Verdance's cure — so neither's strength covers the other's weakness against Abyss."
  void_exploit: "Tell Tempest that Verdant patience is cowardice and Tempest that Verdance would cage them like a dragon; tell Verdance that Tempest's recklessness will doom the Refuge."
}
```

```ts
ExternalDomainRelation {
  source_domain: "Verdance"; target_domain: "Void"
  public_relationship: "hostile"  // insofar as Verdance recognizes it; mostly the Void is hidden
  hidden_relationship: "The intimate parasite. The Void doesn't besiege Verdance from outside — it whispers from inside the wound, in the voice of the trapped dead and the language of mercy and communion. It is the most dangerous 'external' relation precisely because it feels internal and kind."
  primary_conflict: "The Void's lie ('if decay is part of the cycle, why not command it? free the trapped by using them') against Verdance's true creed (tend, release, restore — never command)."
  primary_dependency: "The Void depends on Verdance's wounds (corrupted wells, un-released grief, trapped souls) to feed; Verdance, when it accepts the lie, becomes dependent on corrupted-sap power (the Hollow Pact's spiral)."
  resource_leverage: "The Void offers real power (soul-sap, blight-traps, oracle-voices) at hidden soul-flow cost — the cheapest, most expensive product in Verdance."
  magic_tension: "It rebrands Verdant sapcraft as command-magic: rot-tending → weaponized rot; communion → using the dead; restoration → forced healing; memory → name-binding."
  military_tension: "It escalates every defensive crisis at the thornwall into a soul-flow catastrophe by offering the fast, corrupted win."
  historical_wound: "Every corrupted-sap victory ever won 'for good reasons'; the Hollow Pact's entire existence."
  possible_alliance_condition: "None — the Void cannot be allied with, only resisted; it can be temporarily USED at compounding cost (never cleanly)."
  possible_break_condition: "N/A — it is resisted, renounced, and starved (by healing wounds and releasing the trapped), not broken."
  keeper_exploit: "The Void is the Keeper's salesman in Verdance — it sells the methods that make Verdance damage its own soul-flow, so the Keeper need not act directly."
  void_exploit: "(self) The Void's whole game in Verdance: make mercy the bait. 'You can save them now. You of all people know the dead are still here. Use them — free them — command the cycle and end the pain.'"
}
```

**Exploitation matrix summary (how others exploit Verdance / how Verdance exploits
them).**

| Domain | How it exploits Verdance | How Verdance exploits it |
|---|---|---|
| **Abyss** | Corrupts rootwells; harvests trapped souls; buys sap covertly to fund its empire; offers the Pact the methods that turn Verdance into a second Abyss. | Sap embargo (blunted by smuggling); thornwall attrition; root-memory evidence of Abyss atrocities; Passage-Tending that denies Abyss the souls it wants. |
| **Radiance** | Offers/threatens "cleansing" fire that severs passages; pressures Verdance toward purge-doctrine; withholds metal and fire-craft. | Healing-sap for Radiance's wounded; restoration of scorched ground; moral authority of mercy over purge; a shared Abyss front. |
| **Sanctuary** | Pushes quarantine/registration that strains the Refuge tradition; distrusts rot-tending and Naming-Back as illegal soul-magic. | Healing-sap and restoration; the world's irrefutable memory/witness; a protective partner that legitimizes the Refuge. |
| **Tempest** | Corsair raids on caravans; pressures Verdance to move faster than it can; mocks its patience. | Sap, grown goods, and ground/waystations; intelligence from the roots; a healing haven for tired riders. |
| **Void** | Sells corrupted-sap power as defense and mercy; whispers through the trapped dead; turns every Verdant virtue into a command. | (Verdance cannot exploit the Void — only resist and starve it by healing wounds and releasing the trapped.) |

---

## 23. Internal Power Struggles

```ts
PowerStruggle {
  domain: "Verdance"; title: "The Speaking Well — Contain, Heal, Weaponize, or Stabilize? (the MVP struggle)"
  factions_involved: ["Rootwardens", "Sap Commons", "Hollow Pact", "Seed Guild", "Heartmoot/Rootmoot", "Greenwake Communion"]
  issue: "What to do about the corrupted Thornveil rootwell that has begun speaking names."
  public_argument: "Rootwardens: 'Contain it before it spreads.' Sap Commons: 'Heal it — the network can be restored.' Hollow Pact: 'Use it — the rot is power and the voices are kin to be freed.' Seed Guild: 'Stabilize it — keep the sap and the border trade flowing; don't risk a cure or a purge.' Heartmoot: 'Wait; listen; decide next season.' Greenwake Communion: 'First HEAR what it's saying and WHO is trapped.'"
  hidden_argument: "Underneath: who gets to DECIDE (interpreters vs cost-bearers), whether the Heartmoot will admit it sealed three wells before (and abandoned their dead), whether the corruption is an Abyss incision (which would demand a war no one's ready for), and whether anyone dares the slow true cure when the fast false one works tonight."
  resources_at_stake: ["The rootwell (a soul-flow passage / harvest tap)", "The trapped dead (and a possible PC's living name)", "The dwindling clean-sap supply", "The Refuge tradition", "Heartroot cuttings (the cure-stock, locked in the capital)", "Control of the Thornveil Rootmoot"]
  magic_systems_at_stake: ["Passage Tending (can it be restored?)", "Cleansing-communion (the slow cure)", "Soul-sap / weaponized rot (the fast corruption)", "Naming-Back (to release the trapped)"]
  npc_flashpoints: ["Maera's paralysis", "Sylune's cure proposal vs the elders", "Nymara's soul-sap brewing", "Othren's secret corrupted-sap use", "Auralis hearing the trapped beg", "Rook's parent's name in the well", "Ilyra's failing Passage rites"]
  possible_player_sides: ["Back the Rootwarden containment (safe, stagnating)", "Back the Sap Commons cure (hopeful, risky)", "Tolerate/use the Hollow Pact against Abyss (powerful, damning)", "Back the Seed Guild's stabilization (cynical, profitable)", "Force the Heartmoot to act / expose the sealed-wells secret", "Pursue the Greenwake Communion's hear-then-release path (the true cure, slowest and most dangerous to Auralis)"]
  compromise_possible: true  // the 'true' resolution braids restoration + communion + containment + addressing the Abyss cause; but it is the hardest path and requires breaking the Heartmoot's paralysis
  keeper_best_outcome: "Endless deadlock until the well stabilizes as a permanent trap, normalized as 'ancestors'; OR the Pact's shortcut becomes doctrine and Verdance starts harvesting souls 'for defense.' Either way Verdance defends its own wound."
  void_best_outcome: "Someone the player trusts (Auralis, or the player) 'frees' the trapped by USING them — false Passage Tending — binding them tighter and proving the merciful shortcut 'works.'"
  peaceful_resolution: "Break the Heartmoot's paralysis; release Heartroot cuttings; perform a true cleansing-communion + Passage-completion (hearing the trapped via Auralis, Naming them Back, releasing them); contain via the Rootwardens DURING the cure; address the Abyss incision at the source. Slow, costly, and real."
  violent_resolution: "Burn the well (Radiance's offer — severs the passage, kills the trapped); OR let the Pact weaponize it (a tactical win, a soul-flow catastrophe); OR a faction war for control of the Rootmoot."
  third_order_effect: "Whichever faction the player empowers reshapes the Thornveil Rootmoot and the regional balance; rumor and refugee sentiment shift; the clean-sap supply (and thus the world's medicine) rises or falls."
  fifth_order_effect: "The well's fate moves the regional soul-flow integrity, the Verdance Stone's stability, and keeper_pressure: a true cure heals a chokepoint and starves the Keeper; a trap, a burning, or a weaponization deepens the wound and feeds it — and sets the template for how the other three sealed wells (and the whole border) will be handled."
}
```

```ts
PowerStruggle {
  domain: "Verdance"; title: "The Sealed Wells — Heritage or Cover-Up?"
  factions_involved: ["Heartmoot", "Sap Commons", "Greenwake Communion", "Rootwardens"]
  issue: "The Heartmoot has quietly sealed and abandoned three prior corrupted rootwells — and their trapped dead — and is leaning toward doing the same to Thornveil."
  public_argument: "Heartmoot: 'Containment is sometimes the only mercy; some wounds cannot be healed without spreading them.' Sap Commons / Greenwake: 'You ABANDONED the dead and HID it; that is the cardinal sin dressed as policy.'"
  hidden_argument: "Whether the elders' interpretive monopoly exists partly to hide their failures; whether admitting the sealing means admitting the cycle can be broken (a faith-shaking truth); whether the cure was ever attempted or just feared."
  resources_at_stake: ["Heartmoot legitimacy", "The trapped dead of FOUR wells", "Public trust", "The precedent for Thornveil"]
  magic_systems_at_stake: ["Passage Tending", "Cleansing-communion", "Naming-Back at scale"]
  npc_flashpoints: ["Maera (she knows)", "Auralis (the dead of the sealed wells cry to them too)", "Senior Heartmoot elders"]
  possible_player_sides: ["Expose the secret (shatters Heartmoot legitimacy, opens the path to a cure, risks chaos)", "Bury it (preserves stability, complicit in abandonment)", "Use it as leverage to force a Thornveil cure"]
  compromise_possible: true  // the elders confess AND commit to a continental Vigil to heal all four wells — costly, humbling, and redemptive
  keeper_best_outcome: "The secret holds, the sealing becomes 'tradition,' and the trapped of four wells become permanent traps reframed as ancestors."
  void_best_outcome: "The exposure shatters trust so badly that Verdance fractures into faction war, leaving every well untended and every wound open to the Void."
  peaceful_resolution: "Maera and the Heartmoot confess, release the cuttings, and call a Heartroot Vigil to heal all four wells — turning the cover-up into a continental restoration."
  violent_resolution: "Exposure triggers a legitimacy collapse and a scramble (Sap Commons rising, Rootwardens seizing control, Hollow Pact exploiting the chaos)."
  third_order_effect: "Heartmoot authority either reforms (confession) or collapses (exposure-without-plan); the Sap Commons and Greenwake Communion rise; the Thornveil precedent is set."
  fifth_order_effect: "Continental soul-flow integrity and Verdance Stone stability swing on whether FOUR chokepoints are healed or abandoned — one of the largest single levers on keeper_pressure in the campaign."
}
```

```ts
PowerStruggle {
  domain: "Verdance"; title: "The Commons or the Market? (sap rationing at the Refuge)"
  factions_involved: ["Seed Guild", "Sap Commons", "Rootmoot", "the Sheltered (refugees)"]
  issue: "As clean sap grows scarce, who gets it — and is the sacred-sap commons a shared trust or a managed market?"
  public_argument: "Seed Guild: 'Ration responsibly; stabilize prices; protect the supply; survival first.' Sap Commons: 'Sap is a commons; the tenders and the wounded come before profit; you're hoarding life.'"
  hidden_argument: "Whether the Refuge will betray its founding oath (turn away the wounded) under economic pressure; whether the Guild's rationing is stewardship or enclosure; who profits from scarcity (and from selling to Abyss fronts)."
  resources_at_stake: ["The clean-sap supply", "The Refuge tradition", "Refugee survival", "The world's healing-sap export (and thus cross-domain leverage)"]
  magic_systems_at_stake: ["Healing-sap production and distribution"]
  npc_flashpoints: ["Brom Valefern (rationing and the Abyss trade)", "Sylune (commons)", "Ilyra (her people starved of sap)", "refugees turned away"]
  possible_player_sides: ["Defend the commons (moral, destabilizing to the market)", "Back managed rationing (pragmatic, betrays the wounded)", "Expose the Guild's Abyss sales", "Find/restore a clean-sap source to dissolve the scarcity"]
  compromise_possible: true
  keeper_best_outcome: "Scarcity turns the Refuge against its refugees; abandonment is normalized; the desperate flow to the Hollow Pact."
  void_best_outcome: "The hoarding drives the wounded to soul-sap (the only 'medicine' the desperate can get), spreading corruption through the very act of survival."
  peaceful_resolution: "Restore a clean source (cure the well, release cuttings), break the hoarding, and renew the Refuge oath; the commons holds."
  violent_resolution: "Bread-riot-style unrest, Guild crackdown, refugee radicalization, or a black-market soul-sap epidemic."
  third_order_effect: "The Refuge either keeps or breaks its oath; refugee loyalty flows to Sap Commons (kept) or Hollow Pact (broken); the export supply and cross-domain relations shift."
  fifth_order_effect: "If survival itself routes people to soul-sap, the scarcity becomes a soul-flow wound generator — a slow, economic feeding of the Void and the Keeper."
}
```

---

## 24. Rumor Ecology

```ts
DomainRumorEcology {
  domain: "Verdance"
  common_spread_channels: ["The mycelial relay (the network literally carries word — fast, but corruptible into FALSE rumor)", "Shared sap-bowls and communion gatherings (rumor travels with communion)", "Border markets (Thornveil, the Green Roads — where domains and refugees mix)", "Grove gossip and grief-communions", "The Greenwake Communion's interpretations (treated as near-prophecy)", "The trapped voices themselves (the well 'says' things people repeat as oracle)"]
  trusted_sources: ["Elders and recognized Listeners (the interpretive class)", "Greenwake communers (direct hearers)", "Root-memory / the archives (the irrefutable record)", "Grove-keepers and Passage-Tenders (Ilyra)", "Healers-of-renown (Sylune)"]
  distrusted_sources: ["The Seed Guild (assumed to spin for profit)", "Refugees (xenophobic discounting — 'they bring trouble')", "Anyone associated with rot-tending (Hollow Pact taint)", "Outsiders, especially Radiance 'help' and Tempest corsairs", "Self-proclaimed oracles repeating the well's voices"]
  rumor_emotional_styles: ["Grief-laden (the dead, the trapped, the failing rites)", "Slow-burning dread (the well, the spreading corruption)", "Reverent/prophetic (the well 'speaks truth'; the Communion 'has heard')", "Resentful (hoarding, abandonment, the sealed wells)", "Fatalist ('the cycle is turning against us')"]
  rumor_suppression_methods: ["Elder reinterpretation ('you misheard the roots')", "Communion consensus that 'settles' a rumor", "Root-memory evidence to refute (powerful but slow)", "Sealing-and-denying (the Heartmoot's literal method for the wells)", "Grove pressure / shaming the rumor-monger as 'not listening'"]
  rumor_weaponization_methods: ["Reframing corruption as adaptation ('the well speaks ancestral wisdom') — the Keeper's signature", "The Hollow Pact citing the well's voices as oracle to recruit", "The Seed Guild seeding 'the cure is reckless' to protect the stabilize-the-asset line", "Abyss spies seeding 'Verdance already uses corruption' to split the alliance", "Exposing/weaponizing the sealed-wells secret"]
  rumor_mutation_patterns: ["A true name from the well → 'the well speaks prophecy' → 'the well speaks the names of those it will TAKE' → panic", "'The player used corrupted sap' → 'the player is Hollow' → 'the player is Abyss' (the Verdance-specific slide: any soul-touching method becomes 'they're already corrupted')", "'The elders are cautious' → 'the elders are hiding something' → 'the elders sealed wells and let the dead rot' (the cover-up mutation)", "'Restoration is being attempted' → 'a reckless cure will spread the blight' (the stabilize-the-asset mutation)"]
  factions_best_at_rumor_warfare: ["The Heartmoot (controls interpretation and the relay)", "The Greenwake Communion (its hearings ARE rumor with prophetic authority)", "The Seed Guild (commercial spin)", "Abyss infiltrators (seeding alliance-splitting and 'Verdance is already corrupt' narratives)"]
}
```

**The signature Verdance rumor danger.** Because the well literally speaks and the
roots literally remember, **rumor and revelation are hard to tell apart** — a
"rumor" may be a trapped soul telling the truth, and a "prophecy" may be a Void lie
in a dead voice. VERDAX should exploit this ambiguity: the player often cannot know
whether the well's latest name is oracle, memory, or temptation until they
investigate — and the Hollow Pact, the Communion, and the Keeper each want a
different interpretation to spread.

---

## 25. Relationship Logic

```ts
DomainRelationshipLogic {
  domain: "Verdance"
  trust_is_built_by: ["Patience and consistency over time (Verdants trust the slow-proven, not the fast-promised)", "Respecting the cycle — releasing the dead, refusing waste, healing rather than just holding", "Listening genuinely (drinking the shared sap-bowl and meaning it)", "Restoring poisoned ground or healing at cost to oneself", "Protecting the Refuge / refusing to turn away the wounded", "Refusing the corrupted shortcut even when it would help"]
  trust_is_broken_by: ["Using corrupted sap or soul-sap (the cardinal violation — instantly suspect)", "Forcing healing or communion on the unwilling", "Hoarding sap / abandoning the wounded", "Haste in sacred matters (rushing a Passage, a cure, a decision)", "Burning a grove or well (severing passage)", "Holding the dead / refusing release", "Speaking a living name into the well"]
  enemies_become_tolerable_when: ["Abyss is actively harvesting souls (the great unifier — even the Hollow Pact is tolerated, even Radiance's fire is accepted, when Abyss is at the throat)", "A shared rootwell must be defended that neither side can hold alone", "Healing is needed that only the enemy can provide (or that the enemy's wounded need — the Refuge tradition extends even to enemies)", "A mutual catastrophe (a Withering, a spreading blight) overrides ideology", "The enemy holds a trapped soul or a true name the player needs to release someone"]
  allies_become_suspect_when: ["They adopt the corrupted shortcut 'just this once' (the slide is the betrayal)", "They counsel abandoning the wounded or the trapped (fatalism)", "They rush a cure or a Passage recklessly (forced healing)", "They hoard, or profit from scarcity", "They side with Radiance's 'burn it' or Sanctuary's 'quarantine it' against Verdant care", "An elder reinterprets the roots suspiciously conveniently (elder tyranny tell)"]
  romance_conflicts: ["A lover's faction duty vs the bond (Sylune's Commons, Auralis's Communion, Thalen's Wardens may each publicly oppose a player choice)", "Using corrupted sap will fracture any Verdant romance — love does not erase the cardinal sin", "Auralis's corruption arc as romantic tragedy (loving someone sliding into a merciful heresy)", "A cross-domain bond (Verdant + refugee) strained by the Refuge crisis"]
  betrayal_triggers: ["A threatened secret (Brom's Abyss trade; Othren's corrupted-sap use; the sealed wells)", "Unbearable scarcity/debt (a refugee or broker sells out to survive)", "Faction pressure exceeding personal loyalty (a Warden ordered to stop the player; an elder enforcing paralysis)", "Grief weaponized (the bereaved offered revenge/agency by the Pact)", "The Void's shortcut offered at the breaking point"]
  forgiveness_conditions: ["Genuine restoration of the harm (heal what you broke, release whom you trapped)", "Patient demonstrated change over time (not a fast apology)", "Submitting to communion/judgment (Auralis's or the Rootmoot's)", "Renouncing and reversing corrupted-sap use, at cost", "Naming-Back / releasing a soul to right a wrong"]
  permanent_enemy_conditions: ["Knowingly trapping the dead for power and refusing to release them", "Trafficking souls or names to Abyss", "Burning a rootwell and its trapped dead out of convenience", "Engineering/eugenic biological control of people", "Becoming a willing node of the wound (irredeemable Hollow)"]
  if_then_because_examples: [
    {
      if: "The player stops an Abyss patrol at Thornveil using corrupted-sap traps."
      then: "Hollow Pact respect rises sharply and they court the player; Rootwarden (Thalen) trust drops and suspicion rises; Sylune and Ilyra are alarmed; soil corruption rises."
      because: "Weaponized rot is the cardinal violation. The Pact sees a convert and a proof of concept; the Wardens see the line crossed; the healers see Verdance becoming what it shepherds against. The method, not the result, is what they judge."
    },
    {
      if: "Abyss launches an open soul-harvest at the border, threatening to take dozens of Verdant dead."
      then: "Even the Rootwardens and the Heartmoot will temporarily tolerate (or quietly deploy) the Hollow Pact, whose corrupted-sap weapons kill Abyssians better than anything clean."
      because: "When Abyss is actively harvesting souls, stopping the harvest overrides the horror of the method — survival and soul-rescue outrank doctrine, FOR NOW. (A TolerationState with reason 'metaphysical_emergency'/'shared_enemy', high hidden_resentment, and a near-certain post-crisis reckoning.)"
    },
    {
      if: "A Rootwarden discovers the player respected the containment line and refused the corrupted shortcut under pressure."
      then: "Thalen's trust and respect rise; he opens rootwell access and shares mycelial intelligence; he may become a devoted ally."
      because: "Rootwarden virtue is steadfast containment; proving you'll hold the hard, slow line instead of taking the dirty fast win is exactly what earns a Warden's loyalty."
    },
    {
      if: "The player exposes that the Heartmoot sealed and abandoned three rootwells (and their dead) before."
      then: "Heartmoot legitimacy drops hard; Sap Commons and Greenwake Communion rise; Maera is humiliated or, if handled with care, moved to confess and call a Vigil; chaos risk spikes."
      because: "The cardinal sin (holding/abandoning the dead) was committed by the very authority that interprets the cycle, AND it was hidden — the cover-up compounds the sin. Whether this redeems or shatters Verdance depends on whether a PLAN accompanies the exposure."
    },
    {
      if: "The player forces a half-ready restoration cure on the well to save the dying NOW, against Sylune's caution."
      then: "It may fail and SPREAD the corruption; even if it 'works,' Sap Commons trust drops and the Rootwardens feel vindicated about containment."
      because: "Forced/hasty healing is a Verdant corruption (7.3). Haste in sacred matters breaks trust; the cycle cannot be rushed; a cure imposed before it's ready is the restoration-virtue curdling into recklessness."
    },
    {
      if: "The player lets Auralis 'free' the trapped dead by USING them (the Void's false Passage Tending)."
      then: "A short-term 'release' that actually binds the souls tighter; Auralis slides toward the merciful heresy; void_resonance and keeper_pressure rise; the Communion begins to mirror the Hollow Pact."
      because: "The Void's lie is that the trapped can be freed by being commanded/used. It SOUNDS like mercy and gives a real-seeming result, but it deepens the wound — the most dangerous betrayal because it's done out of love."
    },
    {
      if: "The player defends the Refuge's oath and keeps it open to refugees during the sap shortage, against the Seed Guild's rationing."
      then: "Refugee loyalty and Ilyra's trust rise; Sap Commons rallies; Brom/Seed Guild resentment rises and they may withhold supply or sell the player out."
      because: "'We do not turn away the wounded' is Verdance's founding oath; honoring it under pressure is the deepest trust-builder for the cost-bearers — and a direct threat to the Guild's stabilize-and-profit interest."
    },
    {
      if: "Radiance allies offer to BURN the corrupted well to 'cleanse' it, and the player accepts without Verdant consent."
      then: "The trapped dead are destroyed (not freed); Verdant trust in BOTH Radiance and the player collapses; a historical wound reopens; the Rootmoot may turn on the player."
      because: "Burning severs the soul-passage — to Verdance it is murder of the already-dead and a violation of the cardinal taboo. Radiance's renewal-by-fire and Verdance's renewal-by-compost are incompatible cures, and consent is everything."
    },
    {
      if: "The player's lover (Sylune or Auralis) learns the player used soul-sap."
      then: "The lover opposes the player publicly even if the love remains; trust and affection drop; the relationship may survive privately but fractures politically."
      because: "Love does not erase ideology or the cardinal sin (Chunk 4 romance rule). A Verdant lover's belief in the cycle outweighs their affection when the player commands the rot."
    },
    {
      if: "The player releases a trapped soul (e.g., Rook's parent) through a true, patient Passage-completion."
      then: "Ilyra, Auralis, and the community's trust rise sharply; the well's corruption ticks down locally; grief begins to complete; the player may earn the label 'the Passage-Mender.'"
      because: "Truly releasing the held dead is the holiest Verdant act and the literal reversal of the Keeper's soul-trap. Doing it the slow true way (not the Void's fast false way) is the deepest restoration of trust and soul-flow."
    },
    {
      if: "Abyss is defeated locally and the shared-enemy pressure ends while a Hollow Pact toleration is still active."
      then: "The toleration collapses; former tolerant parties (Rootwardens, Heartmoot) turn on the Pact with built-up resentment; the player must choose to break with the Pact or be tarred with it."
      because: "Toleration was conditional on the Abyss emergency (shared_threat). When the threat ends, the suppressed horror at weaponized rot returns with interest — the reckoning the toleration deferred."
    },
    {
      if: "An elder keeps deferring the well decision to 'next season' a fourth and fifth time."
      then: "Reformers (Sap Commons) and the desperate (refugees) lose faith and drift to riskier options (a forced cure, or the Hollow Pact); Greenwake Communion may act unilaterally; keeper_pressure rises silently."
      because: "Stagnation IS the Keeper exploit (8). Paralysis isn't neutral — it actively drives the cost-bearers toward corruption and lets the wound become permanent. Inaction is a choice with consequences."
    }
  ]
}
```

---

## 26. Player Origin Rules

```ts
PlayerOriginRules {
  domain: "Verdance"
  starting_bonuses: [
    "Innate low Sapcraft: a healing-hand and a growing-hand (minor restoration, soothing growth, reading a grove's health).",
    "Root-sense: faint awareness of the network nearby — you feel corruption as wrongness and can sense a rootwell's mood.",
    "The Refuge welcome: Verdant communities extend the wounded-and-traveler's welcome by default; you start with shelter and a base of goodwill.",
    "Cycle-literacy: you instinctively think in webs and downstream effects (a free read on 'what does this feed?' / consequence hints).",
    "Grief-steadiness: having grown up with death-as-passage, you resist fear and despair effects tied to death and the dead."
  ]
  starting_burdens: [
    "Rooted slowness: you are out of your depth in fast, mobile, or offensive situations (Tempest tempo, open ground, blitz tactics).",
    "The cardinal taboo weighs on you: using corrupted sap / soul-sap costs you MORE socially and metaphysically than it would an outsider — your own people judge you hardest.",
    "Bound to place: your dead are in a specific grove; threats to it (or to your grove's rootwell) hit you personally.",
    "Patience as expectation: Verdant society expects you to defer, listen, and not rush — acting decisively alone reads as haste-sin and costs trust with elders.",
    "Dependency on the network: outside Verdant terrain your root-sense and low sapcraft weaken."
  ]
  default_domain_resonance: { Verdance: 70, Sanctuary: 55, Radiance: 50, Tempest: 45, Abyss: 10, Void: 5 }
  starting_faction_assumptions: [
    "Assumed sympathetic to the Heartmoot/elders unless you act otherwise (you were raised to revere them).",
    "The Sap Commons assumes you might be a natural ally (a tender, a healer).",
    "The Rootwardens watch you neutrally-to-warmly (a Verdant is presumed to respect containment).",
    "The Hollow Pact sees a potential recruit IF you ever touch the rot.",
    "The Seed Guild sees a customer/asset.",
    "The Greenwake Communion is curious about your root-sense (a possible Listener)."
  ]
  common_npc_reactions: [
    "Warmth and the welcome — until you act with haste, waste, or rot.",
    "Elders test your patience and listening; reformers test your courage to act.",
    "Refugees hope you'll honor the Refuge oath; the Hollow Pact watches for your breaking point.",
    "If you heal at cost to yourself, trust rises fast; if you take a corrupted shortcut, suspicion rises faster."
  ]
  starting_rumors: [
    "'A new tender/listener has come to Thornveil' (neutral-hopeful).",
    "(if you arrive amid the crisis) 'Maybe they can hear what the well is saying' (expectant).",
    "(latent) the well may already 'know your name' — a hook the GM can spring."
  ]
  starting_magic_access: [
    "Low Sapcraft proper (healing, growth, sensing).",
    "Basic Root-Communion (you can listen, shallowly).",
    "Rudimentary Tree-Memory Reading (surface impressions only)."
  ]
  restricted_magic_access: [
    "Deep Passage Tending, Naming-Back, and any rot-tending near soul-flow (require mentors/sanction — Auralis, the Rootwardens, the Rootmoot).",
    "Cleansing-communion at scale (requires the Greenwake Communion and/or Heartroot cuttings).",
    "Corrupted sap / soul-sap / weaponized rot (forbidden; available only via the Hollow Pact black market, at catastrophic cost)."
  ]
  unique_origin_questions: [
    "Whose dead are in YOUR grove's rootwell, and is your grove's well safe — or is it one of the corrupting ones?",
    "Were you a tender, a warden, a refugee who got rooted, or a Listener-in-training? (sets faction lean)",
    "Have you ever lost someone to a failed Passage — and do you know it?",
    "Has the well ever spoken YOUR name? Do you know whether you're fully among the living?",
    "Do you believe the cycle can be healed, or have you already half-accepted the fatalist's peace?"
  ]
  possible_dark_secret_options: [
    "You once used corrupted sap to save someone you love — it worked, and you've never told anyone (a Void hook already set).",
    "You are a rooted refugee whose original domain was Abyss-touched — and Abyss may have a claim or a thread on you.",
    "A name the well speaks is YOURS — you may already be partly trapped, a living person the corruption has begun to hold.",
    "You carry a stolen Heartroot cutting (the cure-stock) and don't fully understand what you have.",
    "You once performed a Passage that went wrong, and you carry an un-released soul-scar (a faint draw for the restless dead)."
  ]
}
```

---

## 27. VERDAX Tracking Fields

Concrete `DomainTrackingState` for Verdance at the **opening of the MVP** ("The
Sap Beneath the Ash," campaign_phase: "local_crisis", Thornveil region). These are
starting baselines the turn engine adjusts.

```ts
DomainTrackingState {
  campaign_id: "<campaign>"
  domain: "Verdance"
  domain_stone_stability: 58   // compromised — dragged by border wounds incl. Thornveil
  soul_flow_integrity: 44      // contested/strained — the chokepoint is wounded
  keeper_pressure: 47          // rising via delay + the Thornveil trap
  void_parasitism: 38          // present, concentrated in the Hollow Pact and the well
  political_stability: 41      // unstable — the Rootmoot is deadlocked
  military_strength: 56        // solid defensively, immobile, strained at the wall
  economic_strength: 52        // strong export base, but scarcity is biting
  magical_strength: 64         // strong sapcraft, weakening where corruption spreads
  civilian_morale: 39          // weak — fear, scarcity, paralysis, failing rites
  resource_security: 45        // strained — clean sap dwindling, rationing begun
  intelligence_strength: 61    // strong (mycelial relay) at home, weak abroad
  true_virtues_json: {
    cycles: 66, restoration: 58, communion: 62, "living systems": 64,
    patience: 71, healing: 67, "ecological memory": 69
  }
  corrupted_virtues_json: {
    stagnation: 52, "elder tyranny": 41, "forced healing": 28,
    "biological control": 22, "resource hoarding": 46,
    "weaponized rot": 37, fatalism: 39
  }
  active_warfront_ids: ["wf_eastern_thornwall_abyss"]
  active_power_struggle_ids: ["ps_speaking_well", "ps_sealed_wells", "ps_commons_or_market"]
  active_rumor_ids: ["rm_well_speaks_names", "rm_elders_hiding_something", "rm_cure_is_reckless"]
  active_soul_flow_wound_ids: ["sfw_thornveil_rootwell_trap"]
  active_domain_crisis_ids: ["dc_speaking_rootwell"]
  current_strategy: "Hold the thornwall and contain the Thornveil well while the Rootmoot deliberates."
  immediate_priority: "Prevent the well's corruption from spreading and decide its fate before the Abyss frontier exploits the paralysis."
  long_term_priority: "Restore the wounded chokepoint(s) and the Refuge's integrity without sliding into stagnation, hoarding, or weaponized rot."
}
```

```ts
DomainVirtueState {  // companion to the above, MVP opening
  campaign_id: "<campaign>"; domain: "Verdance"
  true_virtues: [
    { name: "patience", strength: 71, public_health: 58, faction_support: { Heartmoot: 88, Rootwardens: 80, "Sap Commons": 40, "Seed Guild": 62, "Greenwake Communion": 66, "Hollow Pact": 12 } },
    { name: "restoration", strength: 58, public_health: 49, faction_support: { "Sap Commons": 92, "Greenwake Communion": 78, Heartmoot: 55, Rootwardens: 50, "Seed Guild": 44, "Hollow Pact": 20 } },
    { name: "communion", strength: 62, public_health: 60, faction_support: { "Greenwake Communion": 95, Heartmoot: 70, "Sap Commons": 66, Rootwardens: 58, "Seed Guild": 40, "Hollow Pact": 35 } },
    { name: "healing", strength: 67, public_health: 55, faction_support: { "Sap Commons": 90, "Greenwake Communion": 80, Heartmoot: 62, Rootwardens: 60, "Seed Guild": 50, "Hollow Pact": 25 } }
  ]
  corrupted_virtues: [
    { name: "stagnation", source_true_virtue: "patience", strength: 52, active_factions: ["Heartmoot", "Rootwardens", "Seed Guild"], active_rumors: ["rm_elders_hiding_something"], keeper_exploit_risk: 64 },
    { name: "resource hoarding", source_true_virtue: "restoration", strength: 46, active_factions: ["Seed Guild"], active_rumors: ["rm_cure_is_reckless"], keeper_exploit_risk: 49 },
    { name: "weaponized rot", source_true_virtue: "cycles", strength: 37, active_factions: ["Hollow Pact"], active_rumors: ["rm_well_speaks_names"], keeper_exploit_risk: 71 },
    { name: "fatalism", source_true_virtue: "cycles", strength: 39, active_factions: ["Heartmoot (privately)", "grieving communities"], active_rumors: [], keeper_exploit_risk: 55 }
  ]
  current_virtue_crisis: "Patience has become stagnation around the speaking well; cycle-faith is splitting between fatalist abandonment and the Hollow Pact's weaponized-rot heresy."
  current_keeper_exploit: "If decay is natural, corrupted growth is still Verdance — wait long enough and the trapped become 'ancestors.'"
}
```

```ts
SoulFlowWoundState {  // the central MVP wound
  id: "sfw_thornveil_rootwell_trap"; campaign_id: "<campaign>"
  name: "The Speaking Well of Thornveil"
  origin_event_id: "evt_abyss_rootwell_incision"
  location_id: "loc_thornveil_refuge"; domain: "Verdance"
  wound_type: "death_passage_blocked"  // compounded by name_erasure + grief_harvest + identity_dissolution
  severity: 74
  visibility: "obvious"  // the town knows the well speaks; the CAUSE (Abyss incision) is hidden
  affected_npcs: ["Rook Thornlittle (parent trapped)", "Ilyra Thornsong (rites failing)", "Auralis Greenwake (hears the trapped)", "Nymara Hollowbloom (exploits it)", "Othren Deepbark (containing it)"]
  affected_factions: ["Rootwardens", "Sap Commons", "Hollow Pact", "Seed Guild", "Greenwake Communion", "Heartmoot"]
  affected_locations: ["loc_thornveil_refuge", "loc_eastern_thornwall"]
  keeper_pressure_delta: 6   // ongoing per unresolved interval
  void_parasitism_delta: 4   // ongoing; spikes if anyone uses the well's voices
  possible_healing_methods: ["Patient cleansing-communion + Passage-completion (hear via Auralis, Name-Back, release)", "Heartroot cuttings replanting (requires Heartmoot release)", "Address the Abyss incision at the source", "Outside soul-healer repair"]
  ignored_consequence: "The trap stabilizes as permanent infrastructure; the trapped dead become 'ancestors'; the wound normalizes as heritage; the chokepoint backs up soul-flow for multiple domains; keeper_pressure climbs steadily."
  symptoms: ["The well speaks names of the dead, then the living", "Passage Tending fails; the dead don't settle", "Grief cannot complete", "Soil corruption creeping inward", "Corrupted sap available and unusually potent"]
}
```

---

## 28. Data Schemas

Verdance uses the canonical Chunk 2 / Chunk 3 schemas without modification. The
fields populated above (`DomainStoneState` §4, `DomainSoulFlowProfile` §5,
`DomainVirtue` §6, `CorruptedVirtue` §7, `KeeperExploitPattern` §8,
`VoidTemptationPattern` §9, `MagicSystemState` §10, `MagicCost` §11,
`GovernmentProfile` §12, `ClassStructure` §13, `DomainEconomy` §14,
`MilitaryDoctrine` §15, `WarFrontBehavior` §16, `DomainLocation` §17,
`CultureProfile` §18, `ReligionProfile` §19, `DomainFactionIndex` §20,
`NPCRoleIndex` §21, `ExternalDomainRelation` §22, `PowerStruggle` §23,
`DomainRumorEcology` §24, `DomainRelationshipLogic` §25, `PlayerOriginRules` §26,
`DomainTrackingState` / `DomainVirtueState` / `SoulFlowWoundState` §27) ARE this
domain's data.

**Implementation notes for SCHEMA-FORGE (Verdance / MVP).**

- **Static lore file:** `/domain-lore/verdance.json` — serialize §4–§26 (the
  immutable lore objects). This is the campaign-generation and lore-retrieval
  source; it is NOT sent to VERDAX every turn.
- **Mutable seed rows (MVP minimum set, per Chunk 3):**
  - `DomainTrackingState` + `DomainVirtueState` — seed from §27.
  - `LocationState` rows — seed Thornveil Refuge (§17.1), Greatroot Hollow
    (§17.2), Eastern Thornwall (§17.3), Hollow Reach (§17.4). (Note: §17 uses the
    Chunk 2 `DomainLocation.location_state` shape; promote to the fuller Chunk 3
    `LocationState` on seed, mapping `secrecy→secrecy`, adding
    `economic_health`/`rumor_activity`.)
  - `FactionState` rows — six factions from §20 with `power_sources`,
    `player_standing`, `keeper_exploit_vector`, `void_temptation_phrase`.
  - `NPCState` rows — the ten MVP cast NPCs from §21, with
    belief_core/desire/fear/secret and the can_* flags.
  - `RelationshipState` / `TolerationState` — seed the Hollow-Pact-tolerated-vs-
    Abyss toleration template from §25 (reason: "shared_threat", high
    hidden_resentment_delta, high future_betrayal_risk).
  - `RumorState` rows — `rm_well_speaks_names`, `rm_elders_hiding_something`,
    `rm_cure_is_reckless` from §24.
  - `PressureClockState` rows — see below.
  - `WarFrontState` — `wf_eastern_thornwall_abyss` from §16.
  - `ConsequenceChainState` / `WorldEvent` / `QuestState` — seed from §29 and
    §17 quest_hooks.
- **Secondary JSON-first (promote later):** `CampaignMetaphysics`,
  `SoulFlowWoundState` (`sfw_thornveil_rootwell_trap`, §27), `KeeperExploitEvent`,
  `VoidTemptationEvent`, `MagicSystemState`, `RelicState` (Heartroot cuttings as
  a relic-class object).

**Suggested MVP pressure clocks.**
```ts
PressureClockState[] = [
  { id: "pc_well_permanence", name: "The Well Goes Permanent", clock_type: "corruption",
    current_value: 3, max_value: 8, owner_type: "location", owner_id: "loc_thornveil_refuge",
    trigger_event: "Each rootmoot that ends without a decision; each use of the well's voices.",
    partial_tick_effects: ["More names spoken", "Soil corruption spreads", "Passage rites fail further"],
    completed_effect: "The trap stabilizes as permanent infrastructure; the trapped become 'ancestors'; soul-flow chokepoint locks; keeper_pressure jumps.",
    reversal_methods: ["Cleansing-communion + Passage-completion", "Heartroot cuttings replant", "Address the Abyss incision"] },
  { id: "pc_hollow_pact_rise", name: "The Pact Becomes Doctrine", clock_type: "faction_agenda",
    current_value: 2, max_value: 6, owner_type: "faction", owner_id: "fac_hollow_pact",
    trigger_event: "Each corrupted-sap victory tolerated; each refugee abandoned to scarcity; each Warden who defects.",
    partial_tick_effects: ["Recruitment rises", "Soul-sap spreads", "Containment weakens"],
    completed_effect: "Weaponized rot becomes accepted border doctrine; Verdance begins harvesting souls 'for defense.'",
    reversal_methods: ["Provide a working clean alternative", "Keep the Refuge oath", "Break/turn Nymara", "Cut the Abyss supply"] },
  { id: "pc_refuge_oath", name: "The Refuge Turns Away the Wounded", clock_type: "resource_shortage",
    current_value: 2, max_value: 5, owner_type: "location", owner_id: "loc_thornveil_refuge",
    trigger_event: "Each tick of sap scarcity / Seed Guild rationing without relief.",
    partial_tick_effects: ["Refugees turned away", "Morale drops", "Hollow Pact recruits"],
    completed_effect: "The Refuge breaks its founding oath; refugees radicalize en masse; the Refuge tradition collapses regionally.",
    reversal_methods: ["Restore a clean-sap source", "Break the hoarding", "Renew the oath publicly"] }
]
```

---

## 29. Cause/Effect Examples (≥5, reaching 3rd–5th order)

All chains use the Chunk 4 formula: **Action → Method → Witness → Interpretation →
Power Shift → Social Reaction → Systemic Effect → Metaphysical Effect → Future
Pressure**, with player intervention paths.

### Chain 1 — Corrupted-sap weaponization at Thornveil (the canonical MVP chain; extends Chunk 4 B)
**Root:** The player uses corrupted-sap blight-traps to stop an Abyss patrol at the
Thornveil thornwall. **Method:** weaponized rot — the cardinal taboo — and it works
spectacularly. **Depth required: 5** (touches soul flow, Void, Stone).
- **1st (immediate):** Patrol destroyed; the wall holds tonight. Hollow Pact respect
  +12; Rootwarden (Thalen) suspicion +10, trust −8; Sylune/Ilyra alarmed; soil
  corruption +4; the player's `void_resonance` +3; a faint blight marks the trap-site.
- **2nd (scene/session):** Nymara praises the player and opens recruitment; Thalen
  demands an explanation; Othren quietly notes a kindred pragmatism; refugees argue
  survival vs corruption; rumor seed `rm_player_used_rot`.
- **3rd (local/system):** Hollow Pact recruitment rises (clock `pc_hollow_pact_rise`
  +1); Sap Commons lose ground; rumor mutates: "the player is Hollow" → "the
  Rootwardens secretly rely on corruption too" (implicating Othren's real secret);
  Thalen's faith in containment cracks.
- **4th (regional/political):** Rootwarden authority weakens; Hollow Pact cells gain
  shelter and legitimacy; Abyss studies the trap residue (flattered, and learning);
  the Thornveil Rootmoot tilts toward the "the rot works, why not" faction; the
  Seed Guild eyes a corrupted-sap market.
- **5th (mythic/metaphysical):** The souls drawn on by the corrupted sap are bound
  tighter; `sfw_thornveil_rootwell_trap` severity +; Verdance's resistance is
  damaging its own soul-flow; soul_flow_integrity −; keeper_pressure +; the Void
  whispers its lie ("If rot saved them, why call it corruption?") and gains a
  foothold — a heroic-feeling defense became a Keeper victory.
- **Intervention:** cleanse the trap residue; name the tactic emergency-only and
  dismantle it; submit to Auralis's communion judgment; build a working Sap Commons
  alternative; release the souls the sap drew on; expose (not adopt) Othren's secret.

### Chain 2 — The well speaks a living name (the mystery chain)
**Root:** The player investigates and confirms the well has spoken a LIVING person's
name — Rook's, or the player's own. **Method:** tree-memory reading + Greenwake
communion. **Depth required: 5.**
- **1st:** Confirmation that the corruption is reaching for the living, not just
  holding the dead; dread spikes; Rook (or the player) is now visibly at risk;
  Auralis's trust +6 (you sought the truth) and fear +8 (of what it means).
- **2nd:** Ilyra panics — her town's children may be next; the rumor `rm_well_speaks_
  names` mutates toward "the well names those it will TAKE"; the Hollow Pact spins it
  as the well "choosing" kin; the Seed Guild downplays it to protect trade.
- **3rd:** Panic-driven exodus pressure vs Refuge-oath pressure collide; the
  Rootmoot is forced toward a decision it keeps deferring (clock `pc_well_permanence`
  paradoxically slows if this spurs action, accelerates if it spurs only panic);
  Nymara recruits the terrified.
- **4th:** If the player traces WHY — the Abyss soul-harvest incision — the warfront
  `wf_eastern_thornwall_abyss` escalates from "cold/active" toward "escalating": this
  is an act of war on Verdant soul-flow, and the alliance question (Radiance fire?
  Sanctuary law? Tempest strike?) opens. If the player does NOT trace it, the cause
  festers and the well claims the living name.
- **5th:** The living-name binding is incipient identity_dissolution — a soul-flow
  wound that, completed, makes a living person a node of the trap. Healing it (a true
  Passage + Naming-Back BEFORE it completes) reverses a Keeper soul-trap and drops
  keeper_pressure; ignoring it creates a mythic wound and a new Hollow "oracle."
- **Intervention:** race a Naming-Back/Passage to free the named before binding
  completes; trace and disrupt the Abyss incision (the cause); get Heartroot cuttings;
  protect Rook; refuse the Void's offer to "free" them by using them.

### Chain 3 — Exposing the sealed wells (the legitimacy chain)
**Root:** The player exposes that the Heartmoot sealed and abandoned three prior
rootwells (and their dead). **Method:** truth-telling, publicly. **Depth required: 4
(→5 if it triggers a Vigil or a fracture).**
- **1st:** Shock; Heartmoot legitimacy −15; Maera humiliated (or, if approached
  privately first, given a chance to confess); Sap Commons and Greenwake Communion
  trust +.
- **2nd:** Rumor `rm_elders_hiding_something` is PROVEN and weaponized; the cost-
  bearers' resentment crystallizes; senior elders close ranks or crack.
- **3rd:** Power shifts: Sap Commons and Greenwake Communion rise; Rootwardens are
  caught between loyalty and disillusion; the Thornveil precedent is reopened (maybe
  Thornveil CAN be cured, not sealed).
- **4th:** Political realignment — either reform (a confession + a Heartroot Vigil to
  heal all four wells) or collapse (a scramble for authority, the Hollow Pact
  exploiting the chaos, the Rootwardens seizing emergency control).
- **5th (if it triggers a Vigil):** Healing FOUR chokepoints at once is one of the
  campaign's largest single drops in keeper_pressure and gains in soul_flow_integrity
  and domain_stone_stability — a mythic restoration. (If it triggers a fracture
  instead, four wells stay open and the Keeper gains.)
- **Intervention:** approach Maera privately to enable confession-with-a-plan; pair
  the exposure with a Vigil proposal; protect the disclosure from Abyss
  weaponization; keep the Rootwardens loyal through the transition.

### Chain 4 — Radiance burns the well "to help" (the allied-fire chain)
**Root:** Under Abyss pressure, the player accepts a Radiance offer to BURN the
corrupted well to cleanse it. **Method:** sacred fire — purge, not restoration, and
without full Verdant consent. **Depth required: 5.**
- **1st:** The corruption is destroyed — and so are the trapped dead, severed from
  passage; Radiance allies cheer a "cleansing"; Verdant witnesses recoil.
- **2nd:** Ilyra and Auralis are devastated (their dead are GONE, not freed); the
  rumor "the player let outsiders burn our dead" ignites; a historical Verdant wound
  (past Radiance burnings) reopens.
- **3rd:** Verdant trust in the player AND in Radiance collapses; the Rootmoot may
  turn on the player; the Sap Commons' restoration hopes die ("there was nothing left
  to heal"); the alliance against Abyss fractures.
- **4th:** Radiance-Verdance relations drop toward hostility; Sanctuary hesitates to
  back a "burner"; the anti-Abyss coalition that needed both fire and sap splinters —
  exactly the Keeper's preferred outcome (Section 22).
- **5th:** Severing a soul-passage by fire is a soul-flow catastrophe — the trapped
  are not released but ANNIHILATED (name_erasure); soul_flow_integrity −; the
  chokepoint is destroyed rather than healed; keeper_pressure + as two anti-Abyss
  domains turn on each other.
- **Intervention:** refuse the burn; demand consent + a restoration-funded
  alternative; if fire is truly needed, use it ONLY on Abyss infrastructure beyond
  the wall while Verdance tends the freed souls (the clean joint-op); make Radiance
  pledge burn-only-with-consent.

### Chain 5 — Tolerating the Hollow Pact against an Abyss harvest (the toleration chain)
**Root:** Abyss launches an open soul-harvest; the player accepts the Hollow Pact's
help (their corrupted-sap weapons) to stop it. **Method:** alliance-of-necessity with
a taboo faction. **Depth required: 5.**
- **1st:** The harvest is broken; many Verdant dead are saved from Abyss; the Pact's
  prestige +; even Rootwardens and the Heartmoot quietly accept it FOR NOW
  (`TolerationState`: reason "shared_threat", active, high hidden_resentment).
- **2nd:** Relief curdles into unease; Thalen accepts the necessity but trust drops;
  Sylune warns the player they've legitimized the rot; Nymara treats the player as
  an ally and pushes for more.
- **3rd:** The Pact uses the victory to recruit and to argue "the rot is the only
  thing that works" (clock `pc_hollow_pact_rise` +); the player is now tarred with
  the Pact in rumor; the toleration's `future_betrayal_risk` rises.
- **4th:** When the Abyss emergency passes, the toleration COLLAPSES (per §25): the
  Rootwardens and Heartmoot turn on the Pact with built-up resentment, and the player
  must publicly break with the Pact or be condemned with it; a faction reckoning
  begins.
- **5th:** Even a "necessary" use of weaponized rot bound souls and deepened the
  well; soul_flow_integrity −; the Void gained proof its shortcut "works for good
  reasons"; keeper_pressure +. The cleanest version still leaves a debt — toleration
  of the rot is never free.
- **Intervention:** set the toleration's terms and end-date explicitly; insist the
  Pact use clean tactics where possible; release the souls their sap drew on
  afterward; break with the Pact decisively before the reckoning; provide the clean
  alternative so the "only thing that works" argument dies.

---

## 30. Open Questions

- **The Heartroot and the Architects:** Is the Verdance Stone tied to a specific
  Architect (a "cycle/renewal" Architect), and is the Heartroot's deepest memory
  partly that Architect's? Could a player reach an Architect-memory through deep
  root-communion at Greatroot Hollow?
- **Soul-passage mechanics:** Exactly HOW does a soul pass "through" Verdant
  root-memory onward — and onward to WHERE? Do other domains' dead pass through
  Verdance by necessity or by proximity? How does this interface with Radiance's
  phoenix rebirth and Abyss's binding?
- **The speaking voices' nature:** Are the well's voices (a) genuinely the trapped
  dead, (b) the Void mimicking them, (c) an Abyss harvest-engine's leakage, or (d)
  all three layered? The MVP treats it as layered and investigable — but the canon
  ratio should be fixed before Sprint 4.
- **Can a corrupted rootwell be fully healed,** or only contained/released-and-
  replanted? Is "cure" really "complete the trapped passages + replant from clean
  Heartroot stock," with the old well never quite the same? (Current lean: yes,
  cure = release + replant, slow and partial.)
- **Living names:** Can the well genuinely begin to bind a LIVING person, and is
  this reversible up to a point of no return? (MVP lean: yes, reversible before
  binding completes via Naming-Back + Passage.) Where exactly is the point of no
  return for a PC?
- **The Hollow Pact's redeemability:** Is Nymara turnable, and is weaponized-rot
  use reversible for a character, or does becoming a "node of the wound" pass an
  irreversible threshold? (Lean: reversible until stage-3 symptoms; Nymara is
  turnable until she performs a soul-sap working on someone the player loves.)
- **Heartroot cuttings as relics:** Should the sacred replanting stock be modeled
  as `RelicState` objects (memory-bearing, with loyalty/backlash)? (Lean: yes.)
- **Cross-domain sap dependency:** How hard is Abyss's covert dependency on Verdant
  healing-sap, and could a full embargo actually hurt Abyss — or just the occupied
  civilians it medicates? (A lever for later sprints.)

---

## 31. Locked Decisions

1. **Verdance is the cycle/living-systems/restoration domain** — a civilization, not
   a forest theme.
2. **The source is a living root-network** tied to the Verdance Stone (the Heartroot),
   expressed through great rootwells (source_type: Living Network).
3. **Sapcraft is the magic;** it comprises the seven disciplines (Sapcraft proper,
   Root-Communion, Tree-Memory Reading, Growth-Shaping, Rot-Tending, Seed-Binding,
   Mycelial Messaging).
4. **Verdance is a soul-flow chokepoint:** the dead of many regions pass through
   Verdant root-memory; this is its metaphysical role (death-passage continuity +
   memory-keeping) and the reason its crises are everyone's.
5. **True virtues:** cycles, restoration, communion, living systems, patience,
   healing, ecological memory. **Corrupted forms:** stagnation, elder tyranny, forced
   healing, biological control, resource hoarding, weaponized rot, fatalism.
6. **Keeper exploit:** make Verdance wait too long, then redefine corruption as
   adaptation ("If decay is natural, corrupted growth is still Verdance") so Verdance
   defends its own wound. Signature: erosion and excuse, not invasion.
7. **Void lie:** "If decay is part of the cycle, why not command it?" — sold as
   MERCY (free the trapped by using them). The Void's chosen vector is the
   compassionate communer (Auralis).
8. **Abyss is the existential external threat** (soul-harvest at the border,
   corrupting rootwells into traps) and a covert sap CUSTOMER. **Radiance is the
   dangerous friend** whose "burn the corruption" cure severs soul-passage; consent
   is everything.
9. **Verdance does not conquer;** its doctrine is the Living Wall — defensive,
   biological, terrain-based attrition; it "advances" by restoring ground. Behaving
   like a conqueror = it is already corrupted (biological control).
10. **Six factions are canon:** Heartmoot/Rootmoot (central authority — stagnation
    risk), Rootwardens (containment — exhaustion/defection risk), Sap Commons
    (restoration — forced-healing/haste risk), Hollow Pact (weaponized rot — the
    Void made flesh), Seed Guild (stabilize/market — hoarding/biological-control
    risk), Greenwake Communion (communion — the Void's vector). The four-way fork is
    Contain / Heal / Weaponize / Stabilize.
11. **The MVP is "The Sap Beneath the Ash":** a corrupted rootwell beneath Thornveil
    Refuge speaks names (dead, then living). Its cause is an Abyss soul-harvest
    incision; its political stage is the deadlocked Thornveil Rootmoot; its cast is
    the ten named NPCs of §21.
12. **The cardinal Verdant sin is holding/abandoning the dead** (refusing release);
    its taboos are waste, haste-in-sacred-matters, soul-sap, forced healing,
    name-selling, burning a grove/well, and speaking a living name into a well.
13. **Enemies become tolerable under the Abyss soul-harvest:** even the Hollow Pact
    is tolerated (and even Radiance's fire accepted) when Abyss harvests souls —
    modeled as a conditional `TolerationState` with high hidden resentment and a
    post-crisis reckoning.
14. **Resolution is braided and slow:** the true cure combines restoration +
    communion + containment + addressing the Abyss cause + breaking the Heartmoot's
    paralysis. Symptom-cures (killing Nymara, burning the well) solve nothing and
    can deepen the wound.
15. **This bible follows the Chunk 2 template (all 31 sections), uses Chunk 3
    tracking language, and reaches Chunk 4 cause/effect depth. Verdance is the MVP
    domain and the most detailed of the domain bibles by design.**

---

*End of Verdance Domain Bible v1.0 — Chunk 2B. Draft for CANON-WARDEN review.*
