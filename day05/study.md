1.路由
  (1)一个路由的组成有请求方法，路径和构造函数组成。
    express中提供了一系列方法,可以方便的使用路由.
    app.<method>(path, callback)
2.中间件
  (1)中间件本质是一个回调函数
  (2)中间件函数可以像路由一样访问请求对象（request），响应对象（response）
  (3)中间件可以封装公共函数，简化代码
  (4)中间件类型：
    a.全局中间件
      每一个请求到达服务端之后都会执行全局中间件函数
    b.路由中间件
    c.静态资源中间件
      1).index.html文件为默认打开的资源
      2).如果静态资源与路由规则同时匹配，谁先匹配谁就响应
      3).路由响应动态资源，静态资源中间件响应静态资源