// Approach 1: Brute Force
/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
const gcdOfStringsBrute = function (str1, str2) {
  const isDivisible = (s, t) => {
    const repeated = t.repeat(s.length / t.length);
    return repeated === s;
  };

  let base = str1.length < str2.length ? str1 : str2;

  while (base.length > 0) {
    if (isDivisible(str1, base) && isDivisible(str2, base)) {
      return base;
    }

    base = base.slice(0, -1);
  }

  return "";
};

// Approach 2: Greatest Common Divisor
/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
const gcdOfStrings = function (str1, str2) {
  // Check if concatenations in different orders are the same
  if (str1 + str2 !== str2 + str1) return "";

  // Euclidean algorithm
  const gcd = (a, b) => {
    while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }

    return a;
  };

  // Get the GCD of the lengths of str1 and str2
  const gcdLength = gcd(str1.length, str2.length);

  // Return the prefix of str1 with the length of gcdLength
  return str1.substring(0, gcdLength);
};
