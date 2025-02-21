import { describe, expect, it } from 'bun:test';
import { binarySearch } from './binarySearch';

describe('binarySearch', () => {
  it('should work for example 1', () => {
    const nums = [-1,0,3,5,9,12];
    const target = 9;
    expect(binarySearch(nums, target)).toBe(4);
  });

  it('should return -1', () => {
    const nums = [-4, 5, 8, 9];
    const target = 7;
    expect(binarySearch(nums, target)).toBe(-1);
  });
});
