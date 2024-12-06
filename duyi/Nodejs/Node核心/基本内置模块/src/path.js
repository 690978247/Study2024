const path = require('path')

console.log(path.basename("a/b/c.html", ".html")); 

console.log(path.sep); // 系统分隔符

console.log(path.delimiter); // 代码块分割

const dir = path.dirname("a/b/c/d.js")
console.log(dir);   // 获取文件前面的路径


const ext = path.extname("a/b/c/d.js")
console.log(ext); // 获取后缀名

const basePath = "a/b"
const fullpath = path.join(basePath, "../", "d.js")
console.log(fullpath);  // 拼接路径

const rel = path.relative('/data/orandea/test/aaa', '/data/orandea/impl/bbb')
console.log(rel); // 返回路径

const absPath = path.resolve(__dirname, './a.js')
console.log(absPath); // 当前系统盘符

