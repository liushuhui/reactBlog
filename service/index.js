const Koa = require('koa');
const app = new Koa();
const {connect, initSchema} = require('./database/init.js');
const mongoose = require('mongoose');
const bodyParser = require('koa-bodyparser')
const cors = require('koa2-cors')
const Router = require('koa-router')

let user = require('./appApi/user.js')
//装载所有子路由
let router = new Router() 
router.use('/home', user.routes())

//加载路由中间件
app.use(router.routes());
app.use(router.allowedMethods())

// 链接数据库
(async() => {
    await connect();
     initSchema();
 })()


app.use(async(ctx) => {
    ctx.body = `<h1>hello world!</h1>`
})

app.listen(3100, () => {
    console.log('[Server] starting at port 3100')
})