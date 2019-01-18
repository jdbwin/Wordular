const { resolve } = require('path')
const Dotenv = require('dotenv-webpack')

const ENTRY = './src/index.js'
const MODE = 'development'

// BASE
const webpackConfig = {
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    modules: [
      // necessary for absolute paths from /src
      resolve('./src'),
      resolve('./node_modules')
    ]
  },
  module: {},
  plugins: [
    new Dotenv()
  ]
}
webpackConfig.entry = ENTRY
webpackConfig.mode = MODE

webpackConfig.devServer = {
  contentBase: './dist'
}

webpackConfig.output = {
  path: resolve(__dirname, 'dist'),
  publicPath: '/',
  filename: 'bundle.js'
}

// BABEL
const BABEL_CONFIG = {
  presets: [
    ['@babel/preset-env', {
      targets: {
        node: 'current'
      }
    }],
    '@babel/preset-react'
  ],
  plugins: [
    // necessary for decorator use
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    ['react-css-modules', {
      filetypes: {
        '.scss': {
          syntax: 'postcss-scss'
        }
      }
    }]
  ]
}

// MODULES

webpackConfig.module.rules = [{
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  loader: 'babel-loader',
  options: BABEL_CONFIG
}]

// STYLES

webpackConfig.module.rules.push({
  test: /\.css$/,
  use: [
    'style-loader',
    'css-loader'
  ]
})

// exclude external libraries from css-modules
webpackConfig.module.rules.push({
  test: /\.scss$/,
  exclude: [resolve('./src/styles/index.scss')],
  use: [
    {
      loader: 'style-loader',
      options: {
        sourceMap: true
      }
    },
    {
      loader: 'css-loader',
      options: {
        modules: true,
        importLoaders: 1,
        localIdentName: '[path]___[name]__[local]___[hash:base64:5]'
      }
    },
    {
      loader: 'sass-loader',
      options: {
        sourceMap: true
      }
    }
  ]
})

// necessary for third-party import
webpackConfig.module.rules.push({
  test: /\.scss$/,
  include: [resolve('./src/styles/index.scss')],
  use: [
    'style-loader',
    'css-loader',
    'sass-loader'
  ]
})

module.exports = webpackConfig
