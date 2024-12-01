// var loaderUtils = require('loader-utils')  // 该库可以用来获取loader传递的options
// 注意: loader-utils 在webpack5 中已被废弃

module.exports = function(sourceCode) {
 console.log('loader4')
 return sourceCode
}