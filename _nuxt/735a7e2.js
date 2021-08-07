(window.webpackJsonp=window.webpackJsonp||[]).push([[22,14,17,18],{559:function(t,e,n){var content=n(569);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(61).default)("53e65934",content,!0,{sourceMap:!1})},562:function(t,e,n){"use strict";n.r(e);var o=n(0).a.extend({props:{title:{type:String,default:"Page title"}},data:function(){return{}}}),r=(n(568),n(49)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-title"},[n("h2",[t._t("default")],2),t._v(" "),t._t("subtitle")],2)}),[],!1,null,null,null);e.default=component.exports},568:function(t,e,n){"use strict";n(559)},569:function(t,e,n){var o=n(60)((function(i){return i[1]}));o.push([t.i,'.page-title{\n  margin-bottom:4rem;\n}\n.page-title h2{\n    margin-top:0.75rem;\n    font-size:1.5rem;\n    line-height:2rem;\n    font-weight:700\n}\n@media (min-width: 1024px){\n.page-title h2{\n      font-size:1.875rem;\n      line-height:2.25rem\n}\n}\n.page-title h2{\n    font-family:"Noto Sans Display"\n}\n.page-title h5{\n    font-size:1rem;\n    line-height:1.5rem\n}\n@media (min-width: 1024px){\n.page-title h5{\n      font-size:1.125rem;\n      line-height:1.75rem\n}\n}\n.page-title h5{\n    font-family:"Noto Sans"\n}',""]),o.locals={},t.exports=o},583:function(t,e,n){var content=n(597);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(61).default)("07d10697",content,!0,{sourceMap:!1})},584:function(t,e,n){var content=n(599);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(61).default)("79d5475d",content,!0,{sourceMap:!1})},596:function(t,e,n){"use strict";n(583)},597:function(t,e,n){var o=n(60)((function(i){return i[1]}));o.push([t.i,'.dio__tab{\n  -webkit-user-select:none;\n     -moz-user-select:none;\n      -ms-user-select:none;\n          user-select:none;\n}\n.dio__tab >a{\n    margin-right:0.125rem;\n    padding-top:1rem;\n    padding-right:1rem;\n    padding-bottom:1rem;\n    padding-left:1rem;\n    font-size:0.875rem;\n    line-height:1.25rem\n}\n@media (min-width: 1024px){\n.dio__tab >a{\n      font-size:1rem;\n      line-height:1.5rem\n}\n}\n.dio__tab >a{\n    transition-property:all;\n    transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);\n    transition-duration:150ms;\n    transition-duration:150ms;\n    background:var(--shade-100);\n    border-bottom-width:2px;\n    border-style:solid;\n    border-bottom-color:var(--shade-200);\n    text-overflow:ellipsis;\n    white-space:nowrap;\n    color:var(--shade-700)\n}\n.dio__tab >a.nuxt-link-exact-active{\n    border-top-width:4px;\n    background:transparent;\n    border-top-color:var(--purple);\n    border-bottom-color:transparent;\n    color:var(--dark-purple);\n    font-family:"Noto Sans Display"\n}',""]),o.locals={},t.exports=o},598:function(t,e,n){"use strict";n(584)},599:function(t,e,n){var o=n(60)((function(i){return i[1]}));o.push([t.i,".dio__tab-group{\n  display:flex;\n  flex-direction:row;\n  align-items:flex-start;\n  height:4rem\n}",""]),o.locals={},t.exports=o},621:function(t,e,n){"use strict";n.r(e);var o=n(0).a.extend({props:{route:{type:String,required:!0},selected:{type:Boolean,default:!1}},data:function(){return{}}}),r=(n(596),n(49)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dio__tab"},[n("NuxtLink",{attrs:{to:t.route}},[t._t("default")],2)],1)}),[],!1,null,null,null);e.default=component.exports},622:function(t,e,n){"use strict";n.r(e);var o=n(0).a.extend({}),r=(n(598),n(49)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"dio__tab-group"},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},677:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n(621),l=n(622),c=n(562),d=n(78),f=o.a.extend({components:{PageTitle:c.default,DioTab:r.default,DioTabGroup:l.default},layout:"policymaker-v2",data:function(){return{sections:[{route:"/policymaker/download/vdp",name:"Vulnerability Disclosure Policy"},{route:"/policymaker/download/securitytxt",name:"Security.txt"},{route:"/policymaker/download/dnssecuritytxt",name:"DNS Security.txt"}]}},mounted:function(){var t=this;d.store.dispatch("policymaker/fetchTerms").then((function(){t.$router.push(t.sections[0].route)}))},computed:{configuration:function(){return d.store.getters["policymaker/getConfiguration"]}},methods:{goto:function(t){return d.store.dispatch("policymaker/gotoStep",t)}}}),m=n(49),component=Object(m.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("page-title",[t._v("Download")]),t._v(" "),n("dio-tab-group",t._l(t.sections,(function(section,e){return n("dio-tab",{key:e,attrs:{route:section.route}},[t._v("\n            "+t._s(section.name)+"\n        ")])})),1),t._v(" "),n("NuxtChild")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{PageTitle:n(562).default})}}]);