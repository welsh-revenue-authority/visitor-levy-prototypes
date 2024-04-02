import{_ as T,K as V,c as C,y as k,L as S,W as G,A as I,U as P,M as N,N as A,O as W,P as H,Q as z,R as B,S as D,G as L,i as K,j as M,k as R,l as q,X as J,m as O,Y as U,r as d,o as j,E,e,w as t,g as o,Z as F,t as u,H as Q,n as a,p as X,f as Y}from"./index-3a3882dc.js";const Z={name:"internal-home",props:{internalText:{type:Object,required:!0}},emits:["changePage"],components:{WraButton:V,WraTextInput:C,WraServiceLogo:k,WraSubheader:S,WraCard:G,WraHeader:I,UserToDo:P,GdsTable:N,GdsTableBody:A,GdsTableData:W,GdsTableHead:H,GdsTableHeader:z,GdsTableRow:B,GdsTag:D,GdsNotify:L,GdsNotifyContent:K,GdsNotifyHeader:M,GdsNotifyHeading:R,GdsNotifyTitle:q,WraInset:J},data(){return{searchInput:""}},methods:{onSearch(){this.$router.push({name:"internalSearch",query:{q:this.searchInput}})}},computed:{...O(U,["providers"]),homeText(){return this.internalText.homeView}}},c=i=>(X("data-v-f933f1ef"),i=i(),Y(),i),$={class:"internal-accom-search mb-12"},ee={class:"my-8"},te={class:"mb-4"},ae={class:"pa-4"},oe=c(()=>o("p",{class:"inset-large-text mb-2"},"19,332,274",-1)),ne={class:"button-anchor standalone-anchor"},le={class:"pa-4"},se=c(()=>o("p",{class:"inset-large-text mb-2"},"£38,664,548",-1)),ue={class:"button-anchor standalone-anchor"},ce=c(()=>o("button",{class:"button-anchor"}," View ",-1)),re=c(()=>o("button",{class:"button-anchor"}," View ",-1)),de=c(()=>o("button",{class:"button-anchor"}," View ",-1)),_e=c(()=>o("button",{class:"button-anchor"}," View ",-1)),ie={class:"my-8"},me=c(()=>o("button",{class:"button-anchor"}," View ",-1)),fe=c(()=>o("button",{class:"button-anchor"}," View ",-1)),he=c(()=>o("button",{class:"button-anchor"}," View ",-1)),be={class:"my-8"},pe={class:"mb-4"},we=c(()=>o("div",{class:"pa-4"},[o("p",{class:"inset-large-text mb-2"},"31,255"),o("button",{class:"button-anchor standalone-anchor"}," Properties registered ")],-1)),ge=c(()=>o("div",{class:"pa-4"},[o("p",{class:"inset-large-text mb-2"},"431"),o("button",{class:"button-anchor standalone-anchor"}," in the last 7 days ")],-1)),ye=c(()=>o("button",{class:"button-anchor"}," View ",-1)),ve=c(()=>o("button",{class:"button-anchor"}," View ",-1)),xe=c(()=>o("button",{class:"button-anchor"}," View ",-1)),Te={class:"my-8"},Ve=c(()=>o("button",{class:"button-anchor"}," View ",-1)),Ce=c(()=>o("button",{class:"button-anchor"}," View ",-1)),ke=c(()=>o("button",{class:"button-anchor"}," View ",-1)),Se={class:"my-8"},Ge={class:"mb-4"},Ie={class:"pa-4"},Pe=c(()=>o("p",{class:"inset-large-text mb-2"}," 55,491 ",-1)),Ne={class:"button-anchor standalone-anchor"},Ae={class:"pa-4"},We=c(()=>o("p",{class:"inset-large-text mb-2"},"1,822",-1)),He={class:"button-anchor standalone-anchor"},ze=c(()=>o("button",{class:"button-anchor"}," View ",-1)),Be=c(()=>o("button",{class:"button-anchor"}," View ",-1)),De=c(()=>o("button",{class:"button-anchor"}," View ",-1)),Le={class:"button-anchor standalone-anchor"};function Ke(i,_,Me,Re,y,s){const m=d("wra-header"),v=d("wra-text-input"),x=d("wra-button"),f=d("wra-inset"),l=d("gds-table-header"),r=d("gds-table-row"),h=d("gds-table-head"),n=d("gds-table-data"),b=d("gds-table-body"),p=d("gds-table"),g=d("gds-tag");return j(),E(Q,null,[e(m,{size:"h2",class:"mb-6"},{default:t(()=>[a(u(s.homeText.title),1)]),_:1}),o("div",$,[e(v,{modelValue:y.searchInput,"onUpdate:modelValue":_[0]||(_[0]=w=>y.searchInput=w),placeholder:s.homeText.search.placeholder,onKeypress:F(s.onSearch,["enter"])},null,8,["modelValue","placeholder","onKeypress"]),e(x,{color:"obsidian",variant:"flat",ripple:!1,id:"searchButton","prepend-icon":"mdi-magnify",onClick:s.onSearch},{default:t(()=>[a(u(s.homeText.search.button),1)]),_:1},8,["onClick"])]),o("div",ee,[e(m,{size:"h3",class:"mb-4"},{default:t(()=>[a(u(s.homeText.levy.title),1)]),_:1}),o("div",te,[e(f,{color:"blue"},{default:t(()=>[o("div",ae,[oe,o("button",ne,u(s.homeText.levy.nights+" 2027-2028"),1)])]),_:1}),e(f,{color:"blue",background:"dark-grey"},{default:t(()=>[o("div",le,[se,o("button",ue,u(s.homeText.levy.collected+" 2027-2028"),1)])]),_:1})]),e(p,null,{default:t(()=>[e(h,null,{default:t(()=>[e(r,null,{default:t(()=>[e(l,{scope:"col"},{default:t(()=>[a(u(s.homeText.levy.table.period),1)]),_:1}),e(l,{scope:"col",numeric:!0},{default:t(()=>[a(u(s.homeText.levy.table.amount),1)]),_:1}),e(l,{scope:"col",numeric:!0},{default:t(()=>[a(u(s.homeText.levy.table.stays),1)]),_:1}),e(l,{scope:"col",numeric:!0},{default:t(()=>[a(u(s.homeText.levy.table.accom),1)]),_:1}),e(l,{scope:"col",numeric:!0})]),_:1})]),_:1}),e(b,null,{default:t(()=>[e(r,null,{default:t(()=>[e(l,{scope:"row"},{default:t(()=>[a(" Jan - Mar 2028 ")]),_:1}),e(n,{numeric:!0},{default:t(()=>[a(" 0 ")]),_:1}),e(n,{numeric:!0},{default:t(()=>[a(" 0 ")]),_:1}),e(n,{numeric:!0},{default:t(()=>[a(" 41,223 ")]),_:1}),e(n,{numeric:!0},{default:t(()=>[ce]),_:1})]),_:1}),e(r,null,{default:t(()=>[e(l,{scope:"row"},{default:t(()=>[a(" Oct - Dec 2027 ")]),_:1}),e(n,{numeric:!0},{default:t(()=>[a(" 11,207,382 ")]),_:1}),e(n,{numeric:!0},{default:t(()=>[a(" 5,603,691 ")]),_:1}),e(n,{numeric:!0},{default:t(()=>[a(" 39,123 ")]),_:1}),e(n,{numeric:!0},{default:t(()=>[re]),_:1})]),_:1}),e(r,null,{default:t(()=>[e(l,{scope:"row"},{default:t(()=>[a(" Jul - Sep 2027 ")]),_:1}),e(n,{numeric:!0},{default:t(()=>[a(" 15,476,862 ")]),_:1}),e(n,{numeric:!0},{default:t(()=>[a(" 7,738,430 ")]),_:1}),e(n,{numeric:!0},{default:t(()=>[a(" 37,234 ")]),_:1}),e(n,{numeric:!0},{default:t(()=>[de]),_:1})]),_:1}),e(r,null,{default:t(()=>[e(l,{scope:"row"},{default:t(()=>[a(" Apr - Jun 2027 ")]),_:1}),e(n,{numeric:!0},{default:t(()=>[a(" 11,980,304 ")]),_:1}),e(n,{numeric:!0},{default:t(()=>[a(" 5,990,152 ")]),_:1}),e(n,{numeric:!0},{default:t(()=>[a(" 37,003 ")]),_:1}),e(n,{numeric:!0},{default:t(()=>[_e]),_:1})]),_:1})]),_:1})]),_:1}),o("button",{class:"button-anchor standalone-anchor",onClick:_[1]||(_[1]=w=>i.$emit("changePage","AccommodationView"))},u(s.homeText.accommodation.link),1)]),o("div",ie,[e(m,{size:"h3",class:"mb-4"},{default:t(()=>[a(u(s.homeText.attention.title+" (12)"),1)]),_:1}),e(p,null,{default:t(()=>[e(h,null,{default:t(()=>[e(r,null,{default:t(()=>[e(l,{scope:"col"},{default:t(()=>[a(" Name ")]),_:1}),e(l,{scope:"col",numeric:!0},{default:t(()=>[a(" Issue ")]),_:1}),e(l,{scope:"col",numeric:!0})]),_:1})]),_:1}),e(b,null,{default:t(()=>[e(r,null,{default:t(()=>[e(l,{scope:"row"},{default:t(()=>[a(" Randal Homes Limited ")]),_:1}),e(n,{numeric:!0},{default:t(()=>[e(g,null,{default:t(()=>[a(" Starts soon ")]),_:1})]),_:1}),e(n,{numeric:!0},{default:t(()=>[me]),_:1})]),_:1}),e(r,null,{default:t(()=>[e(l,{scope:"row"},{default:t(()=>[a(" 18 Gwent Lane, Portwys, PW32... ")]),_:1}),e(n,{numeric:!0},{default:t(()=>[e(g,{color:"grey"},{default:t(()=>[a(" Address not found ")]),_:1})]),_:1}),e(n,{numeric:!0},{default:t(()=>[fe]),_:1})]),_:1}),e(r,null,{default:t(()=>[e(l,{scope:"row"},{default:t(()=>[a(" 54 Cwmwl Mews, Swandiff SD21... ")]),_:1}),e(n,{numeric:!0},{default:t(()=>[e(g,{color:"yellow"},{default:t(()=>[a(" Starts soon ")]),_:1})]),_:1}),e(n,{numeric:!0},{default:t(()=>[he]),_:1})]),_:1})]),_:1})]),_:1}),o("button",{class:"button-anchor standalone-anchor",onClick:_[2]||(_[2]=w=>i.$emit("changePage","AccommodationView"))},u(s.homeText.attention.link),1)]),o("div",be,[e(m,{size:"h3",class:"mb-4"},{default:t(()=>[a(u(s.homeText.accommodation.title+" (12)"),1)]),_:1}),o("div",pe,[e(f,{color:"yellow"},{default:t(()=>[we]),_:1}),e(f,{color:"yellow",background:"dark-grey"},{default:t(()=>[ge]),_:1})]),e(p,null,{default:t(()=>[e(h,null,{default:t(()=>[e(r,null,{default:t(()=>[e(l,{scope:"col"},{default:t(()=>[a(" Address ")]),_:1}),e(l,{scope:"col",numeric:!0},{default:t(()=>[a(" When ")]),_:1}),e(l,{scope:"col",numeric:!0})]),_:1})]),_:1}),e(b,null,{default:t(()=>[e(r,null,{default:t(()=>[e(l,{scope:"row"},{default:t(()=>[a(" 18 Gwent Lane, Portwys, PW32... ")]),_:1}),e(n,{numeric:!0},{default:t(()=>[a(" 2 minutes ago ")]),_:1}),e(n,{numeric:!0},{default:t(()=>[ye]),_:1})]),_:1}),e(r,null,{default:t(()=>[e(l,{scope:"row"},{default:t(()=>[a(" 3 Randal Close, Conport, CP18... ")]),_:1}),e(n,{numeric:!0},{default:t(()=>[a(" 7 minutes ago ")]),_:1}),e(n,{numeric:!0},{default:t(()=>[ve]),_:1})]),_:1}),e(r,null,{default:t(()=>[e(l,{scope:"row"},{default:t(()=>[a(" 71 Nunney Avenue, Swandiff, SD32... ")]),_:1}),e(n,{numeric:!0},{default:t(()=>[a(" 23 minutes ago ")]),_:1}),e(n,{numeric:!0},{default:t(()=>[xe]),_:1})]),_:1})]),_:1})]),_:1}),o("button",{class:"button-anchor standalone-anchor",onClick:_[3]||(_[3]=w=>i.$emit("changePage","AccommodationView"))},u(s.homeText.accommodation.link),1)]),o("div",Te,[e(m,{size:"h3",class:"mb-4"},{default:t(()=>[a(u(s.homeText.localAuth.title+" (22)"),1)]),_:1}),e(p,null,{default:t(()=>[e(h,null,{default:t(()=>[e(r,null,{default:t(()=>[e(l,{scope:"col"},{default:t(()=>[a(" Name ")]),_:1}),e(l,{scope:"col",numeric:!0},{default:t(()=>[a(" Properties ")]),_:1}),e(l,{scope:"col",numeric:!0})]),_:1})]),_:1}),e(b,null,{default:t(()=>[e(r,null,{default:t(()=>[e(l,{scope:"row"},{default:t(()=>[a(" Conport Country Council ")]),_:1}),e(n,{numeric:!0},{default:t(()=>[a(" 1623 ")]),_:1}),e(n,{numeric:!0},{default:t(()=>[Ve]),_:1})]),_:1}),e(r,null,{default:t(()=>[e(l,{scope:"row"},{default:t(()=>[a(" Swandiff County Council ")]),_:1}),e(n,{numeric:!0},{default:t(()=>[a(" 1592 ")]),_:1}),e(n,{numeric:!0},{default:t(()=>[Ce]),_:1})]),_:1}),e(r,null,{default:t(()=>[e(l,{scope:"row"},{default:t(()=>[a(" Carmouth County Council ")]),_:1}),e(n,{numeric:!0},{default:t(()=>[a(" 1572 ")]),_:1}),e(n,{numeric:!0},{default:t(()=>[ke]),_:1})]),_:1})]),_:1})]),_:1}),o("button",{class:"button-anchor standalone-anchor",onClick:_[4]||(_[4]=w=>i.$emit("changePage","AccommodationView"))},u(s.homeText.localAuth.link),1)]),o("div",Se,[e(m,{size:"h3",class:"mb-4"},{default:t(()=>[a(u(s.homeText.licences.title),1)]),_:1}),o("div",Ge,[e(f,{color:"red"},{default:t(()=>[o("div",Ie,[Pe,o("button",Ne,u(s.homeText.licences.valid),1)])]),_:1}),e(f,{color:"red",background:"dark-grey"},{default:t(()=>[o("div",Ae,[We,o("button",He,u(s.homeText.licences.expired),1)])]),_:1})]),e(p,null,{default:t(()=>[e(h,null,{default:t(()=>[e(r,null,{default:t(()=>[e(l,{scope:"col"},{default:t(()=>[a(u(s.homeText.licences.table.reason),1)]),_:1}),e(l,{scope:"col",numeric:!0},{default:t(()=>[a(u(s.homeText.licences.table.properties),1)]),_:1}),e(l,{scope:"col",numeric:!0})]),_:1})]),_:1}),e(b,null,{default:t(()=>[e(r,null,{default:t(()=>[e(l,{scope:"row"},{default:t(()=>[a(" Incorrect insurance ")]),_:1}),e(n,{numeric:!0},{default:t(()=>[a(" 318 ")]),_:1}),e(n,{numeric:!0},{default:t(()=>[ze]),_:1})]),_:1}),e(r,null,{default:t(()=>[e(l,{scope:"row"},{default:t(()=>[a(" No fire risk assessment ")]),_:1}),e(n,{numeric:!0},{default:t(()=>[a(" 293 ")]),_:1}),e(n,{numeric:!0},{default:t(()=>[Be]),_:1})]),_:1}),e(r,null,{default:t(()=>[e(l,{scope:"row"},{default:t(()=>[a(" Missing gas certificate ")]),_:1}),e(n,{numeric:!0},{default:t(()=>[a(" 139 ")]),_:1}),e(n,{numeric:!0},{default:t(()=>[De]),_:1})]),_:1})]),_:1})]),_:1}),o("button",Le,u(s.homeText.licences.link),1)])],64)}const Je=T(Z,[["render",Ke],["__scopeId","data-v-f933f1ef"]]);export{Je as default};