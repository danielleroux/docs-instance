"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[9548],{30876:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>b});var r=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),l=p(n),b=a,g=l["".concat(i,".").concat(b)]||l[b]||m[b]||o;return n?r.createElement(g,s(s({ref:t},u),{},{components:n})):r.createElement(g,s({ref:t},u))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=l;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}l.displayName="MDXCreateElement"},79491:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var r=n(7896),a=(n(2784),n(30876));const o={},s=void 0,c={unversionedId:"auto-generated/previews/web-component/message-bar",id:"auto-generated/previews/web-component/message-bar",title:"message-bar",description:"\x3c!--",source:"@site/docs/auto-generated/previews/web-component/message-bar.md",sourceDirName:"auto-generated/previews/web-component",slug:"/auto-generated/previews/web-component/message-bar",permalink:"/docs-instance/docs/auto-generated/previews/web-component/message-bar",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/web-component/message-bar.md",tags:[],version:"current",frontMatter:{}},i={},p=[],u={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<ix-message-bar>Message text</ix-message-bar>\n<ix-message-bar type="warning">Message text</ix-message-bar>\n<ix-message-bar type="danger">\n  <div class="d-flex align-items-center justify-content-between">\n    Message text <ix-button>Action</ix-button>\n  </div>\n</ix-message-bar>\n')))}m.isMDXComponent=!0}}]);