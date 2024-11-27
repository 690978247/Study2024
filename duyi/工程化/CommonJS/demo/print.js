const config = require('./config')

function print(index) {
  console.clear()
  const text = config.text

  // const newText = text.slice(0, index + 1)
  const newText = text.substring(0, index + 1)
  console.log(newText)
}

// print(2)

module.exports = print