import { expect, describe, it } from "bun:test";
import { basicCalculator } from "./basicCalculator";

describe('basicCalculator', () => {
  it('should handle "1 + 1"', () => {
    expect(basicCalculator("1 + 1")).toEqual(2);
  });

  it('should handle "(1)"', () => {
    expect(basicCalculator("(1)")).toEqual(1);
  });

  it('should handle "(1-(4-5))"', () => {
    expect(basicCalculator("(1-(4-5))")).toEqual(2);
  });

  it('should handle "4+5(12/2  )+3*4"', () => {
    expect(basicCalculator("4+5(12/2  )+3*4")).toEqual(46);
  });
});
