const assert = require('assert')
const leastCommonMultiple = require('../leastCommonMultiple')

describe('leastCommonMultiple', () => {
  it('should find least common multiple', () => {
    assert.equal(leastCommonMultiple(0, 0), 0)
    assert.equal(leastCommonMultiple(1, 0), 0)
    assert.equal(leastCommonMultiple(0, 1), 0)
    assert.equal(leastCommonMultiple(4, 6), 12)
    assert.equal(leastCommonMultiple(6, 21), 42)
    assert.equal(leastCommonMultiple(7, 2), 14)
    assert.equal(leastCommonMultiple(3, 5), 15)
    assert.equal(leastCommonMultiple(7, 3), 21)
    assert.equal(leastCommonMultiple(1000000, 2), 1000000)
    assert.equal(leastCommonMultiple(-9, -18), 18)
    assert.equal(leastCommonMultiple(-7, -9), 63)
    assert.equal(leastCommonMultiple(-7, 9), 63)
  })
})