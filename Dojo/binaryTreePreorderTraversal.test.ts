import { describe, expect, it } from "bun:test";
import { TreeNode } from "./binaryTreePreorderTraversal";

describe('binaryTreePreorderTraversal', () => {
  it('should work for example 1', () => {
    const tree = new TreeNode(1);

    tree.addLeft(7);
    tree.addRight(9);
    tree.left?.addLeft(2);
    tree.left?.addRight(6);
    tree.left?.right?.addLeft(5);
    tree.left?.right?.addRight(11);
    tree.right?.addRight(9);
    tree.right?.right?.addLeft(5);
    
    const leaves = tree.printNodes();

    expect(leaves).toEqual([1, 7, 2, 6, 5, 11, 9, 9, 5]);
  });
});
