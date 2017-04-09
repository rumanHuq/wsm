const ExtractTextPlugin = require('extract-text-webpack-plugin');
const { desktop, mobile } = require('./environments');

const Rules = [
  {
    test: /\.js$/,
    exclude: /(node_modules)/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: [
          ['babili', 'env']
        ]
      }
    }
  }
];

let clientRules = Object.assign([], Rules);
let serverRules = Object.assign([], Rules);

clientRules.push(
  {
    test: /\.(sass|scss|css)$/,
    use: ExtractTextPlugin.extract(['css-loader?modules', 'postcss-loader', 'sass-loader']),
    exclude: '/node_modules/'
  },
  {
    test: /\.(png|jpg|jpeg|bmp|svg)$/,
    use: [
      'url-loader?limit=10000&name=images/[name].[ext]',
      'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false'
    ],
    exclude: '/node_modules/'
  },
  { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff' },
  { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff' },
  { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
  { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
  { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' }
);

if (mobile || desktop) {
  clientRules.push(
    {
      enforce: 'pre',
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'eslint-loader',
      options: {
        formatter: require('eslint/lib/formatters/stylish')
      }
    }
  );
}

module.exports = { serverRules, clientRules };
