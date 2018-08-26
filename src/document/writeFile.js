const fs = require('fs');
const path = require('path');

const template = require('./template');

fs.writeFileSync(path.join(__dirname, '../../public/index.html'), template({}));
