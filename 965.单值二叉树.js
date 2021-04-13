/*
 * @lc app=leetcode.cn id=965 lang=javascript
 *
 * [965] 单值二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isUnivalTree = function (root) {
  // if (!root) return true;
  if (!root.left || !root.right) {
    if (root.left && !root.right) {
      return root.left.val === root.val && isUnivalTree(root.left);
    }
    if (root.right && !root.left) {
      return root.right.val === root.val && isUnivalTree(root.right);
    }
    return true;
  }

  return (
    root.left &&
    root.right &&
    root.val === root.left.val &&
    root.val === root.right.val &&
    isUnivalTree(root.left) &&
    isUnivalTree(root.right)
  );
};
// @lc code=end

// [1,2]
// [8,null,8,8, null, 9]
// [8,9,8]
// [8,null,9]
