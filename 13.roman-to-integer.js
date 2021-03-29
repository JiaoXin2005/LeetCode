/*
 * @lc app=leetcode id=13 lang=javascript
 *
 * [13] Roman to Integer
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */

const numMap = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
}

var romanToInt = function(s) {
  let strArr = s.split('')
  let res = 0

  for (let i = 0; i < strArr.length; i++) {
    let current = numMap[strArr[i]]
    let next = i + 1 === strArr.length ? 0 : numMap[strArr[i + 1]]

    if (next > current) {
      res += next - current
      i++
    } else {
      res += current
    }
  }

  return res
}
// @lc code=end

let val = romanToInt('MCMXCIV')
console.log(val)
