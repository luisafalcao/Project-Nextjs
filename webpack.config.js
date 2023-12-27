const path = require('path');

module.exports = {
  output: {
    filename: 'webpack.bundle.js',
  },
  module: {
    rules: [{ test: /\.txt$/, use: 'raw-loader' }],
    rules: [{ test: /\.html$/, use: 'html-loader' }],
  },
};