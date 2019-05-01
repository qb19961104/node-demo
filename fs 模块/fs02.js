var fs=require('fs')
var readStream=fs.createReadStream('test.txt')
var str=''; /*保存数据*/
var count=0; /*次数*/
readStream.on('data',function(chunk){
    str+=chunk;
    count++;
})
//读取完成
readStream.on('end',(chunk)=>{
    console.log(str)
    console.log('读取成功')
    console.log(count)
})
//读取失败
readStream.on('error',(chunk)=>{
    console.log(error)
    console.log('读取失败')
})