/*
 * Remembers, in this browser's localStorage, per media file:
 * - where someone stopped, so coming back continues from there;
 * - how many seconds they actually played, so a meditation only counts as
 *   completed after real listening (see AudioPlayer).
 * Keys are per file, e.g. "video:<playback id>" or "audio:<address>".
 */

const POSITION = "challenge-position:";
const PLAYED = "challenge-played:";

// Saving on every timeupdate (several times a second) is wasteful:
// only write when the value moved by at least 5 seconds since the last write.
const lastSaved = new Map<string, number>();

function read(storageKey: string): number {
  try {
    return Number(localStorage.getItem(storageKey)) || 0;
  } catch {
    return 0; // storage blocked: start from zero
  }
}

function write(storageKey: string, seconds: number) {
  if (Math.abs(seconds - (lastSaved.get(storageKey) ?? -Infinity)) < 5) return;
  lastSaved.set(storageKey, seconds);
  try {
    localStorage.setItem(storageKey, String(Math.floor(seconds)));
  } catch {
    // Can't remember it; not a problem.
  }
}

export const getPosition = (key: string) => read(POSITION + key);
export const savePosition = (key: string, seconds: number) => write(POSITION + key, seconds);

export const getPlayed = (key: string) => read(PLAYED + key);
export const savePlayed = (key: string, seconds: number) => write(PLAYED + key, seconds);

// After finishing, the next visit starts from the beginning again.
export function clearPosition(key: string) {
  for (const storageKey of [POSITION + key, PLAYED + key]) {
    lastSaved.delete(storageKey);
    try {
      localStorage.removeItem(storageKey);
    } catch {
      // Nothing to clear.
    }
  }
}
