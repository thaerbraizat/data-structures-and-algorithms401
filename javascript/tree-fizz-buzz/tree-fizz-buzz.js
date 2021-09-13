'use strict';

class Node {
  constructor(value,children=[]) {
    this.value = value;
    this.children=children;
  }
}
class BinaryTree {
  constructor(root=null) {
    this.root = root;
  }
  treeFuzzBuzz(tree) {

    if(!tree)return null;

    let arr=[];
    let loop = (node) => {
      node.value = (node.value % 3 === 0 && node.value % 5 === 0) ? 'fizzbuzz' : node.value % 5 === 0 ? 'buzz' : node.value % 3 === 0 ? 'fizz' : node.value.toString() ;
      arr.push( node.value);
      console.log(this.children);
      for(let i =0;i<this.children.length;i++ ){
        if (node.children[i]) loop(node.children[i]);
      }
    };
    loop(tree.root);

    return arr;
  }
  //   // no repeted
  //   add(value){
  //     const newNode = new Node(value);
  //     let node = this.root;
  //     if ( node === null ) {
  //       this.root = newNode;
  //       return;
  //     }

  //     while(node !== null){
  //       if(node.value > value){
  //         if(node.left === null){
  //           node.left=newNode;
  //           return;
  //         }
  //         node = node.left;
  //       }else{
  //         if(node.right === null){
  //           node.right=newNode;
  //           return;
  //         }
  //         node =node.right;
  //       }
  //     }
  //   }

  // }

  // function sumOdd(tree) {

  //   if(!tree)return null;


  //   let sum=0;
  //   let loop = (node) => {
  //     if(node.value % 2 !==0){
  //       sum=sum + node.value;
  //     }
  //     if (node.left) loop(node.left);
  //     if (node.right) loop(node.right);
  //   };
  //   loop(tree.root);

//   return sum;
// }
}
// function treeFuzzBuzz(tree) {

//   if(!tree)return null;

//   let arr=[];
//   let loop = (node) => {
//     node.value = (node.value % 3 === 0 && node.value % 5 === 0) ? 'fizzbuzz' : node.value % 5 === 0 ? 'buzz' : node.value % 3 === 0 ? 'fizz' : node.value.toString() ;
//     arr.push( node.value);
//     console.log(this.children);
//     for(let i =0;i<this.children.length;i++ ){
//       if (node.children[i]) loop(node.children[i]);
//     }
//   };
//   loop(tree.root);

//   return arr;
// }

// function numberOfLeaf(tree) {
//   if(!tree)return null;

//   let sum =0;
//   let loop = (node) => {
//     if(node.left === null && node.right === null){
//       sum++;
//     }
//     if (node.left) loop(node.left);
//     if (node.right) loop(node.right);
//   };
//   loop(tree.root);

//   return sum;
// }
// function numberOfTwoLeaf(tree1,tree2){

//   let x= numberOfLeaf(tree1);
//   let y =numberOfLeaf(tree2);

//   if( x === y){
//     return true;
//   }
//   return false;

// }


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



// const one1 = new Node(10);
// const two1 = new Node(5);
// const three1 = new Node(15);
// const four1 = new Node(2);
// const five1 = new Node(4);


// one1.left = two1;
// one1.right = three;
// three1.left = four1;
// three1.right = five1;

// const tree2 = new BinaryTree(one1);
// let tree3 = new BinaryTree;

// tree.add(10);
// tree.add(5);
// tree.add(15);
// tree.add(2);
// tree.add(9);
// tree.add(11);

// console.log(numberOfTwoLeaf(tree,tree2));
console.log(tree.treeFuzzBuzz(tree));


// module.exports = {
//   treeFuzzBuzz,
//   BinaryTree,
//   Node

// };
