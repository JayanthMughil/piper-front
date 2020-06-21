/* eslint-env node */
var path = require("path");	// NO I18N
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // No I18N
const webpack = require('webpack'); // No I18N
const ManifestPlugin = require('webpack-manifest-plugin');
const WebpackShellPlugin = require('webpack-shell-plugin');
const config = require('./buildConfig'); // No I18N

const staticVersion = process.env.npm_config_buildVersion || config.version;


module.exports = [
    new CleanWebpackPlugin(),

    new WebpackShellPlugin(
        {
            onBuildStart: ['echo "Webpack Start"'], // No I18N
            onBuildEnd: ['echo "Webpack End"']
        }
    ),

    new ManifestPlugin({
        fileName: path.join(config.outputJsonDir, `assets__manifest_${staticVersion}.json`) // NO I18N
    }),

    new webpack.ProvidePlugin({
        $: 'jquery', // No I18N
        jQuery: 'jquery' // No I18N
    }),

    new CopyWebpackPlugin([
        {
            from: './src/images',
            to: config.imagePath
        }
    ])
];