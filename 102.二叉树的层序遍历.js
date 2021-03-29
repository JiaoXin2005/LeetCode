/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (!root) return [];
  let res = [];
  let q = [root];
  while (q.length) {
    let lenght = q.length;
    res.push([]);
    while (lenght--) {
      let n = q.shift();
      res[res.length - 1].push(n.val);
      n.left && q.push(n.left);
      n.right && q.push(n.right);
    }
  }
  return res;
};
// @lc code=end
