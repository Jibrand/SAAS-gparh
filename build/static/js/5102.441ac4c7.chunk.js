"use strict";(self.webpackChunkhope_ui_react=self.webpackChunkhope_ui_react||[]).push([[5102],{5102:function(e,n,t){t.r(n);var r,s=t(30168),a=t(74165),i=t(15861),c=t(70885),l=t(28619),o=t(29097),d=t(69755),u=t(15004),p=t(521),h=t(72947),m=t(63870),x=(t(35235),t(82920),t(2073),t(87796),t(39066),t(1455)),f=t(61076),j=(t(95651),t(68917)),g=t(49494),v=(t(9360),t(68978),t(10434)),Z=t(16291),k=t(3036),w=t(90552),C=(t(51962),t(58630),t(72791)),N=(t(89403),t(51981)),b=t.n(N),y=(t(44790),t(61044),t(35125),t(52732),t(39073)),L=(t(29609),t(44313)),S=t(74342),A=t(89743),M=t(2677),H=t(92592),U=t(49027),V=t(64880),W=t(91523),_=t(43360),B=(t(43318),t(38402),t(73052),t(9085)),E=(t(5462),t(80184));n.default=function(){(0,C.useEffect)((function(){G(),K()}),[]);(0,C.useRef)();var e=(0,V.k6)(),n=((0,C.useRef)(),(0,V.UO)()),t=(0,C.useState)(""),r=(0,c.Z)(t,2),s=r[0],N=r[1],L=(0,C.useState)([]),I=(0,c.Z)(L,2),R=I[0],F=I[1],O=(0,C.useState)(!1),D=(0,c.Z)(O,2),J=D[0],P=(D[1],function(){var e=(0,i.Z)((0,a.Z)().mark((function e(n){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(y.V,"MASapplicationStandard/").concat(n," "),{method:"Delete"});case 2:return t=e.sent,e.next=5,t.json();case 5:(t=e.sent)&&K();case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),G=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.warn(n),e.next=3,fetch("".concat(y.V,"MASapplicationStandard/").concat(n.id));case 3:return t=e.sent,e.next=6,t.json();case 6:t=e.sent,N(t.name);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),K=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(){var n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(y.V,"MASapplicationStandard"));case 2:return n=e.sent,e.next=5,n.json();case 5:n=e.sent,F(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),T=function(){var t=(0,i.Z)((0,a.Z)().mark((function t(){return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:fetch("".concat(y.V,"MASapplicationStandard/").concat(n.id),{method:"Put",body:JSON.stringify({name:s}),headers:{"Content-Type":"Application/json"}})&&(N(""),B.Am.info("Updated Succesfully!"),e.push("/dashboard/app/MASApplicableStandards"));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),q=(0,C.useState)(JSON.parse(localStorage.getItem("chat-app-current-user"))),z=(0,c.Z)(q,2),Q=z[0];z[1];return(0,C.useEffect)((0,i.Z)((0,a.Z)().mark((function n(){return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:localStorage.getItem("chat-app-current-user")||e.push("/auth/sign-in");case 1:case"end":return n.stop()}}),n)}))),[]),(0,C.useEffect)((function(){localStorage.getItem("chat-app-current-user")?"Admin1"===Q.username?e.push("/approver"):"Admin"!==Q.username&&e.push("/ath"):e.push("/auth/sign-in")}),[]),(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(b(),{toggler:J,sources:[j,Z,g,k,f,w,v,k,x]}),(0,E.jsx)(S.Z.Container,{defaultActiveKey:"first",children:(0,E.jsxs)(A.Z,{children:[(0,E.jsx)(M.Z,{lg:"12",children:(0,E.jsx)(l.Z,{children:(0,E.jsx)(l.Z.Body,{children:(0,E.jsx)("div",{className:"d-flex flex-wrap align-items-center justify-content-between",children:(0,E.jsxs)("div",{className:"d-flex flex-wrap align-items-center",children:[(0,E.jsxs)("div",{className:"profile-img position-relative me-3 mb-3 mb-lg-0 profile-logo profile-logo1",children:[(0,E.jsx)(H.Z,{className:"theme-color-default-img  img-fluid rounded-pill avatar-100",src:o,alt:"profile-pic"}),(0,E.jsx)(H.Z,{className:"theme-color-purple-img img-fluid rounded-pill avatar-100",src:d,alt:"profile-pic"}),(0,E.jsx)(H.Z,{className:"theme-color-blue-img img-fluid rounded-pill avatar-100",src:u,alt:"profile-pic"}),(0,E.jsx)(H.Z,{className:"theme-color-green-img img-fluid rounded-pill avatar-100",src:h,alt:"profile-pic"}),(0,E.jsx)(H.Z,{className:"theme-color-yellow-img img-fluid rounded-pill avatar-100",src:m,alt:"profile-pic"}),(0,E.jsx)(H.Z,{className:"theme-color-pink-img img-fluid rounded-pill avatar-100",src:p,alt:"profile-pic"})]}),(0,E.jsxs)("div",{className:"d-flex flex-wrap align-items-center mb-3 mb-sm-0",children:[(0,E.jsx)("h4",{className:"me-2 h4",children:" "}),(0,E.jsx)("span",{children:" -  "})]})]})})})})}),(0,E.jsx)(M.Z,{lg:"3",className:"col-lg-3",children:(0,E.jsxs)(l.Z,{children:[(0,E.jsx)(l.Z.Header,{children:(0,E.jsx)("div",{className:"header-title",children:(0,E.jsx)("h4",{className:"card-title",children:"Form"})})}),(0,E.jsxs)(l.Z.Body,{children:[(0,E.jsx)("ul",{className:"list-inline m-0 p-0",children:(0,E.jsx)("li",{className:"d-flex mb-2"})}),(0,E.jsxs)(U.Z.Group,{className:"form-group",children:[(0,E.jsx)(U.Z.Label,{className:"custom-file-input",children:"Name"}),(0,E.jsx)(U.Z.Control,{type:"text",id:"customFile",value:s,onChange:function(e){N(e.target.value)}})]}),(0,E.jsx)(_.Z,{variant:"btn btn-primary",onClick:T,children:"Update"})," "]})]})}),R.map((function(e){return(0,E.jsx)(M.Z,{lg:"3",children:(0,E.jsxs)(l.Z,{children:[(0,E.jsx)(l.Z.Header,{children:(0,E.jsx)("div",{className:"header-title",children:(0,E.jsx)("h4",{className:"card-title",children:e.name})})}),(0,E.jsx)(l.Z.Body,{children:(0,E.jsx)("ul",{className:"list-inline m-0 p-0",children:(0,E.jsxs)("li",{className:"d-flex mb-2",children:[(0,E.jsx)("div",{className:"news-icon me-3",children:(0,E.jsxs)("div",{style:{float:"right"},children:[(0,E.jsx)(W.rU,{className:"btn btn-sm btn-icon text-primary flex-end","data-bs-toggle":"tooltip",title:"Edit User",to:"#",onClick:function(){return G(e._id)},children:(0,E.jsx)("span",{className:"btn-inner",children:(0,E.jsxs)("svg",{width:"50",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,E.jsx)("path",{d:"M11.4925 2.78906H7.75349C4.67849 2.78906 2.75049 4.96606 2.75049 8.04806V16.3621C2.75049 19.4441 4.66949 21.6211 7.75349 21.6211H16.5775C19.6625 21.6211 21.5815 19.4441 21.5815 16.3621V12.3341",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,E.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8.82812 10.921L16.3011 3.44799C17.2321 2.51799 18.7411 2.51799 19.6721 3.44799L20.8891 4.66499C21.8201 5.59599 21.8201 7.10599 20.8891 8.03599L13.3801 15.545C12.9731 15.952 12.4211 16.181 11.8451 16.181H8.09912L8.19312 12.401C8.20712 11.845 8.43412 11.315 8.82812 10.921Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,E.jsx)("path",{d:"M15.1655 4.60254L19.7315 9.16854",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})})}),(0,E.jsx)(W.rU,{className:"btn btn-sm btn-icon text-danger","data-bs-toggle":"tooltip",title:"Delete User",to:"#",onClick:function(){return P(e._id)},children:(0,E.jsx)("span",{className:"btn-inner",children:(0,E.jsxs)("svg",{width:"50",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",children:[(0,E.jsx)("path",{d:"M19.3248 9.46826C19.3248 9.46826 18.7818 16.2033 18.4668 19.0403C18.3168 20.3953 17.4798 21.1893 16.1088 21.2143C13.4998 21.2613 10.8878 21.2643 8.27979 21.2093C6.96079 21.1823 6.13779 20.3783 5.99079 19.0473C5.67379 16.1853 5.13379 9.46826 5.13379 9.46826",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,E.jsx)("path",{d:"M20.708 6.23975H3.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,E.jsx)("path",{d:"M17.4406 6.23973C16.6556 6.23973 15.9796 5.68473 15.8256 4.91573L15.5826 3.69973C15.4326 3.13873 14.9246 2.75073 14.3456 2.75073H10.1126C9.53358 2.75073 9.02558 3.13873 8.87558 3.69973L8.63258 4.91573C8.47858 5.68473 7.80258 6.23973 7.01758 6.23973",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})})})]})}),(0,E.jsx)("p",{className:"news-detail mb-0",children:" "})]})})})]})})}))]})}),(0,E.jsx)(B.Ix,{})]})};L.ZP.div(r||(r=(0,s.Z)(["\n  height: 70vh;\n  width: 35vw;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  gap: 0.1rem;\n  align-items: center;\n  background-color:  white;\n  .container {\n    height: 65vh;\n    width: 40vw;\n    background-color: ;\n    display: grid;\n    grid-template-columns: 96%;\n    @media screen and (min-width: 720px) and (max-width: 1080px) {\n      grid-template-columns: 35% 65%;\n    }\n  }\n"])))}}]);
//# sourceMappingURL=5102.441ac4c7.chunk.js.map