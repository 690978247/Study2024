module.exports = class FileListPlugin {
  apply(compiler) {
    console.log('插件运行！！！')
    compiler.hooks.emit.tap("FileListPlugin", (complation) => {
      console.log(compilation.assets)
      var str = 'aaaaaaaaaaaaaaaaaaaa'
      complation.assets["filelist.txt"] = {
        source() {
          return str
        },
        size() {
          return str.length
        }
      }
    })
  }
}