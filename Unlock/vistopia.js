var body = $response.body;
var url = $request.url;

const path1 = '/api/v1/user/subscriptions/';


let obj = JSON.parse(body);

if (url.indexOf(path1) != -1) {
	obj.data.vip_type= "lixiangjia_trial";
  obj.data.user_file.vip_type= "lixiangjia_trial";
  obj.data.user_file.is_vip_expire= "0";
  obj.data.user_file.vip_expire_date= "2029-12-26";
  obj.data.user_file.vip_left_days= "999";
	body = JSON.stringify(obj);  
 }

$done({body});


