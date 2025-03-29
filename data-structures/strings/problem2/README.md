# Problem: Longest Substring Without Repeating Characters

## Problem Description

Given a string `s`, find the length of the longest substring without repeating characters.

**Examples:**

```
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
```

**Constraints:**

- `0 <= s.length <= 5 * 10^4`
- `s` consists of English letters, digits, symbols and spaces.

## Solution Explanation

### Approach 1: Using a HashMap (Optimal Solution)

**Algorithm**

1. Create a HashMap (or Map in JavaScript) to store characters and their indices.
2. Use a sliding window approach with two pointers: `left` and `right`.
3. Iterate through the string with the `right` pointer.
4. For each character:
   - If the character already exists in the current window, move the `left` pointer to the position right after the previous occurrence of the character.
   - Update the character's position in the HashMap.
   - Calculate the current window length and update the maximum length if needed.

**Complexity Analysis**

- _Time complexity_: `O(n)` where n is the length of the string. Each character is processed exactly once.
- _Space complexity_: `O(min(m, n))` where m is the size of the character set and n is the length of the string. In the worst case, the HashMap will store all unique characters in the string.

### Approach 2: Using a HashSet (Alternative Solution)

**Algorithm**

1. Create a HashSet (or Set in JavaScript) to track characters in the current window.
2. Use two pointers: `left` and `right` to define the current window.
3. For each character at the `right` pointer:
   - If the character is already in the Set, remove characters from the left until the duplicate is removed.
   - Add the current character to the Set.
   - Update the maximum length if the current window is longer.

**Complexity Analysis**

- _Time complexity_: `O(n)` where n is the length of the string. Although there's a nested while loop, each character is added and removed from the Set at most once.
- _Space complexity_: `O(min(m, n))` where m is the size of the character set.

### Key Insight

The key to solving this problem efficiently is using the sliding window technique with a hash-based data structure. By maintaining information about character positions, we can quickly adjust our window when we encounter a repeating character.

### Why the HashMap Approach Works Better

The HashMap approach is generally more efficient than the HashSet approach because:

1. With a HashMap, we can directly jump the `left` pointer to the correct position after a duplicate is found, rather than incrementally removing characters.
2. This reduces the number of operations needed to maintain the window.

Both solutions have the same asymptotic time complexity, but the HashMap approach typically performs fewer operations in practice.
