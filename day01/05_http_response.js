let http = require('http')

let server = http.createServer()

// request 请求事件处理函数，需要接收两个参数
// Request 请求对象

server.on('request', (request, response) => {
  console.log('收到客户端请求,路径' + request.url)
  // response对象 有一个方法：write 可以给客户端发送响应数据
  // write可以使用多次 但是一定要使用end结束
  let name = request.url.split('/')[1]
  if (name === 'login') {
    response.write('登录')
  } else {
    response.write('hello')
    response.write('node')
  }
  response.end()
})

// 启动服务器 绑定端口号

server.listen(8080, () => {
  console.log('服务器启动成功')
})