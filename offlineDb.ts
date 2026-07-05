import type { Game, UserProfile } from '../types';

export const DEFAULT_GAMES: Game[] = [
  {
    id: 'starswarm',
    title: 'Star-Swarm',
    developer: 'KBS Cloud Games',
    publisher: 'KBS Cloud',
    release_date: 'June 2026',
    description: 'Establish your space empire, manage star systems, queue fleet production, and command battles in this epic sci-fi strategy game.',
    full_description: 'Command a cosmic space faction in an expansive procedural universe. Construct spaceports, manage resource collection, design custom rules, and lead your fleet to ultimate victory. Star-Swarm supports both simultaneous multi-commander battles online and classic local hotseat turn-based skirmishes. Harness the full capabilities of your starships to defend your home worlds and conquer the galaxy!',
    tags: ['Sci-Fi', 'Strategy', 'Space', 'Multiplayer'],
    features: [
      'Procedurally generated star systems',
      'Simultaneous online turns & local hotseat support',
      'Deep custom rules engine & editor',
      'Advanced tactical fleet dispatching',
      'SSO Authentication with telemetry tracking'
    ],
    systemRequirements: {
      os: 'Ubuntu 22.04+, Windows 10/11, macOS 12+',
      cpu: 'Intel Core i5 / AMD Ryzen 5 or better',
      memory: '4 GB RAM',
      graphics: 'Integrated Graphics (Vulkan/DirectX 12 support)',
      storage: '500 MB available space'
    },
    prod_url: 'https://star-swarm.kbs-cloud.com',
    dev_url: 'http://localhost:28002',
    github_url: 'https://github.com/kbs-cloud/starswarm',
    download_url: 'https://github.com/kbs-cloud/starswarm/releases',
    cover_image: '/starswarm_cover.png',
    icon: '🌌',
    isOnline: true,
    isMultiplayer: true,
    app_token: 'starswarm_token_dev_999'
  },
  {
    id: 'tickerclash',
    title: 'Ticker Clash',
    developer: 'KBS Cloud Games',
    publisher: 'KBS Cloud',
    release_date: 'May 2026',
    description: 'Battle on the live stock exchanges in a fast-paced market simulator. Pick tickers, execute trades, and clash against other portfolios to dominate the trading floor.',
    full_description: 'Step onto the chaotic trading floor of Ticker Clash! Select your trading portfolio, analyze real-time market indices, execute buying or selling strategies, and compete in intense trading sessions. Clash head-to-head with portfolios created by rival players or test your instincts against the computer. Perfect your market timing and rise to become a legendary investor!',
    tags: ['Finance', 'Simulation', 'Strategy', 'Real-Time'],
    features: [
      'Live exchange index simulation',
      'Real-time portfolio clashing systems',
      'Interactive financial dashboard visualizations',
      'Leaderboards and trading history telemetry',
      'SSO validation integration'
    ],
    systemRequirements: {
      os: 'Ubuntu 20.04+, Windows 10/11, macOS 11+',
      cpu: 'Dual-core 2.0 GHz or better',
      memory: '2 GB RAM',
      graphics: 'Standard WebGL compatible GPU',
      storage: '200 MB available space'
    },
    prod_url: 'https://tickerclash.kbs-cloud.com',
    dev_url: 'http://localhost:28003',
    github_url: 'https://github.com/kbs-cloud/ticker-clash',
    download_url: 'https://github.com/kbs-cloud/ticker-clash/releases',
    cover_image: '/tickerclash_cover.png',
    icon: '📈',
    isOnline: true,
    isMultiplayer: true,
    app_token: 'tickerclash_token_dev_888'
  },
  {
    id: 'alchemists-crucible',
    title: "Alchemist's Crucible",
    developer: 'KBS Cloud Games',
    publisher: 'KBS Cloud',
    release_date: 'June 2026',
    description: 'Synthesize elements, transmute substances, and achieve the ultimate formula in this alchemical crafting game.',
    full_description: "Welcome to the Alchemist's Crucible, a game of magical crafting and state mutation. Synthesize rare elements, queue transmutations, and race against other apprentices to create the Philosopher's Stone.",
    tags: ['Crafting', 'Strategy', 'Multiplayer', 'Alchemical'],
    features: [
      'Interactive element synthesis',
      'Local and online multiplayer support',
      'Apprentice presence tracking',
      'Achievements integration'
    ],
    systemRequirements: {
      os: 'Ubuntu 22.04+, Windows 10/11, macOS 12+',
      cpu: 'Intel Core i5 / AMD Ryzen 5 or better',
      memory: '4 GB RAM',
      graphics: 'Integrated Graphics',
      storage: '100 MB available space'
    },
    prod_url: 'https://alchemists-crucible.kbs-cloud.com',
    dev_url: 'http://localhost:28004',
    github_url: 'https://github.com/kbs-cloud/alchemists-crucible',
    download_url: 'https://github.com/kbs-cloud/alchemists-crucible/releases',
    cover_image: '/alchemists_crucible_cover.png',
    icon: '🧪',
    isOnline: true,
    isMultiplayer: true,
    app_token: 'alchemist_token_dev_777'
  },
  {
    id: 'gridlock-neon',
    title: 'Gridlock Neon',
    developer: 'KBS Cloud Games',
    publisher: 'KBS Cloud',
    release_date: 'June 2026',
    description: 'Dodge shifting obstacles and collect memory shards in sync with the beat on an infinite synthwave perspective grid.',
    full_description: 'Welcome to Gridlock Neon, a rhythm-based cyberpunk runner. Slide between lanes, jump over laser barriers, and slide under high obstructions. Sync your actions with the arpeggiator synth beats to boost your score, and deploy real-time sabotages to glitch your opponents off the track.',
    tags: ['Rhythm', 'Runner', 'Multiplayer', 'Synthwave'],
    features: [
      'Real-time procedural audio synthesizer',
      'Perspective visualizer grid and retro slicing sun',
      'SSO multiplayer presence tracking',
      'Real-time sabotage versus mechanics'
    ],
    systemRequirements: {
      os: 'Ubuntu 22.04+, Windows 10/11, macOS 12+',
      cpu: 'Intel Core i5 / AMD Ryzen 5 or better',
      memory: '4 GB RAM',
      graphics: 'Integrated Graphics',
      storage: '100 MB available space'
    },
    prod_url: 'https://gridlock.kbs-cloud.com',
    dev_url: 'http://localhost:28005',
    github_url: 'https://github.com/kbs-cloud/gridlock-neon',
    download_url: 'https://github.com/kbs-cloud/gridlock-neon/releases',
    cover_image: '/gridlock_neon_cover.png',
    icon: '🏍️',
    isOnline: true,
    isMultiplayer: true,
    app_token: 'gridlock_neon_token_dev_777'
  },
  {
    id: 'retrosweeper',
    title: 'RetroSweeper',
    developer: 'KBS Cloud Games',
    publisher: 'KBS Cloud',
    release_date: 'June 2026',
    description: 'Clear cyberpunk hazard fields, avoid glitch detonations, and compete with other sweepers in this retro-logic puzzle game.',
    full_description: 'Welcome to RetroSweeper, a cyberpunk logic puzzle of hazard sweep and grid clearance. Decode neon indicators, set holographic warning beacons, and race your fellow sweepers to identify all active cyber-mines before they detonate.',
    tags: ['Puzzle', 'Logic', 'Multiplayer', 'Cyberpunk', 'Retro'],
    features: [
      'Real-time multi-sweeper presence tracking',
      'Co-op and Speed-Sweep Versus logic',
      'CRT glitch screen detonation simulation',
      'KBS Cloud achievements integration'
    ],
    systemRequirements: {
      os: 'Ubuntu 22.04+, Windows 10/11, macOS 12+',
      cpu: 'Intel Core i5 / AMD Ryzen 5 or better',
      memory: '4 GB RAM',
      graphics: 'Integrated Graphics',
      storage: '100 MB available space'
    },
    prod_url: 'https://retrosweeper.kbs-cloud.com',
    dev_url: 'http://localhost:28006',
    github_url: 'https://github.com/kbs-cloud/retrosweeper',
    download_url: 'https://github.com/kbs-cloud/retrosweeper/releases',
    cover_image: '/retrosweeper_cover.png',
    icon: '🎛️',
    isOnline: true,
    isMultiplayer: true,
    app_token: 'retrosweeper_token_dev_777'
  },
  {
    id: 'sudoku-neon',
    title: 'Sudoku Neon',
    developer: 'KBS Cloud Games',
    publisher: 'KBS Cloud',
    release_date: 'June 2026',
    description: 'Solve matrix logic puzzles, decipher synthwave neon nodes, and sync your decryptions across device nodes.',
    full_description: 'Welcome to Sudoku Neon, a Zen Cyberpunk logical decryption grid. Decipher the matrix values in standard easy, medium, hard, or expert difficulty modules. Features local offline play and secure backup syncing via the KBS Cloud SSO framework.',
    tags: ['Puzzle', 'Logic', 'Singleplayer', 'Synthwave', 'Cyberpunk'],
    features: [
      'Canvas-rendered neon-aesthetic interactive grid',
      'Multiple difficulty levels: Easy, Medium, Hard, Expert',
      'Seamless local storage backup and cloud sync integration',
      'Google Chrome, desktop Electron, and Android Capacitor build configurations'
    ],
    systemRequirements: {
      os: 'Ubuntu 22.04+, Windows 10/11, Android 10+, macOS 12+',
      cpu: 'Intel Core i3 / AMD Ryzen 3 or better',
      memory: '2 GB RAM',
      graphics: 'Integrated Graphics',
      storage: '50 MB available space'
    },
    prod_url: 'https://mysudoku.org',
    dev_url: 'http://localhost:28007',
    github_url: 'https://github.com/kbs-cloud/sudoku-neon',
    download_url: 'https://github.com/kbs-cloud/sudoku-neon/releases',
    cover_image: '/sudoku_neon_cover.png',
    icon: '🧩',
    isOnline: true,
    isMultiplayer: false,
    app_token: 'sudoku_neon_token_dev_777'
  },
  {
    id: 'glimmerwood',
    title: 'Glimmerwood',
    developer: 'Glimmerwood Team',
    publisher: 'KBS Cloud',
    release_date: 'July 2026',
    description: 'A 3D pixel-art Action RPG built in C11 and raylib, featuring dynamic day/night lighting and real-time combat.',
    full_description: 'Explore a beautiful 3D procedural world textured with chunky pixel-art graphics. Slay aggressive foxes, equip magical torches that light up the night, collect loot piles, open chests, and progress your level. Built entirely from scratch in C with raylib graphics.',
    tags: ['RPG', '3D', 'Action', 'Pixel-Art', 'Singleplayer'],
    features: [
      '3D procedural terrain chunks',
      'Skeletal animations using glTF models',
      'Dynamic day/night cycle with custom carry light shader',
      'Authoritative local server-client physics and collision loop',
      'Binary save/load serialization state persistence'
    ],
    systemRequirements: {
      os: 'Ubuntu 22.04+, Windows 10/11, macOS 12+',
      cpu: 'Intel Core i5 / AMD Ryzen 5 or better',
      memory: '4 GB RAM',
      graphics: 'OpenGL 3.3 compatible GPU',
      storage: '200 MB available space'
    },
    prod_url: 'http://localhost:28008',
    dev_url: 'http://localhost:28008',
    github_url: 'https://github.com/kbs-cloud/glimmerwood',
    download_url: 'https://github.com/kbs-cloud/glimmerwood/releases',
    cover_image: '/glimmerwood_cover.png',
    icon: '⚔️',
    isOnline: true,
    isMultiplayer: false,
    app_token: 'glimmerwood_token_dev_555'
  }
];

