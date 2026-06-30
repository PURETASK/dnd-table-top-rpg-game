---
title: The Seed Guild — Verdance Faction Bible
status: Draft v1.0
lead: FACTION-WEAVER
qa: CANON-WARDEN
domain: Verdance
faction_type: Economic / Resource (Stability)
chunk: 3F
mvp: true
note: >
  The Seed Guild is Verdance's economic/resource faction and the player's
  primary route to money, supply, smuggling, and logistics in the MVP slice
  "The Sap Beneath the Ash." It is also the thread to the external villain:
  the Guild sells healing-sap to Abyss through fronts. This bible obeys the
  Verdance Domain Bible (sections 7.4, 7.5, 14, 20, 22, 23, 24, 25 — binding
  canon), uses the Chunk 3 FactionState tracking language, and reaches Chunk 4
  cause/effect depth. It is build-ready for the VERDAX turn engine.
---

# The Seed Guild — *Stability Through the Market* (Verdance Faction Bible v1.0)

> "A wound you can sell around is not a crisis. It is a market. Cures are
> expensive, purges are reckless, and panic is bad for prices. We don't ask you
> to love the rot, friend. We ask you to let us keep the caravans moving while
> the elders decide whatever the elders decide. Everyone gets paid, and most
> people get sap. That is more mercy than the world usually offers."
> — Brom Valefern, Seed Guild border quartermaster, to a refugee delegation
> at the Thornveil ration-line

---

## 1. Faction Identity Snapshot

The Seed Guild is the **Trading Class of Verdance organized into a power** — the
brokers, seed-binders, commons-stewards, and caravan-masters who run the seed and
sap markets, the Green Roads, the export economy, and (through captured
commons-stewardship) the rationing that decides who actually gets sap. It is the
only Verdant faction whose doctrine is **stability and continuity through the
market** rather than through the cycle, the wall, the cure, or the rot.

The Guild's genuine point is real: someone has to keep the caravans rolling, the
seed-vaults stocked, and the world's healing-sap supply flowing while six
factions scream at each other over a talking well. The Guild does that, and it
does it competently. Its dangerous flaw is equally real: the Guild's instinct in
a crisis is to **stabilize the wound, not heal it** — to keep selling around a
corrupted asset rather than risk a cure or a purge that might disrupt the trade.
Patience-as-paralysis (Heartmoot) and scarcity-as-power (Guild) are the two halves
of the same stagnation, and the Guild is its quiet, well-dressed enabler.

```ts
FactionIdentitySnapshot {
  faction_name: "The Seed Guild"
  domain: "Verdance"
  one_line: "The merchant stewards who keep sap, seed, and exports flowing — and who would rather manage a corrupted asset forever than risk a cure."
  faction_type: "Economic / Resource (Stability)"
  class_base: "Brokers & Stewards (the Trading Class): merchants, seed-binders, commons-stewards, caravan-masters, ration-clerks, graft-house masters, mycelial relay factors."
  doctrine: "Stability and continuity through the market. Keep the sap and seed flowing, the exports moving, the prices managed; a stable wound is better than a risky cure or a reckless purge. Protect the commons by PROFESSIONALIZING it."
  ideal_future: "A Verdance where the great rootwells are stable, productive, perpetually-managed assets; where the sacred-sap commons is a well-run, professionally-stewarded market; where every domain (including Abyss, quietly) is a paying customer; and where the Guild's stewardship has made itself indispensable to the survival of all of them."
  public_goal: "Stabilize the Thornveil supply, keep the Refuge fed and the exports moving, ration responsibly through the scarcity, and protect the world's healing-sap economy from a reckless cure or a panicked purge."
  hidden_goal: "Keep the corrupted asset PRODUCTIVE rather than healed; entrench captured commons-stewardship into permanent private control of rationing; and protect the quiet, enormously profitable healing-sap pipeline to Abyss fronts — the secret that, exposed, could end the Guild."
  core_virtue_claimed: ["Restoration (as service/commerce)", "Living Systems (as logistics)", "Cycles (as continuity/markets)"]
  core_corruption_risk: ["Resource Hoarding (7.5) — primary", "Biological Control (7.4) — via seed-stock", "Stagnation (7.1) — as enabler"]
  keeper_vulnerability_summary: "The instinct to STABILIZE the wound rather than heal it makes the Guild a quiet ally of stagnation; control of seed-stock is the gateway to eugenic biological control; rationing can turn the Refuge against its refugees; it would rather manage a corrupted asset than risk a cure."
  dangerous_secret: "The Guild sells healing-sap to Abyss through fronts — the thread to the external villain."
  player_relevance: "The player's route to money, supply, logistics, and smuggling AND the lead on the Abyss connection; a faction to pressure, expose, use, or follow."
}
```

**One-paragraph pitch.** The Seed Guild is the faction that does not believe the
crisis is a crisis. While the Heartmoot listens, the Rootwardens wall, the Sap
Commons agitate, the Hollow Pact brews, and the Greenwake Communion weeps over the
trapped, the Guild does the unglamorous, indispensable work of keeping a dying
border town fed, supplied, and connected to the world — and quietly bills everyone
for it, including the enemy. Its people are not cackling villains; they are
competent stewards whose competence is the problem. The Guild's tragedy is that
its very usefulness is what allows everyone else to keep avoiding the cure: as long
as the caravans run, the wound can wait. And underneath the rationing cards and the
honest-looking ledgers runs a pipeline of healing-sap to Abyss fronts — the single
loosest thread in the whole MVP, the one a player can pull until the external
villain falls out of the wall.

---

## 2. Doctrine and Worldview

The Guild's worldview is **mercantile, continuist, and quietly fatalist about
cures.** Its axioms:

1. **Flow is survival.** A society lives or dies by whether goods, sap, seed, and
   information keep moving. Interrupt the flow — by purge, by panic, by a reckless
   cure, by war — and people die who would have lived if the caravans had simply
   kept running. The Guild sincerely believes this, and it is sincerely partly
   right.
2. **A managed wound is better than an unmanaged cure.** Corruption is a fact;
   facts are to be priced, not fought. A rootwell that still produces *some* clean
   sap, walled and rationed, is an asset. A rootwell torn open by an unproven cure
   — or burned by Radiance — is a write-off and a panic. Stability beats hope.
3. **The commons must be professionalized to be protected.** Left to drink
   together and "listen," the commons will exhaust itself in a crisis. Only
   disciplined stewardship — quotas, priority lists, ration cards, price floors —
   can make a scarce sacred resource last. (This is the Guild's noblest-sounding
   claim and the mechanism of its capture of rationing.)
4. **Everyone is a customer.** Healing-sap is the best medicine in the world and
   every domain needs it. Sentiment about *who* deserves it is a luxury the supply
   chain cannot afford. (This axiom is the doorway through which Abyss became a
   client.)
5. **Patience is good for business.** The Guild and the Heartmoot's paralysis are
   natural, unspoken allies: every season the elders defer a decision is another
   season the Guild manages the asset and clears the trade. The Guild never *says*
   "delay the cure." It simply makes delay comfortable, profitable, and normal.

**Doctrine lens for VERDAX (how the Guild interprets any event).** When the player
does anything, the Guild asks: *Does this stabilize or disrupt the flow? Does it
raise or lower the price of clean sap? Does it threaten our rationing control? Does
it expose a customer — especially the customer we cannot name? Can we sell around
it, or do we have to fight it?* The Guild rarely cares about virtue, soul-flow, or
the trapped dead except as they affect supply, price, and exposure.

---

## 3. Power Sources (8 scored)

Scored 0–100 per the Chunk 3 numeric scale (0–10 absent · 11–20 critical · 21–40
weak · 41–60 contested · 61–80 strong · 81–95 dominant · 96–100 mythic).

