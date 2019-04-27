var http=require("http")
//http.createSever()方法创建服务器
//request和response参数接收和响应数据
http.createServer(function(request,response){
    //发送HTTP头部
    //HTTP状态值为 200：ok
    //设置HTTP头部，状态码是200，威廉类型为html，字符集是utf8
    response.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"});
    //发送响应数据
    //response.wtite("你好 node.js"); 可以多次write
    //response.end();结束响应
    response.end("哈哈哈，我是第一个node.js demo")
}).listen(8888);
console.log("Sever running at http://127.0.0.1:8888/");