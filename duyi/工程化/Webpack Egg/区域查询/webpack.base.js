// 公共配置
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const path =  require('path')

module.exports = {
  entry: {
    detail: './src/detail/index.js',
    list: './src/list/index.js'
  },
  output: {
    filename: "scripts/[name][fullhash:5].js",
    clean: true
  },
  reslove: {
    alias: {
      "@": path.resolve(__dirname, 'src')
    }
  },
  // loaders: [
  //   {
  //     test: /\.(png)|(jpg)|(gif)$/,
  //     use: 
  //   }
  // ],
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/detail.html',
      filename: 'detail.html',
      chunks: ["detail"] 
    }),
    new HtmlWebpackPlugin({
      template: './public/list.html',
      filename: 'list.html',
      chunks: ["list"] 
    }),
    new CopyPlugin({
      patterns: [
        // 复制规则
        {
          from: './public',
          to: './', 
          globOptions: {
            ignore: ["**/detail.html", "**/list.html",], // 排除 index.html
          }
        }
      ]
    })
  ],
  stats: {
    modules: false,
    colors: true
  }
}