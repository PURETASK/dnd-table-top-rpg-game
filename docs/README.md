# Realm of Nexus / VERDAX — Master Design Documentation

This directory is the **source of truth** for the Realm of Nexus world and the
VERDAX AI Dungeon Master system. Every coding agent, writing agent, designer,
and artist should work from these documents.

> **Design rule:** If a concept matters to gameplay, VERDAX must track it.
> If VERDAX tracks it, choices can change it. If choices can change it, the
> world can remember.

## How this is organized

The project is built in three layers — **Lore Canon**, **Simulation Systems**,
and **MVP Implementation** — produced in small, locked, versioned chunks.

### `00-production/` — How we build
- [`agent-council.md`](00-production/agent-council.md) — The VERDAX Agent Council: roles, owners, and the production workflow.
- [`sprint-plan.md`](00-production/sprint-plan.md) — Roadmap, sprints, and chunk status.

### `01-foundation/` — Sprint 1 (the spine everything else obeys)
- [`chunk-01-master-canon-foundation.md`](01-foundation/chunk-01-master-canon-foundation.md) — Metaphysical root: Architects, Nexus Stone, Keeper, Void, soul flow.
- [`chunk-02-domain-bible-template.md`](01-foundation/chunk-02-domain-bible-template.md) — Required structure for every domain.
- [`chunk-03-verdax-tracking-glossary.md`](01-foundation/chunk-03-verdax-tracking-glossary.md) — Every state variable VERDAX tracks.
- [`chunk-04-cause-effect-standards.md`](01-foundation/chunk-04-cause-effect-standards.md) — How choices ripple into 1st–5th order consequences.

### `02-domains/` — Layer 1 (one civilization at a time)
- [`radiance.md`](02-domains/radiance.md) — Sacred-fire military civilization.
- [`verdance.md`](02-domains/verdance.md) — Living-cycle restoration civilization (MVP domain).
- [`tempest.md`](02-domains/tempest.md) — Freedom / storm / dragon-bond civilization.
- [`sanctuary.md`](02-domains/sanctuary.md) — Protection / unity / law civilization.
- [`abyss.md`](02-domains/abyss.md) — Death-as-administration empire (coherently evil, Keeper-aligned).
- [`void-layer.md`](02-domains/void-layer.md) — Cross-domain corruption layer (enhancement, parasite, liar).

## Build order (recommended)

1. **Lock the foundation** (Chunks 1–4). ✅ done
2. **Write the domain bibles** using the template. ← in progress
3. **Faction bibles, NPC dossiers, simulation systems** (relationship, rumor, consequence, magic).
4. **VERDAX turn engine + database schema + UI specs.**
5. **MVP vertical slice:** *The Sap Beneath the Ash* (Verdance).

## Core design questions (asked of every addition)

We do **not** ask "what cool thing can happen next?" We ask:

- What does this belief system do under pressure?
- What faction benefits?
- What does the Keeper exploit?
- What does the Void lie about?
- What does VERDAX need to track?
- What changes 3 to 5 steps later?
