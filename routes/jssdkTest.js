/**
 * Created by Administrator on 2017/3/17.
 */
var express = require('express');
var router = express.Router();
var wechatAPI = require('wechat-api');
//微信
var config = {
    token: 'xiao_weixin_test',
    appid: 'wxefdad35532e3e77c',
    appsecret: '6cbeefd9d76f33c40a56807324cbf6d7',
    encodingAESKey: ''
};

router.use(express.query());
var api = new wechatAPI(config.appid, config.appsecret);
router.use('/', function (req, res, next) {
    var param = {
        debug: false,
        jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage'],
        url: req.body.url
    };
    /*api.getTicket(function(err,result){
     console.log(err);
     console.log(result);
     });*/
    api.getJsConfig(param, function(err,result){
        res.send(result);
    });

});
module.exports = router;
