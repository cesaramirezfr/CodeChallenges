import { describe, expect, it } from 'bun:test';
import { removeMinMax } from './removeMinMax';

describe('removeMinMax', () => {
  it('should delete 5', () => {
    expect(removeMinMax([3, 2, 1, 6, 7, 4, 5])).toBe(5);
  });

  it('should delete 3', () => {
    expect(removeMinMax([1, 4, 3, 2, 6, 5, 9, 7])).toBe(3);
  });
});
