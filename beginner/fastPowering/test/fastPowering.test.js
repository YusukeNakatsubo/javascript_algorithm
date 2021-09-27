const assert = require('assert');
const fastPowering = require('../fastPowering');

describe('fastPowering', () => {
  it('should compute power in log(n) time', () => {
    assert.equal(fastPowering(1, 1), 1);
    assert.equal(fastPowering(2, 0), 1);
    assert.equal(fastPowering(2, 2), 4);
    assert.equal(fastPowering(2, 3), 8);
    assert.equal(fastPowering(2, 4), 16);
    assert.equal(fastPowering(2, 5), 32);
    assert.equal(fastPowering(2, 6), 64);
    assert.equal(fastPowering(2, 7), 128);
    assert.equal(fastPowering(2, 8), 256);
    assert.equal(fastPowering(3, 4), 81);
    assert.equal(fastPowering(190, 2), 36100);
    assert.equal(fastPowering(11, 5), 161051);
    assert.equal(fastPowering(13, 11), 1792160394037);
    assert.equal(fastPowering(9, 16), 1853020188851841);
    assert.equal(fastPowering(16, 16), 18446744073709552000);
    assert.equal(fastPowering(7, 21), 558545864083284000);
    assert.equal(fastPowering(100, 9), 1000000000000000000);
  });
});