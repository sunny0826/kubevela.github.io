(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{134:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return o})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return s}));var n=r(3),a=r(7),i=(r(0),r(262)),c={titile:"Scaler"},o={unversionedId:"capability-references/scaler",id:"version-0.3.5/capability-references/scaler",isDocsHomePage:!1,title:"scaler",description:"Description",source:"@site/versioned_docs/version-0.3.5/capability-references/scaler.md",slug:"/capability-references/scaler",permalink:"/zh/docs/capability-references/scaler",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/versioned_docs/version-0.3.5/capability-references/scaler.md",version:"0.3.5",sidebar:"version-0.3.5/docs",previous:{title:"metrics",permalink:"/zh/docs/capability-references/metrics"},next:{title:"Restful API",permalink:"/zh/docs/capability-references/rest"}},l=[{value:"Description",id:"description",children:[]},{value:"Specification",id:"specification",children:[]},{value:"Properties",id:"properties",children:[]}],p={toc:l};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"description"},"Description"),Object(i.b)("p",null,"Configures replicas for your service."),Object(i.b)("h2",{id:"specification"},"Specification"),Object(i.b)("p",null,"List of all configuration options for a ",Object(i.b)("inlineCode",{parentName:"p"},"Scaler")," trait."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"name: my-app-name\n\nservices:\n  my-service-name:\n    ...\n    scaler:\n      replicas: 100\n")),Object(i.b)("h2",{id:"properties"},"Properties"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Name"),Object(i.b)("th",{parentName:"tr",align:null},"Description"),Object(i.b)("th",{parentName:"tr",align:null},"Type"),Object(i.b)("th",{parentName:"tr",align:null},"Required"),Object(i.b)("th",{parentName:"tr",align:null},"Default"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"replicas"),Object(i.b)("td",{parentName:"tr",align:null},"Replicas of the workload"),Object(i.b)("td",{parentName:"tr",align:null},"int"),Object(i.b)("td",{parentName:"tr",align:null},"true"),Object(i.b)("td",{parentName:"tr",align:null},"1")))))}s.isMDXComponent=!0},262:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},b=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=s(r),f=n,d=b["".concat(c,".").concat(f)]||b[f]||u[f]||i;return r?a.a.createElement(d,o(o({ref:t},p),{},{components:r})):a.a.createElement(d,o({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,c=new Array(i);c[0]=f;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var p=2;p<i;p++)c[p]=r[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);