```ts
FactionPowerSources {
  faction: "The Seed Guild"; domain: "Verdance"
  power_sources: {
    economy: 84,        // DOMINANT. The Guild IS the Verdant export economy: sap/seed markets, graft-houses, seed-vaults, the world's healing-sap supply. Its single greatest power.
    resources: 80,      // DOMINANT. Control of clean-sap stockpiles, seed and graft-stock, and — via captured commons-stewardship — the rationing that decides who gets sap during scarcity.
    intelligence: 66,   // STRONG. Caravan-masters and mycelial relay factors see who crosses, who buys, who pays. Venn Briarhook's information network is the Guild's eyes; it knows the border's secrets, including the Abyss supply runs.
    legitimacy: 52,     // CONTESTED. Real institutional standing as the recognized commons-steward and market authority — but eroding as scarcity exposes hoarding; the Sap Commons openly call it enclosure.
    fear: 48,           // CONTESTED-rising. The Guild can starve you off the ration list, withhold supply, or sell you out. In scarcity its quiet leverage feels like a knife; in plenty it is barely noticed.
    military: 18,       // CRITICAL/weak. No real army. Hired caravan guards, a few bought Rootwardens, and the implicit threat of cutting supply to a frontline — but it cannot hold a line or win a fight.
    magic: 44,          // CONTESTED. Strong in Seed-Binding and Growth-Shaping (the economic disciplines) and in graft-stock control; near-zero in Root-Communion, Passage-Tending, or any soul-flow art. It can grow and bind; it cannot heal souls or hear the dead.
    religion: 22         // WEAK. The Guild has no spiritual authority and is distrusted by the religious order; it borrows legitimacy from the Heartmoot rather than holding any of its own. Its only "sacred" claim is stewardship-as-duty, which the Communion rejects.
  }
  composite_profile: "An economic-resource hegemon with a strong intelligence arm and almost no military, magical-soul, or religious power. The Guild rules the supply lines and the ration list; it does not rule the wall, the well's voice, or the people's faith — which is why scarcity and exposure are its two existential threats."
  power_trend: "Economy/resources RISING with scarcity (scarcity is the Guild's profit engine), legitimacy/religion FALLING as hoarding becomes visible, fear RISING, intelligence stable, military/magic static."
}
```

**Reading the numbers.** The Guild is a **glass hegemon**: dominant where it
counts in peacetime (economy 84, resources 80) and brittle everywhere stability
fails (military 18, religion 22). Its power is liquid, not solid — it is leverage,
not force. That shape dictates everything: the Guild cannot win a fight, so it
prevents fights; it cannot command faith, so it buys, rations, and informs; it
cannot heal the well, so it sells around it. **Scarcity is the only condition under
which all of its numbers rise at once** — which is the quiet, terrible reason the
Guild has no real incentive to end the scarcity.

---

## 4. Class Base, Internal Structure, and Composition

```ts
FactionClassBase {
  faction: "The Seed Guild"
  class_base: { "Brokers & Stewards (Trading Class)": 100 }
  composition: {
    merchants_and_brokers: 30,      // sap and seed dealers, price-setters, market factors
    commons_stewards: 22,           // the captured rationing apparatus: quota-clerks, priority-list keepers, well-access stewards
    seed_binders: 18,               // Seed-Binding adepts; seed-vault and graft-stock controllers (the biological-control risk lives here)
    caravan_masters: 16,            // route-runners, smugglers, information-brokers (Venn Briarhook's world)
    graft_house_masters: 8,         // Growth-Shaping artisans producing living goods and grown structures
    relay_factors: 6                // mycelial-relay couriers and contract-clerks who carry trade word (and intelligence)
  }
  internal_culture: "Pragmatic, polished, contract-minded, allergic to panic. Speaks in supply and price where others speak in virtue and soul. Honors competence and discretion; despises 'reckless idealism' (its term for the Sap Commons) and 'sentimental paralysis' (its private term for the Heartmoot it publicly defers to)."
  leadership_model: "A loose council of senior brokers and the regional quartermasters who run the border nodes. No single supreme leader; authority follows control of supply and routes. At Thornveil, Brom Valefern (the quartermaster who controls rationing) is the de facto local head; Venn Briarhook is the indispensable, unowned information-and-smuggling arm."
}
```

The Guild is the **economic expression of the Tending Class's opposite number.**
Where the Sap Commons are the healers and growers who *bleed for* the commons, the
Guild are the brokers and stewards who *administer* it. The deepest internal fault
line in Verdance — **interpreters vs cost-bearers** (Section 20) — runs straight
through the Guild's relationship with the Commons: the Guild has captured the
*stewardship* of the commons (the rationing) without bearing its *cost* (the
healing, the dying), and the Commons hate it for exactly that.

---

## 5. Power Base Detail

```ts
FactionPowerBase {
  faction: "The Seed Guild"
  resources_controlled: [
    "Clean-sap stockpiles (and the rationing of them during scarcity)",
    "Seed and graft-stock (the Seed Guild's vaults and graft-houses)",
    "Living timber and grown-goods production",
    "The export economy — the world's healing-sap supply",
    "Captured commons-stewardship: the quotas, priority lists, and ration cards"
  ]
  locations_controlled: [
    "Thornveil border market and export node",
    "The Green Roads waystations (overland caravan routes)",
    "Seed-vaults and graft-houses (regional)",
    "Border-market warehouses and ration-distribution points",
    "(via fronts) cross-border exchange points where the Abyss trade runs"
  ]
  magic_access: ["Seed-Binding", "Growth-Shaping", "Mycelial Messaging (trade/relay use)"]
  military_units_controlled: ["Hired caravan guards", "A handful of bought or sympathetic Rootwardens", "Contracted mercenary escorts (e.g., via Venn)"]
  trade_routes_controlled: [
    "The Green Roads (overland)",
    "River-and-root routes",
    "Thornveil border markets",
    "Sky-trade waystations (Tempest premium routes)",
    "(covert) the Abyss-front supply runs"
  ]
  cross_domain_contacts: [
    "Radiance forge-and-metal importers (sap-for-metal trade)",
    "Sanctuary legal/registration brokers",
    "Tempest sky-traders and corsair fences",
    "Abyss FRONTS (the dangerous secret — the Guild sells healing-sap to Abyss through cut-outs)"
  ]
}
```

**The export that makes the Guild matter (canon, Section 14).** Verdant healing-sap
is the best restorative medicine in the world, and *every* domain depends on it —
including Abyss, which buys it through Seed Guild fronts to keep its occupied
populations docile and its soldiers in the field. The Guild therefore sits on
Verdance's chief **non-military** power: a sap embargo is a real weapon, and the
Guild's hand is on the tap. This is also the Guild's chief vulnerability — when the
Thornveil corruption shrinks the clean supply, the whole world feels the price, and
every domain develops an opinion about Verdance's internal crisis. **Scarcity makes
the Guild richer and more exposed at the same time.**

---

## 6. The Dangerous Secret: The Abyss Trade

```ts
FactionSecret {
  faction: "The Seed Guild"
  secret_title: "The Abyss Sap Pipeline"
  secret: "The Guild sells healing-sap to Abyss through layered fronts and cut-out buyers. Abyss uses Verdant sap to pacify its occupied populations and sustain its soldiers — meaning Verdance's flagship export is, in part, propping up the very enemy that corrupts its rootwells and harvests its dead."
  visibility_to_player: "hidden"  // discoverable; this is THE thread to the external villain
  who_knows: ["Brom Valefern (complicit — arranges border-side transfers)", "Venn Briarhook (knows the routes and the buyers; sells the knowledge to whoever pays)", "A small inner ring of senior brokers", "Certain Abyss front-agents", "(suspected, unproven) a few Heartmoot elders who look away"]
  why_it_persists: "It is enormously profitable, it is deniable (cut-outs all the way down), and it stabilizes the trade (a paying customer is a paying customer). The Guild rationalizes it as 'apolitical commerce' and 'the sap heals their captives too.'"
  the_deeper_horror: "Because the Thornveil corruption is an Abyss soul-harvest incision (Section 17 hidden_truth), the Guild is — wittingly or not — doing business with the architect of its own scarcity. Some inner-ring brokers may even grasp that a managed, productive wound and a paying enemy customer are the SAME profitable equilibrium, and prefer it to a cure."
  the_loosest_thread: "Venn Briarhook knows who buys soul-sap and where the Abyss supply runs. Brom Valefern signs the border transfers. Either man, pressured or turned, is the player's entry to the external villain. The Guild's ledgers, if seized, are the proof."
  exposure_consequences: "Catastrophic for the Guild: legitimacy collapse, possible Heartmoot/Rootwarden seizure of the trade, refugee fury, cross-domain scandal (Sanctuary registration, Radiance accusation). Catastrophic for the alliance if Abyss spies spin it as 'Verdance already feeds the enemy.' But it is also the single richest lead in the campaign on the Abyss soul-harvest."
}
```

