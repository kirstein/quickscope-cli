'use strict';

const assert = require('assert');

jest.enableAutomock();
jest.dontMock('../spinner');

const spinner = require('../spinner');

describe('spinner', function() {
  it('should exist', function() {
    assert(spinner);
  });
});
