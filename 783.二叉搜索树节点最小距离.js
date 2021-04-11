/*
 * @lc app=leetcode.cn id=783 lang=javascript
 *
 * [783] 二叉搜索树节点最小距离
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
var minDiffInBST = function (root) {
  let pre = null;
  let min = Number.MAX_VALUE;
  const update = (val) => {
    if (pre === null) {
      pre = val;
      return;
    }

    min = Math.min(min, Math.abs(pre - val));
    pre = val;
  };

  const dfs = (node) => {
    if (!node) return;

    dfs(node.left);
    update(node.val);
    dfs(node.right);
  };

  dfs(root);

  return min;
};
// @lc code=end
