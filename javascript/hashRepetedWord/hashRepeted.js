'use strict';

class Node{
  constructor(val){
    this.val=val;
    this.next=null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }

  getData() {
    if (!this.head) return 'empty';

    let current = this.head;
    let newArray = [];
    while (current) {
      newArray.push(current.val);
      current = current.next;
    }
    return newArray;
  }
}
class HashTable {
  constructor(size) {
    this.size = size;
    this.map = new Array(size);
  }

  hash(key) {
    return (
      (key.split('').reduce((acc, cur) => {
        return acc + cur.charCodeAt(0);
      }, 0) *
      599) %
        this.size
    );
  }

  add(key, val) {
    let hash = this.hash(key);
    console.log(hash);
    if (!this.map[hash]) {
      this.map[hash] = new LinkedList();
    }
    let entry = { [key]: val };
    this.map[hash].append(entry);
  }

  get(key) {
    let hash = this.hash(key);

    if (!this.map[hash]) return 'Dose not exist';

    let index = this.map[hash];
    let current = index.head;
    if (current.val[key]) return current.val[key];

    while (current.next) {
      current = current.next;
      if (current.val[key]) return current.val[key];
    }
  }

  contain(key) {
    let hash = this.hash(key);
    if (!this.map[hash]) return false;

    let index = this.map[hash];

    if (!index.head) {
      return false;
    } else {
      let current = index.head;
      if (current.val[key]) return true;

      while (current.next) {
        current = current.next;
        if (current.val[key]) return true;
      }
    }
  }
  repeatedWord(string) {
    const arr = string.split(/[ ,]+/);
    let key;
    let hash;
    for (let i = 0; i < arr.length; i++) {
      key = arr[i].toLowerCase();
      this.add(key, 'ww');
      hash = this.hash(key);
      if (this.map[hash].head.next) {
        return key;
      }
    }
  }
}

const hashmap = new HashTable(1024);
hashmap.add('name', 'qw');
hashmap.add('age', 26);
hashmap.add('cat', 'Kitty');
hashmap.add('act', 'Jonny Depp');

console.log('a', hashmap);
console.log('b', hashmap.map[75]);
console.log('c', hashmap.map[520]);
console.log('d', hashmap.map[951]);


console.log('get method', hashmap.get('act'));
console.log('get method', hashmap.contain('age'));

module.exports = HashTable;