This secret is the Guild's reason to exist *as a story engine*: it is simultaneously
the player's **moneymaker** (the Guild pays well and asks few questions) and the
player's **moral landmine** (the money is the enemy's money) and the player's
**investigative jackpot** (pull the pipeline and you reach Abyss). Every Guild
interaction should carry the faint possibility that the player is about to find a
loose ledger-thread.

---

## 7. Keeper Exploit Vector

```ts
KeeperExploitVector {
  faction: "The Seed Guild"
  primary_corruption: "Resource Hoarding (7.5)"
  secondary_corruptions: ["Biological Control (7.4)", "Stagnation (7.1) — as enabler"]
  keeper_exploit_vector: "Make the Guild's stabilize-the-wound instinct the Keeper's quietest victory. The Guild does not need to be turned evil — it only needs to keep doing exactly what it does. (1) HOARDING: as corruption shrinks clean sap, the Guild 'protects the supply' by rationing, pricing, and stockpiling — converting Verdance's restoration-virtue into a market where the wounded are abandoned at the door of the hospital. (2) STABILIZATION-AS-STAGNATION: the Guild's competent management of the corrupted asset makes the cure feel unnecessary and the delay feel comfortable, so no one acts in time and the wound becomes permanent infrastructure. (3) SEED-STOCK CONTROL: the Guild's grip on seed and graft-stock is the gateway to eugenic biological control — deciding which lineages live 'for the health of the supply.' (4) THE ABYSS EQUILIBRIUM: a managed, productive wound plus a paying enemy customer is a stable, profitable equilibrium the Guild has every incentive to preserve — which is the Keeper's ideal state for Verdance, achieved entirely through commerce."
  keeper_benefit: "Restoration is withheld (wounds stay open), the cure is delayed (the trap normalizes), the Refuge turns against its refugees (despair feeds the Pact and the Void), and Verdance's resistance is quietly funded BY Verdance's export to the enemy. The Keeper need not act — the market does it."
  the_signature: "Nothing dramatic. No tyrant, no purge. A ration card. A price floor. A deferred decision the Guild was happy to enable. A wounded refugee turned away from the Refuge that was built to take her in. A caravan that runs on schedule to a buyer no one will name."
  prevention_path: [
    "Restore a clean-sap source (cure the well / release cuttings) to dissolve the scarcity the Guild profits from",
    "Break the rationing capture — return commons-stewardship to the cost-bearers (Sap Commons)",
    "Expose and sever the Abyss pipeline",
    "Block seed-stock control from sliding into eugenic 'pruning'",
    "Force the Heartmoot to act, removing the comfortable delay the Guild enables"
  ]
}
```

**Keeper Exploit (one line for the turn engine).** *The Guild would rather manage a
corrupted asset forever than risk a cure — so the Keeper wins by keeping the asset
profitable.*

---

## 8. Void Temptation Phrase

```ts
VoidTemptation {
  faction: "The Seed Guild"
  void_temptation_phrase: "You are not being heartless. You are being responsible. Someone has to keep the sap flowing while the fools argue, and someone has to decide who gets it — so let it be the steady hand and not the panic. Don't heal the well; you'd only lose it. Don't burn it; you'd only waste it. Manage it. Ration it. Sell what you must to whom you must — the sap heals their captives too, doesn't it? Survival first. Stability first. A wound you can live with is not a wound — it is an income."
  what_it_offers: "Not forbidden power (the Guild is not a soul-magic faction) but moral permission: the lie that hoarding is stewardship, that rationing is responsibility, that selling to the enemy is apolitical commerce, and that a stable wound is preferable to a risky cure. The Void's Verdance gift to the Guild is COMFORT WITH THE STATUS QUO."
  immediate_benefit: "Order in chaos; profit in scarcity; the calm of the competent steward who 'has it managed' while everyone else flails. Real, defensible, and corrosive."
  hidden_cost: "Each rationalization deepens the Guild's investment in the wound staying exactly as it is. 'Responsible' rationing becomes enclosure; 'apolitical' trade becomes feeding the enemy; 'stewardship' becomes the gateway to deciding who deserves to live. The Guild does not fall in a day — it stabilizes, one reasonable decision at a time, into the Keeper's ideal."
  identity_damage: "The Guild's self-image migrates from steward to owner; the commons becomes a fiefdom; the merchant becomes the man who decides who dies, and calls it logistics."
  who_accepts_first: ["Brom Valefern (already half-accepted — 'a wound you can sell around is a market')", "Inner-ring brokers profiting from the Abyss pipeline", "Seed-stock controllers tempted toward 'cleansing' the supply"]
  who_resists: ["Venn Briarhook, oddly — a mercenary with one line he won't cross (soul-sap), who'd sell the secret before he'd own the wound", "Lower clerks sickened by turning refugees away", "Any broker still loyal to the Refuge oath"]
}
```

The Guild's Void temptation is the **subtlest in Verdance** because it never sounds
like the Void. It sounds like a balance sheet. It does not whisper "command the
rot" (that is the Hollow Pact's lie); it whispers *"be responsible"* — and
responsibility, in a scarcity the Guild itself benefits from, becomes the most
profitable lie in the domain.

---

## 9. Methods

```ts
FactionMethods {
  faction: "The Seed Guild"
  methods: {
    trade_pressure: 86,        // PRIMARY. Withhold supply, manipulate price, control ration access, leverage debt. The Guild's signature weapon.
    diplomacy: 62,             // STRONG. Contracts, deals, deniable arrangements, cross-domain brokering. Polished and pragmatic.
    propaganda: 55,            // CONTESTED. Commercial spin: 'the cure is reckless,' 'rationing is responsible,' 'stability is mercy.' Seeds doubt about the Sap Commons' cure.
    sabotage: 40,              // Quiet supply disruption of rivals, route interdiction, ration-list manipulation — rarely overt.
    assassination: 22,         // Rare and outsourced. The Guild prefers to buy, blackmail, or bury a problem in paperwork; it kills only to protect the secret, and reluctantly.
    open_war: 12,              // Near-zero. The Guild does not fight; it funds, supplies, or starves whoever fights.
    magical_escalation: 24     // Low. Seed-stock and growth-shaping leverage only; no soul-magic. Its 'escalation' is economic, not magical.
  }
  preferred_play: "Make itself indispensable, then bill everyone. Stabilize, ration, broker, and deny. When threatened, it does not attack — it withholds, prices out, sells out, or buries the matter under deniable cut-outs. Its deadliest move is simply turning off the tap."
}
```

---

## 10. If / Then / Because Rules (≥8)

Every Guild reaction obeys IF / THEN / BECAUSE (Chunk 4 standard: domain logic +
motive + power/metaphysical reason). The Guild's "because" is almost always
**supply, price, control, or exposure.**

