/*
 * @lc app=leetcode.cn id=671 lang=javascript
 *
 * [671] 二叉树中第二小的节点
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
 * @return {number}
 */
var findSecondMinimumValue = function (root) {
  // let set = new Set();
  // const dfs = (node) => {
  //   if (!node) return;
  //   dfs(node.left);
  //   dfs(node.right);
  //   set.add(node.val);
  // };
  // dfs(root);
  // return [...set].sort((a, b) => a - b)[1] || -1;

  const dfs = (node, min) => {
    if (!node) return -1;
    if (node.val > min) return node.val;

    let l = dfs(node.left, min);
    let r = dfs(node.right, min);

    if (l === -1) return r;
    if (r === -1) return l;

    return Math.min(l, r);
  };

  return dfs(root, root.val);
};
// @lc code=end
