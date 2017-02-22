/**
 * Created by kwonghinho on 2017/2/21.
 */
var https = require('https');
var querystring = require('querystring');
var fs = require('fs');
var data = {
    appid: 'wx782c26e4c19acffb',
    redirect_uri: 'https://wx.qq.com/Fcgi-bin/Fmmwebwx-bin/Fwebwxnewloginpage',
    fun: 'new',
    lang: 'zh_CN',
    _: Math.round(new Date().getTime() / 1000)
};
//生成二维码
https.get('https://login.wx.qq.com/jslogin?appid=wx782c26e4c19acffb&redirect_uri=https%3A%2F%2Fwx.qq.com%2Fcgi-bin%2Fmmwebwx-bin%2Fwebwxnewloginpage&fun=new&lang=zh_CN&_=1487644445265', (res)=> {
    console.log('statusCode:', res.statusCode);
    console.log('headers:', res.headers);
    var img = '';
    var content = new Buffer(0);//累计合并读取片段
    res.on('data', (d)=> {
        //合并Buffer
        content = Buffer.concat([content, d]);
        console.log(content.toString('base64'));
    });
    res.on('end', (res)=> {
        console.log(img);
        // 生成图片3(把base64位图片编码写入到图片文件)
        fs.writeFile('../src/assets/qrcode.jpg', content, function (err) {
            if (err) {
                console.log(err)
            }
        });
    })
}).on('error', (error)=> {
    console.log(error);
})
