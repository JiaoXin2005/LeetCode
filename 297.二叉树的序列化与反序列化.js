/*
 * @lc app=leetcode.cn id=297 lang=javascript
 *
 * [297] 二叉树的序列化与反序列化
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
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  if (!root) return "";
  let strArr = [];
  const dfs = (node) => {
    if (!node) {
      strArr.push("#");
      return;
    }
    dfs(node.left);
    dfs(node.right);
    strArr.push(node.val);
  };

  dfs(root);

  return strArr.join(",");
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  if (!data) return null;
  let strArr = data.split(",");

  const dfs = (strArr) => {
    if (!strArr) return null;
    let nodeVal = strArr.pop();
    if (nodeVal === "#") return null;
    let node = new TreeNode(+nodeVal);

    node.right = dfs(strArr);
    node.left = dfs(strArr);
    return node;
  };

  return dfs(strArr);
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// @lc code=end
