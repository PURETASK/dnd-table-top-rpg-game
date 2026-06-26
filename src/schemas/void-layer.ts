/**
 * Realm of Nexus / VERDAX — Void Layer schema (STATIC LORE)
 *
 * The Void is NOT a domain civilization. Per Chunk 3 §2 static canon it is
 * "enhancement, parasite, and liar" — a layer that infects the domains rather
 * than a society with government, economy, or military. Force-fitting it into
 * `DomainBible` would be dishonest, so it gets its own focused schema.
 *
 * Source: Chunk 3 §2/§6 (Void parasitism), Chunk 2 §11 (Void Temptation Pattern),
 * Chunk 4 §18 (Void Parasitism Check), and every domain bible's `void_lie`.
 */
import { z } from "zod";
import { DomainOrVoid, Stat } from "./primitives.js";

const str = z.string();
const strList = z.array(z.string());

/** A cost the Void always extracts — it never gives clean power (Chunk 2 §11). */
export const VoidCost = z.object({
  name: str,
  description: str,
  immediate_benefit: str,
  deferred_cost: str,
  stage_it_surfaces: z.union([z.literal(1), z.literal(2), z.literal(3)]),
});
export type VoidCost = z.infer<typeof VoidCost>;

/** A way the Void shows up in the world (Voidglass, echoes, false paths…). */
export const VoidManifestation = z.object({
  name: str,
  description: str,
  how_it_appears: str,
  the_catch: str,
  danger: Stat,
});
export type VoidManifestation = z.infer<typeof VoidManifestation>;

/** The Void's domain-specific lie, drawn from each domain bible's void_lie. */
export const VoidDomainTemptation = z.object({
  domain: DomainOrVoid,
  temptation_phrase: str,
  immediate_benefit: str,
  hidden_cost: str,
  faction_most_likely_to_accept: strList,
  npc_archetypes_most_likely_to_accept: strList,
});
export type VoidDomainTemptation = z.infer<typeof VoidDomainTemptation>;

/** One stage of Void corruption with its signs and reversibility. */
export const VoidStage = z.object({
  stage: z.union([z.literal(1), z.literal(2), z.literal(3)]),
  name: str,
  description: str,
  signs: strList,
  reversibility: str,
});
export type VoidStage = z.infer<typeof VoidStage>;

/** Void-specific cause/effect chain (1st–5th order). */
export const VoidCauseEffect = z.object({
  root_event: str,
  immediate_benefit: str,
  first_order: str,
  second_order: str,
  third_order: str,
  fourth_order: str,
  fifth_order: str,
  keeper_gain: str,
  player_intervention_options: strList,
});
export type VoidCauseEffect = z.infer<typeof VoidCauseEffect>;

/**
 * The full Void Layer document (`domain-lore/void-layer.json`).
 */
export const VoidLayer = z.object({
  schema_version: z.literal("1.0"),
  layer: z.literal("Void"),
  status: z.enum(["draft", "locked"]).default("draft"),

  nature: z.object({
    what_it_is: strList,
    what_it_is_not: strList,
    core_lie: str,
    prime_directive: str,
  }),

  hard_canon: z.object({
    canon_facts: strList,
    cannot_contradict: strList,
  }),

  metaphysical_role: z.object({
    relationship_to_keeper: str,
    how_it_serves_the_keeper: str,
    how_it_differs_from_the_keeper: str,
    can_it_act_independently: str,
    relationship_to_nexus_stone: str,
    relationship_to_soul_flow: str,
    how_it_enters_reality: str,
    what_it_ultimately_wants: str,
  }),

  /** Enhancement / parasite / liar — the three faces of canon (Chunk 3 §2). */
  three_faces: z
    .array(
      z.object({
        face: z.enum(["enhancement", "parasite", "liar"]),
        description: str,
        how_it_appears: str,
        the_catch: str,
      })
    )
    .length(3, "The Void has exactly three faces: enhancement, parasite, liar."),

  temptation_mechanics: z.object({
    always_feels_useful_first: str,
    never_clean_power: str,
    required_costs: strList,
    escalation_logic: str,
  }),

  costs: z.array(VoidCost).min(1),
  manifestations: z.array(VoidManifestation).min(1),

  corruption_stages: z
    .array(VoidStage)
    .length(3, "Void corruption is modeled in three stages (Chunk 2 §11)."),

  domain_specific_temptations: z
    .array(VoidDomainTemptation)
    .min(5, "One temptation per playable domain (Chunk 2 §11)."),

  detection_and_resistance: z.object({
    warning_signs: strList,
    resistance_methods: strList,
    who_resists_best: strList,
    healing_methods: strList,
    point_of_no_return: str,
  }),

  /** VERDAX state the Void touches (Chunk 3 §6/§7, §26). */
  verdax_tracking_fields: z.object({
    drives_global_void_parasitism: str,
    drives_character_void_resonance: str,
    drives_identity_and_memory_damage: str,
    spawns_void_temptation_events: str,
  }),

  cause_effect_examples: z
    .array(VoidCauseEffect)
    .min(3, "At least three Void cause/effect examples."),

  open_questions: strList,
  locked_decisions: strList,
});
export type VoidLayer = z.infer<typeof VoidLayer>;
