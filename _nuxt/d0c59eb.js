(window.webpackJsonp=window.webpackJsonp||[]).push([[39,11,15,16,17,22],{288:function(t,e,r){var content=r(297);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(74).default)("38758af3",content,!0,{sourceMap:!1})},291:function(t,e,r){t.exports=r.p+"img/back_arrow.a43e826.png"},292:function(t,e,r){t.exports=r.p+"img/ninho_logo.da86edf.png"},293:function(t,e,r){t.exports=r.p+"img/sanofi_logo.bc69420.png"},294:function(t,e,r){t.exports=r.p+"img/pampers_logo.7e38fe1.png"},295:function(t,e,r){t.exports=r.p+"img/clamed_logo.7fd33f7.png"},296:function(t,e,r){"use strict";r(288)},297:function(t,e,r){var o=r(73)(!1);o.push([t.i,".back-arrow[data-v-7b27363b]{left:10px;top:5px}.back-arrow[data-v-7b27363b],.clamed-logo[data-v-7b27363b]{position:relative;cursor:pointer}.clamed-logo[data-v-7b27363b]{height:85%}.sanofi-logo[data-v-7b27363b]{width:calc(281.62px/var(--horiz));height:calc(60px/var(--vert));margin-left:calc(400px/var(--horiz))}.ninho-logo[data-v-7b27363b]{margin-top:50px;margin-left:50px}.pampers-logo[data-v-7b27363b]{width:calc(220px/var(--horiz));height:calc(110px/var(--vert));margin-left:calc(435px/var(--horiz))}",""]),t.exports=o},298:function(t,e,r){"use strict";r.r(e);var o={name:"Topbar",props:{dorflex:{type:Boolean,default:!1},ninho:{type:Boolean,default:!1},pampers:{type:Boolean,default:!1},cssVars:{type:Object,default:null}},methods:{back:function(){}}},n=(r(296),r(75)),c=r(99),l=r.n(c),v=r(708),d=r(675),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app-bar",{attrs:{color:"#00CFB4",fixed:"",app:"",flat:"",height:"95px",elevation:"4"}},[o("v-app-bar-nav-icon",{on:{click:function(e){t.drawer=!0}}},[o("img",{staticClass:"back-arrow",style:"width: 55px; height: 47px",attrs:{src:r(291)},on:{click:function(e){return t.$router.back()}}})]),t._v(" "),t.ninho?o("img",{staticClass:"ninho-logo",style:"width: 120px; height: 120px;",attrs:{src:r(292)}}):t._e(),t._v(" "),t.dorflex?o("img",{staticClass:"sanofi-logo",style:t.cssVars,attrs:{src:r(293)}}):t._e(),t._v(" "),t.pampers?o("img",{staticClass:"pampers-logo",style:t.cssVars,attrs:{src:r(294)}}):t._e(),t._v(" "),o("img",{staticClass:"clamed-logo ml-auto",attrs:{src:r(295)},on:{click:function(e){return t.$router.push("/")}}})],1)}),[],!1,null,"7b27363b",null);e.default=component.exports;l()(component,{VAppBar:v.a,VAppBarNavIcon:d.a})},300:function(t,e,r){"use strict";var o=r(2),n=r(102),c=r(44),l=r(77),v=o.TypeError,d=function(t,e,source,r,o,f,h,m){for(var element,x,_=o,y=0,w=!!h&&l(h,m);y<r;){if(y in source){if(element=w?w(source[y],y,e):source[y],f>0&&n(element))x=c(element),_=d(t,e,element,x,_,f-1)-1;else{if(_>=9007199254740991)throw v("Exceed the acceptable array length");t[_]=element}_++}y++}return _};t.exports=d},313:function(t,e,r){"use strict";var o=r(4),n=r(210);o({target:"String",proto:!0,forced:r(211)("fixed")},{fixed:function(){return n(this,"tt","","")}})},314:function(t,e,r){"use strict";var o=r(4),n=r(300),c=r(33),l=r(44),v=r(64),d=r(125);o({target:"Array",proto:!0},{flat:function(){var t=arguments.length?arguments[0]:void 0,e=c(this),r=l(e),o=d(e,0);return o.length=n(o,e,e,r,0,void 0===t?1:v(t)),o}})},315:function(t,e,r){r(101)("flat")},316:function(t,e,r){"use strict";var o=r(4),n=r(210);o({target:"String",proto:!0,forced:r(211)("small")},{small:function(){return n(this,"small","","")}})},332:function(t,e,r){"use strict";var o=r(4),n=r(210);o({target:"String",proto:!0,forced:r(211)("link")},{link:function(t){return n(this,"a","href",t)}})},334:function(t,e,r){"use strict";r(36),r(7),r(32),r(76),r(41),r(331),r(299),r(152),r(100);var o=r(1);var n,c=r(289);e.a=(n="container",o.a.extend({name:"v-".concat(n),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(t,e){var r=e.props,data=e.data,o=e.children;data.staticClass="".concat(n," ").concat(data.staticClass||"").trim();var c=data.attrs;if(c){data.attrs={};var l=Object.keys(c).filter((function(t){if("slot"===t)return!1;var e=c[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}));l.length&&(data.staticClass+=" ".concat(l.join(" ")))}return r.id&&(data.domProps=data.domProps||{},data.domProps.id=r.id),t(r.tag,data,o)}})).extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var r,o=e.props,data=e.data,n=e.children,l=data.attrs;return l&&(data.attrs={},r=Object.keys(l).filter((function(t){if("slot"===t)return!1;var e=l[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}))),o.id&&(data.domProps=data.domProps||{},data.domProps.id=o.id),t(o.tag,Object(c.a)(data,{staticClass:"container",class:Array({"container--fluid":o.fluid}).concat(r||[])}),n)}})},339:function(t,e,r){"use strict";r(23),r(36),r(42),r(43);var o=r(11),n=(r(7),r(62),r(63),r(41),r(32),r(20),r(46),r(317),r(39),r(318),r(319),r(320),r(321),r(322),r(323),r(324),r(325),r(326),r(327),r(328),r(329),r(330),r(40),r(29),r(299),r(1)),c=r(289),l=r(15);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f=["sm","md","lg","xl"],h=["start","end","center"];function m(t,e){return f.reduce((function(r,o){return r[t+Object(l.u)(o)]=e(),r}),{})}var x=function(t){return[].concat(h,["baseline","stretch"]).includes(t)},_=m("align",(function(){return{type:String,default:null,validator:x}})),y=function(t){return[].concat(h,["space-between","space-around"]).includes(t)},w=m("justify",(function(){return{type:String,default:null,validator:y}})),k=function(t){return[].concat(h,["space-between","space-around","stretch"]).includes(t)},z=m("alignContent",(function(){return{type:String,default:null,validator:k}})),C={align:Object.keys(_),justify:Object.keys(w),alignContent:Object.keys(z)},A={align:"align",justify:"justify",alignContent:"align-content"};function O(t,e,r){var o=A[t];if(null!=r){if(e){var n=e.replace(t,"");o+="-".concat(n)}return(o+="-".concat(r)).toLowerCase()}}var j=new Map;e.a=n.a.extend({name:"v-row",functional:!0,props:d(d(d({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:x}},_),{},{justify:{type:String,default:null,validator:y}},w),{},{alignContent:{type:String,default:null,validator:k}},z),render:function(t,e){var r=e.props,data=e.data,n=e.children,l="";for(var v in r)l+=String(r[v]);var d=j.get(l);return d||function(){var t,e;for(e in d=[],C)C[e].forEach((function(t){var o=r[t],n=O(e,t,o);n&&d.push(n)}));d.push((t={"no-gutters":r.noGutters,"row--dense":r.dense},Object(o.a)(t,"align-".concat(r.align),r.align),Object(o.a)(t,"justify-".concat(r.justify),r.justify),Object(o.a)(t,"align-content-".concat(r.alignContent),r.alignContent),t)),j.set(l,d)}(),t(r.tag,Object(c.a)(data,{staticClass:"row",class:d}),n)}})},354:function(t,e,r){var content=r(382);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(74).default)("11c3eef2",content,!0,{sourceMap:!1})},368:function(t,e,r){t.exports=r.p+"img/ninho_fases_3+.cce9dc4.svg"},369:function(t,e,r){t.exports=r.p+"img/ninho_fases_3_pack.7a3dc3c.png"},380:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAABAUlEQVR4Xu3YMQoCQQwF0L2FYJVLeQXBxhOI42VsPYKewFawygn0CjGDhe6fEbYyP7AfUvmLRzLbOAwTYmYrn6fP1Ufw9/A46mKf3H2W2AmNgzZfwBplRO4yIuu5BXuhcdA+A7K3Sbpz4yaVEYmbTIFM8yYFe6H5gaQ/t2ZBCvZC00GmeZOCvdB0kGpJ3mQKpGAvNB3kCTuhcVAB4BE7YXHMAXA3YzmxtZuruAX2QmLt5pQJV8Y2rs31cIK9kFh7VipcAZwa0Vlxc1S4MrbNH8S0WHtWKlwBnBrRWXFzVLgyts0fxLRYe1Yq3BZwaixnrXHMmRZX46C1z8Pe//b/FfcCBjpgYEF5w5kAAAAASUVORK5CYII="},381:function(t,e,r){"use strict";r(354)},382:function(t,e,r){var o=r(73)(!1);o.push([t.i,".button-text[data-v-4a1707eb]{position:relative;width:calc(200px/var(--horiz));height:calc(38px/var(--vert));left:calc(53px/var(--horiz));font-family:Baloo Bhai 2;font-style:normal;font-weight:500;font-size:calc(24px/var(--horiz));line-height:calc(38px/var(--vert));color:#fff}.button-bg[data-v-4a1707eb]{width:calc(281px/var(--horiz));height:calc(40px/var(--vert));background:#fff;border-radius:15px}.button[data-v-4a1707eb]{position:absolute;width:calc(278px/var(--horiz));height:calc(37px/var(--vert));background:var(--color);border-radius:15px;cursor:pointer}.arrow[data-v-4a1707eb]{position:relative;width:calc(20px/var(--horiz));height:calc(20px/var(--vert));left:calc(250px/var(--horiz));top:calc(-33px/var(--vert));transform:rotate(var(--rot));transition-duration:.5s}",""]),t.exports=o},386:function(t,e,r){var content=r(438);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(74).default)("d6b309ce",content,!0,{sourceMap:!1})},387:function(t,e,r){var content=r(443);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(74).default)("1fcda9aa",content,!0,{sourceMap:!1})},388:function(t,e,r){var content=r(449);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(74).default)("04591317",content,!0,{sourceMap:!1})},401:function(t,e,r){"use strict";r.r(e);var o={name:"DetailButton",props:{text:{type:String},defaultColor:{type:String},cssVars:{type:Object},rotation:{type:Object},enabled:{type:Boolean,default:!1}},data:function(){return{pressed:!1}},watch:{enabled:function(){this.enabled||(this.pull(),this.pressed=!1)}},methods:{state:function(){this.$emit("toggle"),this.pressed?this.pressed=!1:this.pressed=!0,this.pressed?this.push():this.pull()},push:function(){this.$refs.btn.style.background="rgba(180, 180, 180, 0.5)",this.$refs.btn.style.boxShadow="inset 0px 4px 4px rgba(0, 0, 0, 0.25)"},pull:function(){this.$refs.btn.style.background=this.defaultColor,this.$refs.btn.style.boxShadow="none"}}},n=(r(381),r(75)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"button-bg"},[o("div",{ref:"btn",staticClass:"button hc-button",style:{color:t.defaultColor},on:{click:t.state}},[o("div",{staticClass:"button-text"},[t._v(t._s(t.text))]),t._v(" "),o("img",{staticClass:"arrow",style:t.rotation,attrs:{src:r(380)}})])])}),[],!1,null,"4a1707eb",null);e.default=component.exports},432:function(t,e,r){t.exports=r.p+"img/imunonutrientes.43868e8.png"},433:function(t,e,r){t.exports=r.p+"img/fibras.714454d.png"},434:function(t,e,r){t.exports=r.p+"img/zero_sugar.1170872.png"},435:function(t,e,r){t.exports=r.p+"img/calcio.82caf8a.png"},436:function(t,e,r){t.exports=r.p+"img/ferro.de679f8.png"},437:function(t,e,r){"use strict";r(386)},438:function(t,e,r){var o=r(73)(!1);o.push([t.i,".title__conteudo[data-v-19c4da19]{position:absolute;width:calc(500px/var(--horiz));height:calc(57px/var(--vert));left:calc(615px/var(--horiz));top:calc(10px/var(--vert));font-family:Baloo Bhai 2;font-style:normal;font-weight:600;font-size:calc(36px/var(--horiz));line-height:calc(57px/var(--vert));text-align:justify;color:#1a5632}.imunonutrientes[data-v-19c4da19]{left:calc(500px/var(--horiz))}.fibras[data-v-19c4da19],.imunonutrientes[data-v-19c4da19]{position:absolute;width:calc(230px/var(--horiz));height:calc(245px/var(--vert));top:calc(60px/var(--vert));background:hsla(0,0%,100%,.5);border-radius:20px}.fibras[data-v-19c4da19]{left:calc(750px/var(--horiz))}.zero-sugar[data-v-19c4da19]{position:absolute;width:calc(230px/var(--horiz));height:calc(245px/var(--vert));left:calc(1000px/var(--horiz));top:calc(60px/var(--vert));background:hsla(0,0%,100%,.5);border-radius:20px}.calcio[data-v-19c4da19]{left:calc(635px/var(--horiz))}.calcio[data-v-19c4da19],.ferro[data-v-19c4da19]{position:absolute;width:calc(230px/var(--horiz));height:calc(230px/var(--vert));top:calc(320px/var(--vert));background:hsla(0,0%,100%,.5);border-radius:20px}.ferro[data-v-19c4da19]{left:calc(885px/var(--horiz))}.--info[data-v-19c4da19]{position:absolute;width:calc(730px/var(--horiz));height:calc(22px/var(--vert));left:calc(476px/var(--horiz));top:calc(550px/var(--vert));font-family:Baloo Bhai 2;font-style:normal;font-weight:600;font-size:calc(14px/var(--horiz));line-height:calc(22px/var(--vert));text-align:justify;color:#777}",""]),t.exports=o},439:function(t,e,r){t.exports=r.p+"img/modo_1.c735769.png"},440:function(t,e,r){t.exports=r.p+"img/modo_2.a1a3da1.png"},441:function(t,e,r){t.exports=r.p+"img/modo_3.ab8e3c1.png"},442:function(t,e,r){"use strict";r(387)},443:function(t,e,r){var o=r(73)(!1);o.push([t.i,".modo__1[data-v-2d54b8e4]{left:calc(420px/var(--horiz))}.modo__1[data-v-2d54b8e4],.modo__2[data-v-2d54b8e4]{position:absolute;width:calc(249px/var(--horiz));height:calc(215px/var(--vert));top:calc(180px/var(--vert));background:hsla(0,0%,100%,.5);border-radius:20px}.modo__2[data-v-2d54b8e4]{left:calc(712px/var(--horiz))}.modo__3[data-v-2d54b8e4]{position:absolute;width:calc(249px/var(--horiz));height:calc(215px/var(--vert));left:calc(1004px/var(--horiz));top:calc(180px/var(--vert));background:hsla(0,0%,100%,.5);border-radius:20px}.recommendation[data-v-2d54b8e4]{width:calc(272px/var(--horiz));height:calc(29px/var(--vert));left:calc(420px/var(--horiz));top:calc(405px/var(--vert));font-size:calc(18px/var(--horiz));line-height:calc(29px/var(--vert));color:#1e5633}.plus[data-v-2d54b8e4],.recommendation[data-v-2d54b8e4]{position:absolute;font-family:Baloo Bhai 2;font-style:normal;font-weight:400}.plus[data-v-2d54b8e4]{left:calc(670px/var(--horiz))}.arrow[data-v-2d54b8e4],.plus[data-v-2d54b8e4]{width:calc(40px/var(--horiz));height:calc(115px/var(--vert));top:calc(233px/var(--vert));font-size:calc(72px/var(--horiz));line-height:calc(115px/var(--vert));text-align:justify;color:#1a5632}.arrow[data-v-2d54b8e4]{position:absolute;left:calc(970px/var(--horiz));font-family:Baloo Bhai 2;font-style:normal;font-weight:400}",""]),t.exports=o},444:function(t,e,r){t.exports=r.p+"img/lata_400g.cb4a865.png"},445:function(t,e,r){t.exports=r.p+"img/lata_400g_label.9b3528f.png"},446:function(t,e,r){t.exports=r.p+"img/lata_800g.3a18672.png"},447:function(t,e,r){t.exports=r.p+"img/lata_800g_label.03f63d4.png"},448:function(t,e,r){"use strict";r(388)},449:function(t,e,r){var o=r(73)(!1);o.push([t.i,".pack__1[data-v-24517eb2]{position:absolute;width:calc(152.79px/var(--horiz));height:calc(216px/var(--vert));left:calc(324px/var(--horiz));top:calc(250px/var(--vert))}.pack__2[data-v-24517eb2]{position:absolute;width:calc(204.84px/var(--horiz));height:calc(290px/var(--vert));left:calc(751px/var(--horiz));top:calc(180px/var(--vert))}.label-pack__1[data-v-24517eb2]{left:calc(328px/var(--horiz))}.label-pack__1[data-v-24517eb2],.label-pack__2[data-v-24517eb2]{position:absolute;width:calc(144px/var(--horiz));height:calc(38px/var(--vert));top:calc(500px/var(--vert))}.label-pack__2[data-v-24517eb2]{left:calc(781px/var(--horiz))}",""]),t.exports=o},523:function(t,e,r){var content=r(600);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(74).default)("6998cf0c",content,!0,{sourceMap:!1})},542:function(t,e,r){"use strict";r.r(e);var o={name:"Conteudo",props:{cssVars:{type:Object}}},n=(r(437),r(75)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{style:t.cssVars},[o("span",{staticClass:"title__conteudo"},[t._v("1 Copinho de 200ml contém:")]),t._v(" "),o("img",{staticClass:"imunonutrientes",attrs:{src:r(432)}}),t._v(" "),o("img",{staticClass:"fibras",attrs:{src:r(433)}}),t._v(" "),o("img",{staticClass:"zero-sugar",attrs:{src:r(434)}}),t._v(" "),o("img",{staticClass:"calcio",attrs:{src:r(435)}}),t._v(" "),o("img",{staticClass:"ferro",attrs:{src:r(436)}}),t._v(" "),o("span",{staticClass:"--info"},[t._v("*Os imunonutrientes são vitaminas e minerais que atuam no organismo ajudando a fortalecer as defesas naturais do corpo. Alguns exemplos são as Vitaminas A, C e D, Ferro, Zinco e Selênio.")])])}),[],!1,null,"19c4da19",null);e.default=component.exports},543:function(t,e,r){"use strict";r.r(e);var o={name:"ModoPreparo",props:{cssVars:{type:Object}}},n=(r(442),r(75)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{style:t.cssVars},[o("img",{staticClass:"modo__1",attrs:{src:r(439)}}),t._v(" "),o("span",{staticClass:"plus"},[t._v("+")]),t._v(" "),o("img",{staticClass:"modo__2",attrs:{src:r(440)}}),t._v(" "),o("span",{staticClass:"arrow"},[t._v(">")]),t._v(" "),o("img",{staticClass:"modo__3",attrs:{src:r(441)}}),t._v(" "),o("span",{staticClass:"recommendation"},[t._v("*Recomendação: Até 3 copos ao dia.")])])}),[],!1,null,"2d54b8e4",null);e.default=component.exports},544:function(t,e,r){"use strict";r.r(e);var o={name:"Embalagens",props:{cssVars:{type:Object}}},n=(r(448),r(75)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{style:t.cssVars},[o("img",{staticClass:"pack__1",attrs:{src:r(444)}}),t._v(" "),o("img",{staticClass:"label-pack__1",attrs:{src:r(445)}}),t._v(" "),o("img",{staticClass:"pack__2",attrs:{src:r(446)}}),t._v(" "),o("img",{staticClass:"label-pack__2",attrs:{src:r(447)}})])}),[],!1,null,"24517eb2",null);e.default=component.exports},599:function(t,e,r){"use strict";r(523)},600:function(t,e,r){var o=r(73),n=r(213),c=r(601),l=o(!1),v=n(c);l.push([t.i,".title--1[data-v-88345708]{left:calc(480px/var(--horiz));-webkit-animation:title-down-data-v-88345708 .5s;animation:title-down-data-v-88345708 .5s;-webkit-animation-iteration-count:1;animation-iteration-count:1}.title--1[data-v-88345708],.title--2[data-v-88345708]{position:absolute;width:calc(320px/var(--horiz));height:calc(77px/var(--vert));top:calc(70px/var(--vert))}.title--2[data-v-88345708]{left:calc(50px/var(--horiz))}.title--3[data-v-88345708]{position:absolute;width:calc(320px/var(--horiz));height:calc(77px/var(--vert));left:calc(480px/var(--horiz));top:calc(70px/var(--vert))}.pack-fases__1--1[data-v-88345708]{-webkit-animation:slide-to-left-data-v-88345708 .5s;animation:slide-to-left-data-v-88345708 .5s;-webkit-animation-iteration-count:1;animation-iteration-count:1}.pack-fases__1--1[data-v-88345708],.pack-fases__1--3[data-v-88345708]{position:absolute;width:calc(420px/var(--horiz));height:calc(420px/var(--vert));left:calc(84px/var(--horiz));top:calc(60px/var(--vert))}.pack-fases__1--2[data-v-88345708]{position:absolute;left:calc(30px/var(--horiz));top:calc(150px/var(--vert));width:calc(380px/var(--horiz));height:calc(380px/var(--vert))}.slide-left-shrink-enter-active[data-v-88345708]{animation:slide-left-shrink-data-v-88345708 reverse;-webkit-animation-duration:.3s;animation-duration:.3s}.slide-left-shrink-leave-active[data-v-88345708]{-webkit-animation:slide-left-shrink-data-v-88345708;animation:slide-left-shrink-data-v-88345708;-webkit-animation-duration:.3s;animation-duration:.3s}.text-left-enter-active[data-v-88345708]{-webkit-animation:slide-from-left-corner-data-v-88345708;animation:slide-from-left-corner-data-v-88345708;-webkit-animation-duration:.3s;animation-duration:.3s}.text-left-leave-active[data-v-88345708]{animation:slide-from-left-corner-data-v-88345708 reverse;-webkit-animation-duration:.3s;animation-duration:.3s}.text-up-enter-active[data-v-88345708]{animation:slide-to-top-data-v-88345708 reverse;animation-display:.5s}.text-up-leave-active[data-v-88345708]{-webkit-animation:slide-to-top-data-v-88345708;animation:slide-to-top-data-v-88345708;animation-display:.5s}.subtitle--1[data-v-88345708]{left:calc(480px/var(--horiz))}.subtitle--1[data-v-88345708],.subtitle--2[data-v-88345708]{position:absolute;width:calc(200px/var(--horiz));height:calc(38px/var(--vert));top:calc(130px/var(--vert));font-family:Baloo Bhai 2;font-style:normal;font-weight:500;font-size:calc(24px/var(--horiz));line-height:calc(38px/var(--vert));color:var(--color)}.subtitle--2[data-v-88345708]{left:calc(50px/var(--horiz))}.subtitle--3[data-v-88345708]{width:calc(200px/var(--horiz));height:calc(38px/var(--vert));top:calc(130px/var(--vert));color:var(--color)}.body[data-v-88345708],.subtitle--3[data-v-88345708]{position:absolute;left:calc(480px/var(--horiz));font-family:Baloo Bhai 2;font-style:normal;font-weight:500;font-size:calc(24px/var(--horiz));line-height:calc(38px/var(--vert))}.body[data-v-88345708]{width:calc(750px/var(--horiz));height:calc(266px/var(--vert));top:calc(180px/var(--vert));text-align:justify;color:#777;-webkit-animation:fade-data-v-88345708 .5s;animation:fade-data-v-88345708 .5s}.footer[data-v-88345708]{font-family:Baloo Bhai 2;font-style:normal;font-weight:600;font-size:calc(16px/var(--horiz));line-height:calc(29px/var(--vert));color:#777}.fade-enter-active[data-v-88345708]{-webkit-animation:fade-data-v-88345708 .2s ease-in;animation:fade-data-v-88345708 .2s ease-in}.fade-leave-active[data-v-88345708]{-webkit-animation:fade-data-v-88345708 .2s ease-out reverse;animation:fade-data-v-88345708 .2s ease-out reverse}@-webkit-keyframes title-down-data-v-88345708{0%{left:calc(420px/var(--horiz));top:calc(20px/var(--vert));width:35%}to{left:calc(480px/var(--horiz));top:calc(70px/var(--vert))}}@keyframes title-down-data-v-88345708{0%{left:calc(420px/var(--horiz));top:calc(20px/var(--vert));width:35%}to{left:calc(480px/var(--horiz));top:calc(70px/var(--vert))}}@-webkit-keyframes fade-data-v-88345708{0%{opacity:0}to{opacity:1}}@keyframes fade-data-v-88345708{0%{opacity:0}to{opacity:1}}@-webkit-keyframes slide-to-left-data-v-88345708{0%{left:calc(415px/var(--horiz));top:calc(80px/var(--vert))}to{left:calc(84px/var(--horiz));top:calc(60px/var(--vert))}}@keyframes slide-to-left-data-v-88345708{0%{left:calc(415px/var(--horiz));top:calc(80px/var(--vert))}to{left:calc(84px/var(--horiz));top:calc(60px/var(--vert))}}@-webkit-keyframes slide-left-shrink-data-v-88345708{to{width:calc(420px/var(--horiz));height:calc(420px/var(--vert));left:calc(84px/var(--horiz));top:calc(60px/var(--vert))}}@keyframes slide-left-shrink-data-v-88345708{to{width:calc(420px/var(--horiz));height:calc(420px/var(--vert));left:calc(84px/var(--horiz));top:calc(60px/var(--vert))}}@-webkit-keyframes slide-to-top-data-v-88345708{to{top:calc(80px/var(--horiz))}}@keyframes slide-to-top-data-v-88345708{to{top:calc(80px/var(--horiz))}}@-webkit-keyframes slide-from-left-corner-data-v-88345708{0%{left:calc(480px/var(--horiz))}}@keyframes slide-from-left-corner-data-v-88345708{0%{left:calc(480px/var(--horiz))}}.decoration[data-v-88345708]{position:absolute;width:calc(97px/var(--horiz));height:calc(77px/var(--vert));left:calc(95px/var(--horiz));top:calc(80px/var(--vert));background:url("+v+");background-size:100% 100%;transform:rotate(-18.48deg);-webkit-animation:fade-data-v-88345708 1s;animation:fade-data-v-88345708 1s}",""]),t.exports=l},601:function(t,e,r){t.exports=r.p+"img/splash.6ea311c.png"},693:function(t,e,r){"use strict";r.r(e);r(104);var o=r(401),n=r(542),c=r(543),l=r(544),v={name:"Index",components:{DetailButton:o.default,Conteudo:n.default,Embalagens:l.default,ModoPreparo:c.default},data:function(){return{conteudo:!1,preparo:!1,embalagens:!1,repeat:!0}},computed:{cssVars:function(){return{"--color":"#1A5632","--horiz":1280/this.$vuetify.breakpoint.width,"--vert":800/this.$vuetify.breakpoint.height}},conteudoRotation:function(){return this.conteudo?{"--rot":"-90deg"}:{"--rot":"0deg"}},preparoRotation:function(){return this.preparo?{"--rot":"-90deg"}:{"--rot":"0deg"}},embalagensRotation:function(){return this.embalagens?{"--rot":"-90deg"}:{"--rot":"0deg"}}},methods:{toggleConteudo:function(){this.conteudo?this.conteudo=!1:this.conteudo=!0,this.preparo=!1,this.embalagens=!1,this.repeat=!1},togglePreparo:function(){this.preparo?this.preparo=!1:this.preparo=!0,this.conteudo=!1,this.embalagens=!1,this.repeat=!1},toggleEmbalagens:function(){this.embalagens?this.embalagens=!1:this.embalagens=!0,this.conteudo=!1,this.preparo=!1,this.repeat=!1}}},d=(r(599),r(75)),f=r(99),h=r.n(f),m=r(676),x=r(334),_=r(339),component=Object(d.a)(v,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",{style:t.cssVars},[o("Topbar",{attrs:{ninho:""}}),t._v(" "),t.conteudo||t.preparo||t.embalagens?t._e():o("div",[o("span",{staticClass:"body"},[t._v("Parabéns!"),o("br"),t._v(" Seu filho acaba de fazer 3 anos, entrando em uma nova fase da infância! Agora, está mais independente e começa a enfrentar novos desafios. Essa é a fase em que começam a melhorar sua percepção do ambiente e desenvolver processos mais complexos, como o da fala e de brincadeiras com blocos e giz. No entanto, ele ainda é uma criança e, por isso, é muito importante continuar oferecendo um cuidado e uma nutrição especiais que garantam seu crescimento e desenvolvimento saudável, a cada nova conquista.")]),t._v(" "),o("span",{staticClass:"decoration"})]),t._v(" "),o("transition",{attrs:{name:"fade-out"}},[t.embalagens?o("div",[o("img",{staticClass:"title--3",attrs:{src:r(368)}}),t._v(" "),o("span",{staticClass:"subtitle--3"},[t._v("3 a 5 anos")])]):t._e()]),t._v(" "),o("transition",{attrs:{name:"fade-out"}},[t.embalagens?t._e():o("div",[o("transition",{attrs:{name:"slide-left-shrink",mode:"out-in"}},[t.repeat?o("img",{key:"home",staticClass:"pack-fases__1--1",attrs:{src:r(369)}}):t._e(),t._v(" "),t.conteudo||t.preparo?o("img",{key:"conteudo",staticClass:"pack-fases__1--2",attrs:{src:r(369)}}):o("img",{key:"home",staticClass:"pack-fases__1--3",attrs:{src:r(369)}})]),t._v(" "),o("transition",{attrs:{name:"text-left",mode:"out-in"}},[t.repeat?o("img",{key:"home",staticClass:"title--1",attrs:{src:r(368)}}):t._e(),t._v(" "),t.conteudo||t.preparo?o("img",{key:"conteudo",staticClass:"title--2",attrs:{src:r(368)}}):o("img",{key:"home",staticClass:"title--3",attrs:{src:r(368)}})]),o("br"),t._v(" "),o("transition",{attrs:{name:"text-left",mode:"out-in"}},[t.repeat?o("span",{key:"home",staticClass:"subtitle--1"},[t._v("3 a 5 anos")]):t._e(),t._v(" "),t.conteudo||t.preparo?o("span",{key:"conteudo",staticClass:"subtitle--2"},[t._v("3 a 5 anos")]):o("span",{key:"home",staticClass:"subtitle--3"},[t._v("3 a 5 anos")])]),t._v(" "),o("br")],1)]),t._v(" "),o("transition",{attrs:{name:"fade"}},[t.conteudo?o("Conteudo",{attrs:{"css-vars":t.cssVars}}):t._e(),t._v(" "),t.preparo?o("ModoPreparo",{attrs:{"css-vars":t.cssVars}}):t._e(),t._v(" "),t.embalagens?o("Embalagens",{attrs:{"css-vars":t.cssVars}}):t._e()],1),t._v(" "),o("v-row",{staticClass:"mt-9",staticStyle:{position:"absolute",top:"calc(560px / var(--vert))"},attrs:{"no-gutters":""}},[o("v-col",{staticClass:"ml-md-15"},[o("v-row",[o("DetailButton",{attrs:{enabled:t.conteudo,"css-vars":t.cssVars,rotation:t.conteudoRotation,"default-color":"#1A5632",text:"O que contém?"},on:{toggle:t.toggleConteudo}})],1)],1),t._v(" "),o("v-col",{staticClass:"ml-md-15"},[o("v-row",[o("DetailButton",{attrs:{enabled:t.preparo,"css-vars":t.cssVars,rotation:t.preparoRotation,text:"Modo de preparo","default-color":"#1A5632"},on:{toggle:t.togglePreparo}})],1)],1),t._v(" "),o("v-col",{staticClass:"ml-md-15"},[o("v-row",[o("DetailButton",{attrs:{enabled:t.embalagens,"css-vars":t.cssVars,rotation:t.embalagensRotation,text:"Embalagens","default-color":"#1A5632"},on:{toggle:t.toggleEmbalagens}})],1)],1)],1),t._v(" "),o("v-row",{staticClass:"footer mt-md-6",staticStyle:{position:"absolute",top:"calc(600px / var(--vert))"}},[t._v("\n    “O MINISTÉRIO DA SAÚDE INFORMA: O ALEITAMENTO MATERNO EVITA INFECÇÕES E ALERGIAS E É RECOMENDADO ATÉ OS 2 (DOIS) ANOS DE IDADE OU MAIS”\n  ")])],1)}),[],!1,null,"88345708",null);e.default=component.exports;h()(component,{Topbar:r(298).default}),h()(component,{VCol:m.a,VContainer:x.a,VRow:_.a})}}]);