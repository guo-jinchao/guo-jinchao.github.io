(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-active-active~pages-buy-buy~pages-my-my~pages-orderlist-orderlist"],{"06c5":function(e,t,n){"use strict";n("a630"),n("fb6a"),n("d3b7"),n("25f0"),n("3ca3"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var r=i(n("6b75"));function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(e){if("string"===typeof e)return(0,r.default)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,r.default)(e,t):void 0}}},"09f0":function(e,t,n){"use strict";function r(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,i=!1,o=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done);r=!0)if(n.push(a.value),t&&n.length===t)break}catch(s){i=!0,o=s}finally{try{r||null==c["return"]||c["return"]()}finally{if(i)throw o}}return n}}n("a4d3"),n("e01a"),n("d28b"),n("d3b7"),n("3ca3"),n("ddb0"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=r},"0d21":function(e,t,n){"use strict";function r(e){if(Array.isArray(e))return e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r},"1da1":function(e,t,n){"use strict";function r(e,t,n,r,i,o,a){try{var c=e[o](a),s=c.value}catch(u){return void n(u)}c.done?t(s):Promise.resolve(s).then(r,i)}function i(e){return function(){var t=this,n=arguments;return new Promise((function(i,o){var a=e.apply(t,n);function c(e){r(a,i,o,c,s,"next",e)}function s(e){r(a,i,o,c,s,"throw",e)}c(void 0)}))}}n("d3b7"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=i},3835:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=s;var r=c(n("0d21")),i=c(n("09f0")),o=c(n("06c5")),a=c(n("3d8c"));function c(e){return e&&e.__esModule?e:{default:e}}function s(e,t){return(0,r.default)(e)||(0,i.default)(e,t)||(0,o.default)(e,t)||(0,a.default)()}},"3d8c":function(e,t,n){"use strict";function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r},"60de":function(e,t,n){"use strict";var r=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n("5530")),o=function(e){e.url="https://shuijia.api.xiaolibutai.com"+e.url;var t=uni.getStorageSync("token");return t&&(e.header=(0,i.default)({token:t},e.header)),uni.request(e)},a=o;t.default=a},"6b75":function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r},"96cf":function(e,t){!function(t){"use strict";var n,r=Object.prototype,i=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag",u="object"===typeof e,d=t.regeneratorRuntime;if(d)u&&(e.exports=d);else{d=t.regeneratorRuntime=u?e.exports:{},d.wrap=_;var l="suspendedStart",f="suspendedYield",p="executing",h="completed",g={},m={};m[a]=function(){return this};var v=Object.getPrototypeOf,y=v&&v(v(E([])));y&&y!==r&&i.call(y,a)&&(m=y);var w=b.prototype=I.prototype=Object.create(m);k.prototype=w.constructor=b,b.constructor=k,b[s]=k.displayName="GeneratorFunction",d.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===k||"GeneratorFunction"===(t.displayName||t.name))},d.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,b):(e.__proto__=b,s in e||(e[s]="GeneratorFunction")),e.prototype=Object.create(w),e},d.awrap=function(e){return{__await:e}},x(T.prototype),T.prototype[c]=function(){return this},d.AsyncIterator=T,d.async=function(e,t,n,r){var i=new T(_(e,t,n,r));return d.isGeneratorFunction(t)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},x(w),w[s]="Generator",w[a]=function(){return this},w.toString=function(){return"[object Generator]"},d.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){while(t.length){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},d.values=E,A.prototype={constructor:A,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(O),!e)for(var t in this)"t"===t.charAt(0)&&i.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=n)},stop:function(){this.done=!0;var e=this.tryEntries[0],t=e.completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(r,i){return c.type="throw",c.arg=e,t.next=r,i&&(t.method="next",t.arg=n),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var s=i.call(a,"catchLoc"),u=i.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),O(n),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;O(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:E(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=n),g}}}function _(e,t,n,r){var i=t&&t.prototype instanceof I?t:I,o=Object.create(i.prototype),a=new A(r||[]);return o._invoke=M(e,n,a),o}function S(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(r){return{type:"throw",arg:r}}}function I(){}function k(){}function b(){}function x(e){["next","throw","return"].forEach((function(t){e[t]=function(e){return this._invoke(t,e)}}))}function T(e){function t(n,r,o,a){var c=S(e[n],e,r);if("throw"!==c.type){var s=c.arg,u=s.value;return u&&"object"===typeof u&&i.call(u,"__await")?Promise.resolve(u.__await).then((function(e){t("next",e,o,a)}),(function(e){t("throw",e,o,a)})):Promise.resolve(u).then((function(e){s.value=e,o(s)}),(function(e){return t("throw",e,o,a)}))}a(c.arg)}var n;function r(e,r){function i(){return new Promise((function(n,i){t(e,r,n,i)}))}return n=n?n.then(i,i):i()}this._invoke=r}function M(e,t,n){var r=l;return function(i,o){if(r===p)throw new Error("Generator is already running");if(r===h){if("throw"===i)throw o;return V()}n.method=i,n.arg=o;while(1){var a=n.delegate;if(a){var c=P(a,n);if(c){if(c===g)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===l)throw r=h,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=p;var s=S(e,t,n);if("normal"===s.type){if(r=n.done?h:f,s.arg===g)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=h,n.method="throw",n.arg=s.arg)}}}function P(e,t){var r=e.iterator[t.method];if(r===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=n,P(e,t),"throw"===t.method))return g;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var i=S(r,e.iterator,t.arg);if("throw"===i.type)return t.method="throw",t.arg=i.arg,t.delegate=null,g;var o=i.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=n),t.delegate=null,g):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,g)}function L(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function A(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(L,this),this.reset(!0)}function E(e){if(e){var t=e[a];if(t)return t.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){while(++r<e.length)if(i.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=n,t.done=!0,t};return o.next=o}}return{next:V}}function V(){return{value:n,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},a37b:function(e,t,n){var r;!function(i,o){r=function(){return o(i)}.call(t,n,t,e),void 0===r||(e.exports=r)}(window,(function(e,t){if(!e.jWeixin){var n,r={config:"preVerifyJSAPI",onMenuShareTimeline:"menu:share:timeline",onMenuShareAppMessage:"menu:share:appmessage",onMenuShareQQ:"menu:share:qq",onMenuShareWeibo:"menu:share:weiboApp",onMenuShareQZone:"menu:share:QZone",previewImage:"imagePreview",getLocation:"geoLocation",openProductSpecificView:"openProductViewWithPid",addCard:"batchAddCard",openCard:"batchViewCard",chooseWXPay:"getBrandWCPayRequest",openEnterpriseRedPacket:"getRecevieBizHongBaoRequest",startSearchBeacons:"startMonitoringBeacons",stopSearchBeacons:"stopMonitoringBeacons",onSearchBeacons:"onBeaconsInRange",consumeAndShareCard:"consumedShareCard",openAddress:"editAddress"},i=function(){var e={};for(var t in r)e[r[t]]=t;return e}(),o=e.document,a=o.title,c=navigator.userAgent.toLowerCase(),s=navigator.platform.toLowerCase(),u=!(!s.match("mac")&&!s.match("win")),d=-1!=c.indexOf("wxdebugger"),l=-1!=c.indexOf("micromessenger"),f=-1!=c.indexOf("android"),p=-1!=c.indexOf("iphone")||-1!=c.indexOf("ipad"),h=(n=c.match(/micromessenger\/(\d+\.\d+\.\d+)/)||c.match(/micromessenger\/(\d+\.\d+)/))?n[1]:"",g={initStartTime:E(),initEndTime:0,preVerifyStartTime:0,preVerifyEndTime:0},m={version:1,appId:"",initTime:0,preVerifyTime:0,networkType:"",isPreVerifyOk:1,systemType:p?1:f?2:-1,clientVersion:h,url:encodeURIComponent(location.href)},v={},y={_completes:[]},w={state:0,data:{}};V((function(){g.initEndTime=E()}));var _=!1,S=[],I={config:function(t){A("config",v=t);var n=!1!==v.check;V((function(){if(n)x(r.config,{verifyJsApiList:O(v.jsApiList),verifyOpenTagList:O(v.openTagList)},function(){y._complete=function(e){g.preVerifyEndTime=E(),w.state=1,w.data=e},y.success=function(e){m.isPreVerifyOk=0},y.fail=function(e){y._fail?y._fail(e):w.state=-1};var e=y._completes;return e.push((function(){!function(){if(!(u||d||v.debug||h<"6.0.2"||m.systemType<0)){var e=new Image;m.appId=v.appId,m.initTime=g.initEndTime-g.initStartTime,m.preVerifyTime=g.preVerifyEndTime-g.preVerifyStartTime,I.getNetworkType({isInnerInvoke:!0,success:function(t){m.networkType=t.networkType;var n="https://open.weixin.qq.com/sdk/report?v="+m.version+"&o="+m.isPreVerifyOk+"&s="+m.systemType+"&c="+m.clientVersion+"&a="+m.appId+"&n="+m.networkType+"&i="+m.initTime+"&p="+m.preVerifyTime+"&u="+m.url;e.src=n}})}}()})),y.complete=function(t){for(var n=0,r=e.length;n<r;++n)e[n]();y._completes=[]},y}()),g.preVerifyStartTime=E();else{w.state=1;for(var e=y._completes,t=0,i=e.length;t<i;++t)e[t]();y._completes=[]}})),I.invoke||(I.invoke=function(t,n,r){e.WeixinJSBridge&&WeixinJSBridge.invoke(t,M(n),r)},I.on=function(t,n){e.WeixinJSBridge&&WeixinJSBridge.on(t,n)})},ready:function(e){0!=w.state?e():(y._completes.push(e),!l&&v.debug&&e())},error:function(e){h<"6.0.2"||(-1==w.state?e(w.data):y._fail=e)},checkJsApi:function(e){x("checkJsApi",{jsApiList:O(e.jsApiList)},(e._complete=function(e){if(f){var t=e.checkResult;t&&(e.checkResult=JSON.parse(t))}e=function(e){var t=e.checkResult;for(var n in t){var r=i[n];r&&(t[r]=t[n],delete t[n])}return e}(e)},e))},onMenuShareTimeline:function(e){T(r.onMenuShareTimeline,{complete:function(){x("shareTimeline",{title:e.title||a,desc:e.title||a,img_url:e.imgUrl||"",link:e.link||location.href,type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareAppMessage:function(e){T(r.onMenuShareAppMessage,{complete:function(t){"favorite"===t.scene?x("sendAppMessage",{title:e.title||a,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""}):x("sendAppMessage",{title:e.title||a,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareQQ:function(e){T(r.onMenuShareQQ,{complete:function(){x("shareQQ",{title:e.title||a,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareWeibo:function(e){T(r.onMenuShareWeibo,{complete:function(){x("shareWeiboApp",{title:e.title||a,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareQZone:function(e){T(r.onMenuShareQZone,{complete:function(){x("shareQZone",{title:e.title||a,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},updateTimelineShareData:function(e){x("updateTimelineShareData",{title:e.title,link:e.link,imgUrl:e.imgUrl},e)},updateAppMessageShareData:function(e){x("updateAppMessageShareData",{title:e.title,desc:e.desc,link:e.link,imgUrl:e.imgUrl},e)},startRecord:function(e){x("startRecord",{},e)},stopRecord:function(e){x("stopRecord",{},e)},onVoiceRecordEnd:function(e){T("onVoiceRecordEnd",e)},playVoice:function(e){x("playVoice",{localId:e.localId},e)},pauseVoice:function(e){x("pauseVoice",{localId:e.localId},e)},stopVoice:function(e){x("stopVoice",{localId:e.localId},e)},onVoicePlayEnd:function(e){T("onVoicePlayEnd",e)},uploadVoice:function(e){x("uploadVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadVoice:function(e){x("downloadVoice",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},translateVoice:function(e){x("translateVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},chooseImage:function(e){x("chooseImage",{scene:"1|2",count:e.count||9,sizeType:e.sizeType||["original","compressed"],sourceType:e.sourceType||["album","camera"]},(e._complete=function(e){if(f){var t=e.localIds;try{t&&(e.localIds=JSON.parse(t))}catch(e){}}},e))},getLocation:function(e){},previewImage:function(e){x(r.previewImage,{current:e.current,urls:e.urls},e)},uploadImage:function(e){x("uploadImage",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadImage:function(e){x("downloadImage",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},getLocalImgData:function(e){!1===_?(_=!0,x("getLocalImgData",{localId:e.localId},(e._complete=function(e){if(_=!1,0<S.length){var t=S.shift();wx.getLocalImgData(t)}},e))):S.push(e)},getNetworkType:function(e){x("getNetworkType",{},(e._complete=function(e){e=function(e){var t=e.errMsg;e.errMsg="getNetworkType:ok";var n=e.subtype;if(delete e.subtype,n)e.networkType=n;else{var r=t.indexOf(":"),i=t.substring(r+1);switch(i){case"wifi":case"edge":case"wwan":e.networkType=i;break;default:e.errMsg="getNetworkType:fail"}}return e}(e)},e))},openLocation:function(e){x("openLocation",{latitude:e.latitude,longitude:e.longitude,name:e.name||"",address:e.address||"",scale:e.scale||28,infoUrl:e.infoUrl||""},e)},getLocation:function(e){x(r.getLocation,{type:(e=e||{}).type||"wgs84"},(e._complete=function(e){delete e.type},e))},hideOptionMenu:function(e){x("hideOptionMenu",{},e)},showOptionMenu:function(e){x("showOptionMenu",{},e)},closeWindow:function(e){x("closeWindow",{},e=e||{})},hideMenuItems:function(e){x("hideMenuItems",{menuList:e.menuList},e)},showMenuItems:function(e){x("showMenuItems",{menuList:e.menuList},e)},hideAllNonBaseMenuItem:function(e){x("hideAllNonBaseMenuItem",{},e)},showAllNonBaseMenuItem:function(e){x("showAllNonBaseMenuItem",{},e)},scanQRCode:function(e){x("scanQRCode",{needResult:(e=e||{}).needResult||0,scanType:e.scanType||["qrCode","barCode"]},(e._complete=function(e){if(p){var t=e.resultStr;if(t){var n=JSON.parse(t);e.resultStr=n&&n.scan_code&&n.scan_code.scan_result}}},e))},openAddress:function(e){x(r.openAddress,{},(e._complete=function(e){e=function(e){return e.postalCode=e.addressPostalCode,delete e.addressPostalCode,e.provinceName=e.proviceFirstStageName,delete e.proviceFirstStageName,e.cityName=e.addressCitySecondStageName,delete e.addressCitySecondStageName,e.countryName=e.addressCountiesThirdStageName,delete e.addressCountiesThirdStageName,e.detailInfo=e.addressDetailInfo,delete e.addressDetailInfo,e}(e)},e))},openProductSpecificView:function(e){x(r.openProductSpecificView,{pid:e.productId,view_type:e.viewType||0,ext_info:e.extInfo},e)},addCard:function(e){for(var t=e.cardList,n=[],i=0,o=t.length;i<o;++i){var a=t[i],c={card_id:a.cardId,card_ext:a.cardExt};n.push(c)}x(r.addCard,{card_list:n},(e._complete=function(e){var t=e.card_list;if(t){for(var n=0,r=(t=JSON.parse(t)).length;n<r;++n){var i=t[n];i.cardId=i.card_id,i.cardExt=i.card_ext,i.isSuccess=!!i.is_succ,delete i.card_id,delete i.card_ext,delete i.is_succ}e.cardList=t,delete e.card_list}},e))},chooseCard:function(e){x("chooseCard",{app_id:v.appId,location_id:e.shopId||"",sign_type:e.signType||"SHA1",card_id:e.cardId||"",card_type:e.cardType||"",card_sign:e.cardSign,time_stamp:e.timestamp+"",nonce_str:e.nonceStr},(e._complete=function(e){e.cardList=e.choose_card_info,delete e.choose_card_info},e))},openCard:function(e){for(var t=e.cardList,n=[],i=0,o=t.length;i<o;++i){var a=t[i],c={card_id:a.cardId,code:a.code};n.push(c)}x(r.openCard,{card_list:n},e)},consumeAndShareCard:function(e){x(r.consumeAndShareCard,{consumedCardId:e.cardId,consumedCode:e.code},e)},chooseWXPay:function(e){x(r.chooseWXPay,P(e),e)},openEnterpriseRedPacket:function(e){x(r.openEnterpriseRedPacket,P(e),e)},startSearchBeacons:function(e){x(r.startSearchBeacons,{ticket:e.ticket},e)},stopSearchBeacons:function(e){x(r.stopSearchBeacons,{},e)},onSearchBeacons:function(e){T(r.onSearchBeacons,e)},openEnterpriseChat:function(e){x("openEnterpriseChat",{useridlist:e.userIds,chatname:e.groupName},e)},launchMiniProgram:function(e){x("launchMiniProgram",{targetAppId:e.targetAppId,path:function(e){if("string"==typeof e&&0<e.length){var t=e.split("?")[0],n=e.split("?")[1];return t+=".html",void 0!==n?t+"?"+n:t}}(e.path),envVersion:e.envVersion},e)},openBusinessView:function(e){x("openBusinessView",{businessType:e.businessType,queryString:e.queryString||"",envVersion:e.envVersion},(e._complete=function(e){if(f){var t=e.extraData;if(t)try{e.extraData=JSON.parse(t)}catch(t){e.extraData={}}}},e))},miniProgram:{navigateBack:function(e){e=e||{},V((function(){x("invokeMiniProgramAPI",{name:"navigateBack",arg:{delta:e.delta||1}},e)}))},navigateTo:function(e){V((function(){x("invokeMiniProgramAPI",{name:"navigateTo",arg:{url:e.url}},e)}))},redirectTo:function(e){V((function(){x("invokeMiniProgramAPI",{name:"redirectTo",arg:{url:e.url}},e)}))},switchTab:function(e){V((function(){x("invokeMiniProgramAPI",{name:"switchTab",arg:{url:e.url}},e)}))},reLaunch:function(e){V((function(){x("invokeMiniProgramAPI",{name:"reLaunch",arg:{url:e.url}},e)}))},postMessage:function(e){V((function(){x("invokeMiniProgramAPI",{name:"postMessage",arg:e.data||{}},e)}))},getEnv:function(t){V((function(){t({miniprogram:"miniprogram"===e.__wxjs_environment})}))}}},k=1,b={};return o.addEventListener("error",(function(e){if(!f){var t=e.target,n=t.tagName,r=t.src;if(("IMG"==n||"VIDEO"==n||"AUDIO"==n||"SOURCE"==n)&&-1!=r.indexOf("wxlocalresource://")){e.preventDefault(),e.stopPropagation();var i=t["wx-id"];if(i||(i=k++,t["wx-id"]=i),b[i])return;b[i]=!0,wx.ready((function(){wx.getLocalImgData({localId:r,success:function(e){t.src=e.localData}})}))}}}),!0),o.addEventListener("load",(function(e){if(!f){var t=e.target,n=t.tagName;if(t.src,"IMG"==n||"VIDEO"==n||"AUDIO"==n||"SOURCE"==n){var r=t["wx-id"];r&&(b[r]=!1)}}}),!0),t&&(e.wx=e.jWeixin=I),I}function x(t,n,r){e.WeixinJSBridge?WeixinJSBridge.invoke(t,M(n),(function(e){L(t,e,r)})):A(t,r)}function T(t,n,r){e.WeixinJSBridge?WeixinJSBridge.on(t,(function(e){r&&r.trigger&&r.trigger(e),L(t,e,n)})):A(t,r||n)}function M(e){return(e=e||{}).appId=v.appId,e.verifyAppId=v.appId,e.verifySignType="sha1",e.verifyTimestamp=v.timestamp+"",e.verifyNonceStr=v.nonceStr,e.verifySignature=v.signature,e}function P(e){return{timeStamp:e.timestamp+"",nonceStr:e.nonceStr,package:e.package,paySign:e.paySign,signType:e.signType||"SHA1"}}function L(e,t,n){"openEnterpriseChat"!=e&&"openBusinessView"!==e||(t.errCode=t.err_code),delete t.err_code,delete t.err_desc,delete t.err_detail;var r=t.errMsg;r||(r=t.err_msg,delete t.err_msg,r=function(e,t){var n=e,r=i[n];r&&(n=r);var o="ok";if(t){var a=t.indexOf(":");"confirm"==(o=t.substring(a+1))&&(o="ok"),"failed"==o&&(o="fail"),-1!=o.indexOf("failed_")&&(o=o.substring(7)),-1!=o.indexOf("fail_")&&(o=o.substring(5)),"access denied"!=(o=(o=o.replace(/_/g," ")).toLowerCase())&&"no permission to execute"!=o||(o="permission denied"),"config"==n&&"function not exist"==o&&(o="ok"),""==o&&(o="fail")}return n+":"+o}(e,r),t.errMsg=r),(n=n||{})._complete&&(n._complete(t),delete n._complete),r=t.errMsg||"",v.debug&&!n.isInnerInvoke&&alert(JSON.stringify(t));var o=r.indexOf(":");switch(r.substring(o+1)){case"ok":n.success&&n.success(t);break;case"cancel":n.cancel&&n.cancel(t);break;default:n.fail&&n.fail(t)}n.complete&&n.complete(t)}function O(e){if(e){for(var t=0,n=e.length;t<n;++t){var i=e[t],o=r[i];o&&(e[t]=o)}return e}}function A(e,t){if(!(!v.debug||t&&t.isInnerInvoke)){var n=i[e];n&&(e=n),t&&t._complete&&delete t._complete,console.log('"'+e+'",',t||"")}}function E(){return(new Date).getTime()}function V(t){l&&(e.WeixinJSBridge?t():o.addEventListener&&o.addEventListener("WeixinJSBridgeReady",t,!1))}}))},a421:function(e,t,n){"use strict";var r=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.share=void 0;var i=r(n("60de")),o=function(e){(0,i.default)({url:"/api/WxJsSDKConfig",data:{url:location.href},success:function(t){var r=n("a37b");console.log(e),r.config({debug:!1,appId:t.data.data.appId,timestamp:t.data.data.timestamp,nonceStr:t.data.data.nonceStr,signature:t.data.data.signature,jsApiList:["updateAppMessageShareData","updateTimelineShareData"]}),r.ready((function(){r.updateTimelineShareData({title:"水+计划卡",link:e,imgUrl:"http://shuijia.m.xiaolibutai.com/img/tubiao.jpg",success:function(){}})})),r.ready((function(){r.updateAppMessageShareData({title:"水+计划卡",desc:'尊享全年到"小李补胎"任意门店免费添加瓶装玻璃水',link:e,imgUrl:"http://shuijia.m.xiaolibutai.com/img/tubiao.jpg",success:function(){}})}))}})};t.share=o},f9dc:function(e,t,n){"use strict";var r=n("4ea4");n("c975"),n("ac1f"),n("841c"),n("1276"),Object.defineProperty(t,"__esModule",{value:!0}),t.http=void 0;var i=r(n("3835"));n("96cf");var o=r(n("1da1")),a=r(n("60de")),c=function(){var e=(0,o.default)(regeneratorRuntime.mark((function e(t){var n,r,o,a,c,p,h,g,m,v,y,w,_,S,I,k,b,x;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,s();case 2:if(n=e.sent,r=(0,i.default)(n,2),r[0],o=r[1],0!=o.data.data.auth_id){e.next=40;break}if(a=f().code,c=location.href,p=encodeURIComponent(c),""!=a&&null!=a){e.next=14;break}window.location.href="http://open.weixin.qq.com/connect/oauth2/authorize?appid=wxe711a119a78ccbd7&redirect_uri=".concat(p,"&response_type=code&scope=snsapi_userinfo#wechat_redirect"),e.next=40;break;case 14:return e.next=16,u();case 16:return h=e.sent,g=(0,i.default)(h,2),g[0],m=g[1],console.log(0,m.data.data.openid),v=m.data.data.openid,uni.setStorageSync("openid",v),y=m.data.data.access_token,e.next=26,d(v,y);case 26:return w=e.sent,_=(0,i.default)(w,2),_[0],S=_[1],console.log(1,S),I=S.data.data.nike_name,uni.setStorageSync("nike_name",I),e.next=35,l(v,I);case 35:k=e.sent,b=(0,i.default)(k,2),b[0],x=b[1],uni.setStorageSync("token",x.data.data.token);case 40:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function s(){return(0,a.default)({url:"/api/Passport"})}function u(){return(0,a.default)({url:"/api/WxOAuth2AccessToken",data:{js_code:f().code}})}function d(e,t){return(0,a.default)({url:"/api/WxUserInfo",data:{openid:e,access_token:t}})}function l(e,t){return(0,a.default)({url:"/api/Passport",data:{open_id:e,nike_name:t},header:{"Content-Type":"application/x-www-form-urlencoded"},method:"POST"})}function f(){var e=location.search,t=new Object;if(-1!=e.indexOf("?"))for(var n=e.substr(1),r=n.split("&"),i=0;i<r.length;i++)t[r[i].split("=")[0]]=r[i].split("=")[1];return t}t.http=c}}]);