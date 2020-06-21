/* eslint-env node */

process.env.BROWSERSLIST_CONFIG = "./.browserslistrc";

const path = require('path');
const moduleRules = require('./webpack.config.rules');
const plugins = require('./webpack.config_plugins');
const config = require('./buildConfig');

const staticVersion = process.env.npm_config_buildVersion || config.version,
    entryName = "main_" + staticVersion; // NO I18N

const {hash} = config;

module.exports =
    {
        entry: {
            root: ['./src/js/index.js'] // No I18N
        },
        module: {
            rules: moduleRules
        },
        optimization: {
            runtimeChunk: {
                name: (entrypoint) => (entrypoint.name)
            },
            splitChunks: {
                maxInitialRequests: Infinity,
                minSize: 0,
                cacheGroups: {
                    commons: {
                        test: /[\\/]node_modules[\\/]/,
                        name: 'vendors',
                        chunks: 'initial'
                    },
                    default: {
                        chunks: "all",
                        minChunks: 2,
                        priority: -20,
                        reuseExistingChunk: true
                    }
                }
            }
        },
        plugins,
        resolve: {
            extensions: [".js", ".css", ".scss", ".png", ".jpg", ".woff", ".json", ".jsx"], // No I18N
            modules: [path.resolve(__dirname, 'node_modules')]
        },
        output: {
            filename: (module) => {
                let file = "";
                if (module.chunk.name === "root") {
                    file = `${config.jsPath + entryName}.js`;
                } else {
                    file = config.jsPath + `[name].js`;
                }
                return file;
            }, // hash for dev env
            path: path.resolve(__dirname, './dist/'),
            chunkFilename: `${config.jsPath}[name].[${hash}].js`
        }
    };