import type { Game, UserProfile } from '../types';

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
    return data ? JSON.parse(data) : [];
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
