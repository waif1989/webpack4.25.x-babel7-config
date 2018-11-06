const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const baseConfig = require('./webpack.base');
exports = module.exports = merge.smart(baseConfig, {
    mode: 'production',
    entry: {
        'index': path.resolve('index.js')
    },
    output: {
        libraryTarget: 'commonjs-module'
    },
    optimization: {
        minimize: true // true 为开启压缩，为了缩短打包时间，一般在开发环境不开启，
    }
});