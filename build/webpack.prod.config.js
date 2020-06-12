/* eslint-disable semi */
const baseConfig = require('./webpack.base.config.js');
const merge = require('webpack-merge');
const buildConfig = {
    // 打包模式（生产）
    mode : 'production'
}
module.exports = merge(baseConfig,buildConfig)