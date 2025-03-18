# Problem: Missing Number

## Problem Description

Given an array `nums` containing `n` distinct numbers in the range `[0, n]`, return the only number in the range that is missing from the array.

## Solution Explanation

### Approach 1: Mathematical Formula (Sum)

**Algorithm**

1. Calculate the expected sum of all numbers from 0 to n using the formula: `n * (n + 1) / 2`
2. Calculate the actual sum of all numbers in the array.
3. The difference between the expected sum and the actual sum is the missing number.

**Complexity Analysis**

- _Time complexity_: `O(n)`, where n is the number of elements in the array. We need to iterate through the array once to calculate the actual sum.
- _Space complexity_: `O(1)`. We only use a constant amount of extra space.

### Approach 2: Sorting and Searching

**Algorithm**

1. Sort the array in ascending order.
2. Iterate through the sorted array and check if each element's value matches its index.
3. If there's a mismatch (`nums[i] !== i`), return the index `i` as the missing number.
4. If no mismatch is found, the missing number is `n` (the length of the array).

**Complexity Analysis**

- _Time complexity_: `O(n log n)`, dominated by the sorting operation.
- _Space complexity_: `O(1)` or `O(n)` depending on the implementation of the sort method in JavaScript.

### Comparison

Both approaches correctly solve the problem, but the mathematical approach is more efficient with O(n) time complexity compared to the sorting approach's O(n log n). The mathematical solution also requires less code and is more elegant.

For very large arrays, the difference in performance would be significant, making the mathematical approach preferable in most cases.

## Example

Input: `nums = [3, 0, 1]`

Using Approach 1:

- n = 3
- Expected sum: 3 \* (3 + 1) / 2 = 6
- Actual sum: 3 + 0 + 1 = 4
- Missing number: 6 - 4 = 2

Using Approach 2:

- Sorted array: [0, 1, 3]
- nums[0] = 0 ✓
- nums[1] = 1 ✓
- nums[2] = 3 ≠ 2 ✗
- Return 2
