'use strict';
const Node = require('./node');

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }
  }

  insertAfter(value, newValue) {
    let current = this.head;

    while (current.next !== null) {
      if (current.value === value) {
        let n = new Node(newValue);
        n.next = current.next;
        current.next = n;
        return;
      }

      current = current.next;
    }

  }
  //   eslint-disable-next-line no-dupe-class-members

  kthFromEnd(k) {
    let length=1;
    // let wanted=0;
    let current = this.head;
    if(this.head === null){
      return null;
    }
    while (current.next !== null) {
      length=length+1;
      current=current.next;
    //   console.log(current);
    //   console.log(length);
    }
    // console.log('asdqw', length);
    let currentNode = this.head;
    let count = 0;
    if(k>length){
      return 'err';
    }else{
      while (currentNode) {
        if (count === length-k-1) { // found the element
          console.log(currentNode);
          return currentNode;
        }
        count++; // increment counter
        currentNode = currentNode.next; // move to next node
      }
      return -1;
    }
  }
  toString(){
    let count = 0;
    let arr=[];
    let current = this.head;
    while (current !== null){
      count=count+1;
      arr.push(current.value);

      current = current.next;
    }
    arr.push('null');

    return arr.join('->');
    // "{ a } -> { b } -> { c } -> NULL"
  }
}
const test = new LinkedList();
test.append(10);
test.append(20);
test.append(30);
test.append(40);
test.append(40);

console.log(test.kthFromEnd(1));



test.toString();

console.log(test.toString());

module.exports = LinkedList;
