//引入koa和koa-rouer模块
const Koa=require('koa')
const Router=require('koa-router')
//实例化koa和router
const app=new Koa()
const router=new Router()
//配置路由
//ctx 上下文 context 包含了req,res等信息
router.get('/',async(ctx)=>{
    ctx.body='首页' //返回数据  相当于原生的 res.writeHead()  res.end()
}).get('/news',async(ctx)=>{
    ctx.body='这是新闻页面'
})
//启动路由
app
    .use(router.routes()) //启动路由
    .use(router.allowedMethods()) //可以设置也可以不设置，建议配置
    /*
        作用:这是官方文档的推荐用法，我们可以看到router.allowedMethods()
        用在路由匹配router.routes()之后，所以在当所有路由中间件
        最后调用，此时根据ctx.status设置response响应头
    */
app.listen(3000)