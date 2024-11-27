Function.prototype.myBind = function (ctx, ...args) {
  const fn = this
  return function(...restArgs) {
    if(new.target) {
      return new fn(...args, ...restArgs)
    } else {
      return fn.apply(ctx, [...args, ...restArgs])
    }
  }
}

function fn (a,b,c,d,e) {
  console.log(this)
  console.log(a,b,c,d,e)
}

const newFn = fn.myBind(1,2,3)
const r = new newFn(4,5,6)

console.log(r)