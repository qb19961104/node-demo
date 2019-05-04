/*
    1.cookie保存在浏览器客户端
    2.可以让我们在同一个浏览器访问同一个域名的时候共享数据
*/
/*
    1.保存用户信息
    2.浏览器历史记录
    3.猜你喜欢功能
    4.10天免登陆
    5.多个页面之间的数据传递
    6.cookie实现购物车功能
*/
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
    ctx.cookies.set('username','zhangsan',{
        maxAge:60*1000*60,
        erpires:'2019-05-08', //设置为某一具体时间失效
        path:'/news', //配置可以访问的路径
        domain:'',  //正常情况下不要设置，默认当前域下面的所有页面都可以访问
        httpOnly:true,  //默认为true 如果为true 这个cookie只能服务器端可以访问，false代表客户端(JS) 服务器端都可以访问
        secure:false,   //默认为false 这是为true表示只有https可以访问
    })
    await ctx.render('index01')
})
router.get('/news',async (ctx)=>{
    let username=ctx.cookies.get('username')
    console.log(username)
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