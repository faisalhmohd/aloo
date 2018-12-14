import React from 'react';
import express from "express";
import path from "path";
import { renderToString } from "react-dom/server";
import { StaticRouter } from 'react-router-dom';
import Routes from './src/routes';
import fs from 'fs';

const app = express();

app.use( express.static( path.resolve( __dirname, "../dist" ) ) );
app.set('view engine', 'pug')

app.get( "/*", ( req, res ) => {
  const context = {};
  const jsx = (
    <StaticRouter context={ context } location={ req.url }>
      <Routes />
    </StaticRouter>
  );

  const reactDom = renderToString( jsx );

  res.render('index', { title: 'Testing', content: reactDom })
});

app.listen( 2048 );
