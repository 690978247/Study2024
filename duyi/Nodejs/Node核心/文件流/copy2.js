// const {Readable, Writable} = require('stream')

const fs = require('fs')
const path = require('path')

/* 将 abc1 内容复制到 abc2 */

/* 方式2 */
async function method2() {
  const from = path.resolve(__dirname, './temp/abc.txt')
  const to = path.resolve(__dirname, './temp/abc2.txt')
  console.time("方式2");

  const rs = fs.createReadStream(from)
  const ws = fs.createWriteStream(to)
  
  // 将可读流连接到可写流
  // 返回参数的值
  // 该方法可解决背压问题
  rs.pipe(ws)

  rs.on("close", () => {
    console.timeEnd("方式2");
  })
}

method2()

