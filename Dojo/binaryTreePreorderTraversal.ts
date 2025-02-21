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

export class TreeNode {
  value: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  addLeft(value: number) {
    this.left = new TreeNode(value);
  }

  addRight(value: number) {
    this.right = new TreeNode(value);
  }

  printNodes() {
    return this.preorderTraversal(this, []);
  }

  preorderTraversal(node: TreeNode, nodes: number[]) {
    if (node.value) {
      nodes.push(node.value);
    }

    if (node.left) {
      this.preorderTraversal(node.left, nodes);
    }

    if (node.right) {
      this.preorderTraversal(node.right, nodes);
    }

    return nodes;
  }
}
