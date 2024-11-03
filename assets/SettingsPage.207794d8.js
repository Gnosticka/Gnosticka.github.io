import{i as n}from"./isDesktop.2f94a5f6.js";import{Q as f}from"./QItemLabel.f9559889.js";import{d as b,aT as q,aU as A,k as l,l as p,m as t,f as e,Y as d,p as h,a7 as S,F as Q,a1 as o,B as y,u as C,Q as g,t as w,n as x,_ as B,A as r}from"./index.5da81bef.js";import{b as N,a as E,Q as c}from"./QItem.c441e436.js";import{Q as v}from"./QCardSection.31477941.js";import{Q as L}from"./QSeparator.ff0c546b.js";import{a as R,Q as T}from"./QLayout.cff483b9.js";import"./use-dark.4fdee243.js";import"./QResizeObserver.33c71edc.js";const I=b({__name:"SettingsMenu",setup(k){q();const u=A(),s=[{label:"My Account",icon:"eva-person-outline",route:"account"},{label:"Appearance",icon:"eva-color-palette-outline",route:"appearance"},{label:"Storage",icon:"eva-hard-drive-outline",route:"storage"}],_=[{label:"Give Feedback",icon:"eva-heart-outline",route:"feedback"}];return(m,i)=>(l(),p(N,{separator:!o(n)()},{default:t(()=>[e(f,{header:"",class:"text-color-caption"},{default:t(()=>i[0]||(i[0]=[d("BUSINESS SETTINGS")])),_:1}),(l(),h(Q,null,S(s,a=>y(e(E,{key:a.label,clickable:"",class:C({highlight:o(n)()&&o(u).path.includes(a.route),"rounded-borders":o(n)(),"q-mb-sm":o(n)()}),to:`/settings/${a.route}`},{default:t(()=>[e(c,{avatar:""},{default:t(()=>[e(g,{name:a.icon},null,8,["name"])]),_:2},1024),e(c,null,{default:t(()=>[e(f,null,{default:t(()=>[d(w(a.label),1)]),_:2},1024)]),_:2},1024),o(n)()?x("",!0):(l(),p(c,{key:0,avatar:""},{default:t(()=>[e(g,{class:"list-item-action-icon",name:"eva-arrow-ios-forward-outline"})]),_:1}))]),_:2},1032,["class","to"]),[[B]])),64)),e(f,{header:"",class:"text-color-caption"},{default:t(()=>i[1]||(i[1]=[d("EXPERIENCES")])),_:1}),(l(),h(Q,null,S(_,a=>y(e(E,{key:a.label,clickable:"",class:C({highlight:o(n)()&&o(u).path.includes(a.route),"rounded-borders":o(n)(),"q-mb-sm":o(n)()}),to:`/settings/${a.route}`},{default:t(()=>[e(c,{avatar:""},{default:t(()=>[e(g,{name:a.icon},null,8,["name"])]),_:2},1024),e(c,null,{default:t(()=>[e(f,null,{default:t(()=>[d(w(a.label),1)]),_:2},1024)]),_:2},1024),o(n)()?x("",!0):(l(),p(c,{key:0,avatar:""},{default:t(()=>[e(g,{class:"list-item-action-icon",name:"eva-arrow-ios-forward-outline"})]),_:1}))]),_:2},1032,["class","to"]),[[B]])),64))]),_:1},8,["separator"]))}});const D=b({__name:"SettingsCard",setup(k){return(u,s)=>{const _=r("router-view"),m=r("app-card");return l(),p(m,{class:"full-width"},{default:t(()=>[e(v,{horizontal:""},{default:t(()=>[e(v,{class:"q-py-lg settings-menu"},{default:t(()=>[e(I)]),_:1}),e(L,{vertical:""}),e(v,{class:"q-pa-none all-height-desktop"},{default:t(()=>[e(R,null,{default:t(()=>[e(T,null,{default:t(()=>[e(_)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}}),H=b({__name:"SettingsPage",setup(k){return(u,s)=>{const _=r("app-page"),m=r("AppBtn"),i=r("page-header"),a=r("page-body"),$=r("page");return o(n)()?(l(),p(_,{key:0},{default:t(()=>[e(D,{class:"all-height-desktop"})]),_:1})):(l(),p($,{key:1},{default:t(()=>[e(i,null,{center:t(()=>s[1]||(s[1]=[d("Settings")])),right:t(()=>[e(m,{icon:u.$q.dark.isActive?"eva-sun-outline":"eva-moon-outline",onClick:s[0]||(s[0]=F=>u.$q.dark.toggle())},null,8,["icon"])]),_:1}),e(a,{"no-vertical-padding":""},{default:t(()=>[e(I)]),_:1})]),_:1}))}}});export{H as default};
