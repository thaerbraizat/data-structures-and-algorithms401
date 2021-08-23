'use strict';

class Stack {
  constructor() {
    this.storage = new Array();
    this.top = null;
  }
  push(item) {
    this.storage.unshift(item);
    this.top = item;
  }
  pop() {
    let item = this.storage.shift();
    this.top = this.storage[0];
    return item;
  }
}

class PseudoQueue {

  constructor() {
    this.storageQueue = [];
  }
  enqueue(value) {
    this.storageQueue.unshift(value);
    // let st = new Stack;
    // st.push(value);
    // return this.storageQueue.push(st.pop());
  }
  dequeue() {
    let de = new Stack();

    for (let i = 0; i <this.storageQueue.length; i++) {
      de.push(this.storageQueue[i]);
    }
    let x =de.pop();
    console.log('x',x);
    console.log('asdqw de',de);
    // console.log('new',de);

    this.storageQueue.pop();
    console.log('storsd',this.storageQueue);
    // let item = this.storageQueue.unshift();
    // console.log('item',item);
    // this.storageQueue.pop();
    // console.log('tr',this.storageQueue);
    // return this.storageQueue ,x;
  }

}
console.log('tesat');

const t = new PseudoQueue();
t.enqueue(10);
t.enqueue(2);
t.enqueue(3);
t.enqueue(4);

// t.dequeue();
t.dequeue();
// console.log('dequeq',t.dequeue());
// console.log(t);
console.log(t.storageQueue);


module.exports = PseudoQueue;
