(function(e){function n(n){for(var o,r,d=n[0],c=n[1],s=n[2],u=0,g=[];u<d.length;u++)r=d[u],Object.prototype.hasOwnProperty.call(t,r)&&t[r]&&g.push(t[r][0]),t[r]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);p&&p(n);while(g.length)g.shift()();return i.push.apply(i,s||[]),a()}function a(){for(var e,n=0;n<i.length;n++){for(var a=i[n],o=!0,r=1;r<a.length;r++){var c=a[r];0!==t[c]&&(o=!1)}o&&(i.splice(n--,1),e=d(d.s=a[0]))}return e}var o={},t={index:0},i=[];function r(e){return d.p+"static/js/"+({"pages-cate-index-index~pages-home-detail-detail~pages-home-index-index~pages-home-order-order~pages-~e1638b73":"pages-cate-index-index~pages-home-detail-detail~pages-home-index-index~pages-home-order-order~pages-~e1638b73","pages-cate-index-index~pages-home-product-product~pages-home-search-search":"pages-cate-index-index~pages-home-product-product~pages-home-search-search","pages-cate-index-index":"pages-cate-index-index","pages-home-product-product":"pages-home-product-product","pages-home-search-search":"pages-home-search-search","pages-home-detail-detail":"pages-home-detail-detail","pages-home-index-index":"pages-home-index-index","pages-home-order-order":"pages-home-order-order","pages-home-calander-calander":"pages-home-calander-calander","pages-me-index-index":"pages-me-index-index","pages-shop-index-index":"pages-shop-index-index"}[e]||e)+"."+{"pages-cate-index-index~pages-home-detail-detail~pages-home-index-index~pages-home-order-order~pages-~e1638b73":"e094cc90","pages-cate-index-index~pages-home-product-product~pages-home-search-search":"ebfc49f7","pages-cate-index-index":"5ee3c008","pages-home-product-product":"7d8c5098","pages-home-search-search":"6d8f63ae","pages-home-detail-detail":"c07a10ca","pages-home-index-index":"91e2b429","pages-home-order-order":"3ca6cc74","pages-home-calander-calander":"14850510","pages-me-index-index":"117f4395","pages-shop-index-index":"b4772ff2"}[e]+".js"}function d(n){if(o[n])return o[n].exports;var a=o[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,d),a.l=!0,a.exports}d.e=function(e){var n=[],a=t[e];if(0!==a)if(a)n.push(a[2]);else{var o=new Promise((function(n,o){a=t[e]=[n,o]}));n.push(a[2]=o);var i,c=document.createElement("script");c.charset="utf-8",c.timeout=120,d.nc&&c.setAttribute("nonce",d.nc),c.src=r(e);var s=new Error;i=function(n){c.onerror=c.onload=null,clearTimeout(u);var a=t[e];if(0!==a){if(a){var o=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;s.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",s.name="ChunkLoadError",s.type=o,s.request=i,a[1](s)}t[e]=void 0}};var u=setTimeout((function(){i({type:"timeout",target:c})}),12e4);c.onerror=c.onload=i,document.head.appendChild(c)}return Promise.all(n)},d.m=e,d.c=o,d.d=function(e,n,a){d.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:a})},d.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.t=function(e,n){if(1&n&&(e=d(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(d.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)d.d(a,o,function(n){return e[n]}.bind(null,o));return a},d.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return d.d(n,"a",n),n},d.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},d.p="/",d.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=n,c=c.slice();for(var u=0;u<c.length;u++)n(c[u]);var p=s;i.push([0,"chunk-vendors"]),a()})({0:function(e,n,a){e.exports=a("2cee")},"1df5":function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o={onLaunch:function(){console.log("App Launch")},onShow:function(){console.log("App Show")},onHide:function(){console.log("App Hide")}};n.default=o},"2cee":function(e,n,a){"use strict";var o=a("4ea4"),t=o(a("5530"));a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("d184"),a("1c31");var i=o(a("7daf")),r=a("5ff8"),d=o(a("e143"));d.default.prototype.$request=r.request,d.default.config.productionTip=!1,i.default.mpType="app";var c=new d.default((0,t.default)({},i.default));c.$mount()},"5ff8":function(e,n,a){"use strict";var o=a("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.request=void 0;var t=o(a("5530")),i="http://dc.msapi.xiaolibutai.com",r=function(e){var n=uni.getStorageSync("token");return e.url=i+e.url,e.header=(0,t.default)({token:n},e.header),uni.request((0,t.default)({},e))};n.request=r},"6cdc":function(e,n,a){var o=a("bc7b");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var t=a("4f06").default;t("e742eda0",o,!0,{sourceMap:!1,shadowMode:!1})},"7daf":function(e,n,a){"use strict";a.r(n);var o=a("a297"),t=a("8fdd");for(var i in t)"default"!==i&&function(e){a.d(n,e,(function(){return t[e]}))}(i);a("a12f");var r,d=a("f0c5"),c=Object(d["a"])(t["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],r);n["default"]=c.exports},"8fdd":function(e,n,a){"use strict";a.r(n);var o=a("1df5"),t=a.n(o);for(var i in o)"default"!==i&&function(e){a.d(n,e,(function(){return o[e]}))}(i);n["default"]=t.a},a12f:function(e,n,a){"use strict";var o=a("6cdc"),t=a.n(o);t.a},a297:function(e,n,a){"use strict";var o;a.d(n,"b",(function(){return t})),a.d(n,"c",(function(){return i})),a.d(n,"a",(function(){return o}));var t=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("App",{attrs:{keepAliveInclude:e.keepAliveInclude}})},i=[]},bc7b:function(e,n,a){var o=a("24fb");n=o(!1),n.push([e.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*每个页面公共css */.flex{display:flex;justify-content:space-between;align-items:center}.theme{color:#007c36}uni-image{vertical-align:middle}",""]),e.exports=n},d184:function(e,n,a){"use strict";(function(e){var n=a("4ea4");a("13d5"),a("d3b7"),a("ac1f"),a("5319"),a("ddb0");var o=n(a("e143")),t={keys:function(){return[]}};e["____6907830____"]=!0,delete e["____6907830____"],e.__uniConfig={globalStyle:{navigationBarTextStyle:"black",navigationBarTitleText:"小李补胎微商城欢迎您",navigationBarBackgroundColor:"#F8F8F8",backgroundColor:"#F8F8F8",navigationStyle:"custom"},tabBar:{color:"#7A7E83",selectedColor:"#007c36",borderStyle:"black",backgroundColor:"#ffffff",list:[{pagePath:"pages/home/index/index",iconPath:"static/home.png",selectedIconPath:"static/home_ac.png",text:"首页",redDot:!1,badge:""},{pagePath:"pages/cate/index/index",iconPath:"static/cate.png",selectedIconPath:"static/cate_ac.png",text:"分类",redDot:!1,badge:""},{pagePath:"pages/shop/index/index",iconPath:"static/shop.png",selectedIconPath:"static/shop_ac.png",text:"门店",redDot:!1,badge:""},{pagePath:"pages/me/index/index",iconPath:"static/me.png",selectedIconPath:"static/me_ac.png",text:"我的",redDot:!1,badge:""}]}},e.__uniConfig.compilerVersion="3.2.16",e.__uniConfig.router={mode:"hash",base:"/"},e.__uniConfig.publicPath="/",e.__uniConfig["async"]={loading:"AsyncLoading",error:"AsyncError",delay:200,timeout:6e4},e.__uniConfig.debug=!1,e.__uniConfig.networkTimeout={request:6e4,connectSocket:6e4,uploadFile:6e4,downloadFile:6e4},e.__uniConfig.sdkConfigs={},e.__uniConfig.qqMapKey=void 0,e.__uniConfig.googleMapKey=void 0,e.__uniConfig.locale="",e.__uniConfig.fallbackLocale=void 0,e.__uniConfig.locales=t.keys().reduce((function(e,n){var a=n.replace(/\.\/(uni-app.)?(.*).json/,"$2"),o=t(n);return Object.assign(e[a]||(e[a]={}),o.common||o),e}),{}),e.__uniConfig.nvue={"flex-direction":"column"},e.__uniConfig.__webpack_chunk_load__=a.e,o.default.component("pages-home-index-index",(function(e){var n={component:Promise.all([a.e("pages-cate-index-index~pages-home-detail-detail~pages-home-index-index~pages-home-order-order~pages-~e1638b73"),a.e("pages-home-index-index")]).then(function(){return e(a("6f81"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),o.default.component("pages-cate-index-index",(function(e){var n={component:Promise.all([a.e("pages-cate-index-index~pages-home-detail-detail~pages-home-index-index~pages-home-order-order~pages-~e1638b73"),a.e("pages-cate-index-index~pages-home-product-product~pages-home-search-search"),a.e("pages-cate-index-index")]).then(function(){return e(a("02d3"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),o.default.component("pages-shop-index-index",(function(e){var n={component:a.e("pages-shop-index-index").then(function(){return e(a("b49c"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),o.default.component("pages-me-index-index",(function(e){var n={component:a.e("pages-me-index-index").then(function(){return e(a("fe2d"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),o.default.component("pages-home-search-search",(function(e){var n={component:Promise.all([a.e("pages-cate-index-index~pages-home-detail-detail~pages-home-index-index~pages-home-order-order~pages-~e1638b73"),a.e("pages-cate-index-index~pages-home-product-product~pages-home-search-search"),a.e("pages-home-search-search")]).then(function(){return e(a("e4e8"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),o.default.component("pages-home-product-product",(function(e){var n={component:Promise.all([a.e("pages-cate-index-index~pages-home-detail-detail~pages-home-index-index~pages-home-order-order~pages-~e1638b73"),a.e("pages-cate-index-index~pages-home-product-product~pages-home-search-search"),a.e("pages-home-product-product")]).then(function(){return e(a("b1f6"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),o.default.component("pages-home-detail-detail",(function(e){var n={component:Promise.all([a.e("pages-cate-index-index~pages-home-detail-detail~pages-home-index-index~pages-home-order-order~pages-~e1638b73"),a.e("pages-home-detail-detail")]).then(function(){return e(a("83cb"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),o.default.component("pages-home-order-order",(function(e){var n={component:Promise.all([a.e("pages-cate-index-index~pages-home-detail-detail~pages-home-index-index~pages-home-order-order~pages-~e1638b73"),a.e("pages-home-order-order")]).then(function(){return e(a("905e"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),o.default.component("pages-home-calander-calander",(function(e){var n={component:a.e("pages-home-calander-calander").then(function(){return e(a("1856"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),e.__uniRoutes=[{path:"/",alias:"/pages/home/index/index",component:{render:function(e){return e("Page",{props:Object.assign({isQuit:!0,isEntry:!0,isTabBar:!0,tabBarIndex:0},__uniConfig.globalStyle,{})},[e("pages-home-index-index",{slot:"page"})])}},meta:{id:1,name:"pages-home-index-index",isNVue:!1,maxWidth:0,pagePath:"pages/home/index/index",isQuit:!0,isEntry:!0,isTabBar:!0,tabBarIndex:0,windowTop:0}},{path:"/pages/cate/index/index",component:{render:function(e){return e("Page",{props:Object.assign({isQuit:!0,isTabBar:!0,tabBarIndex:1},__uniConfig.globalStyle,{})},[e("pages-cate-index-index",{slot:"page"})])}},meta:{id:2,name:"pages-cate-index-index",isNVue:!1,maxWidth:0,pagePath:"pages/cate/index/index",isQuit:!0,isTabBar:!0,tabBarIndex:1,windowTop:0}},{path:"/pages/shop/index/index",component:{render:function(e){return e("Page",{props:Object.assign({isQuit:!0,isTabBar:!0,tabBarIndex:2},__uniConfig.globalStyle,{})},[e("pages-shop-index-index",{slot:"page"})])}},meta:{id:3,name:"pages-shop-index-index",isNVue:!1,maxWidth:0,pagePath:"pages/shop/index/index",isQuit:!0,isTabBar:!0,tabBarIndex:2,windowTop:0}},{path:"/pages/me/index/index",component:{render:function(e){return e("Page",{props:Object.assign({isQuit:!0,isTabBar:!0,tabBarIndex:3},__uniConfig.globalStyle,{})},[e("pages-me-index-index",{slot:"page"})])}},meta:{id:4,name:"pages-me-index-index",isNVue:!1,maxWidth:0,pagePath:"pages/me/index/index",isQuit:!0,isTabBar:!0,tabBarIndex:3,windowTop:0}},{path:"/pages/home/search/search",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{})},[e("pages-home-search-search",{slot:"page"})])}},meta:{name:"pages-home-search-search",isNVue:!1,maxWidth:0,pagePath:"pages/home/search/search",windowTop:0}},{path:"/pages/home/product/product",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{})},[e("pages-home-product-product",{slot:"page"})])}},meta:{name:"pages-home-product-product",isNVue:!1,maxWidth:0,pagePath:"pages/home/product/product",windowTop:0}},{path:"/pages/home/detail/detail",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{})},[e("pages-home-detail-detail",{slot:"page"})])}},meta:{name:"pages-home-detail-detail",isNVue:!1,maxWidth:0,pagePath:"pages/home/detail/detail",windowTop:0}},{path:"/pages/home/order/order",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{})},[e("pages-home-order-order",{slot:"page"})])}},meta:{name:"pages-home-order-order",isNVue:!1,maxWidth:0,pagePath:"pages/home/order/order",windowTop:0}},{path:"/pages/home/calander/calander",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{})},[e("pages-home-calander-calander",{slot:"page"})])}},meta:{name:"pages-home-calander-calander",isNVue:!1,maxWidth:0,pagePath:"pages/home/calander/calander",windowTop:0}},{path:"/preview-image",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-preview-image",{slot:"page"})])}},meta:{name:"preview-image",pagePath:"/preview-image"}},{path:"/choose-location",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-choose-location",{slot:"page"})])}},meta:{name:"choose-location",pagePath:"/choose-location"}},{path:"/open-location",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-open-location",{slot:"page"})])}},meta:{name:"open-location",pagePath:"/open-location"}}],e.UniApp&&new e.UniApp}).call(this,a("c8ba"))}});