const { EventEmitter } = require("events");
// 创建一个事件处理对象
// 可以注册事件，可以触发事件
const bus = new EventEmitter();

bus.on("abc", (data1, data2) => {
  console.log("abc事件触发了", data1, data2);
});

bus.emit("abc", 123, 456)
