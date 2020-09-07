const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  await buildES2015();
})()

async function buildES2015() {
  const files = [
    './dist/ae-app/runtime-es2015.js',
    './dist/ae-app/main-es2015.js',
    './dist/ae-app/polyfills-es2015.js',
  ];

  await fs.ensureDir('elements/es2015');
  await concat(files, 'elements/es2015/ae-app.js');
  await fs.copyFile('./dist/ae-app/styles.css', 'elements/es2015/styles.css');
}
