const mongoose = require('mongoose');
const dbUrl = 'mongodb://localhost/reactBlog';
const glob = require('glob');
const { resolve } = require('path');

//加载模型js
exports.initSchema = () => {
    glob.sync(resolve(__dirname, './schema', '**/*.js')).forEach(require);
}

exports.connect = () => {
    // 连接数据库
    mongoose.connect(dbUrl, { useNewUrlParser: true , useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false});
    let maxConnectTime = 0; 
  
    return new Promise((resolve, reject) => {
      //添加数据库监听事件
      mongoose.connection.on('disconnected', (err) => {
        console.log('*******数据库断开');
        if (maxConnectTime <= 3) {
            maxConnectTime++;
            mongoose.connect(dbUrl);
        } else {
            reject(err);
            throw new Error('数据库出现问题，程序无法处理，请手动处理。。。。');
        }
        
      });
  
      mongoose.connection.on('error', () => {
        console.log('*******数据库错误');
        mongoose.connect(dbUrl);
      });
  
      // 连接打开时的事件
      mongoose.connection.on('open', () => {
          resolve();
        console.log('*******数据库连接成功');
      });
    });
  
  }