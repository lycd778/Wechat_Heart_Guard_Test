/**
 * Created by lingxiao-Ching on 2016/11/11.
 */
var express = require('express');
var router = express.Router();
var request = require('request');
var OAuth = require('wechat-oauth');
//微信
var config = {
    token: 'xiao_weixin_test',
    appid: 'wxefdad35532e3e77c',
    appsecret: '6cbeefd9d76f33c40a56807324cbf6d7',
    encodingAESKey: ''
};
//初始化wechat-oauth模块
var client = new OAuth(config.appid, config.appsecret);
// router.get('/', function (req, res, next) {
//     var openid=req.query.openid;
//     res.render('binding',{title: '绑定手机',openid:openid});
// });
router.get('/', function (req, res, next) {
    var code = req.query.code; //微信返回的code值，作为下一步的票券
    //获取票券
    client.getAccessToken(code, function(err, result) {
        var openid = result.data.openid;
        console.log("openid: "+openid);
        res.render('binding',{title: '绑定手机',openid:openid});
    });

});
module.exports = router;
