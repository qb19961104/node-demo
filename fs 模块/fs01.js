var fs=require('fs')
//1.fs.stat 检测是文件还是目录 两个参数 第一个为文件名 第二个为回调函数
fs.stat('index.txt',(error,stats)=>{
    if(error){
        console.log(error);
    }else{
        console.log(stats);
        console.log('文件:${stats.isFile()}');
        console.log('目录:${stats.isDirectory()}')
    }
})
//2.fs.mkdir 创建目录
fs.mkdir('test01',(error)=>{
    if(error){
        console.log(error)
        console.log('创建文件失败')
    }else{
        console.log('创建文件成功')
    }
})
//3.fs.writeFile 创建写入文件
fs.writeFile('test.txt','第一次写入文件/n',(error)=>{
    if(error){
        console.log(error)
        console.log('文件写入失败')
    }else{
        console.log('成功写入文件')
    }
})
//4.fs.appendFile追加文件
fs.appendFile('test.txt','追加写入文件/n',(error)=>{
    if(error){
        console.log(error)
        console.log('文件追加失败')
    }else{
        console.log('追加文件成功')
    }
})
//5.fs.readFile 读取文件
fs.readFile('test.txt',(error,data)=>{
    if(error){
        console.log(error);
        console.log('读取文件失败')
    }else{
        console.log(data.toString())
    }
})
//6.fs.readdir 读取目录
fs.readdir('html',(error,files)=>{
    if(error){
        console.log(error)
        console.log('读取目录失败')
    }else{
        console.log(files)
        console.log('读取目录成功')
    }
})
//7.fs.rename 重命名  或者剪切
fs.rename('test04.txt','html/test03.txt',(error)=>{
    if(error){
        console.log(error)
        console.log('重命名失败')
    }else{
        console.log('重命名成功')
    }
})
//8.fs.rmdir 删除目录
fs.rmdir('delete01',(error)=>{
    if(error){
        console.log(error)
        console.log('删除目录失败')
    }else{
        console.log('删除目录成功')
    }
})
//9.fs.unlink 删除文件
fs.unlink('delete',(error)=>{
    if(error){
        console.log(error)
        console.log('删除文件失败')
    }else{
        console.log('删除文件成功')
    }
})
