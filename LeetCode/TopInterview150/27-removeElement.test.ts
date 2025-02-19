import { describe, expect, it } from "bun:test";
import { removeElement } from "./27-removeElement";

describe('removeElement', () => {
  it('should solve example 1', () => {
    const nums = [3,2,2,3];
    const val = 3;
    expect(removeElement(nums, val)).toEqual(2);
  });

  it('should solve example 2', () => {
    const nums = [0,1,2,2,3,0,4,2];
    const val = 2;
    expect(removeElement(nums, val)).toEqual(5);
  });
});
