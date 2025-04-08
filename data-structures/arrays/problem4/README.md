# Problem: 3Sum

## Problem Description

Given an integer array `nums`, return all the triplets `[nums[i], nums[j], nums[k]]` such that `i != j`, `i != k`, and `j != k`, and `nums[i] + nums[j] + nums[k] == 0`.

Notice that the solution set must not contain duplicate triplets.

**Examples:**

```
Example 1:
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation:
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.

Example 2:
Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.

Example 3:
Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.
```

**Constraints:**

- `3 <= nums.length <= 3000`
- `-10^5 <= nums[i] <= 10^5`

## Solution Explanation

### Approach 1: Two Pointers

**Algorithm**

1. Sort the input array to handle duplicates and enable the two-pointer technique.
2. Iterate through the array. For each element `nums[i]`:
   - Skip if it's a duplicate of the previous element
   - If `nums[i] > 0`, break as sum of three positive numbers can't be zero
   - Use two pointers (`left` and `right`) to find pairs that sum to `-nums[i]`
   - When a triplet is found, skip duplicates and move both pointers
3. Return the result array containing all unique triplets.

**Complexity Analysis**

- _Time complexity_: `O(n²)` where n is the length of the array. Sorting takes O(n log n) and the two-pointer technique takes O(n²).
- _Space complexity_: `O(n)` for the result array (ignoring the space required by the sorting algorithm).

### Approach 2: Hash Set

**Algorithm**

1. Sort the input array to handle duplicates.
2. Iterate through the array. For each element `nums[i]`:
   - Skip duplicates and break if `nums[i] > 0`
   - Use a hash set to find pairs that sum to `-nums[i]`
   - For each `nums[j]` (where j > i), check if the complement `-nums[i] - nums[j]` exists in the hash set
   - If found, add the triplet to the result
3. Return the result array.

**Complexity Analysis**

- _Time complexity_: `O(n²)` where n is the length of the array.
- _Space complexity_: `O(n)` for the hash set and result array.

### Approach 3: Brute Force (Less Efficient)

**Algorithm**

1. Sort the input array to handle duplicates more easily.
2. Use three nested loops to check all possible triplets.
3. For each triplet, check if they sum to zero and ensure we haven't already added this combination.
4. Return the result array.

**Complexity Analysis**

- _Time complexity_: `O(n³)` where n is the length of the array.
- _Space complexity_: `O(n)` for the result array and the set used to track unique triplets.

### Key Insight

The key insight for solving this problem efficiently is recognizing that after sorting the array, we can use the two-pointer technique to avoid examining all possible triplets. This reduces the time complexity from O(n³) to O(n²).

### Comparison of Approaches

1. **Two Pointers** is the most efficient approach in practice, with clear logic and optimal time complexity.
2. **Hash Set** offers a similar time complexity but uses more space and might be slightly slower due to hash operations.
3. **Brute Force** is straightforward to understand but too slow for larger inputs.

For most practical purposes, the Two Pointers approach is recommended for its balance of efficiency and simplicity.

## Implementation Notes

- Special attention must be paid to handling duplicates at all three positions in the triplet.
- Early termination (breaking when `nums[i] > 0`) can significantly improve performance.
- The sorting step is crucial for both eliminating duplicates and enabling efficient search algorithms.
