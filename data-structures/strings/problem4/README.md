# Problem: Word Break

## Problem Description

Given a string `s` and a dictionary of strings `wordDict`, return true if `s` can be segmented into a space-separated sequence of one or more dictionary words.

Note that the same word in the dictionary may be reused multiple times in the segmentation.

**Examples:**

```
Example 1:
Input: s = "leetcode", wordDict = ["leet","code"]
Output: true
Explanation: Return true because "leetcode" can be segmented as "leet code".

Example 2:
Input: s = "applepenapple", wordDict = ["apple","pen"]
Output: true
Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
Note that you are allowed to reuse a dictionary word.

Example 3:
Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
Output: false
```

**Constraints:**

- `1 <= s.length <= 300`
- `1 <= wordDict.length <= 1000`
- `1 <= wordDict[i].length <= 20`
- `s` and `wordDict[i]` consist of only lowercase English letters.
- All the strings of `wordDict` are unique.

## Solution Explanation

### Approach: Dynamic Programming

**Algorithm**

1. Create a 1D DP array `dp` of length `s.length + 1`, where `dp[i]` represents whether the substring from index `0` to index `i-1` can be segmented using words from the dictionary.
2. Initialize `dp[0] = true` since an empty string can always be segmented.
3. Fill the DP array by iterating through:
   - For each position `i` from 1 to `s.length`:
     - For each position `j` from 0 to `i-1`:
       - If `dp[j] == true` (meaning substring `s[0...j-1]` can be segmented) and the substring `s[j...i-1]` is a word in the dictionary, then `dp[i] = true`
4. Return `dp[s.length]`, which indicates whether the entire string can be segmented.

**Optimization**

- Convert the word dictionary to a Set for O(1) lookups instead of using an array with O(n) lookup time.

**Complexity Analysis**

- _Time complexity_: `O(n²×m)` where n is the length of the string and m is the average length of words in the dictionary. For each position in the string, we check all previous positions and perform a substring operation followed by a dictionary lookup.
- _Space complexity_: `O(n)` for the DP array plus `O(k)` for the word set, where k is the total number of characters in all dictionary words.

### Code Implementation

```javascript
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
```

### Alternative Approaches

#### Recursive with Memoization

An alternative approach is to use recursion with memoization, where we:

1. Start from the beginning of the string
2. Try all possible prefixes that match words in the dictionary
3. Recursively check if the rest of the string can be segmented
4. Use memoization to avoid redundant calculations

#### Trie-based Approach

For a large dictionary, a Trie data structure can be used to efficiently store and search for words:

1. Build a Trie from the dictionary
2. Still use dynamic programming, but use the Trie for faster word matching
3. This approach is particularly efficient when the dictionary is large and contains many words with common prefixes

### Key Insight

The key insight is recognizing that this problem has overlapping subproblems and optimal substructure, making it suitable for dynamic programming. By using results from smaller subproblems (whether shorter substrings can be segmented), we can build up to the solution for the entire string.
