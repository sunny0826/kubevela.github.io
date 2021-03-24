(window.webpackJsonp=window.webpackJsonp||[]).push([[127],{199:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return o})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),i=(r(0),r(262)),l={titile:"Metrics"},c={unversionedId:"capability-references/metrics",id:"capability-references/metrics",isDocsHomePage:!1,title:"metrics",description:"Description",source:"@site/docs/capability-references/metrics.md",slug:"/capability-references/metrics",permalink:"/docs/next/capability-references/metrics",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/capability-references/metrics.md",version:"current",sidebar:"docs",previous:{title:"route",permalink:"/docs/next/capability-references/route"},next:{title:"scaler",permalink:"/docs/next/capability-references/scaler"}},o=[{value:"Description",id:"description",children:[]},{value:"Specification",id:"specification",children:[]},{value:"Properties",id:"properties",children:[]}],b={toc:o};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"description"},"Description"),Object(i.b)("p",null,"Configures monitoring metrics for your service."),Object(i.b)("h2",{id:"specification"},"Specification"),Object(i.b)("p",null,"List of all configuration options for a ",Object(i.b)("inlineCode",{parentName:"p"},"Metrics")," trait."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},'name: my-app-name\n\nservices:\n  my-service-name:\n    ...\n    metrics:\n      format: "prometheus"\n      port: 8080\n      path: "/metrics"\n      scheme:  "http"\n      enabled: true\n')),Object(i.b)("h2",{id:"properties"},"Properties"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Name"),Object(i.b)("th",{parentName:"tr",align:null},"Description"),Object(i.b)("th",{parentName:"tr",align:null},"Type"),Object(i.b)("th",{parentName:"tr",align:null},"Required"),Object(i.b)("th",{parentName:"tr",align:null},"Default"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"path"),Object(i.b)("td",{parentName:"tr",align:null},"The metrics path of the service"),Object(i.b)("td",{parentName:"tr",align:null},"string"),Object(i.b)("td",{parentName:"tr",align:null},"true"),Object(i.b)("td",{parentName:"tr",align:null},"/metrics")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"format"),Object(i.b)("td",{parentName:"tr",align:null},"Format of the metrics, default as prometheus"),Object(i.b)("td",{parentName:"tr",align:null},"string"),Object(i.b)("td",{parentName:"tr",align:null},"true"),Object(i.b)("td",{parentName:"tr",align:null},"prometheus")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"scheme"),Object(i.b)("td",{parentName:"tr",align:null},"The way to retrieve data which can take the values ",Object(i.b)("inlineCode",{parentName:"td"},"http")," or ",Object(i.b)("inlineCode",{parentName:"td"},"https")),Object(i.b)("td",{parentName:"tr",align:null},"string"),Object(i.b)("td",{parentName:"tr",align:null},"true"),Object(i.b)("td",{parentName:"tr",align:null},"http")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"enabled"),Object(i.b)("td",{parentName:"tr",align:null}),Object(i.b)("td",{parentName:"tr",align:null},"bool"),Object(i.b)("td",{parentName:"tr",align:null},"true"),Object(i.b)("td",{parentName:"tr",align:null},"true")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"port"),Object(i.b)("td",{parentName:"tr",align:null},"The port for metrics, will discovery automatically by default"),Object(i.b)("td",{parentName:"tr",align:null},"int"),Object(i.b)("td",{parentName:"tr",align:null},"true"),Object(i.b)("td",{parentName:"tr",align:null},"0")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"selector"),Object(i.b)("td",{parentName:"tr",align:null},"The label selector for the pods, will discovery automatically by default"),Object(i.b)("td",{parentName:"tr",align:null},"map","[string]","string"),Object(i.b)("td",{parentName:"tr",align:null},"false"),Object(i.b)("td",{parentName:"tr",align:null})))))}p.isMDXComponent=!0},262:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),u=p(r),m=n,d=u["".concat(l,".").concat(m)]||u[m]||s[m]||i;return r?a.a.createElement(d,c(c({ref:t},b),{},{components:r})):a.a.createElement(d,c({ref:t},b))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=m;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var b=2;b<i;b++)l[b]=r[b];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);