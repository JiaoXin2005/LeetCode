/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let sum = 0;
  let left = 0;
  let right = 0;
  let min = Infinity;
  while (right < nums.length) {
    sum += nums[right];

    while (sum >= target) {
      sum -= nums[left];
      min = Math.min(min, right - left + 1);
      left++;
    }

    ++right;
  }

  return min === Infinity ? 0 : min;
};
// @lc code=end

let res = minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1]);
console.log(res);

// 7
// [2,3,1,2,4,3]
// 4
// [1,4,4]
// 11
// [1,1,1,1,1,1,1,1]
