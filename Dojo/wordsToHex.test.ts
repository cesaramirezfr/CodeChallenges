import { expect, describe, it } from "bun:test";
import { wordsToHex } from "./wordsToHex";

describe("wordsToHex", () => {
  it("should work for example 1", () => {
    const hexValues = wordsToHex("Hello, my name is Gary and I like cheese.");

    expect(hexValues).toEqual(['#48656c', '#6d7900', '#6e616d','#697300','#476172','#616e64','#490000','#6c696b','#636865']);
  });
});
