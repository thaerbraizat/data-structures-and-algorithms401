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

  addVertex(vertex) {
    this.adjacencyList.set(vertex, []);
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
      console.log('edge123123',vertex.value);
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

}

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

console.log('------ neighbours of 2------');
console.log(myGraph.getNeighbours(two));

console.log('size',myGraph.size());

console.log('get noooooooodes',myGraph.getNode());

for (const [k,v] of myGraph.adjacencyList.entries()) {
  console.log('k = ', k, ' v =', v);
}
