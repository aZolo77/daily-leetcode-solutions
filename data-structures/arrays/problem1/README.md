# Problem 1: Merge Strings Alternately

## Problem Description

You are given two strings `word1` and `word2`. Merge the strings by adding letters in alternating order, starting with `word1`. If a string is longer than the other, append the additional letters onto the end of the merged string.

Return the merged string.

## Solution Explanation

### Approach 1: Two Pointers

**Algorithm**

1. Create two variables, `m` and `n`, to store the length of `word1` and `word2`.
2. Create an empty array variable `result` to store the result of merged words.
3. Create two pointers, `i` and `j` to point to indices of `word1` and `word2`. We initialize both of them to 0.
4. While `i < m || j < n`:

   - If `i < m`, it means that we have not completely traversed `word1`. As a result, we append `word1[i]` to `result`. We increment `i` to point to next index of words.
   - If `j < n`, it means that we have not completely traversed `word2`. As a result, we append `word2[j]` to `result`. We increment `j` to point to next index of words.

5. Return `result`.

**Complexity Analysis**

- _Time complexity_: `O(m + n)`: We iterate over `word1` and `word2` once and push their letters into `result`.
- _Space complexity_: `O(1)`

### Approach 2: One Pointer

**Algorithm**

1. Create two variables, `m` and `n`, to store the length of `word1` and `word2`.
2. Create an empty array variable `result` to store the result of merged words.
3. Iterate over `word1` and `word2` using a loop running from `i = 0` to `i < Math.max(m, n)` and keep incrementing `i` by 1 after each iteration:

   - If `i < m`, it means that we have not completely traversed `word1`. As a result, we append `word1[i]` to `result`.
   - If `j < n`, it means that we have not completely traversed `word2`. As a result, we append `word2[j]` to `result`.

4. Return joined `result`.

**Complexity Analysis**

- _Time complexity_: `O(m + n)`: We iterate over `word1` and `word2` once and push their letters into `result`.
- _Space complexity_: `O(1)`
