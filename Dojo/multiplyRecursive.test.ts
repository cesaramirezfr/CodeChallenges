import { describe, test, expect } from 'bun:test';
import { multiply } from './multiplyRecursive';

describe('multiply', () => {
  test('example 1', () => {
    expect(multiply(4,5)).toBe(20);
  });

  test('example 2', () => {
    expect(multiply(-4,5)).toBe(-20);
  });

  test('example 3', () => {
    expect(multiply(4,-5)).toBe(-20);
  });

  test('example 4', () => {
    expect(multiply(-4,-5)).toBe(20);
  });

  test('example 5', () => {
    expect(multiply(1,5)).toBe(5);
  });

  test('example 6', () => {
    expect(multiply(0,5)).toBe(0);
  });
});
