/*
 * @lc app=leetcode.cn id=106 lang=javascript
 *
 * [106] 从中序与后序遍历序列构造二叉树
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  if (!postorder.length) return null;
  let last = postorder.length - 1;
  let rootV = postorder[last];
  let root = new TreeNode(rootV);

  let midIndx = inorder.indexOf(rootV);

  root.left = buildTree(inorder.slice(0, midIndx), postorder.slice(0, midIndx));
  root.right = buildTree(
    inorder.slice(midIndx + 1),
    postorder.slice(midIndx, postorder.length - 1)
  );

  return root;
};
// @lc code=end
