# Problem: Add Two Numbers

## Problem Description

You are given two **non-empty** linked lists representing two non-negative integers. The digits are stored in **reverse order**, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

**Examples:**

```
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.

Input: l1 = [0], l2 = [0]
Output: [0]

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
```

**Constraints:**

- The number of nodes in each linked list is in the range `[1, 100]`.
- `0 <= Node.val <= 9`
- It is guaranteed that the list represents a number that does not have leading zeros.

## Solution Explanation

### Approach: Elementary Math Simulation

The problem asks us to add two numbers represented by linked lists where digits are in reverse order. This setup is ideal for a direct simulation of how we add numbers on paper, from right to left (least significant digit to most significant).

**Algorithm**

1.  Initialize a dummy head node `resultedList` to simplify handling the start of the new list. A `current` pointer will track the end of our result list.
2.  Initialize a `carry` variable to `0`. This will store the carry-over value when a sum exceeds 9.
3.  Iterate through both lists `l1` and `l2` from head to tail. The loop continues as long as there are nodes in either list or if there's a remaining `carry`.
4.  Inside the loop, for each position:
    - Get the values from the current nodes of `l1` and `l2`. If a list has been fully traversed, its value for the current position is considered `0`.
    - Calculate the `sum` of the two digit values and the `carry` from the previous step.
    - The new digit for our result list is `sum % 10`.
    - The new `carry` for the next step is `floor(sum / 10)`.
    - Create a new node with the calculated digit and append it to the result list using the `current` pointer.
    - Advance the `current` pointer to the newly created node.
    - Advance `l1` and `l2` pointers to their next nodes, if they exist.
5.  After the loop finishes, the `resultedList.next` will point to the head of the complete sum list. Return it.

**Complexity Analysis**

- _Time complexity_: `O(max(n, m))`, where `n` and `m` are the lengths of `l1` and `l2` respectively. We traverse each list at most once. The loop runs for `max(n, m)` iterations, plus one more if there's a final carry.
- _Space complexity_: `O(max(n, m))`. The length of the new list is at most `max(n, m) + 1`, which is the space required to store the result.

### Implementation Details

- **Dummy Head**: Using a dummy head node is a common and effective trick in linked list problems. It avoids the need for special conditional logic to handle the creation of the first node in the result list.
- **Loop Condition**: The condition `while (list1 || list2 || carry > 0)` is crucial. It correctly handles lists of unequal length and ensures that any final carry-over digit (e.g., when adding 99 + 1) is not forgotten.
