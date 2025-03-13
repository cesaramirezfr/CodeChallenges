import { describe, expect, it } from 'bun:test';
import { maxSubArray } from './maximumSubarray';

describe('maxSubArray', () => {
  it('should work for example 1', () => {
    const nums = [-2,1,-3,4,-1,2,1,-5,4];
    expect(maxSubArray(nums)).toBe(6);
  });

  it('should work for example 2', () => {
    const nums = [1];
    expect(maxSubArray(nums)).toBe(1);
  });

  it('should work for example 3', () => {
    const nums = [5,4,-1,7,8];
    expect(maxSubArray(nums)).toBe(23);
  });

  it('should work for example 4', () => {
    const nums = [-1,-2];
    expect(maxSubArray(nums)).toBe(-1);
  });

  it('should work for example 5', () => {
    const nums = [31,-41,59,26,-53,58,97,-93,-23,84];
    expect(maxSubArray(nums)).toBe(187);
  });
});
