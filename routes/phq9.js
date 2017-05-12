/**
 * Created by Administrator on 2017/3/23.
 */
var express = require('express');
var router = express.Router();

var request = require('request');
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

router.use('/', function (req, res, next) {
    var openid = 'oPPfSww-UoP3AKLQ43-d07CmyrVU';
    console.log("phq9Openid: " + openid);
    // 根据phone获取userid,access_token
    var url = "http://heartguardapi.xzkf365.com/api/qq/openId?openId=" + openid;
    request.post(url, function (error, response, body) {
        var date = JSON.parse(body);
        if (date.status == 100) {
            var results = date.results;
            var access_token = results.access_token;
            var userid = results.userId;
            console.log("userid: " + userid);
            //获取量表
            var tableUrl = "http://ydka.xzkf365.com/api/exam/Question/PHQ9?access_token=" + access_token;
            request.get(tableUrl, function (error2, response2, body2) {
                if (!error2 && response2.statusCode == 200) {
                    console.log("phq-9: " + body2);
                    res.render('phq9', {
                        title: 'PHQ-9量表',
                        body2: body2,
                        access_token: access_token,
                        userid: userid
                    });
                } else if (!error2 && response2.statusCode == 500) {
                    res.render('error', {
                        message: '需要先绑定手机才能查看"量表"',
                        error: {}
                    });
                }
            });
        } else if (!error && response.statusCode == 500) {
            res.render('error', {
                message: '需要先绑定手机才能查看"量表"',
                error: {}
            });
        }
    });

});
module.exports = router;
