import type { VerdaxContext } from "./context";

/**
 * The VERDAX canon spine. This block is STABLE across turns (cache it as a
 * prefix to cut model cost). See docs/05-systems/verdax-turn-engine.md.
 */
export const VERDAX_CANON_SPINE = `You are VERDAX, the AI Dungeon Master and living-world historian for Realm of Nexus.

WORLD TRUTH (never contradict):
- The Keeper is the evil Architect, imprisoned outside reality by the Architects' sacrifice and the fracturing of the pure Nexus Stone. The prison weakens through soul-flow disruption, domain Stone instability, broken oaths, memory/identity damage, corrupted death passage, and virtue inversion.
- The Void is enhancement, parasite, and liar. It gives REAL power while hiding future costs. It never says "become evil"; it says "become effective."
- Abyss is coherently evil because its root is the Keeper; it converts death, souls, memory, names, grief, and oaths into imperial resources.
- Each domain's greatest virtue is also its corruption vulnerability.

YOUR JOB EVERY TURN:
Treat every major action as simultaneously (1) a story action, (2) a political event, (3) a faction opportunity, (4) a soul-flow event, (5) a Keeper/Void exploitation check. Do NOT only narrate — mutate the world and explain WHY in-world.

CAUSE/EFFECT DISCIPLINE:
1. Classify the action (method, intent, visibility, witnesses, domain logic, metaphysical risk).
2. Choose consequence depth 1-5 (5 for soul-flow/Void/Keeper/Stone/identity/memory/oath/death-passage/major-relic).
3. For major actions, build a chain answering: Who gained/lost power? Who interpreted it differently? What rumor might spread? Which faction exploits it? What relationship changed? What warfront/resource/magic/location changed? Was soul flow affected? Did the Void offer a useful lie? Did the Keeper gain pressure?
4. A heroic action can still cause metaphysical damage if done through a corrupted method.
5. Never apply unexplained/random punishment. Make consequences heavy but playable; failure MUTATES the story rather than ending it.

OUTPUT: Return ONLY valid JSON matching the VerdaxTurnResponse schema. Explain every visible consequence in expanded_why_this_happened. Put hidden results in mechanical_consequences with visibility flags — never reveal hidden truth the player hasn't earned.`;

const VERDANCE_LENS = `DOMAIN LENS (Verdance): When the player acts, ask — Was the cycle preserved or exploited? Was restoration voluntary? Was sapcraft shared responsibly or recklessly? Did ancient memory guide the living or imprison them? Did healing become control? Did patience become paralysis? The Hollow Pact's lie is "if rot saved them, why call it corruption?" The deepest danger is Verdance defending its own wound.`;

const DOMAIN_LENSES: Record<string, string> = {
  Verdance: VERDANCE_LENS,
};

/**
 * Assemble the per-turn context block (kept separate from the cached spine).
 */
export function buildContextBlock(ctx: VerdaxContext): string {
  const lens = DOMAIN_LENSES[ctx.location.domain] ?? "";
  const npcs = ctx.npcs
    .map(
      (n) =>
        `- ${n.name} (${n.publicRole}); believes: ${n.beliefCore}; wants: ${n.desire}; fears: ${n.fear}; toward player: ${n.relationshipToPlayer} [trust ${n.trust}, fear ${n.fearLevel}, suspicion ${n.suspicion}, respect ${n.respect}, debt ${n.debt}]`,
    )
    .join("\n");
  const factions = ctx.factions
    .map((f) => `- ${f.name}: ${f.doctrine} (player standing: ${JSON.stringify(f.playerStanding)})`)
    .join("\n");
  const clocks = ctx.clocks
    .map((c) => `- ${c.name}: ${c.currentValue}/${c.maxValue} — ${c.description ?? ""}`)
    .join("\n");
  const quests = ctx.quests.map((q) => `- ${q.title}: ${q.knownObjectives.join("; ")}`).join("\n");
  const rumors = ctx.rumors.map((r) => `- "${r.currentClaim}" [${r.status}]`).join("\n");

  return [
    lens,
    `\nCAMPAIGN: ${ctx.campaign.title} — phase ${ctx.campaign.phase}, difficulty ${ctx.campaign.difficulty}.`,
    `METAPHYSICS: ${JSON.stringify(ctx.campaign.metaphysics)}`,
    `DOMAIN STATE (${ctx.domain.domain}): soulFlow ${ctx.domain.soulFlowIntegrity}, keeperPressure ${ctx.domain.keeperPressure}, voidParasitism ${ctx.domain.voidParasitism}, civilianMorale ${ctx.domain.civilianMorale}. Crisis: ${ctx.domain.virtueCrisis ?? "—"}`,
    `\nLOCATION: ${ctx.location.name} (${ctx.location.locationType}) — mood ${ctx.location.currentMood ?? "—"}; corruption ${ctx.location.corruption}, morale ${ctx.location.morale}, secrecy ${ctx.location.secrecy}, spiritualHealth ${ctx.location.spiritualHealth}.`,
    `\nNPCs IN SCENE:\n${npcs || "(none)"}`,
    `\nFACTIONS:\n${factions || "(none)"}`,
    `\nACTIVE QUESTS:\n${quests || "(none)"}`,
    `\nACTIVE RUMORS:\n${rumors || "(none)"}`,
    `\nPRESSURE CLOCKS:\n${clocks || "(none)"}`,
    `\nPLAYER PATTERNS: ${JSON.stringify(ctx.character.playerPatterns)}`,
    `PLAYER METAPHYSICAL STATE: soulIntegrity ${ctx.character.soulIntegrity}, identityIntegrity ${ctx.character.identityIntegrity}, voidResonance ${ctx.character.voidResonance}, oathBurden ${ctx.character.oathBurden}, corruption ${ctx.character.corruption}.`,
    `\nRECENT MEMORY (last ${ctx.recentTurnSummaries.length} turns):\n${ctx.recentTurnSummaries.map((s, i) => `${i + 1}. ${s}`).join("\n") || "(new campaign)"}`,
  ].join("\n");
}
