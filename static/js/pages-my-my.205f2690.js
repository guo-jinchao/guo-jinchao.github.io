(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-my-my"],{"13ca":function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.pageshow?a("v-uni-view",{staticClass:"container"},[a("v-uni-view",{staticClass:"nav",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.change.apply(void 0,arguments)}}},[a("v-uni-view",{class:"all"==t.selected?"checked":"",attrs:{"data-id":"all"}},[t._v("全部"),"all"==t.selected?a("v-uni-text",{staticClass:"active"}):t._e()],1),a("v-uni-view",{class:"me"==t.selected?"checked":"",attrs:{"data-id":"me"}},[t._v("自用"),"me"==t.selected?a("v-uni-text",{staticClass:"active"}):t._e()],1),a("v-uni-view",{class:"send"==t.selected?"checked":"",attrs:{"data-id":"send"}},[t._v("待赠送"),"send"==t.selected?a("v-uni-text",{staticClass:"active"}):t._e()],1)],1),a("v-uni-view",{staticStyle:{margin:"20rpx 40rpx","font-size":"14px",color:"#008000"}},[1==t.wordkind?a("v-uni-view",[t._v('以下"水+计划卡"包含了您自己购买的"水+计划卡"、朋友赠送您的"水+计划卡"、集团给您购买的"水+计划卡"及参加各项活动激活的"水+计划卡"')]):t._e(),2==t.wordkind?a("v-uni-view",[t._v('以下"水+计划卡"是您所有可以使用的"水+计划卡"，如果在您已经参加"水+计划"后，又再次激活，会给您在原来的有效期的基础上新增一张"水+计划卡"')]):t._e(),3==t.wordkind?a("v-uni-view",[t._v('以下"水+计划卡"是您购买后赠送朋友的，但是您的朋友还没有绑定并没有激活的"水+计划卡"')]):t._e()],1),t.show?a("v-uni-view",{staticClass:"no"},[a("v-uni-navigator",{attrs:{url:"/pages/detail/detail"}},[t._v("暂无凭证，"),a("v-uni-text",{staticStyle:{color:"#008000"}},[t._v("快去购买吧")])],1)],1):t._e(),t._l(t.cardData,(function(e){return a("v-uni-view",{staticClass:"card"},[a("v-uni-view",{staticClass:"top_right"},[10!=e.proof_state&&3!=e.proof_state&&1!=e.proof_state?a("v-uni-text",[t._v(t._s(e.proof_state_name))]):t._e(),10==e.proof_state?a("v-uni-text",[t._v("已到期")]):t._e(),3==e.proof_state?a("v-uni-text",[t._v("已激活")]):t._e(),1==e.proof_state?a("v-uni-text",[t._v("未激活")]):t._e()],1),a("v-uni-view",{staticClass:"card1"},[2==e.proffer_type&&1!=e.proof_state?a("v-uni-text",[t._v(t._s(e.proffer_name)+"赠送的水+计划卡")]):t._e(),3==e.proffer_type&&1!=e.proof_state?a("v-uni-text",[t._v(t._s(e.group_name))]):t._e(),1==e.proffer_type?a("v-uni-text",[t._v(t._s(e.user_name))]):t._e(),2==e.proffer_type&&1==e.proof_state?a("v-uni-text",[t._v("待分享给亲友"),a("v-uni-text",{staticStyle:{"margin-left":"5px"}},[t._v(t._s(e.user_name))])],1):t._e(),3==e.proffer_type&&1==e.proof_state?a("v-uni-text",[t._v(t._s(e.group_name))]):t._e()],1),a("v-uni-view",{staticClass:" card1 card2"},[""!=e.car_name?a("v-uni-text",[t._v("车牌号："+t._s(e.car_name))]):a("v-uni-text",["未绑定"==e.proof_state_name?a("v-uni-text",[t._v("未激活")]):a("v-uni-text",[t._v(t._s(e.proof_state_name))])],1)],1),a("v-uni-view",{staticClass:" card1 mid",staticStyle:{"margin-top":"-14rpx"}},[a("v-uni-view",{},[t._v("水+计划卡")]),a("v-uni-view",{},[2==e.proffer_type&&1==e.proof_state?a("v-uni-view",{staticClass:"btn",staticStyle:{"margin-bottom":"5px"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.goshare(e)}}},[t._v("赠送分享")]):t._e(),a("v-uni-view",{staticClass:"btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goshop.apply(void 0,arguments)}}},[t._v("一键导航")])],1)],1),a("v-uni-view",{staticClass:" card1 card2",staticStyle:{"font-size":"11px"}},[t._v("凭此卡可在有效期内到小李补胎任意门店添加瓶装玻璃水")]),a("v-uni-view",{staticClass:" card1 card2",staticStyle:{"font-size":"12px","text-align":"right"}},[""!=e.end_time?a("v-uni-text",[t._v("有效期："+t._s(e.end_time)+"前")]):a("v-uni-text",[t._v("自激活之日起一年内有效")])],1)],1)}))],2):t._e()},r=[]},"1de5":function(t,e,a){"use strict";t.exports=function(t,e){return e||(e={}),t=t&&t.__esModule?t.default:t,"string"!==typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},"21ca":function(t,e,a){var n=a("24fb"),i=a("1de5"),r=a("893b");e=n(!1);var o=i(r);e.push([t.i,".card[data-v-ed214eda]{margin:%?30?% %?40?%;\n\t/* background: linear-gradient(45deg, #01783a, #008000); */background-image:url("+o+");background-size:cover;padding:%?24?%;border-radius:%?30?%;height:%?300?%;display:flex;flex-direction:column;justify-content:space-between;box-shadow:5px 5px 5px #888;position:relative}.card1[data-v-ed214eda]{color:#fff;font-size:14px}.card2[data-v-ed214eda]{margin-left:%?65?%}.mid[data-v-ed214eda]{justify-content:flex-end;font-size:24px;display:flex;align-items:center}.btn[data-v-ed214eda]{font-size:12px;margin-left:45px;border:1px solid #fff;padding:%?5?% %?15?%;border-radius:%?30?%}\n\n/* \t.proof {\n\tmargin: 30rpx;\n\tbackground: url('../../static/back.png') no-repeat center;\n\tbackground-size: cover;\n\tpadding: 20rpx;\n\tborder-radius: 10rpx;\n\theight: 300rpx;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n\tposition: relative;\n}\n\n.row1 {\n\tfont-size: 40rpx;\n\twidth: 90%;\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: flex-end;\n}\n\n.row3 {\n\tfont-size: 12px;\n}\n\n.row3>view {\n\tline-height: 18px;\n}\n\n.row4 {\n\twidth: 70px;\n\ttext-align: center;\n\tborder: 1px solid #666;\n\tpadding: 5rpx 25rpx;\n\tborder-radius: 50rpx;\n} */.nav[data-v-ed214eda]{display:flex;justify-content:space-around;padding:%?20?% %?20?% 0 %?20?%}.active[data-v-ed214eda]{width:%?30?%;height:%?6?%;margin-top:%?8?%;background-color:green;display:inline-block}.nav uni-view[data-v-ed214eda]{display:flex;flex-direction:column;align-items:center}.checked[data-v-ed214eda]{color:green}\n\n/* \t.leixing {\n\tposition: absolute;\n\tfont-size: 24rpx;\n\ttop: 20rpx;\n\tright: 20rpx;\n\ttransform: rotate(45deg);\n}\n\n.water {\n\tposition: absolute;\n\tright: 116rpx;\n\ttop: 42%;\n\ttransform: translateY(-50%);\n\ttext-align: center;\n\tfont-size: 18px;\n} */.no[data-v-ed214eda]{text-align:center;margin-top:50px;font-size:22px}.header[data-v-ed214eda]{padding:0 %?30?%;background:#666;color:#fff;line-height:40px;font-size:20px;opacity:.8;text-align:center;position:relative;display:flex;align-items:center;justify-content:flex-end}.top_right[data-v-ed214eda]{position:absolute;font-size:12px;top:%?30?%;right:%?15?%;-webkit-transform:rotate(45deg);transform:rotate(45deg);color:#fff}",""]),t.exports=e},"35a3":function(t,e,a){"use strict";var n=a("6408"),i=a.n(n);i.a},"5a3d":function(t,e,a){"use strict";var n=a("4ea4");a("99af"),a("4160"),a("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("96cf");var i=n(a("1da1")),r=n(a("60de")),o=a("a421"),s=a("f9dc"),d={data:function(){return{pageshow:!1,wordkind:1,show:!1,arr:[],selected:"all",type:0,cardData:[],page_index:1,content:[{text:"水+卡",iconPath:"/static/card1.png",selectedIconPath:"/static/card.png",active:!0},{text:"订单",iconPath:"/static/order1.png",selectedIconPath:"/static/order.png",active:!1}]}},components:{},onLoad:function(t){var e=this;return(0,i.default)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return uni.showLoading({title:"加载中"}),e.link="http://shuijia.m.xiaolibutai.com/?#/pages/my/my",(0,o.share)(e.link),t.next=5,(0,s.http)();case 5:e.getCard();case 6:case"end":return t.stop()}}),t)})))()},onReachBottom:function(){this.page_index++,this.getCard()},methods:{goorder:function(){uni.navigateTo({url:"../orderlist/orderlist"})},open1:function(t){1==t.index&&uni.navigateTo({url:"../orderlist/orderlist"})},goshop:function(){uni.navigateTo({url:"../shopList/shopList"})},goshare:function(t){uni.navigateTo({url:"../share/share?code_="+t.proof_code+"&name="+t.proffer_name+"&ctime="+t.create_time+"&etime="+t.end_time+"&state="+t.proof_state_name+"&car="+t.car_name})},change:function(t){"{}"!=JSON.stringify(t.target.dataset)&&(this.selected=t.target.dataset.id),"all"==t.target.dataset.id&&(this.type=0,this.bind=0,this.wordkind=1),"me"==t.target.dataset.id&&(this.type=0,this.bind=2,this.wordkind=2),"send"==t.target.dataset.id&&(this.type=2,this.bind=1,this.wordkind=3),"firm"==t.target.dataset.id&&(this.type=3,this.bind=2),this.arr=[],this.cardData=[],this.page_index=1,this.getCard()},getCard:function(){var t=this;(0,r.default)({url:"/api/UserWaterProofList",data:{page_index:this.page_index,page_size:"10",proof_type:this.type,proof_state:0,isbind:this.bind},success:function(e){t.pageshow=!0,uni.hideLoading(),t.cardData=t.cardData.concat(e.data.data),0==t.cardData.length?t.show=!0:t.show=!1,t.cardData.forEach((function(e,a){2==e.proof_state&&(0,r.default)({url:"/api/UserCardAutoOpen",method:"post",success:function(n){(0,r.default)({url:"/api/UserWaterProofList",data:{page_index:t.page_index,page_size:"10",proof_type:t.type,proof_state:0,isbind:t.bind},success:function(n){n.data.data.forEach((function(n,i){n.authid==e.authid&&(t.cardData[a]=n,t.$forceUpdate())}))}})}})}))}})}}};e.default=d},6408:function(t,e,a){var n=a("21ca");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("7855d53f",n,!0,{sourceMap:!1,shadowMode:!1})},"6b9f":function(t,e,a){"use strict";a.r(e);var n=a("13ca"),i=a("9ae4");for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);a("35a3");var o,s=a("f0c5"),d=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"ed214eda",null,!1,n["a"],o);e["default"]=d.exports},"893b":function(t,e,a){t.exports=a.p+"static/img/ping.093111e4.png"},"9ae4":function(t,e,a){"use strict";a.r(e);var n=a("5a3d"),i=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a}}]);