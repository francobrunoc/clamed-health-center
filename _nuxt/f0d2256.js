(window.webpackJsonp=window.webpackJsonp||[]).push([[38,11,12,13,14,22],{284:function(t,e,r){var content=r(293);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(73).default)("38758af3",content,!0,{sourceMap:!1})},287:function(t,e,r){t.exports=r.p+"img/back_arrow.a43e826.png"},288:function(t,e,r){t.exports=r.p+"img/ninho_logo.da86edf.png"},289:function(t,e,r){t.exports=r.p+"img/sanofi_logo.bc69420.png"},290:function(t,e,r){t.exports=r.p+"img/pampers_logo.7e38fe1.png"},291:function(t,e,r){t.exports=r.p+"img/clamed_logo.7fd33f7.png"},292:function(t,e,r){"use strict";r(284)},293:function(t,e,r){var o=r(72)(!1);o.push([t.i,".back-arrow[data-v-7b27363b]{left:10px;top:5px}.back-arrow[data-v-7b27363b],.clamed-logo[data-v-7b27363b]{position:relative;cursor:pointer}.clamed-logo[data-v-7b27363b]{height:85%}.sanofi-logo[data-v-7b27363b]{width:calc(281.62px/var(--horiz));height:calc(60px/var(--vert));margin-left:calc(400px/var(--horiz))}.ninho-logo[data-v-7b27363b]{margin-top:50px;margin-left:50px}.pampers-logo[data-v-7b27363b]{width:calc(220px/var(--horiz));height:calc(110px/var(--vert));margin-left:calc(435px/var(--horiz))}",""]),t.exports=o},294:function(t,e,r){"use strict";r.r(e);var o={name:"Topbar",props:{dorflex:{type:Boolean,default:!1},ninho:{type:Boolean,default:!1},pampers:{type:Boolean,default:!1},cssVars:{type:Object,default:null}},methods:{back:function(){}}},c=(r(292),r(74)),n=r(98),l=r.n(n),v=r(659),f=r(626),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app-bar",{attrs:{color:"#00CFB4",fixed:"",app:"",flat:"",height:"95px",elevation:"4"}},[o("v-app-bar-nav-icon",{on:{click:function(e){t.drawer=!0}}},[o("img",{staticClass:"back-arrow",style:"width: 55px; height: 47px",attrs:{src:r(287)},on:{click:function(e){return t.$router.back()}}})]),t._v(" "),t.ninho?o("img",{staticClass:"ninho-logo",style:"width: 120px; height: 120px;",attrs:{src:r(288)}}):t._e(),t._v(" "),t.dorflex?o("img",{staticClass:"sanofi-logo",style:t.cssVars,attrs:{src:r(289)}}):t._e(),t._v(" "),t.pampers?o("img",{staticClass:"pampers-logo",style:t.cssVars,attrs:{src:r(290)}}):t._e(),t._v(" "),o("img",{staticClass:"clamed-logo ml-auto",attrs:{src:r(291)},on:{click:function(e){return t.$router.push("/")}}})],1)}),[],!1,null,"7b27363b",null);e.default=component.exports;l()(component,{VAppBar:v.a,VAppBarNavIcon:f.a})},296:function(t,e,r){"use strict";var o=r(2),c=r(101),n=r(43),l=r(76),v=o.TypeError,f=function(t,e,source,r,o,d,h,m){for(var element,x,_=o,y=0,k=!!h&&l(h,m);y<r;){if(y in source){if(element=k?k(source[y],y,e):source[y],d>0&&c(element))x=n(element),_=f(t,e,element,x,_,d-1)-1;else{if(_>=9007199254740991)throw v("Exceed the acceptable array length");t[_]=element}_++}y++}return _};t.exports=f},308:function(t,e,r){"use strict";var o=r(4),c=r(207);o({target:"String",proto:!0,forced:r(208)("fixed")},{fixed:function(){return c(this,"tt","","")}})},310:function(t,e,r){"use strict";var o=r(4),c=r(207);o({target:"String",proto:!0,forced:r(208)("small")},{small:function(){return c(this,"small","","")}})},326:function(t,e,r){"use strict";r(35),r(7),r(31),r(75),r(40),r(309),r(295),r(148),r(99);var o=r(1);var c,n=r(285);e.a=(c="container",o.a.extend({name:"v-".concat(c),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(t,e){var r=e.props,data=e.data,o=e.children;data.staticClass="".concat(c," ").concat(data.staticClass||"").trim();var n=data.attrs;if(n){data.attrs={};var l=Object.keys(n).filter((function(t){if("slot"===t)return!1;var e=n[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}));l.length&&(data.staticClass+=" ".concat(l.join(" ")))}return r.id&&(data.domProps=data.domProps||{},data.domProps.id=r.id),t(r.tag,data,o)}})).extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var r,o=e.props,data=e.data,c=e.children,l=data.attrs;return l&&(data.attrs={},r=Object.keys(l).filter((function(t){if("slot"===t)return!1;var e=l[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}))),o.id&&(data.domProps=data.domProps||{},data.domProps.id=o.id),t(o.tag,Object(n.a)(data,{staticClass:"container",class:Array({"container--fluid":o.fluid}).concat(r||[])}),c)}})},327:function(t,e,r){"use strict";var o=r(4),c=r(296),n=r(32),l=r(43),v=r(64),f=r(124);o({target:"Array",proto:!0},{flat:function(){var t=arguments.length?arguments[0]:void 0,e=n(this),r=l(e),o=f(e,0);return o.length=c(o,e,e,r,0,void 0===t?1:v(t)),o}})},328:function(t,e,r){r(100)("flat")},329:function(t,e,r){"use strict";var o=r(4),c=r(207);o({target:"String",proto:!0,forced:r(208)("link")},{link:function(t){return c(this,"a","href",t)}})},334:function(t,e,r){"use strict";r(23),r(35),r(41),r(42);var o=r(11),c=(r(7),r(61),r(62),r(40),r(31),r(20),r(45),r(312),r(38),r(313),r(314),r(315),r(316),r(317),r(318),r(319),r(320),r(321),r(322),r(323),r(324),r(325),r(39),r(28),r(295),r(1)),n=r(285),l=r(15);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d=["sm","md","lg","xl"],h=["start","end","center"];function m(t,e){return d.reduce((function(r,o){return r[t+Object(l.o)(o)]=e(),r}),{})}var x=function(t){return[].concat(h,["baseline","stretch"]).includes(t)},_=m("align",(function(){return{type:String,default:null,validator:x}})),y=function(t){return[].concat(h,["space-between","space-around"]).includes(t)},k=m("justify",(function(){return{type:String,default:null,validator:y}})),w=function(t){return[].concat(h,["space-between","space-around","stretch"]).includes(t)},z=m("alignContent",(function(){return{type:String,default:null,validator:w}})),C={align:Object.keys(_),justify:Object.keys(k),alignContent:Object.keys(z)},O={align:"align",justify:"justify",alignContent:"align-content"};function A(t,e,r){var o=O[t];if(null!=r){if(e){var c=e.replace(t,"");o+="-".concat(c)}return(o+="-".concat(r)).toLowerCase()}}var j=new Map;e.a=c.a.extend({name:"v-row",functional:!0,props:f(f(f({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:x}},_),{},{justify:{type:String,default:null,validator:y}},k),{},{alignContent:{type:String,default:null,validator:w}},z),render:function(t,e){var r=e.props,data=e.data,c=e.children,l="";for(var v in r)l+=String(r[v]);var f=j.get(l);return f||function(){var t,e;for(e in f=[],C)C[e].forEach((function(t){var o=r[t],c=A(e,t,o);c&&f.push(c)}));f.push((t={"no-gutters":r.noGutters,"row--dense":r.dense},Object(o.a)(t,"align-".concat(r.align),r.align),Object(o.a)(t,"justify-".concat(r.justify),r.justify),Object(o.a)(t,"align-content-".concat(r.alignContent),r.alignContent),t)),j.set(l,f)}(),t(r.tag,Object(n.a)(data,{staticClass:"row",class:f}),c)}})},338:function(t,e,r){var content=r(361);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(73).default)("e1708268",content,!0,{sourceMap:!1})},348:function(t,e,r){t.exports=r.p+"img/ninho_fases_1+.1b7c1e9.svg"},349:function(t,e,r){t.exports=r.p+"img/ninho_fases_1_pack.3ff6607.png"},359:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAABAUlEQVR4Xu3YMQoCQQwF0L2FYJVLeQXBxhOI42VsPYKewFawygn0CjGDhe6fEbYyP7AfUvmLRzLbOAwTYmYrn6fP1Ufw9/A46mKf3H2W2AmNgzZfwBplRO4yIuu5BXuhcdA+A7K3Sbpz4yaVEYmbTIFM8yYFe6H5gaQ/t2ZBCvZC00GmeZOCvdB0kGpJ3mQKpGAvNB3kCTuhcVAB4BE7YXHMAXA3YzmxtZuruAX2QmLt5pQJV8Y2rs31cIK9kFh7VipcAZwa0Vlxc1S4MrbNH8S0WHtWKlwBnBrRWXFzVLgyts0fxLRYe1Yq3BZwaixnrXHMmRZX46C1z8Pe//b/FfcCBjpgYEF5w5kAAAAASUVORK5CYII="},360:function(t,e,r){"use strict";r(338)},361:function(t,e,r){var o=r(72)(!1);o.push([t.i,".button-text[data-v-20a1b3b5]{position:relative;width:calc(200px/var(--horiz));height:calc(38px/var(--vert));left:calc(53px/var(--horiz));font-family:Baloo Bhai 2;font-style:normal;font-weight:500;font-size:calc(24px/var(--horiz));line-height:calc(38px/var(--vert));color:#fff}.button-bg[data-v-20a1b3b5]{width:calc(281px/var(--horiz));height:calc(40px/var(--vert));background:#fff;border-radius:15px}.button[data-v-20a1b3b5]{position:absolute;width:calc(278px/var(--horiz));height:calc(37px/var(--vert));background:var(--color);border-radius:15px;cursor:pointer}.arrow[data-v-20a1b3b5]{position:relative;width:calc(20px/var(--horiz));height:calc(20px/var(--vert));left:calc(250px/var(--horiz));top:calc(-33px/var(--vert));transform:rotate(var(--rot));transition-duration:.5s}",""]),t.exports=o},362:function(t,e,r){var content=r(391);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(73).default)("e2afe16a",content,!0,{sourceMap:!1})},363:function(t,e,r){var content=r(399);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(73).default)("8e0d5c5a",content,!0,{sourceMap:!1})},364:function(t,e,r){var content=r(409);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(73).default)("0fffb4c2",content,!0,{sourceMap:!1})},379:function(t,e,r){"use strict";r.r(e);r(40);var o={name:"DetailButton",props:{age:{type:String},type:{type:String},text:{type:String},defaultColor:{type:String},cssVars:{type:Object},rotation:{type:Object},enabled:{type:Boolean,default:!1}},data:function(){return{pressed:!1}},watch:{enabled:function(){this.enabled||(this.pull(),this.pressed=!1)}},methods:{gtagClassResolver:function(){return"nestle_fases_".concat(this.age,"_").concat(this.type)},state:function(){this.$emit("toggle"),this.pressed?this.pressed=!1:this.pressed=!0,this.pressed?this.push():this.pull()},push:function(){this.$refs.btn.style.background="rgba(180, 180, 180, 0.5)",this.$refs.btn.style.boxShadow="inset 0px 4px 4px rgba(0, 0, 0, 0.25)"},pull:function(){this.$refs.btn.style.background=this.defaultColor,this.$refs.btn.style.boxShadow="none"}}},c=(r(360),r(74)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"button-bg"},[o("div",{ref:"btn",class:"button "+t.gtagClassResolver(),style:{color:t.defaultColor},on:{click:t.state}},[o("div",{class:"button-text "+t.gtagClassResolver()},[t._v(t._s(t.text))]),t._v(" "),o("img",{staticClass:"arrow",style:t.rotation,attrs:{src:r(359)}})])])}),[],!1,null,"20a1b3b5",null);e.default=component.exports},387:function(t,e,r){t.exports=r.p+"img/vitaminas_minerais.a30cbf9.png"},388:function(t,e,r){t.exports=r.p+"img/prebioticos.94b8ecf.png"},389:function(t,e,r){t.exports=r.p+"img/zero_sugar.b9289ba.png"},390:function(t,e,r){"use strict";r(362)},391:function(t,e,r){var o=r(72)(!1);o.push([t.i,".title__conteudo[data-v-5c97a11c]{position:absolute;width:calc(500px/var(--horiz));height:calc(57px/var(--vert));left:calc(615px/var(--horiz));top:calc(118px/var(--vert));font-family:Baloo Bhai 2;font-style:normal;font-weight:600;font-size:calc(36px/var(--horiz));line-height:calc(57px/var(--vert));text-align:justify;color:#be1c25}.vitaminas-minerais[data-v-5c97a11c]{left:calc(476px/var(--horiz))}.prebioticos[data-v-5c97a11c],.vitaminas-minerais[data-v-5c97a11c]{position:absolute;width:calc(220px/var(--horiz));height:calc(230px/var(--vert));top:calc(190px/var(--vert));background:hsla(0,0%,100%,.5);border-radius:20px}.prebioticos[data-v-5c97a11c]{left:calc(727px/var(--horiz))}.zero-sugar[data-v-5c97a11c]{position:absolute;width:calc(220px/var(--horiz));height:calc(230px/var(--vert));left:calc(976px/var(--horiz));top:calc(190px/var(--vert));background:hsla(0,0%,100%,.5);border-radius:20px}.--info[data-v-5c97a11c]{position:absolute;width:calc(550px/var(--horiz));height:calc(22px/var(--vert));left:calc(476px/var(--horiz));top:calc(428px/var(--vert));font-family:Baloo Bhai 2;font-style:normal;font-weight:600;font-size:calc(14px/var(--horiz));line-height:calc(22px/var(--vert));text-align:justify;color:#777}",""]),t.exports=o},392:function(t,e,r){t.exports=r.p+"img/modo_1_2.d6f80cd.png"},393:function(t,e,r){t.exports=r.p+"img/modo_3.83a1402.png"},394:function(t,e,r){t.exports=r.p+"img/modo_4.fc642aa.png"},395:function(t,e,r){t.exports=r.p+"img/modo_5.dd58a30.png"},396:function(t,e,r){t.exports=r.p+"img/modo_6.afd8a87.png"},397:function(t,e,r){t.exports=r.p+"img/modo_7.86c89c1.png"},398:function(t,e,r){"use strict";r(363)},399:function(t,e,r){var o=r(72)(!1);o.push([t.i,".modo__1_2[data-v-5d5a01f6]{left:calc(400px/var(--horiz))}.modo__1_2[data-v-5d5a01f6],.modo__3[data-v-5d5a01f6]{position:absolute;width:calc(249px/var(--horiz));height:calc(215px/var(--vert));top:calc(40px/var(--vert));background:hsla(0,0%,100%,.5);border-radius:20px}.modo__3[data-v-5d5a01f6]{left:calc(692px/var(--horiz))}.modo__4[data-v-5d5a01f6]{position:absolute;width:calc(249px/var(--horiz));height:calc(215px/var(--vert));left:calc(980px/var(--horiz));top:calc(40px/var(--vert));background:hsla(0,0%,100%,.5);border-radius:20px}.modo__5[data-v-5d5a01f6]{left:calc(400px/var(--horiz))}.modo__5[data-v-5d5a01f6],.modo__6[data-v-5d5a01f6]{position:absolute;width:calc(249px/var(--horiz));height:calc(215px/var(--vert));top:calc(290px/var(--vert));background:hsla(0,0%,100%,.5);border-radius:20px}.modo__6[data-v-5d5a01f6]{left:calc(688px/var(--horiz))}.modo__7[data-v-5d5a01f6]{position:absolute;width:calc(249px/var(--horiz));height:calc(215px/var(--vert));left:calc(980px/var(--horiz));top:calc(290px/var(--vert));background:hsla(0,0%,100%,.5);border-radius:20px}.recommendation[data-v-5d5a01f6]{position:absolute;width:calc(272px/var(--horiz));height:calc(29px/var(--vert));left:calc(400px/var(--horiz));top:calc(510px/var(--vert));font-family:Baloo Bhai 2;font-style:normal;font-weight:400;font-size:calc(18px/var(--horiz));line-height:calc(29px/var(--vert));color:#1e5633}",""]),t.exports=o},400:function(t,e,r){t.exports=r.p+"img/lata_400g.c3c2c4f.png"},401:function(t,e,r){t.exports=r.p+"img/lata_400g_label.85d220d.png"},402:function(t,e,r){t.exports=r.p+"img/lata_800g.ad37061.png"},403:function(t,e,r){t.exports=r.p+"img/lata_800g_label.3bad143.png"},404:function(t,e,r){t.exports=r.p+"img/sache_.8bed0e8.png"},405:function(t,e,r){t.exports=r.p+"img/sache_label.3230b1e.png"},406:function(t,e,r){t.exports=r.p+"img/lata_1200g.080e0eb.png"},407:function(t,e,r){t.exports=r.p+"img/lata_1200g_label.b2af935.png"},408:function(t,e,r){"use strict";r(364)},409:function(t,e,r){var o=r(72)(!1);o.push([t.i,".pack__1[data-v-68f7388e]{position:absolute;width:calc(147px/var(--horiz));height:calc(216px/var(--vert));left:calc(31px/var(--horiz));top:calc(250px/var(--vert))}.pack__2[data-v-68f7388e]{position:absolute;width:calc(198px/var(--horiz));height:calc(290px/var(--vert));left:calc(347px/var(--horiz));top:calc(180px/var(--vert))}.pack__3[data-v-68f7388e]{position:absolute;width:calc(182px/var(--horiz));height:calc(270px/var(--vert));left:calc(714px/var(--horiz));top:calc(190px/var(--vert))}.pack__4[data-v-68f7388e]{position:absolute;width:calc(184px/var(--horiz));height:calc(350px/var(--vert));left:calc(1065px/var(--horiz));top:calc(130px/var(--vert))}.label-pack__1[data-v-68f7388e]{left:calc(32px/var(--horiz))}.label-pack__1[data-v-68f7388e],.label-pack__2[data-v-68f7388e]{position:absolute;width:calc(144px/var(--horiz));height:calc(38px/var(--vert));top:calc(480px/var(--vert))}.label-pack__2[data-v-68f7388e]{left:calc(374px/var(--horiz))}.label-pack__3[data-v-68f7388e]{left:calc(733px/var(--horiz))}.label-pack__3[data-v-68f7388e],.label-pack__4[data-v-68f7388e]{position:absolute;width:calc(144px/var(--horiz));height:calc(38px/var(--vert));top:calc(480px/var(--vert))}.label-pack__4[data-v-68f7388e]{left:calc(1085px/var(--horiz))}",""]),t.exports=o},472:function(t,e,r){var content=r(547);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(73).default)("243a39c2",content,!0,{sourceMap:!1})},488:function(t,e,r){"use strict";r.r(e);var o={name:"Conteudo",props:{cssVars:{type:Object}}},c=(r(390),r(74)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{style:t.cssVars},[o("span",{staticClass:"title__conteudo"},[t._v("1 Copinho de 200ml contém:")]),t._v(" "),o("img",{staticClass:"vitaminas-minerais",attrs:{src:r(387)}}),t._v(" "),o("img",{staticClass:"prebioticos",attrs:{src:r(388)}}),t._v(" "),o("img",{staticClass:"zero-sugar",attrs:{src:r(389)}}),t._v(" "),o("span",{staticClass:"--info"},[t._v("*Assim como toda fórmula infantil de seguimento para crianças de primeira infância")])])}),[],!1,null,"5c97a11c",null);e.default=component.exports},489:function(t,e,r){"use strict";r.r(e);var o={name:"ModoPreparo",props:{cssVars:{type:Object}}},c=(r(398),r(74)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{style:t.cssVars},[o("img",{staticClass:"modo__1_2",attrs:{src:r(392)}}),t._v(" "),o("img",{staticClass:"modo__3",attrs:{src:r(393)}}),t._v(" "),o("img",{staticClass:"modo__4",attrs:{src:r(394)}}),t._v(" "),o("img",{staticClass:"modo__5",attrs:{src:r(395)}}),t._v(" "),o("img",{staticClass:"modo__6",attrs:{src:r(396)}}),t._v(" "),o("img",{staticClass:"modo__7",attrs:{src:r(397)}}),t._v(" "),o("span",{staticClass:"recommendation"},[t._v("*Recomendação: Até 3 copos ao dia.")])])}),[],!1,null,"5d5a01f6",null);e.default=component.exports},490:function(t,e,r){"use strict";r.r(e);var o={name:"Embalagens",props:{cssVars:{type:Object}}},c=(r(408),r(74)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{style:t.cssVars},[o("img",{staticClass:"pack__1",attrs:{src:r(400)}}),t._v(" "),o("img",{staticClass:"label-pack__1",attrs:{src:r(401)}}),t._v(" "),o("img",{staticClass:"pack__2",attrs:{src:r(402)}}),t._v(" "),o("img",{staticClass:"label-pack__2",attrs:{src:r(403)}}),t._v(" "),o("img",{staticClass:"pack__3",attrs:{src:r(404)}}),t._v(" "),o("img",{staticClass:"label-pack__3",attrs:{src:r(405)}}),t._v(" "),o("img",{staticClass:"pack__4",attrs:{src:r(406)}}),t._v(" "),o("img",{staticClass:"label-pack__4",attrs:{src:r(407)}})])}),[],!1,null,"68f7388e",null);e.default=component.exports},546:function(t,e,r){"use strict";r(472)},547:function(t,e,r){var o=r(72),c=r(210),n=r(548),l=o(!1),v=c(n);l.push([t.i,".title--1[data-v-00e349f6]{left:calc(480px/var(--horiz));-webkit-animation:title-down-data-v-00e349f6 .5s;animation:title-down-data-v-00e349f6 .5s;-webkit-animation-iteration-count:1;animation-iteration-count:1}.title--1[data-v-00e349f6],.title--2[data-v-00e349f6]{position:absolute;width:calc(320px/var(--horiz));height:calc(77px/var(--vert));top:calc(70px/var(--vert))}.title--2[data-v-00e349f6]{left:calc(50px/var(--horiz))}.title--3[data-v-00e349f6]{position:absolute;width:calc(320px/var(--horiz));height:calc(77px/var(--vert));left:calc(480px/var(--horiz));top:calc(70px/var(--vert))}.pack-fases__1--1[data-v-00e349f6]{-webkit-animation:slide-to-left-data-v-00e349f6 .5s;animation:slide-to-left-data-v-00e349f6 .5s;-webkit-animation-iteration-count:1;animation-iteration-count:1}.pack-fases__1--1[data-v-00e349f6],.pack-fases__1--3[data-v-00e349f6]{position:absolute;width:calc(420px/var(--horiz));height:calc(420px/var(--vert));left:calc(84px/var(--horiz));top:calc(60px/var(--vert))}.pack-fases__1--2[data-v-00e349f6]{position:absolute;left:calc(30px/var(--horiz));top:calc(150px/var(--vert));width:calc(380px/var(--horiz));height:calc(380px/var(--vert))}.slide-left-shrink-enter-active[data-v-00e349f6]{animation:slide-left-shrink-data-v-00e349f6 reverse;-webkit-animation-duration:.3s;animation-duration:.3s}.slide-left-shrink-leave-active[data-v-00e349f6]{-webkit-animation:slide-left-shrink-data-v-00e349f6;animation:slide-left-shrink-data-v-00e349f6;-webkit-animation-duration:.3s;animation-duration:.3s}.text-left-enter-active[data-v-00e349f6]{-webkit-animation:slide-from-left-corner-data-v-00e349f6;animation:slide-from-left-corner-data-v-00e349f6;-webkit-animation-duration:.3s;animation-duration:.3s}.text-left-leave-active[data-v-00e349f6]{animation:slide-from-left-corner-data-v-00e349f6 reverse;-webkit-animation-duration:.3s;animation-duration:.3s}.text-up-enter-active[data-v-00e349f6]{animation:slide-to-top-data-v-00e349f6 reverse;animation-display:.5s}.text-up-leave-active[data-v-00e349f6]{-webkit-animation:slide-to-top-data-v-00e349f6;animation:slide-to-top-data-v-00e349f6;animation-display:.5s}.subtitle--1[data-v-00e349f6]{left:calc(480px/var(--horiz))}.subtitle--1[data-v-00e349f6],.subtitle--2[data-v-00e349f6]{position:absolute;width:calc(200px/var(--horiz));height:calc(38px/var(--vert));top:calc(130px/var(--vert));font-family:Baloo Bhai 2;font-style:normal;font-weight:500;font-size:calc(24px/var(--horiz));line-height:calc(38px/var(--vert));color:var(--color)}.subtitle--2[data-v-00e349f6]{left:calc(50px/var(--horiz))}.subtitle--3[data-v-00e349f6]{width:calc(200px/var(--horiz));height:calc(38px/var(--vert));top:calc(130px/var(--vert));color:var(--color)}.body[data-v-00e349f6],.subtitle--3[data-v-00e349f6]{position:absolute;left:calc(480px/var(--horiz));font-family:Baloo Bhai 2;font-style:normal;font-weight:500;font-size:calc(24px/var(--horiz));line-height:calc(38px/var(--vert))}.body[data-v-00e349f6]{width:calc(750px/var(--horiz));height:calc(266px/var(--vert));top:calc(180px/var(--vert));text-align:justify;color:#777;-webkit-animation:fade-data-v-00e349f6 .5s;animation:fade-data-v-00e349f6 .5s}.footer[data-v-00e349f6]{font-family:Baloo Bhai 2;font-style:normal;font-weight:600;font-size:calc(16px/var(--horiz));line-height:calc(29px/var(--vert));color:#777}.fade-enter-active[data-v-00e349f6]{-webkit-animation:fade-data-v-00e349f6 .2s ease-in;animation:fade-data-v-00e349f6 .2s ease-in}.fade-leave-active[data-v-00e349f6]{-webkit-animation:fade-data-v-00e349f6 .2s ease-out reverse;animation:fade-data-v-00e349f6 .2s ease-out reverse}@-webkit-keyframes title-down-data-v-00e349f6{0%{left:calc(420px/var(--horiz));top:calc(20px/var(--vert));width:35%}to{left:calc(480px/var(--horiz));top:calc(70px/var(--vert))}}@keyframes title-down-data-v-00e349f6{0%{left:calc(420px/var(--horiz));top:calc(20px/var(--vert));width:35%}to{left:calc(480px/var(--horiz));top:calc(70px/var(--vert))}}@-webkit-keyframes fade-data-v-00e349f6{0%{opacity:0}to{opacity:1}}@keyframes fade-data-v-00e349f6{0%{opacity:0}to{opacity:1}}@-webkit-keyframes slide-to-left-data-v-00e349f6{0%{left:calc(415px/var(--horiz));top:calc(80px/var(--vert))}to{left:calc(84px/var(--horiz));top:calc(60px/var(--vert))}}@keyframes slide-to-left-data-v-00e349f6{0%{left:calc(415px/var(--horiz));top:calc(80px/var(--vert))}to{left:calc(84px/var(--horiz));top:calc(60px/var(--vert))}}@-webkit-keyframes slide-left-shrink-data-v-00e349f6{to{width:calc(420px/var(--horiz));height:calc(420px/var(--vert));left:calc(84px/var(--horiz));top:calc(60px/var(--vert))}}@keyframes slide-left-shrink-data-v-00e349f6{to{width:calc(420px/var(--horiz));height:calc(420px/var(--vert));left:calc(84px/var(--horiz));top:calc(60px/var(--vert))}}@-webkit-keyframes slide-to-top-data-v-00e349f6{to{top:calc(80px/var(--horiz))}}@keyframes slide-to-top-data-v-00e349f6{to{top:calc(80px/var(--horiz))}}@-webkit-keyframes slide-from-left-corner-data-v-00e349f6{0%{left:calc(480px/var(--horiz))}}@keyframes slide-from-left-corner-data-v-00e349f6{0%{left:calc(480px/var(--horiz))}}.decoration[data-v-00e349f6]{position:absolute;width:calc(97px/var(--horiz));height:calc(77px/var(--vert));left:calc(95px/var(--horiz));top:calc(80px/var(--vert));background:url("+v+");background-size:100% 100%;transform:rotate(-18.48deg);-webkit-animation:fade-data-v-00e349f6 1.5s;animation:fade-data-v-00e349f6 1.5s}",""]),t.exports=l},548:function(t,e,r){t.exports=r.p+"img/splash.a616d86.png"},643:function(t,e,r){"use strict";r.r(e);r(103);var o=r(379),c=r(488),n=r(489),l=r(490),v={name:"Index",components:{DetailButton:o.default,Conteudo:c.default,Embalagens:l.default,ModoPreparo:n.default},data:function(){return{conteudo:!1,preparo:!1,embalagens:!1,repeat:!0}},computed:{cssVars:function(){return{"--color":"#BE1C25","--horiz":1280/this.$vuetify.breakpoint.width,"--vert":800/this.$vuetify.breakpoint.height}},conteudoRotation:function(){return this.conteudo?{"--rot":"-90deg"}:{"--rot":"0deg"}},preparoRotation:function(){return this.preparo?{"--rot":"-90deg"}:{"--rot":"0deg"}},embalagensRotation:function(){return this.embalagens?{"--rot":"-90deg"}:{"--rot":"0deg"}}},methods:{toggleConteudo:function(){this.conteudo?this.conteudo=!1:this.conteudo=!0,this.preparo=!1,this.embalagens=!1,this.repeat=!1},togglePreparo:function(){this.preparo?this.preparo=!1:this.preparo=!0,this.conteudo=!1,this.embalagens=!1,this.repeat=!1},toggleEmbalagens:function(){this.embalagens?this.embalagens=!1:this.embalagens=!0,this.conteudo=!1,this.preparo=!1,this.repeat=!1}}},f=(r(546),r(74)),d=r(98),h=r.n(d),m=r(627),x=r(326),_=r(334),component=Object(f.a)(v,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",{style:t.cssVars},[o("Topbar",{attrs:{ninho:""}}),t._v(" "),t.conteudo||t.preparo||t.embalagens?t._e():o("div",[o("span",{staticClass:"body"},[t._v("Parabéns!"),o("br"),t._v(" Seu pequeno acaba de fazer 1 ano, entrando em uma nova fase da infância! Esse é um estágio crucial da sua autodescoberta, em que começará a ter suas primeiras conquistas. Essa fase tão especial de evolução intelectual, emocional e social requer uma nutrição específica que garanta o crescimento e desenvolvimento saudável da criança, a cada passo conquistado.")]),t._v(" "),o("span",{staticClass:"decoration"})]),t._v(" "),o("transition",{attrs:{name:"fade-out"}},[t.embalagens?o("div",[o("img",{staticClass:"title--3",attrs:{src:r(348)}}),t._v(" "),o("span",{staticClass:"subtitle--3"},[t._v("1 a 3 anos")])]):t._e()]),t._v(" "),o("transition",{attrs:{name:"fade-out"}},[t.embalagens?t._e():o("div",[o("transition",{attrs:{name:"slide-left-shrink",mode:"out-in"}},[t.repeat?o("img",{key:"home",staticClass:"pack-fases__1--1",attrs:{src:r(349)}}):t._e(),t._v(" "),t.conteudo||t.preparo?o("img",{key:"conteudo",staticClass:"pack-fases__1--2",attrs:{src:r(349)}}):o("img",{key:"home",staticClass:"pack-fases__1--3",attrs:{src:r(349)}})]),t._v(" "),o("transition",{attrs:{name:"text-left",mode:"out-in"}},[t.repeat?o("img",{key:"home",staticClass:"title--1",attrs:{src:r(348)}}):t._e(),t._v(" "),t.conteudo||t.preparo?o("img",{key:"conteudo",staticClass:"title--2",attrs:{src:r(348)}}):o("img",{key:"home",staticClass:"title--3",attrs:{src:r(348)}})]),o("br"),t._v(" "),o("transition",{attrs:{name:"text-left",mode:"out-in"}},[t.repeat?o("span",{key:"home",staticClass:"subtitle--1"},[t._v("1 a 3 anos")]):t._e(),t._v(" "),t.conteudo||t.preparo?o("span",{key:"conteudo",staticClass:"subtitle--2"},[t._v("1 a 3 anos")]):o("span",{key:"home",staticClass:"subtitle--3"},[t._v("1 a 3 anos")])]),t._v(" "),o("br")],1)]),t._v(" "),o("transition",{attrs:{name:"fade",mode:"out-in"}},[t.conteudo?o("Conteudo",{attrs:{"css-vars":t.cssVars}}):t._e(),t._v(" "),t.preparo?o("ModoPreparo",{attrs:{"css-vars":t.cssVars}}):t._e(),t._v(" "),t.embalagens?o("Embalagens",{attrs:{"css-vars":t.cssVars}}):t._e()],1),t._v(" "),o("v-row",{staticClass:"mt-3",staticStyle:{position:"absolute",top:"calc(560px / var(--vert))"},attrs:{"no-gutters":""}},[o("v-col",{staticClass:"ml-md-15"},[o("v-row",[o("DetailButton",{attrs:{age:"1+",type:"conteudo",enabled:t.conteudo,"css-vars":t.cssVars,rotation:t.conteudoRotation,"default-color":"#BE1C25",text:"O que contém?"},on:{toggle:t.toggleConteudo}})],1)],1),t._v(" "),o("v-col",{staticClass:"ml-md-15"},[o("v-row",[o("DetailButton",{attrs:{age:"1+",type:"preparo",enabled:t.preparo,"css-vars":t.cssVars,rotation:t.preparoRotation,"default-color":"#BE1C25",text:"Modo de preparo"},on:{toggle:t.togglePreparo}})],1)],1),t._v(" "),o("v-col",{staticClass:"ml-md-15"},[o("v-row",[o("DetailButton",{attrs:{age:"1+",type:"embalagens",enabled:t.embalagens,"css-vars":t.cssVars,rotation:t.embalagensRotation,"default-color":"#BE1C25",text:"Embalagens"},on:{toggle:t.toggleEmbalagens}})],1)],1)],1),t._v(" "),o("v-row",{staticClass:"footer mt-md-6",staticStyle:{position:"absolute",top:"calc(600px / var(--vert))"}},[t._v("\n    “O MINISTÉRIO DA SAÚDE INFORMA: O ALEITAMENTO MATERNO EVITA INFECÇÕES E ALERGIAS E É RECOMENDADO ATÉ OS 2 (DOIS) ANOS DE IDADE OU MAIS”\n  ")])],1)}),[],!1,null,"00e349f6",null);e.default=component.exports;h()(component,{Topbar:r(294).default}),h()(component,{VCol:m.a,VContainer:x.a,VRow:_.a})}}]);