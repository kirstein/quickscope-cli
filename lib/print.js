'use strict';

const _ = require('lodash');

const GHETTO_TAB = '  ';

exports.showWelcome = function (files) {
  let txt = [ 'Watching following files: \n' ];
  let map = _.map(files, function (fname) {
    return GHETTO_TAB + fname;
  });
  console.log(txt.concat(map).join('\n') + '\n');
};

exports.fileChange = function (msg, file) {
  return [ '\n\n' + GHETTO_TAB, msg, file, '\n' ].join(' ');
};
