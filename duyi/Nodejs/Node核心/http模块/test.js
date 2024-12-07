// 搭建一个静态服务器读取public文件内容
const http = require('http')
const URL = require('url')
const path = require('path')
const fs = require('fs')

// 判断文件是否存在
async function getStat(filename) {
  try {
    return await fs.promises.stat(filename)
  } catch(err) {
    return null
  }
}

async function getFileInfo(req) {
  const urlObj = URL.parse(req.url)
  let filename = path.resolve(__dirname, 'public', urlObj.pathname.substring(1))

  let stat = await getStat(filename)
  if(!stat) {
    // 文件不存在
    return null
  } else if (stat.isDirectory()) {
    // 判断文件目录
    filename = path.resolve(__dirname, 'public', urlObj.pathname.substring(1), "index.html")
    stat = await getStat(filename)

    if(!stat) {
      // 不存在
      return null
    } else {
      // 存在
      return await fs.promises.readFile(filename)
    }
  } else {
    // 存在
    return await fs.promises.readFile(filename)
  }

}

async function handler(req, res) {
  const info = await getFileInfo(req)

  if(!info) {
    // 资源不存在
    res.statusCode = 404
    res.write('Resource is not exist')
  } else {
    // 渲染
    res.write(info)
  }
  // res.write('9999')
  res.end()
}

const server = http.createServer(handler)

server.listen(6100)

server.on('listening', () => {
  console.log("listening on 6100");
})