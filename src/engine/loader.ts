/**
 * Realm of Nexus / VERDAX — Campaign loader.
 *
 * Turns a validated static-lore `DomainBible` (Chunk 2) into mutable seed state
 * (Chunk 3): a DomainTrackingState, a DomainVirtueState, FactionStates from the
 * faction index, LocationStates from the major locations, and campaign-instance
 * MagicSystemStates. `bootstrapCampaign` writes a Campaign / Metaphysics /
 * Character so a turn can run fully offline (no DB, no LLM).
 *
 * Defaults are deliberate, sane starting values where the static bible has no
 * number (e.g. faction power_sources). Seeded records are schema-valid (the
 * loader builds them against the Zod-inferred types).
 */
import type { DomainBible } from "../schemas/domain-bible.js";
import type {
  CampaignState,
  CampaignMetaphysics,
  CharacterState,
  DomainTrackingState,
  DomainVirtueState,
  FactionState,
  LocationState,
  MagicSystemState,
  PlayerPatternState,
} from "../schemas/glossary.js";
import type { Domain } from "../schemas/primitives.js";
import type { StateStore } from "./store.js";

export function slug(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "");
}

/** Domain-prefixed ids so names that collide across domains stay distinct. */
export function factionId(domain: string, name: string): string {
  return `${slug(domain)}_${slug(name)}`;
}
export function locationId(domain: string, name: string): string {
  return `${slug(domain)}_${slug(name)}`;
}
export function magicSystemId(domain: string, name: string): string {
  return `${slug(domain)}_${slug(name)}`;
}

const PLAYABLE: readonly Domain[] = ["Radiance", "Verdance", "Tempest", "Sanctuary", "Abyss"];

export interface SeedDomainResult {
  domain: Domain;
  faction_ids: string[];
  location_ids: string[];
  magic_system_ids: string[];
}

