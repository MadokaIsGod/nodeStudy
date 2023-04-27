const express = require('express');

const app = express();

// 创建路由
app.get('/home', (req, res) => {
  res.end('express Hello')
})

app.get('/', (req, res) => {
  res.end('home')
})

app.post('/login', (req, res) => {
  res.end('end')
})

app.all('/test', (req, res) => {
  res.end('test')
})
// 404 响应
app.all('*', (req, res) => {
  res.end('404 not found')
})

//启动服务
app.listen(3000, () => {
  console.log('服务已经启动,端口3000....')
})