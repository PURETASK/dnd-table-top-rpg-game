# MVP Database Schema v1.0

- **Lead:** SCHEMA-FORGE · **QA:** TURN-ENGINEER · **Status:** Draft v1.0
- **Scope:** the *minimum tracking set* from [Chunk 3](../01-foundation/chunk-03-verdax-tracking-glossary.md) needed to run the **Verdance MVP** (*The Sap Beneath the Ash*), plus the secondary metaphysical systems stored as JSON until they earn their own tables.

## Design principles

1. **Static lore ≠ mutable state.** Domain bibles, faction bibles, and NPC dossiers are *seed data*; every row below is *campaign-scoped mutable state* keyed by `campaignId`.
2. **Hybrid storage.** Full tables for high-activity objects; `Json` columns for flexible/nested state (virtue maps, content layers, consequence nodes, power sources). Promote a `Json` field to its own table only once it's queried often.
3. **Event-sourced memory.** `WorldEvent` + `TurnLog` are the append-only backbone of campaign memory; derived state tables are projections that VERDAX mutates each turn.
4. **Validate before mutate.** Every VERDAX response is schema-validated (Zod) before any write. The write order is locked (see the turn engine doc).
5. **0–100 scale** for all standard metrics unless noted; deltas are small (±1–10) except mythic events.

## Target stack

- **Postgres** via **Prisma** (`Json`/`Jsonb` for flexible state).
- App layer: Next.js route handlers (`POST /api/verdax/turn` is the heart — see [`verdax-turn-engine.md`](verdax-turn-engine.md)).
- Validation: **Zod** schemas mirroring the Chunk 3 glossary, shared between the API and the VERDAX response parser.

## Prisma schema (MVP)

