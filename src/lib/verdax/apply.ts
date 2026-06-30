import type { Prisma, PrismaClient } from "@prisma/client";
import type { VerdaxTurnResponse } from "@/lib/schemas/verdax";

type Tx = Prisma.TransactionClient;

/** Parse a delta that may be a number or a "+8" / "-3" string. */
function num(v: unknown): number {
  if (typeof v === "number") return v;
  if (typeof v === "string") {
    const n = parseInt(v.replace(/[^\d-]/g, ""), 10);
    return Number.isFinite(n) ? n : 0;
  }
  return 0;
}

const clamp = (n: number, lo = 0, hi = 100) => Math.max(lo, Math.min(hi, n));

/**
 * Resolve a delta-bucket key (which the model may give as an id, a key, or a
 * name) to a record id, using a name/id lookup table built from the scene.
 */
function makeResolver(rows: { id: string; name: string }[]) {
  const byId = new Map(rows.map((r) => [r.id, r.id]));
  const byName = new Map(rows.map((r) => [r.name.toLowerCase(), r.id]));
  const bySlug = new Map(rows.map((r) => [r.name.toLowerCase().replace(/[^a-z0-9]+/g, "_"), r.id]));
  return (key: string): string | undefined =>
    byId.get(key) ?? byName.get(key.toLowerCase()) ?? bySlug.get(key.toLowerCase());
}

const NPC_AXES = ["trust", "fearLevel", "affection", "suspicion", "respect", "debt", "resentment", "loyalty"] as const;
const LOCATION_AXES = ["stability", "danger", "corruption", "morale", "resources", "secrecy", "militaryPressure", "spiritualHealth", "economicHealth", "rumorActivity"] as const;
const CHARACTER_AXES = ["hp", "mana", "stamina", "gold", "xp", "corruption", "voidResonance", "soulIntegrity", "identityIntegrity", "oathBurden", "memoryStability"] as const;
const DOMAIN_AXES = ["domainStoneStability", "soulFlowIntegrity", "keeperPressure", "voidParasitism", "politicalStability", "militaryStrength", "economicStrength", "magicalStrength", "civilianMorale", "resourceSecurity", "intelligenceStrength"] as const;

/**
 * Step 13-18: apply a validated response to the database in the LOCKED order.
 * Caller wraps this in db.$transaction.
 * See docs/05-systems/verdax-turn-engine.md and Chunk 3 "State update order".
 */
