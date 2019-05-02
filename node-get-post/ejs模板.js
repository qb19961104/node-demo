//引入http模块
var http=require('http')
//引入egs模块
var ejs=require('ejs')
//引入url模块
var url=require('url')
http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"})
    var pathname=url.parse(req.url).pathname
    if(pathname=='/login'){
        var data='你好我是后台数据'
        var list=[
            '111',
            '222',
            '333'
        ]
        ejs.renderFile('views/index.ejs',{
            msg:data,
            list:list
        },(err,data)=>{
            res.end(data)
        })
    }else if(pathname=='/register'){
        var h='<p>我是标签</p>'
        ejs.renderFile('views/register.ejs',{
            h:h
        },(err,data)=>{
            res.end(data)
        })
    }
}).listen(8001)