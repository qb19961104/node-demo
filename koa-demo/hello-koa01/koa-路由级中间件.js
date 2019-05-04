//引入koa和koa-rouer模块
const Koa=require('koa')
const Router=require('koa-router')
//实例化koa和router
const app=new Koa()
const router=new Router()

//koa中间件
//匹配任何路由，如果不写next()这个路由被匹配了就不会向下匹配

router.get('/',async(ctx)=>{
    ctx.body='首页' //返回数据  相当于原生的 res.writeHead()  res.end()
})
router.get('/news',async(ctx,next)=>{
    console.log('这是新闻页')
    await next()
})
router.get('/news',async(ctx)=>{
    ctx.body='这是新闻页面'
})
router.get('/login',async(ctx)=>{
    ctx.body='登录页'
})
router.get('/register',async(ctx)=>{
    ctx.body='注册页'
})
//启动路由
app.use(router.routes()) //启动路由
app.use(router.allowedMethods()) //可以设置也可以不设置，建议配置
app.listen(3000)