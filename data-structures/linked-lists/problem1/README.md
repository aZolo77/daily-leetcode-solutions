# Problem: Linked List Cycle

## Problem Description

Given `head`, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the `next` pointer. Internally, `pos` is used to denote the index of the node that tail's `next` pointer is connected to. **Note that** `pos` is not passed as a parameter.

Return `true` if there is a cycle in the linked list. Otherwise, return `false`.

## Solution Explanation

### Approach 1: HashSet

**Algorithm**

1. Create a HashSet to keep track of nodes we've already seen.
2. Traverse the linked list, starting from the head.
3. For each node:
   - If the node is already in our HashSet, we've found a cycle. Return `true`.
   - Otherwise, add the node to our HashSet and continue to the next node.
4. If we reach the end of the list (a node with `next` pointing to `null`), there is no cycle. Return `false`.

**Complexity Analysis**

- _Time complexity_: `O(n)`, where n is the number of nodes in the linked list. We visit each node at most once.
- _Space complexity_: `O(n)`. In the worst case, we need to store all nodes in the HashSet.

### Approach 2: Floyd's Cycle-Finding Algorithm (Fast and Slow Pointers)

**Algorithm**

1. Use two pointers: `slow` and `fast`, both initially pointing to the head of the list.
2. Move the slow pointer one step at a time and the fast pointer two steps at a time.
3. If there is a cycle, the fast pointer will eventually catch up to the slow pointer, and they will meet at some point.
4. If there is no cycle, the fast pointer will reach the end of the list.

**Complexity Analysis**

- _Time complexity_: `O(n)`, where n is the number of nodes in the linked list.
  - If there is no cycle, the fast pointer will reach the end of the list in n/2 time.
  - If there is a cycle, the fast pointer will catch up to the slow pointer in at most n time.
- _Space complexity_: `O(1)`. We only use two pointers, regardless of the list size.

### Comparison

While both approaches have the same time complexity for this problem, the two-pointer approach has a better space complexity, making it more efficient in terms of memory usage. However, the HashSet approach may be more intuitive and easier to understand.
