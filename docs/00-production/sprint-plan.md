# Realm of Nexus / VERDAX — Sprint Plan & Roadmap v1.0

## Three layers

- **Layer 1 — Lore Canon:** the world (canon foundation, domain bibles, faction bibles, NPC cast).
- **Layer 2 — Simulation Systems:** relationship engine, rumor engine, consequence chains, war/economy/power, magic & costs.
- **Layer 3 — MVP Implementation:** VERDAX turn engine, database schema, UI/UX pages, Verdance vertical slice.

## Chunk status

| Chunk | Title | Lead | QA | Status |
|---|---|---|---|---|
| 1 | Master Canon Foundation | ARCHITECT-SCRIBE | CANON-WARDEN | ✅ Locked v1.0 |
| 2 | Domain Bible Template | DOMAIN-ARCHIVIST | CANON-WARDEN | ✅ Locked v1.0 |
| 3 | VERDAX Tracking Glossary | TURN-ENGINEER | SCHEMA-FORGE | ✅ Locked v1.0 |
| 4 | Cause/Effect Standards | CAUSALITY-SMITH | CANON-WARDEN | ✅ Locked v1.0 |
| 2A | Radiance Domain Bible | DOMAIN-ARCHIVIST | CANON-WARDEN | 🟡 Draft v1.0 |
| 2B | Verdance Domain Bible | DOMAIN-ARCHIVIST | CANON-WARDEN | 🟡 Draft v1.0 |
| 2C | Tempest Domain Bible | DOMAIN-ARCHIVIST | CANON-WARDEN | 🟡 Draft v1.0 |
| 2D | Sanctuary Domain Bible | DOMAIN-ARCHIVIST | CANON-WARDEN | 🟡 Draft v1.0 |
| 2E | Abyss Domain Bible | DOMAIN-ARCHIVIST | CANON-WARDEN | 🟡 Draft v1.0 |
| 2F | Void Corruption Layer | DOMAIN-ARCHIVIST | CANON-WARDEN | 🟡 Draft v1.0 |

## Sprint 2 — Verdance MVP (depth-first) — 🟡 in progress

Driving toward a playable *The Sap Beneath the Ash* vertical slice.

| Item | Owner | Status |
|---|---|---|
| Verdance faction bibles ×6 (Heartmoot, Rootwardens, Sap Commons, Hollow Pact, Seed Guild, Greenwake Communion) | FACTION-WEAVER | ✅ Draft v1.0 (`docs/03-factions/verdance/`) |
| Thornveil NPC dossiers ×10 (Maera, Auralis, Thalen, Othren, Sylune, Brom, Venn, Ilyra, Rook, Nymara) | LIVING-CASTWRIGHT | ✅ Draft v1.0 (`docs/04-npcs/verdance/`) |
| MVP database schema (Prisma) | SCHEMA-FORGE | ✅ Draft v1.0 (`docs/05-systems/database-schema.md`) |
| VERDAX turn engine (`POST /api/verdax/turn`) | TURN-ENGINEER | ✅ Draft v1.0 (`docs/05-systems/verdax-turn-engine.md`) |
| Verdance seed data (JSON) from the bibles | SCHEMA-FORGE | ⬜ next |
| VERDAX system prompt (assembled) + Zod response schemas | TURN-ENGINEER | ⬜ next |
| World Genesis prompt (region/scene generator) | TURN-ENGINEER | ⬜ next |
| UI specs (character creation, dashboard, chat, consequence panel, War Room) | INTERFACE-SEER | ⬜ next |
| Code scaffolding (Next.js app + Prisma + turn route) | SCHEMA-FORGE | ⬜ next |

## Later sprints (not yet started)

- **Sprint 3 — Other-domain factions & wider NPC cast:** faction bibles for Radiance/Tempest/Sanctuary/Abyss; formalize the remaining major NPCs.
- **Sprint 4 — Simulation Systems:** standalone relationship engine, rumor engine, consequence chain engine, magic & cost engine, war/economy engine docs.
- **Sprint 5 — Build:** scaffold the app, implement the turn route, wire seed data, ship the vertical slice.

## MVP vertical slice — *The Sap Beneath the Ash* (Verdance)

A corrupted rootwell beneath Thornveil Refuge begins speaking names.

- **Rootwardens** want containment.
- **Sap Commons** want restoration.
- **Hollow Pact** wants weaponization.
- **Seed Guild** wants stability.
- **Abyss** wants soul-flow disruption.
- **Void** wants the player to believe a shortcut is mercy.

**Core cast:** Elder Maera Rootveil, Thalen Mossguard, Sylune Amberroot, Rook
Thornlittle, Nymara Hollowbloom, Auralis Greenwake, Venn Briarhook, Brom
Valefern, Ilyra Thornsong, Othren Deepbark.

**Highest-priority build pieces:** the database tables (minimum tracking set) and
the `POST /api/verdax/turn` endpoint — the heart of the game.
