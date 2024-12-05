class MySet {
  #datas = []
  constructor(iterator = []) {
    // 验证是否为可迭代对象
    if(typeof iterator[Symbol.iterator] !== 'function') {
      throw new TypeError(`参数${iterator}不是一个可迭代对象`)
    }

    for(const item of iterator) {
      this.add(item)
    }

  }

  add(data) {
    if(!this.has(data)) {
      // 不包含才添加
      this.#datas.push(data)
    }
  }

  has(data) {
    for (const item of this.#datas) {
      if(this.#isEqual(data, item)) {
        return true
      }
    }
    return false
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

  delete(data) {
    for(let i = 0; i < this.#datas.length; i++) {
      if(this.#isEqual(data, this.#datas[i])) {
        this.#datas.splice(i, 1)
        return true
      }
    }
    return false
  }

  *[Symbol.iterator]() {
    for(const item of this.#datas) {
      yield item
    }
  }

  forEach(callback) {
    for(const item of this.#datas) {
      callback(item, item, this)
    }
  }

  get size() {
    return this.#datas.length
  }

  clear() {
    this.#datas = []
    // this.#datas.length = 0
  }

}

const a = new MySet([1,2,3,4,1, 3])
a.add(66)
a.add(88)
a.add(1)

a.delete(88)

// for(item of a) {
//   console.log(item)
// }

a.forEach((item, index, data) => {
  console.log(item, index, data);
})


console.log(a, a.size);