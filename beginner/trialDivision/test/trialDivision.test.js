const assert = require('assert')
const trialDivision =  require('../trialDivision')

/**
 * @param {function(n: number)} testFunction
 */
function primalityTest(testFunction) {
  assert.equal(testFunction(1), false)
  assert.equal(testFunction(2), true)
  assert.equal(testFunction(3), true)
  assert.equal(testFunction(5), true)
  assert.equal(testFunction(11), true)
  assert.equal(testFunction(191), true)
  assert.equal(testFunction(191), true)
  assert.equal(testFunction(199), true)

  assert.equal(testFunction(-1), false)
  assert.equal(testFunction(0), false)
  assert.equal(testFunction(4), false)
  assert.equal(testFunction(6), false)
  assert.equal(testFunction(12), false)
  assert.equal(testFunction(14), false)
  assert.equal(testFunction(25), false)
  assert.equal(testFunction(192), false)
  assert.equal(testFunction(200), false)
  assert.equal(testFunction(400), false)

  // It should also deal with floats.
  assert.equal(testFunction(0.5), false)
  assert.equal(testFunction(1.3), false)
  assert.equal(testFunction(10.5), false)
}

describe('trialDivision', () => {
  it('should detect prime numbers', () => {
    primalityTest(trialDivision)
  })
})