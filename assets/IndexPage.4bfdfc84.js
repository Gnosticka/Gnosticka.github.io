import{k as G,i as Te,l as N,m as dt,P as vt,c as m,h as b,g as ee,a7 as Xe,r as A,n as Ge,o as ft,N as mt,q as J,p as bt,a8 as ht,a9 as pt,w as re,O as gt,a5 as yt,aa as Ct,ab as Me,I as qt,D as oe,J as wt,K as Tt,x as de,L as ge,E as Qe,y as ye,t as xt,ac as kt,U as ke,W as _e,d as Ye,X as z,f as _,a2 as X,a0 as k,Z as Fe}from"./index.9fd8cd13.js";import{h as Y,R as _t,Q as ie,l as Ze,u as Pt,a as St,o as At,k as Rt,m as $t}from"./QBtn.d114b8bc.js";import{b as Ce,d as xe,Q as Bt,u as Pe,a as Se,g as Oe,s as ze,c as It,_ as Lt,e as Vt,f as Et,S as qe,P as je,L as We}from"./plugin-vue_export-helper.0fc4eb00.js";var Dt=G({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(e,{slots:a}){const{proxy:{$q:o}}=ee(),r=Te(dt,N);if(r===N)return console.error("QPage needs to be a deep child of QLayout"),N;if(Te(vt,N)===N)return console.error("QPage needs to be child of QPageContainer"),N;const t=m(()=>{const f=(r.header.space===!0?r.header.size:0)+(r.footer.space===!0?r.footer.size:0);if(typeof e.styleFn=="function"){const R=r.isContainer.value===!0?r.containerHeight.value:o.screen.height;return e.styleFn(f,R)}return{minHeight:r.isContainer.value===!0?r.containerHeight.value-f+"px":o.screen.height===0?f!==0?`calc(100vh - ${f}px)`:"100vh":o.screen.height-f+"px"}}),s=m(()=>`q-page${e.padding===!0?" q-layout-padding":""}`);return()=>b("main",{class:s.value,style:t.value},Y(a.default))}});let we,ve=0;const B=new Array(256);for(let e=0;e<256;e++)B[e]=(e+256).toString(16).substring(1);const Mt=(()=>{const e=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(e!==void 0){if(e.randomBytes!==void 0)return e.randomBytes;if(e.getRandomValues!==void 0)return a=>{const o=new Uint8Array(a);return e.getRandomValues(o),o}}return a=>{const o=[];for(let r=a;r>0;r--)o.push(Math.floor(Math.random()*256));return o}})(),Ne=4096;function Qt(){(we===void 0||ve+16>Ne)&&(ve=0,we=Mt(Ne));const e=Array.prototype.slice.call(we,ve,ve+=16);return e[6]=e[6]&15|64,e[8]=e[8]&63|128,B[e[0]]+B[e[1]]+B[e[2]]+B[e[3]]+"-"+B[e[4]]+B[e[5]]+"-"+B[e[6]]+B[e[7]]+"-"+B[e[8]]+B[e[9]]+"-"+B[e[10]]+B[e[11]]+B[e[12]]+B[e[13]]+B[e[14]]+B[e[15]]}let Ft=0;const Ot=["click","keydown"],zt={icon:String,label:[Number,String],alert:[Boolean,String],alertIcon:String,name:{type:[Number,String],default:()=>`t_${Ft++}`},noCaps:Boolean,tabindex:[String,Number],disable:Boolean,contentClass:String,ripple:{type:[Boolean,Object],default:!0}};function jt(e,a,o,r){const l=Te(Xe,N);if(l===N)return console.error("QTab/QRouteTab component needs to be child of QTabs"),N;const{proxy:t}=ee(),s=A(null),f=A(null),R=A(null),$=m(()=>e.disable===!0||e.ripple===!1?!1:Object.assign({keyCodes:[13,32],early:!0},e.ripple===!0?{}:e.ripple)),C=m(()=>l.currentModel.value===e.name),Q=m(()=>"q-tab relative-position self-stretch flex flex-center text-center"+(C.value===!0?" q-tab--active"+(l.tabProps.value.activeClass?" "+l.tabProps.value.activeClass:"")+(l.tabProps.value.activeColor?` text-${l.tabProps.value.activeColor}`:"")+(l.tabProps.value.activeBgColor?` bg-${l.tabProps.value.activeBgColor}`:""):" q-tab--inactive")+(e.icon&&e.label&&l.tabProps.value.inlineLabel===!1?" q-tab--full":"")+(e.noCaps===!0||l.tabProps.value.noCaps===!0?" q-tab--no-caps":"")+(e.disable===!0?" disabled":" q-focusable q-hoverable cursor-pointer")+(r!==void 0?r.linkClass.value:"")),g=m(()=>"q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable "+(l.tabProps.value.inlineLabel===!0?"row no-wrap q-tab__content--inline":"column")+(e.contentClass!==void 0?` ${e.contentClass}`:"")),q=m(()=>e.disable===!0||l.hasFocus.value===!0||C.value===!1&&l.hasActiveTab.value===!0?-1:e.tabindex||0);function w(d,u){if(u!==!0&&s.value!==null&&s.value.focus(),e.disable===!0){r!==void 0&&r.hasRouterLink.value===!0&&J(d);return}if(r===void 0){l.updateModel({name:e.name}),o("click",d);return}if(r.hasRouterLink.value===!0){const P=(S={})=>{let D;const I=S.to===void 0||pt(S.to,e.to)===!0?l.avoidRouteWatcher=Qt():null;return r.navigateToRouterLink(d,{...S,returnRouterError:!0}).catch(O=>{D=O}).then(O=>{if(I===l.avoidRouteWatcher&&(l.avoidRouteWatcher=!1,D===void 0&&(O===void 0||O.message!==void 0&&O.message.startsWith("Avoided redundant navigation")===!0)&&l.updateModel({name:e.name})),S.returnRouterError===!0)return D!==void 0?Promise.reject(D):O})};o("click",d,P),d.defaultPrevented!==!0&&P();return}o("click",d)}function L(d){bt(d,[13,32])?w(d,!0):ht(d)!==!0&&d.keyCode>=35&&d.keyCode<=40&&d.altKey!==!0&&d.metaKey!==!0&&l.onKbdNavigate(d.keyCode,t.$el)===!0&&J(d),o("keydown",d)}function V(){const d=l.tabProps.value.narrowIndicator,u=[],P=b("div",{ref:R,class:["q-tab__indicator",l.tabProps.value.indicatorClass]});e.icon!==void 0&&u.push(b(ie,{class:"q-tab__icon",name:e.icon})),e.label!==void 0&&u.push(b("div",{class:"q-tab__label"},e.label)),e.alert!==!1&&u.push(e.alertIcon!==void 0?b(ie,{class:"q-tab__alert-icon",color:e.alert!==!0?e.alert:void 0,name:e.alertIcon}):b("div",{class:"q-tab__alert"+(e.alert!==!0?` text-${e.alert}`:"")})),d===!0&&u.push(P);const S=[b("div",{class:"q-focus-helper",tabindex:-1,ref:s}),b("div",{class:g.value},Ze(a.default,u))];return d===!1&&S.push(P),S}const F={name:m(()=>e.name),rootRef:f,tabIndicatorRef:R,routeData:r};Ge(()=>{l.unregisterTab(F)}),ft(()=>{l.registerTab(F)});function j(d,u){const P={ref:f,class:Q.value,tabindex:q.value,role:"tab","aria-selected":C.value===!0?"true":"false","aria-disabled":e.disable===!0?"true":void 0,onClick:w,onKeydown:L,...u};return mt(b(d,P,V()),[[_t,$.value]])}return{renderTab:j,$tabs:l}}var Ue=G({name:"QTab",props:zt,emits:Ot,setup(e,{slots:a,emit:o}){const{renderTab:r}=jt(e,a,o);return()=>r("div")}});let Je=!1;{const e=document.createElement("div");e.setAttribute("dir","rtl"),Object.assign(e.style,{width:"1px",height:"1px",overflow:"auto"});const a=document.createElement("div");Object.assign(a.style,{width:"1000px",height:"1px"}),document.body.appendChild(e),e.appendChild(a),e.scrollLeft=-1e3,Je=e.scrollLeft>=0,e.remove()}function Wt(e,a,o){const r=o===!0?["left","right"]:["top","bottom"];return`absolute-${a===!0?r[0]:r[1]}${e?` text-${e}`:""}`}const Nt=["left","center","right","justify"];var Ut=G({name:"QTabs",props:{modelValue:[Number,String],align:{type:String,default:"center",validator:e=>Nt.includes(e)},breakpoint:{type:[String,Number],default:600},vertical:Boolean,shrink:Boolean,stretch:Boolean,activeClass:String,activeColor:String,activeBgColor:String,indicatorColor:String,leftIcon:String,rightIcon:String,outsideArrows:Boolean,mobileArrows:Boolean,switchIndicator:Boolean,narrowIndicator:Boolean,inlineLabel:Boolean,noCaps:Boolean,dense:Boolean,contentClass:String,"onUpdate:modelValue":[Function,Array]},setup(e,{slots:a,emit:o}){const{proxy:r}=ee(),{$q:l}=r,{registerTick:t}=Ce(),{registerTick:s}=Ce(),{registerTick:f}=Ce(),{registerTimeout:R,removeTimeout:$}=xe(),{registerTimeout:C,removeTimeout:Q}=xe(),g=A(null),q=A(null),w=A(e.modelValue),L=A(!1),V=A(!0),F=A(!1),j=A(!1),d=[],u=A(0),P=A(!1);let S=null,D=null,I;const O=m(()=>({activeClass:e.activeClass,activeColor:e.activeColor,activeBgColor:e.activeBgColor,indicatorClass:Wt(e.indicatorColor,e.switchIndicator,e.vertical),narrowIndicator:e.narrowIndicator,inlineLabel:e.inlineLabel,noCaps:e.noCaps})),se=m(()=>{const n=u.value,i=w.value;for(let v=0;v<n;v++)if(d[v].name.value===i)return!0;return!1}),fe=m(()=>`q-tabs__content--align-${L.value===!0?"left":j.value===!0?"justify":e.align}`),me=m(()=>`q-tabs row no-wrap items-center q-tabs--${L.value===!0?"":"not-"}scrollable q-tabs--${e.vertical===!0?"vertical":"horizontal"} q-tabs__arrows--${e.outsideArrows===!0?"outside":"inside"} q-tabs--mobile-with${e.mobileArrows===!0?"":"out"}-arrows`+(e.dense===!0?" q-tabs--dense":"")+(e.shrink===!0?" col-shrink":"")+(e.stretch===!0?" self-stretch":"")),be=m(()=>"q-tabs__content scroll--mobile row no-wrap items-center self-stretch hide-scrollbar relative-position "+fe.value+(e.contentClass!==void 0?` ${e.contentClass}`:"")),c=m(()=>e.vertical===!0?{container:"height",content:"offsetHeight",scroll:"scrollHeight"}:{container:"width",content:"offsetWidth",scroll:"scrollWidth"}),y=m(()=>e.vertical!==!0&&l.lang.rtl===!0),M=m(()=>Je===!1&&y.value===!0);re(y,ae),re(()=>e.modelValue,n=>{U({name:n,setCurrent:!0,skipEmit:!0})}),re(()=>e.outsideArrows,ue);function U({name:n,setCurrent:i,skipEmit:v}){w.value!==n&&(v!==!0&&e["onUpdate:modelValue"]!==void 0&&o("update:modelValue",n),(i===!0||e["onUpdate:modelValue"]===void 0)&&(et(w.value,n),w.value=n))}function ue(){t(()=>{Ae({width:g.value.offsetWidth,height:g.value.offsetHeight})})}function Ae(n){if(c.value===void 0||q.value===null)return;const i=n[c.value.container],v=Math.min(q.value[c.value.scroll],Array.prototype.reduce.call(q.value.children,(x,p)=>x+(p[c.value.content]||0),0)),T=i>0&&v>i;L.value=T,T===!0&&s(ae),j.value=i<parseInt(e.breakpoint,10)}function et(n,i){const v=n!=null&&n!==""?d.find(x=>x.name.value===n):null,T=i!=null&&i!==""?d.find(x=>x.name.value===i):null;if(ce===!0)ce=!1;else if(v&&T){const x=v.tabIndicatorRef.value,p=T.tabIndicatorRef.value;S!==null&&(clearTimeout(S),S=null),x.style.transition="none",x.style.transform="none",p.style.transition="none",p.style.transform="none";const h=x.getBoundingClientRect(),E=p.getBoundingClientRect();p.style.transform=e.vertical===!0?`translate3d(0,${h.top-E.top}px,0) scale3d(1,${E.height?h.height/E.height:1},1)`:`translate3d(${h.left-E.left}px,0,0) scale3d(${E.width?h.width/E.width:1},1,1)`,f(()=>{S=setTimeout(()=>{S=null,p.style.transition="transform .25s cubic-bezier(.4, 0, .2, 1)",p.style.transform="none"},70)})}T&&L.value===!0&&te(T.rootRef.value)}function te(n){const{left:i,width:v,top:T,height:x}=q.value.getBoundingClientRect(),p=n.getBoundingClientRect();let h=e.vertical===!0?p.top-T:p.left-i;if(h<0){q.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.floor(h),ae();return}h+=e.vertical===!0?p.height-x:p.width-v,h>0&&(q.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.ceil(h),ae())}function ae(){const n=q.value;if(n===null)return;const i=n.getBoundingClientRect(),v=e.vertical===!0?n.scrollTop:Math.abs(n.scrollLeft);y.value===!0?(V.value=Math.ceil(v+i.width)<n.scrollWidth-1,F.value=v>0):(V.value=v>0,F.value=e.vertical===!0?Math.ceil(v+i.height)<n.scrollHeight:Math.ceil(v+i.width)<n.scrollWidth)}function Re(n){D!==null&&clearInterval(D),D=setInterval(()=>{nt(n)===!0&&K()},5)}function $e(){Re(M.value===!0?Number.MAX_SAFE_INTEGER:0)}function Be(){Re(M.value===!0?0:Number.MAX_SAFE_INTEGER)}function K(){D!==null&&(clearInterval(D),D=null)}function tt(n,i){const v=Array.prototype.filter.call(q.value.children,E=>E===i||E.matches&&E.matches(".q-tab.q-focusable")===!0),T=v.length;if(T===0)return;if(n===36)return te(v[0]),v[0].focus(),!0;if(n===35)return te(v[T-1]),v[T-1].focus(),!0;const x=n===(e.vertical===!0?38:37),p=n===(e.vertical===!0?40:39),h=x===!0?-1:p===!0?1:void 0;if(h!==void 0){const E=y.value===!0?-1:1,W=v.indexOf(i)+h*E;return W>=0&&W<T&&(te(v[W]),v[W].focus({preventScroll:!0})),!0}}const at=m(()=>M.value===!0?{get:n=>Math.abs(n.scrollLeft),set:(n,i)=>{n.scrollLeft=-i}}:e.vertical===!0?{get:n=>n.scrollTop,set:(n,i)=>{n.scrollTop=i}}:{get:n=>n.scrollLeft,set:(n,i)=>{n.scrollLeft=i}});function nt(n){const i=q.value,{get:v,set:T}=at.value;let x=!1,p=v(i);const h=n<p?-1:1;return p+=h*5,p<0?(x=!0,p=0):(h===-1&&p<=n||h===1&&p>=n)&&(x=!0,p=n),T(i,p),ae(),x}function Ie(n,i){for(const v in n)if(n[v]!==i[v])return!1;return!0}function ot(){let n=null,i={matchedLen:0,queryDiff:9999,hrefLen:0};const v=d.filter(h=>h.routeData!==void 0&&h.routeData.hasRouterLink.value===!0),{hash:T,query:x}=r.$route,p=Object.keys(x).length;for(const h of v){const E=h.routeData.exact.value===!0;if(h.routeData[E===!0?"linkIsExactActive":"linkIsActive"].value!==!0)continue;const{hash:W,query:he,matched:ut,href:ct}=h.routeData.resolvedLink.value,pe=Object.keys(he).length;if(E===!0){if(W!==T||pe!==p||Ie(x,he)===!1)continue;n=h.name.value;break}if(W!==""&&W!==T||pe!==0&&Ie(he,x)===!1)continue;const H={matchedLen:ut.length,queryDiff:p-pe,hrefLen:ct.length-W.length};if(H.matchedLen>i.matchedLen){n=h.name.value,i=H;continue}else if(H.matchedLen!==i.matchedLen)continue;if(H.queryDiff<i.queryDiff)n=h.name.value,i=H;else if(H.queryDiff!==i.queryDiff)continue;H.hrefLen>i.hrefLen&&(n=h.name.value,i=H)}if(n===null&&d.some(h=>h.routeData===void 0&&h.name.value===w.value)===!0){ce=!1;return}U({name:n,setCurrent:!0})}function lt(n){if($(),P.value!==!0&&g.value!==null&&n.target&&typeof n.target.closest=="function"){const i=n.target.closest(".q-tab");i&&g.value.contains(i)===!0&&(P.value=!0,L.value===!0&&te(i))}}function rt(){R(()=>{P.value=!1},30)}function ne(){Ve.avoidRouteWatcher===!1?C(ot):Q()}function Le(){if(I===void 0){const n=re(()=>r.$route.fullPath,ne);I=()=>{n(),I=void 0}}}function it(n){d.push(n),u.value++,ue(),n.routeData===void 0||r.$route===void 0?C(()=>{if(L.value===!0){const i=w.value,v=i!=null&&i!==""?d.find(T=>T.name.value===i):null;v&&te(v.rootRef.value)}}):(Le(),n.routeData.hasRouterLink.value===!0&&ne())}function st(n){d.splice(d.indexOf(n),1),u.value--,ue(),I!==void 0&&n.routeData!==void 0&&(d.every(i=>i.routeData===void 0)===!0&&I(),ne())}const Ve={currentModel:w,tabProps:O,hasFocus:P,hasActiveTab:se,registerTab:it,unregisterTab:st,verifyRouteModel:ne,updateModel:U,onKbdNavigate:tt,avoidRouteWatcher:!1};gt(Xe,Ve);function Ee(){S!==null&&clearTimeout(S),K(),I!==void 0&&I()}let De,ce;return Ge(Ee),yt(()=>{De=I!==void 0,Ee()}),Ct(()=>{De===!0&&(Le(),ce=!0,ne()),ue()}),()=>b("div",{ref:g,class:me.value,role:"tablist",onFocusin:lt,onFocusout:rt},[b(Bt,{onResize:Ae}),b("div",{ref:q,class:be.value,onScroll:ae},Y(a.default)),b(ie,{class:"q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon"+(V.value===!0?"":" q-tabs__arrow--faded"),name:e.leftIcon||l.iconSet.tabs[e.vertical===!0?"up":"left"],onMousedownPassive:$e,onTouchstartPassive:$e,onMouseupPassive:K,onMouseleavePassive:K,onTouchendPassive:K}),b(ie,{class:"q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon"+(F.value===!0?"":" q-tabs__arrow--faded"),name:e.rightIcon||l.iconSet.tabs[e.vertical===!0?"down":"right"],onMousedownPassive:Be,onTouchstartPassive:Be,onMouseupPassive:K,onMouseleavePassive:K,onTouchendPassive:K})])}}),le=G({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(e,{slots:a}){const o=m(()=>`q-card__section q-card__section--${e.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>b(e.tag,{class:o.value},Y(a.default))}});function Kt(e,a){const o=A(null),r=m(()=>e.disable===!0?null:b("span",{ref:o,class:"no-outline",tabindex:-1}));function l(t){const s=a.value;t!==void 0&&t.type.indexOf("key")===0?s!==null&&document.activeElement!==s&&s.contains(document.activeElement)===!0&&s.focus():o.value!==null&&(t===void 0||s!==null&&s.contains(t.target)===!0)&&o.value.focus()}return{refocusTargetEl:r,refocusTarget:l}}const Ht={name:String};function Xt(e={}){return(a,o,r)=>{a[o](b("input",{class:"hidden"+(r||""),...e.value}))}}var Gt={xs:30,sm:35,md:40,lg:50,xl:60};const Yt=()=>b("svg",{key:"svg",class:"q-radio__bg absolute non-selectable",viewBox:"0 0 24 24"},[b("path",{d:"M12,22a10,10 0 0 1 -10,-10a10,10 0 0 1 10,-10a10,10 0 0 1 10,10a10,10 0 0 1 -10,10m0,-22a12,12 0 0 0 -12,12a12,12 0 0 0 12,12a12,12 0 0 0 12,-12a12,12 0 0 0 -12,-12"}),b("path",{class:"q-radio__check",d:"M12,6a6,6 0 0 0 -6,6a6,6 0 0 0 6,6a6,6 0 0 0 6,-6a6,6 0 0 0 -6,-6"})]);var Z=G({name:"QRadio",props:{...Pe,...Pt,...Ht,modelValue:{required:!0},val:{required:!0},label:String,leftLabel:Boolean,checkedIcon:String,uncheckedIcon:String,color:String,keepColor:Boolean,dense:Boolean,disable:Boolean,tabindex:[String,Number]},emits:["update:modelValue"],setup(e,{slots:a,emit:o}){const{proxy:r}=ee(),l=Se(e,r.$q),t=St(e,Gt),s=A(null),{refocusTargetEl:f,refocusTarget:R}=Kt(e,s),$=m(()=>Me(e.modelValue)===Me(e.val)),C=m(()=>"q-radio cursor-pointer no-outline row inline no-wrap items-center"+(e.disable===!0?" disabled":"")+(l.value===!0?" q-radio--dark":"")+(e.dense===!0?" q-radio--dense":"")+(e.leftLabel===!0?" reverse":"")),Q=m(()=>{const u=e.color!==void 0&&(e.keepColor===!0||$.value===!0)?` text-${e.color}`:"";return`q-radio__inner relative-position q-radio__inner--${$.value===!0?"truthy":"falsy"}${u}`}),g=m(()=>($.value===!0?e.checkedIcon:e.uncheckedIcon)||null),q=m(()=>e.disable===!0?-1:e.tabindex||0),w=m(()=>{const u={type:"radio"};return e.name!==void 0&&Object.assign(u,{".checked":$.value===!0,"^checked":$.value===!0?"checked":void 0,name:e.name,value:e.val}),u}),L=Xt(w);function V(u){u!==void 0&&(J(u),R(u)),e.disable!==!0&&$.value!==!0&&o("update:modelValue",e.val,u)}function F(u){(u.keyCode===13||u.keyCode===32)&&J(u)}function j(u){(u.keyCode===13||u.keyCode===32)&&V(u)}Object.assign(r,{set:V});const d=Yt();return()=>{const u=g.value!==null?[b("div",{key:"icon",class:"q-radio__icon-container absolute-full flex flex-center no-wrap"},[b(ie,{class:"q-radio__icon",name:g.value})])]:[d];e.disable!==!0&&L(u,"unshift"," q-radio__native q-ma-none q-pa-none");const P=[b("div",{class:Q.value,style:t.value,"aria-hidden":"true"},u)];f.value!==null&&P.push(f.value);const S=e.label!==void 0?Ze(a.default,[e.label]):Y(a.default);return S!==void 0&&P.push(b("div",{class:"q-radio__label q-anchor--skip"},S)),b("div",{ref:s,class:C.value,tabindex:q.value,role:"radio","aria-label":e.label,"aria-checked":$.value===!0?"true":"false","aria-disabled":e.disable===!0?"true":void 0,onClick:V,onKeydown:F,onKeyup:j},P)}}});function Zt(e){const a=[.06,6,50];return typeof e=="string"&&e.length&&e.split(":").forEach((o,r)=>{const l=parseFloat(o);l&&(a[r]=l)}),a}var Jt=qt({name:"touch-swipe",beforeMount(e,{value:a,arg:o,modifiers:r}){if(r.mouse!==!0&&oe.has.touch!==!0)return;const l=r.mouseCapture===!0?"Capture":"",t={handler:a,sensitivity:Zt(o),direction:Oe(r),noop:wt,mouseStart(s){ze(s,t)&&Tt(s)&&(de(t,"temp",[[document,"mousemove","move",`notPassive${l}`],[document,"mouseup","end","notPassiveCapture"]]),t.start(s,!0))},touchStart(s){if(ze(s,t)){const f=s.target;de(t,"temp",[[f,"touchmove","move","notPassiveCapture"],[f,"touchcancel","end","notPassiveCapture"],[f,"touchend","end","notPassiveCapture"]]),t.start(s)}},start(s,f){oe.is.firefox===!0&&ge(e,!0);const R=Qe(s);t.event={x:R.left,y:R.top,time:Date.now(),mouse:f===!0,dir:!1}},move(s){if(t.event===void 0)return;if(t.event.dir!==!1){J(s);return}const f=Date.now()-t.event.time;if(f===0)return;const R=Qe(s),$=R.left-t.event.x,C=Math.abs($),Q=R.top-t.event.y,g=Math.abs(Q);if(t.event.mouse!==!0){if(C<t.sensitivity[1]&&g<t.sensitivity[1]){t.end(s);return}}else if(window.getSelection().toString()!==""){t.end(s);return}else if(C<t.sensitivity[2]&&g<t.sensitivity[2])return;const q=C/f,w=g/f;t.direction.vertical===!0&&C<g&&C<100&&w>t.sensitivity[0]&&(t.event.dir=Q<0?"up":"down"),t.direction.horizontal===!0&&C>g&&g<100&&q>t.sensitivity[0]&&(t.event.dir=$<0?"left":"right"),t.direction.up===!0&&C<g&&Q<0&&C<100&&w>t.sensitivity[0]&&(t.event.dir="up"),t.direction.down===!0&&C<g&&Q>0&&C<100&&w>t.sensitivity[0]&&(t.event.dir="down"),t.direction.left===!0&&C>g&&$<0&&g<100&&q>t.sensitivity[0]&&(t.event.dir="left"),t.direction.right===!0&&C>g&&$>0&&g<100&&q>t.sensitivity[0]&&(t.event.dir="right"),t.event.dir!==!1?(J(s),t.event.mouse===!0&&(document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),It(),t.styleCleanup=L=>{t.styleCleanup=void 0,document.body.classList.remove("non-selectable");const V=()=>{document.body.classList.remove("no-pointer-events--children")};L===!0?setTimeout(V,50):V()}),t.handler({evt:s,touch:t.event.mouse!==!0,mouse:t.event.mouse,direction:t.event.dir,duration:f,distance:{x:C,y:g}})):t.end(s)},end(s){t.event!==void 0&&(ye(t,"temp"),oe.is.firefox===!0&&ge(e,!1),t.styleCleanup!==void 0&&t.styleCleanup(!0),s!==void 0&&t.event.dir!==!1&&J(s),t.event=void 0)}};if(e.__qtouchswipe=t,r.mouse===!0){const s=r.mouseCapture===!0||r.mousecapture===!0?"Capture":"";de(t,"main",[[e,"mousedown","mouseStart",`passive${s}`]])}oe.has.touch===!0&&de(t,"main",[[e,"touchstart","touchStart",`passive${r.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,a){const o=e.__qtouchswipe;o!==void 0&&(a.oldValue!==a.value&&(typeof a.value!="function"&&o.end(),o.handler=a.value),o.direction=Oe(a.modifiers))},beforeUnmount(e){const a=e.__qtouchswipe;a!==void 0&&(ye(a,"main"),ye(a,"temp"),oe.is.firefox===!0&&ge(e,!1),a.styleCleanup!==void 0&&a.styleCleanup(),delete e.__qtouchswipe)}});function ea(){let e=Object.create(null);return{getCache:(a,o)=>e[a]===void 0?e[a]=typeof o=="function"?o():o:e[a],setCache(a,o){e[a]=o},hasCache(a){return Object.hasOwnProperty.call(e,a)},clearCache(a){a!==void 0?delete e[a]:e=Object.create(null)}}}const ta={name:{required:!0},disable:Boolean},Ke={setup(e,{slots:a}){return()=>b("div",{class:"q-panel scroll",role:"tabpanel"},Y(a.default))}},aa={modelValue:{required:!0},animated:Boolean,infinite:Boolean,swipeable:Boolean,vertical:Boolean,transitionPrev:String,transitionNext:String,transitionDuration:{type:[String,Number],default:300},keepAlive:Boolean,keepAliveInclude:[String,Array,RegExp],keepAliveExclude:[String,Array,RegExp],keepAliveMax:Number},na=["update:modelValue","beforeTransition","transition"];function oa(){const{props:e,emit:a,proxy:o}=ee(),{getCache:r}=ea(),{registerTimeout:l}=xe();let t,s;const f=A(null),R=A(null);function $(c){const y=e.vertical===!0?"up":"left";I((o.$q.lang.rtl===!0?-1:1)*(c.direction===y?1:-1))}const C=m(()=>[[Jt,$,void 0,{horizontal:e.vertical!==!0,vertical:e.vertical,mouse:!0}]]),Q=m(()=>e.transitionPrev||`slide-${e.vertical===!0?"down":"right"}`),g=m(()=>e.transitionNext||`slide-${e.vertical===!0?"up":"left"}`),q=m(()=>`--q-transition-duration: ${e.transitionDuration}ms`),w=m(()=>typeof e.modelValue=="string"||typeof e.modelValue=="number"?e.modelValue:String(e.modelValue)),L=m(()=>({include:e.keepAliveInclude,exclude:e.keepAliveExclude,max:e.keepAliveMax})),V=m(()=>e.keepAliveInclude!==void 0||e.keepAliveExclude!==void 0);re(()=>e.modelValue,(c,y)=>{const M=u(c)===!0?P(c):-1;s!==!0&&D(M===-1?0:M<P(y)?-1:1),f.value!==M&&(f.value=M,a("beforeTransition",c,y),l(()=>{a("transition",c,y)},e.transitionDuration))});function F(){I(1)}function j(){I(-1)}function d(c){a("update:modelValue",c)}function u(c){return c!=null&&c!==""}function P(c){return t.findIndex(y=>y.props.name===c&&y.props.disable!==""&&y.props.disable!==!0)}function S(){return t.filter(c=>c.props.disable!==""&&c.props.disable!==!0)}function D(c){const y=c!==0&&e.animated===!0&&f.value!==-1?"q-transition--"+(c===-1?Q.value:g.value):null;R.value!==y&&(R.value=y)}function I(c,y=f.value){let M=y+c;for(;M!==-1&&M<t.length;){const U=t[M];if(U!==void 0&&U.props.disable!==""&&U.props.disable!==!0){D(c),s=!0,a("update:modelValue",U.props.name),setTimeout(()=>{s=!1});return}M+=c}e.infinite===!0&&t.length!==0&&y!==-1&&y!==t.length&&I(c,c===-1?t.length:-1)}function O(){const c=P(e.modelValue);return f.value!==c&&(f.value=c),!0}function se(){const c=u(e.modelValue)===!0&&O()&&t[f.value];return e.keepAlive===!0?[b(kt,L.value,[b(V.value===!0?r(w.value,()=>({...Ke,name:w.value})):Ke,{key:w.value,style:q.value},()=>c)])]:[b("div",{class:"q-panel scroll",style:q.value,key:w.value,role:"tabpanel"},[c])]}function fe(){if(t.length!==0)return e.animated===!0?[b(xt,{name:R.value},se)]:se()}function me(c){return t=At(Y(c.default,[])).filter(y=>y.props!==null&&y.props.slot===void 0&&u(y.props.name)===!0),t.length}function be(){return t}return Object.assign(o,{next:F,previous:j,goTo:d}),{panelIndex:f,panelDirectives:C,updatePanelsList:me,updatePanelIndex:O,getPanelContent:fe,getEnabledPanels:S,getPanels:be,isValidPanelName:u,keepAliveProps:L,needsUniqueKeepAliveWrapper:V,goToPanelByOffset:I,goToPanel:d,nextPanel:F,previousPanel:j}}var He=G({name:"QTabPanel",props:ta,setup(e,{slots:a}){return()=>b("div",{class:"q-tab-panel",role:"tabpanel"},Y(a.default))}}),la=G({name:"QTabPanels",props:{...aa,...Pe},emits:na,setup(e,{slots:a}){const o=ee(),r=Se(e,o.proxy.$q),{updatePanelsList:l,getPanelContent:t,panelDirectives:s}=oa(),f=m(()=>"q-tab-panels q-panel-parent"+(r.value===!0?" q-tab-panels--dark q-dark":""));return()=>(l(a),Rt("div",{class:f.value},t(),"pan",e.swipeable,()=>s.value))}}),ra=G({name:"QCard",props:{...Pe,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(e,{slots:a}){const{proxy:{$q:o}}=ee(),r=Se(e,o),l=m(()=>"q-card"+(r.value===!0?" q-card--dark q-dark":"")+(e.bordered===!0?" q-card--bordered":"")+(e.square===!0?" q-card--square no-border-radius":"")+(e.flat===!0?" q-card--flat no-shadow":""));return()=>b(e.tag,{class:l.value},Y(a.default))}});const ia={};function sa(e,a){return ke(),_e($t,{flat:"",round:"",onClick:a[0]||(a[0]=o=>e.$q.dark.toggle()),icon:e.$q.dark.isActive?"eva-sun-outline":"eva-moon-outline",size:"sm",class:"q-mr-lg"},null,8,["icon"])}var ua=Lt(ia,[["render",sa]]);const ca=Ye({__name:"ExampleComponent",setup(e){const a=A("appearance"),o=Vt();return(r,l)=>(ke(),_e(ra,{class:"app-card app-card-shadow full-width page-height"},{default:z(()=>[_(le,{class:"q-pb-none"},{default:z(()=>[_(Ut,{modelValue:a.value,"onUpdate:modelValue":l[0]||(l[0]=t=>a.value=t),dense:"",class:"text-grey","active-color":"primary","indicator-color":"primary",align:"satrt","narrow-indicator":"","no-caps":""},{default:z(()=>[_(ua),_(Ue,{name:"appearance",label:"Appearance"}),_(Ue,{name:"typography",label:"Typography"})]),_:1},8,["modelValue"])]),_:1}),_(Et),_(la,{modelValue:a.value,"onUpdate:modelValue":l[8]||(l[8]=t=>a.value=t),animated:""},{default:z(()=>[_(He,{name:"appearance"},{default:z(()=>[_(le,null,{default:z(()=>[X("div",null,[_(Z,{name:"sidebar-theme",modelValue:k(o).appearance.sidebarTheme,"onUpdate:modelValue":l[1]||(l[1]=t=>k(o).appearance.sidebarTheme=t),val:k(qe).LIGHT,label:"Light",disable:r.$q.dark.isActive},null,8,["modelValue","val","disable"]),_(Z,{name:"sidebar-theme",modelValue:k(o).appearance.sidebarTheme,"onUpdate:modelValue":l[2]||(l[2]=t=>k(o).appearance.sidebarTheme=t),val:k(qe).DARK,label:"Dark",disable:r.$q.dark.isActive},null,8,["modelValue","val","disable"]),_(Z,{name:"sidebar-theme",modelValue:k(o).appearance.sidebarTheme,"onUpdate:modelValue":l[3]||(l[3]=t=>k(o).appearance.sidebarTheme=t),val:k(qe).COLOR,label:"Color",disable:r.$q.dark.isActive},null,8,["modelValue","val","disable"])])]),_:1}),_(le,null,{default:z(()=>[X("div",null,[_(Z,{name:"page-color",modelValue:k(o).appearance.pageColor,"onUpdate:modelValue":l[4]||(l[4]=t=>k(o).appearance.pageColor=t),val:k(je).WHITE,label:"White",disable:r.$q.dark.isActive},null,8,["modelValue","val","disable"]),_(Z,{name:"page-color",modelValue:k(o).appearance.pageColor,"onUpdate:modelValue":l[5]||(l[5]=t=>k(o).appearance.pageColor=t),val:k(je).OFF_WHITE,label:"Off-white",disable:r.$q.dark.isActive},null,8,["modelValue","val","disable"])])]),_:1}),_(le,null,{default:z(()=>[X("div",null,[_(Z,{name:"layout",modelValue:k(o).appearance.layout,"onUpdate:modelValue":l[6]||(l[6]=t=>k(o).appearance.layout=t),val:k(We).SIDEBAR,label:"Sideber"},null,8,["modelValue","val"]),_(Z,{name:"layout",modelValue:k(o).appearance.layout,"onUpdate:modelValue":l[7]||(l[7]=t=>k(o).appearance.layout=t),val:k(We).STACKED,label:"Stacked"},null,8,["modelValue","val"])])]),_:1})]),_:1}),_(He,{name:"typography"},{default:z(()=>[_(le,null,{default:z(()=>l[9]||(l[9]=[X("p",{class:"app-text-title"},"Frequently asked questions",-1),X("p",{class:"app-text-subtitle"},"What's the best thing about Switzerland?",-1),X("p",{class:"app-text-paragraph"},[Fe("I don't know, but the flag is a big plus. Lorem ipsum dolor "),X("span",{class:"app-text-paragraph-link"},"sit amet consectetur"),Fe(" adipisicing elit. Quas cupiditate laboriosam fugiat.")],-1),X("p",{class:"app-text-caption"},"What's the best thing about Switzerland?",-1)])),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1}))}}),ma=Ye({name:"IndexPage",__name:"IndexPage",setup(e){const a=A([{id:1,content:"ct1"},{id:2,content:"ct2"},{id:3,content:"ct3"},{id:4,content:"ct4"},{id:5,content:"ct5"}]),o=A({totalCount:1200});return(r,l)=>(ke(),_e(Dt,{padding:"",class:"row items-center justify-evenly"},{default:z(()=>[_(ca,{title:"Example component",active:"",todos:a.value,meta:o.value},null,8,["todos","meta"])]),_:1}))}});export{ma as default};