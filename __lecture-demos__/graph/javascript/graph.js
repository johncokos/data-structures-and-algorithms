'use strict';

class Vertex {
  constructor(value) {
    this.value = value;
  }
}

class Edge {
  constructor(vertex, weight) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(vertex) {
    // Each vertex is an array of edges
    this.adjacencyList.set(vertex, []);
  }

  // Add an edge between start and end
  addDirectedEdge(startVertex, endVertex, weight = 0) {
    if (this.adjacencyList.has(startVertex) && this.adjacencyList.has(endVertex)) {
      const adjacencies = this.adjacencyList.get(startVertex);
      adjacencies.push(new Edge(endVertex, weight));
    } else {
      // Throw an error
    }
  }

  addUndirectedEdge(startVertex, endVertex, weight = 0) {
    this.addDirectedEdge(startVertex, endVertex, weight);
    this.addDirectedEdge(endVertex, startVertex, weight);
  }

  getNeighbors(vertex) {

    if (!this.adjacencyList.has(vertex)) {
      throw new Error('__ERROR__ Invalid Vertex', vertex);
    }
    return [...this.adjacencyList.get(vertex)];
  }

  bfs(startNode) {

    const queue = [];
    const visitedNodes = new Set();

    queue.push(startNode);

    visitedNodes.add(startNode);

    while (queue.length) {

      const currentNode = queue.shift();

      const neighbors = this.getNeighbors(currentNode);

      for (let neighbor of neighbors) {

        const neighborNode = neighbor.vertex;

        if (visitedNodes.has(neighborNode)) {
          continue;
        } else {
          visitedNodes.add(neighborNode);
        }

        queue.push(neighborNode);

      }
    }
    return visitedNodes;
  }

  dfs(startNode) {

    const stack = [];
    const visitedNodes = new Set();

    stack.push(startNode);
    visitedNodes.add(startNode);

    while (stack.length) {

      const currentNode = stack.pop();

      const neighbors = this.getNeighbors(currentNode);

      for (let neighbor of neighbors) {

        const neighborNode = neighbor.vertex;

        if (visitedNodes.has(neighborNode)) {
          continue;
        } else {
          visitedNodes.add(neighborNode);
        }
        stack.push(neighborNode);
      }
    }

    return visitedNodes;

  }

}


const graph = new Graph();

const ten = new Vertex(10);
const two = new Vertex(2);
const six = new Vertex(6);
const seven = new Vertex(7);
const three = new Vertex(3);
const eight = new Vertex(8);
const nine = new Vertex(9);

graph.addVertex(ten);
graph.addVertex(two);
graph.addVertex(six);
graph.addVertex(seven);
graph.addVertex(three);
graph.addVertex(eight);
graph.addVertex(nine);

graph.addDirectedEdge(ten, two);
graph.addDirectedEdge(ten, six);
graph.addDirectedEdge(ten, three);
graph.addDirectedEdge(two, seven);
graph.addDirectedEdge(six, seven);
graph.addDirectedEdge(six, eight);
graph.addDirectedEdge(three, eight);
graph.addDirectedEdge(eight, seven);
graph.addDirectedEdge(seven, nine);

console.log(JSON.stringify(graph.getNeighbors(ten), undefined, 2))
console.log('BFS', graph.bfs(ten));
console.log('DFS', graph.dfs(ten));
