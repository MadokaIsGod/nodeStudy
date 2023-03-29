// 导入fs对象
const fs = require('fs')

// 创建写入对象
const ws = fs.createWriteStream('./观书有感.txt')

ws.write('1')

ws.close()