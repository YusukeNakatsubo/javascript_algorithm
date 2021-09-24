const assert = require('assert');
const degreeToRadian = require('../degreeToRadian');

describe('degreeToRadian', () => {
  it('should convert degree to radian', () => {
    assert.equal(degreeToRadian(0), 0);
    assert.equal(degreeToRadian(45), Math.PI / 4);
    assert.equal(degreeToRadian(90), Math.PI / 2);
    assert.equal(degreeToRadian(180), Math.PI);
    assert.equal(degreeToRadian(270), (3 * Math.PI) / 2);
    assert.equal(degreeToRadian(360), 2 * Math.PI);
  });
});