'use strict';


const BinaryTree = require('../Binary');
const Node = require('../node');
let tree = null;


describe('Binary Tree', ()=>{

  beforeAll(()=> {
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

    // create a tree and pass root to it
    tree = new BinaryTree(one);
  });

  it('constructor', ()=>{
    const newTree = new BinaryTree();
    expect(newTree.root).toBeNull();
    expect(tree.root.value).toEqual(1);
  });

  it('preOrder', ()=> {
    let expectedOutput = [1,2,6,7,8,9,3,4,5];
    let preOrder = tree.preOrder();
    console.log('preOrder output ---->', preOrder);
    expect(preOrder).toEqual(expectedOutput);
  });

  it('Can successfully find the max', ()=> {
    let testTree=new BinaryTree();
    testTree.add(5);
    testTree.add(3);
    testTree.add(10);

    expect(testTree.maxTree(testTree)).toEqual(10);

  });
  it('Can successfully find the max 2 value have max', ()=> {
    let testTree=new BinaryTree();
    testTree.add(5);
    testTree.add(10);
    testTree.add(10);
    expect(testTree.maxTree(testTree)).toEqual(10);
  });
  it('return zero when the linkedList have no item', ()=> {
    let testTree=new BinaryTree();

    expect(testTree.maxTree(testTree)).toEqual(0);
  });






});
