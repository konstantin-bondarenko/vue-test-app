(function(t){function e(e){for(var n,s,l=e[0],o=e[1],c=e[2],p=0,f=[];p<l.length;p++)s=l[p],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&f.push(r[s][0]),r[s]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);u&&u(e);while(f.length)f.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,l=1;l<a.length;l++){var o=a[l];0!==r[o]&&(n=!1)}n&&(i.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},r={app:0},i=[];function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/vue-test-app/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=o;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-app-bar",{class:{"elevation-1":t.$vuetify.breakpoint.xs},attrs:{app:"",flat:"",color:"white"}},[a("span",[t._v("The Test")])]),a("v-main",[a("Desktop")],1)],1)},i=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"fill-height",style:t.$vuetify.breakpoint.xs?{background:"#fff"}:{background:"#E5E5E5"},attrs:{fluid:""}},[a("v-layout",{attrs:{column:"","align-center":!t.$vuetify.breakpoint.xs,"justify-center":""}},[a("v-card",{attrs:{flat:"",width:t.$vuetify.breakpoint.xs?"100%":"500",height:t.$vuetify.breakpoint.xs?"90%":"500"}},[a("v-list-item",{attrs:{"two-line":""}},[a("v-list-item-content",{class:{"mt-10 text-center":!t.$vuetify.breakpoint.xs}},[a("v-list-item-title",{staticClass:"headline font-weight-black mb-3"},[t._v("Log In")]),a("v-list-item-subtitle",[t._v("Please enter your credentials to proceed")])],1)],1),a("v-card-text",[a("v-row",{attrs:{align:"center"}},[a("v-col",{staticClass:"display-3",attrs:{cols:"12"}},[a("v-form",{class:{"mx-14":!t.$vuetify.breakpoint.xs}},[a("v-text-field",{attrs:{rules:t.inputRules,label:"Email",type:"text"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),a("v-text-field",{attrs:{rules:t.inputRules,label:"Password",type:"password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1),a("v-flex",{staticClass:"mx-3 hidden-sm-and-up",attrs:{row:"","align-center":"","justify-space-between":""}},[a("label",{attrs:{for:"switch"}},[t._v("Remember this device")]),a("v-switch",{attrs:{id:"switch",reverse:"",inset:""}})],1)],1)],1),a("v-card-actions",{staticClass:"mx-15 hidden-xs-only"},[a("v-flex",[a("v-checkbox",{attrs:{label:"Remember this device"}}),a("v-btn",{staticClass:"mt-5 mb-10 text-capitalize",attrs:{dark:"",width:"100%",height:"45"}},[t._v("Log in")])],1)],1)],1),a("v-flex",{staticClass:"mx-2 hidden-sm-and-up"},[a("v-card-actions",[a("v-btn",{staticClass:"text-capitalize",attrs:{dark:"",width:"100%",height:"45"}},[t._v("Log in")])],1)],1)],1)],1)},l=[],o={data:function(){return{email:"",password:"",inputRules:[function(t){return t.length>=3||"Minimum length is 3 characters"}]}}},c=o,u=a("2877"),p=a("6544"),f=a.n(p),d=a("8336"),v=a("b0af"),b=a("99d9"),h=a("ac7c"),m=a("62ad"),x=a("a523"),y=a("0e8f"),w=a("4bd4"),g=a("a722"),k=a("da13"),V=a("5d23"),_=a("0fd9"),C=a("b73d"),j=a("8654"),O=Object(u["a"])(c,s,l,!1,null,null,null),$=O.exports;f()(O,{VBtn:d["a"],VCard:v["a"],VCardActions:b["a"],VCardText:b["b"],VCheckbox:h["a"],VCol:m["a"],VContainer:x["a"],VFlex:y["a"],VForm:w["a"],VLayout:g["a"],VListItem:k["a"],VListItemContent:V["a"],VListItemSubtitle:V["b"],VListItemTitle:V["c"],VRow:_["a"],VSwitch:C["a"],VTextField:j["a"]});var P={name:"App",components:{Desktop:$}},L=P,T=a("7496"),S=a("40dc"),E=a("f6c4"),M=Object(u["a"])(L,r,i,!1,null,null,null),R=M.exports;f()(M,{VApp:T["a"],VAppBar:S["a"],VMain:E["a"]});var I=a("f309");n["a"].use(I["a"]);var A=new I["a"]({});n["a"].config.productionTip=!1,new n["a"]({vuetify:A,render:function(t){return t(R)}}).$mount("#app")}});
//# sourceMappingURL=app.8dedafa5.js.map