export async function applyTurn(
  tx: Tx,
  args: {
    campaignId: string;
    characterId: string;
    turnNumber: number;
    playerInput: string;
    resp: VerdaxTurnResponse;
  },
): Promise<{ turnId: string; worldEventIds: string[]; hidden: Record<string, unknown> }> {
  const { campaignId, characterId, turnNumber, playerInput, resp } = args;
  const mc = resp.mechanical_consequences ?? {};

  // 2. TurnLog (created first so world events can reference it)
  const turn = await tx.turnLog.create({
    data: {
      campaignId,
      characterId,
      turnNumber,
      playerInput,
      verdaxNarrative: resp.narrative,
      choicesPresented: resp.choices.map((c) => c.label),
      skillCheck: (resp.skill_check ?? undefined) as Prisma.InputJsonValue | undefined,
      decisionAnalysis: resp.decision_analysis as unknown as Prisma.InputJsonValue,
      consequences: mc as unknown as Prisma.InputJsonValue,
      memorySummary: resp.memory_summary,
    },
  });

  // 3. WorldEvents
  const worldEventIds: string[] = [];
  for (const e of resp.new_world_events) {
    const created = await tx.worldEvent.create({
      data: {
        campaignId,
        turnId: turn.id,
        eventType: e.event_type,
        eventTitle: e.event_title,
        factualSummary: e.factual_summary,
        publicInterpretation: e.public_interpretation,
        hiddenInterpretation: e.hidden_interpretation,
        actorIds: e.actor_ids,
        targetIds: e.target_ids,
        witnessIds: e.witness_ids,
        witnessFactionIds: e.witness_faction_ids,
        locationId: e.location_id,
        domainContext: e.domain_context,
        virtuesInvoked: e.virtues_invoked,
        virtuesDistorted: e.virtues_distorted,
        magicUsed: e.magic_used,
        voidInvolved: e.void_involved,
        keeperAdvantageDelta: e.keeper_advantage_delta,
        soulFlowDelta: e.soul_flow_delta,
        permanence: e.permanence,
        visibility: e.visibility,
      },
    });
    worldEventIds.push(created.id);
  }

  // 4. Character
  if (mc.character) {
    const c = await tx.character.findUniqueOrThrow({ where: { id: characterId } });
    const data: Record<string, number> = {};
    for (const axis of CHARACTER_AXES) {
      if (axis in mc.character) {
        const hi = axis === "gold" || axis === "xp" ? Number.MAX_SAFE_INTEGER : axis === "hp" ? c.maxHp : 100;
        data[axis] = clamp((c as unknown as Record<string, number>)[axis] + num(mc.character[axis]), 0, hi);
      }
    }
    if (Object.keys(data).length) await tx.character.update({ where: { id: characterId }, data });
  }

  // 5-6. NPC memory + relationship axes
  if (mc.npcs) {
    const npcs = await tx.npc.findMany({ where: { campaignId } });
    const resolve = makeResolver(npcs);
    for (const [key, delta] of Object.entries(mc.npcs)) {
      const id = resolve(key);
      if (!id) continue;
      const npc = npcs.find((n) => n.id === id)!;
      const d = (delta ?? {}) as Record<string, unknown>;
      const data: Record<string, number> = {};
      for (const axis of NPC_AXES) {
        if (axis in d) data[axis] = clamp((npc as unknown as Record<string, number>)[axis] + num(d[axis]));
      }
      if (Object.keys(data).length) await tx.npc.update({ where: { id }, data });
      if (typeof d.memory === "string") {
        await tx.npcMemory.create({
          data: {
            npcId: id,
            factualMemory: d.memory,
            emotionalInterpretation: typeof d.emotional === "string" ? d.emotional : undefined,
            sourceEventId: worldEventIds[0],
          },
        });
      }
    }
  }

  // 7. Factions (merge playerStanding deltas)
  if (mc.factions) {
    const factions = await tx.faction.findMany({ where: { campaignId } });
    const resolve = makeResolver(factions);
    for (const [key, delta] of Object.entries(mc.factions)) {
      const id = resolve(key);
      if (!id) continue;
      const f = factions.find((x) => x.id === id)!;
      const standing = { ...((f.playerStanding as Record<string, number>) ?? {}) };
      for (const [axis, val] of Object.entries((delta ?? {}) as Record<string, unknown>)) {
        standing[axis] = clamp((standing[axis] ?? 0) + num(val), -100, 100);
      }
      await tx.faction.update({ where: { id }, data: { playerStanding: standing as Prisma.InputJsonValue } });
    }
  }

  // 8. Locations
  if (mc.locations) {
    const locations = await tx.location.findMany({ where: { campaignId } });
    const resolve = makeResolver(locations);
    for (const [key, delta] of Object.entries(mc.locations)) {
      const id = resolve(key);
      if (!id) continue;
      const loc = locations.find((l) => l.id === id)!;
      const data: Record<string, number> = {};
      for (const axis of LOCATION_AXES) {
        if (axis in ((delta ?? {}) as Record<string, unknown>))
          data[axis] = clamp((loc as unknown as Record<string, number>)[axis] + num((delta as Record<string, unknown>)[axis]));
      }
      if (Object.keys(data).length) await tx.location.update({ where: { id }, data });
    }
  }

  // 11. Pressure clocks
  if (mc.pressure_clocks) {
    const clocks = await tx.pressureClock.findMany({ where: { campaignId } });
    const resolve = makeResolver(clocks);
    for (const [key, delta] of Object.entries(mc.pressure_clocks)) {
      const id = resolve(key);
      if (!id) continue;
      const clk = clocks.find((c) => c.id === id)!;
      const next = Math.max(0, Math.min(clk.maxValue, clk.currentValue + num(delta)));
      await tx.pressureClock.update({ where: { id }, data: { currentValue: next } });
    }
  }

  // 15. Domain state
  if (mc.domain_states) {
    for (const [domainKey, delta] of Object.entries(mc.domain_states)) {
      const ds = await tx.domainState.findFirst({
        where: { campaignId, domain: domainKey as never },
      });
      if (!ds) continue;
      const data: Record<string, number> = {};
      for (const axis of DOMAIN_AXES) {
        if (axis in ((delta ?? {}) as Record<string, unknown>))
          data[axis] = clamp((ds as unknown as Record<string, number>)[axis] + num((delta as Record<string, unknown>)[axis]));
      }
      if (Object.keys(data).length) await tx.domainState.update({ where: { id: ds.id }, data });
    }
  }

  // 16. Keeper / Void / soul-flow → fold into campaign metaphysics (MVP)
  const metaDelta = collectMetaphysicsDelta(resp);
  if (Object.keys(metaDelta).length) {
    const camp = await tx.campaign.findUniqueOrThrow({ where: { id: campaignId } });
    const meta = { ...((camp.metaphysics as Record<string, number>) ?? {}) };
    for (const [k, v] of Object.entries(metaDelta)) meta[k] = clamp((meta[k] ?? 0) + v);
    await tx.campaign.update({ where: { id: campaignId }, data: { metaphysics: meta as Prisma.InputJsonValue } });
  }

  // 10. Rumors
  for (const r of resp.new_or_updated_rumors) {
    await tx.rumor.create({
      data: {
        campaignId,
        title: r.title,
        originalTruth: r.original_truth,
        currentClaim: r.current_claim,
        source: r.source as Prisma.InputJsonValue,
        accuracy: r.accuracy,
        distortionLevel: r.distortion_level,
        emotionalPayload: r.emotional_payload,
        contentLayers: r.content_layers as Prisma.InputJsonValue,
        spread: r.spread as Prisma.InputJsonValue,
        beneficiaries: r.beneficiaries,
        harmedParties: r.harmed_parties,
        visibility: r.visibility,
      },
    });
  }

  // Consequence chains
  for (const ch of resp.new_or_updated_consequence_chains) {
    await tx.consequenceChain.create({
      data: {
        campaignId,
        title: ch.title,
        rootMoralQuestion: ch.root_moral_question,
        rootDomainLogic: ch.root_domain_logic,
        maxDepth: ch.max_depth,
        nodes: ch.nodes as Prisma.InputJsonValue,
        domainsTouched: ch.domains_touched,
        factionsTouched: ch.factions_touched,
        npcsTouched: ch.npcs_touched,
        keeperGain: ch.keeper_gain,
        voidGain: ch.void_gain,
        soulFlowDamage: ch.soul_flow_damage,
        visibility: ch.visibility,
      },
    });
  }

  // 17. memory summary already written on the turn
  await tx.turnLog.update({ where: { id: turn.id }, data: { worldEventIds } });

  const hidden = collectHidden(resp);
  return { turnId: turn.id, worldEventIds, hidden };
}

