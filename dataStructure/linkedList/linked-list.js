'use strict';
const Node = require('./node');

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {

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


  includes(value) {

    let count = 0;
    let current = this.head;

    while (current !== null) {
      if (current.value === value)
        return count,true;
      count++;
      current = current.next;
    }


    return false;
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
//   toString() {
//     // if(!this.size) return '';

//     let str = `${this.head.value}`;
//     let current = this.head.next;

//     while(current) {
//       str += `, ${current.value} `;
//       current = current.next;
//     }

//     return str;
//   }
// }

const test =new LinkedList();
test.insert(10);
test.insert(20);
test.insert(30);
test.insert(40);

test.toString();

console.log(test.toString());

module.exports = LinkedList;
