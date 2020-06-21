/* eslint-env node */
const path = require('path');

process.env.iswatchmode = true;
process.env.BROWSERSLIST_ENV = "development";

const merge = require('webpack-merge');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin"); // No I18n
const common = require('./webpack.config_common.js');
const buildConfig = require('./buildConfig'); // No I18N

const staticVersion = process.env.npm_config_buildVersion || buildConfig.version,
    entryName = "main_" + staticVersion; // NO I18N

let config = [];

let prodConfig = {
    mode: "development",
    devtool: "source-map", // NO I18N
    plugins: [
        new webpack.HashedModuleIdsPlugin(),
        new CopyWebpackPlugin([
            {
                from: './src/images', // No I18N
                to: buildConfig.imagePath
            }
        ]),
        new MiniCssExtractPlugin({
            filename: `${buildConfig.cssPath}[name].css`,
            chunkFilename: `${buildConfig.cssPath}[name].css`
        })
    ],
    output: {
        filename: (module) => {
            let file = "";
            if (module.chunk.name === "root") {
                file = `${buildConfig.jsPath + entryName}.js`;
            } else {
                file = buildConfig.jsPath + '[name].js';
            }
            return file;
        },
        chunkFilename: buildConfig.jsPath + '[name].js',
        path: path.resolve(__dirname, './dist/')
    }
};

config.push(merge(common, prodConfig));

module.exports = config;