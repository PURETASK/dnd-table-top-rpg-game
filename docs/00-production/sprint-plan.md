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

## Next sprints (not yet started)

- **Sprint 2 — Factions:** faction bible for every domain (start with Verdance for MVP).
- **Sprint 3 — NPC Cast:** formalize the 50 major NPCs into active-agent dossiers.
- **Sprint 4 — Simulation Systems:** relationship engine, rumor engine, consequence chain engine.
- **Sprint 5 — Implementation:** Prisma schema, VERDAX system prompt, World Genesis prompt, turn response schema, UI specs, coding-agent build prompt.

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
