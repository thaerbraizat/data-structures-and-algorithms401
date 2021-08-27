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

  it('inOrder', ()=> {
    let expectedOutput = [6, 8, 7, 9, 2, 1, 4, 3, 5];
    let inOrder = tree.inOrder();
    console.log('inOrder output ---->', inOrder);
    expect(inOrder).toEqual(expectedOutput);
  });

  it('postOrder', ()=> {
    let expectedOutput = [8, 9, 7, 6, 2, 4, 5, 3, 1];
    let postOrder = tree.postOrder();
    console.log('postOrder output ---->', postOrder);
    expect(postOrder).toEqual(expectedOutput);
  });


  it('Can successfully instantiate an empty tree', ()=> {
    let testTree=new BinaryTree();

    expect(testTree).toEqual( {'root': null});
  });
  it('Can successfully instantiate a tree with a single root node', ()=> {
    let testTree=new BinaryTree();
    testTree.add(2);

    expect(testTree.root.value).toEqual(2);
  });
  it('Can successfully add a left child and right child to a single root node', ()=> {
    let testTree=new BinaryTree();
    testTree.add(5);
    testTree.add(3);
    testTree.add(10);

    expect(testTree.root.value).toEqual(5);
    expect(testTree.root.left.value).toEqual(3);
    expect(testTree.root.right.value).toEqual(10);
  });





});
