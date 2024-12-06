const fs = require('fs')
const path = require('path')
const filename = path.resolve(__dirname, './myFiles/4')

function test() {
 const result =  fs.existsSync(filename)
  console.log(result);
}

test()