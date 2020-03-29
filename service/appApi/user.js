const Router = require('koa-router');
const mongoose = require('mongoose')

let router = new Router();

router.get('/listTitle', async(ctx) => {
    const listSchema = mongoose.model('content');
    await listSchema.find().then((result) => {
        console.log('result', result)
        ctx.body = {code: 200, data: result}
    }).catch(err => {
        ctx.body = {code: 500, msg: err}
    })
})

module.exports = router