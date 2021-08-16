'use strict';

let LinkedList = require('../linked-list-kth');

describe('LinkedList Module()', () => {
  it('constructor()', () => {
    let newList = new LinkedList();
    expect(newList.head).toBeNull();
  });

  it('Where k is greater than the length of the linked list() ', () => {
    let newList = new LinkedList();
    let initialValue = 'First Item';
    newList.kthFromEnd(2);
    console.log(initialValue);
    expect(newList.kthFromEnd(2)).toEqual(null);
  });

  it('Where k and the length of the list are the same', () => {
    let newList = new LinkedList();
    let initialValue = 'First Item';
    newList.append(initialValue);
    expect(newList.kthFromEnd(1)).toEqual(-1);
  });
  it('Where k is not a positive integer', () => {
    let newList = new LinkedList();
    let initialValue = 'First Item';
    newList.append(initialValue);
    expect(newList.kthFromEnd(-2)).toEqual(-1);
  });
  it('Where the linked list is of a size 1', () => {
    let newList = new LinkedList();
    let initialValue = 'First Item';
    newList.append(initialValue);
    expect(newList.kthFromEnd(1)).toEqual(-1);
  });
  it('“Happy Path” where k is not at the end, but somewhere in the middle of the linked list', () => {
    let newList = new LinkedList();
    let initialValue = 'First Item';
    let sec='sec';
    let third='third';
    newList.append(initialValue);
    newList.append(sec);
    newList.append(third);
    expect(newList.kthFromEnd(1).value).toEqual('sec');
  });


});
