# Problem: Palindromic Substrings

## Problem Description

Given a string `s`, return the number of palindromic substrings in it.

A string is a palindrome when it reads the same backward as forward.
A substring is a contiguous sequence of characters within the string.

**Examples:**

```
Example 1:
Input: s = "abc"
Output: 3
Explanation: Three palindromic strings: "a", "b", "c".

Example 2:
Input: s = "aaa"
Output: 6
Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".
```

**Constraints:**

- `1 <= s.length <= 1000`
- `s` consists of lowercase English letters.

## Solution Explanation

### Approach 1: Dynamic Programming

**Algorithm**

1. Create a 2D DP table where `dp[i][j]` represents whether the substring from index `i` to index `j` is a palindrome.
2. Initialize base cases:
   - All single characters are palindromes: `dp[i][i] = true`
   - Check for palindromes of length 2: `dp[i][i+1] = true` if `s[i] === s[i+1]`
3. Fill the DP table for longer substrings:
   - A substring from `i` to `j` is a palindrome if:
     - The first and last characters match (`s[i] === s[j]`)
     - The inner substring is also a palindrome (`dp[i+1][j-1] === true`)
4. Count the total number of palindromic substrings (all `true` values in the DP table).
5. Return the count.

**Complexity Analysis**

- _Time complexity_: `O(n²)` where n is the length of the string. We need to fill an n×n table.
- _Space complexity_: `O(n²)` for the DP table.

### Approach 2: Expand Around Center

**Algorithm**

1. Observe that a palindrome can be expanded from its center.
2. For a string of length n, there are 2n-1 possible centers:
   - n centers for single characters (odd-length palindromes)
   - n-1 centers for pairs of characters (even-length palindromes)
3. For each center:
   - Expand outwards as long as the characters match
   - Increment the count for each valid palindrome found
4. Return the total count.

**Complexity Analysis**

- _Time complexity_: `O(n²)` where n is the length of the string. In the worst case, we might need to expand around each center to the entire string length.
- _Space complexity_: `O(1)` as we only use a constant amount of extra space.

### Approach 3: Brute Force (Less Efficient)

**Algorithm**

1. Generate all possible substrings of the given string.
2. Check each substring to determine if it's a palindrome.
3. Count the total number of palindromic substrings.
4. Return the count.

**Complexity Analysis**

- _Time complexity_: `O(n³)` where n is the length of the string. We need to generate O(n²) substrings and check each one in O(n) time.
- _Space complexity_: `O(1)` as we only use a constant amount of extra space.

### Key Insight

The key to solving this problem efficiently is recognizing the recursive nature of palindromes: a string is a palindrome if its first and last characters match, and the substring between them is also a palindrome.

### Comparison of Approaches

1. **Dynamic Programming** provides a systematic way to solve the problem by building up from smaller subproblems, but uses more memory.
2. **Expand Around Center** is more intuitive and uses constant extra space, making it more efficient in practice.
3. **Brute Force** is the simplest to understand but is too slow for longer strings.

For most practical purposes, the Expand Around Center approach offers the best balance of efficiency and simplicity.
