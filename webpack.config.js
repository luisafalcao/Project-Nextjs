const path = require('path');

module.exports = {
  target: 'web',
  output: {
    filename: 'webpack.bundle.js',
  },
  module: {
    rules: [
      { test: /\.txt$/, use: 'raw-loader' },
      { test: /\.html$/, use: 'html-loader' }
    ]
  },
};