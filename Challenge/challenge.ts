/*
You are given three positive integers: n, index, and maxSum and need to build a function maxValueInArray(n, index, maxSum).
maxSum is always greater than or equal to n.

You want to construct an array nums that satisfies the following conditions:
- nums.length == n
- all numbers inside nums array are positive integers
- abs(nums[i] - nums[i+1]) <= 1 where 0 <= i < n-1.
- The sum of all the elements of nums does not exceed maxSum.
- nums[index] is maximized.

RETURN nums[index] of the constructed array.

Example 1:
Input: n = 4, index = 2,  maxSum = 6
Output: 2
Explanation: nums = [1,2,2,1] is one array that satisfies all the conditions.
There are no arrays that satisfy all the conditions and have nums[2] == 3, so 2 is the maximum nums[2].

Example 2:
Input: n = 6, index = 1,  maxSum = 10
Output: 3
Explanation: nums = [2,3,2,1,1,1] is one array that satisfies all the conditions.
There are no arrays that satisfy all the conditions and have nums[1] == 4, so 2 is the maximum nums[1].

Example 3:
Input: n = 5, index = 2,  maxSum = 10
Output: 3
Explanation: nums = [1,2,3,2,1] is one array that satisfies all the conditions.
*/

function sumArray(nums: number[]): number {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return sum;
}

function increaseValueInNumsArray(nums: number[], index: number): number[] {
  const n = nums.length;
  nums[index] = nums[index] + 1;
  
  if (index !== 0) {
    if (Math.abs(nums[index] - nums[index-1]) > 1) {
      increaseValueInNumsArray(nums, index-1);
    }
  }

  if (index !== n - 1) {
    if (Math.abs(nums[index] - nums[index+1]) > 1) {
      increaseValueInNumsArray(nums, index+1);
    }
  }
  
  return nums;
}

export function maxValueInArray(n: number, index: number, maxSum: number): number {
  const nums: number[] = Array(n).fill(1);
  let sum = 0;
  do {
    sum = sumArray(nums);
    if (Math.ceil(n / 2) + sum > maxSum) {
      break;
    }
    increaseValueInNumsArray(nums, index);
  } while (sum <= maxSum)
  
  return nums[index];
}
