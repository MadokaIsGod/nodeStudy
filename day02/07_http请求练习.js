// 导入http模块
const http = require('http');

//创建服务对象
const server = http.createServer((request, response) => {
  // 实例化URL对象
  response.setHeader('content-type', 'text/html;charset=utf-8')
  let { method } = request;
  let url = new URL(request.url, 'http://127.0.0.1');
  if (method === 'GET' && url.pathname === '/reg') {
    response.end('注册页面')
  } else if (method === 'GET' && url.pathname === '/login') {
    response.end('登录页面')
  } else {
    response.end('404 NOTFOUND')
  }
});

//监听端口，启动服务

server.listen(9000, () => {
  console.log('服务已经启动')
})
