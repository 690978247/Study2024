
/* 1 */
// let i = 0

// console.time();

// function test() {
//   i++
//   if(i < 1000) {
//     // setTimeout(test, 0)
//     setImmediate(test, 0)
//   } else {
//     console.timeEnd();
//   }
// }

// test()


/* 2 */
setTimeout(() => {
  console.log('out');
},0)

setImmediate(() => {
  console.log('iii');
})