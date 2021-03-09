# Graph Lecture


## Terminology
- Vertex: node
- Edge: connector
- Weight: possibly declaring the importance of an edge
- Neighbors: Connected Vertices
- Degrees: How many ways can you leave a node

## Types of graphs

- Undirected: bi-directional edges
  - Doubly Linked List
- Directed: edges connect only in one direction
  - Trees, Singly Linked Lists
- Cyclic
  - You can end up where you started (cycle)
- Acyclic
  - No cycles
  - You cannot inadvertently end up at the vertex you started at.
  - DAG - Directed Acyclic Graph (Trees!)
  - Real Life: Travel Itinerary, HTML
- Complete Graph
  - Commune. Every vertex touches every other one.
- Connected Graph
  - Every vertex is connected
  - You can get to all of them
  - (Pic: Circle the whole thing)
- Disconnected Graph
  - Islands
  - Some vertices are off the grid
  - (Pic: Circle the whole thing, including the islands)

**Sample Graph**
```
A — B
 /  |
D — C
```

**Adjacency List**

```
A — B
B — C — D — A
C — B — D
D — B — C
```

**Adjacency Matrix**

```
    A   B   C   D
A   0   1   0   0
B   1   0   1   1
C   0   1   0   1
D   0   1   1   0
```

## Traversals

### Breadth First


### Depth First
