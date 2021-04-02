/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  let arr = [];
  const dfs = (node, res) => {
    if (node && !node.left && !node.right) {
      res + node.val;
      arr.push(res + node.val);
      return;
    }
    node.left && dfs(node.left, res + node.val + "->");
    node.right && dfs(node.right, res + node.val + "->");
  };

  dfs(root, "");

  return arr;
};
// @lc code=end
