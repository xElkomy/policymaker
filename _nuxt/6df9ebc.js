(window.webpackJsonp=window.webpackJsonp||[]).push([[28,5,7,14,15,16],{553:function(t,n,e){var content=e(557);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(61).default)("380cc58c",content,!0,{sourceMap:!1})},554:function(t,n,e){"use strict";e.r(n);var r=e(0).a.extend({props:{theme:{type:String,default:"solid"},size:{type:String,default:"normal"},disabled:{type:Boolean,default:!1}},methods:{click:function(t){this.$emit("click",t)}}}),o=(e(556),e(49)),component=Object(o.a)(r,(function(){var t,n=this,e=n.$createElement;return(n._self._c||e)("button",{staticClass:"dio__button dio__focusable",class:(t={},t["dio__button-"+n.theme]=!0,t["dio__button-"+n.size]=!0,t["dio__button-disabled"]=n.disabled,t),attrs:{disabled:n.disabled},on:{click:function(t){return n.click(t)}}},[n._t("default")],2)}),[],!1,null,null,null);n.default=component.exports},556:function(t,n,e){"use strict";e(553)},557:function(t,n,e){var r=e(60)((function(i){return i[1]}));r.push([t.i,".dio__button{\n  cursor:pointer;\n  border-radius:9999px;\n  padding:0.5rem;\n  padding-right:1rem;\n  padding-left:1rem;\n  border-radius:9999px;\n  border-width:1px;\n  border-style:solid\n}\n.dio__button:focus, .dio__button:focus-within{\n  border-radius:9999px\n}\n.dio__button:focus,.dio__button:focus-within{\n  outline:none\n}\n.dio__button-solid{\n    background:var(--purple);\n    color:var(--white)\n}\n.dio__button-transparent{\n    background-color:transparent;\n    color:var(--purple);\n    border-color:var(--purple)\n}\n.dio__button-muted{\n    background-color:transparent;\n    color:var(--shade-700);\n    border-color:var(--shade-700)\n}\n.dio__button-small{\n    padding:0.25rem;\n    padding-right:0.75rem;\n    padding-left:0.75rem;\n    font-size:0.875rem;\n    line-height:1.25rem\n}\n.dio__button.dio__button-disabled{\n  background:var(--shade-500);\n  cursor:default\n}",""]),r.locals={},t.exports=r},558:function(t,n,e){"use strict";var r=e(16),o=e(8),l=e(102),c=e(27),d=e(17),f=e(69),_=e(188),m=e(100),h=e(6),v=e(62),x=e(101).f,y=e(58).f,k=e(24).f,S=e(298).trim,w="Number",z=o.Number,N=z.prototype,C=f(v(N))==w,I=function(t){var n,e,r,o,l,c,d,code,f=m(t,!1);if("string"==typeof f&&f.length>2)if(43===(n=(f=S(f)).charCodeAt(0))||45===n){if(88===(e=f.charCodeAt(2))||120===e)return NaN}else if(48===n){switch(f.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+f}for(c=(l=f.slice(2)).length,d=0;d<c;d++)if((code=l.charCodeAt(d))<48||code>o)return NaN;return parseInt(l,r)}return+f};if(l(w,!z(" 0o1")||!z("0b1")||z("+0x1"))){for(var E,A=function(t){var n=arguments.length<1?0:t,e=this;return e instanceof A&&(C?h((function(){N.valueOf.call(e)})):f(e)!=w)?_(new z(I(n)),e,A):I(n)},M=r?x(z):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),O=0;M.length>O;O++)d(z,E=M[O])&&!d(A,E)&&k(A,E,y(z,E));A.prototype=N,N.constructor=A,c(o,w,A)}},559:function(t,n,e){var content=e(569);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(61).default)("53e65934",content,!0,{sourceMap:!1})},562:function(t,n,e){"use strict";e.r(n);var r=e(0).a.extend({props:{title:{type:String,default:"Page title"}},data:function(){return{}}}),o=(e(568),e(49)),component=Object(o.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"page-title"},[e("h2",[t._t("default")],2),t._v(" "),t._t("subtitle")],2)}),[],!1,null,null,null);n.default=component.exports},568:function(t,n,e){"use strict";e(559)},569:function(t,n,e){var r=e(60)((function(i){return i[1]}));r.push([t.i,'.page-title{\n  margin-bottom:4rem;\n}\n.page-title h2{\n    margin-top:0.75rem;\n    font-size:1.5rem;\n    line-height:2rem;\n    font-weight:700\n}\n@media (min-width: 1024px){\n.page-title h2{\n      font-size:1.875rem;\n      line-height:2.25rem\n}\n}\n.page-title h2{\n    font-family:"Noto Sans Display"\n}\n.page-title h5{\n    font-size:1rem;\n    line-height:1.5rem\n}\n@media (min-width: 1024px){\n.page-title h5{\n      font-size:1.125rem;\n      line-height:1.75rem\n}\n}\n.page-title h5{\n    font-family:"Noto Sans"\n}',""]),r.locals={},t.exports=r},585:function(t,n,e){var content=e(601);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(61).default)("34e91548",content,!0,{sourceMap:!1})},586:function(t,n,e){var content=e(606);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(61).default)("5b5b33c2",content,!0,{sourceMap:!1})},587:function(t,n,e){var content=e(608);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(61).default)("07276e48",content,!0,{sourceMap:!1})},600:function(t,n,e){"use strict";e(585)},601:function(t,n,e){var r=e(60)((function(i){return i[1]}));r.push([t.i,".dio__steps{\n  display:block\n}\n.dio__steps--vertical{\n  position:relative;\n}\n.dio__steps--vertical .dio__stem{\n    position:absolute;\n    display:block;\n    top:0px;\n    bottom:0px;\n    z-index:0;\n    width:0.5rem;\n    border-left-width:2px;\n    border-style:solid;\n    border-color:var(--shade-200);\n}\n.dio__steps--vertical .dio__stem--progress{\n      position:absolute;\n      display:block;\n      z-index:10;\n      width:0.5rem;\n      border-left-width:2px;\n      transition-property:all;\n      transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);\n      transition-duration:150ms;\n      transition-duration:300ms;\n      transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);\n      border-color:var(--purple)\n}",""]),r.locals={},t.exports=r},602:function(t,n,e){"use strict";var r=e(2),o=e(603);r({target:"String",proto:!0,forced:e(604)("anchor")},{anchor:function(t){return o(this,"a","name",t)}})},603:function(t,n,e){var r=e(35),o=/"/g;t.exports=function(t,n,e,l){var c=String(r(t)),d="<"+n;return""!==e&&(d+=" "+e+'="'+String(l).replace(o,"&quot;")+'"'),d+">"+c+"</"+n+">"}},604:function(t,n,e){var r=e(6);t.exports=function(t){return r((function(){var n=""[t]('"');return n!==n.toLowerCase()||n.split('"').length>3}))}},605:function(t,n,e){"use strict";e(586)},606:function(t,n,e){var r=e(60)((function(i){return i[1]}));r.push([t.i,'.dio__step{\n  position:relative;\n  z-index:20;\n  margin-top:2rem;\n  margin-bottom:2rem;\n  display:flex;\n  -webkit-user-select:none;\n     -moz-user-select:none;\n      -ms-user-select:none;\n          user-select:none;\n  --tw-bg-opacity:1;\n  background-color:rgba(255, 255, 255, var(--tw-bg-opacity));\n  font-family:"Noto Sans Display";\n  color:var(--shade-500)\n}\n.dio__step-anchor{\n  margin-right:1rem;\n  border-radius:9999px;\n  border-width:2px;\n  border-style:solid;\n  text-align:center;\n  transition-property:all;\n  transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration:150ms;\n  transition-delay:100ms;\n  transition-duration:200ms;\n  transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)\n}\n.dio__step-link{\n  display:flex;\n  cursor:default;\n  flex-direction:row;\n  align-items:center\n}\n.dio__step-link.nuxt-link-active{\n  font-weight:700;\n  color:var(--dark-purple);\n}\n.dio__step-link.nuxt-link-active .dio__step-anchor{\n    color:var(--white);\n    background:var(--purple);\n    border-color:var(--purple)\n}\n.dio__step-link--completed{\n    color:var(--dark-purple);\n    cursor:pointer;\n}\n.dio__step-link--completed .dio__step-anchor{\n      background:var(--white);\n      border-color:var(--purple);\n      color:var(--purple)\n}',""]),r.locals={},t.exports=r},607:function(t,n,e){"use strict";e(587)},608:function(t,n,e){var r=e(60)((function(i){return i[1]}));r.push([t.i,".dio__link{\n  cursor:pointer;\n  border-radius:9999px;\n  padding:0.5rem;\n  padding-right:1rem;\n  padding-left:1rem;\n  border-radius:9999px;\n  border-width:1px;\n  border-style:solid\n}\n.dio__link:focus, .dio__link:focus-within{\n  border-radius:9999px\n}\n.dio__link:focus,.dio__link:focus-within{\n  outline:none\n}\n.dio__link-solid{\n    background:var(--purple);\n    color:var(--white)\n}\n.dio__link-transparent{\n    background-color:transparent;\n    color:var(--purple);\n    border-color:var(--purple)\n}\n.dio__link-muted{\n    background-color:transparent;\n    color:var(--shade-700);\n    border-color:var(--shade-700)\n}\n.dio__link-small{\n    padding:0.25rem;\n    padding-right:0.75rem;\n    padding-left:0.75rem;\n    font-size:0.875rem;\n    line-height:1.25rem\n}",""]),r.locals={},t.exports=r},623:function(t,n,e){"use strict";e.r(n);e(558),e(137);var r=e(0),o=e(78),l=r.a.extend({name:"ProgressSteps",props:{orientation:{type:String,default:"vertical"},anchorSize:{type:Number,default:40},steps:{type:Array}},data:function(){return{}},mounted:function(){},computed:{activeStep:function(){return o.store.getters["policymaker/getCurrentStep"]},isVertical:function(){return"vertical"===this.orientation.toLowerCase().trim()},stemStyle:function(){return{marginLeft:"".concat(this.anchorSize/2-1,"px")}},numSteps:function(){return this.steps.length},progressStyle:function(){var t=this;return{height:"".concat((t.activeStep-1)/(t.numSteps-1)*100,"%"),marginLeft:"".concat(t.anchorSize/2-1,"px")}}},methods:{setActiveStep:function(t){this.step!==this.activeStep&&o.store.commit("policymaker/setStep",t)},isStepDisabled:function(t){return t>=this.activeStep},isStepCompleted:function(t){return t<this.activeStep}}}),c=(e(600),e(49)),component=Object(c.a)(l,(function(){var t,n=this,e=n.$createElement,r=n._self._c||e;return r("div",{staticClass:"dio__steps",class:(t={},t["dio__steps--"+n.orientation]=!0,t)},[r("div",{staticClass:"dio__stem",style:n.stemStyle}),n._v(" "),r("div",{staticClass:"dio__stem--progress",style:n.progressStyle}),n._v(" "),r("div",{ref:"steps"},n._l(n.steps,(function(t,e){return r("Progress-Step",{key:e,attrs:{index:e+1,active:!1,completed:n.isStepCompleted(e),size:40,disabled:n.isStepDisabled(e+1),route:t.route},on:{changeStep:n.setActiveStep}},[n._v(n._s(t.name))])})),1)])}),[],!1,null,null,null);n.default=component.exports},624:function(t,n,e){"use strict";e.r(n);e(558),e(602);var r=e(0).a.extend({name:"ProgressStep",props:{index:{type:Number},route:{type:String},active:{type:Boolean},completed:{type:Boolean},size:{type:Number,default:40},disabled:{type:Boolean,default:!1}},data:function(){return{anchor:{localSize:40}}},mounted:function(){this.anchor.localSize=this.size},computed:{anchorStyle:function(){var t=this;return{width:"".concat(t.anchor.localSize,"px"),height:"".concat(t.anchor.localSize,"px"),lineHeight:"".concat(t.anchor.localSize-4,"px")}}},methods:{changeStep:function(){var t=this;t.disabled||t.$emit("changeStep",t.index)}}}),o=(e(605),e(49)),component=Object(o.a)(r,(function(){var t,n,e=this,r=e.$createElement,o=e._self._c||r;return o("div",{staticClass:"dio__step"},[o("NuxtLink",{staticClass:"dio__step-link",class:(t={},t["dio__step-link--completed"]=e.completed,t),attrs:{to:e.route,event:e.disabled?"":"click"},nativeOn:{click:function(t){return e.changeStep.apply(null,arguments)}}},[o("div",{staticClass:"dio__step-anchor",class:(n={},n["dio__step-anchor--active"]=e.active,n["dio__step-anchor--completed"]=e.completed,n),style:e.anchorStyle},[e._v("\n            "+e._s(e.index)+"\n        ")]),e._v(" "),e._t("default")],2)],1)}),[],!1,null,null,null);n.default=component.exports},625:function(t,n,e){"use strict";e.r(n);var r=e(0).a.extend({props:{route:{type:String,required:!0},theme:{type:String,default:"solid"},size:{type:String,default:"normal"}},methods:{click:function(){this.$emit("click")}}}),o=(e(607),e(49)),component=Object(o.a)(r,(function(){var t,n=this,e=n.$createElement;return(n._self._c||e)("NuxtLink",{staticClass:"dio__link dio__focusable",class:(t={},t["dio__link-"+n.theme]=!0,t["dio__link-"+n.size]=!0,t),attrs:{to:n.route}},[n._t("default")],2)}),[],!1,null,null,null);n.default=component.exports},682:function(t,n,e){"use strict";e.r(n);var r=e(3),o=(e(33),e(0)),l=e(623),c=e(624),d=e(562),f=e(625),_=e(78),m=o.a.extend({layout:"policymaker-v2",components:{ProgressSteps:l.default,ProgressStep:c.default,PageTitle:d.default,DioLink:f.default},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function n(){var e,r,content;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.$content,t.params,r=t.route,n.next=3,e(r.fullPath).fetch();case 3:return content=n.sent,n.abrupt("return",{content:content});case 5:case"end":return n.stop()}}),n)})))()},data:function(){return{}},computed:{},methods:{goto:function(t){return _.store.dispatch("policymaker/gotoStep",t)}},watch:{}}),h=e(49),component=Object(h.a)(m,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("page-title",[t._v("\n        Introduction\n    ")]),t._v(" "),e("nuxt-content",{attrs:{document:t.content}}),t._v(" "),e("div",{staticClass:"dio__action-bar"},[e("dio-button",{on:{click:function(n){return t.goto(2)}}},[t._v("Begin")])],1)],1)}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{PageTitle:e(562).default,DioButton:e(554).default})}}]);