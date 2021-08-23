
const AnimalShelter = require('../stack-queue-animal-shelter');
let a={
  type : 'cat',
  nickName : 'sla'
};
let b={
  type : 'cat',
  nickName : 'slam'
};
let c={
  type : 'dog',
  nickName : 'slama'
};
let d={
  type : 'dossssss',
  nickName : 'slama'
};

describe('stack', ()=> {

  it('enqueue', ()=> {
    let t = new AnimalShelter();
    t.enqueue(a);
    t.enqueue(b);
    t.enqueue(c);
    expect(t.arr).toEqual(['sla','slam','slama']);
  });

  it('enqueue not dog and cat', ()=> {
    let t = new AnimalShelter();
    t.enqueue(d);
    expect(t.enqueue(d)).toEqual(null);
  });
  it('dequeue', ()=> {
    let t = new AnimalShelter();
    t.enqueue(a);
    t.enqueue(b);
    t.enqueue(c);
    t.dequeue(a);
    expect(t.arr).toEqual(['slam','slama']);
  });
  it('dequeue not end', ()=> {
    let t = new AnimalShelter();
    t.enqueue(a);
    t.enqueue(b);
    t.enqueue(c);
    t.dequeue(c);
    expect(t.dequeue(c)).toEqual(null);
  });


});
