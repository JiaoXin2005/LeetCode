/*
 * @lc app=leetcode.cn id=100 lang=javascript
 *
 * [100] 相同的树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  let l = [p];
  let r = [q];

  while (l.length && r.length) {
    let curL = l.shift();
    let curR = r.shift();
    if (!curL && curR) return false;
    if (curL && !curR) return false;
    if (!curL && !curR) continue;

    if (curL.val !== curR.val) {
      return false;
    }

    curL.left ? l.push(curL.left) : l.push(null);
    curL.right ? l.push(curL.right) : l.push(null);

    curR.left ? r.push(curR.left) : r.push(null);
    curR.right ? r.push(curR.right) : r.push(null);
  }

  return l.length === r.length;
};
// @lc code=end
// [1,2]\n[1,null,2]
