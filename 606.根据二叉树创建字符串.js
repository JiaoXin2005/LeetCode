/*
 * @lc app=leetcode.cn id=606 lang=javascript
 *
 * [606] 根据二叉树创建字符串
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t
 * @return {string}
 */
var tree2str = function (t) {
  const dfs = (node) => {
    if (!node) {
      return "";
    }
    let l = dfs(node.left);
    let r = dfs(node.right);

    l = l || r ? `(${l})` : l;
    r = r ? `(${r})` : r;

    return `${node.val}${l}${r}`;
  };

  return dfs(t);
};
// @lc code=end
// [1,2,3,4]
