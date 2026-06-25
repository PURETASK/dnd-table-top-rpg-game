---
title: The Hollow Pact — Verdance Faction Bible
status: Draft v1.0
lead: FACTION-WEAVER
qa: CANON-WARDEN
implementation: SCHEMA-FORGE
domain: Verdance
faction_role: fringe / edge (weaponized corruption)
mvp: true
note: >
  The Hollow Pact is Verdance's fringe faction and the central temptation of the
  MVP vertical slice "The Sap Beneath the Ash" (Thornveil Refuge). It is the
  Void's Verdance lie made flesh and the Keeper's Verdance exploit made flesh:
  Verdance harvesting souls "for good reasons." This bible obeys Chunk 1 (the Void
  as enhancement/parasite/liar; the Keeper exploit of Verdance), the Chunk 3
  tracking language (FactionState, TolerationState, RelationshipState), and Chunk
  4 cause/effect depth, and it is bound by Verdance Domain Bible §20, §23, §24,
  §25 (faction index, the Speaking-Well power struggle, rumor ecology, and
  relationship/toleration logic). Where this file and the domain bible meet, the
  domain bible governs; this file expands, it does not contradict.
---

# The Hollow Pact v1.0 — *The Soul-Trap with a Creed*

> "They tell you the dead are at peace in the roots. They are not. They are still
> in there, still calling, and your wise elders have decided not to hear them.
> The wardens wall them up. The healers can't reach them. We are the only ones
> who answer. We don't trap the dead, child — they're already trapped. We let
> them do one last good thing on their way out. Drink. Your mother is in here.
> She wants to help you live."
> — Nymara Hollowbloom, to a refugee at the edge of the Hollow Reach

> "Every soul she 'frees' she ties a knot tighter. She believes it. That is the
> horror. You could love her and bury her in the same week and be right both
> times."
> — Auralis Greenwake

---

## 1. Faction Identity Snapshot

The Hollow Pact is **not a cult and not a demon-grove.** It is a movement of
grieving, abandoned, and cornered Verdants who looked at a soul-flow catastrophe,
looked at the elders who would not act and the wardens who only walled it up, and
drew a single terrible conclusion: *if the cycle includes decay, then the cycle
can be commanded — and whoever commands it can fight back.* They are domain-native
to the bone. Every weapon they wield is a sacred Verdant discipline turned one
notch past the line. Every doctrine they preach is a true Verdant grief wearing a
false answer. They do not hate Verdance. They believe they are the only ones left
who love it enough to **use** it.

That is the trap. The Pact's self-image is **liberators of the trapped dead and
defenders of the abandoned living.** The reality is a **soul-trap with a creed**:
every act that "frees" a held soul by drawing on it binds that soul tighter,
deepens the wound, and trains the user to control the cycle rather than tend it.
The Pact is the Keeper's preferred future for Verdance — a green civilization that
harvests souls *for good reasons* — and the Void has it entirely. The unbearable
part, the part VERDAX must never flatten into villainy, is that **their weapon
works.** Corrupted-sap traps annihilate Abyss patrols better than anything clean.
Soul-sap heals what clean sap cannot. The trapped voices really do know things.
When Abyss comes for the dead, the Hollow Pact is the only faction in Verdance
that reliably stops the harvest — which is exactly why even the people hunting
them sometimes have to let them work.

```ts
FactionIdentitySnapshot {
  faction_name: "The Hollow Pact"
  domain: "Verdance"
  faction_role: "fringe / edge — weaponized corruption"
  short_doctrine: "If decay is part of the cycle, the cycle can be COMMANDED. The corrupted sap is power; the trapped voices are kin to be freed by being USED; the elders are cowards and the wardens are jailers. Survival and agency now, by any rot necessary."
  self_image: "Liberators of the trapped dead and the only defenders the abandoned living have left."
  reality: "A soul-trap with a creed — a movement that deepens the very wound it claims to heal, harvesting souls 'for good reasons.' The Void's Verdance lie made flesh."
  class_base: "The desperate and the bereaved — radicalized refugees, defected Rootwardens, disillusioned rot-tenders, the grief-stricken."
  leader: "Nymara Hollowbloom"
  heartland: "The Hollow Reach (Verdance Domain Bible §17.4)"
  cardinal_sin_committed: "Weaponized rot / soul-sap / holding-and-using the dead — the single deepest Verdant taboo (the cardinal violation in Verdance §25)."
  keeper_exploit_embodied: "If decay is natural, corrupted growth is still Verdance — and the trapped become 'ancestors' / 'kin who choose to help.'"
  void_lie_embodied: "You can free them by using them. Save them now, the fast way. You already speak with the dead — finish the cycle."
  why_it_is_sympathetic: "Every member is a real Verdant grief with a real Verdant grievance: the elders DID abandon the sealed wells; the wardens DO only contain; the dead ARE still trapped and calling; Abyss IS harvesting souls; and the corrupted weapon DOES work. The Pact is wrong about the cure, not about the wound."
  why_it_is_horrifying: "It is right about everything except the one thing that matters — that 'using' the dead binds them tighter — and its victories normalize the exact corruption that will turn Verdance into a quieter Abyss."
}
```

---

## 2. Origin — How Grief Became a Doctrine

The Hollow Pact did not begin as heresy. It began as a **funeral that could not
finish.**

When Abyss first cut the eastern border rootwells — soul-harvest incisions
disguised as ordinary blight — the dead of the borderlands stopped settling. The
Heartmoot did what the Heartmoot does: it deliberated, it waited "one more
season," and then, quietly, it **sealed three wells and abandoned their dead**,
and told no one (Verdance §4, §23 *The Sealed Wells*). The Rootwardens did what
the Rootwardens do: they walled the wounds and held the line, season after season,
guarding a grief that never healed. And the bereaved of those abandoned groves
returned to the sealed wells again and again, because their dead were still in
there, still calling — and no one in authority would either free them or admit
they could not.

Into that abandonment came the Void's mercy-lie (Verdance §9): *you can hear them;
the elders can't reach them and the wardens only wall them up, but you can answer;
free them by using them; let them do one last good thing.* The first Hollow Pact
acts were not atrocities. They were a grieving rot-tender drawing soul-sap from a
trapped parent to heal a dying child, and the child living, and the parent's voice
saying *thank you.* They were a defector-warden who had buried too many comrades
setting a corrupted-sap trap that wiped out the Abyss patrol that would have taken
fifty more. **They worked. They felt like mercy. And the dead seemed grateful.**

That is the seed of the entire doctrine. Everything the Pact believes grew from a
true premise (the dead are trapped; the elders abandoned them; the weapon works)
and a false conclusion (therefore use them). The movement coheres because it
offers the three things the desperate and bereaved most lack: **agency** (you are
not helpless against Abyss), **meaning** (your dead are not lost, they are kin who
help), and **belonging** (the Hollow Reach takes you when the Refuge turns you
away). It is, structurally, the dark mirror of the Refuge tradition itself: *we
do not turn away the wounded* — including the wounded who have nowhere left but
the rot.

