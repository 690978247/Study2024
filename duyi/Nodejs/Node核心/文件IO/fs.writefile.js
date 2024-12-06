const fs = require('fs')
const path = require('path')

const filename = path.resolve(__dirname, './myFiles/2.txt')


async function test() {
  // 默认 utf-8
  // await fs.promises.writeFile(filename, "大大是的大大是的", {
  //   flat: 'a'  // 追加内容
  // })

  const buffer =  Buffer.from('abcde', "utf-8")
  await fs.promises.writeFile(filename, buffer)
  console.log("写入成功");
}

test()