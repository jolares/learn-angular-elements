const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
  // TODO: We need to bundle all the JS in a single js chunk....
  const files = [
    // // './dist/ae-app/common.js',
    './dist/ae-app/runtime-es2015.js',
    './dist/ae-app/polyfills-es2015.js',
    './dist/ae-app/scripts.js',
    './dist/ae-app/main-es2015.js',
    './dist/ae-app/styles.css'
  ]
  await fs.ensureDir('elements')
  await concat(files, 'elements/ae-widget1.js');
})()
