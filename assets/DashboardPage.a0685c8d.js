import{Q as p}from"./QCardSection.e42fc810.js";import{Q as L,a as U}from"./QSpace.8e8a6ed8.js";import{I}from"./icons.22af156c.js";import{d as $,A as g,k as f,l as h,m as o,f as e,z as s,a1 as y,r as b,p as V,B as w,Q as R,F as j,i as Z,aA as K,aD as ee,c as _,g as te,D as ae,h as Y,x as le,v as oe,aT as G,t as Q,Y as k,n as z,aW as se,$ as ie,_ as ne,a7 as re,o as ue}from"./index.7d689aa6.js";import{Q as P}from"./QSeparator.45472c01.js";import{Q as M}from"./QCardActions.b81893af.js";import{C as S}from"./ClosePopup.3a2a7195.js";import{Q as F}from"./QChip.b3767b1e.js";import{Q as X}from"./QSkeleton.7f5a7cad.js";import{u as B}from"./home-store.f3789061.js";import{D as C}from"./notification.utils.d07b912b.js";import{Q as O,a as de,b as ce}from"./QItem.7fbffb93.js";import{Q as pe}from"./QSpinnerIos.38e4eb41.js";import{Q as me}from"./QItemLabel.95564c13.js";import"./use-dark.cf2023cb.js";import"./entry.api.service.1f4a2865.js";import"./axios.cca5ce9b.js";import"./format.054b8074.js";import"./isDesktop.a0f4eea6.js";const ge={class:"q-gutter-md q-mb-lg"},fe={class:"q-gutter-md q-mb-lg"},ve={class:"q-gutter-md q-mb-lg"},xe={class:"q-gutter-md q-mb-lg"},be={class:"q-gutter-md q-mb-lg"},_e=$({__name:"ButtonsKitCard",setup(n){return(t,i)=>{const a=g("AppBtn");return f(),h(L,{class:"app-card"},{default:o(()=>[e(p,null,{default:o(()=>[i[0]||(i[0]=s("div",{class:"text-h4 q-mb-lg text-weight-bold"},"Button",-1)),i[1]||(i[1]=s("div",{class:"text-h5 q-mb-lg text-weight-bold"},"Appearances",-1)),s("div",ge,[e(a,{label:"Default"}),e(a,{secondary:"",label:"Secondary"}),e(a,{negative:"",label:"Negative"}),e(a,{negative:"",outline:"",label:"Negative outline"}),e(a,{positive:"",label:"Positive"}),e(a,{positive:"",outline:"",label:"Positive outline"}),e(a,{primary:"",label:"Primary"}),e(a,{soft:"",label:"Soft"})]),i[2]||(i[2]=s("div",{class:"text-h5 q-mb-lg text-weight-bold"},"States",-1)),s("div",fe,[e(a,{disabled:"",outline:"",label:"Disabled"}),e(a,{loading:"",label:"Loading"})]),i[3]||(i[3]=s("div",{class:"text-h5 q-mb-lg text-weight-bold"},"Sizes",-1)),s("div",ve,[e(a,{label:"Extra small",xs:""}),e(a,{label:"Small",sm:""}),e(a,{label:"Default"}),e(a,{label:"Large",lg:""})]),i[4]||(i[4]=s("div",{class:"text-h5 q-mb-lg text-weight-bold"},"Buttons with an Icon",-1)),s("div",xe,[e(a,{icon:"eva-plus-outline",label:"Add Event"}),e(a,{icon:y(I).EDIT,secondary:"",label:"Edit Content"},null,8,["icon"]),e(a,{"icon-right":y(I).DELETE,negative:"",outline:"",label:"Delete"},null,8,["icon-right"])]),i[5]||(i[5]=s("div",{class:"text-h5 q-mb-lg text-weight-bold"},"Icon Buttons",-1)),s("div",be,[e(a,{icon:y(I).EDIT},null,8,["icon"]),e(a,{icon:y(I).DELETE,"text-color":"negative"},null,8,["icon"]),e(a,{icon:"eva-checkmark-outline","text-color":"primary"})])]),_:1})]),_:1})}}}),ye={class:"q-gutter-md q-mb-lg"},he={class:"q-gutter-md q-mb-lg"},we={class:"q-gutter-md q-mb-lg"},Se=$({__name:"ModalsKitCard",setup(n){const t=b(!1),i=b(!1),a=b(!1),r=b(!1),u=b(!1),d=b(!1),m=b(!1),N=b(!1),T=b(!1),A=b(!1),c=b(!1),E=b(!1),q=b(!1);return(D,l)=>{const v=g("AppBtn"),W=g("app-card"),H=g("app-dialog");return f(),V(j,null,[e(L,{class:"app-card"},{default:o(()=>[e(p,null,{default:o(()=>[l[16]||(l[16]=s("div",{class:"text-h4 q-mb-lg text-weight-bold"},"Modal",-1)),l[17]||(l[17]=s("div",{class:"text-h5 q-mb-lg text-weight-bold"},"Basic",-1)),s("div",ye,[e(v,{label:"Basic Modal",onClick:l[0]||(l[0]=x=>t.value=!0)}),e(v,{label:"Modal w/ Scroll Bar",onClick:l[1]||(l[1]=x=>i.value=!0)}),e(v,{label:"Cookies",onClick:l[2]||(l[2]=x=>a.value=!0)})]),l[18]||(l[18]=s("div",{class:"text-h5 q-mb-lg text-weight-bold"},"Feedback",-1)),s("div",he,[e(v,{label:"Success Modal",onClick:l[3]||(l[3]=x=>r.value=!0)}),e(v,{label:"Danger Modal",onClick:l[4]||(l[4]=x=>u.value=!0)}),e(v,{label:"Info Modal",onClick:l[5]||(l[5]=x=>d.value=!0)})]),l[19]||(l[19]=s("div",{class:"text-h5 q-mb-lg text-weight-bold"},"Product",-1)),s("div",we,[e(v,{label:"Send Feedback",onClick:l[6]||(l[6]=x=>m.value=!0)}),e(v,{label:"Newsletter",onClick:l[7]||(l[7]=x=>N.value=!0)}),e(v,{label:"Announcement",onClick:l[8]||(l[8]=x=>T.value=!0)}),e(v,{label:"Integration",onClick:l[9]||(l[9]=x=>A.value=!0)}),e(v,{label:"What's New",onClick:l[10]||(l[10]=x=>c.value=!0)}),e(v,{label:"Change your Plan",onClick:l[11]||(l[11]=x=>E.value=!0)}),e(v,{label:"Quick Find",onClick:l[12]||(l[12]=x=>q.value=!0)})])]),_:1})]),_:1}),e(H,{modelValue:t.value,"onUpdate:modelValue":l[13]||(l[13]=x=>t.value=x)},{default:o(()=>[e(W,null,{default:o(()=>[e(p,{class:"row items-center q-px-mb q-py-sm"},{default:o(()=>[l[20]||(l[20]=s("div",{class:"text-body1 text-color-title app-text-weight-600"},"Basic Modal",-1)),e(U),w(e(R,{name:y(I).CLOSE,class:"card-close-btn cursor-pointer",size:"16px"},null,8,["name"]),[[S]])]),_:1}),e(P),e(p,{class:"q-pb-xs"},{default:o(()=>l[21]||(l[21]=[s("p",{class:"text-body2 text-color-title app-text-weight-500"}," Let\u2019s Talk Paragraph ",-1),s("p",{class:"text-body2 text-color-paragraph"}," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",-1),s("p",{class:"text-body2 text-color-paragraph"}," Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",-1)])),_:1}),e(M,{align:"right",class:"q-pa-md"},{default:o(()=>[w(e(v,{sm:"",secondary:"",label:"Close"},null,512),[[S]]),w(e(v,{sm:"",label:"I Understand"},null,512),[[S]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(H,{modelValue:i.value,"onUpdate:modelValue":l[14]||(l[14]=x=>i.value=x)},{default:o(()=>[e(W,null,{default:o(()=>[e(p,{class:"row items-center q-px-mb q-py-sm"},{default:o(()=>[l[22]||(l[22]=s("div",{class:"text-body1 text-color-title app-text-weight-600"},"Modal w/ Scroll Bar",-1)),e(U),w(e(R,{name:y(I).CLOSE,class:"card-close-btn cursor-pointer",size:"16px"},null,8,["name"]),[[S]])]),_:1}),e(P),e(p,{class:"q-pb-xs scroll",style:{"max-height":"30vh"}},{default:o(()=>l[23]||(l[23]=[s("p",{class:"text-body2 text-color-title app-text-weight-500"}," Let\u2019s Talk Paragraph ",-1),s("p",{class:"text-body2 text-color-paragraph"}," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",-1),s("p",{class:"text-body2 text-color-paragraph"}," Ullamcorper malesuada proin libero nunc consequat interdum varius sit. Nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae. Mattis enim ut tellus elementum el fringilla est ullamcorper eget nulla. Enim eu turpis egestas pretium aenean pharetra magna. Aliquam id diam maecenas ultricies mi eget us mauris vitae ultricies leo integer t malesuada fames ac turpis egestas maecenas pharetra volutpat lacus laoreet non. ",-1),s("p",{class:"text-body2 text-color-paragraph"},null,-1)])),_:1}),e(P),e(M,{align:"right",class:"q-pa-md"},{default:o(()=>[w(e(v,{sm:"",secondary:"",label:"Close"},null,512),[[S]]),w(e(v,{sm:"",label:"I Understand"},null,512),[[S]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(H,{modelValue:a.value,"onUpdate:modelValue":l[15]||(l[15]=x=>a.value=x)},{default:o(()=>[e(W,null,{default:o(()=>[e(p,{class:"row items-center q-px-mb q-pt-md q-pb-sm"},{default:o(()=>[l[24]||(l[24]=s("div",{class:"text-body1 text-color-title app-text-weight-600"},"We use cookies \u{1F36A}",-1)),e(U),w(e(R,{name:y(I).CLOSE,class:"card-close-btn cursor-pointer",size:"16px"},null,8,["name"]),[[S]])]),_:1}),e(p,{class:"q-pb-xs"},{default:o(()=>l[25]||(l[25]=[s("p",{class:"text-body2 text-color-paragraph"}," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",-1),s("p",{class:"text-body2 text-color-paragraph"}," Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",-1)])),_:1}),e(M,{align:"right",class:"q-pa-md"},{default:o(()=>[w(e(v,{sm:"",secondary:"",label:"Decline"},null,512),[[S]]),w(e(v,{sm:"",label:"I Accept"},null,512),[[S]])]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}}});var J=(n=>(n.SESSION="SESSION",n.PERMANENT="PERMANENT",n.CASUAL="CASUAL",n.SOLAR="SOLAR",n))(J||{});const ke=$({__name:"InputsKitCard",setup(n){const t=Object.keys(J).filter(i=>isNaN(Number(i)));return(i,a)=>{const r=g("TextInput"),u=g("DateInput"),d=g("TimeInput"),m=g("SelectInput"),N=g("RichTextInput"),T=g("AppBtn"),A=g("app-card");return f(),h(A,null,{default:o(()=>[e(p,null,{default:o(()=>a[0]||(a[0]=[s("div",{class:"text-h4 q-mb-lg text-weight-bold"},"Inputs",-1)])),_:1}),e(p,{class:"q-pb-xs q-gutter-y-md q-px-lg q-mb-md"},{default:o(()=>[e(r,{title:"Text Input",placeholder:"Write here"}),e(r,{dense:"",title:"Text Input",hint:"dense",placeholder:"Write here"}),e(r,{title:"Text Input",hint:"wtih icon",placeholder:"Write here",icon:"eva-at-outline"}),e(u,{title:"Date Input"}),e(d,{title:"Time Input"}),e(m,{title:"Select Input",options:y(t)},null,8,["options"]),e(N,{title:"Rich Text Input",placeholder:"Write a description"})]),_:1}),e(P),e(M,{align:"right",class:"q-pa-md"},{default:o(()=>[e(T,{label:"Submit"})]),_:1})]),_:1})}}}),qe={position:{type:String,default:"bottom-right",validator:n=>["top-right","top-left","bottom-right","bottom-left","top","right","bottom","left"].includes(n)},offset:{type:Array,validator:n=>n.length===2},expand:Boolean};function De(){const{props:n,proxy:{$q:t}}=te(),i=Z(ee,K);if(i===K)return console.error("QPageSticky needs to be child of QLayout"),K;const a=_(()=>{const c=n.position;return{top:c.indexOf("top")!==-1,right:c.indexOf("right")!==-1,bottom:c.indexOf("bottom")!==-1,left:c.indexOf("left")!==-1,vertical:c==="top"||c==="bottom",horizontal:c==="left"||c==="right"}}),r=_(()=>i.header.offset),u=_(()=>i.right.offset),d=_(()=>i.footer.offset),m=_(()=>i.left.offset),N=_(()=>{let c=0,E=0;const q=a.value,D=t.lang.rtl===!0?-1:1;q.top===!0&&r.value!==0?E=`${r.value}px`:q.bottom===!0&&d.value!==0&&(E=`${-d.value}px`),q.left===!0&&m.value!==0?c=`${D*m.value}px`:q.right===!0&&u.value!==0&&(c=`${-D*u.value}px`);const l={transform:`translate(${c}, ${E})`};return n.offset&&(l.margin=`${n.offset[1]}px ${n.offset[0]}px`),q.vertical===!0?(m.value!==0&&(l[t.lang.rtl===!0?"right":"left"]=`${m.value}px`),u.value!==0&&(l[t.lang.rtl===!0?"left":"right"]=`${u.value}px`)):q.horizontal===!0&&(r.value!==0&&(l.top=`${r.value}px`),d.value!==0&&(l.bottom=`${d.value}px`)),l}),T=_(()=>`q-page-sticky row flex-center fixed-${n.position} q-page-sticky--${n.expand===!0?"expand":"shrink"}`);function A(c){const E=ae(c.default);return Y("div",{class:T.value,style:N.value},n.expand===!0?E:[Y("div",E)])}return{$layout:i,getStickyContent:A}}var Te=le({name:"QPageSticky",props:qe,setup(n,{slots:t}){const{getStickyContent:i}=De();return()=>i(t)}});const Ce={class:"q-gutter-x-md"},$e=$({__name:"AddEntry",setup(n){const t=b(!1);return(i,a)=>{const r=g("AppBtn"),u=g("app-card"),d=g("app-dialog");return f(),V(j,null,[e(Te,{position:"bottom-right",offset:[18,18]},{default:o(()=>[e(oe,{fab:"",icon:y(I).PLUS,color:"primary",onClick:a[0]||(a[0]=m=>t.value=!0)},null,8,["icon"])]),_:1}),e(d,{modelValue:t.value,"onUpdate:modelValue":a[1]||(a[1]=m=>t.value=m)},{default:o(()=>[e(u,null,{default:o(()=>[e(p,{class:"row items-center q-px-mb q-py-sm"},{default:o(()=>[a[2]||(a[2]=s("div",{class:"text-body1 text-color-title app-text-weight-600"},"Add Entry at DATE TIME",-1)),e(U),w(e(R,{name:y(I).CLOSE,class:"card-close-btn cursor-pointer",size:"16px"},null,8,["name"]),[[S]])]),_:1}),e(P),e(p,{class:"q-pb-xs"},{default:o(()=>a[3]||(a[3]=[s("p",{class:"text-body2 text-color-title app-text-weight-500"}," Let\u2019s Talk Paragraph ",-1),s("p",{class:"text-body2 text-color-paragraph"}," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",-1),s("p",{class:"text-body2 text-color-paragraph"}," Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",-1)])),_:1}),e(M,{align:"between",class:"q-pa-md"},{default:o(()=>[e(r,{sm:"",primary:"",label:"Tags",icon:y(I).TAG},null,8,["icon"]),s("div",Ce,[w(e(r,{sm:"",secondary:"",label:"Close"},null,512),[[S]]),w(e(r,{sm:"",label:"Create Entry"},null,512),[[S]])])]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}}});const Ae={class:"col"},Ee=$({__name:"HomePageTitle",setup(n){const t=B(),i=G(),a=_(()=>C.timestampToReadableDate(C.timestampToDate(t.day.startDateTime),!0));return(r,u)=>{const d=g("page-title");return y(t).day?(f(),h(d,{key:0,class:"row items-center no-wrap"},{default:o(()=>[s("div",Ae,Q(a.value)+" e.v.",1),e(F,{color:"teal","text-color":"white",icon:"eva-pin-outline",class:"col-auto q-mr-md",clickable:"",onClick:u[0]||(u[0]=m=>y(i).push("/profile/settings/location"))},{default:o(()=>u[1]||(u[1]=[k(" \u041F\u0438\u0442\u0435\u0440 ")])),_:1})]),_:1})):(f(),h(X,{key:1,type:"text",class:"page-title-sceleton"}))}}});const Ie={key:0,class:"home-subtitle half-dimmed"},Ne={class:"col"},Le=$({__name:"HomePageSubtitle",setup(n){const t=B(),i=_(()=>C.toPlanetaryDay(C.timestampToDate(t.day.startDateTime)));return(a,r)=>y(t).day?(f(),V("div",Ie,[s("div",Ne,"Sol 23\xB0 Tauri : Luna 1\xB0 Leonis : dies "+Q(i.value.latin)+" : Anno Vx a.n.",1)])):(f(),h(X,{key:1,type:"text",class:"page-title-sceleton"}))}}),Me={key:0},Be=$({__name:"StartNewDayBtn",setup(n){const t=b(!1),i=B(),a=_(()=>i.day?C.compareDates(C.getTodayDate(),C.timestampToDate(i.day.startDateTime))>0:!1),r=()=>{t.value=!1,i.createDay({timestamp:`${C.getTodayDate()} ${C.getCurrentTime()}`})};return(u,d)=>{const m=g("AppBtn"),N=g("app-card"),T=g("app-dialog");return a.value?(f(),V("div",Me,[e(m,{label:"Start New Day",class:"full-width",onClick:d[0]||(d[0]=A=>t.value=!0)}),e(T,{modelValue:t.value,"onUpdate:modelValue":d[1]||(d[1]=A=>t.value=A)},{default:o(()=>[e(N,null,{default:o(()=>[e(p,{class:"row items-center q-px-mb q-py-sm"},{default:o(()=>d[2]||(d[2]=[s("div",{class:"text-body1 text-color-title app-text-weight-600"},"Start new day?",-1)])),_:1}),e(M,{align:"center",class:"q-pa-md"},{default:o(()=>[w(e(m,{sm:"",label:"Yes",onClick:r},null,512),[[S]])]),_:1})]),_:1})]),_:1},8,["modelValue"])])):z("",!0)}}}),Qe=$({__name:"DashboardDateCard",setup(n){return(t,i)=>{const a=g("app-card");return f(),h(a,{class:"app-card full-height"},{default:o(()=>[e(p,null,{default:o(()=>[e(Ee),e(Le)]),_:1}),e(p,null,{default:o(()=>[e(Be)]),_:1})]),_:1})}}});const Pe=$({__name:"SolarTimeListItem",props:{solarTime:{type:String,required:!0},assigned:{type:Object,required:!1}},setup(n){const t=n,i=B(),a=_(()=>{if(t.solarTime==="Dawn")return i.day.astrology.dawn;if(t.solarTime==="Noon")return i.day.astrology.noon;if(t.solarTime==="Sunset")return i.day.astrology.sunset;if(t.solarTime==="Midnight")return i.day.astrology.midnight}),r=_(()=>t.assigned?t.assigned.exerciseName+"":!1),u=_(()=>t.assigned?t.solarTime==="Dawn"&&!t.assigned.solarDawnActual||t.solarTime==="Noon"&&!t.assigned.solarNoonActual||t.solarTime==="Sunset"&&!t.assigned.solarSunsetActual||t.solarTime==="Midnight"&&!t.assigned.solarMidnightActual:!1),d=_(()=>t.assigned?t.solarTime==="Dawn"&&t.assigned.solarDawnActual?t.assigned.solarDawnActual:t.solarTime==="Noon"&&t.assigned.solarNoonActual?t.assigned.solarNoonActual:t.solarTime==="Sunset"&&t.assigned.solarSunsetActual?t.assigned.solarSunsetActual:t.solarTime==="Midnight"&&t.assigned.solarMidnightActual?t.assigned.solarMidnightActual:null:null),m=_(()=>!1),N=_(()=>t.assigned?t.solarTime==="Dawn"&&t.assigned.solarDawnExpected?t.assigned.solarDawnExpected:t.solarTime==="Noon"&&t.assigned.solarNoonExpected?t.assigned.solarNoonExpected:t.solarTime==="Sunset"&&t.assigned.solarSunsetExpected?t.assigned.solarSunsetExpected:t.solarTime==="Midnight"&&t.assigned.solarMidnightExpected?t.assigned.solarMidnightExpected:null:null),T=_(()=>{if(!t.assigned||!d.value)return 0;const D=C.getMinutesBetween(d.value,N.value);return D<=15?3:D<=40?2:1}),A=b(!1),c=se({time:null,comment:null}),E=b(!1),q=()=>{const D=C.getCurrentTime();t.solarTime==="Dawn"?(c.time=t.assigned.solarDawnActual?t.assigned.solarDawnActual:D,c.comment=t.assigned.solarDawnComment):t.solarTime==="Noon"?(c.time=t.assigned.solarNoonActual?t.assigned.solarNoonActual:D,c.comment=t.assigned.solarNoonComment):t.solarTime==="Sunset"?(c.time=t.assigned.solarSunsetActual?t.assigned.solarSunsetActual:D,c.comment=t.assigned.solarSunsetComment):t.solarTime==="Midnight"&&(c.time=t.assigned.solarMidnightActual?t.assigned.solarMidnightActual:D,c.comment=t.assigned.solarMidnightComment),E.value=!0};return b(!1),(D,l)=>y(i).day?w((f(),h(de,{key:0,clickable:"",class:"app-list-item"},{default:o(()=>[e(O,{avatar:"",class:"item-icon-section"},{default:o(()=>[e(ie,{rounded:"",icon:"eva-sun-outline",class:"item-icon item-icon-solar-time"})]),_:1}),e(O,{class:"text-color-primary"},{default:o(()=>[k(Q(a.value),1)]),_:1}),n.assigned?(f(),h(O,{key:0,side:""},{default:o(()=>[A.value?(f(),h(pe,{key:0,color:"primary",size:"28px"})):m.value?(f(),h(F,{key:1,color:"negative","text-color":"white",icon:"eva-close-outline",onClick:q},{default:o(()=>l[0]||(l[0]=[k(" Skipped ")])),_:1})):u.value?(f(),h(F,{key:2,clickable:"",onClick:q,outline:"",color:"primary","text-color":"white"},{default:o(()=>[k(Q(r.value),1)]),_:1})):d.value?(f(),h(F,{key:3,clickable:"",onClick:q,"text-color":"white",color:T.value>1?"positive":"primary",icon:T.value===3?"eva-star-outline":T.value===2?"eva-done-all-outline":"eva-checkmark-outline"},{default:o(()=>[k(Q(d.value),1)]),_:1},8,["color","icon"])):z("",!0)]),_:1})):(f(),h(O,{key:1,side:""},{default:o(()=>[e(me,{caption:"",class:"block-caption"},{default:o(()=>l[1]||(l[1]=[k(" No Assignments ")])),_:1})]),_:1}))]),_:1})),[[ne]]):z("",!0)}}),Ve=$({__name:"DashboardSolCard",setup(n){const t=["Dawn","Noon","Sunset","Midnight"],i=r=>{if(!a.day||!a.day.assigned||!a.day.assigned.solar||a.day.assigned.solar.length==0)return null;const u=a.day.assigned.solar[0];return r==="Dawn"&&u.solarDawnExpected||r==="Noon"&&u.solarNoonExpected||r==="Sunset"&&u.solarSunsetExpected||r==="Midnight"&&u.solarMidnightExpected?u:null},a=B();return(r,u)=>{const d=g("app-card");return y(a).day?(f(),h(d,{key:0},{default:o(()=>[e(ce,{separator:""},{default:o(()=>[(f(),V(j,null,re(t,m=>e(Pe,{key:m,"solar-time":m,assigned:i(m)},null,8,["solar-time","assigned"])),64))]),_:1})]),_:1})):z("",!0)}}}),Oe={class:"col-lg-6 col-md-6 col-sm-12 col-xs-12"},Ue={class:"col-lg-6 col-md-6 col-sm-12 col-xs-12"},Re={class:"col-lg-8 col-md-8 col-sm-12 col-xs-12"},Fe={class:"col-lg-4 col-md-4 col-sm-12 col-xs-12"},ze={class:"col-lg-4 col-md-4 col-sm-12 col-xs-12"},We={class:"col-lg-4 col-md-4 col-sm-12 col-xs-12"},He={class:"col-lg-4 col-md-4 col-sm-12 col-xs-12"},Ke={class:"col-lg-6 col-md-6 col-sm-12 col-xs-12"},je={class:"col-lg-6 col-md-6 col-sm-12 col-xs-12"},Ye={class:"col-12"},Ge={class:"col-12"},Xe={class:"col-12"},xt=$({__name:"DashboardPage",setup(n){const t=B();return G(),ue(()=>{t.retrieveLastDay()}),(i,a)=>{const r=g("app-page");return f(),h(r,{gutter:""},{default:o(()=>[s("div",Oe,[e(Qe)]),s("div",Ue,[e(Ve)]),s("div",Re,[e(L,{class:"app-card full-height"},{default:o(()=>[e(p,null,{default:o(()=>a[0]||(a[0]=[k(" 1 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti dolorum ducimus unde corrupti, ex reiciendis voluptatibus repudiandae exercitationem eum officia, laborum laboriosam cum tenetur in debitis aut accusamus animi porro! ")])),_:1})]),_:1})]),s("div",Fe,[e(L,{class:"app-card full-height"},{default:o(()=>[e(p,null,{default:o(()=>a[1]||(a[1]=[k(" 2 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti dolorum ducimus unde corrupti, ex reiciendis voluptatibus repudiandae exercitationem eum officia, laborum laboriosam cum tenetur in debitis aut accusamus animi porro! ")])),_:1})]),_:1})]),s("div",ze,[e(L,{class:"app-card full-heoght"},{default:o(()=>[e(p,null,{default:o(()=>a[2]||(a[2]=[k(" 3 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti dolorum ducimus unde corrupti, ex reiciendis voluptatibus repudiandae exercitationem eum officia, laborum laboriosam cum tenetur in debitis aut accusamus animi porro! ")])),_:1})]),_:1})]),s("div",We,[e(L,{class:"app-card full-heoght"},{default:o(()=>[e(p,null,{default:o(()=>a[3]||(a[3]=[k(" 4 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti dolorum ducimus unde corrupti, ex reiciendis voluptatibus repudiandae exercitationem eum officia, laborum laboriosam cum tenetur in debitis aut accusamus animi porro! ")])),_:1})]),_:1})]),s("div",He,[e(L,{class:"app-card full-height"},{default:o(()=>[e(p,null,{default:o(()=>a[4]||(a[4]=[k(" 5 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti dolorum ducimus unde corrupti, ex reiciendis voluptatibus repudiandae exercitationem eum officia, laborum laboriosam cum tenetur in debitis aut accusamus animi porro! ")])),_:1})]),_:1})]),s("div",Ke,[e(L,{class:"app-card full-height"},{default:o(()=>[e(p,null,{default:o(()=>a[5]||(a[5]=[k(" 6 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti dolorum ducimus unde corrupti, ex reiciendis voluptatibus repudiandae exercitationem eum officia, laborum laboriosam cum tenetur in debitis aut accusamus animi porro! ")])),_:1})]),_:1})]),s("div",je,[e(L,{class:"app-card full-height"},{default:o(()=>[e(p,null,{default:o(()=>a[6]||(a[6]=[k(" 7 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti dolorum ducimus unde corrupti, ex reiciendis voluptatibus repudiandae exercitationem eum officia, laborum laboriosam cum tenetur in debitis aut accusamus animi porro! ")])),_:1})]),_:1})]),s("div",Ye,[e(ke)]),s("div",Ge,[e(_e)]),s("div",Xe,[e(Se)]),e($e)]),_:1})}}});export{xt as default};
