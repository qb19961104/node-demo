exports.getMime=function(fs,extname,callback){
    fs.readFile('./mime.json',(err,data)=>{
        if(err){
            console.log('mime.json文件不存在')
            return false
        }
        var Mimes=JSON.parse(data.toString())
        var result=Mimes[extname]||'text/html'
        callback(result)
    })
   //由于是异步的 不能成功获取 改为同步
   /*
        1.var data=fs.readFile('./mime.json')
          var Mimes=JSON.parse(data.toString())
          return Mimes[extname]||'text/html'
        2.利用callback
        exports.getMime=function(fs,extname,callback){
        fs.readFile('./mime.json',(err,data)=>{
            if(err){
                console.log('mime.json文件不存在')
                return false
            }
            var Mimes=JSON.parse(data.toString())
            var result=Mimes[extname]||'text/html'
            callback(result)
        })
        3.event
        exports.getMime=function(fs,EventEmitter,extname){
        fs.readFile('./mime.json',(err,data)=>{
            if(err){
                console.log('mime.json文件不存在')
                return false
            }
            var Mimes=JSON.parse(data.toString())
            var result=Mimes[extname]||'text/html'
            EventEmitter.emit('to-mime',result)
        })
    */
}