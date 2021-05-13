/*
 * @lc app=leetcode.cn id=117 lang=javascript
 *
 * [117] 填充每个节点的下一个右侧节点指针 II
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  if (!root) return root;

  let nodes = [root];

  while (nodes.length) {
    let size = nodes.length;

    for (let i = 0; i < size; i++) {
      let left = nodes.shift();
      let right = nodes[0];
      if (right && i !== size - 1) {
        left.next = right;
      } else {
        left.next = null;
      }

      left.left && nodes.push(left.left);
      left.right && nodes.push(left.right);
      console.log(left.val, i, size);
    }
  }

  return root;
};
// @lc code=end

// [1,2,3,4,5]
// [1,2,3,4,5,null,7]
// [1,2,3,4,null,null,5]
// [1,2,3,4,5,null,6,7,null,null,null,null,8]
