const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
    },
    optimization: {
        minimize: false,
    },
    module:{
        rules:[
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Philidor',
            template: './src/index.html',
        }),
        new CopyPlugin({
            patterns: [
              { from: "./src/imagenes", to: "imagenes" },
            ],
          }),
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean:true
    },
};