/*
 * @lc app=leetcode.cn id=501 lang=javascript
 *
 * [501] 二叉搜索树中的众数
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, x left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findMode = function (root) {
  let nums = [];
  let maxIndx = 0;
  let count = 0;
  let maxCount = 0;
  const update = (val) => {
    if (maxIndx === val) {
      ++count;
    } else {
      count = 1;
      maxIndx = val;
    }

    if (maxCount === count) {
      nums.push(val);
    }

    if (count > maxCount) {
      maxCount = count;
      nums = [maxIndx];
    }
  };

  const dfs = (node) => {
    if (!node) return;
    dfs(node.left);
    update(node.val);
    dfs(node.right);
  };

  dfs(root);
  return nums;
};
// @lc code=end
