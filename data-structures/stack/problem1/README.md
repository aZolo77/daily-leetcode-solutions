# Problem: Valid Parentheses

## Problem Description

Given a string `s` containing just the characters `'('`, `')'`, `'{'`, `'}'`, `'['` and `']'`, determine if the input string is valid.

An input string is valid if:

1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.
3. Every close bracket has a corresponding open bracket of the same type.

## Solution Explanation

### Approach: Stack-based Validation

**Algorithm**

1. Initialize an empty stack to keep track of opening brackets.
2. Create a mapping of closing brackets to their corresponding opening brackets.
3. Iterate through each character in the string:
   - If it's an opening bracket, push it onto the stack.
   - If it's a closing bracket:
     - If the stack is empty, return false (no matching opening bracket).
     - If the top of the stack doesn't match the corresponding opening bracket, return false.
     - Otherwise, pop the top element from the stack.
4. After processing all characters, check if the stack is empty:
   - If empty, all brackets were properly closed, return true.
   - If not empty, some opening brackets were not closed, return false.

**Complexity Analysis**

- _Time complexity_: `O(n)`, where n is the length of the string. We iterate through each character exactly once.
- _Space complexity_: `O(n)` in the worst case. If the string consists of all opening brackets, we would push all of them onto the stack.

## Example

Input: `s = "([])"`

Processing:

- Encounter '(': Push onto stack → Stack: ['(']
- Encounter '[': Push onto stack → Stack: ['(', '[']
- Encounter ']': Compare with top of stack '[', they match, pop → Stack: ['(']
- Encounter ')': Compare with top of stack '(', they match, pop → Stack: []
- Stack is empty after processing all characters → Return true

Input: `s = "(]"`

Processing:

- Encounter '(': Push onto stack → Stack: ['(']
- Encounter ']': Compare with top of stack '(', they don't match → Return false
