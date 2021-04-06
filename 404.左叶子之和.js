/*
 * @lc app=leetcode.cn id=404 lang=javascript
 *
 * [404] 左叶子之和
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
var sumOfLeftLeaves = function (root) {
  let sum = 0;
  const dfs = (node, flag) => {
    if (!node) return 0;
    if (node && !node.left && !node.right && flag === "L") {
      return (sum += node.val);
    }

    node.left && dfs(node.left, "L");
    node.right && dfs(node.right, "R");
  };

  dfs(root, 0);
  return sum;
};
// @lc code=end
