const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: './scripts/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
