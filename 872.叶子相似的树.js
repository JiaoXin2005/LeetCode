/*
 * @lc app=leetcode.cn id=872 lang=javascript
 *
 * [872] 叶子相似的树
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {
  let r1 = [];
  let r2 = [];

  const dfs = (node, arr) => {
    if (!node) return arr;

    if (!node.left && !node.right) {
      arr.push(node.val);
    }
    return [...dfs(node.left, arr), ...dfs(node.right, arr)];
  };

  dfs(root1, r1);
  dfs(root2, r2);

  return r1.toString() === r2.toString();
};
// @lc code=end
