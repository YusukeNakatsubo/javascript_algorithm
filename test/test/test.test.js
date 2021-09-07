const assert = require('assert');
const test = require('../test')
// console.log(test('World')) // => "Hello World!"
describe('Test', () => {
  it('Say Hello World', () => {
    assert.equal(test('World'), 'Hello World!')
  });
});
