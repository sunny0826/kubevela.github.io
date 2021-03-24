(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{163:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return o})),r.d(n,"metadata",(function(){return c})),r.d(n,"toc",(function(){return l})),r.d(n,"default",(function(){return p}));var t=r(3),a=r(7),i=(r(0),r(262)),o={},c={unversionedId:"cli-references/vela_env",id:"version-0.3.5/cli-references/vela_env",isDocsHomePage:!1,title:"vela_env",description:"vela env",source:"@site/versioned_docs/version-0.3.5/cli-references/vela_env.md",slug:"/cli-references/vela_env",permalink:"/zh/docs/cli-references/vela_env",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/versioned_docs/version-0.3.5/cli-references/vela_env.md",version:"0.3.5",sidebar:"version-0.3.5/docs",previous:{title:"vela_config",permalink:"/zh/docs/cli-references/vela_config"},next:{title:"vela_init",permalink:"/zh/docs/cli-references/vela_init"}},l=[{value:"vela env",id:"vela-env",children:[{value:"Synopsis",id:"synopsis",children:[]},{value:"Options",id:"options",children:[]},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}]}],s={toc:l};function p(e){var n=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(t.a)({},s,r,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"vela-env"},"vela env"),Object(i.b)("p",null,"Manage environments"),Object(i.b)("h3",{id:"synopsis"},"Synopsis"),Object(i.b)("p",null,"Manage environments"),Object(i.b)("h3",{id:"options"},"Options"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"  -h, --help   help for env\n")),Object(i.b)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"  -e, --env string   specify environment name for application\n")),Object(i.b)("h3",{id:"see-also"},"SEE ALSO"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/zh/docs/cli-references/vela"},"vela"),"\t - "),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/zh/docs/cli-references/vela_env_delete"},"vela env delete"),"\t - Delete environment"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/zh/docs/cli-references/vela_env_init"},"vela env init"),"\t - Create environments"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/zh/docs/cli-references/vela_env_ls"},"vela env ls"),"\t - List environments"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/zh/docs/cli-references/vela_env_set"},"vela env set"),"\t - Set an environment")),Object(i.b)("h6",{id:"auto-generated-by-spf13cobra-on-20-mar-2021"},"Auto generated by spf13/cobra on 20-Mar-2021"))}p.isMDXComponent=!0},262:function(e,n,r){"use strict";r.d(n,"a",(function(){return v})),r.d(n,"b",(function(){return f}));var t=r(0),a=r.n(t);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),p=function(e){var n=a.a.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},v=function(e){var n=p(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),v=p(r),b=t,f=v["".concat(o,".").concat(b)]||v[b]||u[b]||i;return r?a.a.createElement(f,c(c({ref:n},s),{},{components:r})):a.a.createElement(f,c({ref:n},s))}));function f(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=r.length,o=new Array(i);o[0]=b;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:t,o[1]=c;for(var s=2;s<i;s++)o[s]=r[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);