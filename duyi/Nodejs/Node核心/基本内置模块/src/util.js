const util = require('util')

async function delay(duration = 1000) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(duration)
    }, duration)
  })
}

// 异步函数转成回调模式 
const delayCallback = util.callbackify(delay)

delayCallback(500, (err, d) => {
  console.log(d);
})

// delay(500).then(d => {
//   console.log(d);
// })


// 回调模式转换为异步函数

function delayCallback2(duration = 1000, callback) {
  setTimeout(() => {
    callback(null, duration);  // callback 第一个参数是 error, 第二个是 result
  }, duration);
}

const delay2 = util.promisify(delayCallback2);
delay2(500).then(d => console.log(d))


// 深度严格比较
const obj1 = {
  a:1,
  b: {
    c: 3,
    d: {
      e: 5
    }
  }
}

const obj2 = {
  a:1,
  b: {
    c: 3,
    d: {
      e: 5
    }
  }
}

console.log(util.isDeepStrictEqual(obj1, obj2));