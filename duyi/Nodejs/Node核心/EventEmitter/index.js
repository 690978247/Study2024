const { EventEmitter } = require('events')

// 创建一个事件处理对象
// 可以注册事件，可以触发事件
const bus = new EventEmitter()

bus.on('abc', () => {
  console.log('abc 事件触发了');
})


const fn = function() {
  console.log('abc 触发了2');
} 

bus.on('abc', fn)

bus.once('abc', () => {
  console.log('abc 事件触发了 once');
})

bus.emit("abc") // 触发事件，运行注册的事件处理函数
bus.off("abc", fn) // 移除事件
bus.emit("abc")
bus.emit("abc")