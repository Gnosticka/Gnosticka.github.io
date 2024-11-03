import{r as V,c as i,h as b,aJ as Y,b5 as x,al as H,D as X,aI as Z,g as ee,M as $,x as te,Q as oe,d as w,aT as ae,A as d,k as C,p as E,f as n,a1 as h,m,z as s,B as O,F as le,$ as ne,t as Q,b as se,l as T}from"./index.7d689aa6.js";import{a as re,u as ue}from"./use-dark.cf2023cb.js";import{u as ie,b as ce}from"./private.use-form.878fafbf.js";import{Q as de}from"./QSeparator.45472c01.js";import{Q as L}from"./QCardActions.b81893af.js";import{Q as me}from"./QCardSection.e42fc810.js";import{C as P}from"./ClosePopup.3a2a7195.js";import{I as pe}from"./icons.22af156c.js";import{u as ge}from"./auth-store.370a29fa.js";import{i as ve}from"./isDesktop.a0f4eea6.js";function fe(a,u){const e=V(null),r=i(()=>a.disable===!0?null:b("span",{ref:e,class:"no-outline",tabindex:-1}));function c(t){const l=u.value;t!==void 0&&t.type.indexOf("key")===0?l!==null&&document.activeElement!==l&&l.contains(document.activeElement)===!0&&l.focus():e.value!==null&&(t===void 0||l!==null&&l.contains(t.target)===!0)&&e.value.focus()}return{refocusTargetEl:r,refocusTarget:c}}var be={xs:30,sm:35,md:40,lg:50,xl:60};const xe={...ue,...Z,...ie,modelValue:{required:!0,default:null},val:{},trueValue:{default:!0},falseValue:{default:!1},indeterminateValue:{default:null},checkedIcon:String,uncheckedIcon:String,indeterminateIcon:String,toggleOrder:{type:String,validator:a=>a==="tf"||a==="ft"},toggleIndeterminate:Boolean,label:String,leftLabel:Boolean,color:String,keepColor:Boolean,dense:Boolean,disable:Boolean,tabindex:[String,Number]},_e=["update:modelValue"];function he(a,u){const{props:e,slots:r,emit:c,proxy:t}=ee(),{$q:l}=t,p=re(e,l),v=V(null),{refocusTargetEl:k,refocusTarget:q}=fe(e,v),z=Y(e,be),_=i(()=>e.val!==void 0&&Array.isArray(e.modelValue)),S=i(()=>{const o=x(e.val);return _.value===!0?e.modelValue.findIndex(f=>x(f)===o):-1}),g=i(()=>_.value===!0?S.value!==-1:x(e.modelValue)===x(e.trueValue)),y=i(()=>_.value===!0?S.value===-1:x(e.modelValue)===x(e.falseValue)),A=i(()=>g.value===!1&&y.value===!1),F=i(()=>e.disable===!0?-1:e.tabindex||0),R=i(()=>`q-${a} cursor-pointer no-outline row inline no-wrap items-center`+(e.disable===!0?" disabled":"")+(p.value===!0?` q-${a}--dark`:"")+(e.dense===!0?` q-${a}--dense`:"")+(e.leftLabel===!0?" reverse":"")),j=i(()=>{const o=g.value===!0?"truthy":y.value===!0?"falsy":"indet",f=e.color!==void 0&&(e.keepColor===!0||(a==="toggle"?g.value===!0:y.value!==!0))?` text-${e.color}`:"";return`q-${a}__inner relative-position non-selectable q-${a}__inner--${o}${f}`}),N=i(()=>{const o={type:"checkbox"};return e.name!==void 0&&Object.assign(o,{".checked":g.value,"^checked":g.value===!0?"checked":void 0,name:e.name,value:_.value===!0?e.val:e.trueValue}),o}),M=ce(N),U=i(()=>{const o={tabindex:F.value,role:a==="toggle"?"switch":"checkbox","aria-label":e.label,"aria-checked":A.value===!0?"mixed":g.value===!0?"true":"false"};return e.disable===!0&&(o["aria-disabled"]="true"),o});function I(o){o!==void 0&&($(o),q(o)),e.disable!==!0&&c("update:modelValue",K(),o)}function K(){if(_.value===!0){if(g.value===!0){const o=e.modelValue.slice();return o.splice(S.value,1),o}return e.modelValue.concat([e.val])}if(g.value===!0){if(e.toggleOrder!=="ft"||e.toggleIndeterminate===!1)return e.falseValue}else if(y.value===!0){if(e.toggleOrder==="ft"||e.toggleIndeterminate===!1)return e.trueValue}else return e.toggleOrder!=="ft"?e.trueValue:e.falseValue;return e.indeterminateValue}function G(o){(o.keyCode===13||o.keyCode===32)&&$(o)}function J(o){(o.keyCode===13||o.keyCode===32)&&I(o)}const W=u(g,A);return Object.assign(t,{toggle:I}),()=>{const o=W();e.disable!==!0&&M(o,"unshift",` q-${a}__native absolute q-ma-none q-pa-none`);const f=[b("div",{class:j.value,style:z.value,"aria-hidden":"true"},o)];k.value!==null&&f.push(k.value);const B=e.label!==void 0?H(r.default,[e.label]):X(r.default);return B!==void 0&&f.push(b("div",{class:`q-${a}__label q-anchor--skip`},B)),b("div",{ref:v,class:R.value,...U.value,onClick:I,onKeydown:G,onKeyup:J},f)}}var ke=te({name:"QToggle",props:{...xe,icon:String,iconColor:String},emits:_e,setup(a){function u(e,r){const c=i(()=>(e.value===!0?a.checkedIcon:r.value===!0?a.indeterminateIcon:a.uncheckedIcon)||a.icon),t=i(()=>e.value===!0?a.iconColor:null);return()=>[b("div",{class:"q-toggle__track"}),b("div",{class:"q-toggle__thumb absolute flex flex-center no-wrap"},c.value!==void 0?[b(oe,{name:c.value,color:t.value})]:void 0)]}return he("toggle",u)}});const qe=w({__name:"LogoutBtn",setup(a){const u=V(!1),e=ge(),r=ae(),c=()=>{u.value=!1,e.logout(),r.push("/auth")};return(t,l)=>{const p=d("AppBtn"),v=d("app-card"),k=d("app-dialog");return C(),E(le,null,[n(p,{secondary:"",label:"Logout","icon-right":h(pe).LOGOUT,onClick:l[0]||(l[0]=q=>u.value=!0)},null,8,["icon-right"]),n(k,{modelValue:u.value,"onUpdate:modelValue":l[1]||(l[1]=q=>u.value=q)},{default:m(()=>[n(v,null,{default:m(()=>[n(me,{class:"row items-center q-px-mb q-py-sm"},{default:m(()=>l[2]||(l[2]=[s("div",{class:"text-body1 text-color-title app-text-weight-600"},"Confirm Logout",-1)])),_:1}),n(L,{align:"between",class:"q-pa-md"},{default:m(()=>[O(n(p,{sm:"",label:"Don't logout"},null,512),[[P]]),O(n(p,{sm:"",secondary:"",label:"Logout",onClick:c},null,512),[[P]])]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}}}),ye={class:"q-pa-lg"},Ce={class:"q-mb-lg"},Ve={class:"text-h6 text-color-title text-weight-bold q-mb-sx"},Se={class:"text-body1 text-color-paragraph q-mb-md"},Ie={class:"row q-gutter-x-sm q-mb-lg"},we={class:"q-mb-lg"},D=w({__name:"Account",setup(a){localStorage.getItem("account-avatar");const u=localStorage.getItem("account-name"),e=localStorage.getItem("account-email"),r=V(!0);return(c,t)=>{const l=d("AppBtn"),p=d("TextInput");return C(),E("div",null,[s("div",ye,[t[3]||(t[3]=s("div",{class:"text-h5 text-color-title text-weight-bold q-mb-lg"},"My Account",-1)),s("div",Ce,[n(ne,{size:"80px"},{default:m(()=>t[2]||(t[2]=[s("img",{src:"avatar.jpg"},null,-1)])),_:1}),n(l,{class:"q-ml-md",secondary:"",sm:"",label:"Change"})]),s("div",Ve,Q(h(u)),1),s("div",Se,Q(h(e)),1),t[4]||(t[4]=s("div",{class:"text-h6 text-color-title text-weight-bold q-mb-sx"},"Email",-1)),t[5]||(t[5]=s("div",{class:"text-body1 text-color-paragraph q-mb-md"},"Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia.",-1)),s("div",Ie,[n(p,{value:h(e),"onUpdate:value":t[0]||(t[0]=v=>se(e)?e.value=v:null)},null,8,["value"]),n(l,{secondary:"",label:"Change"})]),t[6]||(t[6]=s("div",{class:"text-h6 text-color-title text-weight-bold q-mb-sx"},"Passeord",-1)),t[7]||(t[7]=s("div",{class:"text-body1 text-color-paragraph q-mb-md"},"You can set a permanent password if you don't want to use temporary login codes.",-1)),s("div",we,[n(l,{secondary:"",label:"Set New Password"})]),t[8]||(t[8]=s("div",{class:"text-h6 text-color-title text-weight-bold q-mb-sx"},"Smart Sync update for Mac",-1)),t[9]||(t[9]=s("div",{class:"text-body1 text-color-paragraph q-mb-md"},"With this update, online-only files will no longer appear to take up hard drive space.",-1)),s("div",null,[n(ke,{modelValue:r.value,"onUpdate:modelValue":t[1]||(t[1]=v=>r.value=v),label:r.value?"On":"Off"},null,8,["modelValue","label"])]),s("div",null,[n(qe)])]),n(de),n(L,{class:"q-gutter-x-md q-pa-lg",align:"right"},{default:m(()=>[n(l,{secondary:"",label:"Cancel"}),n(l,{label:"Save Changes"})]),_:1})])}}}),ze=w({__name:"SettingsAccountPage",setup(a){return(u,e)=>{const r=d("app-page"),c=d("page-header-button-back"),t=d("page-header"),l=d("page-body"),p=d("page");return h(ve)()?(C(),T(r,{key:0},{default:m(()=>[n(D)]),_:1})):(C(),T(p,{key:1},{default:m(()=>[n(t,null,{left:m(()=>[n(c,{label:"Settings"})]),_:1}),n(l,{class:"q-px-md"},{default:m(()=>[n(D)]),_:1})]),_:1}))}}});export{ze as default};
