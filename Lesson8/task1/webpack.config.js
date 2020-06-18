const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, argv) => {
    const isProduction = argv.mode === 'production'; //among argumentsof config function could be also the mode(production or developing)
    const config = {
        entry: './src/index.js',
        output: {
            filename: 'bundle.js'
        },
        module: {
            rules: [{
                    test: /\.s?css$/i,
                    use: [
                            isProduction ?
                            MiniCssExtractPlugin.loader :
                            'style-loader',
                            'css-loader',
                            'sass-loader'
                        ] //instead of style-loader we put MiniCssExtractPlugin.loader 
                },
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
            new HtmlWebpackPlugin({
                template: './src/index.html' //html file from the signed source will fetch to the dist repo
            }),
        ],
        devServer: {
            port: 9000, //number of port to set project;
            hot: true,
        }
    };

    if (isProduction) {
        config.plugins.push(new MiniCssExtractPlugin({
            filename: '[name].css', //if there are few entries plugin will make even quantity of output files wit the same names
        }));
    }

    return config;
};