/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
const isSubtree = function (root, subRoot) {
  // If main tree is null, it cannot contain any subtree
  if (root === null) return false;

  // Check if the current tree matches the subRoot tree
  if (isSameTree(root, subRoot)) return true;

  // If not, check left and right subtrees
  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};

/**
 * Helper function to check if two trees are identical
 * @param {TreeNode} tree1
 * @param {TreeNode} tree2
 * @return {boolean}
 */
function isSameTree(tree1, tree2) {
  // If both trees are null, they are identical
  if (tree1 === null && tree2 === null) return true;

  // If only one tree is null, they are not identical
  if (tree1 === null || tree2 === null) return false;

  // If values differ, trees are not identical
  if (tree1.val !== tree2.val) return false;

  // Recursively check left and right subtrees
  return (
    isSameTree(tree1.left, tree2.left) && isSameTree(tree1.right, tree2.right)
  );
}

// Alternative implementation using tree serialization
/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
const isSubtreeAlternative = function (root, subRoot) {
  /**
   * Serialize a tree into a string representation
   * @param {TreeNode} node
   * @return {string}
   */
  const serialize = (node) => {
    if (!node) return "#";

    // Use a prefix to ensure proper matching
    return ":" + node.val + serialize(node.left) + serialize(node.right);
  };

  // Check if serialized subRoot is a substring of serialized root
  return serialize(root).indexOf(serialize(subRoot)) !== -1;
};
