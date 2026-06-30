import { db } from "@/lib/db";

/**
 * Step 1-10 of the turn loop: assemble the scene-relevant prompt context.
 * Do NOT load the whole world — only what the current scene needs.
 * See docs/05-systems/verdax-turn-engine.md.
 */
export async function buildContext(campaignId: string, characterId: string) {
  const campaign = await db.campaign.findUniqueOrThrow({ where: { id: campaignId } });
  const character = await db.character.findUniqueOrThrow({ where: { id: characterId } });

  // current location (fall back to the first location in the campaign)
  const location =
    (campaign.currentRegionId
      ? await db.location.findUnique({ where: { id: campaign.currentRegionId } })
      : null) ??
    (await db.location.findFirstOrThrow({ where: { campaignId } }));

  const domain = await db.domainState.findUniqueOrThrow({
    where: { campaignId_domain: { campaignId, domain: location.domain } },
  });

  const [npcs, factions, quests, rumors, clocks, recentTurns] = await Promise.all([
    db.npc.findMany({
      where: { campaignId, locationId: location.id, status: { in: ["alive", "wounded", "captured"] } },
    }),
    db.faction.findMany({ where: { campaignId, domain: location.domain } }),
    db.quest.findMany({ where: { campaignId, status: "active" } }),
    db.rumor.findMany({
      where: { campaignId, status: { in: ["spreading", "weaponized", "contested"] } },
    }),
    db.pressureClock.findMany({ where: { campaignId, isActive: true } }),
    db.turnLog.findMany({ where: { campaignId }, orderBy: { turnNumber: "desc" }, take: 8 }),
  ]);

  return {
    campaign,
    character,
    location,
    domain,
    npcs,
    factions,
    quests,
    rumors,
    clocks,
    recentTurnSummaries: recentTurns
      .map((t) => t.memorySummary ?? t.updatedStateSummary ?? "")
      .filter(Boolean)
      .reverse(),
    nextTurnNumber: (recentTurns[0]?.turnNumber ?? 0) + 1,
  };
}

export type VerdaxContext = Awaited<ReturnType<typeof buildContext>>;
