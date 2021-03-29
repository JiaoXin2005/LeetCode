/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  if (nums.length === 1) return nums[0];
  let max = nums[0];
  let maxArr = [max];
  for (let i = 1; i < nums.length; i++) {
    const cur = nums[i];
    let curMax = max + cur;
    if (curMax > max) {
      maxArr.push(cur);
      max = curMax;
    } else {
      maxArr.shift();
    }
  }
  console.log(maxArr);
  return maxArr;
};
// @lc code=end

maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
