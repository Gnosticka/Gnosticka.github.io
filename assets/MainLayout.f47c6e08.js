import{Q as Qe,a as Le}from"./QLayout.722edce1.js";import{x as E,c,h as m,D as ce,i as de,aA as R,aD as fe,r as B,w as h,I as X,az as $e,g as Z,d as A,aT as Ve,aU as ee,A as ve,a1 as g,k as f,l as b,m as u,f as s,Y as O,t as D,p as C,n as P,u as Y,aV as Be,ax as te,B as J,a0 as Ce,Q as F,M as ze,a7 as ae,F as ne,_ as re,$ as me,z as M,V as Ae,ay as He,as as Re,al as Oe}from"./index.7d689aa6.js";import{Q as ge}from"./QToolbar.bc149a83.js";import{Q as W}from"./QSeparator.45472c01.js";import{Q as _e}from"./QResizeObserver.91ee10d4.js";import{I as ue}from"./icons.22af156c.js";import{i as G}from"./isDesktop.a0f4eea6.js";import{a as N,Q as I,b as he}from"./QItem.7fbffb93.js";import{Q as be}from"./QDrawer.b8b23714.js";import{Q as se}from"./QItemLabel.95564c13.js";import{Q as Pe,u as De,a as Fe,b as Ne,c as Me}from"./QTabs.5968c26d.js";import{u as Ee,a as je}from"./use-dark.cf2023cb.js";import{u as Ue,f as Ge}from"./rtl.0b4379f4.js";import{u as Ke,a as Ye,b as Je}from"./TouchPan.fb463841.js";import{_ as We}from"./plugin-vue_export-helper.21dcd24c.js";import{u as oe}from"./app-store.ac9f3c37.js";import{_ as Xe}from"./DiaryNavigationCard.4ae51fff.js";import"./selection.fdd062ff.js";import"./format.054b8074.js";import"./use-render-cache.3aae9b27.js";import"./private.use-form.878fafbf.js";import"./notification.utils.d07b912b.js";import"./entry.api.service.1f4a2865.js";import"./axios.cca5ce9b.js";import"./QCardActions.b81893af.js";var pe=E({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:a}){const v=c(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>m("div",{class:v.value},ce(a.default))}}),Ze=E({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:a,emit:v}){const{proxy:{$q:n}}=Z(),t=de(fe,R);if(t===R)return console.error("QHeader needs to be child of QLayout"),R;const r=B(parseInt(e.heightHint,10)),d=B(!0),k=c(()=>e.reveal===!0||t.view.value.indexOf("H")!==-1||n.platform.is.ios&&t.isContainer.value===!0),p=c(()=>{if(e.modelValue!==!0)return 0;if(k.value===!0)return d.value===!0?r.value:0;const o=r.value-t.scroll.value.position;return o>0?o:0}),$=c(()=>e.modelValue!==!0||k.value===!0&&d.value!==!0),V=c(()=>e.modelValue===!0&&$.value===!0&&e.reveal===!0),y=c(()=>"q-header q-layout__section--marginal "+(k.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+($.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),q=c(()=>{const o=t.rows.value.top,w={};return o[0]==="l"&&t.left.space===!0&&(w[n.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),o[2]==="r"&&t.right.space===!0&&(w[n.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),w});function x(o,w){t.update("header",o,w)}function Q(o,w){o.value!==w&&(o.value=w)}function _({height:o}){Q(r,o),x("size",o)}function T(o){V.value===!0&&Q(d,!0),v("focusin",o)}h(()=>e.modelValue,o=>{x("space",o),Q(d,!0),t.animate()}),h(p,o=>{x("offset",o)}),h(()=>e.reveal,o=>{o===!1&&Q(d,e.modelValue)}),h(d,o=>{t.animate(),v("reveal",o)}),h(t.scroll,o=>{e.reveal===!0&&Q(d,o.direction==="up"||o.position<=e.revealOffset||o.position-o.inflectionPoint<100)});const H={};return t.instances.header=H,e.modelValue===!0&&x("size",r.value),x("space",e.modelValue),x("offset",p.value),X(()=>{t.instances.header===H&&(t.instances.header=void 0,x("size",0),x("offset",0),x("space",!1))}),()=>{const o=$e(a.default,[]);return e.elevated===!0&&o.push(m("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),o.push(m(_e,{debounce:0,onResize:_})),m("header",{class:y.value,style:q.value,onFocusin:T},o)}}});const et={key:0},tt={key:1},at={key:2},nt=A({__name:"AppHeader",setup(e){Ve();const a=ee(),v=c(()=>a.name==="dashboard"?"13 \u0441\u0435\u043D\u0442. 2024":a.name==="diary"?"Diary":a.name==="practice"||a.name==="exercise-page"?"Practice":a.name==="tools"?"Tools":a.name==="tools-tables"?"Tables Of Correspondences":a.name==="tools-numbers"?"Numbers Dictionary":a.name==="tools-cards"?"Tarot Dictionary":a.name==="tools-texts"?"Sacred Texts Meditations":a.name==="settings"?"Settings":a.name==="settings-account"?"Settings :: Account":a.name==="settings-appearance"?"Settings :: Appearance":a.name==="settings-storage"?"Settings :: Storage":a.name==="settings-feedback"?"Settings :: Feedback":a.name);return(n,t)=>{const r=ve("AppBtn");return g(G)()||g(a).name!=="practice"?(f(),b(Ze,{key:0,class:Y([g(G)()?"app-desktop-header-desktop":"app-desktop-header-mobile","app-desktop-header app-text-title"])},{default:u(()=>[s(ge,null,{default:u(()=>[s(pe,{class:"font-size-24 font-weight-700"},{default:u(()=>[O(D(v.value),1)]),_:1}),g(a).name==="dashboard"?(f(),C("div",et,[s(r,{icon:g(ue).EDIT},null,8,["icon"])])):P("",!0),g(a).name==="diary"?(f(),C("div",tt,[s(r,{icon:g(ue).SEARCH},null,8,["icon"])])):P("",!0),g(a).name==="settings"?(f(),C("div",at,[s(r,{icon:n.$q.dark.isActive?"eva-sun-outline":"eva-moon-outline",onClick:t[0]||(t[0]=d=>n.$q.dark.toggle())},null,8,["icon"])])):P("",!0)]),_:1}),s(W)]),_:1},8,["class"])):P("",!0)}}}),z=Be({}),ot=Object.keys(te);var lt=E({name:"QExpansionItem",props:{...te,...Ke,...Ee,icon:String,label:String,labelLines:[Number,String],caption:String,captionLines:[Number,String],dense:Boolean,toggleAriaLabel:String,expandIcon:String,expandedIcon:String,expandIconClass:[Array,String,Object],duration:{},headerInsetLevel:Number,contentInsetLevel:Number,expandSeparator:Boolean,defaultOpened:Boolean,hideExpandIcon:Boolean,expandIconToggle:Boolean,switchToggleSide:Boolean,denseToggle:Boolean,group:String,popup:Boolean,headerStyle:[Array,String,Object],headerClass:[Array,String,Object]},emits:[...Ye,"click","afterShow","afterHide"],setup(e,{slots:a,emit:v}){const{proxy:{$q:n}}=Z(),t=je(e,n),r=B(e.modelValue!==null?e.modelValue:e.defaultOpened),d=B(null),k=Ue(),{show:p,hide:$,toggle:V}=Je({showing:r});let y,q;const x=c(()=>`q-expansion-item q-item-type q-expansion-item--${r.value===!0?"expanded":"collapsed"} q-expansion-item--${e.popup===!0?"popup":"standard"}`),Q=c(()=>{if(e.contentInsetLevel===void 0)return null;const l=n.lang.rtl===!0?"Right":"Left";return{["padding"+l]:e.contentInsetLevel*56+"px"}}),_=c(()=>e.disable!==!0&&(e.href!==void 0||e.to!==void 0&&e.to!==null&&e.to!=="")),T=c(()=>{const l={};return ot.forEach(L=>{l[L]=e[L]}),l}),H=c(()=>_.value===!0||e.expandIconToggle!==!0),o=c(()=>e.expandedIcon!==void 0&&r.value===!0?e.expandedIcon:e.expandIcon||n.iconSet.expansionItem[e.denseToggle===!0?"denseIcon":"icon"]),w=c(()=>e.disable!==!0&&(_.value===!0||e.expandIconToggle===!0)),j=c(()=>({expanded:r.value===!0,detailsId:k.value,toggle:V,show:p,hide:$})),i=c(()=>{const l=e.toggleAriaLabel!==void 0?e.toggleAriaLabel:n.lang.label[r.value===!0?"collapse":"expand"](e.label);return{role:"button","aria-expanded":r.value===!0?"true":"false","aria-controls":k.value,"aria-label":l}});h(()=>e.group,l=>{q!==void 0&&q(),l!==void 0&&ie()});function S(l){_.value!==!0&&V(l),v("click",l)}function K(l){l.keyCode===13&&le(l,!0)}function le(l,L){L!==!0&&d.value!==null&&d.value.focus(),V(l),ze(l)}function ye(){v("afterShow")}function xe(){v("afterHide")}function ie(){y===void 0&&(y=Ge()),r.value===!0&&(z[e.group]=y);const l=h(r,U=>{U===!0?z[e.group]=y:z[e.group]===y&&delete z[e.group]}),L=h(()=>z[e.group],(U,Te)=>{Te===y&&U!==void 0&&U!==y&&$()});q=()=>{l(),L(),z[e.group]===y&&delete z[e.group],q=void 0}}function Se(){const l={class:[`q-focusable relative-position cursor-pointer${e.denseToggle===!0&&e.switchToggleSide===!0?" items-end":""}`,e.expandIconClass],side:e.switchToggleSide!==!0,avatar:e.switchToggleSide},L=[m(F,{class:"q-expansion-item__toggle-icon"+(e.expandedIcon===void 0&&r.value===!0?" q-expansion-item__toggle-icon--rotated":""),name:o.value})];return w.value===!0&&(Object.assign(l,{tabindex:0,...i.value,onClick:le,onKeyup:K}),L.unshift(m("div",{ref:d,class:"q-expansion-item__toggle-focus q-icon q-focus-helper q-focus-helper--rounded",tabindex:-1}))),m(I,l,()=>L)}function ke(){let l;return a.header!==void 0?l=[].concat(a.header(j.value)):(l=[m(I,()=>[m(se,{lines:e.labelLines},()=>e.label||""),e.caption?m(se,{lines:e.captionLines,caption:!0},()=>e.caption):null])],e.icon&&l[e.switchToggleSide===!0?"push":"unshift"](m(I,{side:e.switchToggleSide===!0,avatar:e.switchToggleSide!==!0},()=>m(F,{name:e.icon})))),e.disable!==!0&&e.hideExpandIcon!==!0&&l[e.switchToggleSide===!0?"unshift":"push"](Se()),l}function we(){const l={ref:"item",style:e.headerStyle,class:e.headerClass,dark:t.value,disable:e.disable,dense:e.dense,insetLevel:e.headerInsetLevel};return H.value===!0&&(l.clickable=!0,l.onClick=S,Object.assign(l,_.value===!0?T.value:i.value)),m(N,l,ke)}function Ie(){return J(m("div",{key:"e-content",class:"q-expansion-item__content relative-position",style:Q.value,id:k.value},ce(a.default)),[[Ce,r.value]])}function qe(){const l=[we(),m(Pe,{duration:e.duration,onShow:ye,onHide:xe},Ie)];return e.expandSeparator===!0&&l.push(m(W,{class:"q-expansion-item__border q-expansion-item__border--top absolute-top",dark:t.value}),m(W,{class:"q-expansion-item__border q-expansion-item__border--bottom absolute-bottom",dark:t.value})),l}return e.group!==void 0&&ie(),X(()=>{q!==void 0&&q()}),()=>m("div",{class:x.value},[m("div",{class:"q-expansion-item__container relative-position"},qe())])}});const it=A({__name:"SidebarNavItem",props:{label:{},to:{default:"#"},icon:{default:""},children:{}},setup(e){return(a,v)=>a.children?(f(),b(lt,{key:0,"header-class":"rounded-borders q-pa-none","header-style":"min-height: 38px;",class:Y(["rounded-borders",{highlight:a.$route.name.includes("tools"),"color-red":a.$route.name.includes("tools-")}])},{header:u(()=>[s(N,{class:Y(["sidebat-nav-item full-width",{"sidebat-nav-item--active":a.$route.name.includes("tools")}]),exact:""},{default:u(()=>[s(I,{avatar:""},{default:u(()=>[s(F,{class:"nav-icon",size:"20px",name:a.icon},null,8,["name"])]),_:1}),s(I,{class:"font-size-14 font-weight-500"},{default:u(()=>[O(D(a.label),1)]),_:1})]),_:1},8,["class"])]),default:u(()=>[s(he,null,{default:u(()=>[(f(!0),C(ne,null,ae(a.children,n=>J((f(),b(N,{key:n.label,clickable:"",to:n.to,class:"q-pl-lg sidebat-nav-item",exact:""},{default:u(()=>[s(I,{avatar:""},{default:u(()=>[s(F,{class:"nav-icon text-transparent",size:"20px",name:n.icon},null,8,["name"])]),_:2},1024),s(I,{class:"font-size-14 font-weight-500","active-class":"text-primary"},{default:u(()=>[O(D(n.label),1)]),_:2},1024)]),_:2},1032,["to"])),[[re]])),128))]),_:1})]),_:1},8,["class"])):J((f(),b(N,{key:1,clickable:"",to:a.to,class:"sidebat-nav-item","active-class":"sidebat-nav-item--active highlight",exact:""},{default:u(()=>[s(I,{avatar:""},{default:u(()=>[s(F,{class:"nav-icon",size:"20px",name:a.icon},null,8,["name"])]),_:1}),s(I,{class:"font-size-14 font-weight-500"},{default:u(()=>[O(D(a.label),1)]),_:1})]),_:1},8,["to"])),[[re]])}});const rt=A({__name:"AccountBlock",setup(e){const a=localStorage.getItem("account-name");return localStorage.getItem("account-email"),(v,n)=>(f(),b(N,{class:"q-pl-md"},{default:u(()=>[s(I,{avatar:""},{default:u(()=>[s(me,null,{default:u(()=>n[0]||(n[0]=[M("img",{src:"/avatar.jpg"},null,-1)])),_:1})]),_:1}),s(I,null,{default:u(()=>[O(D(g(a)),1)]),_:1})]),_:1}))}});var ut=We(rt,[["__scopeId","data-v-1c48ba4a"]]);const st={class:"bottom-area"},ct=A({__name:"Sidebar",setup(e){const a=oe();return(v,n)=>(f(),b(be,{"show-if-above":"",bordered:"",width:240,class:"q-pa-md"},{default:u(()=>[s(ge,{class:"q-px-sm q-mb-lg sidebar-title",style:{height:"4rem"}},{default:u(()=>[s(me,{size:"40px"},{default:u(()=>n[0]||(n[0]=[M("img",{src:"logo.png"},null,-1)])),_:1}),s(pe,null,{default:u(()=>n[1]||(n[1]=[O(" Gnosticka ")])),_:1})]),_:1}),s(he,null,{default:u(()=>[(f(!0),C(ne,null,ae(g(a).appRoutes,t=>(f(),b(it,Ae({key:t.label,ref_for:!0},t),null,16))),128))]),_:1}),M("div",st,[s(ut)])]),_:1}))}}),dt={key:1,class:"flex flex-center full-height"},ft={key:2,class:"flex flex-center full-height"},vt=A({__name:"MobileSidebar",setup(e){const a=ee();return(v,n)=>(f(),b(be,{"show-if-above":"",bordered:"",width:320},{default:u(()=>[g(a).name==="diary"?(f(),b(Xe,{key:0,class:"full-height"})):g(a).name==="practice"?(f(),C("div",dt,n[0]||(n[0]=[M("div",null,"Some Practice Statistic",-1)]))):(f(),C("div",ft,n[1]||(n[1]=[M("div",null,"Some Practice Statistic",-1)])))]),_:1}))}});var mt=E({name:"QRouteTab",props:{...te,...De},emits:Fe,setup(e,{slots:a,emit:v}){const n=He({useDisableForRouterLinkProps:!1}),{renderTab:t,$tabs:r}=Ne(e,a,v,{exact:c(()=>e.exact),...n});return h(()=>`${e.name} | ${e.exact} | ${(n.resolvedLink.value||{}).href}`,r.verifyRouteModel),()=>t(n.linkTag.value,n.linkAttrs.value)}}),gt=E({name:"QFooter",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:a,emit:v}){const{proxy:{$q:n}}=Z(),t=de(fe,R);if(t===R)return console.error("QFooter needs to be child of QLayout"),R;const r=B(parseInt(e.heightHint,10)),d=B(!0),k=B(Re.value===!0||t.isContainer.value===!0?0:window.innerHeight),p=c(()=>e.reveal===!0||t.view.value.indexOf("F")!==-1||n.platform.is.ios&&t.isContainer.value===!0),$=c(()=>t.isContainer.value===!0?t.containerHeight.value:k.value),V=c(()=>{if(e.modelValue!==!0)return 0;if(p.value===!0)return d.value===!0?r.value:0;const i=t.scroll.value.position+$.value+r.value-t.height.value;return i>0?i:0}),y=c(()=>e.modelValue!==!0||p.value===!0&&d.value!==!0),q=c(()=>e.modelValue===!0&&y.value===!0&&e.reveal===!0),x=c(()=>"q-footer q-layout__section--marginal "+(p.value===!0?"fixed":"absolute")+"-bottom"+(e.bordered===!0?" q-footer--bordered":"")+(y.value===!0?" q-footer--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus"+(p.value!==!0?" hidden":""):"")),Q=c(()=>{const i=t.rows.value.bottom,S={};return i[0]==="l"&&t.left.space===!0&&(S[n.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),i[2]==="r"&&t.right.space===!0&&(S[n.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),S});function _(i,S){t.update("footer",i,S)}function T(i,S){i.value!==S&&(i.value=S)}function H({height:i}){T(r,i),_("size",i)}function o(){if(e.reveal!==!0)return;const{direction:i,position:S,inflectionPoint:K}=t.scroll.value;T(d,i==="up"||S-K<100||t.height.value-$.value-S-r.value<300)}function w(i){q.value===!0&&T(d,!0),v("focusin",i)}h(()=>e.modelValue,i=>{_("space",i),T(d,!0),t.animate()}),h(V,i=>{_("offset",i)}),h(()=>e.reveal,i=>{i===!1&&T(d,e.modelValue)}),h(d,i=>{t.animate(),v("reveal",i)}),h([r,t.scroll,t.height],o),h(()=>n.screen.height,i=>{t.isContainer.value!==!0&&T(k,i)});const j={};return t.instances.footer=j,e.modelValue===!0&&_("size",r.value),_("space",e.modelValue),_("offset",V.value),X(()=>{t.instances.footer===j&&(t.instances.footer=void 0,_("size",0),_("offset",0),_("space",!1))}),()=>{const i=Oe(a.default,[m(_e,{debounce:0,onResize:H})]);return e.elevated===!0&&i.push(m("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),m("footer",{class:x.value,style:Q.value,onFocusin:w},i)}}});const _t=A({__name:"MobileFooter",setup(e){const a=oe();return(v,n)=>(f(),b(gt,{bordered:"",class:"app-footer"},{default:u(()=>[s(Me,{"no-caps":"","active-class":"selected-route highlight","indicator-color":"transparent"},{default:u(()=>[(f(!0),C(ne,null,ae(g(a).appRoutes,t=>(f(),b(mt,{key:t.icon,to:t.to,label:t.label,icon:t.icon},null,8,["to","label","icon"]))),128))]),_:1})]),_:1}))}});const Nt=A({__name:"MainLayout",setup(e){const a=oe(),v=ee(),n=B(!1),t=c(()=>{const r=v.name;return r==="diary"||r==="practice"});return(r,d)=>{const k=ve("router-view");return f(),b(Le,{view:"lHh Lpr lFf"},{default:u(()=>[s(nt),g(G)()?(f(),b(ct,{key:0,modelValue:n.value,"onUpdate:modelValue":d[0]||(d[0]=p=>n.value=p)},null,8,["modelValue"])):(f(),b(_t,{key:1})),!g(G)()&&t.value?(f(),b(vt,{key:2,modelValue:g(a).mobileSidebarOpen,"onUpdate:modelValue":d[1]||(d[1]=p=>g(a).mobileSidebarOpen=p)},null,8,["modelValue"])):P("",!0),s(Qe,null,{default:u(()=>[s(k)]),_:1})]),_:1})}}});export{Nt as default};