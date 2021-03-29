/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let size = 0;
  let map = new Map();
  let l = 0;
  for (let i = 0; i < s.length; i++) {
    const cur = s[i];
    if (map.has(cur) && map.get(cur) >= l) {
      l = map.get(cur) + 1;
    }

    size = Math.max(size, i - l + 1);

    map.set(cur, i);
  }
  return size;

  // /* 滑动窗口 */
  // let arr = [];
  // let max = 0;
  // for (let i = 0; i < s.length; i++) {
  //   const cur = s[i];
  //   let index = arr.indexOf(cur);
  //   if (index !== -1) {
  //     arr.splice(0, index + 1);
  //   }
  //   arr.push(cur);
  //   max = Math.max(max, arr.length);
  // }
  // console.log(max);
  // return max;
};
// @lc code=end
lengthOfLongestSubstring("abcabcbb");
