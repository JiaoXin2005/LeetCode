/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
 * @return {number}
 */
var maxDepth = function(root) {
  let res = 0;
  const dfs = (root, r) => {
    if (!root) return null;
    if (!root.left && !root.right) {
      res = Math.max(res, r);
    }
    dfs(root.left, r + 1);
    dfs(root.right, r + 1);
  };
  dfs(root, 1);
  return res;
};
// @lc code=end
