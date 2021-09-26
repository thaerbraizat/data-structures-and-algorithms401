const Graph  = require('../graph-breadth-first');

describe('breadthFirst()', () => {
  it('Return a collection of nodes in the order they were visited given an input node', () => {
    const graph = new Graph();
    const nodeA = graph.addVertex('a');
    const nodeB = graph.addVertex('b');
    const nodeC = graph.addVertex('c');
    const nodeD = graph.addVertex('d');
    const nodeE = graph.addVertex('e');
    const nodeF = graph.addVertex('f');
    graph.addDirectedEdge(nodeA, nodeB, 1);
    graph.addDirectedEdge(nodeB, nodeC, 1);
    graph.addDirectedEdge(nodeB, nodeD, 1);
    graph.addDirectedEdge(nodeC, nodeE, 1);
    graph.addDirectedEdge(nodeC, nodeF, 1);
    graph.addDirectedEdge(nodeD, nodeF, 1);
    expect(graph.breadthFirst(nodeA)).toEqual(new Set([nodeA, nodeB, nodeC, nodeD, nodeE, nodeF]));
  });
});
