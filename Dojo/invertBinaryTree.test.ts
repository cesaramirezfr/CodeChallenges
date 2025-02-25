import { describe, expect, it } from 'bun:test';
import { TreeNode } from './binaryTreeNode';
import { invertTree } from './invertBinaryTree';

describe('invertTree', () => {
  it('should work for example 1', () => {
    const tree = new TreeNode(4);

    tree.left = new TreeNode(2);
    tree.left.left = new TreeNode(1);
    tree.left.right = new TreeNode(3);

    tree.right = new TreeNode(7);
    tree.right.left = new TreeNode(6);
    tree.right.right = new TreeNode(9);

    const expectedTree = new TreeNode(4);
    
    expectedTree.left = new TreeNode(7);
    expectedTree.left.left = new TreeNode(9);
    expectedTree.left.right = new TreeNode(6);

    expectedTree.right = new TreeNode(2);
    expectedTree.right.left = new TreeNode(3);
    expectedTree.right.right = new TreeNode(1);

    expect(invertTree(tree)).toEqual(expectedTree);
  });

  it('should work for example 2', () => {
    const tree = new TreeNode(2);

    tree.left = new TreeNode(1);
    tree.right = new TreeNode(3);

    const expectedTree = new TreeNode(2);

    expectedTree.left = new TreeNode(3);
    expectedTree.right = new TreeNode(1);

    expect(invertTree(tree)).toEqual(expectedTree);
  });

  it('should work for example 3', () => {
    const tree = null;
    expect(invertTree(tree)).toBeNull();
  });
});
