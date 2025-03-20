# Problem: Subtree of Another Tree

## Problem Description

Given the roots of two binary trees `root` and `subRoot`, return `true` if there is a subtree of `root` with the same structure and node values of `subRoot` and `false` otherwise.

A subtree of a binary tree `tree` is a tree that consists of a node in `tree` and all of this node's descendants. The tree `tree` could also be considered as a subtree of itself.

## Solution Explanation

### Approach 1: Recursive Tree Traversal and Comparison

**Algorithm**

1. Create a helper function `isSameTree` that checks if two trees are identical:

   - If both trees are null, return true.
   - If only one tree is null, return false.
   - If the values of the current nodes differ, return false.
   - Recursively check if left subtrees are identical and right subtrees are identical.

2. For the main `isSubtree` function:
   - If the main tree (root) is null, return false (a null tree cannot contain a subtree).
   - Check if the current subtree is identical to the target subtree using `isSameTree`.
   - If not, recursively check the left and right subtrees of the current node.

**Complexity Analysis**

- _Time complexity_: `O(m*n)`, where m is the number of nodes in the root tree and n is the number of nodes in the subRoot tree. In the worst case, we might need to check for every node in the root tree whether its subtree matches the subRoot tree.
- _Space complexity_: `O(h)`, where h is the height of the tree due to the recursion stack. In the worst case, this could be O(m) for a skewed tree.

### Approach 2: Tree Serialization (Alternative)

**Algorithm**

1. Serialize both trees into string representations using pre-order traversal.
2. Check if the serialized string of the subtree is contained within the serialized string of the main tree.

**Complexity Analysis**

- _Time complexity_: `O(m + n)` for serialization plus string search.
- _Space complexity_: `O(m + n)` for storing the serialized strings.

## Example

Input: `root = [3,4,5,1,2], subRoot = [4,1,2]`

Processing with Approach 1:

1. Start at root (3): Check if the tree starting from 3 matches subRoot[4,1,2] → No match
2. Move to left child (4): Check if the tree starting from 4 matches subRoot[4,1,2] → Trees match! Return true

Input: `root = [3,4,5,1,2,null,null,null,null,0], subRoot = [4,1,2]`

Processing with Approach 1:

1. Start at root (3): Check if the tree starting from 3 matches subRoot[4,1,2] → No match
2. Move to left child (4): Check if the tree starting from 4 matches subRoot[4,1,2] → Values match, but structure doesn't (extra node 0)
3. Continue checking other nodes → No match found, return false
