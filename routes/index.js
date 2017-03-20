/**
 * Created by lingxiao-Ching on 2017/3/15.
 */
var express = require('express');
var router = express.Router();
var wechatAPI = require('wechat-api');
var OAuth = require('wechat-oauth');
var request = require('request');
//微信
var config = {
    token: 'xiao_weixin_test',
    appid: 'wxefdad35532e3e77c',
    appsecret: '6cbeefd9d76f33c40a56807324cbf6d7',
    encodingAESKey: ''
};
//初始化wechat-api模块
var api = new wechatAPI(config.appid, config.appsecret);

//初始化wechat-oauth模块
var client = new OAuth(config.appid, config.appsecret);

router.get('/', function (req, res, next) {
    var redirectUrl = "http://pg-xiao778.vicp.io/binding";
    var url = client.getAuthorizeURL(redirectUrl, '123', 'snsapi_base');
    console.log(url);
    res.redirect(url);
});
module.exports = router;