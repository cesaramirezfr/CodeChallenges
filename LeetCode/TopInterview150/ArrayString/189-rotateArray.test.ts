import { describe, expect, it } from 'bun:test';
import { rotate } from './189-rotateArray';

describe('rotate', () => {
  it('should work for example 1', () => {
    const nums = [1,2,3,4,5,6,7];
    const k = 3;

    rotate(nums, k);

    expect(nums).toEqual([5,6,7,1,2,3,4]);
  });

  it('should work for example 2', () => {
    const nums = [-1,-100,3,99];
    const k = 2;

    rotate(nums, k);

    expect(nums).toEqual([3,99,-1,-100]);
  });
});
