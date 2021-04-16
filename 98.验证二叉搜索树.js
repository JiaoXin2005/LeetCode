/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
 * @return {boolean}
 */
var isValidBST = function (root) {
  // let pre = null;
  // let res = true;
  // const update = (val) => {
  //   if (!res) return;
  //   if (pre === null) {
  //     pre = val;
  //     return;
  //   }
  //   let flag = pre < val;
  //   res = flag;
  //   pre = val;
  //   return flag;
  // };
  // const dfs = (node) => {
  //   if (!node || !res) {
  //     return;
  //   }
  //   dfs(node.left);
  //   update(node.val);
  //   if (!res) {
  //     return;
  //   }
  //   dfs(node.right);
  // };
  // dfs(root);
  // return res;

  let pre = -Infinity;
  const inOrder = (node) => {
    if (!node) {
      return true;
    }
    let leftRes = inOrder(node.left);
    let preRes = node.val > pre;
    pre = node.val;
    let rightRes = inOrder(node.right);

    return preRes && leftRes && rightRes;
  };

  return inOrder(root);
};
// @lc code=end
// [5,1,4,null,null,3,6]
// [1,1]
