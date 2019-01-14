const webpack = require('webpack')

const { resolve } = require('path')

const Dotenv = require('dotenv-webpack')

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          plugins: ['react-css-modules']
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader?importLoader=1&modules&localIdentName=[path]___[name]__[local]___[hash:base64:5]']
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    modules: [
      resolve('./src'),
      resolve('./node_modules')
    ]
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist',
    historyApiFallback: true
  },
  plugins: [
    new Dotenv()
  ]
};