function collectMetaphysicsDelta(resp: VerdaxTurnResponse): Record<string, number> {
  const out: Record<string, number> = {};
  const k = resp.mechanical_consequences.keeper as Record<string, unknown> | undefined;
  const v = resp.mechanical_consequences.void as Record<string, unknown> | undefined;
  const s = resp.mechanical_consequences.soul_flow as Record<string, unknown> | undefined;
  if (k?.immediate_gain || k?.pressure_delta)
    out.keeper_prison_pressure = num(k.immediate_gain ?? k.pressure_delta);
  if (v?.void_resonance_delta) out.global_void_parasitism = num(v.void_resonance_delta);
  if (s?.soul_flow_delta) out.global_soul_flow_integrity = num(s.soul_flow_delta);
  return out;
}

/** Hidden results for the DM War Room (never sent to the player). */
export function collectHidden(resp: VerdaxTurnResponse): Record<string, unknown> {
  return {
    keeper: resp.mechanical_consequences.keeper,
    void: resp.mechanical_consequences.void,
    soul_flow: resp.mechanical_consequences.soul_flow,
    hidden_chains: resp.new_or_updated_consequence_chains.filter((c) => c.visibility === "hidden"),
    hidden_events: resp.new_world_events.filter((e) => e.visibility === "hidden"),
  };
}
