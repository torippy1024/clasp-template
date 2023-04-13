const path = require('path');
const GasPlugin = require('gas-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: false,
  context: __dirname,
  entry: path.join(__dirname, 'src', 'index.ts'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.js',
  },
  resolve: {
    extensions: ['.ts'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
      },
    ],
  },
  plugins: [new GasPlugin()],
};
