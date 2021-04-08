/*
 * @lc app=leetcode.cn id=563 lang=javascript
 *
 * [563] 二叉树的坡度
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
var findTilt = function (root) {
  let sum = 0;
  const dfs = (node) => {
    if (node === null) return 0;

    let L = dfs(node.left);
    let R = dfs(node.right);

    sum += Math.abs(L - R);

    return L + R + node.val;
  };

  dfs(root);
  return sum;
};
// @lc code=end

// [4,2,9,3,5,null,7]