/** Seed all mutable state for one domain from its bible. */
export function seedDomainFromBible(
  store: StateStore,
  campaignId: string,
  bible: DomainBible
): SeedDomainResult {
  if (!PLAYABLE.includes(bible.domain as Domain)) {
    throw new Error(`seedDomainFromBible: "${bible.domain}" is not a playable domain.`);
  }
  const domain = bible.domain as Domain;

  // name → faction id, so locations can resolve their controllers.
  const nameToFactionId = new Map<string, string>();
  for (const f of bible.faction_index.factions) {
    nameToFactionId.set(f.name, factionId(domain, f.name));
  }
  // Locations often name controllers/contesters with descriptive strings
  // ("Hollow Pact sympathizers (ideologically)"), so resolve by exact match
  // first, then by a known faction name appearing within the string. Genuine
  // non-factions ("Frozen-Patience traditionalists vs reformers") stay unresolved.
  const resolveFaction = (s: string): string | undefined => {
    const exact = nameToFactionId.get(s);
    if (exact) return exact;
    const lower = s.toLowerCase();
    for (const [name, fid] of nameToFactionId) {
      if (lower.includes(name.toLowerCase())) return fid;
    }
    return undefined;
  };

  // ── DomainTrackingState ────────────────────────────────────────────────
  const domainState: DomainTrackingState = {
    campaign_id: campaignId,
    domain,
    domain_stone_stability: bible.domain_stone.current_stability,
    soul_flow_integrity: Math.max(0, Math.min(100, 100 - bible.domain_stone.corruption_level)),
    keeper_pressure: Math.min(100, bible.domain_stone.corruption_level),
    void_parasitism: 15,
    political_stability: 60,
    military_strength: 60,
    economic_strength: 60,
    magical_strength: 60,
    civilian_morale: 60,
    resource_security: 60,
    intelligence_strength: 55,
    true_virtues_json: Object.fromEntries(bible.true_virtues.map((v) => [v.name, 70])),
    corrupted_virtues_json: Object.fromEntries(
      bible.corrupted_virtues.map((c) => [c.corrupted_name, 30])
    ),
    active_warfront_ids: [],
    active_power_struggle_ids: [],
    active_rumor_ids: [],
    active_soul_flow_wound_ids: [],
    active_domain_crisis_ids: [],
    current_strategy: bible.military_doctrine.strategic_identity,
    immediate_priority: bible.identity_snapshot.biggest_external_threat,
    long_term_priority: bible.identity_snapshot.core_belief,
  };
  store.put("domain_tracking", domain, domainState);

  // ── DomainVirtueState ──────────────────────────────────────────────────
  const virtueState: DomainVirtueState = {
    campaign_id: campaignId,
    domain,
    true_virtues: bible.true_virtues.map((v) => ({
      name: v.name,
      strength: 70,
      public_health: 60,
      faction_support: {},
    })),
    corrupted_virtues: bible.corrupted_virtues.map((c) => ({
      name: c.corrupted_name,
      strength: 30,
      source_true_virtue: c.true_virtue,
      active_factions: c.faction_most_vulnerable,
      active_rumors: [],
      keeper_exploit_risk: 40,
    })),
    current_virtue_crisis: "",
    current_keeper_exploit: bible.keeper_exploit_pattern.common_lie,
  };
  store.put("domain_virtue_state", domain, virtueState);

  // ── Factions ───────────────────────────────────────────────────────────
  const factionIds: string[] = [];
  for (const f of bible.faction_index.factions) {
    const fid = factionId(domain, f.name);
    factionIds.push(fid);
    const faction: FactionState = {
      id: fid,
      campaign_id: campaignId,
      name: f.name,
      domain,
      doctrine: f.short_doctrine,
      ideal_future: "",
      public_goal: f.player_use,
      hidden_goal: "",
      leader_npc_ids: [],
      champion_npc_ids: [],
      class_base: { [f.class_base]: 60 },
      power_sources: {
        military: 50, economy: 50, magic: 50, religion: 50,
        intelligence: 50, legitimacy: 50, resources: 50, fear: 30,
      },
      resources_controlled: [],
      locations_controlled: [],
      magic_access: [],
      military_units_controlled: [],
      trade_routes_controlled: [],
      internal_rivals: f.main_rival ? [f.main_rival] : [],
      external_enemies: [],
      possible_allies: [],
      secret_alliances: [],
      infiltration_targets: [],
      methods: {
        diplomacy: 50, open_war: 40, sabotage: 40, propaganda: 40,
        assassination: 20, trade_pressure: 40, magical_escalation: 40,
      },
      player_standing: { reputation: 0, trust: 0, fear: 0, respect: 0, suspicion: 0, debt: 0, leverage: 0 },
      keeper_exploit_vector: f.keeper_vulnerability,
      void_temptation_phrase: bible.void_temptation_pattern.temptation_phrase,
      agenda_clock_ids: [],
      active_rumor_ids: [],
      current_status: "active",
    };
    store.put("faction", fid, faction);
  }

  // ── Locations ──────────────────────────────────────────────────────────
  const locationIds: string[] = [];
  for (const loc of bible.major_locations) {
    const lid = locationId(domain, loc.name);
    locationIds.push(lid);
    const controllerId = loc.controlling_factions
      .map(resolveFaction)
      .find((x): x is string => Boolean(x));
    const contested = [
      ...new Set(loc.contested_by.map(resolveFaction).filter((x): x is string => Boolean(x))),
    ];
    const location: LocationState = {
      id: lid,
      campaign_id: campaignId,
      name: loc.name,
      domain,
      location_type: loc.location_type,
      ...(controllerId ? { controlling_faction_id: controllerId } : {}),
      contested_by_faction_ids: contested,
      stability: loc.location_state.stability,
      danger: loc.location_state.danger,
      corruption: loc.location_state.corruption,
      morale: loc.location_state.morale,
      resources: loc.location_state.resources,
      secrecy: loc.location_state.secrecy,
      military_pressure: loc.location_state.military_pressure,
      spiritual_health: loc.location_state.spiritual_health,
      economic_health: 55,
      rumor_activity: 40,
      key_npc_ids: [],
      active_quest_ids: [],
      active_rumor_ids: [],
      active_pressure_clock_ids: [],
      active_soul_flow_wound_ids: [],
      known_secrets: loc.known_secrets,
      hidden_secrets: [],
      current_mood: "",
      visual_state_tags: [],
    };
    store.put("location", lid, location);
  }

  // ── Magic systems (campaign instances) ─────────────────────────────────
  const magicSystemIds: string[] = [];
  for (const m of bible.magic_systems) {
    const mid = magicSystemId(domain, m.system_name);
    magicSystemIds.push(mid);
    const magic: MagicSystemState = {
      ...m,
      id: mid,
      campaign_id: campaignId,
      current_instability: 20,
      active_abuse_cases: [],
    };
    store.put("magic_system", mid, magic);
  }

  return { domain, faction_ids: factionIds, location_ids: locationIds, magic_system_ids: magicSystemIds };
}

