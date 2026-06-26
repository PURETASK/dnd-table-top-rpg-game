/**
 * Realm of Nexus / VERDAX — Primitives
 *
 * Shared scales, enums, and vocabularies used across every schema.
 * Source: Chunk 3 (VERDAX Tracking Glossary v1.0) §3–§4, Chunk 2 §6.
 *
 * Zod is the single source of truth; TypeScript types are derived via `z.infer`.
 * Per Chunk 3 §37 / Chunk 4 §38, raw model output must be validated against
 * these schemas before any state mutation is applied.
 */
import { z } from "zod";

/* ------------------------------------------------------------------ *
 * Numeric scales (Chunk 3 §3)
 * ------------------------------------------------------------------ */

/**
 * Universal 0–100 state value. Bands (Chunk 3 §3 "Universal Scale"):
 *   0–10  absent / dead / collapsed
 *   11–20 critical
 *   21–40 weak / unstable / dangerous
 *   41–60 contested / strained / volatile
 *   61–80 functional / strong
 *   81–95 dominant / deeply stable
 *   96–100 mythic / extreme / near-absolute
 */
export const Stat = z.number().min(0).max(100);
export type Stat = z.infer<typeof Stat>;

/** A signed change applied to a {@link Stat}. See Chunk 3 §3 "Delta Scale". */
export const Delta = z.number();
export type Delta = z.infer<typeof Delta>;

/** Human-readable band for a 0–100 value (Chunk 3 §3). */
export type ScaleBand =
  | "absent"
  | "critical"
  | "weak"
  | "contested"
  | "functional"
  | "dominant"
  | "mythic";

export function scaleBand(value: number): ScaleBand {
  if (value <= 10) return "absent";
  if (value <= 20) return "critical";
  if (value <= 40) return "weak";
  if (value <= 60) return "contested";
  if (value <= 80) return "functional";
  if (value <= 95) return "dominant";
  return "mythic";
}

/** Magnitude band for a delta (Chunk 3 §3 "Delta Scale"). */
export type DeltaBand =
  | "subtle"
  | "minor"
  | "meaningful"
  | "major"
  | "severe"
  | "mythic";

export function deltaBand(delta: number): DeltaBand {
  const m = Math.abs(delta);
  if (m <= 1) return "subtle";
  if (m <= 3) return "minor";
  if (m <= 6) return "meaningful";
  if (m <= 10) return "major";
  if (m <= 20) return "severe";
  return "mythic";
}

/**
 * Warfront balance scale (Chunk 3 §19): -100 enemy total advantage … 0 contested
 * … +100 complete allied/player-aligned advantage.
 */
export const Balance = z.number().min(-100).max(100);
export type Balance = z.infer<typeof Balance>;

/* ------------------------------------------------------------------ *
 * Visibility (Chunk 3 §4)
 * ------------------------------------------------------------------ */

export const VisibilityLevel = z.enum([
  "hidden",
  "hinted",
  "rumored",
  "partial",
  "confirmed",
  "mythic_truth",
]);
export type VisibilityLevel = z.infer<typeof VisibilityLevel>;

/* ------------------------------------------------------------------ *
 * Domains (Chunk 1 canon; tracked set per Chunk 3 §9)
 * ------------------------------------------------------------------ */

/** The five playable domains tracked by DomainTrackingState (Chunk 3 §9). */
export const Domain = z.enum([
  "Radiance",
  "Verdance",
  "Tempest",
  "Sanctuary",
  "Abyss",
]);
export type Domain = z.infer<typeof Domain>;

/** Domains plus the Void layer, used by lore documents (Chunk 2 §2). */
export const DomainOrVoid = z.enum([
  "Radiance",
  "Verdance",
  "Tempest",
  "Sanctuary",
  "Abyss",
  "Void",
]);
export type DomainOrVoid = z.infer<typeof DomainOrVoid>;

/* ------------------------------------------------------------------ *
 * Relationships (Chunk 3 §14)
 * ------------------------------------------------------------------ */

/** Ordered from most allied to most hostile (Chunk 3 §14). */
export const RelationshipStatus = z.enum([
  "devoted_ally",
  "trusted_ally",
  "conditional_ally",
  "uneasy_partner",
  "tolerable_rival",
  "neutral",
  "suspicious_contact",
  "active_rival",
  "declared_enemy",
  "blood_enemy",
  "existential_enemy",
]);
export type RelationshipStatus = z.infer<typeof RelationshipStatus>;

/** Actor kinds that can hold relationships / be referenced (Chunk 3 §14). */
export const ActorType = z.enum([
  "player",
  "npc",
  "faction",
  "domain",
  "location",
]);
export type ActorType = z.infer<typeof ActorType>;

/* ------------------------------------------------------------------ *
 * Consequence depth & timing (Chunk 4 §4–§6)
 * ------------------------------------------------------------------ */

/** 1 immediate … 5 mythic/metaphysical (Chunk 4 §4). */
export const ConsequenceDepth = z.union([
  z.literal(1),
  z.literal(2),
  z.literal(3),
  z.literal(4),
  z.literal(5),
]);
export type ConsequenceDepth = z.infer<typeof ConsequenceDepth>;

export const ConsequenceTiming = z.enum([
  "immediate",
  "scene",
  "session",
  "future_session",
  "campaign",
]);
export type ConsequenceTiming = z.infer<typeof ConsequenceTiming>;

/** Public exposure of an action (Chunk 3 §29 / Chunk 4 §7). */
export const PublicVisibility = z.enum([
  "none",
  "private",
  "small_group",
  "public",
  "mythic",
]);
export type PublicVisibility = z.infer<typeof PublicVisibility>;

/* ------------------------------------------------------------------ *
 * Magic access (Chunk 2 §12 / Chunk 3 §20)
 * ------------------------------------------------------------------ */

export const TrainingAccess = z.enum([
  "elite",
  "regulated",
  "common",
  "restricted",
  "forbidden",
  "black_market",
]);
export type TrainingAccess = z.infer<typeof TrainingAccess>;

/* ------------------------------------------------------------------ *
 * Shared identifier helpers
 * ------------------------------------------------------------------ */

/** A non-empty opaque id (campaign-scoped). */
export const Id = z.string().min(1);
export type Id = z.infer<typeof Id>;

export const IdList = z.array(Id);
