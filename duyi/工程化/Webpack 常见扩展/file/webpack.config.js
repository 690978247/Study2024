const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");


module.exports = {
  mode: "development",
  devtool: 'source-map',
  entry: {
    main: './src/index.js',
    // a: './src/a.js'
  },
  output: {
    filename: "scripts/[name].[fullhash:5].js",
    clean: true, // 清除dist文件
  },
  module: {
    rules: [
      {
        test: /\.(png)|(jpg)|(gif)$/,
        use: [
          // { // 生成依赖的文件到输出目录，然后将模块文件设置为: 导出一个路径
          //   loader: 'file-loader',
          //   options: {
          //     name:"imgs/[name][hash:6].[ext]"
          //   }
          // }
          { // 将依赖的文件转换为：导出一个base64格式的字符串
            loader: 'url-loader',
            options: {
              // limit: false, // 不限制文件大小
              limit: 100 * 1024, // 只要文件不超过100 * 1024 字节，则使用base64编码，否则，交给file-loader处理
              name: 'imgs/[name][hash:6].[ext]' // file-loader 名称
            }
          }
        ]
      }
    ]
  },
  plugins: [
    // 生成html模板
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      // filename: 'home.html',
      chunks: ["main"]
    }),
    // 生成多个html页面
    // new HtmlWebpackPlugin({
    //   template: "./public/index.html",
    //   filename: 'a.html',
    //   chunks: ["a"]
    // })
    // new CopyPlugin({
    //   patterns: [
    //     // 赋值规则， 已存在的文件不会复制
    //     { 
    //       from: "./public",
    //       to: "./",
    //       globOptions: {
    //         ignore: ["**/index.html"], // 排除 index.html
    //       }
    //      },
    //   ],
    // }),
  ],
  devServer: {
    port: 8086,
    open: true,
    // proxy: { // 代理规则
    //   "/api": {
    //     target: 'http://open.duyiedu.com/',
    //     // changeOrigin: true, // 更改请求头中的host和origin  Host:localhost:8080 => Host:http://open.duyiedu.com:80
    //     // stats: {
    //     //   modules: false
    //     // }
    //   },
    //   // "/abc": {

    //   // }
    // }

    /* webpack4 */
    //  proxy: {
    //   '/api': {
    //     target: 'http://open.duyiedu.com',
    //     changeOrigin: true, // 更改请求头中的 host 和 origin
    //   },
    // }

    /* webpack5 */
    proxy: [
      {
        context: ['/api'], // 指定哪些路径需要代理
        target: 'http://open.duyiedu.com',
        changeOrigin: true, // 更改请求头中的 host 和 origin
        // stats: {
        //   modules: false
        // }
      },
    ]
  }
}