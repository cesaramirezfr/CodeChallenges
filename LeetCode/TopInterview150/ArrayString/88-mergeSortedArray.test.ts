import { describe, expect, it } from "bun:test";
import { merge } from "./88-mergeSortedArray";

describe('mergeSortedArray', () => {
  it('should solve example 1', () => {
    const nums1 = [1,2,3,0,0,0];
    const m = 3;
    const nums2 = [2,5,6];
    const n = 3;
    merge(nums1, m, nums2, n);
    expect(nums1).toEqual([1,2,2,3,5,6]);
  });

  it('should solve example 2', () => {
    const nums1 = [1];
    const m = 1;
    const nums2: number[] = [];
    const n = 0;
    merge(nums1, m, nums2, n);
    expect(nums1).toEqual([1]);
  });

  it('should solve example 3', () => {
    const nums1 = [0];
    const m = 0;
    const nums2 = [1];
    const n = 1;
    merge(nums1, m, nums2, n);
    expect(nums1).toEqual([1]);
  });

  it('should solve example 4', () => {
    const nums1 = [-1, 0, 0, 3, 3, 3, 0, 0, 0]
    const m = 6;
    const nums2 = [1, 2, 2];
    const n = 3;
    merge(nums1, m, nums2, n);
    expect(nums1).toEqual([-1, 0, 0, 1, 2, 2, 3, 3, 3]);
  });

  it('should solve example 5', () => {
    const nums1 = [1, 0];
    const m = 1;
    const nums2 = [2];
    const n = 1;
    merge(nums1, m, nums2, n);
    expect(nums1).toEqual([1, 2]);
  });
});
