//引入http模块
var http=require('http')
//引入url模块
var url=require('url')
http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"})
    var pathname=url.parse(req.url).pathname
    if(pathname=='/login'){
        res.end('登录页面')
    }else if(pathname=='/admin'){
        res.end('后台管理页面')
    }else if(pathname=='/register'){
        res.end('注册页面')
    }else if(pathname=='/order'){
        res.end('订单页面')
    }else{
        res.end('我是首页')
    }
}).listen(8000)