---

## 3. Doctrine — The Four Tenets

The Pact's theology is a precise inversion of the four Verdant virtues most
relevant to the crisis (Verdance §6). Each tenet is a real grief with a false
answer.

1. **The Cycle Can Be Commanded.** (Inverts *Cycles / Patience*.) "Decay is part
   of the cycle. The elders say *sit with the wheel* while Abyss turns it against
   us. We say: if rot is sacred, then *commanding* rot is sacred. We are not
   breaking the cycle. We are finishing it — faster than the cowards dare."
   *True grief:* patience has become stagnation; the wound is real and no one acts.
   *False answer:* control replaces tending.

2. **The Trapped Are Kin, and Kin Are Freed by Being Used.** (Inverts *Communion
   / Ecological Memory*.) "Your elders interpret the dead. We *use* the dead — and
   in using them, we free them. A soul that does one last good thing is a soul at
   peace. We are the only Passage-Tenders left who actually move the dead, instead
   of leaving them to rot behind a wall." *True grief:* the dead are genuinely
   trapped and genuinely calling, and the authorities will neither hear nor
   release them. *False answer:* drawing on a soul binds it tighter; the "release"
   is the deepening of the trap (Verdance §5, §9).

3. **Survival and Agency Now, By Any Rot Necessary.** (Inverts *Restoration /
   Healing*.) "The slow true cure is a story the well-fed tell while the wounded
   die at the Refuge door. We have a medicine *tonight* — soul-sap — and a weapon
   *tonight* — blight-traps. The Sap Commons promise a cure next season; next
   season the refugees are dead. Survival is not patient." *True grief:* hoarding
   and paralysis really are killing people; the desperate really cannot wait.
   *False answer:* the fast false cure spreads the wound it treats.

4. **The Elders Are Cowards and the Wardens Are Jailers.** (Inverts *Living
   Systems / the Refuge oath*.) "The Heartmoot sealed three wells and abandoned
   their dead — and hid it. The Rootwardens wall the wound and call it mercy. They
   abandoned you. We did not. Judge them by what they did to your dead, not by
   what they preach." *True grief:* the cover-up is real (Verdance §23); the
   authorities did abandon the sealed wells. *False answer:* the authorities'
   failure does not make the Pact's method right — it makes the Pact a *second*
   failure that calls itself a rescue.

> **The doctrinal engine VERDAX should run:** every Hollow Pact argument is half
> true. Never let an NPC refute the Pact by calling it evil — refute it (when it
> is refuted at all) by showing the *cost*: the soul bound tighter, the soil gone
> over, the user answering to a dead name. The Pact wins every debate about the
> wound and loses every demonstration of the cure.

---

## 4. Leadership — Nymara Hollowbloom

(Full NPC dossier belongs to LIVING-CASTWRIGHT; this is the faction-level sketch,
bound to Verdance §21 "Rival / Edge Character" and the soul-flow wound §27.)

Nymara Hollowbloom was a rot-tender of one of the three sealed groves — a woman
whose sacred profession was the honored composting of the dead into memory, until
Abyss cut her well and the Heartmoot walled it shut with her people's dead inside,
and told her it was the cycle. She went back to that sealed well every day. She
could hear them. And one day the Void offered her the thing no one in authority
would: a way to *answer.*

**She genuinely believes she is freeing the dead.** This is canon and it is the
whole tragedy (Verdance §17.4 hidden secret; §21). She is not a hypocrite, not a
power-seeker wearing grief as a mask, not secretly nihilistic. She is a sincere,
charismatic, grieving Verdant who took the mercy-lie and built a refuge for
everyone else the world abandoned. The voices thank her. She does not know — or
cannot let herself know — that their gratitude is the trap closing. She is
Auralis Greenwake's mirror: the same gift of hearing the dead, the opposite
choice about what to do with them (Verdance §21, §25).

**What makes her dangerous as a leader:** she does not recruit with hatred. She
recruits with *welcome.* She takes the refugee the Seed Guild rationed away from
the sap; she takes the warden who buried one comrade too many; she takes the
bereaved parent whose child is dying for want of medicine the commons hoards. She
gives them agency, kin, and a home. The Pact's loyalty is the loyalty of the
hopeless to the only person who did not turn them away.

**Player vectors (Verdance §21):** Nymara can be **broken** (her cell scattered,
her operation destroyed — a symptom-cure that solves nothing and may martyr her),
**turned** (shown, at terrible cost, that her "freeing" is a binding — the hardest
and most redemptive path), **tolerated** (allied-of-necessity against an Abyss
harvest — the depth-5 dilemma), or **fallen-to** (she becomes the dark mentor of a
corrupting player). Her death is a symptom-cure: it may release or scatter the
voices she channeled, but the well stays corrupted, the elders stay paralyzed, and
Abyss keeps cutting — and a martyred Nymara can *sanctify* weaponized rot
(Verdance §21 death_impact).

---

## 5. Power Sources (8 scored)

`FactionState.power_sources` uses six canonical axes (military, economy, magic,
religion, intelligence, legitimacy) plus two domain-relevant additions tracked in
`resources` and `fear`. Scored 0–100 on the Chunk 3 scale (0–10 absent · 11–20
critical · 21–40 weak · 41–60 contested · 61–80 strong · 81–95 dominant · 96–100
mythic). The Pact's profile is the signature of a fringe faction: **terrifying in
two or three narrow dimensions, hollow everywhere else.**

```ts
power_sources: {
  military: 58,      // SCORED HIGH FOR ITS SIZE. Tiny in numbers, but its taboo weapons
                     //   (corrupted-sap blight-traps, soul-sap-empowered fighters) are
                     //   disproportionately lethal — and specifically the best anti-Abyss
                     //   tools in Verdance. This is the number that forces the toleration.
  economy: 31,       // WEAK. No legitimate economy; survives on covert Abyss supply,
                     //   black-market soul-sap sales, and what the desperate bring with them.
                     //   Dependent and precarious — its supply line is also its leash.
  magic: 64,         // STRONG (and forbidden). Mastery of weaponized rot-tending and
                     //   soul-sap craft that no clean faction will touch; the discipline
                     //   gap is real power. But it is power drawn from a wound, so every
                     //   use degrades the source it draws on.
  religion: 47,      // CONTESTED. A genuine counter-theology (the four tenets) with real
                     //   devotional force among the bereaved — but it is heresy to all of
                     //   Verdance, so it cannot spread in daylight. Deep, not wide.
  intelligence: 55,  // CONTESTED-TO-STRONG. The trapped-voice ORACLE genuinely yields real
                     //   foreknowledge (Verdance §9 immediate_benefit), and defected
                     //   Rootwardens bring warden intelligence and mycelial-relay knowledge.
                     //   Unreliable (the voices lie too) but uniquely penetrating.
  legitimacy: 12,    // CRITICAL/ABSENT. The Pact commits Verdance's cardinal sin; it has
                     //   zero standing with any institution and is hunted by the Wardens.
                     //   Its ONLY legitimacy is the negative legitimacy of the abandoned:
                     //   "the elders failed you; we didn't."
  resources: 49,     // CONTESTED. Controls the Hollow Reach sanctuary, corrupted-grove
                     //   "vigor," soul-sap stores, blight-trap stockpiles, and trafficked
                     //   names/voices (Verdance §17.4). Materially potent, morally radioactive,
                     //   and ultimately parasitic on the wound.
  fear: 71,          // STRONG. The Pact is genuinely feared — by Abyss (which it kills),
                     //   by the wardens (whose own may defect), by the elders (whose cover-up
                     //   it can expose), and by ordinary Verdants (who see in it what their
                     //   domain could become). Fear is its largest single asset and its ceiling.
}
```

