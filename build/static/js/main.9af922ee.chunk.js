(this["webpackJsonpred-blue-graph"]=this["webpackJsonpred-blue-graph"]||[]).push([[0],{28:function(n,e,t){},60:function(n,e,t){"use strict";t.r(e);var r,a=t(0),c=t.n(a),o=t(19),i=t.n(o),s=(t(28),t(4)),l=t(5);!function(n){n[n.RED=1]="RED",n[n.BLUE=2]="BLUE"}(r||(r={}));var p,u,d,b,h,g,j,f,x,O,m,v,k,y,w,E,M,z,A=function(n,e){return n.get(e)||[]},B=function(n){var e=Array.from(n.keys()),t=new Map;if(0===e.length)return{error:"",colorMap:t};var a=function(n,e){return function t(a){var c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r.BLUE;return e.has(a)?e.get(a)===c:(e.set(a,c),A(n,a).every((function(n){return t(n,c===r.BLUE?r.RED:r.BLUE)})))}}(n,t)(e[0],r.RED),c=function(n){return new Set([].concat(Object(l.a)(Array.from(n.keys())),Object(l.a)(Array.from(n.values()).flat()))).size}(n)===t.size;return{error:a?c?"":"not connected graph":"is not red blue colorable",colorMap:t}},R=t(2),L=t(20),U=t.n(L),C=String.raw,D=C(p||(p=Object(R.a)([" *[a-zA-Z0-9]+(?: +[a-zA-Z0-9]+)* *"]))),H=C(u||(u=Object(R.a)(["","(?:-",")+"])),D,D),S=C(d||(d=Object(R.a)(["(?:[,\n]+)"],["(?:[,\\n]+)"]))),N=new RegExp(C(b||(b=Object(R.a)(["(?:",")?(",")"])),S,H),"gy"),F=function(n){return n.trim()},G=function(n){return Array.from(new Set(n))},J=t(7),Z=t(3),I=t.p+"static/media/github.a407ddf3.svg",W=t.p+"static/media/wiking.3ccb519e.svg",q=t.p+"static/media/logo.ad446705.svg",K=Z.a.div(h||(h=Object(R.a)(["\n  align-items: center;\n  background-color: rgb(248, 240, 231);\n  background-image: url(",");\n  background-position: center center;\n  background-repeat: no-repeat;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  min-height: 100%;\n  padding: 50px 0;\n  &::after {\n    content: '';\n    flex: 1;\n  }\n"])),q),P=Z.a.h1(g||(g=Object(R.a)(["\n  background-image: url(",");\n  background-position: 50% 8px;\n  background-repeat: no-repeat;\n  background-size: 48px;\n  font: inherit;\n  font-size: 5vh;\n  margin: 0;\n  padding: 80px 0 0 0;\n"])),W),Q=Z.a.h2(j||(j=Object(R.a)(["\n  font: inherit;\n  font-size: 24px;\n  margin: 36px 0 24px 0;\n  padding: 0;\n"]))),T=Z.a.div(f||(f=Object(R.a)(["\n  display: flex;\n  flex-direction: row;\n  margin-top: -12px;\n  & > span {\n    font-size: ","px;\n    height: ","px;\n    line-height: ","px;\n    padding: ","px 0;\n  }\n"])),(function(n){return n.targetHeight}),(function(n){return n.targetHeight}),(function(n){return.91*n.targetHeight}),12),V=Z.a.textarea(x||(x=Object(R.a)([""]))),X=Object(Z.a)(V).attrs({spellCheck:!1})(O||(O=Object(R.a)(["\n  background-color: transparent;\n  border: 0px solid hsl(0, 0%, 85%);\n  font: inherit;\n  font-size: 24px;\n  height: ","px;\n  overflow: hidden;\n  padding: ","px;\n  resize: none;\n  width: 300px;\n  &:active,\n  &:focus {\n    outline: none;\n  }\n  &::placeholder {\n    color: hsl(0, 0%, 50%);\n    opacity: 0;\n    transition: opacity 0.3s;\n  }\n  &:active::placeholder,\n  &:focus::placeholder {\n    opacity: 1;\n  }\n"])),(function(n){return n.targetHeight}),12),Y=Object(Z.a)(X)(m||(m=Object(R.a)(["\n  position: absolute;\n  pointer-events: none;\n  opacity: 0;\n"]))),$=Z.a.div(v||(v=Object(R.a)(["\n  display: flex;\n  flex-direction: row;\n"]))),_=Z.a.ul(k||(k=Object(R.a)(["\n  list-style: none;\n  margin: 0;\n  padding: 0;\n"]))),nn=(y={},Object(J.a)(y,r.BLUE,"hsl(220, 100%, 70%)"),Object(J.a)(y,r.RED,"hsl(15, 100%, 65%)"),y),en=Z.a.li(w||(w=Object(R.a)(["\n  background-color: ",";\n  border-radius: 16px;\n  color: white;\n  font-size: 24px;\n  height: 32px;\n  line-height: 32px;\n  margin: 0 0 16px 0;\n  padding: 0 16px;\n  text-align: center;\n  position: relative;\n  z-index: 1;\n"])),(function(n){return nn[n.nodeColor]})),tn=Z.a.svg(E||(E=Object(R.a)(["\n  margin: 0 -24px;\n"]))),rn=Object(Z.a)(Q)(M||(M=Object(R.a)(["\n  color: red;\n"]))),an=Z.a.a(z||(z=Object(R.a)(["\n  display: block;\n  background-image: url(",");\n  background-repeat: no-repeat;\n  background-position: 0 50%;\n  background-size: 20px;\n  padding-left: 32px;\n  height: 24px;\n  line-height: 24px;\n  margin-top: 48px;\n  text-decoration: none;\n  order: 3;\n  cursor: pointer;\n  color: inherit;\n  &::visited,\n  &:-webkit-any-link {\n    color: inherit;\n  }\n  &:hover {\n    text-decoration: underline;\n  }\n"])),I),cn=t(1),on=function(n){var e=n.nodes,t=n.color;return Object(cn.jsx)(_,{children:e.map((function(n,e){return Object(cn.jsx)(en,{nodeColor:t,children:n},e)}))})},sn=t(12),ln=function(n,e){return"".concat(120*n," ").concat(48*e)},pn=function(n){var e=n.x0,t=n.y0,r=n.x1,a=n.y1,c="M ".concat(ln(e,t)," C ").concat(ln(e+.5,t)," ").concat(ln(r-.5,a)," ").concat(ln(r,a));return Object(cn.jsx)("path",{d:c})},un=function(n){var e=n.redNodes,t=n.blueNodes,r=n.redNodesGraph,c=Object.fromEntries(e.map((function(n,e){return[n,e]}))),o=Object.fromEntries(t.map((function(n,e){return[n,e]}))),i=Array.from(r).flatMap((function(n){var e=Object(s.a)(n,2),t=e[0];return e[1].map((function(n){return{x0:0,y0:c[t],x1:1,y1:o[n]}}))})),l=48*Math.max(e.length,t.length);return Object(cn.jsx)(tn,{viewBox:"0 0 ".concat(120," ").concat(l),width:"".concat(120,"px"),height:"".concat(l,"px"),children:Object(cn.jsx)("g",{stroke:"hsl(0, 0%, 30%)",strokeWidth:"1",fill:"none",transform:"translate(0, ".concat(15.5,")"),children:i.map((function(n,e){return Object(a.createElement)(pn,Object(sn.a)(Object(sn.a)({},n),{},{key:e}))}))})})},dn=function(n){var e=n.onChange,t=n.placeholder,r=Object(a.useState)(56),c=Object(s.a)(r,2),o=c[0],i=c[1],l=Object(a.useRef)(null);return Object(cn.jsxs)(cn.Fragment,{children:[Object(cn.jsx)(Y,{ref:l}),Object(cn.jsxs)(T,{targetHeight:o,children:[Object(cn.jsx)("span",{children:"{"}),Object(cn.jsx)(X,{onChange:function(n){if(e(n),l.current){l.current.value=n.target.value;var t=Math.max(l.current.scrollHeight-24,56);t!==o&&i(t)}},placeholder:t,targetHeight:o}),Object(cn.jsx)("span",{children:"}"})]})]})},bn=function(){var n=Object(a.useState)({graph:new Map,error:"",colorMap:new Map}),e=Object(s.a)(n,2),t=e[0],c=t.graph,o=t.error,i=t.colorMap,p=e[1],u=Array.from(i.entries()).filter((function(n){return Object(s.a)(n,2)[1]===r.RED})).map((function(n){return Object(s.a)(n,1)[0]})),d=Array.from(i.entries()).filter((function(n){return Object(s.a)(n,2)[1]===r.BLUE})).map((function(n){return Object(s.a)(n,1)[0]})),b=new Set(u),h=new Map(Array.from(c).filter((function(n){var e=Object(s.a)(n,1)[0];return b.has(e)})));return Object(cn.jsxs)(K,{children:[Object(cn.jsx)(P,{children:"is it a red blue colorable graph?"}),Object(cn.jsx)(Q,{children:"enter some paths"}),Object(cn.jsx)(dn,{onChange:function(n){var e=function(n){for(var e=new Map;;){var t=N.exec(n);if(!t)break;var r=t[1].split("-").map(F);U()(r.slice(0,-1),r.slice(1)).forEach((function(n){var t=Object(s.a)(n,2),r=t[0],a=t[1];e.set(r,G([].concat(Object(l.a)(e.get(r)||[]),[a]))),e.set(a,G([].concat(Object(l.a)(e.get(a)||[]),[r])))}))}return e}(n.target.value),t=B(e),r=t.error,a=t.colorMap;p({graph:e,error:r,colorMap:a})},placeholder:"v 1 - v 2 - v 3,\nv 3 - v 4"}),o&&Object(cn.jsx)(rn,{children:o}),!o&&u.length>0&&Object(cn.jsxs)(cn.Fragment,{children:[Object(cn.jsx)(Q,{children:"bipartite graph"}),Object(cn.jsxs)($,{children:[Object(cn.jsx)(on,{nodes:u,color:r.RED}),Object(cn.jsx)(un,{redNodes:u,blueNodes:d,redNodesGraph:h}),Object(cn.jsx)(on,{nodes:d,color:r.BLUE})]})]}),Object(cn.jsx)(an,{href:"https://github.com/chriskr/bipartite-graph",children:"github repo"})]})};i.a.render(Object(cn.jsx)(c.a.StrictMode,{children:Object(cn.jsx)(bn,{})}),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.9af922ee.chunk.js.map