'use strict';

let LinkedList = require('../linked-list-insertions');

describe('LinkedList Module()', () => {
  it('constructor()', () => {
    let newList = new LinkedList();
    expect(newList.head).toBeNull();
  });

  it('append() ', () => {
    let newList = new LinkedList();
    let initialValue = 'First Item';
    newList.append(initialValue);
    expect(newList.head.value).toEqual(initialValue);
  });

  it('Can successfully add multiple nodes to the end of a linked list', () => {
    let newList = new LinkedList();
    let initialValue = 'First Item';
    newList.append(initialValue);
    expect(newList.head.value).toEqual(initialValue);
  });
  it('Can successfully insert a node before a node located i the middle of a linked list ', () => {

    let newList = new LinkedList();
    let initialValue = 'First Item';
    newList.append(initialValue);
    expect(newList.head.value).toEqual(initialValue);

    let anotherOne = 'Second Item';
    newList.append(anotherOne);
    expect(newList.head.next.value).toEqual(anotherOne);
    expect(newList.head.next.next).toBeNull();
    expect(newList.head.value).toEqual(initialValue);

    let mid='mid';
    newList.insertAfter(initialValue,mid);
    expect(newList.head.next.value).toEqual(mid);
  });

  it('Can successfully insert a node before the first node of a linked list', () => {
    let newList = new LinkedList();
    let initialValue = 'First Item';
    newList.append(initialValue);
    expect(newList.head.value).toEqual(initialValue);

    let FirstD ='danial';
    newList.insertBefore(initialValue,FirstD);
    expect(newList.head.value).toEqual(FirstD);
  });

  it('Can successfully insert after a node in the middle of the linked list', () => {
    let newList = new LinkedList();
    let initialValue = 'First Item';
    newList.append(initialValue);
    expect(newList.head.value).toEqual(initialValue);

    let anotherOne = 'Second Item';
    newList.append(anotherOne);
    expect(newList.head.next.value).toEqual(anotherOne);
    let mid='mid';
    newList.insertAfter(initialValue,mid);
    expect(newList.head.next.value).toEqual(mid);

  });

  it('Can successfully insert a node after the last node of the linked list', () => {
    let newList = new LinkedList();
    let initialValue = 'First Item';
    newList.append(initialValue);
    expect(newList.head.value).toEqual(initialValue);

    let FirstD ='danial';
    newList.append(FirstD);
    expect(newList.head.next.value).toEqual(FirstD);
  });


  //   it('toString() Can properly return a collection of all the values that exist in the linked list', () => {
  //     let newList = new LinkedList();
  //     let initialValue = 'First Item';
  //     newList.insert(initialValue);
  //     expect(newList.toString()).toEqual('First Item->null');


//   });
//   it('The head property will properly point to the first node in the linked list', () => {
//     let newList = new LinkedList();
//     let initialValue = 'First Item';
//     newList.insert(initialValue);
//     expect(newList.head.value).toEqual('First Item');
//   });
});