export function resolveImageUrl(url: string | null | undefined): string {
  const fallback = '/starswarm_cover.png';
  const target = url || fallback;
  if (window.location.protocol === 'file:') {
    if (target.startsWith('/') && !target.startsWith('//')) {
      return '.' + target;
    }
  }
  return target;
}

export interface SyncAction {
  type: 'install' | 'uninstall' | 'profile_update' | 'achievement_unlock';
  payload: any;
  timestamp: string;
}

export class OfflineManager {
  private static STORAGE_PREFIX = 'kbs_';

  static isForceOffline(): boolean {
    return localStorage.getItem(`${this.STORAGE_PREFIX}force_offline`) === 'true';
  }

  static setForceOffline(force: boolean) {
    localStorage.setItem(`${this.STORAGE_PREFIX}force_offline`, String(force));
    // Trigger custom events so the UI updates
    window.dispatchEvent(new Event('kbs_network_state_change'));
  }

  static isOffline(): boolean {
    return this.isForceOffline() || !navigator.onLine;
  }

  // Games Catalog Caching
  static saveGamesCache(games: Game[]) {
    localStorage.setItem(`${this.STORAGE_PREFIX}games_cache`, JSON.stringify(games));
  }

  static getGamesCache(): Game[] {
    const data = localStorage.getItem(`${this.STORAGE_PREFIX}games_cache`);
    if (data) {
      try {
        const parsed = JSON.parse(data);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      } catch (e) {
        console.error('Error parsing games cache:', e);
      }
    }
    return DEFAULT_GAMES;
  }

