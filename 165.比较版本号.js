/*
 * @lc app=leetcode.cn id=165 lang=javascript
 *
 * [165] 比较版本号
 */

// @lc code=start
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
  let arr1 = version1.split(".");
  let arr2 = version2.split(".");
  let res = 0;

  while (arr1.length || arr2.length) {
    let a1 = +arr1.shift() || 0;
    let a2 = +arr2.shift() || 0;
    if (a1 > a2) {
      return (res = 1);
    } else if (a1 < a2) {
      return (res = -1);
    } else {
      res = 0;
    }
  }
  return res;
};
// @lc code=end

console.log(compareVersion("0.1", "1.0"));
