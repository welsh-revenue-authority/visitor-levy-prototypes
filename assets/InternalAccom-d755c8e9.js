import{_ as C,K as T,c as I,A as y,L as V,a3 as k,a4 as B,a5 as N,a6 as P,m as u,u as W,Y as G,r as e,o as d,E as _,g as t,e as c,w as a,H as p,a8 as O,n,t as r,d as h,a9 as j,I as D,p as E,f as H}from"./index-44873a19.js";const L={name:"internal-accom",props:{internalText:{type:Object,required:!0}},emits:["changePage"],components:{WraButton:T,WraTextInput:I,WraHeader:y,WraSubheader:V,GdsSumCard:k,GdsSumCardActions:B,GdsSummaryAccom:N},data(){return{}},methods:{accomComplete(o){return P(o)}},computed:{...u(W,["account"]),...u(G,["providers"]),accomText(){return this.internalText.accomView},getAccoms(){return this.providersStore.getAccoms}}},q=o=>(E("data-v-413a3029"),o=o(),H(),o),z={class:"internal-title-layout mb-6"},F={class:"internal-accom-search mb-10"},K={class:"gds-sum-card-title"},Y=q(()=>t("li",null,[t("button",{class:"button-anchor",id:"viewAccommodation"}," View log ")],-1)),$=["onClick"];function J(o,M,Q,R,U,s){const g=e("wra-header"),b=e("wra-subheader"),f=e("wra-text-input"),w=e("wra-button"),v=e("gds-tag"),x=e("gds-sum-card-actions"),S=e("gds-summary-accom"),A=e("gds-sum-card");return d(),_(p,null,[t("div",z,[c(g,{size:"h2"},{default:a(()=>[n(r(s.accomText.title),1)]),_:1}),c(b,null,{default:a(()=>[n(r(s.accomText.subtitle),1)]),_:1})]),t("div",F,[c(f,{placeholder:s.accomText.search.placeholder},null,8,["placeholder"]),c(w,{color:"obsidian",variant:"flat",ripple:!1,id:"searchButton","prepend-icon":"mdi-magnify"},{default:a(()=>[n(r(s.accomText.search.button),1)]),_:1})]),(d(!0),_(p,null,O(s.getAccoms,(m,l)=>(d(),h(A,null,{title:a(()=>{var i;return[t("div",K,[c(j,{class:"mr-4 pb-1"},{default:a(()=>[n("mdi-home")]),_:1}),t("h3",null,[Object.hasOwn(m,"deregister")?(d(),h(v,{key:0,class:"deregistered-tag",color:"red"},{default:a(()=>[n(r("Deregistered"))]),_:1})):D("",!0),n(" "+r(((i=m.accommodation)==null?void 0:i.accomName)??`${s.accomText.noNamePlaceholder} ${l+1}`),1)])]),c(x,null,{default:a(()=>[Y,t("li",null,[t("button",{class:"button-anchor",id:"changeAccommodation",onClick:X=>o.editProvider(l)}," Change ",8,$)])]),_:2},1024)]}),default:a(()=>[c(S,{"accommodation-details":m.accommodation,"show-edit-buttons":!1},null,8,["accommodation-details"])]),_:2},1024))),256))],64)}const ee=C(L,[["render",J],["__scopeId","data-v-413a3029"]]);export{ee as default};