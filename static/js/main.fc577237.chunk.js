(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{33:function(e,t,c){},53:function(e,t,c){},62:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c(27),i=c.n(r),s=c(10),a=c(2),j=c(14),o=c(8),l=c(12),b=(c(33),c(0));var d=function(e){return Object(b.jsx)("span",Object(o.a)(Object(o.a)({className:"delete-btn"},e),{},{role:"button",tabIndex:"0",children:"\u2717"}))};var u=function(e){var t=e.children;return Object(b.jsx)("div",{style:{height:300,clear:"both",paddingTop:120,textAlign:"center"},className:"jumbotron",children:t})},h=c(13),O=c.n(h),x=function(){return O.a.get("/api/books")},f=function(e){return O.a.get("/api/books/"+e)},m=function(e){return O.a.delete("/api/books/"+e)},p=function(e){return O.a.post("/api/books",e)};function v(e){var t=e.fluid,c=e.children;return Object(b.jsx)("div",{className:"container".concat(t?"-fluid":""),children:c})}function g(e){var t=e.fluid,c=e.children;return Object(b.jsx)("div",{className:"row".concat(t?"-fluid":""),children:c})}function N(e){var t=e.size,c=e.children;return Object(b.jsx)("div",{className:t.split(" ").map((function(e){return"col-"+e})).join(" "),children:c})}c(53);function k(e){var t=e.children;return Object(b.jsx)("div",{className:"list-overflow-container",children:Object(b.jsx)("ul",{className:"list-group",children:t})})}function y(e){var t=e.children;return Object(b.jsx)("li",{className:"list-group-item",children:t})}function z(e){return Object(b.jsx)("div",{className:"form-group",children:Object(b.jsx)("input",Object(o.a)({className:"form-control"},e))})}function S(e){return Object(b.jsx)("div",{className:"form-group",children:Object(b.jsx)("textarea",Object(o.a)({className:"form-control",rows:"20"},e))})}function B(e){return Object(b.jsx)("button",Object(o.a)(Object(o.a)({},e),{},{style:{float:"right",marginBottom:10},className:"btn btn-success",children:e.children}))}var w=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),c=t[0],r=t[1],i=Object(n.useState)({}),a=Object(l.a)(i,2),h=a[0],O=a[1];function f(){x().then((function(e){return r(e.data)})).catch((function(e){return console.log(e)}))}function w(e){var t=e.target,c=t.name,n=t.value;O(Object(o.a)(Object(o.a)({},h),{},Object(j.a)({},c,n)))}return Object(n.useEffect)((function(){f()}),[]),Object(b.jsx)(v,{fluid:!0,children:Object(b.jsxs)(g,{children:[Object(b.jsxs)(N,{size:"md-6",children:[Object(b.jsx)(u,{children:Object(b.jsx)("h1",{children:"What Books Should I Read?"})}),Object(b.jsxs)("form",{children:[Object(b.jsx)(z,{onChange:w,name:"title",placeholder:"Title (required)"}),Object(b.jsx)(z,{onChange:w,name:"author",placeholder:"Author (required)"}),Object(b.jsx)(S,{onChange:w,name:"synopsis",placeholder:"Synopsis (Optional)"}),Object(b.jsx)(B,{disabled:!(h.author&&h.title),onClick:function(e){e.preventDefault(),h.title&&h.author&&p({title:h.title,author:h.author,synopsis:h.synopsis}).then((function(e){return f()})).catch((function(e){return console.log(e)}))},children:"Submit Book"})]})]}),Object(b.jsxs)(N,{size:"md-6 sm-12",children:[Object(b.jsx)(u,{children:Object(b.jsx)("h1",{children:"Books On My List"})}),c.length?Object(b.jsx)(k,{children:c.map((function(e){return Object(b.jsxs)(y,{children:[Object(b.jsx)(s.b,{to:"/books/"+e._id,children:Object(b.jsxs)("strong",{children:[e.title," by ",e.author]})}),Object(b.jsx)(d,{onClick:function(){return t=e._id,void m(t).then((function(e){return f()})).catch((function(e){return console.log(e)}));var t}})]},e._id)}))}):Object(b.jsx)("h3",{children:"No Results to Display"})]})]})})};var C=function(e){var t=Object(n.useState)({}),c=Object(l.a)(t,2),r=c[0],i=c[1],j=Object(a.f)().id;return Object(n.useEffect)((function(){f(j).then((function(e){return i(e.data)})).catch((function(e){return console.log(e)}))}),[]),Object(b.jsxs)(v,{fluid:!0,children:[Object(b.jsx)(g,{children:Object(b.jsx)(N,{size:"md-12",children:Object(b.jsx)(u,{children:Object(b.jsxs)("h1",{children:[r.title," by ",r.author]})})})}),Object(b.jsx)(g,{children:Object(b.jsx)(N,{size:"md-10 md-offset-1",children:Object(b.jsxs)("article",{children:[Object(b.jsx)("h1",{children:"Synopsis"}),Object(b.jsx)("p",{children:r.synopsis})]})})}),Object(b.jsx)(g,{children:Object(b.jsx)(N,{size:"md-2",children:Object(b.jsx)(s.b,{to:"/",children:"\u2190 Back to Authors"})})})]})};var E=function(){return Object(b.jsx)(v,{fluid:!0,children:Object(b.jsx)(g,{children:Object(b.jsx)(N,{size:"md-12",children:Object(b.jsxs)(u,{children:[Object(b.jsx)("h1",{children:"404 Page Not Found"}),Object(b.jsx)("h1",{children:Object(b.jsx)("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji",children:"\ud83d\ude44"})})]})})})})};var R=function(){return Object(b.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary",children:Object(b.jsx)("a",{className:"navbar-brand",href:"/",children:"React Reading List"})})};var A=function(){return Object(b.jsx)(s.a,{children:Object(b.jsxs)("div",{children:[Object(b.jsx)(R,{}),Object(b.jsxs)(a.c,{children:[Object(b.jsx)(a.a,{exact:!0,path:["/","/books"],children:Object(b.jsx)(w,{})}),Object(b.jsx)(a.a,{exact:!0,path:"/books/:id",children:Object(b.jsx)(C,{})}),Object(b.jsx)(a.a,{children:Object(b.jsx)(E,{})})]})]})})};i.a.render(Object(b.jsx)(A,{}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.fc577237.chunk.js.map