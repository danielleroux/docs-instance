"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[777],{70777:(e,i,t)=>{t.r(i),t.d(i,{ix_basic_navigation:()=>a});var n=t(80701);const a=class{constructor(e){(0,n.r)(this,e),this.hideHeader=!1}get menu(){return this.hostElement.querySelector("ix-menu")}componentDidRender(){this.menu&&(this.appendMenu(),this.adjustMenuHeight(),this.menu.applicationName=this.applicationName)}appendMenu(){this.hostElement.querySelector("#menu-placeholder").appendChild(this.menu)}adjustMenuHeight(){this.hideHeader||(this.menu.style.height="calc(100% - 2.75rem)")}render(){return(0,n.h)(n.H,{class:{"hide-header":this.hideHeader}},this.hideHeader?null:(0,n.h)("ix-application-header",{name:this.applicationName},(0,n.h)("slot",{name:"logo"})),(0,n.h)("div",{id:"menu-placeholder"}),(0,n.h)("div",{class:"content",onClick:()=>this.menu.toggleMenu(!1)},(0,n.h)("slot",null)))}get hostElement(){return(0,n.g)(this)}};a.style=".sc-ix-basic-navigation-h{display:flex;position:relative;width:100%;height:100%;flex-direction:column}.sc-ix-basic-navigation-h ix-application-header.sc-ix-basic-navigation{z-index:calc(var(--theme-z-index-sticky) + 1)}.sc-ix-basic-navigation-h .content.sc-ix-basic-navigation{display:flex;height:calc(100% - 2.75rem);width:calc(100% - 4rem);position:relative;margin-left:4rem;overflow:auto}.hide-header.sc-ix-basic-navigation-h .content.sc-ix-basic-navigation{height:100%}"}}]);