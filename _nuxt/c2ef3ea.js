(window.webpackJsonp=window.webpackJsonp||[]).push([[24,5,8,12],{553:function(t,n,e){var content=e(557);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(61).default)("380cc58c",content,!0,{sourceMap:!1})},554:function(t,n,e){"use strict";e.r(n);var o=e(0).a.extend({props:{theme:{type:String,default:"solid"},size:{type:String,default:"normal"},disabled:{type:Boolean,default:!1}},methods:{click:function(t){this.$emit("click",t)}}}),r=(e(556),e(49)),component=Object(r.a)(o,(function(){var t,n=this,e=n.$createElement;return(n._self._c||e)("button",{staticClass:"dio__button dio__focusable",class:(t={},t["dio__button-"+n.theme]=!0,t["dio__button-"+n.size]=!0,t["dio__button-disabled"]=n.disabled,t),attrs:{disabled:n.disabled},on:{click:function(t){return n.click(t)}}},[n._t("default")],2)}),[],!1,null,null,null);n.default=component.exports},555:function(t,n,e){var content=e(564);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(61).default)("7a626d40",content,!0,{sourceMap:!1})},556:function(t,n,e){"use strict";e(553)},557:function(t,n,e){var o=e(60)((function(i){return i[1]}));o.push([t.i,".dio__button{\n  cursor:pointer;\n  border-radius:9999px;\n  padding:0.5rem;\n  padding-right:1rem;\n  padding-left:1rem;\n  border-radius:9999px;\n  border-width:1px;\n  border-style:solid\n}\n.dio__button:focus, .dio__button:focus-within{\n  border-radius:9999px\n}\n.dio__button:focus,.dio__button:focus-within{\n  outline:none\n}\n.dio__button-solid{\n    background:var(--purple);\n    color:var(--white)\n}\n.dio__button-transparent{\n    background-color:transparent;\n    color:var(--purple);\n    border-color:var(--purple)\n}\n.dio__button-muted{\n    background-color:transparent;\n    color:var(--shade-700);\n    border-color:var(--shade-700)\n}\n.dio__button-small{\n    padding:0.25rem;\n    padding-right:0.75rem;\n    padding-left:0.75rem;\n    font-size:0.875rem;\n    line-height:1.25rem\n}\n.dio__button.dio__button-disabled{\n  background:var(--shade-500);\n  cursor:default\n}",""]),o.locals={},t.exports=o},563:function(t,n,e){"use strict";e(555)},564:function(t,n,e){var o=e(60)((function(i){return i[1]}));o.push([t.i,".dropdown .trigger{\n    display:inline-flex;\n    width:100%;\n    justify-content:center;\n    border-radius:9999px;\n    border-width:1px;\n    --tw-border-opacity:1;\n    border-color:rgba(209, 213, 219, var(--tw-border-opacity));\n    padding-left:1rem;\n    padding-right:1rem;\n    padding-top:0.5rem;\n    padding-bottom:0.5rem;\n    font-size:0.875rem;\n    line-height:1.25rem;\n    font-weight:500;\n    line-height:1.25rem;\n    --tw-text-opacity:1;\n    color:rgba(55, 65, 81, var(--tw-text-opacity))\n}\n.dropdown .trigger:focus{\n    --tw-border-opacity:1;\n    border-color:rgba(91, 33, 182, var(--tw-border-opacity))\n}\n.dropdown .trigger:hover{\n    --tw-text-opacity:1;\n    color:rgba(107, 114, 128, var(--tw-text-opacity))\n}\n.dropdown .trigger:focus{\n    outline:2px solid transparent;\n    outline-offset:2px\n}\n.dropdown .trigger{\n    cursor:pointer;\n    transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;\n    transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n    transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;\n    transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);\n    transition-duration:150ms;\n    transition-duration:150ms;\n    transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)\n}\n.dropdown .trigger:hover{\n    --tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n    --tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n    box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n    --tw-ring-opacity:1;\n    --tw-ring-color:rgba(91, 33, 182, var(--tw-ring-opacity))\n}\n.dropdown-menu{\n  --tw-translate-x:0;\n  --tw-translate-y:0;\n  --tw-rotate:0;\n  --tw-skew-x:0;\n  --tw-skew-y:0;\n  --tw-scale-x:1;\n  --tw-scale-y:1;\n  transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  transform-origin:top left;\n  --tw-translate-y:-0.5rem;\n  --tw-scale-x:.95;\n  --tw-scale-y:.95;\n  transition-property:all;\n  transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration:150ms;\n  transition-duration:300ms\n}\n.dropdown-menu.open{\n  opacity:1;\n  transform:translate(0) scale(1);\n  visibility:visible\n}\n.dropdown-menu .dropdown-options{\n    position:absolute;\n    left:0px;\n    z-index:10;\n    margin-top:0.5rem;\n    width:14rem;\n    transform-origin:top left\n}\n.dropdown-menu .dropdown-options > :not([hidden]) ~ :not([hidden]){\n    --tw-divide-y-reverse:0;\n    border-top-width:calc(1px * calc(1 - var(--tw-divide-y-reverse)));\n    border-bottom-width:calc(1px * var(--tw-divide-y-reverse));\n    --tw-divide-opacity:1;\n    border-color:rgba(243, 244, 246, var(--tw-divide-opacity))\n}\n.dropdown-menu .dropdown-options{\n    border-radius:0.375rem;\n    border-width:1px;\n    --tw-border-opacity:1;\n    border-color:rgba(229, 231, 235, var(--tw-border-opacity));\n    --tw-bg-opacity:1;\n    background-color:rgba(255, 255, 255, var(--tw-bg-opacity));\n    --tw-shadow:0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n    box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n    outline:2px solid transparent;\n    outline-offset:2px\n}\n.dropdown-menu .dropdown-option{\n    cursor:pointer;\n    -webkit-user-select:none;\n       -moz-user-select:none;\n        -ms-user-select:none;\n            user-select:none\n}",""]),o.locals={},t.exports=o},566:function(t,n,e){var content=e(577);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(61).default)("4577dae2",content,!0,{sourceMap:!1})},567:function(t,n,e){"use strict";e.r(n);var o=e(0),r=e(578),l=e(99),d=e.n(l),c=o.a.extend({components:{ChevronDownIcon:r.a},props:{options:{type:Array},value:{type:String},align:{type:String},placeholder:{type:String}},data:function(){return{localPlaceholder:"",isOpen:!1,localValue:null}},mounted:function(){var t=this;t.localValue=t.value,t.localPlaceholder=t.placeholder},computed:{hasValue:function(){return!d()(this.localValue)}},methods:{select:function(t){var n=this;n.localValue=t,n.$emit("input",t),n.isOpen=!1}},watch:{value:function(t){this.localValue=t}}}),f=(e(563),e(49)),component=Object(f.a)(c,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"relative inline-block text-left dropdown z-10"},[e("div",{staticClass:"trigger",attrs:{type:"button","aria-haspopup":"true","aria-expanded":"true","aria-controls":"headlessui-menu-items-117"},on:{click:function(n){t.isOpen=!t.isOpen}}},[t.hasValue?t._t("selectedValue",null,{value:t.localValue}):t._e(),t._v(" "),t.hasValue?t._e():e("span",[t._v(t._s(t.localPlaceholder))]),t._v(" "),e("svg",{staticClass:"w-5 h-5 ml-2 -mr-1",attrs:{viewBox:"0 0 20 20",fill:"currentColor"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"}})])],2),t._v(" "),e("div",{staticClass:"opacity-0 invisible dropdown-menu",class:{open:t.isOpen}},[e("div",{staticClass:"dropdown-options",attrs:{role:"menu","aria-labelledby":"headlessui-menu-button-1",id:"headlessui-menu-items-117"}},t._l(t.options,(function(option){return e("div",{key:option,staticClass:"dropdown-option px-4 py-3",on:{click:function(n){return t.select(option)}}},[t._t("option",null,{option:option})],2)})),0)])])}),[],!1,null,null,null);n.default=component.exports},576:function(t,n,e){"use strict";e(566)},577:function(t,n,e){var o=e(60)((function(i){return i[1]}));o.push([t.i,".dio__term-content{\n  margin-bottom:2.5rem;\n  border-radius:0.125rem;\n  border-width:1px;\n  --tw-border-opacity:1;\n  border-color:rgba(156, 163, 175, var(--tw-border-opacity));\n  padding:0.75rem;\n  font-size:0.75rem;\n  line-height:1rem;\n  --tw-shadow:0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n  box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)\n}\n@media (min-width: 1024px){\n.dio__term-content{\n    padding:1.75rem;\n    font-size:1rem;\n    line-height:1.5rem\n}\n}\n.dio__term-content{\n  --tw-bg-opacity:1;\n  background-color:rgba(255, 255, 255, var(--tw-bg-opacity));\n}\n.dio__term-content h1{\n    font-size:1.125rem;\n    line-height:1.75rem;\n    font-weight:700\n}\n@media (min-width: 1024px){\n.dio__term-content h1{\n      font-size:1.5rem;\n      line-height:2rem\n}\n}\n.dio__term-content h1:not(:first-child){\n    padding-top:1.5rem\n}\n.dio__term-content h2{\n    padding-top:1.25rem;\n    font-size:1rem;\n    line-height:1.5rem;\n    font-weight:700\n}\n@media (min-width: 1024px){\n.dio__term-content h2{\n      font-size:1.25rem;\n      line-height:1.75rem\n}\n}\n.dio__term-content h3{\n    padding-top:1rem;\n    font-size:0.875rem;\n    line-height:1.25rem;\n    font-weight:700\n}\n@media (min-width: 1024px){\n.dio__term-content h3{\n      font-size:1.125rem;\n      line-height:1.75rem\n}\n}\n.dio__term-content a{\n    --tw-text-opacity:1;\n    color:rgba(37, 99, 235, var(--tw-text-opacity));\n    text-decoration:underline\n}\n.dio__term-content p{\n    padding-bottom:1rem\n}\n.dio__term-content ul{\n    list-style-position:outside;\n    list-style-type:disc;\n    padding-bottom:1rem;\n    padding-left:1.5rem\n}\n.dio__term-content li{\n    padding-bottom:0.25rem\n}",""]),o.locals={},t.exports=o},579:function(t,n,e){"use strict";e.r(n);var o=e(13);e(10),e(18),e(22),e(299),e(29),e(19),e(34),e(38),e(28),e(50);function r(object,t){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),n.push.apply(n,e)}return n}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?r(Object(source),!0).forEach((function(n){Object(o.a)(t,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):r(Object(source)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(source,n))}))}return t}var d=e(0).a.extend({props:{content:{type:String},format:{type:String,default:"text/plain"},downloads:{type:Array},showLanguage:{type:Boolean,default:!1},trackingEvent:{type:Object,default:function(){return null}}},data:function(){return{language:"en"}},methods:{download:function(t,n){var link=document.createElement("a"),e=new Blob([t],{type:n.type});link.href=URL.createObjectURL(e),link.download=n.filename,link.click(),URL.revokeObjectURL(link.href),this.trackingEvent&&this.track(n)},track:function(t){var n=l(l({},this.trackingEvent),t.trackingEvent);this.$ga.event(n)}}}),c=(e(576),e(49)),component=Object(c.a)(d,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"dio__term-preview"},[e("div",{staticClass:"flex flex-row justify-between items-center"},[e("div",{staticClass:"flex flex-row items-center gap-x-2"},[t.showLanguage?e("input-dropdown",{attrs:{options:[]},scopedSlots:t._u([{key:"selectedValue",fn:function(n){var e=n.value;return[t._v("\n                    "+t._s(t.$t("language."+e))+"\n                ")]}},{key:"option",fn:function(n){var option=n.option;return[t._v("\n                    "+t._s(t.$t("language."+option))+"\n                ")]}}],null,!1,127414888),model:{value:t.language,callback:function(n){t.language=n},expression:"language"}}):t._e()],1),t._v(" "),e("div",[t._l(t.downloads,(function(n,o){return["text/plain"===n.type?e("dio-button",{key:o,attrs:{theme:"transparent"},on:{click:function(e){return t.download(t.content,n)}}},[t._v(t._s(n.label))]):t._e(),t._v(" "),"text/markdown"===n.type?e("dio-button",{key:o,attrs:{theme:"transparent"},on:{click:function(e){return t.download(t.content,n)}}},[t._v(t._s(n.label))]):t._e(),t._v(" "),"text/html"===n.type?e("dio-button",{key:o,attrs:{theme:"transparent"},on:{click:function(e){t.download(t.$md.render(t.content),n)}}},[t._v(t._s(n.label))]):t._e()]}))],2)]),t._v(" "),e("br"),t._v(" "),"text/markdown"===t.format?e("div",{staticClass:"dio__term-content",domProps:{innerHTML:t._s(t.$md.render(t.content))}}):t._e(),t._v(" "),"text/plain"===t.format?e("div",{staticClass:"dio__term-content"},[e("pre",[t._v(t._s(t.content))])]):t._e()])}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{InputDropdown:e(567).default,DioButton:e(554).default})},679:function(t,n,e){"use strict";e.r(n);var o=e(0),r=e(78),l=o.a.extend({computed:{safe_harbor:function(){return r.store.state.policymaker.templates.safe_harbor.text},language:function(){return r.store.getters["policymaker/getConfiguration"].language}}}),d=e(49),component=Object(d.a)(l,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[t._v("\n    Safe Harbor Clause\n\n    "),e("dio-term-preview",{attrs:{content:t.safe_harbor}})],1)}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{DioTermPreview:e(579).default})}}]);