// const {Readable, Writable} = require('stream')

const fs = require('fs')
const path = require('path')

const filename = path.resolve(__dirname, './abc.txt')
const rs = fs.createReadStream(filename, {
  encoding: 'utf-8',
  // start 开始字节
  // end 结束字节
  highWaterMark: 1, // 默认 64 * 1024
  autoClose: true // 读完后自动关闭 默认 true
})

rs.on("open", () => {
  console.log('文件打开了');
})

rs.on("error", () => {
  console.log('文件出错了！！');
})

rs.on("close", () => {
  // 1.手动关闭 rs.close()  2. 文件读取完毕自动关闭 autoClose 默认值true
  console.log('文件关闭了');
})

// rs.close()

rs.on("data", (chunk) => {
  // 获取流数据, 注册之后才会开始读取
  console.log('读取了一部分数据', chunk);
  rs.pause()

  setTimeout(() => {
    rs.resume()
  },1000)
})

rs.on("end", (chunk) => {
  // 全部数据读取完毕
  console.log('全部数据读取完毕');
})

// rs.pause() 暂停读取，会触发pause事件
// rs.resume() 恢复读取，会触发resumee事件

rs.on("pause", (chunk) => {
  console.log('暂停了');
})

rs.on("resume", (chunk) => {
  console.log('恢复了');
})



