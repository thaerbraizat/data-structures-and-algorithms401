'use strict';

let LinkedList = require('../linkedList/linked-list');

describe('LinkedList Module()', () => {
  it('constructor()', () => {
    let newList = new LinkedList();
    expect(newList.head).toBeNull();
  });

  it('insert() Can properly insert multiple nodes into the linked list', () => {
    let newList = new LinkedList();
    let initialValue = 'First Item';
    newList.insert(initialValue);
    expect(newList.head.value).toEqual(initialValue);

    let anotherOne = 'Second Item';
    newList.insert(anotherOne);
    expect(newList.head.next.value).toEqual(anotherOne);
    expect(newList.head.next.next).toBeNull();
    expect(newList.head.value).toEqual(initialValue);
  });

  it('icludes()Will return true when finding a value within the linked list that exists Will return false when searching for a value in the linked list that does not exist', () => {
    let newList = new LinkedList();
    let initialValue = 'First Item';
    newList.insert(initialValue);
    newList.includes('hi');
    expect(newList.includes('hi')).toEqual(false);
    expect(newList.includes(initialValue)).toEqual(true);

  });

  it('toString() Can properly return a collection of all the values that exist in the linked list', () => {
    let newList = new LinkedList();
    let initialValue = 'First Item';
    newList.insert(initialValue);
    expect(newList.toString()).toEqual('First Item->null');


  });
  it('The head property will properly point to the first node in the linked list', () => {
    let newList = new LinkedList();
    let initialValue = 'First Item';
    newList.insert(initialValue);
    expect(newList.head.value).toEqual('First Item');
  });
});
