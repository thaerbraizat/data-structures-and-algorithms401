'use strict';

const {Stack} = require('../stack-and-queue');
const {Queue} =require('../stack-and-queue');

describe('stack', ()=> {


  it('Can successfully push onto a stack', ()=> {
    const test1 = new Stack();
    test1.push(10);
    expect(test1.top.value).toEqual(10);
  });


  it('Can successfully push multiple values onto a stack', ()=> {
    let stack = new Stack();
    stack.push(1);
    expect(stack.peek()).toEqual(1);
    stack.push(2);
    expect(stack.peek()).toEqual(2);
  });


  it('Can successfully pop off the stack', ()=> {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.pop()).toEqual(3);
  });

  it('Can successfully empty a stack after multiple pops', ()=> {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.pop()).toEqual(3);
    expect(stack.pop()).toEqual(2);
    expect(stack.pop()).toEqual(1);
  });

  it('Can successfully peek the next item on the stack', ()=> {
    let stack = new Stack();
    stack.push(1);
    expect(stack.peek()).toEqual(1);
  });



  it('Can successfully instantiate an empty stack', ()=> {
    let stack = new Stack();
    expect(stack.peek()).toBe('no item in stack');
  });

  it('Calling pop or peek on empty stack raises exception', ()=> {
    let stack = new Stack();
    expect(stack.pop()).toBe('Empty Stack');
  });

  // ========================================== queue test

  it('Can successfully enqueue into a queue', ()=> {
    let q = new Queue();
    q.enqueue(10);
    expect(q.peek()).toEqual(10);
  });


  it('Can successfully enqueue multiple values into a queue', ()=> {
    let q = new Queue();
    q.enqueue(10);
    expect(q.peek()).toEqual(10);
    q.enqueue(20);
    expect(q.peek()).toEqual(10);
  });


  it('Can successfully dequeue out of a queue the expected value', ()=> {
    let q = new Queue();
    q.enqueue(10);
    expect(q.dequeue()).toEqual(10);
  });


  it('Can successfully peek into a queue, seeing the expected value', ()=> {
    let q = new Queue();
    q.enqueue(10);
    expect(q.dequeue()).toEqual(10);
  });

  it('Can successfully empty a queue after multiple dequeues', ()=> {
    let q = new Queue();
    q.enqueue(10);
    q.enqueue(110);
    q.enqueue(1110);
    q.dequeue();
    q.dequeue();
    q.dequeue();
    expect(q.peek()).toEqual('empty');

  });

  it('Can successfully instantiate an empty queue', ()=> {
    let q = new Queue();

    expect(q.peek()).toEqual('empty');
  });

  it('Calling dequeue or peek on empty queue raises exception', ()=> {
    let q = new Queue();

    expect(q.peek()).toEqual('empty');
  });

});
