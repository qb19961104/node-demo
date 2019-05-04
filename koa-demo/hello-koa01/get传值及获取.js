const Koa=require('koa')
const router=require('koa-router')()
const app=new Koa()
router.get('/',async(ctx)=>{
    ctx.body='首页' //返回数据  相当于原生的 res.writeHead()  res.end()
})
router.get('/news',async(ctx)=>{
    ctx.body='这是新闻页面'
})
//获取get传值
router.get('/newscontent',async(ctx)=>{
    //1.从ctx中读取get传值    ****推荐****
    console.log(ctx.query) //获取的是对象
    console.log(ctx.querystring) //获取的是字符串
    //2.ctx.request里面获取get传值
    console.log(ctx.request)
    ctx.body='新闻详情'
})
//启动路由
app.use(router.routes()) //启动路由
app.use(router.allowedMethods()) //可以设置也可以不设置，建议配置
app.listen(3000)
