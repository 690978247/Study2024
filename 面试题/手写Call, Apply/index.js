
Function.prototype.myCall = function(ctx, ...args) {
  // 1 简单写法
  // ctx =  ctx === null || ctx === undefined ? globalThis : Object(ctx)
  // // 此时， this === method
  // const fn = this
  // // fn() 如果直接调用fn()则this指向了window，所以要使用ctx.fn()来调用
  // ctx.fn = fn
  // const r = ctx.fn(...args)
  // return r

  // 2. 使用 Symbol 优化写法
  ctx = ctx === null || ctx === undefined ? globalThis : Object(ctx)
  const key = Symbol('key')
  ctx[key] = this
  const r = ctx[key](...args)
  delete ctx[key]
  return r


  // 3 优化写法
  // ctx = ctx === null || ctx === undefined ? globalThis : Object(ctx)
  // const fn = this;
  // const key = Symbol()
  // Object.defineProperty(ctx, key, {
  //   value: fn,
  //   enumerable: false
  // })
  // const r = ctx[key](...args)
  // delete ctx[key]
  // return r
}


Function.prototype.myApply = function (ctx, args) {
  // 1. 简单写法
  // ctx = ctx === null || ctx === undefined ? globalThis : Object(ctx)
  // fn = this
  // ctx.fn = fn
  // const r = ctx.fn(...args)
  // return r

  // 2. 使用 Symbol 优化写法
  ctx = ctx === null || ctx === undefined ? globalThis : Object(ctx)
  const key = Symbol('key')
  // ctx[key] = this
  Object.defineProperty(ctx, key, {
    value: this,
    enumerable: false,
  })

  const r = ctx[key](...args)
  delete ctx[key]
  return r

}

function method(a, b) {
  console.log('args:', a, b)
  console.log('this:', this)
}

// method.call(1,2,3,4)
method.myApply(1,[2,3,4,5])