// var aaa = [1,2,3,4]


// console.log(Object.prototype.toString.call(aaa))

// console.log(/* aaa.join() ===  */aaa.toString())

var arr = [1,2,3, 4]

var arr2 = {
  0: 1,
  1: 2,
  2: 3,
  3: 4,
  length: 4
}


// for(let i = 0; i < arr2.length;i++) {
//   console.log(arr[i])
// }


// if(arr2 instanceof Array) {
//   console.log('是')
// }

// var obj = { a:1, b: 2 }

// let obj =  Object.create(null)

// obj = {
//   a: 1,
//   b: 2
// }
// // Object.setPrototypeOf(obj, null)

// console.log(obj)

function A () {

}


// console.log(A.__proto__ === Function.prototype)
console.log(A.__proto__ === Function.__proto__)

