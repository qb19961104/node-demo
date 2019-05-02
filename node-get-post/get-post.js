//引入http模块
var http=require('http')
//引入egs模块
var ejs=require('ejs')
//引入url模块
var url=require('url')
//引入fs模块
var fs=require('fs')
http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"})
    var method=req.method.toLowerCase()
    var pathname=url.parse(req.url,true).pathname
    if(pathname=='/login'){//显示登录页面
        ejs.renderFile('views/from.ejs',{

        },(err,data)=>{
            res.end(data)
        })       
    }else if(pathname=='/dologin'&&method=='get'){//执行登录的操作
        //get传值
        var username=url.parse(req.url,true).query.username
        var password=url.parse(req.url,true).query.password
        console.log(username,password)
        res.end('dologin')
    }else if(pathname=='/dologin'&&method=='post'){
        //post传值
        var postStr=''
        req.on('data',(chunk)=>{
            postStr+=chunk
        })
        req.on('end',(err,chunk)=>{
            //post传值的账号密码写入到login.txt文件
            fs.appendFile('login.txt',postStr+'\n',(err)=>{
                if(err){
                    console.log('写入失败')
                    return;
                }else{
                    console.log('写入成功')
                }
            })
            res.end("<script>alert('登录成功');history.back();</script>")
        })
    }
    else{
        ejs.renderFile('views/index.ejs',{

        },(err,data)=>{
            if(err){
                console.log(err)
            }
            res.end(data)
        })
    }
}).listen(8001)