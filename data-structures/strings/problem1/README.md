# Problem 1: Greatest Common Divisor of Strings

## Problem Description

For two strings `s` and `t`, we say "t divides s" if and only if `s = t + t + t + ... + t + t` (i.e., `t` is concatenated with itself one or more times).

Given two strings `str1` and `str2`, return the largest string `x` such that `x` divides both `str1` and `str2`.

> Example:

- **Input**: str1 = "ABCABC", str2 = "ABC"
- **Output**: "ABC"

## Solution Explanation

### Approach 1: Brute Force

**Algorithm**

1. Find the shorter string among `str1` and `str2`, without loss of generality, let it be `str1`
2. Start with `base = str1`, and check if both `str1` and `str2` are made of multiples of `base`:
   - If so, return `base`
   - Otherwise, we shall try a shorter string by removing the last character from `base`
3. If we have checked all prefix strings without finding the <u>GCD</u> string, return `""`

**Complexity Analysis**

- _Time complexity_: `O(min(m, n) ⋅ (m + n))`: We checked every prefix string `base` of the shorter string among `str1` and `str2`, and verify if both strings are made by multiples of `base`.
- _Space complexity_: `O(min(m, n))`: We need to keep a copy of `base` in each iteration, which takes `O(min(m, n))` space.

### Approach 2: Greatest Common Divisor

1. Concatenation Check: We check if the concatenation of str1 + str2 is the same as str2 + str1. If they are not the same, it means there is no common divisor string, so we return an empty string.
2. GCD Function: The gcd function calculates the greatest common divisor of two numbers using the Euclidean algorithm.
3. GCD Length: We find the GCD of the lengths of str1 and str2.
4. Return Prefix: We return the prefix of str1 with the length of the GCD. This is the largest string x that divides both str1 and str2.

- _Time complexity_: `O(m + n)`:
  - We need to compare the two concatenations of length `O(m + n)`;
  - We calculate the GCD using binary Euclidean algorithm, it takes `log(m ⋅ n)` time;
  - To sum up, the overall time complexity is `O(m + n)`
- _Space complexity_: `O(m + n)`
