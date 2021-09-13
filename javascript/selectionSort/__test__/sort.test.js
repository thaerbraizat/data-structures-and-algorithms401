'use strict';

let insertionSort = require('../sort');


describe('insertionSort function()', () => {
  it('insertionSort()', () => {
    let array=[8,4,23,42,16,15];
    expect(insertionSort(array)).toEqual([4,8,15,16,23,42]);
  });



});
