"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8618],{30876:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>p});var r=t(2784);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),d=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=d(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=d(t),p=a,v=m["".concat(s,".").concat(p)]||m[p]||u[p]||o;return t?r.createElement(v,i(i({ref:n},c),{},{components:t})):r.createElement(v,i({ref:n},c))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=t[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},36774:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=t(7896),a=(t(2784),t(30876));const o={},i=void 0,l={unversionedId:"auto-generated/previews/angular/validation",id:"auto-generated/previews/angular/validation",title:"validation",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/validation.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/validation",permalink:"/docs-instance/docs/auto-generated/previews/angular/validation",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/validation.md",tags:[],version:"current",frontMatter:{}},s={},d=[],c={toc:d};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'/*\n * SPDX-FileCopyrightText: 2022 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport { Component } from \'@angular/core\';\n\n@Component({\n  selector: \'app-validation\',\n  template: `\n    <form\n      class="row g-3 needs-validation"\n      [ngClass]="{ \'was-validated\': wasValidated }"\n      no-validate\n      (submit)="onSubmit($event)"\n    >\n      <div class="col-md-4">\n        <label htmlFor="validationCustom01" class="form-label">\n          First name\n        </label>\n        <input\n          name="firstName"\n          type="text"\n          class="form-control"\n          id="validationCustom01"\n          [(ngModel)]="data.firstName"\n          #firstName="ngModel"\n          required\n        />\n        <div class="valid-feedback">Looks good!</div>\n      </div>\n      <div class="col-md-4">\n        <label htmlFor="validationCustom02" class="form-label">\n          Last name\n        </label>\n        <ix-validation-tooltip\n          message="Error hint textError hint textError hint textError hint textError hint textError hint textError hint textError hint textError hint text"\n        >\n          <input\n            name="lastName"\n            type="text"\n            class="form-control"\n            id="validationCustom02"\n            [(ngModel)]="data.lastName"\n            #lastName="ngModel"\n            required\n          />\n        </ix-validation-tooltip>\n        <div class="valid-feedback">Looks good!</div>\n      </div>\n      <div class="col-md-4">\n        <label htmlFor="validationCustomUsername" class="form-label">\n          Username\n        </label>\n        <input\n          name="userName"\n          type="text"\n          class="form-control"\n          id="validationCustomUsername"\n          aria-describedby="inputGroupPrepend"\n          [(ngModel)]="data.userName"\n          #userName="ngModel"\n          required\n        />\n        <div class="invalid-feedback">Please choose a username.</div>\n      </div>\n      <div class="col-12">\n        <button class="btn btn-primary" type="submit">Submit form</button>\n      </div>\n    </form>\n  `,\n})\nexport class Validation {\n  data = {\n    firstName: \'\',\n    lastName: \'\',\n    userName: \'\',\n  };\n\n  wasValidated = false;\n\n  onSubmit(event: SubmitEvent) {\n    event.preventDefault();\n\n    this.wasValidated = true;\n  }\n}\n')))}u.isMDXComponent=!0}}]);