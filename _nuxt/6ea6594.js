(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{498:function(t,e,r){"use strict";r.r(e);var n={name:"Hero",props:{heading:{type:String,required:!0},subtitle:{type:String,required:!0},alignment:{type:String,default:"center"}},computed:{cssClass:function(){return"left"==this.alignment?"align-left text-left":"center"==this.alignment?"align-center text-center":"right"==this.alignment?"align-right text-right":void 0}}},c=r(69),o=r(83),l=r.n(o),f=r(527),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"hero mt-sm-3 py-6 d-flex flex-column",class:t.cssClass},[r("div",{staticClass:"text-h4 text-sm-h2"},[t._v("\n        "+t._s(t.heading)+"\n    ")]),t._v(" "),r("v-col",{staticClass:"text-body-1 pa-0 mt-6",attrs:{sm:"10",md:"8"}},[t._v("\n        "+t._s(t.subtitle)+"\n    ")])],1)}),[],!1,null,"204790e4",null);e.default=component.exports;l()(component,{VCol:f.a})},527:function(t,e,r){"use strict";r(17),r(23),r(29),r(30);var n=r(5),c=(r(10),r(53),r(20),r(31),r(63),r(470),r(56),r(471),r(472),r(473),r(474),r(475),r(476),r(477),r(478),r(479),r(480),r(481),r(482),r(483),r(57),r(70),r(19),r(86),r(466),r(1)),o=r(196),l=r(2);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var O=["sm","md","lg","xl"],m=O.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),v=O.reduce((function(t,e){return t["offset"+Object(l.p)(e)]={type:[String,Number],default:null},t}),{}),y=O.reduce((function(t,e){return t["order"+Object(l.p)(e)]={type:[String,Number],default:null},t}),{}),h={col:Object.keys(m),offset:Object.keys(v),order:Object.keys(y)};function j(t,e,r){var n=t;if(null!=r&&!1!==r){if(e){var c=e.replace(t,"");n+="-".concat(c)}return"col"!==t||""!==r&&!0!==r?(n+="-".concat(r)).toLowerCase():n.toLowerCase()}}var S=new Map;e.a=c.a.extend({name:"v-col",functional:!0,props:d(d(d(d({cols:{type:[Boolean,String,Number],default:!1}},m),{},{offset:{type:[String,Number],default:null}},v),{},{order:{type:[String,Number],default:null}},y),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var r=e.props,data=e.data,c=e.children,l=(e.parent,"");for(var f in r)l+=String(r[f]);var d=S.get(l);return d||function(){var t,e;for(e in d=[],h)h[e].forEach((function(t){var n=r[t],c=j(e,t,n);c&&d.push(c)}));var c=d.some((function(t){return t.startsWith("col-")}));d.push((t={col:!c||!r.cols},Object(n.a)(t,"col-".concat(r.cols),r.cols),Object(n.a)(t,"offset-".concat(r.offset),r.offset),Object(n.a)(t,"order-".concat(r.order),r.order),Object(n.a)(t,"align-self-".concat(r.alignSelf),r.alignSelf),t)),S.set(l,d)}(),t(r.tag,Object(o.a)(data,{class:d}),c)}})}}]);