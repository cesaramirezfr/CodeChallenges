// cesaraugusto.ramirez-0297
/**
 * You are asked to write a FizzBuzz code, it has to be a working implementation, but write it using the worst programing logic you can imagine, feel free to break all best practices you can. Include Unit Tests, functional UTs but also breaking all best practices you can imagine.

Write comments in your code briefly explaining why your code is bad and which best practices you are breaking.

Typical FizzBuzz:
Write a program that prints the numbers from 1 to n. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”.

Output: 
1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz, 16, 17, Fizz, 19, Buzz, Fizz, 22, 23, Fizz, Buzz, 26, Fizz, 28, 29, FizzBuzz, 31, 32, Fizz, 34, Buzz, Fizz, ...
 */

export function fizzBuzz(n: number): string {
  const results: string[] = [];
  for (let i = 1; i <= n; i++) {
    let msg = '';
    const isFizz = i % 3 === 0;
    const isBuzz = i % 5 === 0;
    if (isFizz) {
      msg += 'Fizz';
    }
    if (isBuzz) {
      msg += 'Buzz';
    }
    if (msg === '') {
      msg += `${i}`;
    }
    results.push(msg);
  }
  console.log(results);
  return results.join(',');
}
