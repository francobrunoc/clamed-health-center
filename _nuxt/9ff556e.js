(window.webpackJsonp=window.webpackJsonp||[]).push([[27,22],{284:function(t,e,n){var content=n(293);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(73).default)("38758af3",content,!0,{sourceMap:!1})},287:function(t,e,n){t.exports=n.p+"img/back_arrow.a43e826.png"},288:function(t,e,n){t.exports=n.p+"img/ninho_logo.da86edf.png"},289:function(t,e,n){t.exports=n.p+"img/sanofi_logo.bc69420.png"},290:function(t,e,n){t.exports=n.p+"img/pampers_logo.7e38fe1.png"},291:function(t,e,n){t.exports=n.p+"img/clamed_logo.7fd33f7.png"},292:function(t,e,n){"use strict";n(284)},293:function(t,e,n){var r=n(72)(!1);r.push([t.i,".back-arrow[data-v-7b27363b]{left:10px;top:5px}.back-arrow[data-v-7b27363b],.clamed-logo[data-v-7b27363b]{position:relative;cursor:pointer}.clamed-logo[data-v-7b27363b]{height:85%}.sanofi-logo[data-v-7b27363b]{width:calc(281.62px/var(--horiz));height:calc(60px/var(--vert));margin-left:calc(400px/var(--horiz))}.ninho-logo[data-v-7b27363b]{margin-top:50px;margin-left:50px}.pampers-logo[data-v-7b27363b]{width:calc(220px/var(--horiz));height:calc(110px/var(--vert));margin-left:calc(435px/var(--horiz))}",""]),t.exports=r},294:function(t,e,n){"use strict";n.r(e);var r={name:"Topbar",props:{dorflex:{type:Boolean,default:!1},ninho:{type:Boolean,default:!1},pampers:{type:Boolean,default:!1},cssVars:{type:Object,default:null}},methods:{back:function(){}}},o=(n(292),n(74)),c=n(98),l=n.n(c),f=n(659),d=n(626),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app-bar",{attrs:{color:"#00CFB4",fixed:"",app:"",flat:"",height:"95px",elevation:"4"}},[r("v-app-bar-nav-icon",{on:{click:function(e){t.drawer=!0}}},[r("img",{staticClass:"back-arrow",style:"width: 55px; height: 47px",attrs:{src:n(287)},on:{click:function(e){return t.$router.back()}}})]),t._v(" "),t.ninho?r("img",{staticClass:"ninho-logo",style:"width: 120px; height: 120px;",attrs:{src:n(288)}}):t._e(),t._v(" "),t.dorflex?r("img",{staticClass:"sanofi-logo",style:t.cssVars,attrs:{src:n(289)}}):t._e(),t._v(" "),t.pampers?r("img",{staticClass:"pampers-logo",style:t.cssVars,attrs:{src:n(290)}}):t._e(),t._v(" "),r("img",{staticClass:"clamed-logo ml-auto",attrs:{src:n(291)},on:{click:function(e){return t.$router.push("/")}}})],1)}),[],!1,null,"7b27363b",null);e.default=component.exports;l()(component,{VAppBar:f.a,VAppBarNavIcon:d.a})},296:function(t,e,n){"use strict";var r=n(2),o=n(101),c=n(43),l=n(76),f=r.TypeError,d=function(t,e,source,n,r,v,m,h){for(var element,x,y=r,_=0,C=!!m&&l(m,h);_<n;){if(_ in source){if(element=C?C(source[_],_,e):source[_],v>0&&o(element))x=c(element),y=d(t,e,element,x,y,v-1)-1;else{if(y>=9007199254740991)throw f("Exceed the acceptable array length");t[y]=element}y++}_++}return y};t.exports=d},297:function(t,e,n){t.exports=n.p+"img/care.cd360e9.png"},298:function(t,e,n){t.exports=n.p+"img/tablets.10233bc.png"},299:function(t,e,n){t.exports=n.p+"img/self.17770b0.png"},300:function(t,e,n){t.exports=n.p+"img/telemedicine.e28917c.png"},301:function(t,e,n){t.exports=n.p+"img/alexa.66a8adc.png"},302:function(t,e,n){t.exports=n.p+"img/holography.60d648a.png"},303:function(t,e,n){t.exports=n.p+"img/about.6824362.png"},304:function(t,e,n){t.exports=n.p+"img/clic.39a6b31.png"},305:function(t,e,n){t.exports=n.p+"img/agora.d11aaf8.png"},306:function(t,e,n){var content=n(331);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(73).default)("e4172466",content,!0,{sourceMap:!1})},308:function(t,e,n){"use strict";var r=n(4),o=n(207);r({target:"String",proto:!0,forced:n(208)("fixed")},{fixed:function(){return o(this,"tt","","")}})},310:function(t,e,n){"use strict";var r=n(4),o=n(207);r({target:"String",proto:!0,forced:n(208)("small")},{small:function(){return o(this,"small","","")}})},326:function(t,e,n){"use strict";n(35),n(7),n(31),n(75),n(40),n(309),n(295),n(148),n(99);var r=n(1);var o,c=n(285);e.a=(o="container",r.a.extend({name:"v-".concat(o),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(t,e){var n=e.props,data=e.data,r=e.children;data.staticClass="".concat(o," ").concat(data.staticClass||"").trim();var c=data.attrs;if(c){data.attrs={};var l=Object.keys(c).filter((function(t){if("slot"===t)return!1;var e=c[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}));l.length&&(data.staticClass+=" ".concat(l.join(" ")))}return n.id&&(data.domProps=data.domProps||{},data.domProps.id=n.id),t(n.tag,data,r)}})).extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var n,r=e.props,data=e.data,o=e.children,l=data.attrs;return l&&(data.attrs={},n=Object.keys(l).filter((function(t){if("slot"===t)return!1;var e=l[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}))),r.id&&(data.domProps=data.domProps||{},data.domProps.id=r.id),t(r.tag,Object(c.a)(data,{staticClass:"container",class:Array({"container--fluid":r.fluid}).concat(n||[])}),o)}})},327:function(t,e,n){"use strict";var r=n(4),o=n(296),c=n(32),l=n(43),f=n(64),d=n(124);r({target:"Array",proto:!0},{flat:function(){var t=arguments.length?arguments[0]:void 0,e=c(this),n=l(e),r=d(e,0);return r.length=o(r,e,e,n,0,void 0===t?1:f(t)),r}})},328:function(t,e,n){n(100)("flat")},329:function(t,e,n){"use strict";var r=n(4),o=n(207);r({target:"String",proto:!0,forced:n(208)("link")},{link:function(t){return o(this,"a","href",t)}})},330:function(t,e,n){"use strict";n(306)},331:function(t,e,n){var r=n(72),o=n(210),c=n(297),l=n(298),f=n(299),d=n(300),v=n(301),m=n(302),h=n(303),x=n(304),y=n(305),_=r(!1),C=o(c),w=o(l),k=o(f),j=o(d),O=o(v),S=o(m),P=o(h),z=o(x),B=o(y);_.push([t.i,'.--title[data-v-3050a1e1]{font-weight:700!important;font-size:30px;line-height:70px}.--content[data-v-3050a1e1],.--title[data-v-3050a1e1]{font-family:"Baloo 2";font-style:normal;text-align:justify;color:#000}.--content[data-v-3050a1e1]{position:relative;font-weight:500}.care[data-v-3050a1e1]{background:url('+C+")}.tablets[data-v-3050a1e1]{background:url("+w+")}.self[data-v-3050a1e1]{background:url("+k+")}.telemedicine[data-v-3050a1e1]{background:url("+j+")}.alexa[data-v-3050a1e1]{background:url("+O+")}.holography[data-v-3050a1e1]{background:url("+S+")}.about[data-v-3050a1e1]{background:url("+P+")}.clic[data-v-3050a1e1]{background:url("+z+")}.agora[data-v-3050a1e1]{background:url("+B+")}",""]),t.exports=_},332:function(t,e,n){"use strict";n.r(e);var r={name:"Cross",props:{dir:{type:String,default:""}}},o=(n(330),n(74)),c=n(98),l=n.n(c),f=n(627),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-col",{class:t.dir,style:t.$vuetify.breakpoint.lg?"width: 100%;  height: 515px; background-size: 100% 515px":"width: 100%;  height: 390px; background-size: 100% 390px",attrs:{offset:"1"}})}),[],!1,null,"3050a1e1",null);e.default=component.exports;l()(component,{VCol:f.a})},334:function(t,e,n){"use strict";n(23),n(35),n(41),n(42);var r=n(11),o=(n(7),n(61),n(62),n(40),n(31),n(20),n(45),n(312),n(38),n(313),n(314),n(315),n(316),n(317),n(318),n(319),n(320),n(321),n(322),n(323),n(324),n(325),n(39),n(28),n(295),n(1)),c=n(285),l=n(15);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=["sm","md","lg","xl"],m=["start","end","center"];function h(t,e){return v.reduce((function(n,r){return n[t+Object(l.o)(r)]=e(),n}),{})}var x=function(t){return[].concat(m,["baseline","stretch"]).includes(t)},y=h("align",(function(){return{type:String,default:null,validator:x}})),_=function(t){return[].concat(m,["space-between","space-around"]).includes(t)},C=h("justify",(function(){return{type:String,default:null,validator:_}})),w=function(t){return[].concat(m,["space-between","space-around","stretch"]).includes(t)},k=h("alignContent",(function(){return{type:String,default:null,validator:w}})),j={align:Object.keys(y),justify:Object.keys(C),alignContent:Object.keys(k)},O={align:"align",justify:"justify",alignContent:"align-content"};function S(t,e,n){var r=O[t];if(null!=n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return(r+="-".concat(n)).toLowerCase()}}var P=new Map;e.a=o.a.extend({name:"v-row",functional:!0,props:d(d(d({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:x}},y),{},{justify:{type:String,default:null,validator:_}},C),{},{alignContent:{type:String,default:null,validator:w}},k),render:function(t,e){var n=e.props,data=e.data,o=e.children,l="";for(var f in n)l+=String(n[f]);var d=P.get(l);return d||function(){var t,e;for(e in d=[],j)j[e].forEach((function(t){var r=n[t],o=S(e,t,r);o&&d.push(o)}));d.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(r.a)(t,"align-".concat(n.align),n.align),Object(r.a)(t,"justify-".concat(n.justify),n.justify),Object(r.a)(t,"align-content-".concat(n.alignContent),n.alignContent),t)),P.set(l,d)}(),t(n.tag,Object(c.a)(data,{staticClass:"row",class:d}),o)}})},470:function(t,e,n){var content=n(539);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(73).default)("0c2be9d2",content,!0,{sourceMap:!1})},532:function(t,e,n){t.exports=n.p+"img/icones_servicos_2.4dd1737.png"},533:function(t,e,n){t.exports=n.p+"img/icones_servicos_4.b5575a8.png"},534:function(t,e,n){t.exports=n.p+"img/icones_servicos_5.5340329.png"},535:function(t,e,n){t.exports=n.p+"img/icones_servicos_3.ffb757f.png"},536:function(t,e,n){t.exports=n.p+"img/icones_servicos_1.93fe48f.png"},537:function(t,e,n){t.exports=n.p+"img/icones_servicos_6.f383bf8.png"},538:function(t,e,n){"use strict";n(470)},539:function(t,e,n){var r=n(72),o=n(210),c=n(297),l=n(298),f=n(299),d=n(300),v=n(301),m=n(302),h=n(303),x=n(304),y=n(305),_=r(!1),C=o(c),w=o(l),k=o(f),j=o(d),O=o(v),S=o(m),P=o(h),z=o(x),B=o(y);_.push([t.i,'.--title[data-v-58807fb2]{font-weight:700!important;font-size:30px;line-height:70px}.--content[data-v-58807fb2],.--title[data-v-58807fb2]{font-family:"Baloo 2";font-style:normal;text-align:justify;color:#000}.--content[data-v-58807fb2]{position:relative;font-weight:500}.care[data-v-58807fb2]{background:url('+C+")}.tablets[data-v-58807fb2]{background:url("+w+")}.self[data-v-58807fb2]{background:url("+k+")}.telemedicine[data-v-58807fb2]{background:url("+j+")}.alexa[data-v-58807fb2]{background:url("+O+")}.holography[data-v-58807fb2]{background:url("+S+")}.about[data-v-58807fb2]{background:url("+P+")}.clic[data-v-58807fb2]{background:url("+z+")}.agora[data-v-58807fb2]{background:url("+B+")}.--icon[data-v-58807fb2]{width:10%;height:10%}",""]),t.exports=_},637:function(t,e,n){"use strict";n.r(e);var r={name:"Care"},o=(n(538),n(74)),c=n(98),l=n.n(c),f=n(627),d=n(326),v=n(334),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("Topbar"),t._v(" "),r("v-row",[r("div",{staticClass:"--title text-lg-h4 ml-5 my-md-2 my-lg-1",style:t.$vuetify.breakpoint.md?"font-size: 28px; line-height: 28px":""},[t._v("Comodidade - Sala de Cuidados")])]),t._v(" "),r("v-row",[r("v-col",{staticClass:"--content",style:t.$vuetify.breakpoint.md?"line-height: 23px; font-size: 23px":"line-height: 32px; font-size: 28px"},[r("v-row",[t._v("\n          Uma sala com ampla lista de serviços para cuidar da sua saúde, confira:\n      ")]),t._v(" "),r("v-row",{staticClass:"pt-lg-6 pt-md-2 align-center"},[r("img",{staticClass:"--icon",attrs:{src:n(532)}}),t._v(" "),r("div",{staticClass:"ml-5"},[t._v("Aferição de pressão arterial")])]),t._v(" "),r("v-row",{staticClass:"pt-lg-1 pt-md-2 align-center"},[r("img",{staticClass:"--icon",attrs:{src:n(533)}}),t._v(" "),r("div",{staticClass:"ml-5"},[t._v("Teste de glicemia")])]),t._v(" "),r("v-row",{staticClass:"pt-lg-1 pt-md-2 align-center"},[r("img",{staticClass:"--icon",attrs:{src:n(534)}}),t._v(" "),r("div",{staticClass:"ml-5"},[t._v("Aplicação de injetáveis")])]),t._v(" "),r("v-row",{staticClass:"pt-lg-1 pt-md-2 align-center"},[r("img",{staticClass:"--icon",attrs:{src:n(535)}}),t._v(" "),r("div",{staticClass:"ml-5"},[t._v("Medição de temperatura")])]),t._v(" "),r("v-row",{staticClass:"pt-lg-1 pt-md-2 align-center"},[r("img",{staticClass:"--icon",attrs:{src:n(536)}}),t._v(" "),r("span",{staticClass:"ml-5"},[t._v("Testes rápidos")]),t._v(" "),r("span",{style:t.$vuetify.breakpoint.md?"line-height: 12px; font-size: 14px; padding-left: 80px":"line-height: 30px; font-size: 20px; padding-left: 80px"},[t._v("(Hemoglobina Glicada, PSA, Colesterol, Gravidez, Hepatite, entre outros.)")])]),t._v(" "),r("v-row",{staticClass:"pt-lg-1 align-center"},[r("img",{staticClass:"--icon",attrs:{src:n(537)}}),t._v(" "),r("div",{staticClass:"ml-5"},[t._v("E muito mais!")])])],1),t._v(" "),r("v-col",[r("Cross",{attrs:{dir:"care"}})],1)],1)],1)}),[],!1,null,"58807fb2",null);e.default=component.exports;l()(component,{Topbar:n(294).default,Cross:n(332).default}),l()(component,{VCol:f.a,VContainer:d.a,VRow:v.a})}}]);