  // Profile Caching
  static saveProfileCache(profile: UserProfile | null) {
    if (profile) {
      localStorage.setItem(`${this.STORAGE_PREFIX}profile_cache`, JSON.stringify(profile));
    } else {
      localStorage.removeItem(`${this.STORAGE_PREFIX}profile_cache`);
    }
  }

  static getProfileCache(): UserProfile | null {
    const data = localStorage.getItem(`${this.STORAGE_PREFIX}profile_cache`);
    return data ? JSON.parse(data) : null;
  }

  // Installed Games Caching (simulated installs local to device)
  static saveInstallsCache(installs: string[]) {
    localStorage.setItem(`${this.STORAGE_PREFIX}installs_cache`, JSON.stringify(installs));
  }

  static getInstallsCache(): string[] {
    const data = localStorage.getItem(`${this.STORAGE_PREFIX}installs_cache`);
    return data ? JSON.parse(data) : [];
  }

  static setLocalInstallStatus(gameId: string, installed: boolean) {
    const current = this.getInstallsCache();
    let updated;
    if (installed) {
      updated = Array.from(new Set([...current, gameId]));
    } else {
      updated = current.filter(id => id !== gameId);
    }
    this.saveInstallsCache(updated);

    // Notify components about local installs change
    window.dispatchEvent(new Event('kbs_installs_change'));

    // Queue sync action if we are offline
    if (this.isOffline()) {
      this.queueSyncAction({
        type: installed ? 'install' : 'uninstall',
        payload: { appId: gameId },
        timestamp: new Date().toISOString()
      });
    }
  }

