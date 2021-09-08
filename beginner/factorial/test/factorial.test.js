const assert = require('assert')
const factorial = require('../factorial')

describe('factorial', () => {
  it('should calculate factorial', () => {
    assert.equal(factorial(0), 1)
    assert.equal(factorial(1), 1)
    assert.equal(factorial(5), 120)
    assert.equal(factorial(8), 40320)
    assert.equal(factorial(10), 3628800)
  });
});