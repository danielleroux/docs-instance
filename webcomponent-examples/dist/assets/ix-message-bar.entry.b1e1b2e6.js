import { r as registerInstance, c as createEvent, h, H as Host } from "./index.8dbfa1c9.js";
import { a as anime } from "./anime.es-185e9087.87a18bcc.js";
const messageBarCss = ".message-container.sc-ix-message-bar{display:flex;flex-direction:row;align-items:flex-start;flex-wrap:nowrap;justify-content:space-between;min-height:3.375rem;margin:0.5rem 0.5rem 0rem 0.5rem;padding:calc(0.75rem - var(--theme-message-bar--border-thickness)) 0.75rem calc(0.75rem - var(--theme-message-bar--border-thickness)) 1rem;border-radius:var(--theme-message-bar--border-radius);background-color:var(--theme-messagebar--background)}.danger.sc-ix-message-bar{border:solid var(--theme-message-bar--border-thickness) var(--theme-color-alarm)}.warning.sc-ix-message-bar{border:solid var(--theme-message-bar--border-thickness) var(--theme-color-warning)}.info.sc-ix-message-bar{border:solid var(--theme-message-bar--border-thickness) var(--theme-color-info)}.message-content.sc-ix-message-bar{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex-grow:1;align-self:center;min-height:1.25rem;padding:0 1rem;font-weight:bold;white-space:normal}ix-icon.sc-ix-message-bar{margin-top:0.25rem}";
const MessageBar = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.closedChange = createEvent(this, "closedChange", 7);
    this.type = "info";
    this.dismissible = true;
  }
  componentWillRender() {
    if (this.type === "danger") {
      this.icon = "error";
      this.color = "color-alarm";
    }
    if (this.type === "info") {
      this.icon = "info";
      this.color = "color-info";
    }
    if (this.type === "warning") {
      this.icon = "warning";
      this.color = "color-warning";
    }
  }
  closeAlert(el) {
    anime({
      targets: el,
      duration: MessageBar.duration,
      opacity: [1, 0],
      easing: "easeOutSine",
      complete: () => {
        el.classList.add("d-none");
      }
    });
    this.closedChange.emit();
  }
  render() {
    return h(Host, null, h("div", { class: { "message-container": true, [this.type]: true }, role: "alert", ref: (el) => this.divElement = el }, h("ix-icon", { color: this.color, name: this.icon }), h("div", { class: "message-content" }, h("slot", null)), this.dismissible ? h("ix-icon-button", { icon: "close", size: "24", ghost: true, onClick: () => {
      this.closeAlert(this.divElement);
    }, "data-testid": "close-btn" }) : ""));
  }
};
MessageBar.duration = 300;
MessageBar.style = messageBarCss;
export {
  MessageBar as ix_message_bar
};
