const express = require('express');

const app = express();

// 创建路由
app.get('/home', (req, res) => {
  res.end('express Hello')
})

//启动服务
app.listen(3000, () => {
  console.log('服务已经启动,端口3000....')
})