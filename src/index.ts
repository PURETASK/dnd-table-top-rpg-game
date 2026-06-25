/**
 * Realm of Nexus / VERDAX — public entry point.
 *
 * A schema & validation scaffold for the AI-driven world-state engine described
 * in the design bible (Sprint 1, Chunks 1–4). Zod schemas are the single source
 * of truth; TypeScript types are derived from them.
 */
export * from "./schemas/index.js";
export * from "./validate.js";
export * from "./formulas.js";
export * from "./constants.js";
export * from "./engine/index.js";
export * from "./agent/index.js";
