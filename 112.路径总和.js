/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
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
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
  if (!root) return false;
  let res = false;
  let dfs = (root, s) => {
    if (!root.left && !root.right && s === sum) {
      res = true;
      return;
    }
    root.left && dfs(root.left, root.left.val + s);
    root.right && dfs(root.right, root.right.val + s);
  };
  dfs(root, root.val);
  return res;
};
// @lc code=end
