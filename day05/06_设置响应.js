const express = require('express');

const app = express();

// 创建路由
app.get('/response', (req, res) => {
  // 原生响应
  // res.statusCode = '404'
  // res.statusMessage = 'love'
  // res.setHeader('xxx', 'yyy')
  // res.write('hello')
  // res.end('express Hello')
  // express 响应
  res.status(500)
  res.set('aaa', 'bbb')
  res.send('你好 Express')
})

//启动服务
app.listen(3000, () => {
  console.log('服务已经启动,端口3000....')
})

