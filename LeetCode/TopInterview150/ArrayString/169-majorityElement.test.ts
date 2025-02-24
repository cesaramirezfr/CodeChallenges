import { describe, expect, it } from "bun:test";
import { majorityElement } from "./169-majorityElement";

describe('majorityElement', () => {
  it('should solve example 1', () => {
    const nums = [3,2,3];
    expect(majorityElement(nums)).toBe(3);
  });

  it('should solve example 2', () => {
    const nums = [2,2,1,1,1,2,2];
    expect(majorityElement(nums)).toBe(2);
  });
});
