(window.webpackJsonp=window.webpackJsonp||[]).push([[18,14,15,16],{467:function(e,n,t){"use strict";t.r(n);var r={name:"BaseImage"},o=t(69),l=t(83),d=t.n(l),c=t(281),m=t(187),f=t(493),component=Object(o.a)(r,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-img",e._g(e._b({staticClass:"grey lighten-2",attrs:{flat:"",tile:""},scopedSlots:e._u([{key:"placeholder",fn:function(){return[t("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[t("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}])},"v-img",e.$attrs,!1),e.$listeners))}),[],!1,null,null,null);n.default=component.exports;d()(component,{VImg:c.a,VProgressCircular:m.a,VRow:f.a})},468:function(e,n,t){"use strict";t.r(n);t(10),t(56),t(57);n.default={ComponentPostContentBlock:function(){return t.e(2).then(t.bind(null,497))},ComponentHeroHero:function(){return Promise.all([t.e(0),t.e(3)]).then(t.bind(null,498))},ComponentPostCarousel:function(){return Promise.all([t.e(0),t.e(4)]).then(t.bind(null,499))},ComponentMenuMenu:function(){return Promise.all([t.e(1),t.e(6),t.e(5)]).then(t.bind(null,500))}}},469:function(e,n,t){var content=t(492);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(35).default)("23348746",content,!0,{sourceMap:!1})},487:function(e,n,t){"use strict";t.r(n),t.d(n,"getStrapiComponent",(function(){return o}));var r=t(468),o=function(e){return r.default[e]};n.default={}},490:function(e,n,t){var content=t(505);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(35).default)("4f5b1262",content,!0,{sourceMap:!1})},491:function(e,n,t){"use strict";t(469)},492:function(e,n,t){var r=t(34)(!1);r.push([e.i,".v-image__image[data-v-3952e3d6]{transition:.3s linear}",""]),e.exports=r},496:function(e,n,t){"use strict";t.r(n);var r=t(487),o={name:"StrapiComponent",props:{typename:{type:String,required:!0}},computed:{strapiComponent:function(){return Object(r.getStrapiComponent)(this.typename)}}},l=t(69),component=Object(l.a)(o,(function(){var e=this,n=e.$createElement;return(e._self._c||n)(e.strapiComponent,e._b({tag:"component"},"component",e.$attrs,!1),[e._t("default")],2)}),[],!1,null,"1be98e3b",null);n.default=component.exports},503:function(e,n,t){"use strict";t.r(n);t(10),t(56),t(57);var r={name:"PostCard",components:{BaseImage:function(){return Promise.resolve().then(t.bind(null,467))}},props:{prominent:{type:Boolean,default:!1},post:{type:Object,required:!0}}},o=(t(491),t(69)),l=t(83),d=t.n(l),c=t(488),m=t(464),f=t(509),component=Object(o.a)(r,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-card",{staticClass:"mx-auto",attrs:{to:e.post.slug,ripple:!1,tile:"",flat:"",nuxt:"",custom:""}},[e.post.thumbnail_image?t("base-image",{staticClass:"white--text text-right",attrs:{height:"200px",src:e.post.thumbnail_image.url}},[t("v-chip",{staticClass:"ma-2 mb-2 text-uppercase",attrs:{label:"",color:"grey darken-3","text-color":"white",small:""},on:{click:function(e){e.stopPropagation()}}},[e._v("\n            "+e._s(e.post.category)+"\n        ")])],1):e._e(),e._v(" "),t("v-card-title",[e._v(e._s(e.post.title))]),e._v(" "),t("v-card-subtitle",{staticClass:"pb-0"},[e._v(e._s(e.$moment(e.post.published_at).format("MMMM Do, YYYY")))]),e._v(" "),t("v-card-text",{staticClass:"text--primary"},[e._v("\n        "+e._s(e.post.subtitle)+"\n    ")])],1)}),[],!1,null,"3952e3d6",null);n.default=component.exports;d()(component,{BaseImage:t(467).default}),d()(component,{VCard:c.a,VCardSubtitle:m.a,VCardText:m.b,VCardTitle:m.c,VChip:f.a})},504:function(e,n,t){"use strict";t(490)},505:function(e,n,t){var r=t(34)(!1);r.push([e.i,".post-card-grid[data-v-6d56e2c1]{width:100%;display:grid;grid-template-columns:repeat(1,minmax(0,1fr));grid-gap:1em;gap:1em}@media(min-width:600px){.post-card-grid[data-v-6d56e2c1]{grid-template-columns:repeat(3,minmax(0,1fr))}}@media(min-width:960px){.post-card-grid[data-v-6d56e2c1]{grid-template-columns:repeat(4,minmax(0,1fr))}}@media(min-width:1264px){.post-card-grid[data-v-6d56e2c1]{grid-template-columns:repeat(5,minmax(0,1fr))}}",""]),e.exports=r},512:function(e,n,t){"use strict";t.r(n);t(10),t(56),t(57);var r={name:"PostCardGrid",components:{PostCard:function(){return Promise.resolve().then(t.bind(null,503))}},props:{posts:{type:Array,required:!0}}},o=(t(504),t(69)),component=Object(o.a)(r,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"post-card-grid"},[e._l(e.posts,(function(e){return[t("post-card",{key:e.id,attrs:{post:e}})]}))],2)}),[],!1,null,"6d56e2c1",null);n.default=component.exports;installComponents(component,{PostCard:t(503).default})},513:function(e,n){var t={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"PageHome"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"pageHome"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"dynamic_zone"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ComponentHeroHero"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"heading"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"subtitle"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"alignment"},arguments:[],directives:[]}]}}]}}]}}]}}],loc:{start:0,end:189}};t.loc.source={body:"query PageHome {\n    pageHome {\n    \tdynamic_zone {\n      \t\t... on ComponentHeroHero {\n        \t\t__typename\n        \t\theading\n        \t\tsubtitle\n        \t\talignment\n      \t\t}\n    \t}\n  \t}\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function r(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var t=e.type;"NamedType"===t.kind&&n.add(t.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){r(e,n)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){r(e,n)})),e.definitions&&e.definitions.forEach((function(e){r(e,n)}))}var o={};function l(e,n){for(var i=0;i<e.definitions.length;i++){var element=e.definitions[i];if(element.name&&element.name.value==n)return element}}t.definitions.forEach((function(e){if(e.name){var n=new Set;r(e,n),o[e.name.value]=n}})),e.exports=t,e.exports.PageHome=function(e,n){var t={kind:e.kind,definitions:[l(e,n)]};e.hasOwnProperty("loc")&&(t.loc=e.loc);var r=o[n]||new Set,d=new Set,c=new Set;for(r.forEach((function(e){c.add(e)}));c.size>0;){var m=c;c=new Set,m.forEach((function(e){d.has(e)||(d.add(e),(o[e]||new Set).forEach((function(e){c.add(e)})))}))}return d.forEach((function(n){var r=l(e,n);r&&t.definitions.push(r)})),t}(t,"PageHome")},514:function(e,n){var t={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"Posts"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"posts"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"slug"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"subtitle"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"category"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"featured_image"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"thumbnail_image"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"published_at"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:242}};t.loc.source={body:"query Posts {\n    posts {\n        id\n        slug\n        title\n        subtitle\n    \tcategory\n        # content\n        featured_image {\n            url\n        }\n        thumbnail_image {\n            url\n        }\n    \tpublished_at\n    }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function r(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var t=e.type;"NamedType"===t.kind&&n.add(t.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){r(e,n)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){r(e,n)})),e.definitions&&e.definitions.forEach((function(e){r(e,n)}))}var o={};function l(e,n){for(var i=0;i<e.definitions.length;i++){var element=e.definitions[i];if(element.name&&element.name.value==n)return element}}t.definitions.forEach((function(e){if(e.name){var n=new Set;r(e,n),o[e.name.value]=n}})),e.exports=t,e.exports.Posts=function(e,n){var t={kind:e.kind,definitions:[l(e,n)]};e.hasOwnProperty("loc")&&(t.loc=e.loc);var r=o[n]||new Set,d=new Set,c=new Set;for(r.forEach((function(e){c.add(e)}));c.size>0;){var m=c;c=new Set,m.forEach((function(e){d.has(e)||(d.add(e),(o[e]||new Set).forEach((function(e){c.add(e)})))}))}return d.forEach((function(n){var r=l(e,n);r&&t.definitions.push(r)})),t}(t,"Posts")},550:function(e,n,t){"use strict";t.r(n);t(10),t(56),t(57);var r=t(513),o=t.n(r),l=t(514),d={components:{Logo:function(){return Promise.resolve().then(t.bind(null,448))},PostCardGrid:function(){return Promise.resolve().then(t.bind(null,512))},StrapiComponent:function(){return t.e(7).then(t.bind(null,547))}},data:function(){return{posts:[],pageContent:{}}},apollo:{posts:{prefetch:!0,query:t.n(l).a},pageContent:{prefetch:!0,query:o.a,update:function(e){return e.pageHome}}}},c=t(69),m=t(83),f=t.n(m),v=t(545),component=Object(c.a)(d,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-container",{attrs:{fluid:""}},[e.pageContent&&e.pageContent.dynamic_zone?e._l(e.pageContent.dynamic_zone,(function(n,i){return t("div",{key:i},[t("strapi-component",e._b({attrs:{typename:n.__typename}},"strapi-component",n,!1))],1)})):e._e(),e._v(" "),t("div",{staticClass:"mt-6"},[e.posts.length?t("post-card-grid",{attrs:{posts:e.posts}}):e._e()],1)],2)}),[],!1,null,null,null);n.default=component.exports;f()(component,{StrapiComponent:t(496).default,PostCardGrid:t(512).default}),f()(component,{VContainer:v.a})}}]);