var fs=require('fs')
//创建一个可读流
var readerStream=fs.createReadStream('input.txt')
//创建一个写入流
var writeStream=fs.createWriteStream('index.txt')
//管道读写操作
//读取input.txt文件内容 将其写入到index.txt中
readerStream.pipe(writeStream)
console.log('程序执行成功')
