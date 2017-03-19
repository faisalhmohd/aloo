// Node Requirements
import express from 'express'
import path from 'path'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import sassMiddleware from 'node-sass-middleware'

import { handleRender } from './server'

// Webpack Requirements
import webpack from 'webpack'
import webpackConfig from './webpack.config.dev'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'

// Initializing the App
const app = express();
const port = 3000;

app.use(morgan(':method :url :status :response-time ms - :res[content-length]'))
app.use(bodyParser.json({limit: '20mb'}));
app.use(bodyParser.urlencoded({limit: '20mb', extended: false}));
app.use(sassMiddleware({
    src: path.join(__dirname, 'scss'),
    dest: path.join(__dirname, 'public'),
    debug: true,
    outputStyle: 'compressed',
    prefix:  '/public'  // Where prefix is at <link rel="stylesheets" href="prefix/style.css"/>
}));

app.use('/public', express.static('public'));

app.get('*', handleRender);

app.use('/api/v1', function(req, res) {
    res.send('You are at the API route')
})

app.set('view engine', 'pug')

app.listen(port, function() {
    console.log(`------------------------------------------`);
    console.log(`------------------------------------------`);
    console.log(`Masami Client Server running at ${port}`);
    console.log(`------------------------------------------`);
    console.log(`------------------------------------------`);

    if (process.env.NODE_ENV === 'development_client') {
        const compiler = webpack(webpackConfig);
        const wpDevMiddleware = webpackDevMiddleware(compiler, {noInfo: true, publicPath: webpackConfig.output.path})
        app.use(wpDevMiddleware);
        app.use(webpackHotMiddleware(compiler));
        console.log(`\n\n`);
        console.log(`------------------------------------------`);
        console.log(`------------------------------------------`);
        console.log(`Preparing Webpack`);
        console.log(`------------------------------------------`);
        console.log(`------------------------------------------`);
    }
})
