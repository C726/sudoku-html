import {
  BEST_TIMES_STORAGE_KEY,
  readPreferenceValue,
  storePreferenceValue,
  type StorageLike
} from './preferences.js';

export interface BestTimeRecordResult {
  previousBestMs: number | null;
  isNewRecord: boolean;
  currentBestMs: number;
}

export function readBestTimes(storage?: StorageLike | null): Map<number, number> {
  const bestTimes = new Map<number, number>();
  const rawValue = readPreferenceValue(BEST_TIMES_STORAGE_KEY, storage);
  if (rawValue == null) {
    return bestTimes;
  }

  let parsed: unknown;
  try {
    parsed = JSON.parse(rawValue);
  } catch {
    return bestTimes;
  }

  if (typeof parsed !== 'object' || parsed === null || Array.isArray(parsed)) {
    return bestTimes;
  }

  for (const [key, value] of Object.entries(parsed)) {
    const clueCount = Number(key);
    const elapsedMs = Number(value);
    if (Number.isInteger(clueCount) && Number.isInteger(elapsedMs) && elapsedMs >= 0) {
      bestTimes.set(clueCount, elapsedMs);
    }
  }

  return bestTimes;
}

export function recordSolveTime(
  clueCount: number,
  elapsedMs: number,
  storage?: StorageLike | null
): BestTimeRecordResult {
  const bestTimes = readBestTimes(storage);
  const previousBestMs = bestTimes.get(clueCount) ?? null;
  const isNewRecord = previousBestMs === null || elapsedMs < previousBestMs;

  if (isNewRecord) {
    bestTimes.set(clueCount, elapsedMs);
    storePreferenceValue(BEST_TIMES_STORAGE_KEY, JSON.stringify(Object.fromEntries(bestTimes)), storage);
  }

  return {
    previousBestMs,
    isNewRecord,
    currentBestMs: bestTimes.get(clueCount) ?? elapsedMs
  };
}
