# Problem 2: Kids With the Greatest Number of Candies

## Problem Description

There are `n` kids with candies. You are given an integer array `candies`, where each `candies[i]` represents the number of candies the `ith` kid has, and an integer `extraCandies`, denoting the number of extra candies that you have.

Return a boolean array result of length `n`, where `result[i]` is `true` if, after giving the `ith` kid all the `extraCandies`, they will have the greatest number of candies among all the kids, or `false` otherwise.

## Solution Explanation

### Approach: Ad Hoc

**Algorithm**

1. Create an integer variable called `maxCandies` to store the greatest number of candies in `candies`.
2. We iterate over `candies`, and for each kid, we add `candy + extraCandies >= maxCandies` to answer.
3. Return new `candies` array.

**Complexity Analysis**

- _Time complexity_: `O(n)`:
  - We iterate over the `candies` array to find out `maxCandies` which takes `O(n)` time;
  - We iterate over the `candies` array once more to check for each kid whether they will have the most candies among all the children after receiving `extraCandies`.
- _Space complexity_: `O(1)` (`maxCandies`)