**Reading the profile.** The Pact's whole strategic existence lives in the gap
between **military 58 / magic 64 / fear 71** (the things that make it
indispensable and terrifying) and **legitimacy 12 / economy 31** (the things that
make it dependent and doomed). It is strong exactly where it is most corrupting
and weak exactly where survival requires legitimacy. The Keeper does not need the
Pact to *win* — only to be *needed*, repeatedly, until being-needed becomes
being-normal. Note especially that **economy 31 is a leash**: the covert Abyss
supply (Verdance §17.4, §20) means the faction that exists to *kill* Abyss is
quietly *fed* by it — the Keeper arming both sides of a war that damages the
soul-flow either way.

---

## 6. Methods

```ts
methods: {
  diplomacy: 22,            // almost none; the Pact negotiates only the toleration truce,
                            //   and only from a position of "you need us tonight."
  open_war: 41,             // limited but devastating; it does not field armies, it sets
                            //   the borderlands themselves against intruders (blight-traps).
  sabotage: 64,             // its native mode — poisoning ground, trapping passages, turning
                            //   terrain into a soul-eating weapon.
  propaganda: 58,           // the four tenets + the well's voices as "oracle" + the sealed-wells
                            //   truth weaponized into recruitment (Verdance §24).
  assassination: 47,        // targeted; soul-sap-empowered killers, name-strikes via the well.
  trade_pressure: 18,       // negligible; it has no market leverage, only black-market supply.
  magical_escalation: 73,   // its highest method — every problem answered by drawing deeper
                            //   on the wound, which is precisely the Void's dependency engine.
}
```

The Pact's method-signature is **escalation as theology**: when a clean faction
hits a wall it deliberates; when the Pact hits a wall it draws *more* on the
corrupted source. VERDAX should render this as the Void's dependency spiral made
institutional — each Pact "solution" raises `void_parasitism` and deepens the wound
it was meant to answer.

---

## 7. Agenda Clock — *The Normalization of the Rot*

The Pact's master agenda is not conquest. It is **normalization**: to make
weaponized rot the thing that "obviously works," until Verdance defends its own
wound and the corrupted sap becomes ordinary infrastructure. The clock can also
tip, late, into an outright **soul-flow catastrophe** at Thornveil. This is a
`faction_agenda` pressure clock (Chunk 3) that the Keeper exploit (Verdance §8)
runs *through* the Pact.

```ts
PressureClockState {
  id: "pc_hollow_pact_normalization"
  campaign_id: "<campaign>"
  name: "The Normalization of the Rot"
  description: "The Hollow Pact's agenda: make weaponized rot the accepted answer to the Abyss border crisis, until Verdance harvests souls 'for good reasons' as a matter of course — and, at completion, until the Thornveil well (or a sealed well) collapses into a permanent, expanding soul-trap: a soul-flow catastrophe."
  clock_type: "faction_agenda"
  current_value: 3   // MVP opening: the Pact is active but fringe; one tactical success past mere existence
  max_value: 8
  owner_type: "faction"; owner_id: "fac_hollow_pact"
  trigger_event: "Each public/tolerated use of corrupted sap or soul-sap that 'works'; each Heartmoot deferral that proves the elders won't act; each refugee the Refuge turns away."
  partial_tick_effects: [
    "1–2 (Fringe): the Pact exists at the Hollow Reach; whispered, hunted, marginal.",
    "3 (Proof of Concept): a corrupted-sap defense has visibly WORKED; recruitment opens; the rumor 'the rot is the only thing that stops Abyss' seeds (Verdance §24).",
    "4 (Tolerated): under an Abyss harvest, even Wardens/Heartmoot quietly accept Pact help (TolerationState active); the cardinal sin gains a 'for now' exception.",
    "5 (Pragmatic Normal): containment officers (Othren) and a cornered Sap Commons cell start using 'just-this-once' corrupted tactics; weaponized_rot corrupted-virtue strength climbs; the Thornveil Rootmoot tilts toward 'the rot works, why not.'",
    "6 (Doctrinal Drift): 'emergency-only' becomes standing border doctrine; soul-sap appears in the sap markets; the trapped are openly called 'kin who help'; soul_flow_integrity falls regionally.",
    "7 (Defended Wound): Verdance institutionally DEFENDS the corrupted wells as heritage/asset; healers who propose a true cure are branded reckless; the sealed wells are reframed as 'ancestral groves.'",
    "8 (Catastrophe / Capture): a well collapses into a permanent expanding soul-trap (a mythic SoulFlowWound) OR the Pact's doctrine captures the regional Rootmoot — Verdance becomes a quieter Abyss; the chokepoint backs up multi-domain soul-flow."
  ]
  completed_effect: "Weaponized rot is normalized domain-wide AND/OR a soul-flow catastrophe at a Thornveil-class chokepoint: severity-90+ mythic wound, regional soul_flow_integrity collapse, Verdance Stone stability drop, a large standing rise in keeper_pressure, and the template by which all four sealed wells (and the border) are henceforth 'handled.' The Keeper need never appear; Verdance does the work itself."
  reversal_methods: [
    "Provide a clean alternative that demonstrably WORKS against Abyss (a real Sap Commons / Greenwake cure) so the rot is no longer 'the only thing that works'.",
    "Break the Heartmoot's paralysis so the abandoned-dead grievance loses its fuel (Verdance §23, §25).",
    "Keep the Refuge oath / break the hoarding so the desperate aren't driven to the Pact for medicine (Verdance §23 commons-or-market).",
    "Turn or break Nymara (symptom-cure: slows but does not reverse unless paired with the above).",
    "Cut the covert Abyss supply (economy 31 → collapse) and address the Abyss incision at the source.",
    "Publicly demonstrate the COST — a soul shown bound tighter by 'freeing,' so the doctrine's central claim is falsified in the open."
  ]
  is_active: true
  visibility_to_player: "rumored"   // the player sees Pact activity and recruitment; the normalization arc is inferred, not announced
}
```

