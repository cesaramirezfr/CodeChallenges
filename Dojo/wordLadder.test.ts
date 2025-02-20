import { expect, describe, it } from "bun:test";
import { wordLadder } from "./wordLadder";

describe("wordLadder", () => {
  it("should work for example 1", () => {
    const steps = wordLadder("hit", "cog", ["hot", "dot", "dog", "lot", "log"]);
  
    expect(steps).toBe(5);
  });

  it("should work for example 2", () => {
    const steps = wordLadder("met", "ced", ["xet", "ten", "cet", "lot", "log"]);

    expect(steps).toBe(3);
  });
});
