const express = require('express');

const app = express();

// 创建路由
app.get('/other', (req, res) => {
  //跳转响应
  // res.redirect('http://baidu.com')
  //下载响应
  // res.download(__dirname + '/study.md')
  //JSON响应
  // res.json({
  //   name: '1',
  //   slogn: '11'
  // })
  //响应文件内容
  res.sendFile(__dirname + '/study.md')
})

//启动服务
app.listen(3000, () => {
  console.log('服务已经启动,端口3000....')
})