(this["webpackJsonpreact-boilerplate"]=this["webpackJsonpreact-boilerplate"]||[]).push([[0],{24:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var r,c=n(1),a=n(0),o=n.n(a),i=n(15),s=n.n(i),l=n(8),u=(n(24),n(10)),d=n(2),j=n(18),b=function(e){var t=e.currentTab,n=e.name,r=e.path,a=e.onClick;return Object(c.jsx)("li",{className:"no-underline border-b-2 uppercase tracking-wide font-bold text-xs py-3 mr-8 ".concat(t===n?"text-secondary-300 border-secondary-300":"text-gray-200 border-transparent hover:text-secondary-200"),children:Object(c.jsx)(l.b,{to:r,onClick:a,className:"text-base",children:n})})},h=function(e){var t=e.title,n=e.Logo,r=e.modules,o=Object(a.useState)(r[0].name),i=Object(j.a)(o,2),s=i[0],l=i[1];return Object(c.jsxs)("header",{className:"flex w-full bg-gray-600 justify-between items-center px-8 pt-2 shadow-md",children:[Object(c.jsxs)("div",{children:[n&&Object(c.jsx)(n,{className:"App-logo"}),Object(c.jsx)("h1",{className:"text-lg uppercase",children:t})]}),Object(c.jsx)("ul",{className:"flex justify-evenly",children:r.map((function(e){return Object(c.jsx)(b,{currentTab:s,name:e.name,path:e.routeProps.path,onClick:function(){return l(e.name)}},e.name)}))})]})},m=function(e){var t=e.name,n=e.location;return Object(c.jsx)("footer",{className:"flex w-full bg-gray-600 divide-white divide-y-2 divide-y-2 justify-center items-center px-8 py-2 shadow-md",children:Object(c.jsxs)("span",{children:["Copyright \xa9 ","".concat((new Date).getFullYear()," "),Object(c.jsx)("span",{className:"text-secondary-300",children:t}),". Made with \u2764\ufe0f in"," ",n,"."]})})},p=Object({NODE_ENV:"production",PUBLIC_URL:"/react-modules-boilerplate",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_NAME:"React - Boilerplate",REACT_APP_DESCRIPTION:"A react boilerplate that decouples the app using modules",REACT_APP_LOG_LEVEL:"info"}),x="production"===p.NODE_ENV,O=p.REACT_APP_NAME||"React - Boilerplate",f=p.REACT_APP_LOG_LEVEL||"info",v={title:O,author:{name:"Muhammad Qasim",location:"London"},show:{navbar:!0,footer:!0}},E=a.createContext(v),P=function(e){var t=e.children;return Object(c.jsx)(E.Provider,{value:v,children:t})},_=function(){return a.useContext(E)},C=[{routeProps:{path:"/",exact:!0,component:function(){return Object(c.jsx)("div",{children:"Home Module"})}},name:"Home"},{routeProps:{path:"/about",component:function(){return Object(c.jsx)("div",{children:"About Module"})}},name:"About"}],g=(r=function(e){var t=e.siteConfig;return Object(c.jsxs)("div",{className:"flex flex-col mx-auto min-w-0 h-screen",children:[t.show.navbar&&Object(c.jsx)(h,{title:t.title,modules:C}),Object(c.jsx)("div",{className:"h-full",children:C.map((function(e){return Object(a.createElement)(d.a,Object(u.a)(Object(u.a)({},e.routeProps),{},{key:e.name}))}))}),t.show.footer&&Object(c.jsx)(m,Object(u.a)({},t.author))]})},function(){var e=_();return Object(c.jsx)(r,{siteConfig:e})}),y=function(e){var t=e.children;return Object(c.jsx)(P,{children:t})},A=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,35)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),r(e),c(e),a(e),o(e)}))},N=n(17),T={name:O,level:f,prettyPrint:!x},w=n.n(N)()(T);s.a.render(Object(c.jsx)(o.a.StrictMode,{children:Object(c.jsx)(l.a,{children:Object(c.jsx)(y,{children:Object(c.jsx)(g,{})})})}),document.getElementById("root")),A(w.info.bind(w))}},[[34,1,2]]]);
//# sourceMappingURL=main.6f295967.chunk.js.map