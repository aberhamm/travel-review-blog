(window.webpackJsonp=window.webpackJsonp||[]).push([[17,11,14,15,16],{464:function(e,t,n){"use strict";n.r(t);var r={name:"BaseImage"},o=n(69),c=n(82),l=n.n(c),d=n(279),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("v-img",e._g(e._b({attrs:{flat:"",tile:""}},"v-img",e.$attrs,!1),e.$listeners),[e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports;l()(component,{VImg:d.a})},465:function(e,t,n){"use strict";n.r(t);n(10),n(56),n(57);t.default={ComponentPostContentBlock:function(){return n.e(2).then(n.bind(null,480))},ComponentHeroHero:function(){return Promise.all([n.e(1),n.e(3)]).then(n.bind(null,481))},ComponentPostCarousel:function(){return n.e(4).then(n.bind(null,482))},ComponentMenuMenu:function(){return Promise.all([n.e(0),n.e(6),n.e(5)]).then(n.bind(null,483))}}},470:function(e,t,n){"use strict";n.r(t),n.d(t,"getStrapiComponent",(function(){return o}));var r=n(465),o=function(e){return r.default[e]};t.default={}},479:function(e,t,n){"use strict";n.r(t);var r=n(470),o={name:"StrapiComponent",props:{typename:{type:String,required:!0}},computed:{strapiComponent:function(){return Object(r.getStrapiComponent)(this.typename)}}},c=n(69),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement;return(e._self._c||t)(e.strapiComponent,e._b({tag:"component"},"component",e.$attrs,!1),[e._t("default")],2)}),[],!1,null,"1be98e3b",null);t.default=component.exports},517:function(e,t){var n={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"Posts"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"slug"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"posts"},arguments:[{kind:"Argument",name:{kind:"Name",value:"where"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"slug"},value:{kind:"Variable",name:{kind:"Name",value:"slug"}}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"slug"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"subtitle"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"content"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ComponentPostContentBlock"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"content"},arguments:[],directives:[]}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ComponentPostCarousel"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"caption"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"images"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"UploadFile"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"previewUrl"},arguments:[],directives:[]}]}}]}}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ComponentMenuMenu"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"menu"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"menu_items"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"description"},arguments:[],directives:[]}]}}]}}]}}]}},{kind:"Field",name:{kind:"Name",value:"featured_image"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:827}};n.loc.source={body:"query Posts($slug: String!) {\n    posts(where: {slug: $slug}) {\n        id\n        slug\n        title\n        subtitle\n        content {\n      \t\t... on ComponentPostContentBlock {\n        \t\t__typename\n        \t\tcontent\n      \t\t}\n        \t... on ComponentPostCarousel {\n\t\t        __typename\n        \t\tcaption\n        \t\timages {\n          \t\t... on UploadFile {\n                      url\n                      previewUrl\n                  }\n        \t\t}\n      \t\t}\n            ... on ComponentMenuMenu {\n                __typename,\n                menu {\n          \t\t\tid\n                    name\n                    menu_items {\n            \t\t\tid\n                        name\n                        description\n                    }\n                }\n            }\n    \t}\n        featured_image {\n            url\n        }\n    }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function r(e,t){if("FragmentSpread"===e.kind)t.add(e.name.value);else if("VariableDefinition"===e.kind){var n=e.type;"NamedType"===n.kind&&t.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){r(e,t)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){r(e,t)})),e.definitions&&e.definitions.forEach((function(e){r(e,t)}))}var o={};function c(e,t){for(var i=0;i<e.definitions.length;i++){var element=e.definitions[i];if(element.name&&element.name.value==t)return element}}n.definitions.forEach((function(e){if(e.name){var t=new Set;r(e,t),o[e.name.value]=t}})),e.exports=n,e.exports.Posts=function(e,t){var n={kind:e.kind,definitions:[c(e,t)]};e.hasOwnProperty("loc")&&(n.loc=e.loc);var r=o[t]||new Set,l=new Set,d=new Set;for(r.forEach((function(e){d.add(e)}));d.size>0;){var m=d;d=new Set,m.forEach((function(e){l.has(e)||(l.add(e),(o[e]||new Set).forEach((function(e){d.add(e)})))}))}return l.forEach((function(t){var r=c(e,t);r&&n.definitions.push(r)})),n}(n,"Posts")},518:function(e,t,n){var content=n(519);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(35).default)("b1bed018",content,!0,{sourceMap:!1})},519:function(e,t,n){var r=n(34)(!1);r.push([e.i,".theme--light.v-breadcrumbs .v-breadcrumbs__divider,.theme--light.v-breadcrumbs .v-breadcrumbs__item--disabled{color:rgba(0,0,0,.38)}.theme--dark.v-breadcrumbs .v-breadcrumbs__divider,.theme--dark.v-breadcrumbs .v-breadcrumbs__item--disabled{color:hsla(0,0%,100%,.5)}.v-breadcrumbs{align-items:center;display:flex;flex-wrap:wrap;flex:0 1 auto;list-style-type:none;margin:0;padding:18px 12px}.v-breadcrumbs li{align-items:center;display:inline-flex;font-size:14px}.v-breadcrumbs li .v-icon{font-size:16px}.v-breadcrumbs li:nth-child(2n){padding:0 12px}.v-breadcrumbs__item{align-items:center;display:inline-flex;text-decoration:none;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-breadcrumbs__item--disabled{pointer-events:none}.v-breadcrumbs--large li,.v-breadcrumbs--large li .v-icon{font-size:16px}",""]),e.exports=r},541:function(e,t,n){"use strict";n(23),n(10),n(20),n(86),n(43),n(287),n(478),n(105),n(93);var r=n(1);var o,c=n(197);t.a=(o="container",r.a.extend({name:"v-".concat(o),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(e,t){var n=t.props,data=t.data,r=t.children;data.staticClass="".concat(o," ").concat(data.staticClass||"").trim();var c=data.attrs;if(c){data.attrs={};var l=Object.keys(c).filter((function(e){if("slot"===e)return!1;var t=c[e];return e.startsWith("data-")?(data.attrs[e]=t,!1):t||"string"==typeof t}));l.length&&(data.staticClass+=" ".concat(l.join(" ")))}return n.id&&(data.domProps=data.domProps||{},data.domProps.id=n.id),e(n.tag,data,r)}})).extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(e,t){var n,r=t.props,data=t.data,o=t.children,l=data.attrs;return l&&(data.attrs={},n=Object.keys(l).filter((function(e){if("slot"===e)return!1;var t=l[e];return e.startsWith("data-")?(data.attrs[e]=t,!1):t||"string"==typeof t}))),r.id&&(data.domProps=data.domProps||{},data.domProps.id=r.id),e(r.tag,Object(c.a)(data,{staticClass:"container",class:Array({"container--fluid":r.fluid}).concat(n||[])}),o)}})},546:function(e,t,n){"use strict";n.r(t);n(10),n(56),n(57);var r=n(517),o={components:{ImageGrid:function(){return n.e(4).then(n.bind(null,482))},StrapiComponent:function(){return n.e(7).then(n.bind(null,544))}},data:function(){return{post:{},breadcrumbs:[{text:"Home",nuxt:!0,to:"/"},{text:"Post",disabled:!0,nuxt:!0,to:"/"}]}},apollo:{post:{prefetch:!0,query:n.n(r).a,variables:function(){return{slug:this.$route.params.post}},update:function(e){return e.posts[0]}}},head:function(){return{title:this.post.title,meta:[{hid:"description",name:"description",content:"My custom description"}]}}},c=n(69),l=n(82),d=n.n(l),m=(n(20),n(17),n(23),n(29),n(19),n(30),n(5)),f=(n(93),n(518),n(157)),v=n(36);function k(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function y(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?k(Object(source),!0).forEach((function(t){Object(m.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):k(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var h=Object(v.a)(f.a).extend({name:"v-breadcrumbs-item",props:{activeClass:{type:String,default:"v-breadcrumbs__item--disabled"},ripple:{type:[Boolean,Object],default:!1}},computed:{classes:function(){return Object(m.a)({"v-breadcrumbs__item":!0},this.activeClass,this.disabled)}},render:function(e){var t=this.generateRouteLink(),n=t.tag,data=t.data;return e("li",[e(n,y(y({},data),{},{attrs:y(y({},data.attrs),{},{"aria-current":this.isActive&&this.isLink?"page":void 0})}),this.$slots.default)])}}),O=n(2),S=Object(O.e)("v-breadcrumbs__divider","li"),j=n(92);function _(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}var C=Object(v.a)(j.a).extend({name:"v-breadcrumbs",props:{divider:{type:String,default:"/"},items:{type:Array,default:function(){return[]}},large:Boolean},computed:{classes:function(){return function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(t){Object(m.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({"v-breadcrumbs--large":this.large},this.themeClasses)}},methods:{genDivider:function(){return this.$createElement(S,this.$slots.divider?this.$slots.divider:this.divider)},genItems:function(){for(var e=[],t=!!this.$scopedSlots.item,n=[],i=0;i<this.items.length;i++){var r=this.items[i];n.push(r.text),t?e.push(this.$scopedSlots.item({item:r})):e.push(this.$createElement(h,{key:n.join("."),props:r},[r.text])),i<this.items.length-1&&e.push(this.genDivider())}return e}},render:function(e){var t=this.$slots.default||this.genItems();return e("ul",{staticClass:"v-breadcrumbs",class:this.classes},t)}}),w=n(543),P=n(541),N=(n(70),n(85),n(43),n(31),n(64),n(494),n(495),n(496),n(497),n(498),n(499),n(500),n(501),n(502),n(503),n(504),n(505),n(506),n(507),n(478),n(1)),x=n(197);function F(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function D(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?F(Object(source),!0).forEach((function(t){Object(m.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):F(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var E=["sm","md","lg","xl"],$=["start","end","center"];function M(e,t){return E.reduce((function(n,r){return n[e+Object(O.p)(r)]=t(),n}),{})}var B=function(e){return[].concat($,["baseline","stretch"]).includes(e)},I=M("align",(function(){return{type:String,default:null,validator:B}})),V=function(e){return[].concat($,["space-between","space-around"]).includes(e)},T=M("justify",(function(){return{type:String,default:null,validator:V}})),z=function(e){return[].concat($,["space-between","space-around","stretch"]).includes(e)},A=M("alignContent",(function(){return{type:String,default:null,validator:z}})),G={align:Object.keys(I),justify:Object.keys(T),alignContent:Object.keys(A)},L={align:"align",justify:"justify",alignContent:"align-content"};function U(e,t,n){var r=L[e];if(null!=n){if(t){var o=t.replace(e,"");r+="-".concat(o)}return(r+="-".concat(n)).toLowerCase()}}var Y=new Map,H=N.a.extend({name:"v-row",functional:!0,props:D(D(D({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:B}},I),{},{justify:{type:String,default:null,validator:V}},T),{},{alignContent:{type:String,default:null,validator:z}},A),render:function(e,t){var n=t.props,data=t.data,r=t.children,o="";for(var c in n)o+=String(n[c]);var l=Y.get(o);return l||function(){var e,t;for(t in l=[],G)G[t].forEach((function(e){var r=n[e],o=U(t,e,r);o&&l.push(o)}));l.push((e={"no-gutters":n.noGutters,"row--dense":n.dense},Object(m.a)(e,"align-".concat(n.align),n.align),Object(m.a)(e,"justify-".concat(n.justify),n.justify),Object(m.a)(e,"align-content-".concat(n.alignContent),n.alignContent),e)),Y.set(o,l)}(),e(n.tag,Object(x.a)(data,{staticClass:"row",class:l}),r)}}),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"pa-0",attrs:{fluid:""}},[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("v-breadcrumbs",{staticClass:"pa-0",attrs:{items:e.breadcrumbs}}),e._v(" "),n("div",{staticClass:"text-h4 text-sm-h2 text-center pt-5"},[e._v("\n                    "+e._s(e.post.title)+"\n                ")]),e._v(" "),n("div",{staticClass:"text-overline text-center mt-4"},[e._v("\n                    "+e._s(e.$moment(e.post.published_at).format("MMMM DD YYYY"))+"\n                ")])],1)],1)],1),e._v(" "),n("v-container",{staticClass:"pa-0"},[e.post.featured_image?n("base-image",{staticClass:"white--text text-right",attrs:{height:"300px",src:e.post.featured_image.url}}):e._e()],1),e._v(" "),e.post.content?n("v-container",{staticClass:"pa-0"},e._l(e.post.content,(function(t,i){return n("v-row",{key:i,staticClass:"ma-0 mt-4"},[n("v-col",{staticClass:"pa-0",attrs:{cols:"12",lg:"8","offset-lg":"2"}},[n("strapi-component",e._b({attrs:{typename:t.__typename}},"strapi-component",t,!1))],1)],1)})),1):e._e()],1)}),[],!1,null,"3b5de5ec",null);t.default=component.exports;d()(component,{BaseImage:n(464).default,StrapiComponent:n(479).default}),d()(component,{VBreadcrumbs:C,VCol:w.a,VContainer:P.a,VRow:H})}}]);