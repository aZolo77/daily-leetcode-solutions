# Problem: Valid Anagram

## Problem Description

Given two strings `s` and `t`, return `true` if `t` is an anagram of `s`, and `false` otherwise.

An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

**Examples:**

```
Input: s = "anagram", t = "nagaram"
Output: true

Input: s = "rat", t = "car"
Output: false
```

**Constraints:**

- `1 <= s.length, t.length <= 5 * 10^4`
- `s` and `t` consist of lowercase English letters.

## Solution Explanation

### Approach: Hash Table Character Count

**Algorithm**

1. First, perform basic validation:
   - If the strings have different lengths, they cannot be anagrams
   - If the strings are identical, they are trivially anagrams
2. Create a hash table to count characters in the first string
3. Iterate through the second string, decrementing the counts for each character
4. If we encounter a character that doesn't exist in our hash table or has a count of 0, return false
5. Finally, verify all counts are 0 (though this is actually guaranteed given our previous checks)

**Complexity Analysis**

- _Time complexity_: `O(n)`, where n is the length of the strings. We iterate through each string once.
- _Space complexity_: `O(k)`, where k is the size of the character set. Since we're dealing with lowercase English letters, this is constant space (26 characters max).

### Alternative Approaches

#### Sorting Approach

Another common approach is to sort both strings and compare them:

```javascript
const isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  return s.split("").sort().join("") === t.split("").sort().join("");
};
```

This approach has a time complexity of O(n log n) due to the sorting operation, which is less efficient than the hash table approach.

### Unicode Consideration

To handle Unicode characters, the hash table approach already works well with JavaScript's built-in handling of Unicode. The `for...of` loop correctly iterates over Unicode characters, including surrogate pairs.

If additional concerns about normalization forms arise, we might consider using `String.prototype.normalize()` to ensure consistent representation of characters with diacritical marks or other special forms.
