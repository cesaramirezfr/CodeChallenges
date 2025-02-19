import { expect, describe, it } from "bun:test";
import { climbStairs } from "./staircaseProblem";

describe('climbStairs', () => {
  it('should solve example 1',  () => {
    expect(climbStairs(3)).toEqual(3);
  });
});
