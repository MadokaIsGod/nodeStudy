//1.引入fs
const fs = require('fs')

//2.创建读取流对象
const rs = fs.createReadStream('./study.md')

//3.绑定data事件
rs.on('data', chunk => {
  // console.log(chunk.length)
  console.log(chunk.toString())
})

// 4. end 可选事件
rs.on('end', () => {
  console.log('读取完成')
})