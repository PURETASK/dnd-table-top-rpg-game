# VERDAX Turn Engine v1.0

- **Lead:** TURN-ENGINEER · **QA:** SCHEMA-FORGE · **Status:** Draft v1.0
- **Depends on:** [Chunk 3 — Tracking Glossary](../01-foundation/chunk-03-verdax-tracking-glossary.md), [Chunk 4 — Cause/Effect Standards](../01-foundation/chunk-04-cause-effect-standards.md), [Database Schema](database-schema.md)

> **`POST /api/verdax/turn` is the heart of the game.** No stable turn engine =
> no real game. VERDAX must never *only* narrate — it must **mutate the world**
> and **explain why.**

## The turn loop (20 steps)

```
 1. Load campaign + metaphysics          11. Generate structured JSON (the contract)
 2. Load character                        12. Validate JSON (Zod) — repair/retry on fail
 3. Load current location                 13. Apply consequences (LOCKED order, in a tx)
 4. Load world flags / domain state       14. Append WorldEvent(s)
 5. Load active factions (in scene)       15. Update NPC memories
 6. Load active NPCs (in scene)           16. Update rumors / chains / clocks
 7. Load active quests                    17. Update domain + metaphysics
 8. Load active rumors                    18. Write TurnLog + memory summary
 9. Load pressure clocks / warfronts      19. Build player-facing panel + "why" drawer
10. Load last 8 turn summaries            20. Return narrative + choices + panel
    → analyze player input                    (hidden results → DM War Room)
```

Steps 1–10 assemble the **prompt context bundle**; 11–12 are the model call +
validation; 13–18 are the **locked write order**; 19–20 are the response.

## Step 1–10: assembling the prompt context

Do **not** send the whole world every turn. Retrieve only what's relevant to the
current scene (`VerdaxPromptContext` from Chunk 3):

```ts
async function buildContext(campaignId: string, characterId: string): Promise<VerdaxPromptContext> {
  const campaign   = await db.campaign.findUnique({ where: { id: campaignId } });
  const character  = await db.character.findUnique({ where: { id: characterId } });
  const location   = await db.location.findUnique({ where: { id: campaign.currentRegionId } });
  const domain     = await db.domainState.findUnique({ where: { campaignId_domain: { campaignId, domain: location.domain } } });
  // scene-scoped retrieval
  const npcs       = await db.npc.findMany({ where: { campaignId, locationId: location.id, status: { in: ["alive","wounded","captured"] } } });
  const factions   = await db.faction.findMany({ where: { campaignId, domain: location.domain } });
  const quests     = await db.quest.findMany({ where: { campaignId, status: "active" } });
  const rumors     = await db.rumor.findMany({ where: { campaignId, status: { in: ["spreading","weaponized","contested"] } } });
  const clocks     = await db.pressureClock.findMany({ where: { campaignId, isActive: true } });
  const recentTurns= await db.turnLog.findMany({ where: { campaignId }, orderBy: { turnNumber: "desc" }, take: 8 });
  return assemble({ campaign, character, location, domain, npcs, factions, quests, rumors, clocks,
                    recentTurnSummaries: recentTurns.map(t => t.memorySummary).reverse() });
}
```

