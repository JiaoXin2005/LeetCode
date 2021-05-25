/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  // nums1.splice(m, nums1.length - m, ...nums2);
  // nums1.sort();
  let p1 = 0;
  let p2 = 0;
  let res = [];
  let cur;
  while (p1 < m || p2 < n) {
    if (p1 === m) {
      cur = nums2[p2++];
    } else if (p2 === n) {
      cur = nums1[p1++];
    } else if (nums1[p1] > nums2[p2]) {
      cur = nums2[p2++];
    } else {
      cur = nums1[p1++];
    }
    res[p1 + p2 - 1] = cur;
  }

  nums1.forEach((_, index, arr) => {
    arr[index] = res[index];
  });
};
// @lc code=end
// merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
