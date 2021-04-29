/*
 * @lc app=leetcode.cn id=114 lang=javascript
 *
 * [114] 二叉树展开为链表
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
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  let cur = root;
  while (cur) {
    if (cur.left) {
      const next = cur.left;
      let pre = next;
      while (pre.right) {
        pre = pre.right;
      }

      pre.right = cur.right;
      cur.left = null;
      cur.right = next;
    }
    cur = cur.right;
  }
};
// @lc code=end
