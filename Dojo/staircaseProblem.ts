/**
 * You are climbing a staircase. It takes n steps to reach to the top.
 * Each time you can either climb 1 or 2 steps.
 * Write a function to check in how many distinct ways you can climb to the top.
 */

export function climbStairs(totalSteps: number): number {
  if (totalSteps === 0) {
    return 0;
  }

  if (totalSteps === 1) {
    return 1;
  }

  let step1 = 1;
  let step2 = 2;

  for (let i = 2; i < totalSteps; i++) {
    const steps = step1 + step2;
    step1 = step2;
    step2 = steps;
  }

  return step2;
}
