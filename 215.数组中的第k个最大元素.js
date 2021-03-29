/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  const bubbleSort = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = i; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
          [arr[j], arr[i]] = [arr[i], arr[j]];
        }
      }
    }
  };
  bubbleSort(nums);

  return nums[k - 1];
};
// @lc code=end
findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 2);
