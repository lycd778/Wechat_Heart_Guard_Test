/**
 * Created by lingxiao-Ching on 2016/11/23.
 */
var express = require('express');
var router = express.Router();
var http = require('http');
var request = require('request');

router.get('/', function(req, res, next)  {
        //var openid=req.query.openid;
        var openid='oPPfSww-UoP3AKLQ43-d07CmyrVU';
        var url = "http://heathcoudapi.xzkf365.com/api/qq/Reportslist?openid="+openid;
        console.log(url);
        request(url, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                list = null;
                var date=JSON.parse(body);
                list = date.results;
                console.log("list: "+JSON.stringify(list));
                res.render('list', {title: '我的报告', list: list});
            }else if(!error && response.statusCode == 500){
                res.render('error', {
                    message: '需要先绑定手机才能查看"我的报告"',
                    error: {}
                });
            }
        });
});
module.exports = router;
