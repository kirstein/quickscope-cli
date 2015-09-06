#!/usr/bin/env node
'use strict';

const Quickscope = require('quickscope');
const findRoot   = require('find-project-root');
const argv       = require('minimist')(process.argv.slice(2));
const path       = require('path');

const getConfig = require('../lib/get-config');
const print     = require('../lib/print');
const spinner   = require('../lib/spinner');
const runner    = require('../lib/runner');

const root = findRoot(process.cwd(), {
  markers: findRoot.MARKERS.concat('package.json')
});

function fetchConfig() {
  let cfgFile = path.join(root, argv.c || 'package.json');
  return getConfig(cfgFile, require(cfgFile));
}

let cfg        = fetchConfig();
let isReady    = false;
let quickscope = new Quickscope(cfg.files, { cwd: root });

quickscope.on('ready', function (files) {
  isReady = true;
  print.showWelcome(files);
  spinner.start();
});

quickscope.on('add', function (file) {
  if (!isReady) { return; }
  console.log(print.fileChange('Added new test:', file));
});

quickscope.on('unlink', function (file) {
  console.log(print.fileChange('Unlinked file:', file));
});

quickscope.on('change', function (deps) {
  spinner.stop();
  runner(cfg.cmd, deps, function () {
    spinner.start();
  });
});
