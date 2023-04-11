// 导入http模块
const http = require('http');

//创建服务对象
const server = http.createServer((request, response) => {
  response.end('Hello Http Server');// 设置响应体并结束响应
});

//监听端口，启动服务

server.listen(9000, () => {
  console.log('服务已经启动')
})
