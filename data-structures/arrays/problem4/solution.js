/**
 * 3Sum - LeetCode Solution
 * Multiple approaches to find all triplets that sum to zero
 */

/**
 * Approach 1: Two Pointers
 * Time Complexity: O(n²)
 * Space Complexity: O(n) for the result array
 *
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSumTwoPointers = function (nums) {
  if (nums.length < 3) return [];

  // Sort the array to handle duplicates and enable two-pointer technique
  nums.sort((a, b) => a - b);

  const result = [];

  // Iterate through the array - each iteration fixes one element
  for (let i = 0; i < nums.length - 2; i++) {
    // Skip duplicates for the first element
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    // If current element is positive, remaining elements are also positive,
    // so sum will never be zero
    if (nums[i] > 0) break;

    // Two-pointer technique to find pairs with sum = -nums[i]
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum < 0) {
        left++;
      } else if (sum > 0) {
        right--;
      } else {
        // Found a triplet
        result.push([nums[i], nums[left], nums[right]]);

        // Skip duplicates
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;

        // Move both pointers
        left++;
        right--;
      }
    }
  }

  return result;
};

/**
 * Approach 2: Hash Set
 * Time Complexity: O(n²)
 * Space Complexity: O(n) for the hash set
 *
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSumHashSet = function (nums) {
  if (nums.length < 3) return [];

  // Sort the array to handle duplicates
  nums.sort((a, b) => a - b);

  const result = [];

  // Iterate through the array
  for (let i = 0; i < nums.length - 2; i++) {
    // Skip duplicates for the first element
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    // If current element is positive, sum will never be zero
    if (nums[i] > 0) break;

    // Using a hash set to find pairs
    const seen = new Set();

    for (let j = i + 1; j < nums.length; j++) {
      // Skip duplicates for the second element
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;

      // Calculate the complement needed to get sum = 0
      const complement = -nums[i] - nums[j];

      if (seen.has(complement)) {
        // Found a triplet
        result.push([nums[i], complement, nums[j]]);

        // Remove the complement to avoid duplicates
        seen.delete(complement);
      } else {
        // Add current number to the set
        seen.add(nums[j]);
      }
    }
  }

  return result;
};

/**
 * Approach 3: Brute Force (less efficient)
 * Time Complexity: O(n³)
 * Space Complexity: O(n) for the result array
 *
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSumBruteForce = function (nums) {
  if (nums.length < 3) return [];

  // Sort to handle duplicates
  nums.sort((a, b) => a - b);

  const result = [];
  const seen = new Set(); // To track unique triplets

  // Check all possible triplets
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          // Create a unique string representation of the triplet
          const triplet = `${nums[i]},${nums[j]},${nums[k]}`;

          // Add only if we haven't seen this triplet before
          if (!seen.has(triplet)) {
            result.push([nums[i], nums[j], nums[k]]);
            seen.add(triplet);
          }
        }
      }
    }
  }

  return result;
};

// Export all three solutions
module.exports = {
  threeSumTwoPointers,
  threeSumHashSet,
  threeSumBruteForce,
};

// Example usage:
// const nums1 = [-1, 0, 1, 2, -1, -4];
// console.log(threeSumTwoPointers(nums1)); // Output: [[-1,-1,2],[-1,0,1]]
// console.log(threeSumHashSet(nums1)); // Output: [[-1,-1,2],[-1,0,1]]
// console.log(threeSumBruteForce(nums1)); // Output: [[-1,-1,2],[-1,0,1]]

// const nums2 = [0, 1, 1];
// console.log(threeSumTwoPointers(nums2)); // Output: []
// console.log(threeSumHashSet(nums2)); // Output: []
// console.log(threeSumBruteForce(nums2)); // Output: []

// const nums3 = [0, 0, 0];
// console.log(threeSumTwoPointers(nums3)); // Output: [[0,0,0]]
// console.log(threeSumHashSet(nums3)); // Output: [[0,0,0]]
// console.log(threeSumBruteForce(nums3)); // Output: [[0,0,0]]
