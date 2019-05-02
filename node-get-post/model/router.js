//引入fs模块
var fs=require('fs')
//引入path模块
var path=require('path')
//引入url模块
var url=require('url')
//获取w文件类型私有方法
function getMime(extname,callback){
    fs.readFile('./mime.json',(err,data)=>{
        if(err){
            console.log('mime.json文件不存在')
            return false
        }
        var Mimes=JSON.parse(data.toString())
        var result=Mimes[extname]||'text/html'
        callback(result)
    })
}
exports.static=function(req,res,staticpath){
    //获取url的值
    var pathname=url.parse(req.url).pathname
    if(pathname=='/'){
        pathname='/index.html'
    }
    //获取文件的后缀名
    var extname=path.extname(pathname)
    if(pathname!='/favicon.ico'){ //过滤无效请求
        fs.readFile(staticpath+'/'+pathname,(err,data)=>{
            if(err){
                fs.readFile(staticpath+'/404.html',(err,data404)=>{
                    if(err){
                        res.writeHead(404,{"Content-Type":"text/html;charset=utf-8"})
                        res.end(data404)/*返回响应 */     
                     }
                })
            }else{
                getMime(extname,function(mime){
                    res.writeHead(200,{"Content-Type":""+mime+";charset=utf-8"})
                    res.end(data)/*返回响应 */ 
                })
            }
        })
    }
}