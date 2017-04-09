const { desktop, desktopProd,mobile, mobileProd } = require('./environments');
const webpack = require('webpack');
const BabiliPlugin = require('babili-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
const SassLintPlugin = require('sasslint-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

let plugins = [
  new webpack.DefinePlugin({
    desktop: JSON.stringify(desktop),
    desktopProd: JSON.stringify(desktopProd),
    mobile: JSON.stringify(mobile),
    mobileProd: JSON.stringify(mobileProd)
  }),
  new BabiliPlugin({
    deadcode: true,
    evaluate: true,
    infinity: true,
    mangle: true,
    numericLiterals: true
  })
];


let clientPlugins = Object.assign([], plugins);
let serverPlugins = Object.assign([], plugins);

/*serverPlugins.push(
    
)*/

clientPlugins.push(
    
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [
          /*require('postcss-cssnext'),*/
          require('cssnano')
        ]
      }
    }),
    new ExtractTextWebpackPlugin({
      filename: 'style.css',
      allChunks: true
    })
    
);

if (mobile || desktop) {
  clientPlugins.push(
    new SassLintPlugin({
      context: './src/css/'
    })
  );
}

if (mobile || mobileProd) {
  clientPlugins.push(new htmlWebpackPlugin({
    title: 'Awesome app',
    template: 'src/index-mobile.html',
      /*minify: {
        collapseWhitespace: true
      },*/
    hash: true
  }));
}

if (desktop || desktopProd) {
  clientPlugins.push(new htmlWebpackPlugin({
    title: 'Awesome app',
    template: 'src/index.html',
      /*minify: {
        collapseWhitespace: true
      },*/
    hash: true
  }));
}

module.exports = { serverPlugins, clientPlugins };