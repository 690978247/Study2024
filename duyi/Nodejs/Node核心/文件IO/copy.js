const fs = require('fs')
const path = require('path')

async function test() {
  // 默认 utf-8
  // await fs.promises.writeFile(filename, "大大是的大大是的", {
  //   flat: 'a'  // 追加内容
  // })

  const fromFilename = path.resolve(__dirname, './myFiles/1.png')
  const buffer = await fs.promises.readFile(fromFilename)

  const copyfilename = path.resolve(__dirname, './myFiles/1.copy.png')
  await fs.promises.writeFile(copyfilename, buffer)

  console.log("复制成功");
}

test()