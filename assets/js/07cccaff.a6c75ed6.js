"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3794,8618,1057,8081,6234],{30876:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>p});var a=n(2784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(n),p=r,v=u["".concat(s,".").concat(p)]||u[p]||m[p]||o;return n?a.createElement(v,i(i({ref:t},c),{},{components:n})):a.createElement(v,i({ref:t},c))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},82009:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(2784),r=n(6277);const o="tabItem_OMyP";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:n},t)}},1112:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(7896),r=n(2784),o=n(6277),i=n(89741),l=n(42244),s=n(78963),d=n(24126);const c="tabList_M0Dn",m="tabItem_ysIP";function u(e){var t;const{lazy:n,block:i,defaultValue:u,values:p,groupId:v,className:f}=e,b=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=p??b.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),h=(0,l.l)(g,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const w=null===u?u:u??(null==(t=b.find((e=>e.props.default)))?void 0:t.props.value)??b[0].props.value;if(null!==w&&!g.some((e=>e.value===w)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${w}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:k}=(0,s.U)(),[N,x]=(0,r.useState)(w),E=[],{blockElementScrollPositionUntilNextRender:T}=(0,d.o5)();if(null!=v){const e=y[v];null!=e&&e!==N&&g.some((t=>t.value===e))&&x(e)}const C=e=>{const t=e.currentTarget,n=E.indexOf(t),a=g[n].value;a!==N&&(T(t),x(a),null!=v&&k(v,String(a)))},S=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=E.indexOf(e.currentTarget)+1;n=E[t]??E[0];break}case"ArrowLeft":{const t=E.indexOf(e.currentTarget)-1;n=E[t]??E[E.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":i},f)},g.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>E.push(e),onKeyDown:S,onFocus:C,onClick:C},i,{className:(0,o.Z)("tabs__item",m,null==i?void 0:i.className,{"tabs__item--active":N===t})}),n??t)}))),n?(0,r.cloneElement)(b.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function p(e){const t=(0,i.Z)();return r.createElement(u,(0,a.Z)({key:String(t)},e))}},77942:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(37949),r=n(90077),o=n(37614),i=n(2784),l=n(90943);function s(e){const t=(0,o.Z)(),[n]=(0,i.useState)(!1),s=(0,r.Z)("/"),[d,c]=(0,i.useState)(""),[m,u]=(0,i.useState)((0,l.V)(t)),{preferredVersion:p}=(0,a.J)();return(0,i.useEffect)((()=>{const t=null==p?void 0:p.name;c(void 0===t||"current"===t?s+`webcomponent-examples/dist/preview-examples/${e.name}.html`:s+`versioned_examples/version-${t}/webcomponent-examples/dist/preview-examples/${e.name}.html`)}),[s,null==p?void 0:p.name,e.name]),(0,i.useLayoutEffect)((()=>{const e=()=>{let e=(0,l.V)(t);document.body.classList.forEach((t=>{t.includes("theme-")&&(e=t)})),u(e)},n=new MutationObserver((()=>e()));return n.observe(document.body,{attributeFilter:["class"],attributes:!0}),e(),()=>{n.disconnect()}}),[]),i.createElement(i.Fragment,null,n?i.createElement("span",null,"No component preview found for ",e.name," in version"," ",null==p?void 0:p.name):i.createElement("iframe",{src:`${d}?theme=${e.theme?e.theme:m}${e.noMargin?"&no-margin=true":""}`,style:{width:"100%",height:`${e.height}`}}))}},64176:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(82009),r=n(1112),o=n(2784),i=n(77942);const l={angular:1,react:2,javascript:3,preview:4};function s(e){const t=e.children??[],n=Array.isArray(t)?t:[t];return o.createElement(r.Z,{groupId:e.name,values:[{value:"preview",label:"Preview"},...[{value:"angular",label:"Angular"},{value:"react",label:"React"},{value:"javascript",label:"Web Components"}].filter((e=>n.map((e=>e.props.value)).includes(e.value)))],defaultValue:"preview"},[o.createElement(a.Z,{value:"preview",key:"preview"},o.createElement(i.Z,{name:e.name,height:e.height,noMargin:e.noMargin})),...n].sort(((e,t)=>l[e.props.value]-l[t.props.value])))}},6771:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=n(7896),r=(n(2784),n(30876));const o={},i=void 0,l={unversionedId:"auto-generated/ix-validation-tooltip/props",id:"auto-generated/ix-validation-tooltip/props",title:"props",description:"| Name       | Description                   | Attribute        | Type                                      | Default             |",source:"@site/docs/auto-generated/ix-validation-tooltip/props.md",sourceDirName:"auto-generated/ix-validation-tooltip",slug:"/auto-generated/ix-validation-tooltip/props",permalink:"/docs-instance/docs/auto-generated/ix-validation-tooltip/props",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-validation-tooltip/props.md",tags:[],version:"current",frontMatter:{}},s={},d=[],c={toc:d};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"message"),(0,r.kt)("td",{parentName:"tr",align:null},"Message of the tooltip"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"message")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"placement"),(0,r.kt)("td",{parentName:"tr",align:null},"Placement of the tooltip"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"placement")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"auto" \uff5c "auto-end" \uff5c "auto-start" \uff5c "bottom" \uff5c "bottom-end" \uff5c "bottom-start" \uff5c "left" \uff5c "left-end" \uff5c "left-start" \uff5c "right" \uff5c "right-end" \uff5c "right-start" \uff5c "top" \uff5c "top-end" \uff5c "top-start"')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"'top'"))))))}m.isMDXComponent=!0},36774:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=n(7896),r=(n(2784),n(30876));const o={},i=void 0,l={unversionedId:"auto-generated/previews/angular/validation",id:"auto-generated/previews/angular/validation",title:"validation",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/validation.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/validation",permalink:"/docs-instance/docs/auto-generated/previews/angular/validation",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/validation.md",tags:[],version:"current",frontMatter:{}},s={},d=[],c={toc:d};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'/*\n * SPDX-FileCopyrightText: 2022 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport { Component } from \'@angular/core\';\n\n@Component({\n  selector: \'app-validation\',\n  template: `\n    <form\n      class="row g-3 needs-validation"\n      [ngClass]="{ \'was-validated\': wasValidated }"\n      no-validate\n      (submit)="onSubmit($event)"\n    >\n      <div class="col-md-4">\n        <label htmlFor="validationCustom01" class="form-label">\n          First name\n        </label>\n        <input\n          name="firstName"\n          type="text"\n          class="form-control"\n          id="validationCustom01"\n          [(ngModel)]="data.firstName"\n          #firstName="ngModel"\n          required\n        />\n        <div class="valid-feedback">Looks good!</div>\n      </div>\n      <div class="col-md-4">\n        <label htmlFor="validationCustom02" class="form-label">\n          Last name\n        </label>\n        <ix-validation-tooltip\n          message="Error hint textError hint textError hint textError hint textError hint textError hint textError hint textError hint textError hint text"\n        >\n          <input\n            name="lastName"\n            type="text"\n            class="form-control"\n            id="validationCustom02"\n            [(ngModel)]="data.lastName"\n            #lastName="ngModel"\n            required\n          />\n        </ix-validation-tooltip>\n        <div class="valid-feedback">Looks good!</div>\n      </div>\n      <div class="col-md-4">\n        <label htmlFor="validationCustomUsername" class="form-label">\n          Username\n        </label>\n        <input\n          name="userName"\n          type="text"\n          class="form-control"\n          id="validationCustomUsername"\n          aria-describedby="inputGroupPrepend"\n          [(ngModel)]="data.userName"\n          #userName="ngModel"\n          required\n        />\n        <div class="invalid-feedback">Please choose a username.</div>\n      </div>\n      <div class="col-12">\n        <button class="btn btn-primary" type="submit">Submit form</button>\n      </div>\n    </form>\n  `,\n})\nexport class Validation {\n  data = {\n    firstName: \'\',\n    lastName: \'\',\n    userName: \'\',\n  };\n\n  wasValidated = false;\n\n  onSubmit(event: SubmitEvent) {\n    event.preventDefault();\n\n    this.wasValidated = true;\n  }\n}\n')))}m.isMDXComponent=!0},1879:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=n(7896),r=(n(2784),n(30876));const o={},i=void 0,l={unversionedId:"auto-generated/previews/react/validation",id:"auto-generated/previews/react/validation",title:"validation",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/validation.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/validation",permalink:"/docs-instance/docs/auto-generated/previews/react/validation",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/validation.md",tags:[],version:"current",frontMatter:{}},s={},d=[],c={toc:d};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'/*\n * SPDX-FileCopyrightText: 2022 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n/*\n * COPYRIGHT (c) Siemens AG\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\nimport { IxValidationTooltip } from \'@siemens/ix-react\';\nimport React, { useState } from \'react\';\nimport { useForm } from \'react-hook-form\';\n\nexport const Validation: React.FC = () => {\n  const [wasValidated, setValidation] = useState(false);\n  const { register, handleSubmit, formState } = useForm({\n    defaultValues: {\n      firstName: \'\',\n      lastName: \'\',\n      userName: \'\',\n    },\n  });\n\n  const onSubmit = (data: any) => {\n    console.log(data);\n    setValidation(true);\n  };\n\n  return (\n    <>\n      <form\n        className={`row g-3 needs-validation`}\n        noValidate\n        onSubmit={handleSubmit(onSubmit)}\n      >\n        <div className="col-md-4">\n          <label htmlFor="validationCustom01" className="form-label">\n            First name\n          </label>\n          <input\n            type="text"\n            className={`form-control ${\n              formState.errors.firstName ? \'is-invalid\' : \'\'\n            }`}\n            id="validationCustom01"\n            {...register(\'firstName\', {\n              required: true,\n            })}\n          />\n          <div className="valid-feedback">Looks good!</div>\n        </div>\n        <div className="col-md-4">\n          <label htmlFor="validationCustom02" className="form-label">\n            Last name\n          </label>\n          <IxValidationTooltip message="Error hint textError hint textError hint textError hint textError hint textError hint textError hint textError hint textError hint text">\n            <input\n              type="text"\n              className={`form-control ${\n                formState.errors.lastName ? \'is-invalid\' : \'\'\n              }`}\n              id="validationCustom02"\n              {...register(\'lastName\', {\n                required: true,\n              })}\n            />\n          </IxValidationTooltip>\n          <div className="valid-feedback">Looks good!</div>\n        </div>\n        <div className="col-md-4">\n          <label htmlFor="validationCustomUsername" className="form-label">\n            Username\n          </label>\n          <input\n            type="text"\n            className={`form-control ${\n              formState.errors.userName ? \'is-invalid\' : \'\'\n            }`}\n            id="validationCustomUsername"\n            aria-describedby="inputGroupPrepend"\n            {...register(\'userName\', {\n              required: true,\n            })}\n          />\n          <div className="invalid-feedback">Please choose a username.</div>\n        </div>\n        <div className="col-12">\n          <button className="btn btn-primary" type="submit">\n            Submit form\n          </button>\n        </div>\n      </form>\n    </>\n  );\n};\n')))}m.isMDXComponent=!0},80047:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=n(7896),r=(n(2784),n(30876));const o={},i=void 0,l={unversionedId:"auto-generated/previews/web-component/validation",id:"auto-generated/previews/web-component/validation",title:"validation",description:"\x3c!--",source:"@site/docs/auto-generated/previews/web-component/validation.md",sourceDirName:"auto-generated/previews/web-component",slug:"/auto-generated/previews/web-component/validation",permalink:"/docs-instance/docs/auto-generated/previews/web-component/validation",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/web-component/validation.md",tags:[],version:"current",frontMatter:{}},s={},d=[],c={toc:d};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<form class="row g-3 needs-validation" novalidate>\n  <div class="row">\n    <div class="col-md-4">\n      <label for="validationCustom01" class="form-label">\n        First name\n      </label>\n      <input\n        type="text"\n        class="form-control"\n        id="validationCustom01"\n        value=""\n        required\n      />\n      <div class="valid-feedback">Looks good!</div>\n    </div>\n  </div>\n  <div class="row">\n    <div class="col-md-4">\n      <label for="validationCustom02" class="form-label"> Last name </label>\n      <ix-validation-tooltip message="Cannot be empty!">\n        <input\n          type="text"\n          class="form-control"\n          id="validationCustom02"\n          value=""\n          required\n        />\n      </ix-validation-tooltip>\n      <div class="valid-feedback">Looks good!</div>\n    </div>\n  </div>\n  <div class="row">\n    <div class="col-md-4">\n      <label for="validationCustomUsername" class="form-label">\n        Username\n      </label>\n      <input\n        type="text"\n        class="form-control"\n        id="validationCustomUsername"\n        aria-describedby="inputGroupPrepend"\n        required\n        minlength="4"\n      />\n      <div class="invalid-feedback">Please choose a username.</div>\n    </div>\n  </div>\n  <div class="col-12">\n    <button class="btn btn-primary" type="submit">Submit form</button>\n  </div>\n</form>\n<script>\n  (async () => {\n    await window.customElements.whenDefined(\'ix-validation-tooltip\');\n    const forms = document.querySelector(\'form\');\n    forms.addEventListener(\'submit\', (event) => {\n      event.preventDefault();\n      forms.classList.add(\'was-validated\');\n    });\n  })();\n<\/script>\n')))}m.isMDXComponent=!0},16706:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>v,contentTitle:()=>u,default:()=>g,frontMatter:()=>m,metadata:()=>p,toc:()=>f});var a=n(7896),r=(n(2784),n(30876)),o=n(82009),i=n(64176),l=n(6771),s=n(80047),d=n(1879),c=n(36774);const m={},u="Form validation",p={unversionedId:"controls/validation",id:"controls/validation",title:"Form validation",description:"For the validation @siemens/ix use the validation concept of bootstrap.",source:"@site/docs/controls/validation.md",sourceDirName:"controls",slug:"/controls/validation",permalink:"/docs-instance/docs/controls/validation",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/controls/validation.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Upload",permalink:"/docs-instance/docs/controls/upload"}},v={},f=[{value:"Preview",id:"preview",level:2},{value:"Properties (Tooltip)",id:"properties-tooltip",level:2},{value:"Props",id:"props",level:2}],b={toc:f};function g(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"form-validation"},"Form validation"),(0,r.kt)("p",null,"For the validation ",(0,r.kt)("inlineCode",{parentName:"p"},"@siemens/ix")," use the validation concept of ",(0,r.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/5.2/forms/validation/"},"bootstrap"),".\nThe differences is that the validation tooltip is implemented as ",(0,r.kt)("inlineCode",{parentName:"p"},"@siemens/ix")," ",(0,r.kt)("a",{parentName:"p",href:"#properties-tooltip"},"tooltip")),(0,r.kt)("p",null,"In the following preview section you will find different implementation of a forms validation."),(0,r.kt)("h2",{id:"preview"},"Preview"),(0,r.kt)(i.Z,{name:"validation",height:"20rem",mdxType:"Preview"},(0,r.kt)(o.Z,{value:"javascript",mdxType:"TabItem"},(0,r.kt)(s.default,{mdxType:"SourceValidation"})),(0,r.kt)(o.Z,{value:"react",mdxType:"TabItem"},(0,r.kt)(d.default,{mdxType:"SourceReactValidation"})),(0,r.kt)(o.Z,{value:"angular",mdxType:"TabItem"},(0,r.kt)(c.default,{mdxType:"SourceAngularValidation"}))),(0,r.kt)("h2",{id:"properties-tooltip"},"Properties (Tooltip)"),(0,r.kt)("h2",{id:"props"},"Props"),(0,r.kt)(l.default,{mdxType:"Props"}))}g.isMDXComponent=!0}}]);