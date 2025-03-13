// Approach 1: HashSet
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
const hasCycleWithHashSet = function (head) {
  const visited = new Set();

  while (head) {
    if (visited.has(head)) {
      return true;
    }

    visited.add(head);
    head = head.next;
  }

  return false;
};

// Approach 2: Floyd's Cycle-Finding Algorithm (Fast and Slow Pointers)
/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycleWithTwoPointers = function (head) {
  if (!head || !head.next) {
    return false;
  }

  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next; // Move slow pointer by 1 step
    fast = fast.next.next; // Move fast pointer by 2 steps

    if (slow === fast) {
      // If they meet, there's a cycle
      return true;
    }
  }

  return false; // If fast reaches the end, no cycle
};
