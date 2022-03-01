import config from "./config.js"

var rewardedVideoAd;
var _isLoaded=false;
var adpid=config.adpid;

function init(){
	// #ifdef MP-WEIXIN && APP-PLUS
	rewardedVideoAd = uni.createRewardedVideoAd({ adpid: adpid }) // 仅用于HBuilder基座调试 adpid: '1507000689'
	rewardedVideoAd.onLoad(() => {
		_isLoaded = true
		console.log('onLoad event')
		// 当激励视频被关闭时，默认预载下一条数据，加载完成时仍然触发 `onLoad` 事件
	})
	rewardedVideoAd.onError((err) => {
		console.log('onError event', err)
	})
	// #endif
	// #ifndef MP-WEIXIN && APP-PLUS
	console.log("平台不支持激励视频广告API")
	// #endif
}
function show(endedCallback){
	if(_isLoaded){
		_isLoaded=false;
		rewardedVideoAd.show();
		rewardedVideoAd.onClose((res) => {
			console.log('onClose event', res)
			if(res.isEnded){
				if(endedCallback)endedCallback();
			}
		})
	}else{
		uni.showModal({
			showCancel:false,
			content:"广告还没有准备好"
		})
	}
}

module.exports={
	init:init,
	show:show
}