(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-template-uparse-md-uparse-md"],{"0114":function(a,e,t){"use strict";t.r(e);var r=t("5504"),n=t("03d0");for(var i in n)"default"!==i&&function(a){t.d(e,a,function(){return n[a]})}(i);t("47d0");var d=t("2877"),s=Object(d["a"])(n["default"],r["a"],r["b"],!1,null,"22a4a52e",null);e["default"]=s.exports},"03d0":function(a,e,t){"use strict";t.r(e);var r=t("df8f"),n=t.n(r);for(var i in r)"default"!==i&&function(a){t.d(e,a,function(){return r[a]})}(i);e["default"]=n.a},"47d0":function(a,e,t){"use strict";var r=t("dd8d"),n=t.n(r);n.a},5504:function(a,e,t){"use strict";var r=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("v-uni-view",{staticClass:"uni-padding-wrap"},[t("uParse",{attrs:{content:a.article},on:{preview:function(e){e=a.$handleEvent(e),a.preview(e)},navigate:function(e){e=a.$handleEvent(e),a.navigate(e)}}})],1)},n=[];t.d(e,"a",function(){return r}),t.d(e,"b",function(){return n})},dd8d:function(a,e,t){var r=t("fe7b");"string"===typeof r&&(r=[[a.i,r,""]]),r.locals&&(a.exports=r.locals);var n=t("4f06").default;n("50382b3b",r,!0,{sourceMap:!1,shadowMode:!1})},df8f:function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=i(t("6f5f")),n=i(t("2d74"));function i(a){return a&&a.__esModule?a:{default:a}}var d="很多资讯页面，服务端返回的数据都是 markdown 字符串或 html 字符串，使用本模板可直接解析 markdown 为符合 uni-app 规范的富文本界面。下文为示例：\r\n\r\nHBuilderX堪称markdown书写编辑的最佳工具，本文简单介绍HBuilderX里markdown的使用技巧。更多详情请在HBuilderX里点菜单帮助-markdown语法帮助。\r\n\r\nmarkdown的标题是行首以#号开头，空格分割的，不同级别的标题，在HX里着色也不同。如下：\r\n# 标题1\r\n## 标题2\r\n### 标题3\r\n#### 标题4\r\n##### 标题5\r\n\r\nHBuilderX标题编辑技巧：\r\n1. Emmet快速输入：敲h2+Tab即可生成二级标题【同HTML里的emmet写法，不止标题，HX里所有可对应tag的markdown语法均支持emmet写法】。仅行首生效\r\n2. 智能双击：双击#号可选中整个标题段落\r\n3. 智能回车：行尾回车或行中Ctrl+Enter强制换行后会自动在下一行补#\r\n4. 回车后再次按Tab可递进一层标题，再按Tab切换列表符\r\n5. 在# 后回车，可上插一个空标题行【同word】，任意位置按Ctrl+Shift+Enter也可以\r\n\r\n\r\n- 折叠：点标题前的-号可折叠该标题段落，快捷键是Alt+-（展开折叠是Alt+=）\r\n- 折叠：多层折叠时折叠或展开子节点，快捷键是Alt+Shift+-或=\r\n\r\n\r\n**加粗** 【快捷键：Ctrl+B，支持多光标；Emmet：b后敲Tab】\r\n\r\n_倾斜_【Emmet：i后敲Tab；前后包围：选中文字按Ctrl+\\是在选区两侧添加光标，可以继续输入_】\r\n\r\n~~删除线~~【前后包围：选中文字按Ctrl+\\是在选区两侧添加光标，可以继续输入~~，会在2侧同时输入】\r\n\r\n> 引用\r\n\r\n\r\n[超链接](https://dcloud.io)\r\n\r\n![logo](https://img-cdn-qiniu.dcloud.net.cn/newpage/images/logo4.png)\r\n\r\n\r\n=======================\r\n\r\n\r\n``` javascript\r\n\tvar a = document; //代码\r\n```\r\n",s={components:{uParse:n.default},data:function(){return{article:(0,r.default)(d)}},methods:{preview:function(a,e){console.log("src: "+a)},navigate:function(a,e){console.log("href: "+a),uni.showModal({content:"点击链接为："+a,showCancel:!1})}}};e.default=s},fe7b:function(a,e,t){e=a.exports=t("2350")(!1),e.push([a.i,"/**\n * author: Di (微信小程序开发工程师)\n * organization: WeAppDev(微信小程序开发论坛)(http://weappdev.com)\n *         垂直微信小程序开发交流社区\n *\n * github地址: https://github.com/icindy/wxParse\n *\n * for: 微信小程序富文本解析\n * detail : http://weappdev.com/t/wxparse-alpha0-1-html-markdown/184\n */.wxParse[data-v-22a4a52e]{width:100%;font-family:Helvetica,sans-serif;font-size:%?30?%;color:#666;line-height:1.8}.wxParse uni-view[data-v-22a4a52e]{word-break:hyphenate}.wxParse .inline[data-v-22a4a52e]{display:inline;margin:0;padding:0}.wxParse .div[data-v-22a4a52e]{margin:0;padding:0}.wxParse .h1 .text[data-v-22a4a52e]{font-size:2em;margin:.67em 0}.wxParse .h2 .text[data-v-22a4a52e]{font-size:1.5em;margin:.83em 0}.wxParse .h3 .text[data-v-22a4a52e]{font-size:1.17em;margin:1em 0}.wxParse .h4 .text[data-v-22a4a52e]{margin:1.33em 0}.wxParse .h5 .text[data-v-22a4a52e]{font-size:.83em;margin:1.67em 0}.wxParse .h6 .text[data-v-22a4a52e]{font-size:.67em;margin:2.33em 0}.wxParse .b[data-v-22a4a52e],.wxParse .h1 .text[data-v-22a4a52e],.wxParse .h2 .text[data-v-22a4a52e],.wxParse .h3 .text[data-v-22a4a52e],.wxParse .h4 .text[data-v-22a4a52e],.wxParse .h5 .text[data-v-22a4a52e],.wxParse .h6 .text[data-v-22a4a52e],.wxParse .strong[data-v-22a4a52e]{font-weight:bolder}.wxParse .p[data-v-22a4a52e]{margin:1em 0}.wxParse .address[data-v-22a4a52e],.wxParse .cite[data-v-22a4a52e],.wxParse .em[data-v-22a4a52e],.wxParse .i[data-v-22a4a52e],.wxParse .var[data-v-22a4a52e]{font-style:italic}.wxParse .code[data-v-22a4a52e],.wxParse .kbd[data-v-22a4a52e],.wxParse .pre[data-v-22a4a52e],.wxParse .samp[data-v-22a4a52e],.wxParse .tt[data-v-22a4a52e]{font-family:monospace}.wxParse .pre[data-v-22a4a52e]{overflow:auto;background:#f5f5f5;padding:%?16?%;white-space:pre;margin:1em %?0?%}.wxParse .code[data-v-22a4a52e]{display:inline;background:#f5f5f5}.wxParse .big[data-v-22a4a52e]{font-size:1.17em}.wxParse .small[data-v-22a4a52e],.wxParse .sub[data-v-22a4a52e],.wxParse .sup[data-v-22a4a52e]{font-size:.83em}.wxParse .sub[data-v-22a4a52e]{vertical-align:sub}.wxParse .sup[data-v-22a4a52e]{vertical-align:super}.wxParse .del[data-v-22a4a52e],.wxParse .s[data-v-22a4a52e],.wxParse .strike[data-v-22a4a52e]{text-decoration:line-through}.wxParse .s[data-v-22a4a52e],.wxParse .strong[data-v-22a4a52e]{display:inline}.wxParse .a[data-v-22a4a52e]{color:#00bfff}.wxParse .video[data-v-22a4a52e]{text-align:center;margin:%?22?% 0}.wxParse .video-video[data-v-22a4a52e]{width:100%}.wxParse .img[data-v-22a4a52e]{display:inline-block;width:0;height:0;max-width:100%;overflow:hidden}.wxParse .blockquote[data-v-22a4a52e]{margin:%?10?% 0;padding:%?22?% 0 %?22?% %?22?%;font-family:Courier,Calibri,宋体;background:#f5f5f5;border-left:%?6?% solid #dbdbdb}.wxParse .blockquote .p[data-v-22a4a52e]{margin:0}.wxParse .ol[data-v-22a4a52e],.wxParse .ul[data-v-22a4a52e]{display:block;margin:1em 0;padding-left:%?33?%}.wxParse .ol[data-v-22a4a52e]{list-style-type:disc}.wxParse .ol[data-v-22a4a52e]{list-style-type:decimal}.wxParse .ol>weixin-parse-template[data-v-22a4a52e],.wxParse .ul>weixin-parse-template[data-v-22a4a52e]{display:list-item;-webkit-box-align:baseline;-webkit-align-items:baseline;-ms-flex-align:baseline;align-items:baseline;text-align:match-parent}.wxParse .ol>.li[data-v-22a4a52e],.wxParse .ul>.li[data-v-22a4a52e]{display:list-item;-webkit-box-align:baseline;-webkit-align-items:baseline;-ms-flex-align:baseline;align-items:baseline;text-align:match-parent}.wxParse .ol .ul[data-v-22a4a52e],.wxParse .ul .ul[data-v-22a4a52e]{list-style-type:circle}.wxParse .ol .ol .ul[data-v-22a4a52e],.wxParse .ol .ul .ul[data-v-22a4a52e],.wxParse .ul .ol .ul[data-v-22a4a52e],.wxParse .ul .ul .ul[data-v-22a4a52e]{list-style-type:square}.wxParse .u[data-v-22a4a52e]{text-decoration:underline}.wxParse .hide[data-v-22a4a52e]{display:none}.wxParse .del[data-v-22a4a52e]{display:inline}.wxParse .figure[data-v-22a4a52e]{overflow:hidden}.wxParse .table[data-v-22a4a52e]{width:100%}.wxParse .tfoot[data-v-22a4a52e],.wxParse .thead[data-v-22a4a52e],.wxParse .tr[data-v-22a4a52e]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}.wxParse .tr[data-v-22a4a52e]{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;border-right:%?2?% solid #e0e0e0;border-bottom:%?2?% solid #e0e0e0}.wxParse .td[data-v-22a4a52e],.wxParse .th[data-v-22a4a52e]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:%?1276?%;overflow:auto;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;padding:%?11?%;border-left:%?2?% solid #e0e0e0}.wxParse .td[data-v-22a4a52e]:last{border-top:%?2?% solid #e0e0e0}.wxParse .th[data-v-22a4a52e]{background:#f0f0f0;border-top:%?2?% solid #e0e0e0}",""])}}]);