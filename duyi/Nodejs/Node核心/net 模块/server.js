const net = require('net')

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

  socket.on("data", chunk => {
    console.log(chunk.toString('utf-8'));
    // Content-Type: text/plain
    socket.write(`HTTP/1.1 200 OK

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <h1>你好666666</h1>
</body>
</html>`);

  socket.end()
  })


  socket.on("end", () => {
    console.log('连接关闭了');
  })
})