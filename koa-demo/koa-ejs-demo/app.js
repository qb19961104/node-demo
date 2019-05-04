//ejs模板引擎的使用
/* 
    1.npm install koa-views
    2.npm install ejs
    3.const views=require('koa-views')
      app.use(views(_dirname,{extension:'ejs'}))
    4.await ctx.render('index.html')
*/

 
//需要在每一个模块都渲染一个公共的数据 如姓名信息
/*
    公共的数据放在这里，这样在模板的任何地方都可以使用
    ctx.state={  放在中间件
        session:this.session,
        title:'app'
    }
*/
const Koa=require('koa')
const router=require('koa-router')()
const views=require('koa-views')
const app=new Koa()
//配置模板引擎中间件  --第三方中间件
//app.use(views('views'),{map:{html:'ejs'}})) 这样也可以  但模板后缀名为html
app.use(views('views',{
    extension:'ejs'   //应用ejs模板引擎
}))

//写一个中间件配置公共的信息
app.use(async(ctx,next)=>{
    ctx.state.username='阿乔'
    await next()
})
router.get('/',async(ctx)=>{
    var title='你好，ejs'
    await ctx.render('index',{
        title:title
    })
})
router.get('/news',async(ctx)=>{
    let msg=['111','222','333']
    let content='<h2>这是后台返回的标签</h2>'
    let num=5
    await ctx.render('news',{
        msg:msg,
        content:content,
        num:num
    })
})
app.use(router.routes())
app.use(router.allowedMethods())
app.listen(3000)