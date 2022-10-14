"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1407,1938,9728,8564,6298,7866,5931,1204,2318,5326,6748,9091,6283],{30876:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>b});var a=r(2784);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),d=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=d(e.components);return a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},l=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,u=m(e,["components","mdxType","originalType","parentName"]),l=d(r),b=n,p=l["".concat(c,".").concat(b)]||l[b]||s[b]||i;return r?a.createElement(p,o(o({ref:t},u),{},{components:r})):a.createElement(p,o({ref:t},u))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=l;var m={};for(var c in t)hasOwnProperty.call(t,c)&&(m[c]=t[c]);m.originalType=e,m.mdxType="string"==typeof e?e:n,o[1]=m;for(var d=2;d<i;d++)o[d]=r[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}l.displayName="MDXCreateElement"},82009:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(2784),n=r(6277);const i="tabItem_OMyP";function o(e){let{children:t,hidden:r,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(i,o),hidden:r},t)}},1112:(e,t,r)=>{r.d(t,{Z:()=>b});var a=r(7896),n=r(2784),i=r(6277),o=r(89741),m=r(42244),c=r(78963),d=r(24126);const u="tabList_M0Dn",s="tabItem_ysIP";function l(e){var t;const{lazy:r,block:o,defaultValue:l,values:b,groupId:p,className:g}=e,x=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=b??x.map((e=>{let{props:{value:t,label:r,attributes:a}}=e;return{value:t,label:r,attributes:a}})),f=(0,m.l)(v,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===l?l:l??(null==(t=x.find((e=>e.props.default)))?void 0:t.props.value)??x[0].props.value;if(null!==k&&!v.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:I}=(0,c.U)(),[h,N]=(0,n.useState)(k),y=[],{blockElementScrollPositionUntilNextRender:T}=(0,d.o5)();if(null!=p){const e=w[p];null!=e&&e!==h&&v.some((t=>t.value===e))&&N(e)}const D=e=>{const t=e.currentTarget,r=y.indexOf(t),a=v[r].value;a!==h&&(T(t),N(a),null!=p&&I(p,String(a)))},M=e=>{var t;let r=null;switch(e.key){case"ArrowRight":{const t=y.indexOf(e.currentTarget)+1;r=y[t]??y[0];break}case"ArrowLeft":{const t=y.indexOf(e.currentTarget)-1;r=y[t]??y[y.length-1];break}}null==(t=r)||t.focus()};return n.createElement("div",{className:(0,i.Z)("tabs-container",u)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":o},g)},v.map((e=>{let{value:t,label:r,attributes:o}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:h===t?0:-1,"aria-selected":h===t,key:t,ref:e=>y.push(e),onKeyDown:M,onFocus:D,onClick:D},o,{className:(0,i.Z)("tabs__item",s,null==o?void 0:o.className,{"tabs__item--active":h===t})}),r??t)}))),r?(0,n.cloneElement)(x.filter((e=>e.props.value===h))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},x.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==h})))))}function b(e){const t=(0,o.Z)();return n.createElement(l,(0,a.Z)({key:String(t)},e))}},77942:(e,t,r)=>{r.d(t,{Z:()=>c});var a=r(37949),n=r(90077),i=r(37614),o=r(2784),m=r(90943);function c(e){const t=(0,i.Z)(),[r]=(0,o.useState)(!1),c=(0,n.Z)("/"),[d,u]=(0,o.useState)(""),[s,l]=(0,o.useState)((0,m.V)(t)),{preferredVersion:b}=(0,a.J)();return(0,o.useEffect)((()=>{const t=null==b?void 0:b.name;u(void 0===t||"current"===t?c+`webcomponent-examples/dist/preview-examples/${e.name}.html`:c+`versioned_examples/version-${t}/webcomponent-examples/dist/preview-examples/${e.name}.html`)}),[c,null==b?void 0:b.name,e.name]),(0,o.useLayoutEffect)((()=>{const e=()=>{let e=(0,m.V)(t);document.body.classList.forEach((t=>{t.includes("theme-")&&(e=t)})),l(e)},r=new MutationObserver((()=>e()));return r.observe(document.body,{attributeFilter:["class"],attributes:!0}),e(),()=>{r.disconnect()}}),[]),o.createElement(o.Fragment,null,r?o.createElement("span",null,"No component preview found for ",e.name," in version"," ",null==b?void 0:b.name):o.createElement("iframe",{src:`${d}?theme=${e.theme?e.theme:s}${e.noMargin?"&no-margin=true":""}`,style:{width:"100%",height:`${e.height}`}}))}},64176:(e,t,r)=>{r.d(t,{Z:()=>c});var a=r(82009),n=r(1112),i=r(2784),o=r(77942);const m={angular:1,react:2,javascript:3,preview:4};function c(e){const t=e.children??[],r=Array.isArray(t)?t:[t];return i.createElement(n.Z,{groupId:e.name,values:[{value:"preview",label:"Preview"},...[{value:"angular",label:"Angular"},{value:"react",label:"React"},{value:"javascript",label:"Web Components"}].filter((e=>r.map((e=>e.props.value)).includes(e.value)))],defaultValue:"preview"},[i.createElement(a.Z,{value:"preview",key:"preview"},i.createElement(o.Z,{name:e.name,height:e.height,noMargin:e.noMargin})),...r].sort(((e,t)=>m[e.props.value]-m[t.props.value])))}},7449:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>m,toc:()=>d});var a=r(7896),n=(r(2784),r(30876));const i={},o=void 0,m={unversionedId:"auto-generated/ix-breadcrumb-item/props",id:"auto-generated/ix-breadcrumb-item/props",title:"props",description:"| Name       | Description                   | Attribute        | Type                                      | Default             |",source:"@site/docs/auto-generated/ix-breadcrumb-item/props.md",sourceDirName:"auto-generated/ix-breadcrumb-item",slug:"/auto-generated/ix-breadcrumb-item/props",permalink:"/docs-instance/docs/auto-generated/ix-breadcrumb-item/props",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-breadcrumb-item/props.md",tags:[],version:"current",frontMatter:{}},c={},d=[],u={toc:d};function s(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"icon"),(0,n.kt)("td",{parentName:"tr",align:null},"Icon to be displayed next ot the label"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"icon")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"label"),(0,n.kt)("td",{parentName:"tr",align:null},"Breadcrumb label"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"label")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"undefined"))))))}s.isMDXComponent=!0},12238:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>m,toc:()=>d});var a=r(7896),n=(r(2784),r(30876));const i={},o=void 0,m={unversionedId:"auto-generated/ix-breadcrumb/events",id:"auto-generated/ix-breadcrumb/events",title:"events",description:"| Name       | Description                   | Attribute        | Detail |",source:"@site/docs/auto-generated/ix-breadcrumb/events.md",sourceDirName:"auto-generated/ix-breadcrumb",slug:"/auto-generated/ix-breadcrumb/events",permalink:"/docs-instance/docs/auto-generated/ix-breadcrumb/events",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-breadcrumb/events.md",tags:[],version:"current",frontMatter:{}},c={},d=[],u={toc:d};function s(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,n.kt)("th",{parentName:"tr",align:null},"Detail"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"itemClick"),(0,n.kt)("td",{parentName:"tr",align:null},"Crumb item clicked event"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"nextClick"),(0,n.kt)("td",{parentName:"tr",align:null},"Next item clicked event"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"{ event: UIEvent; item: string; }")),(0,n.kt)("td",{parentName:"tr",align:null})))))}s.isMDXComponent=!0},4944:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>m,toc:()=>d});var a=r(7896),n=(r(2784),r(30876));const i={},o=void 0,m={unversionedId:"auto-generated/ix-breadcrumb/props",id:"auto-generated/ix-breadcrumb/props",title:"props",description:"| Name       | Description                   | Attribute        | Type                                      | Default             |",source:"@site/docs/auto-generated/ix-breadcrumb/props.md",sourceDirName:"auto-generated/ix-breadcrumb",slug:"/auto-generated/ix-breadcrumb/props",permalink:"/docs-instance/docs/auto-generated/ix-breadcrumb/props",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-breadcrumb/props.md",tags:[],version:"current",frontMatter:{}},c={},d=[],u={toc:d};function s(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ghost"),(0,n.kt)("td",{parentName:"tr",align:null},"Ghost breadcrumbs will not show solid backgrounds on individual crumbs unless there is a mouse event (e.g. hover)"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"ghost")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"boolean")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"false"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"nextItems"),(0,n.kt)("td",{parentName:"tr",align:null},"Items will be accessible through a dropdown"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"undefined")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"string[]")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"[]"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"visibleItemCount"),(0,n.kt)("td",{parentName:"tr",align:null},"Excess items will get hidden inside of dropdown"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"visible-item-count")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"number")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"9"))))))}s.isMDXComponent=!0},60787:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>m,toc:()=>d});var a=r(7896),n=(r(2784),r(30876));const i={},o=void 0,m={unversionedId:"auto-generated/previews/angular/breadcrumb-next-items",id:"auto-generated/previews/angular/breadcrumb-next-items",title:"breadcrumb-next-items",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/breadcrumb-next-items.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/breadcrumb-next-items",permalink:"/docs-instance/docs/auto-generated/previews/angular/breadcrumb-next-items",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/breadcrumb-next-items.md",tags:[],version:"current",frontMatter:{}},c={},d=[],u={toc:d};function s(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},'/*\n * SPDX-FileCopyrightText: 2022 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport { Component } from \'@angular/core\';\n\n@Component({\n  selector: \'app-breacrumb-next-items\',\n  template: `\n    <ix-breadcrumb [nextItems]="nextItems">\n      <ix-breadcrumb-item label="Item 1"></ix-breadcrumb-item>\n      <ix-breadcrumb-item label="Item 2"></ix-breadcrumb-item>\n      <ix-breadcrumb-item label="Item 3"></ix-breadcrumb-item>\n    </ix-breadcrumb>\n  `,\n})\nexport class BreadcrumbNextItems {\n  nextItems = [\'Next Item 1\'];\n}\n')))}s.isMDXComponent=!0},69545:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>m,toc:()=>d});var a=r(7896),n=(r(2784),r(30876));const i={},o=void 0,m={unversionedId:"auto-generated/previews/angular/breadcrumb-truncate",id:"auto-generated/previews/angular/breadcrumb-truncate",title:"breadcrumb-truncate",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/breadcrumb-truncate.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/breadcrumb-truncate",permalink:"/docs-instance/docs/auto-generated/previews/angular/breadcrumb-truncate",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/breadcrumb-truncate.md",tags:[],version:"current",frontMatter:{}},c={},d=[],u={toc:d};function s(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},'/*\n * SPDX-FileCopyrightText: 2022 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport { Component } from \'@angular/core\';\n\n@Component({\n  selector: \'app-breacrumb-trucate\',\n  template: `\n    <ix-breadcrumb visibleItemCount="3">\n      <ix-breadcrumb-item label="Item 1"></ix-breadcrumb-item>\n      <ix-breadcrumb-item label="Item 2"></ix-breadcrumb-item>\n      <ix-breadcrumb-item label="Item 3"></ix-breadcrumb-item>\n      <ix-breadcrumb-item label="Item 4"></ix-breadcrumb-item>\n      <ix-breadcrumb-item label="Item 5"></ix-breadcrumb-item>\n    </ix-breadcrumb>\n  `,\n})\nexport class BreadcrumbTrucate {}\n')))}s.isMDXComponent=!0},83901:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>m,toc:()=>d});var a=r(7896),n=(r(2784),r(30876));const i={},o=void 0,m={unversionedId:"auto-generated/previews/angular/breadcrumb",id:"auto-generated/previews/angular/breadcrumb",title:"breadcrumb",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/breadcrumb.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/breadcrumb",permalink:"/docs-instance/docs/auto-generated/previews/angular/breadcrumb",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/breadcrumb.md",tags:[],version:"current",frontMatter:{}},c={},d=[],u={toc:d};function s(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},'/*\n * SPDX-FileCopyrightText: 2022 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport { Component } from \'@angular/core\';\n\n@Component({\n  selector: \'app-breacrumb\',\n  template: `\n    <ix-breadcrumb visibleItemCount="3">\n      <ix-breadcrumb-item label="Item 1"></ix-breadcrumb-item>\n      <ix-breadcrumb-item label="Item 2"></ix-breadcrumb-item>\n      <ix-breadcrumb-item label="Item 3"></ix-breadcrumb-item>\n      <ix-breadcrumb-item label="Item 4"></ix-breadcrumb-item>\n      <ix-breadcrumb-item label="Item 5"></ix-breadcrumb-item>\n    </ix-breadcrumb>\n  `,\n})\nexport class Breadcrumb {}\n')))}s.isMDXComponent=!0},67867:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>m,toc:()=>d});var a=r(7896),n=(r(2784),r(30876));const i={},o=void 0,m={unversionedId:"auto-generated/previews/react/breadcrumb-next-items",id:"auto-generated/previews/react/breadcrumb-next-items",title:"breadcrumb-next-items",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/breadcrumb-next-items.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/breadcrumb-next-items",permalink:"/docs-instance/docs/auto-generated/previews/react/breadcrumb-next-items",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/breadcrumb-next-items.md",tags:[],version:"current",frontMatter:{}},c={},d=[],u={toc:d};function s(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"/*\n * SPDX-FileCopyrightText: 2022 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport { IxBreadcrumb, IxBreadcrumbItem } from '@siemens/ix-react';\nimport React, { useEffect, useState } from 'react';\n\nexport const BreadcrumbNextItems: React.FC = () => {\n  const [nextItems, setNextItems] = useState<string[]>([]);\n\n  useEffect(() => {\n    setNextItems(['Next Item 1']);\n  }, [setNextItems]);\n\n  return (\n    <IxBreadcrumb nextItems={nextItems}>\n      <IxBreadcrumbItem label=\"Item 1\"></IxBreadcrumbItem>\n      <IxBreadcrumbItem label=\"Item 2\"></IxBreadcrumbItem>\n      <IxBreadcrumbItem label=\"Item 3\"></IxBreadcrumbItem>\n    </IxBreadcrumb>\n  );\n};\n")))}s.isMDXComponent=!0},56977:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>m,toc:()=>d});var a=r(7896),n=(r(2784),r(30876));const i={},o=void 0,m={unversionedId:"auto-generated/previews/react/breadcrumb-truncate",id:"auto-generated/previews/react/breadcrumb-truncate",title:"breadcrumb-truncate",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/breadcrumb-truncate.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/breadcrumb-truncate",permalink:"/docs-instance/docs/auto-generated/previews/react/breadcrumb-truncate",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/breadcrumb-truncate.md",tags:[],version:"current",frontMatter:{}},c={},d=[],u={toc:d};function s(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'/*\n * SPDX-FileCopyrightText: 2022 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport { IxBreadcrumb, IxBreadcrumbItem } from \'@siemens/ix-react\';\nimport React from \'react\';\n\nexport const BreadcrumbTruncate: React.FC = () => {\n  return (\n    <IxBreadcrumb visibleItemCount={3}>\n      <IxBreadcrumbItem label="Item 1"></IxBreadcrumbItem>\n      <IxBreadcrumbItem label="Item 2"></IxBreadcrumbItem>\n      <IxBreadcrumbItem label="Item 3"></IxBreadcrumbItem>\n      <IxBreadcrumbItem label="Item 4"></IxBreadcrumbItem>\n      <IxBreadcrumbItem label="Item 5"></IxBreadcrumbItem>\n    </IxBreadcrumb>\n  );\n};\n')))}s.isMDXComponent=!0},58672:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>m,toc:()=>d});var a=r(7896),n=(r(2784),r(30876));const i={},o=void 0,m={unversionedId:"auto-generated/previews/react/breadcrumb",id:"auto-generated/previews/react/breadcrumb",title:"breadcrumb",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/breadcrumb.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/breadcrumb",permalink:"/docs-instance/docs/auto-generated/previews/react/breadcrumb",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/breadcrumb.md",tags:[],version:"current",frontMatter:{}},c={},d=[],u={toc:d};function s(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'/*\n * SPDX-FileCopyrightText: 2022 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport { IxBreadcrumb, IxBreadcrumbItem } from \'@siemens/ix-react\';\nimport React from \'react\';\n\nexport const Breadcrumb: React.FC = () => {\n  return (\n    <IxBreadcrumb>\n      <IxBreadcrumbItem label="Item 1"></IxBreadcrumbItem>\n      <IxBreadcrumbItem label="Item 2"></IxBreadcrumbItem>\n      <IxBreadcrumbItem label="Item 3"></IxBreadcrumbItem>\n    </IxBreadcrumb>\n  );\n};\n')))}s.isMDXComponent=!0},20263:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>m,toc:()=>d});var a=r(7896),n=(r(2784),r(30876));const i={},o=void 0,m={unversionedId:"auto-generated/previews/web-component/breadcrumb-next-items",id:"auto-generated/previews/web-component/breadcrumb-next-items",title:"breadcrumb-next-items",description:"\x3c!--",source:"@site/docs/auto-generated/previews/web-component/breadcrumb-next-items.md",sourceDirName:"auto-generated/previews/web-component",slug:"/auto-generated/previews/web-component/breadcrumb-next-items",permalink:"/docs-instance/docs/auto-generated/previews/web-component/breadcrumb-next-items",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/web-component/breadcrumb-next-items.md",tags:[],version:"current",frontMatter:{}},c={},d=[],u={toc:d};function s(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-html"},'<ix-breadcrumb>\n  <ix-breadcrumb-item label="Item 1"></ix-breadcrumb-item>\n  <ix-breadcrumb-item label="Item 2"></ix-breadcrumb-item>\n  <ix-breadcrumb-item label="Item 3"></ix-breadcrumb-item>\n</ix-breadcrumb>\n\n<script>\n  const instance = document.querySelector(\'ix-breadcrumb\');\n  instance.nextItems = [\'Next Item 1\'];\n<\/script>\n')))}s.isMDXComponent=!0},36175:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>m,toc:()=>d});var a=r(7896),n=(r(2784),r(30876));const i={},o=void 0,m={unversionedId:"auto-generated/previews/web-component/breadcrumb-truncate",id:"auto-generated/previews/web-component/breadcrumb-truncate",title:"breadcrumb-truncate",description:"\x3c!--",source:"@site/docs/auto-generated/previews/web-component/breadcrumb-truncate.md",sourceDirName:"auto-generated/previews/web-component",slug:"/auto-generated/previews/web-component/breadcrumb-truncate",permalink:"/docs-instance/docs/auto-generated/previews/web-component/breadcrumb-truncate",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/web-component/breadcrumb-truncate.md",tags:[],version:"current",frontMatter:{}},c={},d=[],u={toc:d};function s(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-html"},'<ix-breadcrumb visible-item-count="3">\n  <ix-breadcrumb-item label="Item 1"></ix-breadcrumb-item>\n  <ix-breadcrumb-item label="Item 2"></ix-breadcrumb-item>\n  <ix-breadcrumb-item label="Item 3"></ix-breadcrumb-item>\n  <ix-breadcrumb-item label="Item 4"></ix-breadcrumb-item>\n  <ix-breadcrumb-item label="Item 5"></ix-breadcrumb-item>\n</ix-breadcrumb>\n')))}s.isMDXComponent=!0},49603:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>m,toc:()=>d});var a=r(7896),n=(r(2784),r(30876));const i={},o=void 0,m={unversionedId:"auto-generated/previews/web-component/breadcrumb",id:"auto-generated/previews/web-component/breadcrumb",title:"breadcrumb",description:"\x3c!--",source:"@site/docs/auto-generated/previews/web-component/breadcrumb.md",sourceDirName:"auto-generated/previews/web-component",slug:"/auto-generated/previews/web-component/breadcrumb",permalink:"/docs-instance/docs/auto-generated/previews/web-component/breadcrumb",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/web-component/breadcrumb.md",tags:[],version:"current",frontMatter:{}},c={},d=[],u={toc:d};function s(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-html"},'<ix-breadcrumb>\n  <ix-breadcrumb-item label="Item 1"></ix-breadcrumb-item>\n  <ix-breadcrumb-item label="Item 2"></ix-breadcrumb-item>\n  <ix-breadcrumb-item label="Item 3"></ix-breadcrumb-item>\n</ix-breadcrumb>\n')))}s.isMDXComponent=!0},9859:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>w,default:()=>T,frontMatter:()=>k,metadata:()=>I,toc:()=>N});var a=r(7896),n=(r(2784),r(30876)),i=r(82009),o=r(64176),m=r(4944),c=r(12238),d=r(7449),u=r(49603),s=r(36175),l=r(20263),b=r(58672),p=r(56977),g=r(67867),x=r(83901),v=r(69545),f=r(60787);const k={},w="Breadcrumb",I={unversionedId:"controls/breadcrumb",id:"controls/breadcrumb",title:"Breadcrumb",description:"Usage",source:"@site/docs/controls/breadcrumb.md",sourceDirName:"controls",slug:"/controls/breadcrumb",permalink:"/docs-instance/docs/controls/breadcrumb",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/controls/breadcrumb.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Blind",permalink:"/docs-instance/docs/controls/blind"},next:{title:"Button",permalink:"/docs-instance/docs/controls/button"}},h={},N=[{value:"Usage",id:"usage",level:2},{value:"Truncate",id:"truncate",level:3},{value:"Lazy loaded next items",id:"lazy-loaded-next-items",level:3},{value:"Properties (ix-breadcrumb)",id:"properties-ix-breadcrumb",level:2},{value:"Props",id:"props",level:3},{value:"Events",id:"events",level:3},{value:"Properties (ix-breadcrumb-item)",id:"properties-ix-breadcrumb-item",level:2},{value:"Props",id:"props-1",level:3}],y={toc:N};function T(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},y,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"breadcrumb"},"Breadcrumb"),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)(o.Z,{name:"breadcrumb",height:"8rem",mdxType:"Preview"},(0,n.kt)(i.Z,{value:"javascript",mdxType:"TabItem"},(0,n.kt)(u.default,{mdxType:"SourceBreadcrumb"})),(0,n.kt)(i.Z,{value:"react",mdxType:"TabItem"},(0,n.kt)(b.default,{mdxType:"SourceReactBreadcrumb"})),(0,n.kt)(i.Z,{value:"angular",mdxType:"TabItem"},(0,n.kt)(x.default,{mdxType:"SourceAngularBreadcrumb"}))),(0,n.kt)("h3",{id:"truncate"},"Truncate"),(0,n.kt)(o.Z,{name:"breadcrumb-truncate",height:"10rem",mdxType:"Preview"},(0,n.kt)(i.Z,{value:"javascript",mdxType:"TabItem"},(0,n.kt)(s.default,{mdxType:"SourceBreadcrumbTruncate"})),(0,n.kt)(i.Z,{value:"react",mdxType:"TabItem"},(0,n.kt)(p.default,{mdxType:"SourceReactBreadcrumbTruncate"})),(0,n.kt)(i.Z,{value:"angular",mdxType:"TabItem"},(0,n.kt)(v.default,{mdxType:"SourceAngularBreadcrumbTruncate"}))),(0,n.kt)("h3",{id:"lazy-loaded-next-items"},"Lazy loaded next items"),(0,n.kt)(o.Z,{name:"breadcrumb-next-items",height:"8rem",mdxType:"Preview"},(0,n.kt)(i.Z,{value:"javascript",mdxType:"TabItem"},(0,n.kt)(l.default,{mdxType:"SourceBreadcrumbNextItems"})),(0,n.kt)(i.Z,{value:"react",mdxType:"TabItem"},(0,n.kt)(g.default,{mdxType:"SourceReactBreadcrumbNextItems"})),(0,n.kt)(i.Z,{value:"angular",mdxType:"TabItem"},(0,n.kt)(f.default,{mdxType:"SourceAngularBreadcrumbNextItems"}))),(0,n.kt)("h2",{id:"properties-ix-breadcrumb"},"Properties (ix-breadcrumb)"),(0,n.kt)("h3",{id:"props"},"Props"),(0,n.kt)(m.default,{mdxType:"Props"}),(0,n.kt)("h3",{id:"events"},"Events"),(0,n.kt)(c.default,{mdxType:"Events"}),(0,n.kt)("h2",{id:"properties-ix-breadcrumb-item"},"Properties (ix-breadcrumb-item)"),(0,n.kt)("h3",{id:"props-1"},"Props"),(0,n.kt)(d.default,{mdxType:"ItemProps"}))}T.isMDXComponent=!0}}]);