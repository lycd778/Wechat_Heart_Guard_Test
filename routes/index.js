/**
 * Created by lingxiao-Ching on 2017/3/15.
 */
var express = require('express');
var router = express.Router();
var fs = require('fs');
var moment = require('moment');

router.get('/', function (req, res, next) {
    // var file = fs.readFileSync('config/MP_verify_Zxh1jEggXVhuR0W2.txt');
    // res.set("Content-Type",'text/plain');
    // res.send(file);

    // var starttime= moment().format('x');
    var starttime= moment(1499772169035).format('YYYY-MM-DD');
    //var endtime=moment().add(3,'M').format('x');
    var endtime= moment(1499927404278).add(3,'M').format('x');


    var dif=moment().subtract(2, 'd').format('YYYY-MM-DD');
    //var dif=starttime-endtime;

    res.render('index', {title: '测试',starttime:starttime,endtime:endtime,dif:dif});
});
module.exports = router;