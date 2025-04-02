/**
 * Validate Binary Search Tree - LeetCode Solution
 * Two different approaches to solve the problem
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * Approach 1: BFS with Range Checking
 * Time Complexity: O(n), where n is the number of nodes
 * Space Complexity: O(n) for the queue
 *
 * @param {TreeNode} root
 * @return {boolean}
 */
const isValidBSTwithBFS = function (root) {
  if (!root) return true;

  // Queue contains [node, minVal, maxVal]
  const queue = [[root, -Infinity, Infinity]];

  while (queue.length > 0) {
    const [node, minVal, maxVal] = queue.shift();

    // Check if current node's value is within valid range
    if (node.val <= minVal || node.val >= maxVal) {
      return false;
    }

    // Add left child with updated maxVal
    if (node.left) {
      queue.push([node.left, minVal, node.val]);
    }

    // Add right child with updated minVal
    if (node.right) {
      queue.push([node.right, node.val, maxVal]);
    }
  }

  return true;
};

/**
 * Approach 2: DFS with Range Checking (Recursive)
 * Time Complexity: O(n), where n is the number of nodes
 * Space Complexity: O(h), where h is the height of the tree (for recursion stack)
 *
 * @param {TreeNode} root
 * @return {boolean}
 */
const isValidBSTwithDFS = function (root) {
  // Helper function to validate a subtree with a range
  function validate(node, minVal, maxVal) {
    // Empty nodes are valid BSTs
    if (!node) return true;

    // Check if current node's value is within valid range
    if (node.val <= minVal || node.val >= maxVal) {
      return false;
    }

    // Check left subtree with updated maxVal
    // Check right subtree with updated minVal
    return (
      validate(node.left, minVal, node.val) &&
      validate(node.right, node.val, maxVal)
    );
  }

  // Start validation from root with initial range [-Infinity, Infinity]
  return validate(root, -Infinity, Infinity);
};

/**
 * Approach 3: In-order Traversal
 * Time Complexity: O(n)
 * Space Complexity: O(h) where h is the height of the tree
 *
 * @param {TreeNode} root
 * @return {boolean}
 */
const isValidBSTwithInorder = function (root) {
  let prev = -Infinity;

  // Helper function for in-order traversal
  function inorder(node) {
    if (!node) return true;

    // Check left subtree
    if (!inorder(node.left)) {
      return false;
    }

    // Check current node - it should be greater than the previous value
    if (node.val <= prev) {
      return false;
    }

    // Update previous value
    prev = node.val;

    // Check right subtree
    return inorder(node.right);
  }

  return inorder(root);
};

// Main function that uses the most efficient approach
const isValidBST = function (root) {
  // Using DFS with range checking
  return isValidBSTwithDFS(root);
};

// Export all solutions
module.exports = {
  isValidBST,
  isValidBSTwithBFS,
  isValidBSTwithDFS,
  isValidBSTwithInorder,
};
