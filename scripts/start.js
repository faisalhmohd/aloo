const express = require('express');
const webpack = require('webpack');
const webpackConfig = require('../config/webpack.config.js');
const compiler = webpack(webpackConfig);
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const app = express();

app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath
}));

app.use(webpackHotMiddleware(compiler));

app.get( "/*", ( req, res ) => {
  res.send('Hi!')
});

app.listen( 2048 );
