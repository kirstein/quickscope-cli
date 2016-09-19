'use strict';

const cp = require('child_process');
const _  = require('lodash');

module.exports = function (command, cwd) {
  if (!command) {
    throw new Error('No command defined');
  }
  return cp.spawn('sh', ['-c'].concat(command), {
    cwd: cwd,
    stdio: 'inherit'
  });
};
