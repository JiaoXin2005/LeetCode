/*
 * @lc app=leetcode.cn id=1022 lang=javascript
 *
 * [1022] 从根到叶的二进制数之和
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
var sumRootToLeaf = function (root) {
  let nums = [];
  const dfs = (node, n) => {
    if (!node) return;
    if (!node.left && !node.right) {
      nums.push(n);
      return;
    }

    node.left && dfs(node.left, "" + n + node.left.val);
    node.right && dfs(node.right, "" + n + node.right.val);
  };

  dfs(root, root.val + "");
  return nums.reduce((pre, cur) => pre + parseInt(cur, 2), 0);
};
// @lc code=end
