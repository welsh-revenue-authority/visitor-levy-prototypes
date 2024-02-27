import{c as k,Y as P,Z as T,a7 as D,a0 as y,a1 as w,m as b,u as A,l as f,r as a,o as u,x as l,w as o,q as i,T as x,J as V,K as N,p as g,a2 as q,v as _,t as v,a8 as H,a5 as M,a3 as B}from"./index-6a6d2e4a.js";import{G as $,a as F,b as G,c as j,d as W}from"./GdsNotifyTitle-b495668c.js";const L={name:"add-account-details",props:{addAccountText:{type:Object,required:!0},editMode:{type:Boolean,required:!0}},emits:["nextPressed","backPressed"],components:{WraCard:k,WraCardActions:P,WraCardText:T,WraTextInput:D,FormBody:y},data(){return{showValidation:!1,userInputs:{email:{input:"",required:!0}}}},methods:{validateAnswers:function(){if(!w(this.userInputs)){this.showValidation=!0;return}this.accountStore.addMemberDetails(this.accountStore.getMemberIndex,{email:this.userInputs.email.input}),this.$emit("nextPressed","AddAccountPermissions")},loadHistory:function(){let t=this.accountStore.getMembers[this.accountStore.getMemberIndex];this.userInputs.email.input=(t==null?void 0:t.email)??""}},computed:{...b(A,["account"])},created(){this.loadHistory()}},O=t=>(V("data-v-41158819"),t=t(),N(),t),U=O(()=>g("p",{class:"mb-2"}," The email will only be used to send the member a receipt ",-1));function J(t,n,e,h,s,c){const r=a("wra-text-input"),m=a("wra-card-actions"),p=a("form-body");return u(),l(p,{"button-text":e.addAccountText,title:e.addAccountText.accountDetails.title,"show-validation":s.showValidation,"validation-text":e.addAccountText.accountDetails.validation,onBackPressed:n[1]||(n[1]=d=>t.$emit("backPressed")),onNextPressed:n[2]||(n[2]=d=>c.validateAnswers())},{default:o(()=>[U,i(x,{name:"translate",mode:"out-in"},{default:o(()=>[(u(),l(m,{class:"pt-2 pb-6 text-input",key:e.addAccountText.accountDetails.emailLabel},{default:o(()=>[i(r,{modelValue:s.userInputs.email.input,"onUpdate:modelValue":n[0]||(n[0]=d=>s.userInputs.email.input=d),inputmode:"email",id:"email",label:e.addAccountText.accountDetails.emailLabel},null,8,["modelValue","label"])]),_:1}))]),_:1})]),_:1},8,["button-text","title","show-validation","validation-text"])}const K=f(L,[["render",J],["__scopeId","data-v-41158819"]]),R={name:"add-account-permissions",props:{addAccountText:{type:Object,required:!0},editMode:{type:Boolean,required:!0}},emits:["nextPressed","backPressed"],components:{WraCardActions:P,WraCardText:T,WraRadioGroup:q,FormBody:y},data(){return{showValidation:!1,userInputs:{permissions:{input:null,required:!0}}}},methods:{validateAnswers:function(){if(!w(this.userInputs)){this.showValidation=!0;return}this.accountStore.addMemberDetails(this.accountStore.getMemberIndex,{permission:this.userInputs.permissions.input}),this.$emit("nextPressed","AddAccountConfirmation")},loadHistory:function(){let t=this.accountStore.getMembers[this.accountStore.getMemberIndex];this.userInputs.permissions.input=(t==null?void 0:t.permission)??null}},computed:{...b(A,["account"])},created(){this.loadHistory()}},Y={class:"mb-2"};function Z(t,n,e,h,s,c){const r=a("wra-radio-group"),m=a("wra-card-actions"),p=a("form-body");return u(),l(p,{"button-text":e.addAccountText,title:e.addAccountText.accountPermissions.title,"show-validation":s.showValidation,"validation-text":e.addAccountText.accountPermissions.validation,onBackPressed:n[1]||(n[1]=d=>t.$emit("backPressed")),onNextPressed:c.validateAnswers},{default:o(()=>[g("p",Y,_(e.addAccountText.accountPermissions.permissionDesc),1),i(x,{name:"translate",mode:"out-in"},{default:o(()=>[(u(),l(m,{class:"pt-2 pb-6",key:e.addAccountText.accountPermissions.desc},{default:o(()=>[i(r,{modelValue:s.userInputs.permissions.input,"onUpdate:modelValue":n[0]||(n[0]=d=>s.userInputs.permissions.input=d),"group-name":"account-permission",options:e.addAccountText.accountPermissions.permissionPref.answers,hint:"account-permssion-hint"},null,8,["modelValue","options"])]),_:1}))]),_:1})]),_:1},8,["button-text","title","show-validation","validation-text","onNextPressed"])}const z=f(R,[["render",Z]]),E={name:"add-account-confirmation",props:{addAccountText:{type:Object,required:!0}},emits:["nextPressed","backPressed"],components:{GdsNotify:$,GdsNotifyContent:F,GdsNotifyHeader:G,GdsNotifyHeading:j,GdsNotifyTitle:W,FormBody:y},data(){return{memberData:{email:null,permission:null}}},methods:{endFlow:function(){this.accountStore.memberIncrement(),this.$router.push({name:"vlHome"})}},computed:{...b(A,["account"])},created(){Object.assign(this.memberData,this.accountStore.getMembers[this.accountStore.getMemberIndex])}};function Q(t,n,e,h,s,c){const r=a("gds-notify-title"),m=a("gds-notify-header"),p=a("gds-notify-heading"),d=a("gds-notify-content"),I=a("gds-notify"),S=a("form-body");return u(),l(S,{"button-text":e.addAccountText,onBackPressed:n[0]||(n[0]=C=>t.$emit("backPressed")),onNextPressed:n[1]||(n[1]=C=>t.$router.push({name:"vlHome"}))},{default:o(()=>[i(x,{name:"translate",mode:"out-in"},{default:o(()=>[i(I,{class:"mt-4",success:!0},{default:o(()=>[i(m,null,{default:o(()=>[i(r,null,{default:o(()=>[v(_(e.addAccountText.accountConfirmation.notifyTitle),1)]),_:1})]),_:1}),i(d,null,{default:o(()=>[i(p,null,{default:o(()=>[v(_(`${s.memberData.email} ${e.addAccountText.accountConfirmation.notifyHeading} ${e.addAccountText.accountConfirmation.permissionLevels[this.memberData.permission]}`),1)]),_:1}),g("p",null,_(`${e.addAccountText.accountConfirmation.notifyText} ${s.memberData.email}`),1)]),_:1})]),_:1})]),_:1})]),_:1},8,["button-text"])}const X=f(E,[["render",Q]]),tt={name:"add-account",props:{lang:{type:String}},components:{FormLayout:H,AddAccountDetails:K,AddAccountPermissions:z,AddAccountConfirmation:X},data(){return{currentComponent:"AddAccountDetails",addAccountText:{accountDetails:{}},componentStack:[],componentHistory:new Set}},methods:{getText:function(){M.get(`./text/${this.lang}/addAccount.json?v=2`).then(t=>{this.addAccountText=t.data})},nextPage:function(t){this.componentStack.push(this.currentComponent),this.componentHistory.add(this.currentComponent),this.currentComponent=t},previousPage:function(){this.currentComponent=this.componentStack.pop(),this.currentComponent===void 0&&this.$router.push({name:"vlHome"})}},created(){this.getText()},watch:{lang:{handler(){this.getText()}}}};function et(t,n,e,h,s,c){const r=a("form-layout");return u(),l(r,{lang:e.lang,"wra-logo":!1},{default:o(()=>[i(x,{name:"translate",mode:"out-in"},{default:o(()=>[(u(),l(B(s.currentComponent),{key:s.currentComponent,onNextPressed:c.nextPage,onBackPressed:c.previousPage,"add-account-text":s.addAccountText,"edit-mode":t.False},null,40,["onNextPressed","onBackPressed","add-account-text","edit-mode"]))]),_:1})]),_:1},8,["lang"])}const st=f(tt,[["render",et]]);export{st as default};
