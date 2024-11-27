// 工具文件
console.log('Math')
function isOdd(n) {
  return n % 2 !== 0
}

function sum(a, b) {
  return a + b
}

module.exports = {
  isOdd,
  sum
}