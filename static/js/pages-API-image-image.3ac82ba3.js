(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-image-image"],{"19be":function(e,i,t){"use strict";t.r(i);var n=t("7336"),s=t.n(n);for(var a in n)"default"!==a&&function(e){t.d(i,e,function(){return n[e]})}(a);i["default"]=s.a},"1aee":function(e,i,t){var n=t("e078");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var s=t("4f06").default;s("fa36d460",n,!0,{sourceMap:!1,shadowMode:!1})},"6dc5":function(e,i,t){"use strict";t.r(i);var n=t("81b7"),s=t("19be");for(var a in s)"default"!==a&&function(e){t.d(i,e,function(){return s[e]})}(a);t("9d81");var u=t("2877"),c=Object(u["a"])(s["default"],n["a"],n["b"],!1,null,"4648859d",null);i["default"]=c.exports},7336:function(e,i,t){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=s(t("a34a"));function s(e){return e&&e.__esModule?e:{default:e}}function a(e,i,t,n,s,a,u){try{var c=e[a](u),l=c.value}catch(r){return void t(r)}c.done?i(l):Promise.resolve(l).then(n,s)}function u(e){return function(){var i=this,t=arguments;return new Promise(function(n,s){var u=e.apply(i,t);function c(e){a(u,n,s,c,l,"next",e)}function l(e){a(u,n,s,c,l,"throw",e)}c(void 0)})}}var c=[["camera"],["album"],["camera","album"]],l=[["compressed"],["original"],["compressed","original"]],r={data:function(){return{title:"choose/previewImage",imageList:[],sourceTypeIndex:2,sourceType:["拍照","相册","拍照或相册"],sizeTypeIndex:2,sizeType:["压缩","原图","压缩或原图"],countIndex:8,count:[1,2,3,4,5,6,7,8,9]}},onUnload:function(){this.imageList=[],this.sourceTypeIndex=2,this.sourceType=["拍照","相册","拍照或相册"],this.sizeTypeIndex=2,this.sizeType=["压缩","原图","压缩或原图"],this.countIndex=8},methods:{sourceTypeChange:function(e){this.sourceTypeIndex=e.target.value},sizeTypeChange:function(e){this.sizeTypeIndex=e.target.value},countChange:function(e){this.countIndex=e.target.value},chooseImage:function(){var e=u(n.default.mark(function e(){var i,t=this;return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(9!==this.imageList.length){e.next=7;break}return e.next=3,this.isFullImg();case 3:if(i=e.sent,console.log("是否继续?",i),i){e.next=7;break}return e.abrupt("return");case 7:uni.chooseImage({sourceType:c[this.sourceTypeIndex],sizeType:l[this.sizeTypeIndex],count:this.imageList.length+this.count[this.countIndex]>9?9-this.imageList.length:this.count[this.countIndex],success:function(e){t.imageList=t.imageList.concat(e.tempFilePaths)}});case 8:case"end":return e.stop()}},e,this)}));function i(){return e.apply(this,arguments)}return i}(),isFullImg:function(){var e=this;return new Promise(function(i){uni.showModal({content:"已经有9张图片了,是否清空现有图片？",success:function(t){t.confirm?(e.imageList=[],i(!0)):i(!1)},fail:function(){i(!1)}})})},previewImage:function(e){var i=e.target.dataset.src;uni.previewImage({current:i,urls:this.imageList})}}};i.default=r},"81b7":function(e,i,t){"use strict";var n=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("v-uni-view",[t("page-head",{attrs:{title:e.title}}),t("v-uni-view",{staticClass:"uni-common-mt"},[t("v-uni-form",[t("v-uni-view",{staticClass:"uni-list"},[t("v-uni-view",{staticClass:"uni-list-cell"},[t("v-uni-view",{staticClass:"uni-list-cell-left"},[t("v-uni-view",{staticClass:"uni-label"},[e._v("图片来源")])],1),t("v-uni-view",{staticClass:"uni-list-cell-right"},[t("v-uni-picker",{attrs:{range:e.sourceType,value:e.sourceTypeIndex,mode:"selector"},on:{change:function(i){i=e.$handleEvent(i),e.sourceTypeChange(i)}}},[t("v-uni-view",{staticClass:"uni-input"},[e._v(e._s(e.sourceType[e.sourceTypeIndex]))])],1)],1)],1),t("v-uni-view",{staticClass:"uni-list-cell"},[t("v-uni-view",{staticClass:"uni-list-cell-left"},[t("v-uni-view",{staticClass:"uni-label"},[e._v("图片质量")])],1),t("v-uni-view",{staticClass:"uni-list-cell-right"},[t("v-uni-picker",{attrs:{range:e.sizeType,value:e.sizeTypeIndex,mode:"selector"},on:{change:function(i){i=e.$handleEvent(i),e.sizeTypeChange(i)}}},[t("v-uni-view",{staticClass:"uni-input"},[e._v(e._s(e.sizeType[e.sizeTypeIndex]))])],1)],1)],1),t("v-uni-view",{staticClass:"uni-list-cell"},[t("v-uni-view",{staticClass:"uni-list-cell-left"},[t("v-uni-view",{staticClass:"uni-label"},[e._v("数量限制")])],1),t("v-uni-view",{staticClass:"uni-list-cell-right"},[t("v-uni-picker",{attrs:{range:e.count,mode:"selector"},on:{change:function(i){i=e.$handleEvent(i),e.countChange(i)}}},[t("v-uni-view",{staticClass:"uni-input"},[e._v(e._s(e.count[e.countIndex]))])],1)],1)],1)],1),t("v-uni-view",{staticClass:"uni-list list-pd"},[t("v-uni-view",{staticClass:"uni-list-cell cell-pd"},[t("v-uni-view",{staticClass:"uni-uploader"},[t("v-uni-view",{staticClass:"uni-uploader-head"},[t("v-uni-view",{staticClass:"uni-uploader-title"},[e._v("点击可预览选好的图片")]),t("v-uni-view",{staticClass:"uni-uploader-info"},[e._v(e._s(e.imageList.length)+"/9")])],1),t("v-uni-view",{staticClass:"uni-uploader-body"},[t("v-uni-view",{staticClass:"uni-uploader__files"},[e._l(e.imageList,function(i,n){return[t("v-uni-view",{key:n+"_0",staticClass:"uni-uploader__file"},[t("v-uni-image",{staticClass:"uni-uploader__img",attrs:{src:i,"data-src":i},on:{click:function(i){i=e.$handleEvent(i),e.previewImage(i)}}})],1)]}),t("v-uni-view",{staticClass:"uni-uploader__input-box"},[t("v-uni-view",{staticClass:"uni-uploader__input",on:{click:function(i){i=e.$handleEvent(i),e.chooseImage(i)}}})],1)],2)],1)],1)],1)],1)],1)],1)],1)},s=[];t.d(i,"a",function(){return n}),t.d(i,"b",function(){return s})},"9d81":function(e,i,t){"use strict";var n=t("1aee"),s=t.n(n);s.a},e078:function(e,i,t){i=e.exports=t("2350")(!1),i.push([e.i,".cell-pd[data-v-4648859d]{padding:%?22?% %?30?%}.list-pd[data-v-4648859d]{margin-top:%?50?%}",""])}}]);