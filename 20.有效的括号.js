/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let stack = [];
  let map = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  let length = s.length;
  for (let i = 0; i < length; i++) {
    const c = s[i];
    if (length % 2 === 1) return false; // 奇数字符串
    if (map[c]) {
      stack.push(c);
    } else {
      if (map[stack.pop()] !== c) {
        return false; // 栈顶元素匹配
      }
    }
  }
  return stack.length === 0;
};
// @lc code=end
