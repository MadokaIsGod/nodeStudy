// 使用node构建服务器
// node中提供了一个核心模块:http

let http = require('http')

let server = http.createServer()

// 发请求 接收请求 处理请求 发送响应 注册request请求事件

server.on('request', () => {
  console.log('收到客户端请求')
})

// 启动服务器 绑定端口号

server.listen(3000, () => {
  console.log('服务器启动成功')
})