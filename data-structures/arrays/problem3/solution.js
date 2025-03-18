// Approach 1: Mathematical Formula (Sum)
/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumberWithSum = function (nums) {
  const n = nums.length;
  const expectedSum = (n * (n + 1)) / 2;
  let actualSum = 0;

  for (let i = 0; i < nums.length; i++) {
    actualSum += nums[i];
  }

  return expectedSum - actualSum;
};

// Approach 2: Sorting and Searching
/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumberWithSorting = function (nums) {
  const sorted = nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (sorted[i] !== i) return i;
  }

  return nums.length;
};
