(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-buy-buy"],{"0dd9":function(t,e,i){"use strict";var a=i("4ea4");i("c975"),i("fb6a"),i("ac1f"),i("841c"),i("1276"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("96cf");var n=a(i("1da1")),s=a(i("cca7")),o=a(i("60de")),c=a(i("558f")),r=i("a421"),d=i("f9dc"),l={data:function(){return{plateNo:[],plateNu:"",infoKind:"",kindDetail:{},num:1,title:"",car:[{name:"",phone:"",carcode:""}],groupname:"",groupphone:"",sms_code:"",orderCode:"",id:"",price:"",timestamp:"",nonceStr:"",package:"",paySign:"",plateShow:!1,index:"",name:"",phone:"",endtime:!1,time:60}},components:{myHeader:c.default,plateInput:s.default},onLoad:function(t){var e=this;return(0,n.default)(regeneratorRuntime.mark((function i(){return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return e.link="http://shuijia.m.xiaolibutai.com/?#/pages/buy/buy",(0,r.share)(e.link),uni.showLoading({title:"加载中"}),i.next=5,(0,d.http)();case 5:e.id=t.kind,e.getdetail(),"1"==t.kind&&(e.getName(),e.infoKind="me",document.title="自用",e.title="水+计划-感谢您的参与"),"2"==t.kind&&(e.infoKind="send",document.title="赠送亲友",e.title="水+计划-给您的亲友送上一份关爱"),"3"==t.kind&&(e.infoKind="company",document.title="赠送员工",e.title="水+计划-给您的员工送上一份温馨的关怀");case 10:case"end":return i.stop()}}),i)})))()},methods:{getdetail:function(){var t=this;(0,o.default)({url:"/api/CardTypeinfo",data:{prooftype_id:this.id},success:function(e){uni.hideLoading(),t.kindDetail=e.data.data}})},getUrlCode:function(){var t=location.search,e=new Object;if(-1!=t.indexOf("?"))for(var i=t.substr(1),a=i.split("&"),n=0;n<a.length;n++)e[a[n].split("=")[0]]=a[n].split("=")[1];return e},change:function(){if(this.price=(this.kindDetail.money.slice(1)*this.num).toFixed(2),this.num<=20){this.car=[{name:"",phone:"",carcode:""}];for(var t=1;t<this.num;t++)this.car[t]={},this.car[t].name="",this.car[t].phone="",this.car[t].carcode=""}else{this.car=[{name:"",phone:"",carcode:""}];for(t=1;t<20;t++)this.car[t]={},this.car[t].name="",this.car[t].phone="",this.car[t].carcode=""}},getName:function(){var t=this;(0,o.default)({url:"/api/Passport",success:function(e){t.car[0].name=e.data.data.user_name,t.car[0].phone=e.data.data.user_phone,t.car[0].carcode=e.data.data.car_code}})},carcom:function(t){this.plateShow=!0,this.index=t},setPlate:function(t){"me"==this.infoKind?(t.length>=7&&(this.car[0].carcode=t),this.plateShow=!1):(t.length>=7&&(this.car[this.index].carcode=t),this.plateShow=!1)},create:function(){var t=this;uni.showLoading({title:"加载中",mask:!0}),(0,o.default)({url:"/api/CardOrder",method:"POST",data:{cars:this.car,num:this.num,sms_code:this.sms_code,cardorder_type:this.id,sh_cardtypeid:this.kindDetail.sh_id,groupname:this.groupname,groupphone:this.groupphone},success:function(e){if(1==e.data.code){t.orderCode=e.data;var a=uni.getStorageSync("openid");(0,o.default)({url:"/api/weixin/WXSettlementPay",method:"POST",header:{"Content-Type":"application/x-www-form-urlencoded"},data:{order_no:t.orderCode.data,trade_type:0,openid:a},success:function(e){t.timestamp=e.data.data.time_stamp,t.nonceStr=e.data.data.nonce_str,t.package=e.data.data.package,t.paySign=e.data.data.pay_sign,(0,o.default)({url:"/api/WxJsSDKConfig",data:{url:location.href},success:function(e){var a=i("a37b");a.config({debug:!1,appId:e.data.data.appId,timestamp:e.data.data.timestamp,nonceStr:e.data.data.nonceStr,signature:e.data.data.signature,jsApiList:["chooseWXPay"]}),a.ready((function(){uni.hideLoading(),a.chooseWXPay({timestamp:t.timestamp,nonceStr:t.nonceStr,package:t.package,paySign:t.paySign,signType:"MD5",success:function(e){3!=t.id?uni.reLaunch({url:"/pages/my/my?sort=this.id"}):uni.reLaunch({url:"/pages/orderlist/orderlist?sort=this.id"})},fail:function(t){uni.showToast({title:t.data.msg,duration:2e3,icon:"none"})}})}))}})}})}else uni.showToast({title:e.data.msg,duration:2e3,icon:"none"})}})},changeNum:function(t){if("cut"==t){if(this.num>1){var e=--this.num;if(this.price=(this.kindDetail.money.slice(1)*e).toFixed(2),e>20){this.car=[{name:"",phone:"",carcode:""}];for(var i=1;i<20;i++)this.car[i]={},this.car[i].name="",this.car[i].phone="",this.car[i].carcode=""}else{this.car=[{name:"",phone:"",carcode:""}];for(i=1;i<e;i++)this.car[i]={},this.car[i].name="",this.car[i].phone="",this.car[i].carcode=""}}}else{var a=++this.num;if(this.price=(this.kindDetail.money.slice(1)*a).toFixed(2),a>20){this.car=[{name:"",phone:"",carcode:""}];for(i=1;i<20;i++)this.car[i]={},this.car[i].name="",this.car[i].phone="",this.car[i].carcode=""}else{this.car=[{name:"",phone:"",carcode:""}];for(i=0;i<a;i++)this.car[i]={},this.car[i].name="",this.car[i].phone="",this.car[i].carcode=""}}console.log(this.car)},getCode:function(){var t=this;if(1==this.id)var e=this.car[0].phone;if(3==this.id)e=this.groupphone;""==e?uni.showToast({icon:"none",title:"请输入手机号"}):(0,o.default)({url:"/api/SMS",method:"POST",data:{phone:e,code_type:"3"},header:{"Content-Type":"application/x-www-form-urlencoded"},success:function(e){if(uni.showToast({title:e.data.msg,duration:2e3,icon:"none"}),1==e.data.code){t.endtime=!0,t.time=60;var i=setInterval((function(){1==t.time?(clearInterval(i),t.endtime=!1):t.time--}),1e3)}}})}}};e.default=l},"3d2c":function(t,e,i){"use strict";i.r(e);var a=i("9319"),n=i("c0b3");for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);i("a08c");var o,c=i("f0c5"),r=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"2b4db07e",null,!1,a["a"],o);e["default"]=r.exports},"41a1":function(t,e,i){t.exports=i.p+"static/img/u3441.f67b1b49.jpg"},4253:function(t,e,i){var a=i("8544");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("7b503c85",a,!0,{sourceMap:!1,shadowMode:!1})},8544:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.account[data-v-2b4db07e]{color:red;font-size:%?40?%}.get[data-v-2b4db07e]{font-size:%?26?%;background-color:green;color:#fff;padding:%?10?%;width:%?150?%;box-sizing:border-box;text-align:center}.disable[data-v-2b4db07e]{background-color:#cbced3;font-weight:700}.info-content[data-v-2b4db07e]{text-align:right}.kind[data-v-2b4db07e]{display:flex;padding:%?30?%;background-color:#f7f7f7}.kind-left[data-v-2b4db07e]{width:120px;height:80px;border-radius:%?10?%;margin-right:%?20?%}.kind-right[data-v-2b4db07e]{display:flex;flex:1;flex-direction:column;justify-content:space-around}.col2[data-v-2b4db07e]{font-size:%?24?%;color:#888}.col3[data-v-2b4db07e]{color:#01783a;display:flex;justify-content:space-between}.info[data-v-2b4db07e]{box-shadow:0 0 %?6?% #e5e5e5;margin:%?30?%;border-radius:%?10?%}.line[data-v-2b4db07e]{display:inline-block;height:%?36?%;line-height:%?36?%;border-radius:%?5?%;width:%?7?%;background-color:#01793b;vertical-align:middle;margin-right:%?10?%}.info1[data-v-2b4db07e]{display:flex;justify-content:space-between;align-items:center;padding:%?20?%;border-bottom:1px solid #e5e5e5}.info1 uni-input[data-v-2b4db07e]{width:%?350?%}.name[data-v-2b4db07e]{width:%?48?%;height:%?48?%}.row-info[data-v-2b4db07e]{display:flex;align-items:center}.row-info uni-image[data-v-2b4db07e]{margin-right:%?10?%}.number[data-v-2b4db07e]{display:flex;border:1px solid #e5e5e5;color:#666;border-radius:%?6?%}.number uni-input[data-v-2b4db07e]{width:50px;text-align:center;border-left:1px solid #e5e5e5;border-right:1px solid #e5e5e5}.number uni-text[data-v-2b4db07e]{display:inline-block;width:30px;text-align:center}.end[data-v-2b4db07e]{border-bottom:none}.pay[data-v-2b4db07e]{box-sizing:border-box;width:100%;justify-content:space-between;align-items:center;position:fixed;bottom:0}.payment[data-v-2b4db07e]{padding:%?10?%;background-color:green;color:#fff}.content[data-v-2b4db07e]{padding-bottom:61px}',""]),t.exports=e},9319:function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"content"},[a("my-header",{attrs:{title:t.title}}),a("v-uni-view",{staticClass:"kind"},[a("v-uni-image",{staticClass:"kind-left",attrs:{src:i("41a1"),mode:""}}),a("v-uni-view",{staticClass:"kind-right"},[a("v-uni-view",{staticClass:"col1"},[1==t.kindDetail.prooftype_id?a("v-uni-text",[t._v("水+计划-自用")]):t._e(),2==t.kindDetail.prooftype_id?a("v-uni-text",[t._v("水+计划-赠送")]):t._e(),3==t.kindDetail.prooftype_id?a("v-uni-text",[t._v("水+计划-集团")]):t._e()],1),3!=t.kindDetail.prooftype_id?a("v-uni-view",{staticClass:"col2"},[t._v("只需10元尊享瓶装玻璃水全年任意加")]):t._e(),3==t.kindDetail.prooftype_id?a("v-uni-view",{staticClass:"col2"},[t._v("给员工送上一份关怀与福利")]):t._e(),a("v-uni-view",{staticClass:"col3"},[t._v(t._s(t.kindDetail.money)),"me"!=t.infoKind?a("v-uni-view",{staticClass:"number"},[a("v-uni-text",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeNum("cut")}}},[t._v("-")]),a("v-uni-input",{attrs:{type:"text"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.change.apply(void 0,arguments)}},model:{value:t.num,callback:function(e){t.num=e},expression:"num"}}),a("v-uni-text",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeNum("add")}}},[t._v("+")])],1):t._e()],1)],1)],1),a("v-uni-view",{staticStyle:{padding:"20rpx",color:"#01783a","font-size":"12px",opacity:".8",margin:"30rpx","box-shadow":"0 0 3px #e5e5e5","border-radius":"10rpx","line-height":"36rpx"}},[1==t.kindDetail.prooftype_id?a("v-uni-text",[t._v("此页面是您为自己购买“水+计划”的页面，购买完成后系统会按照您填写的车牌号自动给您开卡，您到附近的门店即可享受瓶装玻璃水全年任意加的服务。")]):t._e(),2==t.kindDetail.prooftype_id?a("v-uni-text",[t._v("在此页面购买的“水+计划”是赠送您的亲朋好友的，您购买之后在凭证列表点击赠送分享按钮，分享给亲朋好友后，亲朋好友通过点击您发的链接进行激活，激活后即可在小李补胎任意门店享受瓶装玻璃水全年任意加的服务。")]):t._e(),3==t.kindDetail.prooftype_id?a("v-uni-text",[t._v("此页面是针对集团客户批量购买“水+计划”的页面，在购买后我们的客服人员会对您进行一对一的专享服务，请再次确定您留的联系方式，以方便我们对您的后续服务。")]):t._e()],1),"me"==t.infoKind?a("v-uni-view",[a("v-uni-view",{staticClass:"info"},[a("v-uni-view",{staticClass:"info1",staticStyle:{"justify-content":"flex-start"}},[a("v-uni-text",{staticClass:"line"}),a("v-uni-text",[t._v("请确认信息")])],1),a("v-uni-view",{staticClass:"info1"},[a("v-uni-view",{staticClass:"row-info"},[a("v-uni-image",{staticClass:"name",attrs:{src:i("d931"),mode:""}}),a("v-uni-text",[t._v("姓名")])],1),a("v-uni-input",{staticClass:"info-content",attrs:{type:"text",placeholder:"请输入姓名"},model:{value:t.car[0].name,callback:function(e){t.$set(t.car[0],"name",e)},expression:"car[0].name"}})],1),a("v-uni-view",{staticClass:"info1"},[a("v-uni-view",{staticClass:"row-info"},[a("v-uni-image",{staticClass:"name",attrs:{src:i("ca91a"),mode:""}}),a("v-uni-text",[t._v("车牌号")])],1),t.plateShow?a("plate-input",{attrs:{plate:t.plateNu},on:{export:function(e){arguments[0]=e=t.$handleEvent(e),t.setPlate.apply(void 0,arguments)},close:function(e){arguments[0]=e=t.$handleEvent(e),t.plateShow=!1}}}):t._e(),a("v-uni-input",{staticClass:"info-content",attrs:{type:"text",disabled:"true",placeholder:"请输入车牌号"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.plateShow=!0}},model:{value:t.car[0].carcode,callback:function(e){t.$set(t.car[0],"carcode",e)},expression:"car[0].carcode"}})],1),a("v-uni-view",{staticClass:"info1"},[a("v-uni-view",{staticClass:"row-info"},[a("v-uni-image",{staticClass:"name",attrs:{src:i("acd9"),mode:""}}),a("v-uni-text",[t._v("手机号")])],1),a("v-uni-input",{staticClass:"info-content",attrs:{type:"text",placeholder:"请输入手机号"},model:{value:t.car[0].phone,callback:function(e){t.$set(t.car[0],"phone",e)},expression:"car[0].phone"}})],1),a("v-uni-view",{staticClass:"info1 end"},[a("v-uni-view",{staticClass:"row-info"},[a("v-uni-image",{staticClass:"name",attrs:{src:i("9df4"),mode:""}}),a("v-uni-text",[t._v("验证码")])],1),a("v-uni-input",{staticClass:"info-content",staticStyle:{width:"100px"},attrs:{type:"text",placeholder:"请输入验证码"},model:{value:t.sms_code,callback:function(e){t.sms_code=e},expression:"sms_code"}}),a("v-uni-view",{staticClass:"get",class:t.endtime?"disable":""},[t.endtime?a("v-uni-text",[t._v(t._s(t.time))]):a("v-uni-text",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getCode.apply(void 0,arguments)}}},[t._v("获取验证码")])],1)],1)],1),a("v-uni-view",{staticClass:"info"},[a("v-uni-view",{staticClass:"info1",staticStyle:{"justify-content":"flex-start"}},[a("v-uni-text",{staticClass:"line"}),a("v-uni-text",[t._v("支付方式")])],1),a("v-uni-view",{staticClass:"info1 end"},[a("v-uni-view",{staticClass:"row-info"},[a("v-uni-image",{staticClass:"name",attrs:{src:i("fd05"),mode:""}}),a("v-uni-text",[t._v("微信支付")])],1),a("v-uni-radio",{staticClass:"info-content",attrs:{color:"#01783a",checked:!0}})],1)],1)],1):t._e(),"send"==t.infoKind?a("v-uni-view",[t._l(t.car,(function(e,n){return a("v-uni-view",{staticClass:"info"},[a("v-uni-view",{staticClass:"info1",staticStyle:{"justify-content":"flex-start"}},[a("v-uni-text",{staticClass:"line"}),a("v-uni-text",[t._v("请输入亲友信息")])],1),a("v-uni-view",{staticClass:"info1"},[a("v-uni-view",{staticClass:"row-info"},[a("v-uni-image",{staticClass:"name",attrs:{src:i("d931"),mode:""}}),a("v-uni-text",[t._v("姓名")])],1),a("v-uni-input",{staticClass:"info-content",attrs:{type:"text",placeholder:"选填"},model:{value:e.name,callback:function(i){t.$set(e,"name",i)},expression:"i.name"}})],1),a("v-uni-view",{staticClass:"info1"},[a("v-uni-view",{staticClass:"row-info"},[a("v-uni-image",{staticClass:"name",attrs:{src:i("ca91a"),mode:""}}),a("v-uni-text",[t._v("车牌号")])],1),a("v-uni-input",{staticClass:"info-content",attrs:{disabled:"true",type:"text",placeholder:"选填"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.carcom(n)}},model:{value:e.carcode,callback:function(i){t.$set(e,"carcode",i)},expression:"i.carcode"}}),t.plateShow?a("plate-input",{attrs:{plate:t.plateNo[e]},on:{export:function(e){arguments[0]=e=t.$handleEvent(e),t.setPlate.apply(void 0,arguments)},close:function(e){arguments[0]=e=t.$handleEvent(e),t.plateShow=!1}}}):t._e()],1),a("v-uni-view",{staticClass:"info1 end"},[a("v-uni-view",{staticClass:"row-info"},[a("v-uni-image",{staticClass:"name",attrs:{src:i("acd9"),mode:""}}),a("v-uni-text",[t._v("手机号")])],1),a("v-uni-input",{staticClass:"info-content",attrs:{type:"text",placeholder:"选填"},model:{value:e.phone,callback:function(i){t.$set(e,"phone",i)},expression:"i.phone"}})],1)],1)})),a("v-uni-view",{staticClass:"info"},[a("v-uni-view",{staticClass:"info1",staticStyle:{"justify-content":"flex-start"}},[a("v-uni-text",{staticClass:"line"}),a("v-uni-text",[t._v("支付方式")])],1),a("v-uni-view",{staticClass:"info1 end"},[a("v-uni-view",{staticClass:"row-info"},[a("v-uni-image",{staticClass:"name",attrs:{src:i("fd05"),mode:""}}),a("v-uni-text",[t._v("微信支付")])],1),a("v-uni-radio",{staticClass:"info-content",attrs:{color:"#01783a",checked:!0}})],1)],1)],2):t._e(),"company"==t.infoKind?a("v-uni-view",[a("v-uni-view",{staticClass:"info"},[a("v-uni-view",{staticClass:"info1",staticStyle:{"justify-content":"flex-start"}},[a("v-uni-text",{staticClass:"line"}),a("v-uni-text",[t._v("请确认信息")])],1),a("v-uni-view",{staticClass:"info1"},[a("v-uni-view",{staticClass:"row-info"},[a("v-uni-image",{staticClass:"name",attrs:{src:i("d931"),mode:""}}),a("v-uni-text",[t._v("集团名")])],1),a("v-uni-input",{staticClass:"info-content",attrs:{type:"text",placeholder:"请输入集团名"},model:{value:t.groupname,callback:function(e){t.groupname=e},expression:"groupname"}})],1),a("v-uni-view",{staticClass:"info1"},[a("v-uni-view",{staticClass:"row-info"},[a("v-uni-image",{staticClass:"name",attrs:{src:i("acd9"),mode:""}}),a("v-uni-text",[t._v("手机号")])],1),a("v-uni-input",{staticClass:"info-content",attrs:{type:"text",placeholder:"请输入手机号"},model:{value:t.groupphone,callback:function(e){t.groupphone=e},expression:"groupphone"}})],1),a("v-uni-view",{staticClass:"info1 end"},[a("v-uni-view",{staticClass:"row-info"},[a("v-uni-image",{staticClass:"name",attrs:{src:i("9df4"),mode:""}}),a("v-uni-text",[t._v("验证码")])],1),a("v-uni-input",{staticClass:"info-content",staticStyle:{width:"100px"},attrs:{type:"text",placeholder:"请输入验证码"},model:{value:t.sms_code,callback:function(e){t.sms_code=e},expression:"sms_code"}}),a("v-uni-view",{staticClass:"get",class:t.endtime?"disable":""},[t.endtime?a("v-uni-text",[t._v(t._s(t.time))]):a("v-uni-text",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getCode.apply(void 0,arguments)}}},[t._v("获取验证码")])],1)],1)],1),a("v-uni-view",{staticClass:"info"},[a("v-uni-view",{staticClass:"info1",staticStyle:{"justify-content":"flex-start"}},[a("v-uni-text",{staticClass:"line"}),a("v-uni-text",[t._v("支付方式")])],1),a("v-uni-view",{staticClass:"info1 end"},[a("v-uni-view",{staticClass:"row-info"},[a("v-uni-image",{staticClass:"name",attrs:{src:i("fd05"),mode:""}}),a("v-uni-text",[t._v("微信支付")])],1),a("v-uni-radio",{staticClass:"info-content",attrs:{color:"#01783a",checked:!0}})],1)],1)],1):t._e(),a("v-uni-view",{staticClass:"kind pay"},[a("v-uni-text",{staticClass:"sum"},[a("v-uni-text",[t._v("支付金额：")]),1==t.num?a("v-uni-text",{staticClass:"account"},[t._v(t._s(t.kindDetail.money))]):t._e(),t.num>1?a("v-uni-text",{staticClass:"account"},[t._v(t._s("￥"+t.price))]):t._e()],1),a("v-uni-text",{staticClass:"payment",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.create.apply(void 0,arguments)}}},[t._v("立即支付")])],1)],1)},s=[]},a08c:function(t,e,i){"use strict";var a=i("4253"),n=i.n(a);n.a},c0b3:function(t,e,i){"use strict";i.r(e);var a=i("0dd9"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);e["default"]=n.a},fd05:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAE0UlEQVRYR8VXDUxTVxg9X1m1BaeAEASxAlPaBphzJmwCBbPR4pb9SGK2zJ/NLCxz4mTLzDYMbFEWndNMZkATp2yK0wRMusyEQUsWRlvNSMxmDFB0IvKj4mSIg6EIvct7tK+P0vIeRrObNOm793znO+++7333PMJ0BgPpbMZMFkRLwBAPsAhiCCLCAAN1guHCyF2Xrd1YPyCXluQA9XaTkQEbAJYLQC0Zw3CagqiiNc3yoxR2SgFJZ3JSx5hrBxhypIj8rhN+dblY0UVDvT1QfEABWofxY2LY/UCJfYMYK3Qa6r/0x+VXgNaRXU6MNj2U5G4SRuxAW3p9vi/nJAGPIrknqT8REwTobNmfgmiXr0qVYiY06hgsVM3HQlUMro/8hfZ/u3BluAt3XfemtVGM8ElbuvUrT5AgINGWnaEgsonZuMTrol/FuphViJoRMSnRzZE+VPXWoPpGDbj/ckeQQvFMc1pdE4cXBOgcxgYwZHlIngtfjgLNBiSGxEvycslLr34H802LJJYHEOqc6daVggD9GdMq5mJmT3S8egGOpexFhDJMHqEbtbfjMI70VMmKIZCpNcNi5XdAZzP+BMLLnsjDSbuQHrqMv+y514uNLUUIV4biaPIegbz2ViNK2suQFZaKnYu3CvPvthShsZ/fXYlBJ5wZlrWUYM2eM0NNt8V3X/P0ESF4ugIsfTYUOEuksnPrw850awjpbKaXQOy0+NmX67fLIRAwv/x9ln8jrt7tgVqhxrk7F9A8eEmaw4UVpLObCgG204PO16zH5gXrpYPdiPed2/GEWoMXI1cgMdhbsB3D3Tg78Dsqr5lxZbjbLx8jKiC93XiQARsfRACXfIvmLSwOjgso+M7oII5dN6O8s3IShoFKueP1BAhveFaXzU7G8ZSvJXfg2DUzcqNMeDwoRBLLAYr/3IdTvT9PwDLgOGntxkoC1olXSnXFyJlrCEhs6bMjUhmGpbOTeEzVjRoc6j6JrXHvYGVEJj+3+nw+lPQYTj75jcBjaHodt+73C9duAaZ9BPaBb7aKpN1YHrrUr4j9nUexMXYNZiiUwvqp3lqsjuJ7Cz+4pqRWqARB3FxecyEct8+JBFApaR2mLcSYV6YoZfWSMiTPSpwkYmf7AWxLmP5huafjW1T0VHsFcEWoazRmQYEGf7eaN/81fBSXN2lpi3MH9us+k/XsxaD3WorR0P+bd4p7DcH5PIdxyJ/VMj91EK1Dl4UKXhS8ENzvwmAbtsVvgjYkQbaIgdF/wNXAfTbqiRlvRNyVzm76AWBrxGzPh6fBOXSZb8X+xtroV1CUsFm2gLKuSp9X0d2KOYZx08lkHmXenCWLPsTqqBckRUxOzh2IosOI3wWHsfZBzOf6mFy8GZ2LWNU8v0Lahtqx6g+hz41jfI9jbo53wC6XqEIkb0wAzFWGIjMsFfpZi6ANTkDz4EU0D11CnDqWb+t6h2kCmYLRsy0GC59rgiV7qE7YnXLezEhoVDFoGjjPzwS0ZB6J/6spfZQiZNtyj4hADll+ZXiRvtsu5pjy04x3ygr6QmxWpyWAUKdw0eeegvMXK+/jlDOtY+xtsW+cQsgwQGYCvudMp5RgWQI8JLx/VCkMIKQQmIYxzGGEMYBugXCFxth5p8HaCK7Byxz/AYy1zXLw0Y92AAAAAElFTkSuQmCC"}}]);