```prisma
// schema.prisma — Realm of Nexus / VERDAX (MVP: minimum tracking set)
generator client { provider = "prisma-client-js" }
datasource db { provider = "postgresql"; url = env("DATABASE_URL") }

// ─────────────────────────────────────────────────────────────
// Enums
// ─────────────────────────────────────────────────────────────
enum CampaignMode      { solo_ai dm_guided admin_war_room hybrid }
enum CampaignPhase     { origin local_crisis regional_pressure domain_war cross_domain_escalation keeper_revelation final_convergence }
enum Difficulty        { story balanced harsh mythic }
enum Visibility        { hidden hinted rumored partial confirmed mythic_truth }
enum Domain            { Radiance Verdance Tempest Sanctuary Abyss }
enum NpcStatus         { alive wounded missing captured dead undead transformed }
enum RelationshipStatus {
  devoted_ally trusted_ally conditional_ally uneasy_partner tolerable_rival
  neutral suspicious_contact active_rival declared_enemy blood_enemy existential_enemy
}
enum QuestStatus       { unknown available active completed failed mutated locked abandoned }
enum RumorStatus       { emerging spreading weaponized contested suppressed proven mutated dead }
enum ClockType         { threat opportunity corruption war_escalation rumor_spread npc_agenda faction_agenda keeper_pressure void_parasitism resource_shortage }
enum ChainStatus       { active resolved mutated dormant failed }
enum Permanence        { minor moderate major mythic }

// ─────────────────────────────────────────────────────────────
// Core container
// ─────────────────────────────────────────────────────────────
model Campaign {
  id                String          @id @default(cuid())
  title             String
  mode              CampaignMode    @default(solo_ai)
  startingDomain    Domain
  currentRegionId   String?
  phase             CampaignPhase   @default(origin)
  difficulty        Difficulty      @default(balanced)
  toneTags          String[]
  activeDomainFocus String[]
  currentMainArc    String?
  // metaphysics kept inline for the MVP (promote to its own table later)
  metaphysics       Json            // CampaignMetaphysics: keeper_prison_pressure, global_soul_flow_integrity, ...
  worldFlags        Json            @default("{}")
  createdAt         DateTime        @default(now())
  updatedAt         DateTime        @updatedAt

  characters        Character[]
  domains           DomainState[]
  factions          Faction[]
  npcs              Npc[]
  locations         Location[]
  quests            Quest[]
  rumors            Rumor[]
  relationships     Relationship[]
  clocks            PressureClock[]
  chains            ConsequenceChain[]
  events            WorldEvent[]
  turns             TurnLog[]

  @@index([phase])
}

// ─────────────────────────────────────────────────────────────
// Player character
// ─────────────────────────────────────────────────────────────
model Character {
  id              String   @id @default(cuid())
  campaignId      String
  campaign        Campaign @relation(fields: [campaignId], references: [id], onDelete: Cascade)
  name            String
  ancestry        String
  className       String
  originDomain    Domain
  background      String?
  level           Int      @default(1)
  xp              Int      @default(0)
  hp              Int
  maxHp           Int
  mana            Int
  maxMana         Int
  stamina         Int
  maxStamina      Int
  gold            Int      @default(0)
  stats           Json     // {strength, dexterity, constitution, intelligence, wisdom, charisma}
  conditions      String[]
  wounds          String[]
  inventory       Json     @default("[]")
  domainResonance Json     // Record<Domain, number>
  // metaphysical condition
  corruption        Int    @default(0)
  voidResonance     Int    @default(0)
  soulIntegrity     Int    @default(100)
  identityIntegrity Int    @default(100)
  oathBurden        Int    @default(0)
  memoryStability   Int    @default(100)
  playerPatterns    Json   @default("{}") // PlayerPatternState (counters + labels)
  publicReputation  String?
  hiddenReputation  String?
  createdAt       DateTime @default(now())
  updatedAt       DateTime @updatedAt

  @@index([campaignId])
}

// ─────────────────────────────────────────────────────────────
// Domain tracking state (one row per domain per campaign)
// ─────────────────────────────────────────────────────────────
model DomainState {
  id                 String   @id @default(cuid())
  campaignId         String
  campaign           Campaign @relation(fields: [campaignId], references: [id], onDelete: Cascade)
  domain             Domain
  domainStoneStability Int    @default(70)
  soulFlowIntegrity  Int      @default(70)
  keeperPressure     Int      @default(0)
  voidParasitism     Int      @default(0)
  politicalStability Int      @default(60)
  militaryStrength   Int      @default(50)
  economicStrength   Int      @default(50)
  magicalStrength    Int      @default(50)
  civilianMorale     Int      @default(60)
  resourceSecurity   Int      @default(50)
  intelligenceStrength Int    @default(50)
  trueVirtues        Json     // Record<string, number>
  corruptedVirtues   Json     // Record<string, number>
  virtueCrisis       String?
  keeperExploit      String?
  currentStrategy    String?
  immediatePriority  String?
  longTermPriority   String?
  updatedAt          DateTime @updatedAt

  @@unique([campaignId, domain])
  @@index([campaignId])
}

// ─────────────────────────────────────────────────────────────
// Factions
// ─────────────────────────────────────────────────────────────
model Faction {
  id            String   @id @default(cuid())
  campaignId    String
  campaign      Campaign @relation(fields: [campaignId], references: [id], onDelete: Cascade)
  name          String
  domain        Domain
  doctrine      String
  idealFuture   String?
  publicGoal    String?
  hiddenGoal    String?
  classBase     Json     @default("{}")
  powerSources  Json     // {military,economy,magic,religion,intelligence,legitimacy,resources,fear}
  resourcesControlled String[]
  locationsControlled String[]
  magicAccess   String[]
  internalRivals String[]
  externalEnemies String[]
  possibleAllies String[]
  secretAlliances String[]
  methods       Json     // {diplomacy, open_war, sabotage, propaganda, assassination, trade_pressure, magical_escalation}
  playerStanding Json    // {reputation, trust, fear, respect, suspicion, debt, leverage}
  keeperExploitVector String?
  voidTemptationPhrase String?
  currentStatus String?
  leaderNpcs    Npc[]    @relation("FactionLeaders")
  members       Npc[]    @relation("FactionMembers")
  clocks        PressureClock[]
  updatedAt     DateTime @updatedAt

  @@index([campaignId, domain])
}

// ─────────────────────────────────────────────────────────────
// NPCs + memory
// ─────────────────────────────────────────────────────────────
model Npc {
  id            String   @id @default(cuid())
  campaignId    String
  campaign      Campaign @relation(fields: [campaignId], references: [id], onDelete: Cascade)
  name          String
  domain        Domain
  publicRole    String
  privateRole   String?
  locationId    String?
  location      Location? @relation(fields: [locationId], references: [id])
  beliefCore    String
  desire        String
  fear          String
  secret        String?
  publicMask    String?
  privateTruth  String?
  hp            Int      @default(10)
  status        NpcStatus @default(alive)
  // relationship-to-player axes
  trust         Int      @default(0)
  fearLevel     Int      @default(0)
  affection     Int      @default(0)
  suspicion     Int      @default(0)
  respect       Int      @default(0)
  debt          Int      @default(0)
  resentment    Int      @default(0)
  loyalty       Int      @default(0)
  relationshipToPlayer RelationshipStatus @default(neutral)
  canRomance    Boolean  @default(false)
  canBetray     Boolean  @default(true)
  canDie        Boolean  @default(true)
  canDefect     Boolean  @default(false)
  rumorStyle    String?
  lieStyle      String?
  loyaltyTrigger   String?
  betrayalTrigger  String?
  deathConsequence String?
  heroArc       String?
  villainArc    String?
  visibility    Visibility @default(confirmed)
  leaderOfFactions Faction[] @relation("FactionLeaders")
  factions      Faction[]  @relation("FactionMembers")
  memories      NpcMemory[]
  updatedAt     DateTime @updatedAt

  @@index([campaignId, domain])
  @@index([locationId])
}

model NpcMemory {
  id            String   @id @default(cuid())
  npcId         String
  npc           Npc      @relation(fields: [npcId], references: [id], onDelete: Cascade)
  sourceEventId String?
  factualMemory String
  emotionalInterpretation   String?
  ideologicalInterpretation String?
  trustDelta    Int      @default(0)
  fearDelta     Int      @default(0)
  affectionDelta Int     @default(0)
  suspicionDelta Int     @default(0)
  respectDelta  Int      @default(0)
  resentmentDelta Int    @default(0)
  debtDelta     Int      @default(0)
  memoryStrength Int     @default(50)
  accuracy      Int      @default(100)
  canBeDistorted Boolean @default(true)
  canBeErased   Boolean  @default(false)
  visibility    Visibility @default(hidden)
  createdAt     DateTime @default(now())

  @@index([npcId])
}

// ─────────────────────────────────────────────────────────────
// Relationships (any actor → any actor) + toleration
// ─────────────────────────────────────────────────────────────
model Relationship {
  id           String   @id @default(cuid())
  campaignId   String
  campaign     Campaign @relation(fields: [campaignId], references: [id], onDelete: Cascade)
  sourceType   String   // player | npc | faction | domain | location
  sourceId     String
  targetType   String
  targetId     String
  status       RelationshipStatus @default(neutral)
  previousStatus RelationshipStatus?
  trust        Int @default(0)
  fear         Int @default(0)
  respect      Int @default(0)
  resentment   Int @default(0)
  dependency   Int @default(0)
  ideologicalDistance Int @default(0)
  sharedThreat Int @default(0)
  sharedInterest Int @default(0)
  leverage     Int @default(0)
  debt         Int @default(0)
  affection    Int?
  currentReason   String?
  breakingPoint   String?
  improvementPath String?
  toleration   Json?    // TolerationState when status is uneasy_partner/tolerable_rival
  updatedAt    DateTime @updatedAt

  @@unique([campaignId, sourceType, sourceId, targetType, targetId])
  @@index([campaignId])
}

// ─────────────────────────────────────────────────────────────
// Locations
// ─────────────────────────────────────────────────────────────
model Location {
  id           String   @id @default(cuid())
  campaignId   String
  campaign     Campaign @relation(fields: [campaignId], references: [id], onDelete: Cascade)
  name         String
  domain       Domain
  locationType String
  controllingFactionId String?
  contestedBy  String[]
  stability    Int @default(60)
  danger       Int @default(20)
  corruption   Int @default(0)
  morale       Int @default(60)
  resources    Int @default(50)
  secrecy      Int @default(50)
  militaryPressure Int @default(20)
  spiritualHealth  Int @default(60)
  economicHealth   Int @default(50)
  rumorActivity    Int @default(0)
  knownSecrets  String[]
  hiddenSecrets String[]
  currentMood   String?
  visualStateTags String[]
  npcs          Npc[]
  updatedAt     DateTime @updatedAt

  @@index([campaignId, domain])
}

// ─────────────────────────────────────────────────────────────
// Quests
// ─────────────────────────────────────────────────────────────
model Quest {
  id           String   @id @default(cuid())
  campaignId   String
  campaign     Campaign @relation(fields: [campaignId], references: [id], onDelete: Cascade)
  title        String
  description  String
  status       QuestStatus @default(available)
  domain       Domain
  locationIds  String[]
  factionIds   String[]
  npcIds       String[]
  knownObjectives    String[]
  hiddenObjectives   String[]
  completedObjectives String[]
  failedObjectives   String[]
  possibleResolutions String[]
  chosenResolution   String?
  moralCost     String?
  factionWinners String[]
  factionLosers  String[]
  futureHooks   String[]
  updatedAt     DateTime @updatedAt

  @@index([campaignId, status])
}

// ─────────────────────────────────────────────────────────────
// Rumors
// ─────────────────────────────────────────────────────────────
model Rumor {
  id            String   @id @default(cuid())
  campaignId    String
  campaign      Campaign @relation(fields: [campaignId], references: [id], onDelete: Cascade)
  title         String
  originalTruth String
  currentClaim  String
  originEventId String?
  source        Json     // {type, id?, motive, bias, credibility}
  accuracy      Int      @default(50)
  distortionLevel Int    @default(0)
  emotionalPayload String
  contentLayers Json     // {factual_core, emotional_spin, moral_accusation, political_use, ...}
  spread        Json     // {origin_location_id, current_location_ids[], channels[], speed, reach, intensity, mutation_rate}
  audienceReactions Json @default("[]")
  beneficiaries String[]
  harmedParties String[]
  status        RumorStatus @default(emerging)
  consequenceChainId String?
  visibility    Visibility @default(rumored)
  updatedAt     DateTime @updatedAt

  @@index([campaignId, status])
}

// ─────────────────────────────────────────────────────────────
// Pressure clocks
// ─────────────────────────────────────────────────────────────
model PressureClock {
  id           String   @id @default(cuid())
  campaignId   String
  campaign     Campaign @relation(fields: [campaignId], references: [id], onDelete: Cascade)
  name         String
  description  String?
  clockType    ClockType
  currentValue Int      @default(0)
  maxValue     Int
  ownerType    String?
  ownerId      String?
  factionId    String?
  faction      Faction? @relation(fields: [factionId], references: [id])
  triggerEvent String?
  partialTickEffects String[]
  completedEffect String?
  reversalMethods String[]
  isActive     Boolean  @default(true)
  visibility   Visibility @default(hinted)
  updatedAt    DateTime @updatedAt

  @@index([campaignId, isActive])
}

// ─────────────────────────────────────────────────────────────
// Consequence chains (nodes inline as Json for the MVP)
// ─────────────────────────────────────────────────────────────
model ConsequenceChain {
  id            String   @id @default(cuid())
  campaignId    String
  campaign      Campaign @relation(fields: [campaignId], references: [id], onDelete: Cascade)
  title         String
  rootEventId   String?
  rootMoralQuestion String?
  rootDomainLogic   String?
  currentDepth  Int      @default(1)
  maxDepth      Int      @default(3)
  nodes         Json     // ConsequenceNode[]
  domainsTouched String[]
  factionsTouched String[]
  npcsTouched   String[]
  keeperGain    Int      @default(0)
  voidGain      Int      @default(0)
  soulFlowDamage Int     @default(0)
  status        ChainStatus @default(active)
  visibility    Visibility @default(hidden)
  updatedAt     DateTime @updatedAt

  @@index([campaignId, status])
}

// ─────────────────────────────────────────────────────────────
// World events (append-only memory backbone)
// ─────────────────────────────────────────────────────────────
model WorldEvent {
  id            String   @id @default(cuid())
  campaignId    String
  campaign      Campaign @relation(fields: [campaignId], references: [id], onDelete: Cascade)
  turnId        String?
  eventType     String
  eventTitle    String
  factualSummary String
  publicInterpretation String?
  hiddenInterpretation String?
  actorIds      String[]
  targetIds     String[]
  witnessIds    String[]
  witnessFactionIds String[]
  locationId    String?
  domainContext String?
  virtuesInvoked  String[]
  virtuesDistorted String[]
  magicUsed     String?
  voidInvolved  Boolean  @default(false)
  keeperAdvantageDelta Int @default(0)
  soulFlowDelta Int      @default(0)
  immediateEffects Json  @default("{}")
  consequenceChainIds String[]
  rumorIdsCreated String[]
  permanence    Permanence @default(minor)
  visibility    Visibility @default(confirmed)
  createdAt     DateTime @default(now())

  @@index([campaignId, createdAt])
}

// ─────────────────────────────────────────────────────────────
// Turn log
// ─────────────────────────────────────────────────────────────
model TurnLog {
  id            String   @id @default(cuid())
  campaignId    String
  campaign      Campaign @relation(fields: [campaignId], references: [id], onDelete: Cascade)
  characterId   String
  turnNumber    Int
  playerInput   String
  verdaxNarrative String
  choicesPresented String[]
  skillCheck    Json?
  decisionAnalysis Json
  consequences  Json
  worldEventIds String[]
  updatedStateSummary String?
  memorySummary String?
  createdAt     DateTime @default(now())

  @@unique([campaignId, turnNumber])
  @@index([campaignId, createdAt])
}
```

