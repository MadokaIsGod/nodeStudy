const fs = require('fs')

const files = fs.readdirSync('./07_模块化')

files.forEach(ele => {
  console.log(ele)
  let [name, common] = ele.split('.')
  name = '0' + name
  let newName = name + '.' + common
  fs.renameSync(`./07_模块化/${ele}`, `./07_模块化/${newName}`)
})

