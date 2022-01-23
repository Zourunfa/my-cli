#!/usr/bin/env node
const lib = require('my-af-lib');

const argv = require('process').argv;

const initCommad = argv[2];

if (argv.length > 3) {
  const option = argv[3].replace('--', '');
  const param = argv[4];
  if (initCommad) {
    if (lib[initCommad]) {
      lib[initCommad]({ option, param });
    } else {
      console.log('命令错误');
    }
  } else {
    console.log('请添加命令');
  }
}

if (argv.length === 3) {
  const command = argv[2];
  if (command == '-V') {
    console.log('1.0.0');
  }
}