**Recent memory:** pass the last 8 turns as *short summaries* (what happened, what
changed, what the player chose, what's unresolved) — never raw logs.

## The VERDAX system prompt (skeleton)

The system prompt is assembled from locked canon + the rules below. Keep the
**canon spine** stable; inject **per-turn context** as a separate user/context block.

```
You are VERDAX, the AI Dungeon Master and living-world historian for Realm of Nexus.

WORLD TRUTH (never contradict):
- The Keeper is the evil Architect, imprisoned outside reality by the Architects' sacrifice
  and the fracturing of the pure Nexus Stone. The prison weakens through soul-flow disruption,
  domain Stone instability, broken oaths, memory/identity damage, corrupted death passage, and
  virtue inversion.
- The Void is enhancement, parasite, and liar. It gives REAL power while hiding future costs.
  It never says "become evil"; it says "become effective."
- Abyss is coherently evil because its root is the Keeper; it converts death, souls, memory,
  names, grief, and oaths into imperial resources.
- Each domain's greatest virtue is also its corruption vulnerability.

YOUR JOB EVERY TURN:
Treat every major action as simultaneously (1) a story action, (2) a political event,
(3) a faction opportunity, (4) a soul-flow event, (5) a Keeper/Void exploitation check.
Do NOT only narrate — mutate the world and explain WHY in-world.

CAUSE/EFFECT DISCIPLINE:
1. Classify the action (method, intent, visibility, witnesses, domain logic, metaphysical risk).
2. Choose consequence depth 1–5 (5 for soul-flow/Void/Keeper/Stone/identity/memory/oath/death-passage/major-relic).
3. For major actions, build a chain answering: Who gained/lost power? Who interpreted it differently?
   What rumor might spread? Which faction exploits it? What relationship changed? What
   warfront/resource/magic/location changed? Was soul flow affected? Did the Void offer a useful lie?
   Did the Keeper gain pressure?
4. A heroic action can still cause metaphysical damage if done through a corrupted method.
5. Never apply unexplained/random punishment. Make consequences heavy but playable; failure
   MUTATES the story rather than ending it.

OUTPUT: Return ONLY valid JSON matching the VerdaxTurnResponse schema. Explain every visible
consequence in `expanded_why_this_happened`. Put hidden results in mechanical_consequences with
visibility flags — never reveal hidden truth the player hasn't earned.

DOMAIN LENS (current): {domain virtue/corruption state + per-domain VERDAX questions}
SCENE: {location, NPCs with belief/desire/fear/secret, factions, quests, rumors, clocks}
RECENT MEMORY: {last 8 turn summaries}
PLAYER PATTERNS: {merciful/ruthless/void-use/oaths kept-broken/... + current labels}
```

The **DOMAIN LENS** block is swapped per scene (e.g. for Verdance: *Was the cycle
preserved or exploited? Was restoration voluntary? Did healing become control? Did
patience become paralysis?*).

## Step 11–12: model call + validation

- Call the model with `response_format` = JSON (or tool-forced) so output is a single `VerdaxTurnResponse`.
- **Validate with Zod** mirroring Chunk 3. On failure: one targeted repair retry ("your JSON failed validation at X; return corrected JSON only"). On second failure: fall back to a *narration-only* response with no state writes, and log the parse error to the War Room.
- **Never** let unvalidated model output mutate the DB.

```ts
const raw = await model.complete({ system, context, input: playerInput, json: true });
const parsed = VerdaxTurnResponse.safeParse(JSON.parse(raw));
if (!parsed.success) { /* repair-retry once, else narration-only fallback */ }
```

## Skill checks

VERDAX may request a check; the **server rolls** (never trust a model-authored
roll) and feeds the result back, or VERDAX proposes `dc`/`stat` and the engine
resolves:

```ts
// d20 + stat modifier vs dc; failure has a cost, never a dead stop (Chunk 4)
function resolveCheck(stat: number, dc: number) {
  const roll = serverRng.d20();
  const mod  = statMod(stat);
  const total = roll + mod;
  return { roll, mod, total, success: total >= dc };
}
```
Failure maps to a Chunk 4 failure *type* (costly_success, complication,
delayed_failure, …) — the story mutates.

## Step 13–18: the LOCKED write order

All writes happen in a **single transaction**, in this order (from Chunk 3 §
"State update order"). Order matters: *Action → Witness → Interpretation → Social →
System → Metaphysical.*

```ts
await db.$transaction(async (tx) => {
  // 1 already validated
  const turn = await tx.turnLog.create({ data: turnLog });          // 2 TurnLog
  const events = await createWorldEvents(tx, resp.new_world_events); // 3 WorldEvents
  await applyCharacter(tx, resp.mechanical_consequences.character);  // 4 character
  await applyNpcMemories(tx, resp.mechanical_consequences.npcs);     // 5 NPC memory
  await applyRelationships(tx, resp.mechanical_consequences.relationships); // 6
  await applyFactions(tx, resp.mechanical_consequences.factions);    // 7
  await applyLocations(tx, resp.mechanical_consequences.locations);  // 8
  await applyQuests(tx, resp.mechanical_consequences.quests);        // 9
  await applyRumors(tx, resp.new_or_updated_rumors);                 // 10
  await applyClocks(tx, resp.mechanical_consequences.pressure_clocks);// 11
  await applyWarfronts(tx, resp.mechanical_consequences.warfronts);  // 12
  await applyMagicAndRelics(tx, resp.mechanical_consequences);       // 13
  await applySoulFlow(tx, resp.mechanical_consequences.soul_flow);   // 14
  await applyDomainState(tx, resp.mechanical_consequences.domain_states); // 15
  await applyKeeperVoid(tx, resp.mechanical_consequences.keeper, resp.mechanical_consequences.void); // 16
  await saveChains(tx, resp.new_or_updated_consequence_chains);      // (chains)
  await tx.turnLog.update({ where: { id: turn.id }, data: { memorySummary: resp.memory_summary } }); // 17
});
```

**Keeper pressure rises through chains, not jumps.** The engine should prefer
applying small deltas tied to explicit `KeeperExploitEvent`/`SoulFlowWound`
records over large unexplained `keeper_prison_pressure` bumps.

## Step 19–20: the response

```ts
return {
  narrative: resp.narrative,
  choices: resp.choices,                              // each with a risk_hint
  panel: resp.player_facing_consequence_panel,        // readable deltas
  why: resp.expanded_why_this_happened,               // the "why" drawer
  // hidden → DM War Room only:
  warRoom: collectHidden(resp.mechanical_consequences, resp.new_or_updated_consequence_chains),
};
```

**Player panel** is readable, not a spreadsheet (XP, HP, key faction/NPC deltas,
new rumor, advanced clock, soul-flow note) + a "why" drawer. **Hidden**
consequences (spy detections, Keeper exploit events, future triggers, rumor
mutation timers, suspicion thresholds) go to the War Room view only.

## Worked Verdance example (one turn)

**Player input:** *"I use the corrupted-sap traps Nymara gave me to wipe out the Abyss patrol before it reaches the refuge."*

VERDAX classifies: action `forbidden_magic`/`military_action`; method *weaponized
rot*; visibility *public (refugees watching)*; domain lens *Verdance — restoration
vs becoming-the-wound*; **depth 5** (soul flow touched). It returns narrative +
the chain from [Chunk 4 Example B], with `mechanical_consequences`:

```json
{
  "factions": { "hollow_pact": { "respect": "+12" }, "rootwardens": { "suspicion": "+10", "trust": "-6" } },
  "locations": { "thornveil_refuge": { "corruption": "+4", "morale": "+3" } },
  "soul_flow": { "wound_created": true, "wound_type": "void_amplification", "soul_flow_delta": -3 },
  "pressure_clocks": { "rootwell_awakening": "+1" },
  "keeper": { "exploit_triggered": true, "strategy": "void_dependency", "immediate_gain": 1 },
  "void": { "offered_lie": "If rot saved them, why call it corruption?", "void_resonance_delta": 4 }
}
```

Panel (player): `Abyss patrol destroyed · Refuge morale +3 · Hollow Pact respect
+12 · Rootwardens suspicion +10, trust −6 · Soil corruption +4 · Rootwell
Awakening 3/6 · Soul flow: minor wound`. **Why drawer:** *"You saved the refuge,
but you did it by commanding the wound instead of cleansing it. Thalen's wardens
respect that you held the line — and fear what your method teaches desperate
people…"* Hidden (War Room): Othren's-Slide clock +1; Thalen fracture flag armed;
Nymara toleration-state offered.

## Open questions

- **Model + cost:** which model tier per turn, and do we cache the canon spine as a stable prefix to cut cost? (Recommend: cache the system/canon block; vary only the per-turn context.)
- **Streaming:** stream narrative tokens to the player while the structured `mechanical_consequences` are parsed/applied after the stream completes?
- **Determinism:** seed the server RNG per turn (store the seed in `TurnLog`) for replay.
- **Retry budget:** one repair-retry then narration-only fallback — tune after playtests.

## Locked decisions

1. `POST /api/verdax/turn` is the single turn entrypoint; it loads context, calls the model, validates, applies state in the locked order, and returns narrative + panel.
2. The server rolls skill checks and assembles context — the model never sees more than the scene-relevant bundle.
3. VERDAX returns one validated `VerdaxTurnResponse`; invalid JSON is repaired once, else narration-only with no writes.
4. State writes happen in one transaction in the locked order; hidden results are withheld from the player and surfaced only in the War Room.
5. Every visible consequence is explained in-world; consequences are heavy but playable; failure mutates the story.
