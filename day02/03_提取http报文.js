// 导入http模块
const http = require('http');

//创建服务对象
const server = http.createServer((request, response) => {
  // 获取请求方法
  // console.log(request.method)
  // 获取请求的URL
  // console.log(request.url) //只包含url中的路径和查询字符串
  // 获取http协议的版本号
  // console.log(request.httpVersion)
  // 获取http的请求头
  // console.log(request.headers.host)
  response.end('Hello Http Server');// 设置响应体并结束响应
});

//监听端口，启动服务

server.listen(9000, () => {
  console.log('服务已经启动')
})