export interface BootstrapOptions {
  campaign_id: string;
  title: string;
  starting_domain: Domain;
  current_region_id: string;
  character: { id: string; name: string; ancestry: string; class_name: string; background: string };
  /** ISO timestamps; caller supplies the clock. Default "". */
  now?: string;
}

function defaultPlayerPatterns(): PlayerPatternState {
  return {
    merciful_choices: 0, ruthless_choices: 0, sacrificial_choices: 0, deceptive_choices: 0,
    protective_choices: 0, power_seeking_choices: 0, forbidden_magic_uses: 0,
    public_forbidden_magic_uses: 0, private_forbidden_magic_uses: 0,
    oaths_kept: 0, oaths_broken: 0, civilians_saved: 0, civilians_abandoned: 0,
    enemies_spared: 0, enemies_executed: 0, used_void_power: 0, resisted_void_power: 0,
    freed_bound_souls: 0, bound_souls: 0, exposed_truths: 0, concealed_truths: 0,
    dominant_identity_label: "", feared_identity_label: "", rumored_identity_label: "",
  };
}

/** Write a Campaign, CampaignMetaphysics, and a level-1 Character. */
export function bootstrapCampaign(store: StateStore, opts: BootstrapOptions): void {
  const now = opts.now ?? "";
  const campaign: CampaignState = {
    id: opts.campaign_id,
    title: opts.title,
    mode: "solo_ai",
    active_domain_focus: [opts.starting_domain],
    starting_domain: opts.starting_domain,
    current_region_id: opts.current_region_id,
    campaign_phase: "origin",
    tone_tags: [],
    difficulty: "balanced",
    current_main_arc: "",
    active_major_threats: [],
    active_major_allies: [],
    active_major_rivals: [],
    created_at: now,
    updated_at: now,
  };
  store.put("campaign", opts.campaign_id, campaign);

  const metaphysics: CampaignMetaphysics = {
    campaign_id: opts.campaign_id,
    keeper_prison_pressure: 20,
    global_soul_flow_integrity: 70,
    global_void_parasitism: 15,
    global_reality_stability: 80,
    architect_sacrifice_integrity: 85,
    nexus_resonance_balance: 65,
    active_soul_flow_wounds: [],
    active_keeper_exploits: [],
    active_void_echoes: [],
    active_domain_stone_crises: [],
    visibility_to_player: "hidden",
  };
  store.put("campaign_metaphysics", opts.campaign_id, metaphysics);

  const character: CharacterState = {
    id: opts.character.id,
    campaign_id: opts.campaign_id,
    name: opts.character.name,
    ancestry: opts.character.ancestry,
    class_name: opts.character.class_name,
    origin_domain: opts.starting_domain,
    background: opts.character.background,
    level: 1, xp: 0,
    hp: 20, max_hp: 20, mana: 10, max_mana: 10, stamina: 15, max_stamina: 15,
    gold: 10,
    stats: { strength: 10, dexterity: 10, constitution: 10, intelligence: 10, wisdom: 10, charisma: 10 },
    conditions: [], wounds: [],
    inventory_ids: [], equipped_item_ids: [],
    domain_resonance: { [opts.starting_domain]: 65 },
    corruption: 0, void_resonance: 0, soul_integrity: 80, identity_integrity: 80,
    oath_burden: 0, memory_stability: 90,
    player_patterns: defaultPlayerPatterns(),
    public_reputation_summary: "",
    hidden_reputation_summary: "",
  };
  store.put("character", opts.character.id, character);
}
