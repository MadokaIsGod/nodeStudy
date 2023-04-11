// 导入http模块
const http = require('http');

//创建服务对象
const server = http.createServer((request, response) => {
  //1.设置响应状态码
  // response.statusCode = 200
  //2.响应状态的描述
  // response.statusMessage = 'login'
  //3.响应头
  // response.setHeader('content-type', 'text/html;charset=utf-8')
  // response.setHeader('Server', 'node.js')
  // response.setHeader('myHeader', 'text text');
  //4.响应体
  response.write('love')
  response.end();// 设置响应体并结束响应
});

//监听端口，启动服务

server.listen(9000, () => {
  console.log('服务已经启动')
})
