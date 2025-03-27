/**
 * Finds the length of the longest consecutive elements sequence in an unsorted array.
 *
 * @param {number[]} nums - An unsorted array of integers
 * @return {number} - The length of the longest consecutive sequence
 */
const longestConsecutive = function (nums) {
  // If the array is empty, return 0
  if (nums.length === 0) return 0;

  // Create a Set for O(1) lookups
  const numSet = new Set(nums);

  let longestStreak = 0;

  // Iterate through each unique number in the set
  for (let num of numSet) {
    // Only check numbers that could be the start of a sequence
    // A number is the start of a sequence if there's no number before it (num-1)
    if (!numSet.has(num - 1)) {
      // Found a potential start of a sequence
      let currentNum = num;
      let currentStreak = 1;

      // Keep checking for consecutive numbers in the sequence
      while (numSet.has(currentNum + 1)) {
        currentNum += 1;
        currentStreak += 1;
      }

      // Update the longest streak if current is longer
      longestStreak = Math.max(longestStreak, currentStreak);
    }
  }

  return longestStreak;
};

/**
 * Alternative solution using sorting.
 * This has O(n log n) time complexity due to sorting, which doesn't meet the problem requirement.
 *
 * @param {number[]} nums - An unsorted array of integers
 * @return {number} - The length of the longest consecutive sequence
 */
const longestConsecutiveWithSorting = function (nums) {
  if (nums.length === 0) return 0;

  // Sort the array
  nums.sort((a, b) => a - b);

  let longestStreak = 1;
  let currentStreak = 1;

  // Iterate through the sorted array
  for (let i = 1; i < nums.length; i++) {
    // If the current number is a duplicate, skip it
    if (nums[i] === nums[i - 1]) continue;

    // If the current number is consecutive to the previous
    if (nums[i] === nums[i - 1] + 1) {
      currentStreak += 1;
    } else {
      // Reset the streak
      currentStreak = 1;
    }

    longestStreak = Math.max(longestStreak, currentStreak);
  }

  return longestStreak;
};

// Example usage:
/*
console.log(longestConsecutive([100,4,200,1,3,2])); // 4
console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1])); // 9
console.log(longestConsecutive([1,0,1,2])); // 3
*/
