/**
 * Given two integers, use a recursive function to multiply them without using the multiplication operator.
 * Integers can be positive or negative or zeros.

Examples

	Multiply(4,5) ->  20
	Multiply(-4,5) ->  -20
	Multiply(4,-5) ->  -20
	Multiply(-4,-5) ->  20
	Multiply(1,5) ->  5
	Multiply(0,5) ->  0
 */

export function multiply(a: number, b: number): number {
	// Handle zero
	if (b === 0 || a === 0) return 0;
	// Handle identity
	if (b === 1) return a;
	if (a === 1) return b;
	// Handle negatives
	if (b < 0) return -multiply(a, -b);
	// Recursivity
	return a + multiply(a, b - 1);
}
