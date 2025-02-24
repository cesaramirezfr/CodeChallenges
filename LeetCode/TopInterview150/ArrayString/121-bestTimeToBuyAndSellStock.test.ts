import { describe, expect, it } from 'bun:test';
import { maxProfit } from './121-bestTimeToBuyAndSellStock';

describe('maxProfit', () => {
  it('should work for example 1', () => {
    const prices = [7,1,5,3,6,4];
    expect(maxProfit(prices)).toBe(5);
  });
  
  it('should work for example 2', () => {
    const prices = [7,6,4,3,1];
    expect(maxProfit(prices)).toBe(0);
  });
});
