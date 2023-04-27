1.暴露数据注意事项
  (1)module.exports可以暴露任意数据
  (2)不能使用exports=value的形式暴露数据，模块内部module与exports的隐式关系 exports = module.exports = {}
  (3)如果导入的路径是个文件夹，则会首先检测该文件夹下 package.json 文件中 main 属性对应的文件,如果存在则导入，反之如果文件不存在会报错。如果 main 属性不存在，或者 package,json 不存在，则会尝试导入文件夹下的 index.js 和 index.json，如果还是没找到，就会报错
  (4)require导入自定义模块的基本流程
    a.将相对路径转为绝对路径,定位目标文件
    b.缓存检测
    c.读取目标文件代码
    d.包裹一个函数并执行（自执行函数）。通过arguments.callee.toString()查看自执行函数
    e.缓存模块的值
    f.返回module.exports的值