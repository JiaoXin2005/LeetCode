/*
 * @lc app=leetcode.cn id=993 lang=javascript
 *
 * [993] 二叉树的堂兄弟节点
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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function (root, x, y) {
  let arr = [root];
  let nodes = [];
  let index = 1;

  while (arr.length) {
    let size = arr.length;

    for (let i = 0; i < size; i++) {
      let cur = arr.shift();
      nodes.push(cur.val);
      if (cur.left && cur.right) {
        let arr = [cur.left.val, cur.right.val];
        if (arr.includes(x) && arr.includes(y)) {
          return false;
        }
      }

      cur.left && arr.push(cur.left);
      cur.right && arr.push(cur.right);
    }
    if (nodes.includes(x) && nodes.includes(y)) {
      return true;
    }
    console.log(nodes);

    nodes = [];
    index++;
  }

  return false;
};
// @lc code=end

// [1,2,3,null,4]\n2\n3
