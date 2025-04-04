/**
 * Clone Graph - LeetCode Solution
 * Different approaches to solve the problem
 */

/**
 * Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * Approach 1: DFS with Map for visited nodes
 * Time Complexity: O(V+E), where V is the number of vertices and E is the number of edges
 * Space Complexity: O(V) for the visited map and recursion stack
 *
 * @param {Node} node
 * @return {Node}
 */
const cloneGraphWithDFS = function (node) {
  if (!node) return null;

  const visited = new Map();

  const dfs = (original) => {
    // If node already cloned, return its copy
    if (visited.has(original)) {
      return visited.get(original);
    }

    // Create new node with same value but empty neighbors list
    const clone = new Node(original.val);

    // Add to visited map before processing neighbors to handle cycles
    visited.set(original, clone);

    // Clone all neighbors recursively
    for (let neighbor of original.neighbors) {
      clone.neighbors.push(dfs(neighbor));
    }

    return clone;
  };

  return dfs(node);
};

/**
 * Approach 2: BFS with Map for visited nodes
 * Time Complexity: O(V+E), where V is the number of vertices and E is the number of edges
 * Space Complexity: O(V) for the visited map and queue
 *
 * @param {Node} node
 * @return {Node}
 */
const cloneGraphWithBFS = function (node) {
  if (!node) return null;

  const visited = new Map();
  const queue = [node];

  // Create clone for the first node
  visited.set(node, new Node(node.val));

  while (queue.length > 0) {
    const original = queue.shift();
    const clone = visited.get(original);

    // Process all neighbors
    for (let neighbor of original.neighbors) {
      // If neighbor not visited, create clone and add to queue
      if (!visited.has(neighbor)) {
        visited.set(neighbor, new Node(neighbor.val));
        queue.push(neighbor);
      }

      // Add neighbor's clone to current node's neighbors list
      clone.neighbors.push(visited.get(neighbor));
    }
  }

  return visited.get(node);
};

/**
 * Approach 3: Iterative DFS with Stack and Map
 * Time Complexity: O(V+E), where V is the number of vertices and E is the number of edges
 * Space Complexity: O(V) for the visited map and stack
 *
 * @param {Node} node
 * @return {Node}
 */
const cloneGraphWithIterativeDFS = function (node) {
  if (!node) return null;

  const visited = new Map();
  const stack = [node];

  // Create clone for the first node
  visited.set(node, new Node(node.val));

  while (stack.length > 0) {
    const original = stack.pop();
    const clone = visited.get(original);

    for (let neighbor of original.neighbors) {
      // If neighbor not visited, create clone and add to stack
      if (!visited.has(neighbor)) {
        visited.set(neighbor, new Node(neighbor.val));
        stack.push(neighbor);
      }

      // Check if this neighbor is already added to clone's neighbors
      // This check is necessary in iterative DFS to avoid duplicate neighbors
      if (!clone.neighbors.some((n) => n.val === visited.get(neighbor).val)) {
        clone.neighbors.push(visited.get(neighbor));
      }
    }
  }

  return visited.get(node);
};

// Main function that uses the most efficient approach
const cloneGraph = function (node) {
  // Using DFS with Map for caching
  return cloneGraphWithDFS(node);
};

// Export all solutions
module.exports = {
  cloneGraph,
  cloneGraphWithDFS,
  cloneGraphWithBFS,
  cloneGraphWithIterativeDFS,
};
