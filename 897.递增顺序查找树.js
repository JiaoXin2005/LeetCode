/*
 * @lc app=leetcode.cn id=897 lang=javascript
 *
 * [897] 递增顺序查找树
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
 * @return {TreeNode}
 */
var increasingBST = function (root) {
  let newRoot = new TreeNode();
  let cur = newRoot;

  const update = (val) => {
    cur.right = new TreeNode(val);
    cur = cur.right;
  };

  const dfs = (node) => {
    if (!node) return;
    dfs(node.left);
    update(node.val);
    dfs(node.right);
  };

  dfs(root);

  return newRoot.right;
};
// @lc code=end
