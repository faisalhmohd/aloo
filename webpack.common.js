const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const globImporter = require('node-sass-glob-importer');

const ASSET_PATH = process.env.ASSET_PATH || '/assets';

module.exports = {
  entry: {
    app: './src/index.jsx',
    css: './src/index.scss'
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new webpack.DefinePlugin({
      'process.env.ASSET_PATH': JSON.stringify(ASSET_PATH)
    }),
    new HtmlWebpackPlugin({
      title: 'The Platform',
    }),
    new webpack.HashedModuleIdsPlugin(),
    new MiniCssExtractPlugin({
      filename: "style.[hash].css",
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
      },
      // Add ES2017 Support for JS Files
      {
        test: /\.js/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
	  query: {
	    presets: ['@babel/preset-env']
	  }
        }
      },
      // Add React Support for JSX Files only
      {
        test: /\.jsx/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
	  query: {
	    presets: ['@babel/preset-react', '@babel/preset-env']
	  }
        }
      },
      // Add SCSS Support and Glob Addition
      {
	test: /\.scss$/,
	use: [{
	  loader: "style-loader"
	}, {
	  loader: MiniCssExtractPlugin.loader
	}, {
	  loader: "css-loader"
	}, {
	  loader: "sass-loader",
	  options: {
	    importer: globImporter()
	  }
	}]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  optimization: {
    usedExports: true
  }
};
