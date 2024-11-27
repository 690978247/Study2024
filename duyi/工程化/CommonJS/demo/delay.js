function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

module.exports = delay

// async function run () {
//   console.log(1)
//   await delay(1000)
//   console.log(2)
// }

