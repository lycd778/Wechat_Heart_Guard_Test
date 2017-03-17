﻿var labC = {
    "血常规": {
        "hb": {Q:"115-150+",S:"低|正常|高"},
        "rbc": { Q: "3.8-5.1+", S: "低|正常|高" },
        "wbc": { Q: "3.5-9.5+", S: "低|正常|高" },
        "l": { Q: "1.1-3.2+", S: "低|正常|高" },
        "n": { Q: "1.8-6.3+", S: "低|正常|高" },
        "plt": { Q: "125-350+", S: "低|正常|高" }
    },
    "血脂": {
        "tc": { Q: "2.80-5.60+", S: "低|正常|高" },
        "tg": { Q: "0.52-1.56+", S: "低|正常|高" },
        "ldlc": { Q: "1.55-3.19+", S: "低|正常|高" },
        "hdlc": { Q: "0.88-1.76+", S: "低|正常|高" },
        "hdltc": { Q: "0.17-0.45+", S: "低|正常|高" },
    },
    "血糖": {
        "kongfu": { Q: "3.6-6.1+", S: "低|正常|高" },
        "after2hogtt": { Q: "7.8", S: "正常|高" },
    },
    "糖化血红蛋白": {
        "hba1c": { Q: "4.0-6.1+", S: "低|正常|高" },
    },
    "乳酸": {
        "kongfu": { Q: "1.42-1.90+", S: "低|正常|高" },
    },
    "胰岛素": {
        "kongfu": { Q: "1.8-11.8+", S: "低|正常|高" },
    },
    "肝功能": {
        "totalProtein": { Q: "65-85+", S: "低|正常|高" },
        "whiteProtein": { Q: "40-55+", S: "低|正常|高" },
        "ballProtein": { Q: "20-40+", S: "低|正常|高" },
        "alt": { Q: "7-40+", S: "低|正常|高" },
        "ast": { Q: "13-35+", S: "低|正常|高" },
        "tbll": { Q: "1.7-17.1+", S: "低|正常|高" },
        "dbll": { Q: "0-6.8+", S: "低|正常|高" },
    },
    "肾功能": {
        "niaosu": { Q: "2.9-7.14+", S: "低|正常|高" },
        "niaosuan": { Q: "142-416+", S: "低|正常|高" },
        "jigan": { Q: "53-132.6+", S: "低|正常|高" }
    },
    "甲功三项": {
        "ft3": { Q: "2.8-7.1+", S: "低|正常|高" },
        "ft4": { Q: "12-22+", S: "低|正常|高" },
        "tsh": { Q: "0.270-4.200+", S: "低|正常|高" }
    },
    "电解质": {
        "K": { Q: "3.5-5.3+", S: "低|正常|高" },
        "Na": { Q: "137-147+", S: "低|正常|高" },
        "Cl": { Q: "99-110+", S: "低|正常|高" },
        "CO2": { Q: "19-33+", S: "低|正常|高" },
        "Ca": { Q: "2-2.6+", S: "低|正常|高" },
        "P": { Q: "0.86-1.78+", S: "低|正常|高" },
        "Mg": { Q: "0.66-1.07+", S: "低|正常|高" }
    },
    "心肌酶": {
        "LDH": { Q: "109-245+", S: "低|正常|高" },
        "CK": { Q: "24-190+", S: "低|正常|高" },
        "CKMB": { Q: "24", S: "正常|高" },
        "Mb": { Q: "70", S: "正常|高" }
    },
    "肌钙蛋白": {
        "TnI": { Q: "0.04", S: "正常|高" },
    },
    "C肽": {
        "CRT0": { Q: "1.1-4.4+", S: "低|正常|高" },
    },
    "心脏彩超": {
        "LA": { M: "33", F: "30", S: "正常|高" },
        "LV": { M: "55", F: "50", S: "正常|高" },
        "RA": { Q: "1400", S: "正常|高" },
        "RV": { Q: "25", S: "正常|高" },
        "EF": { Q: "30-40-50+", S: "重度降低|中度降低|轻度降低|正常" },
        "unknowC": { Q: "0.5-1.0-1.5-2.0-2.4+", S: "最重度|重度|中度|轻-中度|轻度|" },
        "unknowD": { Q: "0.75-1.0+-1.6+", S: "重度|中度|轻度|" },
        "unknowE": { Q: "15-30-50-70+", S: "|正常|轻度|中度|重度" }
    }
};

function labCcheck(type, name, value) {
    var b = labC[type][name];
    if (b != undefined && value != undefined && value!='') {
        var Q = labC[type][name].Q;
        if (Q==undefined) {
            if ($('#patientGender').val() == "1")
                Q = labC[type][name].M.split('-');
            else
                Q = labC[type][name].F.split('-');
        }
        else
            Q = Q.split('-');
        var S = labC[type][name].S.split('|');
        for(var i=0;i<S.length;i++){
            if (S[i] == '正常') {
                S[i] = '';
            }
            else if (S[i] == '低')
                S[i] = '<span class="arrDown">↓</span>';
            else if (S[i] == '高')
                S[i] = '<span class="arrUp">↑</span>';
        }
        for (var i = 0; i < Q.length; i++)
        {
            if (Q[i].indexOf('+') > 0 && parseFloat(value) <= parseFloat(Q[i].replace('+','')))
                return S[i];
            else if (parseFloat(value) < parseFloat(Q[i]))
                return S[i];   
        }
    }
    else
        return '';

    return S[Q.length];
}