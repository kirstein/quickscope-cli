'use strict';

const _     = require('lodash');
const print = require('./print');
const spawn = require('./spawn');

function buildCmd (cmd, targets) {
  const filesTag = '${files}';
  if (cmd.indexOf(filesTag) !== -1) {
    return cmd.replace(filesTag, targets.join(' '));
  }
  return `${cmd} ${targets.join(' ')}`;
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
  // console.log(print.fileChange('Testing:', targets.join()));
  allTargets = allTargets.concat(targets);
  timeout = timeout || setTimeout(function () {
    const builtCmd = buildCmd(cmd, _.uniq(allTargets));
    // console.log('Running cmd:', builtCmd);
    const stream = spawn(builtCmd, targets[0].cwd)
    stream.on('close', cb);
    stream.on('error', cb);
    timeout    = null;
    allTargets = [];
  }, 200);
};
