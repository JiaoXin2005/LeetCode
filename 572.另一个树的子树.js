/*
 * @lc app=leetcode.cn id=572 lang=javascript
 *
 * [572] 另一个树的子树
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
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
const isSameTree = (s, t) => {
  if (!s && !t) return true;
  if (!s || !t) return false;

  return (
    isSameTree(s.left, t.left) &&
    isSameTree(s.right, t.right) &&
    s.val === t.val
  );
};

var isSubtree = function (s, t) {
  if (!s && !t) {
    return true;
  }
  if (!t) return true;
  if (!s) return false;

  return isSubtree(s.left, t) || isSubtree(s.right, t) || isSameTree(s, t);
};
// @lc code=end
