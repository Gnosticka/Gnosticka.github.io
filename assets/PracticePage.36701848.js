import{Q as D}from"./QDrawer.b8b23714.js";import{d as Q,aU as B,c as P,B as E,k as s,l as r,m as t,f as e,$ as j,u as m,Y as h,t as b,n as $,Q as L,_ as q,r as y,aT as z,p as A,a7 as F,F as R,a1 as o,A as c,z as d}from"./index.7d689aa6.js";import{Q as w}from"./QCardSection.e42fc810.js";import{Q as T}from"./QPage.6be4bf92.js";import{Q as U,a as O}from"./QLayout.722edce1.js";import{Q as k,a as Y,b as G}from"./QItem.7fbffb93.js";import{j as J,_ as K}from"./Exercise.5406e459.js";import{Q as M}from"./QBadge.f8fa88f2.js";import{i as n}from"./isDesktop.a0f4eea6.js";import{u as W}from"./app-store.ac9f3c37.js";import"./TouchPan.fb463841.js";import"./QResizeObserver.91ee10d4.js";import"./selection.fdd062ff.js";import"./use-dark.cf2023cb.js";import"./format.054b8074.js";import"./QChip.b3767b1e.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./icons.22af156c.js";const X=Q({__name:"ExerciseListItem",props:{exercise:{type:Object,required:!0}},setup(l){const u=l,i=B(),_=P(()=>u.exercise.id===i.params.exerciseId);return(f,p)=>E((s(),r(Y,{clickable:"",class:m(["app-list-item app-text-title",{highlight:_.value}])},{default:t(()=>[e(k,{avatar:"",class:"item-icon-section"},{default:t(()=>[e(j,{rounded:"",class:m(["item-icon esoteric",`item-pictogram-${l.exercise.type.toLowerCase()}`])},{default:t(()=>[h(b(l.exercise.pictogram)+" ",1),l.exercise.active?(s(),r(M,{key:0,floating:"",color:"positive",rounded:""})):$("",!0)]),_:1},8,["class"])]),_:1}),e(k,{class:"text-color-primary"},{default:t(()=>[h(b(l.exercise.name),1)]),_:1}),e(k,{avatar:""},{default:t(()=>[e(L,{class:"list-item-action-icon",name:"eva-arrow-ios-forward-outline"})]),_:1})]),_:1},8,["class"])),[[q]])}}),C=Q({__name:"Practice",setup(l){const u=y(J),i=z();return(_,f)=>(s(),r(G,{separator:""},{default:t(()=>[(s(!0),A(R,null,F(u.value,p=>(s(),r(X,{key:p.id,exercise:p,onClick:a=>o(i).push(`/practice/ex-${p.id}`)},null,8,["exercise","onClick"]))),128))]),_:1}))}});const Z={class:"text-white text-center"},ee={class:"row items-center no-wrap"},te={class:"col"},ae={class:"col-auto"},se=750,Qe=Q({__name:"PracticePage",setup(l){const u=P(()=>!_.path.includes("practice/ex-")),i=y("notes"),_=B(),f=y(!1);return W(),(p,a)=>{const x=c("app-card"),V=c("PageHeaderButtonBack"),v=c("PageHeaderButton"),I=c("app-page"),S=c("page-header"),H=c("page-body"),N=c("page");return o(n)()?(s(),r(I,{key:0},{default:t(()=>[e(O,{view:"lHr Lpr lFr",container:"",class:m(`all-height-${o(n)()?"desktop":"mobile"}`)},{default:t(()=>[o(n)()?(s(),r(D,{key:0,modelValue:f.value,"onUpdate:modelValue":a[0]||(a[0]=g=>f.value=g),width:500,breakpoint:se,elevated:!o(n)(),class:m({"q-pr-lg":o(n)(),"bg-page":o(n)(),"bg-card":!o(n)()}),"show-if-above":""},{default:t(()=>[e(x,{class:"full-height"},{default:t(()=>[e(C)]),_:1})]),_:1},8,["modelValue","elevated","class"])):$("",!0),e(U,null,{default:t(()=>[e(T,{class:m(`
              all-height-${o(n)()?"desktop":"mobile"}
            `)},{default:t(()=>[u.value?(s(),r(x,{key:0,class:"bg-black flex flex-center full-height",style:{opacity:".1"}},{default:t(()=>[d("div",Z,[e(L,{size:"100px",name:"eva-arrow-circle-left-outline"}),a[4]||(a[4]=d("div",{class:"text-h5"},"Choose an Exercise",-1))])]),_:1})):(s(),r(x,{key:1,class:"full-height"},{default:t(()=>[e(w,null,{default:t(()=>[d("div",ee,[d("div",te,[e(V)]),d("div",ae,[e(v,{icon:"eva-file-text-outline",onClick:a[1]||(a[1]=g=>i.value="notes")}),e(v,{icon:"eva-clock-outline",onClick:a[2]||(a[2]=g=>i.value="history")}),e(v,{icon:"eva-pie-chart-outline",onClick:a[3]||(a[3]=g=>i.value="statistic"),class:"q-mr-md"})])])]),_:1}),e(w,null,{default:t(()=>[e(K,{tabs:i.value},null,8,["tabs"])]),_:1})]),_:1}))]),_:1},8,["class"])]),_:1})]),_:1},8,["class"])]),_:1})):(s(),r(N,{key:1},{default:t(()=>[e(S,null,{center:t(()=>a[5]||(a[5]=[h("Practice")])),right:t(()=>[e(v,{icon:"eva-search-outline"})]),_:1}),e(H,{constrain:"","no-vertical-padding":""},{default:t(()=>[e(C)]),_:1})]),_:1}))}}});export{Qe as default};
