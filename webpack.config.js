const { resolve } = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    mode: "development",
    entry: resolve(__dirname, 'src', 'index.js'),
    output: {
        path: resolve(__dirname, 'dist'),
        filename: "main.[contenthash].js"
    },
    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: [
                    {
                        loader: "img-optimize-loader",
                        options: {
                            compress: {
                                mode: "high",
                                webp: true,
                                gifsicle: true,
                                disableOnDevelopment: false,
                            },
                        },
                    },
                 ],
            },
            {
                test: /\.(mp[3/4])$/,
                loader: "file-loader",
            }  
        ],
    },
    plugins: [
          new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html",
          })
    ]
}