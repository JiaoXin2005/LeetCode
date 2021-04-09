/*
 * @lc app=leetcode.cn id=617 lang=javascript
 *
 * [617] 合并二叉树
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function (root1, root2) {
  if (!root1 && !root2) return null;

  let v1 = root1 ? root1.val : 0;
  let v2 = root2 ? root2.val : 0;

  let r1L = root1 ? root1.left : undefined;
  let r1R = root1 ? root1.right : undefined;
  let r2L = root2 ? root2.left : undefined;
  let r2R = root2 ? root2.right : undefined;

  let root = new TreeNode(v1 + v2, mergeTrees(r1L, r2L), mergeTrees(r1R, r2R));

  return root;
};
// @lc code=end
// [1,2,3]\n[1,2,3]
// [1,3,2,5]\n[2,1,3,null,4,null,7]
