const path = require('path'); //require builtin library of node.js 'path'

module.exports = {
    entry: {
        profile: './src/profile/index.js',
        dashboard: './src/dashboard/index.js',
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'build') // signing the way to place our files
    },
    watch: true
};