(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-874136e4"],{"08cb":function(t,e,i){"use strict";var a=i("c0fe"),s=i.n(a);s.a},2143:function(t,e,i){},"8a3a":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"alet_container"},[i("section",{staticClass:"tip_text_container"},[t._m(0),i("p",{staticClass:"tip_text"},[t._v(t._s(t.alertText))]),i("div",{staticClass:"confrim",on:{click:t.closeTip}},[t._v("确认")])])])},s=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"tip_icon"},[i("span"),i("span")])}],n={data:function(){return{positionY:0,timer:null}},mounted:function(){},props:["alertText"],methods:{closeTip:function(){this.$emit("closeTip")}}},r=n,o=(i("08cb"),i("2877")),c=Object(o["a"])(r,a,s,!1,null,"54c2a897",null);c.options.__file="alertTip.vue";e["a"]=c.exports},9872:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"rating_page"},[i("head-top",{attrs:{"head-title":"账户信息","go-back":"true"}}),i("section",{staticClass:"profile-info"},[i("section",{staticClass:"headportrait"},[i("input",{staticClass:"profileinfopanel-upload",attrs:{type:"file"},on:{change:t.uploadAvatar}}),i("h2",[t._v("头像")]),i("div",{staticClass:"headportrait-div"},[t.userInfo?i("img",{staticClass:"headportrait-div-top",attrs:{src:t.imgBaseUrl+t.userInfo.avatar}}):i("span",{staticClass:"headportrait-div-top"},[i("svg",[i("use",{attrs:{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#avatar-default"}})])]),i("span",{staticClass:"headportrait-div-bottom"},[i("svg",{attrs:{fill:"#d8d8d8"}},[i("use",{attrs:{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#arrow-right"}})])])])]),i("router-link",{staticClass:"info-router",attrs:{to:"/profile/info/setusername"}},[i("section",{staticClass:"headportrait headportraitwo"},[i("h2",[t._v("用户名")]),i("div",{staticClass:"headportrait-div"},[i("p",[t._v(t._s(t.username))]),i("span",{staticClass:"headportrait-div-bottom"},[i("svg",{attrs:{fill:"#d8d8d8"}},[i("use",{attrs:{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#arrow-right"}})])])])])]),i("router-link",{staticClass:"info-router",attrs:{to:"/profile/info/address"}},[i("section",{staticClass:"headportrait headportraitwo headportraithree"},[i("h2",[t._v("收货地址")]),i("div",{staticClass:"headportrait-div"},[i("span",{staticClass:"headportrait-div-bottom"},[i("svg",{attrs:{fill:"#d8d8d8"}},[i("use",{attrs:{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#arrow-right"}})])])])])]),i("section",{staticClass:"bind-phone"},[t._v("\n            账号绑定\n        ")]),i("section",{staticClass:"info-router",on:{click:t.changePhone}},[i("section",{staticClass:"headportrait headportraitwo headportraithree"},[t._m(0),i("div",{staticClass:"headportrait-div"},[i("p",[t._v(t._s(t.infotel))]),i("span",{staticClass:"headportrait-div-bottom"},[i("svg",{attrs:{fill:"#d8d8d8"}},[i("use",{attrs:{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#arrow-right"}})])])])])]),i("section",{staticClass:"bind-phone"},[t._v("\n            安全设置\n        ")]),i("router-link",{staticClass:"info-router",attrs:{to:"/forget"}},[i("section",{staticClass:"headportrait headportraitwo headportraithree"},[i("h2",[t._v("登录密码")]),i("div",{staticClass:"headportrait-div"},[i("p",[t._v("修改")]),i("span",{staticClass:"headportrait-div-bottom"},[i("svg",{attrs:{fill:"#d8d8d8"}},[i("use",{attrs:{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#arrow-right"}})])])])])]),i("section",{staticClass:"exitlogin",on:{click:t.exitlogin}},[t._v("退出登录")])],1),t.show?i("section",{staticClass:"coverpart"},[i("section",{staticClass:"cover-background"}),i("section",{staticClass:"cover-content ",class:{"cover-animate":t.isEnter,"cover-animate-leave":t.isLeave}},[t._m(1),i("h2",[t._v("是否退出登录")]),i("div",{staticClass:"sa-botton"},[i("button",{staticClass:"waiting",on:{click:t.waitingThing}},[t._v("再等等")]),i("div",{staticStyle:{display:"inline-block"}},[i("button",{staticClass:"quitlogin",on:{click:t.outLogin}},[t._v("退出登录")])])])])]):t._e(),t.showAlert?i("alert-tip",{attrs:{alertText:t.alertText},on:{closeTip:function(e){t.showAlert=!1}}}):t._e(),i("transition",{attrs:{name:"router-slid",mode:"out-in"}},[i("router-view")],1)],1)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h2",[a("img",{staticStyle:{display:"inline-block","margin-right":".4rem"},attrs:{src:i("c5d1"),alt:""}}),t._v("手机")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"sa-icon"},[i("span",{staticClass:"sa-body"}),i("span",{staticClass:"sa-dot"})])}],n=(i("96cf"),i("1da1")),r=i("be94"),o=i("2f62"),c=i("c440"),l=i("1273"),u=i("8a3a"),d=i("f300"),h=i("51be"),p=i("3f55"),f={data:function(){return{username:"",resetname:"",infotel:"",avatar:"",show:!1,isEnter:!0,isLeave:!1,showAlert:!1,alertText:null,imgBaseUrl:h["b"]}},beforeDestroy:function(){clearTimeout(this.timer)},components:{headTop:c["a"],alertTip:u["a"]},mixins:[d["a"]],computed:Object(r["a"])({},Object(o["d"])(["userInfo","imgPath"])),methods:Object(r["a"])({},Object(o["c"])(["OUT_LOGIN","SAVE_AVANDER"]),{exitlogin:function(){this.show=!0,this.isEnter=!0,this.isLeave=!1},waitingThing:function(){var t=this;clearTimeout(this.timer),this.isEnter=!1,this.isLeave=!0,this.timer=setTimeout(function(){clearTimeout(t.timer),t.show=!1},200)},outLogin:function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.OUT_LOGIN(),this.waitingThing(),this.$router.go(-1),Object(p["d"])("user_id"),t.next=6,Object(l["N"])();case 6:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),changePhone:function(){this.showAlert=!0,this.alertText="请在手机APP中设置"},uploadAvatar:function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(){var e,i,a,s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!this.userInfo){t.next=19;break}return e=document.querySelector(".profileinfopanel-upload"),i=new FormData,i.append("file",e.files[0]),t.prev=4,t.next=7,fetch("/eus/v1/users/"+this.userInfo.user_id+"/avatar",{method:"POST",credentials:"include",body:i});case 7:return a=t.sent,t.next=10,a.json();case 10:s=t.sent,1==s.status&&(this.userInfo.avatar=s.image_path),t.next=19;break;case 14:throw t.prev=14,t.t0=t["catch"](4),this.showAlert=!0,this.alertText="上传失败",new Error(t.t0);case 19:case"end":return t.stop()}},t,this,[[4,14]])}));return function(){return t.apply(this,arguments)}}()}),watch:{userInfo:function(t){t&&t.user_id&&(this.username=t.username,this.infotel=t.mobile,this.avatar=t.avatar)}}},v=f,A=(i("acd2"),i("2877")),g=Object(A["a"])(v,a,s,!1,null,"6d22633b",null);g.options.__file="info.vue";e["default"]=g.exports},acd2:function(t,e,i){"use strict";var a=i("dd1a"),s=i.n(a);s.a},c0fe:function(t,e,i){},c440:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("header",{attrs:{id:"head_top"}},[t._t("logo"),t._t("search"),t.goBack?i("section",{staticClass:"head_goback",on:{click:function(e){t.$router.go(-1)}}},[i("svg",{staticClass:"svgBack",attrs:{width:"100%",height:"100%",xmlns:"http://www.w3.org/2000/svg",version:"1.1"}},[i("polyline",{staticStyle:{fill:"none",stroke:"rgb(255,255,255)","stroke-width":"2"},attrs:{points:"12,18 4,9 12,0"}})])]):t._e(),t.signinUp?i("router-link",{staticClass:"head_login",attrs:{to:t.userInfo?"/profile":"/login"}},[t.userInfo?i("svg",{staticClass:"user_avatar"},[i("use",{attrs:{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#user"}})]):i("span",{staticClass:"login_span"},[t._v("登录|注册")])]):t._e(),t.headTitle?i("section",{staticClass:"title_head ellipsis"},[i("span",{staticClass:"title_text"},[t._v(t._s(t.headTitle))])]):t._e(),t._t("edit"),t._t("msite-title"),t._t("changecity"),t._t("changeLogin")],2)},s=[],n=i("be94"),r=i("2f62"),o={data:function(){return{}},mounted:function(){this.getUserInfo()},props:["signinUp","headTitle","goBack"],computed:Object(n["a"])({},Object(r["d"])(["userInfo"])),methods:Object(n["a"])({},Object(r["b"])(["getUserInfo"]))},c=o,l=(i("db2f"),i("2877")),u=Object(l["a"])(c,a,s,!1,null,"247ba04c",null);u.options.__file="head.vue";e["a"]=u.exports},c5d1:function(t,e){t.exports="data:image/png;base64,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"},db2f:function(t,e,i){"use strict";var a=i("2143"),s=i.n(a);s.a},dd1a:function(t,e,i){},f300:function(t,e,i){"use strict";i.d(e,"b",function(){return s}),i.d(e,"a",function(){return n});var a=i("3f55"),s=(i("51be"),{directives:{"load-more":{bind:function(t,e){var i,s,n,r,o,c,l,u,d=window.screen.height,h=t.attributes.type&&t.attributes.type.value,p=2;2==h?(l=t,u=t.children[0]):(l=document.body,u=t),t.addEventListener("touchstart",function(){i=u.clientHeight,2==h&&(i=i),s=t.offsetTop,n=Object(a["c"])(t,"paddingBottom"),r=Object(a["c"])(t,"marginBottom")},!1),t.addEventListener("touchmove",function(){v()},!1),t.addEventListener("touchend",function(){c=l.scrollTop,f()},!1);var f=function t(){o=requestAnimationFrame(function(){l.scrollTop!=c?(c=l.scrollTop,t()):(cancelAnimationFrame(o),i=u.clientHeight,v())})},v=function(){l.scrollTop+d>=i+s+n+r-p&&e.value()}}}}}),n={methods:{getImgPath:function(t){var e;if(!t)return"//elm.cangdu.org/img/default.jpg";e=-1!==t.indexOf("jpeg")?".jpeg":".png";var i="/"+t.substr(0,1)+"/"+t.substr(1,2)+"/"+t.substr(3)+e;return"https://fuss10.elemecdn.com"+i}}}}}]);