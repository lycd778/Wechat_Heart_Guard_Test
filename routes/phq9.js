/**
 * Created by Administrator on 2017/3/23.
 */
var express = require('express');
var router = express.Router();
router.use('/', function (req, res, next) {
    res.render('phq9', {title: 'PHQ-9'});
});
module.exports = router;
