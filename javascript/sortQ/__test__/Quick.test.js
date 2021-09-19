'use strict';

let quick_Sort = require('../sortq');


describe('quick_Sort function()', () => {
  it('quick_Sort()', () => {
    let array=[8,4,23,42,16,15];
    expect(quick_Sort(array)).toEqual([4,8,15,16,23,42]);
  });



});