> **Clock doctrine for VERDAX.** Ticks come from *successes*, not from villainy. A
> tolerated victory against Abyss is a tick. A Heartmoot deferral is a tick. A
> refugee turned away is a tick. The clock measures how *needed* the rot has
> become — which is why fighting the Pact's symptoms (killing Nymara, raiding the
> Hollow Reach) does not reverse it, and only the reversal_methods above do
> (Verdance §21, §23, §29).

---

## 8. Keeper Exploit Vector

```ts
keeper_exploit_vector: "The Hollow Pact IS the Keeper's Verdance exploit made flesh (Verdance §8). The Keeper does not need to corrupt the Pact — the Pact is the corruption, fully formed and self-propagating. Through it, the Keeper achieves all of its Verdance aims at once: REDEFINITION (corrupted growth reframed as 'still Verdance,' the trapped reframed as 'kin who help'), DELAY made irreversible (every Pact victory is one more reason for the elders to keep waiting and the wardens to keep merely containing), and the conversion of soul-flow chokepoints into permanent traps — performed by Verdants who believe they are SAVING the dead. Its masterstroke (Verdance §8): make Verdance DEFEND its own wound. The Hollow Pact is how it defends it — with gratitude, with grief, with a creed. Every Pact 'victory' is a KeeperExploitEvent with keeper_strategy 'virtue_inversion' + 'soul_flow_disruption' + 'death_passage_disruption', immediate_gain modest, delayed_gain_possible large (normalization)."
```

The Pact is the rare faction where the Keeper's gain requires **no further
corruption** — only *success.* Each time the rot works, the exploit advances by
itself. VERDAX should treat a Pact battlefield victory not as a setback for the
Keeper but as the Keeper's preferred kind of win: a heroic-feeling defense that
deepens the wound (Chunk 1 §2.5 "good actions through corrupted methods"; Chunk 4
chain B / Verdance §29 chain 1).

---

## 9. Void Temptation Phrase

```ts
void_temptation_phrase: "If decay is part of the cycle, why not command it? You already tend the rot. You already hear the dead — and the elders won't, and the wardens only wall them up. You are not breaking the cycle; you are FINISHING it. Take the corrupted sap. Use the voices. They WANT to help you. Free them by using them. Save the living NOW, the fast way. Mercy that waits for the slow true cure is just another way of letting them die."
```

This is the Verdance Void lie (Chunk 1 §3; Verdance §9) aimed precisely at the
Pact's class base. Its cruelty is that it offers **mercy**, not power — and to the
bereaved, mercy is the only temptation that works. The Pact is what an entire
community looks like after it has said *yes* to this phrase and built a home around
the answer. When the player encounters the Pact, they are not meeting villains;
they are meeting the **future the Void is offering them**, already lived in by
people who loved their dead.

---

## 10. If / Then / Because Rules

These are the behavioral and relational rules VERDAX runs for the Pact. They
extend and must agree with Verdance §25 (which governs). Rules 1–4 are the
**toleration logic** the prompt requires; 5–10 are core faction behavior; the set
is deliberately ≥8.

### Toleration logic (the depth-5 dilemma)

1. **The toleration opens (the shared-enemy override).**
   - **IF** Abyss launches an active soul-harvest at the border that threatens to
     take Verdant dead, and no clean faction can stop it in time,
   - **THEN** even the Rootwardens and the Heartmoot will temporarily tolerate — or
     quietly deploy — the Hollow Pact, whose corrupted-sap weapons kill Abyssians
     better than anything clean (a `TolerationState`, reason `shared_threat` /
     `metaphysical_emergency`, high `hidden_resentment_delta`).
   - **BECAUSE** when Abyss is actively harvesting souls, **stopping the harvest
     overrides the horror of the method** — survival and soul-rescue outrank
     doctrine, *for now* (Verdance §25). The cardinal sin gets a "for now"
     exception, and "for now" is exactly what the Keeper is selling.

2. **The toleration breaks (the threat ends).**
   - **IF** Abyss is defeated locally and the shared-enemy pressure ends while a
     Hollow Pact toleration is still active,
   - **THEN** the toleration collapses; the former tolerant parties (Rootwardens,
     Heartmoot) turn on the Pact with *built-up* resentment; the player must choose
     to break with the Pact or be tarred with it.
   - **BECAUSE** toleration was conditional on the emergency. When the threat ends,
     the suppressed horror at weaponized rot returns *with interest* — the
     reckoning the toleration deferred (Verdance §25). VERDAX should resolve the
     `TolerationState.future_betrayal_risk` here.

