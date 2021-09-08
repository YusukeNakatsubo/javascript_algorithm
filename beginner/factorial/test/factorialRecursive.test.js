const assert = require('assert');
const factorialRecursive = require('../factorialRecursive')

describe('factorialRecursive', () => {
  it('should calculate factorial', () => {
    assert.equal(factorialRecursive(0), 1)
    assert.equal(factorialRecursive(1), 1)
    assert.equal(factorialRecursive(5), 120)
    assert.equal(factorialRecursive(8), 40320)
    assert.equal(factorialRecursive(10), 3628800)
  });
});