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
  // eslint-disable-next-line no-dupe-class-members
  insertBefore(value, newValue) {
    let current = this.head;
    console.log(current);
    if (current.value === value){
      let n = new Node(newValue);
      n.next = current;
      this.head=n;
      console.log(this.head);
      return;
    }
    while (current.next !== null) {
      if (current.next.value === value) {
        let n = new Node(newValue);
        n.next = current.next;
        current.next = n;
        return;
      }

      current = current.next;
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
test.insertBefore(10,100);
test.insertAfter(10,77);


test.toString();

console.log(test.toString());

module.exports = LinkedList;
