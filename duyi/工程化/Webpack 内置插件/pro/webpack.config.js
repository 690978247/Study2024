const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
 mode: "development",
 devtool: 'source-map',
 output: {
  filename: "[name][fullhash:6].js",
  clean: true
 },
 plugins: [
  /* 内置插件 */
  // 1. 定义全局常量
  new webpack.DefinePlugin({
    PI: `Math.PI`, // const PI = Math.PI consoe.log(PI) => Math.PI
    VERSION: `"1.0.0"`, // VERSION = 1.0.0
    DOMAIN: JSON.stringify('duyi.com') // DOMAIN = "duyi.com"
  }),
  // 2. 为每个chunk生成的文件头部添加一行注释，一般用于添加作者、公司、版权等信息
  new webpack.BannerPlugin({
    banner: `
    chunkhash: [chunkhash]
    fullhash: [fullhash]
    name: [name]
    author: xulk
    corporation: duyi
  `,
    // raw: false,
  }),
  // 3. 自动加载模块，而不必到处 import 或 require
  new webpack.ProvidePlugin({
    $: 'jquery',
    _: 'lodash'
  }),
  /* ------------- */
  new HtmlWebpackPlugin(
    {
      template: './public/index.html'
    }
  )
 ]
}