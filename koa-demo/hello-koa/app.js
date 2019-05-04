var koa=require('koa')
var app=new koa()
//配置路由
//中间件
app.use(async(ctx)=>{
    ctx.body='你好 koa'
})
app.listen(3000)