(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-share-share"],{"1de5":function(e,t,n){"use strict";e.exports=function(e,t){return t||(t={}),e=e&&e.__esModule?e.default:e,"string"!==typeof e?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},"45a5":function(e,t,n){"use strict";var i=n("5065"),a=n.n(i);a.a},5065:function(e,t,n){var i=n("aed2");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("37d34393",i,!0,{sourceMap:!1,shadowMode:!1})},"60de":function(e,t,n){"use strict";var i=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n("5530")),o=function(e){e.url="http://shuijia.api.xiaolibutai.com"+e.url;var t=uni.getStorageSync("token");return t&&(e.header=(0,a.default)({token:t},e.header)),uni.request(e)},r=o;t.default=r},6698:function(e,t,n){"use strict";n.r(t);var i=n("8aee"),a=n("70e9");for(var o in a)"default"!==o&&function(e){n.d(t,e,(function(){return a[e]}))}(o);n("45a5");var r,s=n("f0c5"),c=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"187d815e",null,!1,i["a"],r);t["default"]=c.exports},"70e9":function(e,t,n){"use strict";n.r(t);var i=n("a2d6"),a=n.n(i);for(var o in i)"default"!==o&&function(e){n.d(t,e,(function(){return i[e]}))}(o);t["default"]=a.a},"893b":function(e,t,n){e.exports=n.p+"static/img/ping.093111e4.png"},"8aee":function(e,t,n){"use strict";var i;n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return i}));var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"content"},[n("v-uni-view",{staticClass:"wish"},[e._v("祝愿亲友每天好心情！")]),n("v-uni-view",{staticClass:"send"},[e._v("送您一张水+计划卡，激活后可到小李补胎任意门店免费添加瓶装玻璃水一年。")]),n("v-uni-view",{staticClass:"friend"},[e._v("--好友 "+e._s(e.options.name))]),n("v-uni-view",{staticClass:"proof"},[n("v-uni-view",{staticClass:"row1"},[e._v("来自"+e._s(e.options.name)+"的卡片")]),n("v-uni-view",{staticClass:" row1 left"},[""!=e.options.car?n("v-uni-text",[e._v(e._s(e.options.car))]):n("v-uni-text",["未绑定"==e.options.state?n("v-uni-text",[e._v("未激活")]):n("v-uni-text",[e._v(e._s(e.options.state))])],1)],1),n("v-uni-view",{staticClass:"row2"},[e._v("水+计划卡")]),n("v-uni-view",{staticClass:"space"},[e._v("凭此卡可在有效期内到小李补胎任意门店添加瓶装玻璃水")]),n("v-uni-view",{staticClass:"space"},[""!=e.options.etime?n("v-uni-text",[e._v("有效期："+e._s(e.options.e_time))]):n("v-uni-text",[e._v("自激活之日起一年内有效")])],1)],1),n("v-uni-view",{staticClass:"share"},[e._v("点击右上角分享链接发送给朋友")])],1)},o=[]},a2d6:function(e,t,n){"use strict";var i=n("4ea4");n("99af"),n("c975"),n("ac1f"),n("841c"),n("1276"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n("60de")),o={data:function(){return{options:{},link:""}},onLoad:function(e){document.title="水+计划分享页面",this.options=e,console.log(e),this.link="http://shuijia.m.xiaolibutai.com?share_time=".concat((new Date).getTime(),"&code1=").concat(e.code_,"#/pages/active/active"),this.share()},methods:{getUrlCode:function(){var e=location.search;this.winUrl=e;var t=new Object;if(-1!=e.indexOf("?"))for(var n=e.substr(1),i=n.split("&"),a=0;a<i.length;a++)t[i[a].split("=")[0]]=i[a].split("=")[1];return t},goback:function(){uni.navigateBack()},share:function(){var e=this;(0,a.default)({url:"/api/WxJsSDKConfig",data:{url:location.href},success:function(t){console.log(e.options.code);var i=n("a37b");i.config({debug:!1,appId:t.data.data.appId,timestamp:t.data.data.timestamp,nonceStr:t.data.data.nonceStr,signature:t.data.data.signature,jsApiList:["updateAppMessageShareData","updateTimelineShareData"]}),i.ready((function(){i.updateTimelineShareData({title:"水+计划卡",link:e.link,imgUrl:"http://shuijia.m.xiaolibutai.com/img/tubiao.jpg",success:function(){}})})),i.ready((function(){console.log(e.options.code),i.updateAppMessageShareData({title:"水+计划卡",desc:"您的好友赠送您一张水+计划卡，激活后可免费添加玻璃水一年",link:e.link,imgUrl:"http://shuijia.m.xiaolibutai.com/img/tubiao.jpg",success:function(){}})}))}})}}};t.default=o},a37b:function(e,t,n){var i;!function(a,o){i=function(){return o(a)}.call(t,n,t,e),void 0===i||(e.exports=i)}(window,(function(e,t){if(!e.jWeixin){var n,i={config:"preVerifyJSAPI",onMenuShareTimeline:"menu:share:timeline",onMenuShareAppMessage:"menu:share:appmessage",onMenuShareQQ:"menu:share:qq",onMenuShareWeibo:"menu:share:weiboApp",onMenuShareQZone:"menu:share:QZone",previewImage:"imagePreview",getLocation:"geoLocation",openProductSpecificView:"openProductViewWithPid",addCard:"batchAddCard",openCard:"batchViewCard",chooseWXPay:"getBrandWCPayRequest",openEnterpriseRedPacket:"getRecevieBizHongBaoRequest",startSearchBeacons:"startMonitoringBeacons",stopSearchBeacons:"stopMonitoringBeacons",onSearchBeacons:"onBeaconsInRange",consumeAndShareCard:"consumedShareCard",openAddress:"editAddress"},a=function(){var e={};for(var t in i)e[i[t]]=t;return e}(),o=e.document,r=o.title,s=navigator.userAgent.toLowerCase(),c=navigator.platform.toLowerCase(),d=!(!c.match("mac")&&!c.match("win")),u=-1!=s.indexOf("wxdebugger"),l=-1!=s.indexOf("micromessenger"),p=-1!=s.indexOf("android"),f=-1!=s.indexOf("iphone")||-1!=s.indexOf("ipad"),g=(n=s.match(/micromessenger\/(\d+\.\d+\.\d+)/)||s.match(/micromessenger\/(\d+\.\d+)/))?n[1]:"",m={initStartTime:L(),initEndTime:0,preVerifyStartTime:0,preVerifyEndTime:0},v={version:1,appId:"",initTime:0,preVerifyTime:0,networkType:"",isPreVerifyOk:1,systemType:f?1:p?2:-1,clientVersion:g,url:encodeURIComponent(location.href)},h={},w={_completes:[]},S={state:0,data:{}};O((function(){m.initEndTime=L()}));var _=!1,y=[],x={config:function(t){V("config",h=t);var n=!1!==h.check;O((function(){if(n)T(i.config,{verifyJsApiList:A(h.jsApiList),verifyOpenTagList:A(h.openTagList)},function(){w._complete=function(e){m.preVerifyEndTime=L(),S.state=1,S.data=e},w.success=function(e){v.isPreVerifyOk=0},w.fail=function(e){w._fail?w._fail(e):S.state=-1};var e=w._completes;return e.push((function(){!function(){if(!(d||u||h.debug||g<"6.0.2"||v.systemType<0)){var e=new Image;v.appId=h.appId,v.initTime=m.initEndTime-m.initStartTime,v.preVerifyTime=m.preVerifyEndTime-m.preVerifyStartTime,x.getNetworkType({isInnerInvoke:!0,success:function(t){v.networkType=t.networkType;var n="https://open.weixin.qq.com/sdk/report?v="+v.version+"&o="+v.isPreVerifyOk+"&s="+v.systemType+"&c="+v.clientVersion+"&a="+v.appId+"&n="+v.networkType+"&i="+v.initTime+"&p="+v.preVerifyTime+"&u="+v.url;e.src=n}})}}()})),w.complete=function(t){for(var n=0,i=e.length;n<i;++n)e[n]();w._completes=[]},w}()),m.preVerifyStartTime=L();else{S.state=1;for(var e=w._completes,t=0,a=e.length;t<a;++t)e[t]();w._completes=[]}})),x.invoke||(x.invoke=function(t,n,i){e.WeixinJSBridge&&WeixinJSBridge.invoke(t,M(n),i)},x.on=function(t,n){e.WeixinJSBridge&&WeixinJSBridge.on(t,n)})},ready:function(e){0!=S.state?e():(w._completes.push(e),!l&&h.debug&&e())},error:function(e){g<"6.0.2"||(-1==S.state?e(S.data):w._fail=e)},checkJsApi:function(e){T("checkJsApi",{jsApiList:A(e.jsApiList)},(e._complete=function(e){if(p){var t=e.checkResult;t&&(e.checkResult=JSON.parse(t))}e=function(e){var t=e.checkResult;for(var n in t){var i=a[n];i&&(t[i]=t[n],delete t[n])}return e}(e)},e))},onMenuShareTimeline:function(e){b(i.onMenuShareTimeline,{complete:function(){T("shareTimeline",{title:e.title||r,desc:e.title||r,img_url:e.imgUrl||"",link:e.link||location.href,type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareAppMessage:function(e){b(i.onMenuShareAppMessage,{complete:function(t){"favorite"===t.scene?T("sendAppMessage",{title:e.title||r,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""}):T("sendAppMessage",{title:e.title||r,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareQQ:function(e){b(i.onMenuShareQQ,{complete:function(){T("shareQQ",{title:e.title||r,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareWeibo:function(e){b(i.onMenuShareWeibo,{complete:function(){T("shareWeiboApp",{title:e.title||r,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareQZone:function(e){b(i.onMenuShareQZone,{complete:function(){T("shareQZone",{title:e.title||r,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},updateTimelineShareData:function(e){T("updateTimelineShareData",{title:e.title,link:e.link,imgUrl:e.imgUrl},e)},updateAppMessageShareData:function(e){T("updateAppMessageShareData",{title:e.title,desc:e.desc,link:e.link,imgUrl:e.imgUrl},e)},startRecord:function(e){T("startRecord",{},e)},stopRecord:function(e){T("stopRecord",{},e)},onVoiceRecordEnd:function(e){b("onVoiceRecordEnd",e)},playVoice:function(e){T("playVoice",{localId:e.localId},e)},pauseVoice:function(e){T("pauseVoice",{localId:e.localId},e)},stopVoice:function(e){T("stopVoice",{localId:e.localId},e)},onVoicePlayEnd:function(e){b("onVoicePlayEnd",e)},uploadVoice:function(e){T("uploadVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadVoice:function(e){T("downloadVoice",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},translateVoice:function(e){T("translateVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},chooseImage:function(e){T("chooseImage",{scene:"1|2",count:e.count||9,sizeType:e.sizeType||["original","compressed"],sourceType:e.sourceType||["album","camera"]},(e._complete=function(e){if(p){var t=e.localIds;try{t&&(e.localIds=JSON.parse(t))}catch(e){}}},e))},getLocation:function(e){},previewImage:function(e){T(i.previewImage,{current:e.current,urls:e.urls},e)},uploadImage:function(e){T("uploadImage",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadImage:function(e){T("downloadImage",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},getLocalImgData:function(e){!1===_?(_=!0,T("getLocalImgData",{localId:e.localId},(e._complete=function(e){if(_=!1,0<y.length){var t=y.shift();wx.getLocalImgData(t)}},e))):y.push(e)},getNetworkType:function(e){T("getNetworkType",{},(e._complete=function(e){e=function(e){var t=e.errMsg;e.errMsg="getNetworkType:ok";var n=e.subtype;if(delete e.subtype,n)e.networkType=n;else{var i=t.indexOf(":"),a=t.substring(i+1);switch(a){case"wifi":case"edge":case"wwan":e.networkType=a;break;default:e.errMsg="getNetworkType:fail"}}return e}(e)},e))},openLocation:function(e){T("openLocation",{latitude:e.latitude,longitude:e.longitude,name:e.name||"",address:e.address||"",scale:e.scale||28,infoUrl:e.infoUrl||""},e)},getLocation:function(e){T(i.getLocation,{type:(e=e||{}).type||"wgs84"},(e._complete=function(e){delete e.type},e))},hideOptionMenu:function(e){T("hideOptionMenu",{},e)},showOptionMenu:function(e){T("showOptionMenu",{},e)},closeWindow:function(e){T("closeWindow",{},e=e||{})},hideMenuItems:function(e){T("hideMenuItems",{menuList:e.menuList},e)},showMenuItems:function(e){T("showMenuItems",{menuList:e.menuList},e)},hideAllNonBaseMenuItem:function(e){T("hideAllNonBaseMenuItem",{},e)},showAllNonBaseMenuItem:function(e){T("showAllNonBaseMenuItem",{},e)},scanQRCode:function(e){T("scanQRCode",{needResult:(e=e||{}).needResult||0,scanType:e.scanType||["qrCode","barCode"]},(e._complete=function(e){if(f){var t=e.resultStr;if(t){var n=JSON.parse(t);e.resultStr=n&&n.scan_code&&n.scan_code.scan_result}}},e))},openAddress:function(e){T(i.openAddress,{},(e._complete=function(e){e=function(e){return e.postalCode=e.addressPostalCode,delete e.addressPostalCode,e.provinceName=e.proviceFirstStageName,delete e.proviceFirstStageName,e.cityName=e.addressCitySecondStageName,delete e.addressCitySecondStageName,e.countryName=e.addressCountiesThirdStageName,delete e.addressCountiesThirdStageName,e.detailInfo=e.addressDetailInfo,delete e.addressDetailInfo,e}(e)},e))},openProductSpecificView:function(e){T(i.openProductSpecificView,{pid:e.productId,view_type:e.viewType||0,ext_info:e.extInfo},e)},addCard:function(e){for(var t=e.cardList,n=[],a=0,o=t.length;a<o;++a){var r=t[a],s={card_id:r.cardId,card_ext:r.cardExt};n.push(s)}T(i.addCard,{card_list:n},(e._complete=function(e){var t=e.card_list;if(t){for(var n=0,i=(t=JSON.parse(t)).length;n<i;++n){var a=t[n];a.cardId=a.card_id,a.cardExt=a.card_ext,a.isSuccess=!!a.is_succ,delete a.card_id,delete a.card_ext,delete a.is_succ}e.cardList=t,delete e.card_list}},e))},chooseCard:function(e){T("chooseCard",{app_id:h.appId,location_id:e.shopId||"",sign_type:e.signType||"SHA1",card_id:e.cardId||"",card_type:e.cardType||"",card_sign:e.cardSign,time_stamp:e.timestamp+"",nonce_str:e.nonceStr},(e._complete=function(e){e.cardList=e.choose_card_info,delete e.choose_card_info},e))},openCard:function(e){for(var t=e.cardList,n=[],a=0,o=t.length;a<o;++a){var r=t[a],s={card_id:r.cardId,code:r.code};n.push(s)}T(i.openCard,{card_list:n},e)},consumeAndShareCard:function(e){T(i.consumeAndShareCard,{consumedCardId:e.cardId,consumedCode:e.code},e)},chooseWXPay:function(e){T(i.chooseWXPay,C(e),e)},openEnterpriseRedPacket:function(e){T(i.openEnterpriseRedPacket,C(e),e)},startSearchBeacons:function(e){T(i.startSearchBeacons,{ticket:e.ticket},e)},stopSearchBeacons:function(e){T(i.stopSearchBeacons,{},e)},onSearchBeacons:function(e){b(i.onSearchBeacons,e)},openEnterpriseChat:function(e){T("openEnterpriseChat",{useridlist:e.userIds,chatname:e.groupName},e)},launchMiniProgram:function(e){T("launchMiniProgram",{targetAppId:e.targetAppId,path:function(e){if("string"==typeof e&&0<e.length){var t=e.split("?")[0],n=e.split("?")[1];return t+=".html",void 0!==n?t+"?"+n:t}}(e.path),envVersion:e.envVersion},e)},openBusinessView:function(e){T("openBusinessView",{businessType:e.businessType,queryString:e.queryString||"",envVersion:e.envVersion},(e._complete=function(e){if(p){var t=e.extraData;if(t)try{e.extraData=JSON.parse(t)}catch(t){e.extraData={}}}},e))},miniProgram:{navigateBack:function(e){e=e||{},O((function(){T("invokeMiniProgramAPI",{name:"navigateBack",arg:{delta:e.delta||1}},e)}))},navigateTo:function(e){O((function(){T("invokeMiniProgramAPI",{name:"navigateTo",arg:{url:e.url}},e)}))},redirectTo:function(e){O((function(){T("invokeMiniProgramAPI",{name:"redirectTo",arg:{url:e.url}},e)}))},switchTab:function(e){O((function(){T("invokeMiniProgramAPI",{name:"switchTab",arg:{url:e.url}},e)}))},reLaunch:function(e){O((function(){T("invokeMiniProgramAPI",{name:"reLaunch",arg:{url:e.url}},e)}))},postMessage:function(e){O((function(){T("invokeMiniProgramAPI",{name:"postMessage",arg:e.data||{}},e)}))},getEnv:function(t){O((function(){t({miniprogram:"miniprogram"===e.__wxjs_environment})}))}}},I=1,k={};return o.addEventListener("error",(function(e){if(!p){var t=e.target,n=t.tagName,i=t.src;if(("IMG"==n||"VIDEO"==n||"AUDIO"==n||"SOURCE"==n)&&-1!=i.indexOf("wxlocalresource://")){e.preventDefault(),e.stopPropagation();var a=t["wx-id"];if(a||(a=I++,t["wx-id"]=a),k[a])return;k[a]=!0,wx.ready((function(){wx.getLocalImgData({localId:i,success:function(e){t.src=e.localData}})}))}}}),!0),o.addEventListener("load",(function(e){if(!p){var t=e.target,n=t.tagName;if(t.src,"IMG"==n||"VIDEO"==n||"AUDIO"==n||"SOURCE"==n){var i=t["wx-id"];i&&(k[i]=!1)}}}),!0),t&&(e.wx=e.jWeixin=x),x}function T(t,n,i){e.WeixinJSBridge?WeixinJSBridge.invoke(t,M(n),(function(e){P(t,e,i)})):V(t,i)}function b(t,n,i){e.WeixinJSBridge?WeixinJSBridge.on(t,(function(e){i&&i.trigger&&i.trigger(e),P(t,e,n)})):V(t,i||n)}function M(e){return(e=e||{}).appId=h.appId,e.verifyAppId=h.appId,e.verifySignType="sha1",e.verifyTimestamp=h.timestamp+"",e.verifyNonceStr=h.nonceStr,e.verifySignature=h.signature,e}function C(e){return{timeStamp:e.timestamp+"",nonceStr:e.nonceStr,package:e.package,paySign:e.paySign,signType:e.signType||"SHA1"}}function P(e,t,n){"openEnterpriseChat"!=e&&"openBusinessView"!==e||(t.errCode=t.err_code),delete t.err_code,delete t.err_desc,delete t.err_detail;var i=t.errMsg;i||(i=t.err_msg,delete t.err_msg,i=function(e,t){var n=e,i=a[n];i&&(n=i);var o="ok";if(t){var r=t.indexOf(":");"confirm"==(o=t.substring(r+1))&&(o="ok"),"failed"==o&&(o="fail"),-1!=o.indexOf("failed_")&&(o=o.substring(7)),-1!=o.indexOf("fail_")&&(o=o.substring(5)),"access denied"!=(o=(o=o.replace(/_/g," ")).toLowerCase())&&"no permission to execute"!=o||(o="permission denied"),"config"==n&&"function not exist"==o&&(o="ok"),""==o&&(o="fail")}return n+":"+o}(e,i),t.errMsg=i),(n=n||{})._complete&&(n._complete(t),delete n._complete),i=t.errMsg||"",h.debug&&!n.isInnerInvoke&&alert(JSON.stringify(t));var o=i.indexOf(":");switch(i.substring(o+1)){case"ok":n.success&&n.success(t);break;case"cancel":n.cancel&&n.cancel(t);break;default:n.fail&&n.fail(t)}n.complete&&n.complete(t)}function A(e){if(e){for(var t=0,n=e.length;t<n;++t){var a=e[t],o=i[a];o&&(e[t]=o)}return e}}function V(e,t){if(!(!h.debug||t&&t.isInnerInvoke)){var n=a[e];n&&(e=n),t&&t._complete&&delete t._complete,console.log('"'+e+'",',t||"")}}function L(){return(new Date).getTime()}function O(t){l&&(e.WeixinJSBridge?t():o.addEventListener&&o.addEventListener("WeixinJSBridgeReady",t,!1))}}))},aed2:function(e,t,n){var i=n("24fb"),a=n("1de5"),o=n("893b");t=i(!1);var r=a(o);t.push([e.i,".content[data-v-187d815e]{padding:%?30?%}.wish[data-v-187d815e]{font-size:22px;color:#333}.send[data-v-187d815e],\n.friend[data-v-187d815e]{color:#888;margin:%?20?% 0}.friend[data-v-187d815e]{text-align:right}.proof[data-v-187d815e]{margin:50px 10px;background:url("+r+") no-repeat 50%;background-size:cover;padding:%?20?%;border-radius:%?30?%;height:%?300?%;display:flex;flex-direction:column;justify-content:space-between;position:relative;color:#fff;box-shadow:5px 5px 5px #888}.row1[data-v-187d815e]{font-size:14px}.row2[data-v-187d815e]{font-size:%?48?%;margin-left:80px}.left[data-v-187d815e]{margin-left:40px}.row3[data-v-187d815e]{font-size:12px}.row4[data-v-187d815e]{font-size:%?38?%}.row4 uni-text[data-v-187d815e]{border:1px solid #ccc;padding:%?5?% %?20?%;border-radius:%?40?%}.water[data-v-187d815e]{position:absolute;right:%?116?%;top:42%;-webkit-transform:translateY(-50%);transform:translateY(-50%);text-align:center;font-size:18px}.leixing[data-v-187d815e]{position:absolute;font-size:%?24?%;top:%?20?%;right:%?20?%;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.top-part[data-v-187d815e]{display:flex;justify-content:space-around;height:80px;align-items:center}.bottom-part[data-v-187d815e]{text-align:center;line-height:50px}.bottom-button[data-v-187d815e]{position:fixed;bottom:0;width:%?690?%}.col[data-v-187d815e]{display:flex;flex-direction:column;align-items:center;font-size:12px}.col uni-image[data-v-187d815e]{width:%?64?%;height:%?64?%}.line1[data-v-187d815e]{width:%?750?%;margin-left:%?-30?%;height:%?5?%;background-color:#e5e5e5}.line2[data-v-187d815e]{width:%?750?%;margin-left:%?-30?%;height:%?10?%;background-color:#e5e5e5}.share[data-v-187d815e]{justify-content:center;margin-top:40px;display:flex;align-items:center;color:#01783a}.space[data-v-187d815e]{font-size:12px;margin-left:%?65?%}",""]),e.exports=t}}]);