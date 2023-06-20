/*! For license information please see 5347.f3e29d10.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkhope_ui_react=self.webpackChunkhope_ui_react||[]).push([[5347],{28619:function(e,n,r){r(72791);var t=r(80184),s=function(e){return(0,t.jsxs)("div",{className:"card ".concat(e.className?e.className:""),children:[" ",e.children," "]})};s.Header=function(e){return(0,t.jsxs)("div",{className:"card-header d-flex justify-content-between ".concat(e.className?e.className:""),children:[" ",e.children," "]})},s.Body=function(e){return(0,t.jsxs)("div",{className:"card-body ".concat(e.className?e.className:""),children:[" ",e.children," "]})},s.Footer=function(e){return(0,t.jsxs)("div",{className:"card-footer",children:[" ",e.children," "]})},s.Header.Title=function(e){return(0,t.jsxs)("div",{className:"header-title ".concat(e.className?e.className:""),children:[" ",e.children," "]})},s.Header.Action=function(e){return(0,t.jsxs)("div",{className:"header-action ".concat(e.className?e.className:""),children:[" ",e.children," "]})},n.Z=s},75347:function(e,n,r){r.r(n);var t,s=r(30168),a=(r(1413),r(74165)),o=r(15861),c=r(70885),i=(r(87911),r(17700),r(85567),r(39073)),l=(r(28619),r(72791)),d=r(39126),u=r(67945),h=r.n(u),x=(r(24655),r(44313)),f=r(2677),p=r(89743),j=r(8396),m=r(12576),v=(r(65257),r(43419),r(79335)),b=r(64880),w=r(91523),k=(r(91266),r(15029),r(16291),r(25774),r(3036),r(11429),r(90552),r(61044),r(43360)),N=r(80184);n.default=function(){(0,b.k6)();var e=(0,b.UO)(),n=(0,b.k6)(),r=(0,l.useState)([]),t=(0,c.Z)(r,2),s=t[0],u=t[1];(0,l.useEffect)((function(){x()}),[]),(0,l.useEffect)((function(){h().init()}),[]);var x=function(){var n=(0,o.Z)((0,a.Z)().mark((function n(){var r;return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(i.V,"/clientQuote/search/").concat(e.id));case 2:return r=n.sent,n.next=5,r.json();case 5:r=n.sent,u(r);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();console.warn("results",s);var y=function(){var e=(0,o.Z)((0,a.Z)().mark((function e(n){var r;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(i.V,"/clientQuote/").concat(n," "),{method:"Delete"});case 2:return r=e.sent,e.next=5,r.json();case 5:(r=e.sent)&&x();case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),C=(0,l.useState)({file:""}),Z=(0,c.Z)(C,2),L=(Z[0],Z[1],(0,l.useState)("")),O=(0,c.Z)(L,2),S=(O[0],O[1],(0,l.useState)(JSON.parse(localStorage.getItem("chat-app-current-user")))),_=(0,c.Z)(S,2);_[0],_[1];return(0,N.jsx)(N.Fragment,{children:(0,N.jsx)("div",{"data-aos":"fade-up","data-aos-duration":"2000",children:(0,N.jsx)(f.Z,{md:"12",children:(0,N.jsxs)(p.Z,{children:[(0,N.jsx)(f.Z,{md:"12"}),(0,N.jsx)(f.Z,{md:"12"}),(0,N.jsx)(f.Z,{md:"12"}),(0,N.jsx)(f.Z,{md:"12",lg:"12",children:(0,N.jsxs)("div",{className:"overflow-hidden card","data-aos":"fade-up","data-aos-delay":"600",children:[(0,N.jsxs)("div",{className:"flex-wrap card-header d-flex justify-content-between",children:[(0,N.jsx)("div",{className:"header-title"}),(0,N.jsx)(j.Z,{placement:"left",overlay:(0,N.jsx)(m.Z,{children:"Add new Invoice"}),children:(0,N.jsx)(k.Z,{variant:"icon primary float-end",onClick:function(){n.push("/dashboard/app/Invoice/".concat(e.id))},children:(0,N.jsxs)("span",{className:"  ",children:[(0,N.jsx)(d.Dwu,{size:"35px"})," Generate Invoice"]})})})]}),(0,N.jsxs)("div",{className:"p-0 card-body",children:[(0,N.jsx)("div",{className:"col-xl"}),(0,N.jsx)("div",{className:"col-xl"}),(0,N.jsx)(g,{children:(0,N.jsx)("div",{className:"mt-4 box table-responsive  ",children:(0,N.jsx)(v.$B,{style:{width:1400,height:600},thumbMinSize:200,children:(0,N.jsxs)("table",{id:"style-2",className:"table box mb-0 table-striped  force-overflow",role:"grid",children:[(0,N.jsx)("thead",{children:(0,N.jsxs)("tr",{children:[(0,N.jsx)("th",{children:"Quote number"}),(0,N.jsx)("th",{children:"Name"}),(0,N.jsx)("th",{children:"Expiry"}),(0,N.jsx)("th",{children:"Action"})]})}),(0,N.jsx)("tbody",{children:s.map((function(e){return(0,N.jsxs)("tr",{children:[(0,N.jsx)("td",{children:(0,N.jsxs)("a",{href:e.file,download:!0,children:["   ",(0,N.jsxs)("h6",{className:"float-left mb-1",children:[" ",e._id]})]})}),(0,N.jsx)("td",{children:e.Qoute_Name}),(0,N.jsx)("td",{children:e.Qoute_ExpiryDate}),(0,N.jsx)("td",{children:(0,N.jsxs)("div",{className:"flex align-items-center list-user-action",children:[(0,N.jsx)("a",{href:e.file,download:!0,children:(0,N.jsxs)("svg",{width:"25",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,N.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.666 21.25H16.335C19.355 21.25 21.25 19.111 21.25 16.084V7.916C21.25 4.889 19.365 2.75 16.335 2.75H7.666C4.636 2.75 2.75 4.889 2.75 7.916V16.084C2.75 19.111 4.636 21.25 7.666 21.25Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,N.jsx)("path",{d:"M12 16.0861V7.91406",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,N.jsx)("path",{d:"M15.748 12.3223L12 16.0863L8.25195 12.3223",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})}),(0,N.jsx)(w.rU,{className:"btn btn-sm btn-icon text-danger","data-bs-toggle":"tooltip",title:"Delete User",to:"#",onClick:function(){return y(e._id)},children:(0,N.jsx)("span",{className:"btn-inner",children:(0,N.jsxs)("svg",{width:"50",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",children:[(0,N.jsx)("path",{d:"M19.3248 9.46826C19.3248 9.46826 18.7818 16.2033 18.4668 19.0403C18.3168 20.3953 17.4798 21.1893 16.1088 21.2143C13.4998 21.2613 10.8878 21.2643 8.27979 21.2093C6.96079 21.1823 6.13779 20.3783 5.99079 19.0473C5.67379 16.1853 5.13379 9.46826 5.13379 9.46826",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,N.jsx)("path",{d:"M20.708 6.23975H3.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,N.jsx)("path",{d:"M17.4406 6.23973C16.6556 6.23973 15.9796 5.68473 15.8256 4.91573L15.5826 3.69973C15.4326 3.13873 14.9246 2.75073 14.3456 2.75073H10.1126C9.53358 2.75073 9.02558 3.13873 8.87558 3.69973L8.63258 4.91573C8.47858 5.68473 7.80258 6.23973 7.01758 6.23973",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})})})]})})]})}))})]})})})})]})]})})]})})})})};var g=x.ZP.div(t||(t=(0,s.Z)(["\n\n#style-2::-webkit-scrollbar-track\n{\n\t-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);\n\tborder-radius: 10px;\n\tbackground-color: #F5F5F5;\n}\n.box{\n\n    box-shadow: 0 50px 50px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n    .force-overflow\n}\n{\n\tmin-height: 430px;\n}\n.scrollbar\n{\n\tmargin-left: 30px;\n\tfloat: left;\n\theight: 380px;\n\twidth: 910px;\n \n\toverflow-y: scroll;\n\toverflow-x: auto;\n    overflow-x:auto;\n\tmargin-bottom: 35px;\n}\n\n\n"])))},39073:function(e,n,r){r.d(n,{V:function(){return t}});var t="http://54.37.6.229:5005"},91266:function(e,n,r){r.d(n,{d:function(){return a}});var t=r(72791),s=function(){return s=Object.assign||function(e){for(var n,r=1,t=arguments.length;r<t;r++)for(var s in n=arguments[r])Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s]);return e},s.apply(this,arguments)};var a=function(e){var n=e.href,r=e.children,a=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var s=0;for(t=Object.getOwnPropertySymbols(e);s<t.length;s++)n.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]])}return r}(e,["href","children"]);return t.createElement("a",s({target:"_blank",rel:"noopener noreferrer",href:n},a),null!==r&&void 0!==r?r:n)}},90552:function(e,n,r){e.exports=r.p+"static/media/06.655ee67f656f6670ed8a.png"}}]);
//# sourceMappingURL=5347.f3e29d10.chunk.js.map