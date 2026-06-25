# Realm of Nexus / VERDAX

A schema & validation scaffold for **VERDAX**, the persistent world-state engine
behind *Realm of Nexus* — an AI-driven tabletop RPG. This repository implements
the "Schema-Forge Implementation Pass" called for in the design bible (Sprint 1,
Chunks 1–4): it turns the locked design schemas into a real, type-safe,
runtime-validated TypeScript foundation.

> This is foundation, not gameplay. It defines the *state language* and the
> *validation boundary* every future system (turn engine, DB layer, admin tools)
> will speak. No narrative/LLM logic lives here yet.

## What's here

| Path | Bible source | Purpose |
|------|--------------|---------|
| `src/schemas/primitives.ts` | Chunk 3 §3–§4, Chunk 2 §6 | Shared scales (0–100 bands, deltas), `VisibilityLevel`, `RelationshipStatus`, domains |
| `src/schemas/domain-bible.ts` | **Chunk 2** | Static-lore template — the 24 schemas + composite `DomainBible` |
| `src/schemas/glossary.ts` | **Chunk 3** | Mutable campaign state — Campaign, Character, NPC, Faction, Rumor, Consequence chains, … |
| `src/schemas/causality.ts` | **Chunk 4** | Turn-time cause/effect analysis — action categories, witness/faction/NPC interpretation, soul-flow / Keeper / Void checks |
| `src/schemas/verdax.ts` | Chunk 3 §30–§32 | `VerdaxTurnResponse`, `VerdaxPromptContext`, locked `STATE_UPDATE_ORDER` |
| `src/validate.ts` | Chunk 3 §37 / Chunk 4 §38 | The validation boundary — never mutate state from unvalidated model output |
| `src/formulas.ts` | Chunk 4 §15, §20 | Alliance / betrayal / rumor-likelihood scoring helpers |
| `src/constants.ts` | Chunk 3 §35 | MVP vs. secondary tracking sets, lore file list |
| `domain-lore/` | Chunk 2 §36 | Static-lore JSON seeds (one per domain) + `_template.json` |
| `db/migrations/0001_init.sql` | Chunk 3 §35, §37 | Postgres MVP tables (hybrid columns + `jsonb`) |

### Design fidelity decisions

- **Zod is the single source of truth.** Every TypeScript type is `z.infer`red
  from a Zod schema, so the same definition gives compile-time types *and*
  the runtime validation the bible mandates (Chunk 3 §37). Static lore and
  mutable state are kept in separate modules (Chunk 2 §36 / Chunk 3 §2).
- **Two doc collisions were resolved** (noted inline in code):
  - `NPCState.fear` is defined twice in the bible (a descriptive string *and* a
    numeric stat). The string trait is renamed `core_fear`.
  - `MagicSystemState` / `DomainTrackingState` exist in both Chunk 2 (lore) and
    Chunk 3 (campaign instance). The lore form is `DomainMagicSystem`; the
    Chunk 3 forms are canonical for runtime state.

## Quickstart

```bash
npm install
npm run typecheck   # tsc, no emit
npm test            # node:test — validation, formulas, template conformance
npm run build       # emit dist/
npm run check-lore  # validate every domain-lore/*.json against DomainBible
```

### The validation boundary (the core rule)

```ts
import { validateVerdaxResponse, STATE_UPDATE_ORDER } from "realm-of-nexus";

const result = validateVerdaxResponse(rawModelJson); // step 1 of STATE_UPDATE_ORDER
if (!result.ok) {
  // reject / repair — never apply unvalidated output to the DB (Chunk 3 §37)
  console.error(result.issues);
} else {
  applyConsequences(result.data); // follow STATE_UPDATE_ORDER (Chunk 3 §32)
}
```

## Build order (from the bible)

1. **MVP tables** (`db/migrations/0001_init.sql`, Chunk 3 §35) — Campaign,
   Character, DomainTracking, Faction, NPC, NPCMemory, Relationship, Location,
   Quest, Rumor, PressureClock, ConsequenceChain, WorldEvent, TurnLog.
2. **Secondary systems** start as JSON, promote to tables when queried often
   (Chunk 3 §35 / §37): CampaignMetaphysics, SoulFlowWound, KeeperExploitEvent,
   VoidTemptationEvent, MagicSystem, Relic, Warfront.
3. **First domain bible** — Radiance, then a Verdance vertical slice
   (Chunk 4 §44 recommends Radiance first; the MVP targets Verdance).

## Domain bibles

- ✅ `domain-lore/radiance.json` — full Radiance bible (Chunk 4 §44's recommended
  first domain), validated against `DomainBible` via `npm run check-lore`.
- ✅ `domain-lore/verdance.json` — full Verdance bible (the MVP vertical-slice target).
- ✅ `domain-lore/tempest.json` — full Tempest bible.
- ⬜ Sanctuary, Abyss, Void layer.

## Not yet built (intentional next steps)

- Remaining domain bible content — schema is ready, prose is not.
- The VERDAX turn engine and the state-apply pipeline that walks `STATE_UPDATE_ORDER`.
- A DB client / repository layer over the migration.
