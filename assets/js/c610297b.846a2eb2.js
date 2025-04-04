"use strict";(self.webpackChunklow_ops=self.webpackChunklow_ops||[]).push([[2355],{4731:(e,n,l)=>{l.d(n,{A:()=>r});var i=l(4848);const r=()=>(0,i.jsx)("a",{href:"/docs/environment/deployment",className:"redeploy-link",children:"Deploy Environment."})},8453:(e,n,l)=>{l.d(n,{R:()=>a,x:()=>o});var i=l(6540);const r={},t=i.createContext(r);function a(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(t.Provider,{value:n},e.children)}},8918:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"environment/firewall","title":"Firewall","description":"Overview","source":"@site/docs/06-environment/06-firewall.mdx","sourceDirName":"06-environment","slug":"/environment/firewall","permalink":"/docs/environment/firewall","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"Firewall"},"sidebar":"tutorialSidebar","previous":{"title":"Backups","permalink":"/docs/environment/backups"},"next":{"title":"Alerts","permalink":"/docs/environment/alerts"}}');var r=l(4848),t=l(8453),a=l(4731);const o={title:"Firewall"},s=void 0,c={},d=[{value:"Overview",id:"overview",level:3},{value:"Create Firewall Rule",id:"create-firewall-rule",level:3},{value:"Edit Firewall Rule",id:"edit-firewall-rule",level:3},{value:"Delete Firewall Rule",id:"delete-firewall-rule",level:3}];function u(e){const n={admonition:"admonition",code:"code",h3:"h3",p:"p",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h3,{id:"overview",children:"Overview"}),"\n",(0,r.jsxs)(n.p,{children:["Firewall (IP filtering) serves to ",(0,r.jsx)(n.code,{children:"restrict"})," or ",(0,r.jsx)(n.code,{children:"allow"})," application access to specific IP address or IP ranges."]}),"\n",(0,r.jsxs)(n.p,{children:["You can access the firewall by navigating to ",(0,r.jsx)(n.code,{children:"Application > Environment > Firewall"}),"."]}),"\n",(0,r.jsx)("img",{src:"/img/firewall-screen.png",alt:"Firewall screen",className:"image"}),"\n",(0,r.jsx)(n.h3,{id:"create-firewall-rule",children:"Create Firewall Rule"}),"\n",(0,r.jsxs)(n.p,{children:["You can create a firewall rule by clicking on the ",(0,r.jsx)(n.code,{children:"Create Rule"})," button. Give it a path and select the action ",(0,r.jsx)(n.code,{children:"Allow"})," or\n",(0,r.jsx)(n.code,{children:"Deny"}),", add the IP address or IP range, and give it a description (optional). IP address or IP range can be added by\nclicking on the ",(0,r.jsx)(n.code,{children:"Enter"})," button."]}),"\n",(0,r.jsx)("img",{src:"/img/create-firewall-dialog.png",alt:"Create Firewall Dialog",className:"image"}),"\n",(0,r.jsx)(n.h3,{id:"edit-firewall-rule",children:"Edit Firewall Rule"}),"\n",(0,r.jsxs)(n.p,{children:["You can edit firewall rule byt clicking on the ",(0,r.jsx)(n.code,{children:"Edit"})," button on the firewalls table action menu."]}),"\n",(0,r.jsx)("img",{src:"/img/firewall-action-menu.png",alt:"Edit Firewall Rule",className:"image"}),"\n",(0,r.jsx)(n.h3,{id:"delete-firewall-rule",children:"Delete Firewall Rule"}),"\n",(0,r.jsxs)(n.p,{children:["You can delete a firewall rule by clicking on the ",(0,r.jsx)(n.code,{children:"Delete"})," button on the firewalls action table menu."]}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsxs)(n.p,{children:["To apply new firewall rules, you need to Re-Deploy the environment. ",(0,r.jsx)(a.A,{})]})})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}}}]);