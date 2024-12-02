class MyPlugin {
  apply(compiler) {
    // 在这里注册事件，类似于window.onload $(function(){})
    console.log('插件运行了！！！')
    // compiler.hooks.事件名称.事件类型(
    // compiler.hooks.done.tap("MyPlugin-done", function(compilation){
    //   //事件处理函数
    //   console.log('编译完成了')
    // })

    compiler.hooks.beforeRun.tap("MyPlugin-done", function(compilation){
      //事件处理函数
      console.log('编译完成了')
    })
  }
}

module.exports = MyPlugin