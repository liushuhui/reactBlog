const mongoose = require('mongoose');
const listSchema = mongoose.Schema;

const listschema = new listSchema({
    ID: {unique:true,type:String},
    title: String,
    introduce: String,
    type: String,
    content: Array,
}, {collections: 'content'})

mongoose.model('content', listschema)