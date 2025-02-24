import { describe, expect, it } from 'bun:test';
import { maxValueInArray } from './challenge';

describe('challenge', () => {
  it('should work for example 1', () => {
    const n = 4;
    const index = 2;
    const maxSum = 6;
    expect(maxValueInArray(n, index, maxSum)).toBe(2);
  });

  it('should work for example 2', () => {
    const n = 6;
    const index = 1;
    const maxSum = 10;
    expect(maxValueInArray(n, index, maxSum)).toBe(3);
  });

  it('should work for example 3', () => {
    const n = 5;
    const index = 2;
    const maxSum = 10;
    expect(maxValueInArray(n, index, maxSum)).toBe(3);
  });

  it('should work for example 4', () => {
    const n = 5;
    const index = 2;
    const maxSum = 15;
    expect(maxValueInArray(n, index, maxSum)).toBe(4);
  });
});
