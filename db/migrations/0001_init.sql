-- Realm of Nexus / VERDAX — MVP schema (migration 0001)
--
-- Source: Chunk 3 §35 (Minimum MVP Tracking Set) and §37 (hybrid storage:
-- full tables for high-activity objects, JSONB for flexible complex state).
--
-- Pattern: each table exposes the columns VERDAX queries/joins on (ids, foreign
-- keys, status, key scalars) plus a `data jsonb` column holding the full,
-- already-validated entity (validated against the Zod schema before insert,
-- per §37 / Chunk 4 §38). Promote hot JSONB fields into real columns later.

create extension if not exists "pgcrypto";

-- §5 Campaign --------------------------------------------------------------
create table campaign (
  id              text primary key,
  title           text not null,
  mode            text not null,
  campaign_phase  text not null,
  difficulty      text not null,
  starting_domain text not null,
  data            jsonb not null,
  created_at      timestamptz not null default now(),
  updated_at      timestamptz not null default now()
);

-- §7 Character -------------------------------------------------------------
create table character (
  id            text primary key,
  campaign_id   text not null references campaign(id) on delete cascade,
  name          text not null,
  origin_domain text not null,
  level         integer not null default 1,
  data          jsonb not null,
  created_at    timestamptz not null default now(),
  updated_at    timestamptz not null default now()
);
create index character_campaign_idx on character(campaign_id);

-- §9 Domain Tracking State -------------------------------------------------
create table domain_tracking_state (
  campaign_id text not null references campaign(id) on delete cascade,
  domain      text not null,
  data        jsonb not null,
  updated_at  timestamptz not null default now(),
  primary key (campaign_id, domain)
);

-- §11 Faction --------------------------------------------------------------
create table faction (
  id          text primary key,
  campaign_id text not null references campaign(id) on delete cascade,
  name        text not null,
  domain      text not null,
  data        jsonb not null,
  updated_at  timestamptz not null default now()
);
create index faction_campaign_idx on faction(campaign_id);

-- §12 NPC ------------------------------------------------------------------
create table npc (
  id          text primary key,
  campaign_id text not null references campaign(id) on delete cascade,
  name        text not null,
  domain      text not null,
  location_id text,
  status      text not null,
  data        jsonb not null,
  updated_at  timestamptz not null default now()
);
create index npc_campaign_idx on npc(campaign_id);
create index npc_location_idx on npc(location_id);

-- §13 NPC Memory -----------------------------------------------------------
create table npc_memory (
  id              text primary key,
  campaign_id     text not null references campaign(id) on delete cascade,
  npc_id          text not null references npc(id) on delete cascade,
  source_event_id text not null,
  data            jsonb not null,
  created_at      timestamptz not null default now()
);
create index npc_memory_npc_idx on npc_memory(npc_id);

-- §21 Location -------------------------------------------------------------
create table location (
  id          text primary key,
  campaign_id text not null references campaign(id) on delete cascade,
  name        text not null,
  domain      text not null,
  data        jsonb not null,
  updated_at  timestamptz not null default now()
);
create index location_campaign_idx on location(campaign_id);

-- §22 Quest ----------------------------------------------------------------
create table quest (
  id          text primary key,
  campaign_id text not null references campaign(id) on delete cascade,
  title       text not null,
  status      text not null,
  domain      text not null,
  data        jsonb not null,
  updated_at  timestamptz not null default now()
);
create index quest_campaign_idx on quest(campaign_id);
create index quest_status_idx on quest(campaign_id, status);

-- §16 Rumor ----------------------------------------------------------------
create table rumor (
  id          text primary key,
  campaign_id text not null references campaign(id) on delete cascade,
  title       text not null,
  status      text not null,
  data        jsonb not null,
  updated_at  timestamptz not null default now()
);
create index rumor_campaign_idx on rumor(campaign_id);
create index rumor_status_idx on rumor(campaign_id, status);

-- §18 Pressure Clock -------------------------------------------------------
create table pressure_clock (
  id          text primary key,
  campaign_id text not null references campaign(id) on delete cascade,
  name        text not null,
  clock_type  text not null,
  is_active   boolean not null default true,
  data        jsonb not null,
  updated_at  timestamptz not null default now()
);
create index pressure_clock_campaign_idx on pressure_clock(campaign_id);

-- §17 Consequence Chain ----------------------------------------------------
create table consequence_chain (
  id            text primary key,
  campaign_id   text not null references campaign(id) on delete cascade,
  title         text not null,
  root_event_id text not null,
  status        text not null,
  data          jsonb not null,
  updated_at    timestamptz not null default now()
);
create index consequence_chain_campaign_idx on consequence_chain(campaign_id);

-- §27 World Event ----------------------------------------------------------
create table world_event (
  id          text primary key,
  campaign_id text not null references campaign(id) on delete cascade,
  turn_id     text,
  event_type  text not null,
  location_id text,
  permanence  text not null,
  data        jsonb not null,
  created_at  timestamptz not null default now()
);
create index world_event_campaign_idx on world_event(campaign_id);
create index world_event_turn_idx on world_event(turn_id);

-- §28 Turn Log -------------------------------------------------------------
create table turn_log (
  id           text primary key,
  campaign_id  text not null references campaign(id) on delete cascade,
  character_id text not null references character(id) on delete cascade,
  turn_number  integer not null,
  data         jsonb not null,
  created_at   timestamptz not null default now(),
  -- Scoped by character so dm_guided / hybrid campaigns (multiple characters)
  -- can each have their own turn N. Solo campaigns are unaffected.
  unique (campaign_id, character_id, turn_number)
);
create index turn_log_campaign_idx on turn_log(campaign_id);

-- §14 Relationship ---------------------------------------------------------
create table relationship (
  id             text primary key,
  campaign_id    text not null references campaign(id) on delete cascade,
  source_type    text not null,
  source_id      text not null,
  target_type    text not null,
  target_id      text not null,
  current_status text not null,
  data           jsonb not null,
  updated_at     timestamptz not null default now()
);
create index relationship_campaign_idx on relationship(campaign_id);
create index relationship_source_idx on relationship(source_type, source_id);
create index relationship_target_idx on relationship(target_type, target_id);
