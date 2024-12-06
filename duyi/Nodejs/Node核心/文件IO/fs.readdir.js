const fs = require('fs')
const path = require('path')
const filename = path.resolve(__dirname, './myFiles/')

async function test() {
  // 读取目录下的所有文件和子目录
  const pathes = await fs.promises.readdir(filename)
  console.log(pathes);
}

test()