const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
  // TODO: We need to bundle all the JS in a single js chunk....
  const files = [
    './dist/ips-window/2.js',
    './dist/ips-window/7.js',
    './dist/ips-window/8.js',
    './dist/ips-window/9.js',
    './dist/ips-window/10.js',
    './dist/ips-window/11.js',
    './dist/ips-window/12.js',
    './dist/ips-window/21.js',
    './dist/ips-window/25.js',
    './dist/ips-window/31.js',
    './dist/ips-window/43.js',
    './dist/ips-window/45.js',
    './dist/ips-window/76.js',
    './dist/ips-window/common.js',
    './dist/ips-window/runtime.js',
    './dist/ips-window/polyfills.js',
    './dist/ips-window/scripts.js',
    './dist/ips-window/main.js',
  ]
  await fs.ensureDir('elements')
  await concat(files, 'elements/ips-window.js');
  await fs.copyFile('./dist/ips-window/styles.css', 'elements/styles.css')
})()
