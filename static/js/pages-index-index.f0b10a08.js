(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{2166:function(e,t,n){"use strict";var i=n("380d"),a=n.n(i);a.a},"380d":function(e,t,n){var i=n("c28f");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("5e72e732",i,!0,{sourceMap:!1,shadowMode:!1})},"60de":function(e,t,n){"use strict";var i=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n("5530")),o=function(e){e.url="https://shuijia.api.xiaolibutai.com"+e.url;var t=uni.getStorageSync("token");return t&&(e.header=(0,a.default)({token:"d525b659-70b5-4640-8455-15b5e9853e7f"},e.header)),uni.request(e)},r=o;t.default=r},6376:function(e,t,n){e.exports=n.p+"static/img/IMG_6124.807bda4d.png"},"881b":function(e,t,n){e.exports=n.p+"static/img/u344.38ce5d7a.png"},"97fd":function(e,t,n){"use strict";var i=n("4ea4");n("c975"),n("ac1f"),n("841c"),n("1276"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n("60de")),o=n("a421"),r={data:function(){return{title:"水+计划公益活动介绍",code:"",openid:"",access_token:"",nike_name:"",show:!1,cardInfo:{rest_day:""}}},onLoad:function(){var e=this;uni.getStorageSync("token")&&(0,a.default)({url:"/api/UserLatestCard",success:function(t){e.cardInfo=t.data.data}}),this.link="http://shuijia.m.xiaolibutai.com/",(0,o.share)(this.link);var t=location.href,n=encodeURIComponent(t);this.code=this.getUrlCode().code,null==this.code||""===this.code?window.location.href="http://open.weixin.qq.com/connect/oauth2/authorize?appid=wxe711a119a78ccbd7&redirect_uri=".concat(n,"&response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect"):(this.show=!0,(0,a.default)({url:"/api/WxOAuth2AccessToken",data:{js_code:this.code},success:function(t){e.openid=t.data.data.openid,uni.setStorageSync("openid",e.openid),e.access_token=t.data.data.access_token,(0,a.default)({url:"/api/WxUserInfo",data:{openid:e.openid,access_token:e.access_token},success:function(t){e.nike_name=t.data.data.nickname,(0,a.default)({url:"/api/Passport",data:{open_id:e.openid,nike_name:e.nike_name},header:{"Content-Type":"application/x-www-form-urlencoded"},method:"POST",success:function(t){uni.setStorageSync("token",t.data.data.token),uni.setStorageSync("nike_name",e.nike_name),(0,a.default)({url:"/api/UserLatestCard",success:function(t){e.cardInfo=t.data.data}})}})}})}}))},methods:{getUrlCode:function(){var e=location.search;this.winUrl=e;var t=new Object;if(-1!=e.indexOf("?"))for(var n=e.substr(1),i=n.split("&"),a=0;a<i.length;a++)t[i[a].split("=")[0]]=i[a].split("=")[1];return t},goDetail:function(){uni.navigateTo({url:"/pages/detail/detail"})}}};t.default=r},"9bf3":function(e,t,n){"use strict";n.r(t);var i=n("97fd"),a=n.n(i);for(var o in i)"default"!==o&&function(e){n.d(t,e,(function(){return i[e]}))}(o);t["default"]=a.a},a37b:function(e,t,n){var i;!function(a,o){i=function(){return o(a)}.call(t,n,t,e),void 0===i||(e.exports=i)}(window,(function(e,t){if(!e.jWeixin){var n,i={config:"preVerifyJSAPI",onMenuShareTimeline:"menu:share:timeline",onMenuShareAppMessage:"menu:share:appmessage",onMenuShareQQ:"menu:share:qq",onMenuShareWeibo:"menu:share:weiboApp",onMenuShareQZone:"menu:share:QZone",previewImage:"imagePreview",getLocation:"geoLocation",openProductSpecificView:"openProductViewWithPid",addCard:"batchAddCard",openCard:"batchViewCard",chooseWXPay:"getBrandWCPayRequest",openEnterpriseRedPacket:"getRecevieBizHongBaoRequest",startSearchBeacons:"startMonitoringBeacons",stopSearchBeacons:"stopMonitoringBeacons",onSearchBeacons:"onBeaconsInRange",consumeAndShareCard:"consumedShareCard",openAddress:"editAddress"},a=function(){var e={};for(var t in i)e[i[t]]=t;return e}(),o=e.document,r=o.title,c=navigator.userAgent.toLowerCase(),s=navigator.platform.toLowerCase(),d=!(!s.match("mac")&&!s.match("win")),u=-1!=c.indexOf("wxdebugger"),l=-1!=c.indexOf("micromessenger"),p=-1!=c.indexOf("android"),f=-1!=c.indexOf("iphone")||-1!=c.indexOf("ipad"),g=(n=c.match(/micromessenger\/(\d+\.\d+\.\d+)/)||c.match(/micromessenger\/(\d+\.\d+)/))?n[1]:"",m={initStartTime:O(),initEndTime:0,preVerifyStartTime:0,preVerifyEndTime:0},h={version:1,appId:"",initTime:0,preVerifyTime:0,networkType:"",isPreVerifyOk:1,systemType:f?1:p?2:-1,clientVersion:g,url:encodeURIComponent(location.href)},v={},w={_completes:[]},S={state:0,data:{}};L((function(){m.initEndTime=O()}));var y=!1,_=[],k={config:function(t){V("config",v=t);var n=!1!==v.check;L((function(){if(n)T(i.config,{verifyJsApiList:A(v.jsApiList),verifyOpenTagList:A(v.openTagList)},function(){w._complete=function(e){m.preVerifyEndTime=O(),S.state=1,S.data=e},w.success=function(e){h.isPreVerifyOk=0},w.fail=function(e){w._fail?w._fail(e):S.state=-1};var e=w._completes;return e.push((function(){!function(){if(!(d||u||v.debug||g<"6.0.2"||h.systemType<0)){var e=new Image;h.appId=v.appId,h.initTime=m.initEndTime-m.initStartTime,h.preVerifyTime=m.preVerifyEndTime-m.preVerifyStartTime,k.getNetworkType({isInnerInvoke:!0,success:function(t){h.networkType=t.networkType;var n="https://open.weixin.qq.com/sdk/report?v="+h.version+"&o="+h.isPreVerifyOk+"&s="+h.systemType+"&c="+h.clientVersion+"&a="+h.appId+"&n="+h.networkType+"&i="+h.initTime+"&p="+h.preVerifyTime+"&u="+h.url;e.src=n}})}}()})),w.complete=function(t){for(var n=0,i=e.length;n<i;++n)e[n]();w._completes=[]},w}()),m.preVerifyStartTime=O();else{S.state=1;for(var e=w._completes,t=0,a=e.length;t<a;++t)e[t]();w._completes=[]}})),k.invoke||(k.invoke=function(t,n,i){e.WeixinJSBridge&&WeixinJSBridge.invoke(t,M(n),i)},k.on=function(t,n){e.WeixinJSBridge&&WeixinJSBridge.on(t,n)})},ready:function(e){0!=S.state?e():(w._completes.push(e),!l&&v.debug&&e())},error:function(e){g<"6.0.2"||(-1==S.state?e(S.data):w._fail=e)},checkJsApi:function(e){T("checkJsApi",{jsApiList:A(e.jsApiList)},(e._complete=function(e){if(p){var t=e.checkResult;t&&(e.checkResult=JSON.parse(t))}e=function(e){var t=e.checkResult;for(var n in t){var i=a[n];i&&(t[i]=t[n],delete t[n])}return e}(e)},e))},onMenuShareTimeline:function(e){b(i.onMenuShareTimeline,{complete:function(){T("shareTimeline",{title:e.title||r,desc:e.title||r,img_url:e.imgUrl||"",link:e.link||location.href,type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareAppMessage:function(e){b(i.onMenuShareAppMessage,{complete:function(t){"favorite"===t.scene?T("sendAppMessage",{title:e.title||r,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""}):T("sendAppMessage",{title:e.title||r,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareQQ:function(e){b(i.onMenuShareQQ,{complete:function(){T("shareQQ",{title:e.title||r,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareWeibo:function(e){b(i.onMenuShareWeibo,{complete:function(){T("shareWeiboApp",{title:e.title||r,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareQZone:function(e){b(i.onMenuShareQZone,{complete:function(){T("shareQZone",{title:e.title||r,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},updateTimelineShareData:function(e){T("updateTimelineShareData",{title:e.title,link:e.link,imgUrl:e.imgUrl},e)},updateAppMessageShareData:function(e){T("updateAppMessageShareData",{title:e.title,desc:e.desc,link:e.link,imgUrl:e.imgUrl},e)},startRecord:function(e){T("startRecord",{},e)},stopRecord:function(e){T("stopRecord",{},e)},onVoiceRecordEnd:function(e){b("onVoiceRecordEnd",e)},playVoice:function(e){T("playVoice",{localId:e.localId},e)},pauseVoice:function(e){T("pauseVoice",{localId:e.localId},e)},stopVoice:function(e){T("stopVoice",{localId:e.localId},e)},onVoicePlayEnd:function(e){b("onVoicePlayEnd",e)},uploadVoice:function(e){T("uploadVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadVoice:function(e){T("downloadVoice",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},translateVoice:function(e){T("translateVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},chooseImage:function(e){T("chooseImage",{scene:"1|2",count:e.count||9,sizeType:e.sizeType||["original","compressed"],sourceType:e.sourceType||["album","camera"]},(e._complete=function(e){if(p){var t=e.localIds;try{t&&(e.localIds=JSON.parse(t))}catch(e){}}},e))},getLocation:function(e){},previewImage:function(e){T(i.previewImage,{current:e.current,urls:e.urls},e)},uploadImage:function(e){T("uploadImage",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadImage:function(e){T("downloadImage",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},getLocalImgData:function(e){!1===y?(y=!0,T("getLocalImgData",{localId:e.localId},(e._complete=function(e){if(y=!1,0<_.length){var t=_.shift();wx.getLocalImgData(t)}},e))):_.push(e)},getNetworkType:function(e){T("getNetworkType",{},(e._complete=function(e){e=function(e){var t=e.errMsg;e.errMsg="getNetworkType:ok";var n=e.subtype;if(delete e.subtype,n)e.networkType=n;else{var i=t.indexOf(":"),a=t.substring(i+1);switch(a){case"wifi":case"edge":case"wwan":e.networkType=a;break;default:e.errMsg="getNetworkType:fail"}}return e}(e)},e))},openLocation:function(e){T("openLocation",{latitude:e.latitude,longitude:e.longitude,name:e.name||"",address:e.address||"",scale:e.scale||28,infoUrl:e.infoUrl||""},e)},getLocation:function(e){T(i.getLocation,{type:(e=e||{}).type||"wgs84"},(e._complete=function(e){delete e.type},e))},hideOptionMenu:function(e){T("hideOptionMenu",{},e)},showOptionMenu:function(e){T("showOptionMenu",{},e)},closeWindow:function(e){T("closeWindow",{},e=e||{})},hideMenuItems:function(e){T("hideMenuItems",{menuList:e.menuList},e)},showMenuItems:function(e){T("showMenuItems",{menuList:e.menuList},e)},hideAllNonBaseMenuItem:function(e){T("hideAllNonBaseMenuItem",{},e)},showAllNonBaseMenuItem:function(e){T("showAllNonBaseMenuItem",{},e)},scanQRCode:function(e){T("scanQRCode",{needResult:(e=e||{}).needResult||0,scanType:e.scanType||["qrCode","barCode"]},(e._complete=function(e){if(f){var t=e.resultStr;if(t){var n=JSON.parse(t);e.resultStr=n&&n.scan_code&&n.scan_code.scan_result}}},e))},openAddress:function(e){T(i.openAddress,{},(e._complete=function(e){e=function(e){return e.postalCode=e.addressPostalCode,delete e.addressPostalCode,e.provinceName=e.proviceFirstStageName,delete e.proviceFirstStageName,e.cityName=e.addressCitySecondStageName,delete e.addressCitySecondStageName,e.countryName=e.addressCountiesThirdStageName,delete e.addressCountiesThirdStageName,e.detailInfo=e.addressDetailInfo,delete e.addressDetailInfo,e}(e)},e))},openProductSpecificView:function(e){T(i.openProductSpecificView,{pid:e.productId,view_type:e.viewType||0,ext_info:e.extInfo},e)},addCard:function(e){for(var t=e.cardList,n=[],a=0,o=t.length;a<o;++a){var r=t[a],c={card_id:r.cardId,card_ext:r.cardExt};n.push(c)}T(i.addCard,{card_list:n},(e._complete=function(e){var t=e.card_list;if(t){for(var n=0,i=(t=JSON.parse(t)).length;n<i;++n){var a=t[n];a.cardId=a.card_id,a.cardExt=a.card_ext,a.isSuccess=!!a.is_succ,delete a.card_id,delete a.card_ext,delete a.is_succ}e.cardList=t,delete e.card_list}},e))},chooseCard:function(e){T("chooseCard",{app_id:v.appId,location_id:e.shopId||"",sign_type:e.signType||"SHA1",card_id:e.cardId||"",card_type:e.cardType||"",card_sign:e.cardSign,time_stamp:e.timestamp+"",nonce_str:e.nonceStr},(e._complete=function(e){e.cardList=e.choose_card_info,delete e.choose_card_info},e))},openCard:function(e){for(var t=e.cardList,n=[],a=0,o=t.length;a<o;++a){var r=t[a],c={card_id:r.cardId,code:r.code};n.push(c)}T(i.openCard,{card_list:n},e)},consumeAndShareCard:function(e){T(i.consumeAndShareCard,{consumedCardId:e.cardId,consumedCode:e.code},e)},chooseWXPay:function(e){T(i.chooseWXPay,C(e),e)},openEnterpriseRedPacket:function(e){T(i.openEnterpriseRedPacket,C(e),e)},startSearchBeacons:function(e){T(i.startSearchBeacons,{ticket:e.ticket},e)},stopSearchBeacons:function(e){T(i.stopSearchBeacons,{},e)},onSearchBeacons:function(e){b(i.onSearchBeacons,e)},openEnterpriseChat:function(e){T("openEnterpriseChat",{useridlist:e.userIds,chatname:e.groupName},e)},launchMiniProgram:function(e){T("launchMiniProgram",{targetAppId:e.targetAppId,path:function(e){if("string"==typeof e&&0<e.length){var t=e.split("?")[0],n=e.split("?")[1];return t+=".html",void 0!==n?t+"?"+n:t}}(e.path),envVersion:e.envVersion},e)},openBusinessView:function(e){T("openBusinessView",{businessType:e.businessType,queryString:e.queryString||"",envVersion:e.envVersion},(e._complete=function(e){if(p){var t=e.extraData;if(t)try{e.extraData=JSON.parse(t)}catch(t){e.extraData={}}}},e))},miniProgram:{navigateBack:function(e){e=e||{},L((function(){T("invokeMiniProgramAPI",{name:"navigateBack",arg:{delta:e.delta||1}},e)}))},navigateTo:function(e){L((function(){T("invokeMiniProgramAPI",{name:"navigateTo",arg:{url:e.url}},e)}))},redirectTo:function(e){L((function(){T("invokeMiniProgramAPI",{name:"redirectTo",arg:{url:e.url}},e)}))},switchTab:function(e){L((function(){T("invokeMiniProgramAPI",{name:"switchTab",arg:{url:e.url}},e)}))},reLaunch:function(e){L((function(){T("invokeMiniProgramAPI",{name:"reLaunch",arg:{url:e.url}},e)}))},postMessage:function(e){L((function(){T("invokeMiniProgramAPI",{name:"postMessage",arg:e.data||{}},e)}))},getEnv:function(t){L((function(){t({miniprogram:"miniprogram"===e.__wxjs_environment})}))}}},I=1,x={};return o.addEventListener("error",(function(e){if(!p){var t=e.target,n=t.tagName,i=t.src;if(("IMG"==n||"VIDEO"==n||"AUDIO"==n||"SOURCE"==n)&&-1!=i.indexOf("wxlocalresource://")){e.preventDefault(),e.stopPropagation();var a=t["wx-id"];if(a||(a=I++,t["wx-id"]=a),x[a])return;x[a]=!0,wx.ready((function(){wx.getLocalImgData({localId:i,success:function(e){t.src=e.localData}})}))}}}),!0),o.addEventListener("load",(function(e){if(!p){var t=e.target,n=t.tagName;if(t.src,"IMG"==n||"VIDEO"==n||"AUDIO"==n||"SOURCE"==n){var i=t["wx-id"];i&&(x[i]=!1)}}}),!0),t&&(e.wx=e.jWeixin=k),k}function T(t,n,i){e.WeixinJSBridge?WeixinJSBridge.invoke(t,M(n),(function(e){P(t,e,i)})):V(t,i)}function b(t,n,i){e.WeixinJSBridge?WeixinJSBridge.on(t,(function(e){i&&i.trigger&&i.trigger(e),P(t,e,n)})):V(t,i||n)}function M(e){return(e=e||{}).appId=v.appId,e.verifyAppId=v.appId,e.verifySignType="sha1",e.verifyTimestamp=v.timestamp+"",e.verifyNonceStr=v.nonceStr,e.verifySignature=v.signature,e}function C(e){return{timeStamp:e.timestamp+"",nonceStr:e.nonceStr,package:e.package,paySign:e.paySign,signType:e.signType||"SHA1"}}function P(e,t,n){"openEnterpriseChat"!=e&&"openBusinessView"!==e||(t.errCode=t.err_code),delete t.err_code,delete t.err_desc,delete t.err_detail;var i=t.errMsg;i||(i=t.err_msg,delete t.err_msg,i=function(e,t){var n=e,i=a[n];i&&(n=i);var o="ok";if(t){var r=t.indexOf(":");"confirm"==(o=t.substring(r+1))&&(o="ok"),"failed"==o&&(o="fail"),-1!=o.indexOf("failed_")&&(o=o.substring(7)),-1!=o.indexOf("fail_")&&(o=o.substring(5)),"access denied"!=(o=(o=o.replace(/_/g," ")).toLowerCase())&&"no permission to execute"!=o||(o="permission denied"),"config"==n&&"function not exist"==o&&(o="ok"),""==o&&(o="fail")}return n+":"+o}(e,i),t.errMsg=i),(n=n||{})._complete&&(n._complete(t),delete n._complete),i=t.errMsg||"",v.debug&&!n.isInnerInvoke&&alert(JSON.stringify(t));var o=i.indexOf(":");switch(i.substring(o+1)){case"ok":n.success&&n.success(t);break;case"cancel":n.cancel&&n.cancel(t);break;default:n.fail&&n.fail(t)}n.complete&&n.complete(t)}function A(e){if(e){for(var t=0,n=e.length;t<n;++t){var a=e[t],o=i[a];o&&(e[t]=o)}return e}}function V(e,t){if(!(!v.debug||t&&t.isInnerInvoke)){var n=a[e];n&&(e=n),t&&t._complete&&delete t._complete,console.log('"'+e+'",',t||"")}}function O(){return(new Date).getTime()}function L(t){l&&(e.WeixinJSBridge?t():o.addEventListener&&o.addEventListener("WeixinJSBridgeReady",t,!1))}}))},a421:function(e,t,n){"use strict";var i=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.share=void 0;var a=i(n("60de")),o=function(e){(0,a.default)({url:"/api/WxJsSDKConfig",data:{url:location.href},success:function(t){var i=n("a37b");console.log(e),i.config({debug:!1,appId:t.data.data.appId,timestamp:t.data.data.timestamp,nonceStr:t.data.data.nonceStr,signature:t.data.data.signature,jsApiList:["updateAppMessageShareData","updateTimelineShareData"]}),i.ready((function(){i.updateTimelineShareData({title:"水+计划卡",link:e,imgUrl:"http://shuijia.m.xiaolibutai.com/img/tubiao.jpg",success:function(){}})})),i.ready((function(){i.updateAppMessageShareData({title:"水+计划卡",desc:'尊享全年到"小李补胎"任意门店免费添加瓶装玻璃水',link:e,imgUrl:"http://shuijia.m.xiaolibutai.com/img/tubiao.jpg",success:function(){}})}))}})};t.share=o},a90e:function(e,t,n){e.exports=n.p+"static/img/banner1.9047b417.jpg"},aac5:function(e,t,n){"use strict";var i;n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return i}));var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.show?i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{},[i("v-uni-swiper",{staticStyle:{height:"200px"},attrs:{"indicator-color":"rgba(255,255,255,.3)","indicator-active-color":"#fff","indicator-dots":!0,autoplay:!0,interval:5e3,duration:1e3,circular:"true"}},[i("v-uni-swiper-item",[i("v-uni-view",{staticClass:"swiper-item"},[i("v-uni-image",{staticClass:"logo",attrs:{src:n("6376")}})],1)],1),i("v-uni-swiper-item",[i("v-uni-view",{staticClass:"swiper-item"},[i("v-uni-image",{staticClass:"logo",attrs:{src:n("a90e")}})],1)],1),i("v-uni-swiper-item",[i("v-uni-view",{staticClass:"swiper-item"},[i("v-uni-image",{staticClass:"logo",attrs:{src:n("881b")}})],1)],1)],1)],1),i("v-uni-view",{staticClass:"info1",staticStyle:{"justify-content":"flex-start"}},[i("v-uni-text",{staticClass:"line"}),i("v-uni-text",{staticStyle:{"font-weight":"bold"}},[e._v("活动规则")])],1),i("v-uni-view",{staticClass:"outer"},[i("v-uni-view",{staticClass:"bottom"},[i("v-uni-view",{staticClass:"detail"},[i("v-uni-view",{},[e._v("1.车主仅需支付10元即可一年内在小李补胎所有门店免费添加瓶装玻璃水，同时小李补胎将拿出其中的部分资金在每个门店建设环卫工人免费饮水点，以解决环卫工人在酷暑以及严寒时期工作中的饮水问题。")]),i("v-uni-view",{},[e._v("2.小李补胎将根据车主在支付时所提供的车牌号和手机号为车主开通相关的权益。")]),i("v-uni-view",{},[e._v("3.车主持支付凭证到小李补胎任何门店即可尊享全年免费添加瓶装玻璃水。")]),i("v-uni-view",{},[e._v("备注：您也可以购买亲友卡，集团卡，送亲友，送同事，与他们一起尊享全年免费添加瓶装玻璃水活动。")])],1)],1)],1),i("v-uni-view",{staticClass:"enter",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.goDetail.apply(void 0,arguments)}}},[e._v("立即参与")])],1):e._e()},o=[]},c28f:function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,".line[data-v-010e9e62]{display:inline-block;height:%?36?%;line-height:%?36?%;border-radius:%?5?%;width:%?7?%;background-color:green;vertical-align:middle;margin-right:%?10?%}.info1[data-v-010e9e62]{display:flex;justify-content:space-between;align-items:center;padding:%?30?%}uni-swiper[data-v-010e9e62]{width:%?690?%;height:%?400?%;margin:auto;border-radius:%?20?%;overflow:hidden;margin-top:%?30?%}.logo[data-v-010e9e62]{width:100%;height:200px;vertical-align:top}.text-area[data-v-010e9e62]{text-align:center;padding:%?20?% 0;font-size:%?36?%}.bottom[data-v-010e9e62]{padding:%?20?%}.outer[data-v-010e9e62]{width:90%;margin:20px auto;border:1px solid #f1f1f1;border-radius:%?10?%;overflow:hidden;margin-top:0}.detail[data-v-010e9e62]{color:#333;font-size:14px;line-height:24px}.enter[data-v-010e9e62]{text-align:center;line-height:40px;color:#fff;margin:0 %?40?%;border-radius:%?14?%;background:green}",""]),e.exports=t},e38f:function(e,t,n){"use strict";n.r(t);var i=n("aac5"),a=n("9bf3");for(var o in a)"default"!==o&&function(e){n.d(t,e,(function(){return a[e]}))}(o);n("2166");var r,c=n("f0c5"),s=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,"010e9e62",null,!1,i["a"],r);t["default"]=s.exports}}]);