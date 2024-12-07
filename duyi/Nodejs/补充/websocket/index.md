# websocket

## 特殊格式消息头

``` head
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Accept: [key]

```

其中，Sec-WebSocket-Accept的值来自于以下算法：

``` js
base64(sha1(Sec-WebSocket-Key) + "258EAFA5-E914-47DA-95CA-C5AB0DC85B11")
```

在node中可以使用以下代码获得：

``` js
const crypto = require("crypto");
const hash = crypto.createHash("sha1");
hash.update(requestKey + "258EAFA5-E914-47DA-95CA-C5AB0DC85B11");
const key = hash.digest("base64");
```

其中，requestKey来自于请求头中的Sec-WebSocket-Key
