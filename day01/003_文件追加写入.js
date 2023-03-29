const fs = require('fs')

// fs.appendFile('./你好.md', '测试追加内容', err => {
//   if (err) {
//     console.log('文件写入失败', err)
//   }
//   console.log('文件写入成功')
// })

//同步
// fs.appendFileSync()

// writeFile 实现追加写入
fs.writeFile('./你好.md', 'love love love', { flag: 'a' }, err => {
  if (err) {
    console.log('文件写入失败', err)
  }
  console.log('文件写入成功')
})