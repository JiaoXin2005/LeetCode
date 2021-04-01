/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  const buildBST = (arr, start, end) => {
    if (start > end) {
      return null;
    }

    let midIndx = ~~((end + start) / 2);

    let node = new TreeNode(arr[midIndx]);

    node.left = buildBST(arr, start, midIndx - 1);
    node.right = buildBST(arr, midIndx + 1, end);
    return node;
  };

  return buildBST(nums, 0, nums.length - 1);
};
// @lc code=end
