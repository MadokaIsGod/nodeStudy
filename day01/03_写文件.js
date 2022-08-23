let fs = require('fs')

fs.writeFile('./你好.md', '测试写文件', function (error) {
  console.log('文件写入成功', error)
})