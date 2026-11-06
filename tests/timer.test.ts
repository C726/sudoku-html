import assert from 'node:assert/strict';
import test from 'node:test';

import {
  createTimerState,
  getElapsedMs,
  pauseTimer,
  resumeTimer,
  startTimer
} from '../src/lib/timer.js';

test('startTimer resets and starts the timer', () => {
  const timer = createTimerState();
  startTimer(timer, 1000);

  assert.equal(timer.running, true);
  assert.equal(getElapsedMs(timer, 1500), 500);
});

test('pauseTimer keeps accumulated elapsed time and stops ticking', () => {
  const timer = createTimerState();
  startTimer(timer, 1000);
  pauseTimer(timer, 4000);

  assert.equal(timer.running, false);
  assert.equal(getElapsedMs(timer, 4000), 3000);
  assert.equal(getElapsedMs(timer, 100_000), 3000);
});

test('resumeTimer continues from accumulated elapsed time', () => {
  const timer = createTimerState();
  startTimer(timer, 1000);
  pauseTimer(timer, 4000);
  resumeTimer(timer, 5000);

  assert.equal(timer.running, true);
  assert.equal(getElapsedMs(timer, 5000), 3000);
  assert.equal(getElapsedMs(timer, 6500), 4500);
});

test('resumeTimer is a no-op while the timer is already running', () => {
  const timer = createTimerState();
  startTimer(timer, 1000);
  resumeTimer(timer, 9999);

  assert.equal(getElapsedMs(timer, 9999), 8999);
});
