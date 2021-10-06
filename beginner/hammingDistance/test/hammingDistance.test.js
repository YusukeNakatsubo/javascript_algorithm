const assert = require('assert');
const hammingDistance = require('../hammingDistance');

describe('hammingDistance', () => {
  it('should throw an error when trying to compare the strings of different lengths', () => {
    const compareStringsOfDifferentLength = () => {
      hammingDistance('a', 'aa');
    };

    assert.throws(compareStringsOfDifferentLength, Error);
  });

  it('should calculate difference between two strings', () => {
    assert.equal(hammingDistance('a', 'a'), 0);
    assert.equal(hammingDistance('a', 'b'), 1);
    assert.equal(hammingDistance('abc', 'add'), 2);
    assert.equal(hammingDistance('karolin', 'kathrin'), 3);
    assert.equal(hammingDistance('karolin', 'kerstin'), 3);
    assert.equal(hammingDistance('1011101', '1001001'), 2);
    assert.equal(hammingDistance('2173896', '2233796'), 3);
  });
});