(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"0041":function(e,t,i){"use strict";var n=i("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.share=void 0;var a=n(i("d100")),o=function(e){(0,a.default)({url:"/api/WxJsSDKConfig",data:{url:location.href},success:function(t){var n=i("22a7");console.log(e),n.config({debug:!1,appId:t.data.data.appId,timestamp:t.data.data.timestamp,nonceStr:t.data.data.nonceStr,signature:t.data.data.signature,jsApiList:["updateAppMessageShareData","updateTimelineShareData"]}),n.ready((function(){n.updateTimelineShareData({title:"水+计划卡",link:e,imgUrl:"http://shuijia.m.xiaolibutai.com/img/tubiao.jpg",success:function(){}})})),n.ready((function(){n.updateAppMessageShareData({title:"水+计划卡",desc:'尊享全年到"小李补胎"任意门店免费添加瓶装玻璃水',link:e,imgUrl:"http://shuijia.m.xiaolibutai.com/img/tubiao.jpg",success:function(){}})}))}})};t.share=o},"114f":function(e,t,i){e.exports=i.p+"static/img/u344.38ce5d7a.png"},"17f3":function(e,t,i){"use strict";var n=i("4ea4");i("c975"),i("ac1f"),i("841c"),i("1276"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(i("d100")),o=i("0041"),r={data:function(){return{title:"水+计划公益活动介绍",code:"",openid:"",access_token:"",nike_name:"",show:!1,cardInfo:{rest_day:""}}},onLoad:function(){var e=this;uni.getStorageSync("token")&&(0,a.default)({url:"/api/UserLatestCard",success:function(t){e.cardInfo=t.data.data}}),this.link="http://shuijia.m.xiaolibutai.com/",(0,o.share)(this.link);var t=location.href,i=encodeURIComponent(t);this.code=this.getUrlCode().code,null==this.code||""===this.code?window.location.href="http://open.weixin.qq.com/connect/oauth2/authorize?appid=wxe711a119a78ccbd7&redirect_uri=".concat(i,"&response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect"):(this.show=!0,(0,a.default)({url:"/api/WxOAuth2AccessToken",data:{js_code:this.code},success:function(t){e.openid=t.data.data.openid,uni.setStorageSync("openid",e.openid),e.access_token=t.data.data.access_token,(0,a.default)({url:"/api/WxUserInfo",data:{openid:e.openid,access_token:e.access_token},success:function(t){e.nike_name=t.data.data.nickname,(0,a.default)({url:"/api/Passport",data:{open_id:e.openid,nike_name:e.nike_name},header:{"Content-Type":"application/x-www-form-urlencoded"},method:"POST",success:function(t){uni.setStorageSync("token",t.data.data.token),uni.setStorageSync("nike_name",e.nike_name),(0,a.default)({url:"/api/UserLatestCard",success:function(t){e.cardInfo=t.data.data}})}})}})}}))},methods:{getUrlCode:function(){var e=location.search;this.winUrl=e;var t=new Object;if(-1!=e.indexOf("?"))for(var i=e.substr(1),n=i.split("&"),a=0;a<n.length;a++)t[n[a].split("=")[0]]=n[a].split("=")[1];return t},goDetail:function(){uni.navigateTo({url:"/pages/detail/detail"})}}};t.default=r},"22a7":function(e,t,i){var n;!function(a,o){n=function(){return o(a)}.call(t,i,t,e),void 0===n||(e.exports=n)}(window,(function(e,t){if(!e.jWeixin){var i,n={config:"preVerifyJSAPI",onMenuShareTimeline:"menu:share:timeline",onMenuShareAppMessage:"menu:share:appmessage",onMenuShareQQ:"menu:share:qq",onMenuShareWeibo:"menu:share:weiboApp",onMenuShareQZone:"menu:share:QZone",previewImage:"imagePreview",getLocation:"geoLocation",openProductSpecificView:"openProductViewWithPid",addCard:"batchAddCard",openCard:"batchViewCard",chooseWXPay:"getBrandWCPayRequest",openEnterpriseRedPacket:"getRecevieBizHongBaoRequest",startSearchBeacons:"startMonitoringBeacons",stopSearchBeacons:"stopMonitoringBeacons",onSearchBeacons:"onBeaconsInRange",consumeAndShareCard:"consumedShareCard",openAddress:"editAddress"},a=function(){var e={};for(var t in n)e[n[t]]=t;return e}(),o=e.document,r=o.title,c=navigator.userAgent.toLowerCase(),s=navigator.platform.toLowerCase(),d=!(!s.match("mac")&&!s.match("win")),u=-1!=c.indexOf("wxdebugger"),l=-1!=c.indexOf("micromessenger"),p=-1!=c.indexOf("android"),f=-1!=c.indexOf("iphone")||-1!=c.indexOf("ipad"),g=(i=c.match(/micromessenger\/(\d+\.\d+\.\d+)/)||c.match(/micromessenger\/(\d+\.\d+)/))?i[1]:"",m={initStartTime:O(),initEndTime:0,preVerifyStartTime:0,preVerifyEndTime:0},h={version:1,appId:"",initTime:0,preVerifyTime:0,networkType:"",isPreVerifyOk:1,systemType:f?1:p?2:-1,clientVersion:g,url:encodeURIComponent(location.href)},v={},w={_completes:[]},S={state:0,data:{}};L((function(){m.initEndTime=O()}));var y=!1,_=[],k={config:function(t){V("config",v=t);var i=!1!==v.check;L((function(){if(i)T(n.config,{verifyJsApiList:A(v.jsApiList),verifyOpenTagList:A(v.openTagList)},function(){w._complete=function(e){m.preVerifyEndTime=O(),S.state=1,S.data=e},w.success=function(e){h.isPreVerifyOk=0},w.fail=function(e){w._fail?w._fail(e):S.state=-1};var e=w._completes;return e.push((function(){!function(){if(!(d||u||v.debug||g<"6.0.2"||h.systemType<0)){var e=new Image;h.appId=v.appId,h.initTime=m.initEndTime-m.initStartTime,h.preVerifyTime=m.preVerifyEndTime-m.preVerifyStartTime,k.getNetworkType({isInnerInvoke:!0,success:function(t){h.networkType=t.networkType;var i="https://open.weixin.qq.com/sdk/report?v="+h.version+"&o="+h.isPreVerifyOk+"&s="+h.systemType+"&c="+h.clientVersion+"&a="+h.appId+"&n="+h.networkType+"&i="+h.initTime+"&p="+h.preVerifyTime+"&u="+h.url;e.src=i}})}}()})),w.complete=function(t){for(var i=0,n=e.length;i<n;++i)e[i]();w._completes=[]},w}()),m.preVerifyStartTime=O();else{S.state=1;for(var e=w._completes,t=0,a=e.length;t<a;++t)e[t]();w._completes=[]}})),k.invoke||(k.invoke=function(t,i,n){e.WeixinJSBridge&&WeixinJSBridge.invoke(t,M(i),n)},k.on=function(t,i){e.WeixinJSBridge&&WeixinJSBridge.on(t,i)})},ready:function(e){0!=S.state?e():(w._completes.push(e),!l&&v.debug&&e())},error:function(e){g<"6.0.2"||(-1==S.state?e(S.data):w._fail=e)},checkJsApi:function(e){T("checkJsApi",{jsApiList:A(e.jsApiList)},(e._complete=function(e){if(p){var t=e.checkResult;t&&(e.checkResult=JSON.parse(t))}e=function(e){var t=e.checkResult;for(var i in t){var n=a[i];n&&(t[n]=t[i],delete t[i])}return e}(e)},e))},onMenuShareTimeline:function(e){b(n.onMenuShareTimeline,{complete:function(){T("shareTimeline",{title:e.title||r,desc:e.title||r,img_url:e.imgUrl||"",link:e.link||location.href,type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareAppMessage:function(e){b(n.onMenuShareAppMessage,{complete:function(t){"favorite"===t.scene?T("sendAppMessage",{title:e.title||r,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""}):T("sendAppMessage",{title:e.title||r,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareQQ:function(e){b(n.onMenuShareQQ,{complete:function(){T("shareQQ",{title:e.title||r,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareWeibo:function(e){b(n.onMenuShareWeibo,{complete:function(){T("shareWeiboApp",{title:e.title||r,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareQZone:function(e){b(n.onMenuShareQZone,{complete:function(){T("shareQZone",{title:e.title||r,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},updateTimelineShareData:function(e){T("updateTimelineShareData",{title:e.title,link:e.link,imgUrl:e.imgUrl},e)},updateAppMessageShareData:function(e){T("updateAppMessageShareData",{title:e.title,desc:e.desc,link:e.link,imgUrl:e.imgUrl},e)},startRecord:function(e){T("startRecord",{},e)},stopRecord:function(e){T("stopRecord",{},e)},onVoiceRecordEnd:function(e){b("onVoiceRecordEnd",e)},playVoice:function(e){T("playVoice",{localId:e.localId},e)},pauseVoice:function(e){T("pauseVoice",{localId:e.localId},e)},stopVoice:function(e){T("stopVoice",{localId:e.localId},e)},onVoicePlayEnd:function(e){b("onVoicePlayEnd",e)},uploadVoice:function(e){T("uploadVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadVoice:function(e){T("downloadVoice",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},translateVoice:function(e){T("translateVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},chooseImage:function(e){T("chooseImage",{scene:"1|2",count:e.count||9,sizeType:e.sizeType||["original","compressed"],sourceType:e.sourceType||["album","camera"]},(e._complete=function(e){if(p){var t=e.localIds;try{t&&(e.localIds=JSON.parse(t))}catch(e){}}},e))},getLocation:function(e){},previewImage:function(e){T(n.previewImage,{current:e.current,urls:e.urls},e)},uploadImage:function(e){T("uploadImage",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadImage:function(e){T("downloadImage",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},getLocalImgData:function(e){!1===y?(y=!0,T("getLocalImgData",{localId:e.localId},(e._complete=function(e){if(y=!1,0<_.length){var t=_.shift();wx.getLocalImgData(t)}},e))):_.push(e)},getNetworkType:function(e){T("getNetworkType",{},(e._complete=function(e){e=function(e){var t=e.errMsg;e.errMsg="getNetworkType:ok";var i=e.subtype;if(delete e.subtype,i)e.networkType=i;else{var n=t.indexOf(":"),a=t.substring(n+1);switch(a){case"wifi":case"edge":case"wwan":e.networkType=a;break;default:e.errMsg="getNetworkType:fail"}}return e}(e)},e))},openLocation:function(e){T("openLocation",{latitude:e.latitude,longitude:e.longitude,name:e.name||"",address:e.address||"",scale:e.scale||28,infoUrl:e.infoUrl||""},e)},getLocation:function(e){T(n.getLocation,{type:(e=e||{}).type||"wgs84"},(e._complete=function(e){delete e.type},e))},hideOptionMenu:function(e){T("hideOptionMenu",{},e)},showOptionMenu:function(e){T("showOptionMenu",{},e)},closeWindow:function(e){T("closeWindow",{},e=e||{})},hideMenuItems:function(e){T("hideMenuItems",{menuList:e.menuList},e)},showMenuItems:function(e){T("showMenuItems",{menuList:e.menuList},e)},hideAllNonBaseMenuItem:function(e){T("hideAllNonBaseMenuItem",{},e)},showAllNonBaseMenuItem:function(e){T("showAllNonBaseMenuItem",{},e)},scanQRCode:function(e){T("scanQRCode",{needResult:(e=e||{}).needResult||0,scanType:e.scanType||["qrCode","barCode"]},(e._complete=function(e){if(f){var t=e.resultStr;if(t){var i=JSON.parse(t);e.resultStr=i&&i.scan_code&&i.scan_code.scan_result}}},e))},openAddress:function(e){T(n.openAddress,{},(e._complete=function(e){e=function(e){return e.postalCode=e.addressPostalCode,delete e.addressPostalCode,e.provinceName=e.proviceFirstStageName,delete e.proviceFirstStageName,e.cityName=e.addressCitySecondStageName,delete e.addressCitySecondStageName,e.countryName=e.addressCountiesThirdStageName,delete e.addressCountiesThirdStageName,e.detailInfo=e.addressDetailInfo,delete e.addressDetailInfo,e}(e)},e))},openProductSpecificView:function(e){T(n.openProductSpecificView,{pid:e.productId,view_type:e.viewType||0,ext_info:e.extInfo},e)},addCard:function(e){for(var t=e.cardList,i=[],a=0,o=t.length;a<o;++a){var r=t[a],c={card_id:r.cardId,card_ext:r.cardExt};i.push(c)}T(n.addCard,{card_list:i},(e._complete=function(e){var t=e.card_list;if(t){for(var i=0,n=(t=JSON.parse(t)).length;i<n;++i){var a=t[i];a.cardId=a.card_id,a.cardExt=a.card_ext,a.isSuccess=!!a.is_succ,delete a.card_id,delete a.card_ext,delete a.is_succ}e.cardList=t,delete e.card_list}},e))},chooseCard:function(e){T("chooseCard",{app_id:v.appId,location_id:e.shopId||"",sign_type:e.signType||"SHA1",card_id:e.cardId||"",card_type:e.cardType||"",card_sign:e.cardSign,time_stamp:e.timestamp+"",nonce_str:e.nonceStr},(e._complete=function(e){e.cardList=e.choose_card_info,delete e.choose_card_info},e))},openCard:function(e){for(var t=e.cardList,i=[],a=0,o=t.length;a<o;++a){var r=t[a],c={card_id:r.cardId,code:r.code};i.push(c)}T(n.openCard,{card_list:i},e)},consumeAndShareCard:function(e){T(n.consumeAndShareCard,{consumedCardId:e.cardId,consumedCode:e.code},e)},chooseWXPay:function(e){T(n.chooseWXPay,C(e),e)},openEnterpriseRedPacket:function(e){T(n.openEnterpriseRedPacket,C(e),e)},startSearchBeacons:function(e){T(n.startSearchBeacons,{ticket:e.ticket},e)},stopSearchBeacons:function(e){T(n.stopSearchBeacons,{},e)},onSearchBeacons:function(e){b(n.onSearchBeacons,e)},openEnterpriseChat:function(e){T("openEnterpriseChat",{useridlist:e.userIds,chatname:e.groupName},e)},launchMiniProgram:function(e){T("launchMiniProgram",{targetAppId:e.targetAppId,path:function(e){if("string"==typeof e&&0<e.length){var t=e.split("?")[0],i=e.split("?")[1];return t+=".html",void 0!==i?t+"?"+i:t}}(e.path),envVersion:e.envVersion},e)},openBusinessView:function(e){T("openBusinessView",{businessType:e.businessType,queryString:e.queryString||"",envVersion:e.envVersion},(e._complete=function(e){if(p){var t=e.extraData;if(t)try{e.extraData=JSON.parse(t)}catch(t){e.extraData={}}}},e))},miniProgram:{navigateBack:function(e){e=e||{},L((function(){T("invokeMiniProgramAPI",{name:"navigateBack",arg:{delta:e.delta||1}},e)}))},navigateTo:function(e){L((function(){T("invokeMiniProgramAPI",{name:"navigateTo",arg:{url:e.url}},e)}))},redirectTo:function(e){L((function(){T("invokeMiniProgramAPI",{name:"redirectTo",arg:{url:e.url}},e)}))},switchTab:function(e){L((function(){T("invokeMiniProgramAPI",{name:"switchTab",arg:{url:e.url}},e)}))},reLaunch:function(e){L((function(){T("invokeMiniProgramAPI",{name:"reLaunch",arg:{url:e.url}},e)}))},postMessage:function(e){L((function(){T("invokeMiniProgramAPI",{name:"postMessage",arg:e.data||{}},e)}))},getEnv:function(t){L((function(){t({miniprogram:"miniprogram"===e.__wxjs_environment})}))}}},I=1,x={};return o.addEventListener("error",(function(e){if(!p){var t=e.target,i=t.tagName,n=t.src;if(("IMG"==i||"VIDEO"==i||"AUDIO"==i||"SOURCE"==i)&&-1!=n.indexOf("wxlocalresource://")){e.preventDefault(),e.stopPropagation();var a=t["wx-id"];if(a||(a=I++,t["wx-id"]=a),x[a])return;x[a]=!0,wx.ready((function(){wx.getLocalImgData({localId:n,success:function(e){t.src=e.localData}})}))}}}),!0),o.addEventListener("load",(function(e){if(!p){var t=e.target,i=t.tagName;if(t.src,"IMG"==i||"VIDEO"==i||"AUDIO"==i||"SOURCE"==i){var n=t["wx-id"];n&&(x[n]=!1)}}}),!0),t&&(e.wx=e.jWeixin=k),k}function T(t,i,n){e.WeixinJSBridge?WeixinJSBridge.invoke(t,M(i),(function(e){P(t,e,n)})):V(t,n)}function b(t,i,n){e.WeixinJSBridge?WeixinJSBridge.on(t,(function(e){n&&n.trigger&&n.trigger(e),P(t,e,i)})):V(t,n||i)}function M(e){return(e=e||{}).appId=v.appId,e.verifyAppId=v.appId,e.verifySignType="sha1",e.verifyTimestamp=v.timestamp+"",e.verifyNonceStr=v.nonceStr,e.verifySignature=v.signature,e}function C(e){return{timeStamp:e.timestamp+"",nonceStr:e.nonceStr,package:e.package,paySign:e.paySign,signType:e.signType||"SHA1"}}function P(e,t,i){"openEnterpriseChat"!=e&&"openBusinessView"!==e||(t.errCode=t.err_code),delete t.err_code,delete t.err_desc,delete t.err_detail;var n=t.errMsg;n||(n=t.err_msg,delete t.err_msg,n=function(e,t){var i=e,n=a[i];n&&(i=n);var o="ok";if(t){var r=t.indexOf(":");"confirm"==(o=t.substring(r+1))&&(o="ok"),"failed"==o&&(o="fail"),-1!=o.indexOf("failed_")&&(o=o.substring(7)),-1!=o.indexOf("fail_")&&(o=o.substring(5)),"access denied"!=(o=(o=o.replace(/_/g," ")).toLowerCase())&&"no permission to execute"!=o||(o="permission denied"),"config"==i&&"function not exist"==o&&(o="ok"),""==o&&(o="fail")}return i+":"+o}(e,n),t.errMsg=n),(i=i||{})._complete&&(i._complete(t),delete i._complete),n=t.errMsg||"",v.debug&&!i.isInnerInvoke&&alert(JSON.stringify(t));var o=n.indexOf(":");switch(n.substring(o+1)){case"ok":i.success&&i.success(t);break;case"cancel":i.cancel&&i.cancel(t);break;default:i.fail&&i.fail(t)}i.complete&&i.complete(t)}function A(e){if(e){for(var t=0,i=e.length;t<i;++t){var a=e[t],o=n[a];o&&(e[t]=o)}return e}}function V(e,t){if(!(!v.debug||t&&t.isInnerInvoke)){var i=a[e];i&&(e=i),t&&t._complete&&delete t._complete,console.log('"'+e+'",',t||"")}}function O(){return(new Date).getTime()}function L(t){l&&(e.WeixinJSBridge?t():o.addEventListener&&o.addEventListener("WeixinJSBridgeReady",t,!1))}}))},3778:function(e,t,i){"use strict";i.r(t);var n=i("17f3"),a=i.n(n);for(var o in n)"default"!==o&&function(e){i.d(t,e,(function(){return n[e]}))}(o);t["default"]=a.a},"5cd2":function(e,t,i){var n=i("f5d7");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("4f06").default;a("04af76f4",n,!0,{sourceMap:!1,shadowMode:!1})},a81a:function(e,t,i){"use strict";var n=i("5cd2"),a=i.n(n);a.a},a911:function(e,t,i){"use strict";var n;i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return o})),i.d(t,"a",(function(){return n}));var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.show?n("v-uni-view",{staticClass:"content"},[n("v-uni-view",{},[n("v-uni-swiper",{staticStyle:{height:"200px"},attrs:{"indicator-color":"rgba(255,255,255,.3)","indicator-active-color":"#fff","indicator-dots":!0,autoplay:!0,interval:5e3,duration:1e3,circular:"true"}},[n("v-uni-swiper-item",[n("v-uni-view",{staticClass:"swiper-item"},[n("v-uni-image",{staticClass:"logo",attrs:{src:i("b420")}})],1)],1),n("v-uni-swiper-item",[n("v-uni-view",{staticClass:"swiper-item"},[n("v-uni-image",{staticClass:"logo",attrs:{src:i("f12c")}})],1)],1),n("v-uni-swiper-item",[n("v-uni-view",{staticClass:"swiper-item"},[n("v-uni-image",{staticClass:"logo",attrs:{src:i("114f")}})],1)],1)],1)],1),n("v-uni-view",{staticClass:"info1",staticStyle:{"justify-content":"flex-start"}},[n("v-uni-text",{staticClass:"line"}),n("v-uni-text",{staticStyle:{"font-weight":"bold"}},[e._v("活动规则")])],1),n("v-uni-view",{staticClass:"outer"},[n("v-uni-view",{staticClass:"bottom"},[n("v-uni-view",{staticClass:"detail"},[n("v-uni-view",{},[e._v("1.车主仅需支付10元即可一年内在小李补胎所有门店免费添加瓶装玻璃水，同时小李补胎将拿出其中的部分资金在每个门店建设环卫工人免费饮水点，以解决环卫工人在酷暑以及严寒时期工作中的饮水问题。")]),n("v-uni-view",{},[e._v("2.小李补胎将根据车主在支付时所提供的车牌号和手机号为车主开通相关的权益。")]),n("v-uni-view",{},[e._v("3.车主持支付凭证到小李补胎任何门店即可尊享全年免费添加瓶装玻璃水。")]),n("v-uni-view",{},[e._v("备注：您也可以购买亲友卡，集团卡，送亲友，送同事，与他们一起尊享全年免费添加瓶装玻璃水活动。")])],1)],1)],1),n("v-uni-view",{staticClass:"enter",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.goDetail.apply(void 0,arguments)}}},[e._v("立即参与")])],1):e._e()},o=[]},b420:function(e,t,i){e.exports=i.p+"static/img/IMG_6124.807bda4d.png"},bc94:function(e,t,i){"use strict";i.r(t);var n=i("a911"),a=i("3778");for(var o in a)"default"!==o&&function(e){i.d(t,e,(function(){return a[e]}))}(o);i("a81a");var r,c=i("f0c5"),s=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"010e9e62",null,!1,n["a"],r);t["default"]=s.exports},d100:function(e,t,i){"use strict";var n=i("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(i("5530")),o=function(e){e.url="http://shuijia.api.xiaolibutai.com"+e.url;var t=uni.getStorageSync("token");return t&&(e.header=(0,a.default)({token:t},e.header)),uni.request(e)},r=o;t.default=r},f12c:function(e,t,i){e.exports=i.p+"static/img/banner1.9047b417.jpg"},f5d7:function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,".line[data-v-010e9e62]{display:inline-block;height:%?36?%;line-height:%?36?%;border-radius:%?5?%;width:%?7?%;background-color:green;vertical-align:middle;margin-right:%?10?%}.info1[data-v-010e9e62]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:%?30?%}uni-swiper[data-v-010e9e62]{width:%?690?%;height:%?400?%;margin:auto;border-radius:%?20?%;overflow:hidden;margin-top:%?30?%}.logo[data-v-010e9e62]{width:100%;height:200px;vertical-align:top}.text-area[data-v-010e9e62]{text-align:center;padding:%?20?% 0;font-size:%?36?%}.bottom[data-v-010e9e62]{padding:%?20?%}.outer[data-v-010e9e62]{width:90%;margin:20px auto;border:1px solid #f1f1f1;border-radius:%?10?%;overflow:hidden;margin-top:0}.detail[data-v-010e9e62]{color:#333;font-size:14px;line-height:24px}.enter[data-v-010e9e62]{text-align:center;line-height:40px;color:#fff;margin:0 %?40?%;border-radius:%?14?%;background:green}",""]),e.exports=t}}]);