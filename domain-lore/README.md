# Domain Lore (static canon)

One JSON file per domain (plus the Void layer), each conforming to the
`DomainBible` schema (`src/schemas/domain-bible.ts`, from **Chunk 2 — Domain
Bible Template v1.0**). These are **static lore**: canonical and mostly
immutable, kept separate from mutable campaign state (Chunk 2 §36, Chunk 3 §2).

## Files (Chunk 2 §36)

| File | Status |
|------|--------|
| `_template.json` | authoring skeleton (not validated) |
| `radiance.json` | ✅ drafted (validates against `DomainBible`) |
| `verdance.json` | ✅ drafted — MVP vertical-slice target |
| `tempest.json` | ✅ drafted (validates against `DomainBible`) |
| `sanctuary.json` | ✅ drafted (validates against `DomainBible`) |
| `abyss.json` | _todo_ |
| `void-layer.json` | _todo_ |

## Authoring a bible

1. Copy `_template.json` to `<domain>.json`.
2. Fill every section. The schema enforces the template's minimums:
   - ≥ 5 factions in the faction index (§22)
   - ≥ 10 IF/THEN/BECAUSE relationship rules (§27)
   - ≥ 5 cause/effect examples reaching 5th-order consequences (§31)
3. Validate: `npm run check-lore`.

Files beginning with `_` are skipped by the validator.

## How these are used (Chunk 2 §36)

Full bibles drive **campaign generation, deep context retrieval, and admin
tools** — not every VERDAX turn. During normal play VERDAX receives only the
relevant slice of *mutable* state (see `VerdaxPromptContext`, Chunk 3 §31).
