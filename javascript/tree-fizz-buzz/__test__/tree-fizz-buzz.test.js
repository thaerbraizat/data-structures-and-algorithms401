'use strict';

const {BinaryTree} = require('../tree-fizz-buzz');

const {treeFuzzBuzz} = require('../tree-fizz-buzz');
const {Node}=require('../tree-fizz-buzz');


describe('Fizz Buzz Tree', () => {

  // create a new Binary Tree
  const one = new Node(10);
  const two = new Node(5);
  const three = new Node(15);
  const four = new Node(2);
  const five = new Node(4);
  const six = new Node(11);
  const seven = new Node(15);
  const eight = new Node(21);
  const nine = new Node(30);

  const tree = new BinaryTree(one);

  one.left = two;
  one.right = three;
  three.left = four;
  three.right = five;
  two.left = six;
  six.right = seven;
  seven.left = eight;
  seven.right = nine;


  it('check function', () => {
    expect(treeFuzzBuzz(tree)).toEqual(['buzz','buzz',11,'fizzbuzz','fizz','fizzbuzz','fizzbuzz', 2,4,]);

  });

  it('check function', () => {
    expect(treeFuzzBuzz()).toEqual(null);

  });
 

});

