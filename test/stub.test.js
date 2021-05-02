'use strict';

const mocha = require('mocha');
const assert = require('assert');

mocha.describe('Stub', () => {
  mocha.it('Should pass', () => {
    assert.deepStrictEqual(true, true);
  });
});
