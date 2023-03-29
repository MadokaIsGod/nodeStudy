1.命令的结构
  命令名称 + 参数
2.常用命令
  dir：查看目录下所有内容
  cd：切换工作目录
  d: c: 切换盘
3.nodejs中不能使用DOM和BOM的API
4.global 顶级对象 gloabalThis
5.Buffer
  (1)Buffer大小固定且无法调整
  (2)Buffer性能较好，可以直接对计算机内存进行操作
  (3)每个元素的大小为1字节（byte）
  (4)创建 alloc allocUnsafe from'
6.计算机的基本组成
  (1) CPU
  (2) 内存 读写速度较快，断电丢失数据
  (3) 硬盘 读写速度较慢，断电不丢失数据
7.计算机程序运行的基本流程
  (1)操作系统：Windows Linux MacOs
8.进程和线程
9.文件
  (1)写入 writeFile writeFileSync
  (2)追加 appendFile appendFileSync
  (3)流式
    a.创建写入对象 createWriteStream
    b.写入 write
    c.关闭通道 close
    e.创建读取对象 createReadStream
  (4)文件写入应用场景: 当需要持久化保存数据的时候，应该想到文件写入
    a.下载文件
    b.安装软件
    c.保存程序日志
    d.编辑器保存文件
    e.视频录制
  (5)文件读取应用场景:
    a.电脑开机
    b.程序运行
    c.编辑器打开文件
    d.查看图片
    e.播放视频
    f.播放音乐
    g.Git查看日志
    h.上传文件
    i.查看聊天记录
  (6)重命名和移动 rename
  (7)文件删除 unlink rm
10.文件夹
  (1)创建 mkdir
  (2)读取 readdir
  (3)删除 rmdir rm