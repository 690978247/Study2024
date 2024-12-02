const loaderUtil = require("loader-utils")

function loader(buffer){ // 给的是buffer
  console.log(buffer)
  console.log("文件数据大小：（字节）" + buffer.byteLength)
  /* 1: base64 */
  // const content = getBase64(buffer)
  // console.log(content)

  /* 2. 图片路径 */
  // const content = getFilePath(buffer) // 错误
  const content = getFilePath.call(this, buffer); // 使用 call 将 this 传递给 getFilePath
  console.log(content)

  return `module.exports = \`${content}\``
}

loader.raw = true // 该loader处理的是原始数据

// function getBase64(buffer) {
//   return "data:image.png;base64," + buffer.toString("base64")
// }

function getFilePath(buffer) {
  const filename = loaderUtil.interpolateName(this, "[contenthash:5].[ext]", {
    content: buffer
  })
  console.log('fffff', filename)

  // 确保 this.emitFile 是有效的
  if (this.emitFile) {
    this.emitFile(filename, buffer)
  } else {
    console.warn('emitFile 方法不可用，请检查 Webpack 配置');
  }

  return filename
}


module.exports = loader