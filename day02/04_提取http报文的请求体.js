// 导入http模块
const http = require('http');

//创建服务对象
const server = http.createServer((request, response) => {
  // 1.声明一个变量
  let body = '';
  // 2.绑定 data事件
  request.on('data', chunk => {
    body += chunk
  })
  // 3.绑定end事件
  request.on('end', () => {
    console.log(body)
    // 响应
    response.end('Hello Http Server')
  })
});

//监听端口，启动服务

server.listen(9000, () => {
  console.log('服务已经启动')
})
