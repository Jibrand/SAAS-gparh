"use strict";(self.webpackChunkhope_ui_react=self.webpackChunkhope_ui_react||[]).push([[7483],{37483:function(e,n,t){t.r(n);var s=t(74165),a=t(15861),r=t(42982),c=t(70885),o=t(72791),l=t(39073),i=t(80184);n.default=function(){var e=(0,o.useState)([{firstName:"",lastName:""}]),n=(0,c.Z)(e,2),t=n[0],m=n[1],u=function(e,n){var s=e.target,a=s.name,c=s.value,o=(0,r.Z)(t);o[n][a]=c,m(o),console.log("firstnamr>>>>>",t),console.log("lastnamr>>>>>",t)},d=function(){var e=(0,a.Z)((0,s.Z)().mark((function e(){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("".concat(l.V,"/poattachments/asa"),{method:"POST",body:JSON.stringify({inputList:t}),headers:{"Content-Type":"Application/json"}});case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){m([].concat((0,r.Z)(t),[{firstName:"",lastName:""}]))};return(0,i.jsx)("div",{className:"container",children:(0,i.jsx)("div",{className:"row",children:(0,i.jsxs)("div",{className:"col-sm-12",children:[(0,i.jsx)("h5",{className:"mt-3 mb-4 fw-bold",children:"ReactJS Add Remove Inputs Fields Dynamically"}),t.map((function(e,n){return(0,i.jsxs)("div",{className:"row mb-3",children:[(0,i.jsxs)("div",{class:"form-group col-md-4",children:[(0,i.jsx)("label",{children:"First Name"}),(0,i.jsx)("input",{type:"text",name:"firstName",class:"form-control",placeholder:"Enter First Name",onChange:function(e){return u(e,n)}})]}),(0,i.jsxs)("div",{class:"form-group col-md-4",children:[(0,i.jsx)("label",{children:"Last Name"}),(0,i.jsx)("input",{type:"text",name:"lastName",class:"form-control",placeholder:"Enter Last Name",onChange:function(e){return u(e,n)}})]}),(0,i.jsxs)("div",{class:"form-group col-md-2 mt-4",children:[1!==t.length&&(0,i.jsx)("button",{className:"btn btn-danger mx-1",onClick:function(){return function(e){var n=(0,r.Z)(t);n.splice(e,1),m(n)}(n)},style:{marginBottom:10},children:"Remove"}),t.length-1===n&&(0,i.jsx)("button",{className:"btn btn-success",onClick:h,children:"Add More"}),(0,i.jsx)("button",{className:"btn btn-success",onClick:d,children:"  More"})]})]})}))]})})})}},39073:function(e,n,t){t.d(n,{V:function(){return s}});var s="http://54.37.6.229:5005"}}]);
//# sourceMappingURL=7483.9cca5fb2.chunk.js.map