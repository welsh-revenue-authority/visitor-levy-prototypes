import{_ as m,K as h,c as p,y,L as g,W as w,A,U as b,M as C,N as L,O as v,P as I,Q as V,R as T,S as G,G as x,i as S,j as B,k as N,l as W,X as k,m as H,Y as P,r as d,o as D,E as q,e,w as t,H as $,n as a,t as M}from"./index-44873a19.js";const R={name:"internal-local-auth",props:{internalText:{type:Object,required:!0}},emits:["changePage"],components:{WraButton:h,WraTextInput:p,WraServiceLogo:y,WraSubheader:g,WraCard:w,WraHeader:A,UserToDo:b,GdsTable:C,GdsTableBody:L,GdsTableData:v,GdsTableHead:I,GdsTableHeader:V,GdsTableRow:T,GdsTag:G,GdsNotify:x,GdsNotifyContent:S,GdsNotifyHeader:B,GdsNotifyHeading:N,GdsNotifyTitle:W,WraInset:k},data(){return{searchInput:""}},methods:{onSearch(){this.$router.push({name:"internalSearch",query:{q:this.searchInput}})}},computed:{...H(P,["providers"]),localAuthText(){return this.internalText.localAuthList}}};function j(E,F,O,U,z,c){const i=d("wra-header"),l=d("gds-table-header"),r=d("gds-table-row"),_=d("gds-table-head"),u=d("gds-table-data"),o=d("gds-tag"),n=d("router-link"),f=d("gds-table-body"),s=d("gds-table");return D(),q($,null,[e(i,{size:"h2",class:"mb-6"},{default:t(()=>[a(M(c.localAuthText.title),1)]),_:1}),e(s,null,{default:t(()=>[e(_,null,{default:t(()=>[e(r,null,{default:t(()=>[e(l,{scope:"col"},{default:t(()=>[a("Name")]),_:1}),e(l,{scope:"col",numeric:!0},{default:t(()=>[a(" Properties ")]),_:1}),e(l,{scope:"col",numeric:!0},{default:t(()=>[a(" Visitor levy ")]),_:1}),e(l,{scope:"col",numeric:!0})]),_:1})]),_:1}),e(f,null,{default:t(()=>[e(r,null,{default:t(()=>[e(l,{scope:"row"},{default:t(()=>[a(" Bermouth County Council ")]),_:1}),e(u,{numeric:!0},{default:t(()=>[a(" 4023 ")]),_:1}),e(u,{numeric:!0},{default:t(()=>[e(o,{color:"light-blue"},{default:t(()=>[a(" Starts soon ")]),_:1})]),_:1}),e(u,{numeric:!0},{default:t(()=>[e(n,{to:{name:"internalLocalAuth",params:{localAuthority:"bridgend"}}},{default:t(()=>[a(" View ")]),_:1})]),_:1})]),_:1}),e(r,null,{default:t(()=>[e(l,{scope:"row"},{default:t(()=>[a("Carham County Council")]),_:1}),e(u,{numeric:!0},{default:t(()=>[a(" 1203 ")]),_:1}),e(u,{numeric:!0},{default:t(()=>[e(o,{color:"grey"},{default:t(()=>[a(" Inactive ")]),_:1})]),_:1}),e(u,{numeric:!0},{default:t(()=>[e(n,{to:{name:"internalLocalAuth",params:{localAuthority:"bridgend"}}},{default:t(()=>[a("View")]),_:1})]),_:1})]),_:1}),e(r,null,{default:t(()=>[e(l,{scope:"row"},{default:t(()=>[a(" City and County of Carsea ")]),_:1}),e(u,{numeric:!0},{default:t(()=>[a(" 3033 ")]),_:1}),e(u,{numeric:!0},{default:t(()=>[e(o,{color:"yellow"},{default:t(()=>[a(" Consultation ")]),_:1})]),_:1}),e(u,{numeric:!0},{default:t(()=>[e(n,{to:{name:"internalLocalAuth",params:{localAuthority:"bridgend"}}},{default:t(()=>[a("View")]),_:1})]),_:1})]),_:1}),e(r,null,{default:t(()=>[e(l,{scope:"row"},{default:t(()=>[a("Conport County Council")]),_:1}),e(u,{numeric:!0},{default:t(()=>[a(" 1829 ")]),_:1}),e(u,{numeric:!0},{default:t(()=>[e(o,{color:"grey"},{default:t(()=>[a(" Inactive ")]),_:1})]),_:1}),e(u,{numeric:!0},{default:t(()=>[e(n,{to:{name:"internalLocalAuth",params:{localAuthority:"bridgend"}}},{default:t(()=>[a("View")]),_:1})]),_:1})]),_:1}),e(r,null,{default:t(()=>[e(l,{scope:"row"},{default:t(()=>[a(" Cwmwlshire County Council ")]),_:1}),e(u,{numeric:!0},{default:t(()=>[a(" 1394 ")]),_:1}),e(u,{numeric:!0},{default:t(()=>[e(o,{color:"grey"},{default:t(()=>[a(" Inactive ")]),_:1})]),_:1}),e(u,{numeric:!0},{default:t(()=>[e(n,{to:{name:"internalLocalAuth",params:{localAuthority:"bridgend"}}},{default:t(()=>[a("View")]),_:1})]),_:1})]),_:1}),e(r,null,{default:t(()=>[e(l,{scope:"row"},{default:t(()=>[a(" Denbrokeshire County Council ")]),_:1}),e(u,{numeric:!0},{default:t(()=>[a(" 2903 ")]),_:1}),e(u,{numeric:!0},{default:t(()=>[e(o,{color:"yellow"},{default:t(()=>[a(" Consultation ")]),_:1})]),_:1}),e(u,{numeric:!0},{default:t(()=>[e(n,{to:{name:"internalLocalAuth",params:{localAuthority:"bridgend"}}},{default:t(()=>[a("View")]),_:1})]),_:1})]),_:1}),e(r,null,{default:t(()=>[e(l,{scope:"row"},{default:t(()=>[a(" Derw Council ")]),_:1}),e(u,{numeric:!0},{default:t(()=>[a(" 1834 ")]),_:1}),e(u,{numeric:!0},{default:t(()=>[e(o,{color:"grey"},{default:t(()=>[a(" Inactive ")]),_:1})]),_:1}),e(u,{numeric:!0},{default:t(()=>[e(n,{to:{name:"internalLocalAuth",params:{localAuthority:"bridgend"}}},{default:t(()=>[a("View")]),_:1})]),_:1})]),_:1}),e(r,null,{default:t(()=>[e(l,{scope:"row"},{default:t(()=>[a(" Flint City Council ")]),_:1}),e(u,{numeric:!0},{default:t(()=>[a(" 988 ")]),_:1}),e(u,{numeric:!0},{default:t(()=>[e(o,{color:"grey"},{default:t(()=>[a(" Inactive ")]),_:1})]),_:1}),e(u,{numeric:!0},{default:t(()=>[e(n,{to:{name:"internalLocalAuth",params:{localAuthority:"bridgend"}}},{default:t(()=>[a("View")]),_:1})]),_:1})]),_:1}),e(r,null,{default:t(()=>[e(l,{scope:"row"},{default:t(()=>[a("Gwynwy Borough Council")]),_:1}),e(u,{numeric:!0},{default:t(()=>[a(" 1023 ")]),_:1}),e(u,{numeric:!0},{default:t(()=>[e(o,{color:"grey"},{default:t(()=>[a(" Inactive ")]),_:1})]),_:1}),e(u,{numeric:!0},{default:t(()=>[e(n,{to:{name:"internalLocalAuth",params:{localAuthority:"bridgend"}}},{default:t(()=>[a("View")]),_:1})]),_:1})]),_:1}),e(r,null,{default:t(()=>[e(l,{scope:"row"},{default:t(()=>[a(" Isle of Merth County Council ")]),_:1}),e(u,{numeric:!0},{default:t(()=>[a(" 1728 ")]),_:1}),e(u,{numeric:!0},{default:t(()=>[e(o,{color:"grey"},{default:t(()=>[a(" Inactive ")]),_:1})]),_:1}),e(u,{numeric:!0},{default:t(()=>[e(n,{to:{name:"internalLocalAuth",params:{localAuthority:"bridgend"}}},{default:t(()=>[a("View")]),_:1})]),_:1})]),_:1}),e(r,null,{default:t(()=>[e(l,{scope:"row"},{default:t(()=>[a("Merthwys County Council")]),_:1}),e(u,{numeric:!0},{default:t(()=>[a(" 1743 ")]),_:1}),e(u,{numeric:!0},{default:t(()=>[e(o,{color:"grey"},{default:t(()=>[a(" Inactive ")]),_:1})]),_:1}),e(u,{numeric:!0},{default:t(()=>[e(n,{to:{name:"internalLocalAuth",params:{localAuthority:"bridgend"}}},{default:t(()=>[a("View")]),_:1})]),_:1})]),_:1}),e(r,null,{default:t(()=>[e(l,{scope:"row"},{default:t(()=>[a("Portwys County Council")]),_:1}),e(u,{numeric:!0},{default:t(()=>[a(" 1293 ")]),_:1}),e(u,{numeric:!0},{default:t(()=>[e(o,{color:"grey"},{default:t(()=>[a(" Inactive ")]),_:1})]),_:1}),e(u,{numeric:!0},{default:t(()=>[e(n,{to:{name:"internalLocalAuth",params:{localAuthority:"bridgend"}}},{default:t(()=>[a("View")]),_:1})]),_:1})]),_:1}),e(r,null,{default:t(()=>[e(l,{scope:"row"},{default:t(()=>[a(" Powphilly County Borough Council ")]),_:1}),e(u,{numeric:!0},{default:t(()=>[a(" 982 ")]),_:1}),e(u,{numeric:!0},{default:t(()=>[e(o,{color:"grey"},{default:t(()=>[a(" Inactive ")]),_:1})]),_:1}),e(u,{numeric:!0},{default:t(()=>[e(n,{to:{name:"internalLocalAuth",params:{localAuthority:"bridgend"}}},{default:t(()=>[a("View")]),_:1})]),_:1})]),_:1}),e(r,null,{default:t(()=>[e(l,{scope:"row"},{default:t(()=>[a("Tornedd Council")]),_:1}),e(u,{numeric:!0},{default:t(()=>[a(" 3204 ")]),_:1}),e(u,{numeric:!0},{default:t(()=>[e(o,{color:"yellow"},{default:t(()=>[a(" Consultation ")]),_:1})]),_:1}),e(u,{numeric:!0},{default:t(()=>[e(n,{to:{name:"internalLocalAuth",params:{localAuthority:"bridgend"}}},{default:t(()=>[a("View")]),_:1})]),_:1})]),_:1}),e(r,null,{default:t(()=>[e(l,{scope:"row"},{default:t(()=>[a(" St. Tormouth Borough Council ")]),_:1}),e(u,{numeric:!0},{default:t(()=>[a(" 1393 ")]),_:1}),e(u,{numeric:!0},{default:t(()=>[e(o,{color:"grey"},{default:t(()=>[a(" Inactive ")]),_:1})]),_:1}),e(u,{numeric:!0},{default:t(()=>[e(n,{to:{name:"internalLocalAuth",params:{localAuthority:"bridgend"}}},{default:t(()=>[a("View")]),_:1})]),_:1})]),_:1}),e(r,null,{default:t(()=>[e(l,{scope:"row"},{default:t(()=>[a("Swandiff County Council")]),_:1}),e(u,{numeric:!0},{default:t(()=>[a(" 2493 ")]),_:1}),e(u,{numeric:!0},{default:t(()=>[e(o,{color:"grey"},{default:t(()=>[a(" Inactive ")]),_:1})]),_:1}),e(u,{numeric:!0},{default:t(()=>[e(n,{to:{name:"internalLocalAuth",params:{localAuthority:"bridgend"}}},{default:t(()=>[a("View")]),_:1})]),_:1})]),_:1}),e(r,null,{default:t(()=>[e(l,{scope:"row"},{default:t(()=>[a(" Swanmouth County Council ")]),_:1}),e(u,{numeric:!0},{default:t(()=>[a(" 1249 ")]),_:1}),e(u,{numeric:!0},{default:t(()=>[e(o,{color:"grey"},{default:t(()=>[a(" Inactive ")]),_:1})]),_:1}),e(u,{numeric:!0},{default:t(()=>[e(n,{to:{name:"internalLocalAuth",params:{localAuthority:"bridgend"}}},{default:t(()=>[a("View")]),_:1})]),_:1})]),_:1}),e(r,null,{default:t(()=>[e(l,{scope:"row"},{default:t(()=>[a(" Taf City Council ")]),_:1}),e(u,{numeric:!0},{default:t(()=>[a(" 1453 ")]),_:1}),e(u,{numeric:!0},{default:t(()=>[e(o,{color:"grey"},{default:t(()=>[a(" Inactive ")]),_:1})]),_:1}),e(u,{numeric:!0},{default:t(()=>[e(n,{to:{name:"internalLocalAuth",params:{localAuthority:"bridgend"}}},{default:t(()=>[a("View")]),_:1})]),_:1})]),_:1}),e(r,null,{default:t(()=>[e(l,{scope:"row"},{default:t(()=>[a(" Vale of Rhoddsea Council ")]),_:1}),e(u,{numeric:!0},{default:t(()=>[a(" 3820 ")]),_:1}),e(u,{numeric:!0},{default:t(()=>[e(o,{color:"turquoise"},{default:t(()=>[a(" Active ")]),_:1})]),_:1}),e(u,{numeric:!0},{default:t(()=>[e(n,{to:{name:"internalLocalAuth",params:{localAuthority:"bridgend"}}},{default:t(()=>[a("View")]),_:1})]),_:1})]),_:1}),e(r,null,{default:t(()=>[e(l,{scope:"row"},{default:t(()=>[a("Wrexend Borough Council")]),_:1}),e(u,{numeric:!0},{default:t(()=>[a(" 1532 ")]),_:1}),e(u,{numeric:!0},{default:t(()=>[e(o,{color:"grey"},{default:t(()=>[a(" Inactive ")]),_:1})]),_:1}),e(u,{numeric:!0},{default:t(()=>[e(n,{to:{name:"internalLocalAuth",params:{localAuthority:"bridgend"}}},{default:t(()=>[a("View")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})],64)}const Q=m(R,[["render",j],["__scopeId","data-v-c37c7b28"]]);export{Q as default};
