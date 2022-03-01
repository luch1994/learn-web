'use strict';
exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)
	
	var HOST="https://jnsii.com/dcamazpot/";
	var API_HOST=HOST+"/api/";
	var data=event.data;
	
	var res = await uniCloud.httpclient.request(API_HOST+event.action+".php",{
		headers:{
			'Cookie': data.session_id?'PHPSESSID=' + data.session_id:''
		},
		contentType:"json",
		dataType:"json",
		method:"post",
		data:data
	})
	
	//返回数据给客户端
	return res.data;
};
