'use strict';

const assert = require('assert');

jest.dontMock('../spinner');

const spinner = require('../spinner');

describe('spinner', function() {
  it('should exist', function() {
    assert(spinner);
  });
});
