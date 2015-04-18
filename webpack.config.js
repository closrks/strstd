var path = require('path'),
    webpack = require('webpack');

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/dev-server',
        './src/client/entry.jsx'
    ],
    output: {
        publicPath: 'http://localhost:8080/',
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                loaders: ['react-hot', 'babel'],
                exclude: [path.resolve(__dirname, 'node_modules')]
            },
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: [path.resolve(__dirname, 'node_modules')]
            },
            {
                test: /\.css$/,
                loader: "css-loader"
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};