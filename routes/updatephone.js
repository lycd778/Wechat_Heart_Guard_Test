/**
 * Created by Administrator on 2016/11/23.
 */
var express = require('express');
var mysql = require('mysql');
var router = express.Router();

router.get('/', function (req, res1, next) {
    var openid1 = req.query.openid;
    var openid = openid1.replace(/'/g,"");
    console.log("new openid: " + openid);
    var phone = req.query.phone;
    console.log("phone: " + phone);
    var conn = mysql.createConnection({
        host: '127.0.0.1',
        user: 'root',
        password: 'root',
        database: 'weixin_ydka',
        port: 3306
    });
    conn.connect();
    var updateSQL = 'update weixinuser set phone="' + phone + '"where openid="' + openid + '"';
    //update
    conn.query(updateSQL, function (err, res) {
        if (err) console.log(err);
        console.log(res);
        res1.json(res);
    });
});
module.exports = router;