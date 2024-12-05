let activeEffect = null // 记录当前的函数
const depsMap = new Map() // 保存依赖关系

function track(target, key) {
  // 建立依赖关系
  if(activeEffect) {
    let deps = depsMap.get(key) // 根据属性值去拿依赖的函数集合
    if(!deps) {
      deps = new Set() // 创建一个新的集合
      depsMap.set(key, deps) // 将集合存入 depsMap
      debugger
      console.log('iiiiiiii', deps, depsMap)
    }
    // 将依赖的函数添加到集合里面
    deps.add(activeEffect)
    console.log('dddd', deps, depsMap)
  }
  console.log(depsMap)
}
function trigger(target, key) {}

// 原始对象
const data = {
  a: 1,
  b: 2,
  c: 3
}

// 代理对象
const state = new Proxy(data, {
  get(target, key){
    // 依赖收集
    track(target, key)
    return target[key]
  },
  set(target, key, value) {
    target[key] = value
    // 派发更新
    trigger(target, key)
    return true
  }
})

/**
 * 
 * @param {*} fn 回调函数
 */
function effect(fn) {
  activeEffect = fn
  fn()
  activeEffect = null
}

effect(() => {
  //访问a成员，触发Proxy get 方法，进行依赖收集
  console.log(state.a)
})