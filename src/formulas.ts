/**
 * Realm of Nexus / VERDAX — Causal formulas.
 *
 * Direct encodings of the scoring formulas the docs specify as guidance for
 * VERDAX. These are deterministic helpers; VERDAX may still narrate around them.
 * Source: Chunk 4 §15 (rumor likelihood), §20 (alliance & betrayal).
 */
import type { RelationshipStatus } from "./schemas/primitives.js";

/* §20 Alliance Formation ------------------------------------------- */
export interface AllianceInputs {
  shared_threat: number;
  shared_interest: number;
  dependency: number;
  debt: number;
  respect: number;
  external_pressure: number;
  ideological_distance: number;
  resentment: number;
  recent_betrayal: number;
  sacred_violation: number;
}

export function allianceScore(i: AllianceInputs): number {
  return (
    i.shared_threat +
    i.shared_interest +
    i.dependency +
    i.debt +
    i.respect +
    i.external_pressure -
    i.ideological_distance -
    i.resentment -
    i.recent_betrayal -
    i.sacred_violation
  );
}

/** Map an alliance score to a relationship band (Chunk 4 §20 "Alliance Results"). */
export function allianceBand(
  score: number
): Extract<
  RelationshipStatus,
  "trusted_ally" | "conditional_ally" | "uneasy_partner" | "tolerable_rival" | "declared_enemy"
> {
  if (score >= 80) return "trusted_ally";
  if (score >= 55) return "conditional_ally";
  if (score >= 35) return "uneasy_partner";
  if (score >= 15) return "tolerable_rival";
  return "declared_enemy";
}

/* §20 Betrayal Risk ------------------------------------------------ */
export interface BetrayalInputs {
  sacred_violation: number;
  public_humiliation: number;
  resource_theft: number;
  leverage_against_npc: number;
  faction_pressure: number;
  fear: number;
  resentment: number;
  rumor_intensity: number;
  trust: number;
  debt: number;
  affection: number;
  shared_threat: number;
}

export function betrayalRisk(i: BetrayalInputs): number {
  return (
    i.sacred_violation +
    i.public_humiliation +
    i.resource_theft +
    i.leverage_against_npc +
    i.faction_pressure +
    i.fear +
    i.resentment +
    i.rumor_intensity -
    i.trust -
    i.debt -
    i.affection -
    i.shared_threat
  );
}

/* §15 Rumor Likelihood --------------------------------------------- */
export interface RumorLikelihoodInputs {
  public_visibility_score: number;
  emotional_payload_score: number;
  witness_bias_score: number;
  faction_benefit_score: number;
  taboo_score: number;
  existing_reputation_score: number;
  suppression_score: number;
}

export function rumorLikelihood(i: RumorLikelihoodInputs): number {
  return (
    i.public_visibility_score +
    i.emotional_payload_score +
    i.witness_bias_score +
    i.faction_benefit_score +
    i.taboo_score +
    i.existing_reputation_score -
    i.suppression_score
  );
}
