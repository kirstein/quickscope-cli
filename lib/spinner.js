'use strict';

const Spinner = require('cli-spinner').Spinner;

const spinner = new Spinner('%s waiting for changes...');
spinner.setSpinnerString('|/-\\');

module.exports = spinner;
