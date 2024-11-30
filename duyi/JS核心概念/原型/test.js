/**
 * 
 * @param {number} number 1-1, ..., 11-J, 12-Q, 13-K, 14-小王， 15-大王
 * @param {number} color 1-黑桃，2-红桃，3-梅花，4-方片
 */

function Poker(number, color) {
  this.number = number
  this.color = color

  // this.print = function () {
  //   // 处理大小王
  //   if(this.number === 14) {
  //     console.log('joker')
  //     return
  //   }
  //   if(this.number === 15) {
  //     console.log('JOKER')
  //     return
  //   }
  //   //其他情况 - 颜色
  //   let colors = ['♠','♥','♣','♦']
  //   let color = colors[this.color - 1]
  //   // 其他情况 - 数字
  //   let numbers = ['A','2','3','4','5','6','7','8','9','10','J','Q','K']
  //   let number = numbers[this.number - 1]
  //   console.log(color + number)
  // }
}

Poker.prototype.print = function () {
  // 处理大小王
  if(this.number === 14) {
    console.log('joker')
    return
  }
  if(this.number === 15) {
    console.log('JOKER')
    return
  }
  //其他情况 - 颜色
  let colors = ['♠','♥','♣','♦']
  let color = colors[this.color - 1]
  // 其他情况 - 数字
  let numbers = ['A','2','3','4','5','6','7','8','9','10','J','Q','K']
  let number = numbers[this.number - 1]
  console.log(color + number)
}


/* 一副扑克牌 */
var pokers = []
for(let i = 1; i <= 13; i++) {


  for(let j = 1; j <= 4; j++) {
    pokers.push(new Poker(i, j))
  }
}
pokers.push(new Poker(14, 0))
pokers.push(new Poker(15, 0))

function Deck() {
  this.pokers = []
  for(let i = 1; i <= 13; i++) {

    for(let j = 1; j <= 4; j++ ) {
      this.pokers.push(new Poker(i, j))
    }
  }
  this.pokers.push(new Poker(14), new Poker(15))

  // this.print = function() {
  //   for(let i = 0; i < this.pokers.length; i++) {
  //     this.pokers[i].print()
  //   }
  // }

}

Deck.prototype.print = function() {
  for(let i = 0; i < this.pokers.length; i++) {
    this.pokers[i].print()
  }
}

const deck = new Deck()

console.log(deck, deck.print())