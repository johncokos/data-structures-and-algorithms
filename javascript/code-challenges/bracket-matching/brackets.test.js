'use strict';

const matcher = require('./brackets.js');

const goodOnes = [
  '{}',
  '{}(){}',
  '()[[stuff]]',
  '{}{code}[fellows](())'
]

const badOnes = [
  '[({}]',
  '(](stuff',
  '{(})'
]

describe('Bracket Matcher', () => {

  goodOnes.forEach(pattern => {
    it(`validates bracket pattern: ${pattern}`, () => {
      expect(matcher(pattern)).toBeTruthy();
    });
  });

  badOnes.forEach(pattern => {
    it(`detects invalid bracket pattern: ${pattern}`, () => {
      expect(matcher(pattern)).toBeFalsy();
    });
  });

})
