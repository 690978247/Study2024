
// var obj = {
//   a: 1,
//   b: 2,
//   method: function () {
//     console.log(this)
//   },
//   c: {
//     m:function() {
//       console.log(this)
//     }
//   }
// }

// // obj.c.m()

// // obj.method()

// var test = obj.c.m



function m(a, b) {
  console.log(this,a,b)
}

var arr = {}

m.call(arr, 9,10)