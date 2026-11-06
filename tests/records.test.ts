import assert from 'node:assert/strict';
import test from 'node:test';

import {
  BEST_TIMES_STORAGE_KEY,
  PREFERENCES_ENABLED_STORAGE_KEY,
  type StorageLike
} from '../src/lib/preferences.js';
import { readBestTimes, recordSolveTime } from '../src/lib/records.js';

function createStorage(initial: Record<string, string> = {}): StorageLike {
  const values = new Map<string, string>(Object.entries(initial));

  return {
    getItem(key: string): string | null {
      return values.get(key) ?? null;
    },
    setItem(key: string, value: string): void {
      values.set(key, String(value));
    },
    removeItem(key: string): void {
      values.delete(key);
    }
  };
}

test('records are only tracked while preference persistence is enabled', () => {
  const storage = createStorage();

  const result = recordSolveTime(24, 120_000, storage);
  assert.equal(result.isNewRecord, true);
  assert.equal(storage.getItem(BEST_TIMES_STORAGE_KEY), null);

  storage.setItem(PREFERENCES_ENABLED_STORAGE_KEY, 'true');
  const enabledResult = recordSolveTime(24, 90_000, storage);

  assert.equal(enabledResult.isNewRecord, true);
  assert.equal(readBestTimes(storage).get(24), 90_000);
});

test('first solve establishes the record and only faster times replace it', () => {
  const storage = createStorage({ [PREFERENCES_ENABLED_STORAGE_KEY]: 'true' });

  const first = recordSolveTime(32, 200_000, storage);
  assert.equal(first.previousBestMs, null);
  assert.equal(first.isNewRecord, true);
  assert.equal(first.currentBestMs, 200_000);

  const slower = recordSolveTime(32, 210_000, storage);
  assert.equal(slower.previousBestMs, 200_000);
  assert.equal(slower.isNewRecord, false);
  assert.equal(slower.currentBestMs, 200_000);

  const faster = recordSolveTime(32, 150_000, storage);
  assert.equal(faster.isNewRecord, true);
  assert.equal(readBestTimes(storage).get(32), 150_000);
});

test('records are tracked separately per clue level', () => {
  const storage = createStorage({ [PREFERENCES_ENABLED_STORAGE_KEY]: 'true' });

  recordSolveTime(24, 100_000, storage);
  recordSolveTime(28, 300_000, storage);

  const records = readBestTimes(storage);
  assert.equal(records.get(24), 100_000);
  assert.equal(records.get(28), 300_000);
  assert.equal(records.get(32), undefined);
});

test('corrupted stored records are ignored', () => {
  const storage = createStorage({
    [PREFERENCES_ENABLED_STORAGE_KEY]: 'true',
    [BEST_TIMES_STORAGE_KEY]: '{oops'
  });

  const result = recordSolveTime(17, 5_000, storage);
  assert.equal(result.previousBestMs, null);
  assert.equal(result.isNewRecord, true);
});
