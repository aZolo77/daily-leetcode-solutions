// Approach 1: Two Pointers
/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
const mergeAlternatelyWithTwoPointers = function (word1, word2) {
  let result = [];
  const m = word1.length;
  const n = word2.length;
  let i = (j = 0);

  while (i < m || j < n) {
    if (i < m) {
      result.push(word1[i]);
      i++;
    }

    if (j < n) {
      result.push(word2[j]);
      j++;
    }
  }

  return result.join("");
};

// > Approach 2: One Pointer
/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
const mergeAlternatelyWithOnePointer = function (word1, word2) {
  let result = [];
  const m = word1.length;
  const n = word2.length;
  let i = (j = 0);

  for (let i = 0; i < Math.max(m, n); i++) {
    if (i < m) result.push(word1[i]);
    if (i < n) result.push(word2[i]);
  }

  return result.join("");
};
