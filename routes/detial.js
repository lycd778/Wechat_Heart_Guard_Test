var express = require('express');
var router = express.Router();
var http = require('http');
var request = require('request');


router.get('/', function (req, res1, next) {
    var recordid=req.query.ReportId;
    var type=req.query.type;
    var userid=req.query.userid;
    var typename=req.query.typename;
    var checktime=req.query.checktime;
    var url='http://heathcoudapi.xzkf365.com/api/qq/Reportsdetial?recordid='+recordid+'&&type='+type+'&&userid='+userid;
    request(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var date=JSON.parse(body);
            detial = null;
            detial = date.results;
            access=JSON.stringify(detial);
            if (type==0){
                res1.render('lab',{title: '实验室报告', detial: detial});
            }else{
                res1.render('assess',{title: '心肺评估', access: access,typename:typename,checktime:checktime});
            }
        }
    });

});
module.exports = router;
