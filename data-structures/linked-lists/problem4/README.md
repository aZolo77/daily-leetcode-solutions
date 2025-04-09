# Problem: Reorder List

## Problem Description

You are given the head of a singly linked-list. The list can be represented as:

L₀ → L₁ → ... → Lₙ₋₁ → Lₙ

Reorder the list to be on the following form:

L₀ → Lₙ → L₁ → Lₙ₋₁ → L₂ → Lₙ₋₂ → ...

You may not modify the values in the list's nodes. Only nodes themselves may be changed.

**Examples:**

```
Example 1:
Input: head = [1,2,3,4]
Output: [1,4,2,3]

Example 2:
Input: head = [1,2,3,4,5]
Output: [1,5,2,4,3]
```

**Constraints:**

- The number of nodes in the list is in the range [1, 5 * 10⁴].
- 1 <= Node.val <= 1000

## Solution Explanation

### Approach 1: Find Middle + Reverse + Merge

**Algorithm**

This approach breaks down the problem into three steps:

1. **Find the middle of the linked list** using a slow and fast pointer technique
2. **Reverse the second half** of the linked list
3. **Merge the two halves** by alternating nodes

**Step 1: Find the Middle**
We use two pointers: a slow pointer that moves one step at a time and a fast pointer that moves two steps at a time. When the fast pointer reaches the end, the slow pointer will be at the middle.

**Step 2: Reverse the Second Half**
We reverse the second half of the list by changing the next pointers to point to the previous nodes.

**Step 3: Merge the Two Halves**
We alternate nodes from the first half and the reversed second half to create the reordered list.

**Complexity Analysis**

- _Time complexity_: `O(n)` where n is the number of nodes in the linked list. We traverse the list three times: once to find the middle, once to reverse the second half, and once to merge.
- _Space complexity_: `O(1)` as we only use a constant amount of extra space regardless of the input size.

### Approach 2: Using a Stack

**Algorithm**

1. Store all nodes in an array/stack
2. Reorder the list by connecting nodes from both ends of the array

**Step 1: Store Nodes**
We traverse the list and store each node in an array.

**Step 2: Reorder Using Two Pointers**
We use two pointers (left and right) starting from opposite ends of the array and connect nodes in the required pattern.

**Complexity Analysis**

- _Time complexity_: `O(n)` where n is the number of nodes in the linked list.
- _Space complexity_: `O(n)` for storing all nodes in an array.

### Key Insight

The key insight for solving this problem efficiently is recognizing that it can be broken down into standard linked list operations: finding the middle, reversing a portion, and merging two lists. By approaching it this way, we can achieve a solution with optimal time and space complexity.

### Comparison of Approaches

1. **Find Middle + Reverse + Merge** is the most space-efficient approach, using only O(1) extra space.
2. **Using a Stack** is conceptually simpler but requires O(n) extra space.

For most practical purposes, the first approach is recommended for its optimal space efficiency.

## Implementation Notes

- Special care must be taken to properly handle the end of the list after merging.
- For odd-length lists, the middle node will be part of the first half.
- The problem requires in-place modification, so we don't return a new list.
