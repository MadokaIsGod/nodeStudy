// 记录每个请求的 url 与 ip 地址const express = require('express');
const express = require('express');

const app = express();
const fs = require('fs')
const path = require('path')

// 声明中间件函数
function recordMiddleware (req, res, next) {
  //获取 url 和 ip
  let { url, ip } = req
  // 将信息保存在文件中
  fs.appendFile(path.resolve(__dirname + './access.log'), `${url} ${ip}\r\n`)
  // 调用 next
  next()
}

// 使用中间件函数
app.use(recordMiddleware)

// 创建路由
app.get('/home', (req, res) => {
  res.send('前台首页')
})

app.get('/admin', (req, res) => {
  res.send('后台首页')
})

app.get('*', (req, res) => {
  res.send('<h1>404 NOT FOUND</h1>')
})

//启动服务
app.listen(3000, () => {
  console.log('服务已经启动,端口3000....')
})