const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js'
    },
    module: {
        rules: [{
                test: /.js$/,
                use: ['babel-loader']
            },
            {
                test: /.s?css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'] //loaders acting from right to the left
            }, //that`s why we naming them from right to the left
            {
                test: /\.(png|jpg|gif)$/i,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8192,
                        name: '[name].[ext]',
                        outputPath: 'images',
                    },
                }, ],
            }
        ],
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new CleanWebpackPlugin(), //serves to clean dist folder
        new HtmlWebpackPlugin({
            template: './src/index.html' //html file from the signed source will fetch to the dist repo
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css', //if there are few entries plugin will make even quantity of output files wit the same names
        }),
    ],
}