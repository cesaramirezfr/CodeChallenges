import { describe, expect, it } from 'bun:test';
import { TreeNode } from './binaryTreeNode';
import { preorderTraversal } from './binaryTreePreorderTraversal';

describe('binaryTreePreorderTraversal', () => {
  it('should work for example 1', () => {
    const tree = new TreeNode(1);

    tree.left = new TreeNode(7);
    tree.left.left = new TreeNode(2);
    tree.left.right = new TreeNode(6);
    tree.left.right.left = new TreeNode(5);
    tree.left.right.right = new TreeNode(11);

    tree.right = new TreeNode(9);
    tree.right.right = new TreeNode(9);
    tree.right.right.left = new TreeNode(5);

    expect(preorderTraversal(tree)).toEqual([1, 7, 2, 6, 5, 11, 9, 9, 5]);
  });
});
