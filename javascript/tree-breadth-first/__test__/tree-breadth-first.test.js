'use strict';


const {breadthFirst} = require('../tree-breadth-first');
const {Node} = require('../tree-breadth-first');


describe('breadthFirst', ()=>{
  let one = new Node(1);
  let two = new Node(2);
  let three = new Node(3);
  let four = new Node(4);
  let five = new Node(5);
  let six = new Node(6);
  let seven = new Node(7);
  let eight = new Node(8);
  let nine = new Node(9);

  one.left = two;
  one.right = three;
  two.left = six;
  six.right = seven;
  seven.left = eight;
  seven.right = nine;
  three.left = four;
  three.right = five;

  let test =new Node(100);
 




  it('test function', ()=>{
    expect(breadthFirst(one)).toEqual([1,2,3,6,4,5,7,8,9]);
  });

  it('test function have one value', ()=>{
    expect(breadthFirst(test)).toEqual([100]);
  });
  it('test function have one value', ()=>{
    expect(breadthFirst()).toEqual(null);
  });






});
