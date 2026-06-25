/**
 * Realm of Nexus / VERDAX — Agent barrel.
 *
 * The model-facing layer: the `VerdaxClient` interface (+ a fake for tests),
 * the prompt builders, and the `runTurn` orchestrator. A real Anthropic-backed
 * client implementing `VerdaxClient` is the only remaining piece that reaches an
 * external service.
 */
export * from "./client.js";
export * from "./prompt.js";
export * from "./run.js";
