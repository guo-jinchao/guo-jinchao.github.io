(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-home-detail-detail"],{"0527":function(t,n,e){var i=e("f154");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=e("4f06").default;a("65277983",i,!0,{sourceMap:!1,shadowMode:!1})},"0e95":function(t,n,e){"use strict";var i=e("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=e("37dc"),o=i(e("57bd")),r=(0,a.initVueI18n)(o.default),u=r.t,c={name:"UniGoodsNav",emits:["click","buttonClick"],props:{options:{type:Array,default:function(){return[{icon:"shop",text:u("uni-goods-nav.options.shop")},{icon:"cart",text:u("uni-goods-nav.options.cart")}]}},buttonGroup:{type:Array,default:function(){return[{text:u("uni-goods-nav.buttonGroup.addToCart"),backgroundColor:"linear-gradient(90deg, #FFCD1E, #FF8A18)",color:"#fff"},{text:u("uni-goods-nav.buttonGroup.buyNow"),backgroundColor:"linear-gradient(90deg, #FE6035, #EF1224)",color:"#fff"}]}},fill:{type:Boolean,default:!1}},methods:{onClick:function(t,n){this.$emit("click",{index:t,content:n})},buttonClick:function(t,n){uni.report&&uni.report(n.text,n.text),this.$emit("buttonClick",{index:t,content:n})}}};n.default=c},"149e":function(t,n,e){"use strict";var i=e("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=i(e("3835"));e("96cf");var o=i(e("1da1")),r={data:function(){return{proDetail:{},options:[{icon:"star",text:"收藏"},{icon:"headphones",text:"客服"}],buttonGroup:[{text:"立即购买",backgroundColor:"#007c36",color:"#fff"}],vModelValue:0,nav_active:1}},onLoad:function(t){this.product_id=t.id,this.getPro(),this.getattention(),this.getProCommont()},methods:{select_sku:function(t){},shift:function(t){this.nav_active=t},to_order:function(){uni.navigateTo({url:"../order/order"})},onClick:function(t){0==t.index&&this.collect()},getattention:function(){var t=this;return(0,o.default)(regeneratorRuntime.mark((function n(){var e,i,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.$http({url:"/api/FavouriteProduct",data:{product_id:t.product_id}});case 2:e=n.sent,i=(0,a.default)(e,2),i[0],o=i[1],o.data.data&&(t.options[0].icon="star-filled");case 7:case"end":return n.stop()}}),n)})))()},collect:function(){var t=this;return(0,o.default)(regeneratorRuntime.mark((function n(){var e,i,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.$http({url:"/api/FavouriteProduct",data:{product_id:t.product_id},method:"post"});case 2:e=n.sent,i=(0,a.default)(e,2),i[0],o=i[1],o.data.data?t.options[0].icon="star-filled":t.options[0].icon="star",uni.showToast({title:o.data.msg,icon:"none"});case 8:case"end":return n.stop()}}),n)})))()},buttonClick:function(){this.$refs.popup.open("bottom")},buyNow:function(){uni.navigateTo({url:"../order/order"})},getPro:function(){var t=this;return(0,o.default)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.$request({url:"/api/ProductInfo",data:{product_id:t.product_id}});case 2:t.proDetail=n.sent;case 3:case"end":return n.stop()}}),n)})))()},getProCommont:function(){var t=this;return(0,o.default)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.$request({url:"/api/CommentListProduct",data:{product_id:t.product_id}});case 2:case"end":return n.stop()}}),n)})))()}}};n.default=r},"1bb1":function(t,n,e){"use strict";e.r(n);var i=e("149e"),a=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(n,t,(function(){return i[t]}))}(o);n["default"]=a.a},"1ede":function(t,n,e){"use strict";e.r(n);var i=e("a5fc"),a=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(n,t,(function(){return i[t]}))}(o);n["default"]=a.a},"2d28":function(t,n,e){var i=e("24fb");n=i(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.commont[data-v-77113c4c]{padding:%?20?% %?30?%;background-color:#fff;margin-bottom:%?8?%}.commont .commont-name[data-v-77113c4c]{justify-content:flex-start;margin-bottom:%?25?%}.commont .commont-name uni-image[data-v-77113c4c]{width:%?67?%;height:%?67?%;margin-right:%?12?%}.commont .commont-content[data-v-77113c4c]{font-size:%?22?%;color:#484848}',""]),t.exports=n},"37dc":function(t,n,e){"use strict";(function(t){var i=e("4ea4");e("99af"),e("7db0"),e("4160"),e("c975"),e("a434"),e("b64b"),e("d3b7"),e("e25e"),e("ac1f"),e("5319"),e("1276"),e("498a"),e("159b"),e("ddb0"),Object.defineProperty(n,"__esModule",{value:!0}),n.compileI18nJsonStr=F,n.hasI18nJson=z,n.initVueI18n=V,n.isI18nStr=S,n.normalizeLocale=L,n.parseI18nJson=N,n.resolveLocale=R,n.isString=n.LOCALE_ZH_HANT=n.LOCALE_ZH_HANS=n.LOCALE_FR=n.LOCALE_ES=n.LOCALE_EN=n.I18n=n.Formatter=void 0;var a=i(e("3835")),o=i(e("d4ec")),r=i(e("bee2")),u=Array.isArray,c=function(t){return null!==t&&"object"===typeof t},s=["{","}"],l=function(){function t(){(0,o.default)(this,t),this._caches=Object.create(null)}return(0,r.default)(t,[{key:"interpolate",value:function(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:s;if(!n)return[t];var i=this._caches[t];return i||(i=v(t,e),this._caches[t]=i),p(i,n)}}]),t}();n.Formatter=l;var f=/^(?:\d)+/,d=/^(?:\w)+/;function v(t,n){var e=(0,a.default)(n,2),i=e[0],o=e[1],r=[],u=0,c="";while(u<t.length){var s=t[u++];if(s===i){c&&r.push({type:"text",value:c}),c="";var l="";s=t[u++];while(void 0!==s&&s!==o)l+=s,s=t[u++];var v=s===o,p=f.test(l)?"list":v&&d.test(l)?"named":"unknown";r.push({value:l,type:p})}else c+=s}return c&&r.push({type:"text",value:c}),r}function p(t,n){var e=[],i=0,a=u(n)?"list":c(n)?"named":"unknown";if("unknown"===a)return e;while(i<t.length){var o=t[i];switch(o.type){case"text":e.push(o.value);break;case"list":e.push(n[parseInt(o.value,10)]);break;case"named":"named"===a&&e.push(n[o.value]);break;case"unknown":0;break}i++}return e}var h="zh-Hans";n.LOCALE_ZH_HANS=h;var b="zh-Hant";n.LOCALE_ZH_HANT=b;var m="en";n.LOCALE_EN=m;var g="fr";n.LOCALE_FR=g;var x="es";n.LOCALE_ES=x;var _=Object.prototype.hasOwnProperty,w=function(t,n){return _.call(t,n)},y=new l;function k(t,n){return!!n.find((function(n){return-1!==t.indexOf(n)}))}function C(t,n){return n.find((function(n){return 0===t.indexOf(n)}))}function L(t,n){if(t){if(t=t.trim().replace(/_/g,"-"),n&&n[t])return t;if(t=t.toLowerCase(),0===t.indexOf("zh"))return t.indexOf("-hans")>-1?h:t.indexOf("-hant")>-1||k(t,["-tw","-hk","-mo","-cht"])?b:h;var e=C(t,[m,g,x]);return e||void 0}}var E=function(){function t(n){var e=n.locale,i=n.fallbackLocale,a=n.messages,r=n.watcher,u=n.formater;(0,o.default)(this,t),this.locale=m,this.fallbackLocale=m,this.message={},this.messages={},this.watchers=[],i&&(this.fallbackLocale=i),this.formater=u||y,this.messages=a||{},this.setLocale(e||m),r&&this.watchLocale(r)}return(0,r.default)(t,[{key:"setLocale",value:function(t){var n=this,e=this.locale;this.locale=L(t,this.messages)||this.fallbackLocale,this.messages[this.locale]||(this.messages[this.locale]={}),this.message=this.messages[this.locale],e!==this.locale&&this.watchers.forEach((function(t){t(n.locale,e)}))}},{key:"getLocale",value:function(){return this.locale}},{key:"watchLocale",value:function(t){var n=this,e=this.watchers.push(t)-1;return function(){n.watchers.splice(e,1)}}},{key:"add",value:function(t,n){var e=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=this.messages[t];i?e?Object.assign(i,n):Object.keys(n).forEach((function(t){w(i,t)||(i[t]=n[t])})):this.messages[t]=n}},{key:"f",value:function(t,n,e){return this.formater.interpolate(t,n,e).join("")}},{key:"t",value:function(t,n,e){var i=this.message;return"string"===typeof n?(n=L(n,this.messages),n&&(i=this.messages[n])):e=n,w(i,t)?this.formater.interpolate(i[t],e).join(""):(console.warn("Cannot translate the value of keypath ".concat(t,". Use the value of keypath as default.")),t)}}]),t}();function $(t,n){t.$watchLocale?t.$watchLocale((function(t){n.setLocale(t)})):t.$watch((function(){return t.$locale}),(function(t){n.setLocale(t)}))}function O(){return"undefined"!==typeof uni&&uni.getLocale?uni.getLocale():"undefined"!==typeof t&&t.getLocale?t.getLocale():m}function V(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=arguments.length>2?arguments[2]:void 0,i=arguments.length>3?arguments[3]:void 0;if("string"!==typeof t){var a=[n,t];t=a[0],n=a[1]}"string"!==typeof t&&(t=O()),"string"!==typeof e&&(e="undefined"!==typeof __uniConfig&&__uniConfig.fallbackLocale||m);var o=new E({locale:t,fallbackLocale:e,messages:n,watcher:i}),r=function(t,n){if("function"!==typeof getApp)r=function(t,n){return o.t(t,n)};else{var e=!1;r=function(t,n){var i=getApp().$vm;return i&&(i.$locale,e||(e=!0,$(i,o))),o.t(t,n)}}return r(t,n)};return{i18n:o,f:function(t,n,e){return o.f(t,n,e)},t:function(t,n){return r(t,n)},add:function(t,n){var e=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return o.add(t,n,e)},watch:function(t){return o.watchLocale(t)},getLocale:function(){return o.getLocale()},setLocale:function(t){return o.setLocale(t)}}}n.I18n=E;var A,j=function(t){return"string"===typeof t};function z(t,n){return A||(A=new l),P(t,(function(t,e){var i=t[e];return j(i)?!!S(i,n)||void 0:z(i,n)}))}function N(t,n,e){return A||(A=new l),P(t,(function(t,i){var a=t[i];j(a)?S(a,e)&&(t[i]=D(a,n,e)):N(a,n,e)})),t}function F(t,n){var e=n.locale,i=n.locales,a=n.delimiters;if(!S(t,a))return t;A||(A=new l);var o=[];Object.keys(i).forEach((function(t){t!==e&&o.push({locale:t,values:i[t]})})),o.unshift({locale:e,values:i[e]});try{return JSON.stringify(G(JSON.parse(t),o,a),null,2)}catch(r){}return t}function S(t,n){return t.indexOf(n[0])>-1}function D(t,n,e){return A.interpolate(t,n,e).join("")}function M(t,n,e,i){var a=t[n];if(j(a)){if(S(a,i)&&(t[n]=D(a,e[0].values,i),e.length>1)){var o=t[n+"Locales"]={};e.forEach((function(t){o[t.locale]=D(a,t.values,i)}))}}else G(a,e,i)}function G(t,n,e){return P(t,(function(t,i){M(t,i,n,e)})),t}function P(t,n){if(u(t)){for(var e=0;e<t.length;e++)if(n(t,e))return!0}else if(c(t))for(var i in t)if(n(t,i))return!0;return!1}function R(t){return function(n){return n?(n=L(n)||n,T(n).find((function(n){return t.indexOf(n)>-1}))):n}}function T(t){var n=[],e=t.split("-");while(e.length)n.push(e.join("-")),e.pop();return n}n.isString=j}).call(this,e("c8ba"))},"38b9":function(t,n,e){t.exports=e.p+"static/img/default.dc20eb6b.png"},"3d41":function(t,n,e){var i=e("2d28");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=e("4f06").default;a("43e5a97c",i,!0,{sourceMap:!1,shadowMode:!1})},"3ecf":function(t,n,e){var i=e("576e");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=e("4f06").default;a("243eca70",i,!0,{sourceMap:!1,shadowMode:!1})},"42e3":function(t,n,e){"use strict";e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return i}));var i={uniIcons:e("6bea").default,commont:e("6072").default,uniGoodsNav:e("8780c").default,uniPopup:e("bd7a").default,uniNumberBox:e("f9ac").default},a=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("v-uni-view",[i("v-uni-swiper",{staticClass:"carousel",attrs:{"indicator-dots":"true",circular:"true",interval:"3000",duration:"700"}},t._l(t.proDetail.images,(function(t,n){return i("v-uni-swiper-item",{key:n},[i("v-uni-image",{attrs:{src:"http://image.xiaolibutai.com/"+t,mode:"aspectFill"}})],1)})),1),i("v-uni-view",{staticClass:"product-detail"},[i("v-uni-view",{staticClass:"product-name"},[t._v(t._s(t.proDetail.title))]),i("v-uni-view",{staticClass:"my-flex product-money"},[i("v-uni-view",{staticClass:"money"},[i("v-uni-text",[t._v(t._s(t.proDetail.sale_price_name))]),i("v-uni-text",[t._v(t._s(t.proDetail.mark_price_name))])],1),i("v-uni-view",[t._v("已售"),i("v-uni-text",{staticClass:"theme"},[t._v(t._s(t.proDetail.total_sales))]),t._v("份")],1)],1)],1),i("v-uni-view",{staticClass:"my-flex refund carkind"},[i("v-uni-view",{staticClass:"my-flex"},[i("v-uni-image",{staticClass:"car",attrs:{src:e("a570"),mode:"widthFix"}}),i("v-uni-view",{},[i("v-uni-view",[t._v("奥迪A6 L12")]),i("v-uni-view",[t._v("1992款 1.8L 手动化油器")])],1)],1),i("uni-icons",{attrs:{type:"right"}})],1),i("v-uni-view",{staticClass:"my-flex refund",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.$refs.popup.open("bottom")}}},[i("v-uni-text",[t._v("选择规格")]),i("uni-icons",{attrs:{type:"right"}})],1),i("v-uni-view",{staticClass:"my-flex pro-intro"},[i("v-uni-view",{on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.shift(1)}}},[i("v-uni-text",[t._v("商品详情")]),i("v-uni-view",{class:1==t.nav_active?"bottom-line":""})],1),i("v-uni-view",{on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.shift(2)}}},[i("v-uni-text",[t._v("商品评价（120）")]),i("v-uni-view",{class:2==t.nav_active?"bottom-line":""})],1)],1),1==t.nav_active?i("v-uni-rich-text",{attrs:{nodes:t.proDetail.content?t.proDetail.content.replace(/\<img/gi,"<img style=max-width:100%;height:auto"):""}}):i("commont"),i("v-uni-view",{staticClass:"place"}),i("uni-goods-nav",{staticClass:"goods-carts",attrs:{fill:!0,options:t.options,buttonGroup:t.buttonGroup},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.onClick.apply(void 0,arguments)},buttonClick:function(n){arguments[0]=n=t.$handleEvent(n),t.buttonClick.apply(void 0,arguments)}}}),i("uni-popup",{ref:"popup"},[i("v-uni-view",{staticClass:"sku"},[i("v-uni-view",{staticClass:"sku-pro my-flex"},[i("v-uni-image",{attrs:{src:t.proDetail.images?"http://image.xiaolibutai.com/"+t.proDetail.images[0]:"",mode:"aspectFill"}}),i("v-uni-view",{staticClass:"sku-pro-detail"},[i("v-uni-view",{staticClass:"sku-pro-name"},[t._v(t._s(t.proDetail.title))]),i("v-uni-view",[i("v-uni-text",{staticClass:"real-money"},[t._v(t._s(t.proDetail.sale_price_name))]),i("v-uni-text",{staticClass:"line-money"},[t._v(t._s(t.proDetail.mark_price_name))])],1)],1)],1),i("v-uni-view",{staticClass:"line"}),t._l(t.proDetail.features,(function(n){return i("v-uni-view",{},[i("v-uni-view",{staticClass:"sku_name"},[t._v(t._s(n.name))]),t._l(n.values,(function(e){return i("v-uni-text",{staticClass:"tag active-bg",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.select_sku(n)}}},[t._v(t._s(e.value))])})),i("v-uni-view",{staticClass:"line"})],2)})),i("v-uni-view",{staticClass:"my-flex"},[i("v-uni-text",[t._v("数量")]),i("uni-number-box",{model:{value:t.vModelValue,callback:function(n){t.vModelValue=n},expression:"vModelValue"}})],1),i("v-uni-view",{staticClass:"line"}),i("v-uni-button",{staticClass:"confirm-btn",attrs:{type:"default"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.to_order.apply(void 0,arguments)}}},[t._v("确定")])],2)],1)],1)},o=[]},"49d0":function(t,n,e){var i=e("24fb");n=i(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-page-body[data-v-effbc780]{background-color:#fafafa}.carousel[data-v-effbc780]{height:%?500?%}.carousel uni-image[data-v-effbc780]{width:100%;height:%?500?%}.refund[data-v-effbc780]{padding:%?30?%;background-color:#fff;font-size:%?24?%;color:#7d7979}.product-detail[data-v-effbc780]{padding:%?30?%;background-color:#fff;margin-bottom:%?2?%}.product-detail .product-name[data-v-effbc780]{font-size:%?30?%;font-weight:700}.product-detail .product-money[data-v-effbc780]{font-size:%?26?%;color:#888;margin-top:%?32?%}.product-detail .product-money .theme[data-v-effbc780]{font-size:16px;font-weight:700}.product-detail .product-money .money uni-text[data-v-effbc780]:first-child{color:#e2324a;font-size:%?28?%}.product-detail .product-money .money uni-text[data-v-effbc780]:nth-child(2){color:#e2324a;font-size:%?38?%}.product-detail .product-money .money uni-text[data-v-effbc780]:nth-child(3){color:#888;font-size:%?26?%}.product-detail .product-money .money uni-text[data-v-effbc780]:last-child{color:#888;font-size:%?26?%;text-decoration:line-through}.sales[data-v-effbc780]{width:%?32?%;vertical-align:text-bottom;margin-right:%?4?%}.carkind[data-v-effbc780]{margin:%?12?% 0}.carkind .car[data-v-effbc780]{width:%?90?%}.pro-intro[data-v-effbc780]{justify-content:space-around;padding:%?30?%}.pro-intro > uni-view[data-v-effbc780]{display:flex;flex-direction:column;align-items:center;height:%?60?%;justify-content:space-between}.pro-intro > uni-view .bottom-line[data-v-effbc780]{width:%?50?%;height:%?5?%;background-color:#007c36}.sku[data-v-effbc780]{background-color:#fff;padding:%?15?% %?30?%}.sku uni-image[data-v-effbc780]{width:%?176?%;height:%?162?%;margin-right:%?8?%}.sku .line[data-v-effbc780]{width:%?750?%;height:%?2?%;background-color:#f5f5f5;margin:%?15?% 0;margin-left:%?-30?%}.sku .active-bg[data-v-effbc780]{background-color:var(--theme-color)!important;color:#fff!important}.sku .tag[data-v-effbc780]{background:#f0f0f0;color:#3a3838;font-size:%?22?%;padding:%?10?% %?30?%;border-radius:%?23?%;margin:%?10?%;display:inline-block}.sku .sku-pro[data-v-effbc780]{align-items:stretch}.sku .sku-pro .sku-pro-detail[data-v-effbc780]{flex:1;display:flex;flex-direction:column;justify-content:space-between}.sku .sku-pro .sku-pro-detail .real-money[data-v-effbc780]{font-weight:700;font-size:%?28?%;color:#e2324a}.sku .sku-pro .sku-pro-detail .line-money[data-v-effbc780]{font-size:%?26?%;color:#888;text-decoration:line-through}.sku .sku_name[data-v-effbc780]{margin:%?10?% 0;font-size:%?26?%;color:#212020;font-weight:700}.sku .sku-pro-name[data-v-effbc780]{font-size:%?26?%;color:#1b1a1a}.sku .confirm-btn[data-v-effbc780]{background-color:var(--theme-color);color:#fff;border-radius:%?50?%}.goods-carts[data-v-effbc780]{position:fixed;bottom:0;width:100%}.place[data-v-effbc780]{height:%?100?%}[data-v-effbc780] .uniui-star-filled{color:#e2324a!important}body.?%PAGE?%[data-v-effbc780]{background-color:#fafafa}',""]),t.exports=n},"4b8f":function(t){t.exports=JSON.parse('{"uni-goods-nav.options.shop":"店鋪","uni-goods-nav.options.cart":"購物車","uni-goods-nav.buttonGroup.addToCart":"加入購物車","uni-goods-nav.buttonGroup.buyNow":"立即購買"}')},"52fa":function(t,n,e){var i=e("49d0");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=e("4f06").default;a("e5285dfc",i,!0,{sourceMap:!1,shadowMode:!1})},"576e":function(t,n,e){var i=e("24fb");n=i(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.flex[data-v-4f827f92]{display:flex;flex-direction:row}.uni-goods-nav[data-v-4f827f92]{display:flex;flex:1;flex-direction:row}.uni-tab__cart-box[data-v-4f827f92]{flex:1;height:50px;background-color:#fff;z-index:900}.uni-tab__cart-sub-left[data-v-4f827f92]{padding:0 5px}.uni-tab__cart-sub-right[data-v-4f827f92]{flex:1}.uni-tab__right[data-v-4f827f92]{margin:5px 0;margin-right:10px;border-radius:100px;overflow:hidden}.uni-tab__cart-button-left[data-v-4f827f92]{display:flex;position:relative;justify-content:center;align-items:center;flex-direction:column;margin:0 10px;cursor:pointer}.uni-tab__icon[data-v-4f827f92]{width:18px;height:18px}.image[data-v-4f827f92]{width:18px;height:18px}.uni-tab__text[data-v-4f827f92]{margin-top:3px;font-size:12px;color:#646566}.uni-tab__cart-button-right[data-v-4f827f92]{display:flex;flex-direction:column;flex:1;justify-content:center;align-items:center;cursor:pointer}.uni-tab__cart-button-right-text[data-v-4f827f92]{font-size:14px;color:#fff}.uni-tab__cart-button-right[data-v-4f827f92]:active{opacity:.7}.uni-tab__dot-box[data-v-4f827f92]{display:flex;flex-direction:column;position:absolute;right:-2px;top:2px;justify-content:center;align-items:center}.uni-tab__dot[data-v-4f827f92]{padding:0 4px;line-height:15px;color:#fff;text-align:center;font-size:12px;background-color:red;border-radius:15px}.uni-tab__dots[data-v-4f827f92]{padding:0 4px;border-radius:15px}',""]),t.exports=n},"57bd":function(t,n,e){"use strict";var i=e("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=i(e("e815")),o=i(e("6650")),r=i(e("4b8f")),u={en:a.default,"zh-Hans":o.default,"zh-Hant":r.default};n.default=u},6072:function(t,n,e){"use strict";e.r(n);var i=e("e552"),a=e("1ede");for(var o in a)"default"!==o&&function(t){e.d(n,t,(function(){return a[t]}))}(o);e("854e");var r,u=e("f0c5"),c=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"77113c4c",null,!1,i["a"],r);n["default"]=c.exports},6650:function(t){t.exports=JSON.parse('{"uni-goods-nav.options.shop":"店铺","uni-goods-nav.options.cart":"购物车","uni-goods-nav.buttonGroup.addToCart":"加入购物车","uni-goods-nav.buttonGroup.buyNow":"立即购买"}')},"6d66":function(t,n,e){"use strict";e("a9e3"),e("ac1f"),e("1276"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={name:"UniNumberBox",emits:["change","input","update:modelValue","blur","focus"],props:{value:{type:[Number,String],default:1},modelValue:{type:[Number,String],default:1},min:{type:Number,default:0},max:{type:Number,default:100},step:{type:Number,default:1},background:{type:String,default:"#f5f5f5"},color:{type:String,default:"#333"},disabled:{type:Boolean,default:!1}},data:function(){return{inputValue:0}},watch:{value:function(t){this.inputValue=+t},modelValue:function(t){this.inputValue=+t}},created:function(){1===this.value&&(this.inputValue=+this.modelValue),1===this.modelValue&&(this.inputValue=+this.value)},methods:{_calcValue:function(t){if(!this.disabled){var n=this._getDecimalScale(),e=this.inputValue*n,i=this.step*n;if("minus"===t){if(e-=i,e<this.min*n)return;e>this.max*n&&(e=this.max*n)}if("plus"===t){if(e+=i,e>this.max*n)return;e<this.min*n&&(e=this.min*n)}this.inputValue=(e/n).toFixed(String(n).length-1),this.$emit("change",+this.inputValue),this.$emit("input",+this.inputValue),this.$emit("update:modelValue",+this.inputValue)}},_getDecimalScale:function(){var t=1;return~~this.step!==this.step&&(t=Math.pow(10,String(this.step).split(".")[1].length)),t},_onBlur:function(t){this.$emit("blur",t);var n=t.detail.value;if(n){n=+n,n>this.max?n=this.max:n<this.min&&(n=this.min);var e=this._getDecimalScale();this.inputValue=n.toFixed(String(e).length-1),this.$emit("change",+this.inputValue),this.$emit("input",+this.inputValue)}},_onFocus:function(t){this.$emit("focus",t)}}};n.default=i},"72c4":function(t,n,e){"use strict";var i;e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return i}));var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"uni-numbox"},[e("v-uni-view",{staticClass:"uni-numbox__minus uni-numbox-btns",style:{background:t.background},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t._calcValue("minus")}}},[e("v-uni-text",{staticClass:"uni-numbox--text",class:{"uni-numbox--disabled":t.inputValue<=t.min||t.disabled},style:{color:t.color}},[t._v("-")])],1),e("v-uni-input",{staticClass:"uni-numbox__value",style:{background:t.background,color:t.color},attrs:{disabled:t.disabled,type:"number"},on:{focus:function(n){arguments[0]=n=t.$handleEvent(n),t._onFocus.apply(void 0,arguments)},blur:function(n){arguments[0]=n=t.$handleEvent(n),t._onBlur.apply(void 0,arguments)}},model:{value:t.inputValue,callback:function(n){t.inputValue=n},expression:"inputValue"}}),e("v-uni-view",{staticClass:"uni-numbox__plus uni-numbox-btns",style:{background:t.background},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t._calcValue("plus")}}},[e("v-uni-text",{staticClass:"uni-numbox--text",class:{"uni-numbox--disabled":t.inputValue>=t.max||t.disabled},style:{color:t.color}},[t._v("+")])],1)],1)},o=[]},"83cb":function(t,n,e){"use strict";e.r(n);var i=e("42e3"),a=e("1bb1");for(var o in a)"default"!==o&&function(t){e.d(n,t,(function(){return a[t]}))}(o);e("efbb");var r,u=e("f0c5"),c=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"effbc780",null,!1,i["a"],r);n["default"]=c.exports},"83ff":function(t,n,e){"use strict";e.r(n);var i=e("6d66"),a=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(n,t,(function(){return i[t]}))}(o);n["default"]=a.a},"854e":function(t,n,e){"use strict";var i=e("3d41"),a=e.n(i);a.a},"8780c":function(t,n,e){"use strict";e.r(n);var i=e("b54e"),a=e("d7cc");for(var o in a)"default"!==o&&function(t){e.d(n,t,(function(){return a[t]}))}(o);e("ea80");var r,u=e("f0c5"),c=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"4f827f92",null,!1,i["a"],r);n["default"]=c.exports},"8db6":function(t,n,e){"use strict";var i=e("0527"),a=e.n(i);a.a},a570:function(t,n,e){t.exports=e.p+"static/img/nav8.a83503dd.png"},a5fc:function(t,n){},b54e:function(t,n,e){"use strict";e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return i}));var i={uniIcons:e("6bea").default},a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"uni-goods-nav"},[e("v-uni-view",{staticClass:"uni-tab__seat"}),e("v-uni-view",{staticClass:"uni-tab__cart-box flex"},[e("v-uni-view",{staticClass:"flex uni-tab__cart-sub-left"},t._l(t.options,(function(n,i){return e("v-uni-view",{key:i,staticClass:"flex uni-tab__cart-button-left uni-tab__shop-cart",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick(i,n)}}},[e("v-uni-view",{staticClass:"uni-tab__icon"},[e("uni-icons",{attrs:{type:n.icon,size:"20",color:"#646566"}})],1),e("v-uni-text",{staticClass:"uni-tab__text"},[t._v(t._s(n.text))]),e("v-uni-view",{staticClass:"flex uni-tab__dot-box"},[n.info?e("v-uni-text",{staticClass:"uni-tab__dot ",class:{"uni-tab__dots":n.info>9},style:{backgroundColor:n.infoBackgroundColor?n.infoBackgroundColor:"#ff0000",color:n.infoColor?n.infoColor:"#fff"}},[t._v(t._s(n.info))]):t._e()],1)],1)})),1),e("v-uni-view",{staticClass:"flex uni-tab__cart-sub-right ",class:{"uni-tab__right":t.fill}},t._l(t.buttonGroup,(function(n,i){return e("v-uni-view",{key:i,staticClass:"flex uni-tab__cart-button-right",style:{background:n.backgroundColor,color:n.color},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.buttonClick(i,n)}}},[e("v-uni-text",{staticClass:"uni-tab__cart-button-right-text",style:{color:n.color}},[t._v(t._s(n.text))])],1)})),1)],1)],1)},o=[]},d7cc:function(t,n,e){"use strict";e.r(n);var i=e("0e95"),a=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(n,t,(function(){return i[t]}))}(o);n["default"]=a.a},e552:function(t,n,e){"use strict";var i;e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return i}));var a=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("v-uni-view",{},t._l(3,(function(n){return i("v-uni-view",{staticClass:"commont"},[i("v-uni-view",{staticClass:"commont-name my-flex"},[i("v-uni-image",{attrs:{src:e("38b9"),mode:""}}),i("v-uni-view",{},[i("v-uni-view",{},[t._v("182026211111")]),i("v-uni-view",{},[t._v("4.8")])],1)],1),i("v-uni-view",{staticClass:"commont-content"},[t._v("技师很专业，服务态度特别好！")])],1)})),1)},o=[]},e815:function(t){t.exports=JSON.parse('{"uni-goods-nav.options.shop":"shop","uni-goods-nav.options.cart":"cart","uni-goods-nav.buttonGroup.addToCart":"add to cart","uni-goods-nav.buttonGroup.buyNow":"buy now"}')},ea80:function(t,n,e){"use strict";var i=e("3ecf"),a=e.n(i);a.a},efbb:function(t,n,e){"use strict";var i=e("52fa"),a=e.n(i);a.a},f154:function(t,n,e){var i=e("24fb");n=i(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uni-numbox[data-v-84173196]{display:flex;flex-direction:row}.uni-numbox-btns[data-v-84173196]{display:flex;flex-direction:row;align-items:center;justify-content:center;padding:0 8px;background-color:#f5f5f5;cursor:pointer}.uni-numbox__value[data-v-84173196]{margin:0 2px;background-color:#f5f5f5;width:40px;height:26px;text-align:center;font-size:14px;border-left-width:0;border-right-width:0;color:#333}.uni-numbox__minus[data-v-84173196]{border-top-left-radius:2px;border-bottom-left-radius:2px}.uni-numbox__plus[data-v-84173196]{border-top-right-radius:2px;border-bottom-right-radius:2px}.uni-numbox--text[data-v-84173196]{line-height:20px;font-size:20px;font-weight:300;color:#333}.uni-numbox .uni-numbox--disabled[data-v-84173196]{color:silver!important;cursor:not-allowed}',""]),t.exports=n},f9ac:function(t,n,e){"use strict";e.r(n);var i=e("72c4"),a=e("83ff");for(var o in a)"default"!==o&&function(t){e.d(n,t,(function(){return a[t]}))}(o);e("8db6");var r,u=e("f0c5"),c=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"84173196",null,!1,i["a"],r);n["default"]=c.exports}}]);