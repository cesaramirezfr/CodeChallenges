import { describe, test, expect } from 'bun:test';
import { minSubArrayLen } from './minimumSizeSubarraySum';

describe('minSubArrayLen', () => {
  test('example 1', () => {
    const target = 7;
    const nums = [2,3,1,2,4,3];
    
    expect(minSubArrayLen(target, nums)).toBe(2);
  });

  test('example 2', () => {
    const target = 4;
    const nums = [1,4,4];
    
    expect(minSubArrayLen(target, nums)).toBe(1);
  });

  test('example 3', () => {
    const target = 11;
    const nums = [1,1,1,1,1,1,1,1];
    
    expect(minSubArrayLen(target, nums)).toBe(0);
  });

  test('example 4', () => {
    const target = 213;
    const nums = [12,28,83,4,25,26,25,2,25,25,25,12];
    expect(minSubArrayLen(target, nums)).toBe(8);
  });
});
