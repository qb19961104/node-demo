//1.CommonJS是模块化的额标准，node是模块化的实现
//2.node模块分为两类:核心模块和文件模块
var http=require("http")
var commonjs01=require('./commonjs01.js')
var app=http.createServer(function(req,res){
    res.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"})
    res.write("你好,node.js")
    console.log(commonjs01.str)
    res.end()
})
app.listen(5000,function(){
    console.log("服务器运行起来了")
})