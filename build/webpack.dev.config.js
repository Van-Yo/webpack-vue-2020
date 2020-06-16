/* eslint-disable semi */
const baseConfig = require('./webpack.base.config.js');
const merge = require('webpack-merge');
// 为了引入webpack内置的 HMR 插件
const webpack = require('webpack');
// 引入mocker-api
const apiMocker = require('mocker-api');
const path = require('path');

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
if(process.env.npm_lifecycle_event == 'mock'){
    //mock环境，启用mock代理服务,不走代理
    devConfig.devServer.before = (app) => {
        // mock的api
        apiMocker(app, path.resolve(__dirname,'../src/mock/api.js'));
    };
    //非mock匹配项走测试环境，走代理
    // devConfig.devServer.proxy = {
    //     '/api': {
    //         target: 'http://139.224.227.52:8088', // 目标接口的域名
    //         // secure: true,  // https 的时候 使用该参数
    //         changeOrigin: true, // 是否跨域
    //         pathRewrite: {
    //             '^/api': '' // 重写路径
    //         }
    //     }
    // }
};
module.exports = merge(baseConfig,devConfig)