(this["webpackJsonpred-blue-graph"]=this["webpackJsonpred-blue-graph"]||[]).push([[0],{28:function(n,e,t){},60:function(n,e,t){"use strict";t.r(e);var r,a=t(0),c=t.n(a),o=t(19),i=t.n(o),l=(t(28),t(3)),s=t(5);!function(n){n[n.RED=1]="RED",n[n.BLUE=2]="BLUE"}(r||(r={}));var u,d,p,b,h,j,f,x,g,O,m,v,y,E,k,w,M=function(n,e){return n.get(e)||[]},z=function(n){var e=Array.from(n.keys()),t=new Map;if(0===e.length)return{error:"",colorMap:t};var a=function(n,e){return function t(a){var c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r.BLUE;return e.has(a)?e.get(a)===c:(e.set(a,c),M(n,a).every((function(n){return t(n,c===r.BLUE?r.RED:r.BLUE)})))}}(n,t)(e[0],r.RED);return{error:function(n){return new Set([].concat(Object(s.a)(Array.from(n.keys())),Object(s.a)(Array.from(n.values()).flat()))).size}(n)===t.size?a?"":"is not red blue colorable":"not connected graph",colorMap:t}},A=t(2),B=t(20),R=t.n(B),L=String.raw,U=L(u||(u=Object(A.a)([" *[a-zA-Z0-9]+(?: +[a-zA-Z0-9]+)* *"]))),C=L(d||(d=Object(A.a)(["","(?:-",")+"])),U,U),D=L(p||(p=Object(A.a)(["(?:[,\n]+)"],["(?:[,\\n]+)"]))),S=new RegExp(L(b||(b=Object(A.a)(["(?:",")?(",")"])),D,C),"gy"),N=function(n){return n.trim()},F=function(n){return Array.from(new Set(n))},G=t(7),J=t(4),Z=t.p+"static/media/github.a407ddf3.svg",H=J.a.div(h||(h=Object(A.a)(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  &::after {\n    content: '';\n    flex: 1;\n  }\n  min-height: 100%;\n"]))),I=J.a.h1(j||(j=Object(A.a)(["\n  font: inherit;\n  font-size: 48px;\n  margin: 72px 0 24px 0;\n  padding: 0;\n"]))),W=J.a.h2(f||(f=Object(A.a)(["\n  font: inherit;\n  font-size: 24px;\n  margin: 24px 0 12px 0;\n  padding: 0;\n"]))),q=J.a.textarea.attrs({spellCheck:!1})(x||(x=Object(A.a)(["\n  background-color: hsl(0, 0%, 95%);\n  border-radius: ","px;\n  border: 0px solid hsl(0, 0%, 85%);\n  font: inherit;\n  font-size: 24px;\n  height: ","px;\n  overflow: hidden;\n  padding: ","px 48px;\n  resize: none;\n  width: 300px;\n  &:active,\n  &:focus {\n    outline: none;\n  }\n"])),54,84,12),K=Object(J.a)(q)(g||(g=Object(A.a)(["\n  position: absolute;\n  pointer-events: none;\n  opacity: 0;\n"]))),P=J.a.div(O||(O=Object(A.a)(["\n  display: flex;\n  flex-direction: row;\n"]))),Q=J.a.ul(m||(m=Object(A.a)(["\n  list-style: none;\n  margin: 0;\n  padding: 0;\n"]))),T=(v={},Object(G.a)(v,r.BLUE,"hsl(220, 100%, 70%)"),Object(G.a)(v,r.RED,"hsl(15, 100%, 65%)"),v),V=J.a.li(y||(y=Object(A.a)(["\n  background-color: ",";\n  border-radius: 16px;\n  color: white;\n  font-size: 24px;\n  height: 32px;\n  line-height: 32px;\n  margin: 0 0 16px 0;\n  padding: 0 16px;\n  text-align: center;\n  position: relative;\n  z-index: 1;\n"])),(function(n){return T[n.nodeColor]})),X=J.a.svg(E||(E=Object(A.a)(["\n  margin: 0 -24px;\n"]))),Y=Object(J.a)(W)(k||(k=Object(A.a)(["\n  color: red;\n"]))),$=J.a.a(w||(w=Object(A.a)(["\n  display: block;\n  background-image: url(",");\n  background-repeat: no-repeat;\n  background-position: 0 50%;\n  background-size: 20px;\n  padding-left: 32px;\n  height: 24px;\n  line-height: 24px;\n  text-decoration: none;\n  order: 3;\n  cursor: pointer;\n  color: inherit;\n  &::visited,\n  &:-webkit-any-link {\n    color: inherit;\n  }\n  &:hover {\n    text-decoration: underline;\n  }\n"])),Z),_=t(1),nn=function(n){var e=n.nodes,t=n.color;return Object(_.jsx)(Q,{children:e.map((function(n,e){return Object(_.jsx)(V,{nodeColor:t,children:n},e)}))})},en=t(12),tn=function(n,e){return"".concat(120*n," ").concat(48*e)},rn=function(n){var e=n.x0,t=n.y0,r=n.x1,a=n.y1,c="M ".concat(tn(e,t)," C ").concat(tn(e+.5,t)," ").concat(tn(r-.5,a)," ").concat(tn(r,a));return Object(_.jsx)("path",{d:c})},an=function(n){var e=n.redNodes,t=n.blueNodes,r=n.redNodesGraph,c=Object.fromEntries(e.map((function(n,e){return[n,e]}))),o=Object.fromEntries(t.map((function(n,e){return[n,e]}))),i=Array.from(r).flatMap((function(n){var e=Object(l.a)(n,2),t=e[0];return e[1].map((function(n){return{x0:0,y0:c[t],x1:1,y1:o[n]}}))})),s=48*Math.max(e.length,t.length);return Object(_.jsx)(X,{viewBox:"0 0 ".concat(120," ").concat(s),width:"".concat(120,"px"),height:"".concat(s,"px"),children:Object(_.jsx)("g",{stroke:"hsl(0, 0%, 30%)",strokeWidth:"1",fill:"none",transform:"translate(0, ".concat(15.5,")"),children:i.map((function(n,e){return Object(a.createElement)(rn,Object(en.a)(Object(en.a)({},n),{},{key:e}))}))})})},cn=function(n){var e=n.onChange,t=n.placeholder,r=Object(a.useState)(0),c=Object(l.a)(r,2),o=c[0],i=c[1],s=Object(a.useRef)(null),u=o?{height:o}:{};return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(K,{ref:s}),Object(_.jsx)(q,{onChange:function(n){if(e(n),s.current){s.current.value=n.target.value;var t=s.current.scrollHeight-24;t>84?t!==o&&i(t):o>0&&i(0)}},placeholder:t,style:u})]})},on=function(){var n=Object(a.useState)({graph:new Map,error:"",colorMap:new Map}),e=Object(l.a)(n,2),t=e[0],c=t.graph,o=t.error,i=t.colorMap,u=e[1],d=Array.from(i.entries()).filter((function(n){return Object(l.a)(n,2)[1]===r.RED})).map((function(n){return Object(l.a)(n,1)[0]})),p=Array.from(i.entries()).filter((function(n){return Object(l.a)(n,2)[1]===r.BLUE})).map((function(n){return Object(l.a)(n,1)[0]})),b=new Set(d),h=new Map(Array.from(c).filter((function(n){var e=Object(l.a)(n,1)[0];return b.has(e)})));return Object(_.jsxs)(H,{children:[Object(_.jsx)(I,{children:"is it a red blue colorable graph?"}),Object(_.jsx)(W,{children:"enter some paths"}),Object(_.jsx)(cn,{onChange:function(n){var e=function(n){for(var e=new Map;;){var t=S.exec(n);if(!t)break;var r=t[1].split("-").map(N);R()(r.slice(0,-1),r.slice(1)).forEach((function(n){var t=Object(l.a)(n,2),r=t[0],a=t[1];e.set(r,F([].concat(Object(s.a)(e.get(r)||[]),[a]))),e.set(a,F([].concat(Object(s.a)(e.get(a)||[]),[r])))}))}return e}(n.target.value),t=z(e),r=t.error,a=t.colorMap;u({graph:e,error:r,colorMap:a})},placeholder:"node 1 - node 2 - node 3,\nnode 3 - node 4,\nnode 3 - node 6"}),o&&Object(_.jsx)(Y,{children:o}),!o&&d.length>0&&Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(W,{children:"bipartite graph"}),Object(_.jsxs)(P,{children:[Object(_.jsx)(nn,{nodes:d,color:r.RED}),Object(_.jsx)(an,{redNodes:d,blueNodes:p,redNodesGraph:h}),Object(_.jsx)(nn,{nodes:p,color:r.BLUE})]})]}),Object(_.jsx)($,{href:"https://github.com/chriskr/bipartite-graph",children:"github repo"})]})};i.a.render(Object(_.jsx)(c.a.StrictMode,{children:Object(_.jsx)(on,{})}),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.56d25f2e.chunk.js.map