(this["webpackJsonpcode-challenge-random-user"]=this["webpackJsonpcode-challenge-random-user"]||[]).push([[0],{24:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(16),i=n.n(s),r=(n(24),n(9)),o=n(13),l=n.n(o),j=n(17),u=function(e,t,n){var a=Object(c.useState)(null),s=Object(r.a)(a,2),i=s[0],o=s[1],u=Object(c.useState)(!0),d=Object(r.a)(u,2),b=d[0],m=d[1],x=Object(c.useState)(null),h=Object(r.a)(x,2),O=h[0],f=h[1];return Object(c.useEffect)((function(){var n=new AbortController;return function(){var c=Object(j.a)(l.a.mark((function c(){var a,s;return l.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,fetch(e+t,{signal:n.signal});case 2:if((a=c.sent).ok){c.next=5;break}throw Error("could not fetch the data for that resource");case 5:return c.next=7,a.json();case 7:return s=c.sent,c.abrupt("return",s);case 9:case"end":return c.stop()}}),c)})));return function(){return c.apply(this,arguments)}}()().then((function(e){o(e),f(null),m(!1)})).catch((function(e){"AbortError"===e.name?console.log("fetch aborted"):(f(e.message),m(!1))})),function(){return n.abort()}}),[e,t,n]),{data:i,isPending:b,error:O}},d=(n(26),n(27),n(7)),b=n(0),m=function(e){var t=e.text,n=e.icon;return Object(b.jsxs)("div",{className:"user-text-info-item-container",children:[Object(b.jsx)("span",{className:"user-text-info-icon material-icons",children:n}),Object(b.jsx)("p",{className:"user-text-info-item user-full-name",children:t})]})},x=function(e){var t=e.picture,n=e.fullName,c=e.city,a=e.country,s=e.user;return Object(b.jsxs)(d.b,{to:{pathname:"/user-details",state:{user:s}},className:"user-tile",children:[Object(b.jsx)("div",{className:"user-img-container",children:Object(b.jsx)("img",{className:"user-img",src:t,alt:"user-profile"})}),Object(b.jsxs)("div",{className:"user-text-info-container",children:[Object(b.jsx)(m,{text:n,icon:"person"}),Object(b.jsx)(m,{text:c,icon:"apartment"}),Object(b.jsx)(m,{text:a,icon:"public"})]})]})},h=(n(37),function(e){var t=e.icon,n=e.type,c=e.changePage,a=e.handleClick;return Object(b.jsx)("button",{className:"pagination-btn "+n,onClick:function(e){a(c)},children:Object(b.jsx)("span",{className:"material-icons",children:t})})}),O=function(){var e;e=window.matchMedia("(min-width: 1024px)").matches?8:window.matchMedia("(min-width: 720px)").matches?4:2;var t=Object(c.useState)(1),n=Object(r.a)(t,2),a=n[0],s=n[1],i=Object(c.useState)(e),o=Object(r.a)(i,2),l=o[0],j=o[1];window.addEventListener("resize",(function(){window.matchMedia("(min-width: 1024px)").matches?j(8):window.matchMedia("(min-width: 720px)").matches?j(4):j(2)}));var d=u("https://randomuser.me/api/?inc=name,location,email,login,picture&results=".concat(l,"&seed=abc&page="),a,l),m=d.data,O=d.isPending,f=d.error,p=function(e){((e=Number(e))>0&&a<=50||e<0&&a>1)&&s(a+e)};return Object(b.jsxs)("div",{className:"home",children:[m&&Object(b.jsxs)("div",{className:"home-wrapper",children:[Object(b.jsx)("div",{className:"user-tiles-container",children:m.results.map((function(e,t){return Object(b.jsx)(x,{picture:e.picture.medium,fullName:e.name.first+" "+e.name.last,city:e.location.city,country:e.location.country,user:e},t)}))}),Object(b.jsx)("div",{className:"pagination-container",children:Object(b.jsxs)("div",{className:"pagination-controllers",children:[Object(b.jsx)(h,{icon:"navigate_before",type:"pagination-btn-before",changePage:"-1",handleClick:p}),Object(b.jsx)("div",{className:"pagination-current-page-number",children:a}),Object(b.jsx)(h,{icon:"navigate_next",type:"pagination-btn-next",changePage:"1",handleClick:p})]})})]}),O&&Object(b.jsx)("div",{className:"users-loading-container",children:Object(b.jsx)("div",{className:"users-loading",children:"Loading ..."})}),f&&Object(b.jsx)("div",{children:f})]})},f=n(19),p=(n(38),function(){return Object(b.jsxs)("nav",{className:"navbar",children:[Object(b.jsx)(f.Link,{to:"/",className:"navbar-icon",children:Object(b.jsx)("span",{className:"material-icons",children:"home"})}),Object(b.jsx)("h1",{className:"navbar-title",children:"Meet Our Staff!"})]})}),v=(n(39),n(2)),g=(n(40),function(){return Object(b.jsxs)(d.b,{to:"/",className:"go-back-btn",children:[Object(b.jsx)("span",{className:"material-icons",children:"navigate_before"})," Go back"]})}),N=(n(41),function(e){var t=e.text,n=e.icon;return Object(b.jsxs)("div",{className:"user-details-text-info-item-container",children:[Object(b.jsx)("span",{className:"user-details-text-info-item-icon material-icons",children:n}),Object(b.jsx)("div",{className:"user-details-text-info-item-text",children:t})]})}),w=(n(42),function(){var e=Object(v.useLocation)().state.user;return Object(b.jsx)("div",{className:"user-details",children:Object(b.jsxs)("div",{className:"user-details-wrapper",children:[Object(b.jsxs)("div",{className:"user-details-tile",children:[Object(b.jsx)("div",{className:"user-details-picture-container",children:Object(b.jsx)("img",{src:e.picture.large,alt:"user"})}),Object(b.jsxs)("div",{className:"user-details-text-info-container",children:[Object(b.jsx)(N,{text:e.name.first+" "+e.name.last,icon:"person"}),Object(b.jsx)(N,{text:e.login.username,icon:"add"}),Object(b.jsx)(N,{text:e.email,icon:"email"}),Object(b.jsx)(N,{text:e.location.city,icon:"apartment"}),Object(b.jsx)(N,{text:e.location.country,icon:"public"})]})]}),Object(b.jsx)(g,{})]})})}),y=(n(43),function(){return Object(b.jsxs)("div",{className:"not-found-container",children:[Object(b.jsxs)("div",{className:"not-found",children:[Object(b.jsx)("p",{children:"Oops!"}),Object(b.jsx)("p",{children:"This page doesn't exist."})]}),Object(b.jsx)(g,{})]})});var k=function(){return Object(b.jsx)(d.a,{basename:"/code-challenge-random-user",children:Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(p,{}),Object(b.jsxs)(v.Switch,{children:[Object(b.jsx)(v.Route,{exact:!0,path:"/",children:Object(b.jsx)(O,{})}),Object(b.jsx)(v.Route,{path:"/user-details",children:Object(b.jsx)(w,{})}),Object(b.jsx)(v.Route,{path:"*",children:Object(b.jsx)(y,{})})]})]})})};i.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(k,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.c89a3be8.chunk.js.map