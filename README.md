# Realm of Nexus — VERDAX

An AI–Dungeon-Master tabletop RPG. **VERDAX** is a persistent world-state engine
that treats every major choice as a story action *and* a political, factional,
soul-flow, and Keeper/Void event — producing consequences that ripple 3–5 steps
into the world and are *remembered*.

> If a concept matters to gameplay, VERDAX must track it. If VERDAX tracks it,
> choices can change it. If choices can change it, the world can remember.

## Design documentation

The full design bible lives in [`docs/`](docs/README.md): the locked metaphysical
canon, the per-domain civilization bibles, faction bibles, NPC dossiers, the
VERDAX tracking glossary, the cause/effect standards, and the implementation
specs. Start at [`docs/README.md`](docs/README.md).

## MVP vertical slice — *The Sap Beneath the Ash*

A corrupted rootwell beneath **Thornveil Refuge** (the Verdance domain) begins
speaking the names of the dead. The Rootwardens want to **contain** it, the Sap
Commons to **heal** it, the Hollow Pact to **weaponize** it, the Seed Guild to
**stabilize** it — while Abyss harvests souls at the border and the Void whispers
that a shortcut is mercy.

## Application scaffold

Next.js (App Router) + Prisma (Postgres) + Zod. The heart of the game is the turn
engine:

```
POST /api/verdax/turn   { campaignId, characterId, input }
  → loads scene context → calls VERDAX → validates JSON
  → applies state in the locked write order (one transaction)
  → returns narrative + choices + player consequence panel (+ War Room hidden state)
```

| Path | Purpose |
|---|---|
| `prisma/schema.prisma` | MVP database schema (minimum tracking set) |
| `prisma/seed.ts` | seeds the Verdance world from `seed/verdance/*.json` |
| `src/lib/schemas/verdax.ts` | Zod validation of the VERDAX response contract |
| `src/lib/verdax/context.ts` | scene-scoped prompt-context assembly |
| `src/lib/verdax/systemPrompt.ts` | the VERDAX canon spine + per-turn context block |
| `src/lib/verdax/model.ts` | Anthropic Messages API client |
| `src/lib/verdax/apply.ts` | the locked-order state mutation layer |
| `src/app/api/verdax/turn/route.ts` | the turn endpoint |

## Getting started

```bash
cp .env.example .env          # set DATABASE_URL and ANTHROPIC_API_KEY
npm install
npm run prisma:generate
npm run prisma:migrate        # create the Postgres schema
npm run db:seed               # load the Verdance MVP world (prints campaignId/characterId)
npm run dev                   # then POST a player action to /api/verdax/turn
```

> Requires a Postgres database and an Anthropic API key. `VERDAX_MODEL` defaults
> to the latest capable Claude model for the Dungeon Master.

## Status

Design foundation locked v1.0; domain/faction/NPC bibles and the MVP
implementation scaffold are draft v1.0. See
[`docs/00-production/sprint-plan.md`](docs/00-production/sprint-plan.md).
