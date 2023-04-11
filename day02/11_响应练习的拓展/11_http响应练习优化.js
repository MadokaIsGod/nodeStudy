// 导入http模块
const http = require('http');
const fs = require('fs');

//创建服务对象
const server = http.createServer((request, response) => {
  // 
  let { pathname } = new URL(request.url, 'http://127.0.0.1')
  let str = ''
  if (pathname === '/') {
    str = fs.readFileSync(__dirname + '/table.html')
  } else if (pathname === '/index.css') {
    str = fs.readFileSync(__dirname + '/index.css')
  } else if (pathname === '/index.js') {
    str = fs.readFileSync(__dirname + '/index.js')
  } else {
    request.statusCode = 404
    str = '<h1>404 Not Found</h1>'
  }
  response.end(str);// 设置响应体并结束响应
});

//监听端口，启动服务

server.listen(9000, () => {
  console.log('服务已经启动')
})