```ts
FactionBehaviorRules {
  faction: "The Seed Guild"
  rules: [

    {
      id: "SG-1",
      if: "The player defends the Refuge oath and keeps the well/healing-houses open to refugees during the sap shortage, against the Guild's rationing.",
      then: "Brom Valefern and the Guild's resentment and suspicion rise; they may withhold supply from the player, raise the player's prices, slow-walk a contract, or sell the player out to a rival or to the authorities; Guild leverage over the player drops.",
      because: "Honoring 'we do not turn away the wounded' under pressure directly threatens the Guild's stabilize-and-profit interest — open access collapses the scarcity that makes rationing (and the Guild) powerful. The Guild reads generosity as a market disruption, not a virtue. (Canon: Section 25 Refuge-oath rule; Section 23 'The Commons or the Market?')"
    },

    {
      id: "SG-2",
      if: "The player buys supply, smuggling, or logistics from the Guild and pays reliably (gold or leverage), asking few questions.",
      then: "Guild trust and leverage toward the player rise; Brom and Venn open better routes, cheaper sap, and useful contacts; the player gains a steady moneymaker and supply line.",
      because: "The Guild honors competence, discretion, and a paying customer above all. A reliable client is an asset to be cultivated — and the deeper the player is in Guild debt and Guild routes, the more leverage the Guild has if the player later turns on it. (Canon: Section 20 player_use — money, supply, logistics, smuggling.)"
    },

    {
      id: "SG-3",
      if: "The player starts asking pointed questions about who buys the Guild's sap across the border, or about unusual caravan routes.",
      then: "Venn Briarhook becomes evasive and starts pricing the answers (information for sale); Brom's suspicion spikes and he quietly checks whether the player is a threat to the pipeline; the Guild's secrecy posture tightens; a betrayal/expose clock may begin to tick.",
      because: "The Abyss pipeline is the Guild's existential secret. Venn sells knowledge to the highest bidder but never for free; Brom protects the trade because exposure ends him. Curiosity near the pipeline is read as a threat to be priced, deflected, or eliminated. (Canon: Section 6 secret; Section 22 Abyss hidden_relationship.)"
    },

    {
      id: "SG-4",
      if: "Abyss launches an open soul-harvest at the border, threatening to take Verdant dead and disrupt all border trade.",
      then: "The Guild quietly tightens exports, hoards healing capacity, and spikes prices — BUT may also, through deniable cut-outs, keep (or even increase) covert sales to Abyss fronts, treating the crisis as a seller's market.",
      because: "Crisis is the Guild's profit engine: scarcity raises prices and makes rationing-control more valuable. 'Everyone is a customer' does not pause for a soul-harvest. The Guild stabilizes its own position even as the harvest deepens the wound — the Keeper exploit in pure commercial form. (Canon: Section 14 wartime_economy_behavior; Section 7 Keeper vector.)"
    },

    {
      id: "SG-5",
      if: "The player threatens to expose the Abyss pipeline (with proof: a ledger, Venn's testimony, a seized transfer).",
      then: "The Guild splits: Brom will try to BUY the player's silence (sap, gold, routes, a cleared debt) or, failing that, eliminate or discredit the player; Venn will calculate which side pays/protects better and may flip to whoever wins; the inner ring closes; if exposure is imminent, scapegoats are arranged.",
      because: "Exposure is catastrophic (legitimacy collapse, seizure, scandal). The Guild's first instinct is to convert a threat into a transaction (bribe), its second to bury it (discredit/eliminate), its last to sacrifice a member to save the institution. Venn's loyalty is to survival, not the Guild. (Canon: Section 6 exposure_consequences; Section 25 betrayal_triggers — threatened secret.)"
    },

    {
      id: "SG-6",
      if: "The player backs the Sap Commons' bid to return commons-stewardship (rationing) to the cost-bearers, breaking the Guild's capture of it.",
      then: "The Guild treats the player as an active economic enemy: withholds supply, funds counter-propaganda ('the cure is reckless; the Commons will exhaust the sap'), leans on debtors and allies to isolate the player, and may sell intelligence about the player to rivals or Abyss.",
      because: "Captured commons-stewardship — the power to decide who gets sap — is the Guild's most valuable hidden asset. Returning it to the Commons strips the Guild of its grip on life-and-death rationing. This is the deepest rivalry in the faction's life (commons vs commodity). (Canon: Section 20 main_rival; Section 23 'The Commons or the Market?')"
    },

    {
      id: "SG-7",
      if: "A genuine clean-sap source is restored (the well is cured, Heartroot cuttings are released, the scarcity dissolves).",
      then: "Guild power FALLS — economy and resources drop, rationing-control becomes worthless, the Abyss premium evaporates; the Guild pivots fast to claim credit, corner the new abundance, or quietly resent and undermine the cure; some inner-ring brokers may even sabotage the restoration to protect the scarcity.",
      because: "The Guild's power is scarcity-shaped. Abundance is, paradoxically, the Guild's nightmare: it dissolves the leverage rationing depends on. A faction that profits from a wound has a structural incentive to keep the wound — which is exactly why the Guild is the Keeper's quiet ally. (Canon: Section 7 prevention_path; Section 3 power_trend.)"
    },

    {
      id: "SG-8",
      if: "The player offers the Guild a way to PROFIT from stability-without-the-wound (a legitimate new trade, a cleaner monopoly, a cross-domain contract) in exchange for the Abyss pipeline or the rationing capture.",
      then: "The Guild — at least its pragmatic majority and Venn — will deal: it values continuity over any particular wound, and will trade a dangerous secret for a safe profit. Brom's inner ring may resist if the Abyss money is too good, splitting the faction.",
      because: "The Guild is mercenary, not fanatical. It clings to the wound only because the wound currently pays best; offer a better-paying, safer equilibrium and most of the Guild will take it. This is the player's lever to TURN the Guild rather than fight it. (Canon: Section 2 doctrine — continuity through the market; Section 13 betrayal — a better offer.)"
    },

    {
      id: "SG-9",
      if: "The player pushes the Guild's seed-stock controllers toward 'cleansing the supply' or breeding control to 'protect the lineages' (or is seen to endorse it).",
      then: "The seed-stock faction within the Guild gains ground; eugenic growth-shaping language spreads; the Guild begins deciding which lineages (and people) are 'healthy enough' to provision; corruption (Biological Control 7.4) rises and the Guild slides toward a quieter Abyss.",
      because: "Control of seed and graft-stock is the gateway to biological control — the logic of the garden applied to people. The Guild's grip on the genetic foundation of the supply makes it the faction most able to slide from rationing sap to rationing LIVES. (Canon: Section 7.4; Section 20 keeper_vulnerability.)"
    },

    {
      id: "SG-10",
      if: "The player kills, ruins, or removes Brom Valefern without resolving the supply chain or the secret.",
      then: "Supply chaos and a rationing crisis erupt at Thornveil; the Abyss-trade thread either buries with him or bursts open as scandal (player's choice of how he falls); the Guild closes ranks under a harder successor and grows more predatory; refugees suffer first.",
      because: "Brom is the human keystone of the local supply and the rationing list. Removing the keystone without a plan collapses the structure onto the most vulnerable. The Guild's response to losing a steward is to tighten, not to reform. (Canon: Section 21 Brom death_impact.)"
    }

  ]
}
```

---

## 11. Agenda Clock — Toward a Rationing Crisis / Exposure of the Abyss Trade

```ts
PressureClockState {
  id: "clock-seed-guild-stabilize-or-expose"
  campaign_id: "<campaign>"
  name: "The Managed Wound (Seed Guild agenda)"
  description: "The Guild's drive to lock in a permanent, profitable equilibrium — rationing captured, the wound stabilized as an asset, the Abyss pipeline protected — culminating either in a Refuge-breaking rationing crisis OR the explosive exposure of the Abyss trade. The clock can complete in EITHER direction depending on whether the Guild consolidates unopposed or is cracked open."
  clock_type: "faction_agenda"
  current_value: 3
  max_value: 8
  owner_type: "faction"
  owner_id: "faction-seed-guild"
  trigger_event: "Clean sap grows scarce as the Thornveil corruption chokes the supply; the Guild moves to ration and stabilize."
  partial_tick_effects: [
    "Tick 1 — Quotas introduced. Ration cards and priority lists appear at Thornveil; the Guild frames it as 'responsible stewardship.' Refugees move to the back of the list. (resource_security drops; Guild economy/resources +)",
    "Tick 2 — Price floor. Clean-sap prices climb; the black market (Hollow Pact soul-sap, smuggled clean sap) stirs as the desperate are priced out. (civilian_morale drops; Guild leverage +)",
    "Tick 3 — Capture entrenched. The Guild formalizes its grip on commons-stewardship; Sap Commons cry enclosure; the rationing list becomes a political weapon. (Guild legitimacy contested; Sap Commons rivalry hardens) [CURRENT]",
    "Tick 4 — Refuge oath strained. Wounded refugees are turned away at the Refuge built to take them in; Ilyra's people go without; the Refuge tradition begins to break. (Refuge oath at risk; refugee radicalization toward the Hollow Pact begins)",
    "Tick 5 — The pipeline pressured. Scarcity makes the Abyss premium irresistible; covert sales increase; a ledger-thread, a loose caravan, or Venn's loosening tongue becomes discoverable. (Abyss-trade exposure becomes possible)",
    "Tick 6 — Crisis OR crack. Either a bread-riot-style rationing crisis erupts (Refuge breaks, refugees flow to the Pact) OR the player/another party cracks the pipeline open. (Depth-4 event either way)",
    "Tick 7 — Consolidation OR scandal. Unopposed: the Guild locks in permanent private rationing and the managed-wound equilibrium (the Keeper's ideal). Cracked: cross-domain scandal, seizure attempts, alliance strain as Abyss spies spin 'Verdance feeds the enemy.'",
    "Tick 8 — The equilibrium sets. The managed wound becomes permanent infrastructure (Keeper best outcome) OR the Guild is broken/reformed and the scarcity is on a path to dissolving."
  ]
  completed_effect: "DIRECTION A (Stabilize, unopposed): The corrupted well is locked in as a productive, perpetually-managed asset; rationing is permanently privatized; the Refuge oath dies; the Abyss pipeline runs safely; Verdance's restoration-virtue is fully converted into a market in which the wounded are abandoned. The Keeper's quietest victory. DIRECTION B (Expose/break): The Abyss trade is exposed and/or the rationing capture is broken; the Guild suffers legitimacy collapse and possible seizure; the scarcity is on a path to resolution; BUT cross-domain scandal and alliance strain follow, which the Keeper/Abyss will exploit ('Verdance already feeds the enemy')."
  reversal_methods: [
    "Restore a clean-sap source to dissolve the scarcity (removes the Guild's fuel)",
    "Return commons-stewardship to the Sap Commons (breaks the rationing capture)",
    "Expose and sever the Abyss pipeline (with a PLAN to manage the fallout, so exposure reforms rather than shatters)",
    "Defend the Refuge oath publicly to slow the turn-away ticks",
    "Turn the Guild with a better, safer profit (rule SG-8) so it abandons the wound voluntarily"
  ]
  is_active: true
  visibility_to_player: "hinted"  // the rationing is visible; the pipeline and the Keeper logic are hidden until investigated
}
```