## Secondary metaphysical state (JSON now, tables later)

For the MVP these live as `Json` — on `Campaign.metaphysics`, or as typed rows in
a single generic `MetaphysicalEvent` table — and are **promoted** to first-class
tables when query patterns demand it:

- `SoulFlowWound` — promote when the UI/War Room filters wounds by location/domain.
- `KeeperExploitEvent` / `VoidTemptationEvent` — promote when analytics/clocks read them often.
- `MagicSystemState` / `RelicState` / `WarFrontState` — promote as Tempest/Abyss/cross-domain play comes online.

```prisma
// Optional generic catch-all for the MVP (one table, typed by `kind`)
model MetaphysicalEvent {
  id         String   @id @default(cuid())
  campaignId String
  kind       String   // soul_flow_wound | keeper_exploit | void_temptation | magic_system | relic | warfront
  sourceEventId String?
  payload    Json     // the full Chunk-3 shape for that kind
  visibility Visibility @default(hidden)
  isActive   Boolean  @default(true)
  createdAt  DateTime @default(now())
  updatedAt  DateTime @updatedAt
  @@index([campaignId, kind, isActive])
}
```

## Seeding the Verdance MVP

Seed scripts read the **static lore** (domain bible + faction bibles + NPC
dossiers under `docs/02-domains`, `docs/03-factions`, `docs/04-npcs`) and create
the campaign-scoped rows:

