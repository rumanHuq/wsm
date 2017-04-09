/*
The current directory is nested one level from webpack.config.js
projectRoot => will take source from project root
path.resolve(__dirname) == /projectRoot/webpack-partials
path.resolve(__dirname.replace(path.basename(__dirname)) == /projectRoot/
*/
const path = require('path');
const projectRoot = __dirname.replace(path.basename(__dirname), '');
const {clientPlugins,serverPlugins} = require('./plugins');
const {clientRules,serverRules} = require('./modules');
let electron =
  {
    main: {
      devtool: 'source-map',
      stats: 'errors-only',
      node: {
        __dirname: false,
        __filename: false
      },
      entry: [
        path.resolve(projectRoot, 'src', 'app-shell.js')
      ],
      target: 'electron-main',
      output: {
        path: path.resolve(projectRoot, 'dist', 'Desktop'),
        publicPath: '/',
        filename: 'main.js'
      },
      module: {
        rules: serverRules
      },
      plugins: serverPlugins
    },
    renderer: {
      devtool: 'source-map',
      stats: 'errors-only',
      node: {
        __dirname: false,
        __filename: false
      },
      entry: path.resolve(projectRoot, 'src', 'app-front.js'),
      output: {
        path: path.resolve(projectRoot, 'dist', 'Desktop'),
        filename: 'renderer.js'
      },
      module: {
        rules: clientRules
      },
      target: 'electron-renderer',
      plugins: clientPlugins,
      devServer: {
        contentBase: path.resolve(projectRoot, 'dist', 'Desktop'),
        compress: true,
        hot: true,
        port: 9000
      }
    }
  };

/*"desktop:dev": "npm-run-all -p electron:watch electron:engine ",*/
module.exports = electron;