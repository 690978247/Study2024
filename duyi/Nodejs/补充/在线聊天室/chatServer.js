const socketIO = require('socket.io')

let users = [];

module.exports = function(server) {
  const io = socketIO(server)

  io.on("connection", socket => {
    let curUser = '' // 当前用户名
    // 监听客户端消息
    socket.on("login", data => {
      // 回应消息
      if(data === '所有人' || (users.filter(f => f.username === data)).length > 0) {
        // 昵称不可用
        socket.emit('login', false)
      } else {
        // 昵称可用
        users.push(
          {
            username: data,
            socket
          }
        )
        curUser = data
        socket.emit('login', true)
        // 新用户进入 - 广播
        socket.broadcast.emit('userin', data)
      }
    })

    // 接收用户消息
    socket.on('users', () => {
      console.log(users);
      const arr = users.map(u => u.username)
      socket.emit('users', arr)

    })

    // 用户离开 - 广播
    socket.on('disconnect', () => {
      socket.broadcast.emit('userout', curUser)
      users = users.filter(u => u.username !== curUser)
    })

    // 发送消息
    socket.on('msg', data => {
      console.log(data);
      if(data.to) {
        // 发送给指定用户
        const us = users.filter(u => u.username === data.to)
        const u = us[0]
        u.socket.emit('new msg', {
          from: curUser,
          content: data.content,
          to: data.to
        })
      } else {
        // 发送所有人
        socket.broadcast.emit('new msg', {
          from: curUser,
          content: data.content,
          to: data.to
        })
      }
    })


  })
}