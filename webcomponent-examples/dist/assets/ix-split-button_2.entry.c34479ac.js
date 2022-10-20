import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from "./index.6533181e.js";
import { g as getButtonClasses } from "./base-button-7bfb747f.c4407aeb.js";
import { c as createPopper } from "./popper-42db9fbd.ae0ce911.js";
const splitButtonCss = ".sc-ix-split-button-h{display:block}";
const SplitButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.buttonClick = createEvent(this, "buttonClick", 7);
    this.variant = "Primary";
    this.outline = false;
    this.invisible = false;
    this.ghost = false;
    this.icon = "";
    this.splitIcon = "context-menu";
    this.disabled = false;
    this.placement = "bottom-start";
    this.toggle = false;
  }
  get splitItems() {
    return Array.from(this.hostElement.querySelectorAll("ix-split-button-item"));
  }
  clickOutside(e) {
    if (!this.hostElement.contains(e.target)) {
      this.toggle = false;
    }
  }
  componentDidLoad() {
    const element = this.hostElement.querySelector(".anchor");
    this.popover = this.hostElement.querySelector("ix-dropdown");
    this.popperInstance = createPopper(element, this.popover, {
      strategy: "fixed",
      placement: this.placement,
      modifiers: [
        {
          name: "offset",
          options: {
            offset: [0, 0]
          }
        },
        {
          name: "flip",
          options: {
            padding: 8
          }
        }
      ]
    });
    window.addEventListener("click", this.clickOutside.bind(this));
  }
  disconnectedCallback() {
    var _a;
    (_a = this.popperInstance) === null || _a === void 0 ? void 0 : _a.destroy();
    window.removeEventListener("click", this.clickOutside.bind(this));
  }
  toggleDropdown() {
    this.toggle = !this.toggle;
  }
  render() {
    return h(Host, { class: "btn-group" }, h("button", { class: getButtonClasses(this.variant, this.outline, this.ghost || this.invisible, !this.label, false, false, this.disabled), onClick: (e) => this.buttonClick.emit(e) }, this.icon ? h("ix-icon", { name: this.icon }) : null, " ", this.label), h("button", { class: Object.assign(Object.assign({}, getButtonClasses(this.variant, this.outline, this.ghost || this.invisible, true, false, false, this.disabled)), {
      anchor: true
    }), onClick: () => this.toggleDropdown() }, h("ix-icon", { name: this.splitIcon }), h("ix-dropdown", { show: this.toggle }, h("slot", null))));
  }
  get hostElement() {
    return getElement(this);
  }
};
SplitButton.style = splitButtonCss;
const splitButtonItemCss = ".sc-ix-split-button-item-h{display:block}";
const SplitButtonItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.itemClick = createEvent(this, "itemClick", 7);
  }
  render() {
    return h("ix-dropdown-item", { icon: this.icon, label: this.label, onClick: (e) => this.itemClick.emit(e) });
  }
  get hostElement() {
    return getElement(this);
  }
};
SplitButtonItem.style = splitButtonItemCss;
export {
  SplitButton as ix_split_button,
  SplitButtonItem as ix_split_button_item
};
