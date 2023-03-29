// 浏览器中的js是无法读取文件的
// node中的js可以读取文件
// fs是file-system的缩写，就是文件系统的意思
// 在node中如果想要进行文件操作，就必须引入fs这个核心模块
// 在fs这个核心模块中，就提供了所有文件操作相关的API
// 例如fs.readFile 就是用来读取文件的

// 1.使用require方法加载 fs 核心模块

let fs = require('fs')

// 读取文件
// 第一参数是读取的文件路径
// 第二个参数是一个回调函数
fs.readFile('../README.md', function (err, data) {
  console.log(data.toString())
})

let data = fs.readFileSync('./study.md')
console.log(data.toString())