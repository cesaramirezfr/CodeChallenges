/**
 * Given a binary tree print all of its leaves using preorder traversal. Generate the class/object to manage nodes and use a recursive function to do the preorder traversal.
 *
 * Example
 *
 * Input tree:
 *            1
 *          /   \
 *         7     9
 *       /  \     \
 *      2    6     9
 *          / \   /
 *         5  11 5
 * Output: 1, 7, 2, 6, 5, 11, 9, 9, 5
 */
import { TreeNode } from './binaryTreeNode';

export function preorderTraversal(root: TreeNode | null): number[] {
  const nodes: number[] = [];

  if (root?.value) {
    // console.log(root.value);
    nodes.push(root.value);
  }

  if (root?.left) {
    const left = preorderTraversal(root.left);
    nodes.push(...left);
  }

  if (root?.right) {
    const right = preorderTraversal(root.right);
    nodes.push(...right);
  }

  return nodes;
}
