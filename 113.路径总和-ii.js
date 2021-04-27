/*
 * @lc app=leetcode.cn id=113 lang=javascript
 *
 * [113] 路径总和 II
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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
  const res = [];
  const dfs = (node, paths) => {
    if (!node) return;
    let _temp = paths.slice(0);
    _temp.push(node.val);

    if (!node.left && !node.right) {
      if (_temp.reduce((p, c) => p + c) === targetSum) {
        res.push(_temp);
      }
    }

    dfs(node.left, _temp);
    dfs(node.right, _temp);
  };

  dfs(root, []);
  return res;
};
// @lc code=end
