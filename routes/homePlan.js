/**
 * Created by Administrator on 2017/3/24.
 */
var express = require('express');
var request = require('request');
var moment = require('moment');
var router = express.Router();

router.use('/', function (req, res, next) {
    var url = "http://heartguardapi.xzkf365.com/api/homerehabilitation/get?Userid=15051956931";
    // console.log(url);
    request(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            orlist = null;
            var date=JSON.parse(body);
            orlist = date.results;
            console.log("planlist: " + JSON.stringify(orlist));
            var list1 = todayList(orlist)[0];
            var list2 = todayList(orlist)[1];
            var userid="15051956931";
            console.log("planlist2: "+JSON.stringify(list2));
            res.render('homePlan', {title: '居家计划', list1: list1,list2: list2,userid:userid});
        }else if(!error && response.statusCode == 500){
            res.render('error', {
                message: '需要先绑定手机才能查看"我的报告"',
                error: {}
            });
        }
    });

});
module.exports = router;

function todayList(orlist) {
    var list1 = new Array();
    var list2 = new Array();
    var list= new Array();
    var date = moment(new Date()).format('YYYY-MM-DD');
    for (x in orlist) {
        if (orlist[x].getday === date) {
            list1.push(orlist[x]);
        }else {
            list2.push(orlist[x]);
        }
    }
    list.push(list1);
    list.push(list2);
    return list;
}