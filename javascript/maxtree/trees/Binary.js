'use strict';

const Node = require('./node');
class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }
  // no repeted
  add(value) {
    const newNode = new Node(value);
    let node = this.root;
    if (node === null) {
      this.root = newNode;
      return;
    }

    while (node !== null) {
      if (node.value > value) {
        if (node.left === null) {
          node.left = newNode;
          return;
        }
        node = node.left;
      } else {
        if (node.right === null) {
          node.right = newNode;
          return;
        }
        node = node.right;
      }
    }
  }
  contains(value) {
    let node = this.root;
    while (node !== null) {
      if (value > node.value) {
        node = node.right;
      } else if (value < node.value) {
        node = node.left;
      } else {
        return true;
      }
    }
    return false;

  }


  // recueseve
  // contains(value){
  //   let node = this.root;
  //   return this.danial(node,value);

  // }
  //recrs
  // danial(node,value){
  //   if(node === null){
  //     return false;
  //   }
  //   if(node.value === value) {
  //     return true;
  //   }else if (node.value >value){
  //     return this.danial(node.left,value);
  //   }else{
  //     return this.danial(node.right,value);
  //   }

  // }




  //   add(value){


  //     const node = this.root;
  //     if ( node === null ) {
  //       this.root = new Node(value);
  //       return;
  //     }

  //     let binaryAdd = (node) => {

  //       // Left is less  (< value)  ()< value  ()< value  ()< value
  //       if ( value < node.value ) {
  //         // If no left node, create a new node for it, with the current value
  //         if ( node.left === null ) {
  //           node.left = new Node(value);
  //           return;
  //         }
  //         // Otherwise,
  //         else if ( node.left !== null ) {
  //           return binaryAdd(node.left);
  //         }
  //       }
  //       // Right is might (> value)
  //       else if ( value >= node.value ) {
  //         // If no right node, create a new node for it, with the current value
  //         if ( node.right === null ) {
  //           node.right = new Node(value);
  //           return;
  //         }
  //         // Otherwise,
  //         else if ( node.right !== null ) {
  //           return binaryAdd(node.right);
  //         }
  //       }
  //       else {
  //         return null;
  //       }
  //     };

  //     binaryAdd(value);

  //   }




  // left - root - right
  inOrder() {
    let result = [];
    let traverse = (node) => {
      if (node.left) traverse(node.left);
      result.push(node.value);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return result;
  }

  // left  - right - root
  postOrder() {
    let result = [];
    let traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      result.push(node.value);
    };
    traverse(this.root);
    return result;
  }
  // root - left - right
  preOrder() {
    let result = [];
    let traverse = (node) => {
      if (node === null) {
        return 0;
      }
      result.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return result;
  }

  // maxTree(tree){
  //   let arr=[];
  //   arr =tree.preOrder();
  //   console.log(arr);
  //   let max = 0;
  //   for (let i = 0; i < arr.length; i++) {
  //     if(arr[i]>max){
  //       max=arr[i];
  //     }
  //   }
  //   return max ;
  // }

  maxTree() {
    if (!this.root) return 0;
    let max = this.root.value;
    let travers = (node) => {
      if (node.left) travers(node.left);
      if (node.right) travers(node.right);
      if (node.value > max) max = node.value;
    };

    travers(this.root);
    return max;
  }



}


let tree = new BinaryTree;

tree.add(10);
tree.add(5);
tree.add(15);
tree.add(2);
tree.add(32);
tree.add(11);

console.log(tree);

console.log(tree.preOrder());
console.log(tree.maxTree());
module.exports = BinaryTree;
