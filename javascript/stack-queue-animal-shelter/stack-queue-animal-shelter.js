'use strict';


// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }
// class AnimalShelter {
//   constructor() {
//     this.front = new Stack();
//     this.rear = new Stack();
//   }
//   enqueue(value){
//     if (value !== 'dog' && value !== 'cat'){
//       return null;
//     }
//     while (this.front.top) {
//       let newNode = this.front.pop();
//       this.rear.push(newNode);
//     }
//     this.front.push(value);
//     while(this.rear.top){
//       let newNode = this.rear.pop();
//       this.front.push(newNode);
//     }
//   }

//   dequeue(value){
//     if (value !== 'dog' && value !== 'cat'){
//       return null;
//     } else if (this.front === null){
//       return 'Exception';
//     } else if (value ==='cat' && this.front.value ==='cat'){
//       this.front.pop();
//     } else if (value ==='dog' && this.front.value ==='dog'){
//       this.front.pop();
//     }
//   }
// }
// class Stack {
//   constructor() {
//     this.top = null;
//   }

//   pop() {
//     if (this.top === null){
//       return 'Exception';
//     } else {
//       let tempNode = this.top;
//       //identify the current top;
//       this.top = tempNode.next;
//       //reassign the top to be the next node
//       return tempNode.value;
//     }
//   }

//   push(item) {
//     const node = new Node(item);
//     node.next = this.top;
//     this.top = node;
//   }
// }

// module.exports = {Node, AnimalShelter, Stack};

class AnimalShelter {
  constructor(type, nickName) {
    this.obj={
      type : type,
      nickName : nickName
    };
    this.arr = [];

  }

  enqueue(obj) {
    if (obj.type !== 'dog' && obj.type !== 'cat') {
      return null;
    }
    this.arr.push(obj.nickName);
  }

  dequeue(obj){
    if (obj.type !== 'dog' && obj.type !== 'cat') {
      return null;
    }
    console.log('objname',obj.nickName);
    console.log('this.arr[0]',this.arr[0]);

    if(this.arr !== null && obj.nickName === this.arr[0]){
      let x= this.arr.shift();
      console.log('x',x);
      console.log(obj.type);
    }
    return null;

  }
}

const test = new AnimalShelter();
let a={
  type : 'cat',
  nickName : 'sla'
};
let b={
  type : 'cat',
  nickName : 'slam'
};
let c={
  type : 'dog',
  nickName : 'slama'
};

test.enqueue(a);
test.enqueue(b);
test.enqueue(c);
test.dequeue(b);


console.log(test.arr);
module.exports = AnimalShelter;
