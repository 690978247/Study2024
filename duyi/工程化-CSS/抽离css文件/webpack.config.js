const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
    mode: "development",
    entry: {
      main: './src/index.js',
      other: './src/other.js',
    },
    output: {
      publicPath: "/",
      clean: true,
      filename: "script/[name][fullhash:6].js"
    },
    module: {
        rules: [
            {
              // MiniCssExtractPlugin.loader 记录css-loader转化后的js文件
                test: /\.css$/, use: [MiniCssExtractPlugin.loader, /* "style-loader" ,*/  {
                  loader: 'css-loader',
                  options: {
                    // modules: {
                    //   // 开启模块化后，生成的类名会是一个哈希值，避免冲突
                    //   localIdentName: '[local]__[hash:base64:5]', // 自定义类名格式
                    // }
                    modules: true,
                  }
                }]
            },
            {
                test: /\.(jpg)|(png)|(gif)$/, use: {
                    loader: "file-loader",
                    options: {
                      name: "img/[hash:5].[ext]",
                    }
                }
            }
        ]
    },
    devServer: {
        open: true
    },
    plugins: [
      new HtmlWebpackPlugin({
          template: "./public/index.html",
          // chunks: ["main"]
      }),
      // 生成css文件
      new MiniCssExtractPlugin({
        filename: 'css/[name][fullhash:6].css'
      })
    ]
}
