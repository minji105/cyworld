(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[323],{6897:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/project/[projectTitle]",function(){return t(5274)}])},6357:function(e,n){"use strict";n.Z=[{title:"PHOTOGRAPHER PORTFOLIO WEBSITE",section:"Web",img:"/projects/joheesu.png",stack:["React"],repo:"joheesu-port"}]},5274:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return j}});var r=t(5893),s=t(7294),c=t(1163),i=t(1664),o=t.n(i),a=t(9631),d=t(1140),l=t(5186),u=t(6357),h=t(144),f=t.n(h);function j(){let{projectTitle:e}=(0,c.useRouter)().query,[n,t]=(0,s.useState)(null),[i,h]=(0,s.useState)("");return((0,s.useEffect)(()=>{if(e){let n=u.Z.find(n=>n.title===e);t(n||null),n&&n.repo&&fetch(`https://api.github.com/repos/minji105/${n.repo}/readme`,{headers:{Accept:"application/vnd.github.v3+json"}}).then(e=>e.json()).then(e=>{h(new TextDecoder("utf-8").decode(Uint8Array.from(atob(e.content),e=>e.charCodeAt(0))))}).catch(e=>console.error("Error fetching README:",e))}},[e]),n)?(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:"whole-container",children:(0,r.jsxs)("div",{className:"content",children:[(0,r.jsx)("div",{className:f().nav,children:(0,r.jsx)(o(),{href:"/project/Projects",className:f().back,children:"← 이전"})}),(0,r.jsxs)("div",{className:f().info,children:[(0,r.jsx)("h2",{children:n.title}),(0,r.jsx)("span",{children:n.section})]}),(0,r.jsx)("div",{className:f().readme,children:i?(0,r.jsx)(a.U,{children:i,remarkPlugins:[l.Z],rehypePlugins:[d.Z]}):(0,r.jsx)("div",{children:"cannot find readme"})})]})})}):(0,r.jsx)("div",{children:"Loading..."})}},144:function(e){e.exports={nav:"Post_nav__VtJyk",info:"Post_info__kD_hC",readme:"Post_readme__yjahp"}}},function(e){e.O(0,[731,888,774,179],function(){return e(e.s=6897)}),_N_E=e.O()}]);