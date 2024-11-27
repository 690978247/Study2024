// const _ = require('lodash')

// console.log(_.chunk([2,3,4,5], 2))

// const Mock = require('mockjs')

// const result = Mock.mock({
//   name: '@cname'
// })


// console.log(result)

var QRCode = require('qrcode')

QRCode.toString(
  'NODE HHHH',
  { type: 'terminal' },
  function (err, data) {
    console.log(data)
  }
)