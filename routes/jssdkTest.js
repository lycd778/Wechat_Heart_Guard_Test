/**
 * Created by lingxiao-Ching on 2017/3/17.
 */
var express = require('express');
var router = express.Router();
router.use('/', function (req, res, next) {
    res.render('jssdkTest', {title: '测试'});
});
module.exports = router;
