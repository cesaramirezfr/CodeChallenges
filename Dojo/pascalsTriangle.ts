/**
 * Given an integer numRows, return the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

Example 1:

Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

Example 2:

Input: numRows = 1
Output: [[1]]


Constraints:

1 <= numRows <= 30
 */

export function generate(numRows: number): number[][] {
  const triangle: number[][] = [];

  for (let i = 0; i < numRows; i++) {
    const row: number[] = [];
    
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        row.push(1);
      } else {
        const prevRow = triangle[i - 1];
        row.push(prevRow[j - 1] + prevRow[j]);
      }
    }
    
    triangle.push(row);
  }

  return triangle;
}
