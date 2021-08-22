'use strict';

const PseudoQueue = require('../stack-queue-pseudo');

describe('stack', ()=> {

  it('enqueue', ()=> {
    let t = new PseudoQueue();
    t.enqueue(10);
    t.enqueue(2);
    t.enqueue(3);
    expect(t.storageQueue).toEqual([3,2,10]);
  });
  it('dequeue', ()=> {
    let t = new PseudoQueue();
    t.enqueue(10);
    t.enqueue(2);
    t.enqueue(3);
    t.dequeue();
    expect(t.storageQueue).toEqual([3,2]);
  });

});
