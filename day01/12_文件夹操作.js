const fs = require('fs')

// 创建文件夹
fs.mkdir('./html', err => {
  if (!err) {
    console.log('创建成功')
  }
})

// 递归创建

fs.mkdir('./html/css', { recursive: true }, err => {
  if (!err) {
    console.log('创建成功')
  }
})

// 读取文件夹

fs.readdir('./07_模块化', (err, data) => {
  if (!err) {
    console.log('读取成功', data)
  }
})

// 删除文件夹

fs.rmdir('./07_模块化', err => {
  if (!err) {
    console.log('删除成功')
  }
})