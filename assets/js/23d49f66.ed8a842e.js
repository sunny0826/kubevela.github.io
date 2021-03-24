(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{107:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(7),p=(n(0),n(262)),o={title:"Learning Appfile"},l={unversionedId:"developer-experience-guide/appfile/learn-appfile",id:"version-0.3.5/developer-experience-guide/appfile/learn-appfile",isDocsHomePage:!1,title:"Learning Appfile",description:"Appfile",source:"@site/versioned_docs/version-0.3.5/developer-experience-guide/appfile/learn-appfile.md",slug:"/developer-experience-guide/appfile/learn-appfile",permalink:"/docs/developer-experience-guide/appfile/learn-appfile",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/versioned_docs/version-0.3.5/developer-experience-guide/appfile/learn-appfile.md",version:"0.3.5",sidebar:"version-0.3.5/docs",previous:{title:"Overview",permalink:"/docs/developer-experience-guide/appfile/quick-start-appfile"},next:{title:"Port Forwarding",permalink:"/docs/developer-experience-guide/cli/port-forward"}},i=[{value:"Appfile",id:"appfile",children:[]},{value:"Schema",id:"schema",children:[]},{value:"Example Workflow",id:"example-workflow",children:[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"1. Download test app code",id:"1-download-test-app-code",children:[]},{value:"2. Deploy app in one command",id:"2-deploy-app-in-one-command",children:[]},{value:"Optional Configure another workload type",id:"optional-configure-another-workload-type",children:[]}]},{value:"What&#39;s Next?",id:"whats-next",children:[]}],c={toc:i};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(p.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(p.b)("h2",{id:"appfile"},"Appfile"),Object(p.b)("p",null,"A sample ",Object(p.b)("inlineCode",{parentName:"p"},"Appfile")," is as below:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-yaml"},'name: testapp\n\nservices:\n  frontend: # 1st service\n\n    image: oamdev/testapp:v1\n    build:\n      docker:\n        file: Dockerfile\n        context: .\n\n    cmd: ["node", "server.js"]\n    port: 8080\n\n    route: # trait\n      domain: example.com\n      rules:\n        - path: /testapp\n          rewriteTarget: /\n\n  backend: # 2nd service\n    type: task # workload type\n    image: perl \n    cmd: ["perl",  "-Mbignum=bpi", "-wle", "print bpi(2000)"]\n')),Object(p.b)("p",null,"Under the hood, ",Object(p.b)("inlineCode",{parentName:"p"},"Appfile")," will build the image from source code, and then generate ",Object(p.b)("inlineCode",{parentName:"p"},"Application")," resource with the image name."),Object(p.b)("h2",{id:"schema"},"Schema"),Object(p.b)("blockquote",null,Object(p.b)("p",{parentName:"blockquote"},"Before learning about Appfile's detailed schema, we recommend you to get familiar with ",Object(p.b)("a",{parentName:"p",href:"../../overview/concepts"},"core concepts")," in KubeVela.")),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-yaml"},'name: _app-name_\n\nservices:\n  _service-name_:\n    # If `build` section exists, this field will be used as the name to build image. Otherwise, KubeVela will try to pull the image with given name directly.\n    image: oamdev/testapp:v1\n\n    build:\n      docker:\n        file: _Dockerfile_path_ # relative path is supported, e.g. "./Dockerfile"\n        context: _build_context_path_ # relative path is supported, e.g. "."\n\n      push:\n        local: kind # optionally push to local KinD cluster instead of remote registry\n\n    type: webservice (default) | worker | task\n\n    # detailed configurations of workload\n    ... properties of the specified workload  ...\n\n    _trait_1_:\n      # properties of trait 1\n\n    _trait_2_:\n      # properties of trait 2\n\n    ... more traits and their properties ...\n  \n  _another_service_name_: # more services can be defined\n    ...\n  \n')),Object(p.b)("blockquote",null,Object(p.b)("p",{parentName:"blockquote"},"To learn about how to set the properties of specific workload type or trait, please check the ",Object(p.b)("a",{parentName:"p",href:"./check-ref-doc"},"reference documentation guide"),".")),Object(p.b)("h2",{id:"example-workflow"},"Example Workflow"),Object(p.b)("p",null,"In the following workflow, we will build and deploy an example NodeJS app under ",Object(p.b)("a",{parentName:"p",href:"https://github.com/oam-dev/kubevela/tree/master/docs/examples/testapp"},"examples/testapp/"),"."),Object(p.b)("h3",{id:"prerequisites"},"Prerequisites"),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},Object(p.b)("a",{parentName:"li",href:"https://docs.docker.com/get-docker/"},"Docker")," installed on the host"),Object(p.b)("li",{parentName:"ul"},Object(p.b)("a",{parentName:"li",href:"../../getting-started/install"},"KubeVela")," installed and configured")),Object(p.b)("h3",{id:"1-download-test-app-code"},"1. Download test app code"),Object(p.b)("p",null,"git clone and go to the testapp directory:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-bash"},"$ git clone https://github.com/oam-dev/kubevela.git\n$ cd kubevela/docs/examples/testapp\n")),Object(p.b)("p",null,"The example contains NodeJS app code, Dockerfile to build the app."),Object(p.b)("h3",{id:"2-deploy-app-in-one-command"},"2. Deploy app in one command"),Object(p.b)("p",null,"In the directory there is a ",Object(p.b)("a",{parentName:"p",href:"https://github.com/oam-dev/kubevela/tree/master/docs/examples/testapp/vela.yaml"},"vela.yaml")," which follows Appfile format supported by Vela.\nWe are going to use it to build and deploy the app."),Object(p.b)("blockquote",null,Object(p.b)("p",{parentName:"blockquote"},"NOTE: please change ",Object(p.b)("inlineCode",{parentName:"p"},"oamdev")," to your own registry account so you can push. Or, you could try the alternative approach in ",Object(p.b)("inlineCode",{parentName:"p"},"Local testing without pushing image remotely")," section.")),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-yaml"},"    image: oamdev/testapp:v1 # change this to your image\n")),Object(p.b)("p",null,"Run the following command:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-bash"},"$ vela up\nParsing vela.yaml ...\nLoading templates ...\n\nBuilding service (express-server)...\nSending build context to Docker daemon  71.68kB\nStep 1/10 : FROM mhart/alpine-node:12\n ---\x3e 9d88359808c3\n...\n\npushing image (oamdev/testapp:v1)...\n...\n\nRendering configs for service (express-server)...\nWriting deploy config to (.vela/deploy.yaml)\n\nApplying deploy configs ...\nChecking if app has been deployed...\nApp has not been deployed, creating a new deployment...\n\u2705 App has been deployed \ud83d\ude80\ud83d\ude80\ud83d\ude80\n    Port forward: vela port-forward testapp\n             SSH: vela exec testapp\n         Logging: vela logs testapp\n      App status: vela status testapp\n  Service status: vela status testapp --svc express-server\n")),Object(p.b)("p",null,"Check the status of the service:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-bash"},"$ vela status testapp\n  About:\n  \n    Name:       testapp\n    Namespace:  default\n    Created at: 2020-11-02 11:08:32.138484 +0800 CST\n    Updated at: 2020-11-02 11:08:32.138485 +0800 CST\n  \n  Services:\n  \n    - Name: express-server\n      Type: webservice\n      HEALTHY Ready: 1/1\n      Last Deployment:\n        Created at: 2020-11-02 11:08:33 +0800 CST\n        Updated at: 2020-11-02T11:08:32+08:00\n      Routes:\n\n")),Object(p.b)("h4",{id:"alternative-local-testing-without-pushing-image-remotely"},"Alternative: Local testing without pushing image remotely"),Object(p.b)("p",null,"If you have local ",Object(p.b)("a",{parentName:"p",href:"../../getting-started/install"},"kind")," cluster running, you may try the local push option. No remote container registry is needed in this case."),Object(p.b)("p",null,"Add local option to ",Object(p.b)("inlineCode",{parentName:"p"},"build"),":"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-yaml"},"    build:\n      # push image into local kind cluster without remote transfer\n      push:\n        local: kind\n\n      docker:\n        file: Dockerfile\n        context: .\n")),Object(p.b)("p",null,"Then deploy the app to kind:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-bash"},"$ vela up\n")),Object(p.b)("details",null,Object(p.b)("summary",null,"(Advanced) Check rendered manifests"),Object(p.b)("p",null,"By default, Vela renders the final manifests in ",Object(p.b)("inlineCode",{parentName:"p"},".vela/deploy.yaml"),":"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: core.oam.dev/v1alpha2\nkind: ApplicationConfiguration\nmetadata:\n  name: testapp\n  namespace: default\nspec:\n  components:\n  - componentName: express-server\n---\napiVersion: core.oam.dev/v1alpha2\nkind: Component\nmetadata:\n  name: express-server\n  namespace: default\nspec:\n  workload:\n    apiVersion: apps/v1\n    kind: Deployment\n    metadata:\n      name: express-server\n    ...\n---\napiVersion: core.oam.dev/v1alpha2\nkind: HealthScope\nmetadata:\n  name: testapp-default-health\n  namespace: default\nspec:\n  ...\n"))),Object(p.b)("h3",{id:"optional-configure-another-workload-type"},"[Optional]"," Configure another workload type"),Object(p.b)("p",null,"By now we have deployed a ",Object(p.b)("em",{parentName:"p"},Object(p.b)("a",{parentName:"em",href:"../../capability-references/webservice"},"Web Service")),", which is the default workload type in KubeVela. We can also add another service of ",Object(p.b)("em",{parentName:"p"},Object(p.b)("a",{parentName:"em",href:"../../capability-references/task"},"Task"))," type in the same app:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-yaml"},'services:\n  pi:\n    type: task\n    image: perl \n    cmd: ["perl",  "-Mbignum=bpi", "-wle", "print bpi(2000)"]\n\n  express-server:\n    ...\n')),Object(p.b)("p",null,"Then deploy Appfile again to update the application:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-bash"},"$ vela up\n")),Object(p.b)("p",null,"Congratulations! You have just deployed an app using ",Object(p.b)("inlineCode",{parentName:"p"},"Appfile"),"."),Object(p.b)("h2",{id:"whats-next"},"What's Next?"),Object(p.b)("p",null,"Play more with your app:"),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},Object(p.b)("a",{parentName:"li",href:"../cli/check-logs"},"Check Application Logs")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("a",{parentName:"li",href:"../cli/exec-cmd"},"Execute Commands in Application Container")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("a",{parentName:"li",href:"../cli/port-forward"},"Access Application via Route"))))}s.isMDXComponent=!0},262:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),s=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(n),u=a,m=d["".concat(o,".").concat(u)]||d[u]||b[u]||p;return n?r.a.createElement(m,l(l({ref:t},c),{},{components:n})):r.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,o=new Array(p);o[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<p;c++)o[c]=n[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);