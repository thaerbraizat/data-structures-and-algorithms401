'use strict';
// eslint-disable-next-line no-unused-vars
class Vertex {
  constructor(value) {
    this.value = value;
  }
}


class Edge {
  constructor(vertex, weight = 0) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

let nodes = [];
class Graph {
  constructor() {
    this.adjacencyList = new Map();

  }

  //   addNode(value) {

  //     const node = new Node(value);
  //     this.adjacencyList.set(node, new Map());
  //     return node;
  //   }

  addVertex(vertex) {
    this.adjacencyList.set(vertex, []);
  }
  addEdge(node1, node2, weight = 0) {
    if (!node1 || !node2) return null;
    if (this.adjacencyList.has(node1) && this.adjacencyList.has(node2)) {
      let oldEdges1 = this.adjacencyList.get(node1);
      oldEdges1.set(node2, weight);
      this.adjacencyList.set(node1, oldEdges1);
      let oldEdges2 = this.adjacencyList.get(node2);
      oldEdges2.set(node1, weight);
      this.adjacencyList.set(node2, oldEdges2);
    }
  }
  addDirectedEdge(start, end, weight) {
    if (!this.adjacencyList.has(start) || !this.adjacencyList.has(end)) {
      console.log('VERTEX DOES NOT EXIST');
      return;
    }
    // they exist
    const adjacencies = this.getNeighbours(start); // get me the neighbours of start
    adjacencies.push(new Edge(end, weight));
  }

  getNeighbours(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      console.log('vertex does not exist');
      return;
    }
    return this.adjacencyList.get(vertex);
  }

  getNode() {

    for (let vertex of this.adjacencyList.keys()) {
      console.log('edge123123', vertex.value);
      nodes.push(vertex);
    }
    return nodes;

  }

  size() {
    let size = 0;
    for (const vertex of this.adjacencyList.keys()) {
      size++;
      console.log(vertex);
    }
    return size;

  }
  display() {
    for (const [vertex, edge] of this.adjacencyList.entries()) {
      console.log('v = ', vertex, 'his n: ', edge);
    }
  }

  breadthFirst(root) {
    const visited = new Set();
    const queue = [];
    let current = root;
    queue.push(current);
    visited.add(current);
    while (queue[0]) {
      current = queue.shift();
      if (this.adjacencyList.get(current).size) {
        for (let node of this.adjacencyList.get(current).keys()) {
          if (!visited.has(node)) {
            queue.push(node);
            visited.add(current);
          }
        }
      }
    }
    return visited;
  }

  businessTrip(graph, arr) {
    let totalcost = 0;
    if (graph.adjacencyList.has(arr[0])) {
      let list = graph.adjacencyList.get(arr[0]);
      for (let i = 0; i < arr.length; i++) {
        let flag = false;
        for (const { vertex, wieght } of list) {
          if (vertex === arr[i]) {
            flag = true;
            totalcost += wieght;
            break;
          }
        }
        if (!flag) {
          return [false, 0];
        }
      }
    } else {
      return [false, 0];
    }
    return [true, totalcost];
  }
}

module.exports={Graph};
