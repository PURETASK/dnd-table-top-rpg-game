/**
 * Validate every `/domain-lore/*.json` seed file against the DomainBible schema.
 * Run: `npm run check-lore`
 *
 * Files prefixed with `_` (e.g. `_template.json`) are skipped — they are
 * authoring skeletons, not complete bibles, and are expected to be incomplete.
 */
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { validateDomainBible } from "../src/validate.js";

const LORE_DIR = join(process.cwd(), "domain-lore");

let failures = 0;
let checked = 0;

let files: string[] = [];
try {
  files = readdirSync(LORE_DIR).filter(
    (f) => f.endsWith(".json") && !f.startsWith("_")
  );
} catch {
  console.log(`No domain-lore directory at ${LORE_DIR}; nothing to check.`);
  process.exit(0);
}

if (files.length === 0) {
  console.log("No domain bibles to validate yet (only skeletons present).");
  process.exit(0);
}

for (const file of files) {
  checked++;
  const raw = JSON.parse(readFileSync(join(LORE_DIR, file), "utf8"));
  const result = validateDomainBible(raw);
  if (result.ok) {
    console.log(`✓ ${file}`);
  } else {
    failures++;
    console.error(`✗ ${file}`);
    for (const issue of result.issues) console.error(`    ${issue}`);
  }
}

console.log(`\n${checked - failures}/${checked} domain bibles valid.`);
process.exit(failures > 0 ? 1 : 0);
