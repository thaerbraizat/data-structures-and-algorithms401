'use strict';
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

}

module.exports=Graph;

const myGraph = new Graph();
const zero = new Vertex(0);
const one = new Vertex(1);
const two = new Vertex(2);
const three = new Vertex(3);
const four = new Vertex(4);
const five = new Vertex(5);

myGraph.addVertex(zero);
myGraph.addVertex(one);
myGraph.addVertex(two);
myGraph.addVertex(three);
myGraph.addVertex(four);
myGraph.addVertex(five);

myGraph.addDirectedEdge(zero, two);
myGraph.addDirectedEdge(two, four);
myGraph.addDirectedEdge(two, three);
myGraph.addDirectedEdge(four, five);
myGraph.addDirectedEdge(one, three);
myGraph.addDirectedEdge(five, three);

// console.log('------ neighbours of 2------');
// console.log(myGraph.getNeighbours(two));

// console.log('size',myGraph.size());

console.log('get noooooooodes', myGraph.breadthFirst(zero));























