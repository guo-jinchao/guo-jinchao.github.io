(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-fc-fc"],{"3e33":function(e,t,n){"use strict";var a;n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return a}));var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view")},i=[]},"7e43":function(e,t,n){"use strict";n.r(t);var a=n("3e33"),o=n("bb39");for(var i in o)"default"!==i&&function(e){n.d(t,e,(function(){return o[e]}))}(i);var r,d=n("f0c5"),c=Object(d["a"])(o["default"],a["b"],a["c"],!1,null,"1ea730f4",null,!1,a["a"],r);t["default"]=c.exports},bb39:function(e,t,n){"use strict";n.r(t);var a=n("dd2d"),o=n.n(a);for(var i in a)"default"!==i&&function(e){n.d(t,e,(function(){return a[e]}))}(i);t["default"]=o.a},d100:function(e,t,n){"use strict";var a=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n("5530")),i=function(e){e.url="http://shuijia.api.xiaolibutai.com"+e.url;var t=uni.getStorageSync("token");return t&&(e.header=(0,o.default)({token:t},e.header)),uni.request(e)},r=i;t.default=r},dd2d:function(e,t,n){"use strict";var a=n("4ea4");n("c975"),n("ac1f"),n("841c"),n("1276"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n("d100")),i={data:function(){return{}},onLoad:function(e){var t=this,n=location.href,a=encodeURIComponent(n);this.code=this.getUrlCode().code,this.order_id=e.oid,null==this.code||""===this.code?window.location.href="http://open.weixin.qq.com/connect/oauth2/authorize?appid=wxe711a119a78ccbd7&redirect_uri=".concat(a,"&response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect"):(this.show=!0,(0,o.default)({url:"/api/WxOAuth2AccessToken",data:{js_code:this.code},success:function(e){t.openid=e.data.data.openid,uni.setStorageSync("openid",t.openid),t.access_token=e.data.data.access_token,(0,o.default)({url:"/api/WxUserInfo",data:{openid:t.openid,access_token:t.access_token},success:function(e){t.nike_name=e.data.data.nickname,uni.setStorageSync("nike_name",e.data.data.nickname),(0,o.default)({url:"/api/Passport",data:{open_id:t.openid,nike_name:t.nike_name},header:{"Content-Type":"application/x-www-form-urlencoded"},method:"POST",success:function(e){uni.setStorageSync("token",e.data.data.token),(0,o.default)({url:"/api/WaterProofFreeCode",data:{order_id:t.order_id,open_id:t.openid},method:"post",success:function(e){uni.hideLoading(),1==e.data.code?(uni.setStorageSync("active_code",e.data.data),uni.navigateTo({url:"../active/active?show=1&ac=true"})):uni.navigateTo({url:"../error/error"})}})}})}})}}))},methods:{getUrlCode:function(){var e=location.search;this.winUrl=e;var t=new Object;if(-1!=e.indexOf("?"))for(var n=e.substr(1),a=n.split("&"),o=0;o<a.length;o++)t[a[o].split("=")[0]]=a[o].split("=")[1];return t}}};t.default=i}}]);