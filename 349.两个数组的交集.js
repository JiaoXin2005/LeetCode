/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  let res = [];
  nums1.forEach((n1) => {
    if (nums2.includes(n1)) {
      res.push(n1);
    }
  });
  return [...new Set(res)];
};
// @lc code=end
