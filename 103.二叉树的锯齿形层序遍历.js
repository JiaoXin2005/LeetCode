/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层序遍历
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
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  if (!root) return [];
  let nodes = [root];
  let res = [];
  let index = 0;

  while (nodes.length) {
    let size = nodes.length;
    let _temp = [];
    for (let i = 0; i < size; i++) {
      let cur = nodes.shift();
      if (cur && typeof cur.val === "number") {
        index % 2 === 0 ? _temp.push(cur.val) : _temp.unshift(cur.val);
      }
      cur.left && nodes.push(cur.left);
      cur.right && nodes.push(cur.right);
    }
    res.push(_temp);
    index++;
  }
  return res;
};
// @lc code=end

// [1,2,3,4,5,6,7,8,9]
// []
// [0,2,4,1,null,3,-1,5,1,null,6,null,8]
