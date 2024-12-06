const path = require('path')
const fs = require('fs')

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
    const name = path.basename(filename)
    const ext = path.extname(filename)
    const stat = await fs.promises.stat(filename)
    const isFile = stat.isFile()
    const size = stat.size
    const creatTime = stat.birthtime
    const updateTime = stat.mtime
    return new File(filename, name, ext, isFile, size, creatTime, updateTime)
  }

  async getContent(buffer = false) {
    if(this.isFile) {
      if(buffer) {
        return await fs.promises.readFile(this.filename)
      } else {
        return await fs.promises.readFile(this.filename, 'utf-8')
      }
    }
  }

  async getChildren() {
    if(this.isFile) {
      return []
    } else {
      let children = await fs.promises.readdir(this.filename)

      children = children.map(item => {
        const childFilename = path.resolve(this.filename, item)
        return File.getFile(childFilename)
      })
      
      return Promise.all(children)
    }
  }


}

async function test() {
  const filename = path.resolve(__dirname, './myFiles')
  const file = await File.getFile(filename)
  // const content = await file.getContent()

  const children = await file.getChildren()

  console.log(children);
}

test()