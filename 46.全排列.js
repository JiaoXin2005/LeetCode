/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  const res = [];

  const backtrack = (path, select) => {
    if (path.length === select.length) {
      res.push(path.slice(0));
      return;
    }

    for (let i = 0; i < select.length; i++) {
      let cur = select[i];
      if (!path.includes(cur)) {
        path.push(cur);
        backtrack(path, select);
        path.pop();
      }
    }
  };

  backtrack([], nums);
  return res;
};
// @lc code=end
