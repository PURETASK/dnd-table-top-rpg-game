/**
 * Realm of Nexus / VERDAX — Validation boundary.
 *
 * Implements the locked rule from Chunk 3 §37 / Chunk 4 §38:
 *   "Every VERDAX output must be validated before applying state changes.
 *    Never let raw model output directly mutate the database without validation."
 *
 * Use {@link validateVerdaxResponse} on the raw model JSON at the top of the
 * state-update pipeline (the first step of STATE_UPDATE_ORDER). Use
 * {@link validateDomainBible} when loading `/domain-lore/*.json` seed files.
 */
import { z } from "zod";
import { VerdaxTurnResponse } from "./schemas/verdax.js";
import { DomainBible } from "./schemas/domain-bible.js";

export type ValidationResult<T> =
  | { ok: true; data: T }
  | { ok: false; error: z.ZodError; issues: string[] };

function toResult<T>(parsed: z.SafeParseReturnType<unknown, T>): ValidationResult<T> {
  if (parsed.success) return { ok: true, data: parsed.data };
  return {
    ok: false,
    error: parsed.error,
    issues: parsed.error.issues.map(
      (i) => `${i.path.join(".") || "(root)"}: ${i.message}`
    ),
  };
}

/** Validate raw VERDAX turn output. Returns a typed result; never throws. */
export function validateVerdaxResponse(
  raw: unknown
): ValidationResult<VerdaxTurnResponse> {
  return toResult(VerdaxTurnResponse.safeParse(raw));
}

/** Validate a domain-lore seed document loaded from JSON. */
export function validateDomainBible(raw: unknown): ValidationResult<DomainBible> {
  return toResult(DomainBible.safeParse(raw));
}

/** Throwing variant of {@link validateVerdaxResponse} for pipeline use. */
export function parseVerdaxResponse(raw: unknown): VerdaxTurnResponse {
  return VerdaxTurnResponse.parse(raw);
}
