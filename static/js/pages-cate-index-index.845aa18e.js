(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-cate-index-index"],{"02d3":function(t,e,i){"use strict";i.r(e);var a=i("2f84"),o=i("773a");for(var n in o)"default"!==n&&function(t){i.d(e,t,(function(){return o[t]}))}(n);i("734d");var c,r=i("f0c5"),u=Object(r["a"])(o["default"],a["b"],a["c"],!1,null,"3503d76b",null,!1,a["a"],c);e["default"]=u.exports},"215b":function(t,e,i){"use strict";var a=i("4ea4");i("4160"),i("ac1f"),i("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("96cf");var o=a(i("1da1")),n=a(i("b7b7")),c={data:function(){return{cateList:[],name:"wkiwi",height:0,categoryActive:0,scrollTop:0,scrollLeftTop:0,classifyData:n.default,arr:[0,584,1168,1752,2336,2805,3274,3858,4442,4911,5380,5734,6203,6672,7017],leftItemHeight:51,navLeftHeight:0,diff:0,tabBarHeight:0}},onLoad:function(){this.getCateList(),this.height=uni.getSystemInfoSync().windowHeight-this.tabBarHeight},onReady:function(){this.getHeightList()},methods:{getHeightList:function(){var t=this,e=uni.createSelectorQuery();e.selectAll(".nav-left-item").boundingClientRect((function(e){t.leftItemHeight=e[0].height,t.navLeftHeight=t.leftItemHeight*n.default.length,t.diff=t.navLeftHeight-t.height})),e.selectAll(".box").boundingClientRect((function(e){var i=[0],a=0;e.forEach((function(t){a+=t.height,i.push(a)})),console.log(i),t.arr=i})).exec()},scroll:function(t){var e=this;this.timeoutId&&clearTimeout(this.timeoutId),this.timeoutId=setTimeout((function(){e.scrollHeight=t.detail.scrollTop;for(var i=0;i<e.arr.length;i++){var a=e.arr[i],o=e.arr[i+1];if(!o||e.scrollHeight>=a&&e.scrollHeight<o)return e.categoryActive=i,e.diff>0&&(e.scrollLeftTop=Math.round(e.categoryActive*e.diff/(n.default.length-1))),!1}e.categoryActive=0,e.timeoutId=void 0}),10)},categoryClickMain:function(t){this.categoryActive=t,this.scrollTop==this.arr[t]?this.scrollTop=this.scrollTop+1:this.scrollTop=this.arr[t]},cart:function(t){uni.navigateTo({url:"../../home/detail/detail"})},getCateList:function(){var t=this;return(0,o.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$request({url:"/api/PCategoryList",data:{product_type:1}});case 2:t.cateList=e.sent,console.log(t.cateList);case 4:case"end":return e.stop()}}),e)})))()}},components:{}};e.default=c},"2f84":function(t,e,i){"use strict";i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return a}));var a={uniSearchBar:i("0fea").default},o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{},[i("v-uni-navigator",{attrs:{url:"../../home/search/search"}},[i("uni-search-bar",{attrs:{bgColor:"#EDEDED",cancelButton:"none",radius:100,placeholder:"搜索关键词"},on:{confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.search.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"page-body",style:"height:"+(t.height-56)+"px"},[i("v-uni-scroll-view",{staticClass:"nav-left",style:"height:"+t.height+"px",attrs:{"scroll-y":!0,"scroll-top":t.scrollLeftTop,"scroll-with-animation":!0}},t._l(t.cateList,(function(e,a){return i("v-uni-view",{key:a,staticClass:"nav-left-item",class:a==t.categoryActive?"active theme":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.categoryClickMain(a)}}},[a==t.categoryActive?i("v-uni-text",{staticStyle:{width:"3px","background-color":"#007C36",height:"15px","margin-right":"10rpx","border-radius":"50rpx"}}):t._e(),a!=t.categoryActive?i("v-uni-text",{staticStyle:{width:"3px","background-color":"#007C36",height:"15px","margin-right":"10rpx","border-radius":"50rpx",opacity:"0"}}):t._e(),i("v-uni-text",[t._v(t._s(e.name))])],1)})),1),i("v-uni-scroll-view",{staticClass:"nav-right",style:"height:"+t.height+"px",attrs:{"scroll-y":!0,"scroll-top":t.scrollTop,"scroll-with-animation":!0},on:{scroll:function(e){arguments[0]=e=t.$handleEvent(e),t.scroll.apply(void 0,arguments)}}},t._l(t.cateList,(function(e,a){return i("v-uni-view",{key:a,staticClass:"box"},t._l(e.childrens,(function(e,a){return i("v-uni-view",{key:a,staticClass:"nav-right-item",attrs:{id:0==a?"first":""},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.cart(e.name)}}},[i("v-uni-image",{attrs:{src:"http://image.xiaolibutai.com/"+e.mainimage,mode:"aspectFill"}}),i("v-uni-view",[t._v(t._s(e.name))])],1)})),1)})),1)],1)],1)},n=[]},4128:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".page-body[data-v-3503d76b]{display:flex;background:#fff;overflow:hidden}.nav[data-v-3503d76b]{display:flex;width:100%}.nav-left[data-v-3503d76b]{width:25%;background:#fafafa}.nav-left-item[data-v-3503d76b]{height:%?100?%;border-right:solid 1px #f1f1f1;border-bottom:solid 1px #f1f1f1;font-size:%?30?%;display:flex;align-items:center;justify-content:center}.nav-left-item[data-v-3503d76b]:last-child{border-bottom:none}.nav-right[data-v-3503d76b]{width:75%}.box[data-v-3503d76b]{display:block;overflow:hidden;border-bottom:%?20?% solid #f3f3f3\n\t/* min-height: 100vh; */\n\t/*若您的子分类过少想使得每个子分类占满屏请放开上边注视 */}.box[data-v-3503d76b]:last-child{border:none;min-height:100vh}.nav-right-item[data-v-3503d76b]{width:28%;height:%?220?%;float:left;text-align:center;padding:%?11?%;font-size:%?28?%;background:#fff}.nav-right-item uni-image[data-v-3503d76b]{width:%?150?%;height:%?150?%}.active[data-v-3503d76b]{background:#fff;border-right:0}[data-v-3503d76b]::-webkit-scrollbar{\n\t/*取消小程序的默认导航条样式*/width:0;height:0;color:transparent}",""]),t.exports=e},"734d":function(t,e,i){"use strict";var a=i("e018"),o=i.n(a);o.a},"773a":function(t,e,i){"use strict";i.r(e);var a=i("215b"),o=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,(function(){return a[t]}))}(n);e["default"]=o.a},b7b7:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=[{name:"常见配件区",foods:[{name:"壳牌机油",key:"壳牌机油",icon:"https://img2.baidu.com/it/u=1301644399,2289618121&fm=224&fmt=auto&gp=0.jpg",cat:10},{name:"壳牌机油",key:"壳牌机油",icon:"https://img2.baidu.com/it/u=1301644399,2289618121&fm=224&fmt=auto&gp=0.jpg",cat:10},{name:"壳牌机油",key:"壳牌机油",icon:"https://img2.baidu.com/it/u=1301644399,2289618121&fm=224&fmt=auto&gp=0.jpg",cat:10},{name:"壳牌机油",key:"壳牌机油",icon:"https://img2.baidu.com/it/u=1301644399,2289618121&fm=224&fmt=auto&gp=0.jpg",cat:10}]},{name:"轮胎品牌区",foods:[{name:"壳牌机油",key:"壳牌机油",icon:"https://img2.baidu.com/it/u=1301644399,2289618121&fm=224&fmt=auto&gp=0.jpg",cat:9},{name:"壳牌机油",key:"壳牌机油",icon:"https://img2.baidu.com/it/u=1301644399,2289618121&fm=224&fmt=auto&gp=0.jpg",cat:9},{name:"壳牌机油",key:"壳牌机油",icon:"https://img2.baidu.com/it/u=1301644399,2289618121&fm=224&fmt=auto&gp=0.jpg",cat:9},{name:"壳牌机油",key:"壳牌机油",icon:"https://img2.baidu.com/it/u=1301644399,2289618121&fm=224&fmt=auto&gp=0.jpg",cat:9}]},{name:"车品电瓶区",foods:[{name:"壳牌机油",key:"壳牌机油",icon:"https://img2.baidu.com/it/u=1301644399,2289618121&fm=224&fmt=auto&gp=0.jpg",cat:8},{name:"壳牌机油",key:"壳牌机油",icon:"https://img2.baidu.com/it/u=1301644399,2289618121&fm=224&fmt=auto&gp=0.jpg",cat:8},{name:"壳牌机油",key:"壳牌机油",icon:"https://img2.baidu.com/it/u=1301644399,2289618121&fm=224&fmt=auto&gp=0.jpg",cat:8},{name:"壳牌机油",key:"壳牌机油",icon:"https://img2.baidu.com/it/u=1301644399,2289618121&fm=224&fmt=auto&gp=0.jpg",cat:8}]},{name:"常规保养区",foods:[{name:"壳牌机油",key:"壳牌机油",icon:"https://img2.baidu.com/it/u=1301644399,2289618121&fm=224&fmt=auto&gp=0.jpg",cat:7},{name:"壳牌机油",key:"壳牌机油",icon:"https://img2.baidu.com/it/u=1301644399,2289618121&fm=224&fmt=auto&gp=0.jpg",cat:7},{name:"壳牌机油",key:"壳牌机油",icon:"https://img2.baidu.com/it/u=1301644399,2289618121&fm=224&fmt=auto&gp=0.jpg",cat:7},{name:"壳牌机油",key:"壳牌机油",icon:"https://img2.baidu.com/it/u=1301644399,2289618121&fm=224&fmt=auto&gp=0.jpg",cat:7}]},{name:"保养服务区",foods:[{name:"壳牌机油",key:"壳牌机油",icon:"https://img2.baidu.com/it/u=1301644399,2289618121&fm=224&fmt=auto&gp=0.jpg",cat:6},{name:"壳牌机油",key:"壳牌机油",icon:"https://img2.baidu.com/it/u=1301644399,2289618121&fm=224&fmt=auto&gp=0.jpg",cat:6},{name:"壳牌机油",key:"壳牌机油",icon:"https://img2.baidu.com/it/u=1301644399,2289618121&fm=224&fmt=auto&gp=0.jpg",cat:6},{name:"壳牌机油",key:"壳牌机油",icon:"https://img2.baidu.com/it/u=1301644399,2289618121&fm=224&fmt=auto&gp=0.jpg",cat:6}]}];e.default=a},e018:function(t,e,i){var a=i("4128");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=i("4f06").default;o("02025122",a,!0,{sourceMap:!1,shadowMode:!1})}}]);