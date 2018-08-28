const fs = require('fs');
const path = require('path');

const template = require('./template');

try {
  fs.mkdirSync(path.join(__dirname,'../../dist/'));
  fs.mkdirSync(path.join(__dirname,'../../dist/www'));
  fs.mkdirSync(path.join(__dirname,'../../dist/www/assets'));
} catch (e) {
  // dir existed
}

fs.writeFileSync(path.join(__dirname, '../../dist/www/index.html'), template({}));
