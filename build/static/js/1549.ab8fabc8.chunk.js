"use strict";(self.webpackChunkhope_ui_react=self.webpackChunkhope_ui_react||[]).push([[1549],{39073:function(e,s,r){r.d(s,{V:function(){return t}});var t="http://54.37.6.229:5005"},41549:function(e,s,r){r.r(s);var t,a,n=r(30168),i=r(74165),o=r(15861),d=r(70885),c=r(1413),l=r(72791),h=r(89743),m=r(2677),x=r(8396),p=r(12576),u=r(43360),j=r(64880),f=r(91523),g=r(16856),v=r(39126),w=r(39073),b=r(87781),N=r(44313),Z=r(90736),k=r(67945),y=r.n(k),L=(r(24655),r(61808)),C=r(14242),V=r(19950),H=r(65822),M=(r(65257),r(43419),r(86307),r(15029)),P=(r(16291),r(25774),r(79335)),S=(r(3036),r(11429),r(40835)),A=r(6530),B=r(60364),E=r(80184);V.Z.use([H.Z]);s.default=(0,B.$j)((function(e){return{darkMode:(0,A.TF)(e),customizerMode:(0,A.hW)(e),cololrinfomode:(0,A.H7)(e),colorprimarymode:(0,A.qC)(e),schemeDirMode:(0,A.kt)(e),sidebarcolorMode:(0,A.yj)(e),sidebarTypeMode:(0,A.Eg)(e),sidebaractivestyleMode:(0,A.ik)(e),navbarstylemode:(0,A.D$)(e)}}),(function(e){return(0,c.Z)({},(0,b.DE)({ModeAction:A.mw,SchemeDirAction:A.$m,SidebarColorAction:A.UX,SidebarActiveStyleAction:A.RW,NavbarstyleAction:A.Cp,ColorCustomizerAction:A.Wf},e))}))((function(e){var s=(0,l.useState)([]),r=(0,d.Z)(s,2),t=r[0],a=r[1];(0,l.useEffect)((function(){n(),K(),V(),R(),T()}),[]);(0,j.k6)();var n=function(){var e=(0,o.Z)((0,i.Z)().mark((function e(){var s;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(w.V,"/rfqmanagers"));case 2:return s=e.sent,e.next=5,s.json();case 5:s=e.sent,a(s);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),c=(0,l.useState)([]),b=(0,d.Z)(c,2),N=b[0],k=b[1],V=function(){var e=(0,o.Z)((0,i.Z)().mark((function e(){var s;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(w.V,"/rfqmanagers/count"));case 2:return s=e.sent,e.next=5,s.json();case 5:s=e.sent,k(s),console.log("the count is : ",s),console.log("the count is : ",N);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),H=(0,l.useState)([]),A=(0,d.Z)(H,2),B=A[0],q=A[1],R=function(){var e=(0,o.Z)((0,i.Z)().mark((function e(){var s;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(w.V,"/rfqmanagers/getThisMonthRecord"));case 2:return s=e.sent,e.next=5,s.json();case 5:s=e.sent,q(s),console.log("thia is mmmmmmmmmmmmmmmmmmmmmmmmmmmm",s);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),D=(0,l.useState)([]),W=(0,d.Z)(D,2),z=W[0],F=W[1],U=function(){var e=(0,o.Z)((0,i.Z)().mark((function e(s){var r;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(w.V,"/rfqmanagers/").concat(s," "),{method:"Delete"});case 2:return r=e.sent,e.next=5,r.json();case 5:(r=e.sent)&&n();case 7:case"end":return e.stop()}}),e)})));return function(s){return e.apply(this,arguments)}}(),T=function(){var e=(0,o.Z)((0,i.Z)().mark((function e(){var s;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(w.V,"/rfqmanagers/getThisMonthRecordCount"));case 2:return s=e.sent,e.next=5,s.json();case 5:s=e.sent,F(s),console.log("thia is mmmmmmmmmmmmmmmmmmmmmmmmmmmm",s);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),$=(0,l.useState)([]),I=(0,d.Z)($,2),_=I[0],Q=I[1],K=function(){var e=(0,o.Z)((0,i.Z)().mark((function e(){var s;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(w.V,"/userrfq/count"));case 2:return s=e.sent,e.next=5,s.json();case 5:s=e.sent,Q(s);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();console.log("the count is : ",N),(0,l.useEffect)((function(){console.log("asasdasdasdasdasdasdasdasasdasdasasasassaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",B),y().init({startEvent:"DOMContentLoaded",disable:function(){return window.innerWidth<996},throttleDelay:10,once:!0,duration:700,offset:10});var s=sessionStorage.getItem("color-customizer-mode"),r=sessionStorage.getItem("colorcustominfo-mode"),t=sessionStorage.getItem("colorcustomprimary-mode");null===s?(e.ColorCustomizerAction(e.customizerMode,e.cololrinfomode,e.colorprimarymode),document.documentElement.style.setProperty("--bs-info",e.cololrinfomode)):(e.ColorCustomizerAction(s,r,t),document.documentElement.style.setProperty("--bs-info",r))}));e.colorprimarymode,e.cololrinfomode,e.colorprimarymode,e.cololrinfomode,e.colorprimarymode,e.cololrinfomode,e.colorprimarymode,e.cololrinfomode;var O=(0,j.k6)();(0,l.useEffect)((0,o.Z)((0,i.Z)().mark((function e(){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:localStorage.getItem("chat-app-current-user")||O.push("/auth/sign-in");case 1:case"end":return e.stop()}}),e)}))),[]);var J=(0,l.useState)(JSON.parse(localStorage.getItem("chat-app-current-user"))),X=(0,d.Z)(J,2),G=X[0];X[1];(0,l.useEffect)((function(){localStorage.getItem("chat-app-current-user")?"Admin1"===G.username?O.push("/approver"):"Admin"!==G.username&&O.push("/ath"):O.push("/auth/sign-in")}),[]),console.log(G);return(0,E.jsx)(E.Fragment,{children:(0,E.jsxs)(h.Z,{children:[(0,E.jsx)(m.Z,{md:"12",lg:"12",children:(0,E.jsx)(h.Z,{className:"row-cols-1",children:(0,E.jsx)("div",{className:"overflow-hidden d-slider1 ",children:(0,E.jsxs)(L.t,{className:"p-0 m-0 mb-2 list-inline ",slidesPerView:5,spaceBetween:32,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{320:{slidesPerView:1},550:{slidesPerView:2},991:{slidesPerView:3},1400:{slidesPerView:4},1500:{slidesPerView:5},1920:{slidesPerView:6},2040:{slidesPerView:7},2440:{slidesPerView:8}},"data-aos":"fade-down","data-aos-delay":"700",children:[(0,E.jsx)(C.o,{className:"card card-slide",children:(0,E.jsx)("div",{className:"card-body",children:(0,E.jsxs)("div",{className:"progress-widget",children:[(0,E.jsx)(Z.Z,{stroke:e.colorprimarymode,width:"60px",height:"60px",Linecap:"rounded",trailstroke:"#ddd",strokewidth:"4px",style:{width:60,height:60},value:90,id:"circle-progress-01",children:(0,E.jsx)("svg",{className:"",width:"24",height:"24px",viewBox:"0 0 24 24",children:(0,E.jsx)("path",{fill:"currentColor",d:"M5,17.59L15.59,7H9V5H19V15H17V8.41L6.41,19L5,17.59Z"})})}),(0,E.jsxs)("div",{className:"progress-detail",children:[(0,E.jsx)("p",{className:"mb-2",children:"Total No of RFQs"}),(0,E.jsx)("h4",{className:"counter",children:(0,E.jsx)(S.ZP,{start:0,end:N,duration:3})})]})]})})}),(0,E.jsx)(C.o,{className:" card card-slide",children:(0,E.jsx)("div",{className:"card-body",children:(0,E.jsxs)("div",{className:"progress-widget",children:[(0,E.jsx)(Z.Z,{stroke:e.cololrinfomode,width:"60px",height:"60px",trailstroke:"#ddd",strokewidth:"4px",Linecap:"rounded",style:{width:60,height:60},value:60,id:"circle-progress-02",children:(0,E.jsx)("svg",{className:"",width:"24",height:"24",viewBox:"0 0 24 24",children:(0,E.jsx)("path",{fill:"currentColor",d:"M19,6.41L17.59,5L7,15.59V9H5V19H15V17H8.41L19,6.41Z"})})}),(0,E.jsxs)("div",{className:"progress-detail",children:[(0,E.jsx)("p",{className:"mb-2",children:"Total No of RFQs Values"}),(0,E.jsxs)("h4",{className:"counter",children:["$",(0,E.jsx)(S.ZP,{start:20,end:158,duration:3}),"K"]})]})]})})}),(0,E.jsx)(C.o,{className:" card card-slide",children:(0,E.jsx)("div",{className:"card-body",children:(0,E.jsxs)("div",{className:"progress-widget",children:[(0,E.jsx)(Z.Z,{stroke:e.colorprimarymode,width:"60px",height:"60px",trailstroke:"#ddd",strokewidth:"4px",Linecap:"rounded",style:{width:60,height:60},value:70,id:"circle-progress-03",children:(0,E.jsx)("svg",{className:"",width:"24",viewBox:"0 0 24 24",children:(0,E.jsx)("path",{fill:"currentColor",d:"M19,6.41L17.59,5L7,15.59V9H5V19H15V17H8.41L19,6.41Z"})})}),(0,E.jsxs)("div",{className:"progress-detail",children:[(0,E.jsx)("p",{className:"mb-2",children:"Total No of RFQs Vendor"}),(0,E.jsx)("h4",{className:"counter",children:(0,E.jsx)(S.ZP,{start:0,end:_,duration:3})})]})]})})}),(0,E.jsx)(C.o,{className:" card card-slide",children:(0,E.jsx)("div",{className:"card-body",children:(0,E.jsxs)("div",{className:"progress-widget",children:[(0,E.jsx)(Z.Z,{stroke:e.cololrinfomode,width:"60px",height:"60px",trailstroke:"#ddd",strokewidth:"4px",Linecap:"rounded",style:{width:60,height:60},value:60,id:"circle-progress-04",children:(0,E.jsx)("svg",{className:"",width:"24px",height:"24px",viewBox:"0 0 24 24",children:(0,E.jsx)("path",{fill:"currentColor",d:"M5,17.59L15.59,7H9V5H19V15H17V8.41L6.41,19L5,17.59Z"})})}),(0,E.jsxs)("div",{className:"progress-detail",children:[(0,E.jsx)("p",{className:"mb-2",children:"Revenue"}),(0,E.jsxs)("h4",{className:"counter",children:["$",(0,E.jsx)(S.ZP,{start:212,end:742,duration:3}),"K"]})]})]})})}),(0,E.jsx)(C.o,{className:" card card-slide",children:(0,E.jsx)("div",{className:"card-body",children:(0,E.jsxs)("div",{className:"progress-widget",children:[(0,E.jsx)(Z.Z,{stroke:e.colorprimarymode,width:"60px",height:"60px",trailstroke:"#ddd",strokewidth:"4px",Linecap:"rounded",style:{width:60,height:60},value:50,id:"circle-progress-05",children:(0,E.jsx)("svg",{className:"",width:"24px",height:"24px",viewBox:"0 0 24 24",children:(0,E.jsx)("path",{fill:"currentColor",d:"M5,17.59L15.59,7H9V5H19V15H17V8.41L6.41,19L5,17.59Z"})})}),(0,E.jsxs)("div",{className:"progress-detail",children:[(0,E.jsx)("p",{className:"mb-2",children:"Net Income"}),(0,E.jsxs)("h4",{className:"counter",children:["$",(0,E.jsx)(S.ZP,{start:35,end:150,duration:3}),"K"]})]})]})})}),(0,E.jsx)(C.o,{className:" card card-slide",children:(0,E.jsx)("div",{className:"card-body",children:(0,E.jsxs)("div",{className:"progress-widget",children:[(0,E.jsx)(Z.Z,{stroke:e.cololrinfomode,width:"60px",height:"60px",trailstroke:"#ddd",Linecap:"rounded",strokewidth:"4px",value:40,style:{width:60,height:60},id:"circle-progress-06",children:(0,E.jsx)("svg",{className:"",width:"24px",height:"24px",viewBox:"0 0 24 24",children:(0,E.jsx)("path",{fill:"currentColor",d:"M5,17.59L15.59,7H9V5H19V15H17V8.41L6.41,19L5,17.59Z"})})}),(0,E.jsxs)("div",{className:"progress-detail",children:[(0,E.jsx)("p",{className:"mb-2",children:"Today"}),(0,E.jsxs)("h4",{className:"counter",children:["$",(0,E.jsx)(S.ZP,{start:652,end:4600,duration:3})]})]})]})})}),(0,E.jsx)(C.o,{className:" card card-slide",children:(0,E.jsx)("div",{className:"card-body",children:(0,E.jsxs)("div",{className:"progress-widget",children:[(0,E.jsx)(Z.Z,{stroke:e.colorprimarymode,Linecap:"rounded",trailstroke:"#ddd",strokewidth:"4px",width:"60px",height:"60px",value:30,style:{width:60,height:60},id:"circle-progress-07",children:(0,E.jsx)("svg",{className:"",width:"24px",height:"24px",viewBox:"0 0 24 24",children:(0,E.jsx)("path",{fill:"currentColor",d:"M5,17.59L15.59,7H9V5H19V15H17V8.41L6.41,19L5,17.59Z"})})}),(0,E.jsxs)("div",{className:"progress-detail",children:[(0,E.jsx)("p",{className:"mb-2",children:"Members"}),(0,E.jsxs)("h4",{className:"counter",children:[(0,E.jsx)(S.ZP,{start:2,end:11.2,duration:3,decimals:1}),"M"]})]})]})})}),(0,E.jsx)("div",{className:"swiper-button swiper-button-next"}),(0,E.jsx)("div",{className:"swiper-button swiper-button-prev"})]})})})}),(0,E.jsx)(m.Z,{md:"12",lg:"8",children:(0,E.jsxs)(h.Z,{children:[(0,E.jsx)(m.Z,{md:"12"}),(0,E.jsx)(m.Z,{md:"12",xl:"6"}),(0,E.jsx)(m.Z,{md:"12",xl:"6"}),(0,E.jsxs)("div",{className:"  ","data-aos":"fade-up","data-aos-delay":"600",children:[(0,E.jsxs)("div",{className:"flex-wrap card-header d-flex justify-content-between",children:[(0,E.jsxs)("div",{className:"header-title",children:[(0,E.jsx)("h4",{className:"mb-2 card-title",children:"Enterprise Clients"}),(0,E.jsxs)("p",{className:"mb-0",children:[(0,E.jsx)("svg",{className:"me-2",width:"24",height:"24",viewBox:"0 0 24 24",children:(0,E.jsx)("path",{fill:"#3a57e8",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"})}),z," new acquired this month"]})]}),(0,E.jsx)(x.Z,{placement:"left",overlay:(0,E.jsx)(p.Z,{children:"Add new RFQ"}),children:(0,E.jsx)(u.Z,{variant:"icon primary float-end",onClick:function(){O.push("/dashboard/form/Rfqform")},children:(0,E.jsx)("span",{className:"  ",children:(0,E.jsx)(v.Dwu,{size:"35px"})})})})]}),(0,E.jsxs)("div",{className:"p-0 card-body",children:[(0,E.jsx)("div",{className:"col-xl"}),(0,E.jsx)("div",{className:"col-xl"}),(0,E.jsx)("div",{className:"mt-4  d-flex justify-content-between box table-responsive  ",children:(0,E.jsx)(P.$B,{style:{width:900,height:400},children:(0,E.jsxs)("table",{id:"style-2",className:"table box mb-0 table-striped    ",role:"grid",children:[(0,E.jsx)("thead",{children:(0,E.jsxs)("tr",{children:[(0,E.jsx)("th",{children:"Name"}),(0,E.jsx)("th",{children:"Actions"})]})}),(0,E.jsx)("tbody",{children:t.map((function(e){return(0,E.jsxs)("tr",{children:[(0,E.jsx)("td",{children:(0,E.jsxs)("div",{className:"d-flex align-items-center",children:[(0,E.jsx)("img",{className:"rounded bg-soft-primary img-fluid avatar-40 me-3",src:M,alt:"profile"}),(0,E.jsxs)("h6",{children:[" ",(0,E.jsx)(f.rU,{to:"/dashboard/app/Userrfq/"+e._id,children:e.name})]})]})}),(0,E.jsxs)("td",{children:[(0,E.jsx)(f.rU,{className:"btn btn-sm btn-icon text-secondary flex-end","data-bs-toggle":"tooltip",title:"Add Vendor",to:"/dashboard/form/Userrfq/"+e._id,children:(0,E.jsx)(g.fSq,{size:"30px"})})," ",(0,E.jsx)(f.rU,{className:"btn btn-sm btn-icon text-danger","data-bs-toggle":"tooltip",title:"Delete",onClick:function(){return U(e._id)},children:(0,E.jsx)("span",{className:"btn-inner",children:(0,E.jsxs)("svg",{width:"50",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",children:[(0,E.jsx)("path",{d:"M19.3248 9.46826C19.3248 9.46826 18.7818 16.2033 18.4668 19.0403C18.3168 20.3953 17.4798 21.1893 16.1088 21.2143C13.4998 21.2613 10.8878 21.2643 8.27979 21.2093C6.96079 21.1823 6.13779 20.3783 5.99079 19.0473C5.67379 16.1853 5.13379 9.46826 5.13379 9.46826",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,E.jsx)("path",{d:"M20.708 6.23975H3.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,E.jsx)("path",{d:"M17.4406 6.23973C16.6556 6.23973 15.9796 5.68473 15.8256 4.91573L15.5826 3.69973C15.4326 3.13873 14.9246 2.75073 14.3456 2.75073H10.1126C9.53358 2.75073 9.02558 3.13873 8.87558 3.69973L8.63258 4.91573C8.47858 5.68473 7.80258 6.23973 7.01758 6.23973",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})})}),(0,E.jsx)(f.rU,{className:"btn btn-sm btn-icon text-secondary flex-end","data-bs-toggle":"tooltip",title:"View",to:"#",children:(0,E.jsx)(v.rCC,{size:"20px"})})," ",(0,E.jsx)(f.rU,{className:"btn btn-sm btn-icon text-primary flex-end","data-bs-toggle":"tooltip",title:"Edit User",to:"#",children:(0,E.jsx)("span",{className:"btn-inner",children:(0,E.jsxs)("svg",{width:"17",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,E.jsx)("path",{d:"M11.4925 2.78906H7.75349C4.67849 2.78906 2.75049 4.96606 2.75049 8.04806V16.3621C2.75049 19.4441 4.66949 21.6211 7.75349 21.6211H16.5775C19.6625 21.6211 21.5815 19.4441 21.5815 16.3621V12.3341",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,E.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8.82812 10.921L16.3011 3.44799C17.2321 2.51799 18.7411 2.51799 19.6721 3.44799L20.8891 4.66499C21.8201 5.59599 21.8201 7.10599 20.8891 8.03599L13.3801 15.545C12.9731 15.952 12.4211 16.181 11.8451 16.181H8.09912L8.19312 12.401C8.20712 11.845 8.43412 11.315 8.82812 10.921Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,E.jsx)("path",{d:"M15.1655 4.60254L19.7315 9.16854",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})})})]})]})}))})]})})})]})]})]})}),(0,E.jsx)(m.Z,{md:"12",lg:"4",children:(0,E.jsxs)(h.Z,{children:[(0,E.jsx)(m.Z,{md:"12",lg:"12"}),(0,E.jsx)(m.Z,{md:"12",children:(0,E.jsxs)("div",{className:"card","data-aos":"fade-left","data-aos-delay":"600",children:[(0,E.jsx)("div",{className:"flex-wrap card-header d-flex justify-content-between",children:(0,E.jsxs)("div",{className:"header-title",children:[(0,E.jsx)("h4",{className:"mb-2 card-title",children:"Activity overview"}),(0,E.jsxs)("p",{className:"mb-0",children:[(0,E.jsx)("svg",{className:"me-2",width:"24",height:"24",viewBox:"0 0 24 24",children:(0,E.jsx)("path",{fill:"#17904b",d:"M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z"})}),"this month"]})]})}),(0,E.jsx)("div",{className:"card-body",children:B.map((function(e){return(0,E.jsxs)("div",{className:"mb-2 d-flex profile-media align-items-top",children:[(0,E.jsx)("div",{className:"mt-1 profile-dots-pills border-primary"}),(0,E.jsx)("div",{className:"ms-4",children:(0,E.jsx)("h6",{className:"mb-1 ",children:"New added"})})]})}))})]})})]})})]})})}));N.ZP.div(t||(t=(0,n.Z)(["\n \n .right {\n    position: absolute;\n    right: 0px;\n    width: 300px;\n    border: 3px solid #73AD21;\n    padding: 10px;\n  }\n  "]))),N.ZP.div(a||(a=(0,n.Z)(["\n\n#style-2::-webkit-scrollbar-track\n{\n\t-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);\n\tborder-radius: 10px;\n\tbackground-color: #F5F5F5;\n}\n.box{\n\n    box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n    .force-overflow\n}\n{\n\tmin-height: 430px;\n}\n.scrollbar\n{\n\tmargin-left: 30px;\n\tfloat: left;\n\theight: 380px;\n\twidth: 910px;\n \n\toverflow-y: scroll;\n\toverflow-x: auto;\n    overflow-x:auto;\n\tmargin-bottom: 35px;\n}\n\n\n"])))}}]);
//# sourceMappingURL=1549.ab8fabc8.chunk.js.map