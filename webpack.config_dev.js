/* eslint-env node */
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const common = require('./webpack.config_common.js');
const buildConfig = require('buildConfig');

let config = [];
let devSpecificConfig = {
    devtool: 'source-map', // NO I18N
    mode: "development",

    plugins: [
        new MiniCssExtractPlugin({
            filename: buildConfig.cssPath + "[name].css",
            chunkFilename: buildConfig.cssPath + "[id].css"
        })
    ]
};

config.push(merge(common, devSpecificConfig));

module.exports = config;