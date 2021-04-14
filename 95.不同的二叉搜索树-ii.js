/*
 * @lc app=leetcode.cn id=95 lang=javascript
 *
 * [95] 不同的二叉搜索树 II
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
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function (n) {
  if (n === 0) return [];
  const getAllTrees = (start, end) => {
    if (start > end) return [null]; // 如果左值大于右值，就不是二叉搜索树了
    if (start === end) return [new TreeNode(start)]; // 如果相等就是根节点
    let res = [];

    for (let i = start; i <= end; i++) {
      // 父节点从0到1的情况
      let leftTree = getAllTrees(start, i - 1);
      let rightTree = getAllTrees(i + 1, end);

      for (const left of leftTree) {
        for (const right of rightTree) {
          let root = new TreeNode(i);
          root.left = left;
          root.right = right;
          res.push(root);
        }
      }
    }
    return res;
  };

  return getAllTrees(1, n);
};
// @lc code=end
