(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{35:function(e,t,n){},36:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),s=n(14),o=n.n(s),i=(n(35),n.p,n(36),n(12)),a=n(25),l=n(63),d=n(67),j=n(68),u=n(65),h=n(66),b=n(2),O=Object(l.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}})),x="https://sidestreamapp.ew.r.appspot.com/";var p=function(){var e=O(),t=Object(c.useState)(""),n=Object(i.a)(t,2),r=n[0],s=n[1],o=Object(c.useState)(!1),l=Object(i.a)(o,2),p=l[0],m=l[1],v=Object(c.useState)(!0),f=Object(i.a)(v,2),g=(f[0],f[1]),y=Object(c.useState)([]),C=Object(i.a)(y,2),S=C[0],w=C[1],k=Object(c.useState)([]),N=Object(i.a)(k,2),_=(N[0],N[1]),E=Object(c.useState)([]),T=Object(i.a)(E,2),B=T[0],L=T[1],A=Object(c.useState)(1),M=Object(i.a)(A,2),F=M[0],R=M[1],U=Object(c.useState)(0),I=Object(i.a)(U,2),J=I[0],P=I[1],G=Object(c.useState)(),V=Object(i.a)(G,2),W=V[0],q=V[1];function D(e,t,n){var c=t;S.map((function(e,t){e.index==c&&(console.warn("hi"),console.warn(S[c].status),"resolved"==n?(S[c].status="unresolved",S[c].text="Error ABC occured, that is `unresolved`"):(S[c].status="resolved",S[c].text="Error ABC occured, that is `resolved`"),w(S),_(Math.random()),R(t),P(J+1),console.warn(S))}))}return Object(b.jsx)("div",{children:1==p?Object(b.jsxs)("div",{children:[Object(b.jsx)(j.a,{position:"static",children:Object(b.jsxs)(u.a,{children:[Object(b.jsx)(h.a,{variant:"h6",className:e.title}),Object(b.jsx)(d.a,{onClick:function(){fetch(x.concat("get_list_intersection_counts"),{method:"POST",cache:"no-cache",headers:{content_type:"application/json"},body:JSON.stringify(S)}).then((function(e){return e.json()})).then((function(e){L(e),console.warn("yes runs agan")})),m("intersection"),_(Math.random()),console.log(p)},color:"inherit",children:"Intersection"}),Object(b.jsx)(d.a,{onClick:function(){"resolved"==S[F].status?(S[F].status="unresolved",S[F].text="Error ABC occured, that is `unresolved`"):(S[F].status="resolved",S[F].text="Error ABC occured, that is `resolved`"),w(S),_(Math.random())},color:"inherit",children:"Undo"}),Object(b.jsx)(d.a,{color:"inherit",onClick:function(){return window.location.reload()},children:"Logout"})]})}),Object(b.jsxs)("h1",{style:{marginTop:"50px"},children:["Welcome ",r]}),Object(b.jsxs)("h3",{style:{marginTop:"60px"},children:[" Requests = ",J," "]}),Object(b.jsxs)("table",{style:{marginTop:"5px"},id:"data",children:[Object(b.jsx)("thead",{children:Object(b.jsx)("tr",{children:["index","Status","code","text"," Click to change Status"].map((function(e,t){return Object(b.jsx)("th",{children:e.toUpperCase()},t)}))})}),Object(b.jsx)("tbody",{children:S&&S.map((function(e){var t=e.code,n=e.index,c=e.status,r=e.text;return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:n}),Object(b.jsx)("td",{children:c}),Object(b.jsx)("td",{children:t}),Object(b.jsx)("td",{children:r}),Object(b.jsx)("td",{className:"opration",children:"resolved"==c?Object(b.jsx)("button",{type:"submit",onClick:function(e){return D(0,n,c)},className:"buttonundo",children:" UNRESOLVE "}):"unresolved"==c?Object(b.jsx)("button",{onClick:function(e){return D(0,n,c)},style:{color:"green"},className:"buttonundo",children:" RESOLVE "}):""})]},n)}))})]})]}):"intersection"==p?Object(b.jsxs)("div",{children:[Object(b.jsx)(j.a,{position:"static",children:Object(b.jsxs)(u.a,{children:[Object(b.jsx)(h.a,{variant:"h6",className:e.title}),Object(b.jsx)(d.a,{color:"inherit",onClick:function(){m(!0)},children:"Home"}),Object(b.jsx)(d.a,{color:"inherit",onClick:function(){return window.location.reload()},children:"Logout"})]})}),Object(b.jsxs)("h1",{style:{marginTop:"50px"},children:["Welcome ",r]}),Object(b.jsxs)("table",{style:{marginTop:"5px"},id:"data",children:[Object(b.jsx)("thead",{children:Object(b.jsx)("tr",{children:["resolved_backlog","resolved_unresolved","resolved_unresolved"].map((function(e,t){return Object(b.jsx)("th",{children:e.toUpperCase()},t)}))})}),Object(b.jsx)("tbody",{children:B&&B.map((function(e){var t=e.resolved_backlog,n=e.resolved_unresolved,c=e.unresolved_backlog;return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:t}),Object(b.jsx)("td",{children:n}),Object(b.jsx)("td",{children:c})]})}))})]})]}):Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{style:{marginTop:"30px"},children:"Sidestream Coding Challenge"}),Object(b.jsx)("div",{className:"gh-signin",children:Object(b.jsx)("div",{children:Object(b.jsxs)(a.a,{onSubmit:function(e){m(!0),g(Math.random()),fetch(x).then((function(e){return e.json()})).then((function(e){w(e),console.warn("yes runs agan")})),fetch(x.concat("undo_all")).then((function(e){return e.json()})).then((function(e){q(e),console.warn("yes runs agan")})),console.warn(W)},children:[Object(b.jsx)(a.a.Control,{tabindex:"3",type:"text",placeholder:"Operators name",className:"gh-input",value:r,onChange:function(e){return function(e){s(e.target.value)}(e)}}),Object(b.jsx)(d.a,{variant:"contained",color:"primary",type:"submit",className:"btn",children:"Login"})]})})})]})})};var m=function(e,t){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(p,{})})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,70)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),s(e),o(e)}))};o.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(m,{})}),document.getElementById("root")),v()}},[[43,1,2]]]);
//# sourceMappingURL=main.8c345c3c.chunk.js.map