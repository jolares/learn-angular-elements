const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
  // TODO: We need to bundle all the JS in a single js chunk....
  const files = [
    // './dist/ae-app/common.js',
    './dist/ae-app/runtime-es5.js',
    './dist/ae-app/polyfills-es5.js',
    './dist/ae-app/scripts.js',
    './dist/ae-app/main-es5.js',
  ]
  await fs.ensureDir('elements')
  await concat(files, 'elements/ae-widget1.js');
})()
