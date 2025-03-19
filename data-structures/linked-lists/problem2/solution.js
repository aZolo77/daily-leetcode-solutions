/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * Merge two sorted linked lists into one sorted linked list.
 * @param {ListNode} list1 - The head of the first sorted linked list
 * @param {ListNode} list2 - The head of the second sorted linked list
 * @return {ListNode} - The head of the merged sorted linked list
 */
const mergeTwoLists = function (list1, list2) {
  // Handle edge cases: if either list is empty, return the other list
  if (!list1) return list2;
  if (!list2) return list1;

  let head = null;
  let current = null;

  // Determine which list has the smaller head value to start our merged list
  if (list1.val < list2.val) {
    head = list1;
    list1 = list1.next;
  } else {
    head = list2;
    list2 = list2.next;
  }

  current = head;

  // Iterate through both lists simultaneously
  while (list1 && list2) {
    // Compare the current nodes from both lists
    if (list1.val <= list2.val) {
      // Add the node with the smaller value to our result list
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }

    // Move our pointer to the latest node in our result list
    current = current.next;
  }

  // When one list is exhausted, append the remaining nodes from the other list
  if (list1) current.next = list1;
  if (list2) current.next = list2;

  return head;
};

// Alternative implementation with a dummy head (sometimes easier to understand)
const mergeTwoListsWithDummy = function (list1, list2) {
  // Create a dummy node to simplify edge cases
  const dummy = new ListNode(-1);
  let current = dummy;

  // Iterate while both lists have nodes
  while (list1 && list2) {
    if (list1.val <= list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }

    current = current.next;
  }

  // Attach remaining nodes (only one of these will execute)
  current.next = list1 || list2;

  // Return the head of the merged list (skip the dummy node)
  return dummy.next;
};
