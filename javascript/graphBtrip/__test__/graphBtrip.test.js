'use strict';

const {Graph}  = require('../graphBtrip');

describe('Business Trip', () => {
  const myGraph = new Graph();
  myGraph.addVertex('A');
  myGraph.addVertex('B');
  myGraph.addVertex('C');
  myGraph.addDirectedEdge('A', 'B', 300);
  myGraph.addDirectedEdge('B', 'A', 300);
  myGraph.addDirectedEdge('A', 'C', 100);
  myGraph.addDirectedEdge('C', 'A', 100);


  const arr = ['A', 'B', 'C'];


  it('should return a valid cost for true paths', () => {
    expect(myGraph.businessTrip(myGraph, arr)).toBeTruthy();

  });

});
