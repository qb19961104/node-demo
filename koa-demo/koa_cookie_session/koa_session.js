/*
    session是另一种记录客户状态的机制,不同的是cookie保存在客户端浏览器中,而session保存在服务器中
    session工作流程
       当浏览器访问服务器并发送第一次请求时,服务器端会创建一个session对象,生成一个类似于key/value的键值对，
       然后将key(cookie)返回到浏览器(客户端),浏览器下次访问时,携带key(cookie),找到对应的session(value).
       客户的信息都保存在session中
*/

const Koa=require('koa'),
      router=require('koa-router')(),
      render=require('koa-art-template'),
      path=require('path'),
      session=require('koa-session')

const app=new Koa()
//配置art-template模板引擎
render(app,{
    root:path.join(__dirname, 'views'),
    extname:'.html',
    debug:process.env.NODE_ENV !=='production'   //是否开启调试模式
})

//配置session中间件
app.keys=['some secret hurr']  //cookie的签名
const CONFIG={
    key:'koa:sess',  //默认 不用管
    maxAge:86400000,  //cookie的过期时间
    autoCommit:true,  
    overwrite:true,  //默认 
    httpOnly:true,  //默认为true 如果为true 这个cookie只能服务器端可以访问，false代表客户端(JS) 服务器端都可以访问
    signed:true,   //表示签名 默认
    rolling:true,  //每次请求是强行设置cookie，这将重置cookie过期时间(默认false)
    renew:false   //快过期时设置cookie  需要修改
}
app.use(session(CONFIG,app))


router.get('/',async (ctx)=>{
    //获取session
    console.log(ctx.session.username)
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
router.get('/login',async (ctx)=>{
    //设置session
    ctx.session.username='张三'
    ctx.body='登陆成功'
})
app.use(router.routes())
app.use(router.allowedMethods())
app.listen(3000)