/**
 * Barrel export for all Realm of Nexus / VERDAX schemas.
 *
 * Layout mirrors the design bible:
 *   primitives    — shared scales, enums, vocabularies (Chunk 3 §3–§4)
 *   domain-bible  — static lore template (Chunk 2)
 *   glossary      — mutable campaign state (Chunk 3)
 *   causality     — turn-time cause/effect analysis (Chunk 4)
 *   verdax        — response contract, prompt context, update order (Chunk 3 §30–§32)
 */
export * from "./primitives.js";
export * from "./domain-bible.js";
export * from "./void-layer.js";
export * from "./glossary.js";
export * from "./causality.js";
export * from "./verdax.js";
