/*
 * @lc app=leetcode.cn id=559 lang=javascript
 *
 * [559] N 叉树的最大深度
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
 * @return {number}
 */
var maxDepth = function (root) {
  const dfs = (node, d) => {
    if (!node) return d;
    d++;
    let res = node.children.map((n) => dfs(n, d));
    return Math.max(...res, d);
  };
  return dfs(root, 0);
};
// @lc code=end
