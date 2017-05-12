// @flow
const {join, dirname, basename} = require('path');

let removeExtension = (filePath /*: string */, ext /*: string */) /*: string */ => {
  return join(dirname(filePath), basename(filePath, ext));
};

module.exports = removeExtension;
