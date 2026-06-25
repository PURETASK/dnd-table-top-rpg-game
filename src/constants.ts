/**
 * Realm of Nexus / VERDAX — Implementation constants.
 * Source: Chunk 3 §35 (Minimum MVP Tracking Set), §37 (storage strategy).
 */

/**
 * MVP tracking set — build these tables first (Chunk 3 §35).
 * Mirrored by `db/migrations/0001_init.sql`.
 */
export const MVP_TRACKING_SET = [
  "CampaignState",
  "CharacterState",
  "DomainTrackingState",
  "FactionState",
  "NPCState",
  "NPCMemoryState",
  "RelationshipState",
  "LocationState",
  "QuestState",
  "RumorState",
  "PressureClockState",
  "ConsequenceChainState",
  "WorldEvent",
  "TurnLog",
] as const;
export type MvpEntity = (typeof MVP_TRACKING_SET)[number];

/**
 * Secondary systems — start as JSON, promote to tables when queried often
 * (Chunk 3 §35 / §37).
 */
export const SECONDARY_TRACKING_SET = [
  "CampaignMetaphysics",
  "SoulFlowWoundState",
  "KeeperExploitEvent",
  "VoidTemptationEvent",
  "MagicSystemState",
  "RelicState",
  "WarFrontState",
] as const;
export type SecondaryEntity = (typeof SECONDARY_TRACKING_SET)[number];

/** Static-lore seed files, one per domain plus the Void layer (Chunk 2 §36). */
export const DOMAIN_LORE_FILES = [
  "domain-lore/radiance.json",
  "domain-lore/verdance.json",
  "domain-lore/tempest.json",
  "domain-lore/sanctuary.json",
  "domain-lore/abyss.json",
  "domain-lore/void-layer.json",
] as const;
