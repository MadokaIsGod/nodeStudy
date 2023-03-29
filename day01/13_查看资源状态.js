const fs = require('fs')

fs.stat('./study.md', (err, data) => {
  if (!err) {
    console.log('查看成功', data)
    console.log(data.isFile())
    console.log(data.isDirectory())
  }
})