/**
 * Created by Administrator on 2017/4/26.
 */
function massSendTask(schedule, moment,api,db) {
    var remindRule = new schedule.RecurrenceRule();
    remindTimes = [12];
    remindRule.hour = remindTimes;
    schedule.scheduleJob(remindRule, function () {
        console.log('微信支付到期提醒群发任务在:' + new Date() + "执行。");
        var sql = 'select * from weixinuser where isPay = 1';
        db.query(sql, function (err, result) {
            if (err) {
                return callback(err);
            }
            var openidList = new Array();
            var now = moment().format('x');
            for (var item in result) {
                var dueDate = result[item].dueDate;
                var week_dueDate = moment(parseInt(dueDate)).subtract(7, 'd').format('x');
                var re = week_dueDate - now;
                if (re <= 0) {
                    openidList.push(result[item].openid);
                }
            }
            console.log("openidList: " + JSON.stringify(openidList));

            var articles = [
                {
                    "title": "续费通知",
                    "description": "您订阅的居家计划及实验室检查报告服务即将到期,点击续费",
                    "url": "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxfb3801993da030d8&redirect_uri=http%3A%2F%2Fheartguardwx.xzkf365.com%2Fpay&response_type=code&scope=snsapi_base&state=123#wechat_redirect",
                    "picurl": "https://mmbiz.qlogo.cn/mmbiz_jpg/vPSSXd5FvYXE38Lbictf0IdibX10udhkbuib3rxKASg51U1XIJTegIjibomoUyqWichTcA9tBwGYjwSaoHC8EdQiawZA/0?wx_fmt=jpeg"
                }];

            for (var i in openidList) {
                api.sendNews(openidList[i], articles, function (err1, result1) {
                    if (err1) {
                        console.log("单发失败!" + JSON.stringify(err1));
                    }
                    console.log("单发成功!" + JSON.stringify(result1));
                });
            }
        });
    });

    var updateRule = new schedule.RecurrenceRule();
    updateTimes = [0, 12];
    updateRule.hour = updateTimes;
    schedule.scheduleJob(updateRule, function () {
        //判断是支付否过期
        console.log('微信支付到期数据库更新于:' + new Date() + "执行。");
        var sql = 'select * from weixinuser where isPay = 1';
        db.query(sql, function (err, result) {
            if (err) {
                return callback(err);
            }
            var now = moment().format('x');
            for (var item in result) {
                var dueDate = result[item].dueDate;
                var mdueDate = moment(parseInt(dueDate)).format('x');
                var re = mdueDate - now;
                if (re <= 0) {
                    //更新数据库
                    var pSql = 'update weixinuser set isPay=0 where openid="' + result[item].openid + '"';
                    db.query(pSql, function (err, result) {
                        if (err) {
                            return callback(err);
                        }
                        console.log("更新isPay状态成功!" + JSON.stringify(result));
                    });
                    var dSql = 'update weixinuser set dueDate=\'\' where openid="' + result[item].openid + '"';
                    db.query(dSql, function (err, result) {
                        if (err) {
                            return callback(err);
                        }
                        console.log("清空dueDate成功!" + JSON.stringify(result));
                    });
                }
            }
        });
    });
    console.log("微信支付到期提醒及数据库更新功能启动成功!");

}
module.exports = massSendTask;