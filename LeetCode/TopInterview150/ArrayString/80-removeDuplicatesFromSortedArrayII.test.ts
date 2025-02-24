import { describe, expect, it } from 'bun:test';
import { removeDuplicates } from './80-removeDuplicatesFromSortedArrayII';

describe('removeDuplicates', () => {
  it('should work for example 1', () => {
    const nums = [1,1,1,2,2,3];
    expect(removeDuplicates(nums)).toBe(5);
  });

  it('should work for example 2', () => {
    const nums = [0,0,1,1,1,1,2,3,3];
    expect(removeDuplicates(nums)).toBe(7);
  });
});

/**
 *    i
 * [1,1,1,2,2,3]
 *  k
 */