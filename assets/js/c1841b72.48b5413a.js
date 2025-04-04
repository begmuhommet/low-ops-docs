"use strict";(self.webpackChunklow_ops=self.webpackChunklow_ops||[]).push([[3197],{3304:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"quick-start/hetzner-single-node-installation","title":"Hetzner Single Node Installation","description":"This guide describes how to install the Low-Ops on a single Hetzner Cloud server using their CLI tool.","source":"@site/docs/02-quick-start/05-hetzner-single-node-installation.mdx","sourceDirName":"02-quick-start","slug":"/quick-start/hetzner-single-node-installation","permalink":"/docs/quick-start/hetzner-single-node-installation","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"Hetzner Single Node Installation"},"sidebar":"tutorialSidebar","previous":{"title":"Azure Single Node Installation","permalink":"/docs/quick-start/azure-single-node-installation"},"next":{"title":"GCP Single Node Installation","permalink":"/docs/quick-start/gcp-single-node-installation"}}');var t=s(4848),l=s(8453),a=s(5537),o=s(9329);const i={title:"Hetzner Single Node Installation"},c=void 0,u={},d=[{value:"Install and Configure Hetzner Cloud CLI",id:"install-and-configure-hetzner-cloud-cli",level:2},{value:"<span><strong>Step 1.</strong> Install Hetzner Cloud CLI</span>",id:"step-1-install-hetzner-cloud-cli",level:3},{value:"<span> <strong>Step 2.</strong> Configure CLI with your API token</span>",id:"-step-2-configure-cli-with-your-api-token",level:3},{value:"Create Hetzner Cloud Server",id:"create-hetzner-cloud-server",level:2},{value:"<span> <strong>Step 1.</strong> Create an SSH key for server access</span>",id:"-step-1-create-an-ssh-key-for-server-access",level:3},{value:"<span> <strong>Step 2.</strong> Create public ipv4 IP address</span>",id:"-step-2-create-public-ipv4-ip-address",level:3},{value:"<span> <strong>Step 3.</strong> Create the server with required specifications</span>",id:"-step-3-create-the-server-with-required-specifications",level:3},{value:"<span> <strong>Step 4.</strong> Get the server&#39;s public IP</span>",id:"-step-4-get-the-servers-public-ip",level:3},{value:"Configure DNS record",id:"configure-dns-record",level:2},{value:"Install Low-Ops",id:"install-low-ops",level:2},{value:"<span> <strong>Step 1.</strong> Connect to your Hetzner server</span>",id:"-step-1-connect-to-your-hetzner-server",level:3},{value:"<span> <strong>Step 2.</strong> Install Low-Ops</span>",id:"-step-2-install-low-ops",level:3},{value:"Access Low-Ops",id:"access-low-ops",level:2},{value:"Cleanup (optional)",id:"cleanup-optional",level:2}];function p(e){const n={admonition:"admonition",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["This guide describes how to install the Low-Ops on a single ",(0,t.jsx)(n.code,{children:"Hetzner Cloud server"})," using their ",(0,t.jsx)(n.code,{children:"CLI tool"}),"."]}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsx)(n.p,{children:"This setup is suitable for testing and development environments. For production use, we recommend using a multi-node\nsetup with proper high availability."})}),"\n",(0,t.jsx)(n.admonition,{title:"Prerequisites",type:"info",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Hetzner Cloud account with API access"}),"\n",(0,t.jsx)(n.li,{children:"Hetzner Cloud CLI (hcloud) installed in your machine"}),"\n",(0,t.jsx)(n.li,{children:"Available domain name with DNS management access"}),"\n",(0,t.jsx)(n.li,{children:"Ubuntu 22.04 LTS"}),"\n"]})}),"\n",(0,t.jsx)(n.admonition,{title:"Minimum system requirements",type:"info",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"RAM: 16 GB"}),"\n",(0,t.jsx)(n.li,{children:"CPU: 8 vCPUs"}),"\n",(0,t.jsx)(n.li,{children:"Disk: 500 GB"}),"\n"]})}),"\n",(0,t.jsx)(n.h2,{id:"install-and-configure-hetzner-cloud-cli",children:"Install and Configure Hetzner Cloud CLI"}),"\n",(0,t.jsx)(n.h3,{id:"step-1-install-hetzner-cloud-cli",children:(0,t.jsxs)("span",{style:{fontSize:"1.2rem"},children:[(0,t.jsx)(n.strong,{children:"Step 1."})," Install Hetzner Cloud CLI"]})}),"\n","\n",(0,t.jsxs)(a.A,{children:[(0,t.jsx)(o.A,{value:"macOS",label:"macOS",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"brew install hcloud\n"})})}),(0,t.jsx)(o.A,{value:"Linux",label:"Linux",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"curl -fsSL https://raw.githubusercontent.com/hetznercloud/cli/master/install.sh | bash \n"})})})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"-step-2-configure-cli-with-your-api-token",children:(0,t.jsxs)("span",{style:{fontSize:"1.2rem"},children:[" ",(0,t.jsx)(n.strong,{children:"Step 2."})," Configure CLI with your API token"]})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"hcloud context create lowops\n# When prompted, enter your API token from the Hetzner Cloud Console\n"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"create-hetzner-cloud-server",children:"Create Hetzner Cloud Server"}),"\n",(0,t.jsx)(n.h3,{id:"-step-1-create-an-ssh-key-for-server-access",children:(0,t.jsxs)("span",{style:{fontSize:"1.2rem"},children:[" ",(0,t.jsx)(n.strong,{children:"Step 1."})," Create an SSH key for server access"]})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"ssh-keygen -t ed25519 -f ~/.ssh/hetzner_lowops\nhcloud ssh-key create --name lowops-key --public-key-from-file ~/.ssh/hetzner_lowops.pub\n"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"-step-2-create-public-ipv4-ip-address",children:(0,t.jsxs)("span",{style:{fontSize:"1.2rem"},children:[" ",(0,t.jsx)(n.strong,{children:"Step 2."})," Create public ipv4 IP address"]})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"hcloud primary-ip create --datacenter=hel1-dc2 --name=lowops-ip --type=ipv4\n"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"-step-3-create-the-server-with-required-specifications",children:(0,t.jsxs)("span",{style:{fontSize:"1.2rem"},children:[" ",(0,t.jsx)(n.strong,{children:"Step 3."})," Create the server with required specifications"]})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"hcloud server create \\\n  --name lowops-server \\\n  --type cxp41 \\\n  --image ubuntu-22.04 \\\n  --ssh-key lowops-key \\\n  --datacenter hel1-dc2 \\\n  --primary-ipv4 lowops-ip\n"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"-step-4-get-the-servers-public-ip",children:(0,t.jsxs)("span",{style:{fontSize:"1.2rem"},children:[" ",(0,t.jsx)(n.strong,{children:"Step 4."})," Get the server's public IP"]})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"hcloud server list\n"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"configure-dns-record",children:"Configure DNS record"}),"\n",(0,t.jsxs)(n.p,{children:["Configure wildcard ",(0,t.jsx)(n.code,{children:"A"})," record pointing to server public IP address within DNS provider of your choice. Example: If your\ndomain is ",(0,t.jsx)(n.code,{children:"paas.company.com"}),", create an A record for ",(0,t.jsx)(n.code,{children:"*.paas.company.com"})," pointing to your server's public IP Wait for\nDNS propagation (can take up to 48 hours, but usually much faster)."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"install-low-ops",children:"Install Low-Ops"}),"\n",(0,t.jsx)(n.h3,{id:"-step-1-connect-to-your-hetzner-server",children:(0,t.jsxs)("span",{style:{fontSize:"1.2rem"},children:[" ",(0,t.jsx)(n.strong,{children:"Step 1."})," Connect to your Hetzner server"]})}),"\n",(0,t.jsx)(n.p,{children:"Connect to your Hetzner server via SSH."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"ssh -i ~/.ssh/hetzner_lowops root@your-server-public-ip\n"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"-step-2-install-low-ops",children:(0,t.jsxs)("span",{style:{fontSize:"1.2rem"},children:[" ",(0,t.jsx)(n.strong,{children:"Step 2."})," Install Low-Ops"]})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"curl -sO https://raw.githubusercontent.com/cinaq/helm-charts/refs/heads/main/charts/lowops-platform/scripts/install-platform.sh\n  && chmod +x install-platform.sh\n  && ./install-platform.sh\n"})}),"\n",(0,t.jsxs)(n.p,{children:["During installation process you will be prompted to input: ",(0,t.jsx)(n.code,{children:"base domain name"})," (For instance if your portal should be\navailable at ",(0,t.jsx)(n.code,{children:"portal.paas.company.com"}),". Base domain is ",(0,t.jsx)(n.code,{children:"paas.company.com"}),")."]}),"\n",(0,t.jsx)(n.p,{children:"Docker registry credentials. Current dockerhub pull image limits requires at list pro plan PAT for successfull\ninstallation."}),"\n",(0,t.jsxs)(n.p,{children:["Wait until ",(0,t.jsx)(n.code,{children:"lowops-platform pod"})," in ",(0,t.jsx)(n.code,{children:"lowops-devops"})," namespace status is ",(0,t.jsx)(n.code,{children:"Completed"}),". Usually takes ",(0,t.jsx)(n.code,{children:"20-30 minutes"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["After installation completes, you can access the platform portal using the credentials from the ",(0,t.jsx)(n.code,{children:"script output"}),"."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"access-low-ops",children:"Access Low-Ops"}),"\n",(0,t.jsxs)(n.p,{children:["Access the Low-Ops at ",(0,t.jsx)(n.code,{children:"https://portal.paas.company.com"})]}),"\n",(0,t.jsx)(n.h2,{id:"cleanup-optional",children:"Cleanup (optional)"}),"\n",(0,t.jsx)(n.p,{children:"If you need to remove the server and associated resources, you can do so with the following commands"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"hcloud server delete lowops-server\nhcloud primary-ip delete lowops-ip\nhcloud ssh-key delete lowops-key\n"})})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},5537:(e,n,s)=>{s.d(n,{A:()=>w});var r=s(6540),t=s(4164),l=s(5627),a=s(6347),o=s(372),i=s(604),c=s(1861),u=s(8749);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:s}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:s,attributes:r,default:t}}=e;return{value:n,label:s,attributes:r,default:t}}))}(s);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function h(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:s}=e;const t=(0,a.W6)(),l=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,i.aZ)(l),(0,r.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(t.location.search);n.set(l,e),t.replace({...t.location,search:n.toString()})}),[l,t])]}function f(e){const{defaultValue:n,queryString:s=!1,groupId:t}=e,l=p(e),[a,i]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=s.find((e=>e.default))??s[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:l}))),[c,d]=m({queryString:s,groupId:t}),[f,g]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,l]=(0,u.Dv)(s);return[t,(0,r.useCallback)((e=>{s&&l.set(e)}),[s,l])]}({groupId:t}),x=(()=>{const e=c??f;return h({value:e,tabValues:l})?e:null})();(0,o.A)((()=>{x&&i(x)}),[x]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),g(e)}),[d,g,l]),tabValues:l}}var g=s(9136);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=s(4848);function j(e){let{className:n,block:s,selectedValue:r,selectValue:a,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.a_)(),u=e=>{const n=e.currentTarget,s=i.indexOf(n),t=o[s].value;t!==r&&(c(n),a(t))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const s=i.indexOf(e.currentTarget)+1;n=i[s]??i[0];break}case"ArrowLeft":{const s=i.indexOf(e.currentTarget)-1;n=i[s]??i[i.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":s},n),children:o.map((e=>{let{value:n,label:s,attributes:l}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>{i.push(e)},onKeyDown:d,onClick:u,...l,className:(0,t.A)("tabs__item",x.tabItem,l?.className,{"tabs__item--active":r===n}),children:s??n},n)}))})}function b(e){let{lazy:n,children:s,selectedValue:l}=e;const a=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===l));return e?(0,r.cloneElement)(e,{className:(0,t.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==l})))})}function y(e){const n=f(e);return(0,v.jsxs)("div",{className:(0,t.A)("tabs-container",x.tabList),children:[(0,v.jsx)(j,{...n,...e}),(0,v.jsx)(b,{...n,...e})]})}function w(e){const n=(0,g.A)();return(0,v.jsx)(y,{...e,children:d(e.children)},String(n))}},8453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>o});var r=s(6540);const t={},l=r.createContext(t);function a(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),r.createElement(l.Provider,{value:n},e.children)}},9329:(e,n,s)=>{s.d(n,{A:()=>a});s(6540);var r=s(4164);const t={tabItem:"tabItem_Ymn6"};var l=s(4848);function a(e){let{children:n,hidden:s,className:a}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,r.A)(t.tabItem,a),hidden:s,children:n})}}}]);