const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin')

// module.exports = {
//     mode: "development",
//     devtool: "source-map",
//     output: {
//         filename: "scripts/[name].[chunkhash:5].js",
//         publicPath: "/",
//         clean: true
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.(png)|(gif)|(jpg)$/,
//                 use: [{
//                     loader: "file-loader",
//                     options: {
//                         name: "imgs/[name].[hash:5].[ext]",
//                     }
//                 }]
//             }
//         ]
//     },
//     plugins: [
//         new CleanWebpackPlugin(),
//         new HtmlWebpackPlugin({
//             template: "./public/index.html",
//             filename: "html/index.html"
//         })
//     ],
//     devServer: {
//         open: "html/index.html",
//     },
//     stats: {
//         modules: false,
//         colors: true
//     }
// }

module.exports = function(env) {
  console.log('pppp', env)
  const isDev = env.WEBPACK_SERVE
  return {
        mode: "development",
        devtool: "source-map",
        output: {
            filename: "scripts/[name].[chunkhash:5].js",
            // publicPath: "/",
            clean: true
        },
        module: {
            rules: [
                {
                    test: /\.(png)|(gif)|(jpg)$/,
                    use: [{
                        loader: "file-loader",
                        options: {
                            name: "imgs/[name].[hash:5].[ext]",
                        }
                    }]
                }
            ]
        },
        plugins: [
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                template: "./public/index.html",
                filename: "html/index.html"
            })
        ],
        devServer: {
            open: "html/index.html",
        },
        stats: {
            modules: false,
            colors: true
        }
    }
}