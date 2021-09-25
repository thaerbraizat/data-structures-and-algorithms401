'use strict';
const Node = require('./node');

class Stack {
  constructor() {
    this.head = null;
    this.top = null;
    this.length=0;

  }

  push(value) {

    let n =new Node(value);
    n.next=this.top;
    this.top=n;
    this.head=n.value;
    // console.log('asdasdasdasd',n.value);
    // console.log('headdd',this.head);
    this.length++;
    // console.log(this.length);

    return n;
  }

  pop(){
    if(this.top !== null){
      let temp =this.top.value;
      this.top=this.top.next;
      this.length--;
      this.head = this.top;
      return temp;
    }
    return 'Empty Stack';
  }
  peek(){
    if(this.top !== null){
      return this.top.value;
    }
    return 'no item in stack';
  }

  isEmpty() {
    if (this.top === null) {
      return true;
    }
    return false;
  }

  // let n = new Node;
  // if (!this.head) {
  //   n.value = value;
  //   this.top = n;
  //   this.head =this.top;
  //   return this.top;
  // }
  // let current = this.head;

  // while (current.next !== null) {
  //   current = current.next;
  //   this.head=this.head.next;
  // }
  // if (current.next === null) {
  //   n.value = value;
  //   n.value = current.next;
  //   this.top = n.value;
  //   console.log(this.top);
  // }





}
class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  enqueue(value) {

    let n = new Node;
    if (this.head === null) {
      this.head = n;
      n.value = value;
    }

    if (this.tail) {
      this.tail.next = n;
      n.value = value;
    }
    this.tail = n;
    n.value = value;
    this.length++;



    return this.length;
  }

  dequeue() {
    console.log('head', this.head.value);
    console.log('tail', this.tail);
    if (!this.head) {
      this.tail = null;
      return undefined;
    }
    const popValue = this.head.value;

    this.head = this.head.next;
    this.length--;
    return popValue;
  }

  peek() {
    if (this.head !== null) {
      return this.head.value;
    }
    return 'empty';
  }
  isEmpty() {
    if (this.head === null) {
      return true;
    }
    return false;
  }

}
const test = new Queue();
test.enqueue(10);


console.log(test);
console.log(test.peek());
console.log(test.isEmpty());
console.log(test);

const test1 = new Stack();
test1.push(10);
test1.push(23);
test1.push(43);
test1.push(123);
console.log('peek',test1.peek());
console.log(test1.pop());

console.log(test1.isEmpty());


// console.log('popopoo',test1.pop());
console.log('all',test1);







// module.exports = Queue;
module.exports={
  Stack,
  Queue
};
