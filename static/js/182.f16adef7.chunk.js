"use strict";(self.webpackChunkyclone=self.webpackChunkyclone||[]).push([[182],{172:function(e,n,t){t.r(n),t.d(n,{default:function(){return E}});var r,i=t(1413),o=t(9439),a=t(5987),s=t(3967),d=t(5193),l=t(8870),x=t(2791),c=t(168),p=t(3457),u=t(7847),h=t(7924),g=t(184);var f=function(e){var n=e.Icon,t=e.text,i=e.isMenuOpen,o=e.Category,a=e.handleCategoryChange,s=(e.width,(0,p.Z)("div")(r||(r=(0,c.Z)(["\n    margin-right: 3%;\n    \n  "])))),d={activenav:{width:o===t||"Home"===t&&"New"===o?i?"180px":"25px":"",borderRadius:o===t||"Home"===t&&"New"===o?"10px":"",backgroundColor:o===t||"Home"===t&&"New"===o?"#E5E5E5":""}};return(0,g.jsx)(l.Z,{style:d.activenav,sx:{display:"flex",marginBottom:"10px",marginLeft:"18px",padding:"5px",fontWeight:o===t||"Home"===t&&"New"===o?"bold":"normal","&:hover":{width:i?"180px":"25px",border:"1px solid #E5E5E5",borderRadius:"10px",backgroundColor:"#E5E5E5"}},onClick:function(){return a&&a(t)},children:i?(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(n,{}),(0,g.jsx)("span",{style:{marginLeft:"15px",marginTop:"3px",whiteSpace:"nowrap"},children:t})]}):(0,g.jsx)(s,{children:(0,g.jsx)(n,{})})})},m=function(e){var n=e.width,t=e.isMenuOpen,r=e.Category,i=e.handleCategoryChange;return(0,g.jsxs)(l.Z,{sx:{width:n,marginTop:"20px"},children:[(0,g.jsx)(l.Z,{children:u.bd.map((function(e,o){return(0,g.jsx)(f,{Icon:e.Icon,text:e.text,isMenuOpen:t,Category:r,handleCategoryChange:i,width:n},o)}))}),t&&(0,g.jsx)(h.Z,{sx:{width:"160px",marginBottom:"20px"}}),(0,g.jsx)(l.Z,{children:u.ej.map((function(e,r){return(0,g.jsx)(f,{Icon:e.Icon,text:e.text,isMenuOpen:t,width:n},r)}))})]})},w=t(9276),C=t(1009),j=t(8996);function v(e){var n=e.text,t=e.SelectedUpperNavValue,r=e.handleCategoryChange;return(0,g.jsx)(w.Z,{sx:{display:"flex",marginBottom:"10px",marginLeft:"18px",padding:"5px",color:t===n?"white":"",width:"fit-content",border:"1px solid #E5E5E5",borderRadius:"10px",backgroundColor:t!==n?"#E5E5E5":"black"},onClick:function(){return r(n)},children:(0,g.jsx)("span",{style:{padding:"2px",marginTop:"3px",whiteSpace:"nowrap"},children:n})})}var y=function(e){var n=e.handleCategoryChange,t=(0,x.useState)("All"),r=(0,o.Z)(t,2),i=r[0],a=r[1],s=(0,x.useState)(0),d=(0,o.Z)(s,2),l=d[0],c=d[1],p=(0,x.useState)(window.innerWidth),h=(0,o.Z)(p,2),f=h[0],m=h[1];(0,x.useEffect)((function(){var e=function(){m(window.innerWidth)};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}));var y=Math.round(.0052*f);console.log(y);var Z=u.Bm.slice(l,l+y),E=function(e){console.log(e),e>=0&&e<u.Bm.length&&(c(e),a(u.Bm[e]),n(u.Bm[e]))},b=function(e){a(e);var t=u.Bm.indexOf(e);c(t),n(e)};return(0,g.jsxs)(w.Z,{sx:{marginLeft:"8%",display:"flex",overflow:"hidden"},children:[(0,g.jsx)(C.Z,{sx:{mt:.5,fontSize:"30px"},onClick:function(){return E(l-1)}}),Z.map((function(e){return(0,g.jsx)(v,{text:e,SelectedUpperNavValue:i,handleCategoryChange:b},e)})),(0,g.jsx)(j.Z,{sx:{mt:.5,marginLeft:"2%",fontSize:"30px"},onClick:function(){return E(l+1)}})]})},Z=(t(3508),["component","isMenuOpen","toggleMenu"]);var E=function(e){var n=e.component,t=e.isMenuOpen,r=(e.toggleMenu,(0,a.Z)(e,Z)),c=(0,x.useState)("New"),p=(0,o.Z)(c,2),u=p[0],h=p[1],f=(0,s.Z)(),w=(0,d.Z)(f.breakpoints.up("lg")),C=function(e){console.log("Category",e),h(e)};return(0,g.jsxs)("div",{className:"app-template",style:{display:"flex",width:"100%"},children:[(0,g.jsx)(l.Z,{sx:{width:t?"10%":"2%"},children:(0,g.jsx)(m,{isMenuOpen:t&&w,Category:u,handleCategoryChange:C})}),(0,g.jsxs)(l.Z,{sx:{width:"90%",marginTop:"1%"},children:[(0,g.jsx)(y,{handleCategoryChange:C}),(0,g.jsxs)(x.Suspense,{fallback:(0,g.jsx)("div",{children:"Loading...."}),children:[" ",(0,g.jsx)(n,(0,i.Z)({Category:u},r))," "]})]})]})}}}]);
//# sourceMappingURL=182.f16adef7.chunk.js.map