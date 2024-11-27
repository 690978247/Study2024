/**
 * 定义：
 * 防抖： 延迟执行，用于控制事件触发频率，减少频繁操作带来的性能问题，通常用于事件处理（如滚动、窗口调整大小、输入框实时搜索）中，
 *        避免短时间内执行大量相同的操作
 *       1. 高频 2. 耗时 3. 以最后一次调用为准
 * 节流：限制操作频率，即确保函数在一定时间内只执行一次，它适用于需要间隔时间重复执行的场景，比如滚动事件或鼠标移动事件
 */

function debounce(fn, delay) {
  let timer
  // 此处需要获取外部定义的this 所以使用function
  return function(...args) {
    clearTimeout(timer)
    // 使用箭头函数 获取外部作用域的this
    timer = setTimeout(() => {
      fn.apply(this, ...args)
    }, delay)
  }

}
function throttle(fn, delay) {
  let lastTime = 0
  return function(...args) {
    const now = Date.now()
    if(now - lastTime >= delay) {
      fn.apply(this, ...args)
      lastTime = now

    }
  }
}

/* 防抖 */
window.onresize = debounce(() => {
  console.log('6666')
}, 300)
