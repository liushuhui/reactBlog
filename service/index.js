const Koa = require('koa');
const app = new Koa();
const {connect, initSchema} = require('./database/init.js');
const mongoose = require('mongoose');
const Router = require('koa-router');
// const bodyParser = require('koa-bodyparser');
// const cors = require('koa2-cors');

// app.use(bodyParser())
// app.use(cors())

let user = require('./appApi/user.js');

//装载所有子路由
let router = new Router();
router.use('/home',user.routes());

//加载路由中间件

app.use(router.routes());
app.use(router.allowedMethods());

(async() => {
   await connect();
    initSchema();
})()

app.use(async(ctx) => {
    ctx.body = 'hello world!';
});

app.listen(3100, () => {
   console.log( '[Server] starting at port 3100');
});