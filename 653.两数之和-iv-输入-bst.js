/*
 * @lc app=leetcode.cn id=653 lang=javascript
 *
 * [653] 两数之和 IV - 输入 BST
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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function (root, k) {
  let arr = [];

  const dfs = (node) => {
    if (!node) return;
    dfs(node.left);
    arr.push(node.val);
    dfs(node.right);
  };
  dfs(root);

  for (let i = 0; i < arr.length; i++) {
    const pre = arr[i];

    for (let j = i + 1; j < arr.length; j++) {
      const next = arr[j];
      if (pre + next === k) {
        return true;
      }
    }
  }
  return false;
};
// @lc code=end
