// 服务端
const express = require('express')
const http = require('http')
const socketIO = require('socket.io')
const path = require('path')

// express
const app = express()
const server = http.createServer(app)
app.use(express.static(path.resolve(__dirname, "public")))

// websocket
require('./chatServer')(server)


// 监听端口
server.listen(5009, () => {
  console.log("server listening 5009");
})