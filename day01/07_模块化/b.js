console.log('b文件执行了')
// 在node中，没有全局作用域，只有模块作用域
// 外部访问不到内部， 内部也访问不到外部

exports.foo = 'foo'

exports.add = (x, y) => {
  return x + y
}