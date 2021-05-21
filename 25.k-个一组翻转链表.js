/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  if (!head) return null;
  let left = (right = head);

  for (let index = 0; index < k; index++) {
    if (!right) return head;
    right = right.next;
  }
  let newHead = reverseN(left, right);
  left.next = reverseKGroup(right, k);

  return newHead;
};

var reverseN = function(left, right) {
  let pre = null;
  let cur = left;
  let next = null;
  while (cur !== right) {
    next = cur.next;

    cur.next = pre;
    pre = cur;
    cur = next;
  }
  return pre;
};

// @lc code=end
