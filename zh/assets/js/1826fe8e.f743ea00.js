(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{262:function(e,r,n){"use strict";n.d(r,"a",(function(){return s})),n.d(r,"b",(function(){return b}));var t=n(0),o=n.n(t);function c(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){c(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function p(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},c=Object.keys(e);for(t=0;t<c.length;t++)n=c[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)n=c[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var r=o.a.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},s=function(e){var r=u(e.components);return o.a.createElement(l.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},f=o.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,c=e.originalType,a=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=u(n),f=t,b=s["".concat(a,".").concat(f)]||s[f]||d[f]||c;return n?o.a.createElement(b,i(i({ref:r},l),{},{components:n})):o.a.createElement(b,i({ref:r},l))}));function b(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var c=n.length,a=new Array(c);a[0]=f;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i.mdxType="string"==typeof e?e:t,a[1]=i;for(var l=2;l<c;l++)a[l]=n[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},97:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return a})),n.d(r,"metadata",(function(){return i})),n.d(r,"toc",(function(){return p})),n.d(r,"default",(function(){return u}));var t=n(3),o=n(7),c=(n(0),n(262)),a={title:"Port Forwarding"},i={unversionedId:"developer-experience-guide/cli/port-forward",id:"version-0.3.5/developer-experience-guide/cli/port-forward",isDocsHomePage:!1,title:"Port Forwarding",description:"Once your web services of the application deployed, you can access it locally via port-forward.",source:"@site/versioned_docs/version-0.3.5/developer-experience-guide/cli/port-forward.md",slug:"/developer-experience-guide/cli/port-forward",permalink:"/zh/docs/developer-experience-guide/cli/port-forward",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/versioned_docs/version-0.3.5/developer-experience-guide/cli/port-forward.md",version:"0.3.5",sidebar:"version-0.3.5/docs",previous:{title:"Learning Appfile",permalink:"/zh/docs/developer-experience-guide/appfile/learn-appfile"},next:{title:"Check Application Logs",permalink:"/zh/docs/developer-experience-guide/cli/check-logs"}},p=[],l={toc:p};function u(e){var r=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(t.a)({},l,n,{components:r,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Once your web services of the application deployed, you can access it locally via ",Object(c.b)("inlineCode",{parentName:"p"},"port-forward"),". "),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"$ vela ls\nNAME            APP     WORKLOAD      TRAITS    STATUS      CREATED-TIME\nexpress-server  testapp webservice              Deployed    2020-09-18 22:42:04 +0800 CST\n")),Object(c.b)("p",null,"It will directly open browser for you."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"$ vela port-forward testapp\nForwarding from 127.0.0.1:8080 -> 80\nForwarding from [::1]:8080 -> 80\n\nForward successfully! Opening browser ...\nHandling connection for 8080\nHandling connection for 8080\n")))}u.isMDXComponent=!0}}]);