/* eslint-disable semi */
const baseConfig = require('./webpack.base.config.js');
const merge = require('webpack-merge');
// 为了引入webpack内置的 HMR 插件
const webpack = require('webpack');

const devConfig = {
    // 打包模式（开发）
    mode : 'development',
    output: {
        filename: 'js/[name].bundle.js'
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        // 指定服务器根目录
        contentBase: './dist',
        // 浏览器自动打开
        open : true,
        hot: true,
        historyApiFallback: true
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
            },
            {
                test: /\.(png|jpg|jpeg|gif|ico)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        esModule: false, // 这里设置为false
                        limit: 4096,
                        name: 'images/[name].[ext]', //占位符
                    },
                }, ],
            }
        ]
    },
    //插件
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        // 定义全局数据
        new webpack.DefinePlugin({
            IS_ENCRYPT : 'false'
        })
    ]
}

module.exports = merge(baseConfig,devConfig)