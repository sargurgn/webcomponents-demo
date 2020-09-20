const path = require("path");

module.exports = {
    entry: {
        web: './src/index.js',
        form: './src/form-index.js',
    },
    output: {
        filename: 'react.[name]component.js',
        library: 'testable[name]component',
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /.js?$/,
                loader: 'babel-loader',
                query: {
                    presets: ['@babel/env', '@babel/react']
                }
            }
        ],
    },
    resolve: {
        extensions: ['.js', '.css']
    }
};
