import path from 'path'
import WriteFilePlugin from 'write-file-webpack-plugin'

module.exports = {
    entry: "./client/index",
    output: {
        path: path.join(__dirname, "public"),
        filename: "bundle.js",
        publicPath: '/public/'
    },
    module: {
        rules: [{
            loader: "babel-loader",
            options: {
                presets: ['react', 'es2015', 'stage-2']
            },
        }]
    },

    plugins: [
        new WriteFilePlugin()
    ],

    resolve: {
        extensions: [".js", ".jsx"],
    },

    devServer: {
        contentBase: path.join(__dirname, 'client'),
        compress: true,
        historyApiFallback: true,
    },
}
