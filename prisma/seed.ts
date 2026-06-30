/**
 * Seed the Verdance MVP world — "The Sap Beneath the Ash".
 * Reads framework-agnostic JSON from seed/verdance/ (produced from the design
 * bibles) and creates the campaign-scoped rows, resolving key references to ids.
 *
 *   npm run db:seed   (or: prisma db seed)
 */
import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import { PrismaClient, type Domain } from "@prisma/client";

const db = new PrismaClient();
const SEED_DIR = join(process.cwd(), "seed", "verdance");

function load<T>(file: string, fallback: T): T {
  const path = join(SEED_DIR, file);
  if (!existsSync(path)) {
    console.warn(`[seed] missing ${file} — using fallback`);
    return fallback;
  }
  return JSON.parse(readFileSync(path, "utf8")) as T;
}

async function main() {
  const campaignData = load<any>("campaign.json", { title: "The Sap Beneath the Ash" });
  const domainData = load<any>("domain-verdance.json", null);
  const factionsData = load<any[]>("factions.json", []);
  const npcsData = load<any[]>("npcs.json", []);
  const locationsData = load<any[]>("locations.json", []);
  const clocksData = load<any[]>("clocks.json", []);
  const questData = load<any>("quest.json", null);

  // Idempotent reseed: wipe any existing campaign with the same title.
  const existing = await db.campaign.findMany({ where: { title: campaignData.title } });
  for (const c of existing) await db.campaign.delete({ where: { id: c.id } });

  const campaign = await db.campaign.create({
    data: {
      title: campaignData.title,
      mode: campaignData.mode ?? "solo_ai",
      startingDomain: (campaignData.startingDomain ?? "Verdance") as Domain,
      phase: campaignData.phase ?? "local_crisis",
      difficulty: campaignData.difficulty ?? "balanced",
      toneTags: campaignData.toneTags ?? [],
      activeDomainFocus: campaignData.activeDomainFocus ?? ["Verdance"],
      currentMainArc: campaignData.currentMainArc ?? null,
      metaphysics: campaignData.metaphysics ?? {},
      worldFlags: campaignData.worldFlags ?? {},
    },
  });
  console.log(`[seed] campaign: ${campaign.title} (${campaign.id})`);

  if (domainData) {
    await db.domainState.create({
      data: { campaignId: campaign.id, ...stripKeys(domainData), domain: (domainData.domain ?? "Verdance") as Domain },
    });
  }

  // Locations
  const locMap = new Map<string, string>();
  for (const l of locationsData) {
    const row = await db.location.create({
      data: { campaignId: campaign.id, ...stripKeys(l), domain: (l.domain ?? "Verdance") as Domain },
    });
    if (l.key) locMap.set(l.key, row.id);
  }
  // point the campaign at the refuge if present
  const startLoc = locMap.get("thornveil_refuge") ?? [...locMap.values()][0];
  if (startLoc) await db.campaign.update({ where: { id: campaign.id }, data: { currentRegionId: startLoc } });

  // Factions (basic fields; leaders wired after NPCs exist)
  const facMap = new Map<string, string>();
  const facLeaderKeys = new Map<string, string[]>();
  for (const f of factionsData) {
    const row = await db.faction.create({
      data: {
        campaignId: campaign.id,
        name: f.name,
        domain: (f.domain ?? "Verdance") as Domain,
        doctrine: f.doctrine ?? "",
        idealFuture: f.idealFuture ?? null,
        publicGoal: f.publicGoal ?? null,
        hiddenGoal: f.hiddenGoal ?? null,
        classBase: f.classBase ?? {},
        powerSources: f.powerSources ?? {},
        resourcesControlled: f.resourcesControlled ?? [],
        locationsControlled: f.locationsControlled ?? [],
        magicAccess: f.magicAccess ?? [],
        internalRivals: f.internalRivals ?? [],
        externalEnemies: f.externalEnemies ?? [],
        possibleAllies: f.possibleAllies ?? [],
        secretAlliances: f.secretAlliances ?? [],
        methods: f.methods ?? {},
        playerStanding: f.playerStanding ?? {},
        keeperExploitVector: f.keeperExploitVector ?? null,
        voidTemptationPhrase: f.voidTemptationPhrase ?? null,
        currentStatus: f.currentStatus ?? null,
      },
    });
    if (f.key) facMap.set(f.key, row.id);
    if (f.key && Array.isArray(f.leaderKeys)) facLeaderKeys.set(f.key, f.leaderKeys);
  }

  // NPCs (connect to factions as members; set start location)
  const npcMap = new Map<string, string>();
  for (const n of npcsData) {
    const factionIds = (n.factionKeys ?? []).map((k: string) => facMap.get(k)).filter(Boolean) as string[];
    const row = await db.npc.create({
      data: {
        campaignId: campaign.id,
        name: n.name,
        domain: (n.domain ?? "Verdance") as Domain,
        publicRole: n.publicRole ?? "",
        privateRole: n.privateRole ?? null,
        locationId: n.locationKey ? locMap.get(n.locationKey) ?? null : null,
        beliefCore: n.beliefCore ?? "",
        desire: n.desire ?? "",
        fear: n.fear ?? "",
        secret: n.secret ?? null,
        publicMask: n.publicMask ?? null,
        privateTruth: n.privateTruth ?? null,
        trust: n.trust ?? 0,
        fearLevel: n.fearLevel ?? 0,
        affection: n.affection ?? 0,
        suspicion: n.suspicion ?? 0,
        respect: n.respect ?? 0,
        debt: n.debt ?? 0,
        resentment: n.resentment ?? 0,
        loyalty: n.loyalty ?? 0,
        relationshipToPlayer: n.relationshipToPlayer ?? "neutral",
        canRomance: n.canRomance ?? false,
        canBetray: n.canBetray ?? true,
        canDie: n.canDie ?? true,
        canDefect: n.canDefect ?? false,
        rumorStyle: n.rumorStyle ?? null,
        lieStyle: n.lieStyle ?? null,
        loyaltyTrigger: n.loyaltyTrigger ?? null,
        betrayalTrigger: n.betrayalTrigger ?? null,
        deathConsequence: n.deathConsequence ?? null,
        heroArc: n.heroArc ?? null,
        villainArc: n.villainArc ?? null,
        visibility: n.visibility ?? "confirmed",
        factions: factionIds.length ? { connect: factionIds.map((id) => ({ id })) } : undefined,
      },
    });
    if (n.key) npcMap.set(n.key, row.id);
  }

  // Wire faction leaders
  for (const [facKey, leaderKeys] of facLeaderKeys) {
    const facId = facMap.get(facKey);
    const leaderIds = leaderKeys.map((k) => npcMap.get(k)).filter(Boolean) as string[];
    if (facId && leaderIds.length)
      await db.faction.update({ where: { id: facId }, data: { leaderNpcs: { connect: leaderIds.map((id) => ({ id })) } } });
  }

  // Clocks
  for (const c of clocksData) {
    const factionId = c.ownerType === "faction" && c.ownerKey ? facMap.get(c.ownerKey) ?? null : null;
    await db.pressureClock.create({
      data: {
        campaignId: campaign.id,
        name: c.name,
        description: c.description ?? null,
        clockType: c.clockType,
        currentValue: c.currentValue ?? 0,
        maxValue: c.maxValue ?? 6,
        ownerType: c.ownerType ?? null,
        ownerId: c.ownerKey ? npcMap.get(c.ownerKey) ?? facMap.get(c.ownerKey) ?? null : null,
        factionId,
        triggerEvent: c.triggerEvent ?? null,
        partialTickEffects: c.partialTickEffects ?? [],
        completedEffect: c.completedEffect ?? null,
        reversalMethods: c.reversalMethods ?? [],
        isActive: c.isActive ?? true,
        visibility: c.visibility ?? "hinted",
      },
    });
  }

  // Opening quest
  if (questData) {
    await db.quest.create({
      data: {
        campaignId: campaign.id,
        title: questData.title,
        description: questData.description ?? "",
        status: questData.status ?? "active",
        domain: (questData.domain ?? "Verdance") as Domain,
        locationIds: resolveKeys(questData.locationKeys, locMap),
        factionIds: resolveKeys(questData.factionKeys, facMap),
        npcIds: resolveKeys(questData.npcKeys, npcMap),
        knownObjectives: questData.knownObjectives ?? [],
        hiddenObjectives: questData.hiddenObjectives ?? [],
        possibleResolutions: questData.possibleResolutions ?? [],
      },
    });
  }

  // A default starting character so the turn endpoint is immediately playable.
  const character = await db.character.create({
    data: {
      campaignId: campaign.id,
      name: "The Stranger",
      ancestry: "Human",
      className: "Wanderer",
      originDomain: "Verdance",
      background: "A traveler who arrived at Thornveil Refuge as the rootwell began to speak names.",
      hp: 20, maxHp: 20, mana: 10, maxMana: 10, stamina: 12, maxStamina: 12, gold: 15,
      stats: { strength: 11, dexterity: 12, constitution: 11, intelligence: 12, wisdom: 13, charisma: 12 },
      domainResonance: { Radiance: 0, Verdance: 10, Tempest: 0, Sanctuary: 0, Abyss: 0 },
    },
  });

  console.log(
    `[seed] done — ${facMap.size} factions, ${npcMap.size} npcs, ${locMap.size} locations, ${clocksData.length} clocks.`,
  );
  console.log(`[seed] play with: campaignId=${campaign.id} characterId=${character.id}`);
}

// Returns `any` so the result can be spread into a Prisma create input whose
// required fields (e.g. trueVirtues, name, locationType) come from the JSON at
// runtime but aren't statically visible.
function stripKeys(obj: Record<string, unknown>): any {
  const { key, leaderKeys, factionKeys, locationKey, ownerKey, controllingFactionKey, ...rest } = obj as any;
  return rest;
}

function resolveKeys(keys: string[] | undefined, map: Map<string, string>): string[] {
  return (keys ?? []).map((k) => map.get(k)).filter(Boolean) as string[];
}

main()
  .then(() => db.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await db.$disconnect();
    process.exit(1);
  });
