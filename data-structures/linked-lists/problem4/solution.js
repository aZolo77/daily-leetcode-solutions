/**
 * Reorder List - LeetCode Solution
 * Multiple approaches to reorder a linked list
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * Approach: Find Middle + Reverse + Merge
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
const reorderList = function (head) {
  if (!head || !head.next) return;

  // Step 1: Find the middle of the linked list
  function findMiddle(head) {
    let slow = head;
    let fast = head;

    while (fast.next && fast.next.next) {
      slow = slow.next;
      fast = fast.next.next;
    }

    return slow;
  }

  // Step 2: Reverse the second half of the linked list
  function reverseList(head) {
    let prev = null;
    let current = head;
    let next = null;

    while (current) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    return prev;
  }

  // Find the middle node
  const middle = findMiddle(head);

  // Split the list into two halves
  let secondHalf = middle.next;
  middle.next = null;

  // Reverse the second half
  const reversedSecondHalf = reverseList(secondHalf);

  // Step 3: Merge the two halves by alternating nodes
  let first = head;
  let second = reversedSecondHalf;

  while (first && second) {
    // Save next pointers before modifying
    let firstNext = first.next;
    let secondNext = second.next;

    // Link first to second
    first.next = second;

    // Link second to firstNext (if it exists)
    if (firstNext) {
      second.next = firstNext;
    }

    // Move pointers forward
    first = firstNext;
    second = secondNext;
  }

  // No return value needed as we modify the list in-place
};

/**
 * Alternative Approach: Using a Stack
 * Time Complexity: O(n)
 * Space Complexity: O(n) for the stack
 *
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
const reorderListUsingStack = function (head) {
  if (!head || !head.next) return;

  // Step 1: Store all nodes in an array/stack
  const nodes = [];
  let current = head;

  while (current) {
    nodes.push(current);
    current = current.next;
  }

  // Step 2: Reorder using the array
  let left = 0;
  let right = nodes.length - 1;

  while (left < right) {
    // Connect left node to right node
    nodes[left].next = nodes[right];
    left++;

    // If we've processed all nodes, break
    if (left === right) break;

    // Connect right node to next left node
    nodes[right].next = nodes[left];
    right--;
  }

  // Mark the end of the list
  nodes[left].next = null;
};

// Export both solutions
module.exports = {
  reorderList,
  reorderListUsingStack,
};
