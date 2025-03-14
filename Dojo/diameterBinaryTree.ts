/**
 * Given the root of a binary tree, return the length of the diameter of the tree.
 * The diameter of a binary tree is the length of the longest path between
 * any two nodes in a tree. This path may or may not pass through the root.
 * The length of a path between two nodes is represented by the number of edges between them.
 *
 * Example 1:
 *
 *          1
 *        /   \
 *       2     3
 *      / \
 *     4   5
 * Input: root = [1,2,3,4,5]
 * Output: 3
 * Explanation: 3 is the length of the path [4,2,1,3] or [5,2,1,3].
 *
 * Example 2:
 *
 *     1
 *    /
 *   2
 *
 * Input: root = [1,2]
 * Output: 1
 *
 * Constraints:
 * The number of nodes in the tree is the range [1, 10^4].
 * -100 <= Node.val <= 100
 */
import { TreeNode } from './binaryTreeNode';

export function diameterOfBinaryTree(root: TreeNode | null): number {
  let total = 0;

  function dfs(node: TreeNode | null): number {
    if (!node) return 0;

    const left = dfs(node.left);
    const right = dfs(node.right);

    total = Math.max(total, left + right);

    const longest = Math.max(left, right);

    return longest + 1;
  }

  dfs(root);

  return total;
}
