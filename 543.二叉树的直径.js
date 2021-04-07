/*
 * @lc app=leetcode.cn id=543 lang=javascript
 *
 * [543] 二叉树的直径
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
var diameterOfBinaryTree = function (root) {
  let res = 1;
  const dfs = (node) => {
    if (!node) return 0;

    let l = dfs(node.left);
    let r = dfs(node.right);

    res = Math.max(l + r + 1, res);

    return Math.max(l, r) + 1;
  };

  dfs(root);
  return res - 1;
};
// @lc code=end

// [1,2,3,4,5]
// [1,2]
