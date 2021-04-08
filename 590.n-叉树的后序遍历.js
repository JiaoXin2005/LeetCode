/*
 * @lc app=leetcode.cn id=590 lang=javascript
 *
 * [590] N 叉树的后序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function (root) {
  let res = [];
  const search = (node) => {
    if (!node) return;
    node.children.forEach((n) => search(n));
    res.push(node.val);
  };
  search(root);
  return res;
};
// @lc code=end
