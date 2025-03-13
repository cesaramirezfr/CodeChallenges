import { describe, expect, it } from 'bun:test';
import { fizzBuzz } from './worstFizzBuzzEver';

describe('fizzBuzz', () => {
  it('should work', () => {
    expect(fizzBuzz(15)).toBe('1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz,11,Fizz,13,14,FizzBuzz');
  });
});
