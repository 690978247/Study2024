// module.exports = {
//   mode: 'development',
//   devtool: 'source-map',
// }

var path = require("path")

module.exports = function(env) {
  return {
    mode: 'development',
    devtool: 'source-map',
    entry: {
      index: './index.js'
    },
    // 定义文件全局路径， 替换CMD路径
    context: path.resolve(__dirname, 'src'),
    output: {
      // filename: '[name].[fullhash:6].js',
      // 将打包结果暴露出去
      // library: 'abc',
      // libraryTarget: 'var',
    },
    // web|node|... 引入的依赖执行环境 默认值 web
    target: "web",
    module: {
      rules: [],  // loaders
      // 不解析
      // noParse: /a.\js$/ // 不对a模块做任何操作，直接将其源代码放置到模块内容中
      noParse: /jquery/ // 不对jquery 做任何操作，不分析语法树, 一般对大型单模块进行该操作，减少文件解析时间，提高打包速度
    },
    resolve: {
      modules: ["node_modules"], // 模块的查找位置
      extensions: [".js", ".json"], // require('./a') 自动补全后缀名 require('./a.js) | require('./a.json)
      alias: { // 路径别名
        "@": path.resolve(__dirname, 'src')
      }
    },
    // 打包结果中不需要包含的内容， 使用cdn引入第三方文件
    externals: {
      jquery: "$",
      lodash: "_"
    },
    stats: { // 控制控制台中的输出内容
      colors: true,
      modules: true,
    }
  }
}