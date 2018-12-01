const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [{
      test: /\.scss$/,
      use: [
	MiniCssExtractPlugin.loader,
	"css-loader",
	"sass-loader"
      ]
    }]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[hash].css",
      chunkFilename: "[id].css"
    })
  ],
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
	vendor: {
	  test: /[\\/]node_modules[\\/]/,
	  name: 'vendors',
	  chunks: 'all'
	}
      }
    }
  }
});
