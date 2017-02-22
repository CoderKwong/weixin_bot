/**
 * Created by kwonghinho on 2017/2/23.
 */
import {getUrls,CODES,SP_ACCOUNTS,PUSH_HOST_LIST} from './wx_conf';//接口配置;
import fs from 'fs';//file write
import url from 'url';//解析url,生成URL等
import qrcode from 'qrcode-terminal';//terminal中打印二维码
import path from 'path';
import http from 'http';
import https from 'https';
import url from 'url';
import events from 'events';//事件
qrcode.generate('http://www.baidu.com',function (qrcode) {
    console.log(qrcode);
})