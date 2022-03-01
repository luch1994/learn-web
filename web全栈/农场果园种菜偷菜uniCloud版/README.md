
## 偷菜果园农场uniCloud版

> 所有大型项目里都有这样一个部分来提升日活，用户粘性，裂变传播等。而现在，你可以非常简单的内嵌到你的项目中，使用uni-id鉴权，你还可以添加uni-ad赚取广告费。

作者：ezshine（大帅）
> 2005年FLASH作品声控跳绳被当年电脑报年度版收录。
> 2006年获得全国Flash手机游戏大赛冠军。
> 原火爆全网的社交游戏《开心农场》技术顾问。
> 资深多媒体技术专家。

### 插件市场安装后食用方法

> 1. 导入插件到uniCloud空间，建议选择阿里云服务。
> 2. 将code2session云函数URL化。并记录下URL化后的地址。
> 3. 将该地址填入 common/amazpot/config.js 中的code2session_url。
> 4. 运行到内置浏览器，iOS或Android模拟器中

### 当前可配置项
common/amazpot/config.js

> 1. 激励视频广告adpid
> 2. code2session URL化路径
> 3. 是否开启社交模式（暂时默认不开启，因为全平台通用社交模式还有些问题需要解决）

理论上可以发行到uniapp支持的全部平台

### 全部功能概览

- [x] 种水果
- [x] 出售水果/仓库
- [x] 施肥
- [x] 浇水
- [x] 除虫
- [x] 采摘
- [x] 小猪银行
- [x] 日常金币生成
- [x] 加速生长
- [x] 植物图鉴
- [x] 购买花盆/汽车
- [x] 时光手帐（玩家日志）
- [x] 激励视频广告（需自行申请uniad）
- [ ] 生成海报（这里有个捕获是谁分享的问题，在非微信渠道不太容易做一个统一的）
- [ ] 好友偷菜（没有分享，也就不知道好友从哪儿来）
- [ ] 汽车的作用/仓库转移（同好友问题，先要解决好友从哪儿来的问题）
- [ ] 最近访客（同上）

### 注意事项

以下文件为种菜偷菜项目的相关文件，其余为uni-id演示项目，你可以把这个游戏嵌入到任意项目中。
~~~~javascript
common/amazpot
components/amazpot
pages/amazpot
static/amazpot
cloudfunction/amazpot
cloudfunction/code2session
~~~~

请打开main.vue查看如何唤起一个偷菜游戏页

### 激励视频广告
在开启激励视频广告前，请先知晓激励视频广告仅支持微信，APP
请自行申请广告id，仅支持激励视频广告。将申请到的adpid填入 common/amazpot/ad.js 中

### 已知问题
> 在部分机型上可能出现动效缓慢，卡顿。


### 微信扫码体验
![](https://img.huimin111.com/uploads/201910/07/16/icnj04rzeh1.jpg)