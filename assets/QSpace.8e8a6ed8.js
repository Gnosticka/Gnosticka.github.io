import{u,a as c}from"./use-dark.cf2023cb.js";import{x as e,c as n,h as r,D as l,g as q}from"./index.7d689aa6.js";var f=e({name:"QCard",props:{...u,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(a,{slots:t}){const{proxy:{$q:s}}=q(),o=c(a,s),d=n(()=>"q-card"+(o.value===!0?" q-card--dark q-dark":"")+(a.bordered===!0?" q-card--bordered":"")+(a.square===!0?" q-card--square no-border-radius":"")+(a.flat===!0?" q-card--flat no-shadow":""));return()=>r(a.tag,{class:d.value},l(t.default))}}),i=e({name:"QSpace",setup(){const a=r("div",{class:"q-space"});return()=>a}});export{f as Q,i as a};