const assert = require('assert')
const fibonacci = require('../fibonacci')

describe('fibonacci', () => {
  it('should calculate fibonacci correctly', () => {
    assert.deepEqual(fibonacci(1), [ 1 ])
    assert.deepEqual(fibonacci(2), [1, 1])
    assert.deepEqual(fibonacci(3), [1, 1, 2])
    assert.deepEqual(fibonacci(4), [1, 1, 2, 3])
    assert.deepEqual(fibonacci(5), [1, 1, 2, 3, 5])
    assert.deepEqual(fibonacci(6), [1, 1, 2, 3, 5, 8])
    assert.deepEqual(fibonacci(7), [1, 1, 2, 3, 5, 8, 13])
    assert.deepEqual(fibonacci(8), [1, 1, 2, 3, 5, 8, 13, 21])
    assert.deepEqual(fibonacci(9), [1, 1, 2, 3, 5, 8, 13, 21, 34])
    assert.deepEqual(fibonacci(10), [1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
  })
});