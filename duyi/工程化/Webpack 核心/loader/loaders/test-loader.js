// var loaderUtils = require('loader-utils')  // 该库可以用来获取loader传递的options
// 注意: loader-utils 在webpack5 中已被废弃

module.exports = function(sourceCode) {
  // sourceCode: 变量 a = 1
  console.log('test-loader 运行了')
  // var options = loaderUtils.getOptions(this)
  var options = this.getOptions()
  console.log(options)

  var reg = new RegExp(options.changeVar, "g")

  return sourceCode.replace(reg, 'var')
}