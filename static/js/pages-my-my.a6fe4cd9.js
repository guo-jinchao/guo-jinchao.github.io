(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-my-my"],{"06c5":function(t,e,n){"use strict";n("a630"),n("fb6a"),n("d3b7"),n("25f0"),n("3ca3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=i;var r=a(n("6b75"));function a(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(t){if("string"===typeof t)return(0,r.default)(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,r.default)(t,e):void 0}}},"09f0":function(t,e,n){"use strict";function r(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,a=!1,i=void 0;try{for(var o,c=t[Symbol.iterator]();!(r=(o=c.next()).done);r=!0)if(n.push(o.value),e&&n.length===e)break}catch(s){a=!0,i=s}finally{try{r||null==c["return"]||c["return"]()}finally{if(a)throw i}}return n}}n("a4d3"),n("e01a"),n("d28b"),n("d3b7"),n("3ca3"),n("ddb0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=r},"0d21":function(t,e,n){"use strict";function r(t){if(Array.isArray(t))return t}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r},"1da1":function(t,e,n){"use strict";function r(t,e,n,r,a,i,o){try{var c=t[i](o),s=c.value}catch(u){return void n(u)}c.done?e(s):Promise.resolve(s).then(r,a)}function a(t){return function(){var e=this,n=arguments;return new Promise((function(a,i){var o=t.apply(e,n);function c(t){r(o,a,i,c,s,"next",t)}function s(t){r(o,a,i,c,s,"throw",t)}c(void 0)}))}}n("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=a},"1de5":function(t,e,n){"use strict";t.exports=function(t,e){return e||(e={}),t=t&&t.__esModule?t.default:t,"string"!==typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},3835:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var r=c(n("0d21")),a=c(n("09f0")),i=c(n("06c5")),o=c(n("3d8c"));function c(t){return t&&t.__esModule?t:{default:t}}function s(t,e){return(0,r.default)(t)||(0,a.default)(t,e)||(0,i.default)(t,e)||(0,o.default)()}},"3d8c":function(t,e,n){"use strict";function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r},"5a3d":function(t,e,n){"use strict";var r=n("4ea4");n("99af"),n("4160"),n("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var a=r(n("1da1")),i=r(n("60de")),o=n("f9dc"),c={data:function(){return{wordkind:1,show:!1,arr:[],selected:"all",type:0,cardData:[],page_index:1,content:[{text:"水+卡",iconPath:"/static/card1.png",selectedIconPath:"/static/card.png",active:!0},{text:"订单",iconPath:"/static/order1.png",selectedIconPath:"/static/order.png",active:!1}]}},components:{},onLoad:function(t){var e=this;return(0,a.default)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,(0,o.http)();case 2:e.getCard();case 3:case"end":return t.stop()}}),t)})))()},onReachBottom:function(){this.page_index++,this.getCard()},methods:{goorder:function(){uni.navigateTo({url:"../orderlist/orderlist"})},open1:function(t){1==t.index&&uni.navigateTo({url:"../orderlist/orderlist"})},goshop:function(){uni.navigateTo({url:"../shopList/shopList"})},goshare:function(t){uni.navigateTo({url:"../share/share?code_="+t.proof_code+"&name="+t.proffer_name+"&ctime="+t.create_time+"&etime="+t.end_time+"&state="+t.proof_state_name+"&car="+t.car_name})},change:function(t){"{}"!=JSON.stringify(t.target.dataset)&&(this.selected=t.target.dataset.id),"all"==t.target.dataset.id&&(this.type=0,this.bind=0,this.wordkind=1),"me"==t.target.dataset.id&&(this.type=0,this.bind=2,this.wordkind=2),"send"==t.target.dataset.id&&(this.type=2,this.bind=1,this.wordkind=3),"firm"==t.target.dataset.id&&(this.type=3,this.bind=2),this.arr=[],this.cardData=[],this.page_index=1,this.getCard()},getCard:function(){var t=this;uni.showLoading({title:"加载中"}),(0,i.default)({url:"/api/UserWaterProofList",data:{page_index:this.page_index,page_size:"10",proof_type:this.type,proof_state:0,isbind:this.bind},success:function(e){uni.hideLoading(),t.cardData=t.cardData.concat(e.data.data),0==t.cardData.length?t.show=!0:t.show=!1,t.cardData.forEach((function(e,n){2==e.proof_state&&(0,i.default)({url:"/api/UserCardAutoOpen",method:"post",success:function(r){(0,i.default)({url:"/api/UserWaterProofList",data:{page_index:t.page_index,page_size:"10",proof_type:t.type,proof_state:0,isbind:t.bind},success:function(r){r.data.data.forEach((function(r,a){r.authid==e.authid&&(t.cardData[n]=r,t.$forceUpdate())}))}})}})}))}})}}};e.default=c},"60de":function(t,e,n){"use strict";var r=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=r(n("5530")),i=function(t){t.url="https://shuijia.api.xiaolibutai.com"+t.url;var e=uni.getStorageSync("token");return e&&(t.header=(0,a.default)({token:e},t.header)),uni.request(t)},o=i;e.default=o},"6b75":function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r},"6b9f":function(t,e,n){"use strict";n.r(e);var r=n("a1aa"),a=n("9ae4");for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);n("7cc8");var o,c=n("f0c5"),s=Object(c["a"])(a["default"],r["b"],r["c"],!1,null,"70ec66cc",null,!1,r["a"],o);e["default"]=s.exports},"7cc8":function(t,e,n){"use strict";var r=n("c3b0"),a=n.n(r);a.a},"893b":function(t,e,n){t.exports=n.p+"static/img/ping.093111e4.png"},"89ea":function(t,e,n){var r=n("24fb"),a=n("1de5"),i=n("893b");e=r(!1);var o=a(i);e.push([t.i,".card[data-v-70ec66cc]{margin:%?30?% %?40?%;\n\t/* background: linear-gradient(45deg, #01783a, #008000); */background-image:url("+o+");background-size:cover;padding:%?24?%;border-radius:%?30?%;height:%?300?%;display:flex;flex-direction:column;justify-content:space-between;box-shadow:5px 5px 5px #888;position:relative}.card1[data-v-70ec66cc]{color:#fff;font-size:14px}.card2[data-v-70ec66cc]{margin-left:%?65?%}.mid[data-v-70ec66cc]{justify-content:flex-end;font-size:24px;display:flex;align-items:center}.btn[data-v-70ec66cc]{font-size:12px;margin-left:45px;border:1px solid #fff;padding:%?5?% %?15?%;border-radius:%?30?%}\n\n/* \t.proof {\n\tmargin: 30rpx;\n\tbackground: url('../../static/back.png') no-repeat center;\n\tbackground-size: cover;\n\tpadding: 20rpx;\n\tborder-radius: 10rpx;\n\theight: 300rpx;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n\tposition: relative;\n}\n\n.row1 {\n\tfont-size: 40rpx;\n\twidth: 90%;\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: flex-end;\n}\n\n.row3 {\n\tfont-size: 12px;\n}\n\n.row3>view {\n\tline-height: 18px;\n}\n\n.row4 {\n\twidth: 70px;\n\ttext-align: center;\n\tborder: 1px solid #666;\n\tpadding: 5rpx 25rpx;\n\tborder-radius: 50rpx;\n} */.nav[data-v-70ec66cc]{display:flex;justify-content:space-around;padding:%?20?% %?20?% 0 %?20?%}.active[data-v-70ec66cc]{width:%?30?%;height:%?6?%;margin-top:%?8?%;background-color:green;display:inline-block}.nav uni-view[data-v-70ec66cc]{display:flex;flex-direction:column;align-items:center}.checked[data-v-70ec66cc]{color:green}\n\n/* \t.leixing {\n\tposition: absolute;\n\tfont-size: 24rpx;\n\ttop: 20rpx;\n\tright: 20rpx;\n\ttransform: rotate(45deg);\n}\n\n.water {\n\tposition: absolute;\n\tright: 116rpx;\n\ttop: 42%;\n\ttransform: translateY(-50%);\n\ttext-align: center;\n\tfont-size: 18px;\n} */.no[data-v-70ec66cc]{text-align:center;margin-top:50px;font-size:22px}.header[data-v-70ec66cc]{padding:0 %?30?%;background:#666;color:#fff;line-height:40px;font-size:20px;opacity:.8;text-align:center;position:relative;display:flex;align-items:center;justify-content:flex-end}.top_right[data-v-70ec66cc]{position:absolute;font-size:12px;top:%?30?%;right:%?15?%;-webkit-transform:rotate(45deg);transform:rotate(45deg);color:#fff}",""]),t.exports=e},"96cf":function(t,e){!function(e){"use strict";var n,r=Object.prototype,a=r.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag",u="object"===typeof t,d=e.regeneratorRuntime;if(d)u&&(t.exports=d);else{d=e.regeneratorRuntime=u?t.exports:{},d.wrap=m;var f="suspendedStart",l="suspendedYield",p="executing",h="completed",v={},g={};g[o]=function(){return this};var _=Object.getPrototypeOf,y=_&&_(_(M([])));y&&y!==r&&a.call(y,o)&&(g=y);var x=j.prototype=b.prototype=Object.create(g);k.prototype=x.constructor=j,j.constructor=k,j[s]=k.displayName="GeneratorFunction",d.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===k||"GeneratorFunction"===(e.displayName||e.name))},d.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,j):(t.__proto__=j,s in t||(t[s]="GeneratorFunction")),t.prototype=Object.create(x),t},d.awrap=function(t){return{__await:t}},L(O.prototype),O.prototype[c]=function(){return this},d.AsyncIterator=O,d.async=function(t,e,n,r){var a=new O(m(t,e,n,r));return d.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},L(x),x[s]="Generator",x[o]=function(){return this},x.toString=function(){return"[object Generator]"},d.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},d.values=M,z.prototype={constructor:z,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(S),!t)for(var e in this)"t"===e.charAt(0)&&a.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,a){return c.type="throw",c.arg=t,e.next=r,a&&(e.method="next",e.arg=n),!!a}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],c=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var s=a.call(o,"catchLoc"),u=a.call(o,"finallyLoc");if(s&&u){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=t,o.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),S(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var a=r.arg;S(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:M(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),v}}}function m(t,e,n,r){var a=e&&e.prototype instanceof b?e:b,i=Object.create(a.prototype),o=new z(r||[]);return i._invoke=E(t,n,o),i}function w(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(r){return{type:"throw",arg:r}}}function b(){}function k(){}function j(){}function L(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function O(t){function e(n,r,i,o){var c=w(t[n],t,r);if("throw"!==c.type){var s=c.arg,u=s.value;return u&&"object"===typeof u&&a.call(u,"__await")?Promise.resolve(u.__await).then((function(t){e("next",t,i,o)}),(function(t){e("throw",t,i,o)})):Promise.resolve(u).then((function(t){s.value=t,i(s)}),(function(t){return e("throw",t,i,o)}))}o(c.arg)}var n;function r(t,r){function a(){return new Promise((function(n,a){e(t,r,n,a)}))}return n=n?n.then(a,a):a()}this._invoke=r}function E(t,e,n){var r=f;return function(a,i){if(r===p)throw new Error("Generator is already running");if(r===h){if("throw"===a)throw i;return T()}n.method=a,n.arg=i;while(1){var o=n.delegate;if(o){var c=P(o,n);if(c){if(c===v)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=h,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=p;var s=w(t,e,n);if("normal"===s.type){if(r=n.done?h:l,s.arg===v)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=h,n.method="throw",n.arg=s.arg)}}}function P(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,P(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var a=w(r,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,v;var i=a.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,v):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function C(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function z(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function M(t){if(t){var e=t[o];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){while(++r<t.length)if(a.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return i.next=i}}return{next:T}}function T(){return{value:n,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},"9ae4":function(t,e,n){"use strict";n.r(e);var r=n("5a3d"),a=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e["default"]=a.a},a1aa:function(t,e,n){"use strict";var r;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return r}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"container"},[n("v-uni-view",{staticClass:"nav",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.change.apply(void 0,arguments)}}},[n("v-uni-view",{class:"all"==t.selected?"checked":"",attrs:{"data-id":"all"}},[t._v("全部"),"all"==t.selected?n("v-uni-text",{staticClass:"active"}):t._e()],1),n("v-uni-view",{class:"me"==t.selected?"checked":"",attrs:{"data-id":"me"}},[t._v("自用"),"me"==t.selected?n("v-uni-text",{staticClass:"active"}):t._e()],1),n("v-uni-view",{class:"send"==t.selected?"checked":"",attrs:{"data-id":"send"}},[t._v("待赠送"),"send"==t.selected?n("v-uni-text",{staticClass:"active"}):t._e()],1)],1),n("v-uni-view",{staticStyle:{margin:"20rpx 40rpx","font-size":"14px",color:"#008000"}},[1==t.wordkind?n("v-uni-view",[t._v('以下"水+计划卡"包含了您自己购买的"水+计划卡"、朋友赠送您的"水+计划卡"、集团给您购买的"水+计划卡"及参加各项活动激活的"水+计划卡"')]):t._e(),2==t.wordkind?n("v-uni-view",[t._v('以下"水+计划卡"是您所有可以使用的"水+计划卡"，如果在您已经参加"水+计划"后，又再次激活，会给您在原来的有效期的基础上新增一张"水+计划卡"')]):t._e(),3==t.wordkind?n("v-uni-view",[t._v('以下"水+计划卡"是您购买后赠送朋友的，但是您的朋友还没有绑定并没有激活的"水+计划卡"')]):t._e()],1),t.show?n("v-uni-view",{staticClass:"no"},[n("v-uni-navigator",{attrs:{url:"/pages/detail/detail"}},[t._v("暂无凭证，"),n("v-uni-text",{staticStyle:{color:"#008000"}},[t._v("快去购买吧")])],1)],1):t._e(),t._l(t.cardData,(function(e){return n("v-uni-view",{staticClass:"card"},[n("v-uni-view",{staticClass:"top_right"},[10!=e.proof_state&&3!=e.proof_state&&1!=e.proof_state?n("v-uni-text",[t._v(t._s(e.proof_state_name))]):t._e(),10==e.proof_state?n("v-uni-text",[t._v("已到期")]):t._e(),3==e.proof_state?n("v-uni-text",[t._v("已激活")]):t._e(),1==e.proof_state?n("v-uni-text",[t._v("未激活")]):t._e()],1),n("v-uni-view",{staticClass:"card1"},[2==e.proffer_type&&1!=e.proof_state?n("v-uni-text",[t._v(t._s(e.proffer_name)+"赠送的水+计划卡")]):t._e(),3==e.proffer_type&&1!=e.proof_state?n("v-uni-text",[t._v(t._s(e.group_name))]):t._e(),1==e.proffer_type?n("v-uni-text",[t._v(t._s(e.user_name))]):t._e(),2==e.proffer_type&&1==e.proof_state?n("v-uni-text",[t._v("待分享给亲友"),n("v-uni-text",{staticStyle:{"margin-left":"5px"}},[t._v(t._s(e.user_name))])],1):t._e(),3==e.proffer_type&&1==e.proof_state?n("v-uni-text",[t._v(t._s(e.group_name))]):t._e()],1),n("v-uni-view",{staticClass:" card1 card2"},[""!=e.car_name?n("v-uni-text",[t._v("车牌号："+t._s(e.car_name))]):n("v-uni-text",["未绑定"==e.proof_state_name?n("v-uni-text",[t._v("未激活")]):n("v-uni-text",[t._v(t._s(e.proof_state_name))])],1)],1),n("v-uni-view",{staticClass:" card1 mid",staticStyle:{"margin-top":"-14rpx"}},[n("v-uni-view",{},[t._v("水+计划卡")]),n("v-uni-view",{},[2==e.proffer_type&&1==e.proof_state?n("v-uni-view",{staticClass:"btn",staticStyle:{"margin-bottom":"5px"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.goshare(e)}}},[t._v("赠送分享")]):t._e(),n("v-uni-view",{staticClass:"btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goshop.apply(void 0,arguments)}}},[t._v("一键导航")])],1)],1),n("v-uni-view",{staticClass:" card1 card2",staticStyle:{"font-size":"11px"}},[t._v("凭此卡可在有效期内到小李补胎任意门店添加瓶装玻璃水")]),n("v-uni-view",{staticClass:" card1 card2",staticStyle:{"font-size":"12px","text-align":"right"}},[""!=e.end_time?n("v-uni-text",[t._v("有效期："+t._s(e.end_time)+"前")]):n("v-uni-text",[t._v("自激活之日起一年内有效")])],1)],1)}))],2)},i=[]},c3b0:function(t,e,n){var r=n("89ea");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var a=n("4f06").default;a("f34e35ec",r,!0,{sourceMap:!1,shadowMode:!1})},f9dc:function(t,e,n){"use strict";var r=n("4ea4");n("c975"),n("ac1f"),n("841c"),n("1276"),Object.defineProperty(e,"__esModule",{value:!0}),e.http=void 0;var a=r(n("3835"));n("96cf");var i=r(n("1da1")),o=r(n("60de")),c=function(){var t=(0,i.default)(regeneratorRuntime.mark((function t(e){var n,r,i,o,c,p,h,v,g,_,y,x,m,w,b;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,s();case 2:if(n=t.sent,r=(0,a.default)(n,2),r[0],i=r[1],0!=i.data.data.auth_id){t.next=38;break}if(o=l().code,c=location.href,p=encodeURIComponent(c),""!=o&&null!=o){t.next=14;break}window.location.href="http://open.weixin.qq.com/connect/oauth2/authorize?appid=wxe711a119a78ccbd7&redirect_uri=".concat(p,"&response_type=code&scope=snsapi_userinfo#wechat_redirect"),t.next=38;break;case 14:return t.next=16,u();case 16:return h=t.sent,v=(0,a.default)(h,2),v[0],g=v[1],console.log(0,g.data.data.openid),g.data.data.openid,g.data.data.access_token,t.next=25,d();case 25:return _=t.sent,y=(0,a.default)(_,2),y[0],x=y[1],console.log(1,x),x.data.data.nike_name,t.next=33,f();case 33:m=t.sent,w=(0,a.default)(m,2),w[0],b=w[1],console.log(2,b);case 38:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();function s(){return(0,o.default)({url:"/api/Passport"})}function u(){return(0,o.default)({url:"/api/WxOAuth2AccessToken",data:{js_code:l().code}})}function d(){return(0,o.default)({url:"/api/WxUserInfo",data:{openid:openid,access_token:access_token}})}function f(){return(0,o.default)({url:"/api/Passport",data:{open_id:openid,nike_name:nike_name},header:{"Content-Type":"application/x-www-form-urlencoded"},method:"POST"})}function l(){var t=location.search,e=new Object;if(-1!=t.indexOf("?"))for(var n=t.substr(1),r=n.split("&"),a=0;a<r.length;a++)e[r[a].split("=")[0]]=r[a].split("=")[1];return e}e.http=c}}]);