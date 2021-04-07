/*
 * @lc app=leetcode.cn id=530 lang=javascript
 *
 * [530] 二叉搜索树的最小绝对差
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
var getMinimumDifference = function (root) {
  let res = Number.MAX_VALUE;
  let pre = null;

  const diff = (val) => {
    if (pre !== null) {
      res = Math.min(Math.abs(pre - val), res);
    }
    pre = val;
  };

  const dfs = (node) => {
    if (!node) return;

    dfs(node.left);
    diff(node.val);
    dfs(node.right);
  };

  dfs(root);
  return res;
};
// @lc code=end

//[236,104,701,null,227,null,911]
