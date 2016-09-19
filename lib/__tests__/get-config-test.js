'use strict';

const assert = require('assert');

jest.enableAutomock();
jest.dontMock('../get-config');
jest.dontMock('lodash');

const getConfig = require('../get-config');

describe('get-config', function() {
  it('should exist', function() {
    assert(getConfig);
  });

  it('should return the whole config for file if its not package.json', function() {
    let testCfg = {};
    let conf    = getConfig('xxx.js', testCfg);
    assert.strictEqual(conf, testCfg);
  });

  it('should return config.quickscope if its package.json', function() {
    let qsCfg = { cmd: '123' };
    let testCfg = {
      config: {
        quickscope: qsCfg
      }
    };
    let conf = getConfig('package.json', testCfg);
    assert.strictEqual(conf, qsCfg);
  });
});
