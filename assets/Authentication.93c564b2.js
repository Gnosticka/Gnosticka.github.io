import{x as L,c as R,h as x,D as C,g as N,r as I,aC as j,a4 as z,a3 as M,o as O,X as K,M as F,U as W,an as Y,d as X,aT as G,aU as J,aW as Z,A as P,k as ee,l as te,m as u,f as s,$ as oe,z as p,Y as B,Q as ae}from"./index.5da81bef.js";import{Q as se}from"./QToolbar.8c1d04c4.js";import{Q as E}from"./QCardActions.f17f6950.js";import{Q as V}from"./QSeparator.ff0c546b.js";import{u as ne,a as re}from"./use-dark.4fdee243.js";import{a as ie}from"./TouchSwipe.3cb53dcd.js";import{Q as _,C as le,a as ue}from"./Checkbox.526c285a.js";import{api as y}from"./axios.8e74cc6a.js";import{N as b,A as k,D as de}from"./notification.utils.4992636c.js";import{u as ce}from"./auth-store.c3d3edb2.js";import"./selection.bec2700a.js";import"./use-render-cache.3aae9b27.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./format.054b8074.js";import"./isDesktop.2f94a5f6.js";var pe=L({name:"QBanner",props:{...ne,inlineActions:Boolean,dense:Boolean,rounded:Boolean},setup(i,{slots:t}){const{proxy:{$q:e}}=N(),d=re(i,e),n=R(()=>"q-banner row items-center"+(i.dense===!0?" q-banner--dense":"")+(d.value===!0?" q-banner--dark q-dark":"")+(i.rounded===!0?" rounded-borders":"")),l=R(()=>`q-banner__actions row items-center justify-end col-${i.inlineActions===!0?"auto":"all"}`);return()=>{const c=[x("div",{class:"q-banner__avatar col-auto row items-center self-start"},C(t.avatar)),x("div",{class:"q-banner__content col text-body2"},C(t.default))],h=C(t.action);return h!==void 0&&c.push(x("div",{class:l.value},h)),x("div",{class:n.value+(i.inlineActions===!1&&h!==void 0?" q-banner--top-padding":""),role:"alert"},c)}}}),me=L({name:"QForm",props:{autofocus:Boolean,noErrorFocus:Boolean,noResetFocus:Boolean,greedy:Boolean,onSubmit:Function},emits:["reset","validationSuccess","validationError"],setup(i,{slots:t,emit:e}){const d=N(),n=I(null);let l=0;const c=[];function h(o){const q=typeof o=="boolean"?o:i.noErrorFocus!==!0,$=++l,U=(r,m)=>{e(`validation${r===!0?"Success":"Error"}`,m)},Q=r=>{const m=r.validate();return typeof m.then=="function"?m.then(v=>({valid:v,comp:r}),v=>({valid:!1,comp:r,err:v})):Promise.resolve({valid:m,comp:r})};return(i.greedy===!0?Promise.all(c.map(Q)).then(r=>r.filter(m=>m.valid!==!0)):c.reduce((r,m)=>r.then(()=>Q(m).then(v=>{if(v.valid===!1)return Promise.reject(v)})),Promise.resolve()).catch(r=>[r])).then(r=>{if(r===void 0||r.length===0)return $===l&&U(!0),!0;if($===l){const{comp:m,err:v}=r[0];if(v!==void 0&&console.error(v),U(!1,m),q===!0){const T=r.find(({comp:D})=>typeof D.focus=="function"&&K(D.$)===!1);T!==void 0&&T.comp.focus()}}return!1})}function f(){l++,c.forEach(o=>{typeof o.resetValidation=="function"&&o.resetValidation()})}function a(o){o!==void 0&&F(o);const q=l+1;h().then($=>{q===l&&$===!0&&(i.onSubmit!==void 0?e("submit",o):o!==void 0&&o.target!==void 0&&typeof o.target.submit=="function"&&o.target.submit())})}function g(o){o!==void 0&&F(o),e("reset"),W(()=>{f(),i.autofocus===!0&&i.noResetFocus!==!0&&w()})}function w(){ie(()=>{if(n.value===null)return;const o=n.value.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||n.value.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||n.value.querySelector("[autofocus], [data-autofocus]")||Array.prototype.find.call(n.value.querySelectorAll("[tabindex]"),q=>q.tabIndex!==-1);o!=null&&o.focus({preventScroll:!0})})}j(Y,{bindComponent(o){c.push(o)},unbindComponent(o){const q=c.indexOf(o);q!==-1&&c.splice(q,1)}});let A=!1;return z(()=>{A=!0}),M(()=>{A===!0&&i.autofocus===!0&&w()}),O(()=>{i.autofocus===!0&&w()}),Object.assign(d.proxy,{validate:h,resetValidation:f,submit:a,reset:g,focus:w,getValidationComponents:()=>c}),()=>x("form",{class:"q-form",ref:n,onSubmit:a,onReset:g},C(t.default))}});const S="/api/profile",H="/api/backup";class fe{async create(t){try{const e=await y.post(`${S}`,t);return b.notifySuccess(e.data),e}catch(e){e.response.status===400?b.notifyError(e.response.data):(b.notifyError(e.response.data.message),console.warn(`Sign up failed! 
-code: ${e.response.data.errorCode} 
-message: ${e.response.data.message} 
-status: ${e.response.status}`))}}async updateProfile(){const t=localStorage.getItem("account-id");try{const e=await y.put(`${S}/${t}`)}catch(e){b.notifyError(e.response.data.message),console.warn(`Profile loading failed! 
-code: ${e.response.data.errorCode} 
-message: ${e.response.data.message} 
-status: ${e.response.status}`)}}async getProfile(t){try{const e=await y.get(`${S}`,{headers:k.getAuthHeaderFromToken(t.data)});return b.notifySuccess(`You successfuly sidned in as ${e.data.name}`),e.data}catch(e){b.notifyError(e.response.data.message),console.warn(`Profile loading failed! 
-code: ${e.response.data.errorCode} 
-message: ${e.response.data.message} 
-status: ${e.response.status}`)}}deleteProfile(){return y.delete(`${S}`,{headers:k.getAuthHeader()}).then(t=>(b.notifySuccess(t.data),t)).catch(function(t){b.notifyError(t.response.data.message),console.warn(`Deleting failed! 
-code: ${t.response.data.errorCode} 
-message: ${t.response.data.message} 
-status: ${t.response.status}`)})}backup(){return y.get(`${H}/dump`,{headers:k.getAuthHeader(),responseType:"blob"}).then(t=>{const e=window.URL.createObjectURL(new Blob([t.data])),d=document.createElement("a");d.href=e;const n=t.request.getResponseHeader("Content-Disposition"),l=n.substring(22,n.length-1);d.setAttribute("download",l),document.body.appendChild(d),d.click()}).catch(function(t){console.error("File download error: ",t)})}restore(t){return y.post(`${H}/restore`,t,{headers:k.getHeadersForUpload()}).then(e=>e.data)}}var ge=new fe;const ve="/api";class be{async login(t){try{const e=await y.post(`${ve}/auth`,t),d=await ge.getProfile(e);return{tokens:e.data,account:d}}catch(e){console.log(e),b.notifyError(e)}}tryToRefresh(){const t=localStorage.getItem("refresh-token");!t||console.log(t)}usercontent(){const t=localStorage.getItem("user-token"),e={Authorization:"Bearer "+t};return y.get("/secured",{headers:e})}admincontent(){const t=localStorage.getItem("user-token"),e={Authorization:"Bearer "+t};return y.get("/admin",{headers:e})}}var ye=new be;const he={class:"app-pa-page"},we={class:"constrain-auth-form"},qe={class:"q-my-md text-color-paragraph"},xe={class:"q-my-md text-color-paragraph"},Ve=X({__name:"Authentication",setup(i){const t=I("sign-in"),e=G();J();const d=ce(),n=Z({email:null,password:null,timestamp:null}),l=I(!1),c=R(()=>n.email&&n.password),h=()=>{n.timestamp=de.getTimestamp(),l.value=!0,ye.login(n).then(f=>{console.log("get data from service",f),d.login(f),l.value=!1,e.push("/"),clearForm()}).catch(f=>{console.log(f),l.value=!1})};return(f,a)=>{const g=P("TextInput"),w=P("AppBtn"),A=P("app-page");return ee(),te(A,{class:"q-pa-lg bg-card"},{default:u(()=>[s(se,{class:""},{default:u(()=>[s(oe,{size:"48px"},{default:u(()=>a[9]||(a[9]=[p("img",{src:"logo.png"},null,-1)])),_:1})]),_:1}),p("div",he,[p("div",we,[s(ue,{modelValue:t.value,"onUpdate:modelValue":a[8]||(a[8]=o=>t.value=o)},{default:u(()=>[s(_,{name:"sign-in"},{default:u(()=>[s(me,{onSubmit:h},{default:u(()=>[a[12]||(a[12]=p("div",{class:"text-h4 text-color-title text-weight-bold q-mb-lg"},"Welcome back!",-1)),s(g,{value:n.email,"onUpdate:value":a[0]||(a[0]=o=>n.email=o),title:"Email Address",class:"q-mb-md"},null,8,["value"]),s(g,{value:n.password,"onUpdate:value":a[1]||(a[1]=o=>n.password=o),title:"Password",class:"q-mb-lg"},null,8,["value"]),s(E,{class:"q-pa-none q-mb-lg",align:"between"},{default:u(()=>[p("span",{class:"app-link cursor-pointer text-color-paragraph",onClick:a[2]||(a[2]=o=>t.value="reset-password")},"Forgot Password?"),s(w,{class:"full-width q-mt-md q-mb-lg",label:"Sign In",loading:l.value,type:"submit",disable:!c.value},null,8,["loading","disable"])]),_:1}),s(V),p("div",qe,[a[10]||(a[10]=B(" Don\u2019t you have an account? ")),p("span",{class:"text-primary cursor-pointer text-weight-bold",onClick:a[3]||(a[3]=o=>t.value="sign-up")},"Sign Up")]),s(pe,{class:"app-banner-warning rounded-borders"},{avatar:u(()=>[s(ae,{name:"signal_wifi_off"})]),default:u(()=>[a[11]||(a[11]=B(" To support you during the pandemic super pro features are free until March 31st. "))]),_:1})]),_:1})]),_:1}),s(_,{name:"reset-password"},{default:u(()=>[a[13]||(a[13]=p("div",{class:"text-h4 text-color-title text-weight-bold q-mb-lg"},"Reset your Password",-1)),s(g,{title:"Email Address",required:"",class:"q-mb-md"}),s(E,{class:"q-pa-none q-mb-lg",align:"between"},{default:u(()=>[p("span",{class:"app-link cursor-pointer text-color-paragraph",onClick:a[4]||(a[4]=o=>t.value="sign-in")},"Back"),s(w,{label:"Send Reset Link",onClick:a[5]||(a[5]=o=>f.$router.push("/"))})]),_:1})]),_:1}),s(_,{name:"sign-up"},{default:u(()=>[a[15]||(a[15]=p("div",{class:"text-h4 text-color-title text-weight-bold q-mb-lg"},"Create your Account",-1)),s(g,{title:"Email Address",required:"",class:"q-mb-md"}),s(g,{title:"Username",required:"",class:"q-mb-md"}),s(g,{title:"Password",required:"",class:"q-mb-md"}),s(g,{title:"Confirm Password",required:"",class:"q-mb-lg"}),s(E,{class:"q-pa-none q-mb-lg",align:"between"},{default:u(()=>[s(le,{label:"Email me about product news"}),s(w,{label:"Sign Up",onClick:a[6]||(a[6]=o=>f.$router.push("/"))})]),_:1}),s(V),p("div",xe,[a[14]||(a[14]=B(" Have an account? ")),p("span",{class:"text-primary cursor-pointer text-weight-bold",onClick:a[7]||(a[7]=o=>t.value="sign-in")},"Sign In")])]),_:1})]),_:1},8,["modelValue"])])])]),_:1})}}});export{Ve as default};
