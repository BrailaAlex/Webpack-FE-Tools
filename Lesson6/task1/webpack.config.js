module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js'
    },
    module: {
        rules: [{
                test: /.css$/,
                use: ['style-loader', 'css-loader'] //loaders acting from right to the left
            }, //that`s why we naming them from right to the left
            {
                test: /.(jpg|png)$/,
                use: ['url-loader']
            }
        ],
    }
}