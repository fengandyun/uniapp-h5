(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-modal-modal"],{"0b8c":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={data:function(){return{title:"modal",modalHidden:!0,modalHidden2:!0}},methods:{modalTap:function(t){uni.showModal({title:"弹窗标题",content:"弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内",showCancel:!1,confirmText:"确定"})},noTitlemodalTap:function(t){uni.showModal({content:"弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内",confirmText:"确定",cancelText:"取消"})}}};n.default=a},"88b1":function(t,n,e){"use strict";e.r(n);var a=e("0b8c"),i=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(n,t,function(){return a[t]})}(o);n["default"]=i.a},a0f2:function(t,n,e){"use strict";e.r(n);var a=e("b151"),i=e("88b1");for(var o in i)"default"!==o&&function(t){e.d(n,t,function(){return i[t]})}(o);var u=e("2877"),l=Object(u["a"])(i["default"],a["a"],a["b"],!1,null,null,null);n["default"]=l.exports},b151:function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",[e("page-head",{attrs:{title:t.title}}),e("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[e("v-uni-view",{staticClass:"uni-btn-v"},[e("v-uni-button",{attrs:{type:"default"},on:{click:function(n){n=t.$handleEvent(n),t.modalTap(n)}}},[t._v("有标题的modal")]),e("v-uni-button",{attrs:{type:"default"},on:{click:function(n){n=t.$handleEvent(n),t.noTitlemodalTap(n)}}},[t._v("无标题的modal")])],1)],1)],1)},i=[];e.d(n,"a",function(){return a}),e.d(n,"b",function(){return i})}}]);