/**
 * Created by Administrator on 2017/3/24.
 */
var express = require('express');
var request = require('request');
var router = express.Router();

router.use('/', function (req, res, next) {
    var url = "http://heartguardapi.xzkf365.com/api/homerehabilitation/get?Userid=15051956931";
    // console.log(url);
    request(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            list = null;
            var date=JSON.parse(body);
            list = date.results;
            var userid="15051956931";
            console.log("planlist: "+JSON.stringify(list));
            res.render('homePlan', {title: '居家计划', list: list,userid:userid});
        }else if(!error && response.statusCode == 500){
            res.render('error', {
                message: '需要先绑定手机才能查看"我的报告"',
                error: {}
            });
        }
    });

});
module.exports = router;

