/* eslint-disable semi */
const baseConfig = require('./webpack.base.config.js');
// 引入mini-css-extract-plugin的插件
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// 引入optimize-css-assets-webpack-plugin的插件
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// 引入terser-webpack-plugin的插件
const TerserJSPlugin = require('terser-webpack-plugin');
const merge = require('webpack-merge');
const buildConfig = {
    // 打包模式（生产）
    mode : 'production',
    // 打包规则
    module: {
        rules: [
            {
                test: /\.(less|css)$/,
                use: [
                    {
                        loader:MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../'
                        }
                    },
                    'css-loader',
                    'postcss-loader',
                    'less-loader'
                ]
            }
        ]
    },
    // 插件
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/style.[contenthash].css',
            chunkFilename: 'css/[name].[contenthash].css',
        })
    ],
    optimization: {
        minimizer: [
            new OptimizeCSSAssetsPlugin({}),
            new TerserJSPlugin(),
        ],  
    },
}
module.exports = merge(baseConfig,buildConfig)