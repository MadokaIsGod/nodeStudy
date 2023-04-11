const path = require('path')

// resolve 解决

// console.log(path.resolve(__dirname, './index.html'))

//sep 分隔符

// console.log(path.sep)

// parse
// __filename 文件的绝对路径
// console.log(__filename)

let str = 'E:\\前端开发\\project4\\code\\first\\nodeStudy\\day02\\01_path.js'

// console.log(path.parse(str))

// basename

console.log(path.basename(str))

console.log(path.dirname(str))

console.log(path.extname(str))