**Why the clock is two-directional.** The Guild's agenda is unusual: its
*completion* is stabilization (the wound made permanent), but the same scarcity that
drives it also makes the Abyss pipeline more active and therefore more
*discoverable*. The player's pressure determines which way the clock breaks — toward
the Keeper's silent victory or toward a scandal that, handled well, cures the
scarcity but handled badly, fractures the anti-Abyss alliance. **There is no clean
ending; there is only which mess you choose.**

---

## 12. Rivals, Allies, and Toleration Logic

```ts
FactionRelationships {
  faction: "The Seed Guild"
  internal_rivals: [
    "Profit-inner-ring (the Abyss pipeline) vs Refuge-loyal brokers and sickened clerks",
    "Brom Valefern (own the wound) vs Venn Briarhook (sell the secret, own nothing)",
    "Seed-stock 'cleanse the supply' faction vs traditional stewards"
  ]
  external_rivals: [
    "The Sap Commons (commons vs commodity — the defining rivalry; over rationing, the cure, and the Refuge oath)",
    "The Greenwake Communion (no shared language; the Communion's soul-talk is worthless to the Guild and the Guild's commerce is profane to the Communion)"
  ]
  contested_with: [
    "The Heartmoot (over control of the sacred stock — Heartroot cuttings — and the sealed-wells precedent; but a SILENT ALLY in practice, since the Heartmoot's paralysis serves the Guild)"
  ]
  uneasy_partners: [
    "The Rootwardens (the Guild funds and supplies the wall, buys a few wardens, and depends on containment to keep the asset stable; the Wardens distrust the Guild's hoarding but need its logistics)"
  ]
  possible_allies: [
    "The Heartmoot (delay serves both)",
    "Any party offering a safer profit than the wound (rule SG-8)",
    "Sanctuary registration brokers (legitimacy for a price)"
  ]
  secret_alliances: [
    "Abyss FRONTS (the pipeline — the secret that defines the faction)"
  ]
  infiltration_targets: [
    "The commons-stewardship/rationing apparatus (already captured)",
    "The Thornveil Rootmoot's supply decisions",
    "Caravan and mycelial-relay intelligence (Venn's domain)"
  ]
}
```

**Toleration logic (Chunk 3 TolerationState).** The Guild is "uneasy with everyone
during scarcity" (canon, Section 20). It tolerates the **Rootwardens** under
`resource_need`/`contract` (the wall protects the asset; the Guild supplies the
wall) with low hidden_resentment but high dependency. It silently tolerates the
**Heartmoot's paralysis** under `political_pressure` — never named, deeply
convenient. Its rivalry with the **Sap Commons** can only become toleration under
`metaphysical_emergency` (an open Abyss harvest) — and even then the Guild keeps
selling. The Guild's relationship with **Abyss** is the inverse of everyone else's:
where all Verdance treats Abyss as existential enemy, the Guild treats it as a
`contract` customer behind cut-outs — the deepest betrayal in the faction's nature.

---

## 13. Betrayal Triggers

Per Chunk 4: betrayal is never random. The Guild (and its NPCs) betray when the
`betrayal_risk` formula tips — threatened secret, unbearable debt/scarcity, faction
pressure, a better offer, fear, or resentment exceeding trust/debt/affection.

```ts
FactionBetrayalTriggers {
  faction: "The Seed Guild"
  the_guild_betrays_the_player_when: [
    "The player threatens the Abyss pipeline or the rationing capture (threatened secret + resource theft) — sold out, priced out, or buried",
    "A rival or Abyss front offers the Guild more than the player's loyalty is worth (a better offer — the Guild is mercenary)",
    "The player becomes an economic enemy (backing the Commons, the cure, or the Refuge oath) and the Guild's resentment + faction-pressure exceeds the player's leverage + debt",
    "Exposure is imminent and the player makes a convenient scapegoat (the Guild sacrifices a member or a partner to save the institution)",
    "The player's debt to the Guild becomes leverage the Guild prefers to cash in (sell the debt, the routes, or the player's secrets to whoever pays)"
  ]
  the_player_can_pre_empt_betrayal_by: [
    "Holding leverage over the Guild (proof of the pipeline kept in reserve — mutual blackmail / hostage_balance)",
    "Keeping the Guild more profitable as an ally than as a betrayer (rule SG-8)",
    "Clearing or never incurring crippling Guild debt",
    "Turning a key NPC (Venn for survival, Brom for conscience/self-preservation) before the inner ring moves",
    "Removing the Guild's incentive entirely by dissolving the scarcity"
  ]
  brom_specific: "Brom betrays to PROTECT THE SECRET or to PROTECT HIMSELF — he sells the player out if the pipeline is threatened, but can be turned if convinced the trade will sink him and a clean exit is offered (conscience is a distant third motive to fear and profit).",
  venn_specific: "Venn betrays to SURVIVE and to PROFIT — he double-sells by nature, flips to whoever pays/protects best, and will sell the player's secrets as readily as Abyss's. But he has one line (soul-sap) he won't cross, and 'surprising loyalty if treated as a person' (Section 21) is a real, earnable path."
}
```

---

## 14. Player Opportunity

The Guild is, by canon (Section 20 player_use), the player's route to **money,
supply, logistics, smuggling, and cross-domain contacts** AND the **lead on the
Abyss connection.** Four play modes:

```ts
PlayerOpportunity {
  faction: "The Seed Guild"

  PRESSURE: {
    summary: "Lean on the Guild's vulnerabilities — scarcity-exposure, legitimacy erosion, the secret — to bend it.",
    hooks: [
      "Threaten to expose the rationing capture to force fairer distribution",
      "Hold proof of the Abyss pipeline in reserve as leverage (mutual blackmail) — the safest way to control the Guild without breaking it",
      "Back the Sap Commons or the Refuge oath to crack the Guild's grip on rationing",
      "Squeeze Brom between fear (exposure) and profit (a clean exit) to flip him"
    ],
    risk: "The Guild fights back economically — withholds supply, prices the player out, sells the player's secrets. Pressure without leverage invites betrayal (SG-5, SG-6)."
  }

  EXPOSE: {
    summary: "Crack the Abyss pipeline open — the single richest lead on the external villain, and a faction-shattering scandal.",
    hooks: [
      "Seize the ledgers (proof of the cut-out sales)",
      "Turn Venn's testimony (he knows the routes and buyers)",
      "Catch a border transfer in the act",
      "Expose WITH A PLAN — coordinate Heartmoot/Rootwarden seizure and refugee relief — so the scandal reforms rather than fractures the alliance"
    ],
    risk: "Exposure without a plan triggers legitimacy collapse, supply chaos, and an Abyss-spun narrative ('Verdance already feeds the enemy') that strains the anti-Abyss alliance and feeds the Keeper. (Section 6; SG-5.)"
  }

  USE: {
    summary: "Run with the Guild as a moneymaker and supply line — the pragmatic, morally-greying path.",
    hooks: [
      "Buy cheap sap, smuggling routes, logistics, and cross-domain contacts (SG-2)",
      "Take Guild contracts for gold and leverage",
      "Use Guild intelligence (Venn) to navigate the border",
      "Accept that the Guild's money is, in part, the enemy's money — and decide what that makes you"
    ],
    risk: "Debt and dependence become the Guild's leverage; the deeper the player is in Guild routes, the easier the player is to betray or implicate. Using the Guild can quietly implicate the player in the Abyss trade."
  }

  FOLLOW_THE_ABYSS_THREAD: {
    summary: "Treat the Guild as the campaign's investigative on-ramp to the external villain — the MVP's most important Guild function.",
    hooks: [
      "Venn Briarhook knows WHO buys soul-sap and WHERE the Abyss supply runs — the loosest thread",
      "Brom Valefern signs the border transfers — the paper trail",
      "Follow a covert caravan to its cut-out buyer, then up the chain to the Abyss front-agent",
      "Connect the pipeline to the Thornveil corruption: the buyer of Verdant sap may be the same hand that corrupted the well (Section 17 hidden_truth)"
    ],
    risk: "The closer the player gets to the Abyss source, the more the pipeline's protectors (Brom, the inner ring, Abyss front-agents) move to bury the thread — and the player. This is where the Guild stops being a merchant and becomes a hand of the external villain."
  }

  the_moral_pressure: "RATIONING VS REFUGEES. Above all, the Guild confronts the player with the Refuge's founding oath under economic pressure: 'we do not turn away the wounded' versus 'survival first, ration responsibly.' Every Guild interaction at Thornveil is shadowed by the wounded refugee at the back of the ration line. The player cannot stay neutral: to use the Guild is to benefit from the rationing; to break it is to risk the supply collapse that kills the same refugees. (Section 23; Section 25 Refuge-oath rule.)"
}
```

---

## 15. Key NPCs

### 15.1 Brom Valefern — Border Quartermaster & Sap-Broker

```ts
NPCState {
  id: "npc-brom-valefern"
  campaign_id: "<campaign>"; name: "Brom Valefern"; domain: "Verdance"
  public_role: "Seed Guild border quartermaster and sap-broker at Thornveil — the man who decides who gets rationed sap"
  private_role: "Complicit arranger of the Abyss sap pipeline (signs the border transfers); de facto local head of the Guild"
  faction_ids: ["faction-seed-guild"]
  location_id: "loc-thornveil-refuge"
  belief_core: "Order is mercy. A wound you can sell around is a market, not a catastrophe. Someone has to keep the sap flowing and decide who gets it — better the steady hand than the panic."
  desire: "A stable, profitable equilibrium he can manage indefinitely; to keep the caravans running, the ledgers clean enough, and the secret buried; to be the indispensable man who held it together."
  fear: "Exposure of the Abyss pipeline (it ends him), a cure that dissolves the scarcity (it ends his power), and — buried deep — the face of the refugee he turned away."
  secret: "He personally arranges and signs the Guild's covert healing-sap transfers to Abyss fronts. He knows the trade is propping up the enemy. He has half-convinced himself 'the sap heals their captives too.'"
  public_mask: "The reasonable, competent, faintly weary steward — 'I don't make the scarcity, friend, I just manage it fairly.'"
  private_truth: "A man who has already accepted the Void's lie (Section 8) — who would rather manage a corrupted asset and feed the enemy than risk a cure, and who is one threatened secret away from selling out anyone."
  status: "alive"; hp: 14
  trust: 30; fear: 35; affection: 8; suspicion: 45; respect: 40; debt: 0; resentment: 20; loyalty: 25
  relationship_to_player: "suspicious_contact"
  can_romance: false; can_betray: true; can_die: true; can_kill: false; can_defect: true; can_start_rumors: true
  rumor_style: "Commercial spin — 'the cure is reckless,' 'rationing is responsible' — seeded through brokers and the market."
  lie_style: "Plausible, weary, reasonable; reframes every cruelty as logistics and every betrayal as prudence."
  loyalty_trigger: "A safer, cleaner profit than the wound (rule SG-8) + a guaranteed clean exit from the Abyss trade; or genuine leverage that makes loyalty cheaper than betrayal."
  betrayal_trigger: "The Abyss pipeline or the rationing capture is threatened; exposure becomes imminent (he sells the player out or arranges a scapegoat)."
  death_consequence: "Supply chaos and a rationing crisis at Thornveil; the Abyss-trade thread buries with him OR bursts open as scandal (player's choice of how he falls); the Guild closes ranks under a harder successor and grows more predatory; refugees suffer first."
  hero_arc: "Turned informant — convinced the trade will sink him, Brom flips on the Abyss pipeline, exposes it from inside (with a plan), and reopens the ration list to the wounded as penance. The hoarder who chose the Refuge oath at the end."
  villain_arc: "Owns the wound — Brom locks in permanent private rationing, deepens the Abyss pipeline, and slides the seed-stock toward 'cleansing the supply'; the competent steward becomes the man who decides who lives, and calls it logistics."
  visibility_to_player: "partial"
}
```

**Brom in play.** He is hoarding's human face — not a monster, a manager. He is the
player's everyday access to sap, supply, and the ration list, and the man at the
near end of the Abyss pipeline. The player will deal with him constantly; the
question the game keeps asking is whether Brom is a useful broker, a blackmail
target, an informant to turn, or a betrayer to pre-empt — and whether the refugee at
the back of his line is the player's problem or his.

### 15.2 Venn Briarhook — Caravan-Master & Information-Broker

```ts
NPCState {
  id: "npc-venn-briarhook"
  campaign_id: "<campaign>"; name: "Venn Briarhook"; domain: "Verdance"
  public_role: "Seed Guild caravan-master — runs the Green Roads and border routes"
  private_role: "Information-broker and smuggler; knows who crosses, who buys soul-sap, and where the Abyss supply runs; loyal mainly to himself"
  faction_ids: ["faction-seed-guild"]  // loosely
  location_id: "loc-thornveil-refuge"  // mobile along the routes
  belief_core: "Everything has a price and everyone is selling. Survive the season, take the better offer, and don't fall in love with a side — sides get you killed."
  desire: "To survive, profit, and stay un-owned; to keep his routes open and his options plural; to never be the one holding the bag when a secret blows."
  fear: "Being cornered into one loyalty; being the scapegoat when the pipeline blows; and, quietly, the one buyer (soul-sap) whose business sickens even him."
  secret: "He knows the Abyss supply runs in detail — routes, cut-outs, buyers, who purchases soul-sap — and he is sitting on it, deciding who to sell it to and when. He is the loosest thread to the external villain."
  public_mask: "The genial, unbothered rogue who'll get you anything for the right price and never asks why."
  private_truth: "A pragmatic survivor with one uncrossable line (soul-sap) and a surprising, earnable capacity for loyalty if — for once — someone treats him as a person and not a service."
  status: "alive"; hp: 12
  trust: 25; fear: 15; affection: 12; suspicion: 30; respect: 35; debt: 0; resentment: 10; loyalty: 15
  relationship_to_player: "suspicious_contact"
  can_romance: false; can_betray: true; can_die: true; can_kill: true; can_defect: true; can_start_rumors: true
  rumor_style: "Sells rumors as products; seeds whatever the buyer paid for; trades in the border's secrets."
  lie_style: "Charming omission and priced truth — he doesn't lie so much as withhold until you pay, then tells you exactly enough."
  loyalty_trigger: "Being treated as a person, not a tool, AND being out-paid/out-protected by the player; a side that lets him keep his options and won't make him the scapegoat."
  betrayal_trigger: "A better offer; an imminent blow-up where he'd be the bag-holder (he flips first); pressure that corners him into a single loyalty he didn't choose."
  death_consequence: "Intelligence and smuggling routes go dark; the Abyss thread he carried surfaces (if he stashed proof) or vanishes (if it dies with him); the border information economy reshuffles; whoever he sold to loses a source or covers their tracks."
  hero_arc: "Treated as a person, Venn picks a side for once — hands the player the whole Abyss supply map and testifies, choosing loyalty over the better offer. The rogue who finally refused to sell something."
  villain_arc: "Void-reached on a bad day (Section 9), Venn crosses his last line — starts running soul-sap too, becomes a full Abyss conduit, and sells everyone to everyone until the border eats him."
  visibility_to_player: "partial"
}
```

