const path = require("path");
const webpack = require("webpack");

const config = {
    entry: {
        first: './src/first.js',
        second: './src/second.js',
        vendor: ["jquery"]
    },
    output: {
        path: path.resolve(__dirname,'./dist'),
        filename: '[name].js'
    },
    optimization: {
        splitChunks: {
            chunks: 'async',
            minSize: 30000,
            maxSize: 0,
            minChunks: 1,
            maxAsyncRequests: 6,
            maxInitialRequests: 4,
            automaticNameDelimiter: '~',
            cacheGroups: {
                vendors: {
                    name: `chunk-vendors`,
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                    chunks: 'initial'
                },
                common: {
                    name: `chunk-common`,
                    minChunks: 2,
                    priority: -20,
                    chunks: 'initial',
                    reuseExistingChunk: true
                }
            }
        }
    }
}

module.exports = config;