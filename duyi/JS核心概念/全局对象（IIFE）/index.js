var abc = (function () {
  var a = 1  //不希望污染全局
  var a = 2 //不希望污染全局

  // 暴露 方法出去
  function c() {
    console.log(a + b)
  }

  var d = 123
  return {
    c,
    d
  }
})()

// var dd = (() => {
//   var a = 1  //不希望污染全局
//   var a = 2 //不希望污染全局

//   // 暴露 方法出去
//   function c() {
//     console.log(a + b)
//   }

//   var d = 123
//   return {
//     c,
//     d
//   }
// })()

console.log(abc)