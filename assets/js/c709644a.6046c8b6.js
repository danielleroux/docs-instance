"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[106],{30876:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>d});var r=t(2784);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),l=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=l(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=l(t),d=i,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return t?r.createElement(f,a(a({ref:n},s),{},{components:t})):r.createElement(f,a({ref:n},s))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=m;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},38707:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=t(7896),i=(t(2784),t(30876));const o={},a=void 0,c={unversionedId:"auto-generated/previews/react/chip",id:"auto-generated/previews/react/chip",title:"chip",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/chip.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/chip",permalink:"/docs-instance/docs/auto-generated/previews/react/chip",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/chip.md",tags:[],version:"current",frontMatter:{}},p={},l=[],s={toc:l};function u(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'/*\n * SPDX-FileCopyrightText: 2022 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport { IxChip } from \'@siemens/ix-react\';\nimport React, { CSSProperties } from \'react\';\n\nexport const Chip: React.FC = () => {\n  const styled: CSSProperties = {\n    width: \'10rem\',\n  };\n  return (\n    <div className="example">\n      <IxChip closable outline>\n        Primary\n      </IxChip>\n      <IxChip icon="print">Primary with icon</IxChip>\n      <IxChip icon="print" style={styled} closable>\n        Primary\n      </IxChip>\n\n      <IxChip variant="critical" closable outline>\n        Alarm\n      </IxChip>\n      <IxChip variant="alarm" icon="print">\n        Alarm with icon\n      </IxChip>\n      <IxChip variant="alarm" icon="print" style={styled} closable>\n        Alarm\n      </IxChip>\n      <IxChip variant="warning" icon="print" style={styled} closable>\n        Alarm\n      </IxChip>\n      <IxChip\n        background="purple"\n        color="green"\n        variant="custom"\n        icon="print"\n        style={styled}\n        closable\n      >\n        Custom\n      </IxChip>\n    </div>\n  );\n};\n')))}u.isMDXComponent=!0}}]);