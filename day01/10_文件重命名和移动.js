const fs = require('fs')
// 重命名
fs.rename('../README.md', '../2333.md', err => {
  console.log('修改成功')
})
// 移动
fs.rename('../README.md', './2333.md', err => {
  console.log('修改成功')
})