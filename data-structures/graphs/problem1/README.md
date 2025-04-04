# Problem: Clone Graph

## Problem Description

Given a reference of a node in a connected undirected graph, return a deep copy (clone) of the graph.

Each node in the graph contains a value (`int`) and a list (`List[Node]`) of its neighbors.

```
class Node {
    public int val;
    public List<Node> neighbors;
}
```

**Test case format:**

For simplicity, each node's value is the same as the node's index (1-indexed). For example, the first node with `val = 1`, the second node with `val = 2`, and so on. The graph is represented in the test case using an adjacency list.

An adjacency list is a collection of unordered lists used to represent a finite graph. Each list describes the set of neighbors of a node in the graph.

The given node will always be the first node with `val = 1`. You must return the copy of the given node as a reference to the cloned graph.

**Examples:**

```
Example 1:
Input: adjList = [[2,4],[1,3],[2,4],[1,3]]
Output: [[2,4],[1,3],[2,4],[1,3]]
Explanation: There are 4 nodes in the graph.
1st node (val = 1)'s neighbors are 2nd node (val = 2) and 4th node (val = 4).
2nd node (val = 2)'s neighbors are 1st node (val = 1) and 3rd node (val = 3).
3rd node (val = 3)'s neighbors are 2nd node (val = 2) and 4th node (val = 4).
4th node (val = 4)'s neighbors are 1st node (val = 1) and 3rd node (val = 3).

Example 2:
Input: adjList = [[]]
Output: [[]]
Explanation: Note that the input contains one empty list. The graph consists of only one node with val = 1 and it does not have any neighbors.

Example 3:
Input: adjList = []
Output: []
Explanation: This an empty graph, it does not have any nodes.
```

**Constraints:**

- The number of nodes in the graph is in the range `[0, 100]`.
- `1 <= Node.val <= 100`
- `Node.val` is unique for each node.
- There are no repeated edges and no self-loops in the graph.
- The Graph is connected and all nodes can be visited starting from the given node.

## Solution Explanation

### Approach 1: DFS with Map for Caching

**Algorithm**

1. Use a HashMap/Map to store mappings of original nodes to their clones.
2. Start DFS from the given node.
3. For each node:
   - Check if it has been visited (exists in the map).
   - If visited, return the clone from the map.
   - If not visited, create a new node with the same value.
   - Add the mapping of original node → clone to the map.
   - Recursively clone all neighbors and add them to the clone's neighbors list.
4. Return the clone of the start node.

**Complexity Analysis**

- _Time complexity_: `O(V + E)` where V is the number of vertices and E is the number of edges. We visit each node and edge once.
- _Space complexity_: `O(V)` for the hashmap and recursion stack.

### Approach 2: BFS with Map for Caching

**Algorithm**

1. Use a HashMap/Map to store mappings of original nodes to their clones.
2. Use a queue for BFS traversal starting from the given node.
3. Create the first clone and add it to the map.
4. For each node popped from the queue:
   - Get its clone from the map.
   - For each neighbor:
     - If not visited, create a clone and add to the map and queue.
     - Add the neighbor's clone to the current clone's neighbors list.
5. Return the clone of the start node from the map.

**Complexity Analysis**

- _Time complexity_: `O(V + E)` where V is the number of vertices and E is the number of edges.
- _Space complexity_: `O(V)` for the hashmap and queue.

### Approach 3: Iterative DFS with Stack and Map

**Algorithm**

1. Use a HashMap/Map to store mappings of original nodes to their clones.
2. Use a stack for iterative DFS traversal starting from the given node.
3. Create the first clone and add it to the map.
4. For each node popped from the stack:
   - Get its clone from the map.
   - For each neighbor:
     - If not visited, create a clone and add to the map and stack.
     - Check if this neighbor's clone is already in the current clone's neighbors list.
     - If not, add the neighbor's clone to the current clone's neighbors list.
5. Return the clone of the start node from the map.

**Complexity Analysis**

- _Time complexity_: `O(V + E)` where V is the number of vertices and E is the number of edges.
- _Space complexity_: `O(V)` for the hashmap and stack.

### Key Insight

The key insight to solving this problem is using a hash map to remember nodes we've already cloned, which:

1. Prevents infinite recursion when there are cycles in the graph
2. Ensures we maintain the exact same structure as the original graph
3. Avoids duplicating nodes that are referenced by multiple other nodes

### Comparison of Approaches

1. **Recursive DFS** is clean and intuitive, making it easy to understand and implement.
2. **BFS** might have better memory performance for deep graphs since it doesn't use the call stack.
3. **Iterative DFS** combines the traversal style of DFS with the memory benefits of not using recursion.

The recursive DFS approach is typically preferred for its clarity and ease of implementation. All three approaches have the same asymptotic time and space complexity.
