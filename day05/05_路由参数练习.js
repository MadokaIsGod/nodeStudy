const express = require('express');
const { singers } = require('./singers.json');

const app = express();

// 创建路由
app.get('/singer/:id.html', (req, res) => {
  res.setHeader('content-type', 'text/html;charset=utf-8')
  // 获取路由参数
  let { id } = req.params;
  // 在数组中寻找对应 id 的对象
  let result = singers.find(item => item.id === Number(id))
  if (!result) {
    res.statusCode = 404
    res.end('<h1>404 NOT FOUND</h1>')
    return
  }
  res.end(`
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
    </head>
    <body>
      <h2>${result.singer_name}</h2>
      <img src='${result.singer_pic}' />
    </body>
  </html>
  `)
})

//启动服务
app.listen(3000, () => {
  console.log('服务已经启动,端口3000....')
})