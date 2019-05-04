const Koa=require('koa'),
    router=require('koa-router')(),
    views=require('koa-views'),
    //引入bodyparser
    bodyParser=require('koa-bodyparser'),
    //引用静态资源中间件 
    static=require('koa-static')
const app=new Koa()
//配置ejs模板引擎中间件  --第三方中间件
//app.use(views('views'),{map:{html:'ejs'}})) 这样也可以  但模板后缀名为html
app.use(views('views',{
    extension:'ejs'   //应用ejs模板引擎
}))
//配置静态资源中间件 可配置多个
app.use(static('./static'))

app.use(bodyParser())
router.get('/',async(ctx)=>{
    await ctx.render('index')
})

//接收post接收的数据
router.post('/doAdd',async(ctx)=>{
    console.log(ctx.request.body)
    ctx.body=ctx.request.body  //获取表单提交的数据
})


app.use(router.routes())
app.use(router.allowedMethods())
app.listen(3000)