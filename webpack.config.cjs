const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.ts',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
    fallback: {
      "stream": require.resolve('stream-browserify'),
      "crypto": require.resolve("crypto-browserify"),
      "vm": false,
      "buffer": false,
    }
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'module'
  },
  experiments: {
    outputModule: true
  },
  plugins: [
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
    }),
    new webpack.NormalModuleReplacementPlugin(
      /node:crypto/,
      (resource) => {
        resource.request = resource.request.replace(/^node:/, '');
      }
    ),
  ]
};

