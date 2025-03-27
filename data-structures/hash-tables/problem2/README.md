# Problem: Longest Consecutive Sequence

## Problem Description

Given an unsorted array of integers `nums`, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.

**Examples:**

```
Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9

Input: nums = [1,0,1,2]
Output: 3
```

**Constraints:**

- `0 <= nums.length <= 10^5`
- `-10^9 <= nums[i] <= 10^9`

## Solution Explanation

### Approach 1: Using a HashSet (Optimal Solution)

**Algorithm**

1. Create a HashSet (or Set in JavaScript) from the input array to achieve O(1) lookups.
2. Iterate through each number in the Set.
3. For each number, check if it could be the start of a sequence:
   - A number is the start of a sequence if there is no number directly before it (num-1) in the Set.
4. If a number is the start of a sequence, count how long the consecutive sequence is by repeatedly checking if the next consecutive number exists.
5. Update the longest streak found.

**Complexity Analysis**

- _Time complexity_: `O(n)`. Although there are nested loops, the inner while loop only runs when a number is the start of a sequence, and each number can only be the start of one sequence. In total, we do at most 2n operations.
- _Space complexity_: `O(n)` for storing all numbers in the HashSet.

### Approach 2: Sorting (Not Optimal for the Problem)

**Algorithm**

1. Sort the array in ascending order.
2. Iterate through the sorted array, tracking consecutive sequences.
3. Skip duplicates to avoid counting them multiple times.
4. Return the length of the longest streak.

**Complexity Analysis**

- _Time complexity_: `O(n log n)` due to the sorting operation, which doesn't meet the problem's requirement.
- _Space complexity_: `O(1)` or `O(n)` depending on the sorting implementation.

### Key Insight

The key insight to solve this problem in O(n) time is recognizing that we don't need to check every number in the array as a potential sequence start. By using a HashSet and only checking numbers that could actually be the start of a sequence (numbers that don't have a predecessor), we eliminate unnecessary work and achieve linear time complexity.

### Why the HashSet Approach Works

The HashSet approach works because:

1. It allows O(1) lookups to quickly check if a number exists
2. By only processing numbers that could be sequence starts, we avoid redundant calculations
3. Each number in the array is processed at most twice: once when adding to the Set and once when checking sequences

This optimal approach satisfies the O(n) time requirement while maintaining a clear and intuitive solution.
