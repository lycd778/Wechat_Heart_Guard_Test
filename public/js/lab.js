//将实验室检查内容json转成html
function LabJsonFormatter(type, value) {
    var html = "<table class='table table-bordered'> <tr id='headline'> <th>项目名称</th> <th>结果</th> <th></th> </tr>";
    try {
        if (value == undefined || value == undefined)
            return "";
        var data = $.parseJSON(value);
        console.log("value: \n" + value);
        $.each(data, function (key, value) {
            if (data[key] == undefined || data[key] == null)
                data[key] = "";
        });
        switch (type) {
            case "血常规":
                //html += "Hb:" + data.hb + "g/L " + labCcheck(type, "hb", data.hb)
                //    + ",RBC:" + data.rbc + "×10<sup>12</sup>/L " + labCcheck(type, "rbc", data.rbc)
                //    + ",WBC:" + data.wbc + "×10<sup>9</sup>/L " + labCcheck(type, "wbc", data.wbc)
                //    + ",L:" + data.l + "×10<sup>9</sup>/L " + labCcheck(type, "l", data.l)
                //    + ",N:" + data.n + "×10<sup>9</sup>/L " + labCcheck(type, "n", data.n)
                //    + ",PLT:" + data.plt + "×10<sup>9</sup>/L " + labCcheck(type, "plt", data.plt) +
                //    ",NEUT:" + data.NEUT + "% ";
                html += "<tr><td>Hb</td><td>" + data.hb + " g/L</td><td>" + labCcheck(type, 'hb', data.hb) + "</td></tr>"
                    + "<tr><td>RBC</td><td>" + data.rbc + "×10<sup>12</sup>/L</td><td>" + labCcheck(type, 'rbc', data.rbc) + "</td></tr>"
                    + "<tr><td>WBC</td><td>" + data.wbc + "×10<sup>9</sup>/L </td><td>" + labCcheck(type, 'wbc', data.wbc) + "</td></tr>"
                    + "<tr><td>L</td><td>" + data.l + "×10<sup>9</sup>/L </td><td>" + labCcheck(type, 'l', data.l) + "</td></tr>"
                    + "<tr><td>N</td><td>" + data.n + "×10<sup>9</sup>/L </td><td>" + labCcheck(type, 'n', data.n) + "</td></tr>"
                    + "<tr><td>PLT</td><td>" + data.plt + "×10<sup>9</sup>/L </td><td>" + labCcheck(type, 'plt', data.plt) + "</td></tr>"
                    + "<tr><td>NEUT</td><td>" + data.NEUT + " % </td><td></td></tr>"
                    + "</table>";
                break;
            case "尿常规":
                //html += "Pro:" + data.pro
                //    + ",Glu:" + data.glu
                //    + ",镜检:" + data.jinjian
                //    + ",KET:" + data.KET+ "mmol/L";
                html += "<tr><td>Pro</td><td>" + data.pro + "</td><td></td></tr>"
                    + "<tr><td>Glu</td><td>" + data.glu + "</td><td></td></tr>"
                    + "<tr><td>镜检</td><td>" + data.jinjian + "</td><td></td></tr>"
                    + "<tr><td>KET</td><td>" + data.KET + "mmol/L</td><td></td></tr>"
                    + "</table>";

                break;
            case "血脂":
                // html += "TC:" + data.tc + "mmol/L " + labCcheck(type, "tc", data.tc) + ",TG:" + data.tg + "mmol/L " + labCcheck(type, "tg", data.tg) + ",LDL-C:" + data.ldlc + "mmol/L " + labCcheck(type, "ldlc", data.ldlc) + ",HDL-C:" + data.hdlc + "mmol/L " + labCcheck(type, "hdlc", data.hdlc) + ",LP-a:" + data.lpa + ",HDL/TC:" + data.hdltc + " " + labCcheck(type, "hdltc", data.hdltc);
                html += "<tr><td>TC</td><td>" + data.tc + " mmol/L</td><td>" + labCcheck(type, 'tc', data.tc) + "</td></tr>"
                    + "<tr><td>TG</td><td>" + data.tg + " mmol/L</td><td>" + labCcheck(type, 'tg', data.tg) + "</td></tr>"
                    + "<tr><td>LDL-C</td><td>" + data.ldlc + " mmol/L</td><td>" + labCcheck(type, 'ldlc', data.ldlc) + "</td></tr>"
                    + "<tr><td>HDL-C</td><td>" + data.hdlc + " mmol/L</td><td>" + labCcheck(type, 'hdlc', data.hdlc) + "</td></tr>"
                    + "<tr><td>LP-a</td><td>" + data.lpa + "</td><td></td></tr>"
                    + "<tr><td>HDL/TC</td><td>" + data.hdltc + "</td><td>" + labCcheck(type, 'hdltc', data.hdltc) + "</td></tr>"
                    + "</table>";
                break;
            case "血糖":
                //html += "空腹:" + data.kongfu + "mmol/L " + labCcheck(type, "kongfu", data.kongfu)
                //    + ",餐后2h(OGTT):" + data.after2hogtt + "mmol/L " + labCcheck(type, "after2hogtt", data.after2hogtt);
                html += "<tr><td>空腹</td><td>" + data.kongfu + " mmol/L</td><td>" + labCcheck(type, 'kongfu', data.kongfu) + "</td></tr>"
                    + "<tr><td>餐后2h(OGTT)</td><td>" + data.after2hogtt + " mmol/L</td><td>" + labCcheck(type, 'after2hogtt', data.after2hogtt) + "</td></tr>"
                    + "</table>";
                break;
            case "糖化血红蛋白":
                //   html += "HbA<sub>1c</sub>:" + data.hba1c + "% " + labCcheck(type, "hba1c", data.hba1c);
                html += "<tr><td>HbA<sub>1c</sub></td><td>" + data.hba1c + " % </td><td>" + labCcheck(type, 'hba1c', data.hba1c) + "</td></tr>"
                    + "</table>";
                break;
            case "乳酸":
                //html += "空腹:" + data.kongfu + "mmol/L " + labCcheck(type, "kongfu", data.kongfu)
                //    + ",运动前:" + data.beforeSport + "mmol/L"
                //    +",运动后:" + data.afterSport + "mmol/L";
                html += "<tr><td>空腹</td><td>" + data.kongfu + " mmol/L</td><td>" + labCcheck(type, 'kongfu', data.kongfu) + "</td></tr>"
                    + "<tr><td>运动前</td><td>" + data.beforeSport + " mmol/L</td><td></td></tr>"
                    + "<tr><td>运动后</td><td>" + data.afterSport + " mmol/L</td><td></td></tr>"
                    + "</table>";
                break;
            case "胰岛素":
                //html += " 空腹:" + data.kongfu + "μu/mL " + labCcheck(type, "kongfu", data.kongfu)
                //    + ",餐后2h:" + data.after2h + "μu/mL";
                html += "<tr><td>空腹</td><td>" + data.kongfu + " μu/mL</td><td>" + labCcheck(type, 'kongfu', data.kongfu) + "</td></tr>"
                    + "<tr><td>餐后2h</td><td>" + data.after2h + " μu/mL</td><td></td></tr>"
                    + "</table>";
                break;
            case "肝功能":
                //html += "总蛋白:" + data.totalProtein + "g/L " + labCcheck(type, "totalProtein", data.totalProtein)
                //    + ",白蛋白:" + data.whiteProtein + "g/L " + labCcheck(type, "whiteProtein", data.whiteProtein)
                //    + ",球蛋白:" + data.ballProtein + "g/L " + labCcheck(type, "ballProtein", data.ballProtein)
                //    + ",ALT:" + data.alt + "U/L " + labCcheck(type, "alt", data.alt)
                //    + ",AST:" + data.ast + "U/L " + labCcheck(type, "ast", data.ast)
                //    + ",TBIL:" + data.tbll + "umol/L " + labCcheck(type, "tbll", data.tbll)
                //    + ",DBIL:" + data.dbll + "umol/L " + labCcheck(type, "dbll", data.dbll);
                html += "<tr><td>总蛋白</td><td>" + data.totalProtein + " g/L</td><td>" + labCcheck(type, 'totalProtein', data.totalProtein) + "</td></tr>"
                    + "<tr><td>白蛋白</td><td>" + data.whiteProtein + " g/L</td><td>" + labCcheck(type, 'whiteProtein', data.whiteProtein) + "</td></tr>"
                    + "<tr><td>球蛋白</td><td>" + data.ballProtein + " g/L</td><td>" + labCcheck(type, 'ballProtein', data.ballProtein) + "</td></tr>"
                    + "<tr><td>ALT</td><td>" + data.alt + " U/L</td><td>" + labCcheck(type, 'alt', data.alt) + "</td></tr>"
                    + "<tr><td>AST</td><td>" + data.ast + " U/L</td><td>" + labCcheck(type, 'ast', data.ast) + "</td></tr>"
                    + "<tr><td>TBIL</td><td>" + data.tbll + " umol/L</td><td>" + labCcheck(type, 'tbll', data.tbll) + "</td></tr>"
                    + "<tr><td>DBIL</td><td>" + data.dbll + " umol/L</td><td>" + labCcheck(type, 'dbll', data.dbll) + "</td></tr>"
                    + "</table>";
                break;
            case "肾功能":
                //html += "尿素:" + data.niaosu + "mmol/L " + labCcheck(type, "niaosu", data.niaosu)
                //    + ",尿酸:" + data.niaosuan + "umol/L " + labCcheck(type, "niaosuan", data.niaosuan)
                //    + ",肌酐:" + data.jigan + "umol/L " + labCcheck(type, "jigan", data.jigan);
                html += "<tr><td>尿素</td><td>" + data.niaosu + " mmol/L</td><td>" + labCcheck(type, 'niaosu', data.niaosu) + "</td></tr>"
                    + "<tr><td>尿酸</td><td>" + data.niaosuan + " umol/L</td><td>" + labCcheck(type, 'niaosuan', data.niaosuan) + "</td></tr>"
                    + "<tr><td>肌酐</td><td>" + data.jigan + " umol/L</td><td>" + labCcheck(type, 'jigan', data.jigan) + "</td></tr>"
                    + "</table>";
                break;
            case "甲功三项":
                //html += "FT3:" + data.ft3 + "pmol/L " + labCcheck(type, "ft3", data.ft3)
                //    + ",FT4:" + data.ft4 + "pmol/L " + labCcheck(type, "ft4", data.ft4)
                //    + ",TSH:" + data.tsh + "mIU/L " + labCcheck(type, "tsh", data.tsh);
                html += "<tr><td>FT3</td><td>" + data.ft3 + " pmol/L</td><td>" + labCcheck(type, 'ft3', data.ft3) + "</td></tr>"
                    + "<tr><td>FT4</td><td>" + data.ft4 + " pmol/L</td><td>" + labCcheck(type, 'ft4', data.ft4) + "</td></tr>"
                    + "<tr><td>TSH</td><td>" + data.tsh + " mIU/L</td><td>" + labCcheck(type, 'tsh', data.tsh) + "</td></tr>"
                    + "</table>";
                break;
            case "心电图":
                //html += data.summary;
                html += "<tr><td>心电图总结</td><td>" + data.summary + "</td><td></td></tr>"
                    + "</table>";
                break;
            case "胸片":
                //html += '心脏:' + data.heart
                //    + ',肺野:' + data.lungField;
                html += "<tr><td>心脏</td><td>" + data.heart + "</td><td></td></tr>"
                    + "<tr><td>肺野</td><td>" + data.lungField + "</td><td></td></tr>"
                    + "</table>";
                break;
            case "心脏彩超":
                //html += 'LA:' + data.LA + ' ' + labCcheck(type, "LA", data.LA)
                //    + ',LV:' + data.LV + ' ' + labCcheck(type, "LV", data.LV)
                //    + ',RA:' + data.RA + ' ' + labCcheck(type, "RA", data.RA)
                //    + ',RV:' + data.RV + ' ' + labCcheck(type, "RV", data.RV)
                //    + ',EF:' + data.EF + '% ' + labCcheck(type, "EF", data.EF)
                //    + ',E/A:' + data.EBA
                //    + ',PH:' + data.PH + 'mmHg'
                //    +'LVIDd:' + data.LVIDd+ 'mm'
                //    + 'IVSd:' + data.IVSd+ 'mm'
                //    + '室壁运动:' + data.unknowA+ 'mm'
                //    + '室壁瘤形成:' + data.unknowB+ 'mm'
                //    + '二尖瓣狭窄:' + data.unknowC + ' ' + labCcheck(type, "unknowC", data.unknowC)
                //    + ',主动脉瓣狭窄:' + data.unknowD + ' ' + labCcheck(type, "unknowD", data.unknowD)
                //    + ',肺动脉高压:' + data.unknowE + ' ' + labCcheck(type, "unknowE", data.unknowE)
                //    + ',其它:' + data.summary;
                html += "<tr><td>LA</td><td>" + data.LA + "</td><td>" + labCcheck(type, 'LA', data.LA) + "</td></tr>"
                    + "<tr><td>LV</td><td>" + data.LV + "</td><td>" + labCcheck(type, 'LV', data.LV) + "</td></tr>"
                    + "<tr><td>RA</td><td>" + data.RA + "</td><td>" + labCcheck(type, 'RA', data.RA) + "</td></tr>"
                    + "<tr><td>RV</td><td>" + data.RV + "</td><td>" + labCcheck(type, 'RV', data.RV) + "</td></tr>"
                    + "<tr><td>EF</td><td>" + data.EF + " %</td><td>" + labCcheck(type, 'EF', data.EF) + "</td></tr>"
                    + "<tr><td>E/A</td><td>" + data.EBA + "</td><td></td></tr>"
                    + "<tr><td>PH</td><td>" + data.PH + "mmHg</td><td></td></tr>"
                    + "<tr><td>LVIDd</td><td>" + data.LVIDd + "mm</td><td></td></tr>"
                    + "<tr><td>IVSd</td><td>" + data.IVSd + "mm</td><td></td></tr>"
                    + "<tr><td>室壁运动</td><td>" + data.unknowA + "mm</td><td></td></tr>"
                    + "<tr><td>室壁瘤形成</td><td>" + data.unknowB + "mm</td><td></td></tr>"
                    + "<tr><td>二尖瓣狭窄</td><td>" + data.unknowC + "</td><td>" + labCcheck(type, 'unknowC', data.unknowC) + "</td></tr>"
                    + "<tr><td>主动脉瓣狭窄</td><td>" + data.unknowD + "</td><td>" + labCcheck(type, 'unknowD', data.unknowD) + "</td></tr>"
                    + "<tr><td>肺动脉高压</td><td>" + data.unknowE + "</td><td>" + labCcheck(type, 'unknowE', data.unknowE) + "</td></tr>"
                    + "<tr><td>其它</td><td>" + data.summary + "</td><td></td></tr>"
                    + "</table>";
                break;
            case "Holter":
                //html += data.summary;
                html += "<tr><td>Holter总结</td><td>" + data.summary + "</td><td></td></tr>"
                    + "</table>";
                break;
            case "其它":
                //html += data.description;
                html += "<tr><td>其它</td><td>" + data.description + "</td><td></td></tr>"
                    + "</table>";
                break;
            case "大便常规加隐血":
                //html += '单克隆隐血试验:' + data.OCOABT;
                html += "<tr><td>单克隆隐血试验</td><td>" + data.OCOABT + "</td><td></td></tr>"
                    + "</table>";
                break;
            case "电解质":
                //html += 'K:' + data.K + 'mmol/L ' + labCcheck(type, "K", data.K)
                //    + ',Na:' + data.Na + 'mmol/L ' + labCcheck(type, "Na", data.Na)
                //    + ',Cl:' + data.Cl + 'mmol/L ' + labCcheck(type, "Cl", data.Cl)
                //    + ',CO<sub>2</sub>:' + data.CO2 + 'mmol/L ' + labCcheck(type, "CO2", data.CO2)
                //    + ',Ca:' + data.Ca + 'mmol/L ' + labCcheck(type, "Ca", data.Ca)
                //    + ',P:' + data.P + 'mmol/L ' + labCcheck(type, "P", data.P)
                //    + ',Mg:' + data.Mg + 'mmol/L ' + labCcheck(type, "Mg", data.Mg);
                html += "<tr><td>K</td><td>" + data.K + " mmol/L</td><td>" + labCcheck(type, 'K', data.K) + "</td></tr>"
                    + "<tr><td>Na</td><td>" + data.Na + " mmol/L</td><td>" + labCcheck(type, 'Na', data.Na) + "</td></tr>"
                    + "<tr><td>Cl</td><td>" + data.Cl + " mmol/L</td><td>" + labCcheck(type, 'Cl', data.Cl) + "</td></tr>"
                    + "<tr><td>CO<sub>2</sub></td><td>" + data.CO2 + " mmol/L</td><td>" + labCcheck(type, 'CO2', data.CO2) + "</td></tr>"
                    + "<tr><td>Ca</td><td>" + data.Ca + " mmol/L</td><td>" + labCcheck(type, 'Ca', data.Ca) + "</td></tr>"
                    + "<tr><td>P</td><td>" + data.P + " mmol/L</td><td>" + labCcheck(type, 'P', data.P) + "</td></tr>"
                    + "<tr><td>Mg</td><td>" + data.Mg + " mmol/L</td><td>" + labCcheck(type, 'Mg', data.Mg) + "</td></tr>"
                    + "</table>";
                break;
            case "运动血糖检测":
                //html += '运动前血糖:' + data.befourblood + 'mmol/L'
                //     + '运动后血糖:' + data.afterblood+ 'mmol/L';
                html += "<tr><td>运动前血糖</td><td>" + data.befourblood + " mmol/L</td><td></td></tr>"
                    + "<tr><td>运动后血糖</td><td>" + data.afterblood + " mmol/L</td><td></td></tr>"
                    + "</table>";
                break;
            case "心肌酶":
                //html += 'LDH:' + data.LDH + 'U/L ' + labCcheck(type, "LDH", data.LDH)
                //    + ',CK:' + data.CK + 'U/L ' + labCcheck(type, "CK", data.CK)
                //    + ',CK-MB:' + data.CKMB + 'U/L ' + labCcheck(type, "CKMB", data.CKMB)
                //    + ',Mb:' + data.Mb + 'ug/L ' + labCcheck(type, "Mb", data.Mb);
                html += "<tr><td>LDH</td><td>" + data.LDH + " U/L</td><td>" + labCcheck(type, 'LDH', data.LDH) + "</td></tr>"
                    + "<tr><td>CK</td><td>" + data.CK + " U/L</td><td>" + labCcheck(type, 'CK', data.CK) + "</td></tr>"
                    + "<tr><td>CK-MB</td><td>" + data.CKMB + " U/L</td><td>" + labCcheck(type, 'CKMB', data.CKMB) + "</td></tr>"
                    + "<tr><td>Mb</td><td>" + data.Mb + " ug/L</td><td>" + labCcheck(type, 'Mb', data.Mb) + "</td></tr>"
                    + "</table>";
                break;
            case "肌钙蛋白":
                //html += 'TnI:' + data.TnI + 'ng/ml ' + labCcheck(type, "TnI", data.TnI);
                html += "<tr><td>TnI</td><td>" + data.TnI + " ng/ml</td><td>" + labCcheck(type, 'TnI', data.TnI) + "</td></tr>"
                    + "</table>";
                break;
            case "C肽":
                //html += 'CRT0\':' + data.CRT0 + 'ng/ml ' + labCcheck(type, "CRT0", data.CRT0)
                //    + ',CRT120\':' + data.CRT120 + 'ng/ml';
                html += "<tr><td>CRT0'</td><td>" + data.CRT0 + " ng/ml</td><td>" + labCcheck(type, 'CRT0', data.CRT0) + "</td></tr>"
                    + "<tr><td>CRT120'</td><td>" + data.CRT120 + " ng/ml</td><td></td></tr>"
                    + "</table>";
                break;
            case "CT":
                //html += getCT(data);
                html += "<tr><td>瓣环</td><td>" + data.banh + "</td><td></td></tr>"
                    + "<tr><td>弓部</td><td>" + data.gongb + "</td><td></td></tr>"
                    + "<tr><td>窦部</td><td>" + data.dub + "</td><td></td></tr>"
                    + "<tr><td>降主</td><td>" + data.jiangz + "</td><td></td></tr>"
                    + "<tr><td>升主</td><td>" + data.shenz + "</td><td></td></tr>"
                    + "<tr><td>内漏</td><td>" + changebool(data.neil) + "</td><td></td></tr>"
                    + "<tr><td>远端破口</td><td>" + changebool(data.yuandpk) + "</td><td></td></tr>"
                    + "<tr><td>近端破口</td><td>" + changebool(data.jindpk) + "</td><td></td></tr>"
                    + "</table>";
                break;
            case "血气分析":
                //html += 'PH值:' + data.ph
                //    + ' SaO2:' + data.SaO2 + '% '
                //    + 'PO2:' + data.PO2 + 'mmHg '
                //    + 'Hb:' + data.Hb + 'g/L '
                //    + 'PCO2:' + data.PCO2 + 'mmHg ';
                html += "<tr><td>PH值</td><td>" + data.ph + "</td><td></td></tr>"
                    + "<tr><td>SaO2</td><td>" + data.SaO2 + " %</td><td></td></tr>"
                    + "<tr><td>PO2</td><td>" + data.PO2 + " mmHg</td><td></td></tr>"
                    + "<tr><td>Hb</td><td>" + data.Hb + " g/L</td><td></td></tr>"
                    + "<tr><td>PCO2</td><td>" + data.PCO2 + " mmHg</td><td></td></tr>"
                    + "</table>";
                break;
            case "冠脉造影":
                //html += getSummary(data);
                html += "<tr><td>术前术后</td><td>" + data.checktime_type + "</td><td></td></tr>"
                    + "<tr><td>LM</td><td>" + data.LM1 + " %</td><td></td></tr>"
                    + "<tr><td>LM远端</td><td>" + data.LM2 + " %</td><td></td></tr>"
                    + "<tr><td>LAD1</td><td>" + data.LAD1 + " %</td><td></td></tr>"
                    + "<tr><td>LAD2</td><td>" + data.LAD2 + " %</td><td></td></tr>"
                    + "<tr><td>LAD3</td><td>" + data.LAD3 + " %</td><td></td></tr>"
                    + "<tr><td>D1</td><td>" + data.D1 + " %</td><td></td></tr>"
                    + "<tr><td>D2</td><td>" + data.D2 + " %</td><td></td></tr>"
                    + "<tr><td>LCX1</td><td>" + data.LCX1 + " %</td><td></td></tr>"
                    + "<tr><td>LCX2</td><td>" + data.LCX2 + " %</td><td></td></tr>"
                    + "<tr><td>LCX3</td><td>" + data.LCX3 + " %</td><td></td></tr>"
                    + "<tr><td>RCA1</td><td>" + data.RCA1 + " %</td><td></td></tr>"
                    + "<tr><td>RCA2</td><td>" + data.RCA2 + " %</td><td></td></tr>"
                    + "<tr><td>RCA3</td><td>" + data.RCA3 + " %</td><td></td></tr>"
                    + "<tr><td>PD</td><td>" + data.PD + " %</td><td></td></tr>"
                    + "<tr><td>PL</td><td>" + data.PL + " %</td><td></td></tr>"
                    + "<tr><td>介入治疗后TIMI分级</td><td>" + data.TIMI + "</td><td></td></tr>"
                    + "</table>";
                break;
        }

    }
    catch (e) {

        html = "数据转换错误\n" + e;
    }
    return html;
}
function changebool(bool) {
    str="";
    if (bool == "True") {
        str = "是";
    } else {
        str = "否";
    }
    return str;
}
function getSummary(cag) {
    var summary = "";
    if (cag.checktime_type != undefined && cag.checktime_type != '')
        summary += cag.checktime_type + ",";
    if (cag.LM1 != undefined && cag.LM1 != '')
        summary += "LM: " + cag.LM1 + "%,";
    if (cag.LM2 != undefined && cag.LM2 != '')
        summary += "LM远端: " + cag.LM2 + "%,";
    if (cag.LAD1 != undefined && cag.LAD1 != '')
        summary += "LAD1: " + cag.LAD1 + "%,";
    if (cag.LAD2 != undefined && cag.LAD2 != '')
        summary += "LAD2: " + cag.LAD2 + "%,";
    if (cag.LAD3 != undefined && cag.LAD3 != '')
        summary += "LAD3: " + cag.LAD3 + "%,";
    if (cag.D1 != undefined && cag.D1 != '')
        summary += "D1: " + cag.D1 + "%,";
    if (cag.D2 != undefined && cag.D2 != '')
        summary += "D2: " + cag.D2 + "%,";
    if (cag.LCX1 != undefined && cag.LCX1 != '')
        summary += "LCX1: " + cag.LCX1 + "%,";
    if (cag.LCX2 != undefined && cag.LCX2 != '')
        summary += "LCX2: " + cag.LCX2 + "%,";
    if (cag.LCX3 != undefined && cag.LCX3 != '')
        summary += "LCX3: " + cag.LCX3 + "%,";
    if (cag.RCA1 != undefined && cag.RCA1 != '')
        summary += "RCA1: " + cag.RCA1 + "%,";
    if (cag.RCA2 != undefined && cag.RCA2 != '')
        summary += "RCA2: " + cag.RCA2 + "%,";
    if (cag.RCA3 != undefined && cag.RCA3 != '')
        summary += "RCA3: " + cag.RCA3 + "%,";
    if (cag.PD != undefined && cag.PD != '')
        summary += "PD: " + cag.PD + "%,";
    if (cag.PL != undefined && cag.PL != '')
        summary += "PL: " + cag.PL + "%,";
    if (cag.TIMI != undefined && cag.TIMI != '')
        summary += "介入治疗后TIMI分级: " + cag.TIMI;
    return summary;
}
