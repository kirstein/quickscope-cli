'use strict';

const _     = require('lodash');
const print = require('./print');
const spawn = require('./spawn');

function buildCmd (cmd, targets) {
  return cmd + ' ' + targets.join(' ');
}

let timeout    = null;
let allTargets = [];

function getTargets (deps) {
  return deps.targets || _.reduce(deps, function (res, dep) {
    return _.union(res, dep.targets);
  }, []);
}

module.exports = function (cmd, deps, cb) {
  let targets = getTargets(deps);
  console.log(print.fileChange('Testing:', targets.join()));
  allTargets = allTargets.concat(targets);
  timeout = timeout || setTimeout(function () {
    spawn(buildCmd(cmd, _.unique(allTargets)), targets[0].cwd).on('close', cb);
    timeout    = null;
    allTargets = [];
  }, 200);
};
