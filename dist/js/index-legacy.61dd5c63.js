(function(e){function t(t){for(var a,i,r=t[0],l=t[1],s=t[2],f=0,d=[];f<r.length;f++)i=r[f],c[i]&&d.push(c[i][0]),c[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);u&&u(t);while(d.length)d.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,r=1;r<n.length;r++){var l=n[r];0!==c[l]&&(a=!1)}a&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},c={index:0},o=[];function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=t,r=r.slice();for(var s=0;s<r.length;s++)t(r[s]);var u=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("44eb")},"0010":function(e,t,n){"use strict";var a=n("1c07"),c=n.n(a);c.a},"02fd":function(e,t,n){},"0cdd":function(e,t,n){},"13f1":function(e,t,n){},"1c07":function(e,t,n){},2295:function(e,t,n){},"427f":function(e,t,n){"use strict";var a=n("cefb"),c=n.n(a);c.a},"44eb":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d"),n("a481"),n("7f7f"),n("ac6a"),n("2295"),n("6662"),n("f5df");var a=n("be30"),c=(n("95f0"),n("cc60")),o=n("a026");Object(a["a"])(),Object(c["a"])(document,{attr:!1,className:"focus-within",force:!0}),o["a"].config.productionTip=!1;var i=n("98f1");i.keys().forEach(function(e){var t=i(e).default||i(e),n=t.name||e.replace(/^.+\//,"").replace(/\.\w+$/,"");o["a"].component(n,t)});var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"warning-msg"},[n("div",{staticClass:"icon-col"},[n("base-icon",{staticClass:"icon",attrs:{name:"warning"}})],1),n("div",{staticClass:"main-col"},[n("strong",{staticClass:"title"},[e._v("Внимание!")]),n("div",{staticClass:"content"},[e._t("default")],2)])])},l=[],s={name:"WarningMsg"},u=s,f=(n("e187"),n("2877")),d=Object(f["a"])(u,r,l,!1,null,"3c542dba",null);d.options.__file="WarningMsg.vue";var p=d.exports,v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",{staticClass:"form-checkbox"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.isChecked,expression:"isChecked"}],staticClass:"input",attrs:{type:"checkbox",name:e.name},domProps:{checked:Array.isArray(e.isChecked)?e._i(e.isChecked,null)>-1:e.isChecked},on:{change:function(t){var n=e.isChecked,a=t.target,c=!!a.checked;if(Array.isArray(n)){var o=null,i=e._i(n,o);a.checked?i<0&&(e.isChecked=n.concat([o])):i>-1&&(e.isChecked=n.slice(0,i).concat(n.slice(i+1)))}else e.isChecked=c}}}),n("span",{staticClass:"fake-input"},[n("base-icon",{attrs:{name:e.isChecked?"check_box":"check_box_outline_blank"}})],1),e.label?n("span",{staticClass:"label"},[e._v(e._s(e.label))]):e._e()])},h=[],m={name:"FormCheckbox",props:{name:{type:String,default:null},checked:{type:Boolean,default:!1},label:{type:String,default:null}},data:function(){return{isChecked:this.checked}}},b=m,_=(n("0010"),Object(f["a"])(b,v,h,!1,null,"377d1c08",null));_.options.__file="FormCheckbox.vue";var g,x,y=_.exports,k={name:"NotificationsList",components:{FormCheckbox:y}},C=k,w=(n("8ce0"),Object(f["a"])(C,g,x,!1,null,"023919b3",null));w.options.__file="NotificationsList.vue";var O,B,j=w.exports,P={name:"PageSection",components:{WarningMsg:p,NotificationsList:j}},S=P,F=(n("8670"),Object(f["a"])(S,O,B,!1,null,"8f8e9cea",null));F.options.__file="PageSection.vue";var M=F.exports,z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",{staticClass:"form-field"},["checkbox"===e.type&&"input"===e.tag?n("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],staticClass:"input",attrs:{placeholder:e.placeholder,name:e.name,type:"checkbox"},domProps:{checked:Array.isArray(e.value)?e._i(e.value,null)>-1:e.value},on:{change:function(t){var n=e.value,a=t.target,c=!!a.checked;if(Array.isArray(n)){var o=null,i=e._i(n,o);a.checked?i<0&&(e.value=n.concat([o])):i>-1&&(e.value=n.slice(0,i).concat(n.slice(i+1)))}else e.value=c}}}):"radio"===e.type&&"input"===e.tag?n("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],staticClass:"input",attrs:{placeholder:e.placeholder,name:e.name,type:"radio"},domProps:{checked:e._q(e.value,null)},on:{change:function(t){e.value=null}}}):"input"===e.tag?n("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],staticClass:"input",attrs:{placeholder:e.placeholder,name:e.name,type:e.type},domProps:{value:e.value},on:{input:function(t){t.target.composing||(e.value=t.target.value)}}}):n("textarea",{staticClass:"textarea",attrs:{placeholder:e.placeholder,name:e.name},domProps:{value:e.value}}),n("span",{staticClass:"label"},[e._v(e._s(e.label))])])},H=[],N={name:"FormField",props:{tag:{type:String,default:"input"},type:{type:String,default:"text"},value:{type:String,default:""},name:{type:String,default:null},label:{type:String,default:"Field label"},placeholder:{type:String,default:"Field placeholder"}}},E=N,L=(n("6863"),n("540c"),Object(f["a"])(E,z,H,!1,null,"9289823c",null));L.options.__file="FormField.vue";var A,V,$=L.exports,I={name:"FormExample",components:{FormField:$}},T=I,W=(n("427f"),Object(f["a"])(T,A,V,!1,null,"6562c296",null));W.options.__file="FormExample.vue";var D,J,U=W.exports,q={name:"IndexPage",components:{PageSection:M,FormExample:U}},G=q,K=(n("8cde"),n("856a"),Object(f["a"])(G,D,J,!1,null,"d15a53f0",null));K.options.__file="IndexPage.vue";var Q=K.exports;new o["a"]({components:{IndexPage:Q}}).$mount("#app")},"503d":function(e,t,n){"use strict";var a=n("f663"),c=n.n(a);c.a},"540c":function(e,t,n){"use strict";var a=n("6a49"),c=n.n(a);c.a},"55ae":function(e,t,n){"use strict";var a=n("13f1"),c=n.n(a);c.a},"5d62":function(e,t,n){},6662:function(e,t,n){},6863:function(e,t,n){"use strict";var a=n("91a2"),c=n.n(a);c.a},"6a49":function(e,t,n){},"6ea0":function(e,t,n){},"6f8e":function(e,t,n){"use strict";var a=n("5d62"),c=n.n(a);c.a},"6fb1":function(e,t,n){"use strict";var a=n("6ea0"),c=n.n(a);c.a},7461:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("svg",{staticClass:"base-icon",class:"base-icon--"+e.name,attrs:{xmlns:"http://www.w3.org/2000/svg",width:e.width,height:e.height,viewBox:e.icons[e.name].viewBox,"aria-labelledby":e.name+" icon",role:"presentation",fill:e.color},domProps:{innerHTML:e._s(e.icons[e.name].content)}})},c=[],o=(n("c5f6"),n("cadf"),n("551c"),n("097d"),{name:"BaseIcon",props:{name:{type:String,default:"base"},width:{type:[Number,String],default:"1.5rem"},height:{type:[Number,String],default:"1.5rem"},color:{type:String,default:"currentColor"}},data:function(){return{icons:{base:{viewBox:"0 0 24 24",content:""},warning:{viewBox:"0 0 24 24",content:'<path d="M0 0h24v24H0z" fill="none"/><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>'},"file_copy-outline":{viewBox:"0 0 24 24",content:'<path fill="none" d="M0 0h24v24H0V0z"/><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4H8c-1.1 0-1.99.9-1.99 2L6 21c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V11l-6-6zM8 21V7h6v5h5v9H8z"/>'},check_box_outline_blank:{viewBox:"0 0 24 24",content:'<path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/><path d="M0 0h24v24H0z" fill="none"/>'},check_box:{viewBox:"0 0 24 24",content:'<path d="M0 0h24v24H0z" fill="none"/><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>'}}}}}),i=o,r=(n("503d"),n("2877")),l=Object(r["a"])(i,a,c,!1,null,null,null);l.options.__file="BaseIcon.vue";t["default"]=l.exports},"771f":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var a,c,o={name:"BaseFonts"},i=o,r=(n("6f8e"),n("2877")),l=Object(r["a"])(i,a,c,!1,null,null,null);l.options.__file="BaseFonts.vue";t["default"]=l.exports},"800d":function(e,t,n){"use strict";var a=n("fecb"),c=n.n(a);c.a},"82ea":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var a,c,o={name:"BaseButton"},i=o,r=(n("55ae"),n("800d"),n("2877")),l=Object(r["a"])(i,a,c,!1,null,"58a7bba1",null);l.options.__file="BaseButton.vue";t["default"]=l.exports},"856a":function(e,t,n){"use strict";var a=n("dc13"),c=n.n(a);c.a},8670:function(e,t,n){"use strict";var a=n("8b13"),c=n.n(a);c.a},"8b13":function(e,t,n){},"8cde":function(e,t,n){"use strict";var a=n("0cdd"),c=n.n(a);c.a},"8ce0":function(e,t,n){"use strict";var a=n("d147"),c=n.n(a);c.a},"91a2":function(e,t,n){},9262:function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var a,c,o={name:"BaseContent"},i=o,r=(n("6fb1"),n("2877")),l=Object(r["a"])(i,a,c,!1,null,null,null);l.options.__file="BaseContent.vue";t["default"]=l.exports},"94a7":function(e,t,n){"use strict";var a=n("02fd"),c=n.n(a);c.a},"98f1":function(e,t,n){var a={"./BaseButton.vue":"82ea","./BaseContent.vue":"9262","./BaseFonts.vue":"771f","./BaseIcon.vue":"7461","./BasePage.vue":"dc12"};function c(e){var t=o(e);return n(t)}function o(e){var t=a[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}c.keys=function(){return Object.keys(a)},c.resolve=o,e.exports=c,c.id="98f1"},cefb:function(e,t,n){},d147:function(e,t,n){},d98d:function(e,t,n){},dc12:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div")},c=[],o={name:"BasePage"},i=o,r=(n("94a7"),n("2877")),l=Object(r["a"])(i,a,c,!1,null,null,null);l.options.__file="BasePage.vue";t["default"]=l.exports},dc13:function(e,t,n){},e187:function(e,t,n){"use strict";var a=n("d98d"),c=n.n(a);c.a},f663:function(e,t,n){},fecb:function(e,t,n){}});