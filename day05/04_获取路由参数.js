const express = require('express');

const app = express();

// 创建路由
app.get('/:id.html', (req, res) => {
  console.log(req.params.id)
  res.setHeader('content-type', 'text/html;charset=utf-8')
  res.end('商品详情')
})

//启动服务
app.listen(3000, () => {
  console.log('服务已经启动,端口3000....')
})