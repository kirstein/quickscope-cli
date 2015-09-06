'use strict';

const _ = require('lodash');

module.exports = function (file, conf) {
  if (_.endsWith(file, 'package.json')) {
    return conf.config.quickscope;
  }
  return conf;
};
