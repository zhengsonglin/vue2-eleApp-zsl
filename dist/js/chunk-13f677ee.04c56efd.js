(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-13f677ee"],{"08cb":function(e,t,s){"use strict";var n=s("c0fe"),a=s.n(n);a.a},2143:function(e,t,s){},"8a3a":function(e,t,s){"use strict";var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"alet_container"},[s("section",{staticClass:"tip_text_container"},[e._m(0),s("p",{staticClass:"tip_text"},[e._v(e._s(e.alertText))]),s("div",{staticClass:"confrim",on:{click:e.closeTip}},[e._v("确认")])])])},a=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"tip_icon"},[s("span"),s("span")])}],i={data:function(){return{positionY:0,timer:null}},mounted:function(){},props:["alertText"],methods:{closeTip:function(){this.$emit("closeTip")}}},r=i,o=(s("08cb"),s("2877")),c=Object(o["a"])(r,n,a,!1,null,"54c2a897",null);c.options.__file="alertTip.vue";t["a"]=c.exports},bccc:function(e,t,s){},c0fe:function(e,t,s){},c440:function(e,t,s){"use strict";var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("header",{attrs:{id:"head_top"}},[e._t("logo"),e._t("search"),e.goBack?s("section",{staticClass:"head_goback",on:{click:function(t){e.$router.go(-1)}}},[s("svg",{staticClass:"svgBack",attrs:{width:"100%",height:"100%",xmlns:"http://www.w3.org/2000/svg",version:"1.1"}},[s("polyline",{staticStyle:{fill:"none",stroke:"rgb(255,255,255)","stroke-width":"2"},attrs:{points:"12,18 4,9 12,0"}})])]):e._e(),e.signinUp?s("router-link",{staticClass:"head_login",attrs:{to:e.userInfo?"/profile":"/login"}},[e.userInfo?s("svg",{staticClass:"user_avatar"},[s("use",{attrs:{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#user"}})]):s("span",{staticClass:"login_span"},[e._v("登录|注册")])]):e._e(),e.headTitle?s("section",{staticClass:"title_head ellipsis"},[s("span",{staticClass:"title_text"},[e._v(e._s(e.headTitle))])]):e._e(),e._t("edit"),e._t("msite-title"),e._t("changecity"),e._t("changeLogin")],2)},a=[],i=s("be94"),r=s("2f62"),o={data:function(){return{}},mounted:function(){this.getUserInfo()},props:["signinUp","headTitle","goBack"],computed:Object(i["a"])({},Object(r["d"])(["userInfo"])),methods:Object(i["a"])({},Object(r["b"])(["getUserInfo"]))},c=o,u=(s("db2f"),s("2877")),l=Object(u["a"])(c,n,a,!1,null,"247ba04c",null);l.options.__file="head.vue";t["a"]=l.exports},cb10:function(e,t,s){"use strict";var n=s("bccc"),a=s.n(n);a.a},db2f:function(e,t,s){"use strict";var n=s("2143"),a=s.n(n);a.a},dc3f:function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"loginContainer"},[s("head-top",{attrs:{"head-title":e.loginWay?"登录":"密码登录",goBack:"true"}}),e.loginWay?s("form",{staticClass:"loginForm"},[s("section",{staticClass:"input_container phone_number"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.phoneNumber,expression:"phoneNumber"}],attrs:{type:"text",placeholder:"账号密码随便输入",name:"phone",maxlength:"11"},domProps:{value:e.phoneNumber},on:{input:function(t){t.target.composing||(e.phoneNumber=t.target.value)}}}),s("button",{directives:[{name:"show",rawName:"v-show",value:!e.computedTime,expression:"!computedTime"}],class:{right_phone_number:e.rightPhoneNumber},on:{click:function(t){return t.preventDefault(),e.getVerifyCode(t)}}},[e._v("获取验证码")]),s("button",{directives:[{name:"show",rawName:"v-show",value:e.computedTime,expression:"computedTime"}],on:{click:function(e){e.preventDefault()}}},[e._v("已发送("+e._s(e.computedTime)+"s)")])]),s("section",{staticClass:"input_container"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.mobileCode,expression:"mobileCode"}],attrs:{type:"text",placeholder:"验证码",name:"mobileCode",maxlength:"6"},domProps:{value:e.mobileCode},on:{input:function(t){t.target.composing||(e.mobileCode=t.target.value)}}})])]):s("form",{staticClass:"loginForm"},[s("section",{staticClass:"input_container"},[s("input",{directives:[{name:"model",rawName:"v-model.lazy",value:e.userAccount,expression:"userAccount",modifiers:{lazy:!0}}],attrs:{type:"text",placeholder:"账号"},domProps:{value:e.userAccount},on:{change:function(t){e.userAccount=t.target.value}}})]),s("section",{staticClass:"input_container"},[e.showPassword?s("input",{directives:[{name:"model",rawName:"v-model",value:e.passWord,expression:"passWord"}],attrs:{type:"text",placeholder:"密码"},domProps:{value:e.passWord},on:{input:function(t){t.target.composing||(e.passWord=t.target.value)}}}):s("input",{directives:[{name:"model",rawName:"v-model",value:e.passWord,expression:"passWord"}],attrs:{type:"password",placeholder:"密码"},domProps:{value:e.passWord},on:{input:function(t){t.target.composing||(e.passWord=t.target.value)}}}),s("div",{staticClass:"button_switch",class:{change_to_text:e.showPassword}},[s("div",{staticClass:"circle_button",class:{trans_to_right:e.showPassword},on:{click:e.changePassWordType}}),s("span",[e._v("abc")]),s("span",[e._v("...")])])]),s("section",{staticClass:"input_container captcha_code_container"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.codeNumber,expression:"codeNumber"}],attrs:{type:"text",placeholder:"验证码",maxlength:"4"},domProps:{value:e.codeNumber},on:{input:function(t){t.target.composing||(e.codeNumber=t.target.value)}}}),s("div",{staticClass:"img_change_img"},[s("img",{directives:[{name:"show",rawName:"v-show",value:e.captchaCodeImg,expression:"captchaCodeImg"}],attrs:{src:e.captchaCodeImg}}),s("div",{staticClass:"change_img",on:{click:e.getCaptchaCode}},[s("p",[e._v("看不清")]),s("p",[e._v("换一张")])])])])]),s("p",{staticClass:"login_tips"},[e._v("\n\t\t温馨提示：未注册过的账号，登录时将自动注册\n\t")]),s("p",{staticClass:"login_tips"},[e._v("\n\t\t注册过的用户可凭账号密码登录\n\t")]),s("div",{staticClass:"login_container",on:{click:e.mobileLogin}},[e._v("登录")]),e.loginWay?e._e():s("router-link",{staticClass:"to_forget",attrs:{to:"/forget"}},[e._v("重置密码？")]),e.showAlert?s("alert-tip",{attrs:{showHide:e.showAlert,alertText:e.alertText},on:{closeTip:e.closeTip}}):e._e()],1)},a=[],i=(s("96cf"),s("1da1")),r=s("be94"),o=(s("cadf"),s("551c"),s("097d"),s("c440")),c=s("8a3a"),u=(s("51be"),s("2f62")),l=s("1273"),h={data:function(){return{loginWay:!1,showPassword:!1,phoneNumber:null,mobileCode:null,validate_token:null,computedTime:0,userInfo:null,userAccount:null,passWord:null,captchaCodeImg:null,codeNumber:null,showAlert:!1,alertText:null}},created:function(){this.getCaptchaCode()},components:{headTop:o["a"],alertTip:c["a"]},computed:{rightPhoneNumber:function(){return/^1\d{10}$/gi.test(this.phoneNumber)}},methods:Object(r["a"])({},Object(u["c"])(["RECORD_USERINFO"]),{changeLoginWay:function(){this.loginWay=!this.loginWay},changePassWordType:function(){this.showPassword=!this.showPassword},getCaptchaCode:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(l["v"])();case 2:t=e.sent,this.captchaCodeImg=t.code;case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),getVerifyCode:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){var t,s,n=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!this.rightPhoneNumber){e.next=24;break}return this.computedTime=30,this.timer=setInterval(function(){n.computedTime--,0==n.computedTime&&clearInterval(n.timer)},1e3),e.next=5,Object(l["c"])(this.phoneNumber,"mobile");case 5:if(t=e.sent,!t.message){e.next=12;break}return this.showAlert=!0,this.alertText=t.message,e.abrupt("return");case 12:if(t.is_exists){e.next=16;break}return this.showAlert=!0,this.alertText="您输入的手机号尚未绑定",e.abrupt("return");case 16:return e.next=18,Object(l["y"])(this.phoneNumber);case 18:if(s=e.sent,!s.message){e.next=23;break}return this.showAlert=!0,this.alertText=s.message,e.abrupt("return");case 23:this.validate_token=s.validate_token;case 24:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),mobileLogin:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!this.loginWay){e.next=16;break}if(this.rightPhoneNumber){e.next=7;break}return this.showAlert=!0,this.alertText="手机号码不正确",e.abrupt("return");case 7:if(/^\d{6}$/gi.test(this.mobileCode)){e.next=11;break}return this.showAlert=!0,this.alertText="短信验证码不正确",e.abrupt("return");case 11:return e.next=13,Object(l["K"])(this.mobileCode,this.phoneNumber,this.validate_token);case 13:this.userInfo=e.sent,e.next=35;break;case 16:if(this.userAccount){e.next=22;break}return this.showAlert=!0,this.alertText="请输入手机号/邮箱/用户名",e.abrupt("return");case 22:if(this.passWord){e.next=28;break}return this.showAlert=!0,this.alertText="请输入密码",e.abrupt("return");case 28:if(this.codeNumber){e.next=32;break}return this.showAlert=!0,this.alertText="请输入验证码",e.abrupt("return");case 32:return e.next=34,Object(l["a"])(this.userAccount,this.passWord,this.codeNumber);case 34:this.userInfo=e.sent;case 35:this.userInfo.user_id?(this.RECORD_USERINFO(this.userInfo),this.$router.go(-1)):(this.showAlert=!0,this.alertText=this.userInfo.message,this.loginWay||this.getCaptchaCode());case 36:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),closeTip:function(){this.showAlert=!1}})},p=h,d=(s("cb10"),s("2877")),m=Object(d["a"])(p,n,a,!1,null,"15d65ee2",null);m.options.__file="login.vue";t["default"]=m.exports}}]);