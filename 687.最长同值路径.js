/*
 * @lc app=leetcode.cn id=687 lang=javascript
 *
 * [687] 最长同值路径
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var longestUnivaluePath = function(root) {
  if (!root) return 0;
  let res = 0;
  const dfs = (node) => {
    if (!node) return 0;

    let l = dfs(node.left);
    let r = dfs(node.right);

    let left = 0;
    let right = 0;

    if (node.val === node?.left?.val) {
      left = l + 1;
    }

    if (node.val === node?.right?.val) {
      right = r + 1;
    }

    res = Math.max(res, left + right);

    return Math.max(left, right);
  };

  dfs(root);
  return res;
};
// @lc code=end

// [1,4,5,4,4,5]
