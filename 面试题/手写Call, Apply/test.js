Function.prototype.myCall = function(ctx, ...args) {
  ctx = ctx === null || ctx === undefined ? globalThis : Object(ctx)
  const key = Symbol('key')
  ctx[key] = this
  const r = ctx[key](...args)
  delete ctx[key]
  return r
}

Function.prototype.myApply =  function(ctx, args) {
  ctx = ctx === undefined || ctx === null ? globalThis : Object(ctx)
  const key = Symbol('key')
  ctx[key] = this
  const r = ctx[key](...args)
  delete ctx[key]
  return r
}


const method = function (a, b ) {
  console.log('args:', a, b)
  console.log('this:', this)
}

// method.myCall(1,2,3)
// method.myApply(1,[2,3,4,5])

// const person = {
//   name: 'itheima'
// }

// function func(A,B) {
//   console.log(this)
//   console.log(A,B)
//   return A + B
// }

// const res = func.myApply(person, [2,8])
// console.log('rrr', res)