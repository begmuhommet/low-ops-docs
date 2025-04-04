"use strict";(self.webpackChunklow_ops=self.webpackChunklow_ops||[]).push([[2689],{5563:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"installation/multi-node-installation","title":"Multi-Node Installation","description":"The following binaries must be present on the machine with access to Kubernetes api before starting the installation:","source":"@site/docs/03-installation/02-multi-node-installation.mdx","sourceDirName":"03-installation","slug":"/installation/multi-node-installation","permalink":"/docs/installation/multi-node-installation","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"Multi-Node Installation"},"sidebar":"tutorialSidebar","previous":{"title":"Overview","permalink":"/docs/installation/overview"},"next":{"title":"AWS Installation","permalink":"/docs/installation/aws-installation"}}');var o=s(4848),l=s(8453);const i={title:"Multi-Node Installation"},a=void 0,r={},c=[{value:"Foundation",id:"foundation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Installation",id:"installation",level:2},{value:"<span><strong>Step 1.</strong> Configure Namespace</span>",id:"step-1-configure-namespace",level:3},{value:"<span><strong>Step 2.</strong> Install metallb</span>",id:"step-2-install-metallb",level:3},{value:"<span><strong>Step 3.</strong> Install Low-Ops</span>",id:"step-3-install-low-ops",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.admonition,{title:"Required packages",type:"info",children:[(0,o.jsx)(n.p,{children:"The following binaries must be present on the machine with access to Kubernetes api before starting the installation:"}),(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["kubectl - ",(0,o.jsx)(n.code,{children:"v1.27"})]}),"\n",(0,o.jsxs)(n.li,{children:["helm - ",(0,o.jsx)(n.code,{children:"v3.9"})]}),"\n"]})]}),"\n",(0,o.jsx)(n.admonition,{title:"Kubernetes",type:"info",children:(0,o.jsxs)(n.p,{children:["Low-Ops requires a Kubernetes cluster. The minimum version is ",(0,o.jsx)(n.code,{children:"v1.27"}),"."]})}),"\n",(0,o.jsxs)(n.admonition,{title:"Resources",type:"info",children:[(0,o.jsx)(n.p,{children:"To run the Low-Ops you'll need at least"}),(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"16 GB RAM"}),"\n",(0,o.jsx)(n.li,{children:"8 core CPU"}),"\n"]})]}),"\n",(0,o.jsx)(n.h2,{id:"foundation",children:"Foundation"}),"\n",(0,o.jsx)(n.p,{children:"The platform foundation is an infrastructure level that has to provide a scalable, flexable and extensible environment\nfor the platform lifecycle. To build the platform foundation, you can use cloud providers or on-premise solutions that\nallow you to run managed or self-managed Kubernetes (k8s) clusters."}),"\n",(0,o.jsxs)(n.p,{children:["There are 2 different platform ",(0,o.jsx)(n.code,{children:"foundation_types"}),"'s:"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"generic"})," - Default platform installation method supports any Kubernetes custom or managed solution. All platform\ncomponents required to run future applications workloads will be installed automatically."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"aws"})," - Optimized platform installation for AWS-specific services natively supports other AWS services such as EKS, RDS,\nS3, ELB, EBS. To use AWS-managed data resources, you need to create them before platform installation as part of the\nfoundation setup. Refer to the diagram bellow for more details."]}),"\n",(0,o.jsx)("img",{src:"/img/aws-foundation.png",alt:"AWS Foundation",className:"image"}),"\n",(0,o.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,o.jsx)(n.p,{children:"Before starting the platform installation process, check the configuration options below. Change required paramaters to\nmatch your environment setup."}),"\n",(0,o.jsxs)(n.p,{children:["Create values file ",(0,o.jsx)(n.code,{children:"values.yaml"})," with following parameters:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:'lowops:\n  image:\n    containerImage: registry.gitlab.com/cinaq/low-ops-platform/ansible-roles:0-ci-v3-2-4\n\n  # LowOps platfrom configuration variables\n  config:\n    common:\n      base_domain: ci.cinaq.com\n      platform_state: present\n      foundation_type: generic # supported values: generic, aws, azure\n      email_domain: cinaq.com\n      general_client_name: CINAQ\n      platform_version: v3.2.4\n      low_ops_env: prod # set low-ops-env variable can\'t be ci,dev,trial - reserved\n      enable_letsencrypt: "true"\n      enable_nginx_proxy_protocol: "true" # required when running on generic foundation with haproxy\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Refer to the ",(0,o.jsx)(n.a,{href:"/docs/platform/advanced-configurations",children:"Advanced Configuration"})," page for more details on the available\nconfiguration options."]}),"\n",(0,o.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,o.jsx)(n.h3,{id:"step-1-configure-namespace",children:(0,o.jsxs)("span",{style:{fontSize:"1.2rem"},children:[(0,o.jsx)(n.strong,{children:"Step 1."})," Configure Namespace"]})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.em,{children:"Run script below to create deployment job namespace. Add pull secret to the namespace"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:'NAMESPACE=lowops-devops\nkubectl create namespace "$NAMESPACE"\n\nUPSTREAM_REGISTRY="registry.gitlab.com"\nUPSTREAM_REGISTRY_USER="registry-user" # change with your resgitry user\nUPSTREAM_REGISTRY_TOKEN="registry-token" # change with your registry password\nUPSTREAM_REGISTRY_AUTH=$(echo -n "$UPSTREAM_REGISTRY_USER:$UPSTREAM_REGISTRY_TOKEN" | base64)\n\nmkdir -p /tmp/lowops-docker-config\necho "\n{\n    \\"auths\\": {\n        \\"$UPSTREAM_REGISTRY\\": {\\"auth\\": \\"$UPSTREAM_REGISTRY_AUTH\\"}\n    }\n}\n" > /tmp/lowops-docker-config/config.json\n\n# ensure lowops-registry secret exists\nkubectl -n "$NAMESPACE" create secret generic lowops-registry --from-file=.dockerconfigjson=/tmp/lowops-docker-config/config.json --type=kubernetes.io/dockerconfigjson\n```bash\n\n'})}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h3,{id:"step-2-install-metallb",children:(0,o.jsxs)("span",{style:{fontSize:"1.2rem"},children:[(0,o.jsx)(n.strong,{children:"Step 2."})," Install metallb"]})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.em,{children:"Add bitnami helm repo"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'helm repo add "bitnami" "https://charts.bitnami.com/bitnami"\nhelm repo update\n'})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.em,{children:"Install metallb chart"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'# Network pool must be accesseble from cluster.\nSTART_NETWORK=172.20.255.200\nEND_NETWORK=172.20.255.250\nhelm upgrade -i -n metallb --create-namespace metallb bitnami/metallb \\\n    --version 3.0.12 \\\n    --set "configInline.address-pools[0].name=default" \\\n    --set "configInline.address-pools[0].protocol=layer2" \\\n    --set "configInline.address-pools[0].addresses[0]=${START_NETWORK}-${END_NETWORK}" \\\n    --set "speaker.secretValue=stronk-key"\n'})}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h3,{id:"step-3-install-low-ops",children:(0,o.jsxs)("span",{style:{fontSize:"1.2rem"},children:[(0,o.jsx)(n.strong,{children:"Step 3."})," Install Low-Ops"]})}),"\n",(0,o.jsxs)(n.p,{children:["From the deploy server with access to the Kubernetes cluster API. Install the platform by installing ",(0,o.jsx)(n.code,{children:"lowops"})," helm\nchart."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.em,{children:"Add lowops helm repository"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'helm repo add --username $UPSTREAM_REGISTRY_USER --password $UPSTREAM_REGISTRY_TOKEN lowops \\\n    "https://gitlab.com/api/v4/projects/41532268/packages/helm/stable"\n\nhelm repo update\n'})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.em,{children:"Run helm install command to start the Low-Ops setup process"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'\nNAMESPACE=lowops-devops\nCHART_VALUES_FILE=values.yaml\nCHART_VERSION=0.1.407\nHELM_CMD="helm upgrade -i lowops-platform lowops/lowops -n $NAMESPACE"\nif [ -f "$CHART_VALUES_FILE" ]; then\n    HELM_CMD="$HELM_CMD -f $CHART_VALUES_FILE"\nfi\nif [ -n "$CHART_VERSION" ]; then\n    HELM_CMD="$HELM_CMD --version=$CHART_VERSION"\nfi\necho "$HELM_CMD"\neval "$HELM_CMD"\n\n'})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.em,{children:"After deploy job started you can get installation log by running:"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"kubectl logs -n lowops-devops --timestamps=true job/lowops-platform -f\n"})}),"\n",(0,o.jsxs)(n.p,{children:["After deploy finished successfully start with exploring LowOps platform portal. In browser access\n",(0,o.jsx)(n.code,{children:"https://portal.ci.cinaq.com"})," (where ",(0,o.jsx)(n.code,{children:"ci.cinaq.com"})," is your base domain.)"]})]})}function p(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>a});var t=s(6540);const o={},l=t.createContext(o);function i(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);