import{W as E,a as O,b as ie,_ as q,c as ce,d as N,U as le,G as z,e as M,f as U,g as Y,h as J,i as Q,j as W,s as K,m as h,u as D,k as $,l as T,r,o as d,n as p,p as s,q as o,w as t,t as l,v as c,F as k,x as B,y as v,z as L,A as G,B as j,C as de,D as X,E as Z,H as ue,I,T as V,V as R,J as me,K as _e,L as pe,M as ee,N as fe,O as he,P as be,Q as ge,R as ve,S as te,X as we,Y as oe,Z as F,$ as ne,a0 as ye,a1 as H,a2 as ae,a3 as Pe,a4 as se,a5 as xe,a6 as Ce,a7 as Se}from"./index-e45b9276.js";import{G as Te,a as ke,b as Le,c as Ve,d as Ae}from"./GdsNotifyTitle-301e8f8a.js";const De={name:"home-view",props:{homeText:{type:Object,required:!0}},emits:["changePage"],components:{WraButton:E,WraServiceLogo:O,WraSubheader:ie,WraDivider:q,WraCard:ce,WraHeader:N,UserToDo:le,GdsTable:z,GdsTableBody:M,GdsTableData:U,GdsTableHead:Y,GdsTableHeader:J,GdsTableRow:Q,GdsTag:W,GdsNotify:Te,GdsNotifyContent:ke,GdsNotifyHeader:Le,GdsNotifyHeading:Ve,GdsNotifyTitle:Ae},data(){return{accomProviderList:{}}},methods:{convertReadable:function(e){return e?e="Yes":e="No",e}},created(){if(this.accomProviderList=JSON.parse(JSON.stringify(this.providersStore.getAccoms)),this.accomPresent=this.accomProviderList.length>0,!!this.accomPresent)for(const e of this.accomProviderList)Object.keys(e).length<=0||"accomodation"in e&&(e.accommodation.accomType=K(e.accommodation.accomType)??"",e.accommodation.accomMainRes=this.convertReadable(e.accommodation.accomMainRes)??"",e.accommodation.responsibleCurrentYear=this.convertReadable(e.accommodation.responsibleCurrentYear)??"")},computed:{...h(D,["account"]),...h($,["providers"])}},Ie={key:0};function Ne(e,a,u,C,i,n){const b=r("wra-header"),_=r("gds-table-header"),m=r("gds-table-head"),f=r("gds-table-data"),S=r("gds-table-row"),P=r("gds-table-body"),x=r("gds-table");return d(),p(k,null,[s("header",null,[o(b,{size:"h2",class:"pb-6"},{default:t(()=>[l(c(u.homeText.homeView.title),1)]),_:1})]),i.accomProviderList.length>0?(d(),p("div",Ie,[o(x,{caption:"Accommodation registered"},{default:t(()=>[o(m,null,{default:t(()=>[o(_,{scope:"col"},{default:t(()=>[l(" Name ")]),_:1}),o(_,{scope:"col"},{default:t(()=>[l(" Address ")]),_:1}),o(_,{numeric:!0,scope:"col"},{default:t(()=>[l(" Registered ")]),_:1}),o(_,{numeric:!0,scope:"col"},{default:t(()=>[l(" Council ")]),_:1}),o(_,{numeric:!0,scope:"col"})]),_:1}),o(P,null,{default:t(()=>[(d(!0),p(k,null,B(i.accomProviderList,(g,w)=>(d(),v(S,null,{default:t(()=>[o(_,null,{default:t(()=>{var y;return[l(c(((y=g.accommodation)==null?void 0:y.accomName)??`${u.homeText.accommodationView.noNamePlaceholder} ${w+1}`),1)]}),_:2},1024),o(f,{scope:"row"},{default:t(()=>[l(c(g.accommodation.address.postcode),1)]),_:2},1024),o(f,{numeric:!0},{default:t(()=>[l(c(new Date().toLocaleDateString()),1)]),_:1}),o(f,{numeric:!0},{default:t(()=>[l(" Cardiff ")]),_:1}),o(f,{numeric:!0},{default:t(()=>[s("button",{class:"button-anchor",onClick:a[0]||(a[0]=y=>e.$emit("changePage","AccommodationView"))}," View ")]),_:1})]),_:2},1024))),256))]),_:1})]),_:1}),s("button",{class:"mb-8 button-anchor standalone-anchor",onClick:a[1]||(a[1]=g=>e.$emit("changePage","AccommodationView"))}," View all registered accommodation ")])):L("",!0)],64)}const $e=T(De,[["render",Ne]]);const Ee={name:"accommodation-view",props:{homeText:{type:Object,required:!0}},emits:["changePage"],components:{WraButton:E,WraServiceLogo:O,WraViewTitle:G,WraHeader:N,WraDivider:q,WraValidationTooltip:j,GdsSummaryAccom:de,GdsSumCard:X,GdsSumCardActions:Z,GdsTag:W},data(){return{accomProviderList:[],accomPresent:!1,panels:[],tab:[],showLinkError:!1}},methods:{convertReadable:function(e){return e?e="Yes":e="No",e},editField:function(e,a){this.formStateStore.startEdit(a,[a],"AccommodationView"),this.$router.push({name:"form",params:{formName:"registration"}})},startProvider:function(){this.$router.push({name:"form",params:{formName:"registration"}})},editProvider:function(e){this.providersStore.setAccomIndex(e),this.$emit("changePage","EditProperty")},changePage:function(e){currentView=e},accomCompleteWrapper:function(e){return ue(e)}},created(){this.accomProviderList=JSON.parse(JSON.stringify(this.providersStore.getAccoms));for(const e of this.accomProviderList)if(!(Object.keys(e).length<=0)){if("accomodation"in e&&(e.accommodation.accomType=K(e.accommodation.accomType)??"",e.accommodation.accomMainRes=this.convertReadable(e.accommodation.accomMainRes)??"",e.accommodation.responsibleCurrentYear=this.convertReadable(e.accommodation.responsibleCurrentYear)??""),"contactPerson"in e){if("langPref"in e.contactPerson)try{e.contactPerson.langPref=e.contactPerson.langPref.charAt(0).toUpperCase()+e.contactPerson.langPref.slice(1)}catch{e.contactPerson.langPref=""}"contactPref"in e.contactPerson&&(e.contactPerson.contactPref.forEach((a,u)=>{u<=0&&(e.contactPerson.contactPref[u]=a.charAt(0).toUpperCase()+a.slice(1))}),e.contactPerson.contactPref=e.contactPerson.contactPref.join(", "))}"levy"in e&&(e.levy.annualReturn=this.convertReadable(e.levy.annualReturn)??"")}this.accomPresent=this.accomProviderList.length>0},computed:{...h($,["providers"]),...h(I,["formState"]),accomText(){return this.homeText.accommodationView}}},Oe=e=>(me("data-v-929b0d5b"),e=e(),_e(),e),Be=Oe(()=>s("span",{class:"sr-only"},"Error:",-1)),Ge={class:"mb-4"},Re={class:"gds-sum-card-title"},qe={key:0},We=["onClick"],je=["onClick"],Fe={key:1,class:"no-provider pa-4"};function He(e,a,u,C,i,n){const b=r("wra-header"),_=r("wra-validation-tooltip"),m=r("wra-button"),f=r("gds-tag"),S=r("gds-sum-card-actions"),P=r("gds-summary-accom"),x=r("gds-sum-card");return d(),p(k,null,[o(b,{size:"h2",class:"mb-6"},{default:t(()=>[l(c(n.accomText.title),1)]),_:1}),o(V,{name:"translate",mod:"out-in"},{default:t(()=>[i.showLinkError?(d(),p("div",{class:"my-4",key:n.accomText.noLiableLink},[o(_,{type:"wra-error",role:"alert"},{default:t(()=>[Be,l(" "+c(n.accomText.noLiableLink),1)]),_:1})])):L("",!0)]),_:1}),o(m,{variant:"flat",color:"#019e1e",ripple:!0,class:"mb-4",lang:"en","prepend-icon":"mdi-home-plus",onClick:a[0]||(a[0]=g=>e.$router.push({name:"form",params:{formName:"registration"}}))},{default:t(()=>[l(c(n.accomText.addAccommodation),1)]),_:1}),i.accomPresent?(d(!0),p(k,{key:0},B(i.accomProviderList,(g,w)=>(d(),p("div",Ge,["accommodation"in g?(d(),v(x,{key:0},{title:t(()=>{var y;return[s("div",Re,[o(R,{class:"mr-4 pb-1"},{default:t(()=>[l("mdi-home")]),_:1}),s("h3",null,[Object.hasOwn(g,"deregister")?(d(),v(f,{key:0,class:"deregistered-tag",color:"red"},{default:t(()=>[l(c("Deregistered"))]),_:1})):L("",!0),l(" "+c(((y=g.accommodation)==null?void 0:y.accomName)??`${n.accomText.noNamePlaceholder} ${w+1}`),1)])]),o(S,null,{default:t(()=>[n.accomCompleteWrapper(i.accomProviderList[w])?L("",!0):(d(),p("li",qe,[s("button",{class:"button-anchor",id:"fill-levy-button",onClick:A=>n.startProvider(w)},c(n.accomText.incomplete),9,We)])),s("li",null,[s("button",{class:"button-anchor",id:"change-accommodation",onClick:A=>n.editProvider(w)}," Change ",8,je)])]),_:2},1024)]}),default:t(()=>[o(P,{"accommodation-details":g.accommodation,onEditPressed:y=>n.editField(w,y)},null,8,["accommodation-details","onEditPressed"])]),_:2},1024)):(d(),p("div",Fe,[o(m,{color:"#c85442",variant:"flat",ripple:!1,class:"pa-8",id:"nextButton",onClick:y=>n.startProvider(w)},{default:t(()=>[l(c(n.accomText.completeReg),1)]),_:2},1032,["onClick"])]))]))),256)):L("",!0)],64)}const ze=T(Ee,[["render",He],["__scopeId","data-v-929b0d5b"]]);const Me={name:"account-view",props:{homeText:{type:Object,requried:!0},accountInfo:{type:Object,required:!0}},emits:["editPressed"],components:{WraSimpleTable:pe,WraHeader:N,WraViewTitle:G,GdsTable:z,GdsTableBody:M,GdsTableData:U,GdsTableHead:Y,GdsTableHeader:J,GdsTableRow:Q,GdsTag:W,WraButton:E},data(){return{accountInfo:{},members:[]}},methods:{convertReadable:function(e){return e?e="Yes":e="No",e},startAddAccount:function(){this.formStateStore.setReturnPage("AccountView")},editMember:function(e){this.accountStore.setMemberIndex(e),this.$router.push({name:"addAccount"})}},computed:{...h(I,["formState"]),...h(D,["account"])},created(){this.accountInfo=structuredClone(ee(this.accountStore.getAccountDetails)),this.members=this.accountStore.getMembers}},Ue=["onClick"],Ye={class:"div-danger-zone mt-6 pa-sm-8 pa-4"},Je={class:"danger-zone-grid my-4"},Qe=s("p",{class:"danger-zone-text"}," Make another person or organisation liable for all your registered properties, their levies and licences. ",-1),Ke=s("p",{class:"danger-zone-text"}," Deregister all your properties and stop all liabilities including levies and licences. ",-1);function Xe(e,a,u,C,i,n){const b=r("wra-header"),_=r("gds-table-header"),m=r("gds-table-data"),f=r("gds-table-row"),S=r("gds-table-body"),P=r("gds-table"),x=r("gds-table-head"),g=r("gds-tag"),w=r("router-link"),y=r("wra-button");return d(),p(k,null,[o(b,{size:"h2",class:"mb-6"},{default:t(()=>[l(c(u.homeText.settings.title),1)]),_:1}),o(P,{class:"mt-6",caption:"Account information"},{default:t(()=>[o(S,null,{default:t(()=>[o(f,null,{default:t(()=>[o(_,{scope:"row"},{default:t(()=>[l(" Email ")]),_:1}),o(m,{numeric:!0},{default:t(()=>[l(c(i.accountInfo.email??"No email"),1)]),_:1})]),_:1})]),_:1})]),_:1}),o(P,{class:"mt-6",caption:"Account members"},{default:t(()=>[o(x,null,{default:t(()=>[o(f,null,{default:t(()=>[o(_,null,{default:t(()=>[l("Email")]),_:1}),o(_,{scope:"col",numeric:!0},{default:t(()=>[l(" Permission ")]),_:1}),o(_,{scope:"col",numeric:!0},{default:t(()=>[l(" Added ")]),_:1}),o(_,{scope:"col",numeric:!0})]),_:1})]),_:1}),o(S,null,{default:t(()=>[i.members.length==0?(d(),v(f,{key:0},{default:t(()=>[o(m,null,{default:t(()=>[l("No members yet")]),_:1}),o(m),o(m),o(m)]),_:1})):L("",!0),(d(!0),p(k,null,B(i.members,(A,re)=>(d(),v(f,null,{default:t(()=>[o(_,{scope:"row"},{default:t(()=>[l(c(A.email),1)]),_:2},1024),o(m,{numeric:!0},{default:t(()=>[o(g,{color:"yellow"},{default:t(()=>[l(c(A.permission.charAt(0).toUpperCase()+A.permission.slice(1)),1)]),_:2},1024)]),_:2},1024),o(m,{numeric:!0},{default:t(()=>[l(c(new Date().toLocaleDateString()),1)]),_:1}),o(m,{numeric:!0},{default:t(()=>[s("button",{class:"button-anchor",onClick:Nt=>n.editMember(re)}," Change ",8,Ue)]),_:2},1024)]),_:2},1024))),256))]),_:1})]),_:1}),o(w,{class:"router-link-new-member",to:{name:"addAccount"},onClick:n.startAddAccount},{default:t(()=>[l(" Add new member ")]),_:1},8,["onClick"]),s("div",Ye,[o(b,{class:"div-danger-header",size:"h3"},{default:t(()=>[l(" Danger zone ")]),_:1}),s("div",Je,[o(y,{color:"ffffff",variant:"flat",ripple:!1,id:"delete-account",onClick:a[0]||(a[0]=A=>e.$emit("changePage"))},{default:t(()=>[l(" Transfer business ")]),_:1}),Qe,o(y,{color:"ffffff",variant:"flat",ripple:!1,id:"delete-account",onClick:a[1]||(a[1]=A=>e.$emit("changePage","CloseBusiness"))},{default:t(()=>[l(" Close business ")]),_:1}),Ke])])],64)}const Ze=T(Me,[["render",Xe]]);const et={name:"liable-person-view",props:{homeText:{type:Object,required:!0}},emits:["changePage"],components:{WraButton:E,WraServiceLogo:O,WraViewTitle:G,WraHeader:N,WraDivider:q,WraValidationTooltip:j,CompanyDetailsTable:fe,AccomDetailsTable:he,IndividualTable:be,GdsSummaryCompany:ge,GdsSummaryIndividual:ve,GdsSumCard:X,GdsSumCardActions:Z},data(){return{panels:[],accomPanels:[],tabs:[],liablePeople:[],liablePeoplePresent:!1,showLinkError:!1}},methods:{editLiable:function(e,a){this.providersStore.setLiableIndex(e),a?this.formStateStore.startEdit("LiablePerson",["LiablePerson"],"LiableView"):this.formStateStore.startEdit("FirstLastName",["FirstLastName"],"LiableView"),this.$router.push({name:"form",params:{formName:"registration"}})},newLiable:function(){this.formStateStore.startEdit("LiableRelationship",["LiablePerson","FirstLastName"],"LiableView"),this.$router.push({name:"form",params:{formName:"registration"}})},linkedAccommodations:function(e){const a=this.providersStore.getAccoms;let u=[];for(let[C,i]of a.entries())Object.hasOwn(i,"liablePersonIndex")&&i.liablePersonIndex==e&&u.push([C,i]);return u},linkBusinesses:function(){if(this.formStateStore.getLiableQueue.length<=0){this.showLinkError=!0;return}let e=this.formStateStore.getLiableQueue.length==1?"LiablePersonSelect":"SmartSameProvider";this.formStateStore.setFormStartComponent(e),this.$router.push({name:"form",params:{formName:"registration"}})}},created(){this.liablePeople=structuredClone(ee(this.providersStore.getLiablePersons)),this.liablePeoplePresent=this.liablePeople.length>0},computed:{...h($,["providers"]),...h(I,["formState"]),liableText(){return this.homeText.liableView}}},tt={class:"sr-only"},ot={key:0,class:"gds-sum-card-title"},nt={key:1,class:"gds-sum-card-title"};function at(e,a,u,C,i,n){const b=r("wra-header"),_=r("wra-validation-tooltip"),m=r("wra-button"),f=r("gds-summary-individual"),S=r("gds-summary-company"),P=r("gds-sum-card");return d(),p(k,null,[o(b,{size:"h2",class:"mb-6"},{default:t(()=>[l(c(n.liableText.title),1)]),_:1}),o(V,{name:"translate",mod:"out-in"},{default:t(()=>[i.showLinkError?(d(),p("div",{class:"my-4",key:n.liableText.noLiableLink},[o(_,{type:"wra-error",role:"alert"},{default:t(()=>[s("span",tt,c(u.homeText.error),1),l(" "+c(n.liableText.noLiableLink),1)]),_:1})])):L("",!0)]),_:1}),o(m,{variant:"flat",color:"#019e1e",ripple:!0,class:"mb-4",lang:"en","prepend-icon":"mdi-home-plus",onClick:a[0]||(a[0]=x=>n.newLiable())},{default:t(()=>[l(c(n.liableText.addLiable),1)]),_:1}),i.liablePeoplePresent?(d(!0),p(k,{key:0},B(i.liablePeople,(x,g)=>(d(),v(P,null,{title:t(()=>{var w,y;return["individual"in x?(d(),p("div",ot,[o(R,{class:"mr-4 pb-1"},{default:t(()=>[l("mdi-account")]),_:1}),s("h3",null,c(`Individual: ${(w=x.individual)==null?void 0:w.name}`??`Individual ${g+1}`),1)])):(d(),p("div",nt,[o(R,{class:"mr-4 pb-1"},{default:t(()=>[l("mdi-domain")]),_:1}),s("h3",null,c(`Company: ${(y=x.company)==null?void 0:y.companyName}`??`Company / charity ${g+1}`),1)]))]}),default:t(()=>["individual"in x?(d(),v(f,{key:0,"individual-store":x,onEditPressed:w=>n.editLiable(g,!1)},null,8,["individual-store","onEditPressed"])):(d(),v(S,{key:1,"company-store":x,onEditPressed:w=>n.editLiable(g,!1)},null,8,["company-store","onEditPressed"]))]),_:2},1024))),256)):L("",!0)],64)}const st=T(et,[["render",at],["__scopeId","data-v-2112efbd"]]);const rt={name:"gds-list",props:{bullet:{type:Boolean,required:!1},numbered:{type:Boolean,required:!1},spaced:{tye:Boolean,required:!1}}};function it(e,a,u,C,i,n){return d(),p("ul",{class:we(["govuk-list",{"govuk-list--bullet":u.bullet&&!u.numbered,"govuk-list--number":u.numbered&&!u.bullet,"govuk-list--spaced":u.spaced}])},[te(e.$slots,"default")],2)}const ct=T(rt,[["render",it]]);const lt={name:"gds-phase"},dt={class:"govuk-phase-banner"};function ut(e,a,u,C,i,n){return d(),p("div",dt,[te(e.$slots,"default",{},void 0,!0)])}const mt=T(lt,[["render",ut],["__scopeId","data-v-73736c37"]]);const _t={name:"close-business-date",props:{editText:{type:Object,required:!0}},emits:["nextPressed","backPressed","endEdit"],components:{WraCardActions:oe,WraCardText:F,WraInset:ne,WraDateInput:ye,FormBody:H},data(){return{showValidation:!1,userInputs:{deregDate:{input:"",required:!0}}}},methods:{validateAnswers:function(){if(!ae(this.userInputs)){this.showValidation=!0;return}this.formStateStore.setTempDeregisterDate(this.userInputs.deregDate.input),this.$emit("nextPressed","CloseBusinessConfirm")}},computed:{...h(D,["account"]),...h(I,["formState"]),editOptions(){return this.editText.businessDate},accountInfo(){return this.accountStore.getAccountDetails}}};function pt(e,a,u,C,i,n){const b=r("wra-inset"),_=r("wra-card-text"),m=r("wra-date-input"),f=r("wra-card-actions"),S=r("form-body");return d(),v(S,{"button-text":u.editText,title:n.editOptions.title,"show-validation":i.showValidation,"validation-text":n.editOptions.validation,onBackPressed:a[1]||(a[1]=P=>e.$emit("backPressed")),onNextPressed:n.validateAnswers},{default:t(()=>[o(V,{name:"translate",mode:"out-in"},{default:t(()=>[o(_,{class:"mb-2"},{default:t(()=>[o(b,{color:"blue",class:"pa-4"},{default:t(()=>[s("p",null,c(n.accountInfo.email??"Account"),1)]),_:1})]),_:1})]),_:1}),o(V,{name:"translate",mode:"out-in"},{default:t(()=>[(d(),v(f,{class:"pt-2 pb-6",key:n.editOptions.title},{default:t(()=>[o(m,{class:"wra-date-label",modelValue:i.userInputs.deregDate.input,"onUpdate:modelValue":a[0]||(a[0]=P=>i.userInputs.deregDate.input=P),required:!0,label:n.editOptions.dateLabel,placeholder:"dd/mm/yyyy"},null,8,["modelValue","label"])]),_:1}))]),_:1})]),_:1},8,["button-text","title","show-validation","validation-text","onNextPressed"])}const ft=T(_t,[["render",pt]]),ht={name:"close-business-confirm",props:{editText:{type:Object,required:!0}},emits:["nextPressed","backPressed"],components:{WraCardActions:oe,WraCardText:F,WraInset:ne,WraRadioGroup:Pe,FormBody:H},data(){return{showValidation:!1,userInputs:{deregConfirm:{input:null,required:!0}}}},methods:{validateAnswers:function(){if(!ae(this.userInputs)){this.showValidation=!0;return}if(this.userInputs.deregConfirm.input===null){this.showValidation=!0;return}let a=this.formStateStore.popTempDeregisterDate();if(this.userInputs.deregConfirm.input==="keep"){this.$emit("endEdit");return}this.accountStore.addDeregisterDate(a),this.$emit("nextPressed","CloseBusinessSummary")}},computed:{...h(D,["account"]),...h(I,["formState"]),editOptions(){return this.editText.businessConfirm},accountInfo(){return this.accountStore.getAccountDetails}}},bt={class:"py-4"};function gt(e,a,u,C,i,n){const b=r("wra-inset"),_=r("wra-card-text"),m=r("wra-radio-group"),f=r("wra-card-actions"),S=r("form-body");return d(),v(S,{"button-text":u.editText,title:n.editOptions.title,"show-validation":i.showValidation,"validation-text":n.editOptions.validation,onBackPressed:a[1]||(a[1]=P=>e.$emit("backPressed")),onNextPressed:n.validateAnswers},{default:t(()=>[o(V,{name:"translate",mode:"out-in"},{default:t(()=>[o(_,{class:"mb-2"},{default:t(()=>[o(b,{color:"blue",class:"pa-4"},{default:t(()=>[s("p",null,c(n.accountInfo.email??"Account"),1)]),_:1})]),_:1})]),_:1}),o(V,{name:"translate",mode:"out-in"},{default:t(()=>[(d(),v(f,{class:"pt-2 pb-6",key:n.editOptions.title},{default:t(()=>[s("p",bt,c(n.editOptions.confirmDeregister.label),1),o(m,{modelValue:i.userInputs.deregConfirm.input,"onUpdate:modelValue":a[0]||(a[0]=P=>i.userInputs.deregConfirm.input=P),"group-name":"confirm-deregistration",options:n.editOptions.confirmDeregister.answers,hint:"confirm-deregistration"},null,8,["modelValue","options"])]),_:1}))]),_:1})]),_:1},8,["button-text","title","show-validation","validation-text","onNextPressed"])}const vt=T(ht,[["render",gt]]);const wt={name:"close-business-summary",props:{editText:{type:Object,required:!0}},emits:["nextPressed","backPressed","endEdit"],components:{WraCardText:F,WraValidationTooltip:j,FormBody:H},computed:{...h($,["providers"]),...h(D,["account"]),confirmText(){return this.editText.businessSummary},accountInfo(){return this.accountStore.getAccountDetails},deregisterDate(){return this.accountStore.getDeregisterDate.toLocaleDateString()}}},yt={class:"mb-2"};function Pt(e,a,u,C,i,n){const b=r("wra-validation-tooltip"),_=r("wra-card-text"),m=r("form-body");return d(),v(m,{"button-text":u.editText,"next-button":!1,"back-button":!1},{default:t(()=>[o(_,{class:"confirmation-body"},{default:t(()=>[o(b,{class:"wra-success"},{default:t(()=>[s("h2",yt,c(n.confirmText.successBox.title),1),s("p",null,c(`${n.confirmText.successBox.descriptionPre} ${n.deregisterDate}.`),1)]),_:1}),s("p",null,c(n.confirmText.confirmationEmail),1),s("h2",null,c(n.confirmText.whatNext.title),1),s("p",null,c(`${n.confirmText.whatNext.date}.`),1),s("p",null,c(n.confirmText.whatNext.contact),1),s("p",null,c(n.confirmText.whatNext.records),1),s("p",null,[s("button",{class:"button-anchor",onClick:a[0]||(a[0]=f=>e.$emit("endEdit"))},c(n.confirmText.returnLink),1)])]),_:1})]),_:1},8,["button-text"])}const xt=T(wt,[["render",Pt],["__scopeId","data-v-1fbbf4b4"]]);const Ct={name:"closeBusiness",props:{homeText:{type:Object,required:!0}},emits:["changePage"],components:{CloseBusinessDate:ft,CloseBusinessConfirm:vt,CloseBusinessSummary:xt},data(){return{currentComponent:"CloseBusinessDate",componentStack:[],componentHistory:new Set}},methods:{nextPage:function(e){this.componentStack.push(this.currentComponent),this.componentHistory.add(this.currentComponent),this.currentComponent=e},previousPage:function(){this.currentComponent=this.componentStack.pop(),this.currentComponent===void 0&&this.$emit("changePage","AccommodationView")},endEdit:function(){this.providersStore.setAccomIndex(this.providersStore.getNumAccom-1),this.$emit("changePage","AccountView")}},computed:{...h($,["providers"])}};function St(e,a,u,C,i,n){return d(),v(V,{name:"translate",mode:"out-in"},{default:t(()=>[(d(),v(se(i.currentComponent),{key:i.currentComponent,editText:u.homeText.closeBusiness,onNextPressed:n.nextPage,onBackPressed:n.previousPage,onEndEdit:n.endEdit},null,40,["editText","onNextPressed","onBackPressed","onEndEdit"]))]),_:1})}const Tt=T(Ct,[["render",St],["__scopeId","data-v-ccb0f018"]]);const kt={name:"service-home",props:{lang:{type:String,required:!0}},components:{WraServiceLogo:O,WraViewTitle:G,WraHeader:N,HomeView:$e,AccommodationView:ze,AccountView:Ze,LiableView:st,GdsList:ct,GdsPhase:mt,EditProperty:xe,CloseBusiness:Tt},data(){return{currentView:"HomeView",homeText:{navDrawer:{},todoList:{},homeView:{},accommodationView:{},liableView:{},settings:{}},accommodationNumber:{}}},methods:{changePage:function(e){this.currentView=e,this.$vuetify.display.mobile&&this.drawer==!0&&this.$emit("drawer-switch")},getText:function(){Ce.get(`./text/${this.lang}/home.json?v=2`).then(e=>{this.homeText=JSON.parse(JSON.stringify(e.data))})}},watch:{lang:{handler(){this.getText()}}},computed:{...h(I,["formState"]),...h(D,["account"]),getEmail(){return this.accountStore.getAccountDetails.email}},created(){this.getText(),this.formStateStore.getOriginComponent&&(this.currentView=this.formStateStore.getOriginComponent,this.formStateStore.resetOriginComponent())}},Lt={class:"pt-2"},Vt={class:"d-flex justify-space-between phase-text"},At={class:"d-flex flex-wrap flex-md-nowrap py-8"},Dt={class:"pr-4"};function It(e,a,u,C,i,n){const b=r("gds-phase"),_=r("gds-list");return d(),p(k,null,[s("header",Lt,[o(b,null,{default:t(()=>[s("div",Vt,[s("p",null,c(n.getEmail??"[email]"),1),s("a",{href:"#",onClick:a[0]||(a[0]=m=>e.$router.push({name:"form",params:{formName:"signin"}}))},"Sign out")])]),_:1})]),s("div",At,[s("nav",Dt,[o(V,{name:"translate",mode:"out-in"},{default:t(()=>[s("div",null,[o(_,null,{default:t(()=>[s("li",null,[s("button",{class:"button-anchor",onClick:a[1]||(a[1]=m=>n.changePage("HomeView"))},c(i.homeText.navDrawer.home),1)]),s("li",null,[s("button",{class:"button-anchor",onClick:a[2]||(a[2]=m=>n.changePage("AccommodationView"))},c(i.homeText.navDrawer.accommodation),1)]),s("li",null,[s("button",{class:"button-anchor",onClick:a[3]||(a[3]=m=>n.changePage("LiableView"))},c(i.homeText.navDrawer.messages),1)]),s("li",null,[s("button",{class:"button-anchor",onClick:a[4]||(a[4]=m=>n.changePage("AccountView"))},c(i.homeText.navDrawer.settings),1)])]),_:1})])]),_:1})]),o(Se,{class:"pb-6 pt-0 px-0"},{default:t(()=>[s("section",null,[(d(),v(se(i.currentView),{lang:u.lang,homeText:i.homeText,key:i.currentView,onChangePage:n.changePage},null,40,["lang","homeText","onChangePage"]))])]),_:1})])],64)}const Ot=T(kt,[["render",It],["__scopeId","data-v-f801a435"]]);export{Ot as default};