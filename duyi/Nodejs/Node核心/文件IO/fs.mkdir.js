const fs = require('fs')
const path = require('path')
const filename = path.resolve(__dirname, './myFiles/3')

async function test() {
  // 创建目录
  await fs.promises.mkdir(filename)
  console.log('创建目录成功');
}

test()