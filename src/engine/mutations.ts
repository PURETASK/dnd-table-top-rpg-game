/**
 * Realm of Nexus / VERDAX — Mutation primitives.
 *
 * Bridges the loose `mechanical_consequences` buckets of a VERDAX response
 * (Chunk 3 §30) onto typed state, applying the doc's conventions:
 *   - "All major numeric states use 0–100" (Chunk 3 §3), so a bare number is a
 *     DELTA that is clamped to [0,100] after applying.
 *   - Non-0–100 fields (hp, gold, xp, warfront balance) use explicit ops.
 *
 * Change ops:
 *   42            → clamped delta (+42, result clamped to 0..100)
 *   {delta: 42}   → clamped delta
 *   {deltaRaw: 5} → unclamped delta (for hp/gold/xp/balance)
 *   {set: value}  → set the field directly (any value)
 *
 * Field keys are dotted paths, e.g. "morale", "stats.strength",
 * "true_virtues_json.Sacrifice".
 */
import { z } from "zod";

export const ChangeOp = z.union([
  z.number(),
  z.object({ delta: z.number() }).strict(),
  z.object({ deltaRaw: z.number() }).strict(),
  z.object({ set: z.unknown() }).strict(),
]);
export type ChangeOp = z.infer<typeof ChangeOp>;

/** A map of dotted field path → change op for a single entity. */
export const FieldChangeMap = z.record(z.string(), ChangeOp);
export type FieldChangeMap = z.infer<typeof FieldChangeMap>;

export interface AppliedChange {
  path: string;
  from: unknown;
  to: unknown;
}

export function clamp(n: number, lo = 0, hi = 100): number {
  return Math.max(lo, Math.min(hi, n));
}

function getPath(obj: Record<string, unknown>, path: string): unknown {
  return path.split(".").reduce<unknown>((acc, key) => {
    if (acc && typeof acc === "object") {
      return (acc as Record<string, unknown>)[key];
    }
    return undefined;
  }, obj);
}

function setPath(obj: Record<string, unknown>, path: string, value: unknown): void {
  const keys = path.split(".");
  let cursor = obj;
  for (let i = 0; i < keys.length - 1; i++) {
    const key = keys[i]!;
    const next = cursor[key];
    if (!next || typeof next !== "object") cursor[key] = {};
    cursor = cursor[key] as Record<string, unknown>;
  }
  cursor[keys[keys.length - 1]!] = value;
}

/** Resolve a single change op against the current value. */
export function resolveOp(current: unknown, op: ChangeOp): unknown {
  if (typeof op === "number") {
    return clamp((typeof current === "number" ? current : 0) + op);
  }
  if ("delta" in op) {
    return clamp((typeof current === "number" ? current : 0) + op.delta);
  }
  if ("deltaRaw" in op) {
    return (typeof current === "number" ? current : 0) + op.deltaRaw;
  }
  return op.set;
}

/**
 * Apply a field-change map to a target record in place.
 * Returns the audit of what actually changed.
 */
export function applyFieldChanges(
  target: Record<string, unknown>,
  changes: FieldChangeMap
): AppliedChange[] {
  const applied: AppliedChange[] = [];
  for (const [path, op] of Object.entries(changes)) {
    const from = getPath(target, path);
    const to = resolveOp(from, op);
    setPath(target, path, to);
    applied.push({ path, from, to });
  }
  return applied;
}

/** True when a bucket is an id-keyed map of field-change maps (vs. a flat map). */
export function isFieldChangeMap(value: unknown): value is FieldChangeMap {
  return FieldChangeMap.safeParse(value).success;
}
