# Problem: Merge Two Sorted Lists

## Problem Description

You are given the heads of two sorted linked lists `list1` and `list2`.

Merge the two lists into one **sorted** list. The list should be made by splicing together the nodes of the first two lists.

Return _the head of the merged linked list_.

**Examples:**

```
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]

Input: list1 = [], list2 = []
Output: []

Input: list1 = [], list2 = [0]
Output: [0]
```

**Constraints:**

- The number of nodes in both lists is in the range `[0, 50]`.
- `-100 <= Node.val <= 100`
- Both `list1` and `list2` are sorted in **non-decreasing** order.

## Solution Explanation

### Approach: In-place Merging

**Algorithm**

1. Handle edge cases: If either list is empty, return the other list.
2. Determine which list has the smaller head value to start our merged list.
3. Iterate through both lists simultaneously:
   - Compare the current nodes from both lists.
   - Add the node with the smaller value to our result list.
   - Move to the next node in the list that contributed the smaller value.
4. When one list is exhausted, append the remaining nodes from the other list.

**Complexity Analysis**

- _Time complexity_: `O(n + m)`, where n and m are the lengths of the two lists. We visit each node exactly once.
- _Space complexity_: `O(1)`. We reuse the existing nodes and only create a few pointers, regardless of input size.

### Implementation Details

The key insight in this solution is that we don't need to create any new nodes. Instead, we rearrange the existing nodes by manipulating their `next` pointers. This makes the solution very memory-efficient.

The algorithm maintains two pointers:

- `head`: Points to the head of the merged list (for returning the result)
- `current`: Points to the last node in our merged list (for building the result)

At each step, we compare values from both lists and attach the smaller node to our result list, then advance the corresponding list pointer.