  // Sync Queue management
  static getSyncQueue(): SyncAction[] {
    const data = localStorage.getItem(`${this.STORAGE_PREFIX}sync_queue`);
    return data ? JSON.parse(data) : [];
  }

  static queueSyncAction(action: SyncAction) {
    const queue = this.getSyncQueue();
    
    // De-duplicate actions to avoid redundant API calls
    if (action.type === 'install' || action.type === 'uninstall') {
      const inverseType = action.type === 'install' ? 'uninstall' : 'install';
      const existingInverseIdx = queue.findIndex(
        item => item.type === inverseType && item.payload.appId === action.payload.appId
      );
      if (existingInverseIdx !== -1) {
        queue.splice(existingInverseIdx, 1);
        localStorage.setItem(`${this.STORAGE_PREFIX}sync_queue`, JSON.stringify(queue));
        window.dispatchEvent(new Event('kbs_sync_queue_change'));
        return;
      }
    }
    
    queue.push(action);
    localStorage.setItem(`${this.STORAGE_PREFIX}sync_queue`, JSON.stringify(queue));
    window.dispatchEvent(new Event('kbs_sync_queue_change'));
  }

  static clearSyncQueue() {
    localStorage.removeItem(`${this.STORAGE_PREFIX}sync_queue`);
    window.dispatchEvent(new Event('kbs_sync_queue_change'));
  }

  // Trigger synchronization process
  static async syncDatabase(): Promise<{ success: boolean; syncedCount: number; errors: string[] }> {
    const queue = this.getSyncQueue();
    if (queue.length === 0) {
      return { success: true, syncedCount: 0, errors: [] };
    }

    const errors: string[] = [];
    let syncedCount = 0;

    for (const action of queue) {
      try {
        if (action.type === 'install') {
          const res = await fetch('/api/profile/installs', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ appId: action.payload.appId })
          });
          if (!res.ok) throw new Error(`Install sync failed: ${res.statusText}`);
        } else if (action.type === 'uninstall') {
          const res = await fetch(`/api/profile/installs/${action.payload.appId}`, {
            method: 'DELETE'
          });
          if (!res.ok) throw new Error(`Uninstall sync failed: ${res.statusText}`);
        } else if (action.type === 'profile_update') {
          const res = await fetch('/api/profile', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(action.payload)
          });
          if (!res.ok) throw new Error(`Profile sync failed: ${res.statusText}`);
        } else if (action.type === 'achievement_unlock') {
          const res = await fetch('/api/profile/achievements/unlock', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ achievementId: action.payload.achievementId })
          });
          if (!res.ok) throw new Error(`Achievement sync failed: ${res.statusText}`);
        }
        syncedCount++;
      } catch (err: any) {
        errors.push(err.message || 'Unknown sync error');
        // Stop execution on first error to prevent out-of-order execution issues
        break;
      }
    }

    // Update local queue with items that failed
    if (errors.length > 0) {
      const remaining = queue.slice(syncedCount);
      localStorage.setItem(`${this.STORAGE_PREFIX}sync_queue`, JSON.stringify(remaining));
      window.dispatchEvent(new Event('kbs_sync_queue_change'));
      return { success: false, syncedCount, errors };
    } else {
      this.clearSyncQueue();
      return { success: true, syncedCount, errors: [] };
    }
  }
}
