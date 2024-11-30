
/* 普通函数 */
function createPerson(firstName, lastName) {
  var obj = {}
  obj.firstName = firstName
  obj.lastName = lastName
  obj.fullName = firstName + lastName
  obj.sayHi = function () {
    console.log('名字叫做' + obj.fullName)
  }

  return obj
} 

// 构造函数 this
function Person(firstName, lastName) {
  this.firstName = firstName
  this.lastName = lastName
  this.fullName = firstName + lastName
  this.sayHi = function () {
    console.log('名字叫做' + this.fullName)
  }

}

// const person1 = createPerson('徐', '杨')
// person1.sayHi()

// const person2 = createPerson('徐', '来柯')
// person2.sayHi()

const person1 = new Person('徐', '杨')
person1.sayHi()

const person2 = new Person('徐', '来柯')
person2.sayHi()
