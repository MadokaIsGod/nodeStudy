const fs = require('fs')

// 删除
fs.unlink('../README.md', err => {
  console.log('删除成功')
})

fs.rm('../README.md', err => {
  console.log('删除成功')
})