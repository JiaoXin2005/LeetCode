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
  let nodes = [root];

  while (nodes.length) {
    let cur = nodes.shift();

    if (!cur) {
      strArr.push("#");
      continue;
    }

    strArr.push(cur.val);

    nodes.push(cur.left);
    nodes.push(cur.right);
  }

  let str = strArr.join(",");
  return str;
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
  let rootVal = strArr[0];
  let root = new TreeNode(+rootVal);
  let queue = [root];

  for (let i = 1; i < strArr.length; ) {
    let parent = queue.shift();

    let left = strArr[i++];
    if (left === "#") {
      parent.left = null;
    } else {
      let leftNode = new TreeNode(+left);
      parent.left = leftNode;
      queue.push(parent.left);
    }

    let right = strArr[i++];
    if (right === "#") {
      parent.right = null;
    } else {
      let rightNode = new TreeNode(+right);
      parent.right = rightNode;
      queue.push(parent.right);
    }
  }

  return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// @lc code=end
