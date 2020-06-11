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

module.exports = {
    // 打包入口
    entry: './src/main.js',
    // 打包出口
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../dist')
    },
    // 打包规则
    module: {
        rules: [{
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.(jpg|jpeg|png|svg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8192,
                        name: '[name].[ext]', //占位符
                    },
                }, ],
            },
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
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    },
    //插件
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new CleanWebpackPlugin()
    ],
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.js'
        }
    }
}