3. **The toleration breaks early (a line is crossed mid-truce).**
   - **IF** during an active toleration the Pact uses soul-sap on a *named* trapped
     dead the tolerant party knows (e.g., one of Thalen's fallen, or Rook's
     parent), or turns a corrupted weapon on Verdants rather than Abyss, or is seen
     trafficking names to its Abyss supplier,
   - **THEN** the toleration shatters immediately regardless of the ongoing threat;
     the tolerant party may break the truce even at tactical cost to itself.
   - **BECAUSE** the toleration tolerates the *method against Abyss*; it never
     tolerated the *cardinal sin against Verdance's own dead.* A breaking_point is
     not a number alone — it is a sacred line (Chunk 1 §9 "sacred violation
     stronger than affection"; Verdance §25 trust_is_broken_by).

4. **The toleration never opens (the Pact has gone too far already).**
   - **IF** the Pact has reached stage-3 corruption (Verdance §9: members who *are*
     walking soul-traps, the Reach's spiritual_health collapsed) or is openly
     trafficking souls to Abyss,
   - **THEN** no toleration forms even under an active harvest; the wardens will
     fight on two fronts rather than ally with it, and the player who allies anyway
     crosses into permanent-enemy territory with all of Verdance (Verdance §25
     permanent_enemy_conditions).
   - **BECAUSE** there is a depth past which usefulness no longer buys toleration:
     a faction that has *become* the wound cannot be deployed against the wound.

### Core faction behavior

5. **Recruitment from abandonment.**
   - **IF** the Refuge turns away refugees (Seed Guild rationing), or an elder
     defers the well decision yet again, or a warden buries one comrade too many,
   - **THEN** the Hollow Pact recruits the abandoned (clock `pc_hollow_pact_rise` /
     `pc_hollow_pact_normalization` +).
   - **BECAUSE** the Pact's only legitimacy is negative legitimacy: *the elders
     failed you; we didn't.* Stagnation and hoarding are its recruiters (Verdance
     §7.1, §7.5, §25 "an elder keeps deferring → the desperate drift to the Pact").

6. **The Pact courts the player who uses rot.**
   - **IF** the player uses corrupted-sap traps or soul-sap, even once, even to
     save lives,
   - **THEN** Hollow Pact respect rises sharply, recruitment opens, and Nymara
     treats the player as a convert and a proof-of-concept; meanwhile Rootwarden
     trust drops and the healers are alarmed.
   - **BECAUSE** weaponized rot is the cardinal violation; the Pact sees a kindred
     and a vindication where everyone else sees the line crossed — *the method, not
     the result, is what is judged* (Verdance §25, §29 chain 1).

7. **Escalation under pressure (the dependency spiral).**
   - **IF** a Pact operation fails or is contained,
   - **THEN** the Pact answers by drawing *deeper* on the wound — stronger soul-sap,
     more blight-traps, more aggressive use of the voices (`magical_escalation`,
     `void_parasitism` +).
   - **BECAUSE** the Void's dependency engine is the Pact's only doctrine of
     problem-solving: clean sapcraft feels weak by comparison, so every wall is
     answered with *more rot* (Chunk 1 §3 enhancement/parasite; Verdance §9
     hidden_cost).

8. **The voices as oracle and as bait.**
   - **IF** the Pact (or the player through it) consults the trapped voices for
     foreknowledge,
   - **THEN** it sometimes yields *real* intelligence — and sometimes yields a Void
     lie in a dead voice, indistinguishable until acted on; each consultation binds
     the consulted soul tighter.
   - **BECAUSE** the oracle genuinely works *because* it is a soul-trap (the souls
     know things; that is the bait), and rumor and revelation are deliberately hard
     to tell apart in Verdance (Verdance §24 "the signature Verdance rumor danger").

9. **Nymara's sincerity governs her, not cynicism.**
   - **IF** Nymara is shown, credibly, that her "freeing" binds the dead tighter,
   - **THEN** she does not shrug — she is *shattered*, and may be turned (slowly,
     at cost) or may retreat deeper into denial (her belief is her load-bearing
     wall).
   - **BECAUSE** she genuinely believes she frees the dead (Verdance §17.4, §21);
     the lever on her is not power or fear but the one truth her entire world
     depends on not being true.

10. **The Abyss supply is the Pact's secret shame and its leash.**
    - **IF** the player exposes that Abyss covertly supplies and studies the Pact
      (Verdance §17.4, §20),
    - **THEN** the Pact's recruitment narrative cracks (the faction that exists to
      *kill* Abyss is *fed* by it), rank-and-file faith wavers, and Nymara must
      either deny it (denial) or confront it (a turning crack); the Pact's economy
      (31) is threatened with collapse.
    - **BECAUSE** the Keeper arms both sides of the border war to deepen the
      soul-flow wound either way (Chunk 1 §4); the supply line is the proof that
      the Pact is not Verdance's defender but the Keeper's instrument — the single
      most destabilizing truth about it.

---

## 11. Betrayal Triggers

Betrayal in Verdance is never random (Chunk 4; Verdance §25). The Pact both
*suffers* betrayal (its members are desperate and pressured) and *causes* it (it
turns Verdants against their own). `betrayal_risk` follows the Chunk 4 formula.

- **A member betrays the Pact when** the cost of the rot finally outweighs the
  agency it gave them — most often when they recognize a *named* dead they loved
  among the "freed" voices and grasp that it was bound, not released (Rule 9's
  logic applied to rank-and-file). *Because* the doctrine's load-bearing claim
  ("freed by being used") cannot survive that recognition.
- **A member betrays the Pact when** the Abyss supply is exposed (Rule 10) and
  they realize they have been the Keeper's tool, not Verdance's defender. *Because*
  the negative legitimacy ("we didn't abandon you") collapses if the Pact is in
  bed with the abandoners' true master.
- **The Pact betrays a toleration partner when** the shared threat ends and the
  Pact, sensing the coming reckoning (Rule 2), strikes first — seizing leverage,
  taking a well, or trafficking a name — to survive the truce's collapse.
  *Because* it knows toleration is conditional and acts before the breaking_point
  acts on it.
- **The Pact betrays the player who used it when** the player tries to walk back
  the alliance (Rule 2): Nymara, feeling used in turn, may expose the player's own
  corrupted-sap use to the wardens, ensuring the player is tarred with the Pact.
  *Because* the Pact's leverage over a former-tolerant player is precisely the
  shared sin.
