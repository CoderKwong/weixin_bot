/**
 * Created by kwonghinho on 2017/2/23.
 */
var conf = require('./wx_conf');//接口配置;
var qrcode = require('qrcode-terminal');//terminal中打印二维码
var fs = require('fs');//file write
var path = require('path');//路径
var http = require('http');
var https = require('https');
var url = require('url');//解析url,生成URL等
var events = require('events');//事件
var {Wechaty, Room} =require('wechaty');
const config = require('./dbConfig.js');
const mysql = require('mysql');
const pool = mysql.createPool(config.config);

const bot = Wechaty.instance()

bot.on('scan', (url, code)=> {
    let loginUrl = url.replace('qrcode', 'l')
    qrcode.generate(loginUrl, {small: true}, qrcode=>console.log(qrcode));
    // console.log(url)
  })
  .on('login', user=> {
    console.log(user+'login');
  })
  .on('message',msg=>{
    //文字
    if(msg.obj.type==1){
      // console.log(msg.obj.digest);
      //插入sql
      var wx_id = msg.obj.from;
      var getDate = msg.obj.date;
      var msg_id = msg.obj.id;
      var wx_name = '',room_id = '',room_name = '',message = '';
      var msgObj = msg.obj.digest;
      var msgRawObj = msg.rawObj.Content;
      if(msg.obj.digest.split(':').length>1){
        //群组
        wx_name = msgObj.split(':')[0];
        message = msgRawObj.substring(msgRawObj.indexOf('>')+1);
      }else{
        //私聊
        wx_name = getName(wx_id);
        message = msgRawObj;
      }

      if(msg.obj.room === undefined){
        //私聊
        room_id='';
        room_name='';
      }else{
        //群组
        room_id = msg.obj.room;
        room_name = getRoomName(room_id);
      }
      //todo 需要整合
      var sql = 'insert into message(wx_id,wx_name,room_id,room_name,message,getDate,msg_id) values (\''+wx_id+'\',\''+wx_name+'\',\''+room_id+
        '\',\''+room_name+'\',\''+message+'\',\''+getDate+'\',\''+msg_id+'\')';
      console.log(sql);
      mysqlQuery(sql).then(function (data) {
        if(data!=undefined){
          console.log('记录成功');
        }
      })
      // console.log(sql);
    }else if(msg.obj.type==3){
      console.log('这是图片:');
      saveMediaFile(msg);
    }
  })
  .init()

//保存媒体文件
function saveMediaFile(message) {
  const filename = message.filename();
  console.log('本地文件名字:'+filename);
  const fileStream = fs.createWriteStream('/img'+filename);
  message.readyStream().then(stream =>{
    stream.pipe(fileStream)
      .on('close',()=>{
        console.log('finish readystream()');
      })
      .catch(e => console.log('stram error'+e))
  })
}
//写入文件
function saveRawobj(o) {
  console.log(o);
  fs.writeFileSync('rawObj.log',JSON.stringify(o,null,' '+'\n\n\n',{flag:'a'}))
}

//封装执行方法
function mysqlQuery(sql) {
  var b = new Promise(function (resolve, reject) {
    pool.getConnection(function (err, con) {
      if (!con || err) {
        console.log(err);
      } else {
        con.query(sql, function (err, result) {
          con.release();
          resolve(result);
        })
      }
    })
  })
  return b;
}

//通过用户ID获取用户名
function getName(wxId) {
  //todo
  return 'kwong';
}

//通过组ID获取组名字
function getRoomName(roomId) {
  return 'new room';
}
