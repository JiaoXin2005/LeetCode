/*
 * @lc app=leetcode.cn id=96 lang=javascript
 *
 * [96] 不同的二叉搜索树
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  if (n === 0 || n === 1) return 1;

  let num = 0;

  for (let i = 0; i < n; i++) {
    num += numTrees(i) * numTrees(n - i - 1);
  }

  return num;
};
// @lc code=end
