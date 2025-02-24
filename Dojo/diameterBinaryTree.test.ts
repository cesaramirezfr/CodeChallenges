import { describe, expect, it } from 'bun:test';
import { TreeNode } from './binaryTreeNode';
import { diameterOfBinaryTree } from './diameterBinaryTree';

describe('diameterOfBinaryTree', () => {
  it('should solve example 1', () => {
    const tree = new TreeNode(1);

    tree.left = new TreeNode(2);
    tree.left.left = new TreeNode(4);
    tree.left.right = new TreeNode(5);

    tree.right = new TreeNode(3);

    expect(diameterOfBinaryTree(tree)).toBe(3);
  });

  it('should solve example 2', () => {
    const tree = new TreeNode(1);

    tree.left = new TreeNode(2);

    expect(diameterOfBinaryTree(tree)).toBe(1);
  });
});
