'use strict';

const HashTable = require('../hash');

describe('hash table', () => {
  it('Adding a key/value to your hashtable results in the value being in the data structure', () => {
    let hashtable = new HashTable(5);
    let expected = 'test';
    hashtable.add('name', 'test');

    expect(hashtable.contain('name')).toBe(true);
    expect(hashtable.get('name')).toEqual(expected);
  });

  it('Retrieving based on a key returns the value stored', () => {
    let hashtable = new HashTable(5);
    let expected = 'test';
    hashtable.add('name', 'test');

    expect(hashtable.contain('name')).toBe(true);
    expect(hashtable.get('name')).toEqual(expected);
    expect(hashtable.get('gg')).toEqual('Dose not exist');
  });

  it('Successfully hash a key to an in-range value',()=>{
    let hashtable = new HashTable(5);
    let min=0;
    let max=4;
    let key='test';
    expect(hashtable.hash(key)).toBeGreaterThanOrEqual(min);
    expect(hashtable.hash(key)).toBeLessThanOrEqual(max);
  });
});
