(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"074c":function(e,n,i){var t=i("2a0a");"string"===typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);var a=i("4f06").default;a("9f392a3c",t,!0,{sourceMap:!1,shadowMode:!1})},"2a0a":function(e,n,i){var t=i("24fb");n=t(!1),n.push([e.i,".line[data-v-2880fa00]{display:inline-block;height:%?36?%;line-height:%?36?%;border-radius:%?5?%;width:%?7?%;background-color:green;vertical-align:middle;margin-right:%?10?%}.info1[data-v-2880fa00]{display:flex;justify-content:space-between;align-items:center;padding:%?30?%}uni-swiper[data-v-2880fa00]{width:%?690?%;height:%?400?%;margin:auto;border-radius:%?20?%;overflow:hidden;margin-top:%?30?%}.logo[data-v-2880fa00]{width:100%;height:200px;vertical-align:top}.text-area[data-v-2880fa00]{text-align:center;padding:%?20?% 0;font-size:%?36?%}.bottom[data-v-2880fa00]{padding:%?20?%}.outer[data-v-2880fa00]{width:90%;margin:20px auto;border:1px solid #f1f1f1;border-radius:%?10?%;overflow:hidden;margin-top:0}.detail[data-v-2880fa00]{color:#333;font-size:14px;line-height:24px}.enter[data-v-2880fa00]{text-align:center;line-height:40px;color:#fff;margin:0 %?40?%;border-radius:%?14?%;background:green}",""]),e.exports=n},"2b53":function(e,n,i){"use strict";var t;i.d(n,"b",(function(){return a})),i.d(n,"c",(function(){return o})),i.d(n,"a",(function(){return t}));var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return e.show?t("v-uni-view",{staticClass:"content"},[t("v-uni-view",{},[t("v-uni-swiper",{staticStyle:{height:"200px"},attrs:{"indicator-color":"rgba(255,255,255,.3)","indicator-active-color":"#fff","indicator-dots":!0,autoplay:!0,interval:5e3,duration:1e3,circular:"true"}},[t("v-uni-swiper-item",[t("v-uni-view",{staticClass:"swiper-item"},[t("v-uni-image",{staticClass:"logo",attrs:{src:i("6376")}})],1)],1),t("v-uni-swiper-item",[t("v-uni-view",{staticClass:"swiper-item"},[t("v-uni-image",{staticClass:"logo",attrs:{src:i("a90e")}})],1)],1),t("v-uni-swiper-item",[t("v-uni-view",{staticClass:"swiper-item"},[t("v-uni-image",{staticClass:"logo",attrs:{src:i("881b")}})],1)],1)],1)],1),t("v-uni-view",{staticClass:"info1",staticStyle:{"justify-content":"flex-start"}},[t("v-uni-text",{staticClass:"line"}),t("v-uni-text",{staticStyle:{"font-weight":"bold"}},[e._v("活动规则")])],1),t("v-uni-view",{staticClass:"outer"},[t("v-uni-view",{staticClass:"bottom"},[t("v-uni-view",{staticClass:"detail"},[t("v-uni-view",{},[e._v("1.车主仅需支付10元即可一年内在小李补胎所有门店免费添加瓶装玻璃水，同时小李补胎将拿出其中的部分资金在每个门店建设环卫工人免费饮水点，以解决环卫工人在酷暑以及严寒时期工作中的饮水问题。")]),t("v-uni-view",{},[e._v("2.小李补胎将根据车主在支付时所提供的车牌号和手机号为车主开通相关的权益。")]),t("v-uni-view",{},[e._v("3.车主持支付凭证到小李补胎任何门店即可尊享全年免费添加瓶装玻璃水。")]),t("v-uni-view",{},[e._v("备注：您也可以购买亲友卡，集团卡，送亲友，送同事，与他们一起尊享全年免费添加瓶装玻璃水活动。")])],1)],1)],1),t("v-uni-view",{staticClass:"enter",on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.goDetail.apply(void 0,arguments)}}},[e._v("立即参与")])],1):e._e()},o=[]},"60de":function(e,n,i){"use strict";var t=i("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=t(i("5530")),o=function(e){e.url="https://shuijia.api.xiaolibutai.com"+e.url;var n=uni.getStorageSync("token");return n&&(e.header=(0,a.default)({token:n},e.header)),uni.request(e)},r=o;n.default=r},6376:function(e,n,i){e.exports=i.p+"static/img/IMG_6124.807bda4d.png"},"881b":function(e,n,i){e.exports=i.p+"static/img/u344.38ce5d7a.png"},"97fd":function(e,n,i){"use strict";var t=i("4ea4");i("c975"),i("ac1f"),i("841c"),i("1276"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=t(i("60de")),o=i("a421"),r={data:function(){return{title:"水+计划公益活动介绍",code:"",openid:"",access_token:"",nike_name:"",show:!1,cardInfo:{rest_day:""}}},onLoad:function(e){var n=this;this.source=e.s,this.link="http://shuijia.m.xiaolibutai.com/",(0,o.share)(this.link),(0,a.default)({url:"/api/Passport",success:function(e){if(0==e.data.data.auth_id){var i=location.href,t=encodeURIComponent(i);n.code=n.getUrlCode().code,null==n.code||""===n.code?window.location.href="http://open.weixin.qq.com/connect/oauth2/authorize?appid=wxe711a119a78ccbd7&redirect_uri=".concat(t,"&response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect"):(n.show=!0,(0,a.default)({url:"/api/WxOAuth2AccessToken",data:{js_code:n.code},success:function(e){n.openid=e.data.data.openid,uni.setStorageSync("openid",n.openid),n.access_token=e.data.data.access_token,(0,a.default)({url:"/api/WxUserInfo",data:{openid:n.openid,access_token:n.access_token},success:function(e){n.nike_name=e.data.data.nickname,(0,a.default)({url:"/api/Passport",data:{open_id:n.openid,nike_name:n.nike_name,source:n.source?n.source:1},header:{"Content-Type":"application/x-www-form-urlencoded"},method:"POST",success:function(e){uni.setStorageSync("token",e.data.data.token),uni.setStorageSync("nike_name",n.nike_name)}})}})}}))}else n.show=!0}})},methods:{getUrlCode:function(){var e=location.search;this.winUrl=e;var n=new Object;if(-1!=e.indexOf("?"))for(var i=e.substr(1),t=i.split("&"),a=0;a<t.length;a++)n[t[a].split("=")[0]]=t[a].split("=")[1];return n},goDetail:function(){uni.navigateTo({url:"/pages/detail/detail"})}}};n.default=r},"9bf3":function(e,n,i){"use strict";i.r(n);var t=i("97fd"),a=i.n(t);for(var o in t)"default"!==o&&function(e){i.d(n,e,(function(){return t[e]}))}(o);n["default"]=a.a},a37b:function(e,n,i){var t;!function(a,o){t=function(){return o(a)}.call(n,i,n,e),void 0===t||(e.exports=t)}(window,(function(e,n){if(!e.jWeixin){var i,t={config:"preVerifyJSAPI",onMenuShareTimeline:"menu:share:timeline",onMenuShareAppMessage:"menu:share:appmessage",onMenuShareQQ:"menu:share:qq",onMenuShareWeibo:"menu:share:weiboApp",onMenuShareQZone:"menu:share:QZone",previewImage:"imagePreview",getLocation:"geoLocation",openProductSpecificView:"openProductViewWithPid",addCard:"batchAddCard",openCard:"batchViewCard",chooseWXPay:"getBrandWCPayRequest",openEnterpriseRedPacket:"getRecevieBizHongBaoRequest",startSearchBeacons:"startMonitoringBeacons",stopSearchBeacons:"stopMonitoringBeacons",onSearchBeacons:"onBeaconsInRange",consumeAndShareCard:"consumedShareCard",openAddress:"editAddress"},a=function(){var e={};for(var n in t)e[t[n]]=n;return e}(),o=e.document,r=o.title,c=navigator.userAgent.toLowerCase(),s=navigator.platform.toLowerCase(),d=!(!s.match("mac")&&!s.match("win")),u=-1!=c.indexOf("wxdebugger"),l=-1!=c.indexOf("micromessenger"),p=-1!=c.indexOf("android"),f=-1!=c.indexOf("iphone")||-1!=c.indexOf("ipad"),g=(i=c.match(/micromessenger\/(\d+\.\d+\.\d+)/)||c.match(/micromessenger\/(\d+\.\d+)/))?i[1]:"",m={initStartTime:O(),initEndTime:0,preVerifyStartTime:0,preVerifyEndTime:0},h={version:1,appId:"",initTime:0,preVerifyTime:0,networkType:"",isPreVerifyOk:1,systemType:f?1:p?2:-1,clientVersion:g,url:encodeURIComponent(location.href)},v={},w={_completes:[]},S={state:0,data:{}};L((function(){m.initEndTime=O()}));var _=!1,y=[],k={config:function(n){V("config",v=n);var i=!1!==v.check;L((function(){if(i)T(t.config,{verifyJsApiList:A(v.jsApiList),verifyOpenTagList:A(v.openTagList)},function(){w._complete=function(e){m.preVerifyEndTime=O(),S.state=1,S.data=e},w.success=function(e){h.isPreVerifyOk=0},w.fail=function(e){w._fail?w._fail(e):S.state=-1};var e=w._completes;return e.push((function(){!function(){if(!(d||u||v.debug||g<"6.0.2"||h.systemType<0)){var e=new Image;h.appId=v.appId,h.initTime=m.initEndTime-m.initStartTime,h.preVerifyTime=m.preVerifyEndTime-m.preVerifyStartTime,k.getNetworkType({isInnerInvoke:!0,success:function(n){h.networkType=n.networkType;var i="https://open.weixin.qq.com/sdk/report?v="+h.version+"&o="+h.isPreVerifyOk+"&s="+h.systemType+"&c="+h.clientVersion+"&a="+h.appId+"&n="+h.networkType+"&i="+h.initTime+"&p="+h.preVerifyTime+"&u="+h.url;e.src=i}})}}()})),w.complete=function(n){for(var i=0,t=e.length;i<t;++i)e[i]();w._completes=[]},w}()),m.preVerifyStartTime=O();else{S.state=1;for(var e=w._completes,n=0,a=e.length;n<a;++n)e[n]();w._completes=[]}})),k.invoke||(k.invoke=function(n,i,t){e.WeixinJSBridge&&WeixinJSBridge.invoke(n,M(i),t)},k.on=function(n,i){e.WeixinJSBridge&&WeixinJSBridge.on(n,i)})},ready:function(e){0!=S.state?e():(w._completes.push(e),!l&&v.debug&&e())},error:function(e){g<"6.0.2"||(-1==S.state?e(S.data):w._fail=e)},checkJsApi:function(e){T("checkJsApi",{jsApiList:A(e.jsApiList)},(e._complete=function(e){if(p){var n=e.checkResult;n&&(e.checkResult=JSON.parse(n))}e=function(e){var n=e.checkResult;for(var i in n){var t=a[i];t&&(n[t]=n[i],delete n[i])}return e}(e)},e))},onMenuShareTimeline:function(e){b(t.onMenuShareTimeline,{complete:function(){T("shareTimeline",{title:e.title||r,desc:e.title||r,img_url:e.imgUrl||"",link:e.link||location.href,type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareAppMessage:function(e){b(t.onMenuShareAppMessage,{complete:function(n){"favorite"===n.scene?T("sendAppMessage",{title:e.title||r,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""}):T("sendAppMessage",{title:e.title||r,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareQQ:function(e){b(t.onMenuShareQQ,{complete:function(){T("shareQQ",{title:e.title||r,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareWeibo:function(e){b(t.onMenuShareWeibo,{complete:function(){T("shareWeiboApp",{title:e.title||r,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareQZone:function(e){b(t.onMenuShareQZone,{complete:function(){T("shareQZone",{title:e.title||r,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},updateTimelineShareData:function(e){T("updateTimelineShareData",{title:e.title,link:e.link,imgUrl:e.imgUrl},e)},updateAppMessageShareData:function(e){T("updateAppMessageShareData",{title:e.title,desc:e.desc,link:e.link,imgUrl:e.imgUrl},e)},startRecord:function(e){T("startRecord",{},e)},stopRecord:function(e){T("stopRecord",{},e)},onVoiceRecordEnd:function(e){b("onVoiceRecordEnd",e)},playVoice:function(e){T("playVoice",{localId:e.localId},e)},pauseVoice:function(e){T("pauseVoice",{localId:e.localId},e)},stopVoice:function(e){T("stopVoice",{localId:e.localId},e)},onVoicePlayEnd:function(e){b("onVoicePlayEnd",e)},uploadVoice:function(e){T("uploadVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadVoice:function(e){T("downloadVoice",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},translateVoice:function(e){T("translateVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},chooseImage:function(e){T("chooseImage",{scene:"1|2",count:e.count||9,sizeType:e.sizeType||["original","compressed"],sourceType:e.sourceType||["album","camera"]},(e._complete=function(e){if(p){var n=e.localIds;try{n&&(e.localIds=JSON.parse(n))}catch(e){}}},e))},getLocation:function(e){},previewImage:function(e){T(t.previewImage,{current:e.current,urls:e.urls},e)},uploadImage:function(e){T("uploadImage",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadImage:function(e){T("downloadImage",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},getLocalImgData:function(e){!1===_?(_=!0,T("getLocalImgData",{localId:e.localId},(e._complete=function(e){if(_=!1,0<y.length){var n=y.shift();wx.getLocalImgData(n)}},e))):y.push(e)},getNetworkType:function(e){T("getNetworkType",{},(e._complete=function(e){e=function(e){var n=e.errMsg;e.errMsg="getNetworkType:ok";var i=e.subtype;if(delete e.subtype,i)e.networkType=i;else{var t=n.indexOf(":"),a=n.substring(t+1);switch(a){case"wifi":case"edge":case"wwan":e.networkType=a;break;default:e.errMsg="getNetworkType:fail"}}return e}(e)},e))},openLocation:function(e){T("openLocation",{latitude:e.latitude,longitude:e.longitude,name:e.name||"",address:e.address||"",scale:e.scale||28,infoUrl:e.infoUrl||""},e)},getLocation:function(e){T(t.getLocation,{type:(e=e||{}).type||"wgs84"},(e._complete=function(e){delete e.type},e))},hideOptionMenu:function(e){T("hideOptionMenu",{},e)},showOptionMenu:function(e){T("showOptionMenu",{},e)},closeWindow:function(e){T("closeWindow",{},e=e||{})},hideMenuItems:function(e){T("hideMenuItems",{menuList:e.menuList},e)},showMenuItems:function(e){T("showMenuItems",{menuList:e.menuList},e)},hideAllNonBaseMenuItem:function(e){T("hideAllNonBaseMenuItem",{},e)},showAllNonBaseMenuItem:function(e){T("showAllNonBaseMenuItem",{},e)},scanQRCode:function(e){T("scanQRCode",{needResult:(e=e||{}).needResult||0,scanType:e.scanType||["qrCode","barCode"]},(e._complete=function(e){if(f){var n=e.resultStr;if(n){var i=JSON.parse(n);e.resultStr=i&&i.scan_code&&i.scan_code.scan_result}}},e))},openAddress:function(e){T(t.openAddress,{},(e._complete=function(e){e=function(e){return e.postalCode=e.addressPostalCode,delete e.addressPostalCode,e.provinceName=e.proviceFirstStageName,delete e.proviceFirstStageName,e.cityName=e.addressCitySecondStageName,delete e.addressCitySecondStageName,e.countryName=e.addressCountiesThirdStageName,delete e.addressCountiesThirdStageName,e.detailInfo=e.addressDetailInfo,delete e.addressDetailInfo,e}(e)},e))},openProductSpecificView:function(e){T(t.openProductSpecificView,{pid:e.productId,view_type:e.viewType||0,ext_info:e.extInfo},e)},addCard:function(e){for(var n=e.cardList,i=[],a=0,o=n.length;a<o;++a){var r=n[a],c={card_id:r.cardId,card_ext:r.cardExt};i.push(c)}T(t.addCard,{card_list:i},(e._complete=function(e){var n=e.card_list;if(n){for(var i=0,t=(n=JSON.parse(n)).length;i<t;++i){var a=n[i];a.cardId=a.card_id,a.cardExt=a.card_ext,a.isSuccess=!!a.is_succ,delete a.card_id,delete a.card_ext,delete a.is_succ}e.cardList=n,delete e.card_list}},e))},chooseCard:function(e){T("chooseCard",{app_id:v.appId,location_id:e.shopId||"",sign_type:e.signType||"SHA1",card_id:e.cardId||"",card_type:e.cardType||"",card_sign:e.cardSign,time_stamp:e.timestamp+"",nonce_str:e.nonceStr},(e._complete=function(e){e.cardList=e.choose_card_info,delete e.choose_card_info},e))},openCard:function(e){for(var n=e.cardList,i=[],a=0,o=n.length;a<o;++a){var r=n[a],c={card_id:r.cardId,code:r.code};i.push(c)}T(t.openCard,{card_list:i},e)},consumeAndShareCard:function(e){T(t.consumeAndShareCard,{consumedCardId:e.cardId,consumedCode:e.code},e)},chooseWXPay:function(e){T(t.chooseWXPay,C(e),e)},openEnterpriseRedPacket:function(e){T(t.openEnterpriseRedPacket,C(e),e)},startSearchBeacons:function(e){T(t.startSearchBeacons,{ticket:e.ticket},e)},stopSearchBeacons:function(e){T(t.stopSearchBeacons,{},e)},onSearchBeacons:function(e){b(t.onSearchBeacons,e)},openEnterpriseChat:function(e){T("openEnterpriseChat",{useridlist:e.userIds,chatname:e.groupName},e)},launchMiniProgram:function(e){T("launchMiniProgram",{targetAppId:e.targetAppId,path:function(e){if("string"==typeof e&&0<e.length){var n=e.split("?")[0],i=e.split("?")[1];return n+=".html",void 0!==i?n+"?"+i:n}}(e.path),envVersion:e.envVersion},e)},openBusinessView:function(e){T("openBusinessView",{businessType:e.businessType,queryString:e.queryString||"",envVersion:e.envVersion},(e._complete=function(e){if(p){var n=e.extraData;if(n)try{e.extraData=JSON.parse(n)}catch(n){e.extraData={}}}},e))},miniProgram:{navigateBack:function(e){e=e||{},L((function(){T("invokeMiniProgramAPI",{name:"navigateBack",arg:{delta:e.delta||1}},e)}))},navigateTo:function(e){L((function(){T("invokeMiniProgramAPI",{name:"navigateTo",arg:{url:e.url}},e)}))},redirectTo:function(e){L((function(){T("invokeMiniProgramAPI",{name:"redirectTo",arg:{url:e.url}},e)}))},switchTab:function(e){L((function(){T("invokeMiniProgramAPI",{name:"switchTab",arg:{url:e.url}},e)}))},reLaunch:function(e){L((function(){T("invokeMiniProgramAPI",{name:"reLaunch",arg:{url:e.url}},e)}))},postMessage:function(e){L((function(){T("invokeMiniProgramAPI",{name:"postMessage",arg:e.data||{}},e)}))},getEnv:function(n){L((function(){n({miniprogram:"miniprogram"===e.__wxjs_environment})}))}}},I=1,x={};return o.addEventListener("error",(function(e){if(!p){var n=e.target,i=n.tagName,t=n.src;if(("IMG"==i||"VIDEO"==i||"AUDIO"==i||"SOURCE"==i)&&-1!=t.indexOf("wxlocalresource://")){e.preventDefault(),e.stopPropagation();var a=n["wx-id"];if(a||(a=I++,n["wx-id"]=a),x[a])return;x[a]=!0,wx.ready((function(){wx.getLocalImgData({localId:t,success:function(e){n.src=e.localData}})}))}}}),!0),o.addEventListener("load",(function(e){if(!p){var n=e.target,i=n.tagName;if(n.src,"IMG"==i||"VIDEO"==i||"AUDIO"==i||"SOURCE"==i){var t=n["wx-id"];t&&(x[t]=!1)}}}),!0),n&&(e.wx=e.jWeixin=k),k}function T(n,i,t){e.WeixinJSBridge?WeixinJSBridge.invoke(n,M(i),(function(e){P(n,e,t)})):V(n,t)}function b(n,i,t){e.WeixinJSBridge?WeixinJSBridge.on(n,(function(e){t&&t.trigger&&t.trigger(e),P(n,e,i)})):V(n,t||i)}function M(e){return(e=e||{}).appId=v.appId,e.verifyAppId=v.appId,e.verifySignType="sha1",e.verifyTimestamp=v.timestamp+"",e.verifyNonceStr=v.nonceStr,e.verifySignature=v.signature,e}function C(e){return{timeStamp:e.timestamp+"",nonceStr:e.nonceStr,package:e.package,paySign:e.paySign,signType:e.signType||"SHA1"}}function P(e,n,i){"openEnterpriseChat"!=e&&"openBusinessView"!==e||(n.errCode=n.err_code),delete n.err_code,delete n.err_desc,delete n.err_detail;var t=n.errMsg;t||(t=n.err_msg,delete n.err_msg,t=function(e,n){var i=e,t=a[i];t&&(i=t);var o="ok";if(n){var r=n.indexOf(":");"confirm"==(o=n.substring(r+1))&&(o="ok"),"failed"==o&&(o="fail"),-1!=o.indexOf("failed_")&&(o=o.substring(7)),-1!=o.indexOf("fail_")&&(o=o.substring(5)),"access denied"!=(o=(o=o.replace(/_/g," ")).toLowerCase())&&"no permission to execute"!=o||(o="permission denied"),"config"==i&&"function not exist"==o&&(o="ok"),""==o&&(o="fail")}return i+":"+o}(e,t),n.errMsg=t),(i=i||{})._complete&&(i._complete(n),delete i._complete),t=n.errMsg||"",v.debug&&!i.isInnerInvoke&&alert(JSON.stringify(n));var o=t.indexOf(":");switch(t.substring(o+1)){case"ok":i.success&&i.success(n);break;case"cancel":i.cancel&&i.cancel(n);break;default:i.fail&&i.fail(n)}i.complete&&i.complete(n)}function A(e){if(e){for(var n=0,i=e.length;n<i;++n){var a=e[n],o=t[a];o&&(e[n]=o)}return e}}function V(e,n){if(!(!v.debug||n&&n.isInnerInvoke)){var i=a[e];i&&(e=i),n&&n._complete&&delete n._complete,console.log('"'+e+'",',n||"")}}function O(){return(new Date).getTime()}function L(n){l&&(e.WeixinJSBridge?n():o.addEventListener&&o.addEventListener("WeixinJSBridgeReady",n,!1))}}))},a421:function(e,n,i){"use strict";var t=i("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.share=void 0;var a=t(i("60de")),o=function(e){(0,a.default)({url:"/api/WxJsSDKConfig",data:{url:location.href},success:function(n){var t=i("a37b");console.log(e),t.config({debug:!1,appId:n.data.data.appId,timestamp:n.data.data.timestamp,nonceStr:n.data.data.nonceStr,signature:n.data.data.signature,jsApiList:["updateAppMessageShareData","updateTimelineShareData"]}),t.ready((function(){t.updateTimelineShareData({title:"水+计划卡",link:e,imgUrl:"http://shuijia.m.xiaolibutai.com/img/tubiao.jpg",success:function(){}})})),t.ready((function(){t.updateAppMessageShareData({title:"水+计划卡",desc:'尊享全年到"小李补胎"任意门店免费添加瓶装玻璃水',link:e,imgUrl:"http://shuijia.m.xiaolibutai.com/img/tubiao.jpg",success:function(){}})}))}})};n.share=o},a90e:function(e,n,i){e.exports=i.p+"static/img/banner1.9047b417.jpg"},e284:function(e,n,i){"use strict";var t=i("074c"),a=i.n(t);a.a},e38f:function(e,n,i){"use strict";i.r(n);var t=i("2b53"),a=i("9bf3");for(var o in a)"default"!==o&&function(e){i.d(n,e,(function(){return a[e]}))}(o);i("e284");var r,c=i("f0c5"),s=Object(c["a"])(a["default"],t["b"],t["c"],!1,null,"2880fa00",null,!1,t["a"],r);n["default"]=s.exports}}]);