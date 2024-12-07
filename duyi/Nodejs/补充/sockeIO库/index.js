// 服务端

const express = require('express')
const socketIO = require('socket.io')
const http = require('http')
const path = require('path')

// express
const app = express()
const server = http.createServer(app)
app.use(express.static(path.resolve(__dirname, "public")))

// websocket
const io = socketIO(server)

io.on("connection", socket => {
  // 当有一个新的客户端连接到服务器成功之后，触发的事件
  console.log('新的客户端连接进来了');

  socket.on("msg", chunk => { // 监听客户端的msg消息
    console.log(chunk.toString('utf-8'));
  })

  const timer = setInterval(function() {
    // 每隔2s钟发送一个消息给客户端
    socket.emit('test', "test msg from server")
  }, 2000)

  socket.on('disconnect', () => {
    console.log("closed");
    clearInterval(timer)
  })

})

// 监听端口
server.listen(5008, () => {
  console.log("server listening 5008");
})