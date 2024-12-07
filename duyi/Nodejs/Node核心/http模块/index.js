// 静态资源服务器
// http://localhost:9527/index.html => public/index.html  文件内容
// http://localhost:9527/index.css  => public/css/index.css 文件内容


const http = require('http')
const path = require('path')
const URL = require('url')
const fs = require('fs')

// 是否存在
async function getStat(filename) {

  try {
    return await fs.promises.stat(filename)
  } catch(err) {
    return null
  }
}

/**
 * 得到要处理的文件内容
 */
async function getFileInfo(url) {
  const urlObj = URL.parse(url)

  // 要处理的文件路径
  let filename = path.resolve(__dirname, "public", urlObj.pathname.substring(1))
  // console.log(filename);
  let stat = await getStat(filename)
  //  console.log(stat);
  if(!stat) {
    // console.log('文件不存在');
    return null
  } else if(stat.isDirectory()) {
    filename = path.resolve(__dirname, "public", urlObj.pathname.substring(1), "index.html")

    stat = await getStat(filename)

    if(!stat) {
      // console.log('文件不存在');
      return null;
    } else {
      // '正常文件'
      // console.log(filename);

      return await fs.promises.readFile(filename)

    }
  } else {
    // console.log('正常文件');
    return await fs.promises.readFile(filename)
  }

}

async function handler(req, res) {
  const info = await getFileInfo(req.url)
  // res.write("Hello!!!")
  // res.end()

  if(info) {
    res.write(info)
  } else {
    res.statusCode = 404
    res.write('Resource is not exist')
  }
  res.end()
}

const server =  http.createServer(handler)

server.listen(9530)

server.on("listening", () => {
  console.log('server listenint 9530')
})