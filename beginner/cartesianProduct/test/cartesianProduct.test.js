const assert = require('assert');
const cartesianProduct = require('../cartesianProduct');

describe('cartesianProduct', () => {
  it('should return null if there is not enough info for calculation', () => {
    const product1 = cartesianProduct([1], null);
    const product2 = cartesianProduct([], null);

    assert.deepEqual(product1, null);
    assert.deepEqual(product2, null);
  });

  it('should calculate the product of two sets', () => {
    const product1 = cartesianProduct([1], [1]);
    const product2 = cartesianProduct([1, 2], [3, 5]);

    assert.deepEqual(product1, [[1, 1]]);
    assert.deepEqual(product2, [[1, 3], [1, 5], [2, 3], [2, 5]]);
  });
});