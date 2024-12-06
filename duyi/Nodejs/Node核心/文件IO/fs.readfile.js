const fs = require('fs')
const path = require('path')

const filename = path.resolve(__dirname, './myFiles/1.txt')

// 异步读取
// fs.readFile(filename, "utf-8", (err, content) => {
//   // console.log(content.toString("utf-8"))
//   console.log(err, content);
// })

// 同步读取， 通常，在程序启动时运行有限的次数即可
// const content = fs.readFileSync(filename, 'utf-8')
// console.log(content);
// console.log("1");

async function test() {
 const content = await fs.promises.readFile(filename, 'utf-8')
 console.log(content);
}

test()