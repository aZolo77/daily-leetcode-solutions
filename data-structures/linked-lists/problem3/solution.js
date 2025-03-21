/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * Reverses a linked list using an iterative approach.
 * @param {ListNode} head - The head of the linked list to reverse
 * @return {ListNode} - The head of the reversed linked list
 */
const reverseList = function (head) {
  let prev = null;
  let current = head;

  while (current !== null) {
    // Save a reference to the next node
    const next = current.next;

    // Reverse the pointer
    current.next = prev;

    // Move prev and current pointers forward
    prev = current;
    current = next;
  }

  // The new head is the previous last node
  return prev;
};

/**
 * Reverses a linked list using a recursive approach.
 * @param {ListNode} head - The head of the linked list to reverse
 * @return {ListNode} - The head of the reversed linked list
 */
const reverseListRecursive = function (head) {
  // Base case: empty list or list with only one node
  if (head === null || head.next === null) {
    return head;
  }

  // Recursively reverse the rest of the list
  const newHead = reverseListRecursive(head.next);

  // Adjust pointers to reverse the current node
  head.next.next = head; // Make the next node point back to the current
  head.next = null; // Current node becomes the new tail

  return newHead; // Return the new head (originally the last node)
};

// Example usage:
/*
const list = new ListNode(1,
               new ListNode(2,
                 new ListNode(3,
                   new ListNode(4,
                     new ListNode(5)))));

console.log(reverseList(list));         // Iterative solution
console.log(reverseListRecursive(list)); // Recursive solution
*/
