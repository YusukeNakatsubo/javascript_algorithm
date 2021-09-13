const assert = require('assert')
const pascalTriangle = require('../pascalTriangle')

describe('pascalTriangle', () => {
  it('should calculate Pascal Triangle coefficients for specific line number', () => {
    assert.deepEqual(pascalTriangle(0), [1])
    assert.deepEqual(pascalTriangle(1), [1, 1])
    assert.deepEqual(pascalTriangle(2), [1, 2, 1])
    assert.deepEqual(pascalTriangle(3), [1, 3, 3, 1])
    assert.deepEqual(pascalTriangle(4), [1, 4, 6, 4, 1])
    assert.deepEqual(pascalTriangle(5), [1, 5, 10, 10, 5, 1])
    assert.deepEqual(pascalTriangle(6), [1, 6, 15, 20, 15, 6, 1])
    assert.deepEqual(pascalTriangle(7), [1, 7, 21, 35, 35, 21, 7, 1])
  });
});