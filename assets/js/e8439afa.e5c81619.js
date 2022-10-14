"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[9271],{30876:(e,r,t)=>{t.d(r,{Zo:()=>i,kt:()=>m});var n=t(2784);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),u=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},i=function(e){var r=u(e.components);return n.createElement(s.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},l=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),l=u(t),m=o,f=l["".concat(s,".").concat(m)]||l[m]||d[m]||a;return t?n.createElement(f,p(p({ref:r},i),{},{components:t})):n.createElement(f,p({ref:r},i))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,p=new Array(a);p[0]=l;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,p[1]=c;for(var u=2;u<a;u++)p[u]=t[u];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}l.displayName="MDXCreateElement"},73814:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>p,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var n=t(7896),o=(t(2784),t(30876));const a={},p=void 0,c={unversionedId:"auto-generated/previews/react/group-header-suppressed",id:"auto-generated/previews/react/group-header-suppressed",title:"group-header-suppressed",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/group-header-suppressed.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/group-header-suppressed",permalink:"/docs-instance/docs/auto-generated/previews/react/group-header-suppressed",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/group-header-suppressed.md",tags:[],version:"current",frontMatter:{}},s={},u=[],i={toc:u};function d(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},i,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'/*\n * SPDX-FileCopyrightText: 2022 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport { IxGroup, IxGroupItem } from \'@siemens/ix-react\';\nimport React from \'react\';\n\nexport const GroupHeaderSuppressed: React.FC = () => {\n  return (\n    <IxGroup\n      header="Header text"\n      subHeader="Subheader text"\n      suppressHeaderSelection\n    >\n      <IxGroupItem text="Example text 1"></IxGroupItem>\n      <IxGroupItem text="Example text 2"></IxGroupItem>\n      <IxGroupItem text="Example text 3"></IxGroupItem>\n    </IxGroup>\n  );\n};\n')))}d.isMDXComponent=!0}}]);