**Venn in play.** He is the **investigative on-ramp to the external villain** —
mercenary, unreliable, indispensable. He sells intelligence, routes, and contacts;
he knows who buys soul-sap and where the Abyss supply runs. The player can pay him,
pressure him, or — uniquely — earn him by treating him as a person. He is the
faction's clearest "follow the Abyss thread" NPC, and the one most likely to either
hand the player the whole map or sell the player out, depending on which is worth
more this season.

---

## 16. FactionState — Concrete JSON Instance

A build-ready `FactionState` (Chunk 3 schema) for VERDAX, with player_standing
numbers at a representative early-MVP point (the player has done a little Guild
business and asked one too many questions about the border trade).

```json
{
  "id": "faction-seed-guild",
  "campaign_id": "verdax-mvp-sap-beneath-ash",
  "name": "The Seed Guild",
  "domain": "Verdance",
  "doctrine": "Stability and continuity through the market. Keep the sap and seed flowing, the exports moving, the prices managed; a stable wound is better than a risky cure or a reckless purge. Protect the commons by professionalizing it.",
  "ideal_future": "A Verdance where the rootwells are stable, perpetually-managed productive assets, the sacred-sap commons is a well-run private market, every domain (including Abyss, quietly) is a paying customer, and the Guild's stewardship is indispensable to all of them.",
  "public_goal": "Stabilize the Thornveil supply, keep the Refuge fed and exports moving, ration responsibly through the scarcity, and protect the world's healing-sap economy from a reckless cure or a panicked purge.",
  "hidden_goal": "Keep the corrupted asset productive rather than healed; entrench captured commons-stewardship into permanent private control of rationing; and protect the covert, profitable healing-sap pipeline to Abyss fronts.",
  "leader_npc_ids": ["npc-brom-valefern"],
  "champion_npc_ids": ["npc-venn-briarhook"],
  "class_base": { "Brokers & Stewards (Trading Class)": 100 },
  "power_sources": {
    "military": 18,
    "economy": 84,
    "magic": 44,
    "religion": 22,
    "intelligence": 66,
    "legitimacy": 52,
    "resources": 80,
    "fear": 48
  },
  "resources_controlled": [
    "Clean-sap stockpiles and rationing",
    "Seed and graft-stock (seed-vaults, graft-houses)",
    "Living timber and grown goods",
    "The export economy (world healing-sap supply)",
    "Captured commons-stewardship (quotas, priority lists, ration cards)"
  ],
  "locations_controlled": [
    "loc-thornveil-border-market",
    "loc-green-roads-waystations",
    "loc-seed-vaults-grafthouses",
    "loc-thornveil-ration-distribution"
  ],
  "magic_access": ["Seed-Binding", "Growth-Shaping", "Mycelial Messaging (trade/relay)"],
  "military_units_controlled": ["Hired caravan guards", "A few bought Rootwardens", "Contracted mercenary escorts"],
  "trade_routes_controlled": [
    "The Green Roads",
    "River-and-root routes",
    "Thornveil border markets",
    "Sky-trade waystations (Tempest premium)",
    "Covert Abyss-front supply runs"
  ],
  "internal_rivals": [
    "Profit-inner-ring (Abyss pipeline) vs Refuge-loyal brokers",
    "npc-brom-valefern (own the wound) vs npc-venn-briarhook (sell the secret, own nothing)",
    "Seed-stock 'cleanse the supply' faction vs traditional stewards"
  ],
  "external_enemies": ["faction-sap-commons", "faction-greenwake-communion"],
  "possible_allies": ["faction-heartmoot", "faction-rootwardens", "any-safer-profit-broker"],
  "secret_alliances": ["abyss-front-buyers"],
  "infiltration_targets": [
    "commons-stewardship / rationing apparatus (captured)",
    "Thornveil Rootmoot supply decisions",
    "caravan and mycelial-relay intelligence"
  ],
  "methods": {
    "diplomacy": 62,
    "open_war": 12,
    "sabotage": 40,
    "propaganda": 55,
    "assassination": 22,
    "trade_pressure": 86,
    "magical_escalation": 24
  },
  "player_standing": {
    "reputation": 40,
    "trust": 38,
    "fear": 20,
    "respect": 45,
    "suspicion": 52,
    "debt": 25,
    "leverage": 30
  },
  "keeper_exploit_vector": "Resource Hoarding (7.5): the Guild stabilizes the wound rather than healing it — rationing, pricing, and stockpiling convert restoration into a market where the wounded are abandoned, the cure is delayed into permanence, seed-stock control opens onto eugenic biological control, and the Abyss pipeline funds the enemy. The Keeper need not act; the market does it.",
  "void_temptation_phrase": "You are not being heartless. You are being responsible. Someone has to keep the sap flowing and decide who gets it — let it be the steady hand, not the panic. Don't heal the well; you'd lose it. Don't burn it; you'd waste it. Manage it. Sell what you must to whom you must — the sap heals their captives too. Survival first. A wound you can live with is an income.",
  "agenda_clock_ids": ["clock-seed-guild-stabilize-or-expose"],
  "active_rumor_ids": ["rumor-cure-is-reckless", "rumor-guild-sells-across-the-border"],
  "current_status": "Dominant in supply and rationing, brittle in legitimacy and faith; profiting from the scarcity it has no incentive to end; sitting on the campaign's loosest thread to Abyss. Player standing: a useful-but-watched contact who has asked one too many questions (suspicion 52, debt 25, leverage 30)."
}
```

