const assert = require('assert');
const radianToDegree = require('../radianToDegree');

describe('radianToDegree', () => {
  it('should convert radian to degree', () => {
    assert.equal(radianToDegree(0), 0);
    assert.equal(radianToDegree(Math.PI / 4), 45);
    assert.equal(radianToDegree(Math.PI / 2), 90);
    assert.equal(radianToDegree(Math.PI), 180);
    assert.equal(radianToDegree((3 * Math.PI) / 2), 270);
    assert.equal(radianToDegree(2 * Math.PI), 360);
  });
});