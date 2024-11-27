

const config = require('./config')
const delay = require('./delay')
const print = require('./print')

// console.log('cccc', config.wordDoration, delay.delay(300))

// async function run () {
//   const text = config.text
//   console.log('ttt', text)
//   let str = ''

//   // text.forEach(async(item) => {
//   //   str+= item
//   //   await delay(300)
//   //   console.log(str)
//   // })

//   for(let i = 0; i < text; i++) {
//     return new Promise(async (resolve) => {
//       str+= item
//       await delay(config.wordDoration)
//       print(index)
//       i ++
//     })
//   }
// }

async function run () {
  // let index = 0
  // while (index < config.text.length) {
  //   print(index)
  //   await delay(config.wordDoration)
  //   index ++
  // }

  for(let i = 0; i < config.text.length; i++) {
    print(i)
    await delay(config.wordDoration)
    i ++
  }

}

run()