const Koa=require('koa')
const router=require('koa-router')()
const app=new Koa()
router.get('/',async(ctx)=>{
    ctx.body='首页' //返回数据  相当于原生的 res.writeHead()  res.end()
})
router.get('/news',async(ctx)=>{
    ctx.body='这是新闻页面'
})
//动态传值
router.get('/newscontent/:aid',async(ctx)=>{
    //获取动态路由的传值
    console.log(ctx.params)
    ctx.body='新闻详情'
})
//启动路由
app.use(router.routes()) //启动路由
app.use(router.allowedMethods()) //可以设置也可以不设置，建议配置
app.listen(3000)