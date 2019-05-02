var http=require('http')
//引入fs模块
var fs=require('fs')
//引入path模块
var path=require('path') /*node.js自带模块 */
//引入自定义模块  获取后缀名方法
var mimeModel=require('./model/getmimefromfile.js')
//引入url模块
var url=require('url')
//引入event模块
var events=require('events')
var EventEmitter=new events.EventEmitter()
http.createServer(function(req,res){
    var pathname=url.parse(req.url).pathname;
    if(pathname=='/'){
        pathname='/index.html'
    }
    //获取文件的后缀名
    var extname=path.extname(pathname)
    if(pathname!='/favicon.ico'){ /*过滤这个请求*/ 
        fs.readFile('static/阶段项目练习/'+pathname,(err,data)=>{
            if(err){ //没有这个文件
                fs.readFile('static/阶段项目练习/404.html',(err,data404)=>{
                    res.writeHead(404,{"Content-Type":"text/html;charset=utf-8"})
                    res.write(data404)
                    res.end()/*返回响应 */
                })
            }else{ 
                //callback方法
                var mime=mimeModel.getMime(fs,extname,function(mime){
                    res.writeHead(200,{"Content-Type":""+mime+";charset=utf-8"})
                    res.write(data)
                    res.end()
                })

                //events方法
                    // mimeModel.getMime(fs,EventEmitter,extname)//调用获取数据的方法
                    //     EventEmitter.on('to-mime',function(mime){
                    //     res.writeHead(200,{"Content-Type":""+mime+";charset=utf-8"})
                    //     res.end(data)/*返回响应 */
                    // })
            }
        })
    }
}).listen(8001)
