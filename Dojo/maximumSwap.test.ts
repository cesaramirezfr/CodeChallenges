import { describe, test, expect } from 'bun:test';
import { maximumSwap } from './maximumSwap';

describe('maximumSwap', () => {
  test('example 1', () => {
    const num = 2736;
    expect(maximumSwap(num)).toBe(7236);
  });
  test('example 2', () => {
    const num = 9973;
    expect(maximumSwap(num)).toBe(9973);
  });
  test('example 3', () => {
    const num = 9879123;
    expect(maximumSwap(num)).toBe(9978123);
  });
});
