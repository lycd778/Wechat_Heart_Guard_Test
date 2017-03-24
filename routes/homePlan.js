/**
 * Created by Administrator on 2017/3/24.
 */
var express = require('express');
var router = express.Router();
router.use('/', function (req, res, next) {
    res.render('homePlan', {title: '居家计划'});
});
module.exports = router;

