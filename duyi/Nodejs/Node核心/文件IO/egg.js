/* 读取一个目录中的所有子目录和文件 */

const fs = require('fs')
const path = require('path')

class File {
  constructor(filename, name, ext, isFile, size, creatTime, updateTime) {
    this.filename = filename
    this.name = name
    this.ext = ext
    this.isFile = isFile
    this.size = size
    this.creatTime = creatTime
    this.updateTime = updateTime
  }

  static async getFile(filename) {
    const stat = await fs.promises.stat(filename)
    const name = path.basename(filename)
    const ext = path.extname(filename)
    const isFile = stat.isFile()
    const size = stat.size
    const creatTime = stat.birthtime
    const updateTime = stat.mtime
    return new File(filename, name, ext, isFile, size, creatTime, updateTime)
  }

  async getContent(isBuffer = false) {
    if(this.isFile) {
      if(isBuffer) {
        return await fs.promises.readFile(this.filename)
      } else {
        return await fs.promises.readFile(this.filename, 'utf-8')
      } 

    } else {
      return null
    }
  }

  async getChildren() {
    if(this.isFile) { // 文件
      return []
    } else {
      let children = await fs.promises.readdir(this.filename)
      children = children.map(name => {
        const result = path.resolve(this.filename, name)
        return File.getFile(result)
      })

      return Promise.all(children)
    }
  }

}

// async function test() {
//   const filename = path.resolve(__dirname, './myFiles')
//   const file = await File.getFile(filename)
//   // console.log(file);
//   // const content = await file.getContent()
//   const children = await file.getChildren()
//   console.log(/* file,  */children);
// }


async function readDir(dirname) {
  // const file = new File(dirname)
  const file = await File.getFile(dirname)
  return await file.getChildren()
}


async function test() {
 const dirname = path.resolve(__dirname, './myFiles')
 const result = await readDir(dirname)
 /**
  * [
  *   {name: '1', isFile: false, ext: '', size:0, getChildren: fn},
  *   {name: '1.png', isFile: true, ext: 'png', size:13300, getChildren: fn},
  * ]
  */
 console.log(result); 
}

test()