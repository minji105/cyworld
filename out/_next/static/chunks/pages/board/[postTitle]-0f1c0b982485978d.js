(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[79],{1666:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/board/[postTitle]",function(){return n(5748)}])},5748:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});var s=n(5893),o=n(7294),r=n(1163),c=n(1664),a=n.n(c),i=n(144),d=n.n(i);function l(){let e=(0,r.useRouter)(),{postTitle:t}=e.query,[n,c]=(0,o.useState)(null),[i,l]=(0,o.useState)(!1);(0,o.useEffect)(()=>{localStorage.getItem("token")&&l(!0)},[]),(0,o.useEffect)(()=>{t&&fetch(`https://cyworld-server-6c304c5195d4.herokuapp.com/api/posts/${t}`).then(e=>e.json()).then(e=>c(e))},[t]);let h=async()=>{if(confirm("정말로 이 게시물을 삭제하시겠습니까?"))try{(await fetch(`https://cyworld-server-6c304c5195d4.herokuapp.com/api/posts/${t}`,{method:"DELETE"})).ok?e.push("/board/Board"):console.error("Failed to delete post")}catch(e){console.error("Error:",e)}};return n?(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:"whole-container",children:(0,s.jsxs)("div",{className:"content",children:[(0,s.jsxs)("div",{className:d().nav,children:[(0,s.jsx)(a(),{href:"/board/Board",children:"← 이전"}),i&&(0,s.jsxs)("div",{className:d().buttons,children:[(0,s.jsx)("button",{type:"button",className:"nes-btn",onClick:()=>{e.push(`/board/edit/${t}`)},children:"수정"}),(0,s.jsx)("button",{type:"button",className:"nes-btn",onClick:h,children:"삭제"})]})]}),(0,s.jsxs)("div",{className:d().info,children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("span",{children:n.section}),(0,s.jsx)("h2",{children:n.title})]}),(0,s.jsx)("div",{children:(0,s.jsxs)("span",{children:["작성일자: ",n.createdAt]})})]}),(0,s.jsx)("div",{className:d().post,dangerouslySetInnerHTML:{__html:n.content}})]})})}):(0,s.jsx)("div",{children:"Loading..."})}},144:function(e){e.exports={nav:"Post_nav__VtJyk",info:"Post_info__kD_hC",readme:"Post_readme__yjahp",post:"Post_post__D7SJY"}}},function(e){e.O(0,[888,774,179],function(){return e(e.s=1666)}),_N_E=e.O()}]);