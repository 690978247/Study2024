const http = require('http')

const request = http.request('http://www.baidu.com', {
  method: "GET",
}, resp => {
  console.log(resp.statusCode);
  console.log(resp.headers /* resp.headers['content-type'] */);

  let result = ''
  resp.on('data', chunk => {
    result += chunk.toString('utf-8')
    console.log(chunk);
  })


  resp.on("end", chunk => {
    console.log(result);
  })

})


// request.write()
request.end() // 表示消息体结束