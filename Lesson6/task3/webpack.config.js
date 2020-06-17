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
                use: ['style-loader', 'css-loader', 'sass-loader'] //loaders acting from right to the left
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
    }
}