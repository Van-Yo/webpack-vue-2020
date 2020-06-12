/* eslint-disable semi */
const baseConfig = require('./webpack.base.config.js');
const merge = require('webpack-merge');
// 为了引入webpack内置的 HMR 插件
const webpack = require('webpack');

const devConfig = {
    // 打包模式（开发）
    mode : 'development',
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        // 指定服务器根目录
        contentBase: './dist',
        // 浏览器自动打开
        open : true,
        hot: true,
    },
    // 打包规则
    module: {
        rules: [
            {
                test: /\.(less|css)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'less-loader'
                ]
            }
        ]
    },
    //插件
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
}

module.exports = merge(baseConfig,devConfig)