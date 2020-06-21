/* eslint-env node */
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const config = require('./buildConfig');

const isDevEnv = process.env.NODE_ENV === 'development';

module.exports = [
    {
        test: /\.(js|jsx)$/,
        include: [path.resolve(__dirname, './src/js'), path.resolve(__dirname, "./node_modules")], // No I18N
        use: {
            loader: "babel-loader", // No I18N
            options: {
                presets: [
                    "@babel/preset-env", // NO I18N
                    "@babel/preset-react"// NO I18N
                ],
                plugins: [
                    "@babel/plugin-syntax-dynamic-import",
                    "@babel/plugin-proposal-object-rest-spread", // NO I18N
                    "@babel/plugin-proposal-class-properties", // NO I18N
                ]
            }
        }
    },
    {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        use: [
            {
                loader: 'file-loader',
                options: {
                    name: isDevEnv ? '[name].[ext]' : '[name].[hash].[ext]',
                    outputPath: config.imagePath,
                    useRelativePath: true
                }
            }
        ]
    },
    {
        test: /\.(woff|woff2|ttf|eot|ico)$/,
        use: [
            {
                loader: 'file-loader',
                options: {
                    name: isDevEnv ? '[name].[ext]' : '[name].[hash].[ext]',
                    outputPath: config.fontPath,
                    useRelativePath: false
                }
            }
        ]
    },
    {
        test: /\.(scss|css)$/,
        use: [
            {
                loader: MiniCssExtractPlugin.loader,
                options: {
                    publicPath: '../..'
                }
            },
            {
                loader: "css-loader"
            },
            {
                loader: "sass-loader"
            }
        ]
    }
];