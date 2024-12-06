class MyMap {
  #datas = []
  constructor(iterable = []) {
     // 验证是否为可迭代对象
     if(typeof iterable[Symbol.iterator] !== 'function') {
      throw new TypeError(`参数${iterable}不是一个可迭代对象`)
    }

    for(const item of iterable) {
      // item 也得是一个可迭代对象
      if(typeof item[Symbol.iterator] !== 'function') {
        throw new TypeError(`参数${item}不是一个可迭代对象`)
      }

      const iterator = item[Symbol.iterator]()
      const key = iterator.next().value
      const value = iterator.next().value
      this.set(key, value)
    }


  }

  set(key, value) {
    const obj = this.#getObj(key)
    if(obj) { // 有则修改
      obj.value = value

    } else { // 没有添加
      this.#datas.push({
        key,
        value
      })
    }
  }

  get(key) {
     return this.has(key)
  }

  delete(key) {
    for(let i = 0; i < this.#datas.length; i++) {
      if(this.#isEqual(key, this.#datas[i].key)) {
        this.#datas.splice(i, 1)
      }
    }
  }

  get size() {
    return this.#datas.length
  }

  /**
   * 根据key值从内部数组中，找到对应的数组项
   * @param {*} key 
   */
  #getObj(key) {
    for(const item of this.#datas) {
      if(this.#isEqual(item.key, key)) {
        return item
      }
    }
  }

  clear() {
    this.#datas.length = 0
  }

  has(key) {
    // for(const item of this.#datas) {
    //   this.#isEqual(item, key)
    //   return true
    // }
    // return false
    return this.#getObj(key) !== undefined
  }

  *[Symbol.iterator]() {
    for(const item of this.#datas) {
      yield [item.key, item.value]
    }
  }

  forEach(callback) {
    // for(let i = 0; i < this.#datas.length; i++) {
    //   callback(this.#datas[i].value, this.#datas[i].key, this)
    // }

    for(const item of this.#datas) {
      callback(item.value, item.key, this)
    }

  }

    /**
   * 
   * @param {*} data1 
   * @param {*} data2 
   */
  #isEqual(data1, data2) {
    if(data1 === 0 && data2 === 0) {
      return true
    }
    return Object.is(data1, data2)
  }

}

const m1 = new MyMap([["a", 3],["b", 4], ["c", 5]])

const obj = {}
m1.set(obj, 456)
m1.set("a", "abc")
m1.set(obj, 111)

m1.delete('b')


// for(const item of m1) {
//   console.log('iiiiiiii', item)
// }

m1.forEach((a1,a2,a3) => {
  console.log(a1,a2,a3);
})

console.log(m1, m1.get('a'), [...m1]);