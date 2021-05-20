/*
 * @lc app=leetcode.cn id=662 lang=javascript
 *
 * [662] 二叉树最大宽度
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
var widthOfBinaryTree = function(root) {
  if (!root) return 0;
  let res = 0;
  let left = new Map();
  const dfs = (node, depth, position) => {
    if (!node) return;
    if (!left.has(depth)) {
      left.set(depth, position);
    }

    if (position > Number.MAX_SAFE_INTEGER) {
      position = position << 28; //大整数处理
    }
    res = Math.max(res, position - left.get(depth) + 1);
    dfs(node.left, depth + 1, position * 2);
    dfs(node.right, depth + 1, position * 2 + 1);
  };

  dfs(root, 0, 0);
  return res;
};
// @lc code=end

// [1,3,2,5,null,null,9,6,null,null,7]
// [1,3,2,5,null,null,9,6,null,null,null]
