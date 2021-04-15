/* eslint-disable semi */
// 导入path模块
const path = require('path');
// 引入vue-loader的插件
const VueLoaderPlugin = require('vue-loader/lib/plugin');
// 引入html-webpack-plugin的插件
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 引入clean-webpack-plugin的插件
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
// 引入copy-webpack-plugin的插件
const CopyWebpackPlugin = require('copy-webpack-plugin');
// 引入webpack
const webpack = require('webpack');
// 引入webpack工具类
const webpackUtils = require('./webpack.utils');
// 打包进度条
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
// 多线程打包
const HappyPack = require('happypack');
const config = webpackUtils.getEnvConfig();

module.exports = {
    // 打包入口
    entry: './src/main.js',
    // 打包出口
    output: {
        path: path.resolve(__dirname, '../dist')
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'initial',
                    priority: 10
                },
                components: {
                    test: /[\\/]components[\\/]/,
                    name: 'components',
                    chunks: 'all'
                }
            }
        }
    },
    // 打包规则
    module: {
        rules: [{
                enforce: 'pre',
                test: /\.(js|vue)$/,
                exclude: /node_modules/,
                loader: 'eslint-loader',
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                // loader: 'babel-loader'
                // happypack/loader多线程打包，原先的'babel-loader'配置到下面插件中
                use: 'happypack/loader',
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
                loader: 'url-loader',
                exclude: [
                    path.resolve(__dirname, '../src/assets/icons/svg'), //排除字体图标文件
                ],
                options: {
                    esModule: false, // 这里设置为false
                    limit: 8192,
                    name: 'fonts/[name].[ext]', //占位符
                },
            },
            {
                test: /\.svg$/,
                loader: 'svg-sprite-loader',
                include: [path.resolve(__dirname, '../src/assets/icons/svg')],//包括字体图标文件
                // options: {
                  //symbolId: 'icon-[name]' //这个没有生效，生效的是默认的name
                // }
            }
        ]
    },
    //插件
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [{
                from: 'src/assets/static',
                to: 'static'
            }]
        }),
        new ProgressBarPlugin(),
        new HappyPack({
            // 3) re-add the loaders you replaced above in #1:
            loaders: [ 'babel-loader' ]
        }),
        // 定义全局数据
        new webpack.DefinePlugin(config)
    ],
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.js',
            '@assets':path.resolve(__dirname,'../src/assets'),   //静态文件目录映射
            '@components':path.resolve(__dirname,'../src/components'),   //组件目录映射
            '@pages':path.resolve(__dirname,'../src/pages'),   //页面目录映射
            '@router':path.resolve(__dirname,'../src/router'),   //路由目录映射
            '@utils':path.resolve(__dirname,'../src/utils'),   //工具目录映射
            '@requests':path.resolve(__dirname,'../src/requests'),   //接口目录映射
        }
    }
}
