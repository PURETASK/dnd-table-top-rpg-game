/**
 * Realm of Nexus / VERDAX — State store.
 *
 * A minimal repository abstraction over the mutable campaign state (Chunk 3).
 * `InMemoryStateStore` is the reference implementation used by tests and local
 * runs; a Postgres-backed store over `db/migrations/0001_init.sql` can implement
 * the same `StateStore` interface later without touching the turn engine.
 *
 * Keys: most entities are keyed by their own `id`. `domain_tracking` is keyed by
 * domain name and `campaign_metaphysics` by `campaign_id`, matching the table
 * primary keys in the migration. A store instance is conceptually one campaign.
 */

export type EntityKind =
  | "campaign"
  | "campaign_metaphysics"
  | "character"
  | "domain_tracking"
  | "faction"
  | "npc"
  | "npc_memory"
  | "relationship"
  | "location"
  | "quest"
  | "rumor"
  | "pressure_clock"
  | "warfront"
  | "magic_system"
  | "relic"
  | "soul_flow_wound"
  | "consequence_chain"
  | "world_event"
  | "turn_log";

export type Record_ = Record<string, unknown>;

export interface StateStore {
  get<T extends Record_ = Record_>(kind: EntityKind, id: string): T | undefined;
  has(kind: EntityKind, id: string): boolean;
  put(kind: EntityKind, id: string, record: Record_): void;
  list<T extends Record_ = Record_>(kind: EntityKind): T[];
}

export class InMemoryStateStore implements StateStore {
  private readonly data = new Map<EntityKind, Map<string, Record_>>();

  private bucket(kind: EntityKind): Map<string, Record_> {
    let b = this.data.get(kind);
    if (!b) {
      b = new Map();
      this.data.set(kind, b);
    }
    return b;
  }

  get<T extends Record_ = Record_>(kind: EntityKind, id: string): T | undefined {
    return this.bucket(kind).get(id) as T | undefined;
  }

  has(kind: EntityKind, id: string): boolean {
    return this.bucket(kind).has(id);
  }

  put(kind: EntityKind, id: string, record: Record_): void {
    this.bucket(kind).set(id, record);
  }

  list<T extends Record_ = Record_>(kind: EntityKind): T[] {
    return Array.from(this.bucket(kind).values()) as T[];
  }
}
