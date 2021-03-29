/*
 * @lc app=leetcode.cn id=129 lang=javascript
 *
 * [129] 求根节点到叶节点数字之和
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
var sumNumbers = function(root) {
  let sum = 0;
  const dfs = (node, v) => {
    v = "" + v;
    if (!node.left && !node.right) {
      sum += Number(v);
      return v;
    }

    node.left && dfs(node.left, "" + v + node.left.val);

    node.right && dfs(node.right, "" + v + node.right.val);
  };

  dfs(root, root.val);

  return sum;
};
// @lc code=end
