'use strict';
const uniID = require('uni-id')
exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)
	
	var params = JSON.parse(event.body);
	const res = await uniID.checkToken(params.uniIdToken);
	//返回数据给客户端
	
	
	return res;
};
