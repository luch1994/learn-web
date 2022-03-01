var session_id;

function post_api(api_name,data,callbacks){
	// request_url(api_name,data,callbacks);
	if(!callbacks)callbacks={};
	if(!data)data={};
	
	data.session_id=session_id?session_id:'';
	
	uniCloud.callFunction({
		name:"amazpot",
		data:{
			action:api_name,
			data:data
		},
		success: (res) => {
			uni.hideLoading();
			res.data=res.result;
			if(res.data.err==0){
				if(res.data.result&&res.data.result.session_id)session_id=res.data.result.session_id;
				if(callbacks.success)callbacks.success(res.data);
			}else if(res.data.err==1001){
				uni.redirectTo({
					url: '/pages/login/login'
				});
			}else{
				if(callbacks.fail)callbacks.fail(res.data);
			}
		},
		fail:function(err){
			uni.hideLoading();
			if(callbacks.fail)callbacks.fail(err);
		},
		complete:function(){
			uni.hideLoading();
			if(callbacks.complete)callbacks.complete();
		}
	})
}
function get_res(res_url)
{
	//取消这个设定，从本地加载
	// if(res_url.indexOf("http")>=0){
	// 	return res_url;
	// }else{
	// 	return CDN_HOST+res_url;
	// }
	return res_url.replace(/images\//g,"/static/amazpot/");
}

module.exports = {
	post_api:post_api,
	get_res:get_res
}