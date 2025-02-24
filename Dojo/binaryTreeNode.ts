export class TreeNode {
  value: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor (
    value?: number,
    left?: TreeNode | null,
    right?: TreeNode | null,
  ) {
    this.value = value ?? 0;
    this.left = left ?? null;
    this.right = right ?? null;
  };
}
