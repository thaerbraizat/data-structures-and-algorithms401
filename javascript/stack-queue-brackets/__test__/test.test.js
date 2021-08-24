'use strict';

let validateBrackets = require('../stack-queue-brackets');

describe('validateBrackets()', () => {
  it('true ', () => {

    expect(validateBrackets('{()}')).toEqual(true);
  });
  describe('validateBrackets()', () => {
    it('false', () => {



      expect(validateBrackets('({)}')).toEqual(false);
    });
  });
});
