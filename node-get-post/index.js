//引入http模块
var http=require('http')
//引入router模块
var router=require('./model/router.js')
http.createServer((req,res)=>{
    router.static(req,res,'static')
}).listen(8000)