var fs=require('fs')
var data='我是从数据库获取的数据，请把我保存起来'
//创建一个可以写入的流，写入到文件input.txt中
var writeStream=fs.createWriteStream('input.txt')
writeStream.write(data,'UTF8')
//标记文件末尾
writeStream.end()
//处理流事件--->finish事件
writeStream.on('finish',()=>{
    console.log('写入成功')
})
//处理流事件--->error事件
writeStream.on('error',(error)=>{
    console.log('写入失败')
})