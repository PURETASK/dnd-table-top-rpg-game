import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { VerdaxTurnRequest, VerdaxTurnResponse } from "@/lib/schemas/verdax";
import { buildContext } from "@/lib/verdax/context";
import { VERDAX_CANON_SPINE, buildContextBlock } from "@/lib/verdax/systemPrompt";
import { callVerdaxModel } from "@/lib/verdax/model";
import { applyTurn } from "@/lib/verdax/apply";

export const runtime = "nodejs";

/**
 * POST /api/verdax/turn — the heart of the game.
 * Loads context → calls VERDAX → validates → applies state in the locked order
 * (single transaction) → returns narrative + player panel. Hidden results go to
 * the War Room view only. See docs/05-systems/verdax-turn-engine.md.
 */
export async function POST(req: Request) {
  // validate request
  const parsedReq = VerdaxTurnRequest.safeParse(await req.json().catch(() => null));
  if (!parsedReq.success) {
    return NextResponse.json({ error: "Invalid request", details: parsedReq.error.flatten() }, { status: 400 });
  }
  const { campaignId, characterId, input } = parsedReq.data;

  // 1-10. assemble context
  let ctx;
  try {
    ctx = await buildContext(campaignId, characterId);
  } catch {
    return NextResponse.json({ error: "Campaign or character not found" }, { status: 404 });
  }
  const system = VERDAX_CANON_SPINE;
  const context = buildContextBlock(ctx);

  // 11-12. model call + validation (one repair retry, else narration-only fallback)
  let resp: VerdaxTurnResponse | null = null;
  let repairNote: string | undefined;
  for (let attempt = 0; attempt < 2 && !resp; attempt++) {
    let raw: string;
    try {
      raw = await callVerdaxModel({ system, context, input, repairNote });
    } catch (err) {
      return NextResponse.json({ error: "VERDAX model error", details: String(err) }, { status: 502 });
    }
    let json: unknown;
    try {
      json = JSON.parse(raw);
    } catch {
      repairNote = "Your previous output was not valid JSON. Return a single valid JSON object only.";
      continue;
    }
    const validated = VerdaxTurnResponse.safeParse(json);
    if (validated.success) {
      resp = validated.data;
    } else {
      repairNote = `Your JSON failed validation: ${JSON.stringify(validated.error.flatten().fieldErrors).slice(0, 600)}. Return corrected JSON only.`;
    }
  }

  // narration-only fallback: never write unvalidated output to the DB
  if (!resp) {
    return NextResponse.json(
      {
        narrative:
          "The thread of the world tangles for a moment — VERDAX could not resolve the consequences cleanly. (No state was changed.) Try rephrasing your action.",
        choices: [],
        panel: [],
        why: "Validation failed twice; the turn was rolled back to protect world state.",
        degraded: true,
      },
      { status: 200 },
    );
  }

  // 13-18. apply in the locked order, in one transaction
  let result;
  try {
    result = await db.$transaction((tx) =>
      applyTurn(tx, { campaignId, characterId, turnNumber: ctx.nextTurnNumber, playerInput: input, resp: resp! }),
    );
  } catch (err) {
    return NextResponse.json({ error: "Failed to apply turn", details: String(err) }, { status: 500 });
  }

  // 19-20. response (hidden results withheld from the player; War Room only)
  return NextResponse.json({
    turnNumber: ctx.nextTurnNumber,
    narrative: resp.narrative,
    choices: resp.choices,
    skillCheck: resp.skill_check ?? null,
    panel: resp.player_facing_consequence_panel,
    why: resp.expanded_why_this_happened,
    turnId: result.turnId,
    // `warRoom` is included here for the MVP single-player client; a production
    // build gates this behind a DM/admin role.
    warRoom: result.hidden,
  });
}
