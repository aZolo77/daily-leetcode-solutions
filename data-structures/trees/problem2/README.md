# Problem: Validate Binary Search Tree

## Problem Description

Given the root of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:

- The left subtree of a node contains only nodes with keys less than the node's key.
- The right subtree of a node contains only nodes with keys greater than the node's key.
- Both the left and right subtrees must also be binary search trees.

**Examples:**

```
Example 1:
Input: root = [2,1,3]
Output: true

Example 2:
Input: root = [5,1,4,null,null,3,6]
Output: false
Explanation: The root node's value is 5 but its right child's value is 4.
```

**Constraints:**

- The number of nodes in the tree is in the range [1, 10^4].
- -2^31 <= Node.val <= 2^31 - 1

## Solution Explanation

### Approach 1: BFS with Range Checking

**Algorithm**

1. Use a queue for BFS traversal, storing each node along with its valid range (minimum and maximum allowed values).
2. For each node, check if its value falls within its valid range.
3. For the left child, update the maximum allowed value to be the parent's value.
4. For the right child, update the minimum allowed value to be the parent's value.
5. If any node's value violates the range constraints, return false.
6. If the entire tree is traversed without violations, return true.

**Complexity Analysis**

- _Time complexity_: `O(n)` where n is the number of nodes in the tree. Each node is visited exactly once.
- _Space complexity_: `O(n)` in the worst case for the queue.

### Approach 2: DFS with Range Checking (Recursive)

**Algorithm**

1. Use recursive DFS to validate each node against its valid range of values.
2. Initially, the root's range is [-Infinity, Infinity].
3. For each node:
   - Check if its value is within the valid range.
   - Validate the left subtree with an updated maximum value (current node's value).
   - Validate the right subtree with an updated minimum value (current node's value).
4. Return true if all nodes pass validation.

**Complexity Analysis**

- _Time complexity_: `O(n)` where n is the number of nodes. Each node is visited exactly once.
- _Space complexity_: `O(h)` where h is the height of the tree. In the worst case (skewed tree), it's O(n).

### Approach 3: In-Order Traversal

**Algorithm**

1. Perform an in-order traversal of the tree (left -> node -> right).
2. In a valid BST, in-order traversal should produce values in ascending order.
3. Track the previously visited node's value.
4. For each node, check if its value is greater than the previous value.
5. If at any point this condition is violated, return false.

**Complexity Analysis**

- _Time complexity_: `O(n)` where n is the number of nodes. Each node is visited exactly once.
- _Space complexity_: `O(h)` where h is the height of the tree for the recursion stack.

### Key Insight

The key insight to this problem is understanding that a node's value must be within a certain range depending on its position in the tree. These ranges narrow down as we traverse deeper into the tree.

### Comparison of Approaches

1. **BFS with Range Checking** is intuitive and works well for wide trees but uses more memory than needed.
2. **DFS with Range Checking** is very efficient, especially for deep trees, and is typically the most straightforward approach.
3. **In-Order Traversal** is elegant and uses the inherent property of BSTs. It can be slightly more difficult to understand but is just as efficient.

For most practical purposes, the DFS approach offers the best balance of efficiency and clarity. The in-order traversal approach is a brilliant alternative that uses a fundamental property of BSTs.
