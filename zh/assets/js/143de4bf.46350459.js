(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{262:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return u}));var i=t(0),a=t.n(i);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),p=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},b=function(e){var n=p(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=p(t),m=i,u=b["".concat(o,".").concat(m)]||b[m]||d[m]||r;return t?a.a.createElement(u,l(l({ref:n},s),{},{components:t})):a.a.createElement(u,l({ref:n},s))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=t[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},93:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return p}));var i=t(3),a=t(7),r=(t(0),t(262)),o={title:"Definition CRD"},l={unversionedId:"platform-builder-guide/design-abstraction/definition-and-templates",id:"platform-builder-guide/design-abstraction/definition-and-templates",isDocsHomePage:!1,title:"Definition CRD",description:"Definition Objects",source:"@site/docs/platform-builder-guide/design-abstraction/definition-and-templates.md",slug:"/platform-builder-guide/design-abstraction/definition-and-templates",permalink:"/zh/docs/next/platform-builder-guide/design-abstraction/definition-and-templates",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/platform-builder-guide/design-abstraction/definition-and-templates.md",version:"current",sidebar:"docs",previous:{title:"Application CRD",permalink:"/zh/docs/next/platform-builder-guide/design-abstraction/application"},next:{title:"Learning CUE",permalink:"/zh/docs/next/platform-builder-guide/using-cue/basic"}},c=[{value:"Definition Objects",id:"definition-objects",children:[]},{value:"Overview",id:"overview",children:[{value:"Capability Indexer",id:"capability-indexer",children:[]},{value:"Interoperability Fields",id:"interoperability-fields",children:[]},{value:"Capability Encapsulation",id:"capability-encapsulation",children:[]}]}],s={toc:c};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"definition-objects"},"Definition Objects"),Object(r.b)("p",null,"This documentation explains how to register and manage available ",Object(r.b)("em",{parentName:"p"},"components")," and ",Object(r.b)("em",{parentName:"p"},"traits")," in your platform with ",Object(r.b)("inlineCode",{parentName:"p"},"WorkloadDefinition")," and ",Object(r.b)("inlineCode",{parentName:"p"},"TraitDefinition"),', so your end users could "assemble" them into a ',Object(r.b)("inlineCode",{parentName:"p"},"Application")," resource."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"All definition objects are expected to be maintained and installed by platform team, think them as ",Object(r.b)("em",{parentName:"p"},"capability providers")," in your platform.")),Object(r.b)("h2",{id:"overview"},"Overview"),Object(r.b)("p",null,"Essentially, a definition object in KubeVela is consisted by three section:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Capability Indexer")," defined by ",Object(r.b)("inlineCode",{parentName:"li"},"spec.definitionRef"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"this is for discovering the provider of this capability."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Interoperability Fields"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"they are for the platform to ensure a trait can work with given workload type. Hence only ",Object(r.b)("inlineCode",{parentName:"li"},"TraitDefinition")," has these fields."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Capability Encapsulation")," defined by ",Object(r.b)("inlineCode",{parentName:"li"},"spec.schematic"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"this defines the encapsulation (i.e. templating and parametering) of this capability. For now, user can choose to use Helm or CUE as encapsulation.")))),Object(r.b)("p",null,"Hence, the basic structure of definition object is as below:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: core.oam.dev/v1alpha2\nkind: XxxDefinition\nmetadata:\n  name: <definition name>\nspec:\n  definitionRef:\n    name: <resources>.<api-group>\n  schematic:\n    cue:\n      # cue template ...\n    helm:\n      # Helm chart ...\n  # ... interoperability fields\n")),Object(r.b)("p",null,"Let's explain these fields one by one."),Object(r.b)("h3",{id:"capability-indexer"},"Capability Indexer"),Object(r.b)("p",null,"The indexer of given capability is declared as ",Object(r.b)("inlineCode",{parentName:"p"},"spec.definitionRef"),"."),Object(r.b)("p",null,"Below is a definition for ",Object(r.b)("em",{parentName:"p"},"Web Service")," in KubeVela: "),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1alpha2\nkind: WorkloadDefinition\nmetadata:\n  name: webservice\n  namespace: default\n  annotations:\n    definition.oam.dev/description: "Describes long-running, scalable, containerized services that have a stable network endpoint to receive external network traffic from customers."\nspec:\n  definitionRef:\n    name: deployments.apps\n    ...\n        \n')),Object(r.b)("p",null,"In above example, it claims to leverage Kubernetes Deployment (",Object(r.b)("inlineCode",{parentName:"p"},"deployments.apps"),") as the workload type to instantiate this component."),Object(r.b)("p",null,"Below is an example of ",Object(r.b)("em",{parentName:"p"},"ingress")," trait:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: core.oam.dev/v1alpha2\nkind: TraitDefinition\nmetadata:\n  name:  ingress\nspec:\n  definitionRef:\n    name: ingresses.networking.k8s.io\n    ...\n")),Object(r.b)("p",null,"Similarly, it claims to leverage Kubernetes Ingress (",Object(r.b)("inlineCode",{parentName:"p"},"ingresses.networking.k8s.io"),") as the underlying provider of this capability."),Object(r.b)("h3",{id:"interoperability-fields"},"Interoperability Fields"),Object(r.b)("p",null,"The interoperability fields are ",Object(r.b)("strong",{parentName:"p"},"trait only"),". An overall view of interoperability fields in a ",Object(r.b)("inlineCode",{parentName:"p"},"TraitDefinition")," is show as below."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: core.oam.dev/v1alpha2\nkind: TraitDefinition\nmetadata:\n  name:  ingress\nspec:\n  definitionRef:\n    name: ingresses.networking.k8s.io\n  appliesToWorkloads: \n    - deployments.apps\n    - webservice\n  conflictsWith: \n    - service\n  workloadRefPath: spec.wrokloadRef \n")),Object(r.b)("p",null,"Let's explain them in detail."),Object(r.b)("h4",{id:"specappliestoworkloads"},Object(r.b)("inlineCode",{parentName:"h4"},".spec.appliesToWorkloads")),Object(r.b)("p",null,"This field defines the constraints that what kinds of workloads this trait is allowed to apply to."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"It accepts an array of string as value."),Object(r.b)("li",{parentName:"ul"},"Each item in the array refers to one or a group of workload types to which this trait is allowded to apply.")),Object(r.b)("p",null,"There are four approaches to denote one or a group of workload types."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"WorkloadDefinition")," name, e.g., ",Object(r.b)("inlineCode",{parentName:"li"},"webservice"),", ",Object(r.b)("inlineCode",{parentName:"li"},"worker")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"WorkloadDefinition")," definition reference (CRD name), e.g., ",Object(r.b)("inlineCode",{parentName:"li"},"deployments.apps")),Object(r.b)("li",{parentName:"ul"},"Resource group of ",Object(r.b)("inlineCode",{parentName:"li"},"WorkloadDefinition")," definition reference prefixed with ",Object(r.b)("inlineCode",{parentName:"li"},"*."),", e.g., ",Object(r.b)("inlineCode",{parentName:"li"},"*.apps"),", ",Object(r.b)("inlineCode",{parentName:"li"},"*.oam.dev"),". This means the trait is allowded to apply to any workloads in this group."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"*")," means this trait is allowded to apply to any workloads")),Object(r.b)("p",null,"If this field is omitted, it means this trait is allowded to apply to any workload types."),Object(r.b)("p",null,"KubeVela will raise an error if a trait is applied to a workload which is NOT included in the ",Object(r.b)("inlineCode",{parentName:"p"},"appliesToWorkloads"),"."),Object(r.b)("h5",{id:"specconflictswith"},Object(r.b)("inlineCode",{parentName:"h5"},".spec.conflictsWith")),Object(r.b)("p",null,"This field defines that constraints that what kinds of traits are conflicting with this trait, if they are applied to the same workload."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"It accepts an array of string as value. "),Object(r.b)("li",{parentName:"ul"},"Each item in the array refers to one or a group of traits.")),Object(r.b)("p",null,"There are four approaches to denote one or a group of workload types."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"TraitDefinition")," name, e.g., ",Object(r.b)("inlineCode",{parentName:"li"},"ingress")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"TraitDefinition")," definition reference (CRD name), e.g., ",Object(r.b)("inlineCode",{parentName:"li"},"ingresses.networking.k8s.io")),Object(r.b)("li",{parentName:"ul"},"Resource group of ",Object(r.b)("inlineCode",{parentName:"li"},"TraitDefinition")," definition reference prefixed with ",Object(r.b)("inlineCode",{parentName:"li"},"*."),", e.g., ",Object(r.b)("inlineCode",{parentName:"li"},"*.networking.k8s.io"),". This means the trait is conflicting with any traits in this group."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"*")," means this trait is conflicting with any other trait.")),Object(r.b)("p",null,"If this field is omitted, it means this trait is NOT conflicting with any traits."),Object(r.b)("h5",{id:"specworkloadrefpath"},Object(r.b)("inlineCode",{parentName:"h5"},".spec.workloadRefPath")),Object(r.b)("p",null,"This field defines the field path of the trait which is used to store the reference of the workload to which the trait is applied."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"It accepts a string as value, e.g., ",Object(r.b)("inlineCode",{parentName:"li"},"spec.workloadRef"),".  ")),Object(r.b)("p",null,"If this field is set, KubeVela core will automatically fill the workload reference into target field of the trait. Then the trait controller can get the workload reference from the trait latter. So this field usually accompanies with the traits whose controllers relying on the workload reference at runtime. "),Object(r.b)("p",null,"Please check ",Object(r.b)("a",{parentName:"p",href:"https://github.com/oam-dev/kubevela/blob/master/charts/vela-core/templates/defwithtemplate/manualscale.yaml"},"scaler")," trait as a demonstration of how to set this field."),Object(r.b)("h3",{id:"capability-encapsulation"},"Capability Encapsulation"),Object(r.b)("p",null,"The encapsulation (i.e. templating and parametering) of given capability are defined in ",Object(r.b)("inlineCode",{parentName:"p"},"spec.schematic")," field. For example, below is the full definition of ",Object(r.b)("em",{parentName:"p"},"Web Service")," type in KubeVela:"),Object(r.b)("details",null,Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1alpha2\nkind: WorkloadDefinition\nmetadata:\n  name: webservice\n  namespace: default\n  annotations:\n    definition.oam.dev/description: "Describes long-running, scalable, containerized services that have a stable network endpoint to receive external network traffic from customers."\nspec:\n  definitionRef:\n    name: deployments.apps\n  schematic:\n    cue:\n      template: |\n        output: {\n            apiVersion: "apps/v1"\n            kind:       "Deployment"\n            spec: {\n                selector: matchLabels: {\n                    "app.oam.dev/component": context.name\n                }\n        \n                template: {\n                    metadata: labels: {\n                        "app.oam.dev/component": context.name\n                    }\n        \n                    spec: {\n                        containers: [{\n                            name:  context.name\n                            image: parameter.image\n        \n                            if parameter["cmd"] != _|_ {\n                                command: parameter.cmd\n                            }\n        \n                            if parameter["env"] != _|_ {\n                                env: parameter.env\n                            }\n        \n                            if context["config"] != _|_ {\n                                env: context.config\n                            }\n        \n                            ports: [{\n                                containerPort: parameter.port\n                            }]\n        \n                            if parameter["cpu"] != _|_ {\n                                resources: {\n                                    limits:\n                                        cpu: parameter.cpu\n                                    requests:\n                                        cpu: parameter.cpu\n                                }\n                            }\n                        }]\n                }\n                }\n            }\n        }\n        parameter: {\n            // +usage=Which image would you like to use for your service\n            // +short=i\n            image: string\n        \n            // +usage=Commands to run in the container\n            cmd?: [...string]\n        \n            // +usage=Which port do you want customer traffic sent to\n            // +short=p\n            port: *80 | int\n            // +usage=Define arguments by using environment variables\n            env?: [...{\n                // +usage=Environment variable name\n                name: string\n                // +usage=The value of the environment variable\n                value?: string\n                // +usage=Specifies a source the value of this var should come from\n                valueFrom?: {\n                    // +usage=Selects a key of a secret in the pod\'s namespace\n                    secretKeyRef: {\n                        // +usage=The name of the secret in the pod\'s namespace to select from\n                        name: string\n                        // +usage=The key of the secret to select from. Must be a valid secret key\n                        key: string\n                    }\n                }\n            }]\n            // +usage=Number of CPU units for the service, like `0.5` (0.5 CPU core), `1` (1 CPU core)\n            cpu?: string\n        }     \n'))),Object(r.b)("p",null,"It's by design that KubeVela supports multiple ways to define the encapsulation. Hence, we will explain this field in detail with following guides."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Learn about ",Object(r.b)("a",{parentName:"li",href:"../using-cue/basic"},"CUE")," based capability definitions."),Object(r.b)("li",{parentName:"ul"},"Learn about ",Object(r.b)("a",{parentName:"li",href:"../using-helm/component"},"Helm")," based capability definitions.")))}p.isMDXComponent=!0}}]);