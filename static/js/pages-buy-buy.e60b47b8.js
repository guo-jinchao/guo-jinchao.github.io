(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-buy-buy"],{"087d":function(e,t,i){var n=i("2792");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("4f06").default;a("7415da9e",n,!0,{sourceMap:!1,shadowMode:!1})},"0dd9":function(e,t,i){"use strict";var n=i("4ea4");i("c975"),i("fb6a"),i("ac1f"),i("841c"),i("1276"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(i("cca7")),o=n(i("60de")),s=n(i("558f")),c={data:function(){return{buyshow:!1,plateNo:[],plateNu:"",infoKind:"",kindDetail:{},num:1,title:"",car:[{name:"",phone:"",carcode:""}],groupname:"",groupphone:"",sms_code:"",orderCode:"",id:"",price:"",timestamp:"",nonceStr:"",package:"",paySign:"",plateShow:!1,index:"",name:"",phone:"",endtime:!1,time:60}},components:{myHeader:s.default,plateInput:a.default},onLoad:function(e){var t=this;uni.showLoading({title:"加载中"});var i=location.href,n=encodeURIComponent(i);this.code=this.getUrlCode().code;uni.getStorageSync("openid");(0,o.default)({url:"/api/Passport",success:function(e){0==e.data.data.auth_id?null==t.code||""===t.code?window.location.href="http://open.weixin.qq.com/connect/oauth2/authorize?appid=wxe711a119a78ccbd7&redirect_uri=".concat(n,"&response_type=code&scope=snsapi_userinfo#wechat_redirect"):(t.buyshow=!0,(0,o.default)({url:"/api/WxOAuth2AccessToken",data:{js_code:t.code},success:function(e){t.openid=e.data.data.openid,uni.setStorageSync("openid",t.openid),t.access_token=e.data.data.access_token,(0,o.default)({url:"/api/WxUserInfo",data:{openid:t.openid,access_token:t.access_token},success:function(e){t.nike_name=e.data.data.nickname,(0,o.default)({url:"/api/Passport",data:{open_id:t.openid,nike_name:t.nike_name},header:{"Content-Type":"application/x-www-form-urlencoded"},method:"POST",success:function(e){uni.setStorageSync("token",e.data.data.token),t.getdetail()}})}})}})):(t.buyshow=!0,t.getdetail())}}),this.id=e.kind,"1"==e.kind&&(this.getName(),this.infoKind="me",document.title="自用",this.title="水+计划-感谢您的参与"),"2"==e.kind&&(this.infoKind="send",document.title="赠送亲友",this.title="水+计划-给您的亲友送上一份关爱"),"3"==e.kind&&(this.infoKind="company",document.title="赠送员工",this.title="水+计划-给您的员工送上一份温馨的关怀")},methods:{getdetail:function(){var e=this;(0,o.default)({url:"/api/CardTypeinfo",data:{prooftype_id:this.id},success:function(t){uni.hideLoading(),e.kindDetail=t.data.data}})},getUrlCode:function(){var e=location.search,t=new Object;if(-1!=e.indexOf("?"))for(var i=e.substr(1),n=i.split("&"),a=0;a<n.length;a++)t[n[a].split("=")[0]]=n[a].split("=")[1];return t},change:function(){if(this.price=(this.kindDetail.money.slice(1)*this.num).toFixed(2),this.num<=20){this.car=[{name:"",phone:"",carcode:""}];for(var e=1;e<this.num;e++)this.car[e]={},this.car[e].name="",this.car[e].phone="",this.car[e].carcode=""}else{this.car=[{name:"",phone:"",carcode:""}];for(e=1;e<20;e++)this.car[e]={},this.car[e].name="",this.car[e].phone="",this.car[e].carcode=""}},getName:function(){var e=this;(0,o.default)({url:"/api/Passport",success:function(t){e.car[0].name=t.data.data.user_name,e.car[0].phone=t.data.data.user_phone,e.car[0].carcode=t.data.data.car_code}})},carcom:function(e){this.plateShow=!0,this.index=e},setPlate:function(e){"me"==this.infoKind?(e.length>=7&&(this.car[0].carcode=e),this.plateShow=!1):(e.length>=7&&(this.car[this.index].carcode=e),this.plateShow=!1)},create:function(){var e=this;uni.showLoading({title:"加载中",mask:!0}),(0,o.default)({url:"/api/CardOrder",method:"POST",data:{cars:this.car,num:this.num,sms_code:this.sms_code,cardorder_type:this.id,sh_cardtypeid:this.kindDetail.sh_id,groupname:this.groupname,groupphone:this.groupphone},success:function(t){if(1==t.data.code){e.orderCode=t.data;var n=uni.getStorageSync("openid");(0,o.default)({url:"/api/weixin/WXSettlementPay",method:"POST",header:{"Content-Type":"application/x-www-form-urlencoded"},data:{order_no:e.orderCode.data,trade_type:0,openid:n},success:function(t){e.timestamp=t.data.data.time_stamp,e.nonceStr=t.data.data.nonce_str,e.package=t.data.data.package,e.paySign=t.data.data.pay_sign,(0,o.default)({url:"/api/WxJsSDKConfig",data:{url:location.href},success:function(t){var n=i("a37b");n.config({debug:!1,appId:t.data.data.appId,timestamp:t.data.data.timestamp,nonceStr:t.data.data.nonceStr,signature:t.data.data.signature,jsApiList:["chooseWXPay"]}),n.ready((function(){uni.hideLoading(),n.chooseWXPay({timestamp:e.timestamp,nonceStr:e.nonceStr,package:e.package,paySign:e.paySign,signType:"MD5",success:function(t){3!=e.id?uni.reLaunch({url:"/pages/my/my?sort=this.id"}):uni.reLaunch({url:"/pages/orderlist/orderlist?sort=this.id"})},fail:function(e){uni.showToast({title:e.data.msg,duration:2e3,icon:"none"})}})}))}})}})}else uni.showToast({title:t.data.msg,duration:2e3,icon:"none"})}})},changeNum:function(e){if("cut"==e){if(this.num>1){var t=--this.num;if(this.price=(this.kindDetail.money.slice(1)*t).toFixed(2),t>20){this.car=[{name:"",phone:"",carcode:""}];for(var i=1;i<20;i++)this.car[i]={},this.car[i].name="",this.car[i].phone="",this.car[i].carcode=""}else{this.car=[{name:"",phone:"",carcode:""}];for(i=1;i<t;i++)this.car[i]={},this.car[i].name="",this.car[i].phone="",this.car[i].carcode=""}}}else{var n=++this.num;if(this.price=(this.kindDetail.money.slice(1)*n).toFixed(2),n>20){this.car=[{name:"",phone:"",carcode:""}];for(i=1;i<20;i++)this.car[i]={},this.car[i].name="",this.car[i].phone="",this.car[i].carcode=""}else{this.car=[{name:"",phone:"",carcode:""}];for(i=0;i<n;i++)this.car[i]={},this.car[i].name="",this.car[i].phone="",this.car[i].carcode=""}}console.log(this.car)},getCode:function(){var e=this;if(1==this.id)var t=this.car[0].phone;if(3==this.id)t=this.groupphone;""==t?uni.showToast({icon:"none",title:"请输入手机号"}):(0,o.default)({url:"/api/SMS",method:"POST",data:{phone:t,code_type:"3"},header:{"Content-Type":"application/x-www-form-urlencoded"},success:function(t){if(uni.showToast({title:t.data.msg,duration:2e3,icon:"none"}),1==t.data.code){e.endtime=!0,e.time=60;var i=setInterval((function(){1==e.time?(clearInterval(i),e.endtime=!1):e.time--}),1e3)}}})}}};t.default=c},2792:function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.account[data-v-53c9b1e2]{color:red;font-size:%?40?%}.get[data-v-53c9b1e2]{font-size:%?26?%;background-color:green;color:#fff;padding:%?10?%;width:%?150?%;box-sizing:border-box;text-align:center}.disable[data-v-53c9b1e2]{background-color:#cbced3;font-weight:700}.info-content[data-v-53c9b1e2]{text-align:right}.kind[data-v-53c9b1e2]{display:flex;padding:%?30?%;background-color:#f7f7f7}.kind-left[data-v-53c9b1e2]{width:120px;height:80px;border-radius:%?10?%;margin-right:%?20?%}.kind-right[data-v-53c9b1e2]{display:flex;flex:1;flex-direction:column;justify-content:space-around}.col2[data-v-53c9b1e2]{font-size:%?24?%;color:#888}.col3[data-v-53c9b1e2]{color:#01783a;display:flex;justify-content:space-between}.info[data-v-53c9b1e2]{box-shadow:0 0 %?6?% #e5e5e5;margin:%?30?%;border-radius:%?10?%}.line[data-v-53c9b1e2]{display:inline-block;height:%?36?%;line-height:%?36?%;border-radius:%?5?%;width:%?7?%;background-color:#01793b;vertical-align:middle;margin-right:%?10?%}.info1[data-v-53c9b1e2]{display:flex;justify-content:space-between;align-items:center;padding:%?20?%;border-bottom:1px solid #e5e5e5}.info1 uni-input[data-v-53c9b1e2]{width:%?350?%}.name[data-v-53c9b1e2]{width:%?48?%;height:%?48?%}.row-info[data-v-53c9b1e2]{display:flex;align-items:center}.row-info uni-image[data-v-53c9b1e2]{margin-right:%?10?%}.number[data-v-53c9b1e2]{display:flex;border:1px solid #e5e5e5;color:#666;border-radius:%?6?%}.number uni-input[data-v-53c9b1e2]{width:50px;text-align:center;border-left:1px solid #e5e5e5;border-right:1px solid #e5e5e5}.number uni-text[data-v-53c9b1e2]{display:inline-block;width:30px;text-align:center}.end[data-v-53c9b1e2]{border-bottom:none}.pay[data-v-53c9b1e2]{box-sizing:border-box;width:100%;justify-content:space-between;align-items:center;position:fixed;bottom:0}.payment[data-v-53c9b1e2]{padding:%?10?%;background-color:green;color:#fff}.content[data-v-53c9b1e2]{padding-bottom:61px}',""]),e.exports=t},"3d2c":function(e,t,i){"use strict";i.r(t);var n=i("a1f1"),a=i("c0b3");for(var o in a)"default"!==o&&function(e){i.d(t,e,(function(){return a[e]}))}(o);i("558d");var s,c=i("f0c5"),r=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"53c9b1e2",null,!1,n["a"],s);t["default"]=r.exports},"41a1":function(e,t,i){e.exports=i.p+"static/img/u3441.f67b1b49.jpg"},"558d":function(e,t,i){"use strict";var n=i("087d"),a=i.n(n);a.a},a1f1:function(e,t,i){"use strict";var n;i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return o})),i.d(t,"a",(function(){return n}));var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.buyshow?n("v-uni-view",{staticClass:"content"},[n("my-header",{attrs:{title:e.title}}),n("v-uni-view",{staticClass:"kind"},[n("v-uni-image",{staticClass:"kind-left",attrs:{src:i("41a1"),mode:""}}),n("v-uni-view",{staticClass:"kind-right"},[n("v-uni-view",{staticClass:"col1"},[1==e.kindDetail.prooftype_id?n("v-uni-text",[e._v("水+计划-自用")]):e._e(),2==e.kindDetail.prooftype_id?n("v-uni-text",[e._v("水+计划-赠送")]):e._e(),3==e.kindDetail.prooftype_id?n("v-uni-text",[e._v("水+计划-集团")]):e._e()],1),3!=e.kindDetail.prooftype_id?n("v-uni-view",{staticClass:"col2"},[e._v("只需10元尊享瓶装玻璃水全年任意加")]):e._e(),3==e.kindDetail.prooftype_id?n("v-uni-view",{staticClass:"col2"},[e._v("给员工送上一份关怀与福利")]):e._e(),n("v-uni-view",{staticClass:"col3"},[e._v(e._s(e.kindDetail.money)),"me"!=e.infoKind?n("v-uni-view",{staticClass:"number"},[n("v-uni-text",{on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.changeNum("cut")}}},[e._v("-")]),n("v-uni-input",{attrs:{type:"text"},on:{input:function(t){arguments[0]=t=e.$handleEvent(t),e.change.apply(void 0,arguments)}},model:{value:e.num,callback:function(t){e.num=t},expression:"num"}}),n("v-uni-text",{on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.changeNum("add")}}},[e._v("+")])],1):e._e()],1)],1)],1),n("v-uni-view",{staticStyle:{padding:"20rpx",color:"#01783a","font-size":"12px",opacity:".8",margin:"30rpx","box-shadow":"0 0 3px #e5e5e5","border-radius":"10rpx","line-height":"36rpx"}},[1==e.kindDetail.prooftype_id?n("v-uni-text",[e._v("此页面是您为自己购买“水+计划”的页面，购买完成后系统会按照您填写的车牌号自动给您开卡，您到附近的门店即可享受瓶装玻璃水全年任意加的服务。")]):e._e(),2==e.kindDetail.prooftype_id?n("v-uni-text",[e._v("在此页面购买的“水+计划”是赠送您的亲朋好友的，您购买之后在凭证列表点击赠送分享按钮，分享给亲朋好友后，亲朋好友通过点击您发的链接进行激活，激活后即可在小李补胎任意门店享受瓶装玻璃水全年任意加的服务。")]):e._e(),3==e.kindDetail.prooftype_id?n("v-uni-text",[e._v("此页面是针对集团客户批量购买“水+计划”的页面，在购买后我们的客服人员会对您进行一对一的专享服务，请再次确定您留的联系方式，以方便我们对您的后续服务。")]):e._e()],1),"me"==e.infoKind?n("v-uni-view",[n("v-uni-view",{staticClass:"info"},[n("v-uni-view",{staticClass:"info1",staticStyle:{"justify-content":"flex-start"}},[n("v-uni-text",{staticClass:"line"}),n("v-uni-text",[e._v("请确认信息")])],1),n("v-uni-view",{staticClass:"info1"},[n("v-uni-view",{staticClass:"row-info"},[n("v-uni-image",{staticClass:"name",attrs:{src:i("d931"),mode:""}}),n("v-uni-text",[e._v("姓名")])],1),n("v-uni-input",{staticClass:"info-content",attrs:{type:"text",placeholder:"请输入姓名"},model:{value:e.car[0].name,callback:function(t){e.$set(e.car[0],"name",t)},expression:"car[0].name"}})],1),n("v-uni-view",{staticClass:"info1"},[n("v-uni-view",{staticClass:"row-info"},[n("v-uni-image",{staticClass:"name",attrs:{src:i("ca91a"),mode:""}}),n("v-uni-text",[e._v("车牌号")])],1),e.plateShow?n("plate-input",{attrs:{plate:e.plateNu},on:{export:function(t){arguments[0]=t=e.$handleEvent(t),e.setPlate.apply(void 0,arguments)},close:function(t){arguments[0]=t=e.$handleEvent(t),e.plateShow=!1}}}):e._e(),n("v-uni-input",{staticClass:"info-content",attrs:{type:"text",disabled:"true",placeholder:"请输入车牌号"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.plateShow=!0}},model:{value:e.car[0].carcode,callback:function(t){e.$set(e.car[0],"carcode",t)},expression:"car[0].carcode"}})],1),n("v-uni-view",{staticClass:"info1"},[n("v-uni-view",{staticClass:"row-info"},[n("v-uni-image",{staticClass:"name",attrs:{src:i("acd9"),mode:""}}),n("v-uni-text",[e._v("手机号")])],1),n("v-uni-input",{staticClass:"info-content",attrs:{type:"text",placeholder:"请输入手机号"},model:{value:e.car[0].phone,callback:function(t){e.$set(e.car[0],"phone",t)},expression:"car[0].phone"}})],1),n("v-uni-view",{staticClass:"info1 end"},[n("v-uni-view",{staticClass:"row-info"},[n("v-uni-image",{staticClass:"name",attrs:{src:i("9df4"),mode:""}}),n("v-uni-text",[e._v("验证码")])],1),n("v-uni-input",{staticClass:"info-content",staticStyle:{width:"100px"},attrs:{type:"text",placeholder:"请输入验证码"},model:{value:e.sms_code,callback:function(t){e.sms_code=t},expression:"sms_code"}}),n("v-uni-view",{staticClass:"get",class:e.endtime?"disable":""},[e.endtime?n("v-uni-text",[e._v(e._s(e.time))]):n("v-uni-text",{on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.getCode.apply(void 0,arguments)}}},[e._v("获取验证码")])],1)],1)],1),n("v-uni-view",{staticClass:"info"},[n("v-uni-view",{staticClass:"info1",staticStyle:{"justify-content":"flex-start"}},[n("v-uni-text",{staticClass:"line"}),n("v-uni-text",[e._v("支付方式")])],1),n("v-uni-view",{staticClass:"info1 end"},[n("v-uni-view",{staticClass:"row-info"},[n("v-uni-image",{staticClass:"name",attrs:{src:i("fd05"),mode:""}}),n("v-uni-text",[e._v("微信支付")])],1),n("v-uni-radio",{staticClass:"info-content",attrs:{color:"#01783a",checked:!0}})],1)],1)],1):e._e(),"send"==e.infoKind?n("v-uni-view",[e._l(e.car,(function(t,a){return n("v-uni-view",{staticClass:"info"},[n("v-uni-view",{staticClass:"info1",staticStyle:{"justify-content":"flex-start"}},[n("v-uni-text",{staticClass:"line"}),n("v-uni-text",[e._v("请输入亲友信息")])],1),n("v-uni-view",{staticClass:"info1"},[n("v-uni-view",{staticClass:"row-info"},[n("v-uni-image",{staticClass:"name",attrs:{src:i("d931"),mode:""}}),n("v-uni-text",[e._v("姓名")])],1),n("v-uni-input",{staticClass:"info-content",attrs:{type:"text",placeholder:"选填"},model:{value:t.name,callback:function(i){e.$set(t,"name",i)},expression:"i.name"}})],1),n("v-uni-view",{staticClass:"info1"},[n("v-uni-view",{staticClass:"row-info"},[n("v-uni-image",{staticClass:"name",attrs:{src:i("ca91a"),mode:""}}),n("v-uni-text",[e._v("车牌号")])],1),n("v-uni-input",{staticClass:"info-content",attrs:{disabled:"true",type:"text",placeholder:"选填"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.carcom(a)}},model:{value:t.carcode,callback:function(i){e.$set(t,"carcode",i)},expression:"i.carcode"}}),e.plateShow?n("plate-input",{attrs:{plate:e.plateNo[t]},on:{export:function(t){arguments[0]=t=e.$handleEvent(t),e.setPlate.apply(void 0,arguments)},close:function(t){arguments[0]=t=e.$handleEvent(t),e.plateShow=!1}}}):e._e()],1),n("v-uni-view",{staticClass:"info1 end"},[n("v-uni-view",{staticClass:"row-info"},[n("v-uni-image",{staticClass:"name",attrs:{src:i("acd9"),mode:""}}),n("v-uni-text",[e._v("手机号")])],1),n("v-uni-input",{staticClass:"info-content",attrs:{type:"text",placeholder:"选填"},model:{value:t.phone,callback:function(i){e.$set(t,"phone",i)},expression:"i.phone"}})],1)],1)})),n("v-uni-view",{staticClass:"info"},[n("v-uni-view",{staticClass:"info1",staticStyle:{"justify-content":"flex-start"}},[n("v-uni-text",{staticClass:"line"}),n("v-uni-text",[e._v("支付方式")])],1),n("v-uni-view",{staticClass:"info1 end"},[n("v-uni-view",{staticClass:"row-info"},[n("v-uni-image",{staticClass:"name",attrs:{src:i("fd05"),mode:""}}),n("v-uni-text",[e._v("微信支付")])],1),n("v-uni-radio",{staticClass:"info-content",attrs:{color:"#01783a",checked:!0}})],1)],1)],2):e._e(),"company"==e.infoKind?n("v-uni-view",[n("v-uni-view",{staticClass:"info"},[n("v-uni-view",{staticClass:"info1",staticStyle:{"justify-content":"flex-start"}},[n("v-uni-text",{staticClass:"line"}),n("v-uni-text",[e._v("请确认信息")])],1),n("v-uni-view",{staticClass:"info1"},[n("v-uni-view",{staticClass:"row-info"},[n("v-uni-image",{staticClass:"name",attrs:{src:i("d931"),mode:""}}),n("v-uni-text",[e._v("集团名")])],1),n("v-uni-input",{staticClass:"info-content",attrs:{type:"text",placeholder:"请输入集团名"},model:{value:e.groupname,callback:function(t){e.groupname=t},expression:"groupname"}})],1),n("v-uni-view",{staticClass:"info1"},[n("v-uni-view",{staticClass:"row-info"},[n("v-uni-image",{staticClass:"name",attrs:{src:i("acd9"),mode:""}}),n("v-uni-text",[e._v("手机号")])],1),n("v-uni-input",{staticClass:"info-content",attrs:{type:"text",placeholder:"请输入手机号"},model:{value:e.groupphone,callback:function(t){e.groupphone=t},expression:"groupphone"}})],1),n("v-uni-view",{staticClass:"info1 end"},[n("v-uni-view",{staticClass:"row-info"},[n("v-uni-image",{staticClass:"name",attrs:{src:i("9df4"),mode:""}}),n("v-uni-text",[e._v("验证码")])],1),n("v-uni-input",{staticClass:"info-content",staticStyle:{width:"100px"},attrs:{type:"text",placeholder:"请输入验证码"},model:{value:e.sms_code,callback:function(t){e.sms_code=t},expression:"sms_code"}}),n("v-uni-view",{staticClass:"get",class:e.endtime?"disable":""},[e.endtime?n("v-uni-text",[e._v(e._s(e.time))]):n("v-uni-text",{on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.getCode.apply(void 0,arguments)}}},[e._v("获取验证码")])],1)],1)],1),n("v-uni-view",{staticClass:"info"},[n("v-uni-view",{staticClass:"info1",staticStyle:{"justify-content":"flex-start"}},[n("v-uni-text",{staticClass:"line"}),n("v-uni-text",[e._v("支付方式")])],1),n("v-uni-view",{staticClass:"info1 end"},[n("v-uni-view",{staticClass:"row-info"},[n("v-uni-image",{staticClass:"name",attrs:{src:i("fd05"),mode:""}}),n("v-uni-text",[e._v("微信支付")])],1),n("v-uni-radio",{staticClass:"info-content",attrs:{color:"#01783a",checked:!0}})],1)],1)],1):e._e(),n("v-uni-view",{staticClass:"kind pay"},[n("v-uni-text",{staticClass:"sum"},[n("v-uni-text",[e._v("支付金额：")]),1==e.num?n("v-uni-text",{staticClass:"account"},[e._v(e._s(e.kindDetail.money))]):e._e(),e.num>1?n("v-uni-text",{staticClass:"account"},[e._v(e._s("￥"+e.price))]):e._e()],1),n("v-uni-text",{staticClass:"payment",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.create.apply(void 0,arguments)}}},[e._v("立即支付")])],1)],1):e._e()},o=[]},a37b:function(e,t,i){var n;!function(a,o){n=function(){return o(a)}.call(t,i,t,e),void 0===n||(e.exports=n)}(window,(function(e,t){if(!e.jWeixin){var i,n={config:"preVerifyJSAPI",onMenuShareTimeline:"menu:share:timeline",onMenuShareAppMessage:"menu:share:appmessage",onMenuShareQQ:"menu:share:qq",onMenuShareWeibo:"menu:share:weiboApp",onMenuShareQZone:"menu:share:QZone",previewImage:"imagePreview",getLocation:"geoLocation",openProductSpecificView:"openProductViewWithPid",addCard:"batchAddCard",openCard:"batchViewCard",chooseWXPay:"getBrandWCPayRequest",openEnterpriseRedPacket:"getRecevieBizHongBaoRequest",startSearchBeacons:"startMonitoringBeacons",stopSearchBeacons:"stopMonitoringBeacons",onSearchBeacons:"onBeaconsInRange",consumeAndShareCard:"consumedShareCard",openAddress:"editAddress"},a=function(){var e={};for(var t in n)e[n[t]]=t;return e}(),o=e.document,s=o.title,c=navigator.userAgent.toLowerCase(),r=navigator.platform.toLowerCase(),d=!(!r.match("mac")&&!r.match("win")),u=-1!=c.indexOf("wxdebugger"),l=-1!=c.indexOf("micromessenger"),p=-1!=c.indexOf("android"),f=-1!=c.indexOf("iphone")||-1!=c.indexOf("ipad"),v=(i=c.match(/micromessenger\/(\d+\.\d+\.\d+)/)||c.match(/micromessenger\/(\d+\.\d+)/))?i[1]:"",m={initStartTime:V(),initEndTime:0,preVerifyStartTime:0,preVerifyEndTime:0},h={version:1,appId:"",initTime:0,preVerifyTime:0,networkType:"",isPreVerifyOk:1,systemType:f?1:p?2:-1,clientVersion:v,url:encodeURIComponent(location.href)},g={},w={_completes:[]},x={state:0,data:{}};L((function(){m.initEndTime=V()}));var y=!1,_=[],C={config:function(t){E("config",g=t);var i=!1!==g.check;L((function(){if(i)k(n.config,{verifyJsApiList:P(g.jsApiList),verifyOpenTagList:P(g.openTagList)},function(){w._complete=function(e){m.preVerifyEndTime=V(),x.state=1,x.data=e},w.success=function(e){h.isPreVerifyOk=0},w.fail=function(e){w._fail?w._fail(e):x.state=-1};var e=w._completes;return e.push((function(){!function(){if(!(d||u||g.debug||v<"6.0.2"||h.systemType<0)){var e=new Image;h.appId=g.appId,h.initTime=m.initEndTime-m.initStartTime,h.preVerifyTime=m.preVerifyEndTime-m.preVerifyStartTime,C.getNetworkType({isInnerInvoke:!0,success:function(t){h.networkType=t.networkType;var i="https://open.weixin.qq.com/sdk/report?v="+h.version+"&o="+h.isPreVerifyOk+"&s="+h.systemType+"&c="+h.clientVersion+"&a="+h.appId+"&n="+h.networkType+"&i="+h.initTime+"&p="+h.preVerifyTime+"&u="+h.url;e.src=i}})}}()})),w.complete=function(t){for(var i=0,n=e.length;i<n;++i)e[i]();w._completes=[]},w}()),m.preVerifyStartTime=V();else{x.state=1;for(var e=w._completes,t=0,a=e.length;t<a;++t)e[t]();w._completes=[]}})),C.invoke||(C.invoke=function(t,i,n){e.WeixinJSBridge&&WeixinJSBridge.invoke(t,T(i),n)},C.on=function(t,i){e.WeixinJSBridge&&WeixinJSBridge.on(t,i)})},ready:function(e){0!=x.state?e():(w._completes.push(e),!l&&g.debug&&e())},error:function(e){v<"6.0.2"||(-1==x.state?e(x.data):w._fail=e)},checkJsApi:function(e){k("checkJsApi",{jsApiList:P(e.jsApiList)},(e._complete=function(e){if(p){var t=e.checkResult;t&&(e.checkResult=JSON.parse(t))}e=function(e){var t=e.checkResult;for(var i in t){var n=a[i];n&&(t[n]=t[i],delete t[i])}return e}(e)},e))},onMenuShareTimeline:function(e){I(n.onMenuShareTimeline,{complete:function(){k("shareTimeline",{title:e.title||s,desc:e.title||s,img_url:e.imgUrl||"",link:e.link||location.href,type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareAppMessage:function(e){I(n.onMenuShareAppMessage,{complete:function(t){"favorite"===t.scene?k("sendAppMessage",{title:e.title||s,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""}):k("sendAppMessage",{title:e.title||s,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareQQ:function(e){I(n.onMenuShareQQ,{complete:function(){k("shareQQ",{title:e.title||s,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareWeibo:function(e){I(n.onMenuShareWeibo,{complete:function(){k("shareWeiboApp",{title:e.title||s,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareQZone:function(e){I(n.onMenuShareQZone,{complete:function(){k("shareQZone",{title:e.title||s,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},updateTimelineShareData:function(e){k("updateTimelineShareData",{title:e.title,link:e.link,imgUrl:e.imgUrl},e)},updateAppMessageShareData:function(e){k("updateAppMessageShareData",{title:e.title,desc:e.desc,link:e.link,imgUrl:e.imgUrl},e)},startRecord:function(e){k("startRecord",{},e)},stopRecord:function(e){k("stopRecord",{},e)},onVoiceRecordEnd:function(e){I("onVoiceRecordEnd",e)},playVoice:function(e){k("playVoice",{localId:e.localId},e)},pauseVoice:function(e){k("pauseVoice",{localId:e.localId},e)},stopVoice:function(e){k("stopVoice",{localId:e.localId},e)},onVoicePlayEnd:function(e){I("onVoicePlayEnd",e)},uploadVoice:function(e){k("uploadVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadVoice:function(e){k("downloadVoice",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},translateVoice:function(e){k("translateVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},chooseImage:function(e){k("chooseImage",{scene:"1|2",count:e.count||9,sizeType:e.sizeType||["original","compressed"],sourceType:e.sourceType||["album","camera"]},(e._complete=function(e){if(p){var t=e.localIds;try{t&&(e.localIds=JSON.parse(t))}catch(e){}}},e))},getLocation:function(e){},previewImage:function(e){k(n.previewImage,{current:e.current,urls:e.urls},e)},uploadImage:function(e){k("uploadImage",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadImage:function(e){k("downloadImage",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},getLocalImgData:function(e){!1===y?(y=!0,k("getLocalImgData",{localId:e.localId},(e._complete=function(e){if(y=!1,0<_.length){var t=_.shift();wx.getLocalImgData(t)}},e))):_.push(e)},getNetworkType:function(e){k("getNetworkType",{},(e._complete=function(e){e=function(e){var t=e.errMsg;e.errMsg="getNetworkType:ok";var i=e.subtype;if(delete e.subtype,i)e.networkType=i;else{var n=t.indexOf(":"),a=t.substring(n+1);switch(a){case"wifi":case"edge":case"wwan":e.networkType=a;break;default:e.errMsg="getNetworkType:fail"}}return e}(e)},e))},openLocation:function(e){k("openLocation",{latitude:e.latitude,longitude:e.longitude,name:e.name||"",address:e.address||"",scale:e.scale||28,infoUrl:e.infoUrl||""},e)},getLocation:function(e){k(n.getLocation,{type:(e=e||{}).type||"wgs84"},(e._complete=function(e){delete e.type},e))},hideOptionMenu:function(e){k("hideOptionMenu",{},e)},showOptionMenu:function(e){k("showOptionMenu",{},e)},closeWindow:function(e){k("closeWindow",{},e=e||{})},hideMenuItems:function(e){k("hideMenuItems",{menuList:e.menuList},e)},showMenuItems:function(e){k("showMenuItems",{menuList:e.menuList},e)},hideAllNonBaseMenuItem:function(e){k("hideAllNonBaseMenuItem",{},e)},showAllNonBaseMenuItem:function(e){k("showAllNonBaseMenuItem",{},e)},scanQRCode:function(e){k("scanQRCode",{needResult:(e=e||{}).needResult||0,scanType:e.scanType||["qrCode","barCode"]},(e._complete=function(e){if(f){var t=e.resultStr;if(t){var i=JSON.parse(t);e.resultStr=i&&i.scan_code&&i.scan_code.scan_result}}},e))},openAddress:function(e){k(n.openAddress,{},(e._complete=function(e){e=function(e){return e.postalCode=e.addressPostalCode,delete e.addressPostalCode,e.provinceName=e.proviceFirstStageName,delete e.proviceFirstStageName,e.cityName=e.addressCitySecondStageName,delete e.addressCitySecondStageName,e.countryName=e.addressCountiesThirdStageName,delete e.addressCountiesThirdStageName,e.detailInfo=e.addressDetailInfo,delete e.addressDetailInfo,e}(e)},e))},openProductSpecificView:function(e){k(n.openProductSpecificView,{pid:e.productId,view_type:e.viewType||0,ext_info:e.extInfo},e)},addCard:function(e){for(var t=e.cardList,i=[],a=0,o=t.length;a<o;++a){var s=t[a],c={card_id:s.cardId,card_ext:s.cardExt};i.push(c)}k(n.addCard,{card_list:i},(e._complete=function(e){var t=e.card_list;if(t){for(var i=0,n=(t=JSON.parse(t)).length;i<n;++i){var a=t[i];a.cardId=a.card_id,a.cardExt=a.card_ext,a.isSuccess=!!a.is_succ,delete a.card_id,delete a.card_ext,delete a.is_succ}e.cardList=t,delete e.card_list}},e))},chooseCard:function(e){k("chooseCard",{app_id:g.appId,location_id:e.shopId||"",sign_type:e.signType||"SHA1",card_id:e.cardId||"",card_type:e.cardType||"",card_sign:e.cardSign,time_stamp:e.timestamp+"",nonce_str:e.nonceStr},(e._complete=function(e){e.cardList=e.choose_card_info,delete e.choose_card_info},e))},openCard:function(e){for(var t=e.cardList,i=[],a=0,o=t.length;a<o;++a){var s=t[a],c={card_id:s.cardId,code:s.code};i.push(c)}k(n.openCard,{card_list:i},e)},consumeAndShareCard:function(e){k(n.consumeAndShareCard,{consumedCardId:e.cardId,consumedCode:e.code},e)},chooseWXPay:function(e){k(n.chooseWXPay,A(e),e)},openEnterpriseRedPacket:function(e){k(n.openEnterpriseRedPacket,A(e),e)},startSearchBeacons:function(e){k(n.startSearchBeacons,{ticket:e.ticket},e)},stopSearchBeacons:function(e){k(n.stopSearchBeacons,{},e)},onSearchBeacons:function(e){I(n.onSearchBeacons,e)},openEnterpriseChat:function(e){k("openEnterpriseChat",{useridlist:e.userIds,chatname:e.groupName},e)},launchMiniProgram:function(e){k("launchMiniProgram",{targetAppId:e.targetAppId,path:function(e){if("string"==typeof e&&0<e.length){var t=e.split("?")[0],i=e.split("?")[1];return t+=".html",void 0!==i?t+"?"+i:t}}(e.path),envVersion:e.envVersion},e)},openBusinessView:function(e){k("openBusinessView",{businessType:e.businessType,queryString:e.queryString||"",envVersion:e.envVersion},(e._complete=function(e){if(p){var t=e.extraData;if(t)try{e.extraData=JSON.parse(t)}catch(t){e.extraData={}}}},e))},miniProgram:{navigateBack:function(e){e=e||{},L((function(){k("invokeMiniProgramAPI",{name:"navigateBack",arg:{delta:e.delta||1}},e)}))},navigateTo:function(e){L((function(){k("invokeMiniProgramAPI",{name:"navigateTo",arg:{url:e.url}},e)}))},redirectTo:function(e){L((function(){k("invokeMiniProgramAPI",{name:"redirectTo",arg:{url:e.url}},e)}))},switchTab:function(e){L((function(){k("invokeMiniProgramAPI",{name:"switchTab",arg:{url:e.url}},e)}))},reLaunch:function(e){L((function(){k("invokeMiniProgramAPI",{name:"reLaunch",arg:{url:e.url}},e)}))},postMessage:function(e){L((function(){k("invokeMiniProgramAPI",{name:"postMessage",arg:e.data||{}},e)}))},getEnv:function(t){L((function(){t({miniprogram:"miniprogram"===e.__wxjs_environment})}))}}},S=1,b={};return o.addEventListener("error",(function(e){if(!p){var t=e.target,i=t.tagName,n=t.src;if(("IMG"==i||"VIDEO"==i||"AUDIO"==i||"SOURCE"==i)&&-1!=n.indexOf("wxlocalresource://")){e.preventDefault(),e.stopPropagation();var a=t["wx-id"];if(a||(a=S++,t["wx-id"]=a),b[a])return;b[a]=!0,wx.ready((function(){wx.getLocalImgData({localId:n,success:function(e){t.src=e.localData}})}))}}}),!0),o.addEventListener("load",(function(e){if(!p){var t=e.target,i=t.tagName;if(t.src,"IMG"==i||"VIDEO"==i||"AUDIO"==i||"SOURCE"==i){var n=t["wx-id"];n&&(b[n]=!1)}}}),!0),t&&(e.wx=e.jWeixin=C),C}function k(t,i,n){e.WeixinJSBridge?WeixinJSBridge.invoke(t,T(i),(function(e){M(t,e,n)})):E(t,n)}function I(t,i,n){e.WeixinJSBridge?WeixinJSBridge.on(t,(function(e){n&&n.trigger&&n.trigger(e),M(t,e,i)})):E(t,n||i)}function T(e){return(e=e||{}).appId=g.appId,e.verifyAppId=g.appId,e.verifySignType="sha1",e.verifyTimestamp=g.timestamp+"",e.verifyNonceStr=g.nonceStr,e.verifySignature=g.signature,e}function A(e){return{timeStamp:e.timestamp+"",nonceStr:e.nonceStr,package:e.package,paySign:e.paySign,signType:e.signType||"SHA1"}}function M(e,t,i){"openEnterpriseChat"!=e&&"openBusinessView"!==e||(t.errCode=t.err_code),delete t.err_code,delete t.err_desc,delete t.err_detail;var n=t.errMsg;n||(n=t.err_msg,delete t.err_msg,n=function(e,t){var i=e,n=a[i];n&&(i=n);var o="ok";if(t){var s=t.indexOf(":");"confirm"==(o=t.substring(s+1))&&(o="ok"),"failed"==o&&(o="fail"),-1!=o.indexOf("failed_")&&(o=o.substring(7)),-1!=o.indexOf("fail_")&&(o=o.substring(5)),"access denied"!=(o=(o=o.replace(/_/g," ")).toLowerCase())&&"no permission to execute"!=o||(o="permission denied"),"config"==i&&"function not exist"==o&&(o="ok"),""==o&&(o="fail")}return i+":"+o}(e,n),t.errMsg=n),(i=i||{})._complete&&(i._complete(t),delete i._complete),n=t.errMsg||"",g.debug&&!i.isInnerInvoke&&alert(JSON.stringify(t));var o=n.indexOf(":");switch(n.substring(o+1)){case"ok":i.success&&i.success(t);break;case"cancel":i.cancel&&i.cancel(t);break;default:i.fail&&i.fail(t)}i.complete&&i.complete(t)}function P(e){if(e){for(var t=0,i=e.length;t<i;++t){var a=e[t],o=n[a];o&&(e[t]=o)}return e}}function E(e,t){if(!(!g.debug||t&&t.isInnerInvoke)){var i=a[e];i&&(e=i),t&&t._complete&&delete t._complete,console.log('"'+e+'",',t||"")}}function V(){return(new Date).getTime()}function L(t){l&&(e.WeixinJSBridge?t():o.addEventListener&&o.addEventListener("WeixinJSBridgeReady",t,!1))}}))},c0b3:function(e,t,i){"use strict";i.r(t);var n=i("0dd9"),a=i.n(n);for(var o in n)"default"!==o&&function(e){i.d(t,e,(function(){return n[e]}))}(o);t["default"]=a.a},fd05:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAE0UlEQVRYR8VXDUxTVxg9X1m1BaeAEASxAlPaBphzJmwCBbPR4pb9SGK2zJ/NLCxz4mTLzDYMbFEWndNMZkATp2yK0wRMusyEQUsWRlvNSMxmDFB0IvKj4mSIg6EIvct7tK+P0vIeRrObNOm793znO+++7333PMJ0BgPpbMZMFkRLwBAPsAhiCCLCAAN1guHCyF2Xrd1YPyCXluQA9XaTkQEbAJYLQC0Zw3CagqiiNc3yoxR2SgFJZ3JSx5hrBxhypIj8rhN+dblY0UVDvT1QfEABWofxY2LY/UCJfYMYK3Qa6r/0x+VXgNaRXU6MNj2U5G4SRuxAW3p9vi/nJAGPIrknqT8REwTobNmfgmiXr0qVYiY06hgsVM3HQlUMro/8hfZ/u3BluAt3XfemtVGM8ElbuvUrT5AgINGWnaEgsonZuMTrol/FuphViJoRMSnRzZE+VPXWoPpGDbj/ckeQQvFMc1pdE4cXBOgcxgYwZHlIngtfjgLNBiSGxEvycslLr34H802LJJYHEOqc6daVggD9GdMq5mJmT3S8egGOpexFhDJMHqEbtbfjMI70VMmKIZCpNcNi5XdAZzP+BMLLnsjDSbuQHrqMv+y514uNLUUIV4biaPIegbz2ViNK2suQFZaKnYu3CvPvthShsZ/fXYlBJ5wZlrWUYM2eM0NNt8V3X/P0ESF4ugIsfTYUOEuksnPrw850awjpbKaXQOy0+NmX67fLIRAwv/x9ln8jrt7tgVqhxrk7F9A8eEmaw4UVpLObCgG204PO16zH5gXrpYPdiPed2/GEWoMXI1cgMdhbsB3D3Tg78Dsqr5lxZbjbLx8jKiC93XiQARsfRACXfIvmLSwOjgso+M7oII5dN6O8s3IShoFKueP1BAhveFaXzU7G8ZSvJXfg2DUzcqNMeDwoRBLLAYr/3IdTvT9PwDLgOGntxkoC1olXSnXFyJlrCEhs6bMjUhmGpbOTeEzVjRoc6j6JrXHvYGVEJj+3+nw+lPQYTj75jcBjaHodt+73C9duAaZ9BPaBb7aKpN1YHrrUr4j9nUexMXYNZiiUwvqp3lqsjuJ7Cz+4pqRWqARB3FxecyEct8+JBFApaR2mLcSYV6YoZfWSMiTPSpwkYmf7AWxLmP5huafjW1T0VHsFcEWoazRmQYEGf7eaN/81fBSXN2lpi3MH9us+k/XsxaD3WorR0P+bd4p7DcH5PIdxyJ/VMj91EK1Dl4UKXhS8ENzvwmAbtsVvgjYkQbaIgdF/wNXAfTbqiRlvRNyVzm76AWBrxGzPh6fBOXSZb8X+xtroV1CUsFm2gLKuSp9X0d2KOYZx08lkHmXenCWLPsTqqBckRUxOzh2IosOI3wWHsfZBzOf6mFy8GZ2LWNU8v0Lahtqx6g+hz41jfI9jbo53wC6XqEIkb0wAzFWGIjMsFfpZi6ANTkDz4EU0D11CnDqWb+t6h2kCmYLRsy0GC59rgiV7qE7YnXLezEhoVDFoGjjPzwS0ZB6J/6spfZQiZNtyj4hADll+ZXiRvtsu5pjy04x3ygr6QmxWpyWAUKdw0eeegvMXK+/jlDOtY+xtsW+cQsgwQGYCvudMp5RgWQI8JLx/VCkMIKQQmIYxzGGEMYBugXCFxth5p8HaCK7Byxz/AYy1zXLw0Y92AAAAAElFTkSuQmCC"}}]);