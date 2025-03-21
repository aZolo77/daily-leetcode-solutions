# Problem: Reverse Linked List

## Problem Description

Given the head of a singly linked list, reverse the list, and return the reversed list.

**Examples:**

```
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]

Input: head = [1,2]
Output: [2,1]

Input: head = []
Output: []
```

**Constraints:**

- The number of nodes in the list is the range `[0, 5000]`.
- `-5000 <= Node.val <= 5000`

## Solution Explanation

The problem can be solved using two different approaches: iterative and recursive.

### Approach 1: Iterative Solution

**Algorithm**

1. Initialize three pointers: `prev` as null, `current` as the head, and `next`.
2. Iterate through the list:
   - Store the next node before changing pointers
   - Reverse the current node's pointer to point to the previous node
   - Move `prev` and `current` pointers one step forward
3. Return the new head of the reversed list (which is the `prev` pointer after the loop)

**Complexity Analysis**

- _Time complexity_: `O(n)`, where n is the length of the linked list. We only traverse the list once.
- _Space complexity_: `O(1)`. We only use a constant amount of extra space regardless of input size.

### Approach 2: Recursive Solution

**Algorithm**

1. Base case: If the list is empty or has only one node, return the head (already reversed).
2. Recursively reverse the sublist starting from the second node.
3. Adjust the pointers:
   - Make the second node point to the head
   - Make the head point to null (it will be the new tail)
4. Return the new head of the reversed list (which comes from the recursive call)

**Complexity Analysis**

- _Time complexity_: `O(n)`, where n is the length of the linked list. We visit each node exactly once.
- _Space complexity_: `O(n)` due to the recursion stack. In the worst case, the recursion stack can go n levels deep.

### Implementation Details

The key insight in both solutions is how we manipulate the `next` pointers to reverse the list. In the iterative approach, we carefully track the previous, current, and next nodes to avoid losing references. In the recursive approach, we leverage the call stack to handle the reversal, making the code more elegant but less memory efficient.
