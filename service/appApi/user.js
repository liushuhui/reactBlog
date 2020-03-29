const Router = require('koa-router');
const mongoose = require('mongoose')

let router = new Router();

router.get('/listTitle', async(ctx) => {
    console.log(1111)
    const listSchema = mongoose.model('content');
    console.log('listSchema', listSchema)
    await listSchema.find().then((result) => {
        console.log('result', result)
        ctx.body = {code: 200, data: result}
    }).catch(err => {
        ctx.body = {code: 500, msg: err}
    })
})

module.exports = router