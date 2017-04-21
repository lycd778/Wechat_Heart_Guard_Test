/**
 * Created by Administrator on 2017/4/1.
 */
var express = require('express');
var router = express.Router();
var http = require('http');
var fs = require('fs');
var request = require('request');
var middleware = require('wechat-pay').middleware;
var mysql = require('mysql');

//连接数据库
var db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'weixin_ydka',
    port: 3306
});
db.connect();

var initConfig = {
    partnerKey: 'yidekangan1234567891234567891234',
    appId: 'wxfb3801993da030d8',
    mchId: '1388932902',
    notifyUrl: "http://pg-xiao778.vicp.io/afterPay/",
    pfx: fs.readFileSync('config/apiclient_cert.p12')

};
router.post('/', middleware(initConfig).getNotify().done(function(message, req, res, next)  {
    console.log("微信支付返回的数据:"+JSON.stringify(message));//微信返回的数据
    if(message.return_code == 'SUCCESS' && message.result_code == 'SUCCESS'){

        uSql = 'UPDATE weixinuser SET isPay = 1  WHERE openid = "oPPfSww-UoP3AKLQ43-d07CmyrVU"';
        db.query(uSql,function (err, result) {
            if (err) console.log(err);
            console.log("updatePay: "+JSON.stringify(result));
        });
        var d = new Date();
        d.setMonth(d.getMonth()+3);
        uSql = 'UPDATE weixinuser SET dueDate = "'+d.getTime()+'"  WHERE openid = "oPPfSww-UoP3AKLQ43-d07CmyrVU"';
        db.query(uSql,function (err, result) {
            if (err) console.log(err);
            console.log("updatePay: "+JSON.stringify(result));
        });
    }

}));
module.exports = router;