- 1 `Campaign` (phase `local_crisis`, startingDomain `Verdance`) with starter `metaphysics`.
- 1 `DomainState` for Verdance (virtue/corruption maps and example numbers from the bible §27).
- 6 `Faction` rows (Heartmoot, Rootwardens, Sap Commons, Hollow Pact, Seed Guild, Greenwake Communion) with `powerSources` + `playerStanding` from each faction bible.
- 10 `Npc` rows (the Thornveil cast) with starting relationship axes from each dossier's `NPCState` instance.
- `Location` rows: **Thornveil Refuge**, the corrupted **rootwell**, the **Hollow Reach**, the **thornwall** (LocationState numbers from bible §17/§28).
- `PressureClock` rows: **Rootwell Awakening** (0/6), **Abyss Harvest**, **Heartmoot Paralysis/Exposure**, **Othren's Slide**.
- 1 opening `Quest`: *The Sap Beneath the Ash*.

## Open questions

- Do we want per-turn **state snapshots** (full projection rows copied into a history table) for replay/undo, or rely on `WorldEvent`/`TurnLog` replay only? (MVP: replay only.)
- `Relationship` as one polymorphic table vs. separate player↔npc / faction↔faction tables — polymorphic for the MVP; split if query cost grows.
- Promote `ConsequenceChain.nodes` (Json) to a `ConsequenceNode` table once chains are queried by depth/timing for the War Room.

## Locked decisions

1. Postgres + Prisma; `Json` for nested/flexible state; Zod validation shared with the API.
2. `campaignId` scopes every mutable row; static lore stays in `docs/` seed data.
3. `WorldEvent` + `TurnLog` are append-only; projection tables are mutated each turn in the locked order.
4. MVP ships the minimum tracking set as real tables; metaphysical extras ride in `Json`/`MetaphysicalEvent` until promotion is justified.
5. Every VERDAX response is validated before any write.