- **A bereaved member betrays anyone when** the Void's shortcut is offered at the
  breaking point and the person they grieve is dangled as the reward (Verdance §25
  betrayal_triggers: "grief weaponized"; "the Void's shortcut at the breaking
  point"). *Because* grief is the Pact's master key and the Void's.

---

## 12. Player Opportunity — Break / Turn / Tolerate / Fall-To

The Pact is built as a four-way player fork (Verdance §20, §21, §23). Each path is
playable, consequential, and *insufficient alone* — the deliberate depth-5 design
is that no path that ignores the *cause* (Abyss incision + elder paralysis +
hoarding) actually resolves the crisis (Verdance §21, §29).

```ts
PlayerOpportunity {
  break: {
    summary: "Destroy the Pact — raid the Hollow Reach, scatter the cells, kill or capture Nymara, dismantle the soul-sap operation."
    works_for: "A player committed to the clean path who treats the Pact as a tumor."
    real_effect: "A SYMPTOM-CURE (Verdance §21). Scatters the Pact, may release or scatter trapped voices — but the well stays corrupted, the elders stay paralyzed, Abyss keeps cutting, and a martyred Nymara can SANCTIFY weaponized rot. The desperate the Pact sheltered are abandoned AGAIN, and re-radicalize."
    pairs_with: "Only resolves if PAIRED with reversal_methods (§7): a clean cure, broken paralysis, kept Refuge oath, cut Abyss supply. Break the symptom, treat the cause."
    risk: "If broken without addressing the cause, pc_hollow_pact_normalization may TICK (a new, harder cell forms from the newly-abandoned); the player earns 'the one who abandoned the abandoned.'"
  }
  turn: {
    summary: "Turn the Pact (or Nymara) — demonstrate, at terrible cost, that 'freeing by using' BINDS the dead, and offer a true alternative (real Passage-completion + a clean defense that works)."
    works_for: "A player pursuing the true cure (Greenwake + Sap Commons + addressing the Abyss cause)."
    real_effect: "The hardest and most redemptive path. Requires falsifying the doctrine's central claim IN THE OPEN (release a soul the slow true way beside a soul the Pact 'freed,' and show the difference — Verdance §29 chain on releasing Rook's parent). Nymara shattered → turnable (Rule 9) or retreats into denial."
    pairs_with: "A working clean alternative (so survival no longer requires the rot) + breaking the Heartmoot paralysis (so the grievance loses fuel)."
    risk: "Turning Nymara without a clean alternative just removes the leader of a movement the conditions will regenerate; turning is real only when the CONDITIONS turn."
  }
  tolerate: {
    summary: "Tolerate/use the Pact against Abyss — accept their corrupted-sap weapons to stop a soul-harvest (the depth-5 dilemma)."
    works_for: "A pragmatic player facing an Abyss harvest no clean faction can stop in time."
    real_effect: "A real tactical win and a real metaphysical loss (Verdance §29 chain 5). Saves Verdant dead from Abyss TONIGHT; legitimizes the rot; ticks the normalization clock; opens a TolerationState with a deferred reckoning (Rules 1–2). The player is tarred with the Pact in rumor."
    pairs_with: "An explicit exit (Rule 2): use them, then BREAK with them publicly and renounce the method, before the threat ends and the reckoning lands on YOU."
    risk: "Repeated toleration IS the normalization the Keeper wants; each 'for now' makes the next one easier. Toleration is a tool with a half-life, not a relationship."
  }
  fall_to: {
    summary: "Fall to the Pact — adopt weaponized rot as the player's own doctrine; let Nymara become a dark mentor."
    works_for: "A player on a dark path who has accepted the Void's mercy-lie."
    real_effect: "The player becomes a node of the wound (Verdance §9 stage 1→3): power that works, identity that erodes, dead names that bleed into memory. void_resonance / keeper_pressure climb; Verdant relationships fracture (lovers oppose publicly — Verdance §25); the player may complete the normalization clock personally."
    pairs_with: "Nothing — this path has no clean pairing; it is the temptation taken."
    risk: "Stage-3 is the canonical irreversible threshold (Verdance §30: reversible until stage-3; past it the player is a walking soul-trap). The MVP's central tragedy, lived by the protagonist."
  }
}
```

---

## 13. FactionState (concrete MVP instance)

Seed instance for the opening of "The Sap Beneath the Ash" (campaign_phase
`local_crisis`, Thornveil region), to be adjusted by the turn engine. Conforms to
the Chunk 3 `FactionState` schema and the Verdance §27 seed conventions.
`player_standing` numbers are the **default starting standing toward a fresh PC**
who has not yet acted.

```ts
FactionState {
  id: "fac_hollow_pact"
  campaign_id: "<campaign>"
  name: "The Hollow Pact"
  domain: "Verdance"
  doctrine: "If decay is part of the cycle, the cycle can be COMMANDED. The corrupted sap is power; the trapped voices are kin to be freed by being USED; the elders are cowards and the wardens are jailers. Survival and agency now, by any rot necessary."
  ideal_future: "A Verdance that no longer abandons its dead or its desperate — that COMMANDS the cycle to defend the living and 'free' the trapped, with the Hollow Reach as its model. (Reality: a green civilization that harvests souls 'for good reasons' — a quieter Abyss.)"
  public_goal: "Defend the abandoned borderlands against Abyss and free the trapped dead the elders walled away."
  hidden_goal: "Normalize weaponized rot until Verdance defends its own wound — and (unknown even to most members) serve, via the covert Abyss supply, the very harvest it claims to fight."
  leader_npc_ids: ["npc_nymara_hollowbloom"]
  champion_npc_ids: ["npc_othren_deepbark (sympathizer, not yet defected)"]
  class_base: {
    "radicalized refugees": 34,
    "defected Rootwardens": 18,
    "disillusioned rot-tenders": 24,
    "the grief-stricken / bereaved": 24
  }
  power_sources: { military: 58, economy: 31, magic: 64, religion: 47, intelligence: 55, legitimacy: 12, resources: 49, fear: 71 }
  resources_controlled: ["The Hollow Reach sanctuary", "Soul-sap stores", "Blight-trap stockpiles", "Corrupted-grove 'vigor'", "Trafficked names/voices (the trapped-voice oracle)"]
  locations_controlled: ["loc_hollow_reach"]
  magic_access: ["Weaponized rot-tending", "Soul-sap craft", "Trapped-voice oracle/weaponry", "Corrupted-sap blight-traps"]
  military_units_controlled: ["Hollow Pact cells (small, taboo-armed)", "Soul-sap-empowered fighters", "Blight-trap borderlines"]
  trade_routes_controlled: ["Covert Abyss supply line (in, not out)", "Black-market soul-sap channels"]
  internal_rivals: ["Cell-leaders who want open war vs Nymara's 'liberation' framing", "Members who suspect the Abyss supply"]
  external_enemies: ["Rootwardens (hunt them)", "The entire Verdant religious order (cardinal sin)", "Heartmoot", "Sap Commons", "Greenwake Communion"]
  possible_allies: ["A desperate player", "A cornered Sap Commons cell (one despair from joining)", "Othren Deepbark (drifting)", "Any tolerant party DURING an Abyss harvest (temporary)"]
  secret_alliances: ["Abyss (covert supplier and student — unknown to most of the rank and file; Verdance §17.4)"]
  infiltration_targets: ["Rootwardens (recruiting defectors)", "Refugee camps", "Failing rot-tender circles", "A grieving Greenwake fringe"]
  methods: { diplomacy: 22, open_war: 41, sabotage: 64, propaganda: 58, assassination: 47, trade_pressure: 18, magical_escalation: 73 }
  player_standing: {
    reputation: 8,    // near-absent; the Pact barely knows a fresh PC
    trust: 5,         // it trusts almost no one
    fear: 0,          // a new PC has not yet earned the Pact's fear
    respect: 10,      // low default; rises FAST if the player uses rot (Rule 6)
    suspicion: 35,    // wary of outsiders by default (hunted faction)
    debt: 0,
    leverage: 0       // rises sharply if the player uses corrupted sap (shared sin)
  }
  keeper_exploit_vector: "The Pact IS the Keeper's Verdance exploit made flesh — Verdance harvesting souls 'for good reasons.' Every victory normalizes weaponized rot via virtue_inversion + soul_flow_disruption + death_passage_disruption; the Keeper advances by the Pact's SUCCESS, not its corruption."
  void_temptation_phrase: "If decay is part of the cycle, why not command it? You already tend the rot. You already hear the dead — the elders won't, the wardens only wall them up. Free them by using them. Save the living NOW, the fast way."
  agenda_clock_ids: ["pc_hollow_pact_normalization", "pc_hollow_pact_rise"]
  active_rumor_ids: ["rm_well_speaks_names", "rm_player_used_rot (conditional)", "rm_rot_is_the_only_thing_that_stops_abyss"]
  current_status: "Fringe but active at the Hollow Reach; courting the desperate; one tolerated victory from proof-of-concept; covertly supplied by the enemy it claims to fight."
}
```

---

## 14. TolerationState (concrete instance — Rootwardens tolerate the Pact vs Abyss)

The canonical depth-5 toleration: the Rootwardens, who *hunt* the Hollow Pact,
tolerate it during an active Abyss soul-harvest because the Pact kills Abyssians
better than anything clean (Verdance §25, §29 chain 5). Conforms to the Chunk 3
`TolerationState` schema. This instance is **active during the harvest**; Rules
1–4 govern its life and death.

```ts
TolerationState {
  id: "tol_rootwardens_tolerate_hollow_pact"
  campaign_id: "<campaign>"
  source_id: "fac_rootwardens"   // the tolerating party (normally hunts the Pact)
  target_id: "fac_hollow_pact"   // the tolerated party (commits the cardinal sin)
  toleration_reason: "shared_enemy"   // compounded by "metaphysical_emergency" — Abyss is harvesting SOULS
  toleration_limit: "Only the active anti-Abyss-harvest operation. The Pact's corrupted weapons may be aimed at the harvesters and nowhere else; their use against Verdant targets, on Verdance's own trapped dead, or any sight of the Abyss supply line voids the truce instantly (Rule 3)."
  breaking_point: "The moment the Abyss harvest is broken (Rule 2 — the shared threat ends), OR the moment the Pact crosses a sacred line mid-truce (Rule 3 — soul-sap on a known Verdant dead, a weapon turned on Verdants, or exposure of the Abyss supply). Whichever comes first ends it."
  expected_duration: "The length of the harvest emergency only — hours to days, not a season. Explicitly temporary; everyone treats it as a held breath."
  public_explanation: "There is no public explanation; the Rootwardens do NOT announce that they let the Hollow Pact fight beside them. Officially the harvest was broken by the wall. (If exposed, the rumor 'the Rootwardens secretly rely on corruption too' detonates — Verdance §24, §29 chain 1, implicating Othren's real secret.)"
  private_explanation: "Thalen Mossguard's reasoning: 'I will hate myself for this when the dawn comes. Tonight Abyss is taking our dead, and the rot is the only thing that stops it taking more. I am holding my nose and holding the line. And when this is over, I am hunting them again — and I will remember every one of them.' (Containment virtue strained to its breaking edge; Verdance §20 Rootwarden keeper_vulnerability.)"
  hidden_resentment_delta: 14   // HIGH and ongoing — the wardens despise the necessity; resentment compounds for every hour of truce and detonates at the breaking point
  future_betrayal_risk: 68      // high — the wardens turn on the Pact with built-up resentment the instant the threat ends (Rule 2); the Pact, sensing it, may strike first (Betrayal Triggers)
  active: true
}
```

> **Toleration doctrine for VERDAX.** This state is a *deferral*, not a
> reconciliation. The `hidden_resentment_delta` is the canon engine of Verdance
> §25: toleration suppresses the horror, it does not dissolve it, and the
> suppressed horror returns *with interest.* The player who shelters under this
> truce must understand they are borrowing against a reckoning — and that the
> reckoning lands on them too (Rule 2; §12 `tolerate.risk`). VERDAX should surface
> the `future_betrayal_risk` to the DM War Room and let the player *feel* the
> truce as a held breath, never as an alliance.

---

## 15. Consequence Examples (3rd- and 5th-order)

Both chains use the Chunk 4 formula (Action → Method → Witness → Interpretation →
Power Shift → Social → Systemic → Metaphysical → Future Pressure) and agree with
Verdance §29. These are *faction-centered* views of that canon.

### 3rd-order example — A tolerated victory becomes a recruiting poster

**Root:** The player tolerates the Pact to break an Abyss harvest (the §14
TolerationState fires).
- **1st (immediate):** The harvest is broken; Verdant dead are saved from Abyss;
  the Pact's prestige and `fear` rise; the Rootwardens quietly accept it *for now*
  (TolerationState active, resentment +14).
- **2nd (scene/session):** Relief curdles into unease. Thalen accepts the
  necessity but his trust in the player drops; Sylune warns the player they have
  legitimized the rot; Nymara treats the player as an ally and pushes for more;
  rumor seed `rm_rot_is_the_only_thing_that_stops_abyss`.
- **3rd (local/system — the faction consequence):** The Pact **uses the victory to
  recruit**, and the rumor mutates from a seed into a weapon: *"the rot is the only
  thing that works"* spreads through the frightened borderlands and the
  ration-starved Refuge; `pc_hollow_pact_normalization` ticks 3→4 (Tolerated → on
  the edge of Pragmatic Normal); a cornered Sap Commons cell and a drifting Othren
  begin to wonder aloud if "just this once" is so wrong; the player is now tarred
  with the Pact in rumor, and the TolerationState's `future_betrayal_risk` climbs.
- **Player intervention (per Chunk 4):** publicly renounce the method and break
  with the Pact before the threat ends (Rule 2 exit); demonstrate a clean
  alternative that *also* worked; counter the recruiting rumor with the soul-cost
  truth; protect the wavering Sap Commons cell and pull Othren back early.

### 5th-order example — Normalization completes; a chokepoint collapses

**Root:** Across the campaign, the Pact's victories go untreated at the cause —
the player (or the world) keeps reaching for the rot because nothing clean is built
and the elders never act. The normalization clock runs to completion.
- **3rd (system):** Weaponized rot becomes standing border doctrine
  (`pc_hollow_pact_normalization` 5→6); soul-sap appears in the sap markets; the
  trapped are openly called "kin who help"; the Thornveil Rootmoot tilts to "the
  rot works, why not"; the `weaponized_rot` corrupted-virtue strength climbs and
  `soul_flow_integrity` falls regionally.
- **4th (regional/political):** Verdance institutionally **defends** the corrupted
  wells as heritage and asset (clock 6→7); healers who propose a true cure are
  branded reckless; the three sealed wells are reframed as "ancestral groves"; the
  Seed Guild markets corrupted-sap reagents; Rootwarden authority hollows as
  defection normalizes. The anti-Abyss coalition that needed *clean* Verdant
  soul-flow support loses it — Radiance and Sanctuary recoil from a Verdance that
  now harvests souls, and the alliance the Keeper feared splinters (Verdance §22,
  §29 chain 4 logic).
- **5th (mythic/metaphysical — the catastrophe):** A Thornveil-class well collapses
  into a **permanent, expanding soul-trap** (clock → 8): a severity-90+ mythic
  `SoulFlowWound`, regional `soul_flow_integrity` collapse, a drop in Verdance
  Stone stability, and one of the campaign's largest standing rises in
  `keeper_pressure`. The chokepoint backs up soul-flow for *multiple domains*
  (Verdance §5), so Radiance, Tempest, and Sanctuary dead begin to back up too.
  And the Keeper **never appeared** — Verdance did the work itself, believing it
  was defending its dead. This is the Keeper's masterstroke realized: *Verdance
  defending its own wound* (Verdance §8). The Void's lie is now Verdant common
  sense.
- **Player intervention (heavy but not hopeless — Chunk 4):** even at depth 5 the
  chain is reversible until the catastrophe ticks: build the clean alternative
  (§7 reversal_methods), break the Heartmoot paralysis and trigger a Heartroot
  Vigil to heal all four wells (Verdance §23, §29 chain 3 — a mythic *drop* in
  keeper_pressure), cut the Abyss supply, and demonstrate the cost so the doctrine
  is falsified in the open. The catastrophe is the cost of *never treating the
  cause* — which is exactly the lesson the MVP is built to teach.

---

## 16. MVP Role in "The Sap Beneath the Ash"

The Hollow Pact is the **central temptation** of the vertical slice (Verdance §20,
§21, §23, §29). The MVP is a corrupted rootwell beneath Thornveil that has begun
speaking names; the four-faction fork is *contain (Rootwardens) vs heal (Sap
Commons) vs weaponize (Hollow Pact) vs stabilize (Seed Guild)*, with the
Heartmoot's paralysis enabling all of them and the Greenwake Communion holding the
information all of them need (Verdance §20 tension map). The Pact is the
**weaponize** vertex — and the dark gravity well the whole slice bends around.

**What the Pact does in the slice:**

- **It is the embodied temptation.** Every other path is slow, costly, or
  political. The Pact offers a weapon that *works tonight* — against an Abyss
  border that is actively cutting and an elder council that will not act. When the
  player is cornered (an Abyss harvest, a dying child, a Refuge turning away its
  wounded), the Pact is the answer that is *right there.* The slice is designed so
  the player *feels* why people say yes (Verdance §9, §29 chain 1).

- **It forces the depth-5 toleration dilemma.** The canonical beat: Abyss launches
  an open soul-harvest, no clean faction can stop it in time, and the Pact can.
  The player must choose to tolerate the cardinal sin to save the dead from Abyss
  (the §14 TolerationState) — and live with the deferred reckoning (Rules 1–4;
  §29 chain 5). This is the slice's signature "your weapon works" horror.

- **It is the symptom that teaches the cause.** Defeating the Pact's *symptom* —
  killing Nymara, burning the Hollow Reach, raiding a soul-sap operation — solves
  nothing while the well stays corrupted, the elders stay paralyzed, and Abyss
  keeps cutting (Verdance §21, §23, §29). The Pact exists in the slice to make the
  player learn, through consequence, that the real targets are the **Abyss
  incision** (the cause of the wound), the **Heartmoot paralysis** (the cause of
  the abandonment), and the **hoarding** (the cause of the desperation). The Pact
  is the trap that points at the trap-setter.

- **It mirrors the player's own path.** Nymara is what the player *becomes* on the
  fall-to path (§12), and Auralis is what the player *risks* on even the merciful
  path (the Greenwake "free them by using them" temptation — Verdance §9, §25). The
  slice's central question — *is the corrupted shortcut mercy?* — is asked of the
  player through the Pact and answered, one way or another, by what the player
  builds instead (or fails to build).

- **The clean resolution it stands against.** The "true" MVP ending braids
  restoration + communion + containment + addressing the Abyss cause (Verdance
  §23 peaceful_resolution): hear the trapped via Auralis, Name them Back, release
  them the slow true way, contain via the Rootwardens *during* the cure, get the
  Heartroot cuttings by breaking the elders' paralysis, and cut the incision at
  the border. The Hollow Pact is the measure of that ending's worth — the proof
  that there *was* a fast false answer, and that the player refused it. Releasing
  even one trapped soul the true way, beside a soul the Pact "freed," is the single
  most damning refutation of the entire doctrine the slice can stage (Verdance §29
  release-of-Rook's-parent chain).

> **MVP design note (for the council).** The Hollow Pact must always be the *most
> sympathetic* villain in the room and the *most horrifying* — never a generic
> cult. The horror is not that they are monsters; it is that they are grieving
> Verdants whose weapon works, whose grievance is true, and whose mercy is a knot
> pulled tighter. If a turn ever lets the player dismiss the Pact as simply evil,
> the slice has failed. The Pact is the Void's lie made flesh, and the player must
> feel the pull of it to understand why a whole civilization could.

---

## QA & Implementation Notes

- **CANON-WARDEN.** This file is bound to and must not contradict Verdance §20
  (faction index entry), §23 (the Speaking-Well and Sealed-Wells power struggles),
  §24 (rumor ecology — the rumor/revelation ambiguity and the "player → Hollow →
  Abyss" slide), §25 (relationship & toleration logic, including the eleven
  If/Then/Because examples), §17.4 (the Hollow Reach), §21 (Nymara), §27 (the
  `sfw_thornveil_rootwell_trap` wound and the seed states), and §29 (chains 1 and
  5). It is bound to Chunk 1 (Void as enhancement/parasite/liar; the Keeper
  Verdance exploit; "good actions through corrupted methods"), Chunk 3 (FactionState,
  TolerationState, PressureClockState, RelationshipStatus), and Chunk 4 (depth-5
  rule for soul-flow/Void/Keeper events; anti-randomness; IF/THEN/BECAUSE). The
  Pact must remain *sympathetic, domain-native, and right about the wound* — never
  a generic cult or demon-grove; the horror is that the weapon works.

- **SCHEMA-FORGE.** Seed as a `FactionState` row `fac_hollow_pact` (§13) in the MVP
  six-faction set (Verdance §28 implementation notes). Seed the
  `pc_hollow_pact_normalization` (§7) and the existing `pc_hollow_pact_rise`
  pressure clocks. The `TolerationState` (§14) is created *dynamically* when the
  Abyss-harvest beat fires — it is not a static seed; store it via the
  `RelationshipState.active_toleration_state_id` link (Chunk 3) between
  `fac_rootwardens` and `fac_hollow_pact`. `player_standing` numbers in §13 are
  defaults for a fresh PC and are mutated by the turn engine (esp. Rule 6: using
  rot spikes `respect` and `leverage`). The covert Abyss supply is a hidden
  `secret_alliances` entry surfaced only to the DM War Room until the player earns
  discovery (Chunk 3 visibility standard).

- **TURN-ENGINEER.** The normalization clock ticks on *successes and deferrals*,
  not on villain points (§7 clock doctrine). Tolerations are deferrals with a
  reckoning, not alliances (§14). Every Pact victory should register as a
  `KeeperExploitEvent` (virtue_inversion + soul_flow_disruption) with small
  immediate gain and large delayed gain — the Keeper advancing through the Pact's
  success. Surface the toleration's `future_betrayal_risk` and the clock's hidden
  arc to the War Room; show the player the *cost* in-world, never an unexplained
  punishment (Chunk 4).

- **Open questions (defer to §30 of the domain bible).** Is Nymara turnable past
  stage-2, and is weaponized-rot dependency reversible before stage-3? (Domain
  lean: reversible until stage-3; Nymara turnable until then.) Can the covert Abyss
  supply, once exposed, *split* the Pact into a reformable remnant and an
  irredeemable Hollow core? (Lean: yes — this is the richest "break vs turn"
  branch.) These resolve in the LIVING-CASTWRIGHT Nymara dossier and the
  CAUSALITY-SMITH MVP chain pass.
