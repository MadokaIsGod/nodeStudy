1.HTTP报文
  (1)请求行
    a.请求方法 GET POST PUT/PATCH DELETE
    b.URL 定位资源:
      1.协议名
      2.主机名
      3.路径
      4.查询字符串
    c.HTTP版本号
  (2)请求头
  (3)请求体
2.IP
  (1)127.0.0.1~127.255.255.254 本地回环IP地址
  (2)192.168.0.0~192.168.255.255
     172.16.0.0~172.31.255.255
     10.0.0.0~10.255.255.255
     局域网IP
  (3)广域网IP
3.端口:应用程序的数字标识（0~65535）
      实现不同主机应用程序之间的通信
4.HTTP服务注意事项
  (1)命令行ctrl + c 停止服务
  (2)当服务启动后，更新代码必须重启服务才能生效
  (3)响应内容中文乱码解决方式
    response.setHeader('content-type','text/html;charset=utf-8')
  (4)端口号被占用
    a.关闭当前正在运行监听端口的服务。
    b.修改其他端口号
  (5)HTTP协议默认端口是80，HTTPS协议默认端口是443,HTTP服务开发常用端口有3000,8080,8090,9000等
5.HTTP请求报文获取
  (1)获取请求方法
  console.log(request.method)
  (2)获取请求的URL
  console.log(request.url) //只包含url中的路径和查询字符串
  (3)获取http协议的版本号
  console.log(request.httpVersion)
  (4)获取http的请求头
  console.log(request.headers.host)
6.网页资源加载基本过程
7.静态资源和动态资源
  (1)静态资源是指内容长时间不发生改变的资源，例如图片，视频，css文件，js文件，Html文件等
  (2)动态资源是指内容经常更新的资源，例如百度首页，网易首页，京东搜索列表页面等
8.网站根目录或静态资源目录
  HTTP服务在哪个文件夹中寻找静态资源，那个文件夹就是静态资源目录，也称之为网站根目录
9.URL分为绝对路径和相对路径
  (1)绝对路径:
    a.https://www.baidu.com
    b.省略协议 //www.baidu.com
    c.只保留路径
  (2)相对路径
    a. ./... 当前层级
    b. ../.... 上一层级
10.设置资源类型/媒体类型 mime
  (1)结构 [type]/[subType] 例如text/html
  