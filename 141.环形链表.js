/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
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
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  let left = head;
  let right = head;
  while (right.next && left && right) {
    left = left.next;
    right = left.next.next;
    if (left === right) {
      return true;
    }
  }
  return false;
};
// @lc code=end
