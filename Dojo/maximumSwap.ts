/**
 * You are given an integer num. You can swap two digits at most once to get the maximum valued number.

Return the maximum valued number you can get.

Example 1:

Input: num = 2736
Output: 7236
Explanation: Swap the number 2 and the number 7.

Example 2:

Input: num = 9973
Output: 9973
Explanation: No swap.

Constraints:

0 <= num <= 108
 */

export function maximumSwap(num: number): number {
  if (num < 10) return num;

  let rest = num;
  let i = 0;
  let max = -1;
  let maxPos = -1;
  let right = -1;
  let rightPos = -1;
  let left = -1;
  let leftPos = -1;
  let swap = 0;

  while (rest > 0) {
    const remainder = rest % 10;
    rest = Math.floor(rest / 10);

    if (remainder > max) {
      max = remainder;
      maxPos = 10**i;
    } else if (remainder < max) {
      left = remainder;
      leftPos = 10**i;
      right = max;
      rightPos = maxPos;
    }

    i++;
  }

  if (left === -1) return num;

  let add1 = left * rightPos;
  let add2 = right * leftPos;
  let sub1 = right * rightPos;
  let sub2 = left * leftPos;

  swap = add1 + add2 - sub1 - sub2;

	return num + swap;
}
