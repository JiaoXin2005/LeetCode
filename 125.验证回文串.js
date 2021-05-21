/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  if (!s) return false;
  let l = 0;
  let r = s.length - 1;
  let reg = /[a-zA-Z0-9]/;

  while (l < r) {
    if (!reg.test(s[l])) {
      l++;
      continue;
    }

    if (!reg.test(s[r])) {
      r--;
      continue;
    }

    if (s[l].toLowerCase() !== s[r].toLowerCase()) {
      return false;
    }
    l++;
    r--;
  }

  return true;
};
// @lc code=end

// isPalindrome("A man, a plan, a canal: Panama");
isPalindrome("race a car");
