/**
 * Palindromic Substrings - LeetCode Solution
 * Three different approaches to solve the problem
 */

/**
 * Approach 1: Dynamic Programming
 * Time Complexity: O(n²)
 * Space Complexity: O(n²)
 *
 * @param {string} s
 * @return {number}
 */
const countSubstringsDp = function (s) {
  const n = s.length;
  if (n <= 1) return n;

  // Create a 2D DP table where dp[i][j] means substring s[i...j] is palindrome
  const dp = Array(n)
    .fill()
    .map(() => Array(n).fill(false));
  let count = 0;

  // All single characters are palindromes
  for (let i = 0; i < n; i++) {
    dp[i][i] = true;
    count++;
  }

  // Check for palindromes of length 2
  for (let i = 0; i < n - 1; i++) {
    if (s[i] === s[i + 1]) {
      dp[i][i + 1] = true;
      count++;
    }
  }

  // Check for palindromes of length 3 or more
  for (let len = 3; len <= n; len++) {
    for (let i = 0; i <= n - len; i++) {
      const j = i + len - 1;

      // Check if substring from i to j is palindrome
      if (s[i] === s[j] && dp[i + 1][j - 1] === true) {
        dp[i][j] = true;
        count++;
      }
    }
  }

  return count;
};

/**
 * Approach 2: Expand Around Center
 * Time Complexity: O(n²)
 * Space Complexity: O(1)
 *
 * @param {string} s
 * @return {number}
 */
const countSubstringsExpand = function (s) {
  const n = s.length;
  if (n <= 1) return n;

  let count = 0;

  // Helper function to expand around center
  const expandAroundCenter = (left, right) => {
    // Expand outwards from the center as long as characters match
    while (left >= 0 && right < n && s[left] === s[right]) {
      count++; // Found a palindrome
      // Move outwards from center
      left--;
      right++;
    }
  };

  // Check each position as potential center of palindrome
  for (let i = 0; i < n; i++) {
    // Odd length palindromes (like "aba")
    expandAroundCenter(i, i);

    // Even length palindromes (like "abba")
    expandAroundCenter(i, i + 1);
  }

  return count;
};

/**
 * Approach 3: Brute Force (less efficient)
 * Time Complexity: O(n³)
 * Space Complexity: O(1)
 *
 * @param {string} s
 * @return {number}
 */
const countSubstringsBruteForce = function (s) {
  const n = s.length;
  if (n <= 1) return n;

  let count = 0;

  // Helper function to check if a string is palindrome
  const isPalindrome = (start, end) => {
    while (start < end) {
      if (s[start] !== s[end]) {
        return false;
      }
      start++;
      end--;
    }
    return true;
  };

  // Check all possible substrings
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      // Check if current substring is a palindrome
      if (isPalindrome(i, j)) {
        count++;
      }
    }
  }

  return count;
};

// Export all three solutions
module.exports = {
  countSubstringsDp,
  countSubstringsExpand,
  countSubstringsBruteForce,
};

// Example usage:
// const s1 = "abc";
// console.log(countSubstringsDp(s1)); // Output: 3
// console.log(countSubstringsExpand(s1)); // Output: 3
// console.log(countSubstringsBruteForce(s1)); // Output: 3

// const s2 = "aaa";
// console.log(countSubstringsDp(s2)); // Output: 6
// console.log(countSubstringsExpand(s2)); // Output: 6
// console.log(countSubstringsBruteForce(s2)); // Output: 6
