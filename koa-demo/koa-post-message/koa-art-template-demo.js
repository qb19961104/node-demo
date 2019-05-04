const Koa=require('koa'),
      router=require('koa-router')(),
      render=require('koa-art-template'),
      path=require('path')
const app=new Koa()
//配置art-template模板引擎
render(app,{
    root:path.join(__dirname, 'views'),
    extname:'.html',
    debug:process.env.NODE_ENV !=='production'   //是否开启调试模式
})
router.get('/',async (ctx)=>{
    await ctx.render('index01')
})
router.get('/news',async (ctx)=>{
    let list={
        name:'张三',
        num:30,
        h:'<h1>模板引擎<h1/>',
        data:['111','222','333']
    }
    await ctx.render('news',{
        list:list
    })
})
app.use(router.routes())
app.use(router.allowedMethods())
app.listen(3000)