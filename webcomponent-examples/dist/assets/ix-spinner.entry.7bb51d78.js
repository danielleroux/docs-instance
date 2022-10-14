import { r as registerInstance, h, H as Host } from "./index.dc1a0ae3.js";
const spinnerCss = ".sc-ix-spinner-h{display:flex;position:relative;height:2rem;width:2rem;justify-content:center;align-items:center}.sc-ix-spinner-h svg.sc-ix-spinner{height:2rem;width:2rem}.sc-ix-spinner-h #fill.sc-ix-spinner{fill:var(--theme-color-weak-text)}.sc-ix-spinner-h #stroke.sc-ix-spinner{stroke:var(--theme-color-weak-text)}.primary.sc-ix-spinner-h #fill.sc-ix-spinner{fill:var(--theme-color-primary)}.primary.sc-ix-spinner-h #stroke.sc-ix-spinner{stroke:var(--theme-color-primary)}.large.sc-ix-spinner-h{height:6rem;width:6rem}.large.sc-ix-spinner-h svg.sc-ix-spinner{height:5.75rem;width:6rem}";
const Spinner = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.variant = "secondary";
    this.size = "medium";
  }
  render() {
    return h(Host, { class: {
      primary: this.variant === "primary",
      large: this.size === "large"
    } }, h("svg", { viewBox: "0 0 32 32", version: "1.1", xmlns: "http://www.w3.org/2000/svg" }, h("g", { id: "waiting-anim", stroke: "none", "stroke-width": "1", fill: "none", "fill-rule": "evenodd" }, h("g", { id: "stroke", transform: "translate(4.5, 3)", "fill-rule": "nonzero", stroke: "#0F8287", "stroke-linejoin": "round" }, h("polygon", { id: "w1", points: "11.2583302 0 11.2583302 6.5 11.2583302 13", visibility: "hidden" }, h("set", { attributeName: "visibility", begin: "0s;w6ul.end", to: "visible" }), h("animate", { id: "w1l", attributeName: "points", calcMode: "spline", begin: "0s;w6ul.end", dur: "0.4s", keyTimes: "0;1", from: "11.2583302 0 11.2583302 6.5 11.2583302 13", to: "11.2583302 0 22.5166605 6.5 11.2583302 13", keySplines: "1 0 0.8 1", fill: "freeze" }), h("animate", { id: "w1ul", attributeName: "points", calcMode: "spline", begin: "f6uf.end", dur: "0.4s", keyTimes: "0;1", from: "11.2583302 0 22.5166605 6.5 11.2583302 13", to: "16.88749535 9.25 22.5166605 6.5 11.2583302 13", keySplines: "0.2 0 0 1", fill: "freeze" }), h("set", { attributeName: "visibility", begin: "w1ul.end", to: "hidden" })), h("polygon", { id: "w2", points: "22.5166605 6.5 16.88749535 10 11.2583302 13", visibility: "hidden" }, h("set", { attributeName: "visibility", begin: "w1l.end", to: "visible" }), h("animate", { id: "w2l", attributeName: "points", calcMode: "spline", begin: "w1l.end", dur: "0.4s", keyTimes: "0;1", from: "22.5166605 6.5 16.88749535 10 11.2583302 13", to: "22.5166605 6.5 22.5166605 19.5 11.2583302 13", keySplines: "1 0 0.8 1", fill: "freeze" }), h("animate", { id: "w2ul", attributeName: "points", calcMode: "spline", begin: "w1ul.end", dur: "0.4s", keyTimes: "0;1", from: "22.5166605 6.5 22.5166605 19.5 11.2583302 13", to: "16.88749535 16.25 22.5166605 19.5 11.2583302 13", keySplines: "0.2 0 0 1", fill: "freeze" }), h("set", { attributeName: "visibility", begin: "w2ul.end", to: "hidden" })), h("polygon", { id: "w3", points: "11.2583302 13 22.5166605 19.5 16.88749535 16.75", visibility: "hidden" }, h("set", { attributeName: "visibility", begin: "w2l.end", to: "visible" }), h("animate", { id: "w3l", attributeName: "points", calcMode: "spline", begin: "w2l.end", dur: "0.4s", keyTimes: "0;1", from: "11.2583302 13 22.5166605 19.5 16.88749535 16.75", to: "11.2583302 13 22.5166605 19.5 11.2583302 26", keySplines: "1 0 0.8 1", fill: "freeze" }), h("animate", { id: "w3ul", attributeName: "points", calcMode: "spline", begin: "w2ul.end", dur: "0.4s", keyTimes: "0;1", from: "11.2583302 13 22.5166605 19.5 11.2583302 26", to: "11.2583302 13 11.2583302 19.5 11.2583302 26", keySplines: "0.2 0 0 1", fill: "freeze" }), h("set", { attributeName: "visibility", begin: "w3ul.end", to: "hidden" })), h("polygon", { id: "w4", points: "11.2583302 26 11.2583302 19.5 11.2583302 13", visibility: "hidden" }, h("set", { attributeName: "visibility", begin: "w3l.end", to: "visible" }), h("animate", { id: "w4l", attributeName: "points", calcMode: "spline", begin: "w3l.end", dur: "0.4s", keyTimes: "0;1", from: "11.2583302 26 11.2583302 19.5 11.2583302 13", to: "11.2583302 26 4.4408921e-15 19.5 11.2583302 13", keySplines: "1 0 0.8 1", fill: "freeze" }), h("animate", { id: "w4ul", attributeName: "points", calcMode: "spline", begin: "w3ul.end", dur: "0.4s", keyTimes: "0;1", from: "11.2583302 26 4.4408921e-15 19.5 11.2583302 13", to: "5.62651 16.25 4.4408921e-15 19.5 11.2583302 13", keySplines: "0.2 0 0 1", fill: "freeze" }), h("set", { attributeName: "visibility", begin: "w4ul.end", to: "hidden" })), h("polygon", { id: "w5", points: "11.2583302 13 2.4062463e-14 19.5 5.6291651 16.25", visibility: "hidden" }, h("set", { attributeName: "visibility", begin: "w4l.end", to: "visible" }), h("animate", { id: "w5l", attributeName: "points", calcMode: "spline", begin: "w4l.end", dur: "0.4s", keyTimes: "0;1", from: "11.2583302 13 2.4062463e-14 19.5 5.6291651 16.25", to: "11.2583302 13 2.4062463e-14 19.5 1.687539e-14 6.5", keySplines: "1 0 0.8 1", fill: "freeze" }), h("animate", { id: "w5ul", attributeName: "points", calcMode: "spline", begin: "w4ul.end", dur: "0.4s", keyTimes: "0;1", from: "11.2583302 13 2.4062463e-14 19.5 1.687539e-14 6.5", to: "11.2583302 13 5.6291651 9.75 1.687539e-14 6.5", keySplines: "0.2 0 0 1", fill: "freeze" }), h("set", { attributeName: "visibility", begin: "w5ul.end", to: "hidden" })), h("polygon", { id: "w6", points: "5.6291651 9.75 11.2583302 13 2.66453526e-15 6.5", visibility: "hidden" }, h("set", { attributeName: "visibility", begin: "w5l.end", to: "visible" }), h("animate", { id: "w6l", attributeName: "points", calcMode: "spline", begin: "w5l.end", dur: "0.4s", keyTimes: "0;1", from: "5.6291651 9.75 11.2583302 13 2.66453526e-15 6.5", to: "11.2583302 0 11.2583302 13 2.66453526e-15 6.5", keySplines: "1 0 0.8 1", fill: "freeze" }), h("animate", { id: "w6ul", attributeName: "points", calcMode: "spline", begin: "w5ul.end", dur: "0.4s", keyTimes: "0;1", from: "11.2583302 0 11.2583302 13 2.66453526e-15 6.5", to: "11.2583302 0 11.2583302 13 11.2583302 6.5", keySplines: "0.2 0 0 1", fill: "freeze" }), h("set", { attributeName: "visibility", begin: "w6ul.end", to: "hidden" }))), h("g", { id: "fill", transform: "translate(4.5, 3)", fill: "#0F8287", "fill-rule": "nonzero" }, h("polygon", { id: "f1", points: "11.2583302 0 11.2583302 6.5 11.2583302 13", visibility: "hidden" }, h("set", { attributeName: "visibility", begin: "w6l.end", to: "visible" }), h("animate", { id: "f1f", attributeName: "points", calcMode: "spline", begin: "w6l.end", dur: "0.4s", keyTimes: "0;1", from: "11.2583302 0 11.2583302 6.5 11.2583302 13", to: "11.2583302 0 22.5166605 6.5 11.2583302 13", keySplines: "1 0 0.8 1", fill: "freeze" }), h("animate", { id: "f1uf", attributeName: "points", calcMode: "spline", begin: "f6f.end + 0.2s", dur: "0.4s", keyTimes: "0;1", from: "11.2583302 0 22.5166605 6.5 11.2583302 13", to: "16.88749535 9.25 22.5166605 6.5 11.2583302 13", keySplines: "0.2 0 0 1", fill: "freeze" }), h("set", { attributeName: "visibility", begin: "f1uf.end", to: "hidden" })), h("polygon", { id: "f2", points: "22.5166605 6.5 16.88749535 10 11.2583302 13", visibility: "hidden" }, h("set", { attributeName: "visibility", begin: "f1f.end", to: "visible" }), h("animate", { id: "f2f", attributeName: "points", calcMode: "spline", begin: "f1f.end", dur: "0.4s", keyTimes: "0;1", from: "22.5166605 6.5 16.88749535 10 11.2583302 13", to: "22.5166605 6.5 22.5166605 19.5 11.2583302 13", keySplines: "1 0 0.8 1", fill: "freeze" }), h("animate", { id: "f2uf", attributeName: "points", calcMode: "spline", begin: "f1uf.end", dur: "0.4s", keyTimes: "0;1", from: "22.5166605 6.5 22.5166605 19.5 11.2583302 13", to: "16.88749535 16.25 22.5166605 19.5 11.2583302 13", keySplines: "0.2 0 0 1", fill: "freeze" }), h("set", { attributeName: "visibility", begin: "f2uf.end", to: "hidden" })), h("polygon", { id: "f3", points: "11.2583302 13 22.5166605 19.5 16.88749535 16.75", visibility: "hidden" }, h("set", { attributeName: "visibility", begin: "f2f.end", to: "visible" }), h("animate", { id: "f3f", attributeName: "points", calcMode: "spline", begin: "f2f.end", dur: "0.4s", keyTimes: "0;1", from: "11.2583302 13 22.5166605 19.5 16.88749535 16.75", to: "11.2583302 13 22.5166605 19.5 11.2583302 26", keySplines: "1 0 0.8 1", fill: "freeze" }), h("animate", { id: "f3uf", attributeName: "points", calcMode: "spline", begin: "f2uf.end", dur: "0.4s", keyTimes: "0;1", from: "11.2583302 13 22.5166605 19.5 11.2583302 26", to: "11.2583302 13 11.2583302 19.5 11.2583302 26", keySplines: "0.2 0 0 1", fill: "freeze" }), h("set", { attributeName: "visibility", begin: "f3uf.end", to: "hidden" })), h("polygon", { id: "f4", points: "11.2583302 26 11.2583302 19.5 11.2583302 13", visibility: "hidden" }, h("set", { attributeName: "visibility", begin: "f3f.end", to: "visible" }), h("animate", { id: "f4f", attributeName: "points", calcMode: "spline", begin: "f3f.end", dur: "0.4s", keyTimes: "0;1", from: "11.2583302 26 11.2583302 19.5 11.2583302 13", to: "11.2583302 26 4.4408921e-15 19.5 11.2583302 13", keySplines: "1 0 0.8 1", fill: "freeze" }), h("animate", { id: "f4uf", attributeName: "points", calcMode: "spline", begin: "f3uf.end", dur: "0.4s", keyTimes: "0;1", from: "11.2583302 26 4.4408921e-15 19.5 11.2583302 13", to: "5.62651 16.25 4.4408921e-15 19.5 11.2583302 13", keySplines: "0.2 0 0 1", fill: "freeze" }), h("set", { attributeName: "visibility", begin: "f4uf.end", to: "hidden" })), h("polygon", { id: "f5", points: "11.2583302 13 2.4062463e-14 19.5 5.6291651 16.25", visibility: "hidden" }, h("set", { attributeName: "visibility", begin: "f4f.end", to: "visible" }), h("animate", { id: "f5f", attributeName: "points", calcMode: "spline", begin: "f4f.end", dur: "0.4s", keyTimes: "0;1", from: "11.2583302 13 2.4062463e-14 19.5 5.6291651 16.25", to: "11.2583302 13 2.4062463e-14 19.5 1.687539e-14 6.5", keySplines: "1 0 0.8 1", fill: "freeze" }), h("animate", { id: "f5uf", attributeName: "points", calcMode: "spline", begin: "f4uf.end", dur: "0.4s", keyTimes: "0;1", from: "11.2583302 13 2.4062463e-14 19.5 1.687539e-14 6.5", to: "11.2583302 13 5.6291651 9.75 1.687539e-14 6.5", keySplines: "0.2 0 0 1", fill: "freeze" }), h("set", { attributeName: "visibility", begin: "f5uf.end", to: "hidden" })), h("polygon", { id: "f6", points: "5.6291651 9.75 11.2583302 13 2.66453526e-15 6.5", visibility: "hidden" }, h("set", { attributeName: "visibility", begin: "f5f.end", to: "visible" }), h("animate", { id: "f6f", attributeName: "points", calcMode: "spline", begin: "f5f.end", dur: "0.4s", keyTimes: "0;1", from: "5.6291651 9.75 11.2583302 13 2.66453526e-15 6.5", to: "11.2583302 0 11.2583302 13 2.66453526e-15 6.5", keySplines: "1 0 0.8 1", fill: "freeze" }), h("animate", { id: "f6uf", attributeName: "points", calcMode: "spline", begin: "f5uf.end", dur: "0.4s", keyTimes: "0;1", from: "11.2583302 0 11.2583302 13 2.66453526e-15 6.5", to: "11.2583302 0 11.2583302 13 11.2583302 6.5", keySplines: "0.2 0 0 1", fill: "freeze" }), h("set", { attributeName: "visibility", begin: "f6uf.end", to: "hidden" }))))));
  }
};
Spinner.style = spinnerCss;
export {
  Spinner as ix_spinner
};
