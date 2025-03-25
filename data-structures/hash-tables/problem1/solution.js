/**
 * Determines if two strings are anagrams of each other.
 * An anagram is a word formed by rearranging the letters of another word,
 * using all the original letters exactly once.
 *
 * @param {string} s - The first string
 * @param {string} t - The second string to check if it's an anagram of s
 * @return {boolean} - Returns true if t is an anagram of s, false otherwise
 */
const isAnagram = function (s, t) {
  // Quick validation checks
  if (s.length !== t.length) return false;
  if (s === t) return true;

  // Create a hash table
  const charCount = {};

  // Fill character counters from string s
  for (let char of s) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Iterate through string t and decrement counters
  for (let char of t) {
    if (!charCount[char]) {
      // If character doesn't exist or counter is already 0
      return false;
    }

    charCount[char]--;
  }

  // Verify all counters are zero
  return Object.values(charCount).every((count) => count === 0);
};

/**
 * Alternative solution using sorting.
 * While simpler, this has worse time complexity O(n log n) than the hash map approach.
 *
 * @param {string} s - The first string
 * @param {string} t - The second string to check if it's an anagram of s
 * @return {boolean} - Returns true if t is an anagram of s, false otherwise
 */
const isAnagramWithSorting = function (s, t) {
  if (s.length !== t.length) return false;

  // Sort both strings and compare
  return s.split("").sort().join("") === t.split("").sort().join("");
};

// Example usage:
/*
console.log(isAnagram("anagram", "nagaram")); // true
console.log(isAnagram("rat", "car")); // false
console.log(isAnagram("a", "a")); // true
console.log(isAnagram("ab", "a")); // false
*/
