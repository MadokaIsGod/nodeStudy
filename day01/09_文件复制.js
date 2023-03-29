/*
  复制文件
*/

// 方式一 readFile
const fs = require('fs')

let data = fs.readFileSync('../README.md')

// 写入文件

fs.writeFileSync('./Read', data)

// 方式二 流式操作

const rs = fs.createReadStream('../README.md')

// 创建写入流对象

const ws = fs.createWriteStream('./Read1')

// 绑定data事件

rs.on('data', chunk => {
  ws.write(chunk)
})
