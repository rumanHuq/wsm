const path = require('path');
const projectRoot = __dirname.replace(path.basename(__dirname), '');
const {clientPlugins} = require('./plugins');
const { clientRules } = require('./modules');

const cordova = {
  entry: {
    main: path.resolve(projectRoot, 'src', 'app-front.js'),
    platformOverrides: path.resolve(projectRoot, 'src', 'platformOverrides.js'),
  },
  target: 'web',
  output: {
    path: path.resolve(projectRoot, 'dist', 'Mobile', 'www'),
    filename: '[name].js'
  },
  module: {
    rules: clientRules
  },
  plugins: clientPlugins
};

module.exports = cordova;