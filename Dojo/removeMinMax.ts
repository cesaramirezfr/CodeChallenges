export function removeMinMax(nums: number[]): number {
  let deletions = 0;
  let min = 0;
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    min = nums[i] < nums[min] ? i : min;
    max = nums[i] > nums[max] ? i : max;
  }

  let n = nums.length;

  let mid = Math.floor(n / 2);
  let diff = Math.abs(min - max);

  if (min < mid) {
    deletions += min + 1;
    if (diff <= n - max) {
      deletions += diff;
    } else {
      deletions += n - max;
    }
  } else {
    deletions += n - min;
    if (diff <= max) {
      deletions += diff;
    } else {
      deletions += max;
    }
  }

  return deletions;
}
