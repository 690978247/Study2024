// const {Readable, Writable} = require('stream')

const fs = require('fs')
const path = require('path')

const filename = path.resolve(__dirname, './temp/abc.txt')

const ws = fs.createWriteStream(filename, {
  // flags: 'a',
  encoding: 'utf-8',  // 默认utf-8
  // start 开始字节
  // end 结束字节
  highWaterMark: 16 // 每次最多写入的字节数，默认16。 注意： 和 readStream 有区别
})

// ws.on("open", () => {
// })

// ws.on("error", () => {
// })

// ws.on("close", () => {
// })

const flag = ws.write("12") 
// 返回值 true 说明写入通道没有被填满，接下来的数据可以直接写入，无需排队
// 返回值 false 说明写入通道目前已被填满，接下来的数据将进入写入队列 
console.log(flag);

// for (let i = 0; i < 1024 * 1024 * 10; i++) {
//   ws.write("b")
// }


let i = 0;
// 一直写，直到到达上限，或无法再直接写入
function write() {
  let flag = true
  while(i < 1024 * 1024 * 10 && flag) {
    flag = ws.write("b")
    i++
  }
}

write()

// 通道排满之后触发 drain, 未排满则永远不会触发
ws.on('drain', () => {
  write()
  // console.log('可以写入了');
})