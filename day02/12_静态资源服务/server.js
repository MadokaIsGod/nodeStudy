/*
  创建一个HTTP服务，端口为9000，满足如下需求
  GET /index.html 响应 page/index.html 的文件内容
  GET /css/index.css 响应 page/css/index.css 的文件内容
  GET /image/logo.png 响应 page/image/logo.png 的文件内容
*/

const http = require('http');
const fs = require('fs');
const path = require('path')
const mimes = {
  html: 'text/html',
  css: 'text/css',
  js: 'text/javascript',
  png: 'image/png',
  jpg: 'image/jpeg',
  gif: 'image/gif',
  mp4: 'video/mp4',
  mp3: 'audio/mpeg',
  json: "application/json"
}

//创建服务对象
const server = http.createServer((request, response) => {

  // 
  let { pathname } = new URL(request.url, 'http://127.0.0.1')
  // 拼接文件路径
  let filePath = __dirname + pathname
  fs.readFile(filePath, (err, data) => {
    if (err) {
      response.setHeader('content-type', 'text/html;charset=utf-8')
      request.statusCode = 500
      response.end('文件读取失败')
      return
    }
    // 获取文件后缀名
    let ext = path.extname(filePath).slice(1);
    // 获取对应的类型
    let type = mimes[ext]
    if (type) {
      response.setHeader('content-type', type)
    } else {
      response.setHeader('content-type', 'applicaton/octet-stream')
    }
    response.end(data)
  })
});

//监听端口，启动服务

server.listen(9000, () => {
  console.log('服务已经启动')
})
