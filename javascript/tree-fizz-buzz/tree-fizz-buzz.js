'use strict';

class Node {
  constructor(value, left = null, right=null) {
    this.value = value;
    this.left= left;
    this.right = right;
  }
}
class BinaryTree {
  constructor(root=null) {
    this.root = root;
  }
  // no repeted
  add(value){
    const newNode = new Node(value);
    let node = this.root;
    if ( node === null ) {
      this.root = newNode;
      return;
    }

    while(node !== null){
      if(node.value > value){
        if(node.left === null){
          node.left=newNode;
          return;
        }
        node = node.left;
      }else{
        if(node.right === null){
          node.right=newNode;
          return;
        }
        node =node.right;
      }
    }
  }

}

function treeFuzzBuzz(tree) {

  if(!tree)return null;

  let arr=[];
  let loop = (node) => {
    node.value = (node.value % 3 === 0 && node.value % 5 === 0) ? 'fizzbuzz' : node.value % 5 === 0 ? 'buzz' : node.value % 3 === 0 ? 'fizz' : node.value.toString() ;
    arr.push( node.value);
    if (node.left) loop(node.left);
    if (node.right) loop(node.right);
  };
  loop(tree.root);

  return arr;
}




let tree = new BinaryTree;

tree.add(10);
tree.add(5);
tree.add(15);
tree.add(2);
tree.add(4);
tree.add(11);

console.log(treeFuzzBuzz(tree));


module.exports = {
  treeFuzzBuzz,
  BinaryTree,
  Node

};
