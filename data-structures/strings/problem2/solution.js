/**
 * Finds the length of the longest substring without repeating characters.
 *
 * @param {string} s - The input string
 * @return {number} - The length of the longest substring without repeating characters
 */
const lengthOfLongestSubstring = function (s) {
  // If the string is empty, return 0
  if (s.length === 0) return 0;

  // Create a Map to store characters and their indices
  const charMap = new Map();

  let left = 0;
  let maxLength = 0;

  // Iterate through each character in the string
  for (let right = 0; right < s.length; right++) {
    const char = s[right];

    // If the character is already in the current window, update the left pointer
    if (charMap.has(char) && charMap.get(char) >= left) {
      left = charMap.get(char) + 1;
    }

    // Update the character's position in the map
    charMap.set(char, right);

    // Calculate current window length and update maximum if needed
    const currentLength = right - left + 1;
    maxLength = Math.max(maxLength, currentLength);
  }

  return maxLength;
};

/**
 * Alternative solution using a Set.
 * This approach also works but requires more operations to maintain the set.
 *
 * @param {string} s - The input string
 * @return {number} - The length of the longest substring without repeating characters
 */
const lengthOfLongestSubstringWithSet = function (s) {
  const charSet = new Set();
  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < s.length; right++) {
    const char = s[right];

    // If the character is already in our set, we need to shrink the window
    while (charSet.has(char)) {
      charSet.delete(s[left]);
      left++;
    }

    // Add the current character to the set
    charSet.add(char);

    // Update maximum length
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
};

// Example usage:
/*
console.log(lengthOfLongestSubstring("abcabcbb")); // 3
console.log(lengthOfLongestSubstring("bbbbb")); // 1
console.log(lengthOfLongestSubstring("pwwkew")); // 3
console.log(lengthOfLongestSubstring("")); // 0
console.log(lengthOfLongestSubstring(" ")); // 1
console.log(lengthOfLongestSubstring("dvdf")); // 3
*/
