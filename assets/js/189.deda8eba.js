(window.webpackJsonp=window.webpackJsonp||[]).push([[189],{260:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(16),l=a(272),i=a(291),s=a(267),c=a(266);var m=function(e){var t=e.metadata,a=t.previousPage,n=t.nextPage;return r.a.createElement("nav",{className:"pagination-nav","aria-label":Object(c.b)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},r.a.createElement("div",{className:"pagination-nav__item"},a&&r.a.createElement(s.a,{className:"pagination-nav__link",to:a},r.a.createElement("div",{className:"pagination-nav__label"},"\xab"," ",r.a.createElement(c.a,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")))),r.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},n&&r.a.createElement(s.a,{className:"pagination-nav__link",to:n},r.a.createElement("div",{className:"pagination-nav__label"},r.a.createElement(c.a,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")," ","\xbb"))))},p=a(279);t.default=function(e){var t=e.metadata,a=e.items,n=e.sidebar,s=Object(o.default)().siteConfig.title,c=t.blogDescription,u=t.blogTitle,d="/"===t.permalink?s:u;return r.a.createElement(l.a,{title:d,description:c,wrapperClassName:"blog-wrapper",searchMetadatas:{tag:"blog_posts_list"}},r.a.createElement("div",{className:"container margin-vert--lg"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--3"},r.a.createElement(p.a,{sidebar:n})),r.a.createElement("main",{className:"col col--7"},a.map((function(e){var t=e.content;return r.a.createElement(i.a,{key:t.metadata.permalink,frontMatter:t.frontMatter,metadata:t.metadata,truncated:t.metadata.truncated},r.a.createElement(t,null))})),r.a.createElement(m,{metadata:t})))))}},263:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return g}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),m=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=m(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=m(a),d=n,g=p["".concat(l,".").concat(d)]||p[d]||u[d]||o;return a?r.a.createElement(g,i(i({ref:t},c),{},{components:a})):r.a.createElement(g,i({ref:t},c))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},279:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(0),r=a.n(n),o=a(264),l=a(267),i=a(56),s=a.n(i);function c(e){var t=e.sidebar;return 0===t.items.length?null:r.a.createElement("div",{className:Object(o.a)(s.a.sidebar,"thin-scrollbar")},r.a.createElement("h3",{className:s.a.sidebarItemTitle},t.title),r.a.createElement("ul",{className:s.a.sidebarItemList},t.items.map((function(e){return r.a.createElement("li",{key:e.permalink,className:s.a.sidebarItem},r.a.createElement(l.a,{isNavLink:!0,to:e.permalink,className:s.a.sidebarItemLink,activeClassName:s.a.sidebarItemLinkActive},e.title))}))))}},281:function(e,t,a){"use strict";function n(e,{target:t=document.body}={}){const a=document.createElement("textarea"),n=document.activeElement;a.value=e,a.setAttribute("readonly",""),a.style.contain="strict",a.style.position="absolute",a.style.left="-9999px",a.style.fontSize="12pt";const r=document.getSelection();let o=!1;r.rangeCount>0&&(o=r.getRangeAt(0)),t.append(a),a.select(),a.selectionStart=0,a.selectionEnd=e.length;let l=!1;try{l=document.execCommand("copy")}catch{}return a.remove(),o&&(r.removeAllRanges(),r.addRange(o)),n&&n.focus(),l}a.d(t,"a",(function(){return n}))},282:function(e,t){function a(e){let t,a=[];for(let n of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(n))a.push(parseInt(n,10));else if(t=n.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,n,r,o]=t;if(n&&o){n=parseInt(n),o=parseInt(o);const e=n<o?1:-1;"-"!==r&&".."!==r&&"\u2025"!==r||(o+=e);for(let t=n;t!==o;t+=e)a.push(t)}}return a}t.default=a,e.exports=a},285:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(267),l=a(280),i=a(7),s=a(264),c=a(266),m=a(265),p=(a(58),a(59)),u=a.n(p),d=function(e){return function(t){var a,n=t.id,o=Object(i.a)(t,["id"]),l=Object(m.useThemeConfig)().navbar.hideOnScroll;return n?r.a.createElement(e,o,r.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:Object(s.a)("anchor",(a={},a[u.a.enhancedAnchor]=!l,a)),id:n}),o.children,r.a.createElement("a",{className:"hash-link",href:"#"+n,title:Object(c.b)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):r.a.createElement(e,o)}},g={code:function(e){var t=e.children;return"string"==typeof t?t.includes("\n")?r.a.createElement(l.a,e):r.a.createElement("code",e):t},a:function(e){return r.a.createElement(o.a,e)},pre:function(e){var t=e.children;return r.a.createElement(l.a,Object(n.isValidElement)(t)?null==t?void 0:t.props:{children:t})},h1:d("h1"),h2:d("h2"),h3:d("h3"),h4:d("h4"),h5:d("h5"),h6:d("h6")};t.a=g},286:function(e,t,a){"use strict";var n={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},r=a(288),o=a(265);t.a=function(){var e=Object(o.useThemeConfig)().prism,t=Object(r.a)().isDarkTheme,a=e.theme||n,l=e.darkTheme||a;return t?l:a}},287:function(e,t,a){"use strict";a.d(t,"b",(function(){return l}));var n=a(23),r={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},o=a(0),l={Prism:n.a,theme:r};function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var c=/\r\n|\r|\n/,m=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},p=function(e,t){var a=e.length;return a>0&&e[a-1]===t?e:e.concat(t)},u=function(e,t){var a=e.plain,n=Object.create(null),r=e.styles.reduce((function(e,a){var n=a.languages,r=a.style;return n&&!n.includes(t)||a.types.forEach((function(t){var a=s({},e[t],r);e[t]=a})),e}),n);return r.root=a,r.plain=s({},a,{backgroundColor:null}),r};function d(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(a[n]=e[n]);return a}var g=function(e){function t(){for(var t=this,a=[],n=arguments.length;n--;)a[n]=arguments[n];e.apply(this,a),i(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var a=e.theme?u(e.theme,e.language):void 0;return t.themeDict=a})),i(this,"getLineProps",(function(e){var a=e.key,n=e.className,r=e.style,o=s({},d(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(o.style=l.plain),void 0!==r&&(o.style=void 0!==o.style?s({},o.style,r):r),void 0!==a&&(o.key=a),n&&(o.className+=" "+n),o})),i(this,"getStyleForToken",(function(e){var a=e.types,n=e.empty,r=a.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===r&&"plain"===a[0])return n?{display:"inline-block"}:void 0;if(1===r&&!n)return o[a[0]];var l=n?{display:"inline-block"}:{},i=a.map((function(e){return o[e]}));return Object.assign.apply(Object,[l].concat(i))}})),i(this,"getTokenProps",(function(e){var a=e.key,n=e.className,r=e.style,o=e.token,l=s({},d(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==r&&(l.style=void 0!==l.style?s({},l.style,r):r),void 0!==a&&(l.key=a),n&&(l.className+=" "+n),l})),i(this,"tokenize",(function(e,t,a,n){var r={code:t,grammar:a,language:n,tokens:[]};e.hooks.run("before-tokenize",r);var o=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),o}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,a=e.language,n=e.code,r=e.children,o=this.getThemeDict(this.props),l=t.languages[a];return r({tokens:function(e){for(var t=[[]],a=[e],n=[0],r=[e.length],o=0,l=0,i=[],s=[i];l>-1;){for(;(o=n[l]++)<r[l];){var u=void 0,d=t[l],g=a[l][o];if("string"==typeof g?(d=l>0?d:["plain"],u=g):(d=p(d,g.type),g.alias&&(d=p(d,g.alias)),u=g.content),"string"==typeof u){var y=u.split(c),f=y.length;i.push({types:d,content:y[0]});for(var h=1;h<f;h++)m(i),s.push(i=[]),i.push({types:d,content:y[h]})}else l++,t.push(d),a.push(u),n.push(0),r.push(u.length)}l--,t.pop(),a.pop(),n.pop(),r.pop()}return m(i),s}(void 0!==l?this.tokenize(t,n,l,a):[n]),className:"prism-code language-"+a,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(o.Component);t.a=g},291:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(264),l=a(263),i=a(266),s=a(267),c=a(285),m=a(290),p=a(61),u=a.n(p),d=a(265);t.a=function(e){var t,a,n=(t=Object(d.usePluralForm)().selectMessage,function(e){var a=Math.ceil(e);return t(a,Object(i.b)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}),p=e.children,g=e.frontMatter,y=e.metadata,f=e.truncated,h=e.isBlogPostPage,v=void 0!==h&&h,b=y.date,E=y.formattedDate,k=y.permalink,O=y.tags,N=y.readingTime,T=g.author,j=g.title,w=g.image,_=g.keywords,P=g.author_url||g.authorURL,x=g.author_title||g.authorTitle,D=g.author_image_url||g.authorImageURL;return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{keywords:_,image:w}),r.a.createElement("article",{className:v?void 0:"margin-bottom--xl"},(a=v?"h1":"h2",r.a.createElement("header",null,r.a.createElement(a,{className:Object(o.a)("margin-bottom--sm",u.a.blogPostTitle)},v?j:r.a.createElement(s.a,{to:k},j)),r.a.createElement("div",{className:"margin-vert--md"},r.a.createElement("time",{dateTime:b,className:u.a.blogPostDate},E,N&&r.a.createElement(r.a.Fragment,null," \xb7 ",n(N)))),r.a.createElement("div",{className:"avatar margin-vert--md"},D&&r.a.createElement(s.a,{className:"avatar__photo-link avatar__photo",href:P},r.a.createElement("img",{src:D,alt:T})),r.a.createElement("div",{className:"avatar__intro"},T&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",{className:"avatar__name"},r.a.createElement(s.a,{href:P},T)),r.a.createElement("small",{className:"avatar__subtitle"},x)))))),r.a.createElement("div",{className:"markdown"},r.a.createElement(l.a,{components:c.a},p)),(O.length>0||f)&&r.a.createElement("footer",{className:"row margin-vert--lg"},O.length>0&&r.a.createElement("div",{className:"col"},r.a.createElement("strong",null,r.a.createElement(i.a,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),O.map((function(e){var t=e.label,a=e.permalink;return r.a.createElement(s.a,{key:a,className:"margin-horiz--sm",to:a},t)}))),f&&r.a.createElement("div",{className:"col text--right"},r.a.createElement(s.a,{to:y.permalink,"aria-label":"Read more about "+j},r.a.createElement("strong",null,r.a.createElement(i.a,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More")))))))}}}]);