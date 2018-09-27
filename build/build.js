const rollup = require('rollup');
const version = process.env.VERSION || require('../package.json').version;

const banner =
  '/*\n' +
  ' * Eagle-Loader v' + version + '\n' +
  ' * Author: Eagle Team\n' +
  ' * (c) 2018-9-19 ~ ' + new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate() + '\n' +
  ' * Released under the MIT License.\n' +
  ' */';

const output = {
  file: 'eagle-loader/index.js',
  format: 'cjs',
  banner
}

const entry  = {
  input: 'index.js'
}

async function build () {
  let bundle = Object.create(null);
  bundle = await rollup.rollup(entry);
  await bundle.write(output);
}

build();
