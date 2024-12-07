const net = require('net')
const path = require('path')
const fs = require('fs')

const server = net.createServer()

server.listen(9527) // 服务器监听端口

// 服务器监听顿口事件
server.on("listening", () => {
  console.log("server listening 9527");
})


// 客户端建立连接，在浏览器输入localhost:9527 进行测试连接
// 第一次会有一个测试连接，会输出两次，后面之后输出一次
// 当某个连接到来是，触发该事件
server.on("connection", (socket) => {
  console.log("有客户端连接到服务器")

  socket.on("data", async (chunk) => {
    console.log(chunk.toString('utf-8'));

    const filename = path.resolve(__dirname, './hsq.jpg')
    const BodyBuffer =  await fs.promises.readFile(filename)
    const headeBuffer = Buffer.from(`HTTP/1.1 200 OK
Content-Type: image.jpg

`, "utf-8")

     const result = Buffer.concat([headeBuffer, BodyBuffer])

    socket.write(result);

  socket.end()
  })


  socket.on("end", () => {
    console.log('连接关闭了');
  })
})