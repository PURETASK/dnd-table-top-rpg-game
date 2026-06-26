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

export interface ApplyResult {
  /** Audit of fields that actually changed. */
  applied: AppliedChange[];
  /** Field paths whose op failed validation and were skipped (not applied). */
  malformed: string[];
}

/**
 * Apply a map of field → change op to a target record in place.
 *
 * Each op is validated individually (`ChangeOp`): valid ops are applied, and a
 * malformed op (e.g. `{ invalid_op: 5 }`) is skipped and reported in `malformed`
 * — it does NOT discard the sibling ops or the whole turn. This keeps a single
 * bad delta from corrupting state or throwing away an otherwise-valid response,
 * while still surfacing the problem to the caller as a warning.
 */
export function applyFieldChanges(
  target: Record<string, unknown>,
  changes: Record<string, unknown>
): ApplyResult {
  const applied: AppliedChange[] = [];
  const malformed: string[] = [];
  for (const [path, rawOp] of Object.entries(changes)) {
    const parsed = ChangeOp.safeParse(rawOp);
    if (!parsed.success) {
      malformed.push(path);
      continue;
    }
    const from = getPath(target, path);
    const to = resolveOp(from, parsed.data);
    setPath(target, path, to);
    applied.push({ path, from, to });
  }
  return { applied, malformed };
}

/** True when a value is a record (object) usable as a field-change map. */
export function isChangeRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

/** True when a bucket is a well-formed map of field → change op. */
export function isFieldChangeMap(value: unknown): value is FieldChangeMap {
  return FieldChangeMap.safeParse(value).success;
}