**Reading the player_standing.** Reputation 40 / trust 38 — the player is a known,
moderately-useful client, not an insider. Respect 45 — the Guild respects a player
who pays and performs. **Suspicion 52** is the live number: the player has nosed
near the border trade, and the Guild is watching. **Debt 25** is the Guild's hook
(use the player's debt as leverage); **leverage 30** is the player's counter-hook
(what the player already has on the Guild — early proof, a turned clerk). Fear 20 is
low: the Guild does not yet fear this player. If the player seizes the ledgers,
expect suspicion and fear to spike and trust to crater — and the betrayal clock
(SG-5) to start.

---

## 17. Consequence Examples (3rd- and 5th-order)

Following the Chunk 4 causality formula: *Action → Method → Witness →
Interpretation → Power Shift → Social Reaction → Systemic Effect → Metaphysical
Effect → Future Pressure.*

### 17.1 Third-order example — The player exposes the rationing capture

**Action.** The player publicly reveals that the Guild's "responsible rationing" is
a private capture of commons-stewardship and backs the Sap Commons' demand to return
the ration list to the cost-bearers.

- **1st (immediate).** The Thornveil ration list is contested; Brom's authority
  wobbles; the player gains Sap Commons trust (+) and Guild suspicion (+). Guild
  `legitimacy` 52 → ~46.
- **2nd (scene/local).** Refugees and tenders rally to the Commons; Ilyra's people
  get sap; Brom withholds supply from the player and seeds the counter-rumor "the
  cure is reckless; the Commons will exhaust the well." Guild `economy`/`resources`
  hold but `player_standing.trust` drops, `resentment` rises.
- **3rd (local/system).** **Power shift:** the Sap Commons rise as the rationing
  authority; the Guild loses its grip on who-gets-sap (its most valuable hidden
  asset). The Refuge oath strengthens (refugees fed); refugee loyalty flows to the
  Commons, not the Pact. **Systemic effect:** the Guild pivots — pressures debtors,
  funds propaganda, and may sell the player's secrets to a rival or quietly tip the
  Abyss front that a nosy player is loose. The agenda clock's "turn-away" ticks
  slow; the "pipeline pressured" tick may instead advance, because a cornered Guild
  leans harder on its most profitable secret. *(This is a depth-3 chain: a named
  faction's power and a location's resource_security shift, rumors spread, a clock
  re-routes.)*

### 17.2 Fifth-order example — The player exposes the Abyss pipeline without a plan

**Action.** The player seizes the ledgers and publicly proves the Guild has been
selling healing-sap to Abyss fronts — dramatically, without coordinating relief,
seizure, or alliance management.

- **1st (immediate).** Proof lands; Brom is ruined or flees; the Guild's
  `legitimacy` 52 → ~30; the player gains a true, damning revelation and Sap
  Commons/Rootwarden respect.
- **2nd (scene).** The Guild closes ranks under a harder successor; supply chaos
  hits the ration line; a scapegoat is arranged; Venn calculates and likely flips to
  whoever protects him.
- **3rd (local/system).** **Power shift:** the Thornveil supply chain fractures; a
  rationing crisis erupts (agenda clock → tick 6, "crisis"); the Refuge oath breaks
  as the disrupted supply turns away the wounded; refugee radicalization toward the
  Hollow Pact accelerates. The black market (soul-sap) surges as the desperate are
  cut off.
- **4th (regional/political).** **Abyss spies weaponize the scandal:** "Verdance
  already feeds the enemy — its own merchants funded the harvest." The anti-Abyss
  alliance strains; Sanctuary demands registration/quarantine; Radiance cites it as
  proof Verdance is compromised and presses harder for a "cleansing" burn of the
  well. Cross-domain trust in Verdant healing-sap drops; the world's medicine supply
  is now politically radioactive. *(Warfront/diplomacy shift from a non-combat
  action — Chunk 4 rule 10.)*
- **5th (mythic/metaphysical).** **The Keeper gains through the system.** The
  scandal-driven scarcity routes the desperate to soul-sap (the only "medicine" they
  can get), and each survival-purchase is a fresh `grief_harvest`/`death_passage_blocked`
  soul-flow wound. The fractured alliance leaves the Thornveil chokepoint contested,
  so the corrupted well stabilizes toward a permanent soul-trap. `soul_flow_integrity`
  falls; the Verdance Stone's regional stability drops; `keeper_pressure` rises —
  **not from a villain's move but from a true exposure handled without a plan.** The
  Void's whisper lands on the player: *"You told the truth, and look — they're worse
  off. Next time, manage it quietly. Stability first."* (`void_temptation`,
  identity strain on a truth-telling player.)
  - **Intervention paths (Chunk 4 — heavy but playable):** expose WITH a plan
    (pre-arrange Heartmoot/Rootwarden seizure and Commons-run relief so the scandal
    reforms instead of shatters); pair exposure with a restored clean-sap source so
    the supply doesn't collapse; turn Brom into an inside informant so the reveal is
    controlled; counter the Abyss-spun rumor with root-memory evidence that the Guild,
    not Verdance, was the seller. The truth is not the mistake — **exposure without
    relief** is.

**The lesson the chain teaches.** With the Seed Guild, the dramatic moral victory
(exposing the traitor-merchants) can deepen the very wound it condemns, because the
Guild's crime and the region's survival are tangled in the same supply line. VERDAX
should make the player feel that **cutting the rot out of the wall can bring the wall
down** — and that the patient, planned cure is harder and better than the cathartic
exposure.

---

## 18. MVP Role in *The Sap Beneath the Ash*

The Seed Guild's job in the vertical slice is to be the player's **economic
lifeline and the campaign's investigative on-ramp to the external villain** — and to
press the **rationing-vs-refugees** moral question relentlessly.

**1. The moneymaker / supply line.** The Guild is where the player gets gold,
healing-sap, gear, smuggling routes, logistics, and cross-domain contacts. Early
play runs through Brom's ration counter and Venn's caravans. The Guild is reliable,
competent, and asks few questions — which is exactly what makes it dangerous to lean
on. (Canon: Section 20 player_use; rule SG-2.)

**2. The Abyss thread — the lead on the external villain.** This is the Guild's most
important MVP function. The corrupted Thornveil well is an Abyss soul-harvest
incision (Section 17 hidden_truth); the Guild sells healing-sap to Abyss fronts
(Section 6). **The same enemy that corrupts the well is buying the sap** — and the
Guild is the cut-out in between. Venn knows where the Abyss supply runs and who buys
soul-sap; Brom signs the transfers; the ledgers are the proof. Following the pipeline
up the chain is the player's clearest route from a local talking-well mystery to the
external Abyss villain. The Guild turns "why does the well speak?" into "who is on
the other end of this caravan?" (Canon: Section 22; Section 6; Player Opportunity
FOLLOW_THE_ABYSS_THREAD.)

**3. The smuggling engine.** When the player needs to move people, sap, weapons, or
secrets across a militarized border — refugees out, evidence in, a cure-component
past a blockade — the Guild's routes are the way. Venn is the smuggler-of-record;
the price is gold, leverage, or a favor that compromises the player a little
further. (Canon: Section 20; Section 5.)

**4. The rationing-vs-refugees moral pressure.** The Guild forces Verdance's founding
oath into the open: *"we do not turn away the wounded"* versus *"survival first,
ration responsibly."* As the corruption chokes the clean-sap supply, the Guild
rations — and the wounded refugee at the back of Brom's line is the player's
constant moral companion. The player cannot stay neutral: **using the Guild means
benefiting from the rationing; breaking the Guild risks the supply collapse that
kills the same refugees.** This is the Guild's contribution to the MVP's central
question — what does it cost to keep a dying community alive, and who pays first?
(Canon: Section 23 "The Commons or the Market?"; Section 25 Refuge-oath rule.)

**5. The quiet face of the Keeper exploit.** Where the Hollow Pact is the loud
temptation (command the rot), the Seed Guild is the **silent** one (manage the
wound). It never asks the player to do anything forbidden — only to be reasonable, to
take the deal, to let the caravans run, to not look too hard at the buyer. It is the
faction that makes the MVP's central horror — *Verdance defending its own wound* —
feel not like corruption but like good sense. If the player learns to fear the
ration card as much as the soul-sap, the Guild has done its job.

**MVP one-line.** *The Seed Guild is the player's purse, supply line, and smuggler —
and the loose thread that, pulled, leads from a talking well to the enemy who made
it speak. It pays well. The money is the enemy's. The wounded are waiting at the back
of the line. Choose.*

---

## 19. Open Questions (for NEXUS-ORCH / future expansion)

1. **Who in the Heartmoot looks away from the pipeline?** Canon hints (Section 6
   who_knows) that a few elders may know. Naming one would braid the Guild's secret
   into the "Sealed Wells" cover-up (Section 23) — a powerful but optional link.
2. **Does the same Abyss front-agent who buys the sap command the well's corruption?**
   Section 17 implies it; confirming it would make the pipeline the literal road to
   the MVP's metaphysical villain. Recommended: leave discoverable, not stated.
3. **A turned-Brom continental arc.** If Brom flips and survives, does his inside
   knowledge scale up to expose the pipeline across all four border wells (linking to
   Section 23's continental Vigil)? Flagged for the regional-pressure phase.
4. **Seed-stock / biological-control escalation.** The eugenic slide (rule SG-9, 7.4)
   is sketched but not yet given an NPC or a clock; a "Cleanse the Supply" sub-agenda
   could be promoted if the player pushes that path.
5. **Venn's stash.** Whether Venn has hidden proof that surfaces on his death
   (Section 15.2 death_consequence) should be set per campaign — a useful GM dial for
   whether the Abyss thread survives him.

---

*Status: Draft v1.0 — FACTION-WEAVER. Awaiting CANON-WARDEN QA pass (contradiction,
depth, specificity, gameplay, cause/effect, trackability) and SCHEMA-FORGE
implementation pass (FactionState fields, agenda clock, NPC states, player_standing,
rumor IDs). Obeys Verdance Domain Bible v1.0 sections 7.4, 7.5, 14, 20, 22, 23, 24,
25; Chunk 3 tracking language; Chunk 4 cause/effect depth.*
