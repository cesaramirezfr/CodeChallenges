import { describe, expect, it } from 'bun:test';
import { removeDuplicates } from './26-removeDuplicatesFromSortedArray';

describe('removeDuplicates', () => {
  it('should work for example 1', () => {
    const nums = [1, 1, 2];
    expect(removeDuplicates(nums)).toBe(2);
  });

  it('should work for example 2', () => {
    const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
    expect(removeDuplicates(nums)).toBe(5);
  });
});
