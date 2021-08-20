'use strict';

let {LinkedList} = require('../linked-list-zip');
let {zipLists,} =require('../linked-list-zip');

describe('LinkedList Module()', () => {
  it('constructor()', () => {
    let newList = new LinkedList();
    expect(newList.head).toBeNull();
  });

  it('test zipLists function  ', () => {
    let newList = new LinkedList();
    let initialValue = 'First Item';
    let newlist2 = new LinkedList();
    let Value = 'Secend Item';
    newList.append(initialValue);
    newList.append('hi');
    newlist2.append(Value);
    newlist2.append('2hi');

    expect(zipLists(newList,newlist2)).toEqual({'head': {'next': {'next': {'next': {'next': null, 'value': '2hi'}, 'value': 'hi'}, 'value': 'Secend Item'}, 'value': 'First Item'}, 'tail': null});
  });




});
