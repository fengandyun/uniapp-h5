(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-template-gesture-lock-gesture-lock"],{"0ce4":function(t,e,i){"use strict";i.r(e);var n=i("709d"),r=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);e["default"]=r.a},1111:function(t,e,i){"use strict";var n=i("735c"),r=i.n(n);r.a},6774:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,'.gesture-lock[data-v-5cf82080]{margin:0 auto;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;overflow:auto}.gesture-lock .cycle[data-v-5cf82080]{-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;border:2px solid #6af;border-radius:50%}.gesture-lock .cycle.check[data-v-5cf82080]:after{content:"";display:block;position:absolute;width:32%;height:32%;border:2px solid #6af;border-radius:50%;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.gesture-lock .line[data-v-5cf82080]{height:0;border-top:2px solid #6af;position:absolute;-webkit-transform-origin:left center;-ms-transform-origin:left center;transform-origin:left center}.gesture-lock.error .cycle.check[data-v-5cf82080],.gesture-lock.error .cycle.check[data-v-5cf82080]:after,.gesture-lock.error .line[data-v-5cf82080]{border-color:#ffa197}',""])},"709d":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=r(i("cfa5"));function r(t){return t&&t.__esModule?t:{default:t}}var o={name:"index",props:{containerWidth:{type:[Number,String],default:0},cycleRadius:{type:[Number,String],default:0},password:{type:Array,default:function(){return[]}}},data:function(){return{gestureLock:{},circleArray:[],lineArray:[],activeLine:{},error:!1}},methods:{onTouchStart:function(t){this.gestureLock.onTouchStart(t),this.refesh()},onTouchMove:function(t){this.gestureLock.onTouchMove(t),this.refesh()},onTouchEnd:function(t){var e=this,i=this.gestureLock.onTouchEnd(t);this.password.length&&i.join("")!=this.password.join("")?(this.error=!0,setTimeout(function(){e.refesh(),e.$emit("end",i)},800)):(this.refesh(),this.$emit("end",i))},refesh:function(){this.error=!1,this.circleArray=this.gestureLock.getCycleArray(),this.lineArray=this.gestureLock.getLineArray(),this.activeLine=this.gestureLock.getActiveLine()}},mounted:function(){this.gestureLock=new n.default(this.containerWidth,this.cycleRadius),this.refesh()}};e.default=o},"735c":function(t,e,i){var n=i("6774");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=i("4f06").default;r("576c6367",n,!0,{sourceMap:!1,shadowMode:!1})},7640:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"gesture-lock",class:{error:t.error},style:{width:t.containerWidth+"rpx",height:t.containerWidth+"rpx"},on:{touchstart:function(e){e.stopPropagation(),e=t.$handleEvent(e),t.onTouchStart(e)},touchmove:function(e){e.stopPropagation(),e=t.$handleEvent(e),t.onTouchMove(e)},touchend:function(e){e.stopPropagation(),e=t.$handleEvent(e),t.onTouchEnd(e)}}},[i("v-uni-view",t._l(t.circleArray,function(t,e){return i("v-uni-view",{key:e,staticClass:"cycle",class:{check:t.check},style:{left:t.style.left,top:t.style.top,width:t.style.width,height:t.style.width}})}),1),i("v-uni-view",t._l(t.lineArray,function(t,e){return i("v-uni-view",{key:e,staticClass:"line",style:{left:t.activeLeft,top:t.activeTop,width:t.activeWidth,transform:"rotate("+t.activeRotate+")"}})}),1),i("v-uni-view",{staticClass:"line",style:{left:t.activeLine.activeLeft,top:t.activeLine.activeTop,width:t.activeLine.activeWidth,transform:"rotate("+t.activeLine.activeRotate+")"}})],1)},r=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return r})},"8cc5":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("page-head",{attrs:{title:t.title}}),i("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[i("v-uni-view",[i("mpvue-gesture-lock",{attrs:{containerWidth:590,cycleRadius:70,password:t.password},on:{end:function(e){e=t.$handleEvent(e),t.onEnd(e)}}})],1),i("v-uni-view",{staticClass:"uni-helllo-text uni-common-mt uni-center"},[t._v(t._s(t.text))])],1)],1)},r=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return r})},"96df":function(t,e,i){"use strict";i.r(e);var n=i("8cc5"),r=i("e44e");for(var o in r)"default"!==o&&function(t){i.d(e,t,function(){return r[t]})}(o);var s=i("2877"),a=Object(s["a"])(r["default"],n["a"],n["b"],!1,null,"24fa5a94",null);e["default"]=a.exports},9726:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=r(i("ae80"));function r(t){return t&&t.__esModule?t:{default:t}}var o={components:{mpvueGestureLock:n.default},data:function(){return{title:"手势图案",password:[],text:"请设定手势"}},methods:{onEnd:function(t){this.password.length?this.password.join("")===t.join("")?(this.text="手势设定完成",this.password=[]):(this.text="两次手势设定不一致",this.password=[]):(this.text="请确认手势设定",this.password=t)}}};e.default=o},ae80:function(t,e,i){"use strict";i.r(e);var n=i("7640"),r=i("0ce4");for(var o in r)"default"!==o&&function(t){i.d(e,t,function(){return r[t]})}(o);i("1111");var s=i("2877"),a=Object(s["a"])(r["default"],n["a"],n["b"],!1,null,"5cf82080",null);e["default"]=a.exports},cfa5:function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function o(t,e,i){return e&&r(t.prototype,e),i&&r(t,i),t}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=function(){function t(e,i){n(this,t),this.containerWidth=e,this.cycleRadius=i,this.circleArray=[],this.checkPoints=[],this.lineArray=[],this.lastCheckPoint=0,this.offsetX=0,this.offsetY=0,this.activeLine={},this.windowWidth=wx.getSystemInfoSync().windowWidth,this.initCircleArray()}return o(t,[{key:"initCircleArray",value:function(){for(var t=(this.containerWidth-6*this.cycleRadius)/6,e=0,i=0;i<3;i++)for(var n=0;n<3;n++)e++,this.circleArray.push({count:e,x:this.rpxTopx((t+this.cycleRadius)*(2*n+1)),y:this.rpxTopx((t+this.cycleRadius)*(2*i+1)),radius:this.rpxTopx(this.cycleRadius),check:!1,style:{left:(t+this.cycleRadius)*(2*n+1)-this.cycleRadius+"rpx",top:(t+this.cycleRadius)*(2*i+1)-this.cycleRadius+"rpx",width:2*this.cycleRadius+"rpx"}})}},{key:"onTouchStart",value:function(t){this.setOffset(t),this.checkTouch({x:t.touches[0].pageX-this.offsetX,y:t.touches[0].pageY-this.offsetY})}},{key:"onTouchMove",value:function(t){this.moveDraw(t)}},{key:"onTouchEnd",value:function(t){var e=this.checkPoints;return this.reset(),e}},{key:"setOffset",value:function(t){this.offsetX=t.currentTarget.offsetLeft,this.offsetY=t.currentTarget.offsetTop}},{key:"checkTouch",value:function(t){for(var e=t.x,i=t.y,n=0;n<this.circleArray.length;n++){var r=this.circleArray[n];if(this.isPointInCycle(e,i,r.x,r.y,r.radius)){if(!r.check){if(this.checkPoints.push(r.count),0!=this.lastCheckPoint){var o=this.drawLine(this.lastCheckPoint,r);this.lineArray.push(o)}this.lastCheckPoint=r}return void(r.check=!0)}}}},{key:"drawLine",value:function(t,e){var i=this.getPointDis(t.x,t.y,e.x,e.y),n=this.getAngle(t,e);return{activeLeft:t.x+"px",activeTop:t.y+"px",activeWidth:i+"px",activeRotate:n+"deg"}}},{key:"getAngle",value:function(t,e){var i=e.x-t.x,n=e.y-t.y;return i>=0?360*Math.atan(n/i)/(2*Math.PI):180+360*Math.atan(n/i)/(2*Math.PI)}},{key:"isPointInCycle",value:function(t,e,i,n,r){return this.getPointDis(t,e,i,n)<r}},{key:"getPointDis",value:function(t,e,i,n){return Math.sqrt(Math.pow(t-i,2)+Math.pow(e-n,2))}},{key:"moveDraw",value:function(t){var e=t.touches[0].pageX-this.offsetX,i=t.touches[0].pageY-this.offsetY;this.checkTouch({x:e,y:i}),this.activeLine=this.drawLine(this.lastCheckPoint,{x:e,y:i})}},{key:"reset",value:function(){this.circleArray.forEach(function(t){t.check=!1}),this.checkPoints=[],this.lineArray=[],this.activeLine={},this.lastCheckPoint=0}},{key:"getActiveLine",value:function(){return this.activeLine}},{key:"getCycleArray",value:function(){return this.circleArray}},{key:"getLineArray",value:function(){return this.lineArray}},{key:"rpxTopx",value:function(t){return t/750*this.windowWidth}}]),t}(),a=s;e.default=a},e44e:function(t,e,i){"use strict";i.r(e);var n=i("9726"),r=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);e["default"]=r.a}}]);