/*
 * @lc app=leetcode id=21 lang=javascript
 *
 * [21] Merge Two Sorted Lists
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  return l1.concat(l2).sort((a, b) => b - a < 0)
}
// @lc code=end

// let l1 = [1, 2, 4]
// let l2 = [1, 3, 4]

// let res = mergeTwoLists(l1, l2)

// function ListNode(val) {
//   this.val = val
//   this.next = null
// }

// let ln1 = l1.reduce((pre, cur) => new ListNode(pre, cur))

// console.log(ln1)
