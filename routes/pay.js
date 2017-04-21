/**
 * Created by lingxiao-Ching on 2017/3/17.
 */
var express = require('express');
var router = express.Router();
var fs = require('fs');
var Payment = require('wechat-pay').Payment;
var OAuth = require('wechat-oauth');
var request = require('request');
var mysql = require('mysql');
//微信
var config = {
    token: 'xiao_weixin_test',
    appid: 'wxefdad35532e3e77c',
    appsecret: '6cbeefd9d76f33c40a56807324cbf6d7',
    encodingAESKey: ''
};

//连接数据库
var db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'weixin_ydka',
    port: 3306
});
db.connect();
//初始化wechat-oauth模块
var client = new OAuth(config.appid, config.appsecret);

//初始化wechat-pay模块
var initConfig = {
    partnerKey: 'yidekangan1234567891234567891234',
    appId: 'wxfb3801993da030d8',
    mchId: '1388932902',
    notifyUrl: "http://pg-xiao778.vicp.io/afterPay/",
    pfx: fs.readFileSync('config/apiclient_cert.p12')

};
var payment = new Payment(initConfig);

/**
 * 支付
 **/
router.use('/', function (req, res, next) {
    var code = req.query.code;
    var openid = '\'oPPfSww-UoP3AKLQ43-d07CmyrVU\'';
    var url = "http://heathcoudapi.xzkf365.com/api/qq/Reportslist?openid=" + openid;
    console.log(url);
    request(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var sql = 'SELECT * FROM weixinuser WHERE openid = "oPPfSww-UoP3AKLQ43-d07CmyrVU"';
            db.query(sql, function (err, result) {
                if (err) {
                    return callback(err);
                }
                console.log("weixinuser: " + JSON.stringify(result[0]));
                if(result[0].isPay===0){
                    wechatPay(client,code,res);
                } else {
                    var d = new Date();
                    var sql = 'SELECT * FROM weixinuser WHERE openid = "oPPfSww-UoP3AKLQ43-d07CmyrVU"';
                    db.query(sql, function (err, result) {
                        if (err) {
                            return callback(err);
                        }
                        console.log("payDate: "+d.getTime());
                        console.log("dueDate: "+result[0].dueDate);
                        console.log("payTime: "+re);
                        var re=result[0].dueDate-d.getTime();
                        if(re>0){
                            list = null;
                            var date=JSON.parse(body);
                            console.log("list: "+body);
                            list = date.results;
                            res.render('list', {title: '我的报告', list: list});
                        }else {
                            wechatPay(client,code,res);
                        }

                    });

                }
            });

        } else if (!error && response.statusCode == 500) {
            res.render('error', {
                message: '需要先绑定手机才能查看"我的报告"',
                error: {}
            });
        }
    });


});
module.exports = router;

function wechatPay(client,code,res) {
    client.getAccessToken(code, function (err, result) {
        //var openid = result.data.openid;
        var order = {
            body: '我的报告',
            attach: '{"有效期":"三个月"}',
            out_trade_no: 'Report' + (+new Date),
            total_fee: 1,
            spbill_create_ip: '192.168.1.102',//'服务器ip'
            openid: 'oPPfSww-UoP3AKLQ43-d07CmyrVU',
            trade_type: 'JSAPI'
        };
        payment.getBrandWCPayRequestParams(order, function (err, payargs) {
            if (err) {
                console.log("err: " + err);
            }
            console.log("payargs: " + JSON.stringify(payargs));

            res.render('pay', {
                appId: payargs.appId,
                timeStamp: payargs.timeStamp,
                nonceStr: payargs.nonceStr,
                package: payargs.package,
                signType: payargs.signType,
                paySign: payargs.paySign
                // body:body,
                // total:total,
                // num:num,
                // proname:project_name,
                // state:state
            });
        });
    });
}