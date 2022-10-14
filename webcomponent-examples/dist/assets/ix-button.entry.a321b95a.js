import { r as registerInstance, h } from "./index.8dbfa1c9.js";
import { g as getButtonClasses } from "./base-button-7bfb747f.c4407aeb.js";
const buttonCss = ".sc-ix-button-h{display:inline-block;height:2rem}";
const Button = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.variant = "Primary";
    this.outline = false;
    this.invisible = false;
    this.ghost = false;
    this.selected = false;
    this.disabled = false;
    this.type = "button";
  }
  render() {
    return h("button", { type: this.type, class: getButtonClasses(this.variant, this.outline, this.ghost || this.invisible, false, false, this.selected, this.disabled) }, h("slot", null));
  }
};
Button.style = buttonCss;
export {
  Button as ix_button
};
