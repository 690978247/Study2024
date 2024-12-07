const http = require('http')

const request = http.request('http://www.baidu.com', {
  method: "GET",
}, res => {
  console.log(res.statusCode);
  console.log(res.headers /* res.headers['content-type'] */);

  let result = ''
  res.on('data', chunk => {
    result += chunk.toString('utf-8')
    console.log(chunk);
  })


  res.on("end", chunk => {
    console.log(result);
  })

})


// request.write()
request.end() // 表示消息体结束