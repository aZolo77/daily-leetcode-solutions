# Problem 1: Implement Queue using Stacks

## Problem Description

Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (`push`, `peek`, `pop`, and `empty`).

Implement the `MyQueue` class:

- `push(int x)` Pushes element `x` to the back of the queue.
- `pop()` Removes the element from the front of the queue and returns it.
- `peek()` Returns the element at the front of the queue.
- `empty()` Returns `true` if the queue is empty, `false` otherwise.

Note:

- You must use only standard operations of a stack, which means only `push` to top, `peek/pop` from top, `size`, and `is empty` operations are valid.

## Solution Algorithm

- `push(value)`:

  1.  Move all elements from the `first` stack to the `last` stack.
  2.  Add the new `value` to the `last` stack.

  > Time Complexity: `O(n)`

  > Space Complexity: `O(n)`

- `pop()`:

  1.  Move all elements from the `last` stack to the `first` stack.
  2.  Remove and return the top element from the `first` stack.

  > Time Complexity: `O(n)`

  > Space Complexity: `O(n)`

- `peek()`:

  1.  If the `first` stack has elements, return the top element of `first`.
  2.  Otherwise, return the bottom element of `last`.

  > Time Complexity: `O(1)`

  > Space Complexity: `O(1)`

- `empty()`:

  1.  Check if both the `first` and `last` stacks are empty.

  > Time Complexity: `O(1)`

  > Space Complexity: `O(1)`
