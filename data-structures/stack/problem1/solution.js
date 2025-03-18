/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
  const stack = [];
  const mappings = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (let i = 0; i < s.length; i++) {
    const item = s[i];

    if (Object.values(mappings).includes(item)) {
      stack.push(item);
    } else if (item in mappings) {
      if (stack.length === 0 || mappings[item] !== stack.pop()) {
        return false;
      }
    }
  }

  return stack.length === 0;
};

// Alternative implementation with a more efficient check for opening brackets
/**
 * @param {string} s
 * @return {boolean}
 */
const isValidOptimized = function (s) {
  const stack = [];
  const mappings = {
    ")": "(",
    "]": "[",
    "}": "{",
  };
  const openBrackets = new Set(["(", "[", "{"]);

  for (let i = 0; i < s.length; i++) {
    const item = s[i];

    if (openBrackets.has(item)) {
      stack.push(item);
    } else if (item in mappings) {
      if (stack.length === 0 || mappings[item] !== stack.pop()) {
        return false;
      }
    }
  }

  return stack.length === 0;
};
