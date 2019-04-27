var http=require("http")
var url=require("url")
http.createServer(function(req,res){
    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"})
    if(req.url!="/favicon.ico"){
        //第一个参数是地址，第二个参数为true表示把get传值解析成对象
        var result=url.parse(req.url,true)
        var username=result.query.username
        var age=result.query.age
        console.log(username,age)
    }
    res.write('你好,node.js')
    res.end()
}).listen(3000,function(){
    console.log("服务器运行起来了")
})