const wordBreak = function (s, wordDict) {
  // Convert wordDict to a Set for O(1) lookup time
  const wordSet = new Set(wordDict);

  // Create a DP array where dp[i] indicates whether the substring s[0...i-1] can be segmented
  const dp = new Array(s.length + 1).fill(false);

  // Empty string can always be segmented
  dp[0] = true;

  // Iterate through all positions in the string
  for (let i = 1; i <= s.length; i++) {
    // For each position, check all possible word endings
    for (let j = 0; j < i; j++) {
      // If we can segment substring s[0...j-1] AND
      // substring s[j...i-1] is a word in our dictionary
      if (dp[j] && wordSet.has(s.substring(j, i))) {
        // Then we can segment the substring s[0...i-1]
        dp[i] = true;
        break; // No need to check other j values
      }
    }
  }

  // Return whether the entire string can be segmented
  return dp[s.length];
};
