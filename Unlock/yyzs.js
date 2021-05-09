/*
by Primovist
modified by sprindjack
Surge:
[Script]
http-response ^https?:\/\/(i|newdrugs)\.dxy\.cn\/(snsapi\/username\/|app\/user\/(pro\/stat\?|init\?timestamp=)) requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/yyzs.js
[MITM]
hostname = newdrugs.dxy.cn
*/

const path1 = "/snsapi/username/";
const path2 = "/app/user/pro/stat?";
const path3 = "/app/user/init?";

const url = $request.url;
let body = $response.body;

if (url.indexOf(path1) != -1){
body = JSON.parse(body);
body.items.expertUser = true;
body.items.expert = true;
body.items.expertStatus = 1;
body.items.professional = true
body.items.money = 999;
body = JSON.stringify(body);
}

if (url.indexOf(path2) != -1){
body = JSON.parse(body);
body.data.isActive = true;
body.data.expireDate = "2099-12-30 23:59:59";
body.data.userProStatStatusEnum = "VALID";
body.data.userProInfoVO.subscribe = true;
body.data.userProInfoVO.subscribeExpiresDate = "2099-12-30 23:59:59";
body.data.userProInfoVO.expiredTime = "2099-12-30 23:59:59";
body.data.userProInfoVO.androidWithhold = false;
body.data.userProInfoVO.activeType = 1;
body.data.userProInfoVO.expiredDay = 0;
body.data.userProInfoVO.userProStatStatusEnum = "VALID";
body.data.remainExpiredDay = 0;
body = JSON.stringify(body);
}

if (url.indexOf(path3) != -1){
body = JSON.parse(body);
body.data.isProActive = true;
body.data.identify = true;
body.data.expireDate = "2099-12-30 23:59:59";
body.data.userProInfoV0.subscribe= true;
body.data.userProInfoV0.subscribeExpiresDate= "2099-12-30 23:59:59";
body.data.userProInfoV0.expiredTime= 4102329599000;
body.data.userProInfoV0.androidWithhold= false;
body.data.userProInfoV0.activeType= 1;
body.data.userProInfoV0.expiredDay= 0;
body.data.userProInfoV0.userProStatStatusEnum= "VALID";
body.data.iapPurchaseVO.purchase = true;
body.data.iapPurchaseVO.message = null;
body.data.iapPurchaseVO.error = null;
body = JSON.stringify(body);
}

$done({body})
