(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{123:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return p}));var r=t(3),o=t(7),c=(t(0),t(262)),a={},i={unversionedId:"cli-references/vela_completion_bash",id:"version-0.3.5/cli-references/vela_completion_bash",isDocsHomePage:!1,title:"vela_completion_bash",description:"vela completion bash",source:"@site/versioned_docs/version-0.3.5/cli-references/vela_completion_bash.md",slug:"/cli-references/vela_completion_bash",permalink:"/docs/cli-references/vela_completion_bash",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/versioned_docs/version-0.3.5/cli-references/vela_completion_bash.md",version:"0.3.5"},l=[{value:"vela completion bash",id:"vela-completion-bash",children:[{value:"Synopsis",id:"synopsis",children:[]},{value:"Options",id:"options",children:[]},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}]}],s={toc:l};function p(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"vela-completion-bash"},"vela completion bash"),Object(c.b)("p",null,"generate autocompletions script for bash"),Object(c.b)("h3",{id:"synopsis"},"Synopsis"),Object(c.b)("p",null,"Generate the autocompletion script for Vela for the bash shell."),Object(c.b)("p",null,"To load completions in your current shell session:\n$ source <(vela completion bash)"),Object(c.b)("p",null,"To load completions for every new session, execute once:\nLinux:\n$ vela completion bash > /etc/bash_completion.d/vela\nMacOS:\n$ vela completion bash > /usr/local/etc/bash_completion.d/vela"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"vela completion bash\n")),Object(c.b)("h3",{id:"options"},"Options"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"  -h, --help   help for bash\n")),Object(c.b)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"  -e, --env string   specify environment name for application\n")),Object(c.b)("h3",{id:"see-also"},"SEE ALSO"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/docs/cli-references/vela_completion"},"vela completion"),"\t - Output shell completion code for the specified shell (bash or zsh)")),Object(c.b)("h6",{id:"auto-generated-by-spf13cobra-on-20-mar-2021"},"Auto generated by spf13/cobra on 20-Mar-2021"))}p.isMDXComponent=!0},262:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return d}));var r=t(0),o=t.n(r);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),p=function(e){var n=o.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},b=function(e){var n=p(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(t),m=r,d=b["".concat(a,".").concat(m)]||b[m]||u[m]||c;return t?o.a.createElement(d,i(i({ref:n},s),{},{components:t})):o.a.createElement(d,i({ref:n},s))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,a=new Array(c);a[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var s=2;s<c;s++)a[s]=t[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);