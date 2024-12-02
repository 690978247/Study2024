const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");


module.exports = {
  mode: "development",
  devtool: 'source-map',
  entry: {
    home: './src/index.js',
    a: './src/a.js'
  },
  output: {
    filename: "[name].[fullhash:5].js",
    clean: true, // 清除dist文件
  },
  plugins: [
    // 生成html模板
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      // filename: 'home.html',
      chunks: ["home"]
    }),
    // 生成多个html页面
    // new HtmlWebpackPlugin({
    //   template: "./public/index.html",
    //   filename: 'a.html',
    //   chunks: ["a"]
    // })
    new CopyPlugin({
      patterns: [
        // 赋值规则， 已存在的文件不会复制
        { 
          from: "./public",
          to: "./",
          globOptions: {
            ignore: ["**/index.html"], // 排除 index.html
          }
         },
      ],
    }),
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