/**
 * Longest Palindromic Substring - LeetCode Solution
 * Three different approaches to solve the problem
 */

/**
 * Approach 1: Dynamic Programming
 * Time Complexity: O(n²)
 * Space Complexity: O(n²)
 *
 * @param {string} s
 * @return {string}
 */
const longestPalindromeDp = function (s) {
  const n = s.length;
  if (n <= 1) return s;

  // Create a 2D DP table where dp[i][j] means substring s[i...j] is palindrome
  const dp = Array(n)
    .fill()
    .map(() => Array(n).fill(false));

  let start = 0;
  let maxLength = 1;

  // All single characters are palindromes
  for (let i = 0; i < n; i++) {
    dp[i][i] = true;
  }

  // Check for palindromes of length 2
  for (let i = 0; i < n - 1; i++) {
    if (s[i] === s[i + 1]) {
      dp[i][i + 1] = true;
      start = i;
      maxLength = 2;
    }
  }

  // Check for palindromes of length 3 or more
  for (let len = 3; len <= n; len++) {
    for (let i = 0; i <= n - len; i++) {
      const j = i + len - 1;

      // Check if substring from i to j is palindrome
      // Current substring is palindrome if:
      // 1. First and last characters match
      // 2. Inner substring (i+1 to j-1) is also a palindrome
      if (s[i] === s[j] && dp[i + 1][j - 1] === true) {
        dp[i][j] = true;

        if (len > maxLength) {
          start = i;
          maxLength = len;
        }
      }
    }
  }

  // Return the longest palindromic substring
  return s.substring(start, start + maxLength);
};

/**
 * Approach 2: Expand Around Center
 * Time Complexity: O(n²)
 * Space Complexity: O(1)
 *
 * @param {string} s
 * @return {string}
 */
const longestPalindromeExpand = function (s) {
  if (s.length <= 1) return s;

  let start = 0;
  let maxLength = 1;

  // Helper function to expand around center
  const expandAroundCenter = (left, right) => {
    // Expand outwards from the center as long as characters match
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      // Calculate current palindrome length
      const currentLength = right - left + 1;

      // Update if this is longer than our current max
      if (currentLength > maxLength) {
        maxLength = currentLength;
        start = left;
      }

      // Move outwards from center
      left--;
      right++;
    }
  };

  // Check each position as potential center of palindrome
  for (let i = 0; i < s.length; i++) {
    // Odd length palindromes (like "aba")
    expandAroundCenter(i, i);

    // Even length palindromes (like "abba")
    expandAroundCenter(i, i + 1);
  }

  return s.substring(start, start + maxLength);
};

/**
 * Approach 3: Brute Force (less efficient)
 * Time Complexity: O(n³)
 * Space Complexity: O(1)
 *
 * @param {string} s
 * @return {string}
 */
const longestPalindromeBruteForce = function (s) {
  if (s.length <= 1) return s;

  let longest = s[0]; // Initialize with first character

  // Helper function to check if a string is palindrome
  const isPalindrome = (str) => {
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
      if (str[left] !== str[right]) {
        return false;
      }
      left++;
      right--;
    }

    return true;
  };

  // Check all possible substrings
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j < s.length; j++) {
      // Extract current substring
      const substr = s.substring(i, j + 1);

      // If current substring is longer than our current longest
      // and it's a palindrome, update longest
      if (substr.length > longest.length && isPalindrome(substr)) {
        longest = substr;
      }
    }
  }

  return longest;
};

// Export all three solutions
module.exports = {
  longestPalindromeDp,
  longestPalindromeExpand,
  longestPalindromeBruteForce,
};

// Example usage:
// const s1 = "babad";
// console.log(longestPalindromeDp(s1)); // Output: "bab" or "aba"
// console.log(longestPalindromeExpand(s1)); // Output: "bab" or "aba"
// console.log(longestPalindromeBruteForce(s1)); // Output: "bab" or "aba"

// const s2 = "cbbd";
// console.log(longestPalindromeDp(s2)); // Output: "bb"
// console.log(longestPalindromeExpand(s2)); // Output: "bb"
// console.log(longestPalindromeBruteForce(s2)); // Output: "bb"
