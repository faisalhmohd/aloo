const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'The Platform',
    })
  ],
  module: {
    rules: [
      // Adds 'import .png/svg/jpg/gif' support
      {
	test: /\.(png|svg|jpg|gif)$/,
	use: [
	  'file-loader'
	]
      },
      // Adds 'import fontfile' support 
      {
	test: /\.(woff|woff2|eot|ttf|otf)$/,
	use: [
	  'file-loader'
	]
      }
    ]
  }
};
