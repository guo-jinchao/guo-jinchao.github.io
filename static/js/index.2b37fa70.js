(function(n){function e(e){for(var a,r,s=e[0],u=e[1],c=e[2],g=0,l=[];g<s.length;g++)r=s[g],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&l.push(o[r][0]),o[r]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(n[a]=u[a]);p&&p(e);while(l.length)l.shift()();return i.push.apply(i,c||[]),t()}function t(){for(var n,e=0;e<i.length;e++){for(var t=i[e],a=!0,r=1;r<t.length;r++){var u=t[r];0!==o[u]&&(a=!1)}a&&(i.splice(e--,1),n=s(s.s=t[0]))}return n}var a={},o={index:0},i=[];function r(n){return s.p+"static/js/"+({"pages-active-active~pages-buy-buy":"pages-active-active~pages-buy-buy","pages-active-active":"pages-active-active","pages-buy-buy":"pages-buy-buy","pages-attention-attention":"pages-attention-attention","pages-auth-auth":"pages-auth-auth","pages-detail-detail":"pages-detail-detail","pages-error-error":"pages-error-error","pages-fc-fc":"pages-fc-fc","pages-index-index":"pages-index-index","pages-my-my":"pages-my-my","pages-orderlist-orderlist":"pages-orderlist-orderlist","pages-share-share":"pages-share-share","pages-shopList-shopList":"pages-shopList-shopList"}[n]||n)+"."+{"pages-active-active~pages-buy-buy":"3fd35e57","pages-active-active":"5c011d79","pages-buy-buy":"ea8daddc","pages-attention-attention":"e50dba38","pages-auth-auth":"9c932f2b","pages-detail-detail":"1cd73b3f","pages-error-error":"0bfd72f4","pages-fc-fc":"686f55c3","pages-index-index":"0b39a0c1","pages-my-my":"eda60454","pages-orderlist-orderlist":"c933e118","pages-share-share":"b7a763e6","pages-shopList-shopList":"f65c5880"}[n]+".js"}function s(e){if(a[e])return a[e].exports;var t=a[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.e=function(n){var e=[],t=o[n];if(0!==t)if(t)e.push(t[2]);else{var a=new Promise((function(e,a){t=o[n]=[e,a]}));e.push(t[2]=a);var i,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=r(n);var c=new Error;i=function(e){u.onerror=u.onload=null,clearTimeout(g);var t=o[n];if(0!==t){if(t){var a=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;c.message="Loading chunk "+n+" failed.\n("+a+": "+i+")",c.name="ChunkLoadError",c.type=a,c.request=i,t[1](c)}o[n]=void 0}};var g=setTimeout((function(){i({type:"timeout",target:u})}),12e4);u.onerror=u.onload=i,document.head.appendChild(u)}return Promise.all(e)},s.m=n,s.c=a,s.d=function(n,e,t){s.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},s.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},s.t=function(n,e){if(1&e&&(n=s(n)),8&e)return n;if(4&e&&"object"===typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var a in n)s.d(t,a,function(e){return n[e]}.bind(null,a));return t},s.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return s.d(e,"a",e),e},s.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},s.p="/",s.oe=function(n){throw console.error(n),n};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=e,u=u.slice();for(var g=0;g<u.length;g++)e(u[g]);var p=c;i.push([0,"chunk-vendors"]),t()})({0:function(n,e,t){n.exports=t("2daa")},"181c":function(n,e,t){"use strict";t.r(e);var a=t("74a9"),o=t("ec19");for(var i in o)"default"!==i&&function(n){t.d(e,n,(function(){return o[n]}))}(i);t("ac97");var r,s=t("f0c5"),u=Object(s["a"])(o["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],r);e["default"]=u.exports},"1f38":function(n,e,t){var a=t("4654");"string"===typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);var o=t("4f06").default;o("1c807f03",a,!0,{sourceMap:!1,shadowMode:!1})},"2daa":function(n,e,t){"use strict";var a=t("4ea4"),o=a(t("5530"));t("e260"),t("e6cf"),t("cca6"),t("a79d"),t("4bf3"),t("1c31");var i=a(t("e143")),r=a(t("181c"));i.default.config.productionTip=!1,r.default.mpType="app";var s=new i.default((0,o.default)({},r.default));s.$mount()},4654:function(n,e,t){var a=t("24fb");e=a(!1),e.push([n.i,".uni-toast{padding:%?20?%!important}",""]),n.exports=e},"4bf3":function(n,e,t){"use strict";(function(n){var e=t("4ea4");t("13d5"),t("d3b7"),t("ac1f"),t("5319"),t("ddb0");var a=e(t("e143")),o={keys:function(){return[]}};n["____EC8CE37____"]=!0,delete n["____EC8CE37____"],n.__uniConfig={globalStyle:{navigationBarTextStyle:"black",navigationBarTitleText:"uni-app",navigationBarBackgroundColor:"#fff",backgroundColor:"#F8F8F8"},tabBar:{color:"#7A7E83",selectedColor:"#3cc51f",borderStyle:"black",backgroundColor:"#ffffff",list:[{pagePath:"pages/index/index",iconPath:"static/tyre.png",selectedIconPath:"static/tyre1.png",text:"首页",redDot:!1,badge:""},{pagePath:"pages/my/my",iconPath:"static/me.png",selectedIconPath:"static/me1.png",text:"我的",redDot:!1,badge:""},{pagePath:"pages/orderlist/orderlist",iconPath:"static/order1.png",selectedIconPath:"static/order.png",text:"订单",redDot:!1,badge:""}]}},n.__uniConfig.compilerVersion="3.2.9",n.__uniConfig.router={mode:"hash",base:"/"},n.__uniConfig.publicPath="/",n.__uniConfig["async"]={loading:"AsyncLoading",error:"AsyncError",delay:200,timeout:6e4},n.__uniConfig.debug=!1,n.__uniConfig.networkTimeout={request:6e4,connectSocket:6e4,uploadFile:6e4,downloadFile:6e4},n.__uniConfig.sdkConfigs={},n.__uniConfig.qqMapKey="XVXBZ-NDMC4-JOGUS-XGIEE-QVHDZ-AMFV2",n.__uniConfig.locale="",n.__uniConfig.fallbackLocale=void 0,n.__uniConfig.locales=o.keys().reduce((function(n,e){var t=e.replace(/\.\/(uni-app.)?(.*).json/,"$2"),a=o(e);return Object.assign(n[t]||(n[t]={}),a.common||a),n}),{}),n.__uniConfig.nvue={"flex-direction":"column"},n.__uniConfig.__webpack_chunk_load__=t.e,a.default.component("pages-index-index",(function(n){var e={component:t.e("pages-index-index").then(function(){return n(t("e38f"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(n){return n(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(n){return n(__uniConfig["async"]["error"])}}),e})),a.default.component("pages-detail-detail",(function(n){var e={component:t.e("pages-detail-detail").then(function(){return n(t("0842"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(n){return n(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(n){return n(__uniConfig["async"]["error"])}}),e})),a.default.component("pages-my-my",(function(n){var e={component:t.e("pages-my-my").then(function(){return n(t("6b9f"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(n){return n(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(n){return n(__uniConfig["async"]["error"])}}),e})),a.default.component("pages-buy-buy",(function(n){var e={component:Promise.all([t.e("pages-active-active~pages-buy-buy"),t.e("pages-buy-buy")]).then(function(){return n(t("3d2c"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(n){return n(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(n){return n(__uniConfig["async"]["error"])}}),e})),a.default.component("pages-share-share",(function(n){var e={component:t.e("pages-share-share").then(function(){return n(t("6698"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(n){return n(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(n){return n(__uniConfig["async"]["error"])}}),e})),a.default.component("pages-active-active",(function(n){var e={component:Promise.all([t.e("pages-active-active~pages-buy-buy"),t.e("pages-active-active")]).then(function(){return n(t("1815"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(n){return n(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(n){return n(__uniConfig["async"]["error"])}}),e})),a.default.component("pages-shopList-shopList",(function(n){var e={component:t.e("pages-shopList-shopList").then(function(){return n(t("b0e5"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(n){return n(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(n){return n(__uniConfig["async"]["error"])}}),e})),a.default.component("pages-orderlist-orderlist",(function(n){var e={component:t.e("pages-orderlist-orderlist").then(function(){return n(t("630b"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(n){return n(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(n){return n(__uniConfig["async"]["error"])}}),e})),a.default.component("pages-auth-auth",(function(n){var e={component:t.e("pages-auth-auth").then(function(){return n(t("fd79"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(n){return n(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(n){return n(__uniConfig["async"]["error"])}}),e})),a.default.component("pages-fc-fc",(function(n){var e={component:t.e("pages-fc-fc").then(function(){return n(t("b5de"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(n){return n(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(n){return n(__uniConfig["async"]["error"])}}),e})),a.default.component("pages-error-error",(function(n){var e={component:t.e("pages-error-error").then(function(){return n(t("2c05"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(n){return n(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(n){return n(__uniConfig["async"]["error"])}}),e})),a.default.component("pages-attention-attention",(function(n){var e={component:t.e("pages-attention-attention").then(function(){return n(t("fd96"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(n){return n(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(n){return n(__uniConfig["async"]["error"])}}),e})),n.__uniRoutes=[{path:"/",alias:"/pages/index/index",component:{render:function(n){return n("Page",{props:Object.assign({isQuit:!0,isEntry:!0,isTabBar:!0,tabBarIndex:0},__uniConfig.globalStyle,{navigationBarTitleText:"首页",navigationStyle:"custom"})},[n("pages-index-index",{slot:"page"})])}},meta:{id:1,name:"pages-index-index",isNVue:!1,maxWidth:0,pagePath:"pages/index/index",isQuit:!0,isEntry:!0,isTabBar:!0,tabBarIndex:0,windowTop:0}},{path:"/pages/detail/detail",component:{render:function(n){return n("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"水+计划",navigationStyle:"custom"})},[n("pages-detail-detail",{slot:"page"})])}},meta:{name:"pages-detail-detail",isNVue:!1,maxWidth:0,pagePath:"pages/detail/detail",windowTop:0}},{path:"/pages/my/my",component:{render:function(n){return n("Page",{props:Object.assign({isQuit:!0,isTabBar:!0,tabBarIndex:1},__uniConfig.globalStyle,{navigationBarTitleText:"我的",navigationStyle:"custom"})},[n("pages-my-my",{slot:"page"})])}},meta:{id:2,name:"pages-my-my",isNVue:!1,maxWidth:0,pagePath:"pages/my/my",isQuit:!0,isTabBar:!0,tabBarIndex:1,windowTop:0}},{path:"/pages/buy/buy",component:{render:function(n){return n("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"水+计划",navigationStyle:"custom"})},[n("pages-buy-buy",{slot:"page"})])}},meta:{name:"pages-buy-buy",isNVue:!1,maxWidth:0,pagePath:"pages/buy/buy",windowTop:0}},{path:"/pages/share/share",component:{render:function(n){return n("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"水+计划",navigationStyle:"custom"})},[n("pages-share-share",{slot:"page"})])}},meta:{name:"pages-share-share",isNVue:!1,maxWidth:0,pagePath:"pages/share/share",windowTop:0}},{path:"/pages/active/active",component:{render:function(n){return n("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"水+计划",navigationStyle:"custom"})},[n("pages-active-active",{slot:"page"})])}},meta:{name:"pages-active-active",isNVue:!1,maxWidth:0,pagePath:"pages/active/active",windowTop:0}},{path:"/pages/shopList/shopList",component:{render:function(n){return n("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"水+计划",navigationStyle:"custom"})},[n("pages-shopList-shopList",{slot:"page"})])}},meta:{name:"pages-shopList-shopList",isNVue:!1,maxWidth:0,pagePath:"pages/shopList/shopList",windowTop:0}},{path:"/pages/orderlist/orderlist",component:{render:function(n){return n("Page",{props:Object.assign({isQuit:!0,isTabBar:!0,tabBarIndex:2},__uniConfig.globalStyle,{navigationBarTitleText:"订单",navigationStyle:"custom"})},[n("pages-orderlist-orderlist",{slot:"page"})])}},meta:{id:3,name:"pages-orderlist-orderlist",isNVue:!1,maxWidth:0,pagePath:"pages/orderlist/orderlist",isQuit:!0,isTabBar:!0,tabBarIndex:2,windowTop:0}},{path:"/pages/auth/auth",component:{render:function(n){return n("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"微信授权",navigationStyle:"custom"})},[n("pages-auth-auth",{slot:"page"})])}},meta:{name:"pages-auth-auth",isNVue:!1,maxWidth:0,pagePath:"pages/auth/auth",windowTop:0}},{path:"/pages/fc/fc",component:{render:function(n){return n("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"",enablePullDownRefresh:!1,navigationStyle:"custom"})},[n("pages-fc-fc",{slot:"page"})])}},meta:{name:"pages-fc-fc",isNVue:!1,maxWidth:0,pagePath:"pages/fc/fc",windowTop:0}},{path:"/pages/error/error",component:{render:function(n){return n("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"",enablePullDownRefresh:!1,navigationStyle:"custom"})},[n("pages-error-error",{slot:"page"})])}},meta:{name:"pages-error-error",isNVue:!1,maxWidth:0,pagePath:"pages/error/error",windowTop:0}},{path:"/pages/attention/attention",component:{render:function(n){return n("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"",enablePullDownRefresh:!1,navigationStyle:"custom"})},[n("pages-attention-attention",{slot:"page"})])}},meta:{name:"pages-attention-attention",isNVue:!1,maxWidth:0,pagePath:"pages/attention/attention",windowTop:0}},{path:"/preview-image",component:{render:function(n){return n("Page",{props:{navigationStyle:"custom"}},[n("system-preview-image",{slot:"page"})])}},meta:{name:"preview-image",pagePath:"/preview-image"}},{path:"/choose-location",component:{render:function(n){return n("Page",{props:{navigationStyle:"custom"}},[n("system-choose-location",{slot:"page"})])}},meta:{name:"choose-location",pagePath:"/choose-location"}},{path:"/open-location",component:{render:function(n){return n("Page",{props:{navigationStyle:"custom"}},[n("system-open-location",{slot:"page"})])}},meta:{name:"open-location",pagePath:"/open-location"}}],n.UniApp&&new n.UniApp}).call(this,t("c8ba"))},"74a9":function(n,e,t){"use strict";var a;t.d(e,"b",(function(){return o})),t.d(e,"c",(function(){return i})),t.d(e,"a",(function(){return a}));var o=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("App",{attrs:{keepAliveInclude:n.keepAliveInclude}})},i=[]},ac97:function(n,e,t){"use strict";var a=t("1f38"),o=t.n(a);o.a},ec19:function(n,e,t){"use strict";t.r(e);var a=t("ed89"),o=t.n(a);for(var i in a)"default"!==i&&function(n){t.d(e,n,(function(){return a[n]}))}(i);e["default"]=o.a},ed89:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={onLaunch:function(){console.log("App Launch")},onShow:function(){console.log("App Show")},onHide:function(){console.log("App Hide")}};e.default=a}});