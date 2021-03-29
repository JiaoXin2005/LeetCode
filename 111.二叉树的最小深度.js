/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
 * @return {number}
 */
var minDepth = function(root) {
  if (!root) return 0;
  let queue = [[root, 1]];
  while (queue.length) {
    let [n, l] = queue.shift();
    if (!n.left && !n.right) return l;
    n.left && queue.push([n.left, l + 1]);
    n.right && queue.push([n.right, l + 1]);
  }
};
// @lc code=end
